import React, { useState } from "react";
import "./app.css";
import MainInput from "./components/Input";
import DoItems from "./components/doitems";
const App = () => {
  let [text, setText] = useState("");
  const handledelete = (Item) => {
    SetListItems(ListItems.filter(data=> data!=Item));
  };
  const handlesubmit = () => {
    SetListItems([...ListItems, text]);
  };
  let [ListItems, SetListItems] = useState([]);
  console.log(ListItems);
  const List = ListItems.map((Item) => <DoItems value={Item} handledelete={handledelete} />);
  return (
    <div className="container">
      <div className="header">
        <h1> TO DO LIST </h1>
      </div>
      <MainInput value={text} setText={setText} />
      <h4>you typed {text}</h4>
      {List}
      <button
        type="submit"
        className="submit"
        class="btn btn-primary"
        onClick={handlesubmit}
      >
        Submit
      </button>

    </div>
  );
};
export default App;
