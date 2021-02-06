import React, { Component } from "react";

class Habit extends Component {
  handleIncrement = (habit) => {
    // this.props.
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button
          class="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button class="habit-button habit-decrease">
          <i className="fas fa-minus-square"></i>
        </button>
        <button class="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
        <button>test33</button>
      </li>
    );
  }
}

export default Habit;
