"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/ts/App.tsx":
/*!******************************!*\
  !*** ./resources/ts/App.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/theme */ "./resources/ts/config/theme.ts");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./resources/ts/Navbar.tsx");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./resources/ts/Home.tsx");
/* harmony import */ var _auth_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/AuthContext */ "./resources/ts/auth/AuthContext.tsx");
/* harmony import */ var _auth_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/Login */ "./resources/ts/auth/Login.tsx");
/* harmony import */ var _auth_Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/Register */ "./resources/ts/auth/Register.tsx");
/* harmony import */ var _auth_VerifyEmail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/VerifyEmail */ "./resources/ts/auth/VerifyEmail.tsx");
/* harmony import */ var _users_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/Settings */ "./resources/ts/users/Settings.tsx");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NotFound */ "./resources/ts/NotFound.tsx");
/* harmony import */ var _BottomNavbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BottomNavbar */ "./resources/ts/BottomNavbar.tsx");
/* harmony import */ var _config_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/navigation */ "./resources/ts/config/navigation.tsx");















var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_12__["default"])({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden"
  },
  animatedSwitch: {
    position: "relative",
    "& > div": {
      position: "absolute"
    }
  }
});
function App() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auth_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_styles__WEBPACK_IMPORTED_MODULE_13__["default"], {
    theme: _config_theme__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
    path: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auth_Login__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
    path: "/register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auth_Register__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
    path: "/email/verify"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auth_VerifyEmail__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
    path: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
    path: "/creatives"
  }, "Creatives"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
    path: "/organizations"
  }, "Organizations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
    path: "/settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_users_Settings__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NotFound__WEBPACK_IMPORTED_MODULE_9__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BottomNavbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    items: _config_navigation__WEBPACK_IMPORTED_MODULE_11__["default"].bottomItems
  })))));
}

/***/ }),

/***/ "./resources/ts/BottomNavbar.tsx":
/*!***************************************!*\
  !*** ./resources/ts/BottomNavbar.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BottomNavbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/createStyles/createStyles.js");
/* harmony import */ var _mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/BottomNavigation */ "./node_modules/@mui/material/BottomNavigation/BottomNavigation.js");
/* harmony import */ var _mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/BottomNavigationAction */ "./node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Slide */ "./node_modules/@mui/material/Slide/Slide.js");







var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(function (theme) {
  var _a, _b;

  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
    placeholder: (_a = {
      opacity: 0
    }, _a[theme.breakpoints.up("md")] = {
      display: "none"
    }, _a),
    root: (_b = {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0
    }, _b[theme.breakpoints.up("md")] = {
      display: "none"
    }, _b),
    navbar: {
      backdropFilter: "blur(32px)",
      backgroundColor: "#FFFFFF88"
    }
  });
});
function BottomNavbar(_a) {
  var _b = _a.items,
      items = _b === void 0 ? [] : _b,
      _c = _a.elevation,
      elevation = _c === void 0 ? 3 : _c;
  var classes = useStyles();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  var show = !!items.find(function (item) {
    return item.href === location.pathname;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.placeholder
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_5__["default"], {
    direction: "up",
    "in": show
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.root,
    boxShadow: elevation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.navbar,
    showLabels: true,
    value: location.pathname
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: item.href,
      label: item.text,
      value: item.href,
      icon: item.icon,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink,
      exact: true,
      to: item.href
    });
  })))));
}

/***/ }),

/***/ "./resources/ts/Home.tsx":
/*!*******************************!*\
  !*** ./resources/ts/Home.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Banner */ "./resources/ts/images/Banner.tsx");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page */ "./resources/ts/Page.tsx");



function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_images_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: "https://source.unsplash.com/RnCPiXixooY/1920x480",
    width: "1920",
    height: "480"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "More conntent is comming soon..."));
}

/***/ }),

/***/ "./resources/ts/Navbar.tsx":
/*!*********************************!*\
  !*** ./resources/ts/Navbar.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/createStyles/createStyles.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Badge */ "./node_modules/@mui/material/Badge/Badge.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Mail */ "./node_modules/@mui/icons-material/Mail.js");
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Notifications */ "./node_modules/@mui/icons-material/Notifications.js");
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ "./node_modules/@mui/icons-material/MoreVert.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ "./resources/ts/SearchBox.tsx");
/* harmony import */ var _auth_AuthMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/AuthMenu */ "./resources/ts/auth/AuthMenu.tsx");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");















