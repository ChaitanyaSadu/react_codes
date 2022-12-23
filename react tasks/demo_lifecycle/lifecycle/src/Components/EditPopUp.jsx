import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function EditPopUp(props) {
  const [edit, setEdit] = useState({});
  useEffect(() => {
    setEdit(props.beforeEdit);
  }, [props.beforeEdit]);
  const handleInput = (e) =>
    setEdit({ ...edit, [e.target.name]: e.target.value });
  return (
    <div id="edit_popup_bg">
      <div id="edit_popup_card">
        <input
          type="text"
          placeholder="Enter First Name here..."
          name="firstName"
          style={{ height: "25px", width: "400px" }}
          value={edit.firstName}
          onChange={handleInput}
        />
        &nbsp;
        <input
          type="text"
          placeholder="Enter Last Name here..."
          name="lastName"
          style={{ height: "25px", width: "400px" }}
          value={edit.lastName}
          onChange={handleInput}
        />
        &nbsp; &nbsp;
        <input
          type="number"
          placeholder="Enter your ID Number here..."
          name="ID"
          style={{ height: "25px", width: "400px" }}
          value={edit.ID}
          onChange={handleInput}
        />
        &nbsp; &nbsp;
        <input
          type="number"
          placeholder="Enter your Contact Number here..."
          name="Contact"
          style={{ height: "25px", width: "400px" }}
          value={edit.Contact}
          onChange={handleInput}
        />
        &nbsp;
        <input
          type="text"
          placeholder="Enter your E-mail here..."
          name="Email"
          style={{ height: "25px", width: "400px" }}
          value={edit.Email}
          onChange={handleInput}
        />
        &nbsp; &nbsp;
        <input
          type="text"
          placeholder="Enter your department here..."
          name="Department"
          style={{ height: "25px", width: "400px" }}
          value={edit.Department}
          onChange={handleInput}
        />
        &nbsp; &nbsp;
        <button
          onClick={() => {
            props.handleAfterEdit(edit, props.beforeEdit.index);
            props.handleEditPopUp(false);
          }}
        >
          Submit
        </button>
        <button onClick={() => props.handleEditPopUp(false)}>Cancel</button>
        &nbsp;&nbsp;
      </div>
    </div>
  );
}
