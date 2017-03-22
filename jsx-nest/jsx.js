var React = require('react');
var ReactDOM = require('react-dom');

var TableWithContent = React.createClass({
  render: function() {
    return (
      <table>
        <tbody>
          <tr><td>A table</td><td>It is so cool</td></tr>
          <tr><td>The most creative example</td><td>You have ever seen</td></tr>
        </tbody>
      </table>
    );
  }
})

var PageContent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, demo!</h1>
        <p>Welcome to ReactJS!</p>
        <TableWithContent />
      </div>
    );
  }
})

ReactDOM.render(
  <PageContent />,
  document.getElementById('react-root')
);
