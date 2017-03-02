webpackHotUpdate(0,{

/***/ 236:
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
	        _react2.default.createElement("img", { className: "project-image border-shadow", src: '../../public/img/' + props.photo, alt: props.title }),
	        _react2.default.createElement(
	            "div",
	            { className: "project-info text-center" },
	            _react2.default.createElement(
	                "h2",
	                { className: "project-title header" },
	                props.title
	            ),
	            _react2.default.createElement(
	                "p",
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
	                    { className: "project-btn" },
	                    "Check it out "
	                )
	            )
	        )
	    );
	};
	
	exports.default = Projectcard;

/***/ }

})
//# sourceMappingURL=0.07339ae380e221923d06.hot-update.js.map