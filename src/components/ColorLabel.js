import React from 'react';

const ColorLabel = ({color,text})=>{
    let color_map = {
         'blue'  :'label label-primary',
         'green' :'label label-success',
         'orange':'label label-warning',
         'aqua'  :'label label-info',
         'red'   :'label label-danger'
        };
    let cls = color_map[color];
    if(cls === undefined)
        cls = 'label label-default';
    return <span className={cls}>{text}</span>;
}

export default ColorLabel;