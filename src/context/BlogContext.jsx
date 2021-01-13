import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BLOG':
            return [ ... state, { id: Math.floor(Math.random()*100), title: `Blog # ${state.length +1}`} ];
        case 'CREATE_BLOG':
            return [...state, {
                id: Math.floor(Math.random()*100),
                title: action.payload.title,
                content: action.payload.content
            }]
        case 'EDIT_BLOG': 
            return state.map((blog) => {
               return blog.id === action.payload.id ? action.payload: blog
            })
        case 'DELETE_BLOG':
           return state.filter((item) => item.id !== action.payload)
        default:
            return state;
    }

}
const deleteBlog = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_BLOG', payload: id })
    }
}
const addBlog = (dispatch) => {
  return  () => {
         dispatch({ type: 'ADD_BLOG' })
    }
    
}
const createBlog = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'CREATE_BLOG', payload: {title, content}})
       if(callback) {
           callback();
       }
    }
}
const editBlog = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'EDIT_BLOG', payload: {id, title, content}})
        if(callback) {
            callback();
        }
    }
}
export const { Context, Provider } = createDataContext(blogReducer, { addBlog, deleteBlog, createBlog, editBlog }, []);