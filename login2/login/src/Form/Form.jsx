import React from 'react';

export class Form extends React.Component {
    constructor(props){
        super (props);
            this.state = {
                username: "",
                password: "",
            }
        
    }
    _onUserName =()=>{
        this.setState({
            username: document.getElementById("username").value,
        }) 
    }
    _onPassword =()=>{
        this.setState({
            password: document.getElementById("password").value,
        }) 
    }

    _onAlert=()=>{
        alert(`Username: ${this.state.username}, password:${this.state.password}`)
    }

    _onReset =()=>{
        this.setState({
            username: "",
            password: ""
        });
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }


    
    render() {
        
        console.log(this.state.password)
        return (
            <div>
            <h1>Login</h1>
            
                
                <input type="text" id="username" onChange={this._onUserName} placeholder="username"></input>
                
                <input type="text" id="password" onChange={this._onPassword} placeholder='password'></input>
                <br/>
                <button onClick={this._onAlert} className="login">Login</button>
                <br/>
                <button onClick={this._onReset} className="reset">reset</button>
            
        </div>
        )
    }
}