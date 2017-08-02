# html-element-groups

```js
const elements = require('html-element-groups')

console.log(elements.sectioning)
// => ['address', 'article', 'aside', ...

console.log(elements.deprecated)
// => ['acronym', 'applet', 'basefont', ...
```

## Properties

- `source`
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