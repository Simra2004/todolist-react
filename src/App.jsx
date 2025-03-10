import React, { useState } from "react";
import "./app.css";
import MainInput from "./components/input/input";
import DoItems from "./components/doitems/doitem";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>my to do list</h1>
      </div>
      <MainInput/> 
      <DoItems/>
      
    </div>
  );
};
export default App;
