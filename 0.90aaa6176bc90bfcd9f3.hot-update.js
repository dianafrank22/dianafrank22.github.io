webpackHotUpdate(0,{

/***/ 239:
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Contact = function (_Component) {
		_inherits(Contact, _Component);
	
		function Contact() {
			_classCallCheck(this, Contact);
	
			var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this));
	
			_this.state = {};
			return _this;
		}
	
		_createClass(Contact, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'contact-container center text-center' },
					_react2.default.createElement(
						'h3',
						{ className: 'header' },
						' Contact Me '
					),
					_react2.default.createElement(
						'h4',
						null,
						_react2.default.createElement(
							'i',
							null,
							'Email:'
						),
						' diana.frank22@gmail.com'
					),
					_react2.default.createElement(
						'h3',
						{ className: 'text-center header' },
						' Connect '
					),
					_react2.default.createElement(
						'h4',
						null,
						_react2.default.createElement(
							'a',
							{ href: 'https://www.linkedin.com/in/dianafrank' },
							'LinkedIn'
						)
					),
					_react2.default.createElement(
						'h4',
						null,
						_react2.default.createElement(
							'a',
							{ href: 'https://twitter.com/dianafrnk' },
							'Twitter'
						)
					),
					_react2.default.createElement(
						'h4',
						null,
						_react2.default.createElement(
							'a',
							{ href: 'https://github.com/dianafrank22' },
							'Github'
						)
					),
					_react2.default.createElement(
						'h4',
						null,
						_react2.default.createElement(
							'a',
							{ href: 'https://bitbucket.org/dianafrank22' },
							'BitBucket'
						)
					)
				);
			}
		}]);
	
		return Contact;
	}(_react.Component);
	
	exports.default = Contact;

/***/ }

})
//# sourceMappingURL=0.90aaa6176bc90bfcd9f3.hot-update.js.map