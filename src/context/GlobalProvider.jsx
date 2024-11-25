import React, { createContext } from "react";

const GlobalContext = createContext();

export default function GlobalProvider() {
  return <div>GlobalProvider</div>;
}
