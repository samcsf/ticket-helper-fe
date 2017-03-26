import request from 'superagent';

const setTickets = data =>({
    type : 'SET_TICKETS',
    data
});

export const loadTickets = dispatch=> (from,to,date,isStudent)=>{
    console.log(`from ${from} to ${to} date ${date} isStudent ${isStudent}`);
    request
    .get('http://localhost:8809/query-ticket')
    .query({f:from,t:to,d:date,s:isStudent})
    .end((err, res)=>{
        dispatch(setTickets(res.body.data));
    });
};

export const toggleFilter = dispatch => filter =>{
    dispatch({
        type: 'SET_FILTER',
        filter 
    });
};
