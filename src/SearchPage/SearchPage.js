import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import './SearchPage.css';
import Table from '../Table';

class SearchPage extends Component{
    state = {
        userlists: []
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount(firstname,lastname) {
        fetch('http://localhost:8080/searchUser?firstname='+firstname+'&lastname='+lastname, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({userlists: data})
                console.log(this.state.userlists)
            })
            .catch(console.log)
    }

    handleSubmit(e) {
        this.componentDidMount(this.firstname.value,this.lastname.value);
    }

    handleClear(e){
        this.firstname.value='';
        this.lastname.value='';
    }

    render() {
        return (
            <div>
        <form className="margin-left">
            <div>
            <h3> MANAGE ADMIN USER </h3>
            </div>
            <div className="border">
                <div className="background-border"> USER SEARCH </div>
                <div className="form-wrap">
                First name <input type="text" ref={(input) => this.firstname = input} /> <br/>
                Last name <input type="text" ref={(input) => this.lastname = input} /> <br/>
                </div>
                <div className="button-group">
                <input type="button" value="Search" onClick={this.handleSubmit}/>
                <input type="button" value="Clear" onClick={this.handleClear}/>
                <input type="button" value="AddUser"/>
                </div>

            </div>
        </form>
            <br/>
            <div>
                <h3>ADMIN USER </h3>
            </div>

            <div>
                    <Table data={this.state.userlists}/>
            </div>
            </div>

                )

    }


}

export default SearchPage