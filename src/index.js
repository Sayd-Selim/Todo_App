import React from "react";
import ReactDOM from "react-dom/client"; // исправлено здесь
import { Home } from "./components/screens/Home/Home";
import "./index.css";
import { Layout } from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);
