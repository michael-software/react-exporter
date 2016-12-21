'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name) {
    return function (Component) {
        window.reactModule = window.reactModule || {};

        if (!name) {
            console.warn('Please use a custom name for production');
        }

        window.reactModule[name || Component.name] = {
            react: _react2.default,
            reactDom: _reactDom2.default,
            component: Component,
            render: function render(node) {
                "use strict";

                if ((typeof node === 'string' || node instanceof String) && document.querySelector(node)) {
                    node = document.querySelector(node);
                }

                if (!(node instanceof Node)) return false;

                _reactDom2.default.render(_react2.default.createElement(Component), node);
            }
        };
    };
};
