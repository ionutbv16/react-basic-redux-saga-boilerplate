
import {FETCH_USER} from '../constants'


export default (state = [], action={}) => {
    
    switch (action.type) {
        case FETCH_USER:
            console.log ('reducer', action)
            return action.data
    
    
    default:
    return state
        }
}