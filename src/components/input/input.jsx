import "./input.css";
const Input = (props) => {
  return (
    <div className="main-input">
      <input
        type="text"
        value={props.value}
        onChange={(e) => {
          console.log(e.target.value);
          props.setText(e.target.value) //type smthin in input field give event in return , extract  text frm target 
        }}
      />
    </div>
  );
};
export default Input;
