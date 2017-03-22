var React = require('react');
var ReactDOM = require('react-dom');

var originals = [1, 4, 9, 16, 25];

var PageContent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Enjoy some square roots!</p>
        <ul>
          <li>Original numbers:</li>
            <ul>{originals.map(function(item) { return ( <li>{item}</li> ); })}</ul>
        </ul>
        <ul>
          <li>Square roots:</li>
            <ul>{originals.map(function(item) { return ( <li>{Math.sqrt(item)}</li> ); })}</ul>
        </ul>
      </div>
    );
  }
})

ReactDOM.render(
  <PageContent />,
  document.getElementById('react-root')
);
