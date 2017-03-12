import React, { Component } from 'react';
import request from 'superagent';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header"> 
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">STickey</a>
                    </div>    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">链接A <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">链接B</a></li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多 <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                        </li>
                    </ul>
                    <SearchBar getTickets={getTickets} update={this.props.update}/>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    </div>
            </nav>
        );
    }
}

function getTickets(from,to){
    console.log(`From ${from} To ${to}`);
    request
    .get('http://localhost:8809')
    .query({f:from,t:to,d:'2017-03-18',s:false})
    .end((err, res)=>{
        this.update(res.body.data);
    });
}


export default NavBar;