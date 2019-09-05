import React, { Component } from "react";

const info = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      info
    };
  }
  render() {
    const data = this.state.info.map(item => <li>{item}</li>);
    return (
      <ul className="info">
        <li>{data}</li>
      </ul>
    );
  }
}
export default Footer;
