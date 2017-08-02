'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (define) {
    var sectioning = require('./elements/sectioning');
    var text = require('./elements/text');
    var inline = require('./elements/inline');
    var demarcating = require('./elements/demarcating');
    var tabular = require('./elements/tabular');
    var form = require('./elements/form');
    var interactive = require('./elements/interactive');
    var deprecated = require('./elements/deprecated');
    define(function (require, exports, module) {
        return {
            timestamp: 1501686226000,
            source: 'https://developer.mozilla.org/en/docs/Web/HTML/Element',
            sectioning: sectioning,
            text: text,
            inline: inline,
            demarcating: demarcating,
            tabular: tabular,
            form: form,
            interactive: interactive,
            deprecated: deprecated,
            names: [].concat(_toConsumableArray(sectioning), _toConsumableArray(text), _toConsumableArray(inline), _toConsumableArray(demarcating), _toConsumableArray(tabular), _toConsumableArray(form), _toConsumableArray(interactive)),
            namesIncludingDeprecated: [].concat(_toConsumableArray(sectioning), _toConsumableArray(text), _toConsumableArray(inline), _toConsumableArray(demarcating), _toConsumableArray(tabular), _toConsumableArray(form), _toConsumableArray(interactive), _toConsumableArray(deprecated))
        };
    });
})((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports && typeof define !== 'function' ? function (factory) {
    module.exports = factory(require, exports, module);
} : define);

