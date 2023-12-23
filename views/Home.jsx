// views/home.jsx
const React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.bottles} Bottles of water on the wall</h1>
        <a href={`/${this.props.bottles - 1}`}>Take one down, pass it around</a>
      </div>
    );
  }
}

module.exports = Home;
