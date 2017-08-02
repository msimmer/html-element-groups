(function(define) {
    define(function (require, exports, module) {
        return [
            'address',
            'article',
            'aside',
            'footer',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'header',
            'hgroup',
            'nav',
            'section',
        ]
    });
}(typeof module === 'object' && module.exports && typeof define !== 'function' ?
    function (factory) { module.exports = factory(require, exports, module); } :
    define
));
