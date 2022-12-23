import { useState, useEffect } from "react";
import "./Hook1.css";

export default function Hooks1() {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  const clickHandler = (item) => {
    console.log(item);
    setDetails([item]);
  };
  const backHandler = () => {
    setDetails("");
  };
  console.log(data);
  return (
    <div id="Main-Ui">
      {details.length === 0
        ? data.map((item, index) => {
            return (
              <div className="sub-Ui" key={index}>
                <img
                  src={item.image}
                  style={{ width: "150px", height: "150px" }}
                />
                <h5>{item.title}</h5>
                <p>${item.price}</p>
                <button
                  className="btn_Click"
                  onClick={() => clickHandler(item)}
                >
                  Click
                </button>
              </div>
            );
          })
        : details.map((item, index) => {
            return (
              <div className="sub-Ui" key={index}>
                <img
                  className="image-Ui"
                  src={item.image}
                  style={{ width: "150px", height: "150px" }}
                />
                <h5>{item.title}</h5>
                <p>${item.price}</p>
                <button onClick={backHandler} className="btn_Click">
                  &#8678;
                </button>
              </div>
            );
          })}
    </div>
  );
}
