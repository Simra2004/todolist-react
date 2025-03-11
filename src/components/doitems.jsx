import React from "react";
import "./doitem.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const doitem = (props) => {
  return (
    <div className="Item-container">
      <span>{props.value}</span>
      <div className="action">
        <FaEdit />,<MdDelete onClick={()=>props.handledelete(props.value)}/>
      </div>
    </div>
  );
};
export default doitem;
