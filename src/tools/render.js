const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function render(component, props, res) {
  const reactEl = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  res.end(`<!DOCTYPE html>${html}`);
};
