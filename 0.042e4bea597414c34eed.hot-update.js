webpackHotUpdate(0,{

/***/ 237:
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
	            { className: 'info' },
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
	              'I enjoy building beautiful, responsive, test driven frontends and backends of websites. '
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'not-coding' },
	            _react2.default.createElement(
	              'h2',
	              { className: 'header' },
	              ' When I\'m not coding, you can find me... '
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'list margin-left-2 hover-blue' },
	              'hanging with my two dogs.............................'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'list margin-right-2 hover-pink' },
	              '...........................................traveling'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'list margin-left-2 hover-blue' },
	              'searching Manhattan for the best Moscow Mule.........'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'list margin-right-2 hover-pink' },
	              '................................making travel videos'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'list margin-left-2 hover-blue' },
	              'cooking..............................................'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'list margin-right-2 hover-pink' },
	              '............................reading a crime thriller'
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
//# sourceMappingURL=0.042e4bea597414c34eed.hot-update.js.map