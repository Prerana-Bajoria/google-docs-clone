import React, { Component } from "react";
import "./Page1.css";

class Page1 extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }
  render() {
    return (
      <>
        <div class="page1">
          <textarea
            value={this.state.textAreaValue}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}
export default Page1;
