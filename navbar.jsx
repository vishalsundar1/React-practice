import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavBar extends Component {


    render(){
        return (
            <React.Fragment>
            <nav id="navbar-example2" className="navbar navbar-style px-3 mb-3">
            <a className="navbar-brand" href="#">eCommerce</a>
            <ul className="nav nav-pills">
            { this.props.isLoggedIn == false? (
                <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">Login</NavLink>
            </li>
            ):""}
            
            {this.props.isLoggedIn == true ? (<li className="nav-item">
                <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
            </li>): ""}
            {this.props.isLoggedIn == true ? (
             <li className="nav-item">
                <NavLink to="/customers" className="nav-link" activeClassName="active">Customers</NavLink>
            </li>): ""}

            {this.props.isLoggedIn == true ? (
             <li className="nav-item">
                <NavLink to="/cart" className="nav-link" activeClassName="active">Shopping Cart</NavLink>
            </li>): ""}

            {this.props.isLoggedIn == true ? (
             <li className="nav-item">
                <a href="/#" className="nav-link" onClick={this.onLogoutClick}> Logout</a>
            </li>): ""}
             
             
             {/* <li className="nav-item">
                <Link to="/" className="nav-link">Login</Link>
            </li>
             <li className="nav-item">
                <Link to="/" className="nav-link">Login</Link>
            </li>
             <li className="nav-item">
                <Link to="/" className="nav-link">Login</Link>
            </li> 
             <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">Second</a>
            </li>
            <li className="nav-item dropdown">
                <a classNameName="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                </ul> 
            </li> */}
            </ul>
            </nav>
            </React.Fragment>
        );
    }

    onLogoutClick = (event)=>{
        event.preventDefault();
        this.props.updateIsLoggedIn(false);
        this.props.navigate("/");  // Redirect to login page
    }
}


