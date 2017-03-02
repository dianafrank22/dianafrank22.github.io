webpackHotUpdate(0,{

/***/ 245:
/*!***************************************!*\
  !*** ./src/components/Projectcard.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Projectcard = function Projectcard(props) {
	    return _react2.default.createElement(
	        "div",
	        { className: "card-container padding-5" },
	        _react2.default.createElement("img", { className: "project-image", src: '../../public/img/' + props.photo, alt: props.title }),
	        _react2.default.createElement(
	            "div",
	            { className: "project-info text-center" },
	            _react2.default.createElement(
	                "h2",
	                { className: "project-title header" },
	                props.title
	            ),
	            _react2.default.createElement(
	                "h3",
	                { className: "project-description" },
	                " ",
	                props.description
	            ),
	            _react2.default.createElement(
	                "h4",
	                null,
	                " ",
	                _react2.default.createElement(
	                    "i",
	                    null,
	                    " ",
	                    props.skills
	                )
	            ),
	            _react2.default.createElement(
	                "a",
	                { className: "project-link", href: props.website },
	                " ",
	                _react2.default.createElement(
	                    "button",
	                    null,
	                    "Check it out "
	                )
	            )
	        )
	    );
	};
	
	exports.default = Projectcard;
	// @ make name bigger 
	// @ make description bigger
	// @button style change color on hover

/***/ }

})
//# sourceMappingURL=0.356a1e7c236333ad7a25.hot-update.js.map