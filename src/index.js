const div = document.createElement('div');
div.classList.add('focus-indicator');
document.body.appendChild(div);

function getDimension(element) {
  return {
    height: element.offsetHeight,
    width: element.offsetWidth
  };
}

// http://javascript.info/tutorial/coordinates
function getPosition(element) {
  const rect = element.getBoundingClientRect();
  const body = document.documentElement || document.body;

  const scrollTop = window.pageYOffset || body.scrollTop;
  const scrollLeft = window.pageXOffset || body.scrollLeft;

  const top = rect.top + scrollTop;
  const left = rect.left + scrollLeft;

  return {
    top: Math.round(top),
    left: Math.round(left)
  };
}

function displayFocusIndicator(target) {
  const dimension = getDimension(target);
  const position = getPosition(target);

  const offset = 4;

  const height = dimension.height + offset;
  const width = dimension.width + offset;
  const top = position.top - (offset / 2);
  const left = position.left - (offset / 2);

  div.style.height = `${height}px`;
  div.style.width = `${width}px`;
  div.style.top = `${top}px`;
  div.style.left = `${left}px`;
}

function addFocusIndicator(e) {
  const target = e.target;
  displayFocusIndicator(target);
}

document.addEventListener('focus', addFocusIndicator, true);

function showFocusIndicator() {
  const target = document.activeElement;
  displayFocusIndicator(target);
}

window.addEventListener('focus', showFocusIndicator);

function hideFocusIndicator() {
  div.style.left = '-9999px';
}

window.addEventListener('blur', hideFocusIndicator);
