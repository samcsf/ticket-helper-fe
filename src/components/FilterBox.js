import React from 'react';

const FilterBox = ({text,filterType,isOn,onCheckChange})=>{
    return (
        <span className="input-group-addon"> 
            {`${text} `}
            <input type="checkbox" checked={isOn} 
            onChange={()=>onCheckChange(filterType)}/>
        </span>
    );
};

export default FilterBox;