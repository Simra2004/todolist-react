import React, { useState } from "react";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>my to do list</h1>
        <div className="main-input">
          <input type="text" />
          {/* icon of plus */} +
        </div>
      </div>
      <div className="body">
        <div className="input-field">
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="text">
            <span>This will br ypur text</span>
          </div>
          <div className="action">$ @</div>
        </div>
      </div>
    </div>
  );
};
export default App;
