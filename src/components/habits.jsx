import React, { Component } from 'react'
import Habit from './habit'

class Habits extends Component {

    render () {
        return (
            <Habit 
                key = {habit.id}
                habit = {habit}
            />
        )
    }
}
export default Habits;