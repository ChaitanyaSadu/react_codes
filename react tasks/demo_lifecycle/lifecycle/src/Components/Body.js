import React, { Component } from "react";
import "./Body.css";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div id="main_div">
        {this.state.data.map((item) => (
          <div className="product_card">
            <img
              src={item.image}
              className="image"
              style={{ height: "150px", width: "150px" }}
            />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Body;