var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  var _a, _b, _c;

  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__["default"])({
    root: {
      backdropFilter: "blur(32px)",
      backgroundColor: "#FFFFFF88 !important"
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: (_a = {
      display: "none"
    }, _a[theme.breakpoints.up("sm")] = {
      display: "block"
    }, _a),
    sectionDesktop: (_b = {
      display: "none"
    }, _b[theme.breakpoints.up("md")] = {
      display: "flex"
    }, _b),
    sectionMobile: (_c = {
      display: "flex"
    }, _c[theme.breakpoints.up("md")] = {
      display: "none"
    }, _c)
  });
});
function Navbar(_a) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    position: "fixed",
    color: "transparent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "dense"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/",
    className: classes.title,
    variant: "h6",
    noWrap: true
  }, process.env.MIX_APP_NAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.sectionDesktop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/labs"
  }, "Labs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/about"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.grow
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.sectionDesktop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "aria-label": "show 4 new mails",
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_12__["default"], {
    badgeContent: 4,
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_13__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_12__["default"], {
    badgeContent: 17,
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_14__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auth_AuthMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.sectionMobile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__["default"], null)))));
}

/***/ }),

/***/ "./resources/ts/NotFound.tsx":
/*!***********************************!*\
  !*** ./resources/ts/NotFound.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _images_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Banner */ "./resources/ts/images/Banner.tsx");







function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_images_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: "https://source.unsplash.com/G85VuTpw6jg/1920x1080",
    width: 1920,
    height: 1080
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h1"
  }, "Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "primary",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: "/",
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, "Back Home"))));
}

/***/ }),

/***/ "./resources/ts/Page.tsx":
/*!*******************************!*\
  !*** ./resources/ts/Page.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/createStyles/createStyles.js");


var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(function (theme) {
  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
    root: {
      background: theme.palette.background["default"]
    }
  });
});
function Page(_a) {
  var children = _a.children;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, children);
}

/***/ }),

/***/ "./resources/ts/SearchBox.tsx":
/*!************************************!*\
  !*** ./resources/ts/SearchBox.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/createStyles/createStyles.js");
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/InputBase */ "./node_modules/@mui/material/InputBase/InputBase.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");




var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(function (theme) {
  var _a;

  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
    root: (_a = {
      display: "flex",
      alignItems: "center",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#0000000F",
      "&:hover": {
        backgroundColor: "#0000001F"
      },
      marginRight: theme.spacing(2),
      marginLeft: 0
    }, _a[theme.breakpoints.up("sm")] = {
      marginLeft: theme.spacing(3),
      width: "auto"
    }, _a)
  });
});
function SearchBox() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      ml: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__["default"], {
    placeholder: "Search",
    sx: {
      px: 1
    }
  }));
}

/***/ }),

/***/ "./resources/ts/auth/AuthContext.tsx":
/*!*******************************************!*\
  !*** ./resources/ts/auth/AuthContext.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider),
/* harmony export */   "useAuth": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _services_updateUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/updateUser */ "./resources/ts/auth/services/updateUser.ts");


var AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  user: null,
  setUser: function setUser(user) {}
});
function AuthProvider(_a) {
  var children = _a.children;

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.user),
      user = _b[0],
      setUser = _b[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.user = user;

    if (user) {
      (0,_services_updateUser__WEBPACK_IMPORTED_MODULE_1__.updateUser)(user);
    }
  }, [user]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthContext.Provider, {
    value: {
      user: user,
      setUser: setUser
    }
  }, children);
}
/**
 * Auth hook for function components
 */

function useAuth() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);
}

/***/ }),

/***/ "./resources/ts/auth/AuthLayout.tsx":
/*!******************************************!*\
  !*** ./resources/ts/auth/AuthLayout.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _images_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Banner */ "./resources/ts/images/Banner.tsx");




var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  root: {},
  content: {}
});
function AuthLayout(_a) {
  var children = _a.children;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_images_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: "https://source.unsplash.com/YP2MNNId-Qs/1920x480",
    width: "1920",
    height: "480"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.content
  }, children)));
}

