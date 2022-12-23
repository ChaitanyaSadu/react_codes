import { useState } from "react";
import ToDo from "./ToDo";
import Proceed from "./Proceed";
import Review from "./Review";
import Finished from "./Finished";

export default function Header() {
  const [search, setSearch] = useState("");
  const [entry, SetEntry] = useState([]);
  const [proceed, SetProceed] = useState([]);
  const [review, SetReview] = useState([]);
  const [finished, SetFinished] = useState([]);

  const storeinput = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const FirstboxEntry = () => {
    SetEntry((prevVal) => [...prevVal, search]);
    setSearch("");
  };
  // console.log(entry);

  const moveProceed = (i) => {
    SetEntry(entry.filter((item) => item !== i));
    SetProceed([...proceed, i]);
  };
  console.log(proceed);
  // console.log(proceed);
  const moveReview = (i) => {
    SetProceed(proceed.filter((item) => item !== i));
    SetReview([...review, i]);
  };

  const moveFinished = (i) => {
    SetReview(review.filter((item) => item !== i));
    SetFinished([...finished, i]);
  };

  const deleteHandler = (value) => {
    SetProceed(proceed.filter((item) => item !== value));
  };
  const deleteHandler1 = (value) => {
    SetReview(review.filter((item) => item !== value));
    SetEntry([...entry, value]);
  };

  return (
    <div>
      <div className="box">
        <input
          className="input"
          type={"text"}
          value={search}
          onChange={storeinput}
          style={{ height: "30px", width: "350px" }}
          placeholder={"Enter the task here..."}
        ></input>
        &nbsp;&nbsp;
        <button onClick={FirstboxEntry}>Add to the List</button>
      </div>
      <div className="grid">
        <div className="to-do">
          <ToDo>
            <h2>To-Do</h2>
            {entry.map((item, index) => (
              <p key={index}>
                {item}&nbsp;&nbsp;
                <button className="move" onClick={() => moveProceed(item)}>
                  Move
                </button>
              </p>
            ))}
          </ToDo>
        </div>
        <div className="proceed">
          <Proceed>
            <h2>Proceed</h2>
            {proceed.map((item, index) => (
              <p key={index}>
                {item}&nbsp;&nbsp;
                <button className="move" onClick={() => moveReview(item)}>
                  Move
                </button>
                &nbsp;&nbsp;
                <button className="delete" onClick={() => deleteHandler(item)}>
                  Delete
                </button>
              </p>
            ))}
          </Proceed>
        </div>
        <div className="review">
          <Review>
            <h2>Review</h2>
            {review.map((item, index) => (
              <p key={index}>
                {item}&nbsp;&nbsp;
                <button className="move" onClick={() => moveFinished(item)}>
                  Move
                </button>
                &nbsp;&nbsp;
                <button className="delete" onClick={() => deleteHandler1(item)}>
                  Move-back-toDo
                </button>
              </p>
            ))}
          </Review>
        </div>
        <div className="finished">
          <Finished>
            <h2>Finished</h2>
            {finished.map((item, index) => (
              <p key={index}>{item} &#9989;</p>
            ))}
          </Finished>
        </div>
      </div>
    </div>
  );
}
