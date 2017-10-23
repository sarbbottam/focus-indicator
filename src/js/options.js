const FOCUS_INDICATOR = require('./constant.js');

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    function later() {
      func.apply(context, args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function getOptionsHTML(options) {
  return `
    <div class="row-multiple">
      <div class="col col-1-2 p-e-4px">
        <label for="color">Color</label>
        <input id="color" type="color"  value="${options.color}" />
      </div>
      <div class="col col-1-2 p-e-4px t-a-r">
        <label for="width">Width</label>
        <input id="width" type="number"  value="${options.width.replace('px', '')}" min="2" max="8"/>
      </div>
    </div>

    <p id="feedback" class="feedback feedback-hide">
    </p>

    <div class="row-multiple">
      <div class="col col-1-2 p-e-4px">
        <button class="button primary" type="submit" id="update">Update</button>
      </div>
      <div class="col col-1-2 p-s-4px">
        <button class="button secondary" type="submit" id="reset">Reset</button>
      </div>
    </div>
  `;
}

function injectOptionsHTML(options) {
  const optionsForm = document.getElementById('options-form');
  optionsForm.innerHTML = getOptionsHTML(options);

  const color = document.getElementById('color');
  const width = document.getElementById('width');
  const feedback = document.getElementById('feedback');

  function saveOptions() {
    chrome.storage.local.set({
      color: color.value,
      width: `${width.value}px`
    }, () => {
      feedback.innerHTML = 'Saved!';
      feedback.classList.add('feedback-show');
      setTimeout(() => {
        feedback.classList.remove('feedback-show');
        setTimeout(() => {
          feedback.innerHTML = '';
        }, 500);
      }, 1000);
    });
  }

  const debouncedSaveOptions = debounce(saveOptions, 500);

  optionsForm.addEventListener('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    debouncedSaveOptions();
  });

  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    color.value = FOCUS_INDICATOR.COLOR;
    width.value = FOCUS_INDICATOR.WIDTH.replace('px', '');
    debouncedSaveOptions();
  });
}

function renderOptions() {
  chrome.storage.local.get({
    color: FOCUS_INDICATOR.COLOR,
    width: FOCUS_INDICATOR.WIDTH
  }, injectOptionsHTML);
}

document.addEventListener('DOMContentLoaded', renderOptions);
