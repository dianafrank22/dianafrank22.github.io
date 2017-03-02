webpackHotUpdate(0,{

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
	          'h3',
	          null,
	          'Komeeda'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          'Part Time Developer'
	        ),
	        _react2.default.createElement(
	          'h5',
	          null,
	          'February 2017 - Present'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          '\u2022 Collaborated with other members of the agile team to implement graphic designers designs',
	          _react2.default.createElement('br', null),
	          '\u2022 Built new features using Rspec tested Rails, Bootstrap, jQuery, and Sass'
	        ),
	        _react2.default.createElement('hr', { className: 'line-style' }),
	        _react2.default.createElement(
	          'h3',
	          null,
	          ' Nimblestack'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          ' Fullstack Developer'
	        ),
	        _react2.default.createElement(
	          'h5',
	          null,
	          'April 2016 - October 2016'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          '\u2022  Developed backend of consumer-facing AI Facebook messenger chatbot using Node.js and MongoDB',
	          _react2.default.createElement('br', null),
	          '\u2022 Built responsive mobile friendly frontend using React.js, Redux, ES6, CSS3, and Webpack',
	          _react2.default.createElement('br', null),
	          '\u2022 Modified product UX based on data from user tests and internal team discussions',
	          _react2.default.createElement('br', null),
	          '\u2022 Wrote test driven code using Mocha, Chai, and Sinon',
	          _react2.default.createElement('br', null),
	          '\u2022 Integrated Facebook, GoogleMaps, Delivery.com, and other AI APIs into products'
	        ),
	        _react2.default.createElement('hr', { className: 'section-line' }),
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
	        _react2.default.createElement('hr', { className: 'section-line' }),
	        _react2.default.createElement(
	          'h2',
	          { className: 'header text-center' },
	          'Education'
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'General Assemblys WDI'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          ' duration '
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' description'
	        ),
	        _react2.default.createElement('hr', { className: 'line-style' }),
	        _react2.default.createElement(
	          'h3',
	          null,
	          ' Tulane University'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          ' duration '
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' description'
	        ),
	        _react2.default.createElement('hr', { className: 'section-line' }),
	        _react2.default.createElement(
	          'h2',
	          { className: 'header text-center' },
	          'Other'
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'BrewHacks Hackathon'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          ' April 2016'
	        ),
	        _react2.default.createElement(
	          'h5',
	          null,
	          'Participant'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' \u2022 First place for Brewbot, a web app & Facebook Bot that explores, discovers, and orders new types of beer',
	          _react2.default.createElement('br', null),
	          'Built responsive site using Bootstrap, HTML5, CSS3, and jQuery '
	        ),
	        _react2.default.createElement('hr', { className: 'line-style' }),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Disrupt Tech Crunch'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          ' May 2016'
	        ),
	        _react2.default.createElement(
	          'h5',
	          null,
	          'Participant'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' \u2022 Developed a Node.js server that read and sent email through Office365 API for Mailbot, an email assistant bot',
	          _react2.default.createElement('br', null),
	          '\u2022 Won prizes with Cisco for best use of cloud collaboration APIs and Microsoft for best use of Office 365 connectors'
	        ),
	        _react2.default.createElement('hr', { className: 'line-style' }),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'speaking'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          ' date'
	        ),
	        _react2.default.createElement(
	          'h5',
	          null,
	          'role'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' description '
	        ),
	        _react2.default.createElement('hr', { className: 'line-style' }),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'hackathon - comedyhackday'
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          ' date'
	        ),
	        _react2.default.createElement(
	          'h5',
	          null,
	          'role'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' description '
	        )
	      );
	    }
	  }]);
	
	  return Experience;
	}(_react.Component);
	
	exports.default = Experience;

/***/ }

})
//# sourceMappingURL=0.44eba11935de14652aa2.hot-update.js.map