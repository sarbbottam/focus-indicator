function addFocusIndicator(e) {
  e.target.classList.add('focus-indicator');
}
document.addEventListener('focus', addFocusIndicator, true);

function removeFocusIndicator(e) {
  e.target.classList.remove('focus-indicator');
}
document.addEventListener('blur', removeFocusIndicator, true);
