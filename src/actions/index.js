import {FETCH_USER, CALL_USER} from '../constants'


export const AsyncFetchUsers = async() => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const json = await response.json();
        console.log('AsyncFetchUsers action creator', json );
        return json;
    }
    catch (e) {
        console.log('error', e)
    }
}

export const callUser = () => ({type: CALL_USER})
export const fetchUser = (data) => ({type: FETCH_USER, data})