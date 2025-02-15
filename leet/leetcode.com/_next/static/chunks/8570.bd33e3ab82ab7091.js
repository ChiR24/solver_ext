(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8570], {
        72182: function(e) {
            "use strict";
            var t = function(e) {
                return function(e) {
                    return !!e && "object" === typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === n
                    }(e)
                }(e)
            };
            var n = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function r(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? l((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function o(e, t, n) {
                return e.concat(t).map((function(e) {
                    return r(e, n)
                }))
            }

            function i(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.propertyIsEnumerable.call(e, t)
                    })) : []
                }(e))
            }

            function s(e, t) {
                try {
                    return t in e
                } catch (n) {
                    return !1
                }
            }

            function a(e, t, n) {
                var o = {};
                return n.isMergeableObject(e) && i(e).forEach((function(t) {
                    o[t] = r(e[t], n)
                })), i(t).forEach((function(i) {
                    (function(e, t) {
                        return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, i) || (s(e, i) && n.isMergeableObject(t[i]) ? o[i] = function(e, t) {
                        if (!t.customMerge) return l;
                        var n = t.customMerge(e);
                        return "function" === typeof n ? n : l
                    }(i, n)(e[i], t[i], n) : o[i] = r(t[i], n))
                })), o
            }

            function l(e, n, i) {
                (i = i || {}).arrayMerge = i.arrayMerge || o, i.isMergeableObject = i.isMergeableObject || t, i.cloneUnlessOtherwiseSpecified = r;
                var s = Array.isArray(n);
                return s === Array.isArray(e) ? s ? i.arrayMerge(e, n, i) : a(e, n, i) : r(n, i)
            }
            l.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, n) {
                    return l(e, n, t)
                }), {})
            };
            var c = l;
            e.exports = c
        },
        50792: function(e) {
            "use strict";
            var t = function(e, t) {
                    return e + n(t)
                },
                n = function(e) {
                    return null === e || "boolean" === typeof e || "undefined" === typeof e ? "" : "number" === typeof e ? e.toString() : "string" === typeof e ? e : Array.isArray(e) ? e.reduce(t, "") : function(e) {
                        return Object.prototype.hasOwnProperty.call(e, "props")
                    }(e) && Object.prototype.hasOwnProperty.call(e.props, "children") ? n(e.props.children) : ""
                };
            n.default = n, e.exports = n
        },
        68639: function(e) {
            "use strict";
            var t = function(e) {
                return function(e) {
                    return !!e && "object" === typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === n
                    }(e)
                }(e)
            };
            var n = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function r(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? l((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function o(e, t, n) {
                return e.concat(t).map((function(e) {
                    return r(e, n)
                }))
            }

            function i(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.propertyIsEnumerable.call(e, t)
                    })) : []
                }(e))
            }

            function s(e, t) {
                try {
                    return t in e
                } catch (n) {
                    return !1
                }
            }

            function a(e, t, n) {
                var o = {};
                return n.isMergeableObject(e) && i(e).forEach((function(t) {
                    o[t] = r(e[t], n)
                })), i(t).forEach((function(i) {
                    (function(e, t) {
                        return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, i) || (s(e, i) && n.isMergeableObject(t[i]) ? o[i] = function(e, t) {
                        if (!t.customMerge) return l;
                        var n = t.customMerge(e);
                        return "function" === typeof n ? n : l
                    }(i, n)(e[i], t[i], n) : o[i] = r(t[i], n))
                })), o
            }

            function l(e, n, i) {
                (i = i || {}).arrayMerge = i.arrayMerge || o, i.isMergeableObject = i.isMergeableObject || t, i.cloneUnlessOtherwiseSpecified = r;
                var s = Array.isArray(n);
                return s === Array.isArray(e) ? s ? i.arrayMerge(e, n, i) : a(e, n, i) : r(n, i)
            }
            l.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, n) {
                    return l(e, n, t)
                }), {})
            };
            var c = l;
            e.exports = c
        },
        67339: function(e) {
            var t = new Error("Element already at target scroll position"),
                n = new Error("Scroll cancelled"),
                r = Math.min,
                o = Date.now;

            function i(e) {
                return function(i, l, c, u) {
                    "function" == typeof(c = c || {}) && (u = c, c = {}), "function" != typeof u && (u = a);
                    var p = o(),
                        f = i[e],
                        d = c.ease || s,
                        h = isNaN(c.duration) ? 350 : +c.duration,
                        m = !1;
                    return f === l ? u(t, i[e]) : requestAnimationFrame((function t(s) {
                            if (m) return u(n, i[e]);
                            var a = o(),
                                c = r(1, (a - p) / h),
                                y = d(c);
                            i[e] = y * (l - f) + f, c < 1 ? requestAnimationFrame(t) : requestAnimationFrame((function() {
                                u(null, i[e])
                            }))
                        })),
                        function() {
                            m = !0
                        }
                }
            }

            function s(e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }

            function a() {}
            e.exports = {
                left: i("scrollLeft"),
                top: i("scrollTop")
            }
        },
        27274: function(e, t) {
            var n, r, o;
            r = [], void 0 === (o = "function" === typeof(n = function() {
                function e(e) {
                    var t = getComputedStyle(e, null).getPropertyValue("overflow");
                    return t.indexOf("scroll") > -1 || t.indexOf("auto") > -1
                }

                function t(t) {
                    if (t instanceof HTMLElement || t instanceof SVGElement) {
                        for (var n = t.parentNode; n.parentNode;) {
                            if (e(n)) return n;
                            n = n.parentNode
                        }
                        return document.scrollingElement || document.documentElement
                    }
                }
                return t
            }) ? n.apply(t, r) : n) || (e.exports = o)
        },
        68570: function(e, t, n) {
            "use strict";
            n.d(t, {
                aO: function() {
                    return nn
                },
                FP: function() {
                    return rn
                },
                Q_: function() {
                    return sn
                },
                ZP: function() {
                    return Vn
                }
            });
            var r = n(67294);

            function o(e) {
                return t => typeof t === e
            }
            var i = o("function"),
                s = e => "RegExp" === Object.prototype.toString.call(e).slice(8, -1),
                a = e => !l(e) && !(e => null === e)(e) && (i(e) || "object" === typeof e),
                l = o("undefined");

            function c(e, t) {
                if (e === t) return !0;
                if (e && a(e) && t && a(t)) {
                    if (e.constructor !== t.constructor) return !1;
                    if (Array.isArray(e) && Array.isArray(t)) return function(e, t) {
                        const {
                            length: n
                        } = e;
                        if (n !== t.length) return !1;
                        for (let r = n; 0 !== r--;)
                            if (!c(e[r], t[r])) return !1;
                        return !0
                    }(e, t);
                    if (e instanceof Map && t instanceof Map) return function(e, t) {
                        if (e.size !== t.size) return !1;
                        for (const n of e.entries())
                            if (!t.has(n[0])) return !1;
                        for (const n of e.entries())
                            if (!c(n[1], t.get(n[0]))) return !1;
                        return !0
                    }(e, t);
                    if (e instanceof Set && t instanceof Set) return function(e, t) {
                        if (e.size !== t.size) return !1;
                        for (const n of e.entries())
                            if (!t.has(n[0])) return !1;
                        return !0
                    }(e, t);
                    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return function(e, t) {
                        if (e.byteLength !== t.byteLength) return !1;
                        const n = new DataView(e.buffer),
                            r = new DataView(t.buffer);
                        let o = e.byteLength;
                        for (; o--;)
                            if (n.getUint8(o) !== r.getUint8(o)) return !1;
                        return !0
                    }(e, t);
                    if (s(e) && s(t)) return e.source === t.source && e.flags === t.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
                    const n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (let e = n.length; 0 !== e--;)
                        if (!Object.prototype.hasOwnProperty.call(t, n[e])) return !1;
                    for (let o = n.length; 0 !== o--;) {
                        const r = n[o];
                        if (("_owner" !== r || !e.$$typeof) && !c(e[r], t[r])) return !1
                    }
                    return !0
                }
                return !(!Number.isNaN(e) || !Number.isNaN(t)) || e === t
            }
            var u = ["Array", "ArrayBuffer", "AsyncFunction", "AsyncGenerator", "AsyncGeneratorFunction", "Date", "Error", "Function", "Generator", "GeneratorFunction", "HTMLElement", "Map", "Object", "Promise", "RegExp", "Set", "WeakMap", "WeakSet"],
                p = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"];

            function f(e) {
                const t = Object.prototype.toString.call(e).slice(8, -1);
                return /HTML\w+Element/.test(t) ? "HTMLElement" : (n = t, u.includes(n) ? t : void 0);
                var n
            }

            function d(e) {
                return t => f(t) === e
            }

            function h(e) {
                return t => typeof t === e
            }
            var m = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];

            function y(e) {
                if (null === e) return "null";
                switch (typeof e) {
                    case "bigint":
                        return "bigint";
                    case "boolean":
                        return "boolean";
                    case "number":
                        return "number";
                    case "string":
                        return "string";
                    case "symbol":
                        return "symbol";
                    case "undefined":
                        return "undefined"
                }
                if (y.array(e)) return "Array";
                if (y.plainFunction(e)) return "Function";
                const t = f(e);
                return t || "Object"
            }
            y.array = Array.isArray, y.arrayOf = (e, t) => !(!y.array(e) && !y.function(t)) && e.every((e => t(e))), y.asyncGeneratorFunction = e => "AsyncGeneratorFunction" === f(e), y.asyncFunction = d("AsyncFunction"), y.bigint = h("bigint"), y.boolean = e => !0 === e || !1 === e, y.date = d("Date"), y.defined = e => !y.undefined(e), y.domElement = e => y.object(e) && !y.plainObject(e) && 1 === e.nodeType && y.string(e.nodeName) && m.every((t => t in e)), y.empty = e => y.string(e) && 0 === e.length || y.array(e) && 0 === e.length || y.object(e) && !y.map(e) && !y.set(e) && 0 === Object.keys(e).length || y.set(e) && 0 === e.size || y.map(e) && 0 === e.size, y.error = d("Error"), y.function = h("function"), y.generator = e => y.iterable(e) && y.function(e.next) && y.function(e.throw), y.generatorFunction = d("GeneratorFunction"), y.instanceOf = (e, t) => !(!e || !t) && Object.getPrototypeOf(e) === t.prototype, y.iterable = e => !y.nullOrUndefined(e) && y.function(e[Symbol.iterator]), y.map = d("Map"), y.nan = e => Number.isNaN(e), y.null = e => null === e, y.nullOrUndefined = e => y.null(e) || y.undefined(e), y.number = e => h("number")(e) && !y.nan(e), y.numericString = e => y.string(e) && e.length > 0 && !Number.isNaN(Number(e)), y.object = e => !y.nullOrUndefined(e) && (y.function(e) || "object" === typeof e), y.oneOf = (e, t) => !!y.array(e) && e.indexOf(t) > -1, y.plainFunction = d("Function"), y.plainObject = e => {
                if ("Object" !== f(e)) return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.getPrototypeOf({})
            }, y.primitive = e => {
                return y.null(e) || (t = typeof e, p.includes(t));
                var t
            }, y.promise = d("Promise"), y.propertyOf = (e, t, n) => {
                if (!y.object(e) || !t) return !1;
                const r = e[t];
                return y.function(n) ? n(r) : y.defined(r)
            }, y.regexp = d("RegExp"), y.set = d("Set"), y.string = h("string"), y.symbol = h("symbol"), y.undefined = h("undefined"), y.weakMap = d("WeakMap"), y.weakSet = d("WeakSet");
            var b = y;

            function g(e, t, n) {
                const {
                    actual: r,
                    key: o,
                    previous: i,
                    type: s
                } = n, a = P(e, o), l = P(t, o);
                let c = [a, l].every(b.number) && ("increased" === s ? a < l : a > l);
                return b.undefined(r) || (c = c && l === r), b.undefined(i) || (c = c && a === i), c
            }

            function v(e, t, n) {
                const {
                    key: r,
                    type: o,
                    value: i
                } = n, s = P(e, r), a = P(t, r), l = "added" === o ? s : a, u = "added" === o ? a : s;
                return b.nullOrUndefined(i) ? [s, a].every(b.array) ? !u.every(x(l)) : [s, a].every(b.plainObject) ? function(e, t) {
                    return t.some((t => !e.includes(t)))
                }(Object.keys(l), Object.keys(u)) : ![s, a].every((e => b.primitive(e) && b.defined(e))) && ("added" === o ? !b.defined(s) && b.defined(a) : b.defined(s) && !b.defined(a)) : b.defined(l) ? !(!b.array(l) && !b.plainObject(l)) && function(e, t, n) {
                    return !!T(e, t) && ([e, t].every(b.array) ? !e.some(E(n)) && t.some(E(n)) : [e, t].every(b.plainObject) ? !Object.entries(e).some(O(n)) && Object.entries(t).some(O(n)) : t === n)
                }(l, u, i) : c(u, i)
            }

            function w(e, t, {
                key: n
            } = {}) {
                let r = P(e, n),
                    o = P(t, n);
                if (!T(r, o)) throw new TypeError("Inputs have different types");
                if (! function(...e) {
                        return e.every((e => b.string(e) || b.array(e) || b.plainObject(e)))
                    }(r, o)) throw new TypeError("Inputs don't have length");
                return [r, o].every(b.plainObject) && (r = Object.keys(r), o = Object.keys(o)), [r, o]
            }

            function O(e) {
                return ([t, n]) => b.array(e) ? c(e, n) || e.some((e => c(e, n) || b.array(n) && x(n)(e))) : b.plainObject(e) && e[t] ? !!e[t] && c(e[t], n) : c(e, n)
            }

            function E(e) {
                return t => b.array(e) ? e.some((e => c(e, t) || b.array(t) && x(t)(e))) : c(e, t)
            }

            function S(e, t) {
                return b.array(e) ? e.some((e => c(e, t))) : c(e, t)
            }

            function x(e) {
                return t => e.some((e => c(e, t)))
            }

            function T(...e) {
                return e.every(b.array) || e.every(b.number) || e.every(b.plainObject) || e.every(b.string)
            }

            function P(e, t) {
                if (b.plainObject(e) || b.array(e)) {
                    if (b.string(t)) {
                        return t.split(".").reduce(((e, t) => e && e[t]), e)
                    }
                    return b.number(t) ? e[t] : e
                }
                return e
            }

            function k(e, t) {
                if ([e, t].some(b.nullOrUndefined)) throw new Error("Missing required parameters");
                if (![e, t].every((e => b.plainObject(e) || b.array(e)))) throw new Error("Expected plain objects or array");
                return {
                    added: (n, r) => {
                        try {
                            return v(e, t, {
                                key: n,
                                type: "added",
                                value: r
                            })
                        } catch {
                            return !1
                        }
                    },
                    changed: (n, r, o) => {
                        try {
                            const i = P(e, n),
                                s = P(t, n),
                                a = b.defined(r),
                                l = b.defined(o);
                            if (a || l) {
                                const e = l ? S(o, i) : !S(r, i),
                                    t = S(r, s);
                                return e && t
                            }
                            return [i, s].every(b.array) || [i, s].every(b.plainObject) ? !c(i, s) : i !== s
                        } catch {
                            return !1
                        }
                    },
                    changedFrom: (n, r, o) => {
                        if (!b.defined(n)) return !1;
                        try {
                            const i = P(e, n),
                                s = P(t, n),
                                a = b.defined(o);
                            return S(r, i) && (a ? S(o, s) : !a)
                        } catch {
                            return !1
                        }
                    },
                    decreased: (n, r, o) => {
                        if (!b.defined(n)) return !1;
                        try {
                            return g(e, t, {
                                key: n,
                                actual: r,
                                previous: o,
                                type: "decreased"
                            })
                        } catch {
                            return !1
                        }
                    },
                    emptied: n => {
                        try {
                            const [r, o] = w(e, t, {
                                key: n
                            });
                            return !!r.length && !o.length
                        } catch {
                            return !1
                        }
                    },
                    filled: n => {
                        try {
                            const [r, o] = w(e, t, {
                                key: n
                            });
                            return !r.length && !!o.length
                        } catch {
                            return !1
                        }
                    },
                    increased: (n, r, o) => {
                        if (!b.defined(n)) return !1;
                        try {
                            return g(e, t, {
                                key: n,
                                actual: r,
                                previous: o,
                                type: "increased"
                            })
                        } catch {
                            return !1
                        }
                    },
                    removed: (n, r) => {
                        try {
                            return v(e, t, {
                                key: n,
                                type: "removed",
                                value: r
                            })
                        } catch {
                            return !1
                        }
                    }
                }
            }
            var N = n(67339),
                C = n(27274),
                R = n(73935);

            function j(e, ...t) {
                if (!b.plainObject(e)) throw new TypeError("Expected an object");
                const n = {};
                for (const r in e)({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
                return n
            }
            var I = n(68639),
                L = n(45697),
                A = n.n(L),
                M = "undefined" !== typeof window && "undefined" !== typeof document && "undefined" !== typeof navigator,
                D = function() {
                    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                        if (M && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                    return 0
                }();
            var F = M && window.Promise ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then((function() {
                        t = !1, e()
                    })))
                }
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout((function() {
                        t = !1, e()
                    }), D))
                }
            };

            function B(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function W(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function _(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function z(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = W(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + o + r) ? e : z(_(e))
            }

            function U(e) {
                return e && e.referenceNode ? e.referenceNode : e
            }
            var H = M && !(!window.MSInputMethodContext || !document.documentMode),
                G = M && /MSIE 10/.test(navigator.userAgent);

            function q(e) {
                return 11 === e ? H : 10 === e ? G : H || G
            }

            function V(e) {
                if (!e) return document.documentElement;
                for (var t = q(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var r = n && n.nodeName;
                return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === W(n, "position") ? V(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function Y(e) {
                return null !== e.parentNode ? Y(e.parentNode) : e
            }

            function $(e, t) {
                if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    r = n ? e : t,
                    o = n ? t : e,
                    i = document.createRange();
                i.setStart(r, 0), i.setEnd(o, 0);
                var s = i.commonAncestorContainer;
                if (e !== s && t !== s || r.contains(o)) return function(e) {
                    var t = e.nodeName;
                    return "BODY" !== t && ("HTML" === t || V(e.firstElementChild) === e)
                }(s) ? s : V(s);
                var a = Y(e);
                return a.host ? $(a.host, t) : $(e, Y(t).host)
            }

            function K(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === t ? "scrollTop" : "scrollLeft",
                    r = e.nodeName;
                if ("BODY" === r || "HTML" === r) {
                    var o = e.ownerDocument.documentElement,
                        i = e.ownerDocument.scrollingElement || o;
                    return i[n]
                }
                return e[n]
            }

            function X(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = K(t, "top"),
                    o = K(t, "left"),
                    i = n ? -1 : 1;
                return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e
            }

            function J(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    r = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
            }

            function Z(e, t, n, r) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], q(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function Q(e) {
                var t = e.body,
                    n = e.documentElement,
                    r = q(10) && getComputedStyle(n);
                return {
                    height: Z("Height", t, n, r),
                    width: Z("Width", t, n, r)
                }
            }
            var ee = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                te = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                ne = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                re = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };

            function oe(e) {
                return re({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function ie(e) {
                var t = {};
                try {
                    if (q(10)) {
                        t = e.getBoundingClientRect();
                        var n = K(e, "top"),
                            r = K(e, "left");
                        t.top += n, t.left += r, t.bottom += n, t.right += r
                    } else t = e.getBoundingClientRect()
                } catch (p) {}
                var o = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    i = "HTML" === e.nodeName ? Q(e.ownerDocument) : {},
                    s = i.width || e.clientWidth || o.width,
                    a = i.height || e.clientHeight || o.height,
                    l = e.offsetWidth - s,
                    c = e.offsetHeight - a;
                if (l || c) {
                    var u = W(e);
                    l -= J(u, "x"), c -= J(u, "y"), o.width -= l, o.height -= c
                }
                return oe(o)
            }

            function se(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = q(10),
                    o = "HTML" === t.nodeName,
                    i = ie(e),
                    s = ie(t),
                    a = z(e),
                    l = W(t),
                    c = parseFloat(l.borderTopWidth),
                    u = parseFloat(l.borderLeftWidth);
                n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                var p = oe({
                    top: i.top - s.top - c,
                    left: i.left - s.left - u,
                    width: i.width,
                    height: i.height
                });
                if (p.marginTop = 0, p.marginLeft = 0, !r && o) {
                    var f = parseFloat(l.marginTop),
                        d = parseFloat(l.marginLeft);
                    p.top -= c - f, p.bottom -= c - f, p.left -= u - d, p.right -= u - d, p.marginTop = f, p.marginLeft = d
                }
                return (r && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (p = X(p, t)), p
            }

            function ae(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.ownerDocument.documentElement,
                    r = se(e, n),
                    o = Math.max(n.clientWidth, window.innerWidth || 0),
                    i = Math.max(n.clientHeight, window.innerHeight || 0),
                    s = t ? 0 : K(n),
                    a = t ? 0 : K(n, "left"),
                    l = {
                        top: s - r.top + r.marginTop,
                        left: a - r.left + r.marginLeft,
                        width: o,
                        height: i
                    };
                return oe(l)
            }

            function le(e) {
                var t = e.nodeName;
                if ("BODY" === t || "HTML" === t) return !1;
                if ("fixed" === W(e, "position")) return !0;
                var n = _(e);
                return !!n && le(n)
            }

            function ce(e) {
                if (!e || !e.parentElement || q()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === W(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function ue(e, t, n, r) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    i = {
                        top: 0,
                        left: 0
                    },
                    s = o ? ce(e) : $(e, U(t));
                if ("viewport" === r) i = ae(s, o);
                else {
                    var a = void 0;
                    "scrollParent" === r ? "BODY" === (a = z(_(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === r ? e.ownerDocument.documentElement : r;
                    var l = se(a, s, o);
                    if ("HTML" !== a.nodeName || le(s)) i = l;
                    else {
                        var c = Q(e.ownerDocument),
                            u = c.height,
                            p = c.width;
                        i.top += l.top - l.marginTop, i.bottom = u + l.top, i.left += l.left - l.marginLeft, i.right = p + l.left
                    }
                }
                var f = "number" === typeof(n = n || 0);
                return i.left += f ? n : n.left || 0, i.top += f ? n : n.top || 0, i.right -= f ? n : n.right || 0, i.bottom -= f ? n : n.bottom || 0, i
            }

            function pe(e) {
                return e.width * e.height
            }

            function fe(e, t, n, r, o) {
                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var s = ue(n, r, i, o),
                    a = {
                        top: {
                            width: s.width,
                            height: t.top - s.top
                        },
                        right: {
                            width: s.right - t.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - t.bottom
                        },
                        left: {
                            width: t.left - s.left,
                            height: s.height
                        }
                    },
                    l = Object.keys(a).map((function(e) {
                        return re({
                            key: e
                        }, a[e], {
                            area: pe(a[e])
                        })
                    })).sort((function(e, t) {
                        return t.area - e.area
                    })),
                    c = l.filter((function(e) {
                        var t = e.width,
                            r = e.height;
                        return t >= n.clientWidth && r >= n.clientHeight
                    })),
                    u = c.length > 0 ? c[0].key : l[0].key,
                    p = e.split("-")[1];
                return u + (p ? "-" + p : "")
            }

            function de(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = r ? ce(t) : $(t, U(n));
                return se(n, o, r)
            }

            function he(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + r,
                    height: e.offsetHeight + n
                }
            }

            function me(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return t[e]
                }))
            }

            function ye(e, t, n) {
                n = n.split("-")[0];
                var r = he(e),
                    o = {
                        width: r.width,
                        height: r.height
                    },
                    i = -1 !== ["right", "left"].indexOf(n),
                    s = i ? "top" : "left",
                    a = i ? "left" : "top",
                    l = i ? "height" : "width",
                    c = i ? "width" : "height";
                return o[s] = t[s] + t[l] / 2 - r[l] / 2, o[a] = n === a ? t[a] - r[c] : t[me(a)], o
            }

            function be(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function ge(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex((function(e) {
                        return e[t] === n
                    }));
                    var r = be(e, (function(e) {
                        return e[t] === n
                    }));
                    return e.indexOf(r)
                }(e, "name", n))).forEach((function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && B(n) && (t.offsets.popper = oe(t.offsets.popper), t.offsets.reference = oe(t.offsets.reference), t = n(t, e))
                })), t
            }

            function ve() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = de(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = fe(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = ye(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = ge(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                }
            }

            function we(e, t) {
                return e.some((function(e) {
                    var n = e.name;
                    return e.enabled && n === t
                }))
            }

            function Oe(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                    var o = t[r],
                        i = o ? "" + o + n : e;
                    if ("undefined" !== typeof document.body.style[i]) return i
                }
                return null
            }

            function Ee() {
                return this.state.isDestroyed = !0, we(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Oe("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function Se(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function xe(e, t, n, r) {
                var o = "BODY" === e.nodeName,
                    i = o ? e.ownerDocument.defaultView : e;
                i.addEventListener(t, n, {
                    passive: !0
                }), o || xe(z(i.parentNode), t, n, r), r.push(i)
            }

            function Te(e, t, n, r) {
                n.updateBound = r, Se(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var o = z(e);
                return xe(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
            }

            function Pe() {
                this.state.eventsEnabled || (this.state = Te(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function ke() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Se(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
            }

            function Ne(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function Ce(e, t) {
                Object.keys(t).forEach((function(n) {
                    var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Ne(t[n]) && (r = "px"), e.style[n] = t[n] + r
                }))
            }
            var Re = M && /Firefox/i.test(navigator.userAgent);

            function je(e, t, n) {
                var r = be(e, (function(e) {
                        return e.name === t
                    })),
                    o = !!r && e.some((function(e) {
                        return e.name === n && e.enabled && e.order < r.order
                    }));
                if (!o) {
                    var i = "`" + t + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
                }
                return o
            }
            var Ie = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Le = Ie.slice(3);

            function Ae(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Le.indexOf(e),
                    r = Le.slice(n + 1).concat(Le.slice(0, n));
                return t ? r.reverse() : r
            }
            var Me = "flip",
                De = "clockwise",
                Fe = "counterclockwise";

            function Be(e, t, n, r) {
                var o = [0, 0],
                    i = -1 !== ["right", "left"].indexOf(r),
                    s = e.split(/(\+|\-)/).map((function(e) {
                        return e.trim()
                    })),
                    a = s.indexOf(be(s, (function(e) {
                        return -1 !== e.search(/,|\s/)
                    })));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return c = c.map((function(e, r) {
                    var o = (1 === r ? !i : i) ? "height" : "width",
                        s = !1;
                    return e.reduce((function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                    }), []).map((function(e) {
                        return function(e, t, n, r) {
                            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                i = +o[1],
                                s = o[2];
                            if (!i) return e;
                            if (0 === s.indexOf("%")) {
                                return oe("%p" === s ? n : r)[t] / 100 * i
                            }
                            if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i;
                            return i
                        }(e, o, t, n)
                    }))
                })), c.forEach((function(e, t) {
                    e.forEach((function(n, r) {
                        Ne(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
                    }))
                })), o
            }
            var We = {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                r = t.split("-")[1];
                            if (r) {
                                var o = e.offsets,
                                    i = o.reference,
                                    s = o.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(n),
                                    l = a ? "left" : "top",
                                    c = a ? "width" : "height",
                                    u = {
                                        start: ne({}, l, i[l]),
                                        end: ne({}, l, i[l] + i[c] - s[c])
                                    };
                                e.offsets.popper = re({}, s, u[r])
                            }
                            return e
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.offset,
                                r = e.placement,
                                o = e.offsets,
                                i = o.popper,
                                s = o.reference,
                                a = r.split("-")[0],
                                l = void 0;
                            return l = Ne(+n) ? [+n, 0] : Be(n, i, s, a), "left" === a ? (i.top += l[0], i.left -= l[1]) : "right" === a ? (i.top += l[0], i.left += l[1]) : "top" === a ? (i.left += l[0], i.top -= l[1]) : "bottom" === a && (i.left += l[0], i.top += l[1]), e.popper = i, e
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.boundariesElement || V(e.instance.popper);
                            e.instance.reference === n && (n = V(n));
                            var r = Oe("transform"),
                                o = e.instance.popper.style,
                                i = o.top,
                                s = o.left,
                                a = o[r];
                            o.top = "", o.left = "", o[r] = "";
                            var l = ue(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                            o.top = i, o.left = s, o[r] = a, t.boundaries = l;
                            var c = t.priority,
                                u = e.offsets.popper,
                                p = {
                                    primary: function(e) {
                                        var n = u[e];
                                        return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), ne({}, e, n)
                                    },
                                    secondary: function(e) {
                                        var n = "right" === e ? "left" : "top",
                                            r = u[n];
                                        return u[e] > l[e] && !t.escapeWithReference && (r = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), ne({}, n, r)
                                    }
                                };
                            return c.forEach((function(e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                u = re({}, u, p[t](e))
                            })), e.offsets.popper = u, e
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function(e) {
                            var t = e.offsets,
                                n = t.popper,
                                r = t.reference,
                                o = e.placement.split("-")[0],
                                i = Math.floor,
                                s = -1 !== ["top", "bottom"].indexOf(o),
                                a = s ? "right" : "bottom",
                                l = s ? "left" : "top",
                                c = s ? "width" : "height";
                            return n[a] < i(r[l]) && (e.offsets.popper[l] = i(r[l]) - n[c]), n[l] > i(r[a]) && (e.offsets.popper[l] = i(r[a])), e
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function(e, t) {
                            var n;
                            if (!je(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var r = t.element;
                            if ("string" === typeof r) {
                                if (!(r = e.instance.popper.querySelector(r))) return e
                            } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var o = e.placement.split("-")[0],
                                i = e.offsets,
                                s = i.popper,
                                a = i.reference,
                                l = -1 !== ["left", "right"].indexOf(o),
                                c = l ? "height" : "width",
                                u = l ? "Top" : "Left",
                                p = u.toLowerCase(),
                                f = l ? "left" : "top",
                                d = l ? "bottom" : "right",
                                h = he(r)[c];
                            a[d] - h < s[p] && (e.offsets.popper[p] -= s[p] - (a[d] - h)), a[p] + h > s[d] && (e.offsets.popper[p] += a[p] + h - s[d]), e.offsets.popper = oe(e.offsets.popper);
                            var m = a[p] + a[c] / 2 - h / 2,
                                y = W(e.instance.popper),
                                b = parseFloat(y["margin" + u]),
                                g = parseFloat(y["border" + u + "Width"]),
                                v = m - e.offsets.popper[p] - b - g;
                            return v = Math.max(Math.min(s[c] - h, v), 0), e.arrowElement = r, e.offsets.arrow = (ne(n = {}, p, Math.round(v)), ne(n, f, ""), n), e
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function(e, t) {
                            if (we(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = ue(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                r = e.placement.split("-")[0],
                                o = me(r),
                                i = e.placement.split("-")[1] || "",
                                s = [];
                            switch (t.behavior) {
                                case Me:
                                    s = [r, o];
                                    break;
                                case De:
                                    s = Ae(r);
                                    break;
                                case Fe:
                                    s = Ae(r, !0);
                                    break;
                                default:
                                    s = t.behavior
                            }
                            return s.forEach((function(a, l) {
                                if (r !== a || s.length === l + 1) return e;
                                r = e.placement.split("-")[0], o = me(r);
                                var c = e.offsets.popper,
                                    u = e.offsets.reference,
                                    p = Math.floor,
                                    f = "left" === r && p(c.right) > p(u.left) || "right" === r && p(c.left) < p(u.right) || "top" === r && p(c.bottom) > p(u.top) || "bottom" === r && p(c.top) < p(u.bottom),
                                    d = p(c.left) < p(n.left),
                                    h = p(c.right) > p(n.right),
                                    m = p(c.top) < p(n.top),
                                    y = p(c.bottom) > p(n.bottom),
                                    b = "left" === r && d || "right" === r && h || "top" === r && m || "bottom" === r && y,
                                    g = -1 !== ["top", "bottom"].indexOf(r),
                                    v = !!t.flipVariations && (g && "start" === i && d || g && "end" === i && h || !g && "start" === i && m || !g && "end" === i && y),
                                    w = !!t.flipVariationsByContent && (g && "start" === i && h || g && "end" === i && d || !g && "start" === i && y || !g && "end" === i && m),
                                    O = v || w;
                                (f || b || O) && (e.flipped = !0, (f || b) && (r = s[l + 1]), O && (i = function(e) {
                                    return "end" === e ? "start" : "start" === e ? "end" : e
                                }(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = re({}, e.offsets.popper, ye(e.instance.popper, e.offsets.reference, e.placement)), e = ge(e.instance.modifiers, e, "flip"))
                            })), e
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function(e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                r = e.offsets,
                                o = r.popper,
                                i = r.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                a = -1 === ["top", "left"].indexOf(n);
                            return o[s ? "left" : "top"] = i[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = me(t), e.offsets.popper = oe(o), e
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function(e) {
                            if (!je(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                n = be(e.instance.modifiers, (function(e) {
                                    return "preventOverflow" === e.name
                                })).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide) return e;
                                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                            }
                            return e
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function(e, t) {
                            var n = t.x,
                                r = t.y,
                                o = e.offsets.popper,
                                i = be(e.instance.modifiers, (function(e) {
                                    return "applyStyle" === e.name
                                })).gpuAcceleration;
                            void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s = void 0 !== i ? i : t.gpuAcceleration,
                                a = V(e.instance.popper),
                                l = ie(a),
                                c = {
                                    position: o.position
                                },
                                u = function(e, t) {
                                    var n = e.offsets,
                                        r = n.popper,
                                        o = n.reference,
                                        i = Math.round,
                                        s = Math.floor,
                                        a = function(e) {
                                            return e
                                        },
                                        l = i(o.width),
                                        c = i(r.width),
                                        u = -1 !== ["left", "right"].indexOf(e.placement),
                                        p = -1 !== e.placement.indexOf("-"),
                                        f = t ? u || p || l % 2 === c % 2 ? i : s : a,
                                        d = t ? i : a;
                                    return {
                                        left: f(l % 2 === 1 && c % 2 === 1 && !p && t ? r.left - 1 : r.left),
                                        top: d(r.top),
                                        bottom: d(r.bottom),
                                        right: f(r.right)
                                    }
                                }(e, window.devicePixelRatio < 2 || !Re),
                                p = "bottom" === n ? "top" : "bottom",
                                f = "right" === r ? "left" : "right",
                                d = Oe("transform"),
                                h = void 0,
                                m = void 0;
                            if (m = "bottom" === p ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, h = "right" === f ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && d) c[d] = "translate3d(" + h + "px, " + m + "px, 0)", c[p] = 0, c[f] = 0, c.willChange = "transform";
                            else {
                                var y = "bottom" === p ? -1 : 1,
                                    b = "right" === f ? -1 : 1;
                                c[p] = m * y, c[f] = h * b, c.willChange = p + ", " + f
                            }
                            var g = {
                                "x-placement": e.placement
                            };
                            return e.attributes = re({}, g, e.attributes), e.styles = re({}, c, e.styles), e.arrowStyles = re({}, e.offsets.arrow, e.arrowStyles), e
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function(e) {
                            var t, n;
                            return Ce(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                            })), e.arrowElement && Object.keys(e.arrowStyles).length && Ce(e.arrowElement, e.arrowStyles), e
                        },
                        onLoad: function(e, t, n, r, o) {
                            var i = de(o, t, e, n.positionFixed),
                                s = fe(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", s), Ce(t, {
                                position: n.positionFixed ? "fixed" : "absolute"
                            }), n
                        },
                        gpuAcceleration: void 0
                    }
                },
                _e = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: We
                },
                ze = function() {
                    function e(t, n) {
                        var r = this,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        ee(this, e), this.scheduleUpdate = function() {
                            return requestAnimationFrame(r.update)
                        }, this.update = F(this.update.bind(this)), this.options = re({}, e.Defaults, o), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(re({}, e.Defaults.modifiers, o.modifiers)).forEach((function(t) {
                            r.options.modifiers[t] = re({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
                        })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                            return re({
                                name: e
                            }, r.options.modifiers[e])
                        })).sort((function(e, t) {
                            return e.order - t.order
                        })), this.modifiers.forEach((function(e) {
                            e.enabled && B(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                        })), this.update();
                        var i = this.options.eventsEnabled;
                        i && this.enableEventListeners(), this.state.eventsEnabled = i
                    }
                    return te(e, [{
                        key: "update",
                        value: function() {
                            return ve.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return Ee.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return Pe.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return ke.call(this)
                        }
                    }]), e
                }();
            ze.Utils = ("undefined" !== typeof window ? window : n.g).PopperUtils, ze.placements = Ie, ze.Defaults = _e;
            var Ue = ze,
                He = n(72182),
                Ge = n.n(He),
                qe = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"],
                Ve = ["Array", "ArrayBuffer", "AsyncFunction", "AsyncGenerator", "AsyncGeneratorFunction", "Date", "Error", "Function", "Generator", "GeneratorFunction", "HTMLElement", "Map", "Object", "Promise", "RegExp", "Set", "WeakMap", "WeakSet"],
                Ye = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"];

            function $e(e) {
                var t, n = Object.prototype.toString.call(e).slice(8, -1);
                return /HTML\w+Element/.test(n) ? "HTMLElement" : (t = n, Ve.includes(t) ? n : void 0)
            }

            function Ke(e) {
                return function(t) {
                    return $e(t) === e
                }
            }

            function Xe(e) {
                return function(t) {
                    return typeof t === e
                }
            }

            function Je(e) {
                if (null === e) return "null";
                switch (typeof e) {
                    case "bigint":
                        return "bigint";
                    case "boolean":
                        return "boolean";
                    case "number":
                        return "number";
                    case "string":
                        return "string";
                    case "symbol":
                        return "symbol";
                    case "undefined":
                        return "undefined"
                }
                if (Je.array(e)) return "Array";
                if (Je.plainFunction(e)) return "Function";
                var t = $e(e);
                return t || "Object"
            }
            Je.array = Array.isArray, Je.arrayOf = function(e, t) {
                return !(!Je.array(e) && !Je.function(t)) && e.every((function(e) {
                    return t(e)
                }))
            }, Je.asyncGeneratorFunction = function(e) {
                return "AsyncGeneratorFunction" === $e(e)
            }, Je.asyncFunction = Ke("AsyncFunction"), Je.bigint = Xe("bigint"), Je.boolean = function(e) {
                return !0 === e || !1 === e
            }, Je.date = Ke("Date"), Je.defined = function(e) {
                return !Je.undefined(e)
            }, Je.domElement = function(e) {
                return Je.object(e) && !Je.plainObject(e) && 1 === e.nodeType && Je.string(e.nodeName) && qe.every((function(t) {
                    return t in e
                }))
            }, Je.empty = function(e) {
                return Je.string(e) && 0 === e.length || Je.array(e) && 0 === e.length || Je.object(e) && !Je.map(e) && !Je.set(e) && 0 === Object.keys(e).length || Je.set(e) && 0 === e.size || Je.map(e) && 0 === e.size
            }, Je.error = Ke("Error"), Je.function = Xe("function"), Je.generator = function(e) {
                return Je.iterable(e) && Je.function(e.next) && Je.function(e.throw)
            }, Je.generatorFunction = Ke("GeneratorFunction"), Je.instanceOf = function(e, t) {
                return !(!e || !t) && Object.getPrototypeOf(e) === t.prototype
            }, Je.iterable = function(e) {
                return !Je.nullOrUndefined(e) && Je.function(e[Symbol.iterator])
            }, Je.map = Ke("Map"), Je.nan = function(e) {
                return Number.isNaN(e)
            }, Je.null = function(e) {
                return null === e
            }, Je.nullOrUndefined = function(e) {
                return Je.null(e) || Je.undefined(e)
            }, Je.number = function(e) {
                return Xe("number")(e) && !Je.nan(e)
            }, Je.numericString = function(e) {
                return Je.string(e) && e.length > 0 && !Number.isNaN(Number(e))
            }, Je.object = function(e) {
                return !Je.nullOrUndefined(e) && (Je.function(e) || "object" === typeof e)
            }, Je.oneOf = function(e, t) {
                return !!Je.array(e) && e.indexOf(t) > -1
            }, Je.plainFunction = Ke("Function"), Je.plainObject = function(e) {
                if ("Object" !== $e(e)) return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.getPrototypeOf({})
            }, Je.primitive = function(e) {
                return Je.null(e) || (t = typeof e, Ye.includes(t));
                var t
            }, Je.promise = Ke("Promise"), Je.propertyOf = function(e, t, n) {
                if (!Je.object(e) || !t) return !1;
                var r = e[t];
                return Je.function(n) ? n(r) : Je.defined(r)
            }, Je.regexp = Ke("RegExp"), Je.set = Ke("Set"), Je.string = Xe("string"), Je.symbol = Xe("symbol"), Je.undefined = Xe("undefined"), Je.weakMap = Ke("WeakMap"), Je.weakSet = Ke("WeakSet");
            var Ze = Je;

            function Qe(e) {
                return function(t) {
                    return typeof t === e
                }
            }
            var et = Qe("function"),
                tt = function(e) {
                    return "RegExp" === Object.prototype.toString.call(e).slice(8, -1)
                },
                nt = function(e) {
                    return !rt(e) && ! function(e) {
                        return null === e
                    }(e) && (et(e) || "object" === typeof e)
                },
                rt = Qe("undefined"),
                ot = function(e) {
                    var t = "function" === typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                    if (n) return n.call(e);
                    if (e && "number" === typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                };

            function it(e, t) {
                if (e === t) return !0;
                if (e && nt(e) && t && nt(t)) {
                    if (e.constructor !== t.constructor) return !1;
                    if (Array.isArray(e) && Array.isArray(t)) return function(e, t) {
                        var n = e.length;
                        if (n !== t.length) return !1;
                        for (var r = n; 0 !== r--;)
                            if (!it(e[r], t[r])) return !1;
                        return !0
                    }(e, t);
                    if (e instanceof Map && t instanceof Map) return function(e, t) {
                        var n, r, o, i;
                        if (e.size !== t.size) return !1;
                        try {
                            for (var s = ot(e.entries()), a = s.next(); !a.done; a = s.next()) {
                                var l = a.value;
                                if (!t.has(l[0])) return !1
                            }
                        } catch (p) {
                            n = {
                                error: p
                            }
                        } finally {
                            try {
                                a && !a.done && (r = s.return) && r.call(s)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        try {
                            for (var c = ot(e.entries()), u = c.next(); !u.done; u = c.next())
                                if (!it((l = u.value)[1], t.get(l[0]))) return !1
                        } catch (f) {
                            o = {
                                error: f
                            }
                        } finally {
                            try {
                                u && !u.done && (i = c.return) && i.call(c)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return !0
                    }(e, t);
                    if (e instanceof Set && t instanceof Set) return function(e, t) {
                        var n, r;
                        if (e.size !== t.size) return !1;
                        try {
                            for (var o = ot(e.entries()), i = o.next(); !i.done; i = o.next()) {
                                var s = i.value;
                                if (!t.has(s[0])) return !1
                            }
                        } catch (a) {
                            n = {
                                error: a
                            }
                        } finally {
                            try {
                                i && !i.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return !0
                    }(e, t);
                    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return function(e, t) {
                        if (e.byteLength !== t.byteLength) return !1;
                        for (var n = new DataView(e.buffer), r = new DataView(t.buffer), o = e.byteLength; o--;)
                            if (n.getUint8(o) !== r.getUint8(o)) return !1;
                        return !0
                    }(e, t);
                    if (tt(e) && tt(t)) return e.source === t.source && e.flags === t.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (var o = n.length; 0 !== o--;)
                        if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1;
                    for (o = n.length; 0 !== o--;) {
                        var i = n[o];
                        if (("_owner" !== i || !e.$$typeof) && !it(e[i], t[i])) return !1
                    }
                    return !0
                }
                return !(!Number.isNaN(e) || !Number.isNaN(t)) || e === t
            }

            function st(e, t, n) {
                var r = n.actual,
                    o = n.key,
                    i = n.previous,
                    s = n.type,
                    a = ht(e, o),
                    l = ht(t, o),
                    c = [a, l].every(Ze.number) && ("increased" === s ? a < l : a > l);
                return Ze.undefined(r) || (c = c && l === r), Ze.undefined(i) || (c = c && a === i), c
            }

            function at(e, t, n) {
                var r = n.key,
                    o = n.type,
                    i = n.value,
                    s = ht(e, r),
                    a = ht(t, r),
                    l = "added" === o ? s : a,
                    c = "added" === o ? a : s;
                return Ze.nullOrUndefined(i) ? [s, a].every(Ze.array) ? !c.every(ft(l)) : [s, a].every(Ze.plainObject) ? function(e, t) {
                    return t.some((function(t) {
                        return !e.includes(t)
                    }))
                }(Object.keys(l), Object.keys(c)) : ![s, a].every((function(e) {
                    return Ze.primitive(e) && Ze.defined(e)
                })) && ("added" === o ? !Ze.defined(s) && Ze.defined(a) : Ze.defined(s) && !Ze.defined(a)) : Ze.defined(l) ? !(!Ze.array(l) && !Ze.plainObject(l)) && function(e, t, n) {
                    return !!dt(e, t) && ([e, t].every(Ze.array) ? !e.some(ut(n)) && t.some(ut(n)) : [e, t].every(Ze.plainObject) ? !Object.entries(e).some(ct(n)) && Object.entries(t).some(ct(n)) : t === n)
                }(l, c, i) : it(c, i)
            }

            function lt(e, t, n) {
                var r = (void 0 === n ? {} : n).key,
                    o = ht(e, r),
                    i = ht(t, r);
                if (!dt(o, i)) throw new TypeError("Inputs have different types");
                if (! function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return e.every((function(e) {
                            return Ze.string(e) || Ze.array(e) || Ze.plainObject(e)
                        }))
                    }(o, i)) throw new TypeError("Inputs don't have length");
                return [o, i].every(Ze.plainObject) && (o = Object.keys(o), i = Object.keys(i)), [o, i]
            }

            function ct(e) {
                return function(t) {
                    var n = t[0],
                        r = t[1];
                    return Ze.array(e) ? it(e, r) || e.some((function(e) {
                        return it(e, r) || Ze.array(r) && ft(r)(e)
                    })) : Ze.plainObject(e) && e[n] ? !!e[n] && it(e[n], r) : it(e, r)
                }
            }

            function ut(e) {
                return function(t) {
                    return Ze.array(e) ? e.some((function(e) {
                        return it(e, t) || Ze.array(t) && ft(t)(e)
                    })) : it(e, t)
                }
            }

            function pt(e, t) {
                return Ze.array(e) ? e.some((function(e) {
                    return it(e, t)
                })) : it(e, t)
            }

            function ft(e) {
                return function(t) {
                    return e.some((function(e) {
                        return it(e, t)
                    }))
                }
            }

            function dt() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return e.every(Ze.array) || e.every(Ze.number) || e.every(Ze.plainObject) || e.every(Ze.string)
            }

            function ht(e, t) {
                return Ze.plainObject(e) || Ze.array(e) ? Ze.string(t) ? t.split(".").reduce((function(e, t) {
                    return e && e[t]
                }), e) : Ze.number(t) ? e[t] : e : e
            }

            function mt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mt(Object(n), !0).forEach((function(t) {
                        wt(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function bt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function gt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Nt(r.key), r)
                }
            }

            function vt(e, t, n) {
                return t && gt(e.prototype, t), n && gt(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function wt(e, t, n) {
                return (t = Nt(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Ot(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && St(e, t)
            }

            function Et(e) {
                return Et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, Et(e)
            }

            function St(e, t) {
                return St = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, St(e, t)
            }

            function xt(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }

            function Tt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Pt(e, t) {
                if (t && ("object" === typeof t || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Tt(e)
            }

            function kt(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Et(e);
                    if (t) {
                        var o = Et(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Pt(this, n)
                }
            }

            function Nt(e) {
                var t = function(e, t) {
                    if ("object" !== typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === typeof t ? t : String(t)
            }
            var Ct = {
                flip: {
                    padding: 20
                },
                preventOverflow: {
                    padding: 10
                }
            };

            function Rt(e, t, n, r) {
                return "boolean" === typeof e ? e : "function" === typeof e ? e(t, n, r) : !0 === Boolean(e) && Boolean(e)
            }

            function jt(e, t) {
                return Object.hasOwnProperty.call(e, t)
            }

            function It(e, t, n, r) {
                return r ? new Error(r) : new Error("Required ".concat(e[t], " `").concat(t, "` was not specified in `").concat(n, "`."))
            }

            function Lt(e, t, n) {
                return function(e, t) {
                        if ("function" !== typeof e) throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");
                        if (Boolean(t) && "string" !== typeof t) throw new TypeError("The error message is optional, but must be a string if provided.")
                    }(e, n),
                    function(r, o, i) {
                        for (var s = arguments.length, a = new Array(s > 3 ? s - 3 : 0), l = 3; l < s; l++) a[l - 3] = arguments[l];
                        return Rt(t, r, o, i) ? jt(r, o) ? e.apply(void 0, [r, o, i].concat(a)) : It(r, o, i, n) : e.apply(void 0, [r, o, i].concat(a))
                    }
            }
            var At = {
                    INIT: "init",
                    IDLE: "idle",
                    OPENING: "opening",
                    OPEN: "open",
                    CLOSING: "closing",
                    ERROR: "error"
                },
                Mt = void 0 !== R.createPortal;

            function Dt() {
                return !("undefined" === typeof window || !window.document || !window.document.createElement)
            }

            function Ft() {
                return "ontouchstart" in window && /Mobi/.test(navigator.userAgent)
            }

            function Bt(e) {
                var t = e.title,
                    n = e.data,
                    r = e.warn,
                    o = void 0 !== r && r,
                    i = e.debug,
                    s = void 0 !== i && i,
                    a = o ? console.warn || console.error : console.log;
                s && t && n && (console.groupCollapsed("%creact-floater: ".concat(t), "color: #9b00ff; font-weight: bold; font-size: 12px;"), Array.isArray(n) ? n.forEach((function(e) {
                    Ze.plainObject(e) && e.key ? a.apply(console, [e.key, e.value]) : a.apply(console, [e])
                })) : a.apply(console, [n]), console.groupEnd())
            }

            function Wt(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.addEventListener(t, n, r)
            }

            function _t(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.removeEventListener(t, n, r)
            }

            function zt() {}
            var Ut = function(e) {
                Ot(n, e);
                var t = kt(n);

                function n() {
                    return bt(this, n), t.apply(this, arguments)
                }
                return vt(n, [{
                    key: "componentDidMount",
                    value: function() {
                        Dt() && (this.node || this.appendNode(), Mt || this.renderPortal())
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        Dt() && (Mt || this.renderPortal())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Dt() && this.node && (Mt || R.unmountComponentAtNode(this.node), this.node && this.node.parentNode === document.body && (document.body.removeChild(this.node), this.node = void 0))
                    }
                }, {
                    key: "appendNode",
                    value: function() {
                        var e = this.props,
                            t = e.id,
                            n = e.zIndex;
                        this.node || (this.node = document.createElement("div"), t && (this.node.id = t), n && (this.node.style.zIndex = n), document.body.appendChild(this.node))
                    }
                }, {
                    key: "renderPortal",
                    value: function() {
                        if (!Dt()) return null;
                        var e = this.props,
                            t = e.children,
                            n = e.setRef;
                        return this.node || this.appendNode(), Mt ? R.createPortal(t, this.node) : (n(R.unstable_renderSubtreeIntoContainer(this, t.length > 1 ? r.createElement("div", null, t) : t[0], this.node)), null)
                    }
                }, {
                    key: "renderReact16",
                    value: function() {
                        var e = this.props,
                            t = e.hasChildren,
                            n = e.placement,
                            r = e.target;
                        return t || r || "center" === n ? this.renderPortal() : null
                    }
                }, {
                    key: "render",
                    value: function() {
                        return Mt ? this.renderReact16() : null
                    }
                }]), n
            }(r.Component);
            wt(Ut, "propTypes", {
                children: A().oneOfType([A().element, A().array]),
                hasChildren: A().bool,
                id: A().oneOfType([A().string, A().number]),
                placement: A().string,
                setRef: A().func.isRequired,
                target: A().oneOfType([A().object, A().string]),
                zIndex: A().number
            });
            var Ht = function(e) {
                Ot(n, e);
                var t = kt(n);

                function n() {
                    return bt(this, n), t.apply(this, arguments)
                }
                return vt(n, [{
                    key: "parentStyle",
                    get: function() {
                        var e = this.props,
                            t = e.placement,
                            n = e.styles.arrow.length,
                            r = {
                                pointerEvents: "none",
                                position: "absolute",
                                width: "100%"
                            };
                        return t.startsWith("top") ? (r.bottom = 0, r.left = 0, r.right = 0, r.height = n) : t.startsWith("bottom") ? (r.left = 0, r.right = 0, r.top = 0, r.height = n) : t.startsWith("left") ? (r.right = 0, r.top = 0, r.bottom = 0) : t.startsWith("right") && (r.left = 0, r.top = 0), r
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this.props,
                            n = t.placement,
                            o = t.setArrowRef,
                            i = t.styles.arrow,
                            s = i.color,
                            a = i.display,
                            l = i.length,
                            c = i.margin,
                            u = i.position,
                            p = i.spread,
                            f = {
                                display: a,
                                position: u
                            },
                            d = p,
                            h = l;
                        return n.startsWith("top") ? (e = "0,0 ".concat(d / 2, ",").concat(h, " ").concat(d, ",0"), f.bottom = 0, f.marginLeft = c, f.marginRight = c) : n.startsWith("bottom") ? (e = "".concat(d, ",").concat(h, " ").concat(d / 2, ",0 0,").concat(h), f.top = 0, f.marginLeft = c, f.marginRight = c) : n.startsWith("left") ? (h = p, e = "0,0 ".concat(d = l, ",").concat(h / 2, " 0,").concat(h), f.right = 0, f.marginTop = c, f.marginBottom = c) : n.startsWith("right") && (h = p, e = "".concat(d = l, ",").concat(h, " ").concat(d, ",0 0,").concat(h / 2), f.left = 0, f.marginTop = c, f.marginBottom = c), r.createElement("div", {
                            className: "__floater__arrow",
                            style: this.parentStyle
                        }, r.createElement("span", {
                            ref: o,
                            style: f
                        }, r.createElement("svg", {
                            width: d,
                            height: h,
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, r.createElement("polygon", {
                            points: e,
                            fill: s
                        }))))
                    }
                }]), n
            }(r.Component);
            wt(Ht, "propTypes", {
                placement: A().string.isRequired,
                setArrowRef: A().func.isRequired,
                styles: A().object.isRequired
            });
            var Gt = ["color", "height", "width"];

            function qt(e) {
                var t = e.handleClick,
                    n = e.styles,
                    o = n.color,
                    i = n.height,
                    s = n.width,
                    a = xt(n, Gt);
                return r.createElement("button", {
                    "aria-label": "close",
                    onClick: t,
                    style: a,
                    type: "button"
                }, r.createElement("svg", {
                    width: "".concat(s, "px"),
                    height: "".concat(i, "px"),
                    viewBox: "0 0 18 18",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid"
                }, r.createElement("g", null, r.createElement("path", {
                    d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
                    fill: o
                }))))
            }

            function Vt(e) {
                var t = e.content,
                    n = e.footer,
                    o = e.handleClick,
                    i = e.open,
                    s = e.positionWrapper,
                    a = e.showCloseButton,
                    l = e.title,
                    c = e.styles,
                    u = {
                        content: r.isValidElement(t) ? t : r.createElement("div", {
                            className: "__floater__content",
                            style: c.content
                        }, t)
                    };
                return l && (u.title = r.isValidElement(l) ? l : r.createElement("div", {
                    className: "__floater__title",
                    style: c.title
                }, l)), n && (u.footer = r.isValidElement(n) ? n : r.createElement("div", {
                    className: "__floater__footer",
                    style: c.footer
                }, n)), !a && !s || Ze.boolean(i) || (u.close = r.createElement(qt, {
                    styles: c.close,
                    handleClick: o
                })), r.createElement("div", {
                    className: "__floater__container",
                    style: c.container
                }, u.close, u.title, u.content, u.footer)
            }
            qt.propTypes = {
                handleClick: A().func.isRequired,
                styles: A().object.isRequired
            }, Vt.propTypes = {
                content: A().node.isRequired,
                footer: A().node,
                handleClick: A().func.isRequired,
                open: A().bool,
                positionWrapper: A().bool.isRequired,
                showCloseButton: A().bool.isRequired,
                styles: A().object.isRequired,
                title: A().node
            };
            var Yt = function(e) {
                Ot(n, e);
                var t = kt(n);

                function n() {
                    return bt(this, n), t.apply(this, arguments)
                }
                return vt(n, [{
                    key: "style",
                    get: function() {
                        var e = this.props,
                            t = e.disableAnimation,
                            n = e.component,
                            r = e.placement,
                            o = e.hideArrow,
                            i = e.status,
                            s = e.styles,
                            a = s.arrow.length,
                            l = s.floater,
                            c = s.floaterCentered,
                            u = s.floaterClosing,
                            p = s.floaterOpening,
                            f = s.floaterWithAnimation,
                            d = s.floaterWithComponent,
                            h = {};
                        return o || (r.startsWith("top") ? h.padding = "0 0 ".concat(a, "px") : r.startsWith("bottom") ? h.padding = "".concat(a, "px 0 0") : r.startsWith("left") ? h.padding = "0 ".concat(a, "px 0 0") : r.startsWith("right") && (h.padding = "0 0 0 ".concat(a, "px"))), -1 !== [At.OPENING, At.OPEN].indexOf(i) && (h = yt(yt({}, h), p)), i === At.CLOSING && (h = yt(yt({}, h), u)), i !== At.OPEN || t || (h = yt(yt({}, h), f)), "center" === r && (h = yt(yt({}, h), c)), n && (h = yt(yt({}, h), d)), yt(yt({}, l), h)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.component,
                            n = e.handleClick,
                            o = e.hideArrow,
                            i = e.setFloaterRef,
                            s = e.status,
                            a = {},
                            l = ["__floater"];
                        return a.content = t ? r.isValidElement(t) ? r.cloneElement(t, {
                            closeFn: n
                        }) : t({
                            closeFn: n
                        }) : r.createElement(Vt, this.props), s === At.OPEN && l.push("__floater__open"), o || (a.arrow = r.createElement(Ht, this.props)), r.createElement("div", {
                            ref: i,
                            className: l.join(" "),
                            style: this.style
                        }, r.createElement("div", {
                            className: "__floater__body"
                        }, a.content, a.arrow))
                    }
                }]), n
            }(r.Component);
            wt(Yt, "propTypes", {
                component: A().oneOfType([A().func, A().element]),
                content: A().node,
                disableAnimation: A().bool.isRequired,
                footer: A().node,
                handleClick: A().func.isRequired,
                hideArrow: A().bool.isRequired,
                open: A().bool,
                placement: A().string.isRequired,
                positionWrapper: A().bool.isRequired,
                setArrowRef: A().func.isRequired,
                setFloaterRef: A().func.isRequired,
                showCloseButton: A().bool,
                status: A().string.isRequired,
                styles: A().object.isRequired,
                title: A().node
            });
            var $t = function(e) {
                Ot(n, e);
                var t = kt(n);

                function n() {
                    return bt(this, n), t.apply(this, arguments)
                }
                return vt(n, [{
                    key: "render",
                    value: function() {
                        var e, t = this.props,
                            n = t.children,
                            o = t.handleClick,
                            i = t.handleMouseEnter,
                            s = t.handleMouseLeave,
                            a = t.setChildRef,
                            l = t.setWrapperRef,
                            c = t.style,
                            u = t.styles;
                        if (n)
                            if (1 === r.Children.count(n))
                                if (r.isValidElement(n)) {
                                    var p = Ze.function(n.type) ? "innerRef" : "ref";
                                    e = r.cloneElement(r.Children.only(n), wt({}, p, a))
                                } else e = r.createElement("span", null, n);
                        else e = n;
                        return e ? r.createElement("span", {
                            ref: l,
                            style: yt(yt({}, u), c),
                            onClick: o,
                            onMouseEnter: i,
                            onMouseLeave: s
                        }, e) : null
                    }
                }]), n
            }(r.Component);
            wt($t, "propTypes", {
                children: A().node,
                handleClick: A().func.isRequired,
                handleMouseEnter: A().func.isRequired,
                handleMouseLeave: A().func.isRequired,
                setChildRef: A().func.isRequired,
                setWrapperRef: A().func.isRequired,
                style: A().object,
                styles: A().object.isRequired
            });
            var Kt = {
                zIndex: 100
            };
            var Xt = ["arrow", "flip", "offset"],
                Jt = ["position", "top", "right", "bottom", "left"],
                Zt = function(e) {
                    Ot(n, e);
                    var t = kt(n);

                    function n(e) {
                        var r;
                        return bt(this, n), wt(Tt(r = t.call(this, e)), "setArrowRef", (function(e) {
                            r.arrowRef = e
                        })), wt(Tt(r), "setChildRef", (function(e) {
                            r.childRef = e
                        })), wt(Tt(r), "setFloaterRef", (function(e) {
                            r.floaterRef = e
                        })), wt(Tt(r), "setWrapperRef", (function(e) {
                            r.wrapperRef = e
                        })), wt(Tt(r), "handleTransitionEnd", (function() {
                            var e = r.state.status,
                                t = r.props.callback;
                            r.wrapperPopper && r.wrapperPopper.instance.update(), r.setState({
                                status: e === At.OPENING ? At.OPEN : At.IDLE
                            }, (function() {
                                var e = r.state.status;
                                t(e === At.OPEN ? "open" : "close", r.props)
                            }))
                        })), wt(Tt(r), "handleClick", (function() {
                            var e = r.props,
                                t = e.event,
                                n = e.open;
                            if (!Ze.boolean(n)) {
                                var o = r.state,
                                    i = o.positionWrapper,
                                    s = o.status;
                                ("click" === r.event || "hover" === r.event && i) && (Bt({
                                    title: "click",
                                    data: [{
                                        event: t,
                                        status: s === At.OPEN ? "closing" : "opening"
                                    }],
                                    debug: r.debug
                                }), r.toggle())
                            }
                        })), wt(Tt(r), "handleMouseEnter", (function() {
                            var e = r.props,
                                t = e.event,
                                n = e.open;
                            if (!Ze.boolean(n) && !Ft()) {
                                var o = r.state.status;
                                "hover" === r.event && o === At.IDLE && (Bt({
                                    title: "mouseEnter",
                                    data: [{
                                        key: "originalEvent",
                                        value: t
                                    }],
                                    debug: r.debug
                                }), clearTimeout(r.eventDelayTimeout), r.toggle())
                            }
                        })), wt(Tt(r), "handleMouseLeave", (function() {
                            var e = r.props,
                                t = e.event,
                                n = e.eventDelay,
                                o = e.open;
                            if (!Ze.boolean(o) && !Ft()) {
                                var i = r.state,
                                    s = i.status,
                                    a = i.positionWrapper;
                                "hover" === r.event && (Bt({
                                    title: "mouseLeave",
                                    data: [{
                                        key: "originalEvent",
                                        value: t
                                    }],
                                    debug: r.debug
                                }), n ? -1 === [At.OPENING, At.OPEN].indexOf(s) || a || r.eventDelayTimeout || (r.eventDelayTimeout = setTimeout((function() {
                                    delete r.eventDelayTimeout, r.toggle()
                                }), 1e3 * n)) : r.toggle(At.IDLE))
                            }
                        })), r.state = {
                            currentPlacement: e.placement,
                            needsUpdate: !1,
                            positionWrapper: e.wrapperOptions.position && !!e.target,
                            status: At.INIT,
                            statusWrapper: At.INIT
                        }, r._isMounted = !1, r.hasMounted = !1, Dt() && window.addEventListener("load", (function() {
                            r.popper && r.popper.instance.update(), r.wrapperPopper && r.wrapperPopper.instance.update()
                        })), r
                    }
                    return vt(n, [{
                        key: "componentDidMount",
                        value: function() {
                            if (Dt()) {
                                var e = this.state.positionWrapper,
                                    t = this.props,
                                    n = t.children,
                                    r = t.open,
                                    o = t.target;
                                this._isMounted = !0, Bt({
                                    title: "init",
                                    data: {
                                        hasChildren: !!n,
                                        hasTarget: !!o,
                                        isControlled: Ze.boolean(r),
                                        positionWrapper: e,
                                        target: this.target,
                                        floater: this.floaterRef
                                    },
                                    debug: this.debug
                                }), this.hasMounted || (this.initPopper(), this.hasMounted = !0), !n && o && Ze.boolean(r)
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            if (Dt()) {
                                var n, r = this.props,
                                    o = r.autoOpen,
                                    i = r.open,
                                    s = r.target,
                                    a = r.wrapperOptions,
                                    l = function(e, t) {
                                        if ([e, t].some(Ze.nullOrUndefined)) throw new Error("Missing required parameters");
                                        if (![e, t].every((function(e) {
                                                return Ze.plainObject(e) || Ze.array(e)
                                            }))) throw new Error("Expected plain objects or array");
                                        var n = function(n, r, o) {
                                            try {
                                                var i = ht(e, n),
                                                    s = ht(t, n),
                                                    a = Ze.defined(r),
                                                    l = Ze.defined(o);
                                                if (a || l) {
                                                    var c = l ? pt(o, i) : !pt(r, i),
                                                        u = pt(r, s);
                                                    return c && u
                                                }
                                                return [i, s].every(Ze.array) || [i, s].every(Ze.plainObject) ? !it(i, s) : i !== s
                                            } catch (p) {
                                                return !1
                                            }
                                        };
                                        return {
                                            added: function(n, r) {
                                                try {
                                                    return at(e, t, {
                                                        key: n,
                                                        type: "added",
                                                        value: r
                                                    })
                                                } catch (o) {
                                                    return !1
                                                }
                                            },
                                            changed: n,
                                            changedFrom: function(n, r, o) {
                                                if (!Ze.defined(n)) return !1;
                                                try {
                                                    var i = ht(e, n),
                                                        s = ht(t, n),
                                                        a = Ze.defined(o);
                                                    return pt(r, i) && (a ? pt(o, s) : !a)
                                                } catch (l) {
                                                    return !1
                                                }
                                            },
                                            changedTo: function(e, t) {
                                                return !!Ze.defined(e) && n(e, t)
                                            },
                                            decreased: function(n, r, o) {
                                                if (!Ze.defined(n)) return !1;
                                                try {
                                                    return st(e, t, {
                                                        key: n,
                                                        actual: r,
                                                        previous: o,
                                                        type: "decreased"
                                                    })
                                                } catch (i) {
                                                    return !1
                                                }
                                            },
                                            emptied: function(n) {
                                                try {
                                                    var r = lt(e, t, {
                                                            key: n
                                                        }),
                                                        o = r[0],
                                                        i = r[1];
                                                    return !!o.length && !i.length
                                                } catch (s) {
                                                    return !1
                                                }
                                            },
                                            filled: function(n) {
                                                try {
                                                    var r = lt(e, t, {
                                                            key: n
                                                        }),
                                                        o = r[0],
                                                        i = r[1];
                                                    return !o.length && !!i.length
                                                } catch (s) {
                                                    return !1
                                                }
                                            },
                                            increased: function(n, r, o) {
                                                if (!Ze.defined(n)) return !1;
                                                try {
                                                    return st(e, t, {
                                                        key: n,
                                                        actual: r,
                                                        previous: o,
                                                        type: "increased"
                                                    })
                                                } catch (i) {
                                                    return !1
                                                }
                                            },
                                            removed: function(n, r) {
                                                try {
                                                    return at(e, t, {
                                                        key: n,
                                                        type: "removed",
                                                        value: r
                                                    })
                                                } catch (o) {
                                                    return !1
                                                }
                                            }
                                        }
                                    }(t, this.state),
                                    c = l.changedFrom,
                                    u = l.changed;
                                if (e.open !== i) Ze.boolean(i) && (n = i ? At.OPENING : At.CLOSING), this.toggle(n);
                                e.wrapperOptions.position === a.position && e.target === s || this.changeWrapperPosition(this.props), (u("status", At.IDLE) && i || c("status", At.INIT, At.IDLE) && o) && this.toggle(At.OPEN), this.popper && u("status", At.OPENING) && this.popper.instance.update(), this.floaterRef && (u("status", At.OPENING) || u("status", At.CLOSING)) && function(e, t, n) {
                                    var r;
                                    Wt(e, t, r = function(o) {
                                        n(o), _t(e, t, r)
                                    }, arguments.length > 3 && void 0 !== arguments[3] && arguments[3])
                                }(this.floaterRef, "transitionend", this.handleTransitionEnd), u("needsUpdate", !0) && this.rebuildPopper()
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            Dt() && (this._isMounted = !1, this.popper && this.popper.instance.destroy(), this.wrapperPopper && this.wrapperPopper.instance.destroy())
                        }
                    }, {
                        key: "initPopper",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.target,
                                n = this.state.positionWrapper,
                                r = this.props,
                                o = r.disableFlip,
                                i = r.getPopper,
                                s = r.hideArrow,
                                a = r.offset,
                                l = r.placement,
                                c = r.wrapperOptions,
                                u = "top" === l || "bottom" === l ? "flip" : ["right", "bottom-end", "top-end", "left", "top-start", "bottom-start"];
                            if ("center" === l) this.setState({
                                status: At.IDLE
                            });
                            else if (t && this.floaterRef) {
                                var p = this.options,
                                    f = p.arrow,
                                    d = p.flip,
                                    h = p.offset,
                                    m = xt(p, Xt);
                                new Ue(t, this.floaterRef, {
                                    placement: l,
                                    modifiers: yt({
                                        arrow: yt({
                                            enabled: !s,
                                            element: this.arrowRef
                                        }, f),
                                        flip: yt({
                                            enabled: !o,
                                            behavior: u
                                        }, d),
                                        offset: yt({
                                            offset: "0, ".concat(a, "px")
                                        }, h)
                                    }, m),
                                    onCreate: function(t) {
                                        var n;
                                        e.popper = t, null !== (n = e.floaterRef) && void 0 !== n && n.isConnected ? (i(t, "floater"), e._isMounted && e.setState({
                                            currentPlacement: t.placement,
                                            status: At.IDLE
                                        }), l !== t.placement && setTimeout((function() {
                                            t.instance.update()
                                        }), 1)) : e.setState({
                                            needsUpdate: !0
                                        })
                                    },
                                    onUpdate: function(t) {
                                        e.popper = t;
                                        var n = e.state.currentPlacement;
                                        e._isMounted && t.placement !== n && e.setState({
                                            currentPlacement: t.placement
                                        })
                                    }
                                })
                            }
                            if (n) {
                                var y = Ze.undefined(c.offset) ? 0 : c.offset;
                                new Ue(this.target, this.wrapperRef, {
                                    placement: c.placement || l,
                                    modifiers: {
                                        arrow: {
                                            enabled: !1
                                        },
                                        offset: {
                                            offset: "0, ".concat(y, "px")
                                        },
                                        flip: {
                                            enabled: !1
                                        }
                                    },
                                    onCreate: function(t) {
                                        e.wrapperPopper = t, e._isMounted && e.setState({
                                            statusWrapper: At.IDLE
                                        }), i(t, "wrapper"), l !== t.placement && setTimeout((function() {
                                            t.instance.update()
                                        }), 1)
                                    }
                                })
                            }
                        }
                    }, {
                        key: "rebuildPopper",
                        value: function() {
                            var e = this;
                            this.floaterRefInterval = setInterval((function() {
                                var t;
                                null !== (t = e.floaterRef) && void 0 !== t && t.isConnected && (clearInterval(e.floaterRefInterval), e.setState({
                                    needsUpdate: !1
                                }), e.initPopper())
                            }), 50)
                        }
                    }, {
                        key: "changeWrapperPosition",
                        value: function(e) {
                            var t = e.target,
                                n = e.wrapperOptions;
                            this.setState({
                                positionWrapper: n.position && !!t
                            })
                        }
                    }, {
                        key: "toggle",
                        value: function(e) {
                            var t = this.state.status === At.OPEN ? At.CLOSING : At.OPENING;
                            Ze.undefined(e) || (t = e), this.setState({
                                status: t
                            })
                        }
                    }, {
                        key: "debug",
                        get: function() {
                            return this.props.debug || Dt() && "ReactFloaterDebug" in window && !!window.ReactFloaterDebug
                        }
                    }, {
                        key: "event",
                        get: function() {
                            var e = this.props,
                                t = e.disableHoverToClick,
                                n = e.event;
                            return "hover" === n && Ft() && !t ? "click" : n
                        }
                    }, {
                        key: "options",
                        get: function() {
                            var e = this.props.options;
                            return Ge()(Ct, e || {})
                        }
                    }, {
                        key: "styles",
                        get: function() {
                            var e, t = this,
                                n = this.state,
                                r = n.status,
                                o = n.positionWrapper,
                                i = n.statusWrapper,
                                s = this.props.styles,
                                a = Ge()(function(e) {
                                    var t = Ge()(Kt, e.options || {});
                                    return {
                                        wrapper: {
                                            cursor: "help",
                                            display: "inline-flex",
                                            flexDirection: "column",
                                            zIndex: t.zIndex
                                        },
                                        wrapperPosition: {
                                            left: -1e3,
                                            position: "absolute",
                                            top: -1e3,
                                            visibility: "hidden"
                                        },
                                        floater: {
                                            display: "inline-block",
                                            filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
                                            maxWidth: 300,
                                            opacity: 0,
                                            position: "relative",
                                            transition: "opacity 0.3s",
                                            visibility: "hidden",
                                            zIndex: t.zIndex
                                        },
                                        floaterOpening: {
                                            opacity: 1,
                                            visibility: "visible"
                                        },
                                        floaterWithAnimation: {
                                            opacity: 1,
                                            transition: "opacity 0.3s, transform 0.2s",
                                            visibility: "visible"
                                        },
                                        floaterWithComponent: {
                                            maxWidth: "100%"
                                        },
                                        floaterClosing: {
                                            opacity: 0,
                                            visibility: "visible"
                                        },
                                        floaterCentered: {
                                            left: "50%",
                                            position: "fixed",
                                            top: "50%",
                                            transform: "translate(-50%, -50%)"
                                        },
                                        container: {
                                            backgroundColor: "#fff",
                                            color: "#666",
                                            minHeight: 60,
                                            minWidth: 200,
                                            padding: 20,
                                            position: "relative",
                                            zIndex: 10
                                        },
                                        title: {
                                            borderBottom: "1px solid #555",
                                            color: "#555",
                                            fontSize: 18,
                                            marginBottom: 5,
                                            paddingBottom: 6,
                                            paddingRight: 18
                                        },
                                        content: {
                                            fontSize: 15
                                        },
                                        close: {
                                            backgroundColor: "transparent",
                                            border: 0,
                                            borderRadius: 0,
                                            color: "#555",
                                            fontSize: 0,
                                            height: 15,
                                            outline: "none",
                                            padding: 10,
                                            position: "absolute",
                                            right: 0,
                                            top: 0,
                                            width: 15,
                                            WebkitAppearance: "none"
                                        },
                                        footer: {
                                            borderTop: "1px solid #ccc",
                                            fontSize: 13,
                                            marginTop: 10,
                                            paddingTop: 5
                                        },
                                        arrow: {
                                            color: "#fff",
                                            display: "inline-flex",
                                            length: 16,
                                            margin: 8,
                                            position: "absolute",
                                            spread: 32
                                        },
                                        options: t
                                    }
                                }(s), s);
                            o && (e = -1 === [At.IDLE].indexOf(r) || -1 === [At.IDLE].indexOf(i) ? a.wrapperPosition : this.wrapperPopper.styles, a.wrapper = yt(yt({}, a.wrapper), e));
                            if (this.target) {
                                var l = window.getComputedStyle(this.target);
                                this.wrapperStyles ? a.wrapper = yt(yt({}, a.wrapper), this.wrapperStyles) : -1 === ["relative", "static"].indexOf(l.position) && (this.wrapperStyles = {}, o || (Jt.forEach((function(e) {
                                    t.wrapperStyles[e] = l[e]
                                })), a.wrapper = yt(yt({}, a.wrapper), this.wrapperStyles), this.target.style.position = "relative", this.target.style.top = "auto", this.target.style.right = "auto", this.target.style.bottom = "auto", this.target.style.left = "auto"))
                            }
                            return a
                        }
                    }, {
                        key: "target",
                        get: function() {
                            if (!Dt()) return null;
                            var e = this.props.target;
                            return e ? Ze.domElement(e) ? e : document.querySelector(e) : this.childRef || this.wrapperRef
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.currentPlacement,
                                n = e.positionWrapper,
                                o = e.status,
                                i = this.props,
                                s = i.children,
                                a = i.component,
                                l = i.content,
                                c = i.disableAnimation,
                                u = i.footer,
                                p = i.hideArrow,
                                f = i.id,
                                d = i.open,
                                h = i.showCloseButton,
                                m = i.style,
                                y = i.target,
                                b = i.title,
                                g = r.createElement($t, {
                                    handleClick: this.handleClick,
                                    handleMouseEnter: this.handleMouseEnter,
                                    handleMouseLeave: this.handleMouseLeave,
                                    setChildRef: this.setChildRef,
                                    setWrapperRef: this.setWrapperRef,
                                    style: m,
                                    styles: this.styles.wrapper
                                }, s),
                                v = {};
                            return n ? v.wrapperInPortal = g : v.wrapperAsChildren = g, r.createElement("span", null, r.createElement(Ut, {
                                hasChildren: !!s,
                                id: f,
                                placement: t,
                                setRef: this.setFloaterRef,
                                target: y,
                                zIndex: this.styles.options.zIndex
                            }, r.createElement(Yt, {
                                component: a,
                                content: l,
                                disableAnimation: c,
                                footer: u,
                                handleClick: this.handleClick,
                                hideArrow: p || "center" === t,
                                open: d,
                                placement: t,
                                positionWrapper: n,
                                setArrowRef: this.setArrowRef,
                                setFloaterRef: this.setFloaterRef,
                                showCloseButton: h,
                                status: o,
                                styles: this.styles,
                                title: b
                            }), v.wrapperInPortal), v.wrapperAsChildren)
                        }
                    }]), n
                }(r.Component);
            wt(Zt, "propTypes", {
                autoOpen: A().bool,
                callback: A().func,
                children: A().node,
                component: Lt(A().oneOfType([A().func, A().element]), (function(e) {
                    return !e.content
                })),
                content: Lt(A().node, (function(e) {
                    return !e.component
                })),
                debug: A().bool,
                disableAnimation: A().bool,
                disableFlip: A().bool,
                disableHoverToClick: A().bool,
                event: A().oneOf(["hover", "click"]),
                eventDelay: A().number,
                footer: A().node,
                getPopper: A().func,
                hideArrow: A().bool,
                id: A().oneOfType([A().string, A().number]),
                offset: A().number,
                open: A().bool,
                options: A().object,
                placement: A().oneOf(["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "auto", "center"]),
                showCloseButton: A().bool,
                style: A().object,
                styles: A().object,
                target: A().oneOfType([A().object, A().string]),
                title: A().node,
                wrapperOptions: A().shape({
                    offset: A().number,
                    placement: A().oneOf(["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "auto"]),
                    position: A().bool
                })
            }), wt(Zt, "defaultProps", {
                autoOpen: !1,
                callback: zt,
                debug: !1,
                disableAnimation: !1,
                disableFlip: !1,
                disableHoverToClick: !1,
                event: "click",
                eventDelay: .4,
                getPopper: zt,
                hideArrow: !1,
                offset: 15,
                placement: "bottom",
                showCloseButton: !1,
                styles: {},
                target: null,
                wrapperOptions: {
                    position: !1
                }
            });
            var Qt = n(50792),
                en = Object.defineProperty,
                tn = (e, t, n) => (((e, t, n) => {
                    t in e ? en(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                nn = {
                    INIT: "init",
                    START: "start",
                    STOP: "stop",
                    RESET: "reset",
                    PREV: "prev",
                    NEXT: "next",
                    GO: "go",
                    CLOSE: "close",
                    SKIP: "skip",
                    UPDATE: "update"
                },
                rn = {
                    TOUR_START: "tour:start",
                    STEP_BEFORE: "step:before",
                    BEACON: "beacon",
                    TOOLTIP: "tooltip",
                    STEP_AFTER: "step:after",
                    TOUR_END: "tour:end",
                    TOUR_STATUS: "tour:status",
                    TARGET_NOT_FOUND: "error:target_not_found",
                    ERROR: "error"
                },
                on = {
                    INIT: "init",
                    READY: "ready",
                    BEACON: "beacon",
                    TOOLTIP: "tooltip",
                    COMPLETE: "complete",
                    ERROR: "error"
                },
                sn = {
                    IDLE: "idle",
                    READY: "ready",
                    WAITING: "waiting",
                    RUNNING: "running",
                    PAUSED: "paused",
                    SKIPPED: "skipped",
                    FINISHED: "finished",
                    ERROR: "error"
                };

            function an() {
                return !("undefined" === typeof window || !window.document || !window.document.createElement)
            }

            function ln(e) {
                return e ? e.getBoundingClientRect() : null
            }

            function cn() {
                const {
                    body: e,
                    documentElement: t
                } = document;
                return e && t ? Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight) : 0
            }

            function un(e) {
                return "string" === typeof e ? document.querySelector(e) : e
            }

            function pn(e, t, n) {
                if (!e) return mn();
                const r = C(e);
                if (r) {
                    if (r.isSameNode(mn())) return n ? document : mn();
                    if (!(r.scrollHeight > r.offsetHeight) && !t) return r.style.overflow = "initial", mn()
                }
                return r
            }

            function fn(e, t) {
                if (!e) return !1;
                const n = pn(e, t);
                return !!n && !n.isSameNode(mn())
            }

            function dn(e, t = "fixed") {
                if (!e || !(e instanceof HTMLElement)) return !1;
                const {
                    nodeName: n
                } = e, r = function(e) {
                    return e && 1 === e.nodeType ? getComputedStyle(e) : null
                }(e);
                return "BODY" !== n && "HTML" !== n && (!(!r || r.position !== t) || !!e.parentNode && dn(e.parentNode, t))
            }

            function hn(e, t, n) {
                var r;
                if (!e) return 0;
                const {
                    offsetTop: o = 0,
                    scrollTop: i = 0
                } = null != (r = C(e)) ? r : {};
                let s = e.getBoundingClientRect().top + i;
                o && (fn(e, n) || function(e) {
                    return e.offsetParent !== document.body
                }(e)) && (s -= o);
                const a = Math.floor(s - t);
                return a < 0 ? 0 : a
            }

            function mn() {
                var e;
                return null != (e = document.scrollingElement) ? e : document.documentElement
            }
            var yn = void 0 !== R.createPortal;

            function bn(e = navigator.userAgent) {
                let t = e;
                return "undefined" === typeof window ? t = "node" : document.documentMode ? t = "ie" : /Edge/.test(e) ? t = "edge" : Boolean(window.opera) || e.includes(" OPR/") ? t = "opera" : "undefined" !== typeof window.InstallTrigger ? t = "firefox" : window.chrome ? t = "chrome" : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) && (t = "safari"), t
            }

            function gn(e) {
                const t = [],
                    n = e => {
                        if ("string" === typeof e || "number" === typeof e) t.push(e);
                        else if (Array.isArray(e)) e.forEach((e => n(e)));
                        else if ((0, r.isValidElement)(e)) {
                            const {
                                children: t
                            } = e.props;
                            Array.isArray(t) ? t.forEach((e => n(e))) : n(t)
                        }
                    };
                return n(e), t.join(" ").trim()
            }

            function vn(e) {
                const t = e.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, ((e, t, n, r) => t + t + n + n + r + r)),
                    n = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(t);
                return n ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : []
            }

            function wn(e) {
                return e.disableBeacon || "center" === e.placement
            }

            function On() {
                return !["chrome", "safari", "firefox", "opera"].includes(bn())
            }

            function En({
                data: e,
                debug: t = !1,
                title: n,
                warn: r = !1
            }) {
                const o = r ? console.warn || console.error : console.log;
                t && (n && e ? (console.groupCollapsed(`%creact-joyride: ${n}`, "color: #ff0044; font-weight: bold; font-size: 12px;"), Array.isArray(e) ? e.forEach((e => {
                    b.plainObject(e) && e.key ? o.apply(console, [e.key, e.value]) : o.apply(console, [e])
                })) : o.apply(console, [e]), console.groupEnd()) : console.error("Missing title or data props"))
            }
            var Sn = {
                    options: {
                        preventOverflow: {
                            boundariesElement: "scrollParent"
                        }
                    },
                    wrapperOptions: {
                        offset: -18,
                        position: !0
                    }
                },
                xn = {
                    back: "Back",
                    close: "Close",
                    last: "Last",
                    next: "Next",
                    open: "Open the dialog",
                    skip: "Skip"
                },
                Tn = {
                    event: "click",
                    placement: "bottom",
                    offset: 10,
                    disableBeacon: !1,
                    disableCloseOnEsc: !1,
                    disableOverlay: !1,
                    disableOverlayClose: !1,
                    disableScrollParentFix: !1,
                    disableScrolling: !1,
                    hideBackButton: !1,
                    hideCloseButton: !1,
                    hideFooter: !1,
                    isFixed: !1,
                    locale: xn,
                    showProgress: !1,
                    showSkipButton: !1,
                    spotlightClicks: !1,
                    spotlightPadding: 10
                },
                Pn = {
                    continuous: !1,
                    debug: !1,
                    disableCloseOnEsc: !1,
                    disableOverlay: !1,
                    disableOverlayClose: !1,
                    disableScrolling: !1,
                    disableScrollParentFix: !1,
                    getHelpers: void 0,
                    hideBackButton: !1,
                    run: !0,
                    scrollOffset: 20,
                    scrollDuration: 300,
                    scrollToFirstStep: !1,
                    showSkipButton: !1,
                    showProgress: !1,
                    spotlightClicks: !1,
                    spotlightPadding: 10,
                    steps: []
                },
                kn = {
                    arrowColor: "#fff",
                    backgroundColor: "#fff",
                    beaconSize: 36,
                    overlayColor: "rgba(0, 0, 0, 0.5)",
                    primaryColor: "#f04",
                    spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                    textColor: "#333",
                    width: 380,
                    zIndex: 100
                },
                Nn = {
                    backgroundColor: "transparent",
                    border: 0,
                    borderRadius: 0,
                    color: "#555",
                    cursor: "pointer",
                    fontSize: 16,
                    lineHeight: 1,
                    padding: 8,
                    WebkitAppearance: "none"
                },
                Cn = {
                    borderRadius: 4,
                    position: "absolute"
                };

            function Rn(e) {
                return function(e, ...t) {
                    if (!b.plainObject(e)) throw new TypeError("Expected an object");
                    if (!t.length) return e;
                    const n = {};
                    for (const r in e)({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r]);
                    return n
                }(e, "beaconComponent", "disableCloseOnEsc", "disableOverlay", "disableOverlayClose", "disableScrolling", "disableScrollParentFix", "floaterProps", "hideBackButton", "hideCloseButton", "locale", "showProgress", "showSkipButton", "spotlightClicks", "spotlightPadding", "styles", "tooltipComponent")
            }

            function jn(e, t) {
                var n, r, o, i, s, a;
                const l = null != e ? e : {},
                    c = I.all([Tn, Rn(t), l], {
                        isMergeableObject: b.plainObject
                    }),
                    u = function(e, t) {
                        const n = I(null != e ? e : {}, null != t ? t : {}),
                            r = I(kn, n.options || {});
                        let {
                            width: o
                        } = r;
                        window.innerWidth > 480 && (o = 380), "width" in r && (o = "number" === typeof r.width && window.innerWidth < r.width ? window.innerWidth - 30 : r.width);
                        const i = {
                                bottom: 0,
                                left: 0,
                                overflow: "hidden",
                                position: "absolute",
                                right: 0,
                                top: 0,
                                zIndex: r.zIndex
                            },
                            s = {
                                beacon: { ...Nn,
                                    display: "inline-block",
                                    height: r.beaconSize,
                                    position: "relative",
                                    width: r.beaconSize,
                                    zIndex: r.zIndex
                                },
                                beaconInner: {
                                    animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
                                    backgroundColor: r.primaryColor,
                                    borderRadius: "50%",
                                    display: "block",
                                    height: "50%",
                                    left: "50%",
                                    opacity: .7,
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "50%"
                                },
                                beaconOuter: {
                                    animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
                                    backgroundColor: `rgba(${vn(r.primaryColor).join(",")}, 0.2)`,
                                    border: `2px solid ${r.primaryColor}`,
                                    borderRadius: "50%",
                                    boxSizing: "border-box",
                                    display: "block",
                                    height: "100%",
                                    left: 0,
                                    opacity: .9,
                                    position: "absolute",
                                    top: 0,
                                    transformOrigin: "center",
                                    width: "100%"
                                },
                                tooltip: {
                                    backgroundColor: r.backgroundColor,
                                    borderRadius: 5,
                                    boxSizing: "border-box",
                                    color: r.textColor,
                                    fontSize: 16,
                                    maxWidth: "100%",
                                    padding: 15,
                                    position: "relative",
                                    width: o
                                },
                                tooltipContainer: {
                                    lineHeight: 1.4,
                                    textAlign: "center"
                                },
                                tooltipTitle: {
                                    fontSize: 18,
                                    margin: 0
                                },
                                tooltipContent: {
                                    padding: "20px 10px"
                                },
                                tooltipFooter: {
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginTop: 15
                                },
                                tooltipFooterSpacer: {
                                    flex: 1
                                },
                                buttonNext: { ...Nn,
                                    backgroundColor: r.primaryColor,
                                    borderRadius: 4,
                                    color: "#fff"
                                },
                                buttonBack: { ...Nn,
                                    color: r.primaryColor,
                                    marginLeft: "auto",
                                    marginRight: 5
                                },
                                buttonClose: { ...Nn,
                                    color: r.textColor,
                                    height: 14,
                                    padding: 15,
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    width: 14
                                },
                                buttonSkip: { ...Nn,
                                    color: r.textColor,
                                    fontSize: 14
                                },
                                overlay: { ...i,
                                    backgroundColor: r.overlayColor,
                                    mixBlendMode: "hard-light"
                                },
                                overlayLegacy: { ...i
                                },
                                overlayLegacyCenter: { ...i,
                                    backgroundColor: r.overlayColor
                                },
                                spotlight: { ...Cn,
                                    backgroundColor: "gray"
                                },
                                spotlightLegacy: { ...Cn,
                                    boxShadow: `0 0 0 9999px ${r.overlayColor}, ${r.spotlightShadow}`
                                },
                                floaterStyles: {
                                    arrow: {
                                        color: r.arrowColor
                                    },
                                    options: {
                                        zIndex: r.zIndex + 100
                                    }
                                },
                                options: r
                            };
                        return I(s, n)
                    }(t.styles, c.styles),
                    p = fn(un(c.target), c.disableScrollParentFix),
                    f = I.all([Sn, null != (n = t.floaterProps) ? n : {}, null != (r = c.floaterProps) ? r : {}]);
                return f.offset = c.offset, f.styles = I(null != (o = f.styles) ? o : {}, u.floaterStyles), f.offset += null != (s = null != (i = t.spotlightPadding) ? i : c.spotlightPadding) ? s : 0, c.placementBeacon && f.wrapperOptions && (f.wrapperOptions.placement = c.placementBeacon), p && f.options.preventOverflow && (f.options.preventOverflow.boundariesElement = "window"), { ...c,
                    locale: I.all([xn, null != (a = t.locale) ? a : {}, c.locale || {}]),
                    floaterProps: f,
                    styles: j(u, "floaterStyles")
                }
            }

            function In(e, t = !1) {
                return b.plainObject(e) ? !!e.target || (En({
                    title: "validateStep",
                    data: "target is missing from the step",
                    warn: !0,
                    debug: t
                }), !1) : (En({
                    title: "validateStep",
                    data: "step must be an object",
                    warn: !0,
                    debug: t
                }), !1)
            }

            function Ln(e, t = !1) {
                return b.array(e) ? e.every((e => In(e, t))) : (En({
                    title: "validateSteps",
                    data: "steps must be an array",
                    warn: !0,
                    debug: t
                }), !1)
            }
            var An = {
                    action: "init",
                    controlled: !1,
                    index: 0,
                    lifecycle: on.INIT,
                    size: 0,
                    status: sn.IDLE
                },
                Mn = ["action", "index", "lifecycle", "status"];

            function Dn(e) {
                return new class {
                    constructor(e) {
                        tn(this, "beaconPopper"), tn(this, "tooltipPopper"), tn(this, "data", new Map), tn(this, "listener"), tn(this, "store", new Map), tn(this, "addListener", (e => {
                            this.listener = e
                        })), tn(this, "setSteps", (e => {
                            const {
                                size: t,
                                status: n
                            } = this.getState(), r = {
                                size: e.length,
                                status: n
                            };
                            this.data.set("steps", e), n === sn.WAITING && !t && e.length && (r.status = sn.RUNNING), this.setState(r)
                        })), tn(this, "getPopper", (e => "beacon" === e ? this.beaconPopper : this.tooltipPopper)), tn(this, "setPopper", ((e, t) => {
                            "beacon" === e ? this.beaconPopper = t : this.tooltipPopper = t
                        })), tn(this, "cleanupPoppers", (() => {
                            this.beaconPopper = null, this.tooltipPopper = null
                        })), tn(this, "close", (() => {
                            const {
                                index: e,
                                status: t
                            } = this.getState();
                            t === sn.RUNNING && this.setState({ ...this.getNextState({
                                    action: nn.CLOSE,
                                    index: e + 1
                                })
                            })
                        })), tn(this, "go", (e => {
                            const {
                                controlled: t,
                                status: n
                            } = this.getState();
                            if (t || n !== sn.RUNNING) return;
                            const r = this.getSteps()[e];
                            this.setState({ ...this.getNextState({
                                    action: nn.GO,
                                    index: e
                                }),
                                status: r ? n : sn.FINISHED
                            })
                        })), tn(this, "info", (() => this.getState())), tn(this, "next", (() => {
                            const {
                                index: e,
                                status: t
                            } = this.getState();
                            t === sn.RUNNING && this.setState(this.getNextState({
                                action: nn.NEXT,
                                index: e + 1
                            }))
                        })), tn(this, "open", (() => {
                            const {
                                status: e
                            } = this.getState();
                            e === sn.RUNNING && this.setState({ ...this.getNextState({
                                    action: nn.UPDATE,
                                    lifecycle: on.TOOLTIP
                                })
                            })
                        })), tn(this, "prev", (() => {
                            const {
                                index: e,
                                status: t
                            } = this.getState();
                            t === sn.RUNNING && this.setState({ ...this.getNextState({
                                    action: nn.PREV,
                                    index: e - 1
                                })
                            })
                        })), tn(this, "reset", ((e = !1) => {
                            const {
                                controlled: t
                            } = this.getState();
                            t || this.setState({ ...this.getNextState({
                                    action: nn.RESET,
                                    index: 0
                                }),
                                status: e ? sn.RUNNING : sn.READY
                            })
                        })), tn(this, "skip", (() => {
                            const {
                                status: e
                            } = this.getState();
                            e === sn.RUNNING && this.setState({
                                action: nn.SKIP,
                                lifecycle: on.INIT,
                                status: sn.SKIPPED
                            })
                        })), tn(this, "start", (e => {
                            const {
                                index: t,
                                size: n
                            } = this.getState();
                            this.setState({ ...this.getNextState({
                                    action: nn.START,
                                    index: b.number(e) ? e : t
                                }, !0),
                                status: n ? sn.RUNNING : sn.WAITING
                            })
                        })), tn(this, "stop", ((e = !1) => {
                            const {
                                index: t,
                                status: n
                            } = this.getState();
                            [sn.FINISHED, sn.SKIPPED].includes(n) || this.setState({ ...this.getNextState({
                                    action: nn.STOP,
                                    index: t + (e ? 1 : 0)
                                }),
                                status: sn.PAUSED
                            })
                        })), tn(this, "update", (e => {
                            var t, n, r;
                            if (n = e, r = Mn, !(b.plainObject(n) && b.array(r) && Object.keys(n).every((e => r.includes(e))))) throw new Error(`State is not valid. Valid keys: ${Mn.join(", ")}`);
                            this.setState({ ...this.getNextState({ ...this.getState(),
                                    ...e,
                                    action: null != (t = e.action) ? t : nn.UPDATE
                                }, !0)
                            })
                        }));
                        const {
                            continuous: t = !1,
                            stepIndex: n,
                            steps: r = []
                        } = null != e ? e : {};
                        this.setState({
                            action: nn.INIT,
                            controlled: b.number(n),
                            continuous: t,
                            index: b.number(n) ? n : 0,
                            lifecycle: on.INIT,
                            status: r.length ? sn.READY : sn.IDLE
                        }, !0), this.beaconPopper = null, this.tooltipPopper = null, this.listener = null, this.setSteps(r)
                    }
                    getState() {
                        return this.store.size ? {
                            action: this.store.get("action") || "",
                            controlled: this.store.get("controlled") || !1,
                            index: parseInt(this.store.get("index"), 10),
                            lifecycle: this.store.get("lifecycle") || "",
                            size: this.store.get("size") || 0,
                            status: this.store.get("status") || ""
                        } : { ...An
                        }
                    }
                    getNextState(e, t = !1) {
                        var n, r, o, i;
                        const {
                            action: s,
                            controlled: a,
                            index: l,
                            size: c,
                            status: u
                        } = this.getState(), p = b.number(e.index) ? e.index : l, f = a && !t ? l : Math.min(Math.max(p, 0), c);
                        return {
                            action: null != (n = e.action) ? n : s,
                            controlled: a,
                            index: f,
                            lifecycle: null != (r = e.lifecycle) ? r : on.INIT,
                            size: null != (o = e.size) ? o : c,
                            status: f === c ? sn.FINISHED : null != (i = e.status) ? i : u
                        }
                    }
                    getSteps() {
                        const e = this.data.get("steps");
                        return Array.isArray(e) ? e : []
                    }
                    hasUpdatedState(e) {
                        return JSON.stringify(e) !== JSON.stringify(this.getState())
                    }
                    setState(e, t = !1) {
                        const n = this.getState(),
                            {
                                action: r,
                                index: o,
                                lifecycle: i,
                                size: s,
                                status: a
                            } = { ...n,
                                ...e
                            };
                        this.store.set("action", r), this.store.set("index", o), this.store.set("lifecycle", i), this.store.set("size", s), this.store.set("status", a), t && (this.store.set("controlled", e.controlled), this.store.set("continuous", e.continuous)), this.listener && this.hasUpdatedState(n) && this.listener(this.getState())
                    }
                    getHelpers() {
                        return {
                            close: this.close,
                            go: this.go,
                            info: this.info,
                            next: this.next,
                            open: this.open,
                            prev: this.prev,
                            reset: this.reset,
                            skip: this.skip
                        }
                    }
                }(e)
            }
            var Fn = class extends r.Component {
                constructor(e) {
                    if (super(e), tn(this, "beacon", null), tn(this, "setBeaconRef", (e => {
                            this.beacon = e
                        })), e.beaconComponent) return;
                    const t = document.head || document.getElementsByTagName("head")[0],
                        n = document.createElement("style");
                    n.id = "joyride-beacon-animation", e.nonce && n.setAttribute("nonce", e.nonce);
                    n.appendChild(document.createTextNode("\n        @keyframes joyride-beacon-inner {\n          20% {\n            opacity: 0.9;\n          }\n        \n          90% {\n            opacity: 0.7;\n          }\n        }\n        \n        @keyframes joyride-beacon-outer {\n          0% {\n            transform: scale(1);\n          }\n        \n          45% {\n            opacity: 0.7;\n            transform: scale(0.75);\n          }\n        \n          100% {\n            opacity: 0.9;\n            transform: scale(1);\n          }\n        }\n      ")), t.appendChild(n)
                }
                componentDidMount() {
                    const {
                        shouldFocus: e
                    } = this.props;
                    setTimeout((() => {
                        b.domElement(this.beacon) && e && this.beacon.focus()
                    }), 0)
                }
                componentWillUnmount() {
                    const e = document.getElementById("joyride-beacon-animation");
                    (null == e ? void 0 : e.parentNode) && e.parentNode.removeChild(e)
                }
                render() {
                    const {
                        beaconComponent: e,
                        continuous: t,
                        index: n,
                        isLastStep: o,
                        locale: i,
                        onClickOrHover: s,
                        size: a,
                        step: l,
                        styles: c
                    } = this.props, u = b.string(i.open) ? i.open : Qt(i.open), p = {
                        "aria-label": u,
                        onClick: s,
                        onMouseEnter: s,
                        ref: this.setBeaconRef,
                        title: u
                    };
                    let f;
                    if (e) {
                        const i = e;
                        f = r.createElement(i, {
                            continuous: t,
                            index: n,
                            isLastStep: o,
                            size: a,
                            step: l,
                            ...p
                        })
                    } else f = r.createElement("button", {
                        key: "JoyrideBeacon",
                        className: "react-joyride__beacon",
                        "data-test-id": "button-beacon",
                        style: c.beacon,
                        type: "button",
                        ...p
                    }, r.createElement("span", {
                        style: c.beaconInner
                    }), r.createElement("span", {
                        style: c.beaconOuter
                    }));
                    return f
                }
            };
            var Bn = function({
                    styles: e
                }) {
                    return r.createElement("div", {
                        key: "JoyrideSpotlight",
                        className: "react-joyride__spotlight",
                        "data-test-id": "spotlight",
                        style: e
                    })
                },
                Wn = class extends r.Component {
                    constructor() {
                        super(...arguments), tn(this, "isActive", !1), tn(this, "resizeTimeout"), tn(this, "scrollTimeout"), tn(this, "scrollParent"), tn(this, "state", {
                            isScrolling: !1,
                            mouseOverSpotlight: !1,
                            showSpotlight: !0
                        }), tn(this, "handleMouseMove", (e => {
                            const {
                                mouseOverSpotlight: t
                            } = this.state, {
                                height: n,
                                left: r,
                                position: o,
                                top: i,
                                width: s
                            } = this.spotlightStyles, a = "fixed" === o ? e.clientY : e.pageY, l = "fixed" === o ? e.clientX : e.pageX, c = l >= r && l <= r + s && (a >= i && a <= i + n);
                            c !== t && this.updateState({
                                mouseOverSpotlight: c
                            })
                        })), tn(this, "handleScroll", (() => {
                            const {
                                target: e
                            } = this.props, t = un(e);
                            if (this.scrollParent !== document) {
                                const {
                                    isScrolling: e
                                } = this.state;
                                e || this.updateState({
                                    isScrolling: !0,
                                    showSpotlight: !1
                                }), clearTimeout(this.scrollTimeout), this.scrollTimeout = window.setTimeout((() => {
                                    this.updateState({
                                        isScrolling: !1,
                                        showSpotlight: !0
                                    })
                                }), 50)
                            } else dn(t, "sticky") && this.updateState({})
                        })), tn(this, "handleResize", (() => {
                            clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout((() => {
                                this.isActive && this.forceUpdate()
                            }), 100)
                        }))
                    }
                    componentDidMount() {
                        const {
                            debug: e,
                            disableScrolling: t,
                            disableScrollParentFix: n = !1,
                            target: r
                        } = this.props, o = un(r);
                        this.scrollParent = pn(null != o ? o : document.body, n, !0), this.isActive = !0, window.addEventListener("resize", this.handleResize)
                    }
                    componentDidUpdate(e) {
                        var t;
                        const {
                            lifecycle: n,
                            spotlightClicks: r
                        } = this.props, {
                            changed: o
                        } = k(e, this.props);
                        o("lifecycle", on.TOOLTIP) && (null == (t = this.scrollParent) || t.addEventListener("scroll", this.handleScroll, {
                            passive: !0
                        }), setTimeout((() => {
                            const {
                                isScrolling: e
                            } = this.state;
                            e || this.updateState({
                                showSpotlight: !0
                            })
                        }), 100)), (o("spotlightClicks") || o("disableOverlay") || o("lifecycle")) && (r && n === on.TOOLTIP ? window.addEventListener("mousemove", this.handleMouseMove, !1) : n !== on.TOOLTIP && window.removeEventListener("mousemove", this.handleMouseMove))
                    }
                    componentWillUnmount() {
                        var e;
                        this.isActive = !1, window.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("resize", this.handleResize), clearTimeout(this.resizeTimeout), clearTimeout(this.scrollTimeout), null == (e = this.scrollParent) || e.removeEventListener("scroll", this.handleScroll)
                    }
                    get spotlightStyles() {
                        var e, t, n;
                        const {
                            showSpotlight: r
                        } = this.state, {
                            disableScrollParentFix: o = !1,
                            spotlightClicks: i,
                            spotlightPadding: s = 0,
                            styles: a,
                            target: l
                        } = this.props, c = un(l), u = ln(c), p = dn(c), f = function(e, t, n) {
                            var r;
                            const o = ln(e),
                                i = pn(e, n),
                                s = fn(e, n);
                            let a = 0,
                                l = null != (r = null == o ? void 0 : o.top) ? r : 0;
                            return i instanceof HTMLElement && (a = i.scrollTop, s || dn(e) || (l += a), i.isSameNode(mn()) || (l += mn().scrollTop)), Math.floor(l - t)
                        }(c, s, o);
                        return { ...On() ? a.spotlightLegacy : a.spotlight,
                            height: Math.round((null != (e = null == u ? void 0 : u.height) ? e : 0) + 2 * s),
                            left: Math.round((null != (t = null == u ? void 0 : u.left) ? t : 0) - s),
                            opacity: r ? 1 : 0,
                            pointerEvents: i ? "none" : "auto",
                            position: p ? "fixed" : "absolute",
                            top: f,
                            transition: "opacity 0.2s",
                            width: Math.round((null != (n = null == u ? void 0 : u.width) ? n : 0) + 2 * s)
                        }
                    }
                    updateState(e) {
                        this.isActive && this.setState((t => ({ ...t,
                            ...e
                        })))
                    }
                    render() {
                        const {
                            mouseOverSpotlight: e,
                            showSpotlight: t
                        } = this.state, {
                            disableOverlay: n,
                            disableOverlayClose: o,
                            lifecycle: i,
                            onClickOverlay: s,
                            placement: a,
                            styles: l
                        } = this.props;
                        if (n || i !== on.TOOLTIP) return null;
                        let c = l.overlay;
                        On() && (c = "center" === a ? l.overlayLegacyCenter : l.overlayLegacy);
                        const u = {
                            cursor: o ? "default" : "pointer",
                            height: cn(),
                            pointerEvents: e ? "none" : "auto",
                            ...c
                        };
                        let p = "center" !== a && t && r.createElement(Bn, {
                            styles: this.spotlightStyles
                        });
                        if ("safari" === bn()) {
                            const {
                                mixBlendMode: e,
                                zIndex: t,
                                ...n
                            } = u;
                            p = r.createElement("div", {
                                style: { ...n
                                }
                            }, p), delete u.backgroundColor
                        }
                        return r.createElement("div", {
                            className: "react-joyride__overlay",
                            "data-test-id": "overlay",
                            onClick: s,
                            role: "presentation",
                            style: u
                        }, p)
                    }
                },
                _n = class extends r.Component {
                    constructor() {
                        super(...arguments), tn(this, "node", null)
                    }
                    componentDidMount() {
                        const {
                            id: e
                        } = this.props;
                        an() && (this.node = document.createElement("div"), this.node.id = e, document.body.appendChild(this.node), yn || this.renderReact15())
                    }
                    componentDidUpdate() {
                        an() && (yn || this.renderReact15())
                    }
                    componentWillUnmount() {
                        an() && this.node && (yn || R.unmountComponentAtNode(this.node), this.node.parentNode === document.body && (document.body.removeChild(this.node), this.node = null))
                    }
                    renderReact15() {
                        if (!an()) return;
                        const {
                            children: e
                        } = this.props;
                        this.node && R.unstable_renderSubtreeIntoContainer(this, e, this.node)
                    }
                    renderReact16() {
                        if (!an() || !yn) return null;
                        const {
                            children: e
                        } = this.props;
                        return this.node ? R.createPortal(e, this.node) : null
                    }
                    render() {
                        return yn ? this.renderReact16() : null
                    }
                };
            var zn = function({
                styles: e,
                ...t
            }) {
                const {
                    color: n,
                    height: o,
                    width: i,
                    ...s
                } = e;
                return r.createElement("button", {
                    style: s,
                    type: "button",
                    ...t
                }, r.createElement("svg", {
                    height: "number" === typeof o ? `${o}px` : o,
                    preserveAspectRatio: "xMidYMid",
                    version: "1.1",
                    viewBox: "0 0 18 18",
                    width: "number" === typeof i ? `${i}px` : i,
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.createElement("g", null, r.createElement("path", {
                    d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
                    fill: n
                }))))
            };
            var Un = function(e) {
                    const {
                        backProps: t,
                        closeProps: n,
                        continuous: o,
                        index: i,
                        isLastStep: s,
                        primaryProps: a,
                        size: l,
                        skipProps: c,
                        step: u,
                        tooltipProps: p
                    } = e, {
                        content: f,
                        hideBackButton: d,
                        hideCloseButton: h,
                        hideFooter: m,
                        locale: y,
                        showProgress: b,
                        showSkipButton: g,
                        styles: v,
                        title: w
                    } = u, {
                        back: O,
                        close: E,
                        last: S,
                        next: x,
                        skip: T
                    } = y, P = {
                        primary: E
                    };
                    return o && (P.primary = s ? S : x, b && (P.primary = r.createElement("span", null, P.primary, " (", i + 1, "/", l, ")"))), g && !s && (P.skip = r.createElement("button", {
                        "aria-live": "off",
                        "data-test-id": "button-skip",
                        style: v.buttonSkip,
                        type: "button",
                        ...c
                    }, T)), !d && i > 0 && (P.back = r.createElement("button", {
                        "data-test-id": "button-back",
                        style: v.buttonBack,
                        type: "button",
                        ...t
                    }, O)), P.close = !h && r.createElement(zn, {
                        "data-test-id": "button-close",
                        styles: v.buttonClose,
                        ...n
                    }), r.createElement("div", {
                        key: "JoyrideTooltip",
                        "aria-label": gn(w) || gn(f),
                        className: "react-joyride__tooltip",
                        style: v.tooltip,
                        ...p
                    }, r.createElement("div", {
                        style: v.tooltipContainer
                    }, w && r.createElement("h1", {
                        "aria-label": gn(w),
                        style: v.tooltipTitle
                    }, w), r.createElement("div", {
                        style: v.tooltipContent
                    }, f)), !m && r.createElement("div", {
                        style: v.tooltipFooter
                    }, r.createElement("div", {
                        style: v.tooltipFooterSpacer
                    }, P.skip), P.back, r.createElement("button", {
                        "data-test-id": "button-primary",
                        style: v.buttonNext,
                        type: "button",
                        ...a
                    }, P.primary)), P.close)
                },
                Hn = class extends r.Component {
                    constructor() {
                        super(...arguments), tn(this, "handleClickBack", (e => {
                            e.preventDefault();
                            const {
                                helpers: t
                            } = this.props;
                            t.prev()
                        })), tn(this, "handleClickClose", (e => {
                            e.preventDefault();
                            const {
                                helpers: t
                            } = this.props;
                            t.close()
                        })), tn(this, "handleClickPrimary", (e => {
                            e.preventDefault();
                            const {
                                continuous: t,
                                helpers: n
                            } = this.props;
                            t ? n.next() : n.close()
                        })), tn(this, "handleClickSkip", (e => {
                            e.preventDefault();
                            const {
                                helpers: t
                            } = this.props;
                            t.skip()
                        })), tn(this, "getElementsProps", (() => {
                            const {
                                continuous: e,
                                isLastStep: t,
                                setTooltipRef: n,
                                step: r
                            } = this.props, o = gn(r.locale.back), i = gn(r.locale.close), s = gn(r.locale.last), a = gn(r.locale.next), l = gn(r.locale.skip);
                            let c = e ? a : i;
                            return t && (c = s), {
                                backProps: {
                                    "aria-label": o,
                                    "data-action": "back",
                                    onClick: this.handleClickBack,
                                    role: "button",
                                    title: o
                                },
                                closeProps: {
                                    "aria-label": i,
                                    "data-action": "close",
                                    onClick: this.handleClickClose,
                                    role: "button",
                                    title: i
                                },
                                primaryProps: {
                                    "aria-label": c,
                                    "data-action": "primary",
                                    onClick: this.handleClickPrimary,
                                    role: "button",
                                    title: c
                                },
                                skipProps: {
                                    "aria-label": l,
                                    "data-action": "skip",
                                    onClick: this.handleClickSkip,
                                    role: "button",
                                    title: l
                                },
                                tooltipProps: {
                                    "aria-modal": !0,
                                    ref: n,
                                    role: "alertdialog"
                                }
                            }
                        }))
                    }
                    render() {
                        const {
                            continuous: e,
                            index: t,
                            isLastStep: n,
                            setTooltipRef: o,
                            size: i,
                            step: s
                        } = this.props, {
                            beaconComponent: a,
                            tooltipComponent: l,
                            ...c
                        } = s;
                        let u;
                        if (l) {
                            const s = { ...this.getElementsProps(),
                                    continuous: e,
                                    index: t,
                                    isLastStep: n,
                                    size: i,
                                    step: c,
                                    setTooltipRef: o
                                },
                                a = l;
                            u = r.createElement(a, { ...s
                            })
                        } else u = r.createElement(Un, { ...this.getElementsProps(),
                            continuous: e,
                            index: t,
                            isLastStep: n,
                            size: i,
                            step: s
                        });
                        return u
                    }
                },
                Gn = class extends r.Component {
                    constructor() {
                        super(...arguments), tn(this, "scope", null), tn(this, "tooltip", null), tn(this, "handleClickHoverBeacon", (e => {
                            const {
                                step: t,
                                store: n
                            } = this.props;
                            "mouseenter" === e.type && "hover" !== t.event || n.update({
                                lifecycle: on.TOOLTIP
                            })
                        })), tn(this, "handleClickOverlay", (() => {
                            const {
                                helpers: e,
                                step: t
                            } = this.props;
                            t.disableOverlayClose || e.close()
                        })), tn(this, "setTooltipRef", (e => {
                            this.tooltip = e
                        })), tn(this, "setPopper", ((e, t) => {
                            var n;
                            const {
                                action: r,
                                step: o,
                                store: i
                            } = this.props;
                            "wrapper" === t ? i.setPopper("beacon", e) : i.setPopper("tooltip", e), i.getPopper("beacon") && i.getPopper("tooltip") && i.update({
                                action: r,
                                lifecycle: on.READY
                            }), (null == (n = o.floaterProps) ? void 0 : n.getPopper) && o.floaterProps.getPopper(e, t)
                        })), tn(this, "renderTooltip", (e => {
                            const {
                                continuous: t,
                                helpers: n,
                                index: o,
                                size: i,
                                step: s
                            } = this.props;
                            return r.createElement(Hn, {
                                continuous: t,
                                helpers: n,
                                index: o,
                                isLastStep: o + 1 === i,
                                setTooltipRef: this.setTooltipRef,
                                size: i,
                                step: s,
                                ...e
                            })
                        }))
                    }
                    componentDidMount() {
                        const {
                            debug: e,
                            index: t
                        } = this.props;
                        En({
                            title: `step:${t}`,
                            data: [{
                                key: "props",
                                value: this.props
                            }],
                            debug: e
                        })
                    }
                    componentDidUpdate(e) {
                        var t;
                        const {
                            action: n,
                            callback: r,
                            continuous: o,
                            controlled: i,
                            debug: s,
                            index: a,
                            lifecycle: l,
                            size: c,
                            status: u,
                            step: p,
                            store: f
                        } = this.props, {
                            changed: d,
                            changedFrom: h
                        } = k(e, this.props), m = {
                            action: n,
                            controlled: i,
                            index: a,
                            lifecycle: l,
                            size: c,
                            status: u
                        }, y = o && n !== nn.CLOSE && (a > 0 || n === nn.PREV), b = d("action") || d("index") || d("lifecycle") || d("status"), g = h("lifecycle", [on.TOOLTIP, on.INIT], on.INIT), v = d("action", [nn.NEXT, nn.PREV, nn.SKIP, nn.CLOSE]), w = i && a === e.index;
                        if (v && (g || w) && r({ ...m,
                                index: e.index,
                                lifecycle: on.COMPLETE,
                                step: e.step,
                                type: rn.STEP_AFTER
                            }), "center" === p.placement && u === sn.RUNNING && d("index") && n !== nn.START && l === on.INIT && f.update({
                                lifecycle: on.READY
                            }), b) {
                            const e = un(p.target),
                                t = !!e,
                                o = t && function(e) {
                                    var t;
                                    if (!e) return !1;
                                    let n = e;
                                    for (; n && n !== document.body;) {
                                        if (n instanceof HTMLElement) {
                                            const {
                                                display: e,
                                                visibility: t
                                            } = getComputedStyle(n);
                                            if ("none" === e || "hidden" === t) return !1
                                        }
                                        n = null != (t = n.parentElement) ? t : null
                                    }
                                    return !0
                                }(e);
                            o ? (h("status", sn.READY, sn.RUNNING) || h("lifecycle", on.INIT, on.READY)) && r({ ...m,
                                step: p,
                                type: rn.STEP_BEFORE
                            }) : (console.warn(t ? "Target not visible" : "Target not mounted", p), r({ ...m,
                                type: rn.TARGET_NOT_FOUND,
                                step: p
                            }), i || f.update({
                                index: a + (n === nn.PREV ? -1 : 1)
                            }))
                        }
                        h("lifecycle", on.INIT, on.READY) && f.update({
                            lifecycle: wn(p) || y ? on.TOOLTIP : on.BEACON
                        }), d("index") && En({
                            title: `step:${l}`,
                            data: [{
                                key: "props",
                                value: this.props
                            }],
                            debug: s
                        }), d("lifecycle", on.BEACON) && r({ ...m,
                            step: p,
                            type: rn.BEACON
                        }), d("lifecycle", on.TOOLTIP) && (r({ ...m,
                            step: p,
                            type: rn.TOOLTIP
                        }), this.tooltip && (this.scope = new class {
                            constructor(e, t) {
                                if (tn(this, "element"), tn(this, "options"), tn(this, "canBeTabbed", (e => {
                                        const {
                                            tabIndex: t
                                        } = e;
                                        return !(null === t || t < 0) && this.canHaveFocus(e)
                                    })), tn(this, "canHaveFocus", (e => {
                                        const t = e.nodeName.toLowerCase();
                                        return (/input|select|textarea|button|object/.test(t) && !e.getAttribute("disabled") || "a" === t && !!e.getAttribute("href")) && this.isVisible(e)
                                    })), tn(this, "findValidTabElements", (() => [].slice.call(this.element.querySelectorAll("*"), 0).filter(this.canBeTabbed))), tn(this, "handleKeyDown", (e => {
                                        const {
                                            code: t = "Tab"
                                        } = this.options;
                                        e.code === t && this.interceptTab(e)
                                    })), tn(this, "interceptTab", (e => {
                                        e.preventDefault();
                                        const t = this.findValidTabElements(),
                                            {
                                                shiftKey: n
                                            } = e;
                                        if (!t.length) return;
                                        let r = document.activeElement ? t.indexOf(document.activeElement) : 0; - 1 === r || !n && r + 1 === t.length ? r = 0 : n && 0 === r ? r = t.length - 1 : r += n ? -1 : 1, t[r].focus()
                                    })), tn(this, "isHidden", (e => {
                                        const t = e.offsetWidth <= 0 && e.offsetHeight <= 0,
                                            n = window.getComputedStyle(e);
                                        return !(!t || e.innerHTML) || t && "visible" !== n.getPropertyValue("overflow") || "none" === n.getPropertyValue("display")
                                    })), tn(this, "isVisible", (e => {
                                        let t = e;
                                        for (; t;)
                                            if (t instanceof HTMLElement) {
                                                if (t === document.body) break;
                                                if (this.isHidden(t)) return !1;
                                                t = t.parentNode
                                            }
                                        return !0
                                    })), tn(this, "removeScope", (() => {
                                        window.removeEventListener("keydown", this.handleKeyDown)
                                    })), tn(this, "checkFocus", (e => {
                                        document.activeElement !== e && (e.focus(), window.requestAnimationFrame((() => this.checkFocus(e))))
                                    })), tn(this, "setFocus", (() => {
                                        const {
                                            selector: e
                                        } = this.options;
                                        if (!e) return;
                                        const t = this.element.querySelector(e);
                                        t && window.requestAnimationFrame((() => this.checkFocus(t)))
                                    })), !(e instanceof HTMLElement)) throw new TypeError("Invalid parameter: element must be an HTMLElement");
                                this.element = e, this.options = t, window.addEventListener("keydown", this.handleKeyDown, !1), this.setFocus()
                            }
                        }(this.tooltip, {
                            selector: "[data-action=primary]"
                        }), this.scope.setFocus())), h("lifecycle", [on.TOOLTIP, on.INIT], on.INIT) && (null == (t = this.scope) || t.removeScope(), f.cleanupPoppers())
                    }
                    componentWillUnmount() {
                        var e;
                        null == (e = this.scope) || e.removeScope()
                    }
                    get open() {
                        const {
                            lifecycle: e,
                            step: t
                        } = this.props;
                        return wn(t) || e === on.TOOLTIP
                    }
                    render() {
                        const {
                            continuous: e,
                            debug: t,
                            index: n,
                            lifecycle: o,
                            nonce: i,
                            shouldScroll: s,
                            size: a,
                            step: l
                        } = this.props, c = un(l.target);
                        return In(l) && b.domElement(c) ? r.createElement("div", {
                            key: `JoyrideStep-${n}`,
                            className: "react-joyride__step"
                        }, r.createElement(_n, {
                            id: "react-joyride-portal"
                        }, r.createElement(Wn, { ...l,
                            debug: t,
                            lifecycle: o,
                            onClickOverlay: this.handleClickOverlay
                        })), r.createElement(Zt, { ...l.floaterProps,
                            component: this.renderTooltip,
                            debug: t,
                            getPopper: this.setPopper,
                            id: `react-joyride-step-${n}`,
                            open: this.open,
                            placement: l.placement,
                            target: l.target
                        }, r.createElement(Fn, {
                            beaconComponent: l.beaconComponent,
                            continuous: e,
                            index: n,
                            isLastStep: n + 1 === a,
                            locale: l.locale,
                            nonce: i,
                            onClickOrHover: this.handleClickHoverBeacon,
                            shouldFocus: s,
                            size: a,
                            step: l,
                            styles: l.styles
                        }))) : null
                    }
                },
                qn = class extends r.Component {
                    constructor(e) {
                        super(e), tn(this, "helpers"), tn(this, "store"), tn(this, "callback", (e => {
                            const {
                                callback: t
                            } = this.props;
                            b.function(t) && t(e)
                        })), tn(this, "handleKeyboard", (e => {
                            const {
                                index: t,
                                lifecycle: n
                            } = this.state, {
                                steps: r
                            } = this.props, o = r[t];
                            n === on.TOOLTIP && "Escape" === e.code && o && !o.disableCloseOnEsc && this.store.close()
                        })), tn(this, "syncState", (e => {
                            this.setState(e)
                        }));
                        const {
                            debug: t,
                            getHelpers: n,
                            run: r,
                            stepIndex: o
                        } = e;
                        this.store = Dn({ ...e,
                            controlled: r && b.number(o)
                        }), this.helpers = this.store.getHelpers();
                        const {
                            addListener: i
                        } = this.store;
                        En({
                            title: "init",
                            data: [{
                                key: "props",
                                value: this.props
                            }, {
                                key: "state",
                                value: this.state
                            }],
                            debug: t
                        }), i(this.syncState), n && n(this.helpers), this.state = this.store.getState()
                    }
                    componentDidMount() {
                        if (!an()) return;
                        const {
                            debug: e,
                            disableCloseOnEsc: t,
                            run: n,
                            steps: r
                        } = this.props, {
                            start: o
                        } = this.store;
                        Ln(r, e) && n && o(), t || document.body.addEventListener("keydown", this.handleKeyboard, {
                            passive: !0
                        })
                    }
                    componentDidUpdate(e, t) {
                        if (!an()) return;
                        const {
                            action: n,
                            controlled: r,
                            index: o,
                            lifecycle: i,
                            status: s
                        } = this.state, {
                            debug: a,
                            run: l,
                            stepIndex: u,
                            steps: p
                        } = this.props, {
                            stepIndex: f,
                            steps: d
                        } = e, {
                            reset: h,
                            setSteps: m,
                            start: y,
                            stop: g,
                            update: v
                        } = this.store, {
                            changed: w
                        } = k(e, this.props), {
                            changed: O,
                            changedFrom: E
                        } = k(t, this.state), S = jn(p[o], this.props), x = !c(d, p), T = b.number(u) && w("stepIndex"), P = un(S.target);
                        if (x && (Ln(p, a) ? m(p) : console.warn("Steps are not valid", p)), w("run") && (l ? y(u) : g()), T) {
                            let e = b.number(f) && f < u ? nn.NEXT : nn.PREV;
                            n === nn.STOP && (e = nn.START), [sn.FINISHED, sn.SKIPPED].includes(s) || v({
                                action: n === nn.CLOSE ? nn.CLOSE : e,
                                index: u,
                                lifecycle: on.INIT
                            })
                        }
                        r || s !== sn.RUNNING || 0 !== o || P || (this.store.update({
                            index: o + 1
                        }), this.callback({ ...this.state,
                            type: rn.TARGET_NOT_FOUND,
                            step: S
                        }));
                        const N = { ...this.state,
                            index: o,
                            step: S
                        };
                        if (O("action", [nn.NEXT, nn.PREV, nn.SKIP, nn.CLOSE]) && O("status", sn.PAUSED)) {
                            const e = jn(p[t.index], this.props);
                            this.callback({ ...N,
                                index: t.index,
                                lifecycle: on.COMPLETE,
                                step: e,
                                type: rn.STEP_AFTER
                            })
                        }
                        if (O("status", [sn.FINISHED, sn.SKIPPED])) {
                            const e = jn(p[t.index], this.props);
                            r || this.callback({ ...N,
                                index: t.index,
                                lifecycle: on.COMPLETE,
                                step: e,
                                type: rn.STEP_AFTER
                            }), this.callback({ ...N,
                                type: rn.TOUR_END,
                                step: e,
                                index: t.index
                            }), h()
                        } else E("status", [sn.IDLE, sn.READY], sn.RUNNING) ? this.callback({ ...N,
                            type: rn.TOUR_START
                        }) : (O("status") || O("action", nn.RESET)) && this.callback({ ...N,
                            type: rn.TOUR_STATUS
                        });
                        this.scrollToStep(t), "center" === S.placement && s === sn.RUNNING && i === on.INIT && this.store.update({
                            lifecycle: on.READY
                        })
                    }
                    componentWillUnmount() {
                        const {
                            disableCloseOnEsc: e
                        } = this.props;
                        e || document.body.removeEventListener("keydown", this.handleKeyboard)
                    }
                    scrollToStep(e) {
                        const {
                            index: t,
                            lifecycle: n,
                            status: r
                        } = this.state, {
                            debug: o,
                            disableScrollParentFix: i = !1,
                            scrollDuration: s,
                            scrollOffset: a = 20,
                            scrollToFirstStep: l = !1,
                            steps: c
                        } = this.props, u = jn(c[t], this.props), p = un(u.target), f = function(e) {
                            const {
                                isFirstStep: t,
                                lifecycle: n,
                                previousLifecycle: r,
                                scrollToFirstStep: o,
                                step: i,
                                target: s
                            } = e;
                            return !i.disableScrolling && (!t || o || n === on.TOOLTIP) && "center" !== i.placement && (!i.isFixed || !dn(s)) && r !== n && [on.BEACON, on.TOOLTIP].includes(n)
                        }({
                            isFirstStep: 0 === t,
                            lifecycle: n,
                            previousLifecycle: e.lifecycle,
                            scrollToFirstStep: l,
                            step: u,
                            target: p
                        });
                        if (r === sn.RUNNING && f) {
                            const e = fn(p, i),
                                l = pn(p, i);
                            let c = Math.floor(hn(p, a, i)) || 0;
                            En({
                                title: "scrollToStep",
                                data: [{
                                    key: "index",
                                    value: t
                                }, {
                                    key: "lifecycle",
                                    value: n
                                }, {
                                    key: "status",
                                    value: r
                                }],
                                debug: o
                            });
                            const f = this.store.getPopper("beacon"),
                                d = this.store.getPopper("tooltip");
                            if (n === on.BEACON && f) {
                                const {
                                    offsets: t,
                                    placement: n
                                } = f;
                                ["bottom"].includes(n) || e || (c = Math.floor(t.popper.top - a))
                            } else if (n === on.TOOLTIP && d) {
                                const {
                                    flipped: t,
                                    offsets: n,
                                    placement: r
                                } = d;
                                !["top", "right", "left"].includes(r) || t || e ? c -= u.spotlightPadding : c = Math.floor(n.popper.top - a)
                            }
                            c = c >= 0 ? c : 0, r === sn.RUNNING && function(e, t) {
                                const {
                                    duration: n,
                                    element: r
                                } = t;
                                return new Promise(((t, o) => {
                                    const {
                                        scrollTop: i
                                    } = r, s = e > i ? e - i : i - e;
                                    N.top(r, e, {
                                        duration: s < 100 ? 50 : n
                                    }, (e => e && "Element already at target scroll position" !== e.message ? o(e) : t()))
                                }))
                            }(c, {
                                element: l,
                                duration: s
                            }).then((() => {
                                setTimeout((() => {
                                    var e;
                                    null == (e = this.store.getPopper("tooltip")) || e.instance.update()
                                }), 10)
                            }))
                        }
                    }
                    render() {
                        if (!an()) return null;
                        const {
                            index: e,
                            status: t
                        } = this.state, {
                            continuous: n = !1,
                            debug: o = !1,
                            nonce: i,
                            scrollToFirstStep: s = !1,
                            steps: a
                        } = this.props;
                        let l;
                        if (t === sn.RUNNING && a[e]) {
                            const t = jn(a[e], this.props);
                            l = r.createElement(Gn, { ...this.state,
                                callback: this.callback,
                                continuous: n,
                                debug: o,
                                helpers: this.helpers,
                                nonce: i,
                                shouldScroll: !t.disableScrolling && (0 !== e || s),
                                step: t,
                                store: this.store
                            })
                        }
                        return r.createElement("div", {
                            className: "react-joyride"
                        }, l)
                    }
                };
            tn(qn, "defaultProps", Pn);
            var Vn = qn
        }
    }
]);