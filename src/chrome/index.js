function getDimension(element) {
  return {
    height: `${element.offsetHeight}px`,
    width: `${element.offsetWidth}px`
  }
}

// http://javascript.info/tutorial/coordinates
function getPosition(element) {
  const rect = element.getBoundingClientRect();
  const body = document.documentElement || document.body;

  const scrollTop = window.pageYOffset || body.scrollTop;
  const scrollLeft = window.pageXOffset || body.scrollLeft;

  const clientTop = body.clientTop || 0;
  const clientLeft = body.clientLeft || 0;

  const top  = rect.top +  scrollTop - clientTop;
  const left = rect.left + scrollLeft - clientLeft;

  return {
    top: `${Math.round(top)}px`,
    left: `${Math.round(left)}px`
  }
}

function displayFocusIndicator(target) {
  const dimension = getDimension(target);
  const position = getPosition(target);

  div.style.height = dimension.height;
  div.style.width = dimension.width;

  div.style.top = position.top;
  div.style.left = position.left;
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