/***/ }),

/***/ "./resources/ts/auth/AuthMenu.tsx":
/*!****************************************!*\
  !*** ./resources/ts/auth/AuthMenu.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/createStyles/createStyles.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ "./node_modules/@mui/icons-material/AccountCircle.js");
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthContext */ "./resources/ts/auth/AuthContext.tsx");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./resources/ts/auth/service.ts");










var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__["default"])({
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      margin: theme.spacing(-0.5)
    }
  });
});
function AuthMenu() {
  var classes = useStyles();

  var _a = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)(),
      user = _a.user,
      setUser = _a.setUser;

  var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      anchorEl = _b[0],
      setAnchorEl = _b[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleLogout = function handleLogout() {
    setAnchorEl(null);
    (0,_service__WEBPACK_IMPORTED_MODULE_2__.logout)().then(function () {
      return setUser(null);
    });
  };

  if (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      "aria-controls": "auth-menu",
      "aria-haspopup": "true",
      onClick: handleClick
    }, user.avatar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.avatar,
      src: user.avatar.url
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_7__["default"], null), user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "auth-menu",
      anchorEl: anchorEl,
      keepMounted: true,
      open: Boolean(anchorEl),
      onClose: handleClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "profile",
      onClick: handleClose,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
      to: "/users/" + user.id
    }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "settings",
      onClick: handleClose,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
      to: "/settings"
    }, "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "logout",
      onClick: handleLogout
    }, "Logout")));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      onClick: handleClose,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
      to: "/login"
    }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      onClick: handleClose,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
      to: "/register"
    }, "Register"));
  }
}

/***/ }),

/***/ "./resources/ts/auth/Login.tsx":
/*!*************************************!*\
  !*** ./resources/ts/auth/Login.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./resources/ts/auth/service.ts");
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthContext */ "./resources/ts/auth/AuthContext.tsx");
/* harmony import */ var _AuthLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthLayout */ "./resources/ts/auth/AuthLayout.tsx");
/* harmony import */ var _services_fetchUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/fetchUser */ "./resources/ts/auth/services/fetchUser.ts");














var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__["default"])({
  buttonRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
function Login() {
  var _a, _b, _c;

  var classes = useStyles();

  var _d = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),
      user = _d.user,
      setUser = _d.setUser;

  var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      loading = _e[0],
      setLoading = _e[1];

  var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      email = _f[0],
      setEmail = _f[1];

  var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      password = _g[0],
      setPassword = _g[1];

  var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      remember = _h[0],
      setRemember = _h[1];

  var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      errors = _j[0],
      setErrors = _j[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    (0,_service__WEBPACK_IMPORTED_MODULE_1__.login)(email, password, remember).then(function () {
      return (0,_services_fetchUser__WEBPACK_IMPORTED_MODULE_4__.fetchUser)();
    }).then(function (res) {
      setLoading(false);
      setUser(res.data);
    })["catch"](function (err) {
      setLoading(false);
      setErrors(err.response.data);
    });
  };

  if (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Redirect, {
      to: "/"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AuthLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    method: "POST",
    action: "/login",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Email",
    name: "email",
    fullWidth: true,
    required: true,
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    error: !!((_a = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _a === void 0 ? void 0 : _a.email),
    helperText: (_c = (_b = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _b === void 0 ? void 0 : _b.email) === null || _c === void 0 ? void 0 : _c.join(" ")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Password",
    name: "password",
    fullWidth: true,
    required: true,
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: "remember",
      checked: remember,
      onChange: function onChange() {
        return setRemember(!remember);
      }
    }),
    label: "Remember me"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.buttonRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    endIcon: loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {
      size: 24
    }),
    disabled: loading
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link,
    to: "/password/reset"
  }, "Forgot Your Password?"))));
}

/***/ }),

/***/ "./resources/ts/auth/Register.tsx":
/*!****************************************!*\
  !*** ./resources/ts/auth/Register.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./resources/ts/auth/service.ts");
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthContext */ "./resources/ts/auth/AuthContext.tsx");
/* harmony import */ var _AuthLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthLayout */ "./resources/ts/auth/AuthLayout.tsx");
/* harmony import */ var _services_fetchUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/fetchUser */ "./resources/ts/auth/services/fetchUser.ts");











