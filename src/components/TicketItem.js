import React from 'react';
import ColorLabel from './ColorLabel';

const TicketItem = ({
    train_code,
    start_time,
    interval,
    from_name,
    to_name,
    seat_first_class,
    seat_second_class,
    seat_stand
})=>{
    let getColor = (t) => (t === '无')||(t === '--')?'red':'green';
    return (
        <li className="list-group-item" > 
            <ColorLabel color='orange' text={train_code} />{' '}
            <ColorLabel color='blue' text={start_time} />{' '}
            <ColorLabel color='blue' text={'耗时:'+interval} />{' '}
            <ColorLabel color='aqua' text={from_name} />{'-'}
            <ColorLabel color='aqua' text={to_name} />{' '}
            一等票:{' '}<ColorLabel color={getColor(seat_first_class)} text={seat_first_class} />{' '}
            二等票:{' '}<ColorLabel color={getColor(seat_second_class)} text={seat_second_class} />{' '}
            无座:{' '}<ColorLabel color={getColor(seat_stand)} text={seat_stand} />
        </li>
    );
}

export default TicketItem;