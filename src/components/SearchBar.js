import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.update = this.update.bind(this);
    }

    submit(e){
        e.preventDefault();
        this.props.getTickets.call(this,this.fromText.value,this.toText.value);
    }

    update(tickets){
        this.props.update(tickets);
    }
    
    render(){
        return(
            <form className="navbar-form navbar-left">
                <div className="form-group">
                    <input type="text" 
                        ref={i=>{this.fromText = i}} 
                        className="form-control" 
                        placeholder="From" />
                    <input type="text" 
                        ref={i=>{this.toText = i}} 
                        className="form-control" 
                        placeholder="To" />
                </div>
            <button type="submit" className="btn btn-default" 
                onClick={this.submit}>Go!</button>
            </form>
        );
    }
};

export default SearchBar;