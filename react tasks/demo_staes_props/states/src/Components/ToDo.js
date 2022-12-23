// import { useState } from "react";
import "./ToDo.css";

export default function ToDo(props) {
  return (
    <div>
      <div className="border">{props.children}</div>
    </div>
  );
}