function Register() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

  var _o = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),
      user = _o.user,
      setUser = _o.setUser;

  var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      loading = _p[0],
      setLoading = _p[1];

  var _q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      name = _q[0],
      setName = _q[1];

  var _r = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      email = _r[0],
      setEmail = _r[1];

  var _s = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      password = _s[0],
      setPassword = _s[1];

  var _t = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      passwordConfirmation = _t[0],
      setPasswordConfirmation = _t[1];

  var _u = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      errors = _u[0],
      setErrors = _u[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    (0,_service__WEBPACK_IMPORTED_MODULE_1__.register)(name, email, password, passwordConfirmation).then(function () {
      return (0,_services_fetchUser__WEBPACK_IMPORTED_MODULE_4__.fetchUser)();
    }).then(function (res) {
      setLoading(false);
      setUser(res.data);
    })["catch"](function (err) {
      setLoading(false);
      setErrors(err.response.data);
    });
  };

  if (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
      to: "/email/verify"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AuthLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    method: "POST",
    action: "/register",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Name",
    name: "name",
    fullWidth: true,
    required: true,
    type: "string",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    error: !!((_a = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _a === void 0 ? void 0 : _a.name),
    helperText: (_c = (_b = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.join(" ")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Email",
    name: "email",
    fullWidth: true,
    required: true,
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    error: !!((_d = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _d === void 0 ? void 0 : _d.email),
    helperText: (_f = (_e = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _e === void 0 ? void 0 : _e.email) === null || _f === void 0 ? void 0 : _f.join(" ")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Password",
    name: "password",
    fullWidth: true,
    required: true,
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    error: !!((_g = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _g === void 0 ? void 0 : _g.password),
    helperText: (_j = (_h = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _h === void 0 ? void 0 : _h.password) === null || _j === void 0 ? void 0 : _j.join(" ")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Confirm Password",
    name: "password_confirmation",
    fullWidth: true,
    required: true,
    type: "password",
    value: passwordConfirmation,
    onChange: function onChange(e) {
      return setPasswordConfirmation(e.target.value);
    },
    error: !!((_k = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _k === void 0 ? void 0 : _k.password_confirmation),
    helperText: (_m = (_l = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _l === void 0 ? void 0 : _l.password_confirmation) === null || _m === void 0 ? void 0 : _m.join(" ")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    endIcon: loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
      size: 24
    }),
    disabled: loading
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], null, "By joining, you agree to the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/terms"
  }, "Terms"), " ", "and", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/privacy"
  }, "Privacy Policy"), ".")));
}

/***/ }),

/***/ "./resources/ts/auth/VerifyEmail.tsx":
/*!*******************************************!*\
  !*** ./resources/ts/auth/VerifyEmail.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VerifyEmail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthContext */ "./resources/ts/auth/AuthContext.tsx");
/* harmony import */ var _AuthLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthLayout */ "./resources/ts/auth/AuthLayout.tsx");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./resources/ts/auth/service.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");










function VerifyEmail() {
  var user = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)().user;

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      loading = _a[0],
      setLoading = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      result = _b[0],
      setResult = _b[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    (0,_service__WEBPACK_IMPORTED_MODULE_3__.resendEmail)().then(function () {
      setLoading(false);
      setResult(true);
    })["catch"](function () {
      setLoading(false);
      setResult(false);
    });
  };

  if (user === null || user === void 0 ? void 0 : user.email_verified_at) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
      to: "/"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AuthLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1"
  }, "A verification email has been sent to your email address. Please check your inbox (and spam folder).")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1"
  }, "If you didn't receive the email in 5 minutes, click the button below:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    my: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "primary",
    endIcon: loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {
      size: 24
    }),
    disabled: loading,
    onClick: handleSubmit
  }, "Resend Verification Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: "/",
    sx: {
      ml: 1
    }
  }, "Skip")), typeof result === "boolean" && (result ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "filled",
    severity: "success"
  }, "Verification email was sent successfully!") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "filled",
    severity: "error"
  }, "Failed to send verification email. Please check your network and try again later.")));
}

/***/ }),

