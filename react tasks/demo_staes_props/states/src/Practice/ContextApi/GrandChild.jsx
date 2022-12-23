import React from "react";
import { useContext } from "react";
import { MyContext } from "./GrandParent";

function GrandChild() {
  const MyContextFromGrandParent = useContext(MyContext);
  return <h1>{MyContextFromGrandParent}</h1>;
}

export default GrandChild;
