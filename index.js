(function(define) {
    define(function (require, exports, module) {
        const text = require('./elements/text')
        const inline = require('./elements/inline')
        const demarcating = require('./elements/demarcating')
        const tabular = require('./elements/tabular')
        const form = require('./elements/form')
        const interactive = require('./elements/interactive')
        const deprecated = require('./elements/deprecated')
        return {
            timestamp: 1501676841390,
            source: 'https://developer.mozilla.org/en/docs/Web/HTML/Element',
            text,
            inline,
            demarcating,
            tabular,
            form,
            interactive,
            deprecated,
            names: [...text, ...inline, ...demarcating, ...tabular, ...form, ...interactive],
            namesIncludingDeprecated: [...text, ...inline, ...demarcating, ...tabular, ...form, ...interactive, ...deprecated],
        }
    });
}(typeof module === 'object' && module.exports && typeof define !== 'function' ?
    function (factory) { module.exports = factory(require, exports, module); } :
    define
));

