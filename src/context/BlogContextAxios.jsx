import createDataContext from './createDataContext';
import api from '../api';

const BlogReducer = (state, actions) => {
    switch (actions.type) {
        case 'FETCH_BLOG':
            return actions.payload
        case 'CREATE_BLOG':
            return [...state, actions.payload]
        case 'DELETE_BLOG': 
            return state.filter((blog) => blog.id !== actions.payload)
        case 'EDIT_BLOG':
            return state.map((blog) => blog.id === actions.payload.id ? actions.payload: blog)
        default:
            return state
    }
}

const fetchBlog = (dispatch) => {
    return async () => {
         const response = await api.get('/blogs');

         //dispatch does not allow to refresh id in the BloglistScreen, so isFocused is defined there
        dispatch({ type: 'FETCH_BLOG', payload: response.data }) 
    }
}

const createBlog = (dispatch) => {
    return async (title, content, callback) => {
        try {
            await api.post(`/blogs`, { title, content });
            dispatch({ type: 'CREATE_BLOG', payload: {title, content}})
            if(callback){
                callback()
            }  
        } catch (error) {
            console.log(error)
        }  
    }
}

const deleteBlog = (dispatch) => {
    return async (id) => {
        try {
            await api.delete(`/blogs/${id}`);
            dispatch({ type: 'DELETE_BLOG', payload: id})
        } catch (error) {
            console.log('========error')  
            console.log(error)  
        }       
    }
}

const editBlog = (dispatch) => {
    return async (id, title, content, callback) => {
        await api.put(`/blogs/${id}`, {title, content})
        dispatch({ type: 'EDIT_BLOG', payload: {id, title, content}})
        if(callback){
            callback()
        }
    }
}


export const { Context, Provider } = createDataContext(BlogReducer, { fetchBlog, createBlog, deleteBlog, editBlog }, []);