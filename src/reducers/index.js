import { combineReducers } from 'redux';
import OrderReducer from './Order';

const rootReducer = combineReducers({
    orderData: OrderReducer
});

export default rootReducer;