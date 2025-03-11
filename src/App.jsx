import React, { useState } from "react";
import "./app.css";
import MainInput from "./components/input/input";
import DoItems from "./components/doitems/doitem";

const App = () => {
  let [text, setText] = useState("");
  const handlesubmit = () => {
    SetListItems([...ListItems,text]);
  };
  let [ListItems, SetListItems] = useState([]);
  //list ko ui me show karana hta hai uske lie we use array mapping.loop hta hai jitne items hte hn unko iterate krke display kara deta h .
  const List = ListItems.map((Item) => <DoItems value={Item}/>);
  //normal loop ke andar components do item ka usko dalo {
  
  return (
    <div className="container">
      <div className="header">
        <h1>My To Do List</h1>
      </div>
      <MainInput value={text} setText={setText} />
      <h4>you typed {text}</h4>
      {List}
      <button type="button" className="submit" style={{"display":"block"}}
       onClick={handlesubmit}>
        submit
      </button>
      {/* <DoItems /> */}
    </div>
  );
};
export default App;
