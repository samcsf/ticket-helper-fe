import React from 'react';

const SearchBar = ({keys,onSubmitClick})=>{
    let from,to,date,student;
    return(
    <form className="navbar-form navbar-left">
        <div className="input-group">
            <div className="input-group-btn">
                <input type="text" ref={i=>{from = i}} defaultValue={keys.from}
                    className="form-control" placeholder="From" />
                    
                <input type="text" ref={i=>{to = i}} defaultValue={keys.to}
                    className="form-control" placeholder="To" />
                    
                <input type="text" ref={i=>{date = i}} defaultValue={keys.date}
                    className="form-control" placeholder="Date YYYY-MM-DD" />

                <span className="input-group-addon"> 
                    Student{' '}
                    <input type="checkbox" defaultChecked={keys.isStudent} ref={i=>{student = i}} />
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