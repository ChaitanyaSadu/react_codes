import React from "react";
import { createContext } from "react";
import Parent from "./Parent";

export const MyContext = createContext();
function GrandParent() {
  return (
    <MyContext.Provider value="Hello World!!!">
      <Parent />
    </MyContext.Provider>
  );
}

export default GrandParent;
