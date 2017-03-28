// import mock from '../mock';
import filterType from '../constant/filterType';
import {combineReducers} from 'redux';
import {formatDate,addDay} from '../util';

function initFilters(filters){
    let initMap = {};
    for (let i of Object.keys(filters))
        initMap[i] = false;
    return initMap;
}

const filters = (state=initFilters(filterType),action)=>{
    let nextState = {...state};
    switch(action.type){
        case 'SET_FILTER':
            nextState[action.filter] = !state[action.filter];
            return nextState;
        default : 
            return state;
    }
}

const defaultDate = formatDate(addDay(new Date(),1),'@yyyy-@mm-@dd');
const keys = (state={from:'广州南',to:'深圳北',date:defaultDate,isStudent:false},action)=>{
    switch(action.type){
        case 'SET_KEYS':
            return {...action.keys}
        default : 
            return state;
    }
}


const ticketServices = (state=[],action)=>{
    console.log(`Reducer ticket-ticketServices called with action ${action.type}`);
    switch(action.type){
        case 'SET_TICKETS':
            return action.data;
        default:
            return state;
    }
};

export default combineReducers({
    tickets : ticketServices,
    filters,
    keys
});
