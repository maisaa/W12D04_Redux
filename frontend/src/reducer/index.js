import { combineReducers, createStore} from 'redux';

//import reducers
import loginReducers from './login';
import articlesReducers from './article';


const reducers = combineReducers({
    loginReducers,
    articlesReducers,
});


const store = createStore(reducers);

export default store;