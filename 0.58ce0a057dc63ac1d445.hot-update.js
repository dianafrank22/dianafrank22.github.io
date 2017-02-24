webpackHotUpdate(0,{

/***/ 240:
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
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
	
	var _reactRouter = __webpack_require__(/*! react-router */ 179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Nav = function (_Component) {
		_inherits(Nav, _Component);
	
		function Nav() {
			_classCallCheck(this, Nav);
	
			var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));
	
			_this.state = {};
			return _this;
		}
	
		_createClass(Nav, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'nav' },
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								{ className: 'nav-link' },
								_react2.default.createElement(
									_reactRouter.IndexLink,
									{ to: '/', className: 'nav-a', activeClassName: 'active' },
									'About'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: 'nav-link' },
								_react2.default.createElement(
									_reactRouter.IndexLink,
									{ to: '/work', className: 'nav-a', activeClassName: 'active' },
									'Previous Work'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: 'nav-link' },
								_react2.default.createElement(
									'h4',
									null,
									' Diana Frank Development '
								)
							),
							_react2.default.createElement(
								'li',
								{ className: 'nav-link' },
								_react2.default.createElement(
									_reactRouter.IndexLink,
									{ to: '/contact', className: 'nav-a', activeClassName: 'active' },
									'Contact'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: 'nav-link' },
								_react2.default.createElement(
									_reactRouter.IndexLink,
									{ to: '/experience', className: 'nav-a', activeClassName: 'active' },
									'Experience'
								)
							)
						)
					)
				);
			}
		}]);
	
		return Nav;
	}(_react.Component);
	
	exports.default = Nav;

/***/ }

})
//# sourceMappingURL=0.58ce0a057dc63ac1d445.hot-update.js.map