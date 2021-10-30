import React from "react";

// import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    <span>{label}</span>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
      </label>
    ) : null}
  </div>
);

export default FormInput;
