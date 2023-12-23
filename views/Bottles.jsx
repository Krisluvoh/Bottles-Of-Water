// views/bottles.jsx
const React = require('react');

class Bottles extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.bottles} Bottles of water on the wall</h1>
        <a href={`/${this.props.nextBottle}`}>Take one down, pass it around</a>
        <br />
        <a href="/">Start over</a>
      </div>
    );
  }
}

module.exports = Bottles;
