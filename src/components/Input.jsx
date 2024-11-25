import React from "react";

export default function Input({ label, placeholder, type = "text", name }) {
  return (
    <div className="inputContainer">
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={placeholder} name={name} />
    </div>
  );
}
