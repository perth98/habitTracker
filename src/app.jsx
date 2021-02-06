import React, { Component } from 'react';
import './app.css';
import Habit from './components/habit';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0}
    ]
  }

  handleIncrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count -1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
  };

  handleDelete = habit => {
    const habits = this.state.habit.filter(item => item.id);
    this.setState({habits});
  };

  render () {
    return <Habit />
  }
}

export default App;
