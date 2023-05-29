// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hSiTh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "62ba0103a8f04b30";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5AKj5":[function(require,module,exports) {
var _comments = require("./comments");
var _slider = require("./slider");
var _services = require("./services");
document.addEventListener("DOMContentLoaded", function() {
    //create new Slider here
    const aboutUsSlider = new (0, _slider.Slider)("#about-us", (0, _comments.commentObjectsArray));
    // create new Picker for OurServices section
    const servicesPicker = new (0, _services.Picker)(".services__blocks");
});

},{"./comments":"5H1XM","./slider":"23FV9","./services":"71wo9"}],"5H1XM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// console.log(commentObjectsArray);
parcelHelpers.export(exports, "commentObjectsArray", ()=>commentObjectsArray);
let commentsArray = [
    [
        "Name1 Surname1",
        "Job title1",
        `This is comment 1,
  this is second line of the comment`,
        "./images/About us/Headshot1.png",
        "9"
    ],
    [
        "Name2 Surname2",
        "Job title2",
        `This is comment 2,
  this is second line of the comment`,
        "./images/About us/Headshot2.png",
        "8"
    ],
    [
        "Name3 Surname3",
        "Job title3",
        `This is comment 3,
  this is second line of the comment`,
        "./images/About us/Headshot3.png",
        "10"
    ],
    [
        "Name4 Surname4",
        "Job title4",
        `This is comment 4,
  this is second line of the comment`,
        "./images/About us/Headshot4.png",
        "9"
    ],
    [
        "Name5 Surname5",
        "Job title5",
        `This is comment 5,
  this is second line of the comment`,
        "./images/About us/Headshot5.png",
        "8"
    ],
    [
        "Name6 Surname6",
        "Job title6",
        `This is comment 6,
  this is second line of the comment`,
        "./images/About us/Headshot6.png",
        "7"
    ],
    [
        "Name7 Surname7",
        "Job title7",
        `This is comment 7,
  this is second line of the comment`,
        "./images/About us/Headshot7.png",
        "8"
    ],
    [
        "Name8 Surname8",
        "Job title8",
        `This is comment 8,
  this is second line of the comment`,
        "./images/About us/Headshot8.png",
        "9"
    ],
    [
        "Name9 Surname9",
        "Job title9",
        `This is comment 9,
  this is second line of the comment`,
        "./images/About us/Headshot9.png",
        "10"
    ],
    [
        "Name10 Surname10",
        "Job title10",
        `This is comment 10,
  this is second line of the comment`,
        "./images/About us/Headshot10.png",
        "10"
    ],
    [
        "Name11 Surname11",
        "Job title11",
        `This is comment 11,
  this is second line of the comment`,
        "./images/About us/Headshot11.png",
        "7"
    ]
];
class Comment {
    constructor(name, jobTitle, commentText, imagePath, rating){
        this.name = name;
        this.jobTitle = jobTitle;
        this.commentText = commentText;
        this.rating = rating;
        this.imagePath = imagePath;
    }
}
let commentObjectsArray = [];
for(let i = 0; i < commentsArray.length; i++)commentObjectsArray[i] = new Comment(...commentsArray[i]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"23FV9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slider", ()=>Slider);
var _comments = require("./comments");
class Slider {
    constructor(container, commentsArray){
        this.commentIndex = 0;
        this.firstMainMoved = 0;
        this.name = container;
        this.commentObjectsArray = commentsArray;
        this.allHeadshots = [];
        this.sliderContainer = document.querySelector(this.name);
        // All DOM Elements Slider uses
        this.allCommentsContainer;
        this.currentMainParent;
        this.commentRating;
        this.commentName;
        this.commentPosition;
        this.commentText;
        this.commentDOMObjects;
        this.firstMain;
        this.naviContainer;
        this.prevButton;
        this.nextButton;
        this.getDOMElements();
    }
    //////////////////////////////////////////////////////////////////////
    // METHODS DEFINITION
    /////////////////////////////////////////////////////////////////////
    // METHOd that fills above constructor parts (DOM elements)
    getDOMElements() {
        // PICKING UP blurred headshots container (&main comment)
        this.allCommentsContainer = this.sliderContainer.querySelector(".about-us__comment-avatars");
        // PICKING UP blurred headshots
        this.getHeadshots();
        // ADDING movement to blurred headshots
        this.allHeadshots.forEach((element)=>{
            this.randomPostInterval(element);
        });
        // PICKING UP main comment container
        this.currentMainParent = this.allCommentsContainer.querySelector(".main-comment__image-container");
        // PICKING UP Main comment DOM elements with texts
        this.commentRating = this.sliderContainer.querySelector(".main-comment__rating");
        this.commentName = this.sliderContainer.querySelector(".main-comment__name");
        this.commentPosition = this.sliderContainer.querySelector(".main-comment__position");
        this.commentText = this.sliderContainer.querySelector(".main-comment__text");
        this.commentDOMObjects = [
            this.commentName,
            this.commentPosition,
            this.commentText,
            this.commentRating
        ];
        // Initialize 1st main comment
        this.exchangeComment(0);
        // PICKING UP First Main Comment
        this.firstMain = this.sliderContainer.querySelector(".main-comment__image");
        // Picking up <> Navi
        this.naviContainer = this.sliderContainer.querySelector(".main-comment__navi");
        this.prevButton = this.naviContainer.querySelector(".navi__button--prev");
        this.nextButton = this.naviContainer.querySelector(".navi__button--next");
        // Initialize interactivity
        this.addInteractivity();
        // Add moving to the first main, it has movement
        // fr the beginning, it just misses pos: abs to do it effectively
        this.randomPostInterval(this.firstMain);
    }
    // METHOD that picks up every blurred headshot
    getHeadshots = ()=>{
        this.allHeadshots = document.querySelectorAll(".headshot");
    };
    generateYPosJs = (spread)=>{
        const randomNumber = Math.random() * 100;
        let randomTop = Math.random() * spread;
        if (randomNumber < 50) {
            randomTop = 0 + randomNumber;
            return randomTop + "px";
        } else {
            randomTop = 100 + randomNumber;
            return randomTop + "px";
        }
    };
    // METHOD that generates random Y postion for headshots
    randomPostInterval(element) {
        const randomDelay = Math.random() * 3;
        element.style.transition = `${randomDelay} cubic-bezier(0.62, 0.32, 0, 0.9)`;
        element.style.transitionDelay = `${randomDelay}s`;
        element.style.top = this.generateYPosJs(100);
        const moveInterval = setInterval(()=>{
            element.style.top = this.generateYPosJs(100);
        }, 6000);
    }
    // METHOD that applies recent comment to the DOM elements
    exchangeComment(commentNumber) {
        const commentAbstractArray = [
            this.commentObjectsArray[commentNumber].name,
            this.commentObjectsArray[commentNumber].jobTitle,
            this.commentObjectsArray[commentNumber].commentText,
            this.commentObjectsArray[commentNumber].rating
        ];
        this.commentDOMObjects.forEach((element, i)=>{
            element.innerText = commentAbstractArray[i];
        });
    }
    // METHOD that moves selected item in an array to the front of the array
    reshuffleCommentsArray = (inputIndex = this.commentIndex)=>{
        // Place new main comment in front of the array
        this.commentObjectsArray.unshift(this.commentObjectsArray[inputIndex]);
        inputIndex++;
        this.commentObjectsArray.splice(inputIndex, 1);
        // Place old main comment in the PREVIOUS place of new main comment in the array
        this.commentObjectsArray.splice(inputIndex, 0, this.commentObjectsArray[1]);
        this.commentObjectsArray.splice(1, 1);
    };
    // METHOD that moves chosen blurred headshot to main section in DOM
    // & moves old main headshot to newly chosen headshot
    changingHeadshot = (chosenHeadshot)=>{
        chosenHeadshot.style.filter = "blur(0px)";
        const currentMain = this.currentMainParent.querySelector(".main-comment__image");
        currentMain.style.filter = "blur(8px)";
        currentMain.classList.remove(`main-comment__image`);
        this.allCommentsContainer.insertBefore(currentMain, chosenHeadshot);
        this.currentMainParent.appendChild(chosenHeadshot);
        currentMain.classList = chosenHeadshot.classList;
        chosenHeadshot.classList = "";
        chosenHeadshot.classList.add(`main-comment__image`);
        chosenHeadshot.removeEventListener("click", this.clickBluured);
        currentMain.addEventListener("click", this.clickBluured);
        this.getHeadshots();
    };
    firstMainMovement = (firstMain)=>{
        this.randomPostInterval(firstMain);
    };
    // METHOD that ads interactivity to headshots
    clickBluured = (e)=>{
        // picking up which comment was chosen - based on his class
        const blurredClasses = e.currentTarget.classList;
        let whichComment = Number(blurredClasses[blurredClasses.length - 1].slice(-1));
        this.commentIndex = whichComment - 1; // so navi knows which comment is main now
        if (whichComment == 0) whichComment = blurredClasses[blurredClasses.length - 1].slice(-2);
        // apply the comment change
        this.exchangeComment(whichComment);
        this.reshuffleCommentsArray(whichComment);
        this.changingHeadshot(e.currentTarget);
    };
    // METHOD that adds clickability to headshots and <> Navi
    addInteractivity = ()=>{
        // ADDING CLICKING ON HEADSHOTS
        this.allHeadshots.forEach((element, i)=>{
            // SOLVE ADDING IMAGES PATHS FROM AN ARRAY - SEEMS TO BE PARCEL ISSUE
            // element.src = `${commentObjectsArray[i].imagePath}`;
            // element.src = require(`${commentObjectsArray[i].imagePath}`);
            element.addEventListener("click", this.clickBluured);
        });
        // ADDING NAVIGATIONS <>
        this.prevButton.addEventListener("click", (e)=>{
            if (this.commentIndex >= 1) this.commentIndex--;
            else this.commentIndex = 9;
            this.exchangeComment(this.commentIndex + 1);
            this.changingHeadshot(this.allHeadshots[this.commentIndex]);
            this.reshuffleCommentsArray(this.commentIndex + 1);
        });
        this.nextButton.addEventListener("click", (e)=>{
            if (this.commentIndex < 10) this.commentIndex++;
            else this.commentIndex = 1;
            this.exchangeComment(this.commentIndex);
            this.changingHeadshot(this.allHeadshots[this.commentIndex - 1]);
            this.reshuffleCommentsArray();
        });
    };
}

},{"./comments":"5H1XM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71wo9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Picker", ()=>Picker);
class Picker {
    constructor(servicesBlock){
        this.block = servicesBlock;
        this.mainContainer = document.querySelector(this.block);
        this.blocksWrapper;
        this.blocksArray = [];
        this.pickDOMElements();
        this.addInteractions();
    }
    pickDOMElements() {
        this.blocksWrapper = this.mainContainer.querySelector(".blocks__wrapper");
        this.blocksArray = this.blocksWrapper.querySelectorAll(".blocks__single-block");
    }
    addInteractions() {
        this.blocksArray.forEach((element, i)=>{
            element.addEventListener("click", this.openingPopUp);
        });
    }
    openingPopUp = (e)=>{
        const windowWidth = window.innerWidth;
        console.log(windowWidth);
        if (windowWidth > 870) {
            console.log("Desktop version detected");
            this.openingDesktop(e);
        } else {
            console.log("Mobile version detected");
            this.openingMobile(e);
        }
    };
    openingMobile = (e)=>{
        e.stopImmediatePropagation();
        e.preventDefault();
        // BEGINNING IS DIFFERENT SO
        // it will just appear in the method above in ELSE contition
        this.blocksArray.forEach((element)=>{
            if (element != e.currentTarget) element.style.display = "none";
            if (element == e.currentTarget) {
                element.style.width = "100%";
                // morphingBlockOpen(e);
                // CHECK WHAT IS REPEATABLE TO PACK IT in morphicBlockOpen(e)
                const exitButton = e.currentTarget.querySelector(".single-block__exit");
                const readMoreButton = e.currentTarget.querySelector(".btn-single-block");
                readMoreButton.classList.add("btn-single-block--disabled");
                const timeoutIDreadMore = setTimeout(()=>{
                    readMoreButton.parentElement.classList.add("btn-single-block--removed");
                    clearTimeout(timeoutIDreadMore);
                }, 500);
                exitButton.classList.remove("single-block__exit--disabled");
                const xButton = e.currentTarget.querySelector(".single-block__exit");
                xButton.addEventListener("click", this.closingPopUp);
                e.currentTarget.removeEventListener("click", this.openingPopUp);
                e.currentTarget.classList.remove("blocks__closing");
                // until then it's the same
                // there is a piece that's the same again
                const longDescription = e.currentTarget.querySelector(".description-long");
                longDescription.style.opacity = "0";
                const timeoutIDlongdescription = setTimeout(()=>{
                    longDescription.classList.remove("description--disabled");
                    longDescription.style.opacity = "1";
                    clearTimeout(timeoutIDlongdescription);
                }, 500);
            }
        });
    };
    openingDesktop = (e)=>{
        console.log("Opening");
        e.stopImmediatePropagation();
        e.preventDefault();
        const exitButton = e.currentTarget.querySelector(".single-block__exit");
        const readMoreButton = e.currentTarget.querySelector(".btn-single-block");
        readMoreButton.classList.add("btn-single-block--disabled");
        const timeoutIDreadMore = setTimeout(()=>{
            readMoreButton.parentElement.classList.add("btn-single-block--removed");
            clearTimeout(timeoutIDreadMore);
        }, 500);
        exitButton.classList.remove("single-block__exit--disabled");
        const xButton = e.currentTarget.querySelector(".single-block__exit");
        xButton.addEventListener("click", this.closingPopUp);
        e.currentTarget.removeEventListener("click", this.openingPopUp);
        e.currentTarget.classList.remove("blocks__closing");
        // until then it's the same
        // DESKTOP ONLY BEGINS
        // ADD window.width condition to below code
        let elementHeight = e.currentTarget.offsetHeight;
        document.documentElement.style.setProperty("--myHeight", elementHeight + "px");
        e.currentTarget.style.left = `${e.currentTarget.offsetLeft}px`;
        e.currentTarget.style.top = `${e.currentTarget.offsetTop}px`;
        const hiddenClone = e.currentTarget.cloneNode(true);
        this.blocksWrapper.insertBefore(hiddenClone, e.currentTarget);
        hiddenClone.classList.add("blocks__hidden-clone");
        e.currentTarget.style.position = "absolute";
        e.currentTarget.classList.add("blocks__active-block");
        // DESKTOP ONLY ENDS
        const longDescription = e.currentTarget.querySelector(".description-long");
        longDescription.style.opacity = "0";
        const timeoutIDlongdescription = setTimeout(()=>{
            longDescription.classList.remove("description--disabled");
            longDescription.style.opacity = "1";
            clearTimeout(timeoutIDlongdescription);
        }, 500);
    };
    morphingBlockOpen = (e)=>{};
    closingPopUp = (e)=>{
        // this.closingDesktop(e);
        const windowWidth = window.innerWidth;
        console.log(windowWidth);
        if (windowWidth > 870) {
            console.log("Desktop version detected");
            this.closingDesktop(e);
        } else {
            console.log("Mobile version detected");
            this.closingMobile(e);
        }
    };
    closingDesktop = (e)=>{
        console.log("Closing");
        // TO BE CHECK IF IT"S THE SAME TOO
        e.currentTarget.parentElement.classList.add("blocks__closing");
        const parent = e.currentTarget.parentElement;
        const child = e.currentTarget;
        const readMoreButton = parent.querySelector(".btn-single-block");
        readMoreButton.parentElement.classList.remove("btn-single-block--removed");
        const longDescription = parent.querySelector(".description-long");
        longDescription.style.opacity = "0";
        child.classList.add("single-block__exit--disabled");
        child.removeEventListener("click", this.closingPopUp);
        const timeoutIDcloseBlock = setTimeout(()=>{
            parent.classList.remove("blocks__active-block");
            readMoreButton.classList.remove("btn-single-block--disabled");
            parent.removeAttribute("style");
            //Desktop only part
            const placeholderClone = this.mainContainer.querySelector(".blocks__hidden-clone");
            placeholderClone.parentElement.removeChild(placeholderClone);
            //
            longDescription.classList.add("description--disabled");
            longDescription.removeAttribute("style");
            clearTimeout(timeoutIDcloseBlock);
        }, 1000);
        const timeoutIDevent = setTimeout(()=>{
            parent.addEventListener("click", this.openingPopUp);
            clearTimeout(timeoutIDevent);
        }, 500);
    };
    closingMobile = (e)=>{
        e.stopImmediatePropagation();
        e.preventDefault();
        // TO BE CHECK IF IT"S THE SAME TOO
        // e.currentTarget.parentElement.classList.add("blocks__closing");
        // same commet as opening (about forEach part)
        // asoiasyg98a9d8gfhasdf
        //saiduhfiusagdiufgsad
        const timeoutIDblocksBack = setTimeout(()=>{
            this.blocksArray.forEach((element)=>{
                element.removeAttribute("style");
                clearTimeout(timeoutIDblocksBack);
            });
        }, 10);
        // the same content, just different order of the code rows
        const parent = e.currentTarget.parentElement;
        const child = e.currentTarget;
        const readMoreButton = parent.querySelector(".btn-single-block");
        const longDescription = parent.querySelector(".description-long");
        longDescription.style.opacity = "0";
        // Below is here (not in below timeout, because it cause blocks to
        // be very long when hiding this text so it needs to be immediate?)
        // OR SHOW OTHER BLOCKS WHEN EVERYTING IS HIDDEN (LONG DESCR)
        longDescription.classList.add("description--disabled");
        longDescription.removeAttribute("style");
        //
        readMoreButton.parentElement.classList.remove("btn-single-block--removed");
        child.classList.add("single-block__exit--disabled");
        child.removeEventListener("click", this.closingPopUp);
        const timeoutIDcloseBlock = setTimeout(()=>{
            parent.classList.remove("blocks__active-block");
            readMoreButton.classList.remove("btn-single-block--disabled");
            parent.removeAttribute("style");
            parent.addEventListener("click", this.openingPopUp);
            clearTimeout(timeoutIDcloseBlock);
        }, 300);
        // why double it in timeout above???
        setTimeout(()=>parent.addEventListener("click", this.openingPopUp), 200);
    };
    morphingBlockClosed = (e)=>{};
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hSiTh","5AKj5"], "5AKj5", "parcelRequire841d")

//# sourceMappingURL=index.a8f04b30.js.map
