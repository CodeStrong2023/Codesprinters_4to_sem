/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
export const Input = forwardRef(
  ({ label, type, placeholder, ...rest }, ref) => {
    return (
      <div className="my-6 mx-4">
        <label htmlFor={label} className="block text-blue-400 text-xl">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={label}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder={placeholder}
          {...rest} // Spread the rest of the props here
        />
      </div>
    );
  }
);
