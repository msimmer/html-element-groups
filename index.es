(function(define) {
    const sectioning  = require('./elements/sectioning');
    const text        = require('./elements/text');
    const inline      = require('./elements/inline');
    const demarcating = require('./elements/demarcating');
    const tabular     = require('./elements/tabular');
    const form        = require('./elements/form');
    const interactive = require('./elements/interactive');
    const deprecated  = require('./elements/deprecated');
    define(function (require, exports, module) {
        return {
            timestamp: TIMESTAMP,
            source: 'https://developer.mozilla.org/en/docs/Web/HTML/Element',
            sectioning,
            text,
            inline,
            demarcating,
            tabular,
            form,
            interactive,
            deprecated,
            names: [...sectioning, ...text, ...inline, ...demarcating, ...tabular, ...form, ...interactive],
            namesIncludingDeprecated: [...sectioning, ...text, ...inline, ...demarcating, ...tabular, ...form, ...interactive, ...deprecated],
        };
    });
}(typeof module === 'object' && module.exports && typeof define !== 'function' ?
    function (factory) { module.exports = factory(require, exports, module); } :
    define
));

