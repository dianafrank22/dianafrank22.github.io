webpackHotUpdate(0,{

/***/ 243:
/*!********************************************!*\
  !*** ./~/css-loader!./public/css/main.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 244)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Barrio);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans|Oswald);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Josefin+Sans|Playfair+Display);", ""]);
	
	// module
	exports.push([module.id, ".two-em {\n  font-size: 1.23em; }\n\n.hover-blue:hover {\n  color: #1856F9; }\n\n.hover-pink:hover {\n  color: #C71585; }\n\n.list {\n  font-size: 1.2em;\n  line-height: 0.3em; }\n\ndiv.about {\n  margin-left: 50%;\n  transform: translate(-50%); }\n\n.about {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap; }\n\n.footer {\n  position: relative;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: .6em;\n  background-color: #efefef;\n  margin-top: 10vh; }\n\n.border-shadow {\n  border: #373737 solid 1px;\n  box-shadow: 0 3px 2px #373737; }\n\n.text-black {\n  color: #373737; }\n\n.text-center {\n  text-align: center; }\n\n.padding-5 {\n  padding: 5px; }\n\n.padding-left-right-5 {\n  padding-right: 5px;\n  padding-left: 5px; }\n\n.header {\n  font-family: 'Oswald', sans-serif; }\n\nbody {\n  font-family: 'Open Sans', sans-serif; }\n\n.margin-left-2 {\n  margin-left: 20%; }\n\n.margin-right-2 {\n  margin-left: 40%; }\n\n.pink {\n  color: #C71585; }\n\n.blue {\n  color: #1856F9; }\n\n/* CSS Normalize */\narticle, aside, details, figcaption, figure, footer, header, hgroup, nav, section, summary {\n  display: block; }\n\naudio, canvas, video {\n  display: inline-block; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden] {\n  display: none; }\n\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%; }\n\na:focus {\n  outline: thin dotted; }\n\na:active, a:hover {\n  outline: 0; }\n\nh1 {\n  font-size: 2em; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, strong {\n  font-weight: 700; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\ncode, kbd, pre, samp {\n  font-family: monospace, serif;\n  font-size: 1em; }\n\npre {\n  white-space: pre-wrap;\n  word-wrap: break-word; }\n\nq {\n  quotes: \\201C \\201D \\2018 \\2019; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -.5em; }\n\nsub {\n  bottom: -.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfieldset {\n  border: 1px solid silver;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0; }\n\nbutton, input {\n  line-height: normal; }\n\nbutton, html input[type=button],\ninput[type=reset], input[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], input[disabled] {\n  cursor: default; }\n\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbody, figure {\n  margin: 0; }\n\nlegend, button::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/* Box-sizing border-box */\n.nav ul {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style: none;\n  margin-bottom: 5%; }\n\n.nav {\n  background-color: white;\n  margin: 0; }\n\n.nav-link {\n  font-size: 1.3em;\n  height: 40px;\n  line-height: 40px; }\n\n.nav-a {\n  display: block;\n  text-decoration: none;\n  display: inline-block;\n  color: #373737; }\n\n.nav-a:hover {\n  color: #1856F9; }\n\n.active {\n  border-bottom: #C71585 solid 1px; }\n\n.nav h4 {\n  font-size: 1.4em; }\n\n.nav-link h4 {\n  margin: 0; }\n\n.logo {\n  position: relative;\n  left: 50%;\n  transform: translate(-50%); }\n\n#container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap; }\n\n.card {\n  width: 40vw;\n  flex-grow: 1;\n  margin: 15px; }\n\n.project-image {\n  width: 100%;\n  height: inherit; }\n\n.project-link {\n  text-decoration: none;\n  color: black; }\n\n/* CSS Normalize */\narticle, aside, details, figcaption, figure, footer, header, hgroup, nav, section, summary {\n  display: block; }\n\naudio, canvas, video {\n  display: inline-block; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden] {\n  display: none; }\n\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%; }\n\na:focus {\n  outline: thin dotted; }\n\na:active, a:hover {\n  outline: 0; }\n\nh1 {\n  font-size: 2em; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, strong {\n  font-weight: 700; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\ncode, kbd, pre, samp {\n  font-family: monospace, serif;\n  font-size: 1em; }\n\npre {\n  white-space: pre-wrap;\n  word-wrap: break-word; }\n\nq {\n  quotes: \\201C \\201D \\2018 \\2019; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -.5em; }\n\nsub {\n  bottom: -.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfieldset {\n  border: 1px solid silver;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0; }\n\nbutton, input {\n  line-height: normal; }\n\nbutton, html input[type=button],\ninput[type=reset], input[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], input[disabled] {\n  cursor: default; }\n\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbody, figure {\n  margin: 0; }\n\nlegend, button::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/* Box-sizing border-box */\n.main {\n  min-height: 80vh; }\n", ""]);
	
	// exports


/***/ }

})
//# sourceMappingURL=0.48bf5c1b836ede995373.hot-update.js.map