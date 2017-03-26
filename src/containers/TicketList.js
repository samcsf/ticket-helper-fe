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
  let onfilters = [];
  let validTickets = state.tickets;
  for (let i of Object.keys(state.filters)){
      if(state.filters[i] === true)
        onfilters.push(i);
  }
  if(onfilters.length > 0)
    for (let i of onfilters){
        validTickets = getFilterItems(validTickets,i)
    }
  return {
    tickets: validTickets
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

function getFilterItems(array,filter){
    switch(filter){
        case filterType.G_ONLY_FILTER:
            return array.filter(i=>i.train_code.substr(0,1)==='G');
        case filterType.EXACT_MATCH_FILTER:

        default : 
            return array;
    }
}   

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketList);