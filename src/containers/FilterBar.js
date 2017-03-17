import React from 'react';
// import {connect} from 'react-redux';
import FilterBox from '../components/FilterBox';
import {EXACT_MATCH_FILTER,IN_STORE_FILTER,G_ONLY_FILTER} from '../constant/filterType'

const FilterBar = ({filters,onCheckChange})=>{
    return (<div>
        <FilterBox text='ExactMatch' 
            filterType={EXACT_MATCH_FILTER}
            isOn={filters[EXACT_MATCH_FILTER]} 
            onCheckChange={onCheckChange} />
        <FilterBox text='InStore' 
            filterType={IN_STORE_FILTER}
            isOn={filters[IN_STORE_FILTER]} 
            onCheckChange={onCheckChange} />
        <FilterBox text='G Only' 
            filterType={G_ONLY_FILTER}
            isOn={filters[G_ONLY_FILTER]} 
            onCheckChange={onCheckChange} />
    </div>);
};

export default FilterBar;

//Connect the state and handlers    
// const mapStateToProps = state => {
//   return {}
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // onCheckChange:
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FilterBar);
