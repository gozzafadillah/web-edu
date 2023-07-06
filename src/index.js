import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style/index.css";
import RouteConfig from "./routes/RouteConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteConfig />
  </React.StrictMode>
);
