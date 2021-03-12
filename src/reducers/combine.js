import addReducer from './AddOrRemove';
import changePoints from './points';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    add: addReducer,
    myPoints: changePoints,
})
export default allReducers