function removeCSS() {
  const head = document.head;
  const url = chrome.extension.getURL('css/main.css');
  const link = document.querySelector(`[href="${url}"]`);

  if (link) {
    head.removeChild(link);
  }
}

function addCSS() {
  const head = document.head;
  const url = chrome.extension.getURL('css/main.css');
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  head.appendChild(link);
}

function toggleCSS() {
  chrome.storage.local.get('focusIndicatorEnabled', obj => {
    if (obj.focusIndicatorEnabled) {
      addCSS();
    } else {
      removeCSS();
    }
  });
}

module.exports = toggleCSS;
