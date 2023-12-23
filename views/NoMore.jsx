// views/no-more.jsx
const React = require('react');

class NoMore extends React.Component {
  render() {
    return (
      <div>
        <p>No more bottles, start over!</p>
        <a href="/">Start over</a>
      </div>
    );
  }
}

module.exports = NoMore;
