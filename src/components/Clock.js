import React, { Component } from "react";
import moment from "moment";
import "moment-timezone";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      currentTime: moment(),
    };
    console.log("lifecycle 1");
  }

  updateClock() {
    this.setState({ currentTime: moment() });
  }

  componentDidMount() {
    console.log("lifecycle 3");
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  componentWillUnmount() {
    console.log("lifecycle 4");
    clearInterval(this.setTimer);
  }

  render() {
    // console.log("lifecycle 2");
    const { currentTime } = this.state;
    const { city } = this.props;
    const { timeZone } = this.props;
    return (
      <>
        <div className="zone">
          <h2 className="city">{city}</h2>
          <div className="date">
            {currentTime.tz(timeZone).format("dddd ll")}
          </div>
          <div className="clock">
            <div className="clock__section">
              {currentTime.tz(timeZone).format("HH")}
            </div>
            <div className="clock__divider">:</div>
            <div className="clock__section">
              {currentTime.tz(timeZone).format("mm")}
            </div>
            <div className="clock__divider">:</div>
            <div className="clock__section">
              {currentTime.tz(timeZone).format("ss")}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
