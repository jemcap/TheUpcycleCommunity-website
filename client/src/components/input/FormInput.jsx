import React from "react";

const FormInput = ({ label, type, name, defaultValue, handleChange }) => {
  return (
    <div className="my-5">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        value={defaultValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
