import axios from 'axios';
import { GET_DATA} from './types';

export const loadData = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:4000/orders');

            dispatch({
                type: GET_DATA,
                payload: res.data
            });
        } catch (error) {
            console.log('error', error)
        }
    }
}