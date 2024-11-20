import React from "react";

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control ">
      
      <input
        type={type}
        name={name}
        defaultValue={label}
        className={` border-b p-4 ${size}`}
      />
    </div>
  );
};

export default FormInput;
