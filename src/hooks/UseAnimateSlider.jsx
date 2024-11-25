import React, { useState } from "react";

export default function UseAnimateSlider() {
  const [cardId, setCardId] = useState(null);

  return { cardId, setCardId };
}
