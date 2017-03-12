import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const List = ({tickets})=>{
    let count = 0;
    return(
        <ul className="list-group">
            {tickets.map(t=>(
                <TicketItem key={count++} trainno={t.train_code} 
                time={t.start_time} take={t.interval} from={t.from_name} to={t.to_name} 
                c1={t.seat_first_class} c2={t.seat_second_class} c3={t.seat_stand} />
            ))}
        </ul>
    );
}

const ColorLabel = (props)=>{
    let color_map = {
         'blue'  :'label label-primary',
         'green' :'label label-success',
         'orange':'label label-warning',
         'aqua'  :'label label-info',
         'red'   :'label label-danger'
        };
    let cls = color_map[props.color];
    if(cls === undefined)
        cls = 'label label-default';
    return <span className={cls}>{props.text}</span>;
}

const TicketItem = (props)=>{
    let getColor = (t) => (t === '无')||(t === '--')?'red':'green';
    return (
        <li className="list-group-item" > 
            <ColorLabel color='blue' text={props.trainno} />{' '}
            <ColorLabel color='blue' text={props.time} />{' '}
            <ColorLabel color='blue' text={'耗时:'+props.take} />{' '}
            <ColorLabel color='aqua' text={props.from} />{'-'}
            <ColorLabel color='aqua' text={props.to} />{' '}
            一等票:{' '}<ColorLabel color={getColor(props.c1)} text={props.c1} />{' '}
            二等票:{' '}<ColorLabel color={getColor(props.c2)} text={props.c2} />{' '}
            无座:{' '}<ColorLabel color={getColor(props.c3)} text={props.c3} />
        </li>
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
)(List);