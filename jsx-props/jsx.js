var React = require('react');
var ReactDOM = require('react-dom');

var PageContent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, {this.props.username}!</h1>
        <p>Welcome to ReactJS!</p>
        <button onClick={this.props.buttonclick}>Click to see message</button>
      </div>
    );
  }
})

var showMessage = function() {
  alert('Here is your message!');
}

ReactDOM.render(
  <PageContent username='Steverino' buttonclick={showMessage} />,
  document.getElementById('react-root')
);
