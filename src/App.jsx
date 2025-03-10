import React, { useState } from "react";
import "./app.css";
import MainInput from "./components/input/input";
import DoItems from "./components/doitems/doitem";

const App = () => {
  let [text, setText] = useState("");
  const handlesubmit = () => {
   SetListItems([text]);
  };
  let[ListItems,SetListItems]=useState([]);
  console.log(ListItems);
  return (
    <div className="container">
      <div className="header">
        <h1>my to do list</h1>
      </div>
      <MainInput value={text} setText={setText} />
      <h4>you typed {text}</h4>
      <button type="button" className="submit" onClick={handlesubmit}>
        submit
      </button>
      <DoItems />
    </div>
  );
};
export default App;
