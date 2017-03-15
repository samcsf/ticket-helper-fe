import React from 'react';
import {formatDate} from '../util';

const SearchBar = ({onSubmitClick})=>{
    let from,to,date,student;
    return(
    <form className="navbar-form navbar-left">
        <div className="input-group">
            <div className="input-group-btn">
                <input type="text" ref={i=>{from = i}} 
                    className="form-control" placeholder="From" />
                    
                <input type="text" ref={i=>{to = i}} 
                    className="form-control" placeholder="To" />
                    
                <input type="text" ref={i=>{date = i}} defaultValue={formatDate(new Date(),'@yyyy-@mm-@dd')}
                    className="form-control" placeholder="Date YYYY-MM-DD" />

                <span className="input-group-addon"> 
                    Student{' '}
                    <input type="checkbox" ref={i=>{student = i}} />
                </span>
                
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-default" 
                        onClick={(e)=>{e.preventDefault();
                            onSubmitClick(from.value,to.value,date.value,student.checked)}}>Go!
                    </button>
                </span>
            </div>
        </div>
    </form>);
};

export default SearchBar;