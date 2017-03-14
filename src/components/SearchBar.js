import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const SearchBar = ({onSubmitClick})=>{
    let from,to,date,student;
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth()+1;
    let dd = today.getDate();
    let tomorrow = `${yyyy}-${mm>10?mm:'0'+mm}-${dd>10?dd:'0'+dd}`;
    return(
    <form className="navbar-form navbar-left">
        <div className="input-group">
            <div className="input-group-btn">
                <input type="text" ref={i=>{from = i}} 
                    className="form-control" placeholder="From" />
                    
                <input type="text" ref={i=>{to = i}} 
                    className="form-control" placeholder="To" />
                    
                <input type="text" ref={i=>{date = i}} defaultValue={tomorrow}
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