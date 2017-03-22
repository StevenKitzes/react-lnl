var React = require('react');
var ReactDOM = require('react-dom');

var PageContent = React.createClass({
  buttonclick: function() {
    this.setState({ clicks: this.state.clicks + 1 });
  },

  getInitialState: function() {
    return { clicks: 0 }
  },

  render: function() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to ReactJS!  The button has been clicked {this.state.clicks} times!</p>
        <button onClick={this.buttonclick}>Click to increment counter!</button>
        <button onClick={this.resetclicks}>Click to reset counter!</button>
      </div>
    );
  },

  resetclicks: function() {
    this.setState( this.getInitialState() );
  }
});

ReactDOM.render(
  <PageContent />,
  document.getElementById('react-root')
);
