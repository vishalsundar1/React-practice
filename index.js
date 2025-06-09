import React from "react";
import { createRoot } from "react-dom/client";

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
