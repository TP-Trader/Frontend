import React from "react";

const RadioButton = (props) => {
  return (
    <div className="RadioButton" style={{ marginRight:'40px' }}>
      <input
        id={props.id}
        onChange={props.changed}
        value={props.value}
        type="radio"
        checked={props.isSelected}
        name={props.name}
        className="radio-btn-input"
      />
      <label htmlFor={props.id} className="radio-btn-label">{props.label}</label>
    </div>
  );
};

export default RadioButton;
