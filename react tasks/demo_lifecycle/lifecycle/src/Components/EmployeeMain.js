import "./EmployeeMain.css";
import PopUpForm from "./PopUpForm";
import { useState } from "react";
import Table from "../Table";
import EditPopUp from "./EditPopUp";

export default function EmployeeMain() {
  const [add, setAdd] = useState([]);
  const [editPopUp, setEditPopUp] = useState(false);
  const [beforeEdit, setBeforeEdit] = useState();    

  const deleteHandler = (value) => {
    setAdd(add.filter((item) => item !== value));
  };

  return (
    <div>
      <div className="root">
        <h1 className="header">Employee Details</h1>
        <PopUpForm dataFromChild={(d) => setAdd([...add, d])} />
        <Table
          add={add}
          deleteHandler={deleteHandler}
          handleEditPopUp={(s, item, index) => {
            setEditPopUp(s);
            setBeforeEdit({ item: item, index: index });
          }}
        />
        {editPopUp ? (
          <EditPopUp
            beforeEdit={beforeEdit}
            handleEditPopUp={(s) => setEditPopUp(s)}
            handleAfterEdit={(data, i) =>
              add.map((item, index) => {
                if (index === i) {
                  add[index] = data;
                }
                return null;
              })
            }
          />
        ) : null}
      </div>
    </div>
  );
}
