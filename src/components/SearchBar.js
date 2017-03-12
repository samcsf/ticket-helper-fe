import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const SearchBar = ({onSubmitClick})=>{
    let from,to,date,student;
    return(
    <form className="navbar-form navbar-left">
        <div className="form-group">
            <input type="text" 
                ref={i=>{from = i}} 
                className="form-control" 
                placeholder="From" />
            <input type="text" 
                ref={i=>{to = i}} 
                className="form-control" 
                placeholder="To" />
            <input type="text" 
                ref={i=>{date = i}} 
                className="form-control" 
                placeholder="Date YYYY-MM-DD" />
            <input type="checkbox" 
                ref={i=>{student = i}} 
                className="form-control" />
        </div>
        <button type="submit" className="btn btn-default" 
            onClick={(e)=>{
                e.preventDefault();
                onSubmitClick(from.value,to.value,date.value,student.checked)}}>Go!</button>
    </form>);
};

export default SearchBar;