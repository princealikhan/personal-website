webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_text_loop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-text-loop */ "./node_modules/react-text-loop/es/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");

var _jsxFileName = "/Users/princealikhan/Github/personal-website/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      date = _useState[0],
      setDate = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function getDate() {
      var res, newDate;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getDate$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('/api/date'));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 5:
              newDate = _context.sent;
              setDate(newDate);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    getDate();
  }, []);
  return __jsx("div", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\n          body {\n            margin: 0;\n            background: ;\n            background: linear-gradient(0deg, rgba(5,37,37,1) 0%, rgba(0,62,136,1) 100%);\n          }\n        ")), __jsx(_components_page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h3",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Alex Plays"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "I'm a \xA0", __jsx(react_text_loop__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, ["Vocalist Guitarist Cellist Composer", "Music Producer", "Song Writer"].map(function (line, key) {
    return __jsx("span", {
      id: key,
      style: {
        fontWeight: 'bold'
      },
      className: "jsx-3153929447",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, line);
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    gutterBottom: true,
    style: {
      color: 'gray',
      maxWidth: 640
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Alex has toured the world with his music. His journey started with Cirque inspired scoring and vocals. He has worked with Warner Brothers, Universal Music Group, EMI and Cirque du Soleil. His collaborations have been nominated for Grammys. In Hang Zhou China, Alex worked with the creation team on the music & playback for Cirque du Soleil's New Chinese Resident Show ", __jsx("br", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "\"Cirque X the Land of Fantasy.\""), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h3",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Sound Cloud"), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      marginBottom: 24
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("iframe", {
    width: "100%",
    height: "460",
    scrolling: "yes",
    frameBorder: "no",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3525754&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true",
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h3",
    gutterBottom: true,
    style: {
      marginTop: 24,
      marginBottom: 24
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    md: 4,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("iframe", {
    frameBorder: "no",
    height: "460px",
    name: "album",
    src: "//widget.cdbaby.com/2c0b5a5b-3af1-411d-9ed3-365121dc271c/album/light/opaque",
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    md: 4,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__["default"], {
    primary: "Music Production",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }))), __jsx("ul", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Mixing"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Song Writing"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Mastering"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Grammy Consultation"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Jingles"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Scoring"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("a", {
    href: "http://ifixyourmix.com/",
    target: "blank",
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "ifixyourmix.com"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    md: 4,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_8__["TwitterTimelineEmbed"], {
    sourceType: "profile",
    screenName: "alexplaysmusic",
    options: {
      height: 860
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3153929447",
    __self: this
  }, ".hero.jsx-3153929447{width:100%;color:#333;}.title.jsx-3153929447{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-3153929447,.description.jsx-3153929447{text-align:center;}.row.jsx-3153929447{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.date.jsx-3153929447{height:24px;max-width:calc(100% - 32px) text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 16px;}.date.jsx-3153929447 p.jsx-3153929447{text-align:center;}.date.jsx-3153929447 span.jsx-3153929447{width:176px;text-align:center;}@-webkit-keyframes Loading-jsx-3153929447{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes Loading-jsx-3153929447{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.date.jsx-3153929447 .loading.jsx-3153929447{max-width:100%;height:24px;border-radius:4px;display:inline-block;background:linear-gradient(270deg,#D1D1D1,#EAEAEA);background-size:200% 200%;-webkit-animation:Loading-jsx-3153929447 2s ease infinite;animation:Loading-jsx-3153929447 2s ease infinite;}.card.jsx-3153929447{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-3153929447:hover{border-color:#067df7;}.card.jsx-3153929447 h3.jsx-3153929447{margin:0;color:#067df7;font-size:18px;}.card.jsx-3153929447 p.jsx-3153929447{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmluY2VhbGlraGFuL0dpdGh1Yi9wZXJzb25hbC13ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIa0IsQUFHc0IsQUFJRixBQVFTLEFBR0YsQUFPSixBQVNNLEFBR04sQUFJZSxBQUNHLEFBQ0QsQUFHZCxBQVNRLEFBUUYsQUFHWixBQUtBLFNBL0RFLEFBMkRHLEFBS0csRUFwRU4sQ0F1Qk8sQUFXQSxHQVNOLENBNUJVLEVBSHhCLEFBbUJBLEVBMUJtQixDQXVEbkIsQ0EzREEsQ0FtRGMsQUFZRyxHQUtBLENBaENhLEFBRUUsQUFLWixFQU5hLENBSGpDLEtBa0JrQixFQS9DQyxDQVVKLEFBaURmLEdBS2EsSUF6QlUsTUFTQSxDQWlCdkIsRUFoRWlCLElBaUJGLFFBc0J3QyxHQXRDdkQsZ0NBK0NnQixXQXRDSyxHQXVDTSxFQVRDLGVBdEJQLFFBZ0NyQixHQVRxQyxzQ0E5Qk4sNENBUU4sMEJBdUJ6QixxREE5QkEsb0JBUWlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9wcmluY2VhbGlraGFuL0dpdGh1Yi9wZXJzb25hbC13ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZCc7XG5pbXBvcnQgeyBUd2l0dGVyVGltZWxpbmVFbWJlZCwgVHdpdHRlclNoYXJlQnV0dG9uLCBUd2l0dGVyRm9sbG93QnV0dG9uLCBUd2l0dGVySGFzaHRhZ0J1dHRvbiwgVHdpdHRlck1lbnRpb25CdXR0b24sIFR3aXR0ZXJUd2VldEVtYmVkLCBUd2l0dGVyTW9tZW50U2hhcmUsIFR3aXR0ZXJETUJ1dHRvbiwgVHdpdHRlclZpZGVvRW1iZWQsIFR3aXR0ZXJPbkFpckJ1dHRvbiB9IGZyb20gJ3JlYWN0LXR3aXR0ZXItZW1iZWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dExvb3AgZnJvbSBcInJlYWN0LXRleHQtbG9vcFwiO1xuaW1wb3J0IEdyaWQsIHsgR3JpZFNwYWNpbmcgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGUnKTtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0RGF0ZShuZXdEYXRlKTtcbiAgICB9XG4gICAgZ2V0RGF0ZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNSwzNywzNywxKSAwJSwgcmdiYSgwLDYyLDEzNiwxKSAxMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICBBbGV4IFBsYXlzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgSSdtIGEgJm5ic3A7XG4gICAgICAgICAgPFRleHRMb29wPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgXCJWb2NhbGlzdCBHdWl0YXJpc3QgQ2VsbGlzdCBDb21wb3NlclwiLFxuICAgICAgICAgICAgICBcIk11c2ljIFByb2R1Y2VyXCIsXG4gICAgICAgICAgICAgIFwiU29uZyBXcml0ZXJcIlxuICAgICAgICAgICAgXS5tYXAoKGxpbmUsa2V5KSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGlkPXtrZXl9IHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cbiAgICAgICAgICAgICAgICB7bGluZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UZXh0TG9vcD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICBcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7Y29sb3I6ICdncmF5JyxtYXhXaWR0aDogNjQwfX0+XG4gICAgICAgICAgQWxleCBoYXMgdG91cmVkIHRoZSB3b3JsZCB3aXRoIGhpcyBtdXNpYy4gSGlzIGpvdXJuZXkgc3RhcnRlZCB3aXRoIENpcnF1ZSBpbnNwaXJlZCBzY29yaW5nIGFuZCB2b2NhbHMuXG4gICAgICAgICAgSGUgaGFzIHdvcmtlZCB3aXRoIFdhcm5lciBCcm90aGVycywgVW5pdmVyc2FsIE11c2ljIEdyb3VwLCBFTUkgYW5kIENpcnF1ZSBkdSBTb2xlaWwuIEhpcyBjb2xsYWJvcmF0aW9ucyBoYXZlIGJlZW4gbm9taW5hdGVkIGZvciBHcmFtbXlzLlxuICAgICAgICAgIEluIEhhbmcgWmhvdSBDaGluYSwgQWxleCB3b3JrZWQgd2l0aCB0aGUgY3JlYXRpb24gdGVhbSBvbiB0aGUgbXVzaWMgJiBwbGF5YmFjayBmb3IgQ2lycXVlIGR1IFNvbGVpbCdzIE5ldyBDaGluZXNlIFJlc2lkZW50IFNob3cgPGJyLz5cbiAgICAgICAgICBcIkNpcnF1ZSBYIHRoZSBMYW5kIG9mIEZhbnRhc3kuXCIgICAgICBcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIFNvdW5kIENsb3VkXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8Q2FyZCBzdHlsZT17e21hcmdpbkJvdHRvbTogMjR9fT5cbiAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjQ2MFwiIHNjcm9sbGluZz1cInllc1wiIGZyYW1lQm9yZGVyPVwibm9cIiBzcmM9XCJodHRwczovL3cuc291bmRjbG91ZC5jb20vcGxheWVyLz91cmw9aHR0cHMlM0EvL2FwaS5zb3VuZGNsb3VkLmNvbS91c2Vycy8zNTI1NzU0JmF1dG9fcGxheT1mYWxzZSZoaWRlX3JlbGF0ZWQ9ZmFsc2Umc2hvd19jb21tZW50cz10cnVlJnNob3dfdXNlcj10cnVlJnNob3dfcmVwb3N0cz1mYWxzZSZ2aXN1YWw9dHJ1ZVwiPjwvaWZyYW1lPlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICBcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7bWFyZ2luVG9wOiAyNCwgbWFyZ2luQm90dG9tOiAyNH19PlxuICAgICAgICAgIFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyICBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHNtPXs2fT5cbiAgICAgICAgICAgIDxQYXBlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgIDxpZnJhbWUgZnJhbWVCb3JkZXI9XCJub1wiIGhlaWdodD1cIjQ2MHB4XCIgbmFtZT1cImFsYnVtXCIgc3JjPVwiLy93aWRnZXQuY2RiYWJ5LmNvbS8yYzBiNWE1Yi0zYWYxLTQxMWQtOWVkMy0zNjUxMjFkYzI3MWMvYWxidW0vbGlnaHQvb3BhcXVlXCI+PC9pZnJhbWU+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHNtPXs2fT5cbiAgICAgICAgICAgIDxQYXBlcj5cblxuICAgICAgICAgICAgPExpc3QgPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNdXNpYyBQcm9kdWN0aW9uXCIvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPC9MaXN0PlxuXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+TWl4aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5Tb25nIFdyaXRpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPk1hc3RlcmluZzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+R3JhbW15IENvbnN1bHRhdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SmluZ2xlczwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+U2NvcmluZzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9pZml4eW91cm1peC5jb20vXCIgdGFyZ2V0PVwiYmxhbmtcIj5pZml4eW91cm1peC5jb208L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBzbT17Nn0+XG4gICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgIDxUd2l0dGVyVGltZWxpbmVFbWJlZFxuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU9XCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgICBzY3JlZW5OYW1lPVwiYWxleHBsYXlzbXVzaWNcIlxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3toZWlnaHQ6IDg2MH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICA8L1BhZ2U+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUgcCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kYXRlIHNwYW4ge1xuICAgICAgICAgIHdpZHRoOiAxNzZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBMb2FkaW5nIHtcbiAgICAgICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgICAgICB9XG4gICAgICAgIC5kYXRlIC5sb2FkaW5nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0QxRDFEMSwgI0VBRUFFQSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBMb2FkaW5nIDJzIGVhc2UgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/princealikhan/Github/personal-website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b520343a0bb06c57fbdc.hot-update.js.map