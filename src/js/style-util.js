const FOCUS_INDICATOR = require('./constant.js');

function getStyleContent(options) {
  return `
    @keyframes outline-pulse {
      from {
        outline-color:  ${options.color};
        outline-offset: -${options.width};
      }

      90% {
        outline-color: transparent;
        outline-offset: -1px;
      }

      to {
        outline-color: ${options.color};
        outline-offset: 0;
      }
    }

    :focus {
      outline: ${options.width} solid ${options.color} !important;
      outline-offset: 0 !important;
      animation: outline-pulse 4s;
    }
  `;
}

function getStyleNode(options) {
  const styleNode = document.createElement('style');
  styleNode.setAttribute('data-ref', 'focus-indicator');
  styleNode.innerHTML = getStyleContent(options);
  return styleNode;
}

function removeStyle() {
  const head = document.head;
  const styleNodes = document.querySelectorAll('[data-ref="focus-indicator"]');

  styleNodes.forEach(styleNode => {
    if (styleNode) {
      head.removeChild(styleNode);
    }
  });
}

function addStyle(options) {
  const head = document.head;
  const styleNode = getStyleNode(options);

  head.appendChild(styleNode);
}

function controlStyle() {
  chrome.storage.local.get({
    enabled: FOCUS_INDICATOR.ENABLED,
    color: FOCUS_INDICATOR.COLOR,
    width: FOCUS_INDICATOR.WIDTH
  }, options => {
    if (options.enabled) {
      removeStyle();
      addStyle(options);
    } else {
      removeStyle();
    }
  });
}

module.exports = {
  controlStyle
};
