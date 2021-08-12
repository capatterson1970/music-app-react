import React, { Component } from 'react'

import{ AppBar}from '@material-ui/core/'
import ToolBar from '@material-ui/core/Toolbar'
import auth from '../auth'

import "./navBar.css"

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            loggedIn: false,
            LogButton: "Login",
            loginUsername: <input placeholder="username"></input>,
            loginPassword: <input placeholder="password"></input>
        }
    }

    handleClick = () => {

        if(this.state.loggedIn){
            this.setState({loginUsername:<input placeholder="username"></input>});
            this.setState({loginPassword:<input placeholder="password"></input>});
            this.setState({loggedIn: false});
            this.setState({LogButton: "Login"});
            auth.login(()=>{this.props.history.push('/')})
     
        } else {
            this.setState({loggedIn: true});
            this.setState({LogButton: "Logout"});
            this.setState({loginUsername:""});
            this.setState({loginPassword:""});
            auth.login(()=>{this.props.history.push('/app')})
        }
    }

 


    render(){
        
        return(

            // <div className="Navbar">
              
                <AppBar position="static" className="Navbar">
                    <ToolBar className="ToolBar">
                        <div>The Music App</div>
                        <div>{this.state.loginUsername}</div>
                        <div>{this.state.loginPassword}</div>
                        <button onClick={this.handleClick}>{this.state.LogButton}</button>
                    </ToolBar>
                </AppBar>
            
        )
    }

}

export default Navbar