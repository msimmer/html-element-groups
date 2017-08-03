# html-element-groups

> Lists of HTML elements. Grouped based on logic from [MDN](https://developer.mozilla.org/en/docs/Web/HTML/Element).

[![npm version](https://badge.fury.io/js/html-element-groups.svg)](https://badge.fury.io/js/html-element-groups)
[![Build Status](https://img.shields.io/travis/msimmer/html-element-groups/master.svg?style=flat)](https://travis-ci.org/msimmer/html-element-groups)
[![Coverage Status](https://coveralls.io/repos/github/msimmer/html-element-groups/badge.svg)](https://coveralls.io/github/msimmer/html-element-groups)

```js
const elements = require('html-element-groups')

console.log(elements.sectioning)
// => ['address', 'article', 'aside', ...

console.log(elements.deprecated)
// => ['acronym', 'applet', 'basefont', ...

console.log(elements.include(['text', 'inline', 'tabular']))
// => ['blockquote', 'dd', 'div', ...
```

## Properties

- `source` — [https://developer.mozilla.org/en/docs/Web/HTML/Element](https://developer.mozilla.org/en/docs/Web/HTML/Element)
- `timestamp` — Time of current build
- `sectioning`
- `text`
- `inline`
- `demarcating`
- `tabular`
- `form`
- `interactive`
- `deprecated`
- `names` — Flattened array of elements, omitting deprecated
- `namesIncludingDeprecated` — Flattened array of elements, including deprecated
- `include` — Include elements by arguments
- `exclude` — All elements, except by arguments
