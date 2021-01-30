// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../imges/bg-pattern-top-mobile.svg":[["bg-pattern-top-mobile.3f2bdc45.svg","imges/bg-pattern-top-mobile.svg"],"imges/bg-pattern-top-mobile.svg"],"./../imges/bg-pattern-top-desktop.svg":[["bg-pattern-top-desktop.b730fc6a.svg","imges/bg-pattern-top-desktop.svg"],"imges/bg-pattern-top-desktop.svg"],"./../imges/bg-pattern-bottom-desktop.svg":[["bg-pattern-bottom-desktop.3493922b.svg","imges/bg-pattern-bottom-desktop.svg"],"imges/bg-pattern-bottom-desktop.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"imges/image-colton.jpg":[function(require,module,exports) {
module.exports = "/image-colton.5fccfd0b.jpg";
},{}],"imges/image-irene.jpg":[function(require,module,exports) {
module.exports = "/image-irene.cc5da65a.jpg";
},{}],"imges/image-anne.jpg":[function(require,module,exports) {
module.exports = "/image-anne.91746bd5.jpg";
},{}],"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imageColton = _interopRequireDefault(require("../imges/image-colton.jpg"));

var _imageIrene = _interopRequireDefault(require("../imges/image-irene.jpg"));

var _imageAnne = _interopRequireDefault(require("../imges/image-anne.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  colton: {
    image: _imageColton.default,
    fullName: "Colton Smith",
    verified: "Verified Buyer",
    review: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Exellent!"
  },
  irene: {
    image: _imageIrene.default,
    fullName: "Irene Roberts",
    verified: "Verified Buyer",
    review: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
  },
  anne: {
    image: _imageAnne.default,
    fullName: "Anne Wallace",
    verified: "Verified Buyer",
    review: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
  }
};
var _default = user;
exports.default = _default;
},{"../imges/image-colton.jpg":"imges/image-colton.jpg","../imges/image-irene.jpg":"imges/image-irene.jpg","../imges/image-anne.jpg":"imges/image-anne.jpg"}],"js/Description.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buyer = function Buyer(image, fullName, verified, review) {
  _classCallCheck(this, Buyer);

  this.image = image;
  this.fullName = fullName;
  this.verified = verified;
  this.review = review;
};

var _default = Buyer;
exports.default = _default;
},{}],"js/UI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, [{
    key: "render",
    value: function render(user1, user2, user3) {
      var reviews = document.getElementById("reviews"),
          div = document.createElement("div");
      div.className = "reviews__testimonials";
      div.innerHTML = "\n          <article class=\"reviews__cards reviews__cards--one\">\n            <div class=\"reviews__cardWrapper reviews__cardWrapper--one\">\n              <img\n                src=\"".concat(user1.image, "\"\n                alt=\"").concat(user1.fullName, "\"\n                class=\"reviews__cardsImg\"\n              />\n              <h2 class=\"reviews__name\">\n                <span class=\"reviews__subtitle\">").concat(user1.fullName, "</span>\n                <span class=\"reviews__cardVerify\">").concat(user1.verified, "</span>\n              </h2>\n            </div>\n            <blockquote>\n              <p class=\"reviews__cardDescription\">\n                ").concat(user1.review, "\n              </p>\n            </blockquote>\n          </article>\n\n          <article class=\"reviews__cards reviews__cards--two\">\n            <div class=\"reviews__cardWrapper\">\n              <img\n                src=\"").concat(user2.image, "\"\n                alt=\"").concat(user2.fullName, "\"\n                class=\"reviews__cardsImg\"\n              />\n              <h2 class=\"reviews__name\">\n                <span class=\"reviews__subtitle\">").concat(user2.fullName, "</span>\n                <span class=\"reviews__cardVerify\">").concat(user2.verified, "</span>\n              </h2>\n            </div>\n            <blockquote>\n              <p class=\"reviews__cardDescription\">\n                ").concat(user2.review, "\n              </p>\n            </blockquote>\n          </article>\n\n          <article class=\"reviews__cards reviews__cards--three\">\n            <div class=\"reviews__cardWrapper\">\n              <img\n                src=\"").concat(user3.image, "\"\n                alt=\"").concat(user3.fullName, "\"\n                class=\"reviews__cardsImg\"\n              />\n              <h2 class=\"reviews__name\">\n                <span class=\"reviews__subtitle\">").concat(user3.fullName, "</span>\n                <span class=\"reviews__cardVerify\">").concat(user3.verified, "</span>\n              </h2>\n            </div>\n            <blockquote>\n              <p class=\"reviews__cardDescription\">\n                ").concat(user3.review, "\n              </p>\n            </blockquote>\n          </article>\n    ");
      reviews.appendChild(div);
    }
  }]);

  return UI;
}();

var _default = UI;
exports.default = _default;
},{}],"js/App.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data"));

var _Description = _interopRequireDefault(require("./Description"));

var _UI = _interopRequireDefault(require("./UI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("DOMContentLoaded", function () {
  var colton = new _Description.default(_data.default.colton.image, _data.default.colton.fullName, _data.default.colton.verified, _data.default.colton.review);
  var irene = new _Description.default(_data.default.irene.image, _data.default.irene.fullName, _data.default.irene.verified, _data.default.irene.review);
  var anne = new _Description.default(_data.default.anne.image, _data.default.anne.fullName, _data.default.anne.verified, _data.default.anne.review);
  var ui = new _UI.default();
  ui.render(colton, irene, anne);
});
},{"./data":"js/data.js","./Description":"js/Description.js","./UI":"js/UI.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("normalize.css");

require("./sass/main.scss");

require("./js/App.js");
},{"normalize.css":"../node_modules/normalize.css/normalize.css","./sass/main.scss":"sass/main.scss","./js/App.js":"js/App.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53003" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map