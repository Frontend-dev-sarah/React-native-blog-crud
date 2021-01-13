import React, { createContext, useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context = createContext();


    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        //actions  === { addBlog: (dispatch) => { return () => {..... }}}, actions is an obj contains action keys
        //here we should get the return action () => {}, to link to the value
        let combinedActions  = {};
        for (let key in actions) {
            //actions[key](dispatch) will return the action we need to wrap in value
            combinedActions[key] = actions[key](dispatch);
        }
        const data = {
            state: state,
            actions: combinedActions
        }
        return (
            <Context.Provider value = {data}>
                {children}
            </Context.Provider>
        );
    }

    return { Context, Provider };

};