/***/ "./resources/ts/auth/service.ts":
/*!**************************************!*\
  !*** ./resources/ts/auth/service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "resendEmail": () => (/* binding */ resendEmail)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function login(email, password, remember) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/login", {
    email: email,
    password: password,
    remember: remember
  });
}
function logout() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/logout");
}
function register(name, email, password, password_confirmation) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/register", {
    name: name,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  });
}
function resendEmail() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/email/resend");
}

/***/ }),

/***/ "./resources/ts/auth/services/fetchUser.ts":
/*!*************************************************!*\
  !*** ./resources/ts/auth/services/fetchUser.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUser": () => (/* binding */ fetchUser)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function fetchUser() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/user");
}

/***/ }),

/***/ "./resources/ts/auth/services/updateUser.ts":
/*!**************************************************!*\
  !*** ./resources/ts/auth/services/updateUser.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function updateUser(user) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("/api/user", user);
}

/***/ }),

/***/ "./resources/ts/config/bootstrap.ts":
/*!******************************************!*\
  !*** ./resources/ts/config/bootstrap.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common["X-Requested-With"]) = "XMLHttpRequest";
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/ts/config/navigation.tsx":
/*!********************************************!*\
  !*** ./resources/ts/config/navigation.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Home */ "./node_modules/@mui/icons-material/Home.js");
/* harmony import */ var _mui_icons_material_People__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/People */ "./node_modules/@mui/icons-material/People.js");
/* harmony import */ var _mui_icons_material_Book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Book */ "./node_modules/@mui/icons-material/Book.js");
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Person */ "./node_modules/@mui/icons-material/Person.js");





var navigationConfig = {
  topItems: [],
  bottomItems: [{
    text: "Home",
    href: "/",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }, {
    text: "Labs",
    href: "/labs",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_People__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }, {
    text: "Blog",
    href: "/blog",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Book__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, {
    text: "User",
    href: "/user",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationConfig);

/***/ }),

/***/ "./resources/ts/config/theme.ts":
/*!**************************************!*\
  !*** ./resources/ts/config/theme.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/pink.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/indigo.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");


/**
 * @see https://material.io/resources/color/
 */

var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["default"])({
  palette: {
    primary: {
      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__["default"][200]
    },
    secondary: {
      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__["default"][200]
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./resources/ts/images/Banner.tsx":
/*!****************************************!*\
  !*** ./resources/ts/images/Banner.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__["default"])({
  root: {
    display: "block",
    width: "100%"
  }
});
function Banner(_a) {
  var className = _a.className,
      rest = __rest(_a, ["className"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", __assign({
    className: classes.root
  }, rest));
}

/***/ }),

/***/ "./resources/ts/images/ImageUploadCard.tsx":
/*!*************************************************!*\
  !*** ./resources/ts/images/ImageUploadCard.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageUploadCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/createStyles/createStyles.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardActionArea */ "./node_modules/@mui/material/CardActionArea/CardActionArea.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_icons_material_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/CloudUploadOutlined */ "./node_modules/@mui/icons-material/CloudUploadOutlined.js");
/* harmony import */ var _mui_icons_material_RemoveCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/RemoveCircle */ "./node_modules/@mui/icons-material/RemoveCircle.js");
/* harmony import */ var _image_file_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-file-utils */ "./resources/ts/images/image-file-utils.ts");










