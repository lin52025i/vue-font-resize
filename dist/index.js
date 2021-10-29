import Vue from 'vue';

var version = '0.0.1';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueFontResize ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

function fontResizeFn(el, binding) {
  const boundary = binding.expression || { max: 32, min: 10 }

  const max = boundary.max || 32
  const min = boundary.min || 10
  let elStyle = getComputedStyle(el)
  let elWidth = parseInt(elStyle.width)
  let elFontSize = parseInt(elStyle.fontSize)
  let text = el.textContent

  // Construct The Span Label To Get The Actual Width Occupied By The Text
  let span = document.createElement('span')
  span.textContent = text
  span.style.visibility = 'hidden'
  span.style.display = 'inline-block'
  span.style.fontSize = elFontSize + 'px'
  document.body.appendChild(span)
  let textWidth = parseInt(getComputedStyle(span).width)
  document.body.removeChild(span)

  let fontSize = Math.min(parseInt((elWidth / textWidth) * elFontSize), max)
  fontSize = Math.max(fontSize, min)
  el.style.whiteSpace = 'nowrap'
  el.style.overflow = 'hidden'
  el.style.textOverflow = 'ellipsis'

  el.style.fontSize = fontSize + 'px'
}

export var directive = {
  inserted: fontResizeFn,
  componentUpdated: fontResizeFn,
};

export var mixin = {
  directives: {
    fontResize: directive,
  },
};

export var fontResize = (Vue, options = {}) => {
  Vue.directive('font-resize', directive)
}