import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { NavBar } from "./navbar";
import NavBarWrapper from "./navBarWrapper"; // 👈 import the wrapper
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Dashboard from "./dashboard";
import Login from "./Login";
import NoMatchPage from "./NoMatchPage";

// ✅ LoginWrapper outside the class
function LoginWrapper(props) {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  updateIsLoggedIn = (status) => {
    this.setState({ isLoggedIn: status });
  };

  render() {
    return (
      <BrowserRouter>
        <NavBarWrapper  isLoggedIn={this.state.isLoggedIn} updateIsLoggedIn={this.updateIsLoggedIn} />
        
        <div className="container-fluid">
          <Routes>
            <Route
              path="/"
              element={<LoginWrapper updateIsLoggedIn={this.updateIsLoggedIn} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<CustomersList />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
