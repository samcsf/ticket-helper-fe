import React from 'react';
import {connect} from 'react-redux';
import {toggleFilter} from '../actions';
import FilterBox from '../components/FilterBox';
import filterType from '../constant/filterType';

const FilterBar = ({filters,onCheckChange})=>{
    return (<div>
        <FilterBox text='ExactMatch' 
            filterType={filterType.EXACT_MATCH_FILTER}
            isOn={filters[filterType.EXACT_MATCH_FILTER]} 
            onCheckChange={onCheckChange} />
        <FilterBox text='InStore' 
            filterType={filterType.IN_STORE_FILTER}
            isOn={filters[filterType.IN_STORE_FILTER]} 
            onCheckChange={onCheckChange} />
        <FilterBox text='G Only' 
            filterType={filterType.G_ONLY_FILTER}
            isOn={filters[filterType.G_ONLY_FILTER]} 
            onCheckChange={onCheckChange} />
    </div>);
};

// export default FilterBar;

//Connect the state and handlers    
const mapStateToProps = state => {
console.log(state);
  return {
      filters : state.filters
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckChange:toggleFilter(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
