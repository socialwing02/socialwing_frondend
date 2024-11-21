import React from "react";
import DigitalMarketing from "../Home/DigitalMarketing";
import Cards from "../Home/Cards";
import ImageSlider from "../../components/ImageSlider";

export default function Home() {
  return (
    <main>
      <DigitalMarketing />
      <Cards />
      <ImageSlider />
    </main>
  );
}
