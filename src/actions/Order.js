import axios from 'axios';
import { GET_DATA} from './types';

export const loadData = () => {
    console.log('runnnn')
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:4000/orders');

            console.log('res', res.data)

            dispatch({
                type: GET_DATA,
                payload: res.data
            });
        } catch (error) {
            console.log('error', error)
        }
    }
}