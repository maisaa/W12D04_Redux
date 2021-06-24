const initialState = {
    articles:[],
}

const articlesReducers = (state = initialState, {type, payload}) =>{
    switch (type) {
        case 'SET_ARTICLES':
            break;
        case 'ADD_ARTICLE':
        
            break; 
        case 'UPDATE_ARTICLE':
            break;
        
        case 'DELETE_ARTICLE':
            break;  
        
        default:
            return state;
    }
}

export default articlesReducers;

//Actions
export const setArticles = (articles)=>{
    return { type:'SET_ARTICLES', payload: articles};
}
export const createNewArticle = (newArticle)=>{
    return { type:'ADD_ARTICLE', payload: newArticle};
}
export const updateArticle = (article)=>{
    return { type:'UPDATE_ARTICLES', payload: article};
}
export const deleteArticle = (article)=>{
    return { type:'DELETE_ARTICLES', payload: article};
}