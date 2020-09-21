import { GET_DATA } from '../actions/types'

const initialState = {
    orderData: []
};

export default function OrderReducer(state = initialState, action) {
    const { type, payload} = action;

    switch(type) {
        case GET_DATA: 
            return {
                ...state,
                orderData: payload
            };
        default:
            return state;
    }
}