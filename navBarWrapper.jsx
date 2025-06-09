import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./navbar"; // ✅ Make sure it's a named import

export default function NavBarWrapper(props) {
  const navigate = useNavigate();
  return <NavBar {...props} navigate={navigate} />;
}
