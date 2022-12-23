import React from "react";
import Popup from "reactjs-popup";
import { useState } from "react";

export default function PopUpForm(props) {
  const [inputdata, setInputData] = useState({
    firstName: "",
    lastName: "",
    ID: "",
    Contact: "",
    Email: "",
    Department: "",
  });

  const storeInputData = (e) => {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  };
  console.log(inputdata);
  return (
    <div className="add_popup">
      <Popup
        trigger={
          <button className="add_btn">
            <h4>Add Employee Details here...</h4>
          </button>
        }
        position="bottom"
      >
        <div>
          <input
            type="text"
            placeholder="Enter First Name here..."
            name="firstName"
            style={{ height: "20px", width: "200px" }}
            onChange={storeInputData}
          />
          &nbsp;
          <input
            type="text"
            placeholder="Enter Last Name here..."
            name="lastName"
            style={{ height: "20px", width: "200px" }}
            onChange={storeInputData}
          />
          &nbsp; &nbsp;
          <input
            type="number"
            placeholder="Enter your ID Number here..."
            name="ID"
            style={{ height: "20px", width: "200px" }}
            onChange={storeInputData}
          />
          &nbsp; &nbsp;
          <input
            type="number"
            placeholder="Enter your Contact Number here..."
            name="Contact"
            style={{ height: "20px", width: "210px" }}
            onChange={storeInputData}
          />
          &nbsp;
          <input
            type="text"
            placeholder="Enter your E-mail here..."
            name="Email"
            style={{ height: "20px", width: "200px" }}
            onChange={storeInputData}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            placeholder="Enter your department here..."
            name="Department"
            style={{ height: "20px", width: "200px" }}
            onChange={storeInputData}
          />
          &nbsp; &nbsp;
          <button onClick={(e) => props.dataFromChild(inputdata)}>
            Submit
          </button>
          &nbsp;&nbsp;
        </div>
      </Popup>
    </div>
  );
}
