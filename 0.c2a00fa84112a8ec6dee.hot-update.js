webpackHotUpdate(0,{

/***/ 178:
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 179);
	
	var _Project = __webpack_require__(/*! ./Project */ 234);
	
	var _Project2 = _interopRequireDefault(_Project);
	
	var _About = __webpack_require__(/*! ./About */ 236);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _NotFound = __webpack_require__(/*! ./NotFound */ 237);
	
	var _NotFound2 = _interopRequireDefault(_NotFound);
	
	var _Contact = __webpack_require__(/*! ./Contact */ 238);
	
	var _Contact2 = _interopRequireDefault(_Contact);
	
	var _Experience = __webpack_require__(/*! ./Experience */ 239);
	
	var _Experience2 = _interopRequireDefault(_Experience);
	
	var _Nav = __webpack_require__(/*! ./Nav */ 240);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _Footer = __webpack_require__(/*! ./Footer */ 241);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_Component) {
		_inherits(Main, _Component);
	
		function Main() {
			_classCallCheck(this, Main);
	
			var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));
	
			_this.state = {};
			return _this;
		}
	
		_createClass(Main, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					_reactRouter.Router,
					{ history: _reactRouter.hashHistory },
					_react2.default.createElement(
						_reactRouter.Route,
						{ path: '/', component: Container },
						_react2.default.createElement(_reactRouter.IndexRoute, { component: _About2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '/work', component: _Project2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '/experience', component: _Experience2.default }),
						_react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
					)
				);
			}
		}]);
	
		return Main;
	}(_react.Component);
	
	exports.default = Main;
	
	var Container = function Container(props) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(_Nav2.default, null),
				props.children
			),
			_react2.default.createElement(_Footer2.default, null)
		);
	};

/***/ },

/***/ 236:
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
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
	
	var About = function (_Component) {
	    _inherits(About, _Component);
	
	    function About() {
	        _classCallCheck(this, About);
	
	        var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));
	
	        _this.state = {};
	        return _this;
	    }
	
	    _createClass(About, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'about' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'img', className: 'row' },
	                        _react2.default.createElement('img', { src: 'public/img/me3.png', className: 'me' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'h2',
	                            { className: 'header' },
	                            ' Hello !'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            ' I\'m ',
	                            _react2.default.createElement(
	                                'strong',
	                                { className: 'pink two-em' },
	                                'Diana Frank'
	                            ),
	                            ', a ',
	                            _react2.default.createElement(
	                                'strong',
	                                { className: 'blue two-em' },
	                                ' fullstack developer'
	                            ),
	                            ' from',
	                            _react2.default.createElement(
	                                'strong',
	                                { className: 'pink two-em' },
	                                ' New York, NY '
	                            ),
	                            '. ',
	                            _react2.default.createElement('br', null),
	                            'I enjoy building beautiful, responsive, testdriven frontends and backends of websites. '
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'about' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'h2',
	                            null,
	                            ' When I\'m not coding, you can find me... '
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'list margin-left-2 hover-blue' },
	                            'hanging with my two dogs'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'list margin-right-2 hover-pink' },
	                            'traveling '
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'list margin-left-2 hover-blue' },
	                            'searching Manhattan for the best Moscow Mule'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'list margin-right-2 hover-pink' },
	                            'making travel videos'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'list margin-left-2 hover-blue' },
	                            'cooking'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'list margin-right-2 hover-pink' },
	                            'reading a crime thriller'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return About;
	}(_react.Component);
	
	exports.default = About;

/***/ }

})
//# sourceMappingURL=0.c2a00fa84112a8ec6dee.hot-update.js.map