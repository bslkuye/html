import React from "react";

export default class ClassClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <hi>Hello World!</hi>
        <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}
