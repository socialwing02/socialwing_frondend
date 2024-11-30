import React from "react";

export default function Input({
  label,
  placeholder = "Enter your text",
  type = "text",
  name,
  required = false,
  onChange,
  styleBlack,
}) {
  return (
    <div
      className="inputContainer"
      style={{ color: styleBlack ? "grey" : undefined }}
    >
      <label htmlFor={name} style={{ color: styleBlack ? "white" : undefined }}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required ? true : false}
        onChange={onChange}
        style={{
          backgroundColor: styleBlack ? "#292828" : undefined,
          color: styleBlack ? "white" : undefined,
        }}
      />
    </div>
  );
}
