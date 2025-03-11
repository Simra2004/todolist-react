import "./input.css";
const Input = (props) => {
  return (
    <div className="main-input">
      <input
        type="text"
        className="text"
        value={props.value}
        onChange={(e) => {
          console.log(e.target.value);
          props.setText(e.target.value);
        }}
      />
    </div>
  );
};
export default Input;
