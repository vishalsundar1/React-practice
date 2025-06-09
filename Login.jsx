import React, { Component } from "react";


export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {email:"", password: "", message:null};
    }
    
    render(){
        return(
            <div className="login-container">
            <div className="login-box">
            <h4 className="m-1 p-2 border-bottom"> Login </h4>
            
            {/* Email start  */}
            {/* we use onchange event handler to implement two way binding in react */}
            <div className="form-group form-row">
                <label className= "col-lg-4">Email: </label>
                <input type="text" className="form-control" 
                placeholder="Enter your email"
                value={this.state.email}
                onChange={(event) => {this.setState({email: event.target.value})}}
                />
            </div>
            {/* Email ends  */}
            <div className="form-group form-row">
                <label className= "col-lg-4">Password: </label>
                <input type="password" className="form-control"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={(event) => {this.setState({password: event.target.value})}}
                />
            </div>
            {/* Password End  */}

            <div className="text-end p-2">
                <button className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
            </div>
             {/* Message Area */}
                <div className="text-center">{this.state.message}</div>
            </div>
            </div>
        );
    }

    onLoginClick = async () => {
        console.log(this.state);

        var response = await fetch(`http://localhost:8000/users?email=${this.state.email}&password=${this.state.password}`, {method:"GET"});
        var body = await response.json() 
        console.log(body)
        if(body.length > 0){
            this.setState({
                   message: <span className="text-success">Logged in Successfully!</span>            
        });
        
        this.props.updateIsLoggedIn(true);

         // ✅ Navigate to dashboard
            this.props.navigate("/dashboard");
    }
        else{
            this.setState({
            message: <span className="text-danger">Invalid Login details!</span>
            });
        };

    //     if(this.state.email == "admin@test.com" && this.state.password == "admin@123"){
    //         //show success message
    //         this.setState({
    //             message: <span className="text-success">Logged in Successfully!</span>
    //         });
    // }
    // else{
    //     this.setState({
    //         message: <span className="text-danger">Invalid Login details!</span>
    //     });
    }
    }  
