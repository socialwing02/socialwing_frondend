import React from "react";
import Input from "./Input";

export default function BlogUpload() {
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      fileUpload(file);
    }
  }

  async function fileUpload(file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://192.168.159.168:5000/upload/image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
    </div>
  );
}
