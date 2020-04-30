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
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\n          body {\n            margin: 0;\n            background: ;\n            background: linear-gradient(0deg, rgba(5,37,37,1) 0%, rgba(0,62,136,1) 100%);\n          }\n        ")), __jsx(_components_page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h3",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Alex Plays"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "I'm a \xA0", __jsx(react_text_loop__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
        lineNumber: 50
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
      lineNumber: 57
    },
    __self: this
  }, "Alex has toured the world with his music. His journey started with Cirque inspired scoring and vocals. He has worked with Warner Brothers, Universal Music Group, EMI and Cirque du Soleil. His collaborations have been nominated for Grammys. In Hang Zhou China, Alex worked with the creation team on the music & playback for Cirque du Soleil's New Chinese Resident Show ", __jsx("br", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "\"Cirque X the Land of Fantasy.\""), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h3",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Sound Cloud"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h3",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Sound Cloud"), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      marginBottom: 24
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
      lineNumber: 74
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h3",
    gutterBottom: true,
    style: {
      marginBottom: 24
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Sound Cloud"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    md: 4,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
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
      lineNumber: 85
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    md: 4,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Music Production"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Mixing"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Song Writing"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Mastering"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Grammy Consultation"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Jingles"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Scoring"), __jsx("li", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("a", {
    href: "http://ifixyourmix.com/",
    target: "blank",
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "ifixyourmix.com"))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    md: 4,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
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
      lineNumber: 104
    },
    __self: this
  }))))), __jsx("div", {
    className: "jsx-3153929447" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    style: {
      padding: 24,
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Production Services")), __jsx("div", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3153929447",
    __self: this
  }, ".hero.jsx-3153929447{width:100%;color:#333;}.title.jsx-3153929447{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-3153929447,.description.jsx-3153929447{text-align:center;}.row.jsx-3153929447{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.date.jsx-3153929447{height:24px;max-width:calc(100% - 32px) text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 16px;}.date.jsx-3153929447 p.jsx-3153929447{text-align:center;}.date.jsx-3153929447 span.jsx-3153929447{width:176px;text-align:center;}@-webkit-keyframes Loading-jsx-3153929447{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes Loading-jsx-3153929447{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.date.jsx-3153929447 .loading.jsx-3153929447{max-width:100%;height:24px;border-radius:4px;display:inline-block;background:linear-gradient(270deg,#D1D1D1,#EAEAEA);background-size:200% 200%;-webkit-animation:Loading-jsx-3153929447 2s ease infinite;animation:Loading-jsx-3153929447 2s ease infinite;}.card.jsx-3153929447{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-3153929447:hover{border-color:#067df7;}.card.jsx-3153929447 h3.jsx-3153929447{margin:0;color:#067df7;font-size:18px;}.card.jsx-3153929447 p.jsx-3153929447{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmluY2VhbGlraGFuL0dpdGh1Yi9wZXJzb25hbC13ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKa0IsQUFHc0IsQUFJRixBQVFTLEFBR0YsQUFPSixBQVNNLEFBR04sQUFJZSxBQUNHLEFBQ0QsQUFHZCxBQVNRLEFBUUYsQUFHWixBQUtBLFNBL0RFLEFBMkRHLEFBS0csRUFwRU4sQ0F1Qk8sQUFXQSxHQVNOLENBNUJVLEVBSHhCLEFBbUJBLEVBMUJtQixDQXVEbkIsQ0EzREEsQ0FtRGMsQUFZRyxHQUtBLENBaENhLEFBRUUsQUFLWixFQU5hLENBSGpDLEtBa0JrQixFQS9DQyxDQVVKLEFBaURmLEdBS2EsSUF6QlUsTUFTQSxDQWlCdkIsRUFoRWlCLElBaUJGLFFBc0J3QyxHQXRDdkQsZ0NBK0NnQixXQXRDSyxHQXVDTSxFQVRDLGVBdEJQLFFBZ0NyQixHQVRxQyxzQ0E5Qk4sNENBUU4sMEJBdUJ6QixxREE5QkEsb0JBUWlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9wcmluY2VhbGlraGFuL0dpdGh1Yi9wZXJzb25hbC13ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZCc7XG5pbXBvcnQgeyBUd2l0dGVyVGltZWxpbmVFbWJlZCwgVHdpdHRlclNoYXJlQnV0dG9uLCBUd2l0dGVyRm9sbG93QnV0dG9uLCBUd2l0dGVySGFzaHRhZ0J1dHRvbiwgVHdpdHRlck1lbnRpb25CdXR0b24sIFR3aXR0ZXJUd2VldEVtYmVkLCBUd2l0dGVyTW9tZW50U2hhcmUsIFR3aXR0ZXJETUJ1dHRvbiwgVHdpdHRlclZpZGVvRW1iZWQsIFR3aXR0ZXJPbkFpckJ1dHRvbiB9IGZyb20gJ3JlYWN0LXR3aXR0ZXItZW1iZWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dExvb3AgZnJvbSBcInJlYWN0LXRleHQtbG9vcFwiO1xuaW1wb3J0IEdyaWQsIHsgR3JpZFNwYWNpbmcgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGUnKTtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgc2V0RGF0ZShuZXdEYXRlKTtcbiAgICB9XG4gICAgZ2V0RGF0ZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNSwzNywzNywxKSAwJSwgcmdiYSgwLDYyLDEzNiwxKSAxMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICBBbGV4IFBsYXlzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgSSdtIGEgJm5ic3A7XG4gICAgICAgICAgPFRleHRMb29wPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgXCJWb2NhbGlzdCBHdWl0YXJpc3QgQ2VsbGlzdCBDb21wb3NlclwiLFxuICAgICAgICAgICAgICBcIk11c2ljIFByb2R1Y2VyXCIsXG4gICAgICAgICAgICAgIFwiU29uZyBXcml0ZXJcIlxuICAgICAgICAgICAgXS5tYXAoKGxpbmUsa2V5KSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGlkPXtrZXl9IHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5cbiAgICAgICAgICAgICAgICB7bGluZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UZXh0TG9vcD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICBcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgZ3V0dGVyQm90dG9tIHN0eWxlPXt7Y29sb3I6ICdncmF5JyxtYXhXaWR0aDogNjQwfX0+XG4gICAgICAgICAgQWxleCBoYXMgdG91cmVkIHRoZSB3b3JsZCB3aXRoIGhpcyBtdXNpYy4gSGlzIGpvdXJuZXkgc3RhcnRlZCB3aXRoIENpcnF1ZSBpbnNwaXJlZCBzY29yaW5nIGFuZCB2b2NhbHMuXG4gICAgICAgICAgSGUgaGFzIHdvcmtlZCB3aXRoIFdhcm5lciBCcm90aGVycywgVW5pdmVyc2FsIE11c2ljIEdyb3VwLCBFTUkgYW5kIENpcnF1ZSBkdSBTb2xlaWwuIEhpcyBjb2xsYWJvcmF0aW9ucyBoYXZlIGJlZW4gbm9taW5hdGVkIGZvciBHcmFtbXlzLlxuICAgICAgICAgIEluIEhhbmcgWmhvdSBDaGluYSwgQWxleCB3b3JrZWQgd2l0aCB0aGUgY3JlYXRpb24gdGVhbSBvbiB0aGUgbXVzaWMgJiBwbGF5YmFjayBmb3IgQ2lycXVlIGR1IFNvbGVpbCdzIE5ldyBDaGluZXNlIFJlc2lkZW50IFNob3cgPGJyLz5cbiAgICAgICAgICBcIkNpcnF1ZSBYIHRoZSBMYW5kIG9mIEZhbnRhc3kuXCIgICAgICBcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIFNvdW5kIENsb3VkXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgU291bmQgQ2xvdWRcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICBcbiAgICAgICAgPENhcmQgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDI0fX0+XG4gICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0NjBcIiBzY3JvbGxpbmc9XCJ5ZXNcIiBmcmFtZUJvcmRlcj1cIm5vXCIgc3JjPVwiaHR0cHM6Ly93LnNvdW5kY2xvdWQuY29tL3BsYXllci8/dXJsPWh0dHBzJTNBLy9hcGkuc291bmRjbG91ZC5jb20vdXNlcnMvMzUyNTc1NCZhdXRvX3BsYXk9ZmFsc2UmaGlkZV9yZWxhdGVkPWZhbHNlJnNob3dfY29tbWVudHM9dHJ1ZSZzaG93X3VzZXI9dHJ1ZSZzaG93X3JlcG9zdHM9ZmFsc2UmdmlzdWFsPXRydWVcIj48L2lmcmFtZT5cbiAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbSBzdHlsZT17e21hcmdpbkJvdHRvbTogMjR9fT5cbiAgICAgICAgICBTb3VuZCBDbG91ZFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyICBzcGFjaW5nPXsyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHNtPXs2fT5cbiAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgPGlmcmFtZSBmcmFtZUJvcmRlcj1cIm5vXCIgaGVpZ2h0PVwiNDYwcHhcIiBuYW1lPVwiYWxidW1cIiBzcmM9XCIvL3dpZGdldC5jZGJhYnkuY29tLzJjMGI1YTViLTNhZjEtNDExZC05ZWQzLTM2NTEyMWRjMjcxYy9hbGJ1bS9saWdodC9vcGFxdWVcIj48L2lmcmFtZT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gc209ezZ9PlxuICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5NdXNpYyBQcm9kdWN0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5NaXhpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlNvbmcgV3JpdGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+TWFzdGVyaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5HcmFtbXkgQ29uc3VsdGF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5KaW5nbGVzPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TY29yaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2lmaXh5b3VybWl4LmNvbS9cIiB0YXJnZXQ9XCJibGFua1wiPmlmaXh5b3VybWl4LmNvbTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHNtPXs2fT5cbiAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgPFR3aXR0ZXJUaW1lbGluZUVtYmVkXG4gICAgICAgICAgICAgICAgc291cmNlVHlwZT1cInByb2ZpbGVcIlxuICAgICAgICAgICAgICAgIHNjcmVlbk5hbWU9XCJhbGV4cGxheXNtdXNpY1wiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e2hlaWdodDogODYwfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG5cblxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+ICovfVxuXG5cbiAgICAgIDwvUGFnZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICBcbiAgXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjQsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ319PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXY+ICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+UHJvZHVjdGlvbiBTZXJ2aWNlczwvaDI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICBcbiAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzJweClcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuZGF0ZSBwIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDE3NnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIExvYWRpbmcge1xuICAgICAgICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgICAgICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxuICAgICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUgLmxvYWRpbmcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRDFEMUQxLCAjRUFFQUVBKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMjAwJTtcbiAgICAgICAgICBhbmltYXRpb246IExvYWRpbmcgMnMgZWFzZSBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/princealikhan/Github/personal-website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7e3ca8ab2384473093a9.hot-update.js.map