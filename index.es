(function(define) {
    const elements = {
        sectioning : require('./elements/sectioning'),
        text       : require('./elements/text'),
        inline     : require('./elements/inline'),
        demarcating: require('./elements/demarcating'),
        tabular    : require('./elements/tabular'),
        form       : require('./elements/form'),
        interactive: require('./elements/interactive'),
        deprecated : require('./elements/deprecated'),
    }

    define(function (require, exports, module) {
        return {
            ...elements,
            timestamp: TIMESTAMP,
            source: 'https://developer.mozilla.org/en/docs/Web/HTML/Element',
            names: Object.entries(elements).reduce((acc, [key, curr]) => key === 'deprecated' ? acc : acc.concat(...curr), []),
            namesIncludingDeprecated: Object.entries(elements).reduce((acc, [, curr]) => acc.concat(...curr), []),
            include: args => Object.entries(elements).reduce((acc, [key, curr]) => args.indexOf(key) < 0 ? acc : acc.concat(...curr), []),
            exclude: args => Object.entries(elements).reduce((acc, [key, curr]) => args.indexOf(key) > -1 ? acc : acc.concat(...curr), []),
        }
    })
}(typeof module === 'object' && module.exports && typeof define !== 'function' ?
    function (factory) { module.exports = factory(require, exports, module); } :
    define
))