var size = 200;
var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({
    root: {
      position: "relative",
      width: size,
      height: size,
      marginTop: theme.spacing(2)
    },
    actionArea: {
      width: "100%",
      height: "100%"
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    },
    placeholder: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    placeholderIcon: {
      fontSize: theme.spacing(5)
    },
    removeButton: {
      position: "absolute",
      right: theme.spacing(0.5),
      top: theme.spacing(0.5),
      background: theme.palette.background.paper + " !important"
    }
  });
});
function ImageUploadCard(_a) {
  var image = _a.image,
      disabled = _a.disabled,
      onChange = _a.onChange,
      onRemove = _a.onRemove;
  var classes = useStyles();
  var input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      localImage = _b[0],
      setLocalImage = _b[1];

  var handleSelect = function handleSelect() {
    var _a;

    (_a = input.current) === null || _a === void 0 ? void 0 : _a.click();
  };

  var handleRemove = function handleRemove() {
    if (onRemove) {
      onRemove();
    }

    if (input.current) {
      input.current.value = "";
    }

    setLocalImage(null);
  };

  var handleChange = function handleChange(e) {
    var input = e.target;

    if (input.files && input.files[0]) {
      var file_1 = input.files[0];
      (0,_image_file_utils__WEBPACK_IMPORTED_MODULE_1__.readFileAsDataString)(file_1).then(function (data) {
        if (onChange) {
          onChange(file_1, data);
        }

        setLocalImage(data);
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CardActionArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.actionArea,
    onClick: handleSelect
  }, localImage || image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.image,
    component: "img",
    image: localImage || image
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.placeholder
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.placeholderIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Upload Image"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    ref: input,
    type: "file",
    accept: "image/*",
    hidden: true,
    onChange: handleChange,
    disabled: disabled
  }), localImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.removeButton,
    size: "small",
    onClick: handleRemove
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_RemoveCircle__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
}

/***/ }),

/***/ "./resources/ts/images/ImageUploadGrid.tsx":
/*!*************************************************!*\
  !*** ./resources/ts/images/ImageUploadGrid.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageUploadGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/createStyles/createStyles.js");


var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(function (theme) {
  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
    root: {
      position: "relative"
    }
  });
});
function ImageUploadGrid(_a) {
  var max = _a.max;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
}

/***/ }),

/***/ "./resources/ts/images/image-file-utils.ts":
/*!*************************************************!*\
  !*** ./resources/ts/images/image-file-utils.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readFileAsDataString": () => (/* binding */ readFileAsDataString)
/* harmony export */ });
function readFileAsDataString(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var _a;

      resolve((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
    };

    reader.readAsDataURL(file);
  });
}

/***/ }),

/***/ "./resources/ts/images/service.ts":
/*!****************************************!*\
  !*** ./resources/ts/images/service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upload": () => (/* binding */ upload)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function upload(image, x, y, width, height) {
  var data = new FormData();
  data.append("image", image);

  if (typeof x === "number" && x >= 0 && typeof y === "number" && y >= 0 && typeof width === "number" && width >= 0 && typeof height === "number" && height >= 0) {
    data.append("x", x.toString());
    data.append("y", y.toString());
    data.append("width", width.toString());
    data.append("height", height.toString());
  }

  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/images", data);
}

/***/ }),

/***/ "./resources/ts/index.tsx":
/*!********************************!*\
  !*** ./resources/ts/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _config_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/bootstrap */ "./resources/ts/config/bootstrap.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./resources/ts/App.tsx");




var root = document.getElementById("app-root");

if (root) {
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null), root);
}

/***/ }),

/***/ "./resources/ts/users/Settings.tsx":
/*!*****************************************!*\
  !*** ./resources/ts/users/Settings.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/createStyles/createStyles.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _auth_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/AuthContext */ "./resources/ts/auth/AuthContext.tsx");
/* harmony import */ var _images_ImageUploadCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/ImageUploadCard */ "./resources/ts/images/ImageUploadCard.tsx");
/* harmony import */ var _images_ImageUploadGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/ImageUploadGrid */ "./resources/ts/images/ImageUploadGrid.tsx");
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/service */ "./resources/ts/images/service.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};









var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return (0,_mui_styles__WEBPACK_IMPORTED_MODULE_6__["default"])({
    root: {
      paddingTop: theme.spacing(6)
    }
  });
});
function Settings() {
  var _a;

  var classes = useStyles();

  var _b = (0,_auth_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)(),
      user = _b.user,
      setUser = _b.setUser;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h1"
  }, "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h2"
  }, "Images"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_images_ImageUploadCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: (_a = user === null || user === void 0 ? void 0 : user.avatar) === null || _a === void 0 ? void 0 : _a.url,
    onChange: function onChange(file) {
      if (file && user) {
        (0,_images_service__WEBPACK_IMPORTED_MODULE_4__.upload)(file).then(function (res) {
          var avatar = res.data;

          var newUser = __assign(__assign({}, user), {
            avatar: avatar,
            avatar_id: avatar.id
          });

          setUser(newUser);
        });
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_images_ImageUploadGrid__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/ts/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);