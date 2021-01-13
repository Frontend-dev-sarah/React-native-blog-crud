import React, { createContext, useReducer } from 'react';


//context is just moving data from app, not a data management
const BlogContext = createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [...state, {title: action.payload}];
        default:
            return state;
    }
}


export const BlogProvider = ({children}) => {

    const [state, dispatch ] = useReducer(blogReducer, []); 
    const addBlog = () => {
        dispatch ({type: 'ADD_BLOG', payload: `Blog # ${state.length +1}`} )
    }


    const data = {
        blogs: state,
        addBlog: addBlog
    }

    return <BlogContext.Provider value={data}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;