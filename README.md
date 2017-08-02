# html-element-groups

> Lists of HTML elements. Grouped based on logic from [MDN](https://developer.mozilla.org/en/docs/Web/HTML/Element).

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
