const getStyleNode = require('./get-style-node.js');

function removeCSS() {
  const head = document.head;
  const styleNodes = document.querySelectorAll('[data-ref="focus-indicator"]');

  styleNodes.forEach(styleNode => {
    if (styleNode) {
      head.removeChild(styleNode);
    }
  });
}

function addCSS(options) {
  const head = document.head;
  const styleNode = getStyleNode(options);

  head.appendChild(styleNode);
}

function toggleCSS() {
  chrome.storage.local.get({
    enabled: true,
    color: '#50e3c2'
  }, options => {
    if (options.enabled) {
      removeCSS();
      addCSS(options);
    } else {
      removeCSS();
    }
  });
}

module.exports = toggleCSS;
