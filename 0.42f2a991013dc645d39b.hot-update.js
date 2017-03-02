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
	
	var _About = __webpack_require__(/*! ./About */ 237);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _NotFound = __webpack_require__(/*! ./NotFound */ 238);
	
	var _NotFound2 = _interopRequireDefault(_NotFound);
	
	var _Contact = __webpack_require__(/*! ./Contact */ 239);
	
	var _Contact2 = _interopRequireDefault(_Contact);
	
	var _Experience = __webpack_require__(/*! ./Experience */ 240);
	
	var _Experience2 = _interopRequireDefault(_Experience);
	
	var _Nav = __webpack_require__(/*! ./Nav */ 241);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _Footer = __webpack_require__(/*! ./Footer */ 242);
	
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
				{ className: 'main center' },
				_react2.default.createElement(_Nav2.default, null),
				props.children
			),
			_react2.default.createElement(_Footer2.default, null)
		);
	};

/***/ },

/***/ 240:
/*!**************************************!*\
  !*** ./src/components/Experience.js ***!
  \**************************************/
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
	
	var Experience = function (_Component) {
	  _inherits(Experience, _Component);
	
	  function Experience() {
	    _classCallCheck(this, Experience);
	
	    var _this = _possibleConstructorReturn(this, (Experience.__proto__ || Object.getPrototypeOf(Experience)).call(this));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(Experience, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'experience center' },
	        _react2.default.createElement(
	          'h2',
	          { className: 'header text-center' },
	          'Work'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'Komeeda ',
	          _react2.default.createElement(
	            'strong',
	            null,
	            'February 2017 - Present'
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' ',
	          _react2.default.createElement(
	            'strong',
	            null,
	            ' Part Time Developer '
	          ),
	          ' description'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'Nimblestack ',
	          _react2.default.createElement(
	            'strong',
	            null,
	            'April 2016 - October 2016'
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' ',
	          _react2.default.createElement(
	            'strong',
	            null,
	            'Fullstack Developer'
	          ),
	          '  description'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'Eden House ',
	          _react2.default.createElement(
	            'strong',
	            null,
	            ' August 2014- May 2015'
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' ',
	          _react2.default.createElement(
	            'strong',
	            null,
	            'Position'
	          ),
	          ' description'
	        ),
	        _react2.default.createElement(
	          'h2',
	          { className: 'header text-center' },
	          'Skills '
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'I have experience with working with some of the following... '
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'React, Redux, Javascript, Mocha, Chai, Node.js, Express, Ruby, Rails, Sinatra, JSON, jQuery, SVG'
	        ),
	        _react2.default.createElement(
	          'h2',
	          { className: 'header text-center' },
	          'Education'
	        ),
	        _react2.default.createElement(
	          'h5',
	          null,
	          'General Assemblys WDI'
	        ),
	        _react2.default.createElement(
	          'h5',
	          null,
	          ' Tulane University'
	        ),
	        _react2.default.createElement(
	          'h2',
	          { className: 'header text-center' },
	          'Other'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'hackathon - brewhacks'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'hackathon - disrupt tech crunch'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'speaking'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'hackathon - comedyhackday'
	        )
	      );
	    }
	  }]);
	
	  return Experience;
	}(_react.Component);
	
	exports.default = Experience;

/***/ }

})
//# sourceMappingURL=0.42f2a991013dc645d39b.hot-update.js.map