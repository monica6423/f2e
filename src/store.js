import { createStore, applyMiddleWare} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleWare(thunk));

export default store;