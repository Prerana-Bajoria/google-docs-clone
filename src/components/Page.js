import React, { Component } from "react";
import "./Page.css";

class Page extends Component {
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
        <div class="page">
          <textarea
            class="paget"
            placeholder="Type your text here"
            value={this.state.textAreaValue}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}
export default Page;
