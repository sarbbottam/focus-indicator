function getStyleContent(options) {
  return `
    @keyframes outline-pulse {
      from {
        outline-color:  ${options.color};
        outline-offset: -2px;
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

module.exports = getStyleNode;
