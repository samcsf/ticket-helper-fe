import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar';
import FilterBar from './FilterBar';
import {loadTickets} from '../actions';

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
                        <table>
                        <tbody>
                        <tr><td>
                            <SearchBar onSubmitClick={this.props.onSubmitClick}/>
                        </td></tr>
                        <tr><td>
                            <FilterBar />
                        </td></tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
            </nav>
        );
    }
}

//Connect the state and handlers    
const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick:loadTickets(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);