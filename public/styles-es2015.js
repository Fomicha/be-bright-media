(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./be-bright-web/styles.scss":
/*!***********************************!*\
  !*** ./be-bright-web/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./be-bright-web/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./be-bright-web/styles.scss":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./be-bright-web/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\nhtml {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nb, strong {\n  font-weight: 700;\n}\ncaption, th, td {\n  text-align: left;\n  font-weight: 400;\n  vertical-align: middle;\n}\nq, blockquote {\n  quotes: none;\n}\nq:before, q:after, blockquote:before, blockquote:after {\n  content: none;\n}\na {\n  outline: none;\n}\nimg {\n  border: none;\n}\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary {\n  display: block;\n}\n.nowrap {\n  white-space: nowrap;\n}\n.nowrap * {\n  white-space: nowrap;\n}\n.carousel {\n  position: relative;\n}\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  -webkit-transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n.carousel-fade .carousel-item {\n  opacity: 0;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transform: none;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  -webkit-transition: 0s 0.6s opacity;\n  transition: 0s 0.6s opacity;\n}\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.15s ease;\n  transition: opacity 0.15s ease;\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n.carousel-control-prev {\n  left: 0;\n}\n.carousel-control-next {\n  right: 0;\n}\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50%/100% 100%;\n}\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\");\n}\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\");\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 14;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators li {\n  box-sizing: content-box;\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.6s ease;\n  transition: opacity 0.6s ease;\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlLWJyaWdodC13ZWIvQzpcXFVzZXJzXFxmb21pY1xcT25lRHJpdmVcXNCg0LDQsdC+0YfQuNC5INGB0YLQvtC7XFxGRVxcYmUtYnJpZ2h0LW1lZGlhL2JlLWJyaWdodC13ZWJcXHN0eWxlcy5zY3NzIiwiYmUtYnJpZ2h0LXdlYi9DOlxcVXNlcnNcXGZvbWljXFxPbmVEcml2ZVxc0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LtcXEZFXFxiZS1icmlnaHQtbWVkaWEvYmUtYnJpZ2h0LXdlYlxcYXBwXFxjb250YWluZXJcXGNvbW1vblxcc2Fzc1xcX3Jlc2V0LnNjc3MiLCJiZS1icmlnaHQtd2ViL3N0eWxlcy5zY3NzIiwiYmUtYnJpZ2h0LXdlYi9DOlxcVXNlcnNcXGZvbWljXFxPbmVEcml2ZVxc0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LtcXEZFXFxiZS1icmlnaHQtbWVkaWEvYmUtYnJpZ2h0LXdlYlxcYXBwXFxjb250YWluZXJcXGNvbW1vblxcc2Fzc1xcbGlic1xcY2Fyb3VzZWwtbmctYm9vdHN0cmFwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTs7Ozs7Ozs7Ozs7OztFQWFFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ0VGO0FEQUE7RUFDRSxjQUFBO0FDR0Y7QUREQTtFQUNFLGdCQUFBO0FDSUY7QURGQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNLRjtBREhBO0VBQ0UsZ0JBQUE7QUNNRjtBREpBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDT0Y7QURMQTtFQUNFLFlBQUE7QUNRRjtBRE5BO0VBQ0UsYUFBQTtBQ1NGO0FEUEE7RUFDRSxhQUFBO0FDVUY7QURSQTtFQUNFLFlBQUE7QUNXRjtBRFRBO0VBQ0UsY0FBQTtBQ1lGO0FEVkE7RUFDRSxtQkFBQTtBQ2FGO0FEWEU7RUFDRSxtQkFBQTtBQ2FKO0FDdkVBO0VBQ0Usa0JBQUE7QUQwRUY7QUN2RUE7RUFFRSxtQkFBQTtBRDBFRjtBQ3ZFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEMEVGO0FDdkVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEMEVGO0FDdkVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSw4Q0FBQTtFQUNBLHNEQUFBO0VBQUEsc0NBQUE7RUFDQSwwRUFBQTtBRDBFRjtBQ3ZFQTs7O0VBR0UsY0FBQTtBRDBFRjtBQ3ZFQTs7RUFFRSxtQ0FBQTtFQUNBLDJCQUFBO0FEMEVGO0FDdkVBOztFQUVFLG9DQUFBO0VBQ0EsNEJBQUE7QUQwRUY7QUN2RUE7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBRDBFRjtBQ3ZFQTs7O0VBR0UsVUFBQTtFQUNBLFVBQUE7QUQwRUY7QUN2RUE7O0VBRUUsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FEMEVGO0FDdkVBOztFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQUEsOEJBQUE7QUQwRUY7QUN2RUE7OztFQUdFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEMEVGO0FDdkVBO0VBQ0UsT0FBQTtBRDBFRjtBQ3ZFQTtFQUNFLFFBQUE7QUQwRUY7QUN2RUE7O0VBRUUscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FEMEVGO0FDdkVBO0VBQ0UsbU1BQUE7QUQwRUY7QUN2RUE7RUFDRSxtTUFBQTtBRDBFRjtBQ3ZFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEMEVGO0FDdkVBO0VBQ0UsdUJBQUE7RUFFQSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FEMEVGO0FDdEVBO0VBQ0UsVUFBQTtBRHlFRjtBQ3RFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUR5RUYiLCJmaWxlIjoiYmUtYnJpZ2h0LXdlYi9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCJhcHAvY29udGFpbmVyL2NvbW1vbi9zYXNzL2luZGV4XCI7XG4iLCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaHRtbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcbmIsIHN0cm9uZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5jYXB0aW9uLCB0aCwgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnEsIGJsb2NrcXVvdGUge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5xOmJlZm9yZSwgcTphZnRlciwgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuYSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5pbWcge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ub3dyYXAge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICoge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5iLCBzdHJvbmcge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5jYXB0aW9uLCB0aCwgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5xLCBibG9ja3F1b3RlIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5xOmJlZm9yZSwgcTphZnRlciwgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG5hIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubm93cmFwICoge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJvdXNlbC5wb2ludGVyLWV2ZW50IHtcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJvdXNlbC1pbm5lcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbn1cblxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxuLmNhcm91c2VsLWl0ZW0tbmV4dCxcbi5jYXJvdXNlbC1pdGVtLXByZXYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcm91c2VsLWl0ZW0tbmV4dDpub3QoLmNhcm91c2VsLWl0ZW0tbGVmdCksXG4uYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1wcmV2Om5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCksXG4uYWN0aXZlLmNhcm91c2VsLWl0ZW0tbGVmdCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCxcbi5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1sZWZ0LFxuLmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgei1pbmRleDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMHMgMC42cyBvcGFjaXR5O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTUlO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldjpob3ZlciwgLmNhcm91c2VsLWNvbnRyb2wtcHJldjpmb2N1cyxcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0OmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogMDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUvMTAwJSAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nJTIzZmZmJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41LTIuNS0yLjUgMi41LTIuNS0xLjUtMS41eicvJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxNDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcbiAgZmxleDogMCAxIGF1dG87XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDE1JTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuY2Fyb3VzZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcm91c2VsLnBvaW50ZXItZXZlbnQge1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lcjo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXHJcbi5jYXJvdXNlbC1pdGVtLW5leHQsXHJcbi5jYXJvdXNlbC1pdGVtLXByZXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbS1uZXh0Om5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSxcclxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtLXByZXY6bm90KC5jYXJvdXNlbC1pdGVtLXJpZ2h0KSxcclxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxyXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCxcclxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcclxuICB6LWluZGV4OiAxO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1sZWZ0LFxyXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAwcyAwLjZzIG9wYWNpdHk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXIsIC5jYXJvdXNlbC1jb250cm9sLXByZXY6Zm9jdXMsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIsXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUgLyAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTQ7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2U7XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyAuYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNSU7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGxlZnQ6IDE1JTtcclxuICB6LWluZGV4OiAxMDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./be-bright-web/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fomic\OneDrive\Рабочий стол\FE\be-bright-media\be-bright-web\styles.scss */"./be-bright-web/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map