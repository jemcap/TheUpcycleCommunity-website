import React from "react";

const FormInput = ({ label, type, name, defaultValue }) => {
  return (
    <div class="my-5">
      <label
        class="block text-gray-700 text-sm font-bold mb-2 capitalize"
        for={name}
      >
        {label}
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
