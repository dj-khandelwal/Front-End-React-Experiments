import React from 'react';
import './stylesheet.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: this.getCurrentDate()};
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    getCurrentDate() {
      let new_date = new Date();
      new_date.setHours(new_date.getHours() + parseInt(this.props.offset));
      return new_date;
    }
    tick() {
        this.setState({
         date: this.getCurrentDate()
        });
       }
       
       render() {
        return (
         <div id = "current-time">
          <h5>Current time is {this.state.date.toLocaleTimeString()}</h5>
         </div>
        );
        }
}

export {Clock};