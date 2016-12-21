import React from 'react';
import ReactDom from 'react-dom';


export default (name) => (Component) => {
    window.reactModule = window.reactModule || {};

    if(!name) {
        console.warn('Please use a custom name for production');
    }

    window.reactModule[name || Component.name] = {
        react: React,
        reactDom: ReactDom,
        component: Component,
        render: function(node) {
            "use strict";

            if((typeof node === 'string' || node instanceof String) && document.querySelector(node)) {
                node = document.querySelector(node);
            }

            if( !(node instanceof Node)) return false;

            ReactDom.render(
                React.createElement(Component),
                node
            );
        }
    };
}