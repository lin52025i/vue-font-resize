# vue-font-resize

> Note: `vue-font-resize@0.x` only works with `vue@2.x`

## Overview

This allows the text to automatically fit into the size of the containe, when the text content changes the size of the text automatically changes, so that the text always appears in the container.

The `max(32px by default)` and `min(10px by default)` can also be passed by setting to display the maximum and minimum font sizes.

When the text size is the smallest content length still exceeds the container width an ellipsis is used instead。

## Requirements

- vue: ^2.0.0

## Usage

```js
// Import In main.js
import { fontResize } from "vue-font-resize";
Vue.use(fontResize);

export default {
  data() {return {text: "vue-font-resize"}},
  template: "<div style='width: 100px;' v-font-resize="{max: 32, min: 10}"> {{ text }} </div>"
};

// Import As mixins
import { mixin as fontResize } from "vue-font-resize";
export default {
  data() {return {text: "vue-font-resize"}},
  template: "<div style='width: 100px;' v-font-resize> {{ text }} </div>",
  mixins: [fontResize]
};

// Import As directives
import { directive as fontResize } from "vue-font-resize";
export default {
  data() {return {text: "vue-font-resize"}},
  template: "<div style='width: 100px;' v-font-resize> {{ text }} </div>",
  directives: {fontResize: fontResize }
};
```

## License

[MIT](http://opensource.org/licenses/MIT)
