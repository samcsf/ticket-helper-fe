// import mock from '../mock';

const ticketServices = (state={},action)=>{
    console.log(`Reducer ticket-ticketServices called with action ${action.type}`);
    switch(action.type){
        case 'SET_TICKETS':
            return {
                tickets : action.data
            };
        default:
            return state;
    }
};

export default ticketServices;
