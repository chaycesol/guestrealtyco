webpackHotUpdate("guestrealtyco",{

/***/ "./packages/mars-theme/src/components/FooterNav.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/FooterNav.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var FooterNav=(_ref)=>{var{state}=_ref;Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,null,state.theme.menu.map((_ref2)=>{var[name,link]=_ref2;// Check if the link matched the current page url\nvar isCurrentPage=state.router.link===link;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{key:name},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:link,\"aria-current\":isCurrentPage?\"page\":undefined},name));}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FooterNav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e31l6dn0\",label:\"NavContainer\"})( false?undefined:{name:\"b34syp\",styles:\"list-style:none;display:flex;align-items:center;max-width:100%;box-sizing:border-box;margin:0;overflow-x:auto;@media screen and (max-width:560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGF5Y2Vzb2xjaGFnYS9EZXNrdG9wL1NvY2lhbFN0b3J5Q28vZ3Vlc3RyZWFsdHljby9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QitCIiwiZmlsZSI6Ii9Vc2Vycy9jaGF5Y2Vzb2xjaGFnYS9EZXNrdG9wL1NvY2lhbFN0b3J5Q28vZ3Vlc3RyZWFsdHljby9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBGb290ZXJOYXYgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIDxOYXZDb250YWluZXI+XG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbiAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluaztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICA8TGluayBsaW5rPXtsaW5rfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudFBhZ2UgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICk7XG4gICAgfSl9XG4gIDwvTmF2Q29udGFpbmVyPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGb290ZXJOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICMwMTMxMTA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e31l6dn1\",label:\"NavItem\"})( false?undefined:{name:\"zcelg1\",styles:\"padding:0;margin:0 16px;color:#013110;font-size:1rem;font-weight:550;box-sizing:border-box;flex-shrink:0;}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGF5Y2Vzb2xjaGFnYS9EZXNrdG9wL1NvY2lhbFN0b3J5Q28vZ3Vlc3RyZWFsdHljby9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQzBCIiwiZmlsZSI6Ii9Vc2Vycy9jaGF5Y2Vzb2xjaGFnYS9EZXNrdG9wL1NvY2lhbFN0b3J5Q28vZ3Vlc3RyZWFsdHljby9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBGb290ZXJOYXYgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIDxOYXZDb250YWluZXI+XG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbiAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluaztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICA8TGluayBsaW5rPXtsaW5rfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudFBhZ2UgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICk7XG4gICAgfSl9XG4gIDwvTmF2Q29udGFpbmVyPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGb290ZXJOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICMwMTMxMTA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi5qcz85YzFhIl0sIm5hbWVzIjpbIkZvb3Rlck5hdiIsInN0YXRlIiwidGhlbWUiLCJtZW51IiwibWFwIiwibmFtZSIsImxpbmsiLCJpc0N1cnJlbnRQYWdlIiwicm91dGVyIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIk5hdkNvbnRhaW5lciIsIk5hdkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBOzs7O0dBS0EsR0FBTUEsVUFBUyxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFDL0IsMERBQUMsWUFBRCxNQUNHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsR0FBakIsQ0FBcUIsU0FBa0IsSUFBakIsQ0FBQ0MsSUFBRCxDQUFPQyxJQUFQLENBQWlCLE9BQ3RDO0FBQ0EsR0FBTUMsY0FBYSxDQUFHTixLQUFLLENBQUNPLE1BQU4sQ0FBYUYsSUFBYixHQUFzQkEsSUFBNUMsQ0FDQSxNQUNFLDJEQUFDLE9BQUQsRUFBUyxHQUFHLENBQUVELElBQWQsRUFFRSwwREFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRUMsSUFBWixDQUFrQixlQUFjQyxhQUFhLENBQUcsTUFBSCxDQUFZRSxTQUF6RCxFQUNHSixJQURILENBRkYsQ0FERixDQVFELENBWEEsQ0FESCxFQWNELENBZkQsQ0FpQmVLLHVIQUFPLENBQUNWLFNBQUQsQ0FBdEIsRUFFQSxHQUFNVyxhQUFZLGluRkFBbEIsQ0FjQSxHQUFNQyxRQUFPLDBxRkFBYiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvRm9vdGVyTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG4gKi9cbmNvbnN0IEZvb3Rlck5hdiA9ICh7IHN0YXRlIH0pID0+IHtcbiAgPE5hdkNvbnRhaW5lcj5cbiAgICB7c3RhdGUudGhlbWUubWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgICAgIDxMaW5rIGxpbms9e2xpbmt9IGFyaWEtY3VycmVudD17aXNDdXJyZW50UGFnZSA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgKTtcbiAgICB9KX1cbiAgPC9OYXZDb250YWluZXI+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZvb3Rlck5hdik7XG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogIzAxMzExMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTUwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/FooterNav.js\n");

/***/ })

})