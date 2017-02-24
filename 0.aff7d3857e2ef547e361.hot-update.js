webpackHotUpdate(0,{

/***/ 241:
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
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
	
	var Footer = function (_Component) {
	  _inherits(Footer, _Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'text-center footer' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'header' },
	          '\xA9 2017 Diana Frank Development'
	        ),
	        _react2.default.createElement(
	          'a',
	          { href: 'https://github.com/dianafrank22' },
	          _react2.default.createElement('img', { src: '../../public/img/github2.png' })
	        ),
	        _react2.default.createElement(
	          'a',
	          { href: 'https://www.linkedin.com/in/dianafrank' },
	          _react2.default.createElement('img', { src: '../../public/img/linkedin2.png' })
	        ),
	        _react2.default.createElement(
	          'a',
	          { href: 'https://twitter.com/dianafrnk' },
	          _react2.default.createElement('img', { src: '../../public/img/twitter.png' })
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	exports.default = Footer;

/***/ }

})
//# sourceMappingURL=0.aff7d3857e2ef547e361.hot-update.js.map