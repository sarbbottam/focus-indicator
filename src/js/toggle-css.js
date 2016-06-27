function removeCSS() {
  const head = document.head;
  const url = chrome.extension.getURL('css/main.css');
  const links = document.querySelectorAll(`[href="${url}"]`);

  links.forEach(link => {
    if (link) {
      head.removeChild(link);
    }
  });
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
  chrome.storage.local.get({
    enabled: true
  }, options => {
    if (options.enabled) {
      addCSS();
    } else {
      removeCSS();
    }
  });
}

module.exports = toggleCSS;
