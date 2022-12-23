import React, { Component } from "react";

class Body1 extends Component {
  constructor(props) {
    super(props);
    //super keyword will inherit the parents method here
    this.state = {
      //defining state here
      data: props.greet, //assigning props data into state properties
      // data1:props.array
    };
    console.log(this.state.data);
  }

  // static getDerviedStateFromProps(props,state){
  //     console.log('hello from getDerviedStateFromProps');
  //     this.setState({data:props.toUppercase()})
  // }
  static getDerviedStateFromProps(props, state) {
    console.log("hello from getDerviedStateFromProps");
    this.setState({ data: props.toUppercase() });
  }
  render() {
    console.log(this.state.data);
    return <div>hi hello</div>;
  }
}
export default Body1;
