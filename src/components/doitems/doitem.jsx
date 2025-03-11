import React from "react";
const doitem = (props) => {
  // console.log(" herre are the props " + props.value)
  return (
    <div className="body">
      <div className="input-field">
        <div className="checkbox">
          <input type="checkbox" />
        </div>
        <div className="text">
          <span>{props.value}</span>
        </div>
        <div className="action">$ @</div>
      </div>
    </div>
  );
};
export default doitem;