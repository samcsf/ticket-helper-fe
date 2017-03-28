import React from 'react';
import {connect} from 'react-redux';
import TicketItem from '../components/TicketItem';
import filterType from '../constant/filterType';

const TicketList = ({tickets})=>{
    let count = 0;
    return(
        <ul className="list-group">
            {tickets===undefined?'':tickets.map(t=>(
                <TicketItem key={count++} {...t} />
            ))}
        </ul>
    );
}

const mapStateToProps = state => {
  return {
    tickets: getValidTickets(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

function getValidTickets(state){
  let onfilters = [];
  let validTickets = state.tickets;
  for (let i of Object.keys(state.filters)){
      if(state.filters[i] === true)
        onfilters.push(i);
  }
  if(onfilters.length > 0)
    for (let i of onfilters){
        validTickets = getFilterItems(state,validTickets,i)
    }
  return validTickets;
}

function getFilterItems(state,array,filter){
    switch(filter){
        case filterType.G_ONLY_FILTER:
            console.log('> G_ONLY_FILTER')
            return array.filter(i=>i.train_code.substr(0,1)==='G');
        case filterType.EXACT_MATCH_FILTER:
            console.log('> EXACT_MATCH_FILTER')
            return array.filter(i=>
                (i.from_station===state.keys.from)&&
                (i.to_station===state.keys.to)
            );
        case filterType.IN_STORE_FILTER:
            console.log('> IN_STORE_FILTER')
            return array.filter(i=>{
                function isValid(t){return !((t === '无')||(t === '--'))}
                return isValid(i.seat_first_class)
                        ||isValid(i.seat_second_class)
                        ||isValid(i.seat_stand);
            });
        default : 
            return array;
    }
}   

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketList);