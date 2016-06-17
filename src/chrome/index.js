function getDimension(element) {
  return {
    height: element.offsetHeight,
    width: element.offsetWidth
  }
}

// http://javascript.info/tutorial/coordinates
function getPosition(element) {
  const rect = element.getBoundingClientRect();
  const body = document.documentElement || document.body;

  const scrollTop = window.pageYOffset || body.scrollTop;
  const scrollLeft = window.pageXOffset || body.scrollLeft;

  const top  = rect.top +  scrollTop;
  const left = rect.left + scrollLeft;

  return {
    top: Math.round(top),
    left: Math.round(left)
  }
}

function displayFocusIndicator(target) {
  const dimension = getDimension(target);
  const position = getPosition(target);

  div.style.height = `${dimension.height}px`;
  div.style.width = `${dimension.width}px`;

  div.style.top = `${position.top}px`;
  div.style.left = `${position.left}px`;
}

function addFocusIndicator(e) {
  const target = e.target;
  displayFocusIndicator(target);
  // e.target.classList.add('focus-indicator');
}
document.addEventListener('focus', addFocusIndicator, true);

// function removeFocusIndicator(e) {
//   e.target.classList.remove('focus-indicator');
// }
// document.addEventListener('blur', removeFocusIndicator, true);

const div = document.createElement('div');
div.classList.add('focus-indicator');
document.body.appendChild(div);
