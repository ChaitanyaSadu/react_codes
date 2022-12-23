import { useEffect, useState } from "react";
import "./Project.css";
export default function Project() {
  const [intial, setIntial] = useState([]);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((result) => setIntial(result));
  }, []);
  //   console.log(intial);

  const handleChange = (item) => {
    setUpdate(item);
  };

  const handleBack = () => {
    setUpdate("");
  };
  return (
    <div className="styling">
      {update.length === 0 ? (
        intial.map((item, index) => (
          <div
            className="inside"
            key={index}
            onClick={() => handleChange(item)}
          >
            <h3>{item.category}</h3>
            <img
              src={item.image}
              style={{ height: "100px", width: "100px" }}
              alt=""
            />
            {/* <div>{item.id} </div> */}
            <div>{item.title}</div>
            <div>{item.rating.rate}</div>
            <button>{item.price}</button>
          </div>
        ))
      ) : (
        <div className="inside">
          <h3>{update.category}</h3>
          <img
            src={update.image}
            style={{ height: "100px", width: "100px" }}
            alt=""
          />
          {/* <div>{update.id} </div> */}
          <div>{update.title}</div>
          <div>{update.rating.rate}</div>
          <button>{update.price}</button>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}
