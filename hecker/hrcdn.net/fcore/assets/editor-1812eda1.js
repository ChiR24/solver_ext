var hackerrank_lib;
(() => {
    "use strict";
    var e, o, s = {
            ge8O: (e, o, s) => {
                var _ = s("YICr"),
                    d = s("QFUP");
                let c = !1;
                globalThis.onmessage = e => {
                    c || function(e) {
                        if (c) return;
                        c = !0;
                        const o = new _._i((e => {
                            globalThis.postMessage(e)
                        }), (e => new d.k(e, null)));
                        globalThis.onmessage = e => {
                            o.onmessage(e.data)
                        }
                    }()
                }
            }
        },
        _ = {};

    function d(e) {
        var o = _[e];
        if (void 0 !== o) return o.exports;
        var c = _[e] = {
            exports: {}
        };
        return s[e](c, c.exports, d), c.exports
    }
    d.m = s, d.x = () => {
        var e = d.O(void 0, ["defaultVendors-node_modules_vscode_vscode_src_vs_base_common_charCode_js-node_modules_vscode_-cb7d75", "defaultVendors-node_modules_util_util_js", "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_diff_diffChange_js-node_modules_-0535b1", "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_cache_js-node_modules_vscode_vsc-9bf5bc", "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_cancellation_js-node_modules_vsc-370a27"], (() => d("ge8O")));
        return d.O(e)
    }, e = [], d.O = (o, s, _, c) => {
        if (!s) {
            var r = 1 / 0;
            for (t = 0; t < e.length; t++) {
                for (var [s, _, c] = e[t], n = !0, a = 0; a < s.length; a++)(!1 & c || r >= c) && Object.keys(d.O).every((e => d.O[e](s[a]))) ? s.splice(a--, 1) : (n = !1, c < r && (r = c));
                if (n) {
                    e.splice(t--, 1);
                    var l = _();
                    void 0 !== l && (o = l)
                }
            }
            return o
        }
        c = c || 0;
        for (var t = e.length; t > 0 && e[t - 1][2] > c; t--) e[t] = e[t - 1];
        e[t] = [s, _, c]
    }, d.d = (e, o) => {
        for (var s in o) d.o(o, s) && !d.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: o[s]
        })
    }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((o, s) => (d.f[s](e, o), o)), [])), d.u = e => e + "-" + {
        "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_charCode_js-node_modules_vscode_-cb7d75": "65169a85",
        "defaultVendors-node_modules_util_util_js": "b6116f91",
        "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_diff_diffChange_js-node_modules_-0535b1": "7d80d1c5",
        "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_cache_js-node_modules_vscode_vsc-9bf5bc": "e3561563",
        "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_cancellation_js-node_modules_vsc-370a27": "11a12a02"
    }[e] + ".js", d.miniCssF = e => {}, d.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), d.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o), (() => {
        var e;
        d.g.importScripts && (e = d.g.location + "");
        var o = d.g.document;
        if (!e && o && (o.currentScript && (e = o.currentScript.src), !e)) {
            var s = o.getElementsByTagName("script");
            s.length && (e = s[s.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
    })(), (() => {
        var e = {
            editor: 1
        };
        d.f.i = (o, s) => {
            e[o] || importScripts(d.p + d.u(o))
        };
        var o = self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || [],
            s = o.push.bind(o);
        o.push = o => {
            var [_, c, r] = o;
            for (var n in c) d.o(c, n) && (d.m[n] = c[n]);
            for (r && r(d); _.length;) e[_.pop()] = 1;
            s(o)
        }
    })(), o = d.x, d.x = () => Promise.all(["defaultVendors-node_modules_vscode_vscode_src_vs_base_common_charCode_js-node_modules_vscode_-cb7d75", "defaultVendors-node_modules_util_util_js", "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_diff_diffChange_js-node_modules_-0535b1", "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_cache_js-node_modules_vscode_vsc-9bf5bc", "defaultVendors-node_modules_vscode_vscode_src_vs_base_common_cancellation_js-node_modules_vsc-370a27"].map(d.e, d)).then(o);
    var c = d.x();
    hackerrank_lib = c
})();
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/editor-1812eda1.js.map