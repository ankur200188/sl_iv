import React, { Component } from 'react';
import SelectEmployee from './SelectEmployee/SelectEmployee';
import './App.scss';

class App extends Component {

    constructor(){
        super();
        this.state = {
            "employeeModal": false
        };
    }

    sendMail(){
        this.setState({
            "employeeModal": true
        });
    }

    handler(cb){
        console.log(123);
        cb(this);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div><button className="send-mail" onClick={this.sendMail.bind(this)}>Send Email</button></div>
                    {this.state.employeeModal &&
                        <SelectEmployee handler={this.handler.bind(this)}/>
                    }
                </div>
            </div>
        )
    }
}

export default App;