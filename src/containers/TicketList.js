import React from 'react';
import {connect} from 'react-redux';
import TicketItem from '../components/TicketItem';

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
    tickets: state.tickets
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketList);