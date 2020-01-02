import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {

  constructor(props) {
    super(props);
    this.state = {die1: 'one', die2: 'one'}
    this.roll = this.roll.bind(this)
  }
  static defaultProps = {
    sides: ["one", "two", "three","four","five","six"]
  }
  roll() {
     //pick two numbers
     const newDie1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)]
     const newDie2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)]
     //set state with new rolls
     this.setState({die1: newDie1, die2: newDie2});
  }

  render () {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick ={this.roll}>Roll Dice</button>
      </div>
    )
  }
}
export default RollDice;
