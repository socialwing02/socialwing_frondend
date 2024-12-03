import React, { useState } from "react";

export default function BlogUpload() {
  const [imageId, setImageId] = useState("");
  const [imageUrl, setImageUrl] = useState(1);

  async function fetchImage() {
    try {
      const response = await fetch(`http://192.168.159.168:5000/get/image/2`);
      if (response.ok) {
        console.log(response);

        const blob = await response.blob();
        const imageObjectURL = URL.createObjectURL(blob);
        setImageUrl(imageObjectURL);
      } else {
        console.error("Image not found");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Image ID"
        value={imageId}
        onChange={(e) => setImageId(e.target.value)}
      />
      <button onClick={fetchImage}>Fetch Image</button>

      {imageUrl && <img src={imageUrl} alt="Fetched" />}
    </div>
  );
}
