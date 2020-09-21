import axios from 'axios';
import { GET_DATA} from './types';

export const loadData = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:4000/orders');

            console.log('res', res)

            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        } catch (error) {
            console.log('error', error)
        }
    }
}