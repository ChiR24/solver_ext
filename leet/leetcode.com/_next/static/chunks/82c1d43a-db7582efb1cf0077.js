(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2993], {
        28182: function(e, t, s) {
            e.exports = function() {
                "use strict";
                var e = (e, t) => () => (t || e((t = {
                        exports: {}
                    }).exports, t), t.exports),
                    t = e(((e, t) => {
                        var r = function(e) {
                            return e && e.Math == Math && e
                        };
                        t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof s.g && s.g) || function() {
                            return this
                        }() || Function("return this")()
                    })),
                    r = e(((e, t) => {
                        t.exports = function(e) {
                            try {
                                return !!e()
                            } catch {
                                return !0
                            }
                        }
                    })),
                    i = e(((e, t) => {
                        var s = r();
                        t.exports = !s((function() {
                            return 7 != Object.defineProperty({}, 1, {
                                get: function() {
                                    return 7
                                }
                            })[1]
                        }))
                    })),
                    a = e(((e, t) => {
                        var s = r();
                        t.exports = !s((function() {
                            var e = function() {}.bind();
                            return "function" != typeof e || e.hasOwnProperty("prototype")
                        }))
                    })),
                    n = e(((e, t) => {
                        var s = a(),
                            r = Function.prototype.call;
                        t.exports = s ? r.bind(r) : function() {
                            return r.apply(r, arguments)
                        }
                    })),
                    o = e((e => {
                        var t = {}.propertyIsEnumerable,
                            s = Object.getOwnPropertyDescriptor,
                            r = s && !t.call({
                                1: 2
                            }, 1);
                        e.f = r ? function(e) {
                            var t = s(this, e);
                            return !!t && t.enumerable
                        } : t
                    })),
                    h = e(((e, t) => {
                        t.exports = function(e, t) {
                            return {
                                enumerable: !(1 & e),
                                configurable: !(2 & e),
                                writable: !(4 & e),
                                value: t
                            }
                        }
                    })),
                    l = e(((e, t) => {
                        var s = a(),
                            r = Function.prototype,
                            i = r.call,
                            n = s && r.bind.bind(i, i);
                        t.exports = s ? n : function(e) {
                            return function() {
                                return i.apply(e, arguments)
                            }
                        }
                    })),
                    p = e(((e, t) => {
                        var s = l(),
                            r = s({}.toString),
                            i = s("".slice);
                        t.exports = function(e) {
                            return i(r(e), 8, -1)
                        }
                    })),
                    c = e(((e, t) => {
                        var s = l(),
                            i = r(),
                            a = p(),
                            n = Object,
                            o = s("".split);
                        t.exports = i((function() {
                            return !n("z").propertyIsEnumerable(0)
                        })) ? function(e) {
                            return "String" == a(e) ? o(e, "") : n(e)
                        } : n
                    })),
                    u = e(((e, t) => {
                        t.exports = function(e) {
                            return null == e
                        }
                    })),
                    d = e(((e, t) => {
                        var s = u(),
                            r = TypeError;
                        t.exports = function(e) {
                            if (s(e)) throw r("Can't call method on " + e);
                            return e
                        }
                    })),
                    m = e(((e, t) => {
                        var s = c(),
                            r = d();
                        t.exports = function(e) {
                            return s(r(e))
                        }
                    })),
                    f = e(((e, t) => {
                        var s = "object" == typeof document && document.all,
                            r = typeof s > "u" && void 0 !== s;
                        t.exports = {
                            all: s,
                            IS_HTMLDDA: r
                        }
                    })),
                    y = e(((e, t) => {
                        var s = f(),
                            r = s.all;
                        t.exports = s.IS_HTMLDDA ? function(e) {
                            return "function" == typeof e || e === r
                        } : function(e) {
                            return "function" == typeof e
                        }
                    })),
                    x = e(((e, t) => {
                        var s = y(),
                            r = f(),
                            i = r.all;
                        t.exports = r.IS_HTMLDDA ? function(e) {
                            return "object" == typeof e ? null !== e : s(e) || e === i
                        } : function(e) {
                            return "object" == typeof e ? null !== e : s(e)
                        }
                    })),
                    g = e(((e, s) => {
                        var r = t(),
                            i = y(),
                            a = function(e) {
                                return i(e) ? e : void 0
                            };
                        s.exports = function(e, t) {
                            return arguments.length < 2 ? a(r[e]) : r[e] && r[e][t]
                        }
                    })),
                    P = e(((e, t) => {
                        var s = l();
                        t.exports = s({}.isPrototypeOf)
                    })),
                    b = e(((e, t) => {
                        var s = g();
                        t.exports = s("navigator", "userAgent") || ""
                    })),
                    T = e(((e, s) => {
                        var r, i, a = t(),
                            n = b(),
                            o = a.process,
                            h = a.Deno,
                            l = o && o.versions || h && h.version,
                            p = l && l.v8;
                        p && (i = (r = p.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && n && (!(r = n.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = n.match(/Chrome\/(\d+)/)) && (i = +r[1]), s.exports = i
                    })),
                    A = e(((e, t) => {
                        var s = T(),
                            i = r();
                        t.exports = !!Object.getOwnPropertySymbols && !i((function() {
                            var e = Symbol();
                            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && s && s < 41
                        }))
                    })),
                    E = e(((e, t) => {
                        var s = A();
                        t.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator
                    })),
                    w = e(((e, t) => {
                        var s = g(),
                            r = y(),
                            i = P(),
                            a = E(),
                            n = Object;
                        t.exports = a ? function(e) {
                            return "symbol" == typeof e
                        } : function(e) {
                            var t = s("Symbol");
                            return r(t) && i(t.prototype, n(e))
                        }
                    })),
                    S = e(((e, t) => {
                        var s = String;
                        t.exports = function(e) {
                            try {
                                return s(e)
                            } catch {
                                return "Object"
                            }
                        }
                    })),
                    v = e(((e, t) => {
                        var s = y(),
                            r = S(),
                            i = TypeError;
                        t.exports = function(e) {
                            if (s(e)) return e;
                            throw i(r(e) + " is not a function")
                        }
                    })),
                    C = e(((e, t) => {
                        var s = v(),
                            r = u();
                        t.exports = function(e, t) {
                            var i = e[t];
                            return r(i) ? void 0 : s(i)
                        }
                    })),
                    N = e(((e, t) => {
                        var s = n(),
                            r = y(),
                            i = x(),
                            a = TypeError;
                        t.exports = function(e, t) {
                            var n, o;
                            if ("string" === t && r(n = e.toString) && !i(o = s(n, e)) || r(n = e.valueOf) && !i(o = s(n, e)) || "string" !== t && r(n = e.toString) && !i(o = s(n, e))) return o;
                            throw a("Can't convert object to primitive value")
                        }
                    })),
                    I = e(((e, t) => {
                        t.exports = !1
                    })),
                    k = e(((e, s) => {
                        var r = t(),
                            i = Object.defineProperty;
                        s.exports = function(e, t) {
                            try {
                                i(r, e, {
                                    value: t,
                                    configurable: !0,
                                    writable: !0
                                })
                            } catch {
                                r[e] = t
                            }
                            return t
                        }
                    })),
                    L = e(((e, s) => {
                        var r = t(),
                            i = k(),
                            a = "__core-js_shared__",
                            n = r[a] || i(a, {});
                        s.exports = n
                    })),
                    M = e(((e, t) => {
                        var s = I(),
                            r = L();
                        (t.exports = function(e, t) {
                            return r[e] || (r[e] = void 0 !== t ? t : {})
                        })("versions", []).push({
                            version: "3.26.1",
                            mode: s ? "pure" : "global",
                            copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
                            license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
                            source: "https://github.com/zloirock/core-js"
                        })
                    })),
                    O = e(((e, t) => {
                        var s = d(),
                            r = Object;
                        t.exports = function(e) {
                            return r(s(e))
                        }
                    })),
                    D = e(((e, t) => {
                        var s = l(),
                            r = O(),
                            i = s({}.hasOwnProperty);
                        t.exports = Object.hasOwn || function(e, t) {
                            return i(r(e), t)
                        }
                    })),
                    F = e(((e, t) => {
                        var s = l(),
                            r = 0,
                            i = Math.random(),
                            a = s(1..toString);
                        t.exports = function(e) {
                            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++r + i, 36)
                        }
                    })),
                    B = e(((e, s) => {
                        var r = t(),
                            i = M(),
                            a = D(),
                            n = F(),
                            o = A(),
                            h = E(),
                            l = i("wks"),
                            p = r.Symbol,
                            c = p && p.for,
                            u = h ? p : p && p.withoutSetter || n;
                        s.exports = function(e) {
                            if (!a(l, e) || !o && "string" != typeof l[e]) {
                                var t = "Symbol." + e;
                                o && a(p, e) ? l[e] = p[e] : l[e] = h && c ? c(t) : u(t)
                            }
                            return l[e]
                        }
                    })),
                    j = e(((e, t) => {
                        var s = n(),
                            r = x(),
                            i = w(),
                            a = C(),
                            o = N(),
                            h = B(),
                            l = TypeError,
                            p = h("toPrimitive");
                        t.exports = function(e, t) {
                            if (!r(e) || i(e)) return e;
                            var n, h = a(e, p);
                            if (h) {
                                if (void 0 === t && (t = "default"), n = s(h, e, t), !r(n) || i(n)) return n;
                                throw l("Can't convert object to primitive value")
                            }
                            return void 0 === t && (t = "number"), o(e, t)
                        }
                    })),
                    R = e(((e, t) => {
                        var s = j(),
                            r = w();
                        t.exports = function(e) {
                            var t = s(e, "string");
                            return r(t) ? t : t + ""
                        }
                    })),
                    U = e(((e, s) => {
                        var r = t(),
                            i = x(),
                            a = r.document,
                            n = i(a) && i(a.createElement);
                        s.exports = function(e) {
                            return n ? a.createElement(e) : {}
                        }
                    })),
                    _ = e(((e, t) => {
                        var s = i(),
                            a = r(),
                            n = U();
                        t.exports = !s && !a((function() {
                            return 7 != Object.defineProperty(n("div"), "a", {
                                get: function() {
                                    return 7
                                }
                            }).a
                        }))
                    })),
                    z = e((e => {
                        var t = i(),
                            s = n(),
                            r = o(),
                            a = h(),
                            l = m(),
                            p = R(),
                            c = D(),
                            u = _(),
                            d = Object.getOwnPropertyDescriptor;
                        e.f = t ? d : function(e, t) {
                            if (e = l(e), t = p(t), u) try {
                                return d(e, t)
                            } catch {}
                            if (c(e, t)) return a(!s(r.f, e, t), e[t])
                        }
                    })),
                    H = e(((e, t) => {
                        var s = i(),
                            a = r();
                        t.exports = s && a((function() {
                            return 42 != Object.defineProperty((function() {}), "prototype", {
                                value: 42,
                                writable: !1
                            }).prototype
                        }))
                    })),
                    $ = e(((e, t) => {
                        var s = x(),
                            r = String,
                            i = TypeError;
                        t.exports = function(e) {
                            if (s(e)) return e;
                            throw i(r(e) + " is not an object")
                        }
                    })),
                    V = e((e => {
                        var t = i(),
                            s = _(),
                            r = H(),
                            a = $(),
                            n = R(),
                            o = TypeError,
                            h = Object.defineProperty,
                            l = Object.getOwnPropertyDescriptor,
                            p = "enumerable",
                            c = "configurable",
                            u = "writable";
                        e.f = t ? r ? function(e, t, s) {
                            if (a(e), t = n(t), a(s), "function" == typeof e && "prototype" === t && "value" in s && u in s && !s[u]) {
                                var r = l(e, t);
                                r && r[u] && (e[t] = s.value, s = {
                                    configurable: c in s ? s[c] : r[c],
                                    enumerable: p in s ? s[p] : r[p],
                                    writable: !1
                                })
                            }
                            return h(e, t, s)
                        } : h : function(e, t, r) {
                            if (a(e), t = n(t), a(r), s) try {
                                return h(e, t, r)
                            } catch {}
                            if ("get" in r || "set" in r) throw o("Accessors not supported");
                            return "value" in r && (e[t] = r.value), e
                        }
                    })),
                    q = e(((e, t) => {
                        var s = i(),
                            r = V(),
                            a = h();
                        t.exports = s ? function(e, t, s) {
                            return r.f(e, t, a(1, s))
                        } : function(e, t, s) {
                            return e[t] = s, e
                        }
                    })),
                    K = e(((e, t) => {
                        var s = i(),
                            r = D(),
                            a = Function.prototype,
                            n = s && Object.getOwnPropertyDescriptor,
                            o = r(a, "name"),
                            h = o && "something" === function() {}.name,
                            l = o && (!s || s && n(a, "name").configurable);
                        t.exports = {
                            EXISTS: o,
                            PROPER: h,
                            CONFIGURABLE: l
                        }
                    })),
                    W = e(((e, t) => {
                        var s = l(),
                            r = y(),
                            i = L(),
                            a = s(Function.toString);
                        r(i.inspectSource) || (i.inspectSource = function(e) {
                            return a(e)
                        }), t.exports = i.inspectSource
                    })),
                    J = e(((e, s) => {
                        var r = t(),
                            i = y(),
                            a = r.WeakMap;
                        s.exports = i(a) && /native code/.test(String(a))
                    })),
                    X = e(((e, t) => {
                        var s = M(),
                            r = F(),
                            i = s("keys");
                        t.exports = function(e) {
                            return i[e] || (i[e] = r(e))
                        }
                    })),
                    G = e(((e, t) => {
                        t.exports = {}
                    })),
                    Y = e(((e, s) => {
                        var r, i, a, n, o, h = J(),
                            l = t(),
                            p = x(),
                            c = q(),
                            u = D(),
                            d = L(),
                            m = X(),
                            f = G(),
                            y = "Object already initialized",
                            g = l.TypeError,
                            P = l.WeakMap,
                            b = function(e) {
                                return a(e) ? i(e) : r(e, {})
                            },
                            T = function(e) {
                                return function(t) {
                                    var s;
                                    if (!p(t) || (s = i(t)).type !== e) throw g("Incompatible receiver, " + e + " required");
                                    return s
                                }
                            };
                        h || d.state ? ((n = d.state || (d.state = new P)).get = n.get, n.has = n.has, n.set = n.set, r = function(e, t) {
                            if (n.has(e)) throw g(y);
                            return t.facade = e, n.set(e, t), t
                        }, i = function(e) {
                            return n.get(e) || {}
                        }, a = function(e) {
                            return n.has(e)
                        }) : (f[o = m("state")] = !0, r = function(e, t) {
                            if (u(e, o)) throw g(y);
                            return t.facade = e, c(e, o, t), t
                        }, i = function(e) {
                            return u(e, o) ? e[o] : {}
                        }, a = function(e) {
                            return u(e, o)
                        }), s.exports = {
                            set: r,
                            get: i,
                            has: a,
                            enforce: b,
                            getterFor: T
                        }
                    })),
                    Q = e(((e, t) => {
                        var s = r(),
                            a = y(),
                            n = D(),
                            o = i(),
                            h = K().CONFIGURABLE,
                            l = W(),
                            p = Y(),
                            c = p.enforce,
                            u = p.get,
                            d = Object.defineProperty,
                            m = o && !s((function() {
                                return 8 !== d((function() {}), "length", {
                                    value: 8
                                }).length
                            })),
                            f = String(String).split("String"),
                            x = t.exports = function(e, t, s) {
                                "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), s && s.getter && (t = "get " + t), s && s.setter && (t = "set " + t), (!n(e, "name") || h && e.name !== t) && (o ? d(e, "name", {
                                    value: t,
                                    configurable: !0
                                }) : e.name = t), m && s && n(s, "arity") && e.length !== s.arity && d(e, "length", {
                                    value: s.arity
                                });
                                try {
                                    s && n(s, "constructor") && s.constructor ? o && d(e, "prototype", {
                                        writable: !1
                                    }) : e.prototype && (e.prototype = void 0)
                                } catch {}
                                var r = c(e);
                                return n(r, "source") || (r.source = f.join("string" == typeof t ? t : "")), e
                            };
                        Function.prototype.toString = x((function() {
                            return a(this) && u(this).source || l(this)
                        }), "toString")
                    })),
                    Z = e(((e, t) => {
                        var s = y(),
                            r = V(),
                            i = Q(),
                            a = k();
                        t.exports = function(e, t, n, o) {
                            o || (o = {});
                            var h = o.enumerable,
                                l = void 0 !== o.name ? o.name : t;
                            if (s(n) && i(n, l, o), o.global) h ? e[t] = n : a(t, n);
                            else {
                                try {
                                    o.unsafe ? e[t] && (h = !0) : delete e[t]
                                } catch {}
                                h ? e[t] = n : r.f(e, t, {
                                    value: n,
                                    enumerable: !1,
                                    configurable: !o.nonConfigurable,
                                    writable: !o.nonWritable
                                })
                            }
                            return e
                        }
                    })),
                    ee = e(((e, t) => {
                        var s = Math.ceil,
                            r = Math.floor;
                        t.exports = Math.trunc || function(e) {
                            var t = +e;
                            return (t > 0 ? r : s)(t)
                        }
                    })),
                    te = e(((e, t) => {
                        var s = ee();
                        t.exports = function(e) {
                            var t = +e;
                            return t !== t || 0 === t ? 0 : s(t)
                        }
                    })),
                    se = e(((e, t) => {
                        var s = te(),
                            r = Math.max,
                            i = Math.min;
                        t.exports = function(e, t) {
                            var a = s(e);
                            return a < 0 ? r(a + t, 0) : i(a, t)
                        }
                    })),
                    re = e(((e, t) => {
                        var s = te(),
                            r = Math.min;
                        t.exports = function(e) {
                            return e > 0 ? r(s(e), 9007199254740991) : 0
                        }
                    })),
                    ie = e(((e, t) => {
                        var s = re();
                        t.exports = function(e) {
                            return s(e.length)
                        }
                    })),
                    ae = e(((e, t) => {
                        var s = m(),
                            r = se(),
                            i = ie(),
                            a = function(e) {
                                return function(t, a, n) {
                                    var o, h = s(t),
                                        l = i(h),
                                        p = r(n, l);
                                    if (e && a != a) {
                                        for (; l > p;)
                                            if ((o = h[p++]) != o) return !0
                                    } else
                                        for (; l > p; p++)
                                            if ((e || p in h) && h[p] === a) return e || p || 0;
                                    return !e && -1
                                }
                            };
                        t.exports = {
                            includes: a(!0),
                            indexOf: a(!1)
                        }
                    })),
                    ne = e(((e, t) => {
                        var s = l(),
                            r = D(),
                            i = m(),
                            a = ae().indexOf,
                            n = G(),
                            o = s([].push);
                        t.exports = function(e, t) {
                            var s, h = i(e),
                                l = 0,
                                p = [];
                            for (s in h) !r(n, s) && r(h, s) && o(p, s);
                            for (; t.length > l;) r(h, s = t[l++]) && (~a(p, s) || o(p, s));
                            return p
                        }
                    })),
                    oe = e(((e, t) => {
                        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
                    })),
                    he = e((e => {
                        var t = ne(),
                            s = oe().concat("length", "prototype");
                        e.f = Object.getOwnPropertyNames || function(e) {
                            return t(e, s)
                        }
                    })),
                    le = e((e => {
                        e.f = Object.getOwnPropertySymbols
                    })),
                    pe = e(((e, t) => {
                        var s = g(),
                            r = l(),
                            i = he(),
                            a = le(),
                            n = $(),
                            o = r([].concat);
                        t.exports = s("Reflect", "ownKeys") || function(e) {
                            var t = i.f(n(e)),
                                s = a.f;
                            return s ? o(t, s(e)) : t
                        }
                    })),
                    ce = e(((e, t) => {
                        var s = D(),
                            r = pe(),
                            i = z(),
                            a = V();
                        t.exports = function(e, t, n) {
                            for (var o = r(t), h = a.f, l = i.f, p = 0; p < o.length; p++) {
                                var c = o[p];
                                !s(e, c) && (!n || !s(n, c)) && h(e, c, l(t, c))
                            }
                        }
                    })),
                    ue = e(((e, t) => {
                        var s = r(),
                            i = y(),
                            a = /#|\.prototype\./,
                            n = function(e, t) {
                                var r = h[o(e)];
                                return r == p || r != l && (i(t) ? s(t) : !!t)
                            },
                            o = n.normalize = function(e) {
                                return String(e).replace(a, ".").toLowerCase()
                            },
                            h = n.data = {},
                            l = n.NATIVE = "N",
                            p = n.POLYFILL = "P";
                        t.exports = n
                    })),
                    de = e(((e, s) => {
                        var r = t(),
                            i = z().f,
                            a = q(),
                            n = Z(),
                            o = k(),
                            h = ce(),
                            l = ue();
                        s.exports = function(e, t) {
                            var s, p, c, u, d, m = e.target,
                                f = e.global,
                                y = e.stat;
                            if (s = f ? r : y ? r[m] || o(m, {}) : (r[m] || {}).prototype)
                                for (p in t) {
                                    if (u = t[p], c = e.dontCallGetSet ? (d = i(s, p)) && d.value : s[p], !l(f ? p : m + (y ? "." : "#") + p, e.forced) && void 0 !== c) {
                                        if (typeof u == typeof c) continue;
                                        h(u, c)
                                    }(e.sham || c && c.sham) && a(u, "sham", !0), n(s, p, u, e)
                                }
                        }
                    })),
                    me = e((() => {
                        var e = de(),
                            s = t();
                        e({
                            global: !0,
                            forced: s.globalThis !== s
                        }, {
                            globalThis: s
                        })
                    })),
                    fe = e((() => {
                        me()
                    })),
                    ye = e(((e, t) => {
                        var s = Q(),
                            r = V();
                        t.exports = function(e, t, i) {
                            return i.get && s(i.get, t, {
                                getter: !0
                            }), i.set && s(i.set, t, {
                                setter: !0
                            }), r.f(e, t, i)
                        }
                    })),
                    xe = e(((e, t) => {
                        var s = $();
                        t.exports = function() {
                            var e = s(this),
                                t = "";
                            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
                        }
                    })),
                    ge = e((() => {
                        var e = t(),
                            s = i(),
                            a = ye(),
                            n = xe(),
                            o = r(),
                            h = e.RegExp,
                            l = h.prototype;
                        s && o((function() {
                            var e = !0;
                            try {
                                h(".", "d")
                            } catch {
                                e = !1
                            }
                            var t = {},
                                s = "",
                                r = e ? "dgimsy" : "gimsy",
                                i = function(e, r) {
                                    Object.defineProperty(t, e, {
                                        get: function() {
                                            return s += r, !0
                                        }
                                    })
                                },
                                a = {
                                    dotAll: "s",
                                    global: "g",
                                    ignoreCase: "i",
                                    multiline: "m",
                                    sticky: "y"
                                };
                            for (var n in e && (a.hasIndices = "d"), a) i(n, a[n]);
                            return Object.getOwnPropertyDescriptor(l, "flags").get.call(t) !== r || s !== r
                        })) && a(l, "flags", {
                            configurable: !0,
                            get: n
                        })
                    })),
                    Pe = e(((e, t) => {
                        var s = p();
                        t.exports = Array.isArray || function(e) {
                            return "Array" == s(e)
                        }
                    })),
                    be = e(((e, t) => {
                        var s = TypeError,
                            r = 9007199254740991;
                        t.exports = function(e) {
                            if (e > r) throw s("Maximum allowed index exceeded");
                            return e
                        }
                    })),
                    Te = e(((e, t) => {
                        var s = p(),
                            r = l();
                        t.exports = function(e) {
                            if ("Function" === s(e)) return r(e)
                        }
                    })),
                    Ae = e(((e, t) => {
                        var s = Te(),
                            r = v(),
                            i = a(),
                            n = s(s.bind);
                        t.exports = function(e, t) {
                            return r(e), void 0 === t ? e : i ? n(e, t) : function() {
                                return e.apply(t, arguments)
                            }
                        }
                    })),
                    Ee = e(((e, t) => {
                        var s = Pe(),
                            r = ie(),
                            i = be(),
                            a = Ae(),
                            n = function(e, t, o, h, l, p, c, u) {
                                for (var d, m, f = l, y = 0, x = !!c && a(c, u); y < h;) y in o && (d = x ? x(o[y], y, t) : o[y], p > 0 && s(d) ? (m = r(d), f = n(e, t, d, m, f, p - 1) - 1) : (i(f + 1), e[f] = d), f++), y++;
                                return f
                            };
                        t.exports = n
                    })),
                    we = e(((e, t) => {
                        var s = {};
                        s[B()("toStringTag")] = "z", t.exports = "[object z]" === String(s)
                    })),
                    Se = e(((e, t) => {
                        var s = we(),
                            r = y(),
                            i = p(),
                            a = B()("toStringTag"),
                            n = Object,
                            o = "Arguments" == i(function() {
                                return arguments
                            }()),
                            h = function(e, t) {
                                try {
                                    return e[t]
                                } catch {}
                            };
                        t.exports = s ? i : function(e) {
                            var t, s, l;
                            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(s = h(t = n(e), a)) ? s : o ? i(t) : "Object" == (l = i(t)) && r(t.callee) ? "Arguments" : l
                        }
                    })),
                    ve = e(((e, t) => {
                        var s = l(),
                            i = r(),
                            a = y(),
                            n = Se(),
                            o = g(),
                            h = W(),
                            p = function() {},
                            c = [],
                            u = o("Reflect", "construct"),
                            d = /^\s*(?:class|function)\b/,
                            m = s(d.exec),
                            f = !d.exec(p),
                            x = function(e) {
                                if (!a(e)) return !1;
                                try {
                                    return u(p, c, e), !0
                                } catch {
                                    return !1
                                }
                            },
                            P = function(e) {
                                if (!a(e)) return !1;
                                switch (n(e)) {
                                    case "AsyncFunction":
                                    case "GeneratorFunction":
                                    case "AsyncGeneratorFunction":
                                        return !1
                                }
                                try {
                                    return f || !!m(d, h(e))
                                } catch {
                                    return !0
                                }
                            };
                        P.sham = !0, t.exports = !u || i((function() {
                            var e;
                            return x(x.call) || !x(Object) || !x((function() {
                                e = !0
                            })) || e
                        })) ? P : x
                    })),
                    Ce = e(((e, t) => {
                        var s = Pe(),
                            r = ve(),
                            i = x(),
                            a = B()("species"),
                            n = Array;
                        t.exports = function(e) {
                            var t;
                            return s(e) && (t = e.constructor, (r(t) && (t === n || s(t.prototype)) || i(t) && null === (t = t[a])) && (t = void 0)), void 0 === t ? n : t
                        }
                    })),
                    Ne = e(((e, t) => {
                        var s = Ce();
                        t.exports = function(e, t) {
                            return new(s(e))(0 === t ? 0 : t)
                        }
                    })),
                    Ie = e((() => {
                        var e = de(),
                            t = Ee(),
                            s = v(),
                            r = O(),
                            i = ie(),
                            a = Ne();
                        e({
                            target: "Array",
                            proto: !0
                        }, {
                            flatMap: function(e) {
                                var n, o = r(this),
                                    h = i(o);
                                return s(e), (n = a(o, 0)).length = t(n, o, o, h, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), n
                            }
                        })
                    })),
                    ke = e(((e, t) => {
                        fe(), ge(), Ie();
                        var s = Object.defineProperty,
                            r = Object.getOwnPropertyDescriptor,
                            i = Object.getOwnPropertyNames,
                            a = Object.prototype.hasOwnProperty,
                            n = (e, t) => function() {
                                return e && (t = (0, e[i(e)[0]])(e = 0)), t
                            },
                            o = (e, t) => function() {
                                return t || (0, e[i(e)[0]])((t = {
                                    exports: {}
                                }).exports, t), t.exports
                            },
                            h = (e, t) => {
                                for (var r in t) s(e, r, {
                                    get: t[r],
                                    enumerable: !0
                                })
                            },
                            l = (e, t, n, o) => {
                                if (t && "object" == typeof t || "function" == typeof t)
                                    for (let h of i(t)) !a.call(e, h) && h !== n && s(e, h, {
                                        get: () => t[h],
                                        enumerable: !(o = r(t, h)) || o.enumerable
                                    });
                                return e
                            },
                            p = e => l(s({}, "__esModule", {
                                value: !0
                            }), e),
                            c = n({
                                "<define:process>" () {}
                            }),
                            u = o({
                                "src/utils/try-combinations.js" (e, t) {
                                    function s() {
                                        let e;
                                        for (var t = arguments.length, s = new Array(t), r = 0; r < t; r++) s[r] = arguments[r];
                                        for (let [a, n] of s.entries()) try {
                                            return {
                                                result: n()
                                            }
                                        } catch (i) {
                                            0 === a && (e = i)
                                        }
                                        return {
                                            error: e
                                        }
                                    }
                                    c(), t.exports = s
                                }
                            }),
                            d = o({
                                "src/language-js/utils/get-shebang.js" (e, t) {
                                    function s(e) {
                                        if (!e.startsWith("#!")) return "";
                                        let t = e.indexOf("\n");
                                        return -1 === t ? e : e.slice(0, t)
                                    }
                                    c(), t.exports = s
                                }
                            }),
                            m = o({
                                "src/utils/text/skip-inline-comment.js" (e, t) {
                                    function s(e, t) {
                                        if (!1 === t) return !1;
                                        if ("/" === e.charAt(t) && "*" === e.charAt(t + 1))
                                            for (let s = t + 2; s < e.length; ++s)
                                                if ("*" === e.charAt(s) && "/" === e.charAt(s + 1)) return s + 2;
                                        return t
                                    }
                                    c(), t.exports = s
                                }
                            }),
                            f = o({
                                "src/utils/text/skip-newline.js" (e, t) {
                                    function s(e, t, s) {
                                        let r = s && s.backwards;
                                        if (!1 === t) return !1;
                                        let i = e.charAt(t);
                                        if (r) {
                                            if ("\r" === e.charAt(t - 1) && "\n" === i) return t - 2;
                                            if ("\n" === i || "\r" === i || "\u2028" === i || "\u2029" === i) return t - 1
                                        } else {
                                            if ("\r" === i && "\n" === e.charAt(t + 1)) return t + 2;
                                            if ("\n" === i || "\r" === i || "\u2028" === i || "\u2029" === i) return t + 1
                                        }
                                        return t
                                    }
                                    c(), t.exports = s
                                }
                            }),
                            y = o({
                                "src/utils/text/skip.js" (e, t) {
                                    function s(e) {
                                        return (t, s, r) => {
                                            let i = r && r.backwards;
                                            if (!1 === s) return !1;
                                            let {
                                                length: a
                                            } = t, n = s;
                                            for (; n >= 0 && n < a;) {
                                                let s = t.charAt(n);
                                                if (e instanceof RegExp) {
                                                    if (!e.test(s)) return n
                                                } else if (!e.includes(s)) return n;
                                                i ? n-- : n++
                                            }
                                            return (-1 === n || n === a) && n
                                        }
                                    }
                                    c();
                                    var r = s(/\s/),
                                        i = s(" \t"),
                                        a = s(",; \t"),
                                        n = s(/[^\n\r]/);
                                    t.exports = {
                                        skipWhitespace: r,
                                        skipSpaces: i,
                                        skipToLineEnd: a,
                                        skipEverythingButNewLine: n
                                    }
                                }
                            }),
                            x = o({
                                "src/utils/text/skip-trailing-comment.js" (e, t) {
                                    c();
                                    var {
                                        skipEverythingButNewLine: s
                                    } = y();

                                    function r(e, t) {
                                        return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? s(e, t) : t)
                                    }
                                    t.exports = r
                                }
                            }),
                            g = o({
                                "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js" (e, t) {
                                    c();
                                    var s = m(),
                                        r = f(),
                                        i = x(),
                                        {
                                            skipSpaces: a
                                        } = y();

                                    function n(e, t) {
                                        let n = null,
                                            o = t;
                                        for (; o !== n;) n = o, o = a(e, o), o = s(e, o), o = i(e, o), o = r(e, o);
                                        return o
                                    }
                                    t.exports = n
                                }
                            }),
                            P = {};

                        function b() {
                            if (typeof D > "u") {
                                var e = new ArrayBuffer(2),
                                    t = new Uint8Array(e),
                                    s = new Uint16Array(e);
                                if (t[0] = 1, t[1] = 2, 258 === s[0]) D = "BE";
                                else {
                                    if (513 !== s[0]) throw new Error("unable to figure out endianess");
                                    D = "LE"
                                }
                            }
                            return D
                        }

                        function T() {
                            return typeof globalThis.location < "u" ? globalThis.location.hostname : ""
                        }

                        function A() {
                            return []
                        }

                        function E() {
                            return 0
                        }

                        function w() {
                            return Number.MAX_VALUE
                        }

                        function S() {
                            return Number.MAX_VALUE
                        }

                        function v() {
                            return []
                        }

                        function C() {
                            return "Browser"
                        }

                        function N() {
                            return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : ""
                        }

                        function I() {}

                        function k() {}

                        function L() {
                            return "javascript"
                        }

                        function M() {
                            return "browser"
                        }

                        function O() {
                            return "/tmp"
                        }
                        h(P, {
                            EOL: () => B,
                            arch: () => L,
                            cpus: () => v,
                            default: () => j,
                            endianness: () => b,
                            freemem: () => w,
                            getNetworkInterfaces: () => k,
                            hostname: () => T,
                            loadavg: () => A,
                            networkInterfaces: () => I,
                            platform: () => M,
                            release: () => N,
                            tmpDir: () => O,
                            tmpdir: () => F,
                            totalmem: () => S,
                            type: () => C,
                            uptime: () => E
                        });
                        var D, F, B, j, R = n({
                                "node-modules-polyfills:os" () {
                                    c(), j = {
                                        EOL: B = "\n",
                                        tmpdir: F = O,
                                        tmpDir: O,
                                        networkInterfaces: I,
                                        getNetworkInterfaces: k,
                                        release: N,
                                        type: C,
                                        cpus: v,
                                        totalmem: S,
                                        freemem: w,
                                        uptime: E,
                                        loadavg: A,
                                        hostname: T,
                                        endianness: b
                                    }
                                }
                            }),
                            U = o({
                                "node-modules-polyfills-commonjs:os" (e, t) {
                                    c();
                                    var s = (R(), p(P));
                                    if (s && s.default) {
                                        t.exports = s.default;
                                        for (let e in s) t.exports[e] = s[e]
                                    } else s && (t.exports = s)
                                }
                            }),
                            _ = o({
                                "node_modules/detect-newline/index.js" (e, t) {
                                    c();
                                    var s = e => {
                                        if ("string" != typeof e) throw new TypeError("Expected a string");
                                        let t = e.match(/(?:\r?\n)/g) || [];
                                        if (0 === t.length) return;
                                        let s = t.filter((e => "\r\n" === e)).length;
                                        return s > t.length - s ? "\r\n" : "\n"
                                    };
                                    t.exports = s, t.exports.graceful = e => "string" == typeof e && s(e) || "\n"
                                }
                            }),
                            z = o({
                                "node_modules/jest-docblock/build/index.js" (e) {
                                    function t() {
                                        let e = U();
                                        return t = function() {
                                            return e
                                        }, e
                                    }

                                    function s() {
                                        let e = r(_());
                                        return s = function() {
                                            return e
                                        }, e
                                    }

                                    function r(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    }
                                    c(), Object.defineProperty(e, "__esModule", {
                                        value: !0
                                    }), e.extract = m, e.parse = y, e.parseWithComments = x, e.print = g, e.strip = f;
                                    var i = /\*\/$/,
                                        a = /^\/\*\*?/,
                                        n = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
                                        o = /(^|\s+)\/\/([^\r\n]*)/g,
                                        h = /^(\r?\n)+/,
                                        l = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
                                        p = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
                                        u = /(\r?\n|^) *\* ?/g,
                                        d = [];

                                    function m(e) {
                                        let t = e.match(n);
                                        return t ? t[0].trimLeft() : ""
                                    }

                                    function f(e) {
                                        let t = e.match(n);
                                        return t && t[0] ? e.substring(t[0].length) : e
                                    }

                                    function y(e) {
                                        return x(e).pragmas
                                    }

                                    function x(e) {
                                        let r = (0, s().default)(e) || t().EOL;
                                        e = e.replace(a, "").replace(i, "").replace(u, "$1");
                                        let n = "";
                                        for (; n !== e;) n = e, e = e.replace(l, `${r}$1 $2${r}`);
                                        e = e.replace(h, "").trimRight();
                                        let c, m = Object.create(null),
                                            f = e.replace(p, "").replace(h, "").trimRight();
                                        for (; c = p.exec(e);) {
                                            let e = c[2].replace(o, "");
                                            "string" == typeof m[c[1]] || Array.isArray(m[c[1]]) ? m[c[1]] = d.concat(m[c[1]], e) : m[c[1]] = e
                                        }
                                        return {
                                            comments: f,
                                            pragmas: m
                                        }
                                    }

                                    function g(e) {
                                        let {
                                            comments: r = "",
                                            pragmas: i = {}
                                        } = e, a = (0, s().default)(r) || t().EOL, n = "/**", o = " *", h = " */", l = Object.keys(i), p = l.map((e => P(e, i[e]))).reduce(((e, t) => e.concat(t)), []).map((e => `${o} ${e}${a}`)).join("");
                                        if (!r) {
                                            if (0 === l.length) return "";
                                            if (1 === l.length && !Array.isArray(i[l[0]])) {
                                                let e = i[l[0]];
                                                return `${n} ${P(l[0],e)[0]}${h}`
                                            }
                                        }
                                        let c = r.split(a).map((e => `${o} ${e}`)).join(a) + a;
                                        return n + a + (r ? c : "") + (r && l.length ? o + a : "") + p + h
                                    }

                                    function P(e, t) {
                                        return d.concat(t).map((t => `@${e} ${t}`.trim()))
                                    }
                                }
                            }),
                            H = o({
                                "src/common/end-of-line.js" (e, t) {
                                    function s(e) {
                                        let t = e.indexOf("\r");
                                        return t >= 0 ? "\n" === e.charAt(t + 1) ? "crlf" : "cr" : "lf"
                                    }

                                    function r(e) {
                                        switch (e) {
                                            case "cr":
                                                return "\r";
                                            case "crlf":
                                                return "\r\n";
                                            default:
                                                return "\n"
                                        }
                                    }

                                    function i(e, t) {
                                        let s;
                                        switch (t) {
                                            case "\n":
                                                s = /\n/g;
                                                break;
                                            case "\r":
                                                s = /\r/g;
                                                break;
                                            case "\r\n":
                                                s = /\r\n/g;
                                                break;
                                            default:
                                                throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`)
                                        }
                                        let r = e.match(s);
                                        return r ? r.length : 0
                                    }

                                    function a(e) {
                                        return e.replace(/\r\n?/g, "\n")
                                    }
                                    c(), t.exports = {
                                        guessEndOfLine: s,
                                        convertEndOfLineToChars: r,
                                        countEndOfLineChars: i,
                                        normalizeEndOfLine: a
                                    }
                                }
                            }),
                            $ = o({
                                "src/language-js/pragma.js" (e, t) {
                                    c();
                                    var {
                                        parseWithComments: s,
                                        strip: r,
                                        extract: i,
                                        print: a
                                    } = z(), {
                                        normalizeEndOfLine: n
                                    } = H(), o = d();

                                    function h(e) {
                                        let t = o(e);
                                        t && (e = e.slice(t.length + 1));
                                        let r = i(e),
                                            {
                                                pragmas: a,
                                                comments: n
                                            } = s(r);
                                        return {
                                            shebang: t,
                                            text: e,
                                            pragmas: a,
                                            comments: n
                                        }
                                    }

                                    function l(e) {
                                        let t = Object.keys(h(e).pragmas);
                                        return t.includes("prettier") || t.includes("format")
                                    }

                                    function p(e) {
                                        let {
                                            shebang: t,
                                            text: s,
                                            pragmas: i,
                                            comments: o
                                        } = h(e), l = r(s), p = a({
                                            pragmas: Object.assign({
                                                format: ""
                                            }, i),
                                            comments: o.trimStart()
                                        });
                                        return (t ? `${t}\n` : "") + n(p) + (l.startsWith("\n") ? "\n" : "\n\n") + l
                                    }
                                    t.exports = {
                                        hasPragma: l,
                                        insertPragma: p
                                    }
                                }
                            }),
                            V = o({
                                "src/utils/is-non-empty-array.js" (e, t) {
                                    function s(e) {
                                        return Array.isArray(e) && e.length > 0
                                    }
                                    c(), t.exports = s
                                }
                            }),
                            q = o({
                                "src/language-js/loc.js" (e, t) {
                                    c();
                                    var s = V();

                                    function r(e) {
                                        var t, i;
                                        let a = e.range ? e.range[0] : e.start,
                                            n = null !== (t = null === (i = e.declaration) || void 0 === i ? void 0 : i.decorators) && void 0 !== t ? t : e.decorators;
                                        return s(n) ? Math.min(r(n[0]), a) : a
                                    }

                                    function i(e) {
                                        return e.range ? e.range[1] : e.end
                                    }

                                    function a(e, t) {
                                        let s = r(e);
                                        return Number.isInteger(s) && s === r(t)
                                    }

                                    function n(e, t) {
                                        let s = i(e);
                                        return Number.isInteger(s) && s === i(t)
                                    }

                                    function o(e, t) {
                                        return a(e, t) && n(e, t)
                                    }
                                    t.exports = {
                                        locStart: r,
                                        locEnd: i,
                                        hasSameLocStart: a,
                                        hasSameLoc: o
                                    }
                                }
                            }),
                            K = o({
                                "src/language-js/parse/utils/create-parser.js" (e, t) {
                                    c();
                                    var {
                                        hasPragma: s
                                    } = $(), {
                                        locStart: r,
                                        locEnd: i
                                    } = q();

                                    function a(e) {
                                        return e = "function" == typeof e ? {
                                            parse: e
                                        } : e, Object.assign({
                                            astFormat: "estree",
                                            hasPragma: s,
                                            locStart: r,
                                            locEnd: i
                                        }, e)
                                    }
                                    t.exports = a
                                }
                            }),
                            W = o({
                                "src/common/parser-create-error.js" (e, t) {
                                    function s(e, t) {
                                        let s = new SyntaxError(e + " (" + t.start.line + ":" + t.start.column + ")");
                                        return s.loc = t, s
                                    }
                                    c(), t.exports = s
                                }
                            }),
                            J = o({
                                "src/language-js/parse/utils/create-babel-parse-error.js" (e, t) {
                                    c();
                                    var s = W();

                                    function r(e) {
                                        let {
                                            message: t,
                                            loc: r
                                        } = e;
                                        return s(t.replace(/ \(.*\)/, ""), {
                                            start: {
                                                line: r ? r.line : 0,
                                                column: r ? r.column + 1 : 0
                                            }
                                        })
                                    }
                                    t.exports = r
                                }
                            }),
                            X = o({
                                "src/language-js/utils/is-ts-keyword-type.js" (e, t) {
                                    function s(e) {
                                        let {
                                            type: t
                                        } = e;
                                        return t.startsWith("TS") && t.endsWith("Keyword")
                                    }
                                    c(), t.exports = s
                                }
                            }),
                            G = o({
                                "src/language-js/utils/is-block-comment.js" (e, t) {
                                    c();
                                    var s = new Set(["Block", "CommentBlock", "MultiLine"]),
                                        r = e => s.has(null == e ? void 0 : e.type);
                                    t.exports = r
                                }
                            }),
                            Y = o({
                                "src/language-js/utils/is-type-cast-comment.js" (e, t) {
                                    c();
                                    var s = G();

                                    function r(e) {
                                        return s(e) && "*" === e.value[0] && /@(?:type|satisfies)\b/.test(e.value)
                                    }
                                    t.exports = r
                                }
                            }),
                            Q = o({
                                "src/utils/get-last.js" (e, t) {
                                    c();
                                    var s = e => e[e.length - 1];
                                    t.exports = s
                                }
                            }),
                            Z = o({
                                "src/language-js/parse/postprocess/visit-node.js" (e, t) {
                                    function s(e, t) {
                                        if (Array.isArray(e)) {
                                            for (let r = 0; r < e.length; r++) e[r] = s(e[r], t);
                                            return e
                                        }
                                        if (e && "object" == typeof e && "string" == typeof e.type) {
                                            let r = Object.keys(e);
                                            for (let i = 0; i < r.length; i++) e[r[i]] = s(e[r[i]], t);
                                            return t(e) || e
                                        }
                                        return e
                                    }
                                    c(), t.exports = s
                                }
                            }),
                            ee = o({
                                "src/language-js/parse/postprocess/throw-syntax-error.js" (e, t) {
                                    c();
                                    var s = W();

                                    function r(e, t) {
                                        let {
                                            start: r,
                                            end: i
                                        } = e.loc;
                                        throw s(t, {
                                            start: {
                                                line: r.line,
                                                column: r.column + 1
                                            },
                                            end: {
                                                line: i.line,
                                                column: i.column + 1
                                            }
                                        })
                                    }
                                    t.exports = r
                                }
                            }),
                            te = o({
                                "src/language-js/parse/postprocess/index.js" (e, t) {
                                    c();
                                    var {
                                        locStart: s,
                                        locEnd: r
                                    } = q(), i = X(), a = Y(), n = Q(), o = Z(), h = ee();

                                    function l(e, t) {
                                        if ("typescript" !== t.parser && "flow" !== t.parser && "acorn" !== t.parser && "espree" !== t.parser && "meriyah" !== t.parser) {
                                            let t = new Set;
                                            e = o(e, (e => {
                                                e.leadingComments && e.leadingComments.some(a) && t.add(s(e))
                                            })), e = o(e, (e => {
                                                if ("ParenthesizedExpression" === e.type) {
                                                    let {
                                                        expression: r
                                                    } = e;
                                                    if ("TypeCastExpression" === r.type) return r.range = e.range, r;
                                                    let i = s(e);
                                                    if (!t.has(i)) return r.extra = Object.assign(Object.assign({}, r.extra), {}, {
                                                        parenthesized: !0
                                                    }), r
                                                }
                                            }))
                                        }
                                        return e = o(e, (e => {
                                            switch (e.type) {
                                                case "ChainExpression":
                                                    return p(e.expression);
                                                case "LogicalExpression":
                                                    if (u(e)) return d(e);
                                                    break;
                                                case "VariableDeclaration":
                                                    {
                                                        let t = n(e.declarations);t && t.init && l(e, t);
                                                        break
                                                    }
                                                case "TSParenthesizedType":
                                                    return i(e.typeAnnotation) || "TSThisType" === e.typeAnnotation.type || (e.typeAnnotation.range = [s(e), r(e)]), e.typeAnnotation;
                                                case "TSTypeParameter":
                                                    if ("string" == typeof e.name) {
                                                        let t = s(e);
                                                        e.name = {
                                                            type: "Identifier",
                                                            name: e.name,
                                                            range: [t, t + e.name.length]
                                                        }
                                                    }
                                                    break;
                                                case "ObjectExpression":
                                                    if ("typescript" === t.parser) {
                                                        let t = e.properties.find((e => "Property" === e.type && "TSEmptyBodyFunctionExpression" === e.value.type));
                                                        t && h(t.value, "Unexpected token.")
                                                    }
                                                    break;
                                                case "SequenceExpression":
                                                    {
                                                        let t = n(e.expressions);e.range = [s(e), Math.min(r(t), r(e))];
                                                        break
                                                    }
                                                case "TopicReference":
                                                    t.__isUsingHackPipeline = !0;
                                                    break;
                                                case "ExportAllDeclaration":
                                                    {
                                                        let {
                                                            exported: i
                                                        } = e;
                                                        if ("meriyah" === t.parser && i && "Identifier" === i.type) {
                                                            let a = t.originalText.slice(s(i), r(i));
                                                            (a.startsWith('"') || a.startsWith("'")) && (e.exported = Object.assign(Object.assign({}, e.exported), {}, {
                                                                type: "Literal",
                                                                value: e.exported.name,
                                                                raw: a
                                                            }))
                                                        }
                                                        break
                                                    }
                                                case "PropertyDefinition":
                                                    if ("meriyah" === t.parser && e.static && !e.computed && !e.key) {
                                                        let t = "static",
                                                            r = s(e);
                                                        Object.assign(e, {
                                                            static: !1,
                                                            key: {
                                                                type: "Identifier",
                                                                name: t,
                                                                range: [r, r + t.length]
                                                            }
                                                        })
                                                    }
                                            }
                                        }));

                                        function l(e, i) {
                                            ";" !== t.originalText[r(i)] && (e.range = [s(e), r(i)])
                                        }
                                    }

                                    function p(e) {
                                        switch (e.type) {
                                            case "CallExpression":
                                                e.type = "OptionalCallExpression", e.callee = p(e.callee);
                                                break;
                                            case "MemberExpression":
                                                e.type = "OptionalMemberExpression", e.object = p(e.object);
                                                break;
                                            case "TSNonNullExpression":
                                                e.expression = p(e.expression)
                                        }
                                        return e
                                    }

                                    function u(e) {
                                        return "LogicalExpression" === e.type && "LogicalExpression" === e.right.type && e.operator === e.right.operator
                                    }

                                    function d(e) {
                                        return u(e) ? d({
                                            type: "LogicalExpression",
                                            operator: e.operator,
                                            left: d({
                                                type: "LogicalExpression",
                                                operator: e.operator,
                                                left: e.left,
                                                right: e.right.left,
                                                range: [s(e.left), r(e.right.left)]
                                            }),
                                            right: e.right.right,
                                            range: [s(e), r(e)]
                                        }) : e
                                    }
                                    t.exports = l
                                }
                            }),
                            se = o({
                                "node_modules/@babel/parser/lib/index.js" (e) {
                                    c(), Object.defineProperty(e, "__esModule", {
                                        value: !0
                                    });
                                    var t = {
                                        sourceType: "script",
                                        sourceFilename: void 0,
                                        startColumn: 0,
                                        startLine: 1,
                                        allowAwaitOutsideFunction: !1,
                                        allowReturnOutsideFunction: !1,
                                        allowNewTargetOutsideFunction: !1,
                                        allowImportExportEverywhere: !1,
                                        allowSuperOutsideMethod: !1,
                                        allowUndeclaredExports: !1,
                                        plugins: [],
                                        strictMode: null,
                                        ranges: !1,
                                        tokens: !1,
                                        createParenthesizedExpressions: !1,
                                        errorRecovery: !1,
                                        attachComment: !0,
                                        annexB: !0
                                    };

                                    function s(e) {
                                        if (e && null != e.annexB && !1 !== e.annexB) throw new Error("The `annexB` option can only be set to `false`.");
                                        let s = {};
                                        for (let r of Object.keys(t)) s[r] = e && null != e[r] ? e[r] : t[r];
                                        return s
                                    }
                                    var r = class {
                                            constructor(e, t) {
                                                this.token = void 0, this.preserveSpace = void 0, this.token = e, this.preserveSpace = !!t
                                            }
                                        },
                                        i = {
                                            brace: new r("{"),
                                            j_oTag: new r("<tag"),
                                            j_cTag: new r("</tag"),
                                            j_expr: new r("<tag>...</tag>", !0)
                                        };
                                    i.template = new r("`", !0);
                                    var a = !0,
                                        n = !0,
                                        o = !0,
                                        h = !0,
                                        l = !0,
                                        p = !0,
                                        u = class {
                                            constructor(e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.rightAssociative = !!t.rightAssociative, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = null != t.binop ? t.binop : null, this.updateContext = null
                                            }
                                        },
                                        d = new Map;

                                    function m(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        t.keyword = e;
                                        let s = E(e, t);
                                        return d.set(e, s), s
                                    }

                                    function f(e, t) {
                                        return E(e, {
                                            beforeExpr: a,
                                            binop: t
                                        })
                                    }
                                    var y = -1,
                                        x = [],
                                        g = [],
                                        P = [],
                                        b = [],
                                        T = [],
                                        A = [];

                                    function E(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        var s, r, i, a;
                                        return ++y, g.push(e), P.push(null != (s = t.binop) ? s : -1), b.push(null != (r = t.beforeExpr) && r), T.push(null != (i = t.startsExpr) && i), A.push(null != (a = t.prefix) && a), x.push(new u(e, t)), y
                                    }

                                    function w(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        var s, r, i, a;
                                        return ++y, d.set(e, y), g.push(e), P.push(null != (s = t.binop) ? s : -1), b.push(null != (r = t.beforeExpr) && r), T.push(null != (i = t.startsExpr) && i), A.push(null != (a = t.prefix) && a), x.push(new u("name", t)), y
                                    }
                                    var S = {
                                        bracketL: E("[", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        bracketHashL: E("#[", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        bracketBarL: E("[|", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        bracketR: E("]"),
                                        bracketBarR: E("|]"),
                                        braceL: E("{", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        braceBarL: E("{|", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        braceHashL: E("#{", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        braceR: E("}"),
                                        braceBarR: E("|}"),
                                        parenL: E("(", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        parenR: E(")"),
                                        comma: E(",", {
                                            beforeExpr: a
                                        }),
                                        semi: E(";", {
                                            beforeExpr: a
                                        }),
                                        colon: E(":", {
                                            beforeExpr: a
                                        }),
                                        doubleColon: E("::", {
                                            beforeExpr: a
                                        }),
                                        dot: E("."),
                                        question: E("?", {
                                            beforeExpr: a
                                        }),
                                        questionDot: E("?."),
                                        arrow: E("=>", {
                                            beforeExpr: a
                                        }),
                                        template: E("template"),
                                        ellipsis: E("...", {
                                            beforeExpr: a
                                        }),
                                        backQuote: E("`", {
                                            startsExpr: n
                                        }),
                                        dollarBraceL: E("${", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        templateTail: E("...`", {
                                            startsExpr: n
                                        }),
                                        templateNonTail: E("...${", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        at: E("@"),
                                        hash: E("#", {
                                            startsExpr: n
                                        }),
                                        interpreterDirective: E("#!..."),
                                        eq: E("=", {
                                            beforeExpr: a,
                                            isAssign: h
                                        }),
                                        assign: E("_=", {
                                            beforeExpr: a,
                                            isAssign: h
                                        }),
                                        slashAssign: E("_=", {
                                            beforeExpr: a,
                                            isAssign: h
                                        }),
                                        xorAssign: E("_=", {
                                            beforeExpr: a,
                                            isAssign: h
                                        }),
                                        moduloAssign: E("_=", {
                                            beforeExpr: a,
                                            isAssign: h
                                        }),
                                        incDec: E("++/--", {
                                            prefix: l,
                                            postfix: p,
                                            startsExpr: n
                                        }),
                                        bang: E("!", {
                                            beforeExpr: a,
                                            prefix: l,
                                            startsExpr: n
                                        }),
                                        tilde: E("~", {
                                            beforeExpr: a,
                                            prefix: l,
                                            startsExpr: n
                                        }),
                                        doubleCaret: E("^^", {
                                            startsExpr: n
                                        }),
                                        doubleAt: E("@@", {
                                            startsExpr: n
                                        }),
                                        pipeline: f("|>", 0),
                                        nullishCoalescing: f("??", 1),
                                        logicalOR: f("||", 1),
                                        logicalAND: f("&&", 2),
                                        bitwiseOR: f("|", 3),
                                        bitwiseXOR: f("^", 4),
                                        bitwiseAND: f("&", 5),
                                        equality: f("==/!=/===/!==", 6),
                                        lt: f("</>/<=/>=", 7),
                                        gt: f("</>/<=/>=", 7),
                                        relational: f("</>/<=/>=", 7),
                                        bitShift: f("<</>>/>>>", 8),
                                        bitShiftL: f("<</>>/>>>", 8),
                                        bitShiftR: f("<</>>/>>>", 8),
                                        plusMin: E("+/-", {
                                            beforeExpr: a,
                                            binop: 9,
                                            prefix: l,
                                            startsExpr: n
                                        }),
                                        modulo: E("%", {
                                            binop: 10,
                                            startsExpr: n
                                        }),
                                        star: E("*", {
                                            binop: 10
                                        }),
                                        slash: f("/", 10),
                                        exponent: E("**", {
                                            beforeExpr: a,
                                            binop: 11,
                                            rightAssociative: !0
                                        }),
                                        _in: m("in", {
                                            beforeExpr: a,
                                            binop: 7
                                        }),
                                        _instanceof: m("instanceof", {
                                            beforeExpr: a,
                                            binop: 7
                                        }),
                                        _break: m("break"),
                                        _case: m("case", {
                                            beforeExpr: a
                                        }),
                                        _catch: m("catch"),
                                        _continue: m("continue"),
                                        _debugger: m("debugger"),
                                        _default: m("default", {
                                            beforeExpr: a
                                        }),
                                        _else: m("else", {
                                            beforeExpr: a
                                        }),
                                        _finally: m("finally"),
                                        _function: m("function", {
                                            startsExpr: n
                                        }),
                                        _if: m("if"),
                                        _return: m("return", {
                                            beforeExpr: a
                                        }),
                                        _switch: m("switch"),
                                        _throw: m("throw", {
                                            beforeExpr: a,
                                            prefix: l,
                                            startsExpr: n
                                        }),
                                        _try: m("try"),
                                        _var: m("var"),
                                        _const: m("const"),
                                        _with: m("with"),
                                        _new: m("new", {
                                            beforeExpr: a,
                                            startsExpr: n
                                        }),
                                        _this: m("this", {
                                            startsExpr: n
                                        }),
                                        _super: m("super", {
                                            startsExpr: n
                                        }),
                                        _class: m("class", {
                                            startsExpr: n
                                        }),
                                        _extends: m("extends", {
                                            beforeExpr: a
                                        }),
                                        _export: m("export"),
                                        _import: m("import", {
                                            startsExpr: n
                                        }),
                                        _null: m("null", {
                                            startsExpr: n
                                        }),
                                        _true: m("true", {
                                            startsExpr: n
                                        }),
                                        _false: m("false", {
                                            startsExpr: n
                                        }),
                                        _typeof: m("typeof", {
                                            beforeExpr: a,
                                            prefix: l,
                                            startsExpr: n
                                        }),
                                        _void: m("void", {
                                            beforeExpr: a,
                                            prefix: l,
                                            startsExpr: n
                                        }),
                                        _delete: m("delete", {
                                            beforeExpr: a,
                                            prefix: l,
                                            startsExpr: n
                                        }),
                                        _do: m("do", {
                                            isLoop: o,
                                            beforeExpr: a
                                        }),
                                        _for: m("for", {
                                            isLoop: o
                                        }),
                                        _while: m("while", {
                                            isLoop: o
                                        }),
                                        _as: w("as", {
                                            startsExpr: n
                                        }),
                                        _assert: w("assert", {
                                            startsExpr: n
                                        }),
                                        _async: w("async", {
                                            startsExpr: n
                                        }),
                                        _await: w("await", {
                                            startsExpr: n
                                        }),
                                        _from: w("from", {
                                            startsExpr: n
                                        }),
                                        _get: w("get", {
                                            startsExpr: n
                                        }),
                                        _let: w("let", {
                                            startsExpr: n
                                        }),
                                        _meta: w("meta", {
                                            startsExpr: n
                                        }),
                                        _of: w("of", {
                                            startsExpr: n
                                        }),
                                        _sent: w("sent", {
                                            startsExpr: n
                                        }),
                                        _set: w("set", {
                                            startsExpr: n
                                        }),
                                        _static: w("static", {
                                            startsExpr: n
                                        }),
                                        _using: w("using", {
                                            startsExpr: n
                                        }),
                                        _yield: w("yield", {
                                            startsExpr: n
                                        }),
                                        _asserts: w("asserts", {
                                            startsExpr: n
                                        }),
                                        _checks: w("checks", {
                                            startsExpr: n
                                        }),
                                        _exports: w("exports", {
                                            startsExpr: n
                                        }),
                                        _global: w("global", {
                                            startsExpr: n
                                        }),
                                        _implements: w("implements", {
                                            startsExpr: n
                                        }),
                                        _intrinsic: w("intrinsic", {
                                            startsExpr: n
                                        }),
                                        _infer: w("infer", {
                                            startsExpr: n
                                        }),
                                        _is: w("is", {
                                            startsExpr: n
                                        }),
                                        _mixins: w("mixins", {
                                            startsExpr: n
                                        }),
                                        _proto: w("proto", {
                                            startsExpr: n
                                        }),
                                        _require: w("require", {
                                            startsExpr: n
                                        }),
                                        _satisfies: w("satisfies", {
                                            startsExpr: n
                                        }),
                                        _keyof: w("keyof", {
                                            startsExpr: n
                                        }),
                                        _readonly: w("readonly", {
                                            startsExpr: n
                                        }),
                                        _unique: w("unique", {
                                            startsExpr: n
                                        }),
                                        _abstract: w("abstract", {
                                            startsExpr: n
                                        }),
                                        _declare: w("declare", {
                                            startsExpr: n
                                        }),
                                        _enum: w("enum", {
                                            startsExpr: n
                                        }),
                                        _module: w("module", {
                                            startsExpr: n
                                        }),
                                        _namespace: w("namespace", {
                                            startsExpr: n
                                        }),
                                        _interface: w("interface", {
                                            startsExpr: n
                                        }),
                                        _type: w("type", {
                                            startsExpr: n
                                        }),
                                        _opaque: w("opaque", {
                                            startsExpr: n
                                        }),
                                        name: E("name", {
                                            startsExpr: n
                                        }),
                                        string: E("string", {
                                            startsExpr: n
                                        }),
                                        num: E("num", {
                                            startsExpr: n
                                        }),
                                        bigint: E("bigint", {
                                            startsExpr: n
                                        }),
                                        decimal: E("decimal", {
                                            startsExpr: n
                                        }),
                                        regexp: E("regexp", {
                                            startsExpr: n
                                        }),
                                        privateName: E("#name", {
                                            startsExpr: n
                                        }),
                                        eof: E("eof"),
                                        jsxName: E("jsxName"),
                                        jsxText: E("jsxText", {
                                            beforeExpr: !0
                                        }),
                                        jsxTagStart: E("jsxTagStart", {
                                            startsExpr: !0
                                        }),
                                        jsxTagEnd: E("jsxTagEnd"),
                                        placeholder: E("%%", {
                                            startsExpr: !0
                                        })
                                    };

                                    function v(e) {
                                        return e >= 93 && e <= 130
                                    }

                                    function C(e) {
                                        return e <= 92
                                    }

                                    function N(e) {
                                        return e >= 58 && e <= 130
                                    }

                                    function I(e) {
                                        return e >= 58 && e <= 134
                                    }

                                    function k(e) {
                                        return b[e]
                                    }

                                    function L(e) {
                                        return T[e]
                                    }

                                    function M(e) {
                                        return e >= 29 && e <= 33
                                    }

                                    function O(e) {
                                        return e >= 127 && e <= 129
                                    }

                                    function D(e) {
                                        return e >= 90 && e <= 92
                                    }

                                    function F(e) {
                                        return e >= 58 && e <= 92
                                    }

                                    function B(e) {
                                        return e >= 39 && e <= 59
                                    }

                                    function j(e) {
                                        return 34 === e
                                    }

                                    function R(e) {
                                        return A[e]
                                    }

                                    function U(e) {
                                        return e >= 119 && e <= 121
                                    }

                                    function _(e) {
                                        return e >= 122 && e <= 128
                                    }

                                    function z(e) {
                                        return g[e]
                                    }

                                    function H(e) {
                                        return P[e]
                                    }

                                    function $(e) {
                                        return 57 === e
                                    }

                                    function V(e) {
                                        return e >= 24 && e <= 25
                                    }

                                    function q(e) {
                                        return x[e]
                                    }

                                    function K(e, t) {
                                        if (null == e) return {};
                                        var s, r, i = {},
                                            a = Object.keys(e);
                                        for (r = 0; r < a.length; r++) s = a[r], !(t.indexOf(s) >= 0) && (i[s] = e[s]);
                                        return i
                                    }
                                    x[8].updateContext = e => {
                                        e.pop()
                                    }, x[5].updateContext = x[7].updateContext = x[23].updateContext = e => {
                                        e.push(i.brace)
                                    }, x[22].updateContext = e => {
                                        e[e.length - 1] === i.template ? e.pop() : e.push(i.template)
                                    }, x[140].updateContext = e => {
                                        e.push(i.j_expr, i.j_oTag)
                                    };
                                    var W = class {
                                            constructor(e, t, s) {
                                                this.line = void 0, this.column = void 0, this.index = void 0, this.line = e, this.column = t, this.index = s
                                            }
                                        },
                                        J = class {
                                            constructor(e, t) {
                                                this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = e, this.end = t
                                            }
                                        };

                                    function X(e, t) {
                                        let {
                                            line: s,
                                            column: r,
                                            index: i
                                        } = e;
                                        return new W(s, r + t, i + t)
                                    }
                                    var G = {
                                            SyntaxError: "BABEL_PARSER_SYNTAX_ERROR",
                                            SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
                                        },
                                        Y = function(e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.length - 1;
                                            return {
                                                get() {
                                                    return e.reduce(((e, t) => e[t]), this)
                                                },
                                                set(s) {
                                                    e.reduce(((e, r, i) => i === t ? e[r] = s : e[r]), this)
                                                }
                                            }
                                        },
                                        Q = (e, t, s) => Object.keys(s).map((e => [e, s[e]])).filter((e => {
                                            let [, t] = e;
                                            return !!t
                                        })).map((e => {
                                            let [t, s] = e;
                                            return [t, "function" == typeof s ? {
                                                value: s,
                                                enumerable: !1
                                            } : "string" == typeof s.reflect ? Object.assign({}, s, Y(s.reflect.split("."))) : s]
                                        })).reduce(((e, t) => {
                                            let [s, r] = t;
                                            return Object.defineProperty(e, s, Object.assign({
                                                configurable: !0
                                            }, r))
                                        }), Object.assign(new e, t)),
                                        Z = {
                                            ImportMetaOutsideModule: {
                                                message: "import.meta may appear only with 'sourceType: \"module\"'",
                                                code: G.SourceTypeModuleError
                                            },
                                            ImportOutsideModule: {
                                                message: "'import' and 'export' may appear only with 'sourceType: \"module\"'",
                                                code: G.SourceTypeModuleError
                                            }
                                        },
                                        ee = {
                                            ArrayPattern: "array destructuring pattern",
                                            AssignmentExpression: "assignment expression",
                                            AssignmentPattern: "assignment expression",
                                            ArrowFunctionExpression: "arrow function expression",
                                            ConditionalExpression: "conditional expression",
                                            CatchClause: "catch clause",
                                            ForOfStatement: "for-of statement",
                                            ForInStatement: "for-in statement",
                                            ForStatement: "for-loop",
                                            FormalParameters: "function parameter list",
                                            Identifier: "identifier",
                                            ImportSpecifier: "import specifier",
                                            ImportDefaultSpecifier: "import default specifier",
                                            ImportNamespaceSpecifier: "import namespace specifier",
                                            ObjectPattern: "object destructuring pattern",
                                            ParenthesizedExpression: "parenthesized expression",
                                            RestElement: "rest element",
                                            UpdateExpression: {
                                                true: "prefix operation",
                                                false: "postfix operation"
                                            },
                                            VariableDeclarator: "variable declaration",
                                            YieldExpression: "yield expression"
                                        },
                                        te = e => {
                                            let {
                                                type: t,
                                                prefix: s
                                            } = e;
                                            return "UpdateExpression" === t ? ee.UpdateExpression[String(s)] : ee[t]
                                        },
                                        se = {
                                            AccessorIsGenerator: e => {
                                                let {
                                                    kind: t
                                                } = e;
                                                return `A ${t}ter cannot be a generator.`
                                            },
                                            ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
                                            AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
                                            AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
                                            AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
                                            AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
                                            AwaitInUsingBinding: "'await' is not allowed to be used as a name in 'using' declarations.",
                                            AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
                                            AwaitNotInAsyncFunction: "'await' is only allowed within async functions.",
                                            BadGetterArity: "A 'get' accessor must not have any formal parameters.",
                                            BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
                                            BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
                                            ConstructorClassField: "Classes may not have a field named 'constructor'.",
                                            ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
                                            ConstructorIsAccessor: "Class constructor may not be an accessor.",
                                            ConstructorIsAsync: "Constructor can't be an async function.",
                                            ConstructorIsGenerator: "Constructor can't be a generator.",
                                            DeclarationMissingInitializer: e => {
                                                let {
                                                    kind: t
                                                } = e;
                                                return `Missing initializer in ${t} declaration.`
                                            },
                                            DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
                                            DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
                                            DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
                                            DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
                                            DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
                                            DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
                                            DecoratorStaticBlock: "Decorators can't be used with a static block.",
                                            DeletePrivateField: "Deleting a private field is not allowed.",
                                            DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
                                            DuplicateConstructor: "Duplicate constructor in the same class.",
                                            DuplicateDefaultExport: "Only one default export allowed per module.",
                                            DuplicateExport: e => {
                                                let {
                                                    exportName: t
                                                } = e;
                                                return `\`${t}\` has already been exported. Exported identifiers must be unique.`
                                            },
                                            DuplicateProto: "Redefinition of __proto__ property.",
                                            DuplicateRegExpFlags: "Duplicate regular expression flag.",
                                            ElementAfterRest: "Rest element must be last element.",
                                            EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
                                            ExportBindingIsString: e => {
                                                let {
                                                    localName: t,
                                                    exportName: s
                                                } = e;
                                                return `A string literal cannot be used as an exported binding without \`from\`.\n- Did you mean \`export { '${t}' as '${s}' } from 'some-module'\`?`
                                            },
                                            ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
                                            ForInOfLoopInitializer: e => {
                                                let {
                                                    type: t
                                                } = e;
                                                return `'${"ForInStatement"===t?"for-in":"for-of"}' loop variable declaration may not have an initializer.`
                                            },
                                            ForInUsing: "For-in loop may not start with 'using' declaration.",
                                            ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
                                            ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
                                            GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
                                            IllegalBreakContinue: e => {
                                                let {
                                                    type: t
                                                } = e;
                                                return `Unsyntactic ${"BreakStatement"===t?"break":"continue"}.`
                                            },
                                            IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
                                            IllegalReturn: "'return' outside of function.",
                                            ImportBindingIsString: e => {
                                                let {
                                                    importName: t
                                                } = e;
                                                return `A string literal cannot be used as an imported binding.\n- Did you mean \`import { "${t}" as foo }\`?`
                                            },
                                            ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.",
                                            ImportCallArity: e => {
                                                let {
                                                    maxArgumentCount: t
                                                } = e;
                                                return `\`import()\` requires exactly ${1===t?"one argument":"one or two arguments"}.`
                                            },
                                            ImportCallNotNewExpression: "Cannot use new with import(...).",
                                            ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
                                            ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
                                            ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
                                            ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
                                            IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
                                            InvalidBigIntLiteral: "Invalid BigIntLiteral.",
                                            InvalidCodePoint: "Code point out of bounds.",
                                            InvalidCoverInitializedName: "Invalid shorthand property initializer.",
                                            InvalidDecimal: "Invalid decimal.",
                                            InvalidDigit: e => {
                                                let {
                                                    radix: t
                                                } = e;
                                                return `Expected number in radix ${t}.`
                                            },
                                            InvalidEscapeSequence: "Bad character escape sequence.",
                                            InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
                                            InvalidEscapedReservedWord: e => {
                                                let {
                                                    reservedWord: t
                                                } = e;
                                                return `Escape sequence in keyword ${t}.`
                                            },
                                            InvalidIdentifier: e => {
                                                let {
                                                    identifierName: t
                                                } = e;
                                                return `Invalid identifier ${t}.`
                                            },
                                            InvalidLhs: e => {
                                                let {
                                                    ancestor: t
                                                } = e;
                                                return `Invalid left-hand side in ${te(t)}.`
                                            },
                                            InvalidLhsBinding: e => {
                                                let {
                                                    ancestor: t
                                                } = e;
                                                return `Binding invalid left-hand side in ${te(t)}.`
                                            },
                                            InvalidNumber: "Invalid number.",
                                            InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
                                            InvalidOrUnexpectedToken: e => {
                                                let {
                                                    unexpected: t
                                                } = e;
                                                return `Unexpected character '${t}'.`
                                            },
                                            InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
                                            InvalidPrivateFieldResolution: e => {
                                                let {
                                                    identifierName: t
                                                } = e;
                                                return `Private name #${t} is not defined.`
                                            },
                                            InvalidPropertyBindingPattern: "Binding member expression.",
                                            InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
                                            InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
                                            LabelRedeclaration: e => {
                                                let {
                                                    labelName: t
                                                } = e;
                                                return `Label '${t}' is already declared.`
                                            },
                                            LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
                                            LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
                                            MalformedRegExpFlags: "Invalid regular expression flag.",
                                            MissingClassName: "A class name is required.",
                                            MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
                                            MissingSemicolon: "Missing semicolon.",
                                            MissingPlugin: e => {
                                                let {
                                                    missingPlugin: t
                                                } = e;
                                                return `This experimental syntax requires enabling the parser plugin: ${t.map((e=>JSON.stringify(e))).join(", ")}.`
                                            },
                                            MissingOneOfPlugins: e => {
                                                let {
                                                    missingPlugin: t
                                                } = e;
                                                return `This experimental syntax requires enabling one of the following parser plugin(s): ${t.map((e=>JSON.stringify(e))).join(", ")}.`
                                            },
                                            MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
                                            MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
                                            ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
                                            ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
                                            ModuleAttributesWithDuplicateKeys: e => {
                                                let {
                                                    key: t
                                                } = e;
                                                return `Duplicate key "${t}" is not allowed in module attributes.`
                                            },
                                            ModuleExportNameHasLoneSurrogate: e => {
                                                let {
                                                    surrogateCharCode: t
                                                } = e;
                                                return `An export name cannot include a lone surrogate, found '\\u${t.toString(16)}'.`
                                            },
                                            ModuleExportUndefined: e => {
                                                let {
                                                    localName: t
                                                } = e;
                                                return `Export '${t}' is not defined.`
                                            },
                                            MultipleDefaultsInSwitch: "Multiple default clauses.",
                                            NewlineAfterThrow: "Illegal newline after throw.",
                                            NoCatchOrFinally: "Missing catch or finally clause.",
                                            NumberIdentifier: "Identifier directly after number.",
                                            NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
                                            ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
                                            OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
                                            OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
                                            OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
                                            ParamDupe: "Argument name clash.",
                                            PatternHasAccessor: "Object pattern can't contain getter or setter.",
                                            PatternHasMethod: "Object pattern can't contain methods.",
                                            PrivateInExpectedIn: e => {
                                                let {
                                                    identifierName: t
                                                } = e;
                                                return `Private names are only allowed in property accesses (\`obj.#${t}\`) or in \`in\` expressions (\`#${t} in obj\`).`
                                            },
                                            PrivateNameRedeclaration: e => {
                                                let {
                                                    identifierName: t
                                                } = e;
                                                return `Duplicate private name #${t}.`
                                            },
                                            RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                                            RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                                            RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
                                            RecordNoProto: "'__proto__' is not allowed in Record expressions.",
                                            RestTrailingComma: "Unexpected trailing comma after rest element.",
                                            SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
                                            SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
                                            StaticPrototype: "Classes may not have static property named prototype.",
                                            SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
                                            SuperPrivateField: "Private fields can't be accessed on super.",
                                            TrailingDecorator: "Decorators must be attached to a class element.",
                                            TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                                            TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
                                            TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
                                            UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
                                            UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
                                            UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
                                            UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
                                            UnexpectedKeyword: e => {
                                                let {
                                                    keyword: t
                                                } = e;
                                                return `Unexpected keyword '${t}'.`
                                            },
                                            UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
                                            UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
                                            UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
                                            UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
                                            UnexpectedPrivateField: "Unexpected private name.",
                                            UnexpectedReservedWord: e => {
                                                let {
                                                    reservedWord: t
                                                } = e;
                                                return `Unexpected reserved word '${t}'.`
                                            },
                                            UnexpectedSuper: "'super' is only allowed in object methods and classes.",
                                            UnexpectedToken: e => {
                                                let {
                                                    expected: t,
                                                    unexpected: s
                                                } = e;
                                                return `Unexpected token${s?` '${s}'.`:""}${t?`, expected "${t}"`:""}`
                                            },
                                            UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
                                            UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.",
                                            UnsupportedBind: "Binding should be performed on object property.",
                                            UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
                                            UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
                                            UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
                                            UnsupportedMetaProperty: e => {
                                                let {
                                                    target: t,
                                                    onlyValidPropertyName: s
                                                } = e;
                                                return `The only valid meta property for ${t} is ${t}.${s}.`
                                            },
                                            UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
                                            UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
                                            UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
                                            UnterminatedComment: "Unterminated comment.",
                                            UnterminatedRegExp: "Unterminated regular expression.",
                                            UnterminatedString: "Unterminated string constant.",
                                            UnterminatedTemplate: "Unterminated template.",
                                            UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
                                            VarRedeclaration: e => {
                                                let {
                                                    identifierName: t
                                                } = e;
                                                return `Identifier '${t}' has already been declared.`
                                            },
                                            YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
                                            YieldInParameter: "Yield expression is not allowed in formal parameters.",
                                            ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
                                        },
                                        re = {
                                            StrictDelete: "Deleting local variable in strict mode.",
                                            StrictEvalArguments: e => {
                                                let {
                                                    referenceName: t
                                                } = e;
                                                return `Assigning to '${t}' in strict mode.`
                                            },
                                            StrictEvalArgumentsBinding: e => {
                                                let {
                                                    bindingName: t
                                                } = e;
                                                return `Binding '${t}' in strict mode.`
                                            },
                                            StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
                                            StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
                                            StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
                                            StrictWith: "'with' in strict mode."
                                        },
                                        ie = new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]),
                                        ae = {
                                            PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
                                            PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
                                            PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
                                            PipeTopicUnconfiguredToken: e => {
                                                let {
                                                    token: t
                                                } = e;
                                                return `Invalid topic token ${t}. In order to use ${t} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${t}" }.`
                                            },
                                            PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
                                            PipeUnparenthesizedBody: e => {
                                                let {
                                                    type: t
                                                } = e;
                                                return `Hack-style pipe body cannot be an unparenthesized ${te({type:t})}; please wrap it in parentheses.`
                                            },
                                            PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
                                            PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
                                            PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
                                            PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
                                            PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
                                            PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
                                        },
                                        ne = ["toMessage"],
                                        oe = ["message"];

                                    function he(e) {
                                        let {
                                            toMessage: t
                                        } = e, s = K(e, ne);
                                        return function e(r) {
                                            let {
                                                loc: i,
                                                details: a
                                            } = r;
                                            return Q(SyntaxError, Object.assign({}, s, {
                                                loc: i
                                            }), {
                                                clone() {
                                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                        s = t.loc || {};
                                                    return e({
                                                        loc: new W("line" in s ? s.line : this.loc.line, "column" in s ? s.column : this.loc.column, "index" in s ? s.index : this.loc.index),
                                                        details: Object.assign({}, this.details, t.details)
                                                    })
                                                },
                                                details: {
                                                    value: a,
                                                    enumerable: !1
                                                },
                                                message: {
                                                    get() {
                                                        return `${t(this.details)} (${this.loc.line}:${this.loc.column})`
                                                    },
                                                    set(e) {
                                                        Object.defineProperty(this, "message", {
                                                            value: e
                                                        })
                                                    }
                                                },
                                                pos: {
                                                    reflect: "loc.index",
                                                    enumerable: !0
                                                },
                                                missingPlugin: "missingPlugin" in a && {
                                                    reflect: "details.missingPlugin",
                                                    enumerable: !0
                                                }
                                            })
                                        }
                                    }

                                    function le(e, t) {
                                        if (Array.isArray(e)) return t => le(t, e[0]);
                                        let s = {};
                                        for (let r of Object.keys(e)) {
                                            let i = e[r],
                                                a = "string" == typeof i ? {
                                                    message: () => i
                                                } : "function" == typeof i ? {
                                                    message: i
                                                } : i,
                                                {
                                                    message: n
                                                } = a,
                                                o = K(a, oe),
                                                h = "string" == typeof n ? () => n : n;
                                            s[r] = he(Object.assign({
                                                code: G.SyntaxError,
                                                reasonCode: r,
                                                toMessage: h
                                            }, t ? {
                                                syntaxPlugin: t
                                            } : {}, o))
                                        }
                                        return s
                                    }
                                    var pe = Object.assign({}, le(Z), le(se), le(re), le `pipelineOperator` (ae)),
                                        {
                                            defineProperty: ce
                                        } = Object,
                                        ue = (e, t) => ce(e, t, {
                                            enumerable: !1,
                                            value: e[t]
                                        });

                                    function de(e) {
                                        return e.loc.start && ue(e.loc.start, "index"), e.loc.end && ue(e.loc.end, "index"), e
                                    }
                                    var me = e => class extends e {
                                            parse() {
                                                let e = de(super.parse());
                                                return this.options.tokens && (e.tokens = e.tokens.map(de)), e
                                            }
                                            parseRegExpLiteral(e) {
                                                let {
                                                    pattern: t,
                                                    flags: s
                                                } = e, r = null;
                                                try {
                                                    r = new RegExp(t, s)
                                                } catch {}
                                                let i = this.estreeParseLiteral(r);
                                                return i.regex = {
                                                    pattern: t,
                                                    flags: s
                                                }, i
                                            }
                                            parseBigIntLiteral(e) {
                                                let t;
                                                try {
                                                    t = BigInt(e)
                                                } catch {
                                                    t = null
                                                }
                                                let s = this.estreeParseLiteral(t);
                                                return s.bigint = String(s.value || e), s
                                            }
                                            parseDecimalLiteral(e) {
                                                let t = this.estreeParseLiteral(null);
                                                return t.decimal = String(t.value || e), t
                                            }
                                            estreeParseLiteral(e) {
                                                return this.parseLiteral(e, "Literal")
                                            }
                                            parseStringLiteral(e) {
                                                return this.estreeParseLiteral(e)
                                            }
                                            parseNumericLiteral(e) {
                                                return this.estreeParseLiteral(e)
                                            }
                                            parseNullLiteral() {
                                                return this.estreeParseLiteral(null)
                                            }
                                            parseBooleanLiteral(e) {
                                                return this.estreeParseLiteral(e)
                                            }
                                            directiveToStmt(e) {
                                                let t = e.value;
                                                delete e.value, t.type = "Literal", t.raw = t.extra.raw, t.value = t.extra.expressionValue;
                                                let s = e;
                                                return s.type = "ExpressionStatement", s.expression = t, s.directive = t.extra.rawValue, delete t.extra, s
                                            }
                                            initFunction(e, t) {
                                                super.initFunction(e, t), e.expression = !1
                                            }
                                            checkDeclaration(e) {
                                                null != e && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e)
                                            }
                                            getObjectOrClassMethodParams(e) {
                                                return e.value.params
                                            }
                                            isValidDirective(e) {
                                                var t;
                                                return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" == typeof e.expression.value && !(null != (t = e.expression.extra) && t.parenthesized)
                                            }
                                            parseBlockBody(e, t, s, r, i) {
                                                super.parseBlockBody(e, t, s, r, i);
                                                let a = e.directives.map((e => this.directiveToStmt(e)));
                                                e.body = a.concat(e.body), delete e.directives
                                            }
                                            pushClassMethod(e, t, s, r, i, a) {
                                                this.parseMethod(t, s, r, i, a, "ClassMethod", !0), t.typeParameters && (t.value.typeParameters = t.typeParameters, delete t.typeParameters), e.body.push(t)
                                            }
                                            parsePrivateName() {
                                                let e = super.parsePrivateName();
                                                return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e
                                            }
                                            convertPrivateNameToPrivateIdentifier(e) {
                                                let t = super.getPrivateNameSV(e);
                                                return delete e.id, e.name = t, e.type = "PrivateIdentifier", e
                                            }
                                            isPrivateName(e) {
                                                return this.getPluginOption("estree", "classFeatures") ? "PrivateIdentifier" === e.type : super.isPrivateName(e)
                                            }
                                            getPrivateNameSV(e) {
                                                return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e)
                                            }
                                            parseLiteral(e, t) {
                                                let s = super.parseLiteral(e, t);
                                                return s.raw = s.extra.raw, delete s.extra, s
                                            }
                                            parseFunctionBody(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                super.parseFunctionBody(e, t, s), e.expression = "BlockStatement" !== e.body.type
                                            }
                                            parseMethod(e, t, s, r, i, a) {
                                                let n = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                                                    o = this.startNode();
                                                return o.kind = e.kind, o = super.parseMethod(o, t, s, r, i, a, n), o.type = "FunctionExpression", delete o.kind, e.value = o, "ClassPrivateMethod" === a && (e.computed = !1), this.finishNode(e, "MethodDefinition")
                                            }
                                            parseClassProperty() {
                                                let e = super.parseClassProperty(...arguments);
                                                return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition"), e
                                            }
                                            parseClassPrivateProperty() {
                                                let e = super.parseClassPrivateProperty(...arguments);
                                                return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition", e.computed = !1), e
                                            }
                                            parseObjectMethod(e, t, s, r, i) {
                                                let a = super.parseObjectMethod(e, t, s, r, i);
                                                return a && (a.type = "Property", "method" === a.kind && (a.kind = "init"), a.shorthand = !1), a
                                            }
                                            parseObjectProperty(e, t, s, r) {
                                                let i = super.parseObjectProperty(e, t, s, r);
                                                return i && (i.kind = "init", i.type = "Property"), i
                                            }
                                            isValidLVal(e, t, s) {
                                                return "Property" === e ? "value" : super.isValidLVal(e, t, s)
                                            }
                                            isAssignable(e, t) {
                                                return null != e && this.isObjectProperty(e) ? this.isAssignable(e.value, t) : super.isAssignable(e, t)
                                            }
                                            toAssignable(e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                                if (null != e && this.isObjectProperty(e)) {
                                                    let {
                                                        key: s,
                                                        value: r
                                                    } = e;
                                                    this.isPrivateName(s) && this.classScope.usePrivateName(this.getPrivateNameSV(s), s.loc.start), this.toAssignable(r, t)
                                                } else super.toAssignable(e, t)
                                            }
                                            toAssignableObjectExpressionProp(e, t, s) {
                                                "get" === e.kind || "set" === e.kind ? this.raise(pe.PatternHasAccessor, {
                                                    at: e.key
                                                }) : e.method ? this.raise(pe.PatternHasMethod, {
                                                    at: e.key
                                                }) : super.toAssignableObjectExpressionProp(e, t, s)
                                            }
                                            finishCallExpression(e, t) {
                                                let s = super.finishCallExpression(e, t);
                                                var r;
                                                "Import" === s.callee.type && (s.type = "ImportExpression", s.source = s.arguments[0], this.hasPlugin("importAssertions") && (s.attributes = null != (r = s.arguments[1]) ? r : null), delete s.arguments, delete s.callee);
                                                return s
                                            }
                                            toReferencedArguments(e) {
                                                "ImportExpression" !== e.type && super.toReferencedArguments(e)
                                            }
                                            parseExport(e, t) {
                                                let s = this.state.lastTokStartLoc,
                                                    r = super.parseExport(e, t);
                                                switch (r.type) {
                                                    case "ExportAllDeclaration":
                                                        r.exported = null;
                                                        break;
                                                    case "ExportNamedDeclaration":
                                                        1 === r.specifiers.length && "ExportNamespaceSpecifier" === r.specifiers[0].type && (r.type = "ExportAllDeclaration", r.exported = r.specifiers[0].exported, delete r.specifiers);
                                                    case "ExportDefaultDeclaration":
                                                        {
                                                            var i;
                                                            let {
                                                                declaration: e
                                                            } = r;
                                                            "ClassDeclaration" === (null == e ? void 0 : e.type) && (null == (i = e.decorators) ? void 0 : i.length) > 0 && e.start === r.start && this.resetStartLocation(r, s)
                                                        }
                                                }
                                                return r
                                            }
                                            parseSubscript(e, t, s, r) {
                                                let i = super.parseSubscript(e, t, s, r);
                                                if (r.optionalChainMember) {
                                                    if (("OptionalMemberExpression" === i.type || "OptionalCallExpression" === i.type) && (i.type = i.type.substring(8)), r.stop) {
                                                        let e = this.startNodeAtNode(i);
                                                        return e.expression = i, this.finishNode(e, "ChainExpression")
                                                    }
                                                } else("MemberExpression" === i.type || "CallExpression" === i.type) && (i.optional = !1);
                                                return i
                                            }
                                            hasPropertyAsPrivateName(e) {
                                                return "ChainExpression" === e.type && (e = e.expression), super.hasPropertyAsPrivateName(e)
                                            }
                                            isObjectProperty(e) {
                                                return "Property" === e.type && "init" === e.kind && !e.method
                                            }
                                            isObjectMethod(e) {
                                                return e.method || "get" === e.kind || "set" === e.kind
                                            }
                                            finishNodeAt(e, t, s) {
                                                return de(super.finishNodeAt(e, t, s))
                                            }
                                            resetStartLocation(e, t) {
                                                super.resetStartLocation(e, t), de(e)
                                            }
                                            resetEndLocation(e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.lastTokEndLoc;
                                                super.resetEndLocation(e, t), de(e)
                                            }
                                        },
                                        fe = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
                                        ye = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f",
                                        xe = new RegExp("[" + fe + "]"),
                                        ge = new RegExp("[" + fe + ye + "]");
                                    fe = ye = null;
                                    var Pe = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191],
                                        be = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

                                    function Te(e, t) {
                                        let s = 65536;
                                        for (let r = 0, i = t.length; r < i; r += 2) {
                                            if (s += t[r], s > e) return !1;
                                            if (s += t[r + 1], s >= e) return !0
                                        }
                                        return !1
                                    }

                                    function Ae(e) {
                                        return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && xe.test(String.fromCharCode(e)) : Te(e, Pe)))
                                    }

                                    function Ee(e) {
                                        return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && ge.test(String.fromCharCode(e)) : Te(e, Pe) || Te(e, be))))
                                    }
                                    var we = {
                                            keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
                                            strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
                                            strictBind: ["eval", "arguments"]
                                        },
                                        Se = new Set(we.keyword),
                                        ve = new Set(we.strict),
                                        Ce = new Set(we.strictBind);

                                    function Ne(e, t) {
                                        return t && "await" === e || "enum" === e
                                    }

                                    function Ie(e, t) {
                                        return Ne(e, t) || ve.has(e)
                                    }

                                    function ke(e) {
                                        return Ce.has(e)
                                    }

                                    function Le(e, t) {
                                        return Ie(e, t) || ke(e)
                                    }

                                    function Me(e) {
                                        return Se.has(e)
                                    }

                                    function Oe(e, t, s) {
                                        return 64 === e && 64 === t && Ae(s)
                                    }
                                    var De = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);

                                    function Fe(e) {
                                        return De.has(e)
                                    }
                                    var Be = 0,
                                        je = 1,
                                        Re = 2,
                                        Ue = 4,
                                        _e = 8,
                                        ze = 16,
                                        He = 32,
                                        $e = 64,
                                        Ve = 128,
                                        qe = 256,
                                        Ke = je | Re | Ve | qe,
                                        We = 1,
                                        Je = 2,
                                        Xe = 4,
                                        Ge = 8,
                                        Ye = 16,
                                        Qe = 64,
                                        Ze = 128,
                                        et = 256,
                                        tt = 512,
                                        st = 1024,
                                        rt = 2048,
                                        it = 4096,
                                        at = 8192,
                                        nt = We | Je | Ge | Ze | at,
                                        ot = 0 | We | Ge | at,
                                        ht = 0 | We | Ge | 0,
                                        lt = 0 | We | Xe | 0,
                                        pt = 0 | We | Ye | 0,
                                        ct = 0 | Je | Ze,
                                        ut = 0 | Je,
                                        dt = We | Je | Ge | et | at,
                                        mt = 0 | st,
                                        ft = 0 | Qe,
                                        yt = 0 | We | Qe,
                                        xt = dt | tt,
                                        gt = 0 | st,
                                        Pt = 0 | Je | it,
                                        bt = rt,
                                        Tt = 4,
                                        At = 2,
                                        Et = 1,
                                        wt = At | Et,
                                        St = At | Tt,
                                        vt = Et | Tt,
                                        Ct = At,
                                        Nt = Et,
                                        It = 0,
                                        kt = class {
                                            constructor(e) {
                                                this.var = new Set, this.lexical = new Set, this.functions = new Set, this.flags = e
                                            }
                                        },
                                        Lt = class {
                                            constructor(e, t) {
                                                this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = new Map, this.parser = e, this.inModule = t
                                            }
                                            get inTopLevel() {
                                                return (this.currentScope().flags & je) > 0
                                            }
                                            get inFunction() {
                                                return (this.currentVarScopeFlags() & Re) > 0
                                            }
                                            get allowSuper() {
                                                return (this.currentThisScopeFlags() & ze) > 0
                                            }
                                            get allowDirectSuper() {
                                                return (this.currentThisScopeFlags() & He) > 0
                                            }
                                            get inClass() {
                                                return (this.currentThisScopeFlags() & $e) > 0
                                            }
                                            get inClassAndNotInNonArrowFunction() {
                                                let e = this.currentThisScopeFlags();
                                                return (e & $e) > 0 && 0 === (e & Re)
                                            }
                                            get inStaticBlock() {
                                                for (let e = this.scopeStack.length - 1;; e--) {
                                                    let {
                                                        flags: t
                                                    } = this.scopeStack[e];
                                                    if (t & Ve) return !0;
                                                    if (t & (Ke | $e)) return !1
                                                }
                                            }
                                            get inNonArrowFunction() {
                                                return (this.currentThisScopeFlags() & Re) > 0
                                            }
                                            get treatFunctionsAsVar() {
                                                return this.treatFunctionsAsVarInScope(this.currentScope())
                                            }
                                            createScope(e) {
                                                return new kt(e)
                                            }
                                            enter(e) {
                                                this.scopeStack.push(this.createScope(e))
                                            }
                                            exit() {
                                                return this.scopeStack.pop().flags
                                            }
                                            treatFunctionsAsVarInScope(e) {
                                                return !!(e.flags & (Re | Ve) || !this.parser.inModule && e.flags & je)
                                            }
                                            declareName(e, t, s) {
                                                let r = this.currentScope();
                                                if (t & Ge || t & Ye) this.checkRedeclarationInScope(r, e, t, s), t & Ye ? r.functions.add(e) : r.lexical.add(e), t & Ge && this.maybeExportDefined(r, e);
                                                else if (t & Xe)
                                                    for (let i = this.scopeStack.length - 1; i >= 0 && (r = this.scopeStack[i], this.checkRedeclarationInScope(r, e, t, s), r.var.add(e), this.maybeExportDefined(r, e), !(r.flags & Ke)); --i);
                                                this.parser.inModule && r.flags & je && this.undefinedExports.delete(e)
                                            }
                                            maybeExportDefined(e, t) {
                                                this.parser.inModule && e.flags & je && this.undefinedExports.delete(t)
                                            }
                                            checkRedeclarationInScope(e, t, s, r) {
                                                this.isRedeclaredInScope(e, t, s) && this.parser.raise(pe.VarRedeclaration, {
                                                    at: r,
                                                    identifierName: t
                                                })
                                            }
                                            isRedeclaredInScope(e, t, s) {
                                                return !!(s & We) && (s & Ge ? e.lexical.has(t) || e.functions.has(t) || e.var.has(t) : s & Ye ? e.lexical.has(t) || !this.treatFunctionsAsVarInScope(e) && e.var.has(t) : e.lexical.has(t) && !(e.flags & _e && e.lexical.values().next().value === t) || !this.treatFunctionsAsVarInScope(e) && e.functions.has(t))
                                            }
                                            checkLocalExport(e) {
                                                let {
                                                    name: t
                                                } = e, s = this.scopeStack[0];
                                                !s.lexical.has(t) && !s.var.has(t) && !s.functions.has(t) && this.undefinedExports.set(t, e.loc.start)
                                            }
                                            currentScope() {
                                                return this.scopeStack[this.scopeStack.length - 1]
                                            }
                                            currentVarScopeFlags() {
                                                for (let e = this.scopeStack.length - 1;; e--) {
                                                    let {
                                                        flags: t
                                                    } = this.scopeStack[e];
                                                    if (t & Ke) return t
                                                }
                                            }
                                            currentThisScopeFlags() {
                                                for (let e = this.scopeStack.length - 1;; e--) {
                                                    let {
                                                        flags: t
                                                    } = this.scopeStack[e];
                                                    if (t & (Ke | $e) && !(t & Ue)) return t
                                                }
                                            }
                                        },
                                        Mt = class extends kt {
                                            constructor() {
                                                super(...arguments), this.declareFunctions = new Set
                                            }
                                        },
                                        Ot = class extends Lt {
                                            createScope(e) {
                                                return new Mt(e)
                                            }
                                            declareName(e, t, s) {
                                                let r = this.currentScope();
                                                if (t & rt) return this.checkRedeclarationInScope(r, e, t, s), this.maybeExportDefined(r, e), void r.declareFunctions.add(e);
                                                super.declareName(e, t, s)
                                            }
                                            isRedeclaredInScope(e, t, s) {
                                                return !!super.isRedeclaredInScope(e, t, s) || !!(s & rt) && !e.declareFunctions.has(t) && (e.lexical.has(t) || e.functions.has(t))
                                            }
                                            checkLocalExport(e) {
                                                this.scopeStack[0].declareFunctions.has(e.name) || super.checkLocalExport(e)
                                            }
                                        },
                                        Dt = class {
                                            constructor() {
                                                this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1
                                            }
                                            hasPlugin(e) {
                                                if ("string" == typeof e) return this.plugins.has(e); {
                                                    let [t, s] = e;
                                                    if (!this.hasPlugin(t)) return !1;
                                                    let r = this.plugins.get(t);
                                                    for (let e of Object.keys(s))
                                                        if ((null == r ? void 0 : r[e]) !== s[e]) return !1;
                                                    return !0
                                                }
                                            }
                                            getPluginOption(e, t) {
                                                var s;
                                                return null == (s = this.plugins.get(e)) ? void 0 : s[t]
                                            }
                                        };

                                    function Ft(e, t) {
                                        void 0 === e.trailingComments ? e.trailingComments = t : e.trailingComments.unshift(...t)
                                    }

                                    function Bt(e, t) {
                                        void 0 === e.leadingComments ? e.leadingComments = t : e.leadingComments.unshift(...t)
                                    }

                                    function jt(e, t) {
                                        void 0 === e.innerComments ? e.innerComments = t : e.innerComments.unshift(...t)
                                    }

                                    function Rt(e, t, s) {
                                        let r = null,
                                            i = t.length;
                                        for (; null === r && i > 0;) r = t[--i];
                                        null === r || r.start > s.start ? jt(e, s.comments) : Ft(r, s.comments)
                                    }
                                    var Ut = class extends Dt {
                                            addComment(e) {
                                                this.filename && (e.loc.filename = this.filename), this.state.comments.push(e)
                                            }
                                            processComment(e) {
                                                let {
                                                    commentStack: t
                                                } = this.state, s = t.length;
                                                if (0 === s) return;
                                                let r = s - 1,
                                                    i = t[r];
                                                i.start === e.end && (i.leadingNode = e, r--);
                                                let {
                                                    start: a
                                                } = e;
                                                for (; r >= 0; r--) {
                                                    let s = t[r],
                                                        i = s.end;
                                                    if (!(i > a)) {
                                                        i === a && (s.trailingNode = e);
                                                        break
                                                    }
                                                    s.containingNode = e, this.finalizeComment(s), t.splice(r, 1)
                                                }
                                            }
                                            finalizeComment(e) {
                                                let {
                                                    comments: t
                                                } = e;
                                                if (null !== e.leadingNode || null !== e.trailingNode) null !== e.leadingNode && Ft(e.leadingNode, t), null !== e.trailingNode && Bt(e.trailingNode, t);
                                                else {
                                                    let {
                                                        containingNode: s,
                                                        start: r
                                                    } = e;
                                                    if (44 === this.input.charCodeAt(r - 1)) switch (s.type) {
                                                        case "ObjectExpression":
                                                        case "ObjectPattern":
                                                        case "RecordExpression":
                                                            Rt(s, s.properties, e);
                                                            break;
                                                        case "CallExpression":
                                                        case "OptionalCallExpression":
                                                            Rt(s, s.arguments, e);
                                                            break;
                                                        case "FunctionDeclaration":
                                                        case "FunctionExpression":
                                                        case "ArrowFunctionExpression":
                                                        case "ObjectMethod":
                                                        case "ClassMethod":
                                                        case "ClassPrivateMethod":
                                                            Rt(s, s.params, e);
                                                            break;
                                                        case "ArrayExpression":
                                                        case "ArrayPattern":
                                                        case "TupleExpression":
                                                            Rt(s, s.elements, e);
                                                            break;
                                                        case "ExportNamedDeclaration":
                                                        case "ImportDeclaration":
                                                            Rt(s, s.specifiers, e);
                                                            break;
                                                        default:
                                                            jt(s, t)
                                                    } else jt(s, t)
                                                }
                                            }
                                            finalizeRemainingComments() {
                                                let {
                                                    commentStack: e
                                                } = this.state;
                                                for (let t = e.length - 1; t >= 0; t--) this.finalizeComment(e[t]);
                                                this.state.commentStack = []
                                            }
                                            resetPreviousNodeTrailingComments(e) {
                                                let {
                                                    commentStack: t
                                                } = this.state, {
                                                    length: s
                                                } = t;
                                                if (0 === s) return;
                                                let r = t[s - 1];
                                                r.leadingNode === e && (r.leadingNode = null)
                                            }
                                            takeSurroundingComments(e, t, s) {
                                                let {
                                                    commentStack: r
                                                } = this.state, i = r.length;
                                                if (0 === i) return;
                                                let a = i - 1;
                                                for (; a >= 0; a--) {
                                                    let i = r[a],
                                                        n = i.end;
                                                    if (i.start === s) i.leadingNode = e;
                                                    else if (n === t) i.trailingNode = e;
                                                    else if (n < t) break
                                                }
                                            }
                                        },
                                        _t = /\r\n?|[\n\u2028\u2029]/,
                                        zt = new RegExp(_t.source, "g");

                                    function Ht(e) {
                                        switch (e) {
                                            case 10:
                                            case 13:
                                            case 8232:
                                            case 8233:
                                                return !0;
                                            default:
                                                return !1
                                        }
                                    }
                                    var $t = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                                        Vt = new RegExp("(?=(" + /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");

                                    function qt(e) {
                                        switch (e) {
                                            case 9:
                                            case 11:
                                            case 12:
                                            case 32:
                                            case 160:
                                            case 5760:
                                            case 8192:
                                            case 8193:
                                            case 8194:
                                            case 8195:
                                            case 8196:
                                            case 8197:
                                            case 8198:
                                            case 8199:
                                            case 8200:
                                            case 8201:
                                            case 8202:
                                            case 8239:
                                            case 8287:
                                            case 12288:
                                            case 65279:
                                                return !0;
                                            default:
                                                return !1
                                        }
                                    }
                                    var Kt = class {
                                            constructor() {
                                                this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = !1, this.inType = !1, this.noAnonFunctionType = !1, this.hasFlowComment = !1, this.isAmbientContext = !1, this.inAbstractClass = !1, this.inDisallowConditionalTypesContext = !1, this.topicContext = {
                                                    maxNumOfResolvableTopics: 0,
                                                    maxTopicIndex: null
                                                }, this.soloAwait = !1, this.inFSharpPipelineDirectBody = !1, this.labels = [], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 137, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.context = [i.brace], this.canStartJSXElement = !0, this.containsEsc = !1, this.firstInvalidTemplateEscapePos = null, this.strictErrors = new Map, this.tokensLength = 0
                                            }
                                            init(e) {
                                                let {
                                                    strictMode: t,
                                                    sourceType: s,
                                                    startLine: r,
                                                    startColumn: i
                                                } = e;
                                                this.strict = !1 !== t && (!0 === t || "module" === s), this.curLine = r, this.lineStart = -i, this.startLoc = this.endLoc = new W(r, i, 0)
                                            }
                                            curPosition() {
                                                return new W(this.curLine, this.pos - this.lineStart, this.pos)
                                            }
                                            clone(e) {
                                                let t = new Kt,
                                                    s = Object.keys(this);
                                                for (let r = 0, i = s.length; r < i; r++) {
                                                    let i = s[r],
                                                        a = this[i];
                                                    !e && Array.isArray(a) && (a = a.slice()), t[i] = a
                                                }
                                                return t
                                            }
                                        },
                                        Wt = function(e) {
                                            return e >= 48 && e <= 57
                                        },
                                        Jt = {
                                            decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
                                            hex: new Set([46, 88, 95, 120])
                                        },
                                        Xt = {
                                            bin: e => 48 === e || 49 === e,
                                            oct: e => e >= 48 && e <= 55,
                                            dec: e => e >= 48 && e <= 57,
                                            hex: e => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
                                        };

                                    function Gt(e, t, s, r, i, a) {
                                        let n = s,
                                            o = r,
                                            h = i,
                                            l = "",
                                            p = null,
                                            c = s,
                                            {
                                                length: u
                                            } = t;
                                        for (;;) {
                                            if (s >= u) {
                                                a.unterminated(n, o, h), l += t.slice(c, s);
                                                break
                                            }
                                            let d = t.charCodeAt(s);
                                            if (Yt(e, d, t, s)) {
                                                l += t.slice(c, s);
                                                break
                                            }
                                            if (92 === d) {
                                                l += t.slice(c, s);
                                                let n = Qt(t, s, r, i, "template" === e, a);
                                                null !== n.ch || p ? l += n.ch : p = {
                                                    pos: s,
                                                    lineStart: r,
                                                    curLine: i
                                                }, ({
                                                    pos: s,
                                                    lineStart: r,
                                                    curLine: i
                                                } = n), c = s
                                            } else 8232 === d || 8233 === d ? (++i, r = ++s) : 10 === d || 13 === d ? "template" === e ? (l += t.slice(c, s) + "\n", ++s, 13 === d && 10 === t.charCodeAt(s) && ++s, ++i, c = r = s) : a.unterminated(n, o, h) : ++s
                                        }
                                        return {
                                            pos: s,
                                            str: l,
                                            firstInvalidLoc: p,
                                            lineStart: r,
                                            curLine: i,
                                            containsInvalid: !!p
                                        }
                                    }

                                    function Yt(e, t, s, r) {
                                        return "template" === e ? 96 === t || 36 === t && 123 === s.charCodeAt(r + 1) : t === ("double" === e ? 34 : 39)
                                    }

                                    function Qt(e, t, s, r, i, a) {
                                        let n = !i;
                                        t++;
                                        let o = e => ({
                                                pos: t,
                                                ch: e,
                                                lineStart: s,
                                                curLine: r
                                            }),
                                            h = e.charCodeAt(t++);
                                        switch (h) {
                                            case 110:
                                                return o("\n");
                                            case 114:
                                                return o("\r");
                                            case 120:
                                                {
                                                    let i;
                                                    return ({
                                                        code: i,
                                                        pos: t
                                                    } = Zt(e, t, s, r, 2, !1, n, a)),
                                                    o(null === i ? null : String.fromCharCode(i))
                                                }
                                            case 117:
                                                {
                                                    let i;
                                                    return ({
                                                        code: i,
                                                        pos: t
                                                    } = ts(e, t, s, r, n, a)),
                                                    o(null === i ? null : String.fromCodePoint(i))
                                                }
                                            case 116:
                                                return o("\t");
                                            case 98:
                                                return o("\b");
                                            case 118:
                                                return o("\v");
                                            case 102:
                                                return o("\f");
                                            case 13:
                                                10 === e.charCodeAt(t) && ++t;
                                            case 10:
                                                s = t, ++r;
                                            case 8232:
                                            case 8233:
                                                return o("");
                                            case 56:
                                            case 57:
                                                if (i) return o(null);
                                                a.strictNumericEscape(t - 1, s, r);
                                            default:
                                                if (h >= 48 && h <= 55) {
                                                    let n = t - 1,
                                                        h = e.slice(n, t + 2).match(/^[0-7]+/)[0],
                                                        l = parseInt(h, 8);
                                                    l > 255 && (h = h.slice(0, -1), l = parseInt(h, 8)), t += h.length - 1;
                                                    let p = e.charCodeAt(t);
                                                    if ("0" !== h || 56 === p || 57 === p) {
                                                        if (i) return o(null);
                                                        a.strictNumericEscape(n, s, r)
                                                    }
                                                    return o(String.fromCharCode(l))
                                                }
                                                return o(String.fromCharCode(h))
                                        }
                                    }

                                    function Zt(e, t, s, r, i, a, n, o) {
                                        let h, l = t;
                                        return ({
                                            n: h,
                                            pos: t
                                        } = es(e, t, s, r, 16, i, a, !1, o, !n)), null === h && (n ? o.invalidEscapeSequence(l, s, r) : t = l - 1), {
                                            code: h,
                                            pos: t
                                        }
                                    }

                                    function es(e, t, s, r, i, a, n, o, h, l) {
                                        let p = t,
                                            c = 16 === i ? Jt.hex : Jt.decBinOct,
                                            u = 16 === i ? Xt.hex : 10 === i ? Xt.dec : 8 === i ? Xt.oct : Xt.bin,
                                            d = !1,
                                            m = 0;
                                        for (let f = 0, y = null == a ? 1 / 0 : a; f < y; ++f) {
                                            let a, p = e.charCodeAt(t);
                                            if (95 !== p || "bail" === o) {
                                                if (a = p >= 97 ? p - 97 + 10 : p >= 65 ? p - 65 + 10 : Wt(p) ? p - 48 : 1 / 0, a >= i) {
                                                    if (a <= 9 && l) return {
                                                        n: null,
                                                        pos: t
                                                    };
                                                    if (a <= 9 && h.invalidDigit(t, s, r, i)) a = 0;
                                                    else {
                                                        if (!n) break;
                                                        a = 0, d = !0
                                                    }
                                                }++t, m = m * i + a
                                            } else {
                                                let i = e.charCodeAt(t - 1),
                                                    a = e.charCodeAt(t + 1);
                                                if (o) {
                                                    if (Number.isNaN(a) || !u(a) || c.has(i) || c.has(a)) {
                                                        if (l) return {
                                                            n: null,
                                                            pos: t
                                                        };
                                                        h.unexpectedNumericSeparator(t, s, r)
                                                    }
                                                } else {
                                                    if (l) return {
                                                        n: null,
                                                        pos: t
                                                    };
                                                    h.numericSeparatorInEscapeSequence(t, s, r)
                                                }++t
                                            }
                                        }
                                        return t === p || null != a && t - p !== a || d ? {
                                            n: null,
                                            pos: t
                                        } : {
                                            n: m,
                                            pos: t
                                        }
                                    }

                                    function ts(e, t, s, r, i, a) {
                                        let n;
                                        if (123 === e.charCodeAt(t)) {
                                            if (++t, ({
                                                    code: n,
                                                    pos: t
                                                } = Zt(e, t, s, r, e.indexOf("}", t) - t, !0, i, a)), ++t, null !== n && n > 1114111) {
                                                if (!i) return {
                                                    code: null,
                                                    pos: t
                                                };
                                                a.invalidCodePoint(t, s, r)
                                            }
                                        } else({
                                            code: n,
                                            pos: t
                                        } = Zt(e, t, s, r, 4, !1, i, a));
                                        return {
                                            code: n,
                                            pos: t
                                        }
                                    }
                                    var ss = ["at"],
                                        rs = ["at"];

                                    function is(e, t, s) {
                                        return new W(s, e - t, e)
                                    }
                                    var as = new Set([103, 109, 115, 105, 121, 117, 100, 118]),
                                        ns = class {
                                            constructor(e) {
                                                this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, this.loc = new J(e.startLoc, e.endLoc)
                                            }
                                        },
                                        os = class extends Ut {
                                            constructor(e, t) {
                                                super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = {
                                                    invalidDigit: (e, t, s, r) => !!this.options.errorRecovery && (this.raise(pe.InvalidDigit, {
                                                        at: is(e, t, s),
                                                        radix: r
                                                    }), !0),
                                                    numericSeparatorInEscapeSequence: this.errorBuilder(pe.NumericSeparatorInEscapeSequence),
                                                    unexpectedNumericSeparator: this.errorBuilder(pe.UnexpectedNumericSeparator)
                                                }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
                                                    invalidEscapeSequence: this.errorBuilder(pe.InvalidEscapeSequence),
                                                    invalidCodePoint: this.errorBuilder(pe.InvalidCodePoint)
                                                }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
                                                    strictNumericEscape: (e, t, s) => {
                                                        this.recordStrictModeErrors(pe.StrictNumericEscape, {
                                                            at: is(e, t, s)
                                                        })
                                                    },
                                                    unterminated: (e, t, s) => {
                                                        throw this.raise(pe.UnterminatedString, {
                                                            at: is(e - 1, t, s)
                                                        })
                                                    }
                                                }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
                                                    strictNumericEscape: this.errorBuilder(pe.StrictNumericEscape),
                                                    unterminated: (e, t, s) => {
                                                        throw this.raise(pe.UnterminatedTemplate, {
                                                            at: is(e, t, s)
                                                        })
                                                    }
                                                }), this.state = new Kt, this.state.init(e), this.input = t, this.length = t.length, this.isLookahead = !1
                                            }
                                            pushToken(e) {
                                                this.tokens.length = this.state.tokensLength, this.tokens.push(e), ++this.state.tokensLength
                                            }
                                            next() {
                                                this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new ns(this.state)), this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken()
                                            }
                                            eat(e) {
                                                return !!this.match(e) && (this.next(), !0)
                                            }
                                            match(e) {
                                                return this.state.type === e
                                            }
                                            createLookaheadState(e) {
                                                return {
                                                    pos: e.pos,
                                                    value: null,
                                                    type: e.type,
                                                    start: e.start,
                                                    end: e.end,
                                                    context: [this.curContext()],
                                                    inType: e.inType,
                                                    startLoc: e.startLoc,
                                                    lastTokEndLoc: e.lastTokEndLoc,
                                                    curLine: e.curLine,
                                                    lineStart: e.lineStart,
                                                    curPosition: e.curPosition
                                                }
                                            }
                                            lookahead() {
                                                let e = this.state;
                                                this.state = this.createLookaheadState(e), this.isLookahead = !0, this.nextToken(), this.isLookahead = !1;
                                                let t = this.state;
                                                return this.state = e, t
                                            }
                                            nextTokenStart() {
                                                return this.nextTokenStartSince(this.state.pos)
                                            }
                                            nextTokenStartSince(e) {
                                                return $t.lastIndex = e, $t.test(this.input) ? $t.lastIndex : e
                                            }
                                            lookaheadCharCode() {
                                                return this.input.charCodeAt(this.nextTokenStart())
                                            }
                                            codePointAtPos(e) {
                                                let t = this.input.charCodeAt(e);
                                                if (55296 === (64512 & t) && ++e < this.input.length) {
                                                    let s = this.input.charCodeAt(e);
                                                    56320 === (64512 & s) && (t = 65536 + ((1023 & t) << 10) + (1023 & s))
                                                }
                                                return t
                                            }
                                            setStrict(e) {
                                                this.state.strict = e, e && (this.state.strictErrors.forEach((e => {
                                                    let [t, s] = e;
                                                    return this.raise(t, {
                                                        at: s
                                                    })
                                                })), this.state.strictErrors.clear())
                                            }
                                            curContext() {
                                                return this.state.context[this.state.context.length - 1]
                                            }
                                            nextToken() {
                                                this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length ? this.finishToken(137) : this.getTokenFromCode(this.codePointAtPos(this.state.pos))
                                            }
                                            skipBlockComment(e) {
                                                let t;
                                                this.isLookahead || (t = this.state.curPosition());
                                                let s = this.state.pos,
                                                    r = this.input.indexOf(e, s + 2);
                                                if (-1 === r) throw this.raise(pe.UnterminatedComment, {
                                                    at: this.state.curPosition()
                                                });
                                                for (this.state.pos = r + e.length, zt.lastIndex = s + 2; zt.test(this.input) && zt.lastIndex <= r;) ++this.state.curLine, this.state.lineStart = zt.lastIndex;
                                                if (this.isLookahead) return;
                                                let i = {
                                                    type: "CommentBlock",
                                                    value: this.input.slice(s + 2, r),
                                                    start: s,
                                                    end: r + e.length,
                                                    loc: new J(t, this.state.curPosition())
                                                };
                                                return this.options.tokens && this.pushToken(i), i
                                            }
                                            skipLineComment(e) {
                                                let t, s = this.state.pos;
                                                this.isLookahead || (t = this.state.curPosition());
                                                let r = this.input.charCodeAt(this.state.pos += e);
                                                if (this.state.pos < this.length)
                                                    for (; !Ht(r) && ++this.state.pos < this.length;) r = this.input.charCodeAt(this.state.pos);
                                                if (this.isLookahead) return;
                                                let i = this.state.pos,
                                                    a = {
                                                        type: "CommentLine",
                                                        value: this.input.slice(s + e, i),
                                                        start: s,
                                                        end: i,
                                                        loc: new J(t, this.state.curPosition())
                                                    };
                                                return this.options.tokens && this.pushToken(a), a
                                            }
                                            skipSpace() {
                                                let e = this.state.pos,
                                                    t = [];
                                                e: for (; this.state.pos < this.length;) {
                                                    let s = this.input.charCodeAt(this.state.pos);
                                                    switch (s) {
                                                        case 32:
                                                        case 160:
                                                        case 9:
                                                            ++this.state.pos;
                                                            break;
                                                        case 13:
                                                            10 === this.input.charCodeAt(this.state.pos + 1) && ++this.state.pos;
                                                        case 10:
                                                        case 8232:
                                                        case 8233:
                                                            ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
                                                            break;
                                                        case 47:
                                                            switch (this.input.charCodeAt(this.state.pos + 1)) {
                                                                case 42:
                                                                    {
                                                                        let e = this.skipBlockComment("*/");void 0 !== e && (this.addComment(e), this.options.attachComment && t.push(e));
                                                                        break
                                                                    }
                                                                case 47:
                                                                    {
                                                                        let e = this.skipLineComment(2);void 0 !== e && (this.addComment(e), this.options.attachComment && t.push(e));
                                                                        break
                                                                    }
                                                                default:
                                                                    break e
                                                            }
                                                            break;
                                                        default:
                                                            if (qt(s)) ++this.state.pos;
                                                            else if (45 === s && !this.inModule && this.options.annexB) {
                                                                let s = this.state.pos;
                                                                if (45 !== this.input.charCodeAt(s + 1) || 62 !== this.input.charCodeAt(s + 2) || !(0 === e || this.state.lineStart > e)) break e; {
                                                                    let e = this.skipLineComment(3);
                                                                    void 0 !== e && (this.addComment(e), this.options.attachComment && t.push(e))
                                                                }
                                                            } else {
                                                                if (60 !== s || this.inModule || !this.options.annexB) break e; {
                                                                    let e = this.state.pos;
                                                                    if (33 !== this.input.charCodeAt(e + 1) || 45 !== this.input.charCodeAt(e + 2) || 45 !== this.input.charCodeAt(e + 3)) break e; {
                                                                        let e = this.skipLineComment(4);
                                                                        void 0 !== e && (this.addComment(e), this.options.attachComment && t.push(e))
                                                                    }
                                                                }
                                                            }
                                                    }
                                                }
                                                if (t.length > 0) {
                                                    let s = {
                                                        start: e,
                                                        end: this.state.pos,
                                                        comments: t,
                                                        leadingNode: null,
                                                        trailingNode: null,
                                                        containingNode: null
                                                    };
                                                    this.state.commentStack.push(s)
                                                }
                                            }
                                            finishToken(e, t) {
                                                this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
                                                let s = this.state.type;
                                                this.state.type = e, this.state.value = t, this.isLookahead || this.updateContext(s)
                                            }
                                            replaceToken(e) {
                                                this.state.type = e, this.updateContext()
                                            }
                                            readToken_numberSign() {
                                                if (0 === this.state.pos && this.readToken_interpreter()) return;
                                                let e = this.state.pos + 1,
                                                    t = this.codePointAtPos(e);
                                                if (t >= 48 && t <= 57) throw this.raise(pe.UnexpectedDigitAfterHash, {
                                                    at: this.state.curPosition()
                                                });
                                                if (123 === t || 91 === t && this.hasPlugin("recordAndTuple")) {
                                                    if (this.expectPlugin("recordAndTuple"), "bar" === this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(123 === t ? pe.RecordExpressionHashIncorrectStartSyntaxType : pe.TupleExpressionHashIncorrectStartSyntaxType, {
                                                        at: this.state.curPosition()
                                                    });
                                                    this.state.pos += 2, 123 === t ? this.finishToken(7) : this.finishToken(1)
                                                } else Ae(t) ? (++this.state.pos, this.finishToken(136, this.readWord1(t))) : 92 === t ? (++this.state.pos, this.finishToken(136, this.readWord1())) : this.finishOp(27, 1)
                                            }
                                            readToken_dot() {
                                                let e = this.input.charCodeAt(this.state.pos + 1);
                                                e >= 48 && e <= 57 ? this.readNumber(!0) : 46 === e && 46 === this.input.charCodeAt(this.state.pos + 2) ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16))
                                            }
                                            readToken_slash() {
                                                61 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(31, 2) : this.finishOp(56, 1)
                                            }
                                            readToken_interpreter() {
                                                if (0 !== this.state.pos || this.length < 2) return !1;
                                                let e = this.input.charCodeAt(this.state.pos + 1);
                                                if (33 !== e) return !1;
                                                let t = this.state.pos;
                                                for (this.state.pos += 1; !Ht(e) && ++this.state.pos < this.length;) e = this.input.charCodeAt(this.state.pos);
                                                let s = this.input.slice(t + 2, this.state.pos);
                                                return this.finishToken(28, s), !0
                                            }
                                            readToken_mult_modulo(e) {
                                                let t = 42 === e ? 55 : 54,
                                                    s = 1,
                                                    r = this.input.charCodeAt(this.state.pos + 1);
                                                42 === e && 42 === r && (s++, r = this.input.charCodeAt(this.state.pos + 2), t = 57), 61 === r && !this.state.inType && (s++, t = 37 === e ? 33 : 30), this.finishOp(t, s)
                                            }
                                            readToken_pipe_amp(e) {
                                                let t = this.input.charCodeAt(this.state.pos + 1);
                                                if (t !== e) {
                                                    if (124 === e) {
                                                        if (62 === t) return void this.finishOp(39, 2);
                                                        if (this.hasPlugin("recordAndTuple") && 125 === t) {
                                                            if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(pe.RecordExpressionBarIncorrectEndSyntaxType, {
                                                                at: this.state.curPosition()
                                                            });
                                                            return this.state.pos += 2, void this.finishToken(9)
                                                        }
                                                        if (this.hasPlugin("recordAndTuple") && 93 === t) {
                                                            if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(pe.TupleExpressionBarIncorrectEndSyntaxType, {
                                                                at: this.state.curPosition()
                                                            });
                                                            return this.state.pos += 2, void this.finishToken(4)
                                                        }
                                                    }
                                                    61 !== t ? this.finishOp(124 === e ? 43 : 45, 1) : this.finishOp(30, 2)
                                                } else 61 === this.input.charCodeAt(this.state.pos + 2) ? this.finishOp(30, 3) : this.finishOp(124 === e ? 41 : 42, 2)
                                            }
                                            readToken_caret() {
                                                let e = this.input.charCodeAt(this.state.pos + 1);
                                                61 !== e || this.state.inType ? 94 === e && this.hasPlugin(["pipelineOperator", {
                                                    proposal: "hack",
                                                    topicToken: "^^"
                                                }]) ? (this.finishOp(37, 2), 94 === this.input.codePointAt(this.state.pos) && this.unexpected()) : this.finishOp(44, 1) : this.finishOp(32, 2)
                                            }
                                            readToken_atSign() {
                                                64 === this.input.charCodeAt(this.state.pos + 1) && this.hasPlugin(["pipelineOperator", {
                                                    proposal: "hack",
                                                    topicToken: "@@"
                                                }]) ? this.finishOp(38, 2) : this.finishOp(26, 1)
                                            }
                                            readToken_plus_min(e) {
                                                let t = this.input.charCodeAt(this.state.pos + 1);
                                                t !== e ? 61 === t ? this.finishOp(30, 2) : this.finishOp(53, 1) : this.finishOp(34, 2)
                                            }
                                            readToken_lt() {
                                                let {
                                                    pos: e
                                                } = this.state, t = this.input.charCodeAt(e + 1);
                                                if (60 === t) return 61 === this.input.charCodeAt(e + 2) ? void this.finishOp(30, 3) : void this.finishOp(51, 2);
                                                61 !== t ? this.finishOp(47, 1) : this.finishOp(49, 2)
                                            }
                                            readToken_gt() {
                                                let {
                                                    pos: e
                                                } = this.state, t = this.input.charCodeAt(e + 1);
                                                if (62 === t) {
                                                    let t = 62 === this.input.charCodeAt(e + 2) ? 3 : 2;
                                                    return 61 === this.input.charCodeAt(e + t) ? void this.finishOp(30, t + 1) : void this.finishOp(52, t)
                                                }
                                                61 !== t ? this.finishOp(48, 1) : this.finishOp(49, 2)
                                            }
                                            readToken_eq_excl(e) {
                                                let t = this.input.charCodeAt(this.state.pos + 1);
                                                if (61 !== t) return 61 === e && 62 === t ? (this.state.pos += 2, void this.finishToken(19)) : void this.finishOp(61 === e ? 29 : 35, 1);
                                                this.finishOp(46, 61 === this.input.charCodeAt(this.state.pos + 2) ? 3 : 2)
                                            }
                                            readToken_question() {
                                                let e = this.input.charCodeAt(this.state.pos + 1),
                                                    t = this.input.charCodeAt(this.state.pos + 2);
                                                63 === e ? 61 === t ? this.finishOp(30, 3) : this.finishOp(40, 2) : 46 !== e || t >= 48 && t <= 57 ? (++this.state.pos, this.finishToken(17)) : (this.state.pos += 2, this.finishToken(18))
                                            }
                                            getTokenFromCode(e) {
                                                switch (e) {
                                                    case 46:
                                                        return void this.readToken_dot();
                                                    case 40:
                                                        return ++this.state.pos, void this.finishToken(10);
                                                    case 41:
                                                        return ++this.state.pos, void this.finishToken(11);
                                                    case 59:
                                                        return ++this.state.pos, void this.finishToken(13);
                                                    case 44:
                                                        return ++this.state.pos, void this.finishToken(12);
                                                    case 91:
                                                        if (this.hasPlugin("recordAndTuple") && 124 === this.input.charCodeAt(this.state.pos + 1)) {
                                                            if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(pe.TupleExpressionBarIncorrectStartSyntaxType, {
                                                                at: this.state.curPosition()
                                                            });
                                                            this.state.pos += 2, this.finishToken(2)
                                                        } else ++this.state.pos, this.finishToken(0);
                                                        return;
                                                    case 93:
                                                        return ++this.state.pos, void this.finishToken(3);
                                                    case 123:
                                                        if (this.hasPlugin("recordAndTuple") && 124 === this.input.charCodeAt(this.state.pos + 1)) {
                                                            if ("bar" !== this.getPluginOption("recordAndTuple", "syntaxType")) throw this.raise(pe.RecordExpressionBarIncorrectStartSyntaxType, {
                                                                at: this.state.curPosition()
                                                            });
                                                            this.state.pos += 2, this.finishToken(6)
                                                        } else ++this.state.pos, this.finishToken(5);
                                                        return;
                                                    case 125:
                                                        return ++this.state.pos, void this.finishToken(8);
                                                    case 58:
                                                        return void(this.hasPlugin("functionBind") && 58 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14)));
                                                    case 63:
                                                        return void this.readToken_question();
                                                    case 96:
                                                        return void this.readTemplateToken();
                                                    case 48:
                                                        {
                                                            let e = this.input.charCodeAt(this.state.pos + 1);
                                                            if (120 === e || 88 === e) return void this.readRadixNumber(16);
                                                            if (111 === e || 79 === e) return void this.readRadixNumber(8);
                                                            if (98 === e || 66 === e) return void this.readRadixNumber(2)
                                                        }
                                                    case 49:
                                                    case 50:
                                                    case 51:
                                                    case 52:
                                                    case 53:
                                                    case 54:
                                                    case 55:
                                                    case 56:
                                                    case 57:
                                                        return void this.readNumber(!1);
                                                    case 34:
                                                    case 39:
                                                        return void this.readString(e);
                                                    case 47:
                                                        return void this.readToken_slash();
                                                    case 37:
                                                    case 42:
                                                        return void this.readToken_mult_modulo(e);
                                                    case 124:
                                                    case 38:
                                                        return void this.readToken_pipe_amp(e);
                                                    case 94:
                                                        return void this.readToken_caret();
                                                    case 43:
                                                    case 45:
                                                        return void this.readToken_plus_min(e);
                                                    case 60:
                                                        return void this.readToken_lt();
                                                    case 62:
                                                        return void this.readToken_gt();
                                                    case 61:
                                                    case 33:
                                                        return void this.readToken_eq_excl(e);
                                                    case 126:
                                                        return void this.finishOp(36, 1);
                                                    case 64:
                                                        return void this.readToken_atSign();
                                                    case 35:
                                                        return void this.readToken_numberSign();
                                                    case 92:
                                                        return void this.readWord();
                                                    default:
                                                        if (Ae(e)) return void this.readWord(e)
                                                }
                                                throw this.raise(pe.InvalidOrUnexpectedToken, {
                                                    at: this.state.curPosition(),
                                                    unexpected: String.fromCodePoint(e)
                                                })
                                            }
                                            finishOp(e, t) {
                                                let s = this.input.slice(this.state.pos, this.state.pos + t);
                                                this.state.pos += t, this.finishToken(e, s)
                                            }
                                            readRegexp() {
                                                let e, t, s = this.state.startLoc,
                                                    r = this.state.start + 1,
                                                    {
                                                        pos: i
                                                    } = this.state;
                                                for (;; ++i) {
                                                    if (i >= this.length) throw this.raise(pe.UnterminatedRegExp, {
                                                        at: X(s, 1)
                                                    });
                                                    let r = this.input.charCodeAt(i);
                                                    if (Ht(r)) throw this.raise(pe.UnterminatedRegExp, {
                                                        at: X(s, 1)
                                                    });
                                                    if (e) e = !1;
                                                    else {
                                                        if (91 === r) t = !0;
                                                        else if (93 === r && t) t = !1;
                                                        else if (47 === r && !t) break;
                                                        e = 92 === r
                                                    }
                                                }
                                                let a = this.input.slice(r, i);
                                                ++i;
                                                let n = "",
                                                    o = () => X(s, i + 2 - r);
                                                for (; i < this.length;) {
                                                    let e = this.codePointAtPos(i),
                                                        t = String.fromCharCode(e);
                                                    if (as.has(e)) 118 === e ? (this.expectPlugin("regexpUnicodeSets", o()), n.includes("u") && this.raise(pe.IncompatibleRegExpUVFlags, {
                                                        at: o()
                                                    })) : 117 === e && n.includes("v") && this.raise(pe.IncompatibleRegExpUVFlags, {
                                                        at: o()
                                                    }), n.includes(t) && this.raise(pe.DuplicateRegExpFlags, {
                                                        at: o()
                                                    });
                                                    else {
                                                        if (!Ee(e) && 92 !== e) break;
                                                        this.raise(pe.MalformedRegExpFlags, {
                                                            at: o()
                                                        })
                                                    }++i, n += t
                                                }
                                                this.state.pos = i, this.finishToken(135, {
                                                    pattern: a,
                                                    flags: n
                                                })
                                            }
                                            readInt(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                                    {
                                                        n: i,
                                                        pos: a
                                                    } = es(this.input, this.state.pos, this.state.lineStart, this.state.curLine, e, t, s, r, this.errorHandlers_readInt, !1);
                                                return this.state.pos = a, i
                                            }
                                            readRadixNumber(e) {
                                                let t = this.state.curPosition(),
                                                    s = !1;
                                                this.state.pos += 2;
                                                let r = this.readInt(e);
                                                null == r && this.raise(pe.InvalidDigit, {
                                                    at: X(t, 2),
                                                    radix: e
                                                });
                                                let i = this.input.charCodeAt(this.state.pos);
                                                if (110 === i) ++this.state.pos, s = !0;
                                                else if (109 === i) throw this.raise(pe.InvalidDecimal, {
                                                    at: t
                                                });
                                                if (Ae(this.codePointAtPos(this.state.pos))) throw this.raise(pe.NumberIdentifier, {
                                                    at: this.state.curPosition()
                                                });
                                                if (s) {
                                                    let e = this.input.slice(t.index, this.state.pos).replace(/[_n]/g, "");
                                                    this.finishToken(133, e)
                                                } else this.finishToken(132, r)
                                            }
                                            readNumber(e) {
                                                let t = this.state.pos,
                                                    s = this.state.curPosition(),
                                                    r = !1,
                                                    i = !1,
                                                    a = !1,
                                                    n = !1,
                                                    o = !1;
                                                !e && null === this.readInt(10) && this.raise(pe.InvalidNumber, {
                                                    at: this.state.curPosition()
                                                });
                                                let h = this.state.pos - t >= 2 && 48 === this.input.charCodeAt(t);
                                                if (h) {
                                                    let e = this.input.slice(t, this.state.pos);
                                                    if (this.recordStrictModeErrors(pe.StrictOctalLiteral, {
                                                            at: s
                                                        }), !this.state.strict) {
                                                        let t = e.indexOf("_");
                                                        t > 0 && this.raise(pe.ZeroDigitNumericSeparator, {
                                                            at: X(s, t)
                                                        })
                                                    }
                                                    o = h && !/[89]/.test(e)
                                                }
                                                let l = this.input.charCodeAt(this.state.pos);
                                                if (46 === l && !o && (++this.state.pos, this.readInt(10), r = !0, l = this.input.charCodeAt(this.state.pos)), (69 === l || 101 === l) && !o && (l = this.input.charCodeAt(++this.state.pos), (43 === l || 45 === l) && ++this.state.pos, null === this.readInt(10) && this.raise(pe.InvalidOrMissingExponent, {
                                                        at: s
                                                    }), r = !0, n = !0, l = this.input.charCodeAt(this.state.pos)), 110 === l && ((r || h) && this.raise(pe.InvalidBigIntLiteral, {
                                                        at: s
                                                    }), ++this.state.pos, i = !0), 109 === l && (this.expectPlugin("decimal", this.state.curPosition()), (n || h) && this.raise(pe.InvalidDecimal, {
                                                        at: s
                                                    }), ++this.state.pos, a = !0), Ae(this.codePointAtPos(this.state.pos))) throw this.raise(pe.NumberIdentifier, {
                                                    at: this.state.curPosition()
                                                });
                                                let p = this.input.slice(t, this.state.pos).replace(/[_mn]/g, "");
                                                if (i) return void this.finishToken(133, p);
                                                if (a) return void this.finishToken(134, p);
                                                let c = o ? parseInt(p, 8) : parseFloat(p);
                                                this.finishToken(132, c)
                                            }
                                            readCodePoint(e) {
                                                let {
                                                    code: t,
                                                    pos: s
                                                } = ts(this.input, this.state.pos, this.state.lineStart, this.state.curLine, e, this.errorHandlers_readCodePoint);
                                                return this.state.pos = s, t
                                            }
                                            readString(e) {
                                                let {
                                                    str: t,
                                                    pos: s,
                                                    curLine: r,
                                                    lineStart: i
                                                } = Gt(34 === e ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
                                                this.state.pos = s + 1, this.state.lineStart = i, this.state.curLine = r, this.finishToken(131, t)
                                            }
                                            readTemplateContinuation() {
                                                this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken()
                                            }
                                            readTemplateToken() {
                                                let e = this.input[this.state.pos],
                                                    {
                                                        str: t,
                                                        firstInvalidLoc: s,
                                                        pos: r,
                                                        curLine: i,
                                                        lineStart: a
                                                    } = Gt("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
                                                this.state.pos = r + 1, this.state.lineStart = a, this.state.curLine = i, s && (this.state.firstInvalidTemplateEscapePos = new W(s.curLine, s.pos - s.lineStart, s.pos)), 96 === this.input.codePointAt(r) ? this.finishToken(24, s ? null : e + t + "`") : (this.state.pos++, this.finishToken(25, s ? null : e + t + "${"))
                                            }
                                            recordStrictModeErrors(e, t) {
                                                let {
                                                    at: s
                                                } = t, r = s.index;
                                                this.state.strict && !this.state.strictErrors.has(r) ? this.raise(e, {
                                                    at: s
                                                }) : this.state.strictErrors.set(r, [e, s])
                                            }
                                            readWord1(e) {
                                                this.state.containsEsc = !1;
                                                let t = "",
                                                    s = this.state.pos,
                                                    r = this.state.pos;
                                                for (void 0 !== e && (this.state.pos += e <= 65535 ? 1 : 2); this.state.pos < this.length;) {
                                                    let e = this.codePointAtPos(this.state.pos);
                                                    if (Ee(e)) this.state.pos += e <= 65535 ? 1 : 2;
                                                    else {
                                                        if (92 !== e) break; {
                                                            this.state.containsEsc = !0, t += this.input.slice(r, this.state.pos);
                                                            let e = this.state.curPosition(),
                                                                i = this.state.pos === s ? Ae : Ee;
                                                            if (117 !== this.input.charCodeAt(++this.state.pos)) {
                                                                this.raise(pe.MissingUnicodeEscape, {
                                                                    at: this.state.curPosition()
                                                                }), r = this.state.pos - 1;
                                                                continue
                                                            }++this.state.pos;
                                                            let a = this.readCodePoint(!0);
                                                            null !== a && (i(a) || this.raise(pe.EscapedCharNotAnIdentifier, {
                                                                at: e
                                                            }), t += String.fromCodePoint(a)), r = this.state.pos
                                                        }
                                                    }
                                                }
                                                return t + this.input.slice(r, this.state.pos)
                                            }
                                            readWord(e) {
                                                let t = this.readWord1(e),
                                                    s = d.get(t);
                                                void 0 !== s ? this.finishToken(s, z(s)) : this.finishToken(130, t)
                                            }
                                            checkKeywordEscapes() {
                                                let {
                                                    type: e
                                                } = this.state;
                                                F(e) && this.state.containsEsc && this.raise(pe.InvalidEscapedReservedWord, {
                                                    at: this.state.startLoc,
                                                    reservedWord: z(e)
                                                })
                                            }
                                            raise(e, t) {
                                                let {
                                                    at: s
                                                } = t, r = K(t, ss), i = e({
                                                    loc: s instanceof W ? s : s.loc.start,
                                                    details: r
                                                });
                                                if (!this.options.errorRecovery) throw i;
                                                return this.isLookahead || this.state.errors.push(i), i
                                            }
                                            raiseOverwrite(e, t) {
                                                let {
                                                    at: s
                                                } = t, r = K(t, rs), i = s instanceof W ? s : s.loc.start, a = i.index, n = this.state.errors;
                                                for (let o = n.length - 1; o >= 0; o--) {
                                                    let t = n[o];
                                                    if (t.loc.index === a) return n[o] = e({
                                                        loc: i,
                                                        details: r
                                                    });
                                                    if (t.loc.index < a) break
                                                }
                                                return this.raise(e, t)
                                            }
                                            updateContext(e) {}
                                            unexpected(e, t) {
                                                throw this.raise(pe.UnexpectedToken, {
                                                    expected: t ? z(t) : null,
                                                    at: null != e ? e : this.state.startLoc
                                                })
                                            }
                                            expectPlugin(e, t) {
                                                if (this.hasPlugin(e)) return !0;
                                                throw this.raise(pe.MissingPlugin, {
                                                    at: null != t ? t : this.state.startLoc,
                                                    missingPlugin: [e]
                                                })
                                            }
                                            expectOnePlugin(e) {
                                                if (!e.some((e => this.hasPlugin(e)))) throw this.raise(pe.MissingOneOfPlugins, {
                                                    at: this.state.startLoc,
                                                    missingPlugin: e
                                                })
                                            }
                                            errorBuilder(e) {
                                                return (t, s, r) => {
                                                    this.raise(e, {
                                                        at: is(t, s, r)
                                                    })
                                                }
                                            }
                                        },
                                        hs = class {
                                            constructor() {
                                                this.privateNames = new Set, this.loneAccessors = new Map, this.undefinedPrivateNames = new Map
                                            }
                                        },
                                        ls = class {
                                            constructor(e) {
                                                this.parser = void 0, this.stack = [], this.undefinedPrivateNames = new Map, this.parser = e
                                            }
                                            current() {
                                                return this.stack[this.stack.length - 1]
                                            }
                                            enter() {
                                                this.stack.push(new hs)
                                            }
                                            exit() {
                                                let e = this.stack.pop(),
                                                    t = this.current();
                                                for (let [s, r] of Array.from(e.undefinedPrivateNames)) t ? t.undefinedPrivateNames.has(s) || t.undefinedPrivateNames.set(s, r) : this.parser.raise(pe.InvalidPrivateFieldResolution, {
                                                    at: r,
                                                    identifierName: s
                                                })
                                            }
                                            declarePrivateName(e, t, s) {
                                                let {
                                                    privateNames: r,
                                                    loneAccessors: i,
                                                    undefinedPrivateNames: a
                                                } = this.current(), n = r.has(e);
                                                if (t & wt) {
                                                    let s = n && i.get(e);
                                                    if (s) {
                                                        let r = s & Tt,
                                                            a = t & Tt;
                                                        n = (s & wt) === (t & wt) || r !== a, n || i.delete(e)
                                                    } else n || i.set(e, t)
                                                }
                                                n && this.parser.raise(pe.PrivateNameRedeclaration, {
                                                    at: s,
                                                    identifierName: e
                                                }), r.add(e), a.delete(e)
                                            }
                                            usePrivateName(e, t) {
                                                let s;
                                                for (s of this.stack)
                                                    if (s.privateNames.has(e)) return;
                                                s ? s.undefinedPrivateNames.set(e, t) : this.parser.raise(pe.InvalidPrivateFieldResolution, {
                                                    at: t,
                                                    identifierName: e
                                                })
                                            }
                                        },
                                        ps = 0,
                                        cs = 1,
                                        us = 2,
                                        ds = 3,
                                        ms = class {
                                            constructor() {
                                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ps;
                                                this.type = void 0, this.type = e
                                            }
                                            canBeArrowParameterDeclaration() {
                                                return this.type === us || this.type === cs
                                            }
                                            isCertainlyParameterDeclaration() {
                                                return this.type === ds
                                            }
                                        },
                                        fs = class extends ms {
                                            constructor(e) {
                                                super(e), this.declarationErrors = new Map
                                            }
                                            recordDeclarationError(e, t) {
                                                let {
                                                    at: s
                                                } = t, r = s.index;
                                                this.declarationErrors.set(r, [e, s])
                                            }
                                            clearDeclarationError(e) {
                                                this.declarationErrors.delete(e)
                                            }
                                            iterateErrors(e) {
                                                this.declarationErrors.forEach(e)
                                            }
                                        },
                                        ys = class {
                                            constructor(e) {
                                                this.parser = void 0, this.stack = [new ms], this.parser = e
                                            }
                                            enter(e) {
                                                this.stack.push(e)
                                            }
                                            exit() {
                                                this.stack.pop()
                                            }
                                            recordParameterInitializerError(e, t) {
                                                let {
                                                    at: s
                                                } = t, r = {
                                                    at: s.loc.start
                                                }, {
                                                    stack: i
                                                } = this, a = i.length - 1, n = i[a];
                                                for (; !n.isCertainlyParameterDeclaration();) {
                                                    if (!n.canBeArrowParameterDeclaration()) return;
                                                    n.recordDeclarationError(e, r), n = i[--a]
                                                }
                                                this.parser.raise(e, r)
                                            }
                                            recordArrowParameterBindingError(e, t) {
                                                let {
                                                    at: s
                                                } = t, {
                                                    stack: r
                                                } = this, i = r[r.length - 1], a = {
                                                    at: s.loc.start
                                                };
                                                if (i.isCertainlyParameterDeclaration()) this.parser.raise(e, a);
                                                else {
                                                    if (!i.canBeArrowParameterDeclaration()) return;
                                                    i.recordDeclarationError(e, a)
                                                }
                                            }
                                            recordAsyncArrowParametersError(e) {
                                                let {
                                                    at: t
                                                } = e, {
                                                    stack: s
                                                } = this, r = s.length - 1, i = s[r];
                                                for (; i.canBeArrowParameterDeclaration();) i.type === us && i.recordDeclarationError(pe.AwaitBindingIdentifier, {
                                                    at: t
                                                }), i = s[--r]
                                            }
                                            validateAsPattern() {
                                                let {
                                                    stack: e
                                                } = this, t = e[e.length - 1];
                                                t.canBeArrowParameterDeclaration() && t.iterateErrors((t => {
                                                    let [s, r] = t;
                                                    this.parser.raise(s, {
                                                        at: r
                                                    });
                                                    let i = e.length - 2,
                                                        a = e[i];
                                                    for (; a.canBeArrowParameterDeclaration();) a.clearDeclarationError(r.index), a = e[--i]
                                                }))
                                            }
                                        };

                                    function xs() {
                                        return new ms(ds)
                                    }

                                    function gs() {
                                        return new fs(cs)
                                    }

                                    function Ps() {
                                        return new fs(us)
                                    }

                                    function bs() {
                                        return new ms
                                    }
                                    var Ts = 0,
                                        As = 1,
                                        Es = 2,
                                        ws = 4,
                                        Ss = 8,
                                        vs = class {
                                            constructor() {
                                                this.stacks = []
                                            }
                                            enter(e) {
                                                this.stacks.push(e)
                                            }
                                            exit() {
                                                this.stacks.pop()
                                            }
                                            currentFlags() {
                                                return this.stacks[this.stacks.length - 1]
                                            }
                                            get hasAwait() {
                                                return (this.currentFlags() & Es) > 0
                                            }
                                            get hasYield() {
                                                return (this.currentFlags() & As) > 0
                                            }
                                            get hasReturn() {
                                                return (this.currentFlags() & ws) > 0
                                            }
                                            get hasIn() {
                                                return (this.currentFlags() & Ss) > 0
                                            }
                                        };

                                    function Cs(e, t) {
                                        return (e ? Es : 0) | (t ? As : 0)
                                    }
                                    var Ns = class extends os {
                                            addExtra(e, t, s) {
                                                let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                                                if (!e) return;
                                                let i = e.extra = e.extra || {};
                                                r ? i[t] = s : Object.defineProperty(i, t, {
                                                    enumerable: r,
                                                    value: s
                                                })
                                            }
                                            isContextual(e) {
                                                return this.state.type === e && !this.state.containsEsc
                                            }
                                            isUnparsedContextual(e, t) {
                                                let s = e + t.length;
                                                if (this.input.slice(e, s) === t) {
                                                    let e = this.input.charCodeAt(s);
                                                    return !(Ee(e) || 55296 === (64512 & e))
                                                }
                                                return !1
                                            }
                                            isLookaheadContextual(e) {
                                                let t = this.nextTokenStart();
                                                return this.isUnparsedContextual(t, e)
                                            }
                                            eatContextual(e) {
                                                return !!this.isContextual(e) && (this.next(), !0)
                                            }
                                            expectContextual(e, t) {
                                                if (!this.eatContextual(e)) {
                                                    if (null != t) throw this.raise(t, {
                                                        at: this.state.startLoc
                                                    });
                                                    this.unexpected(null, e)
                                                }
                                            }
                                            canInsertSemicolon() {
                                                return this.match(137) || this.match(8) || this.hasPrecedingLineBreak()
                                            }
                                            hasPrecedingLineBreak() {
                                                return _t.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start))
                                            }
                                            hasFollowingLineBreak() {
                                                return Vt.lastIndex = this.state.end, Vt.test(this.input)
                                            }
                                            isLineTerminator() {
                                                return this.eat(13) || this.canInsertSemicolon()
                                            }
                                            semicolon() {
                                                (arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? this.eat(13) : this.isLineTerminator()) || this.raise(pe.MissingSemicolon, {
                                                    at: this.state.lastTokEndLoc
                                                })
                                            }
                                            expect(e, t) {
                                                this.eat(e) || this.unexpected(t, e)
                                            }
                                            tryParse(e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.clone(),
                                                    s = {
                                                        node: null
                                                    };
                                                try {
                                                    let r = e((function() {
                                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                                        throw s.node = e, s
                                                    }));
                                                    if (this.state.errors.length > t.errors.length) {
                                                        let e = this.state;
                                                        return this.state = t, this.state.tokensLength = e.tokensLength, {
                                                            node: r,
                                                            error: e.errors[t.errors.length],
                                                            thrown: !1,
                                                            aborted: !1,
                                                            failState: e
                                                        }
                                                    }
                                                    return {
                                                        node: r,
                                                        error: null,
                                                        thrown: !1,
                                                        aborted: !1,
                                                        failState: null
                                                    }
                                                } catch (r) {
                                                    let e = this.state;
                                                    if (this.state = t, r instanceof SyntaxError) return {
                                                        node: null,
                                                        error: r,
                                                        thrown: !0,
                                                        aborted: !1,
                                                        failState: e
                                                    };
                                                    if (r === s) return {
                                                        node: s.node,
                                                        error: null,
                                                        thrown: !1,
                                                        aborted: !0,
                                                        failState: e
                                                    };
                                                    throw r
                                                }
                                            }
                                            checkExpressionErrors(e, t) {
                                                if (!e) return !1;
                                                let {
                                                    shorthandAssignLoc: s,
                                                    doubleProtoLoc: r,
                                                    privateKeyLoc: i,
                                                    optionalParametersLoc: a
                                                } = e;
                                                if (!t) return !!s || !!r || !!a || !!i;
                                                null != s && this.raise(pe.InvalidCoverInitializedName, {
                                                    at: s
                                                }), null != r && this.raise(pe.DuplicateProto, {
                                                    at: r
                                                }), null != i && this.raise(pe.UnexpectedPrivateField, {
                                                    at: i
                                                }), null != a && this.unexpected(a)
                                            }
                                            isLiteralPropertyName() {
                                                return I(this.state.type)
                                            }
                                            isPrivateName(e) {
                                                return "PrivateName" === e.type
                                            }
                                            getPrivateNameSV(e) {
                                                return e.id.name
                                            }
                                            hasPropertyAsPrivateName(e) {
                                                return ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) && this.isPrivateName(e.property)
                                            }
                                            isObjectProperty(e) {
                                                return "ObjectProperty" === e.type
                                            }
                                            isObjectMethod(e) {
                                                return "ObjectMethod" === e.type
                                            }
                                            initializeScopes() {
                                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "module" === this.options.sourceType,
                                                    t = this.state.labels;
                                                this.state.labels = [];
                                                let s = this.exportedIdentifiers;
                                                this.exportedIdentifiers = new Set;
                                                let r = this.inModule;
                                                this.inModule = e;
                                                let i = this.scope,
                                                    a = this.getScopeHandler();
                                                this.scope = new a(this, e);
                                                let n = this.prodParam;
                                                this.prodParam = new vs;
                                                let o = this.classScope;
                                                this.classScope = new ls(this);
                                                let h = this.expressionScope;
                                                return this.expressionScope = new ys(this), () => {
                                                    this.state.labels = t, this.exportedIdentifiers = s, this.inModule = r, this.scope = i, this.prodParam = n, this.classScope = o, this.expressionScope = h
                                                }
                                            }
                                            enterInitialScopes() {
                                                let e = Ts;
                                                this.inModule && (e |= Es), this.scope.enter(je), this.prodParam.enter(e)
                                            }
                                            checkDestructuringPrivate(e) {
                                                let {
                                                    privateKeyLoc: t
                                                } = e;
                                                null !== t && this.expectPlugin("destructuringPrivate", t)
                                            }
                                        },
                                        Is = class {
                                            constructor() {
                                                this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null
                                            }
                                        },
                                        ks = class {
                                            constructor(e, t, s) {
                                                this.type = "", this.start = t, this.end = 0, this.loc = new J(s), null != e && e.options.ranges && (this.range = [t, 0]), null != e && e.filename && (this.loc.filename = e.filename)
                                            }
                                        },
                                        Ls = ks.prototype;

                                    function Ms(e) {
                                        return Os(e)
                                    }

                                    function Os(e) {
                                        let {
                                            type: t,
                                            start: s,
                                            end: r,
                                            loc: i,
                                            range: a,
                                            extra: n,
                                            name: o
                                        } = e, h = Object.create(Ls);
                                        return h.type = t, h.start = s, h.end = r, h.loc = i, h.range = a, h.extra = n, h.name = o, "Placeholder" === t && (h.expectedNode = e.expectedNode), h
                                    }

                                    function Ds(e) {
                                        let {
                                            type: t,
                                            start: s,
                                            end: r,
                                            loc: i,
                                            range: a,
                                            extra: n
                                        } = e;
                                        if ("Placeholder" === t) return Ms(e);
                                        let o = Object.create(Ls);
                                        return o.type = t, o.start = s, o.end = r, o.loc = i, o.range = a, void 0 !== e.raw ? o.raw = e.raw : o.extra = n, o.value = e.value, o
                                    }
                                    Ls.__clone = function() {
                                        let e = new ks(void 0, this.start, this.loc.start),
                                            t = Object.keys(this);
                                        for (let s = 0, r = t.length; s < r; s++) {
                                            let r = t[s];
                                            "leadingComments" !== r && "trailingComments" !== r && "innerComments" !== r && (e[r] = this[r])
                                        }
                                        return e
                                    };
                                    var Fs = class extends Ns {
                                            startNode() {
                                                return new ks(this, this.state.start, this.state.startLoc)
                                            }
                                            startNodeAt(e) {
                                                return new ks(this, e.index, e)
                                            }
                                            startNodeAtNode(e) {
                                                return this.startNodeAt(e.loc.start)
                                            }
                                            finishNode(e, t) {
                                                return this.finishNodeAt(e, t, this.state.lastTokEndLoc)
                                            }
                                            finishNodeAt(e, t, s) {
                                                return e.type = t, e.end = s.index, e.loc.end = s, this.options.ranges && (e.range[1] = s.index), this.options.attachComment && this.processComment(e), e
                                            }
                                            resetStartLocation(e, t) {
                                                e.start = t.index, e.loc.start = t, this.options.ranges && (e.range[0] = t.index)
                                            }
                                            resetEndLocation(e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.lastTokEndLoc;
                                                e.end = t.index, e.loc.end = t, this.options.ranges && (e.range[1] = t.index)
                                            }
                                            resetStartLocationFromNode(e, t) {
                                                this.resetStartLocation(e, t.loc.start)
                                            }
                                        },
                                        Bs = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]),
                                        js = le `flow` ({
                                            AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
                                            AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
                                            AssignReservedType: e => {
                                                let {
                                                    reservedType: t
                                                } = e;
                                                return `Cannot overwrite reserved type ${t}.`
                                            },
                                            DeclareClassElement: "The `declare` modifier can only appear on class fields.",
                                            DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
                                            DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
                                            EnumBooleanMemberNotInitialized: e => {
                                                let {
                                                    memberName: t,
                                                    enumName: s
                                                } = e;
                                                return `Boolean enum members need to be initialized. Use either \`${t} = true,\` or \`${t} = false,\` in enum \`${s}\`.`
                                            },
                                            EnumDuplicateMemberName: e => {
                                                let {
                                                    memberName: t,
                                                    enumName: s
                                                } = e;
                                                return `Enum member names need to be unique, but the name \`${t}\` has already been used before in enum \`${s}\`.`
                                            },
                                            EnumInconsistentMemberValues: e => {
                                                let {
                                                    enumName: t
                                                } = e;
                                                return `Enum \`${t}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`
                                            },
                                            EnumInvalidExplicitType: e => {
                                                let {
                                                    invalidEnumType: t,
                                                    enumName: s
                                                } = e;
                                                return `Enum type \`${t}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${s}\`.`
                                            },
                                            EnumInvalidExplicitTypeUnknownSupplied: e => {
                                                let {
                                                    enumName: t
                                                } = e;
                                                return `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`
                                            },
                                            EnumInvalidMemberInitializerPrimaryType: e => {
                                                let {
                                                    enumName: t,
                                                    memberName: s,
                                                    explicitType: r
                                                } = e;
                                                return `Enum \`${t}\` has type \`${r}\`, so the initializer of \`${s}\` needs to be a ${r} literal.`
                                            },
                                            EnumInvalidMemberInitializerSymbolType: e => {
                                                let {
                                                    enumName: t,
                                                    memberName: s
                                                } = e;
                                                return `Symbol enum members cannot be initialized. Use \`${s},\` in enum \`${t}\`.`
                                            },
                                            EnumInvalidMemberInitializerUnknownType: e => {
                                                let {
                                                    enumName: t,
                                                    memberName: s
                                                } = e;
                                                return `The enum member initializer for \`${s}\` needs to be a literal (either a boolean, number, or string) in enum \`${t}\`.`
                                            },
                                            EnumInvalidMemberName: e => {
                                                let {
                                                    enumName: t,
                                                    memberName: s,
                                                    suggestion: r
                                                } = e;
                                                return `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${s}\`, consider using \`${r}\`, in enum \`${t}\`.`
                                            },
                                            EnumNumberMemberNotInitialized: e => {
                                                let {
                                                    enumName: t,
                                                    memberName: s
                                                } = e;
                                                return `Number enum members need to be initialized, e.g. \`${s} = 1\` in enum \`${t}\`.`
                                            },
                                            EnumStringMemberInconsistentlyInitailized: e => {
                                                let {
                                                    enumName: t
                                                } = e;
                                                return `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${t}\`.`
                                            },
                                            GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
                                            ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
                                            ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
                                            InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
                                            InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
                                            InexactVariance: "Explicit inexact syntax cannot have variance.",
                                            InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
                                            MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
                                            NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
                                            NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
                                            PatternIsOptional: Object.assign({
                                                message: "A binding pattern parameter cannot be optional in an implementation signature."
                                            }, {
                                                reasonCode: "OptionalBindingPattern"
                                            }),
                                            SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
                                            SpreadVariance: "Spread properties cannot have variance.",
                                            ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
                                            ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
                                            ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
                                            ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
                                            ThisParamNoDefault: "The `this` parameter may not have a default value.",
                                            TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
                                            TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
                                            UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
                                            UnexpectedReservedType: e => {
                                                let {
                                                    reservedType: t
                                                } = e;
                                                return `Unexpected reserved type ${t}.`
                                            },
                                            UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
                                            UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
                                            UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
                                            UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
                                            UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
                                            UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
                                            UnsupportedDeclareExportKind: e => {
                                                let {
                                                    unsupportedExportKind: t,
                                                    suggestion: s
                                                } = e;
                                                return `\`declare export ${t}\` is not supported. Use \`${s}\` instead.`
                                            },
                                            UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
                                            UnterminatedFlowComment: "Unterminated flow-comment."
                                        });

                                    function Rs(e) {
                                        return "DeclareExportAllDeclaration" === e.type || "DeclareExportDeclaration" === e.type && (!e.declaration || "TypeAlias" !== e.declaration.type && "InterfaceDeclaration" !== e.declaration.type)
                                    }

                                    function Us(e) {
                                        return "type" === e.importKind || "typeof" === e.importKind
                                    }

                                    function _s(e) {
                                        return N(e) && 97 !== e
                                    }
                                    var zs = {
                                        const: "declare export var",
                                        let: "declare export var",
                                        type: "export type",
                                        interface: "export interface"
                                    };

                                    function Hs(e, t) {
                                        let s = [],
                                            r = [];
                                        for (let i = 0; i < e.length; i++)(t(e[i], i, e) ? s : r).push(e[i]);
                                        return [s, r]
                                    }
                                    var $s = /\*?\s*@((?:no)?flow)\b/,
                                        Vs = e => class extends e {
                                            constructor() {
                                                super(...arguments), this.flowPragma = void 0
                                            }
                                            getScopeHandler() {
                                                return Ot
                                            }
                                            shouldParseTypes() {
                                                return this.getPluginOption("flow", "all") || "flow" === this.flowPragma
                                            }
                                            shouldParseEnums() {
                                                return !!this.getPluginOption("flow", "enums")
                                            }
                                            finishToken(e, t) {
                                                131 !== e && 13 !== e && 28 !== e && void 0 === this.flowPragma && (this.flowPragma = null), super.finishToken(e, t)
                                            }
                                            addComment(e) {
                                                if (void 0 === this.flowPragma) {
                                                    let t = $s.exec(e.value);
                                                    if (t)
                                                        if ("flow" === t[1]) this.flowPragma = "flow";
                                                        else {
                                                            if ("noflow" !== t[1]) throw new Error("Unexpected flow pragma");
                                                            this.flowPragma = "noflow"
                                                        }
                                                }
                                                super.addComment(e)
                                            }
                                            flowParseTypeInitialiser(e) {
                                                let t = this.state.inType;
                                                this.state.inType = !0, this.expect(e || 14);
                                                let s = this.flowParseType();
                                                return this.state.inType = t, s
                                            }
                                            flowParsePredicate() {
                                                let e = this.startNode(),
                                                    t = this.state.startLoc;
                                                return this.next(), this.expectContextual(108), this.state.lastTokStart > t.index + 1 && this.raise(js.UnexpectedSpaceBetweenModuloChecks, {
                                                    at: t
                                                }), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate")
                                            }
                                            flowParseTypeAndPredicateInitialiser() {
                                                let e = this.state.inType;
                                                this.state.inType = !0, this.expect(14);
                                                let t = null,
                                                    s = null;
                                                return this.match(54) ? (this.state.inType = e, s = this.flowParsePredicate()) : (t = this.flowParseType(), this.state.inType = e, this.match(54) && (s = this.flowParsePredicate())), [t, s]
                                            }
                                            flowParseDeclareClass(e) {
                                                return this.next(), this.flowParseInterfaceish(e, !0), this.finishNode(e, "DeclareClass")
                                            }
                                            flowParseDeclareFunction(e) {
                                                this.next();
                                                let t = e.id = this.parseIdentifier(),
                                                    s = this.startNode(),
                                                    r = this.startNode();
                                                this.match(47) ? s.typeParameters = this.flowParseTypeParameterDeclaration() : s.typeParameters = null, this.expect(10);
                                                let i = this.flowParseFunctionTypeParams();
                                                return s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), [s.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), r.typeAnnotation = this.finishNode(s, "FunctionTypeAnnotation"), t.typeAnnotation = this.finishNode(r, "TypeAnnotation"), this.resetEndLocation(t), this.semicolon(), this.scope.declareName(e.id.name, bt, e.id.loc.start), this.finishNode(e, "DeclareFunction")
                                            }
                                            flowParseDeclare(e, t) {
                                                return this.match(80) ? this.flowParseDeclareClass(e) : this.match(68) ? this.flowParseDeclareFunction(e) : this.match(74) ? this.flowParseDeclareVariable(e) : this.eatContextual(125) ? this.match(16) ? this.flowParseDeclareModuleExports(e) : (t && this.raise(js.NestedDeclareModule, {
                                                    at: this.state.lastTokStartLoc
                                                }), this.flowParseDeclareModule(e)) : this.isContextual(128) ? this.flowParseDeclareTypeAlias(e) : this.isContextual(129) ? this.flowParseDeclareOpaqueType(e) : this.isContextual(127) ? this.flowParseDeclareInterface(e) : this.match(82) ? this.flowParseDeclareExportDeclaration(e, t) : void this.unexpected()
                                            }
                                            flowParseDeclareVariable(e) {
                                                return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(!0), this.scope.declareName(e.id.name, lt, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable")
                                            }
                                            flowParseDeclareModule(e) {
                                                this.scope.enter(Be), this.match(131) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
                                                let t = e.body = this.startNode(),
                                                    s = t.body = [];
                                                for (this.expect(5); !this.match(8);) {
                                                    let e = this.startNode();
                                                    this.match(83) ? (this.next(), !this.isContextual(128) && !this.match(87) && this.raise(js.InvalidNonTypeImportInDeclareModule, {
                                                        at: this.state.lastTokStartLoc
                                                    }), super.parseImport(e)) : (this.expectContextual(123, js.UnsupportedStatementInDeclareModule), e = this.flowParseDeclare(e, !0)), s.push(e)
                                                }
                                                this.scope.exit(), this.expect(8), this.finishNode(t, "BlockStatement");
                                                let r = null,
                                                    i = !1;
                                                return s.forEach((e => {
                                                    Rs(e) ? ("CommonJS" === r && this.raise(js.AmbiguousDeclareModuleKind, {
                                                        at: e
                                                    }), r = "ES") : "DeclareModuleExports" === e.type && (i && this.raise(js.DuplicateDeclareModuleExports, {
                                                        at: e
                                                    }), "ES" === r && this.raise(js.AmbiguousDeclareModuleKind, {
                                                        at: e
                                                    }), r = "CommonJS", i = !0)
                                                })), e.kind = r || "CommonJS", this.finishNode(e, "DeclareModule")
                                            }
                                            flowParseDeclareExportDeclaration(e, t) {
                                                if (this.expect(82), this.eat(65)) return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration");
                                                if (this.match(75) || this.isLet() || (this.isContextual(128) || this.isContextual(127)) && !t) {
                                                    let e = this.state.value;
                                                    throw this.raise(js.UnsupportedDeclareExportKind, {
                                                        at: this.state.startLoc,
                                                        unsupportedExportKind: e,
                                                        suggestion: zs[e]
                                                    })
                                                }
                                                return this.match(74) || this.match(68) || this.match(80) || this.isContextual(129) ? (e.declaration = this.flowParseDeclare(this.startNode()), e.default = !1, this.finishNode(e, "DeclareExportDeclaration")) : this.match(55) || this.match(5) || this.isContextual(127) || this.isContextual(128) || this.isContextual(129) ? ("ExportNamedDeclaration" === (e = this.parseExport(e, null)).type && (e.type = "ExportDeclaration", e.default = !1, delete e.exportKind), e.type = "Declare" + e.type, e) : void this.unexpected()
                                            }
                                            flowParseDeclareModuleExports(e) {
                                                return this.next(), this.expectContextual(109), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports")
                                            }
                                            flowParseDeclareTypeAlias(e) {
                                                this.next();
                                                let t = this.flowParseTypeAlias(e);
                                                return t.type = "DeclareTypeAlias", t
                                            }
                                            flowParseDeclareOpaqueType(e) {
                                                this.next();
                                                let t = this.flowParseOpaqueType(e, !0);
                                                return t.type = "DeclareOpaqueType", t
                                            }
                                            flowParseDeclareInterface(e) {
                                                return this.next(), this.flowParseInterfaceish(e, !1), this.finishNode(e, "DeclareInterface")
                                            }
                                            flowParseInterfaceish(e, t) {
                                                if (e.id = this.flowParseRestrictedIdentifier(!t, !0), this.scope.declareName(e.id.name, t ? pt : ot, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], e.implements = [], e.mixins = [], this.eat(81))
                                                    do {
                                                        e.extends.push(this.flowParseInterfaceExtends())
                                                    } while (!t && this.eat(12));
                                                if (t) {
                                                    if (this.eatContextual(115))
                                                        do {
                                                            e.mixins.push(this.flowParseInterfaceExtends())
                                                        } while (this.eat(12));
                                                    if (this.eatContextual(111))
                                                        do {
                                                            e.implements.push(this.flowParseInterfaceExtends())
                                                        } while (this.eat(12))
                                                }
                                                e.body = this.flowParseObjectType({
                                                    allowStatic: t,
                                                    allowExact: !1,
                                                    allowSpread: !1,
                                                    allowProto: t,
                                                    allowInexact: !1
                                                })
                                            }
                                            flowParseInterfaceExtends() {
                                                let e = this.startNode();
                                                return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends")
                                            }
                                            flowParseInterface(e) {
                                                return this.flowParseInterfaceish(e, !1), this.finishNode(e, "InterfaceDeclaration")
                                            }
                                            checkNotUnderscore(e) {
                                                "_" === e && this.raise(js.UnexpectedReservedUnderscore, {
                                                    at: this.state.startLoc
                                                })
                                            }
                                            checkReservedType(e, t, s) {
                                                Bs.has(e) && this.raise(s ? js.AssignReservedType : js.UnexpectedReservedType, {
                                                    at: t,
                                                    reservedType: e
                                                })
                                            }
                                            flowParseRestrictedIdentifier(e, t) {
                                                return this.checkReservedType(this.state.value, this.state.startLoc, t), this.parseIdentifier(e)
                                            }
                                            flowParseTypeAlias(e) {
                                                return e.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(e.id.name, ot, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias")
                                            }
                                            flowParseOpaqueType(e, t) {
                                                return this.expectContextual(128), e.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(e.id.name, ot, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, t || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType")
                                            }
                                            flowParseTypeParameter() {
                                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                                    t = this.state.startLoc,
                                                    s = this.startNode(),
                                                    r = this.flowParseVariance(),
                                                    i = this.flowParseTypeAnnotatableIdentifier();
                                                return s.name = i.name, s.variance = r, s.bound = i.typeAnnotation, this.match(29) ? (this.eat(29), s.default = this.flowParseType()) : e && this.raise(js.MissingTypeParamDefault, {
                                                    at: t
                                                }), this.finishNode(s, "TypeParameter")
                                            }
                                            flowParseTypeParameterDeclaration() {
                                                let e = this.state.inType,
                                                    t = this.startNode();
                                                t.params = [], this.state.inType = !0, this.match(47) || this.match(140) ? this.next() : this.unexpected();
                                                let s = !1;
                                                do {
                                                    let e = this.flowParseTypeParameter(s);
                                                    t.params.push(e), e.default && (s = !0), this.match(48) || this.expect(12)
                                                } while (!this.match(48));
                                                return this.expect(48), this.state.inType = e, this.finishNode(t, "TypeParameterDeclaration")
                                            }
                                            flowParseTypeParameterInstantiation() {
                                                let e = this.startNode(),
                                                    t = this.state.inType;
                                                e.params = [], this.state.inType = !0, this.expect(47);
                                                let s = this.state.noAnonFunctionType;
                                                for (this.state.noAnonFunctionType = !1; !this.match(48);) e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
                                                return this.state.noAnonFunctionType = s, this.expect(48), this.state.inType = t, this.finishNode(e, "TypeParameterInstantiation")
                                            }
                                            flowParseTypeParameterInstantiationCallOrNew() {
                                                let e = this.startNode(),
                                                    t = this.state.inType;
                                                for (e.params = [], this.state.inType = !0, this.expect(47); !this.match(48);) e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
                                                return this.expect(48), this.state.inType = t, this.finishNode(e, "TypeParameterInstantiation")
                                            }
                                            flowParseInterfaceType() {
                                                let e = this.startNode();
                                                if (this.expectContextual(127), e.extends = [], this.eat(81))
                                                    do {
                                                        e.extends.push(this.flowParseInterfaceExtends())
                                                    } while (this.eat(12));
                                                return e.body = this.flowParseObjectType({
                                                    allowStatic: !1,
                                                    allowExact: !1,
                                                    allowSpread: !1,
                                                    allowProto: !1,
                                                    allowInexact: !1
                                                }), this.finishNode(e, "InterfaceTypeAnnotation")
                                            }
                                            flowParseObjectPropertyKey() {
                                                return this.match(132) || this.match(131) ? super.parseExprAtom() : this.parseIdentifier(!0)
                                            }
                                            flowParseObjectTypeIndexer(e, t, s) {
                                                return e.static = t, 14 === this.lookahead().type ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = s, this.finishNode(e, "ObjectTypeIndexer")
                                            }
                                            flowParseObjectTypeInternalSlot(e, t) {
                                                return e.static = t, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = !0, e.optional = !1, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = !1, this.eat(17) && (e.optional = !0), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot")
                                            }
                                            flowParseObjectTypeMethodish(e) {
                                                for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(!0), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) e.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
                                                return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation")
                                            }
                                            flowParseObjectTypeCallProperty(e, t) {
                                                let s = this.startNode();
                                                return e.static = t, e.value = this.flowParseObjectTypeMethodish(s), this.finishNode(e, "ObjectTypeCallProperty")
                                            }
                                            flowParseObjectType(e) {
                                                let {
                                                    allowStatic: t,
                                                    allowExact: s,
                                                    allowSpread: r,
                                                    allowProto: i,
                                                    allowInexact: a
                                                } = e, n = this.state.inType;
                                                this.state.inType = !0;
                                                let o = this.startNode();
                                                o.callProperties = [], o.properties = [], o.indexers = [], o.internalSlots = [];
                                                let h, l, p = !1;
                                                for (s && this.match(6) ? (this.expect(6), h = 9, l = !0) : (this.expect(5), h = 8, l = !1), o.exact = l; !this.match(h);) {
                                                    let e = !1,
                                                        s = null,
                                                        n = null,
                                                        h = this.startNode();
                                                    if (i && this.isContextual(116)) {
                                                        let e = this.lookahead();
                                                        14 !== e.type && 17 !== e.type && (this.next(), s = this.state.startLoc, t = !1)
                                                    }
                                                    if (t && this.isContextual(104)) {
                                                        let t = this.lookahead();
                                                        14 !== t.type && 17 !== t.type && (this.next(), e = !0)
                                                    }
                                                    let c = this.flowParseVariance();
                                                    if (this.eat(0)) null != s && this.unexpected(s), this.eat(0) ? (c && this.unexpected(c.loc.start), o.internalSlots.push(this.flowParseObjectTypeInternalSlot(h, e))) : o.indexers.push(this.flowParseObjectTypeIndexer(h, e, c));
                                                    else if (this.match(10) || this.match(47)) null != s && this.unexpected(s), c && this.unexpected(c.loc.start), o.callProperties.push(this.flowParseObjectTypeCallProperty(h, e));
                                                    else {
                                                        let t = "init";
                                                        (this.isContextual(98) || this.isContextual(103)) && I(this.lookahead().type) && (t = this.state.value, this.next());
                                                        let i = this.flowParseObjectTypeProperty(h, e, s, c, t, r, null != a ? a : !l);
                                                        null === i ? (p = !0, n = this.state.lastTokStartLoc) : o.properties.push(i)
                                                    }
                                                    this.flowObjectTypeSemicolon(), n && !this.match(8) && !this.match(9) && this.raise(js.UnexpectedExplicitInexactInObject, {
                                                        at: n
                                                    })
                                                }
                                                this.expect(h), r && (o.inexact = p);
                                                let c = this.finishNode(o, "ObjectTypeAnnotation");
                                                return this.state.inType = n, c
                                            }
                                            flowParseObjectTypeProperty(e, t, s, r, i, a, n) {
                                                if (this.eat(21)) return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (a ? n || this.raise(js.InexactInsideExact, {
                                                    at: this.state.lastTokStartLoc
                                                }) : this.raise(js.InexactInsideNonObject, {
                                                    at: this.state.lastTokStartLoc
                                                }), r && this.raise(js.InexactVariance, {
                                                    at: r
                                                }), null) : (a || this.raise(js.UnexpectedSpreadType, {
                                                    at: this.state.lastTokStartLoc
                                                }), null != s && this.unexpected(s), r && this.raise(js.SpreadVariance, {
                                                    at: r
                                                }), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty")); {
                                                    e.key = this.flowParseObjectPropertyKey(), e.static = t, e.proto = null != s, e.kind = i;
                                                    let n = !1;
                                                    return this.match(47) || this.match(10) ? (e.method = !0, null != s && this.unexpected(s), r && this.unexpected(r.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), ("get" === i || "set" === i) && this.flowCheckGetterSetterParams(e), !a && "constructor" === e.key.name && e.value.this && this.raise(js.ThisParamBannedInConstructor, {
                                                        at: e.value.this
                                                    })) : ("init" !== i && this.unexpected(), e.method = !1, this.eat(17) && (n = !0), e.value = this.flowParseTypeInitialiser(), e.variance = r), e.optional = n, this.finishNode(e, "ObjectTypeProperty")
                                                }
                                            }
                                            flowCheckGetterSetterParams(e) {
                                                let t = "get" === e.kind ? 0 : 1,
                                                    s = e.value.params.length + (e.value.rest ? 1 : 0);
                                                e.value.this && this.raise("get" === e.kind ? js.GetterMayNotHaveThisParam : js.SetterMayNotHaveThisParam, {
                                                    at: e.value.this
                                                }), s !== t && this.raise("get" === e.kind ? pe.BadGetterArity : pe.BadSetterArity, {
                                                    at: e
                                                }), "set" === e.kind && e.value.rest && this.raise(pe.BadSetterRestParameter, {
                                                    at: e
                                                })
                                            }
                                            flowObjectTypeSemicolon() {
                                                !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected()
                                            }
                                            flowParseQualifiedTypeIdentifier(e, t) {
                                                null != e || (e = this.state.startLoc);
                                                let s = t || this.flowParseRestrictedIdentifier(!0);
                                                for (; this.eat(16);) {
                                                    let t = this.startNodeAt(e);
                                                    t.qualification = s, t.id = this.flowParseRestrictedIdentifier(!0), s = this.finishNode(t, "QualifiedTypeIdentifier")
                                                }
                                                return s
                                            }
                                            flowParseGenericType(e, t) {
                                                let s = this.startNodeAt(e);
                                                return s.typeParameters = null, s.id = this.flowParseQualifiedTypeIdentifier(e, t), this.match(47) && (s.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(s, "GenericTypeAnnotation")
                                            }
                                            flowParseTypeofType() {
                                                let e = this.startNode();
                                                return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation")
                                            }
                                            flowParseTupleType() {
                                                let e = this.startNode();
                                                for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3));) this.expect(12);
                                                return this.expect(3), this.finishNode(e, "TupleTypeAnnotation")
                                            }
                                            flowParseFunctionTypeParam(e) {
                                                let t = null,
                                                    s = !1,
                                                    r = null,
                                                    i = this.startNode(),
                                                    a = this.lookahead(),
                                                    n = 78 === this.state.type;
                                                return 14 === a.type || 17 === a.type ? (n && !e && this.raise(js.ThisParamMustBeFirst, {
                                                    at: i
                                                }), t = this.parseIdentifier(n), this.eat(17) && (s = !0, n && this.raise(js.ThisParamMayNotBeOptional, {
                                                    at: i
                                                })), r = this.flowParseTypeInitialiser()) : r = this.flowParseType(), i.name = t, i.optional = s, i.typeAnnotation = r, this.finishNode(i, "FunctionTypeParam")
                                            }
                                            reinterpretTypeAsFunctionTypeParam(e) {
                                                let t = this.startNodeAt(e.loc.start);
                                                return t.name = null, t.optional = !1, t.typeAnnotation = e, this.finishNode(t, "FunctionTypeParam")
                                            }
                                            flowParseFunctionTypeParams() {
                                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                    t = null,
                                                    s = null;
                                                for (this.match(78) && (s = this.flowParseFunctionTypeParam(!0), s.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) e.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
                                                return this.eat(21) && (t = this.flowParseFunctionTypeParam(!1)), {
                                                    params: e,
                                                    rest: t,
                                                    _this: s
                                                }
                                            }
                                            flowIdentToTypeAnnotation(e, t, s) {
                                                switch (s.name) {
                                                    case "any":
                                                        return this.finishNode(t, "AnyTypeAnnotation");
                                                    case "bool":
                                                    case "boolean":
                                                        return this.finishNode(t, "BooleanTypeAnnotation");
                                                    case "mixed":
                                                        return this.finishNode(t, "MixedTypeAnnotation");
                                                    case "empty":
                                                        return this.finishNode(t, "EmptyTypeAnnotation");
                                                    case "number":
                                                        return this.finishNode(t, "NumberTypeAnnotation");
                                                    case "string":
                                                        return this.finishNode(t, "StringTypeAnnotation");
                                                    case "symbol":
                                                        return this.finishNode(t, "SymbolTypeAnnotation");
                                                    default:
                                                        return this.checkNotUnderscore(s.name), this.flowParseGenericType(e, s)
                                                }
                                            }
                                            flowParsePrimaryType() {
                                                let e, t, s = this.state.startLoc,
                                                    r = this.startNode(),
                                                    i = !1,
                                                    a = this.state.noAnonFunctionType;
                                                switch (this.state.type) {
                                                    case 5:
                                                        return this.flowParseObjectType({
                                                            allowStatic: !1,
                                                            allowExact: !1,
                                                            allowSpread: !0,
                                                            allowProto: !1,
                                                            allowInexact: !0
                                                        });
                                                    case 6:
                                                        return this.flowParseObjectType({
                                                            allowStatic: !1,
                                                            allowExact: !0,
                                                            allowSpread: !0,
                                                            allowProto: !1,
                                                            allowInexact: !1
                                                        });
                                                    case 0:
                                                        return this.state.noAnonFunctionType = !1, t = this.flowParseTupleType(), this.state.noAnonFunctionType = a, t;
                                                    case 47:
                                                        return r.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), e = this.flowParseFunctionTypeParams(), r.params = e.params, r.rest = e.rest, r.this = e._this, this.expect(11), this.expect(19), r.returnType = this.flowParseType(), this.finishNode(r, "FunctionTypeAnnotation");
                                                    case 10:
                                                        if (this.next(), !this.match(11) && !this.match(21))
                                                            if (v(this.state.type) || this.match(78)) {
                                                                let e = this.lookahead().type;
                                                                i = 17 !== e && 14 !== e
                                                            } else i = !0;
                                                        if (i) {
                                                            if (this.state.noAnonFunctionType = !1, t = this.flowParseType(), this.state.noAnonFunctionType = a, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && 19 === this.lookahead().type)) return this.expect(11), t;
                                                            this.eat(12)
                                                        }
                                                        return e = t ? this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(t)]) : this.flowParseFunctionTypeParams(), r.params = e.params, r.rest = e.rest, r.this = e._this, this.expect(11), this.expect(19), r.returnType = this.flowParseType(), r.typeParameters = null, this.finishNode(r, "FunctionTypeAnnotation");
                                                    case 131:
                                                        return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
                                                    case 85:
                                                    case 86:
                                                        return r.value = this.match(85), this.next(), this.finishNode(r, "BooleanLiteralTypeAnnotation");
                                                    case 53:
                                                        if ("-" === this.state.value) {
                                                            if (this.next(), this.match(132)) return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", r);
                                                            if (this.match(133)) return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", r);
                                                            throw this.raise(js.UnexpectedSubtractionOperand, {
                                                                at: this.state.startLoc
                                                            })
                                                        }
                                                        return void this.unexpected();
                                                    case 132:
                                                        return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
                                                    case 133:
                                                        return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
                                                    case 88:
                                                        return this.next(), this.finishNode(r, "VoidTypeAnnotation");
                                                    case 84:
                                                        return this.next(), this.finishNode(r, "NullLiteralTypeAnnotation");
                                                    case 78:
                                                        return this.next(), this.finishNode(r, "ThisTypeAnnotation");
                                                    case 55:
                                                        return this.next(), this.finishNode(r, "ExistsTypeAnnotation");
                                                    case 87:
                                                        return this.flowParseTypeofType();
                                                    default:
                                                        if (F(this.state.type)) {
                                                            let e = z(this.state.type);
                                                            return this.next(), super.createIdentifier(r, e)
                                                        }
                                                        if (v(this.state.type)) return this.isContextual(127) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(s, r, this.parseIdentifier())
                                                }
                                                this.unexpected()
                                            }
                                            flowParsePostfixType() {
                                                let e = this.state.startLoc,
                                                    t = this.flowParsePrimaryType(),
                                                    s = !1;
                                                for (;
                                                    (this.match(0) || this.match(18)) && !this.canInsertSemicolon();) {
                                                    let r = this.startNodeAt(e),
                                                        i = this.eat(18);
                                                    s = s || i, this.expect(0), !i && this.match(3) ? (r.elementType = t, this.next(), t = this.finishNode(r, "ArrayTypeAnnotation")) : (r.objectType = t, r.indexType = this.flowParseType(), this.expect(3), s ? (r.optional = i, t = this.finishNode(r, "OptionalIndexedAccessType")) : t = this.finishNode(r, "IndexedAccessType"))
                                                }
                                                return t
                                            }
                                            flowParsePrefixType() {
                                                let e = this.startNode();
                                                return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType()
                                            }
                                            flowParseAnonFunctionWithoutParens() {
                                                let e = this.flowParsePrefixType();
                                                if (!this.state.noAnonFunctionType && this.eat(19)) {
                                                    let t = this.startNodeAt(e.loc.start);
                                                    return t.params = [this.reinterpretTypeAsFunctionTypeParam(e)], t.rest = null, t.this = null, t.returnType = this.flowParseType(), t.typeParameters = null, this.finishNode(t, "FunctionTypeAnnotation")
                                                }
                                                return e
                                            }
                                            flowParseIntersectionType() {
                                                let e = this.startNode();
                                                this.eat(45);
                                                let t = this.flowParseAnonFunctionWithoutParens();
                                                for (e.types = [t]; this.eat(45);) e.types.push(this.flowParseAnonFunctionWithoutParens());
                                                return 1 === e.types.length ? t : this.finishNode(e, "IntersectionTypeAnnotation")
                                            }
                                            flowParseUnionType() {
                                                let e = this.startNode();
                                                this.eat(43);
                                                let t = this.flowParseIntersectionType();
                                                for (e.types = [t]; this.eat(43);) e.types.push(this.flowParseIntersectionType());
                                                return 1 === e.types.length ? t : this.finishNode(e, "UnionTypeAnnotation")
                                            }
                                            flowParseType() {
                                                let e = this.state.inType;
                                                this.state.inType = !0;
                                                let t = this.flowParseUnionType();
                                                return this.state.inType = e, t
                                            }
                                            flowParseTypeOrImplicitInstantiation() {
                                                if (130 === this.state.type && "_" === this.state.value) {
                                                    let e = this.state.startLoc,
                                                        t = this.parseIdentifier();
                                                    return this.flowParseGenericType(e, t)
                                                }
                                                return this.flowParseType()
                                            }
                                            flowParseTypeAnnotation() {
                                                let e = this.startNode();
                                                return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation")
                                            }
                                            flowParseTypeAnnotatableIdentifier(e) {
                                                let t = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
                                                return this.match(14) && (t.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(t)), t
                                            }
                                            typeCastToParameter(e) {
                                                return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression
                                            }
                                            flowParseVariance() {
                                                let e = null;
                                                return this.match(53) ? (e = this.startNode(), "+" === this.state.value ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e
                                            }
                                            parseFunctionBody(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                t ? this.forwardNoArrowParamsConversionAt(e, (() => super.parseFunctionBody(e, !0, s))) : super.parseFunctionBody(e, !1, s)
                                            }
                                            parseFunctionBodyAndFinish(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                if (this.match(14)) {
                                                    let t = this.startNode();
                                                    [t.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = t.typeAnnotation ? this.finishNode(t, "TypeAnnotation") : null
                                                }
                                                return super.parseFunctionBodyAndFinish(e, t, s)
                                            }
                                            parseStatementLike(e) {
                                                if (this.state.strict && this.isContextual(127)) {
                                                    if (N(this.lookahead().type)) {
                                                        let e = this.startNode();
                                                        return this.next(), this.flowParseInterface(e)
                                                    }
                                                } else if (this.shouldParseEnums() && this.isContextual(124)) {
                                                    let e = this.startNode();
                                                    return this.next(), this.flowParseEnumDeclaration(e)
                                                }
                                                let t = super.parseStatementLike(e);
                                                return void 0 === this.flowPragma && !this.isValidDirective(t) && (this.flowPragma = null), t
                                            }
                                            parseExpressionStatement(e, t, s) {
                                                if ("Identifier" === t.type)
                                                    if ("declare" === t.name) {
                                                        if (this.match(80) || v(this.state.type) || this.match(68) || this.match(74) || this.match(82)) return this.flowParseDeclare(e)
                                                    } else if (v(this.state.type)) {
                                                    if ("interface" === t.name) return this.flowParseInterface(e);
                                                    if ("type" === t.name) return this.flowParseTypeAlias(e);
                                                    if ("opaque" === t.name) return this.flowParseOpaqueType(e, !1)
                                                }
                                                return super.parseExpressionStatement(e, t, s)
                                            }
                                            shouldParseExportDeclaration() {
                                                let {
                                                    type: e
                                                } = this.state;
                                                return O(e) || this.shouldParseEnums() && 124 === e ? !this.state.containsEsc : super.shouldParseExportDeclaration()
                                            }
                                            isExportDefaultSpecifier() {
                                                let {
                                                    type: e
                                                } = this.state;
                                                return O(e) || this.shouldParseEnums() && 124 === e ? this.state.containsEsc : super.isExportDefaultSpecifier()
                                            }
                                            parseExportDefaultExpression() {
                                                if (this.shouldParseEnums() && this.isContextual(124)) {
                                                    let e = this.startNode();
                                                    return this.next(), this.flowParseEnumDeclaration(e)
                                                }
                                                return super.parseExportDefaultExpression()
                                            }
                                            parseConditional(e, t, s) {
                                                if (!this.match(17)) return e;
                                                if (this.state.maybeInArrowParameters) {
                                                    let t = this.lookaheadCharCode();
                                                    if (44 === t || 61 === t || 58 === t || 41 === t) return this.setOptionalParametersError(s), e
                                                }
                                                this.expect(17);
                                                let r = this.state.clone(),
                                                    i = this.state.noArrowAt,
                                                    a = this.startNodeAt(t),
                                                    {
                                                        consequent: n,
                                                        failed: o
                                                    } = this.tryParseConditionalConsequent(),
                                                    [h, l] = this.getArrowLikeExpressions(n);
                                                if (o || l.length > 0) {
                                                    let e = [...i];
                                                    if (l.length > 0) {
                                                        this.state = r, this.state.noArrowAt = e;
                                                        for (let t = 0; t < l.length; t++) e.push(l[t].start);
                                                        ({
                                                            consequent: n,
                                                            failed: o
                                                        } = this.tryParseConditionalConsequent()), [h, l] = this.getArrowLikeExpressions(n)
                                                    }
                                                    o && h.length > 1 && this.raise(js.AmbiguousConditionalArrow, {
                                                        at: r.startLoc
                                                    }), o && 1 === h.length && (this.state = r, e.push(h[0].start), this.state.noArrowAt = e, ({
                                                        consequent: n,
                                                        failed: o
                                                    } = this.tryParseConditionalConsequent()))
                                                }
                                                return this.getArrowLikeExpressions(n, !0), this.state.noArrowAt = i, this.expect(14), a.test = e, a.consequent = n, a.alternate = this.forwardNoArrowParamsConversionAt(a, (() => this.parseMaybeAssign(void 0, void 0))), this.finishNode(a, "ConditionalExpression")
                                            }
                                            tryParseConditionalConsequent() {
                                                this.state.noArrowParamsConversionAt.push(this.state.start);
                                                let e = this.parseMaybeAssignAllowIn(),
                                                    t = !this.match(14);
                                                return this.state.noArrowParamsConversionAt.pop(), {
                                                    consequent: e,
                                                    failed: t
                                                }
                                            }
                                            getArrowLikeExpressions(e, t) {
                                                let s = [e],
                                                    r = [];
                                                for (; 0 !== s.length;) {
                                                    let e = s.pop();
                                                    "ArrowFunctionExpression" === e.type ? (e.typeParameters || !e.returnType ? this.finishArrowValidation(e) : r.push(e), s.push(e.body)) : "ConditionalExpression" === e.type && (s.push(e.consequent), s.push(e.alternate))
                                                }
                                                return t ? (r.forEach((e => this.finishArrowValidation(e))), [r, []]) : Hs(r, (e => e.params.every((e => this.isAssignable(e, !0)))))
                                            }
                                            finishArrowValidation(e) {
                                                var t;
                                                this.toAssignableList(e.params, null == (t = e.extra) ? void 0 : t.trailingCommaLoc, !1), this.scope.enter(Re | Ue), super.checkParams(e, !1, !0), this.scope.exit()
                                            }
                                            forwardNoArrowParamsConversionAt(e, t) {
                                                let s;
                                                return -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start) ? (this.state.noArrowParamsConversionAt.push(this.state.start), s = t(), this.state.noArrowParamsConversionAt.pop()) : s = t(), s
                                            }
                                            parseParenItem(e, t) {
                                                if (e = super.parseParenItem(e, t), this.eat(17) && (e.optional = !0, this.resetEndLocation(e)), this.match(14)) {
                                                    let s = this.startNodeAt(t);
                                                    return s.expression = e, s.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(s, "TypeCastExpression")
                                                }
                                                return e
                                            }
                                            assertModuleNodeAllowed(e) {
                                                "ImportDeclaration" === e.type && ("type" === e.importKind || "typeof" === e.importKind) || "ExportNamedDeclaration" === e.type && "type" === e.exportKind || "ExportAllDeclaration" === e.type && "type" === e.exportKind || super.assertModuleNodeAllowed(e)
                                            }
                                            parseExport(e, t) {
                                                let s = super.parseExport(e, t);
                                                return ("ExportNamedDeclaration" === s.type || "ExportAllDeclaration" === s.type) && (s.exportKind = s.exportKind || "value"), s
                                            }
                                            parseExportDeclaration(e) {
                                                if (this.isContextual(128)) {
                                                    e.exportKind = "type";
                                                    let t = this.startNode();
                                                    return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(!0), super.parseExportFrom(e), null) : this.flowParseTypeAlias(t)
                                                }
                                                if (this.isContextual(129)) {
                                                    e.exportKind = "type";
                                                    let t = this.startNode();
                                                    return this.next(), this.flowParseOpaqueType(t, !1)
                                                }
                                                if (this.isContextual(127)) {
                                                    e.exportKind = "type";
                                                    let t = this.startNode();
                                                    return this.next(), this.flowParseInterface(t)
                                                }
                                                if (this.shouldParseEnums() && this.isContextual(124)) {
                                                    e.exportKind = "value";
                                                    let t = this.startNode();
                                                    return this.next(), this.flowParseEnumDeclaration(t)
                                                }
                                                return super.parseExportDeclaration(e)
                                            }
                                            eatExportStar(e) {
                                                return !!super.eatExportStar(e) || !(!this.isContextual(128) || 55 !== this.lookahead().type) && (e.exportKind = "type", this.next(), this.next(), !0)
                                            }
                                            maybeParseExportNamespaceSpecifier(e) {
                                                let {
                                                    startLoc: t
                                                } = this.state, s = super.maybeParseExportNamespaceSpecifier(e);
                                                return s && "type" === e.exportKind && this.unexpected(t), s
                                            }
                                            parseClassId(e, t, s) {
                                                super.parseClassId(e, t, s), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration())
                                            }
                                            parseClassMember(e, t, s) {
                                                let {
                                                    startLoc: r
                                                } = this.state;
                                                if (this.isContextual(123)) {
                                                    if (super.parseClassMemberFromModifier(e, t)) return;
                                                    t.declare = !0
                                                }
                                                super.parseClassMember(e, t, s), t.declare && ("ClassProperty" !== t.type && "ClassPrivateProperty" !== t.type && "PropertyDefinition" !== t.type ? this.raise(js.DeclareClassElement, {
                                                    at: r
                                                }) : t.value && this.raise(js.DeclareClassFieldInitializer, {
                                                    at: t.value
                                                }))
                                            }
                                            isIterator(e) {
                                                return "iterator" === e || "asyncIterator" === e
                                            }
                                            readIterator() {
                                                let e = super.readWord1(),
                                                    t = "@@" + e;
                                                (!this.isIterator(e) || !this.state.inType) && this.raise(pe.InvalidIdentifier, {
                                                    at: this.state.curPosition(),
                                                    identifierName: t
                                                }), this.finishToken(130, t)
                                            }
                                            getTokenFromCode(e) {
                                                let t = this.input.charCodeAt(this.state.pos + 1);
                                                123 === e && 124 === t ? this.finishOp(6, 2) : !this.state.inType || 62 !== e && 60 !== e ? this.state.inType && 63 === e ? 46 === t ? this.finishOp(18, 2) : this.finishOp(17, 1) : Oe(e, t, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e) : this.finishOp(62 === e ? 48 : 47, 1)
                                            }
                                            isAssignable(e, t) {
                                                return "TypeCastExpression" === e.type ? this.isAssignable(e.expression, t) : super.isAssignable(e, t)
                                            }
                                            toAssignable(e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                                !t && "AssignmentExpression" === e.type && "TypeCastExpression" === e.left.type && (e.left = this.typeCastToParameter(e.left)), super.toAssignable(e, t)
                                            }
                                            toAssignableList(e, t, s) {
                                                for (let r = 0; r < e.length; r++) {
                                                    let t = e[r];
                                                    "TypeCastExpression" === (null == t ? void 0 : t.type) && (e[r] = this.typeCastToParameter(t))
                                                }
                                                super.toAssignableList(e, t, s)
                                            }
                                            toReferencedList(e, t) {
                                                for (let r = 0; r < e.length; r++) {
                                                    var s;
                                                    let i = e[r];
                                                    i && "TypeCastExpression" === i.type && (null == (s = i.extra) || !s.parenthesized) && (e.length > 1 || !t) && this.raise(js.TypeCastInPattern, {
                                                        at: i.typeAnnotation
                                                    })
                                                }
                                                return e
                                            }
                                            parseArrayLike(e, t, s, r) {
                                                let i = super.parseArrayLike(e, t, s, r);
                                                return t && !this.state.maybeInArrowParameters && this.toReferencedList(i.elements), i
                                            }
                                            isValidLVal(e, t, s) {
                                                return "TypeCastExpression" === e || super.isValidLVal(e, t, s)
                                            }
                                            parseClassProperty(e) {
                                                return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e)
                                            }
                                            parseClassPrivateProperty(e) {
                                                return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e)
                                            }
                                            isClassMethod() {
                                                return this.match(47) || super.isClassMethod()
                                            }
                                            isClassProperty() {
                                                return this.match(14) || super.isClassProperty()
                                            }
                                            isNonstaticConstructor(e) {
                                                return !this.match(14) && super.isNonstaticConstructor(e)
                                            }
                                            pushClassMethod(e, t, s, r, i, a) {
                                                if (t.variance && this.unexpected(t.variance.loc.start), delete t.variance, this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, t, s, r, i, a), t.params && i) {
                                                    let e = t.params;
                                                    e.length > 0 && this.isThisParam(e[0]) && this.raise(js.ThisParamBannedInConstructor, {
                                                        at: t
                                                    })
                                                } else if ("MethodDefinition" === t.type && i && t.value.params) {
                                                    let e = t.value.params;
                                                    e.length > 0 && this.isThisParam(e[0]) && this.raise(js.ThisParamBannedInConstructor, {
                                                        at: t
                                                    })
                                                }
                                            }
                                            pushClassPrivateMethod(e, t, s, r) {
                                                t.variance && this.unexpected(t.variance.loc.start), delete t.variance, this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, t, s, r)
                                            }
                                            parseClassSuper(e) {
                                                if (super.parseClassSuper(e), e.superClass && this.match(47) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(111)) {
                                                    this.next();
                                                    let t = e.implements = [];
                                                    do {
                                                        let e = this.startNode();
                                                        e.id = this.flowParseRestrictedIdentifier(!0), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, t.push(this.finishNode(e, "ClassImplements"))
                                                    } while (this.eat(12))
                                                }
                                            }
                                            checkGetterSetterParams(e) {
                                                super.checkGetterSetterParams(e);
                                                let t = this.getObjectOrClassMethodParams(e);
                                                if (t.length > 0) {
                                                    let s = t[0];
                                                    this.isThisParam(s) && "get" === e.kind ? this.raise(js.GetterMayNotHaveThisParam, {
                                                        at: s
                                                    }) : this.isThisParam(s) && this.raise(js.SetterMayNotHaveThisParam, {
                                                        at: s
                                                    })
                                                }
                                            }
                                            parsePropertyNamePrefixOperator(e) {
                                                e.variance = this.flowParseVariance()
                                            }
                                            parseObjPropValue(e, t, s, r, i, a, n) {
                                                let o;
                                                e.variance && this.unexpected(e.variance.loc.start), delete e.variance, this.match(47) && !a && (o = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
                                                let h = super.parseObjPropValue(e, t, s, r, i, a, n);
                                                return o && ((h.value || h).typeParameters = o), h
                                            }
                                            parseAssignableListItemTypes(e) {
                                                return this.eat(17) && ("Identifier" !== e.type && this.raise(js.PatternIsOptional, {
                                                    at: e
                                                }), this.isThisParam(e) && this.raise(js.ThisParamMayNotBeOptional, {
                                                    at: e
                                                }), e.optional = !0), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(js.ThisParamAnnotationRequired, {
                                                    at: e
                                                }), this.match(29) && this.isThisParam(e) && this.raise(js.ThisParamNoDefault, {
                                                    at: e
                                                }), this.resetEndLocation(e), e
                                            }
                                            parseMaybeDefault(e, t) {
                                                let s = super.parseMaybeDefault(e, t);
                                                return "AssignmentPattern" === s.type && s.typeAnnotation && s.right.start < s.typeAnnotation.start && this.raise(js.TypeBeforeInitializer, {
                                                    at: s.typeAnnotation
                                                }), s
                                            }
                                            shouldParseDefaultImport(e) {
                                                return Us(e) ? _s(this.state.type) : super.shouldParseDefaultImport(e)
                                            }
                                            checkImportReflection(e) {
                                                super.checkImportReflection(e), e.module && "value" !== e.importKind && this.raise(js.ImportReflectionHasImportType, {
                                                    at: e.specifiers[0].loc.start
                                                })
                                            }
                                            parseImportSpecifierLocal(e, t, s) {
                                                t.local = Us(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(t, s))
                                            }
                                            maybeParseDefaultImportSpecifier(e) {
                                                e.importKind = "value";
                                                let t = null;
                                                if (this.match(87) ? t = "typeof" : this.isContextual(128) && (t = "type"), t) {
                                                    let s = this.lookahead(),
                                                        {
                                                            type: r
                                                        } = s;
                                                    "type" === t && 55 === r && this.unexpected(null, s.type), (_s(r) || 5 === r || 55 === r) && (this.next(), e.importKind = t)
                                                }
                                                return super.maybeParseDefaultImportSpecifier(e)
                                            }
                                            parseImportSpecifier(e, t, s, r, i) {
                                                let a = e.imported,
                                                    n = null;
                                                "Identifier" === a.type && ("type" === a.name ? n = "type" : "typeof" === a.name && (n = "typeof"));
                                                let o = !1;
                                                if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
                                                    let t = this.parseIdentifier(!0);
                                                    null === n || N(this.state.type) ? (e.imported = a, e.importKind = null, e.local = this.parseIdentifier()) : (e.imported = t, e.importKind = n, e.local = Os(t))
                                                } else {
                                                    if (null !== n && N(this.state.type)) e.imported = this.parseIdentifier(!0), e.importKind = n;
                                                    else {
                                                        if (t) throw this.raise(pe.ImportBindingIsString, {
                                                            at: e,
                                                            importName: a.value
                                                        });
                                                        e.imported = a, e.importKind = null
                                                    }
                                                    this.eatContextual(93) ? e.local = this.parseIdentifier() : (o = !0, e.local = Os(e.imported))
                                                }
                                                let h = Us(e);
                                                return s && h && this.raise(js.ImportTypeShorthandOnlyInPureImport, {
                                                    at: e
                                                }), (s || h) && this.checkReservedType(e.local.name, e.local.loc.start, !0), o && !s && !h && this.checkReservedWord(e.local.name, e.loc.start, !0, !0), this.finishImportSpecifier(e, "ImportSpecifier")
                                            }
                                            parseBindingAtom() {
                                                return 78 === this.state.type ? this.parseIdentifier(!0) : super.parseBindingAtom()
                                            }
                                            parseFunctionParams(e, t) {
                                                let s = e.kind;
                                                "get" !== s && "set" !== s && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, t)
                                            }
                                            parseVarId(e, t) {
                                                super.parseVarId(e, t), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id))
                                            }
                                            parseAsyncArrowFromCallExpression(e, t) {
                                                if (this.match(14)) {
                                                    let t = this.state.noAnonFunctionType;
                                                    this.state.noAnonFunctionType = !0, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = t
                                                }
                                                return super.parseAsyncArrowFromCallExpression(e, t)
                                            }
                                            shouldParseAsyncArrow() {
                                                return this.match(14) || super.shouldParseAsyncArrow()
                                            }
                                            parseMaybeAssign(e, t) {
                                                var s;
                                                let r, a = null;
                                                if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
                                                    if (a = this.state.clone(), r = this.tryParse((() => super.parseMaybeAssign(e, t)), a), !r.error) return r.node;
                                                    let {
                                                        context: s
                                                    } = this.state, n = s[s.length - 1];
                                                    (n === i.j_oTag || n === i.j_expr) && s.pop()
                                                }
                                                if (null != (s = r) && s.error || this.match(47)) {
                                                    var n, o;
                                                    a = a || this.state.clone();
                                                    let s, i = this.tryParse((r => {
                                                            var i;
                                                            s = this.flowParseTypeParameterDeclaration();
                                                            let a = this.forwardNoArrowParamsConversionAt(s, (() => {
                                                                let r = super.parseMaybeAssign(e, t);
                                                                return this.resetStartLocationFromNode(r, s), r
                                                            }));
                                                            null != (i = a.extra) && i.parenthesized && r();
                                                            let n = this.maybeUnwrapTypeCastExpression(a);
                                                            return "ArrowFunctionExpression" !== n.type && r(), n.typeParameters = s, this.resetStartLocationFromNode(n, s), a
                                                        }), a),
                                                        h = null;
                                                    if (i.node && "ArrowFunctionExpression" === this.maybeUnwrapTypeCastExpression(i.node).type) {
                                                        if (!i.error && !i.aborted) return i.node.async && this.raise(js.UnexpectedTypeParameterBeforeAsyncArrowFunction, {
                                                            at: s
                                                        }), i.node;
                                                        h = i.node
                                                    }
                                                    if (null != (n = r) && n.node) return this.state = r.failState, r.node;
                                                    if (h) return this.state = i.failState, h;
                                                    throw null != (o = r) && o.thrown ? r.error : i.thrown ? i.error : this.raise(js.UnexpectedTokenAfterTypeParameter, {
                                                        at: s
                                                    })
                                                }
                                                return super.parseMaybeAssign(e, t)
                                            }
                                            parseArrow(e) {
                                                if (this.match(14)) {
                                                    let t = this.tryParse((() => {
                                                        let t = this.state.noAnonFunctionType;
                                                        this.state.noAnonFunctionType = !0;
                                                        let s = this.startNode();
                                                        return [s.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = t, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), s
                                                    }));
                                                    if (t.thrown) return null;
                                                    t.error && (this.state = t.failState), e.returnType = t.node.typeAnnotation ? this.finishNode(t.node, "TypeAnnotation") : null
                                                }
                                                return super.parseArrow(e)
                                            }
                                            shouldParseArrow(e) {
                                                return this.match(14) || super.shouldParseArrow(e)
                                            }
                                            setArrowFunctionParameters(e, t) {
                                                -1 !== this.state.noArrowParamsConversionAt.indexOf(e.start) ? e.params = t : super.setArrowFunctionParameters(e, t)
                                            }
                                            checkParams(e, t, s) {
                                                let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                                                if (!s || -1 === this.state.noArrowParamsConversionAt.indexOf(e.start)) {
                                                    for (let t = 0; t < e.params.length; t++) this.isThisParam(e.params[t]) && t > 0 && this.raise(js.ThisParamMustBeFirst, {
                                                        at: e.params[t]
                                                    });
                                                    super.checkParams(e, t, s, r)
                                                }
                                            }
                                            parseParenAndDistinguishExpression(e) {
                                                return super.parseParenAndDistinguishExpression(e && -1 === this.state.noArrowAt.indexOf(this.state.start))
                                            }
                                            parseSubscripts(e, t, s) {
                                                if ("Identifier" === e.type && "async" === e.name && -1 !== this.state.noArrowAt.indexOf(t.index)) {
                                                    this.next();
                                                    let s = this.startNodeAt(t);
                                                    s.callee = e, s.arguments = super.parseCallExpressionArguments(11, !1), e = this.finishNode(s, "CallExpression")
                                                } else if ("Identifier" === e.type && "async" === e.name && this.match(47)) {
                                                    let r = this.state.clone(),
                                                        i = this.tryParse((e => this.parseAsyncArrowWithTypeParameters(t) || e()), r);
                                                    if (!i.error && !i.aborted) return i.node;
                                                    let a = this.tryParse((() => super.parseSubscripts(e, t, s)), r);
                                                    if (a.node && !a.error) return a.node;
                                                    if (i.node) return this.state = i.failState, i.node;
                                                    if (a.node) return this.state = a.failState, a.node;
                                                    throw i.error || a.error
                                                }
                                                return super.parseSubscripts(e, t, s)
                                            }
                                            parseSubscript(e, t, s, r) {
                                                if (this.match(18) && this.isLookaheadToken_lt()) {
                                                    if (r.optionalChainMember = !0, s) return r.stop = !0, e;
                                                    this.next();
                                                    let i = this.startNodeAt(t);
                                                    return i.callee = e, i.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), i.arguments = this.parseCallExpressionArguments(11, !1), i.optional = !0, this.finishCallExpression(i, !0)
                                                }
                                                if (!s && this.shouldParseTypes() && this.match(47)) {
                                                    let s = this.startNodeAt(t);
                                                    s.callee = e;
                                                    let i = this.tryParse((() => (s.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), s.arguments = super.parseCallExpressionArguments(11, !1), r.optionalChainMember && (s.optional = !1), this.finishCallExpression(s, r.optionalChainMember))));
                                                    if (i.node) return i.error && (this.state = i.failState), i.node
                                                }
                                                return super.parseSubscript(e, t, s, r)
                                            }
                                            parseNewCallee(e) {
                                                super.parseNewCallee(e);
                                                let t = null;
                                                this.shouldParseTypes() && this.match(47) && (t = this.tryParse((() => this.flowParseTypeParameterInstantiationCallOrNew())).node), e.typeArguments = t
                                            }
                                            parseAsyncArrowWithTypeParameters(e) {
                                                let t = this.startNodeAt(e);
                                                if (this.parseFunctionParams(t, !1), this.parseArrow(t)) return super.parseArrowExpression(t, void 0, !0)
                                            }
                                            readToken_mult_modulo(e) {
                                                let t = this.input.charCodeAt(this.state.pos + 1);
                                                if (42 === e && 47 === t && this.state.hasFlowComment) return this.state.hasFlowComment = !1, this.state.pos += 2, void this.nextToken();
                                                super.readToken_mult_modulo(e)
                                            }
                                            readToken_pipe_amp(e) {
                                                let t = this.input.charCodeAt(this.state.pos + 1);
                                                124 !== e || 125 !== t ? super.readToken_pipe_amp(e) : this.finishOp(9, 2)
                                            }
                                            parseTopLevel(e, t) {
                                                let s = super.parseTopLevel(e, t);
                                                return this.state.hasFlowComment && this.raise(js.UnterminatedFlowComment, {
                                                    at: this.state.curPosition()
                                                }), s
                                            }
                                            skipBlockComment() {
                                                if (!this.hasPlugin("flowComments") || !this.skipFlowComment()) return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/"); {
                                                    if (this.state.hasFlowComment) throw this.raise(js.NestedFlowComment, {
                                                        at: this.state.startLoc
                                                    });
                                                    this.hasFlowCommentCompletion();
                                                    let e = this.skipFlowComment();
                                                    e && (this.state.pos += e, this.state.hasFlowComment = !0)
                                                }
                                            }
                                            skipFlowComment() {
                                                let {
                                                    pos: e
                                                } = this.state, t = 2;
                                                for (;
                                                    [32, 9].includes(this.input.charCodeAt(e + t));) t++;
                                                let s = this.input.charCodeAt(t + e),
                                                    r = this.input.charCodeAt(t + e + 1);
                                                return 58 === s && 58 === r ? t + 2 : "flow-include" === this.input.slice(t + e, t + e + 12) ? t + 12 : 58 === s && 58 !== r && t
                                            }
                                            hasFlowCommentCompletion() {
                                                if (-1 === this.input.indexOf("*/", this.state.pos)) throw this.raise(pe.UnterminatedComment, {
                                                    at: this.state.curPosition()
                                                })
                                            }
                                            flowEnumErrorBooleanMemberNotInitialized(e, t) {
                                                let {
                                                    enumName: s,
                                                    memberName: r
                                                } = t;
                                                this.raise(js.EnumBooleanMemberNotInitialized, {
                                                    at: e,
                                                    memberName: r,
                                                    enumName: s
                                                })
                                            }
                                            flowEnumErrorInvalidMemberInitializer(e, t) {
                                                return this.raise(t.explicitType ? "symbol" === t.explicitType ? js.EnumInvalidMemberInitializerSymbolType : js.EnumInvalidMemberInitializerPrimaryType : js.EnumInvalidMemberInitializerUnknownType, Object.assign({
                                                    at: e
                                                }, t))
                                            }
                                            flowEnumErrorNumberMemberNotInitialized(e, t) {
                                                let {
                                                    enumName: s,
                                                    memberName: r
                                                } = t;
                                                this.raise(js.EnumNumberMemberNotInitialized, {
                                                    at: e,
                                                    enumName: s,
                                                    memberName: r
                                                })
                                            }
                                            flowEnumErrorStringMemberInconsistentlyInitailized(e, t) {
                                                let {
                                                    enumName: s
                                                } = t;
                                                this.raise(js.EnumStringMemberInconsistentlyInitailized, {
                                                    at: e,
                                                    enumName: s
                                                })
                                            }
                                            flowEnumMemberInit() {
                                                let e = this.state.startLoc,
                                                    t = () => this.match(12) || this.match(8);
                                                switch (this.state.type) {
                                                    case 132:
                                                        {
                                                            let s = this.parseNumericLiteral(this.state.value);
                                                            return t() ? {
                                                                type: "number",
                                                                loc: s.loc.start,
                                                                value: s
                                                            } : {
                                                                type: "invalid",
                                                                loc: e
                                                            }
                                                        }
                                                    case 131:
                                                        {
                                                            let s = this.parseStringLiteral(this.state.value);
                                                            return t() ? {
                                                                type: "string",
                                                                loc: s.loc.start,
                                                                value: s
                                                            } : {
                                                                type: "invalid",
                                                                loc: e
                                                            }
                                                        }
                                                    case 85:
                                                    case 86:
                                                        {
                                                            let s = this.parseBooleanLiteral(this.match(85));
                                                            return t() ? {
                                                                type: "boolean",
                                                                loc: s.loc.start,
                                                                value: s
                                                            } : {
                                                                type: "invalid",
                                                                loc: e
                                                            }
                                                        }
                                                    default:
                                                        return {
                                                            type: "invalid",
                                                            loc: e
                                                        }
                                                }
                                            }
                                            flowEnumMemberRaw() {
                                                let e = this.state.startLoc;
                                                return {
                                                    id: this.parseIdentifier(!0),
                                                    init: this.eat(29) ? this.flowEnumMemberInit() : {
                                                        type: "none",
                                                        loc: e
                                                    }
                                                }
                                            }
                                            flowEnumCheckExplicitTypeMismatch(e, t, s) {
                                                let {
                                                    explicitType: r
                                                } = t;
                                                null !== r && r !== s && this.flowEnumErrorInvalidMemberInitializer(e, t)
                                            }
                                            flowEnumMembers(e) {
                                                let {
                                                    enumName: t,
                                                    explicitType: s
                                                } = e, r = new Set, i = {
                                                    booleanMembers: [],
                                                    numberMembers: [],
                                                    stringMembers: [],
                                                    defaultedMembers: []
                                                }, a = !1;
                                                for (; !this.match(8);) {
                                                    if (this.eat(21)) {
                                                        a = !0;
                                                        break
                                                    }
                                                    let e = this.startNode(),
                                                        {
                                                            id: n,
                                                            init: o
                                                        } = this.flowEnumMemberRaw(),
                                                        h = n.name;
                                                    if ("" === h) continue;
                                                    /^[a-z]/.test(h) && this.raise(js.EnumInvalidMemberName, {
                                                        at: n,
                                                        memberName: h,
                                                        suggestion: h[0].toUpperCase() + h.slice(1),
                                                        enumName: t
                                                    }), r.has(h) && this.raise(js.EnumDuplicateMemberName, {
                                                        at: n,
                                                        memberName: h,
                                                        enumName: t
                                                    }), r.add(h);
                                                    let l = {
                                                        enumName: t,
                                                        explicitType: s,
                                                        memberName: h
                                                    };
                                                    switch (e.id = n, o.type) {
                                                        case "boolean":
                                                            this.flowEnumCheckExplicitTypeMismatch(o.loc, l, "boolean"), e.init = o.value, i.booleanMembers.push(this.finishNode(e, "EnumBooleanMember"));
                                                            break;
                                                        case "number":
                                                            this.flowEnumCheckExplicitTypeMismatch(o.loc, l, "number"), e.init = o.value, i.numberMembers.push(this.finishNode(e, "EnumNumberMember"));
                                                            break;
                                                        case "string":
                                                            this.flowEnumCheckExplicitTypeMismatch(o.loc, l, "string"), e.init = o.value, i.stringMembers.push(this.finishNode(e, "EnumStringMember"));
                                                            break;
                                                        case "invalid":
                                                            throw this.flowEnumErrorInvalidMemberInitializer(o.loc, l);
                                                        case "none":
                                                            switch (s) {
                                                                case "boolean":
                                                                    this.flowEnumErrorBooleanMemberNotInitialized(o.loc, l);
                                                                    break;
                                                                case "number":
                                                                    this.flowEnumErrorNumberMemberNotInitialized(o.loc, l);
                                                                    break;
                                                                default:
                                                                    i.defaultedMembers.push(this.finishNode(e, "EnumDefaultedMember"))
                                                            }
                                                    }
                                                    this.match(8) || this.expect(12)
                                                }
                                                return {
                                                    members: i,
                                                    hasUnknownMembers: a
                                                }
                                            }
                                            flowEnumStringMembers(e, t, s) {
                                                let {
                                                    enumName: r
                                                } = s;
                                                if (0 === e.length) return t;
                                                if (0 === t.length) return e;
                                                if (t.length > e.length) {
                                                    for (let t of e) this.flowEnumErrorStringMemberInconsistentlyInitailized(t, {
                                                        enumName: r
                                                    });
                                                    return t
                                                }
                                                for (let i of t) this.flowEnumErrorStringMemberInconsistentlyInitailized(i, {
                                                    enumName: r
                                                });
                                                return e
                                            }
                                            flowEnumParseExplicitType(e) {
                                                let {
                                                    enumName: t
                                                } = e;
                                                if (!this.eatContextual(101)) return null;
                                                if (!v(this.state.type)) throw this.raise(js.EnumInvalidExplicitTypeUnknownSupplied, {
                                                    at: this.state.startLoc,
                                                    enumName: t
                                                });
                                                let {
                                                    value: s
                                                } = this.state;
                                                return this.next(), "boolean" !== s && "number" !== s && "string" !== s && "symbol" !== s && this.raise(js.EnumInvalidExplicitType, {
                                                    at: this.state.startLoc,
                                                    enumName: t,
                                                    invalidEnumType: s
                                                }), s
                                            }
                                            flowEnumBody(e, t) {
                                                let s = t.name,
                                                    r = t.loc.start,
                                                    i = this.flowEnumParseExplicitType({
                                                        enumName: s
                                                    });
                                                this.expect(5);
                                                let {
                                                    members: a,
                                                    hasUnknownMembers: n
                                                } = this.flowEnumMembers({
                                                    enumName: s,
                                                    explicitType: i
                                                });
                                                switch (e.hasUnknownMembers = n, i) {
                                                    case "boolean":
                                                        return e.explicitType = !0, e.members = a.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
                                                    case "number":
                                                        return e.explicitType = !0, e.members = a.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
                                                    case "string":
                                                        return e.explicitType = !0, e.members = this.flowEnumStringMembers(a.stringMembers, a.defaultedMembers, {
                                                            enumName: s
                                                        }), this.expect(8), this.finishNode(e, "EnumStringBody");
                                                    case "symbol":
                                                        return e.members = a.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
                                                    default:
                                                        {
                                                            let t = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));e.explicitType = !1;
                                                            let i = a.booleanMembers.length,
                                                                n = a.numberMembers.length,
                                                                o = a.stringMembers.length,
                                                                h = a.defaultedMembers.length;
                                                            if (!i && !n && !o && !h) return t();
                                                            if (!i && !n) return e.members = this.flowEnumStringMembers(a.stringMembers, a.defaultedMembers, {
                                                                enumName: s
                                                            }), this.expect(8), this.finishNode(e, "EnumStringBody");
                                                            if (!n && !o && i >= h) {
                                                                for (let e of a.defaultedMembers) this.flowEnumErrorBooleanMemberNotInitialized(e.loc.start, {
                                                                    enumName: s,
                                                                    memberName: e.id.name
                                                                });
                                                                return e.members = a.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody")
                                                            }
                                                            if (!i && !o && n >= h) {
                                                                for (let e of a.defaultedMembers) this.flowEnumErrorNumberMemberNotInitialized(e.loc.start, {
                                                                    enumName: s,
                                                                    memberName: e.id.name
                                                                });
                                                                return e.members = a.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody")
                                                            }
                                                            return this.raise(js.EnumInconsistentMemberValues, {
                                                                at: r,
                                                                enumName: s
                                                            }),
                                                            t()
                                                        }
                                                }
                                            }
                                            flowParseEnumDeclaration(e) {
                                                let t = this.parseIdentifier();
                                                return e.id = t, e.body = this.flowEnumBody(this.startNode(), t), this.finishNode(e, "EnumDeclaration")
                                            }
                                            isLookaheadToken_lt() {
                                                let e = this.nextTokenStart();
                                                if (60 === this.input.charCodeAt(e)) {
                                                    let t = this.input.charCodeAt(e + 1);
                                                    return 60 !== t && 61 !== t
                                                }
                                                return !1
                                            }
                                            maybeUnwrapTypeCastExpression(e) {
                                                return "TypeCastExpression" === e.type ? e.expression : e
                                            }
                                        },
                                        qs = {
                                            __proto__: null,
                                            quot: '"',
                                            amp: "&",
                                            apos: "'",
                                            lt: "<",
                                            gt: ">",
                                            nbsp: "\xa0",
                                            iexcl: "\xa1",
                                            cent: "\xa2",
                                            pound: "\xa3",
                                            curren: "\xa4",
                                            yen: "\xa5",
                                            brvbar: "\xa6",
                                            sect: "\xa7",
                                            uml: "\xa8",
                                            copy: "\xa9",
                                            ordf: "\xaa",
                                            laquo: "\xab",
                                            not: "\xac",
                                            shy: "\xad",
                                            reg: "\xae",
                                            macr: "\xaf",
                                            deg: "\xb0",
                                            plusmn: "\xb1",
                                            sup2: "\xb2",
                                            sup3: "\xb3",
                                            acute: "\xb4",
                                            micro: "\xb5",
                                            para: "\xb6",
                                            middot: "\xb7",
                                            cedil: "\xb8",
                                            sup1: "\xb9",
                                            ordm: "\xba",
                                            raquo: "\xbb",
                                            frac14: "\xbc",
                                            frac12: "\xbd",
                                            frac34: "\xbe",
                                            iquest: "\xbf",
                                            Agrave: "\xc0",
                                            Aacute: "\xc1",
                                            Acirc: "\xc2",
                                            Atilde: "\xc3",
                                            Auml: "\xc4",
                                            Aring: "\xc5",
                                            AElig: "\xc6",
                                            Ccedil: "\xc7",
                                            Egrave: "\xc8",
                                            Eacute: "\xc9",
                                            Ecirc: "\xca",
                                            Euml: "\xcb",
                                            Igrave: "\xcc",
                                            Iacute: "\xcd",
                                            Icirc: "\xce",
                                            Iuml: "\xcf",
                                            ETH: "\xd0",
                                            Ntilde: "\xd1",
                                            Ograve: "\xd2",
                                            Oacute: "\xd3",
                                            Ocirc: "\xd4",
                                            Otilde: "\xd5",
                                            Ouml: "\xd6",
                                            times: "\xd7",
                                            Oslash: "\xd8",
                                            Ugrave: "\xd9",
                                            Uacute: "\xda",
                                            Ucirc: "\xdb",
                                            Uuml: "\xdc",
                                            Yacute: "\xdd",
                                            THORN: "\xde",
                                            szlig: "\xdf",
                                            agrave: "\xe0",
                                            aacute: "\xe1",
                                            acirc: "\xe2",
                                            atilde: "\xe3",
                                            auml: "\xe4",
                                            aring: "\xe5",
                                            aelig: "\xe6",
                                            ccedil: "\xe7",
                                            egrave: "\xe8",
                                            eacute: "\xe9",
                                            ecirc: "\xea",
                                            euml: "\xeb",
                                            igrave: "\xec",
                                            iacute: "\xed",
                                            icirc: "\xee",
                                            iuml: "\xef",
                                            eth: "\xf0",
                                            ntilde: "\xf1",
                                            ograve: "\xf2",
                                            oacute: "\xf3",
                                            ocirc: "\xf4",
                                            otilde: "\xf5",
                                            ouml: "\xf6",
                                            divide: "\xf7",
                                            oslash: "\xf8",
                                            ugrave: "\xf9",
                                            uacute: "\xfa",
                                            ucirc: "\xfb",
                                            uuml: "\xfc",
                                            yacute: "\xfd",
                                            thorn: "\xfe",
                                            yuml: "\xff",
                                            OElig: "\u0152",
                                            oelig: "\u0153",
                                            Scaron: "\u0160",
                                            scaron: "\u0161",
                                            Yuml: "\u0178",
                                            fnof: "\u0192",
                                            circ: "\u02c6",
                                            tilde: "\u02dc",
                                            Alpha: "\u0391",
                                            Beta: "\u0392",
                                            Gamma: "\u0393",
                                            Delta: "\u0394",
                                            Epsilon: "\u0395",
                                            Zeta: "\u0396",
                                            Eta: "\u0397",
                                            Theta: "\u0398",
                                            Iota: "\u0399",
                                            Kappa: "\u039a",
                                            Lambda: "\u039b",
                                            Mu: "\u039c",
                                            Nu: "\u039d",
                                            Xi: "\u039e",
                                            Omicron: "\u039f",
                                            Pi: "\u03a0",
                                            Rho: "\u03a1",
                                            Sigma: "\u03a3",
                                            Tau: "\u03a4",
                                            Upsilon: "\u03a5",
                                            Phi: "\u03a6",
                                            Chi: "\u03a7",
                                            Psi: "\u03a8",
                                            Omega: "\u03a9",
                                            alpha: "\u03b1",
                                            beta: "\u03b2",
                                            gamma: "\u03b3",
                                            delta: "\u03b4",
                                            epsilon: "\u03b5",
                                            zeta: "\u03b6",
                                            eta: "\u03b7",
                                            theta: "\u03b8",
                                            iota: "\u03b9",
                                            kappa: "\u03ba",
                                            lambda: "\u03bb",
                                            mu: "\u03bc",
                                            nu: "\u03bd",
                                            xi: "\u03be",
                                            omicron: "\u03bf",
                                            pi: "\u03c0",
                                            rho: "\u03c1",
                                            sigmaf: "\u03c2",
                                            sigma: "\u03c3",
                                            tau: "\u03c4",
                                            upsilon: "\u03c5",
                                            phi: "\u03c6",
                                            chi: "\u03c7",
                                            psi: "\u03c8",
                                            omega: "\u03c9",
                                            thetasym: "\u03d1",
                                            upsih: "\u03d2",
                                            piv: "\u03d6",
                                            ensp: "\u2002",
                                            emsp: "\u2003",
                                            thinsp: "\u2009",
                                            zwnj: "\u200c",
                                            zwj: "\u200d",
                                            lrm: "\u200e",
                                            rlm: "\u200f",
                                            ndash: "\u2013",
                                            mdash: "\u2014",
                                            lsquo: "\u2018",
                                            rsquo: "\u2019",
                                            sbquo: "\u201a",
                                            ldquo: "\u201c",
                                            rdquo: "\u201d",
                                            bdquo: "\u201e",
                                            dagger: "\u2020",
                                            Dagger: "\u2021",
                                            bull: "\u2022",
                                            hellip: "\u2026",
                                            permil: "\u2030",
                                            prime: "\u2032",
                                            Prime: "\u2033",
                                            lsaquo: "\u2039",
                                            rsaquo: "\u203a",
                                            oline: "\u203e",
                                            frasl: "\u2044",
                                            euro: "\u20ac",
                                            image: "\u2111",
                                            weierp: "\u2118",
                                            real: "\u211c",
                                            trade: "\u2122",
                                            alefsym: "\u2135",
                                            larr: "\u2190",
                                            uarr: "\u2191",
                                            rarr: "\u2192",
                                            darr: "\u2193",
                                            harr: "\u2194",
                                            crarr: "\u21b5",
                                            lArr: "\u21d0",
                                            uArr: "\u21d1",
                                            rArr: "\u21d2",
                                            dArr: "\u21d3",
                                            hArr: "\u21d4",
                                            forall: "\u2200",
                                            part: "\u2202",
                                            exist: "\u2203",
                                            empty: "\u2205",
                                            nabla: "\u2207",
                                            isin: "\u2208",
                                            notin: "\u2209",
                                            ni: "\u220b",
                                            prod: "\u220f",
                                            sum: "\u2211",
                                            minus: "\u2212",
                                            lowast: "\u2217",
                                            radic: "\u221a",
                                            prop: "\u221d",
                                            infin: "\u221e",
                                            ang: "\u2220",
                                            and: "\u2227",
                                            or: "\u2228",
                                            cap: "\u2229",
                                            cup: "\u222a",
                                            int: "\u222b",
                                            there4: "\u2234",
                                            sim: "\u223c",
                                            cong: "\u2245",
                                            asymp: "\u2248",
                                            ne: "\u2260",
                                            equiv: "\u2261",
                                            le: "\u2264",
                                            ge: "\u2265",
                                            sub: "\u2282",
                                            sup: "\u2283",
                                            nsub: "\u2284",
                                            sube: "\u2286",
                                            supe: "\u2287",
                                            oplus: "\u2295",
                                            otimes: "\u2297",
                                            perp: "\u22a5",
                                            sdot: "\u22c5",
                                            lceil: "\u2308",
                                            rceil: "\u2309",
                                            lfloor: "\u230a",
                                            rfloor: "\u230b",
                                            lang: "\u2329",
                                            rang: "\u232a",
                                            loz: "\u25ca",
                                            spades: "\u2660",
                                            clubs: "\u2663",
                                            hearts: "\u2665",
                                            diams: "\u2666"
                                        },
                                        Ks = le `jsx` ({
                                            AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
                                            MissingClosingTagElement: e => {
                                                let {
                                                    openingTagName: t
                                                } = e;
                                                return `Expected corresponding JSX closing tag for <${t}>.`
                                            },
                                            MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
                                            UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
                                            UnexpectedToken: e => {
                                                let {
                                                    unexpected: t,
                                                    HTMLEntity: s
                                                } = e;
                                                return `Unexpected token \`${t}\`. Did you mean \`${s}\` or \`{'${t}'}\`?`
                                            },
                                            UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
                                            UnterminatedJsxContent: "Unterminated JSX contents.",
                                            UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
                                        });

                                    function Ws(e) {
                                        return !!e && ("JSXOpeningFragment" === e.type || "JSXClosingFragment" === e.type)
                                    }

                                    function Js(e) {
                                        if ("JSXIdentifier" === e.type) return e.name;
                                        if ("JSXNamespacedName" === e.type) return e.namespace.name + ":" + e.name.name;
                                        if ("JSXMemberExpression" === e.type) return Js(e.object) + "." + Js(e.property);
                                        throw new Error("Node had unexpected type: " + e.type)
                                    }
                                    var Xs = e => class extends e {
                                            jsxReadToken() {
                                                let e = "",
                                                    t = this.state.pos;
                                                for (;;) {
                                                    if (this.state.pos >= this.length) throw this.raise(Ks.UnterminatedJsxContent, {
                                                        at: this.state.startLoc
                                                    });
                                                    let s = this.input.charCodeAt(this.state.pos);
                                                    switch (s) {
                                                        case 60:
                                                        case 123:
                                                            return this.state.pos === this.state.start ? void(60 === s && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(140)) : super.getTokenFromCode(s)) : (e += this.input.slice(t, this.state.pos), void this.finishToken(139, e));
                                                        case 38:
                                                            e += this.input.slice(t, this.state.pos), e += this.jsxReadEntity(), t = this.state.pos;
                                                            break;
                                                        default:
                                                            Ht(s) ? (e += this.input.slice(t, this.state.pos), e += this.jsxReadNewLine(!0), t = this.state.pos) : ++this.state.pos
                                                    }
                                                }
                                            }
                                            jsxReadNewLine(e) {
                                                let t, s = this.input.charCodeAt(this.state.pos);
                                                return ++this.state.pos, 13 === s && 10 === this.input.charCodeAt(this.state.pos) ? (++this.state.pos, t = e ? "\n" : "\r\n") : t = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, t
                                            }
                                            jsxReadString(e) {
                                                let t = "",
                                                    s = ++this.state.pos;
                                                for (;;) {
                                                    if (this.state.pos >= this.length) throw this.raise(pe.UnterminatedString, {
                                                        at: this.state.startLoc
                                                    });
                                                    let r = this.input.charCodeAt(this.state.pos);
                                                    if (r === e) break;
                                                    38 === r ? (t += this.input.slice(s, this.state.pos), t += this.jsxReadEntity(), s = this.state.pos) : Ht(r) ? (t += this.input.slice(s, this.state.pos), t += this.jsxReadNewLine(!1), s = this.state.pos) : ++this.state.pos
                                                }
                                                t += this.input.slice(s, this.state.pos++), this.finishToken(131, t)
                                            }
                                            jsxReadEntity() {
                                                let e = ++this.state.pos;
                                                if (35 === this.codePointAtPos(this.state.pos)) {
                                                    ++this.state.pos;
                                                    let e = 10;
                                                    120 === this.codePointAtPos(this.state.pos) && (e = 16, ++this.state.pos);
                                                    let t = this.readInt(e, void 0, !1, "bail");
                                                    if (null !== t && 59 === this.codePointAtPos(this.state.pos)) return ++this.state.pos, String.fromCodePoint(t)
                                                } else {
                                                    let t = 0,
                                                        s = !1;
                                                    for (; t++ < 10 && this.state.pos < this.length && !(s = 59 == this.codePointAtPos(this.state.pos));) ++this.state.pos;
                                                    if (s) {
                                                        let t = this.input.slice(e, this.state.pos),
                                                            s = qs[t];
                                                        if (++this.state.pos, s) return s
                                                    }
                                                }
                                                return this.state.pos = e, "&"
                                            }
                                            jsxReadWord() {
                                                let e, t = this.state.pos;
                                                do {
                                                    e = this.input.charCodeAt(++this.state.pos)
                                                } while (Ee(e) || 45 === e);
                                                this.finishToken(138, this.input.slice(t, this.state.pos))
                                            }
                                            jsxParseIdentifier() {
                                                let e = this.startNode();
                                                return this.match(138) ? e.name = this.state.value : F(this.state.type) ? e.name = z(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier")
                                            }
                                            jsxParseNamespacedName() {
                                                let e = this.state.startLoc,
                                                    t = this.jsxParseIdentifier();
                                                if (!this.eat(14)) return t;
                                                let s = this.startNodeAt(e);
                                                return s.namespace = t, s.name = this.jsxParseIdentifier(), this.finishNode(s, "JSXNamespacedName")
                                            }
                                            jsxParseElementName() {
                                                let e = this.state.startLoc,
                                                    t = this.jsxParseNamespacedName();
                                                if ("JSXNamespacedName" === t.type) return t;
                                                for (; this.eat(16);) {
                                                    let s = this.startNodeAt(e);
                                                    s.object = t, s.property = this.jsxParseIdentifier(), t = this.finishNode(s, "JSXMemberExpression")
                                                }
                                                return t
                                            }
                                            jsxParseAttributeValue() {
                                                let e;
                                                switch (this.state.type) {
                                                    case 5:
                                                        return e = this.startNode(), this.setContext(i.brace), this.next(), e = this.jsxParseExpressionContainer(e, i.j_oTag), "JSXEmptyExpression" === e.expression.type && this.raise(Ks.AttributeIsEmpty, {
                                                            at: e
                                                        }), e;
                                                    case 140:
                                                    case 131:
                                                        return this.parseExprAtom();
                                                    default:
                                                        throw this.raise(Ks.UnsupportedJsxValue, {
                                                            at: this.state.startLoc
                                                        })
                                                }
                                            }
                                            jsxParseEmptyExpression() {
                                                let e = this.startNodeAt(this.state.lastTokEndLoc);
                                                return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc)
                                            }
                                            jsxParseSpreadChild(e) {
                                                return this.next(), e.expression = this.parseExpression(), this.setContext(i.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadChild")
                                            }
                                            jsxParseExpressionContainer(e, t) {
                                                if (this.match(8)) e.expression = this.jsxParseEmptyExpression();
                                                else {
                                                    let t = this.parseExpression();
                                                    e.expression = t
                                                }
                                                return this.setContext(t), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXExpressionContainer")
                                            }
                                            jsxParseAttribute() {
                                                let e = this.startNode();
                                                return this.match(5) ? (this.setContext(i.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(i.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"))
                                            }
                                            jsxParseOpeningElementAt(e) {
                                                let t = this.startNodeAt(e);
                                                return this.eat(141) ? this.finishNode(t, "JSXOpeningFragment") : (t.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(t))
                                            }
                                            jsxParseOpeningElementAfterName(e) {
                                                let t = [];
                                                for (; !this.match(56) && !this.match(141);) t.push(this.jsxParseAttribute());
                                                return e.attributes = t, e.selfClosing = this.eat(56), this.expect(141), this.finishNode(e, "JSXOpeningElement")
                                            }
                                            jsxParseClosingElementAt(e) {
                                                let t = this.startNodeAt(e);
                                                return this.eat(141) ? this.finishNode(t, "JSXClosingFragment") : (t.name = this.jsxParseElementName(), this.expect(141), this.finishNode(t, "JSXClosingElement"))
                                            }
                                            jsxParseElementAt(e) {
                                                let t = this.startNodeAt(e),
                                                    s = [],
                                                    r = this.jsxParseOpeningElementAt(e),
                                                    a = null;
                                                if (!r.selfClosing) {
                                                    e: for (;;) switch (this.state.type) {
                                                        case 140:
                                                            if (e = this.state.startLoc, this.next(), this.eat(56)) {
                                                                a = this.jsxParseClosingElementAt(e);
                                                                break e
                                                            }
                                                            s.push(this.jsxParseElementAt(e));
                                                            break;
                                                        case 139:
                                                            s.push(this.parseExprAtom());
                                                            break;
                                                        case 5:
                                                            {
                                                                let e = this.startNode();this.setContext(i.brace),
                                                                this.next(),
                                                                this.match(21) ? s.push(this.jsxParseSpreadChild(e)) : s.push(this.jsxParseExpressionContainer(e, i.j_expr));
                                                                break
                                                            }
                                                        default:
                                                            this.unexpected()
                                                    }
                                                    Ws(r) && !Ws(a) && null !== a ? this.raise(Ks.MissingClosingTagFragment, {
                                                        at: a
                                                    }) : (!Ws(r) && Ws(a) || !Ws(r) && !Ws(a) && Js(a.name) !== Js(r.name)) && this.raise(Ks.MissingClosingTagElement, {
                                                        at: a,
                                                        openingTagName: Js(r.name)
                                                    })
                                                }
                                                if (Ws(r) ? (t.openingFragment = r, t.closingFragment = a) : (t.openingElement = r, t.closingElement = a), t.children = s, this.match(47)) throw this.raise(Ks.UnwrappedAdjacentJSXElements, {
                                                    at: this.state.startLoc
                                                });
                                                return Ws(r) ? this.finishNode(t, "JSXFragment") : this.finishNode(t, "JSXElement")
                                            }
                                            jsxParseElement() {
                                                let e = this.state.startLoc;
                                                return this.next(), this.jsxParseElementAt(e)
                                            }
                                            setContext(e) {
                                                let {
                                                    context: t
                                                } = this.state;
                                                t[t.length - 1] = e
                                            }
                                            parseExprAtom(e) {
                                                return this.match(139) ? this.parseLiteral(this.state.value, "JSXText") : this.match(140) ? this.jsxParseElement() : this.match(47) && 33 !== this.input.charCodeAt(this.state.pos) ? (this.replaceToken(140), this.jsxParseElement()) : super.parseExprAtom(e)
                                            }
                                            skipSpace() {
                                                this.curContext().preserveSpace || super.skipSpace()
                                            }
                                            getTokenFromCode(e) {
                                                let t = this.curContext();
                                                if (t !== i.j_expr) {
                                                    if (t === i.j_oTag || t === i.j_cTag) {
                                                        if (Ae(e)) return void this.jsxReadWord();
                                                        if (62 === e) return ++this.state.pos, void this.finishToken(141);
                                                        if ((34 === e || 39 === e) && t === i.j_oTag) return void this.jsxReadString(e)
                                                    }
                                                    if (60 === e && this.state.canStartJSXElement && 33 !== this.input.charCodeAt(this.state.pos + 1)) return ++this.state.pos, void this.finishToken(140);
                                                    super.getTokenFromCode(e)
                                                } else this.jsxReadToken()
                                            }
                                            updateContext(e) {
                                                let {
                                                    context: t,
                                                    type: s
                                                } = this.state;
                                                if (56 === s && 140 === e) t.splice(-2, 2, i.j_cTag), this.state.canStartJSXElement = !1;
                                                else if (140 === s) t.push(i.j_oTag);
                                                else if (141 === s) {
                                                    let s = t[t.length - 1];
                                                    s === i.j_oTag && 56 === e || s === i.j_cTag ? (t.pop(), this.state.canStartJSXElement = t[t.length - 1] === i.j_expr) : (this.setContext(i.j_expr), this.state.canStartJSXElement = !0)
                                                } else this.state.canStartJSXElement = k(s)
                                            }
                                        },
                                        Gs = class extends kt {
                                            constructor() {
                                                super(...arguments), this.types = new Set, this.enums = new Set, this.constEnums = new Set, this.classes = new Set, this.exportOnlyBindings = new Set
                                            }
                                        },
                                        Ys = class extends Lt {
                                            constructor() {
                                                super(...arguments), this.importsStack = []
                                            }
                                            createScope(e) {
                                                return this.importsStack.push(new Set), new Gs(e)
                                            }
                                            enter(e) {
                                                e == qe && this.importsStack.push(new Set), super.enter(e)
                                            }
                                            exit() {
                                                let e = super.exit();
                                                return e == qe && this.importsStack.pop(), e
                                            }
                                            hasImport(e, t) {
                                                let s = this.importsStack.length;
                                                if (this.importsStack[s - 1].has(e)) return !0;
                                                if (!t && s > 1)
                                                    for (let r = 0; r < s - 1; r++)
                                                        if (this.importsStack[r].has(e)) return !0;
                                                return !1
                                            }
                                            declareName(e, t, s) {
                                                if (t & it) return this.hasImport(e, !0) && this.parser.raise(pe.VarRedeclaration, {
                                                    at: s,
                                                    identifierName: e
                                                }), void this.importsStack[this.importsStack.length - 1].add(e);
                                                let r = this.currentScope();
                                                if (t & st) return this.maybeExportDefined(r, e), void r.exportOnlyBindings.add(e);
                                                super.declareName(e, t, s), t & Je && (t & We || (this.checkRedeclarationInScope(r, e, t, s), this.maybeExportDefined(r, e)), r.types.add(e)), t & et && r.enums.add(e), t & tt && r.constEnums.add(e), t & Ze && r.classes.add(e)
                                            }
                                            isRedeclaredInScope(e, t, s) {
                                                return e.enums.has(t) ? !(s & et) || !!(s & tt) !== e.constEnums.has(t) : s & Ze && e.classes.has(t) ? !!e.lexical.has(t) && !!(s & We) : !!(s & Je && e.types.has(t)) || super.isRedeclaredInScope(e, t, s)
                                            }
                                            checkLocalExport(e) {
                                                let {
                                                    name: t
                                                } = e;
                                                if (!this.hasImport(t)) {
                                                    for (let e = this.scopeStack.length - 1; e >= 0; e--) {
                                                        let s = this.scopeStack[e];
                                                        if (s.types.has(t) || s.exportOnlyBindings.has(t)) return
                                                    }
                                                    super.checkLocalExport(e)
                                                }
                                            }
                                        },
                                        Qs = (e, t) => Object.hasOwnProperty.call(e, t) && e[t],
                                        Zs = e => "ParenthesizedExpression" === e.type ? Zs(e.expression) : e,
                                        er = class extends Fs {
                                            toAssignable(e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                                var s, r;
                                                let i;
                                                switch (("ParenthesizedExpression" === e.type || null != (s = e.extra) && s.parenthesized) && (i = Zs(e), t ? "Identifier" === i.type ? this.expressionScope.recordArrowParameterBindingError(pe.InvalidParenthesizedAssignment, {
                                                    at: e
                                                }) : "MemberExpression" !== i.type && this.raise(pe.InvalidParenthesizedAssignment, {
                                                    at: e
                                                }) : this.raise(pe.InvalidParenthesizedAssignment, {
                                                    at: e
                                                })), e.type) {
                                                    case "Identifier":
                                                    case "ObjectPattern":
                                                    case "ArrayPattern":
                                                    case "AssignmentPattern":
                                                    case "RestElement":
                                                        break;
                                                    case "ObjectExpression":
                                                        e.type = "ObjectPattern";
                                                        for (let s = 0, r = e.properties.length, i = r - 1; s < r; s++) {
                                                            var a;
                                                            let r = e.properties[s],
                                                                n = s === i;
                                                            this.toAssignableObjectExpressionProp(r, n, t), n && "RestElement" === r.type && null != (a = e.extra) && a.trailingCommaLoc && this.raise(pe.RestTrailingComma, {
                                                                at: e.extra.trailingCommaLoc
                                                            })
                                                        }
                                                        break;
                                                    case "ObjectProperty":
                                                        {
                                                            let {
                                                                key: s,
                                                                value: r
                                                            } = e;this.isPrivateName(s) && this.classScope.usePrivateName(this.getPrivateNameSV(s), s.loc.start),
                                                            this.toAssignable(r, t);
                                                            break
                                                        }
                                                    case "SpreadElement":
                                                        throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
                                                    case "ArrayExpression":
                                                        e.type = "ArrayPattern", this.toAssignableList(e.elements, null == (r = e.extra) ? void 0 : r.trailingCommaLoc, t);
                                                        break;
                                                    case "AssignmentExpression":
                                                        "=" !== e.operator && this.raise(pe.MissingEqInAssignment, {
                                                            at: e.left.loc.end
                                                        }), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
                                                        break;
                                                    case "ParenthesizedExpression":
                                                        this.toAssignable(i, t)
                                                }
                                            }
                                            toAssignableObjectExpressionProp(e, t, s) {
                                                if ("ObjectMethod" === e.type) this.raise("get" === e.kind || "set" === e.kind ? pe.PatternHasAccessor : pe.PatternHasMethod, {
                                                    at: e.key
                                                });
                                                else if ("SpreadElement" === e.type) {
                                                    e.type = "RestElement";
                                                    let r = e.argument;
                                                    this.checkToRestConversion(r, !1), this.toAssignable(r, s), t || this.raise(pe.RestTrailingComma, {
                                                        at: e
                                                    })
                                                } else this.toAssignable(e, s)
                                            }
                                            toAssignableList(e, t, s) {
                                                let r = e.length - 1;
                                                for (let i = 0; i <= r; i++) {
                                                    let a = e[i];
                                                    if (a) {
                                                        if ("SpreadElement" === a.type) {
                                                            a.type = "RestElement";
                                                            let e = a.argument;
                                                            this.checkToRestConversion(e, !0), this.toAssignable(e, s)
                                                        } else this.toAssignable(a, s);
                                                        "RestElement" === a.type && (i < r ? this.raise(pe.RestTrailingComma, {
                                                            at: a
                                                        }) : t && this.raise(pe.RestTrailingComma, {
                                                            at: t
                                                        }))
                                                    }
                                                }
                                            }
                                            isAssignable(e, t) {
                                                switch (e.type) {
                                                    case "Identifier":
                                                    case "ObjectPattern":
                                                    case "ArrayPattern":
                                                    case "AssignmentPattern":
                                                    case "RestElement":
                                                        return !0;
                                                    case "ObjectExpression":
                                                        {
                                                            let t = e.properties.length - 1;
                                                            return e.properties.every(((e, s) => "ObjectMethod" !== e.type && (s === t || "SpreadElement" !== e.type) && this.isAssignable(e)))
                                                        }
                                                    case "ObjectProperty":
                                                        return this.isAssignable(e.value);
                                                    case "SpreadElement":
                                                        return this.isAssignable(e.argument);
                                                    case "ArrayExpression":
                                                        return e.elements.every((e => null === e || this.isAssignable(e)));
                                                    case "AssignmentExpression":
                                                        return "=" === e.operator;
                                                    case "ParenthesizedExpression":
                                                        return this.isAssignable(e.expression);
                                                    case "MemberExpression":
                                                    case "OptionalMemberExpression":
                                                        return !t;
                                                    default:
                                                        return !1
                                                }
                                            }
                                            toReferencedList(e, t) {
                                                return e
                                            }
                                            toReferencedListDeep(e, t) {
                                                this.toReferencedList(e, t);
                                                for (let s of e) "ArrayExpression" === (null == s ? void 0 : s.type) && this.toReferencedListDeep(s.elements)
                                            }
                                            parseSpread(e) {
                                                let t = this.startNode();
                                                return this.next(), t.argument = this.parseMaybeAssignAllowIn(e, void 0), this.finishNode(t, "SpreadElement")
                                            }
                                            parseRestBinding() {
                                                let e = this.startNode();
                                                return this.next(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement")
                                            }
                                            parseBindingAtom() {
                                                switch (this.state.type) {
                                                    case 0:
                                                        {
                                                            let e = this.startNode();
                                                            return this.next(),
                                                            e.elements = this.parseBindingList(3, 93, 1),
                                                            this.finishNode(e, "ArrayPattern")
                                                        }
                                                    case 5:
                                                        return this.parseObjectLike(8, !0)
                                                }
                                                return this.parseIdentifier()
                                            }
                                            parseBindingList(e, t, s) {
                                                let r = 1 & s,
                                                    i = [],
                                                    a = !0;
                                                for (; !this.eat(e);)
                                                    if (a ? a = !1 : this.expect(12), r && this.match(12)) i.push(null);
                                                    else {
                                                        if (this.eat(e)) break;
                                                        if (this.match(21)) {
                                                            if (i.push(this.parseAssignableListItemTypes(this.parseRestBinding(), s)), !this.checkCommaAfterRest(t)) {
                                                                this.expect(e);
                                                                break
                                                            }
                                                        } else {
                                                            let e = [];
                                                            for (this.match(26) && this.hasPlugin("decorators") && this.raise(pe.UnsupportedParameterDecorator, {
                                                                    at: this.state.startLoc
                                                                }); this.match(26);) e.push(this.parseDecorator());
                                                            i.push(this.parseAssignableListItem(s, e))
                                                        }
                                                    }
                                                return i
                                            }
                                            parseBindingRestProperty(e) {
                                                return this.next(), e.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(e, "RestElement")
                                            }
                                            parseBindingProperty() {
                                                let e = this.startNode(),
                                                    {
                                                        type: t,
                                                        startLoc: s
                                                    } = this.state;
                                                return 21 === t ? this.parseBindingRestProperty(e) : (136 === t ? (this.expectPlugin("destructuringPrivate", s), this.classScope.usePrivateName(this.state.value, s), e.key = this.parsePrivateName()) : this.parsePropertyName(e), e.method = !1, this.parseObjPropValue(e, s, !1, !1, !0, !1))
                                            }
                                            parseAssignableListItem(e, t) {
                                                let s = this.parseMaybeDefault();
                                                this.parseAssignableListItemTypes(s, e);
                                                let r = this.parseMaybeDefault(s.loc.start, s);
                                                return t.length && (s.decorators = t), r
                                            }
                                            parseAssignableListItemTypes(e, t) {
                                                return e
                                            }
                                            parseMaybeDefault(e, t) {
                                                var s;
                                                if (null != e || (e = this.state.startLoc), t = null != (s = t) ? s : this.parseBindingAtom(), !this.eat(29)) return t;
                                                let r = this.startNodeAt(e);
                                                return r.left = t, r.right = this.parseMaybeAssignAllowIn(), this.finishNode(r, "AssignmentPattern")
                                            }
                                            isValidLVal(e, t, s) {
                                                return Qs({
                                                    AssignmentPattern: "left",
                                                    RestElement: "argument",
                                                    ObjectProperty: "value",
                                                    ParenthesizedExpression: "expression",
                                                    ArrayPattern: "elements",
                                                    ObjectPattern: "properties"
                                                }, e)
                                            }
                                            checkLVal(e, t) {
                                                let { in: s, binding: r = ft, checkClashes: i = !1, strictModeChanged: a = !1, hasParenthesizedAncestor: n = !1
                                                } = t;
                                                var o;
                                                let h = e.type;
                                                if (this.isObjectMethod(e)) return;
                                                if ("MemberExpression" === h) return void(r !== ft && this.raise(pe.InvalidPropertyBindingPattern, {
                                                    at: e
                                                }));
                                                if ("Identifier" === h) {
                                                    this.checkIdentifier(e, r, a);
                                                    let {
                                                        name: t
                                                    } = e;
                                                    return void(i && (i.has(t) ? this.raise(pe.ParamDupe, {
                                                        at: e
                                                    }) : i.add(t)))
                                                }
                                                let l = this.isValidLVal(h, !(n || null != (o = e.extra) && o.parenthesized) && "AssignmentExpression" === s.type, r);
                                                if (!0 === l) return;
                                                if (!1 === l) {
                                                    let t = r === ft ? pe.InvalidLhs : pe.InvalidLhsBinding;
                                                    return void this.raise(t, {
                                                        at: e,
                                                        ancestor: s
                                                    })
                                                }
                                                let [p, c] = Array.isArray(l) ? l : [l, "ParenthesizedExpression" === h], u = "ArrayPattern" === h || "ObjectPattern" === h || "ParenthesizedExpression" === h ? {
                                                    type: h
                                                } : s;
                                                for (let d of [].concat(e[p])) d && this.checkLVal(d, { in: u,
                                                    binding: r,
                                                    checkClashes: i,
                                                    strictModeChanged: a,
                                                    hasParenthesizedAncestor: c
                                                })
                                            }
                                            checkIdentifier(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                this.state.strict && (s ? Le(e.name, this.inModule) : ke(e.name)) && (t === ft ? this.raise(pe.StrictEvalArguments, {
                                                    at: e,
                                                    referenceName: e.name
                                                }) : this.raise(pe.StrictEvalArgumentsBinding, {
                                                    at: e,
                                                    bindingName: e.name
                                                })), t & at && "let" === e.name && this.raise(pe.LetInLexicalBinding, {
                                                    at: e
                                                }), t & ft || this.declareNameFromIdentifier(e, t)
                                            }
                                            declareNameFromIdentifier(e, t) {
                                                this.scope.declareName(e.name, t, e.loc.start)
                                            }
                                            checkToRestConversion(e, t) {
                                                switch (e.type) {
                                                    case "ParenthesizedExpression":
                                                        this.checkToRestConversion(e.expression, t);
                                                        break;
                                                    case "Identifier":
                                                    case "MemberExpression":
                                                        break;
                                                    case "ArrayExpression":
                                                    case "ObjectExpression":
                                                        if (t) break;
                                                    default:
                                                        this.raise(pe.InvalidRestAssignmentPattern, {
                                                            at: e
                                                        })
                                                }
                                            }
                                            checkCommaAfterRest(e) {
                                                return !!this.match(12) && (this.raise(this.lookaheadCharCode() === e ? pe.RestTrailingComma : pe.ElementAfterRest, {
                                                    at: this.state.startLoc
                                                }), !0)
                                            }
                                        },
                                        tr = (e, t) => Object.hasOwnProperty.call(e, t) && e[t];

                                    function sr(e) {
                                        if (null == e) throw new Error(`Unexpected ${e} value.`);
                                        return e
                                    }

                                    function rr(e) {
                                        if (!e) throw new Error("Assert fail")
                                    }
                                    var ir = le `typescript` ({
                                        AbstractMethodHasImplementation: e => {
                                            let {
                                                methodName: t
                                            } = e;
                                            return `Method '${t}' cannot have an implementation because it is marked abstract.`
                                        },
                                        AbstractPropertyHasInitializer: e => {
                                            let {
                                                propertyName: t
                                            } = e;
                                            return `Property '${t}' cannot have an initializer because it is marked abstract.`
                                        },
                                        AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
                                        AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
                                        AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
                                        ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
                                        ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
                                        ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
                                        ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
                                        DeclareAccessor: e => {
                                            let {
                                                kind: t
                                            } = e;
                                            return `'declare' is not allowed in ${t}ters.`
                                        },
                                        DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
                                        DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
                                        DuplicateAccessibilityModifier: e => {
                                            let {
                                                modifier: t
                                            } = e;
                                            return "Accessibility modifier already seen."
                                        },
                                        DuplicateModifier: e => {
                                            let {
                                                modifier: t
                                            } = e;
                                            return `Duplicate modifier: '${t}'.`
                                        },
                                        EmptyHeritageClauseType: e => {
                                            let {
                                                token: t
                                            } = e;
                                            return `'${t}' list cannot be empty.`
                                        },
                                        EmptyTypeArguments: "Type argument list cannot be empty.",
                                        EmptyTypeParameters: "Type parameter list cannot be empty.",
                                        ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
                                        ImportAliasHasImportType: "An import alias can not use 'import type'.",
                                        ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier",
                                        IncompatibleModifiers: e => {
                                            let {
                                                modifiers: t
                                            } = e;
                                            return `'${t[0]}' modifier cannot be used with '${t[1]}' modifier.`
                                        },
                                        IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
                                        IndexSignatureHasAccessibility: e => {
                                            let {
                                                modifier: t
                                            } = e;
                                            return `Index signatures cannot have an accessibility modifier ('${t}').`
                                        },
                                        IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
                                        IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
                                        IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
                                        InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
                                        InvalidModifierOnTypeMember: e => {
                                            let {
                                                modifier: t
                                            } = e;
                                            return `'${t}' modifier cannot appear on a type member.`
                                        },
                                        InvalidModifierOnTypeParameter: e => {
                                            let {
                                                modifier: t
                                            } = e;
                                            return `'${t}' modifier cannot appear on a type parameter.`
                                        },
                                        InvalidModifierOnTypeParameterPositions: e => {
                                            let {
                                                modifier: t
                                            } = e;
                                            return `'${t}' modifier can only appear on a type parameter of a class, interface or type alias.`
                                        },
                                        InvalidModifiersOrder: e => {
                                            let {
                                                orderedModifiers: t
                                            } = e;
                                            return `'${t[0]}' modifier must precede '${t[1]}' modifier.`
                                        },
                                        InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
                                        InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
                                        MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
                                        MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
                                        NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
                                        NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
                                        OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
                                        OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
                                        PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
                                        PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
                                        PrivateElementHasAccessibility: e => {
                                            let {
                                                modifier: t
                                            } = e;
                                            return `Private elements cannot have an accessibility modifier ('${t}').`
                                        },
                                        ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
                                        ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
                                        ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
                                        SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
                                        SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
                                        SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
                                        SingleTypeParameterWithoutTrailingComma: e => {
                                            let {
                                                typeParameterName: t
                                            } = e;
                                            return `Single type parameter ${t} should have a trailing comma. Example usage: <${t},>.`
                                        },
                                        StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
                                        TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
                                        TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
                                        TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
                                        TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
                                        TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
                                        UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
                                        UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
                                        UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
                                        UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
                                        UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
                                        UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
                                        UnsupportedSignatureParameterKind: e => {
                                            let {
                                                type: t
                                            } = e;
                                            return `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${t}.`
                                        }
                                    });

                                    function ar(e) {
                                        switch (e) {
                                            case "any":
                                                return "TSAnyKeyword";
                                            case "boolean":
                                                return "TSBooleanKeyword";
                                            case "bigint":
                                                return "TSBigIntKeyword";
                                            case "never":
                                                return "TSNeverKeyword";
                                            case "number":
                                                return "TSNumberKeyword";
                                            case "object":
                                                return "TSObjectKeyword";
                                            case "string":
                                                return "TSStringKeyword";
                                            case "symbol":
                                                return "TSSymbolKeyword";
                                            case "undefined":
                                                return "TSUndefinedKeyword";
                                            case "unknown":
                                                return "TSUnknownKeyword";
                                            default:
                                                return
                                        }
                                    }

                                    function nr(e) {
                                        return "private" === e || "public" === e || "protected" === e
                                    }

                                    function or(e) {
                                        return "in" === e || "out" === e
                                    }
                                    var hr = e => class extends e {
                                        constructor() {
                                            super(...arguments), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
                                                allowedModifiers: ["in", "out"],
                                                disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
                                                errorTemplate: ir.InvalidModifierOnTypeParameter
                                            }), this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
                                                allowedModifiers: ["const"],
                                                disallowedModifiers: ["in", "out"],
                                                errorTemplate: ir.InvalidModifierOnTypeParameterPositions
                                            }), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
                                                allowedModifiers: ["in", "out", "const"],
                                                disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
                                                errorTemplate: ir.InvalidModifierOnTypeParameter
                                            })
                                        }
                                        getScopeHandler() {
                                            return Ys
                                        }
                                        tsIsIdentifier() {
                                            return v(this.state.type)
                                        }
                                        tsTokenCanFollowModifier() {
                                            return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(136) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak()
                                        }
                                        tsNextTokenCanFollowModifier() {
                                            return this.next(), this.tsTokenCanFollowModifier()
                                        }
                                        tsParseModifier(e, t) {
                                            if (!v(this.state.type) && 58 !== this.state.type && 75 !== this.state.type) return;
                                            let s = this.state.value;
                                            if (-1 !== e.indexOf(s)) {
                                                if (t && this.tsIsStartOfStaticBlocks()) return;
                                                if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return s
                                            }
                                        }
                                        tsParseModifiers(e, t) {
                                            let {
                                                allowedModifiers: s,
                                                disallowedModifiers: r,
                                                stopOnStartOfClassStaticBlock: i,
                                                errorTemplate: a = ir.InvalidModifierOnTypeMember
                                            } = e, n = (e, s, r, i) => {
                                                s === r && t[i] && this.raise(ir.InvalidModifiersOrder, {
                                                    at: e,
                                                    orderedModifiers: [r, i]
                                                })
                                            }, o = (e, s, r, i) => {
                                                (t[r] && s === i || t[i] && s === r) && this.raise(ir.IncompatibleModifiers, {
                                                    at: e,
                                                    modifiers: [r, i]
                                                })
                                            };
                                            for (;;) {
                                                let {
                                                    startLoc: e
                                                } = this.state, h = this.tsParseModifier(s.concat(null != r ? r : []), i);
                                                if (!h) break;
                                                nr(h) ? t.accessibility ? this.raise(ir.DuplicateAccessibilityModifier, {
                                                    at: e,
                                                    modifier: h
                                                }) : (n(e, h, h, "override"), n(e, h, h, "static"), n(e, h, h, "readonly"), t.accessibility = h) : or(h) ? (t[h] && this.raise(ir.DuplicateModifier, {
                                                    at: e,
                                                    modifier: h
                                                }), t[h] = !0, n(e, h, "in", "out")) : (Object.hasOwnProperty.call(t, h) ? this.raise(ir.DuplicateModifier, {
                                                    at: e,
                                                    modifier: h
                                                }) : (n(e, h, "static", "readonly"), n(e, h, "static", "override"), n(e, h, "override", "readonly"), n(e, h, "abstract", "override"), o(e, h, "declare", "override"), o(e, h, "static", "abstract")), t[h] = !0), null != r && r.includes(h) && this.raise(a, {
                                                    at: e,
                                                    modifier: h
                                                })
                                            }
                                        }
                                        tsIsListTerminator(e) {
                                            switch (e) {
                                                case "EnumMembers":
                                                case "TypeMembers":
                                                    return this.match(8);
                                                case "HeritageClauseElement":
                                                    return this.match(5);
                                                case "TupleElementTypes":
                                                    return this.match(3);
                                                case "TypeParametersOrArguments":
                                                    return this.match(48)
                                            }
                                        }
                                        tsParseList(e, t) {
                                            let s = [];
                                            for (; !this.tsIsListTerminator(e);) s.push(t());
                                            return s
                                        }
                                        tsParseDelimitedList(e, t, s) {
                                            return sr(this.tsParseDelimitedListWorker(e, t, !0, s))
                                        }
                                        tsParseDelimitedListWorker(e, t, s, r) {
                                            let i = [],
                                                a = -1;
                                            for (; !this.tsIsListTerminator(e);) {
                                                a = -1;
                                                let r = t();
                                                if (null == r) return;
                                                if (i.push(r), !this.eat(12)) {
                                                    if (this.tsIsListTerminator(e)) break;
                                                    return void(s && this.expect(12))
                                                }
                                                a = this.state.lastTokStart
                                            }
                                            return r && (r.value = a), i
                                        }
                                        tsParseBracketedList(e, t, s, r, i) {
                                            r || (s ? this.expect(0) : this.expect(47));
                                            let a = this.tsParseDelimitedList(e, t, i);
                                            return s ? this.expect(3) : this.expect(48), a
                                        }
                                        tsParseImportType() {
                                            let e = this.startNode();
                                            return this.expect(83), this.expect(10), this.match(131) || this.raise(ir.UnsupportedImportTypeArgument, {
                                                at: this.state.startLoc
                                            }), e.argument = super.parseExprAtom(), this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName()), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType")
                                        }
                                        tsParseEntityName() {
                                            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                                t = this.parseIdentifier(e);
                                            for (; this.eat(16);) {
                                                let s = this.startNodeAtNode(t);
                                                s.left = t, s.right = this.parseIdentifier(e), t = this.finishNode(s, "TSQualifiedName")
                                            }
                                            return t
                                        }
                                        tsParseTypeReference() {
                                            let e = this.startNode();
                                            return e.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference")
                                        }
                                        tsParseThisTypePredicate(e) {
                                            this.next();
                                            let t = this.startNodeAtNode(e);
                                            return t.parameterName = e, t.typeAnnotation = this.tsParseTypeAnnotation(!1), t.asserts = !1, this.finishNode(t, "TSTypePredicate")
                                        }
                                        tsParseThisTypeNode() {
                                            let e = this.startNode();
                                            return this.next(), this.finishNode(e, "TSThisType")
                                        }
                                        tsParseTypeQuery() {
                                            let e = this.startNode();
                                            return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery")
                                        }
                                        tsParseTypeParameter(e) {
                                            let t = this.startNode();
                                            return e(t), t.name = this.tsParseTypeParameterName(), t.constraint = this.tsEatThenParseType(81), t.default = this.tsEatThenParseType(29), this.finishNode(t, "TSTypeParameter")
                                        }
                                        tsTryParseTypeParameters(e) {
                                            if (this.match(47)) return this.tsParseTypeParameters(e)
                                        }
                                        tsParseTypeParameters(e) {
                                            let t = this.startNode();
                                            this.match(47) || this.match(140) ? this.next() : this.unexpected();
                                            let s = {
                                                value: -1
                                            };
                                            return t.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, s), 0 === t.params.length && this.raise(ir.EmptyTypeParameters, {
                                                at: t
                                            }), -1 !== s.value && this.addExtra(t, "trailingComma", s.value), this.finishNode(t, "TSTypeParameterDeclaration")
                                        }
                                        tsFillSignature(e, t) {
                                            let s = 19 === e,
                                                r = "parameters",
                                                i = "typeAnnotation";
                                            t.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier), this.expect(10), t[r] = this.tsParseBindingListForSignature(), (s || this.match(e)) && (t[i] = this.tsParseTypeOrTypePredicateAnnotation(e))
                                        }
                                        tsParseBindingListForSignature() {
                                            return super.parseBindingList(11, 41, 2).map((e => ("Identifier" !== e.type && "RestElement" !== e.type && "ObjectPattern" !== e.type && "ArrayPattern" !== e.type && this.raise(ir.UnsupportedSignatureParameterKind, {
                                                at: e,
                                                type: e.type
                                            }), e)))
                                        }
                                        tsParseTypeMemberSemicolon() {
                                            !this.eat(12) && !this.isLineTerminator() && this.expect(13)
                                        }
                                        tsParseSignatureMember(e, t) {
                                            return this.tsFillSignature(14, t), this.tsParseTypeMemberSemicolon(), this.finishNode(t, e)
                                        }
                                        tsIsUnambiguouslyIndexSignature() {
                                            return this.next(), !!v(this.state.type) && (this.next(), this.match(14))
                                        }
                                        tsTryParseIndexSignature(e) {
                                            if (!this.match(0) || !this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))) return;
                                            this.expect(0);
                                            let t = this.parseIdentifier();
                                            t.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(t), this.expect(3), e.parameters = [t];
                                            let s = this.tsTryParseTypeAnnotation();
                                            return s && (e.typeAnnotation = s), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature")
                                        }
                                        tsParsePropertyOrMethodSignature(e, t) {
                                            this.eat(17) && (e.optional = !0);
                                            let s = e;
                                            if (this.match(10) || this.match(47)) {
                                                t && this.raise(ir.ReadonlyForMethodSignature, {
                                                    at: e
                                                });
                                                let r = s;
                                                r.kind && this.match(47) && this.raise(ir.AccesorCannotHaveTypeParameters, {
                                                    at: this.state.curPosition()
                                                }), this.tsFillSignature(14, r), this.tsParseTypeMemberSemicolon();
                                                let i = "parameters",
                                                    a = "typeAnnotation";
                                                if ("get" === r.kind) r[i].length > 0 && (this.raise(pe.BadGetterArity, {
                                                    at: this.state.curPosition()
                                                }), this.isThisParam(r[i][0]) && this.raise(ir.AccesorCannotDeclareThisParameter, {
                                                    at: this.state.curPosition()
                                                }));
                                                else if ("set" === r.kind) {
                                                    if (1 !== r[i].length) this.raise(pe.BadSetterArity, {
                                                        at: this.state.curPosition()
                                                    });
                                                    else {
                                                        let e = r[i][0];
                                                        this.isThisParam(e) && this.raise(ir.AccesorCannotDeclareThisParameter, {
                                                            at: this.state.curPosition()
                                                        }), "Identifier" === e.type && e.optional && this.raise(ir.SetAccesorCannotHaveOptionalParameter, {
                                                            at: this.state.curPosition()
                                                        }), "RestElement" === e.type && this.raise(ir.SetAccesorCannotHaveRestParameter, {
                                                            at: this.state.curPosition()
                                                        })
                                                    }
                                                    r[a] && this.raise(ir.SetAccesorCannotHaveReturnType, {
                                                        at: r[a]
                                                    })
                                                } else r.kind = "method";
                                                return this.finishNode(r, "TSMethodSignature")
                                            } {
                                                let e = s;
                                                t && (e.readonly = !0);
                                                let r = this.tsTryParseTypeAnnotation();
                                                return r && (e.typeAnnotation = r), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSPropertySignature")
                                            }
                                        }
                                        tsParseTypeMember() {
                                            let e = this.startNode();
                                            if (this.match(10) || this.match(47)) return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
                                            if (this.match(77)) {
                                                let t = this.startNode();
                                                return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(t, "new"), this.tsParsePropertyOrMethodSignature(e, !1))
                                            }
                                            return this.tsParseModifiers({
                                                allowedModifiers: ["readonly"],
                                                disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
                                            }, e), this.tsTryParseIndexSignature(e) || (super.parsePropertyName(e), !e.computed && "Identifier" === e.key.type && ("get" === e.key.name || "set" === e.key.name) && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, super.parsePropertyName(e)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly))
                                        }
                                        tsParseTypeLiteral() {
                                            let e = this.startNode();
                                            return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral")
                                        }
                                        tsParseObjectTypeMembers() {
                                            this.expect(5);
                                            let e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
                                            return this.expect(8), e
                                        }
                                        tsIsStartOfMappedType() {
                                            return this.next(), this.eat(53) ? this.isContextual(120) : (this.isContextual(120) && this.next(), !(!this.match(0) || (this.next(), !this.tsIsIdentifier())) && (this.next(), this.match(58)))
                                        }
                                        tsParseMappedTypeParameter() {
                                            let e = this.startNode();
                                            return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsExpectThenParseType(58), this.finishNode(e, "TSTypeParameter")
                                        }
                                        tsParseMappedType() {
                                            let e = this.startNode();
                                            return this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(120)) : this.eatContextual(120) && (e.readonly = !0), this.expect(0), e.typeParameter = this.tsParseMappedTypeParameter(), e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = !0), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType")
                                        }
                                        tsParseTupleType() {
                                            let e = this.startNode();
                                            e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
                                            let t = !1,
                                                s = null;
                                            return e.elementTypes.forEach((e => {
                                                let {
                                                    type: r
                                                } = e;
                                                t && "TSRestType" !== r && "TSOptionalType" !== r && !("TSNamedTupleMember" === r && e.optional) && this.raise(ir.OptionalTypeBeforeRequired, {
                                                    at: e
                                                }), t || (t = "TSNamedTupleMember" === r && e.optional || "TSOptionalType" === r);
                                                let i = r;
                                                "TSRestType" === r && (i = (e = e.typeAnnotation).type);
                                                let a = "TSNamedTupleMember" === i;
                                                null != s || (s = a), s !== a && this.raise(ir.MixedLabeledAndUnlabeledElements, {
                                                    at: e
                                                })
                                            })), this.finishNode(e, "TSTupleType")
                                        }
                                        tsParseTupleElementType() {
                                            let e, t, s, r, {
                                                    startLoc: i
                                                } = this.state,
                                                a = this.eat(21),
                                                n = N(this.state.type) ? this.lookaheadCharCode() : null;
                                            if (58 === n) e = !0, s = !1, t = this.parseIdentifier(!0), this.expect(14), r = this.tsParseType();
                                            else if (63 === n) {
                                                s = !0;
                                                let i = this.state.startLoc,
                                                    a = this.state.value,
                                                    n = this.tsParseNonArrayType();
                                                58 === this.lookaheadCharCode() ? (e = !0, t = this.createIdentifier(this.startNodeAt(i), a), this.expect(17), this.expect(14), r = this.tsParseType()) : (e = !1, r = n, this.expect(17))
                                            } else r = this.tsParseType(), s = this.eat(17), e = this.eat(14);
                                            if (e) {
                                                let e;
                                                t ? (e = this.startNodeAtNode(t), e.optional = s, e.label = t, e.elementType = r, this.eat(17) && (e.optional = !0, this.raise(ir.TupleOptionalAfterType, {
                                                    at: this.state.lastTokStartLoc
                                                }))) : (e = this.startNodeAtNode(r), e.optional = s, this.raise(ir.InvalidTupleMemberLabel, {
                                                    at: r
                                                }), e.label = r, e.elementType = this.tsParseType()), r = this.finishNode(e, "TSNamedTupleMember")
                                            } else if (s) {
                                                let e = this.startNodeAtNode(r);
                                                e.typeAnnotation = r, r = this.finishNode(e, "TSOptionalType")
                                            }
                                            if (a) {
                                                let e = this.startNodeAt(i);
                                                e.typeAnnotation = r, r = this.finishNode(e, "TSRestType")
                                            }
                                            return r
                                        }
                                        tsParseParenthesizedType() {
                                            let e = this.startNode();
                                            return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType")
                                        }
                                        tsParseFunctionOrConstructorType(e, t) {
                                            let s = this.startNode();
                                            return "TSConstructorType" === e && (s.abstract = !!t, t && this.next(), this.next()), this.tsInAllowConditionalTypesContext((() => this.tsFillSignature(19, s))), this.finishNode(s, e)
                                        }
                                        tsParseLiteralTypeNode() {
                                            let e = this.startNode();
                                            return e.literal = (() => {
                                                switch (this.state.type) {
                                                    case 132:
                                                    case 133:
                                                    case 131:
                                                    case 85:
                                                    case 86:
                                                        return super.parseExprAtom();
                                                    default:
                                                        this.unexpected()
                                                }
                                            })(), this.finishNode(e, "TSLiteralType")
                                        }
                                        tsParseTemplateLiteralType() {
                                            let e = this.startNode();
                                            return e.literal = super.parseTemplate(!1), this.finishNode(e, "TSLiteralType")
                                        }
                                        parseTemplateSubstitution() {
                                            return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution()
                                        }
                                        tsParseThisTypeOrThisTypePredicate() {
                                            let e = this.tsParseThisTypeNode();
                                            return this.isContextual(114) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e
                                        }
                                        tsParseNonArrayType() {
                                            switch (this.state.type) {
                                                case 131:
                                                case 132:
                                                case 133:
                                                case 85:
                                                case 86:
                                                    return this.tsParseLiteralTypeNode();
                                                case 53:
                                                    if ("-" === this.state.value) {
                                                        let e = this.startNode(),
                                                            t = this.lookahead();
                                                        return 132 !== t.type && 133 !== t.type && this.unexpected(), e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType")
                                                    }
                                                    break;
                                                case 78:
                                                    return this.tsParseThisTypeOrThisTypePredicate();
                                                case 87:
                                                    return this.tsParseTypeQuery();
                                                case 83:
                                                    return this.tsParseImportType();
                                                case 5:
                                                    return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
                                                case 0:
                                                    return this.tsParseTupleType();
                                                case 10:
                                                    return this.tsParseParenthesizedType();
                                                case 25:
                                                case 24:
                                                    return this.tsParseTemplateLiteralType();
                                                default:
                                                    {
                                                        let {
                                                            type: e
                                                        } = this.state;
                                                        if (v(e) || 88 === e || 84 === e) {
                                                            let t = 88 === e ? "TSVoidKeyword" : 84 === e ? "TSNullKeyword" : ar(this.state.value);
                                                            if (void 0 !== t && 46 !== this.lookaheadCharCode()) {
                                                                let e = this.startNode();
                                                                return this.next(), this.finishNode(e, t)
                                                            }
                                                            return this.tsParseTypeReference()
                                                        }
                                                    }
                                            }
                                            this.unexpected()
                                        }
                                        tsParseArrayTypeOrHigher() {
                                            let e = this.tsParseNonArrayType();
                                            for (; !this.hasPrecedingLineBreak() && this.eat(0);)
                                                if (this.match(3)) {
                                                    let t = this.startNodeAtNode(e);
                                                    t.elementType = e, this.expect(3), e = this.finishNode(t, "TSArrayType")
                                                } else {
                                                    let t = this.startNodeAtNode(e);
                                                    t.objectType = e, t.indexType = this.tsParseType(), this.expect(3), e = this.finishNode(t, "TSIndexedAccessType")
                                                }
                                            return e
                                        }
                                        tsParseTypeOperator() {
                                            let e = this.startNode(),
                                                t = this.state.value;
                                            return this.next(), e.operator = t, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), "readonly" === t && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator")
                                        }
                                        tsCheckTypeAnnotationForReadOnly(e) {
                                            switch (e.typeAnnotation.type) {
                                                case "TSTupleType":
                                                case "TSArrayType":
                                                    return;
                                                default:
                                                    this.raise(ir.UnexpectedReadonly, {
                                                        at: e
                                                    })
                                            }
                                        }
                                        tsParseInferType() {
                                            let e = this.startNode();
                                            this.expectContextual(113);
                                            let t = this.startNode();
                                            return t.name = this.tsParseTypeParameterName(), t.constraint = this.tsTryParse((() => this.tsParseConstraintForInferType())), e.typeParameter = this.finishNode(t, "TSTypeParameter"), this.finishNode(e, "TSInferType")
                                        }
                                        tsParseConstraintForInferType() {
                                            if (this.eat(81)) {
                                                let e = this.tsInDisallowConditionalTypesContext((() => this.tsParseType()));
                                                if (this.state.inDisallowConditionalTypesContext || !this.match(17)) return e
                                            }
                                        }
                                        tsParseTypeOperatorOrHigher() {
                                            return U(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(113) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext((() => this.tsParseArrayTypeOrHigher()))
                                        }
                                        tsParseUnionOrIntersectionType(e, t, s) {
                                            let r = this.startNode(),
                                                i = this.eat(s),
                                                a = [];
                                            do {
                                                a.push(t())
                                            } while (this.eat(s));
                                            return 1 !== a.length || i ? (r.types = a, this.finishNode(r, e)) : a[0]
                                        }
                                        tsParseIntersectionTypeOrHigher() {
                                            return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45)
                                        }
                                        tsParseUnionTypeOrHigher() {
                                            return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43)
                                        }
                                        tsIsStartOfFunctionType() {
                                            return !!this.match(47) || this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this))
                                        }
                                        tsSkipParameterStart() {
                                            if (v(this.state.type) || this.match(78)) return this.next(), !0;
                                            if (this.match(5)) {
                                                let {
                                                    errors: e
                                                } = this.state, t = e.length;
                                                try {
                                                    return this.parseObjectLike(8, !0), e.length === t
                                                } catch {
                                                    return !1
                                                }
                                            }
                                            if (this.match(0)) {
                                                this.next();
                                                let {
                                                    errors: e
                                                } = this.state, t = e.length;
                                                try {
                                                    return super.parseBindingList(3, 93, 1), e.length === t
                                                } catch {
                                                    return !1
                                                }
                                            }
                                            return !1
                                        }
                                        tsIsUnambiguouslyStartOfFunctionType() {
                                            return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))))
                                        }
                                        tsParseTypeOrTypePredicateAnnotation(e) {
                                            return this.tsInType((() => {
                                                let t = this.startNode();
                                                this.expect(e);
                                                let s = this.startNode(),
                                                    r = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
                                                if (r && this.match(78)) {
                                                    let e = this.tsParseThisTypeOrThisTypePredicate();
                                                    return "TSThisType" === e.type ? (s.parameterName = e, s.asserts = !0, s.typeAnnotation = null, e = this.finishNode(s, "TSTypePredicate")) : (this.resetStartLocationFromNode(e, s), e.asserts = !0), t.typeAnnotation = e, this.finishNode(t, "TSTypeAnnotation")
                                                }
                                                let i = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
                                                if (!i) return r ? (s.parameterName = this.parseIdentifier(), s.asserts = r, s.typeAnnotation = null, t.typeAnnotation = this.finishNode(s, "TSTypePredicate"), this.finishNode(t, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, t);
                                                let a = this.tsParseTypeAnnotation(!1);
                                                return s.parameterName = i, s.typeAnnotation = a, s.asserts = r, t.typeAnnotation = this.finishNode(s, "TSTypePredicate"), this.finishNode(t, "TSTypeAnnotation")
                                            }))
                                        }
                                        tsTryParseTypeOrTypePredicateAnnotation() {
                                            return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0
                                        }
                                        tsTryParseTypeAnnotation() {
                                            return this.match(14) ? this.tsParseTypeAnnotation() : void 0
                                        }
                                        tsTryParseType() {
                                            return this.tsEatThenParseType(14)
                                        }
                                        tsParseTypePredicatePrefix() {
                                            let e = this.parseIdentifier();
                                            if (this.isContextual(114) && !this.hasPrecedingLineBreak()) return this.next(), e
                                        }
                                        tsParseTypePredicateAsserts() {
                                            if (107 !== this.state.type) return !1;
                                            let e = this.state.containsEsc;
                                            return this.next(), !(!v(this.state.type) && !this.match(78)) && (e && this.raise(pe.InvalidEscapedReservedWord, {
                                                at: this.state.lastTokStartLoc,
                                                reservedWord: "asserts"
                                            }), !0)
                                        }
                                        tsParseTypeAnnotation() {
                                            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.startNode();
                                            return this.tsInType((() => {
                                                e && this.expect(14), t.typeAnnotation = this.tsParseType()
                                            })), this.finishNode(t, "TSTypeAnnotation")
                                        }
                                        tsParseType() {
                                            rr(this.state.inType);
                                            let e = this.tsParseNonConditionalType();
                                            if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81)) return e;
                                            let t = this.startNodeAtNode(e);
                                            return t.checkType = e, t.extendsType = this.tsInDisallowConditionalTypesContext((() => this.tsParseNonConditionalType())), this.expect(17), t.trueType = this.tsInAllowConditionalTypesContext((() => this.tsParseType())), this.expect(14), t.falseType = this.tsInAllowConditionalTypesContext((() => this.tsParseType())), this.finishNode(t, "TSConditionalType")
                                        }
                                        isAbstractConstructorSignature() {
                                            return this.isContextual(122) && 77 === this.lookahead().type
                                        }
                                        tsParseNonConditionalType() {
                                            return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher()
                                        }
                                        tsParseTypeAssertion() {
                                            this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(ir.ReservedTypeAssertion, {
                                                at: this.state.startLoc
                                            });
                                            let e = this.startNode();
                                            return e.typeAnnotation = this.tsInType((() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType()))), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion")
                                        }
                                        tsParseHeritageClause(e) {
                                            let t = this.state.startLoc,
                                                s = this.tsParseDelimitedList("HeritageClauseElement", (() => {
                                                    let e = this.startNode();
                                                    return e.expression = this.tsParseEntityName(), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSExpressionWithTypeArguments")
                                                }));
                                            return s.length || this.raise(ir.EmptyHeritageClauseType, {
                                                at: t,
                                                token: e
                                            }), s
                                        }
                                        tsParseInterfaceDeclaration(e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            if (this.hasFollowingLineBreak()) return null;
                                            this.expectContextual(127), t.declare && (e.declare = !0), v(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, ct)) : (e.id = null, this.raise(ir.MissingInterfaceName, {
                                                at: this.state.startLoc
                                            })), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
                                            let s = this.startNode();
                                            return s.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(s, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration")
                                        }
                                        tsParseTypeAliasDeclaration(e) {
                                            return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, ut), e.typeAnnotation = this.tsInType((() => {
                                                if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers), this.expect(29), this.isContextual(112) && 16 !== this.lookahead().type) {
                                                    let e = this.startNode();
                                                    return this.next(), this.finishNode(e, "TSIntrinsicKeyword")
                                                }
                                                return this.tsParseType()
                                            })), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration")
                                        }
                                        tsInNoContext(e) {
                                            let t = this.state.context;
                                            this.state.context = [t[0]];
                                            try {
                                                return e()
                                            } finally {
                                                this.state.context = t
                                            }
                                        }
                                        tsInType(e) {
                                            let t = this.state.inType;
                                            this.state.inType = !0;
                                            try {
                                                return e()
                                            } finally {
                                                this.state.inType = t
                                            }
                                        }
                                        tsInDisallowConditionalTypesContext(e) {
                                            let t = this.state.inDisallowConditionalTypesContext;
                                            this.state.inDisallowConditionalTypesContext = !0;
                                            try {
                                                return e()
                                            } finally {
                                                this.state.inDisallowConditionalTypesContext = t
                                            }
                                        }
                                        tsInAllowConditionalTypesContext(e) {
                                            let t = this.state.inDisallowConditionalTypesContext;
                                            this.state.inDisallowConditionalTypesContext = !1;
                                            try {
                                                return e()
                                            } finally {
                                                this.state.inDisallowConditionalTypesContext = t
                                            }
                                        }
                                        tsEatThenParseType(e) {
                                            return this.match(e) ? this.tsNextThenParseType() : void 0
                                        }
                                        tsExpectThenParseType(e) {
                                            return this.tsDoThenParseType((() => this.expect(e)))
                                        }
                                        tsNextThenParseType() {
                                            return this.tsDoThenParseType((() => this.next()))
                                        }
                                        tsDoThenParseType(e) {
                                            return this.tsInType((() => (e(), this.tsParseType())))
                                        }
                                        tsParseEnumMember() {
                                            let e = this.startNode();
                                            return e.id = this.match(131) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(!0), this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember")
                                        }
                                        tsParseEnumDeclaration(e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            return t.const && (e.const = !0), t.declare && (e.declare = !0), this.expectContextual(124), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? xt : dt), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration")
                                        }
                                        tsParseModuleBlock() {
                                            let e = this.startNode();
                                            return this.scope.enter(Be), this.expect(5), super.parseBlockOrModuleBlockBody(e.body = [], void 0, !0, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock")
                                        }
                                        tsParseModuleOrNamespaceDeclaration(e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                            if (e.id = this.parseIdentifier(), t || this.checkIdentifier(e.id, gt), this.eat(16)) {
                                                let t = this.startNode();
                                                this.tsParseModuleOrNamespaceDeclaration(t, !0), e.body = t
                                            } else this.scope.enter(qe), this.prodParam.enter(Ts), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
                                            return this.finishNode(e, "TSModuleDeclaration")
                                        }
                                        tsParseAmbientExternalModuleDeclaration(e) {
                                            return this.isContextual(110) ? (e.global = !0, e.id = this.parseIdentifier()) : this.match(131) ? e.id = super.parseStringLiteral(this.state.value) : this.unexpected(), this.match(5) ? (this.scope.enter(qe), this.prodParam.enter(Ts), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration")
                                        }
                                        tsParseImportEqualsDeclaration(e, t) {
                                            e.isExport = t || !1, e.id = this.parseIdentifier(), this.checkIdentifier(e.id, it), this.expect(29);
                                            let s = this.tsParseModuleReference();
                                            return "type" === e.importKind && "TSExternalModuleReference" !== s.type && this.raise(ir.ImportAliasHasImportType, {
                                                at: s
                                            }), e.moduleReference = s, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration")
                                        }
                                        tsIsExternalModuleReference() {
                                            return this.isContextual(117) && 40 === this.lookaheadCharCode()
                                        }
                                        tsParseModuleReference() {
                                            return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1)
                                        }
                                        tsParseExternalModuleReference() {
                                            let e = this.startNode();
                                            return this.expectContextual(117), this.expect(10), this.match(131) || this.unexpected(), e.expression = super.parseExprAtom(), this.expect(11), this.finishNode(e, "TSExternalModuleReference")
                                        }
                                        tsLookAhead(e) {
                                            let t = this.state.clone(),
                                                s = e();
                                            return this.state = t, s
                                        }
                                        tsTryParseAndCatch(e) {
                                            let t = this.tryParse((t => e() || t()));
                                            if (!t.aborted && t.node) return t.error && (this.state = t.failState), t.node
                                        }
                                        tsTryParse(e) {
                                            let t = this.state.clone(),
                                                s = e();
                                            if (void 0 !== s && !1 !== s) return s;
                                            this.state = t
                                        }
                                        tsTryParseDeclare(e) {
                                            if (this.isLineTerminator()) return;
                                            let t, s = this.state.type;
                                            return this.isContextual(99) && (s = 74, t = "let"), this.tsInAmbientContext((() => {
                                                if (68 === s) return e.declare = !0, super.parseFunctionStatement(e, !1, !1);
                                                if (80 === s) return e.declare = !0, this.parseClass(e, !0, !1);
                                                if (124 === s) return this.tsParseEnumDeclaration(e, {
                                                    declare: !0
                                                });
                                                if (110 === s) return this.tsParseAmbientExternalModuleDeclaration(e);
                                                if (75 === s || 74 === s) return this.match(75) && this.isLookaheadContextual("enum") ? (this.expect(75), this.tsParseEnumDeclaration(e, {
                                                    const: !0,
                                                    declare: !0
                                                })) : (e.declare = !0, this.parseVarStatement(e, t || this.state.value, !0));
                                                if (127 === s) {
                                                    let t = this.tsParseInterfaceDeclaration(e, {
                                                        declare: !0
                                                    });
                                                    if (t) return t
                                                }
                                                return v(s) ? this.tsParseDeclaration(e, this.state.value, !0, null) : void 0
                                            }))
                                        }
                                        tsTryParseExportDeclaration() {
                                            return this.tsParseDeclaration(this.startNode(), this.state.value, !0, null)
                                        }
                                        tsParseExpressionStatement(e, t, s) {
                                            switch (t.name) {
                                                case "declare":
                                                    {
                                                        let t = this.tsTryParseDeclare(e);
                                                        if (t) return t.declare = !0, t;
                                                        break
                                                    }
                                                case "global":
                                                    if (this.match(5)) {
                                                        this.scope.enter(qe), this.prodParam.enter(Ts);
                                                        let s = e;
                                                        return s.global = !0, s.id = t, s.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(s, "TSModuleDeclaration")
                                                    }
                                                    break;
                                                default:
                                                    return this.tsParseDeclaration(e, t.name, !1, s)
                                            }
                                        }
                                        tsParseDeclaration(e, t, s, r) {
                                            switch (t) {
                                                case "abstract":
                                                    if (this.tsCheckLineTerminator(s) && (this.match(80) || v(this.state.type))) return this.tsParseAbstractDeclaration(e, r);
                                                    break;
                                                case "module":
                                                    if (this.tsCheckLineTerminator(s)) {
                                                        if (this.match(131)) return this.tsParseAmbientExternalModuleDeclaration(e);
                                                        if (v(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(e)
                                                    }
                                                    break;
                                                case "namespace":
                                                    if (this.tsCheckLineTerminator(s) && v(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(e);
                                                    break;
                                                case "type":
                                                    if (this.tsCheckLineTerminator(s) && v(this.state.type)) return this.tsParseTypeAliasDeclaration(e)
                                            }
                                        }
                                        tsCheckLineTerminator(e) {
                                            return e ? !this.hasFollowingLineBreak() && (this.next(), !0) : !this.isLineTerminator()
                                        }
                                        tsTryParseGenericAsyncArrowFunction(e) {
                                            if (!this.match(47)) return;
                                            let t = this.state.maybeInArrowParameters;
                                            this.state.maybeInArrowParameters = !0;
                                            let s = this.tsTryParseAndCatch((() => {
                                                let t = this.startNodeAt(e);
                                                return t.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier), super.parseFunctionParams(t), t.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), t
                                            }));
                                            return this.state.maybeInArrowParameters = t, s ? super.parseArrowExpression(s, null, !0) : void 0
                                        }
                                        tsParseTypeArgumentsInExpression() {
                                            if (47 === this.reScan_lt()) return this.tsParseTypeArguments()
                                        }
                                        tsParseTypeArguments() {
                                            let e = this.startNode();
                                            return e.params = this.tsInType((() => this.tsInNoContext((() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))))), 0 === e.params.length && this.raise(ir.EmptyTypeArguments, {
                                                at: e
                                            }), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation")
                                        }
                                        tsIsDeclarationStart() {
                                            return _(this.state.type)
                                        }
                                        isExportDefaultSpecifier() {
                                            return !this.tsIsDeclarationStart() && super.isExportDefaultSpecifier()
                                        }
                                        parseAssignableListItem(e, t) {
                                            let s = this.state.startLoc,
                                                r = {};
                                            this.tsParseModifiers({
                                                allowedModifiers: ["public", "private", "protected", "override", "readonly"]
                                            }, r);
                                            let i = r.accessibility,
                                                a = r.override,
                                                n = r.readonly;
                                            !(4 & e) && (i || n || a) && this.raise(ir.UnexpectedParameterModifier, {
                                                at: s
                                            });
                                            let o = this.parseMaybeDefault();
                                            this.parseAssignableListItemTypes(o, e);
                                            let h = this.parseMaybeDefault(o.loc.start, o);
                                            if (i || n || a) {
                                                let e = this.startNodeAt(s);
                                                return t.length && (e.decorators = t), i && (e.accessibility = i), n && (e.readonly = n), a && (e.override = a), "Identifier" !== h.type && "AssignmentPattern" !== h.type && this.raise(ir.UnsupportedParameterPropertyKind, {
                                                    at: e
                                                }), e.parameter = h, this.finishNode(e, "TSParameterProperty")
                                            }
                                            return t.length && (o.decorators = t), h
                                        }
                                        isSimpleParameter(e) {
                                            return "TSParameterProperty" === e.type && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e)
                                        }
                                        tsDisallowOptionalPattern(e) {
                                            for (let t of e.params) "Identifier" !== t.type && t.optional && !this.state.isAmbientContext && this.raise(ir.PatternIsOptional, {
                                                at: t
                                            })
                                        }
                                        setArrowFunctionParameters(e, t, s) {
                                            super.setArrowFunctionParameters(e, t, s), this.tsDisallowOptionalPattern(e)
                                        }
                                        parseFunctionBodyAndFinish(e, t) {
                                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
                                            let r = "FunctionDeclaration" === t ? "TSDeclareFunction" : "ClassMethod" === t || "ClassPrivateMethod" === t ? "TSDeclareMethod" : void 0;
                                            return r && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, r) : "TSDeclareFunction" === r && this.state.isAmbientContext && (this.raise(ir.DeclareFunctionHasImplementation, {
                                                at: e
                                            }), e.declare) ? super.parseFunctionBodyAndFinish(e, r, s) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, t, s))
                                        }
                                        registerFunctionStatementId(e) {
                                            !e.body && e.id ? this.checkIdentifier(e.id, mt) : super.registerFunctionStatementId(e)
                                        }
                                        tsCheckForInvalidTypeCasts(e) {
                                            e.forEach((e => {
                                                "TSTypeCastExpression" === (null == e ? void 0 : e.type) && this.raise(ir.UnexpectedTypeAnnotation, {
                                                    at: e.typeAnnotation
                                                })
                                            }))
                                        }
                                        toReferencedList(e, t) {
                                            return this.tsCheckForInvalidTypeCasts(e), e
                                        }
                                        parseArrayLike(e, t, s, r) {
                                            let i = super.parseArrayLike(e, t, s, r);
                                            return "ArrayExpression" === i.type && this.tsCheckForInvalidTypeCasts(i.elements), i
                                        }
                                        parseSubscript(e, t, s, r) {
                                            if (!this.hasPrecedingLineBreak() && this.match(35)) {
                                                this.state.canStartJSXElement = !1, this.next();
                                                let s = this.startNodeAt(t);
                                                return s.expression = e, this.finishNode(s, "TSNonNullExpression")
                                            }
                                            let i = !1;
                                            if (this.match(18) && 60 === this.lookaheadCharCode()) {
                                                if (s) return r.stop = !0, e;
                                                r.optionalChainMember = i = !0, this.next()
                                            }
                                            if (this.match(47) || this.match(51)) {
                                                let a, n = this.tsTryParseAndCatch((() => {
                                                    if (!s && this.atPossibleAsyncArrow(e)) {
                                                        let e = this.tsTryParseGenericAsyncArrowFunction(t);
                                                        if (e) return e
                                                    }
                                                    let n = this.tsParseTypeArgumentsInExpression();
                                                    if (!n) return;
                                                    if (i && !this.match(10)) return void(a = this.state.curPosition());
                                                    if (V(this.state.type)) {
                                                        let s = super.parseTaggedTemplateExpression(e, t, r);
                                                        return s.typeParameters = n, s
                                                    }
                                                    if (!s && this.eat(10)) {
                                                        let s = this.startNodeAt(t);
                                                        return s.callee = e, s.arguments = this.parseCallExpressionArguments(11, !1), this.tsCheckForInvalidTypeCasts(s.arguments), s.typeParameters = n, r.optionalChainMember && (s.optional = i), this.finishCallExpression(s, r.optionalChainMember)
                                                    }
                                                    let o = this.state.type;
                                                    if (48 === o || 52 === o || 10 !== o && L(o) && !this.hasPrecedingLineBreak()) return;
                                                    let h = this.startNodeAt(t);
                                                    return h.expression = e, h.typeParameters = n, this.finishNode(h, "TSInstantiationExpression")
                                                }));
                                                if (a && this.unexpected(a, 10), n) return "TSInstantiationExpression" === n.type && (this.match(16) || this.match(18) && 40 !== this.lookaheadCharCode()) && this.raise(ir.InvalidPropertyAccessAfterInstantiationExpression, {
                                                    at: this.state.startLoc
                                                }), n
                                            }
                                            return super.parseSubscript(e, t, s, r)
                                        }
                                        parseNewCallee(e) {
                                            var t;
                                            super.parseNewCallee(e);
                                            let {
                                                callee: s
                                            } = e;
                                            "TSInstantiationExpression" === s.type && (null == (t = s.extra) || !t.parenthesized) && (e.typeParameters = s.typeParameters, e.callee = s.expression)
                                        }
                                        parseExprOp(e, t, s) {
                                            let r;
                                            if (H(58) > s && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (r = this.isContextual(118)))) {
                                                let i = this.startNodeAt(t);
                                                return i.expression = e, i.typeAnnotation = this.tsInType((() => (this.next(), this.match(75) ? (r && this.raise(pe.UnexpectedKeyword, {
                                                    at: this.state.startLoc,
                                                    keyword: "const"
                                                }), this.tsParseTypeReference()) : this.tsParseType()))), this.finishNode(i, r ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(i, t, s)
                                            }
                                            return super.parseExprOp(e, t, s)
                                        }
                                        checkReservedWord(e, t, s, r) {
                                            this.state.isAmbientContext || super.checkReservedWord(e, t, s, r)
                                        }
                                        checkImportReflection(e) {
                                            super.checkImportReflection(e), e.module && "value" !== e.importKind && this.raise(ir.ImportReflectionHasImportType, {
                                                at: e.specifiers[0].loc.start
                                            })
                                        }
                                        checkDuplicateExports() {}
                                        parseImport(e) {
                                            if (e.importKind = "value", v(this.state.type) || this.match(55) || this.match(5)) {
                                                let t = this.lookahead();
                                                if (this.isContextual(128) && 12 !== t.type && 97 !== t.type && 29 !== t.type && (e.importKind = "type", this.next(), t = this.lookahead()), v(this.state.type) && 29 === t.type) return this.tsParseImportEqualsDeclaration(e)
                                            }
                                            let t = super.parseImport(e);
                                            return "type" === t.importKind && t.specifiers.length > 1 && "ImportDefaultSpecifier" === t.specifiers[0].type && this.raise(ir.TypeImportCannotSpecifyDefaultAndNamed, {
                                                at: t
                                            }), t
                                        }
                                        parseExport(e, t) {
                                            if (this.match(83)) return this.next(), this.isContextual(128) && 61 !== this.lookaheadCharCode() ? (e.importKind = "type", this.next()) : e.importKind = "value", this.tsParseImportEqualsDeclaration(e, !0);
                                            if (this.eat(29)) {
                                                let t = e;
                                                return t.expression = super.parseExpression(), this.semicolon(), this.finishNode(t, "TSExportAssignment")
                                            }
                                            if (this.eatContextual(93)) {
                                                let t = e;
                                                return this.expectContextual(126), t.id = this.parseIdentifier(), this.semicolon(), this.finishNode(t, "TSNamespaceExportDeclaration")
                                            }
                                            if (e.exportKind = "value", this.isContextual(128)) {
                                                let t = this.lookaheadCharCode();
                                                (123 === t || 42 === t) && (this.next(), e.exportKind = "type")
                                            }
                                            return super.parseExport(e, t)
                                        }
                                        isAbstractClass() {
                                            return this.isContextual(122) && 80 === this.lookahead().type
                                        }
                                        parseExportDefaultExpression() {
                                            if (this.isAbstractClass()) {
                                                let e = this.startNode();
                                                return this.next(), e.abstract = !0, this.parseClass(e, !0, !0)
                                            }
                                            if (this.match(127)) {
                                                let e = this.tsParseInterfaceDeclaration(this.startNode());
                                                if (e) return e
                                            }
                                            return super.parseExportDefaultExpression()
                                        }
                                        parseVarStatement(e, t) {
                                            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                                {
                                                    isAmbientContext: r
                                                } = this.state,
                                                i = super.parseVarStatement(e, t, s || r);
                                            if (!r) return i;
                                            for (let {
                                                    id: a,
                                                    init: n
                                                } of i.declarations) n && ("const" !== t || a.typeAnnotation ? this.raise(ir.InitializerNotAllowedInAmbientContext, {
                                                at: n
                                            }) : pr(n, this.hasPlugin("estree")) || this.raise(ir.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, {
                                                at: n
                                            }));
                                            return i
                                        }
                                        parseStatementContent(e, t) {
                                            if (this.match(75) && this.isLookaheadContextual("enum")) {
                                                let e = this.startNode();
                                                return this.expect(75), this.tsParseEnumDeclaration(e, {
                                                    const: !0
                                                })
                                            }
                                            if (this.isContextual(124)) return this.tsParseEnumDeclaration(this.startNode());
                                            if (this.isContextual(127)) {
                                                let e = this.tsParseInterfaceDeclaration(this.startNode());
                                                if (e) return e
                                            }
                                            return super.parseStatementContent(e, t)
                                        }
                                        parseAccessModifier() {
                                            return this.tsParseModifier(["public", "protected", "private"])
                                        }
                                        tsHasSomeModifiers(e, t) {
                                            return t.some((t => nr(t) ? e.accessibility === t : !!e[t]))
                                        }
                                        tsIsStartOfStaticBlocks() {
                                            return this.isContextual(104) && 123 === this.lookaheadCharCode()
                                        }
                                        parseClassMember(e, t, s) {
                                            let r = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
                                            this.tsParseModifiers({
                                                allowedModifiers: r,
                                                disallowedModifiers: ["in", "out"],
                                                stopOnStartOfClassStaticBlock: !0,
                                                errorTemplate: ir.InvalidModifierOnTypeParameterPositions
                                            }, t);
                                            let i = () => {
                                                this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(t, r) && this.raise(ir.StaticBlockCannotHaveModifier, {
                                                    at: this.state.curPosition()
                                                }), super.parseClassStaticBlock(e, t)) : this.parseClassMemberWithIsStatic(e, t, s, !!t.static)
                                            };
                                            t.declare ? this.tsInAmbientContext(i) : i()
                                        }
                                        parseClassMemberWithIsStatic(e, t, s, r) {
                                            let i = this.tsTryParseIndexSignature(t);
                                            if (i) return e.body.push(i), t.abstract && this.raise(ir.IndexSignatureHasAbstract, {
                                                at: t
                                            }), t.accessibility && this.raise(ir.IndexSignatureHasAccessibility, {
                                                at: t,
                                                modifier: t.accessibility
                                            }), t.declare && this.raise(ir.IndexSignatureHasDeclare, {
                                                at: t
                                            }), void(t.override && this.raise(ir.IndexSignatureHasOverride, {
                                                at: t
                                            }));
                                            !this.state.inAbstractClass && t.abstract && this.raise(ir.NonAbstractClassHasAbstractMethod, {
                                                at: t
                                            }), t.override && (s.hadSuperClass || this.raise(ir.OverrideNotInSubClass, {
                                                at: t
                                            })), super.parseClassMemberWithIsStatic(e, t, s, r)
                                        }
                                        parsePostMemberNameModifiers(e) {
                                            this.eat(17) && (e.optional = !0), e.readonly && this.match(10) && this.raise(ir.ClassMethodHasReadonly, {
                                                at: e
                                            }), e.declare && this.match(10) && this.raise(ir.ClassMethodHasDeclare, {
                                                at: e
                                            })
                                        }
                                        parseExpressionStatement(e, t, s) {
                                            return ("Identifier" === t.type ? this.tsParseExpressionStatement(e, t, s) : void 0) || super.parseExpressionStatement(e, t, s)
                                        }
                                        shouldParseExportDeclaration() {
                                            return !!this.tsIsDeclarationStart() || super.shouldParseExportDeclaration()
                                        }
                                        parseConditional(e, t, s) {
                                            if (!this.state.maybeInArrowParameters || !this.match(17)) return super.parseConditional(e, t, s);
                                            let r = this.tryParse((() => super.parseConditional(e, t)));
                                            return r.node ? (r.error && (this.state = r.failState), r.node) : (r.error && super.setOptionalParametersError(s, r.error), e)
                                        }
                                        parseParenItem(e, t) {
                                            if (e = super.parseParenItem(e, t), this.eat(17) && (e.optional = !0, this.resetEndLocation(e)), this.match(14)) {
                                                let s = this.startNodeAt(t);
                                                return s.expression = e, s.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(s, "TSTypeCastExpression")
                                            }
                                            return e
                                        }
                                        parseExportDeclaration(e) {
                                            if (!this.state.isAmbientContext && this.isContextual(123)) return this.tsInAmbientContext((() => this.parseExportDeclaration(e)));
                                            let t = this.state.startLoc,
                                                s = this.eatContextual(123);
                                            if (s && (this.isContextual(123) || !this.shouldParseExportDeclaration())) throw this.raise(ir.ExpectedAmbientAfterExportDeclare, {
                                                at: this.state.startLoc
                                            });
                                            let r = v(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
                                            return r ? (("TSInterfaceDeclaration" === r.type || "TSTypeAliasDeclaration" === r.type || s) && (e.exportKind = "type"), s && (this.resetStartLocation(r, t), r.declare = !0), r) : null
                                        }
                                        parseClassId(e, t, s, r) {
                                            if ((!t || s) && this.isContextual(111)) return;
                                            super.parseClassId(e, t, s, e.declare ? mt : nt);
                                            let i = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
                                            i && (e.typeParameters = i)
                                        }
                                        parseClassPropertyAnnotation(e) {
                                            e.optional || (this.eat(35) ? e.definite = !0 : this.eat(17) && (e.optional = !0));
                                            let t = this.tsTryParseTypeAnnotation();
                                            t && (e.typeAnnotation = t)
                                        }
                                        parseClassProperty(e) {
                                            if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(ir.DeclareClassFieldHasInitializer, {
                                                    at: this.state.startLoc
                                                }), e.abstract && this.match(29)) {
                                                let {
                                                    key: t
                                                } = e;
                                                this.raise(ir.AbstractPropertyHasInitializer, {
                                                    at: this.state.startLoc,
                                                    propertyName: "Identifier" !== t.type || e.computed ? `[${this.input.slice(t.start,t.end)}]` : t.name
                                                })
                                            }
                                            return super.parseClassProperty(e)
                                        }
                                        parseClassPrivateProperty(e) {
                                            return e.abstract && this.raise(ir.PrivateElementHasAbstract, {
                                                at: e
                                            }), e.accessibility && this.raise(ir.PrivateElementHasAccessibility, {
                                                at: e,
                                                modifier: e.accessibility
                                            }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e)
                                        }
                                        parseClassAccessorProperty(e) {
                                            return this.parseClassPropertyAnnotation(e), e.optional && this.raise(ir.AccessorCannotBeOptional, {
                                                at: e
                                            }), super.parseClassAccessorProperty(e)
                                        }
                                        pushClassMethod(e, t, s, r, i, a) {
                                            let n = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                                            n && i && this.raise(ir.ConstructorHasTypeParameters, {
                                                at: n
                                            });
                                            let {
                                                declare: o = !1,
                                                kind: h
                                            } = t;
                                            o && ("get" === h || "set" === h) && this.raise(ir.DeclareAccessor, {
                                                at: t,
                                                kind: h
                                            }), n && (t.typeParameters = n), super.pushClassMethod(e, t, s, r, i, a)
                                        }
                                        pushClassPrivateMethod(e, t, s, r) {
                                            let i = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                                            i && (t.typeParameters = i), super.pushClassPrivateMethod(e, t, s, r)
                                        }
                                        declareClassPrivateMethodInScope(e, t) {
                                            "TSDeclareMethod" !== e.type && ("MethodDefinition" === e.type && !e.value.body || super.declareClassPrivateMethodInScope(e, t))
                                        }
                                        parseClassSuper(e) {
                                            super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(111) && (e.implements = this.tsParseHeritageClause("implements"))
                                        }
                                        parseObjPropValue(e, t, s, r, i, a, n) {
                                            let o = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                                            return o && (e.typeParameters = o), super.parseObjPropValue(e, t, s, r, i, a, n)
                                        }
                                        parseFunctionParams(e, t) {
                                            let s = this.tsTryParseTypeParameters(this.tsParseConstModifier);
                                            s && (e.typeParameters = s), super.parseFunctionParams(e, t)
                                        }
                                        parseVarId(e, t) {
                                            super.parseVarId(e, t), "Identifier" === e.id.type && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = !0);
                                            let s = this.tsTryParseTypeAnnotation();
                                            s && (e.id.typeAnnotation = s, this.resetEndLocation(e.id))
                                        }
                                        parseAsyncArrowFromCallExpression(e, t) {
                                            return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, t)
                                        }
                                        parseMaybeAssign(e, t) {
                                            var s, r, a, n, o, h, l;
                                            let p, c, u;
                                            if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
                                                if (p = this.state.clone(), c = this.tryParse((() => super.parseMaybeAssign(e, t)), p), !c.error) return c.node;
                                                let {
                                                    context: s
                                                } = this.state, r = s[s.length - 1];
                                                (r === i.j_oTag || r === i.j_expr) && s.pop()
                                            }
                                            if ((null == (s = c) || !s.error) && !this.match(47)) return super.parseMaybeAssign(e, t);
                                            (!p || p === this.state) && (p = this.state.clone());
                                            let d, m = this.tryParse((s => {
                                                var r, i;
                                                d = this.tsParseTypeParameters(this.tsParseConstModifier);
                                                let a = super.parseMaybeAssign(e, t);
                                                return ("ArrowFunctionExpression" !== a.type || null != (r = a.extra) && r.parenthesized) && s(), 0 !== (null == (i = d) ? void 0 : i.params.length) && this.resetStartLocationFromNode(a, d), a.typeParameters = d, a
                                            }), p);
                                            if (!m.error && !m.aborted) return d && this.reportReservedArrowTypeParam(d), m.node;
                                            if (!c && (rr(!this.hasPlugin("jsx")), u = this.tryParse((() => super.parseMaybeAssign(e, t)), p), !u.error)) return u.node;
                                            if (null != (r = c) && r.node) return this.state = c.failState, c.node;
                                            if (m.node) return this.state = m.failState, d && this.reportReservedArrowTypeParam(d), m.node;
                                            if (null != (a = u) && a.node) return this.state = u.failState, u.node;
                                            throw null != (n = c) && n.thrown ? c.error : m.thrown ? m.error : null != (o = u) && o.thrown ? u.error : (null == (h = c) ? void 0 : h.error) || m.error || (null == (l = u) ? void 0 : l.error)
                                        }
                                        reportReservedArrowTypeParam(e) {
                                            var t;
                                            1 === e.params.length && !e.params[0].constraint && (null == (t = e.extra) || !t.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(ir.ReservedArrowTypeParam, {
                                                at: e
                                            })
                                        }
                                        parseMaybeUnary(e, t) {
                                            return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, t)
                                        }
                                        parseArrow(e) {
                                            if (this.match(14)) {
                                                let t = this.tryParse((e => {
                                                    let t = this.tsParseTypeOrTypePredicateAnnotation(14);
                                                    return (this.canInsertSemicolon() || !this.match(19)) && e(), t
                                                }));
                                                if (t.aborted) return;
                                                t.thrown || (t.error && (this.state = t.failState), e.returnType = t.node)
                                            }
                                            return super.parseArrow(e)
                                        }
                                        parseAssignableListItemTypes(e, t) {
                                            if (!(2 & t)) return e;
                                            this.eat(17) && (e.optional = !0);
                                            let s = this.tsTryParseTypeAnnotation();
                                            return s && (e.typeAnnotation = s), this.resetEndLocation(e), e
                                        }
                                        isAssignable(e, t) {
                                            switch (e.type) {
                                                case "TSTypeCastExpression":
                                                    return this.isAssignable(e.expression, t);
                                                case "TSParameterProperty":
                                                    return !0;
                                                default:
                                                    return super.isAssignable(e, t)
                                            }
                                        }
                                        toAssignable(e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                            switch (e.type) {
                                                case "ParenthesizedExpression":
                                                    this.toAssignableParenthesizedExpression(e, t);
                                                    break;
                                                case "TSAsExpression":
                                                case "TSSatisfiesExpression":
                                                case "TSNonNullExpression":
                                                case "TSTypeAssertion":
                                                    t ? this.expressionScope.recordArrowParameterBindingError(ir.UnexpectedTypeCastInParameter, {
                                                        at: e
                                                    }) : this.raise(ir.UnexpectedTypeCastInParameter, {
                                                        at: e
                                                    }), this.toAssignable(e.expression, t);
                                                    break;
                                                case "AssignmentExpression":
                                                    !t && "TSTypeCastExpression" === e.left.type && (e.left = this.typeCastToParameter(e.left));
                                                default:
                                                    super.toAssignable(e, t)
                                            }
                                        }
                                        toAssignableParenthesizedExpression(e, t) {
                                            switch (e.expression.type) {
                                                case "TSAsExpression":
                                                case "TSSatisfiesExpression":
                                                case "TSNonNullExpression":
                                                case "TSTypeAssertion":
                                                case "ParenthesizedExpression":
                                                    this.toAssignable(e.expression, t);
                                                    break;
                                                default:
                                                    super.toAssignable(e, t)
                                            }
                                        }
                                        checkToRestConversion(e, t) {
                                            switch (e.type) {
                                                case "TSAsExpression":
                                                case "TSSatisfiesExpression":
                                                case "TSTypeAssertion":
                                                case "TSNonNullExpression":
                                                    this.checkToRestConversion(e.expression, !1);
                                                    break;
                                                default:
                                                    super.checkToRestConversion(e, t)
                                            }
                                        }
                                        isValidLVal(e, t, s) {
                                            return tr({
                                                TSTypeCastExpression: !0,
                                                TSParameterProperty: "parameter",
                                                TSNonNullExpression: "expression",
                                                TSAsExpression: (s !== ft || !t) && ["expression", !0],
                                                TSSatisfiesExpression: (s !== ft || !t) && ["expression", !0],
                                                TSTypeAssertion: (s !== ft || !t) && ["expression", !0]
                                            }, e) || super.isValidLVal(e, t, s)
                                        }
                                        parseBindingAtom() {
                                            return 78 === this.state.type ? this.parseIdentifier(!0) : super.parseBindingAtom()
                                        }
                                        parseMaybeDecoratorArguments(e) {
                                            if (this.match(47) || this.match(51)) {
                                                let t = this.tsParseTypeArgumentsInExpression();
                                                if (this.match(10)) {
                                                    let s = super.parseMaybeDecoratorArguments(e);
                                                    return s.typeParameters = t, s
                                                }
                                                this.unexpected(null, 10)
                                            }
                                            return super.parseMaybeDecoratorArguments(e)
                                        }
                                        checkCommaAfterRest(e) {
                                            return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), !1) : super.checkCommaAfterRest(e)
                                        }
                                        isClassMethod() {
                                            return this.match(47) || super.isClassMethod()
                                        }
                                        isClassProperty() {
                                            return this.match(35) || this.match(14) || super.isClassProperty()
                                        }
                                        parseMaybeDefault(e, t) {
                                            let s = super.parseMaybeDefault(e, t);
                                            return "AssignmentPattern" === s.type && s.typeAnnotation && s.right.start < s.typeAnnotation.start && this.raise(ir.TypeAnnotationAfterAssign, {
                                                at: s.typeAnnotation
                                            }), s
                                        }
                                        getTokenFromCode(e) {
                                            if (this.state.inType) {
                                                if (62 === e) return void this.finishOp(48, 1);
                                                if (60 === e) return void this.finishOp(47, 1)
                                            }
                                            super.getTokenFromCode(e)
                                        }
                                        reScan_lt_gt() {
                                            let {
                                                type: e
                                            } = this.state;
                                            47 === e ? (this.state.pos -= 1, this.readToken_lt()) : 48 === e && (this.state.pos -= 1, this.readToken_gt())
                                        }
                                        reScan_lt() {
                                            let {
                                                type: e
                                            } = this.state;
                                            return 51 === e ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e
                                        }
                                        toAssignableList(e, t, s) {
                                            for (let r = 0; r < e.length; r++) {
                                                let t = e[r];
                                                "TSTypeCastExpression" === (null == t ? void 0 : t.type) && (e[r] = this.typeCastToParameter(t))
                                            }
                                            super.toAssignableList(e, t, s)
                                        }
                                        typeCastToParameter(e) {
                                            return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression
                                        }
                                        shouldParseArrow(e) {
                                            return this.match(14) ? e.every((e => this.isAssignable(e, !0))) : super.shouldParseArrow(e)
                                        }
                                        shouldParseAsyncArrow() {
                                            return this.match(14) || super.shouldParseAsyncArrow()
                                        }
                                        canHaveLeadingDecorator() {
                                            return super.canHaveLeadingDecorator() || this.isAbstractClass()
                                        }
                                        jsxParseOpeningElementAfterName(e) {
                                            if (this.match(47) || this.match(51)) {
                                                let t = this.tsTryParseAndCatch((() => this.tsParseTypeArgumentsInExpression()));
                                                t && (e.typeParameters = t)
                                            }
                                            return super.jsxParseOpeningElementAfterName(e)
                                        }
                                        getGetterSetterExpectedParamCount(e) {
                                            let t = super.getGetterSetterExpectedParamCount(e),
                                                s = this.getObjectOrClassMethodParams(e)[0];
                                            return s && this.isThisParam(s) ? t + 1 : t
                                        }
                                        parseCatchClauseParam() {
                                            let e = super.parseCatchClauseParam(),
                                                t = this.tsTryParseTypeAnnotation();
                                            return t && (e.typeAnnotation = t, this.resetEndLocation(e)), e
                                        }
                                        tsInAmbientContext(e) {
                                            let t = this.state.isAmbientContext;
                                            this.state.isAmbientContext = !0;
                                            try {
                                                return e()
                                            } finally {
                                                this.state.isAmbientContext = t
                                            }
                                        }
                                        parseClass(e, t, s) {
                                            let r = this.state.inAbstractClass;
                                            this.state.inAbstractClass = !!e.abstract;
                                            try {
                                                return super.parseClass(e, t, s)
                                            } finally {
                                                this.state.inAbstractClass = r
                                            }
                                        }
                                        tsParseAbstractDeclaration(e, t) {
                                            if (this.match(80)) return e.abstract = !0, this.maybeTakeDecorators(t, this.parseClass(e, !0, !1));
                                            if (this.isContextual(127)) {
                                                if (!this.hasFollowingLineBreak()) return e.abstract = !0, this.raise(ir.NonClassMethodPropertyHasAbstractModifer, {
                                                    at: e
                                                }), this.tsParseInterfaceDeclaration(e)
                                            } else this.unexpected(null, 80)
                                        }
                                        parseMethod(e, t, s, r, i, a, n) {
                                            let o = super.parseMethod(e, t, s, r, i, a, n);
                                            if (o.abstract && (this.hasPlugin("estree") ? o.value.body : o.body)) {
                                                let {
                                                    key: e
                                                } = o;
                                                this.raise(ir.AbstractMethodHasImplementation, {
                                                    at: o,
                                                    methodName: "Identifier" !== e.type || o.computed ? `[${this.input.slice(e.start,e.end)}]` : e.name
                                                })
                                            }
                                            return o
                                        }
                                        tsParseTypeParameterName() {
                                            return this.parseIdentifier().name
                                        }
                                        shouldParseAsAmbientContext() {
                                            return !!this.getPluginOption("typescript", "dts")
                                        }
                                        parse() {
                                            return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.parse()
                                        }
                                        getExpression() {
                                            return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.getExpression()
                                        }
                                        parseExportSpecifier(e, t, s, r) {
                                            return !t && r ? (this.parseTypeOnlyImportExportSpecifier(e, !1, s), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, t, s, r))
                                        }
                                        parseImportSpecifier(e, t, s, r, i) {
                                            return !t && r ? (this.parseTypeOnlyImportExportSpecifier(e, !0, s), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, t, s, r, s ? Pt : it))
                                        }
                                        parseTypeOnlyImportExportSpecifier(e, t, s) {
                                            let r, i = t ? "imported" : "local",
                                                a = t ? "local" : "exported",
                                                n = e[i],
                                                o = !1,
                                                h = !0,
                                                l = n.loc.start;
                                            if (this.isContextual(93)) {
                                                let e = this.parseIdentifier();
                                                if (this.isContextual(93)) {
                                                    let s = this.parseIdentifier();
                                                    N(this.state.type) ? (o = !0, n = e, r = t ? this.parseIdentifier() : this.parseModuleExportName(), h = !1) : (r = s, h = !1)
                                                } else N(this.state.type) ? (h = !1, r = t ? this.parseIdentifier() : this.parseModuleExportName()) : (o = !0, n = e)
                                            } else N(this.state.type) && (o = !0, t ? (n = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(n.name, n.loc.start, !0, !0)) : n = this.parseModuleExportName());
                                            o && s && this.raise(t ? ir.TypeModifierIsUsedInTypeImports : ir.TypeModifierIsUsedInTypeExports, {
                                                at: l
                                            }), e[i] = n, e[a] = r, e[t ? "importKind" : "exportKind"] = o ? "type" : "value", h && this.eatContextual(93) && (e[a] = t ? this.parseIdentifier() : this.parseModuleExportName()), e[a] || (e[a] = Os(e[i])), t && this.checkIdentifier(e[a], o ? Pt : it)
                                        }
                                    };

                                    function lr(e) {
                                        if ("MemberExpression" !== e.type) return !1;
                                        let {
                                            computed: t,
                                            property: s
                                        } = e;
                                        return (!t || "StringLiteral" === s.type || !("TemplateLiteral" !== s.type || s.expressions.length > 0)) && dr(e.object)
                                    }

                                    function pr(e, t) {
                                        var s;
                                        let {
                                            type: r
                                        } = e;
                                        if (null != (s = e.extra) && s.parenthesized) return !1;
                                        if (t) {
                                            if ("Literal" === r) {
                                                let {
                                                    value: t
                                                } = e;
                                                if ("string" == typeof t || "boolean" == typeof t) return !0
                                            }
                                        } else if ("StringLiteral" === r || "BooleanLiteral" === r) return !0;
                                        return !!(cr(e, t) || ur(e, t) || "TemplateLiteral" === r && 0 === e.expressions.length || lr(e))
                                    }

                                    function cr(e, t) {
                                        return t ? "Literal" === e.type && ("number" == typeof e.value || "bigint" in e) : "NumericLiteral" === e.type || "BigIntLiteral" === e.type
                                    }

                                    function ur(e, t) {
                                        if ("UnaryExpression" === e.type) {
                                            let {
                                                operator: s,
                                                argument: r
                                            } = e;
                                            if ("-" === s && cr(r, t)) return !0
                                        }
                                        return !1
                                    }

                                    function dr(e) {
                                        return "Identifier" === e.type || "MemberExpression" === e.type && !e.computed && dr(e.object)
                                    }
                                    var mr = le `placeholders` ({
                                            ClassNameIsRequired: "A class name is required.",
                                            UnexpectedSpace: "Unexpected space in placeholder."
                                        }),
                                        fr = e => class extends e {
                                            parsePlaceholder(e) {
                                                if (this.match(142)) {
                                                    let t = this.startNode();
                                                    return this.next(), this.assertNoSpace(), t.name = super.parseIdentifier(!0), this.assertNoSpace(), this.expect(142), this.finishPlaceholder(t, e)
                                                }
                                            }
                                            finishPlaceholder(e, t) {
                                                let s = !(!e.expectedNode || "Placeholder" !== e.type);
                                                return e.expectedNode = t, s ? e : this.finishNode(e, "Placeholder")
                                            }
                                            getTokenFromCode(e) {
                                                37 === e && 37 === this.input.charCodeAt(this.state.pos + 1) ? this.finishOp(142, 2) : super.getTokenFromCode(e)
                                            }
                                            parseExprAtom(e) {
                                                return this.parsePlaceholder("Expression") || super.parseExprAtom(e)
                                            }
                                            parseIdentifier(e) {
                                                return this.parsePlaceholder("Identifier") || super.parseIdentifier(e)
                                            }
                                            checkReservedWord(e, t, s, r) {
                                                void 0 !== e && super.checkReservedWord(e, t, s, r)
                                            }
                                            parseBindingAtom() {
                                                return this.parsePlaceholder("Pattern") || super.parseBindingAtom()
                                            }
                                            isValidLVal(e, t, s) {
                                                return "Placeholder" === e || super.isValidLVal(e, t, s)
                                            }
                                            toAssignable(e, t) {
                                                e && "Placeholder" === e.type && "Expression" === e.expectedNode ? e.expectedNode = "Pattern" : super.toAssignable(e, t)
                                            }
                                            chStartsBindingIdentifier(e, t) {
                                                return !(!super.chStartsBindingIdentifier(e, t) && 142 !== this.lookahead().type)
                                            }
                                            verifyBreakContinue(e, t) {
                                                e.label && "Placeholder" === e.label.type || super.verifyBreakContinue(e, t)
                                            }
                                            parseExpressionStatement(e, t) {
                                                if ("Placeholder" !== t.type || t.extra && t.extra.parenthesized) return super.parseExpressionStatement(e, t);
                                                if (this.match(14)) {
                                                    let s = e;
                                                    return s.label = this.finishPlaceholder(t, "Identifier"), this.next(), s.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration(), this.finishNode(s, "LabeledStatement")
                                                }
                                                return this.semicolon(), e.name = t.name, this.finishPlaceholder(e, "Statement")
                                            }
                                            parseBlock(e, t, s) {
                                                return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, t, s)
                                            }
                                            parseFunctionId(e) {
                                                return this.parsePlaceholder("Identifier") || super.parseFunctionId(e)
                                            }
                                            parseClass(e, t, s) {
                                                let r = t ? "ClassDeclaration" : "ClassExpression";
                                                this.next();
                                                let i = this.state.strict,
                                                    a = this.parsePlaceholder("Identifier");
                                                if (a) {
                                                    if (!(this.match(81) || this.match(142) || this.match(5))) {
                                                        if (s || !t) return e.id = null, e.body = this.finishPlaceholder(a, "ClassBody"), this.finishNode(e, r);
                                                        throw this.raise(mr.ClassNameIsRequired, {
                                                            at: this.state.startLoc
                                                        })
                                                    }
                                                    e.id = a
                                                } else this.parseClassId(e, t, s);
                                                return super.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, i), this.finishNode(e, r)
                                            }
                                            parseExport(e, t) {
                                                let s = this.parsePlaceholder("Identifier");
                                                if (!s) return super.parseExport(e, t);
                                                if (!this.isContextual(97) && !this.match(12)) return e.specifiers = [], e.source = null, e.declaration = this.finishPlaceholder(s, "Declaration"), this.finishNode(e, "ExportNamedDeclaration");
                                                this.expectPlugin("exportDefaultFrom");
                                                let r = this.startNode();
                                                return r.exported = s, e.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")], super.parseExport(e, t)
                                            }
                                            isExportDefaultSpecifier() {
                                                if (this.match(65)) {
                                                    let e = this.nextTokenStart();
                                                    if (this.isUnparsedContextual(e, "from") && this.input.startsWith(z(142), this.nextTokenStartSince(e + 4))) return !0
                                                }
                                                return super.isExportDefaultSpecifier()
                                            }
                                            maybeParseExportDefaultSpecifier(e) {
                                                return !!(e.specifiers && e.specifiers.length > 0) || super.maybeParseExportDefaultSpecifier(e)
                                            }
                                            checkExport(e) {
                                                let {
                                                    specifiers: t
                                                } = e;
                                                null != t && t.length && (e.specifiers = t.filter((e => "Placeholder" === e.exported.type))), super.checkExport(e), e.specifiers = t
                                            }
                                            parseImport(e) {
                                                let t = this.parsePlaceholder("Identifier");
                                                if (!t) return super.parseImport(e);
                                                if (e.specifiers = [], !this.isContextual(97) && !this.match(12)) return e.source = this.finishPlaceholder(t, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
                                                let s = this.startNodeAtNode(t);
                                                return s.local = t, e.specifiers.push(this.finishNode(s, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(97), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration")
                                            }
                                            parseImportSource() {
                                                return this.parsePlaceholder("StringLiteral") || super.parseImportSource()
                                            }
                                            assertNoSpace() {
                                                this.state.start > this.state.lastTokEndLoc.index && this.raise(mr.UnexpectedSpace, {
                                                    at: this.state.lastTokEndLoc
                                                })
                                            }
                                        },
                                        yr = e => class extends e {
                                            parseV8Intrinsic() {
                                                if (this.match(54)) {
                                                    let e = this.state.startLoc,
                                                        t = this.startNode();
                                                    if (this.next(), v(this.state.type)) {
                                                        let e = this.parseIdentifierName(),
                                                            s = this.createIdentifier(t, e);
                                                        if (s.type = "V8IntrinsicIdentifier", this.match(10)) return s
                                                    }
                                                    this.unexpected(e)
                                                }
                                            }
                                            parseExprAtom(e) {
                                                return this.parseV8Intrinsic() || super.parseExprAtom(e)
                                            }
                                        };

                                    function xr(e, t) {
                                        let [s, r] = "string" == typeof t ? [t, {}] : t, i = Object.keys(r), a = 0 === i.length;
                                        return e.some((e => {
                                            if ("string" == typeof e) return a && e === s; {
                                                let [t, a] = e;
                                                if (t !== s) return !1;
                                                for (let e of i)
                                                    if (a[e] !== r[e]) return !1;
                                                return !0
                                            }
                                        }))
                                    }

                                    function gr(e, t, s) {
                                        let r = e.find((e => Array.isArray(e) ? e[0] === t : e === t));
                                        return r && Array.isArray(r) && r.length > 1 ? r[1][s] : null
                                    }
                                    var Pr = ["minimal", "fsharp", "hack", "smart"],
                                        br = ["^^", "@@", "^", "%", "#"],
                                        Tr = ["hash", "bar"];

                                    function Ar(e) {
                                        if (xr(e, "decorators")) {
                                            if (xr(e, "decorators-legacy")) throw new Error("Cannot use the decorators and decorators-legacy plugin together");
                                            let t = gr(e, "decorators", "decoratorsBeforeExport");
                                            if (null != t && "boolean" != typeof t) throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
                                            let s = gr(e, "decorators", "allowCallParenthesized");
                                            if (null != s && "boolean" != typeof s) throw new Error("'allowCallParenthesized' must be a boolean.")
                                        }
                                        if (xr(e, "flow") && xr(e, "typescript")) throw new Error("Cannot combine flow and typescript plugins.");
                                        if (xr(e, "placeholders") && xr(e, "v8intrinsic")) throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
                                        if (xr(e, "pipelineOperator")) {
                                            let t = gr(e, "pipelineOperator", "proposal");
                                            if (!Pr.includes(t)) {
                                                let e = Pr.map((e => `"${e}"`)).join(", ");
                                                throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${e}.`)
                                            }
                                            let s = xr(e, ["recordAndTuple", {
                                                syntaxType: "hash"
                                            }]);
                                            if ("hack" === t) {
                                                if (xr(e, "placeholders")) throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
                                                if (xr(e, "v8intrinsic")) throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
                                                let t = gr(e, "pipelineOperator", "topicToken");
                                                if (!br.includes(t)) {
                                                    let e = br.map((e => `"${e}"`)).join(", ");
                                                    throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${e}.`)
                                                }
                                                if ("#" === t && s) throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.')
                                            } else if ("smart" === t && s) throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.')
                                        }
                                        if (xr(e, "moduleAttributes")) {
                                            if (xr(e, "importAssertions")) throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
                                            if ("may-2020" !== gr(e, "moduleAttributes", "version")) throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.")
                                        }
                                        if (xr(e, "recordAndTuple") && null != gr(e, "recordAndTuple", "syntaxType") && !Tr.includes(gr(e, "recordAndTuple", "syntaxType"))) throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + Tr.map((e => `'${e}'`)).join(", "));
                                        if (xr(e, "asyncDoExpressions") && !xr(e, "doExpressions")) {
                                            let e = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
                                            throw e.missingPlugins = "doExpressions", e
                                        }
                                    }
                                    var Er = {
                                            estree: me,
                                            jsx: Xs,
                                            flow: Vs,
                                            typescript: hr,
                                            v8intrinsic: yr,
                                            placeholders: fr
                                        },
                                        wr = Object.keys(Er),
                                        Sr = class extends er {
                                            checkProto(e, t, s, r) {
                                                if ("SpreadElement" === e.type || this.isObjectMethod(e) || e.computed || e.shorthand) return;
                                                let i = e.key;
                                                if ("__proto__" === ("Identifier" === i.type ? i.name : i.value)) {
                                                    if (t) return void this.raise(pe.RecordNoProto, {
                                                        at: i
                                                    });
                                                    s.used && (r ? null === r.doubleProtoLoc && (r.doubleProtoLoc = i.loc.start) : this.raise(pe.DuplicateProto, {
                                                        at: i
                                                    })), s.used = !0
                                                }
                                            }
                                            shouldExitDescending(e, t) {
                                                return "ArrowFunctionExpression" === e.type && e.start === t
                                            }
                                            getExpression() {
                                                this.enterInitialScopes(), this.nextToken();
                                                let e = this.parseExpression();
                                                return this.match(137) || this.unexpected(), this.finalizeRemainingComments(), e.comments = this.state.comments, e.errors = this.state.errors, this.options.tokens && (e.tokens = this.tokens), e
                                            }
                                            parseExpression(e, t) {
                                                return e ? this.disallowInAnd((() => this.parseExpressionBase(t))) : this.allowInAnd((() => this.parseExpressionBase(t)))
                                            }
                                            parseExpressionBase(e) {
                                                let t = this.state.startLoc,
                                                    s = this.parseMaybeAssign(e);
                                                if (this.match(12)) {
                                                    let r = this.startNodeAt(t);
                                                    for (r.expressions = [s]; this.eat(12);) r.expressions.push(this.parseMaybeAssign(e));
                                                    return this.toReferencedList(r.expressions), this.finishNode(r, "SequenceExpression")
                                                }
                                                return s
                                            }
                                            parseMaybeAssignDisallowIn(e, t) {
                                                return this.disallowInAnd((() => this.parseMaybeAssign(e, t)))
                                            }
                                            parseMaybeAssignAllowIn(e, t) {
                                                return this.allowInAnd((() => this.parseMaybeAssign(e, t)))
                                            }
                                            setOptionalParametersError(e, t) {
                                                var s;
                                                e.optionalParametersLoc = null != (s = null == t ? void 0 : t.loc) ? s : this.state.startLoc
                                            }
                                            parseMaybeAssign(e, t) {
                                                let s, r = this.state.startLoc;
                                                if (this.isContextual(106) && this.prodParam.hasYield) {
                                                    let e = this.parseYield();
                                                    return t && (e = t.call(this, e, r)), e
                                                }
                                                e ? s = !1 : (e = new Is, s = !0);
                                                let {
                                                    type: i
                                                } = this.state;
                                                (10 === i || v(i)) && (this.state.potentialArrowAt = this.state.start);
                                                let a = this.parseMaybeConditional(e);
                                                if (t && (a = t.call(this, a, r)), M(this.state.type)) {
                                                    let t = this.startNodeAt(r),
                                                        s = this.state.value;
                                                    if (t.operator = s, this.match(29)) {
                                                        this.toAssignable(a, !0), t.left = a;
                                                        let s = r.index;
                                                        null != e.doubleProtoLoc && e.doubleProtoLoc.index >= s && (e.doubleProtoLoc = null), null != e.shorthandAssignLoc && e.shorthandAssignLoc.index >= s && (e.shorthandAssignLoc = null), null != e.privateKeyLoc && e.privateKeyLoc.index >= s && (this.checkDestructuringPrivate(e), e.privateKeyLoc = null)
                                                    } else t.left = a;
                                                    return this.next(), t.right = this.parseMaybeAssign(), this.checkLVal(a, { in: this.finishNode(t, "AssignmentExpression")
                                                    }), t
                                                }
                                                return s && this.checkExpressionErrors(e, !0), a
                                            }
                                            parseMaybeConditional(e) {
                                                let t = this.state.startLoc,
                                                    s = this.state.potentialArrowAt,
                                                    r = this.parseExprOps(e);
                                                return this.shouldExitDescending(r, s) ? r : this.parseConditional(r, t, e)
                                            }
                                            parseConditional(e, t, s) {
                                                if (this.eat(17)) {
                                                    let s = this.startNodeAt(t);
                                                    return s.test = e, s.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), s.alternate = this.parseMaybeAssign(), this.finishNode(s, "ConditionalExpression")
                                                }
                                                return e
                                            }
                                            parseMaybeUnaryOrPrivate(e) {
                                                return this.match(136) ? this.parsePrivateName() : this.parseMaybeUnary(e)
                                            }
                                            parseExprOps(e) {
                                                let t = this.state.startLoc,
                                                    s = this.state.potentialArrowAt,
                                                    r = this.parseMaybeUnaryOrPrivate(e);
                                                return this.shouldExitDescending(r, s) ? r : this.parseExprOp(r, t, -1)
                                            }
                                            parseExprOp(e, t, s) {
                                                if (this.isPrivateName(e)) {
                                                    let t = this.getPrivateNameSV(e);
                                                    (s >= H(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(pe.PrivateInExpectedIn, {
                                                        at: e,
                                                        identifierName: t
                                                    }), this.classScope.usePrivateName(t, e.loc.start)
                                                }
                                                let r = this.state.type;
                                                if (B(r) && (this.prodParam.hasIn || !this.match(58))) {
                                                    let i = H(r);
                                                    if (i > s) {
                                                        if (39 === r) {
                                                            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody) return e;
                                                            this.checkPipelineAtInfixOperator(e, t)
                                                        }
                                                        let a = this.startNodeAt(t);
                                                        a.left = e, a.operator = this.state.value;
                                                        let n = 41 === r || 42 === r,
                                                            o = 40 === r;
                                                        if (o && (i = H(42)), this.next(), 39 === r && this.hasPlugin(["pipelineOperator", {
                                                                proposal: "minimal"
                                                            }]) && 96 === this.state.type && this.prodParam.hasAwait) throw this.raise(pe.UnexpectedAwaitAfterPipelineBody, {
                                                            at: this.state.startLoc
                                                        });
                                                        a.right = this.parseExprOpRightExpr(r, i);
                                                        let h = this.finishNode(a, n || o ? "LogicalExpression" : "BinaryExpression"),
                                                            l = this.state.type;
                                                        if (o && (41 === l || 42 === l) || n && 40 === l) throw this.raise(pe.MixingCoalesceWithLogical, {
                                                            at: this.state.startLoc
                                                        });
                                                        return this.parseExprOp(h, t, s)
                                                    }
                                                }
                                                return e
                                            }
                                            parseExprOpRightExpr(e, t) {
                                                let s = this.state.startLoc;
                                                if (39 === e) switch (this.getPluginOption("pipelineOperator", "proposal")) {
                                                    case "hack":
                                                        return this.withTopicBindingContext((() => this.parseHackPipeBody()));
                                                    case "smart":
                                                        return this.withTopicBindingContext((() => {
                                                            if (this.prodParam.hasYield && this.isContextual(106)) throw this.raise(pe.PipeBodyIsTighter, {
                                                                at: this.state.startLoc
                                                            });
                                                            return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(e, t), s)
                                                        }));
                                                    case "fsharp":
                                                        return this.withSoloAwaitPermittingContext((() => this.parseFSharpPipelineBody(t)))
                                                }
                                                return this.parseExprOpBaseRightExpr(e, t)
                                            }
                                            parseExprOpBaseRightExpr(e, t) {
                                                let s = this.state.startLoc;
                                                return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, $(e) ? t - 1 : t)
                                            }
                                            parseHackPipeBody() {
                                                var e;
                                                let {
                                                    startLoc: t
                                                } = this.state, s = this.parseMaybeAssign();
                                                return ie.has(s.type) && !(null != (e = s.extra) && e.parenthesized) && this.raise(pe.PipeUnparenthesizedBody, {
                                                    at: t,
                                                    type: s.type
                                                }), this.topicReferenceWasUsedInCurrentContext() || this.raise(pe.PipeTopicUnused, {
                                                    at: t
                                                }), s
                                            }
                                            checkExponentialAfterUnary(e) {
                                                this.match(57) && this.raise(pe.UnexpectedTokenUnaryExponentiation, {
                                                    at: e.argument
                                                })
                                            }
                                            parseMaybeUnary(e, t) {
                                                let s = this.state.startLoc,
                                                    r = this.isContextual(96);
                                                if (r && this.isAwaitAllowed()) {
                                                    this.next();
                                                    let e = this.parseAwait(s);
                                                    return t || this.checkExponentialAfterUnary(e), e
                                                }
                                                let i = this.match(34),
                                                    a = this.startNode();
                                                if (R(this.state.type)) {
                                                    a.operator = this.state.value, a.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
                                                    let s = this.match(89);
                                                    if (this.next(), a.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), this.state.strict && s) {
                                                        let e = a.argument;
                                                        "Identifier" === e.type ? this.raise(pe.StrictDelete, {
                                                            at: a
                                                        }) : this.hasPropertyAsPrivateName(e) && this.raise(pe.DeletePrivateField, {
                                                            at: a
                                                        })
                                                    }
                                                    if (!i) return t || this.checkExponentialAfterUnary(a), this.finishNode(a, "UnaryExpression")
                                                }
                                                let n = this.parseUpdate(a, i, e);
                                                if (r) {
                                                    let {
                                                        type: e
                                                    } = this.state;
                                                    if ((this.hasPlugin("v8intrinsic") ? L(e) : L(e) && !this.match(54)) && !this.isAmbiguousAwait()) return this.raiseOverwrite(pe.AwaitNotInAsyncContext, {
                                                        at: s
                                                    }), this.parseAwait(s)
                                                }
                                                return n
                                            }
                                            parseUpdate(e, t, s) {
                                                if (t) {
                                                    let t = e;
                                                    return this.checkLVal(t.argument, { in: this.finishNode(t, "UpdateExpression")
                                                    }), e
                                                }
                                                let r = this.state.startLoc,
                                                    i = this.parseExprSubscripts(s);
                                                if (this.checkExpressionErrors(s, !1)) return i;
                                                for (; j(this.state.type) && !this.canInsertSemicolon();) {
                                                    let e = this.startNodeAt(r);
                                                    e.operator = this.state.value, e.prefix = !1, e.argument = i, this.next(), this.checkLVal(i, { in: i = this.finishNode(e, "UpdateExpression")
                                                    })
                                                }
                                                return i
                                            }
                                            parseExprSubscripts(e) {
                                                let t = this.state.startLoc,
                                                    s = this.state.potentialArrowAt,
                                                    r = this.parseExprAtom(e);
                                                return this.shouldExitDescending(r, s) ? r : this.parseSubscripts(r, t)
                                            }
                                            parseSubscripts(e, t, s) {
                                                let r = {
                                                    optionalChainMember: !1,
                                                    maybeAsyncArrow: this.atPossibleAsyncArrow(e),
                                                    stop: !1
                                                };
                                                do {
                                                    e = this.parseSubscript(e, t, s, r), r.maybeAsyncArrow = !1
                                                } while (!r.stop);
                                                return e
                                            }
                                            parseSubscript(e, t, s, r) {
                                                let {
                                                    type: i
                                                } = this.state;
                                                if (!s && 15 === i) return this.parseBind(e, t, s, r);
                                                if (V(i)) return this.parseTaggedTemplateExpression(e, t, r);
                                                let a = !1;
                                                if (18 === i) {
                                                    if (s && (this.raise(pe.OptionalChainingNoNew, {
                                                            at: this.state.startLoc
                                                        }), 40 === this.lookaheadCharCode())) return r.stop = !0, e;
                                                    r.optionalChainMember = a = !0, this.next()
                                                }
                                                if (!s && this.match(10)) return this.parseCoverCallAndAsyncArrowHead(e, t, r, a); {
                                                    let s = this.eat(0);
                                                    return s || a || this.eat(16) ? this.parseMember(e, t, r, s, a) : (r.stop = !0, e)
                                                }
                                            }
                                            parseMember(e, t, s, r, i) {
                                                let a = this.startNodeAt(t);
                                                return a.object = e, a.computed = r, r ? (a.property = this.parseExpression(), this.expect(3)) : this.match(136) ? ("Super" === e.type && this.raise(pe.SuperPrivateField, {
                                                    at: t
                                                }), this.classScope.usePrivateName(this.state.value, this.state.startLoc), a.property = this.parsePrivateName()) : a.property = this.parseIdentifier(!0), s.optionalChainMember ? (a.optional = i, this.finishNode(a, "OptionalMemberExpression")) : this.finishNode(a, "MemberExpression")
                                            }
                                            parseBind(e, t, s, r) {
                                                let i = this.startNodeAt(t);
                                                return i.object = e, this.next(), i.callee = this.parseNoCallExpr(), r.stop = !0, this.parseSubscripts(this.finishNode(i, "BindExpression"), t, s)
                                            }
                                            parseCoverCallAndAsyncArrowHead(e, t, s, r) {
                                                let i = this.state.maybeInArrowParameters,
                                                    a = null;
                                                this.state.maybeInArrowParameters = !0, this.next();
                                                let n = this.startNodeAt(t);
                                                n.callee = e;
                                                let {
                                                    maybeAsyncArrow: o,
                                                    optionalChainMember: h
                                                } = s;
                                                o && (this.expressionScope.enter(Ps()), a = new Is), h && (n.optional = r), n.arguments = r ? this.parseCallExpressionArguments(11) : this.parseCallExpressionArguments(11, "Import" === e.type, "Super" !== e.type, n, a);
                                                let l = this.finishCallExpression(n, h);
                                                return o && this.shouldParseAsyncArrow() && !r ? (s.stop = !0, this.checkDestructuringPrivate(a), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), l = this.parseAsyncArrowFromCallExpression(this.startNodeAt(t), l)) : (o && (this.checkExpressionErrors(a, !0), this.expressionScope.exit()), this.toReferencedArguments(l)), this.state.maybeInArrowParameters = i, l
                                            }
                                            toReferencedArguments(e, t) {
                                                this.toReferencedListDeep(e.arguments, t)
                                            }
                                            parseTaggedTemplateExpression(e, t, s) {
                                                let r = this.startNodeAt(t);
                                                return r.tag = e, r.quasi = this.parseTemplate(!0), s.optionalChainMember && this.raise(pe.OptionalChainingNoTemplate, {
                                                    at: t
                                                }), this.finishNode(r, "TaggedTemplateExpression")
                                            }
                                            atPossibleAsyncArrow(e) {
                                                return "Identifier" === e.type && "async" === e.name && this.state.lastTokEndLoc.index === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && e.start === this.state.potentialArrowAt
                                            }
                                            finishCallExpression(e, t) {
                                                if ("Import" === e.callee.type)
                                                    if (2 === e.arguments.length && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), 0 === e.arguments.length || e.arguments.length > 2) this.raise(pe.ImportCallArity, {
                                                        at: e,
                                                        maxArgumentCount: this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1
                                                    });
                                                    else
                                                        for (let s of e.arguments) "SpreadElement" === s.type && this.raise(pe.ImportCallSpreadArgument, {
                                                            at: s
                                                        });
                                                return this.finishNode(e, t ? "OptionalCallExpression" : "CallExpression")
                                            }
                                            parseCallExpressionArguments(e, t, s, r, i) {
                                                let a = [],
                                                    n = !0,
                                                    o = this.state.inFSharpPipelineDirectBody;
                                                for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(e);) {
                                                    if (n) n = !1;
                                                    else if (this.expect(12), this.match(e)) {
                                                        t && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(pe.ImportCallArgumentTrailingComma, {
                                                            at: this.state.lastTokStartLoc
                                                        }), r && this.addTrailingCommaExtraToNode(r), this.next();
                                                        break
                                                    }
                                                    a.push(this.parseExprListItem(!1, i, s))
                                                }
                                                return this.state.inFSharpPipelineDirectBody = o, a
                                            }
                                            shouldParseAsyncArrow() {
                                                return this.match(19) && !this.canInsertSemicolon()
                                            }
                                            parseAsyncArrowFromCallExpression(e, t) {
                                                var s;
                                                return this.resetPreviousNodeTrailingComments(t), this.expect(19), this.parseArrowExpression(e, t.arguments, !0, null == (s = t.extra) ? void 0 : s.trailingCommaLoc), t.innerComments && jt(e, t.innerComments), t.callee.trailingComments && jt(e, t.callee.trailingComments), e
                                            }
                                            parseNoCallExpr() {
                                                let e = this.state.startLoc;
                                                return this.parseSubscripts(this.parseExprAtom(), e, !0)
                                            }
                                            parseExprAtom(e) {
                                                let t, s = null,
                                                    {
                                                        type: r
                                                    } = this.state;
                                                switch (r) {
                                                    case 79:
                                                        return this.parseSuper();
                                                    case 83:
                                                        return t = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(t) : (this.match(10) || this.raise(pe.UnsupportedImport, {
                                                            at: this.state.lastTokStartLoc
                                                        }), this.finishNode(t, "Import"));
                                                    case 78:
                                                        return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");
                                                    case 90:
                                                        return this.parseDo(this.startNode(), !1);
                                                    case 56:
                                                    case 31:
                                                        return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
                                                    case 132:
                                                        return this.parseNumericLiteral(this.state.value);
                                                    case 133:
                                                        return this.parseBigIntLiteral(this.state.value);
                                                    case 134:
                                                        return this.parseDecimalLiteral(this.state.value);
                                                    case 131:
                                                        return this.parseStringLiteral(this.state.value);
                                                    case 84:
                                                        return this.parseNullLiteral();
                                                    case 85:
                                                        return this.parseBooleanLiteral(!0);
                                                    case 86:
                                                        return this.parseBooleanLiteral(!1);
                                                    case 10:
                                                        {
                                                            let e = this.state.potentialArrowAt === this.state.start;
                                                            return this.parseParenAndDistinguishExpression(e)
                                                        }
                                                    case 2:
                                                    case 1:
                                                        return this.parseArrayLike(2 === this.state.type ? 4 : 3, !1, !0);
                                                    case 0:
                                                        return this.parseArrayLike(3, !0, !1, e);
                                                    case 6:
                                                    case 7:
                                                        return this.parseObjectLike(6 === this.state.type ? 9 : 8, !1, !0);
                                                    case 5:
                                                        return this.parseObjectLike(8, !1, !1, e);
                                                    case 68:
                                                        return this.parseFunctionOrFunctionSent();
                                                    case 26:
                                                        s = this.parseDecorators();
                                                    case 80:
                                                        return this.parseClass(this.maybeTakeDecorators(s, this.startNode()), !1);
                                                    case 77:
                                                        return this.parseNewOrNewTarget();
                                                    case 25:
                                                    case 24:
                                                        return this.parseTemplate(!1);
                                                    case 15:
                                                        {
                                                            t = this.startNode(),
                                                            this.next(),
                                                            t.object = null;
                                                            let e = t.callee = this.parseNoCallExpr();
                                                            if ("MemberExpression" === e.type) return this.finishNode(t, "BindExpression");
                                                            throw this.raise(pe.UnsupportedBind, {
                                                                at: e
                                                            })
                                                        }
                                                    case 136:
                                                        return this.raise(pe.PrivateInExpectedIn, {
                                                            at: this.state.startLoc,
                                                            identifierName: this.state.value
                                                        }), this.parsePrivateName();
                                                    case 33:
                                                        return this.parseTopicReferenceThenEqualsSign(54, "%");
                                                    case 32:
                                                        return this.parseTopicReferenceThenEqualsSign(44, "^");
                                                    case 37:
                                                    case 38:
                                                        return this.parseTopicReference("hack");
                                                    case 44:
                                                    case 54:
                                                    case 27:
                                                        {
                                                            let e = this.getPluginOption("pipelineOperator", "proposal");
                                                            if (e) return this.parseTopicReference(e);this.unexpected();
                                                            break
                                                        }
                                                    case 47:
                                                        {
                                                            let e = this.input.codePointAt(this.nextTokenStart());Ae(e) || 62 === e ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
                                                            break
                                                        }
                                                    default:
                                                        if (v(r)) {
                                                            if (this.isContextual(125) && 123 === this.lookaheadCharCode() && !this.hasFollowingLineBreak()) return this.parseModuleExpression();
                                                            let e = this.state.potentialArrowAt === this.state.start,
                                                                t = this.state.containsEsc,
                                                                s = this.parseIdentifier();
                                                            if (!t && "async" === s.name && !this.canInsertSemicolon()) {
                                                                let {
                                                                    type: e
                                                                } = this.state;
                                                                if (68 === e) return this.resetPreviousNodeTrailingComments(s), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(s));
                                                                if (v(e)) return 61 === this.lookaheadCharCode() ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(s)) : s;
                                                                if (90 === e) return this.resetPreviousNodeTrailingComments(s), this.parseDo(this.startNodeAtNode(s), !0)
                                                            }
                                                            return e && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(s), [s], !1)) : s
                                                        }
                                                        this.unexpected()
                                                }
                                            }
                                            parseTopicReferenceThenEqualsSign(e, t) {
                                                let s = this.getPluginOption("pipelineOperator", "proposal");
                                                if (s) return this.state.type = e, this.state.value = t, this.state.pos--, this.state.end--, this.state.endLoc = X(this.state.endLoc, -1), this.parseTopicReference(s);
                                                this.unexpected()
                                            }
                                            parseTopicReference(e) {
                                                let t = this.startNode(),
                                                    s = this.state.startLoc,
                                                    r = this.state.type;
                                                return this.next(), this.finishTopicReference(t, s, e, r)
                                            }
                                            finishTopicReference(e, t, s, r) {
                                                if (this.testTopicReferenceConfiguration(s, t, r)) {
                                                    let r = "smart" === s ? "PipelinePrimaryTopicReference" : "TopicReference";
                                                    return this.topicReferenceIsAllowedInCurrentContext() || this.raise("smart" === s ? pe.PrimaryTopicNotAllowed : pe.PipeTopicUnbound, {
                                                        at: t
                                                    }), this.registerTopicReference(), this.finishNode(e, r)
                                                }
                                                throw this.raise(pe.PipeTopicUnconfiguredToken, {
                                                    at: t,
                                                    token: z(r)
                                                })
                                            }
                                            testTopicReferenceConfiguration(e, t, s) {
                                                switch (e) {
                                                    case "hack":
                                                        return this.hasPlugin(["pipelineOperator", {
                                                            topicToken: z(s)
                                                        }]);
                                                    case "smart":
                                                        return 27 === s;
                                                    default:
                                                        throw this.raise(pe.PipeTopicRequiresHackPipes, {
                                                            at: t
                                                        })
                                                }
                                            }
                                            parseAsyncArrowUnaryFunction(e) {
                                                this.prodParam.enter(Cs(!0, this.prodParam.hasYield));
                                                let t = [this.parseIdentifier()];
                                                return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(pe.LineTerminatorBeforeArrow, {
                                                    at: this.state.curPosition()
                                                }), this.expect(19), this.parseArrowExpression(e, t, !0)
                                            }
                                            parseDo(e, t) {
                                                this.expectPlugin("doExpressions"), t && this.expectPlugin("asyncDoExpressions"), e.async = t, this.next();
                                                let s = this.state.labels;
                                                return this.state.labels = [], t ? (this.prodParam.enter(Es), e.body = this.parseBlock(), this.prodParam.exit()) : e.body = this.parseBlock(), this.state.labels = s, this.finishNode(e, "DoExpression")
                                            }
                                            parseSuper() {
                                                let e = this.startNode();
                                                return this.next(), !this.match(10) || this.scope.allowDirectSuper || this.options.allowSuperOutsideMethod ? !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(pe.UnexpectedSuper, {
                                                    at: e
                                                }) : this.raise(pe.SuperNotAllowed, {
                                                    at: e
                                                }), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(pe.UnsupportedSuper, {
                                                    at: e
                                                }), this.finishNode(e, "Super")
                                            }
                                            parsePrivateName() {
                                                let e = this.startNode(),
                                                    t = this.startNodeAt(X(this.state.startLoc, 1)),
                                                    s = this.state.value;
                                                return this.next(), e.id = this.createIdentifier(t, s), this.finishNode(e, "PrivateName")
                                            }
                                            parseFunctionOrFunctionSent() {
                                                let e = this.startNode();
                                                if (this.next(), this.prodParam.hasYield && this.match(16)) {
                                                    let t = this.createIdentifier(this.startNodeAtNode(e), "function");
                                                    return this.next(), this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(e, t, "sent")
                                                }
                                                return this.parseFunction(e)
                                            }
                                            parseMetaProperty(e, t, s) {
                                                e.meta = t;
                                                let r = this.state.containsEsc;
                                                return e.property = this.parseIdentifier(!0), (e.property.name !== s || r) && this.raise(pe.UnsupportedMetaProperty, {
                                                    at: e.property,
                                                    target: t.name,
                                                    onlyValidPropertyName: s
                                                }), this.finishNode(e, "MetaProperty")
                                            }
                                            parseImportMetaProperty(e) {
                                                let t = this.createIdentifier(this.startNodeAtNode(e), "import");
                                                return this.next(), this.isContextual(100) && (this.inModule || this.raise(pe.ImportMetaOutsideModule, {
                                                    at: t
                                                }), this.sawUnambiguousESM = !0), this.parseMetaProperty(e, t, "meta")
                                            }
                                            parseLiteralAtNode(e, t, s) {
                                                return this.addExtra(s, "rawValue", e), this.addExtra(s, "raw", this.input.slice(s.start, this.state.end)), s.value = e, this.next(), this.finishNode(s, t)
                                            }
                                            parseLiteral(e, t) {
                                                let s = this.startNode();
                                                return this.parseLiteralAtNode(e, t, s)
                                            }
                                            parseStringLiteral(e) {
                                                return this.parseLiteral(e, "StringLiteral")
                                            }
                                            parseNumericLiteral(e) {
                                                return this.parseLiteral(e, "NumericLiteral")
                                            }
                                            parseBigIntLiteral(e) {
                                                return this.parseLiteral(e, "BigIntLiteral")
                                            }
                                            parseDecimalLiteral(e) {
                                                return this.parseLiteral(e, "DecimalLiteral")
                                            }
                                            parseRegExpLiteral(e) {
                                                let t = this.parseLiteral(e.value, "RegExpLiteral");
                                                return t.pattern = e.pattern, t.flags = e.flags, t
                                            }
                                            parseBooleanLiteral(e) {
                                                let t = this.startNode();
                                                return t.value = e, this.next(), this.finishNode(t, "BooleanLiteral")
                                            }
                                            parseNullLiteral() {
                                                let e = this.startNode();
                                                return this.next(), this.finishNode(e, "NullLiteral")
                                            }
                                            parseParenAndDistinguishExpression(e) {
                                                let t, s = this.state.startLoc;
                                                this.next(), this.expressionScope.enter(gs());
                                                let r = this.state.maybeInArrowParameters,
                                                    i = this.state.inFSharpPipelineDirectBody;
                                                this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
                                                let a, n, o = this.state.startLoc,
                                                    h = [],
                                                    l = new Is,
                                                    p = !0;
                                                for (; !this.match(11);) {
                                                    if (p) p = !1;
                                                    else if (this.expect(12, null === l.optionalParametersLoc ? null : l.optionalParametersLoc), this.match(11)) {
                                                        n = this.state.startLoc;
                                                        break
                                                    }
                                                    if (this.match(21)) {
                                                        let e = this.state.startLoc;
                                                        if (a = this.state.startLoc, h.push(this.parseParenItem(this.parseRestBinding(), e)), !this.checkCommaAfterRest(41)) break
                                                    } else h.push(this.parseMaybeAssignAllowIn(l, this.parseParenItem))
                                                }
                                                let c = this.state.lastTokEndLoc;
                                                this.expect(11), this.state.maybeInArrowParameters = r, this.state.inFSharpPipelineDirectBody = i;
                                                let u = this.startNodeAt(s);
                                                return e && this.shouldParseArrow(h) && (u = this.parseArrow(u)) ? (this.checkDestructuringPrivate(l), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(u, h, !1), u) : (this.expressionScope.exit(), h.length || this.unexpected(this.state.lastTokStartLoc), n && this.unexpected(n), a && this.unexpected(a), this.checkExpressionErrors(l, !0), this.toReferencedListDeep(h, !0), h.length > 1 ? (t = this.startNodeAt(o), t.expressions = h, this.finishNode(t, "SequenceExpression"), this.resetEndLocation(t, c)) : t = h[0], this.wrapParenthesis(s, t))
                                            }
                                            wrapParenthesis(e, t) {
                                                if (!this.options.createParenthesizedExpressions) return this.addExtra(t, "parenthesized", !0), this.addExtra(t, "parenStart", e.index), this.takeSurroundingComments(t, e.index, this.state.lastTokEndLoc.index), t;
                                                let s = this.startNodeAt(e);
                                                return s.expression = t, this.finishNode(s, "ParenthesizedExpression")
                                            }
                                            shouldParseArrow(e) {
                                                return !this.canInsertSemicolon()
                                            }
                                            parseArrow(e) {
                                                if (this.eat(19)) return e
                                            }
                                            parseParenItem(e, t) {
                                                return e
                                            }
                                            parseNewOrNewTarget() {
                                                let e = this.startNode();
                                                if (this.next(), this.match(16)) {
                                                    let t = this.createIdentifier(this.startNodeAtNode(e), "new");
                                                    this.next();
                                                    let s = this.parseMetaProperty(e, t, "target");
                                                    return !this.scope.inNonArrowFunction && !this.scope.inClass && !this.options.allowNewTargetOutsideFunction && this.raise(pe.UnexpectedNewTarget, {
                                                        at: s
                                                    }), s
                                                }
                                                return this.parseNew(e)
                                            }
                                            parseNew(e) {
                                                if (this.parseNewCallee(e), this.eat(10)) {
                                                    let t = this.parseExprList(11);
                                                    this.toReferencedList(t), e.arguments = t
                                                } else e.arguments = [];
                                                return this.finishNode(e, "NewExpression")
                                            }
                                            parseNewCallee(e) {
                                                e.callee = this.parseNoCallExpr(), "Import" === e.callee.type && this.raise(pe.ImportCallNotNewExpression, {
                                                    at: e.callee
                                                })
                                            }
                                            parseTemplateElement(e) {
                                                let {
                                                    start: t,
                                                    startLoc: s,
                                                    end: r,
                                                    value: i
                                                } = this.state, a = t + 1, n = this.startNodeAt(X(s, 1));
                                                null === i && (e || this.raise(pe.InvalidEscapeSequenceTemplate, {
                                                    at: X(this.state.firstInvalidTemplateEscapePos, 1)
                                                }));
                                                let o = this.match(24),
                                                    h = o ? -1 : -2,
                                                    l = r + h;
                                                n.value = {
                                                    raw: this.input.slice(a, l).replace(/\r\n?/g, "\n"),
                                                    cooked: null === i ? null : i.slice(1, h)
                                                }, n.tail = o, this.next();
                                                let p = this.finishNode(n, "TemplateElement");
                                                return this.resetEndLocation(p, X(this.state.lastTokEndLoc, h)), p
                                            }
                                            parseTemplate(e) {
                                                let t = this.startNode();
                                                t.expressions = [];
                                                let s = this.parseTemplateElement(e);
                                                for (t.quasis = [s]; !s.tail;) t.expressions.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), t.quasis.push(s = this.parseTemplateElement(e));
                                                return this.finishNode(t, "TemplateLiteral")
                                            }
                                            parseTemplateSubstitution() {
                                                return this.parseExpression()
                                            }
                                            parseObjectLike(e, t, s, r) {
                                                s && this.expectPlugin("recordAndTuple");
                                                let i = this.state.inFSharpPipelineDirectBody;
                                                this.state.inFSharpPipelineDirectBody = !1;
                                                let a = Object.create(null),
                                                    n = !0,
                                                    o = this.startNode();
                                                for (o.properties = [], this.next(); !this.match(e);) {
                                                    if (n) n = !1;
                                                    else if (this.expect(12), this.match(e)) {
                                                        this.addTrailingCommaExtraToNode(o);
                                                        break
                                                    }
                                                    let i;
                                                    t ? i = this.parseBindingProperty() : (i = this.parsePropertyDefinition(r), this.checkProto(i, s, a, r)), s && !this.isObjectProperty(i) && "SpreadElement" !== i.type && this.raise(pe.InvalidRecordProperty, {
                                                        at: i
                                                    }), i.shorthand && this.addExtra(i, "shorthand", !0), o.properties.push(i)
                                                }
                                                this.next(), this.state.inFSharpPipelineDirectBody = i;
                                                let h = "ObjectExpression";
                                                return t ? h = "ObjectPattern" : s && (h = "RecordExpression"), this.finishNode(o, h)
                                            }
                                            addTrailingCommaExtraToNode(e) {
                                                this.addExtra(e, "trailingComma", this.state.lastTokStart), this.addExtra(e, "trailingCommaLoc", this.state.lastTokStartLoc, !1)
                                            }
                                            maybeAsyncOrAccessorProp(e) {
                                                return !e.computed && "Identifier" === e.key.type && (this.isLiteralPropertyName() || this.match(0) || this.match(55))
                                            }
                                            parsePropertyDefinition(e) {
                                                let t = [];
                                                if (this.match(26))
                                                    for (this.hasPlugin("decorators") && this.raise(pe.UnsupportedPropertyDecorator, {
                                                            at: this.state.startLoc
                                                        }); this.match(26);) t.push(this.parseDecorator());
                                                let s, r = this.startNode(),
                                                    i = !1,
                                                    a = !1;
                                                if (this.match(21)) return t.length && this.unexpected(), this.parseSpread();
                                                t.length && (r.decorators = t, t = []), r.method = !1, e && (s = this.state.startLoc);
                                                let n = this.eat(55);
                                                this.parsePropertyNamePrefixOperator(r);
                                                let o = this.state.containsEsc,
                                                    h = this.parsePropertyName(r, e);
                                                if (!n && !o && this.maybeAsyncOrAccessorProp(r)) {
                                                    let e = h.name;
                                                    "async" === e && !this.hasPrecedingLineBreak() && (i = !0, this.resetPreviousNodeTrailingComments(h), n = this.eat(55), this.parsePropertyName(r)), ("get" === e || "set" === e) && (a = !0, this.resetPreviousNodeTrailingComments(h), r.kind = e, this.match(55) && (n = !0, this.raise(pe.AccessorIsGenerator, {
                                                        at: this.state.curPosition(),
                                                        kind: e
                                                    }), this.next()), this.parsePropertyName(r))
                                                }
                                                return this.parseObjPropValue(r, s, n, i, !1, a, e)
                                            }
                                            getGetterSetterExpectedParamCount(e) {
                                                return "get" === e.kind ? 0 : 1
                                            }
                                            getObjectOrClassMethodParams(e) {
                                                return e.params
                                            }
                                            checkGetterSetterParams(e) {
                                                var t;
                                                let s = this.getGetterSetterExpectedParamCount(e),
                                                    r = this.getObjectOrClassMethodParams(e);
                                                r.length !== s && this.raise("get" === e.kind ? pe.BadGetterArity : pe.BadSetterArity, {
                                                    at: e
                                                }), "set" === e.kind && "RestElement" === (null == (t = r[r.length - 1]) ? void 0 : t.type) && this.raise(pe.BadSetterRestParameter, {
                                                    at: e
                                                })
                                            }
                                            parseObjectMethod(e, t, s, r, i) {
                                                if (i) {
                                                    let s = this.parseMethod(e, t, !1, !1, !1, "ObjectMethod");
                                                    return this.checkGetterSetterParams(s), s
                                                }
                                                if (s || t || this.match(10)) return r && this.unexpected(), e.kind = "method", e.method = !0, this.parseMethod(e, t, s, !1, !1, "ObjectMethod")
                                            }
                                            parseObjectProperty(e, t, s, r) {
                                                if (e.shorthand = !1, this.eat(14)) return e.value = s ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(r), this.finishNode(e, "ObjectProperty");
                                                if (!e.computed && "Identifier" === e.key.type) {
                                                    if (this.checkReservedWord(e.key.name, e.key.loc.start, !0, !1), s) e.value = this.parseMaybeDefault(t, Os(e.key));
                                                    else if (this.match(29)) {
                                                        let s = this.state.startLoc;
                                                        null != r ? null === r.shorthandAssignLoc && (r.shorthandAssignLoc = s) : this.raise(pe.InvalidCoverInitializedName, {
                                                            at: s
                                                        }), e.value = this.parseMaybeDefault(t, Os(e.key))
                                                    } else e.value = Os(e.key);
                                                    return e.shorthand = !0, this.finishNode(e, "ObjectProperty")
                                                }
                                            }
                                            parseObjPropValue(e, t, s, r, i, a, n) {
                                                let o = this.parseObjectMethod(e, s, r, i, a) || this.parseObjectProperty(e, t, i, n);
                                                return o || this.unexpected(), o
                                            }
                                            parsePropertyName(e, t) {
                                                if (this.eat(0)) e.computed = !0, e.key = this.parseMaybeAssignAllowIn(), this.expect(3);
                                                else {
                                                    let s, {
                                                        type: r,
                                                        value: i
                                                    } = this.state;
                                                    if (N(r)) s = this.parseIdentifier(!0);
                                                    else switch (r) {
                                                        case 132:
                                                            s = this.parseNumericLiteral(i);
                                                            break;
                                                        case 131:
                                                            s = this.parseStringLiteral(i);
                                                            break;
                                                        case 133:
                                                            s = this.parseBigIntLiteral(i);
                                                            break;
                                                        case 134:
                                                            s = this.parseDecimalLiteral(i);
                                                            break;
                                                        case 136:
                                                            {
                                                                let e = this.state.startLoc;null != t ? null === t.privateKeyLoc && (t.privateKeyLoc = e) : this.raise(pe.UnexpectedPrivateField, {
                                                                    at: e
                                                                }),
                                                                s = this.parsePrivateName();
                                                                break
                                                            }
                                                        default:
                                                            this.unexpected()
                                                    }
                                                    e.key = s, 136 !== r && (e.computed = !1)
                                                }
                                                return e.key
                                            }
                                            initFunction(e, t) {
                                                e.id = null, e.generator = !1, e.async = t
                                            }
                                            parseMethod(e, t, s, r, i, a) {
                                                let n = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                                                this.initFunction(e, s), e.generator = t, this.scope.enter(Re | ze | (n ? $e : 0) | (i ? He : 0)), this.prodParam.enter(Cs(s, e.generator)), this.parseFunctionParams(e, r);
                                                let o = this.parseFunctionBodyAndFinish(e, a, !0);
                                                return this.prodParam.exit(), this.scope.exit(), o
                                            }
                                            parseArrayLike(e, t, s, r) {
                                                s && this.expectPlugin("recordAndTuple");
                                                let i = this.state.inFSharpPipelineDirectBody;
                                                this.state.inFSharpPipelineDirectBody = !1;
                                                let a = this.startNode();
                                                return this.next(), a.elements = this.parseExprList(e, !s, r, a), this.state.inFSharpPipelineDirectBody = i, this.finishNode(a, s ? "TupleExpression" : "ArrayExpression")
                                            }
                                            parseArrowExpression(e, t, s, r) {
                                                this.scope.enter(Re | Ue);
                                                let i = Cs(s, !1);
                                                !this.match(5) && this.prodParam.hasIn && (i |= Ss), this.prodParam.enter(i), this.initFunction(e, s);
                                                let a = this.state.maybeInArrowParameters;
                                                return t && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(e, t, r)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(e, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = a, this.finishNode(e, "ArrowFunctionExpression")
                                            }
                                            setArrowFunctionParameters(e, t, s) {
                                                this.toAssignableList(t, s, !1), e.params = t
                                            }
                                            parseFunctionBodyAndFinish(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                return this.parseFunctionBody(e, !1, s), this.finishNode(e, t)
                                            }
                                            parseFunctionBody(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                                    r = t && !this.match(5);
                                                if (this.expressionScope.enter(bs()), r) e.body = this.parseMaybeAssign(), this.checkParams(e, !1, t, !1);
                                                else {
                                                    let r = this.state.strict,
                                                        i = this.state.labels;
                                                    this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | ws), e.body = this.parseBlock(!0, !1, (i => {
                                                        let a = !this.isSimpleParamList(e.params);
                                                        i && a && this.raise(pe.IllegalLanguageModeDirective, {
                                                            at: "method" !== e.kind && "constructor" !== e.kind || !e.key ? e : e.key.loc.end
                                                        });
                                                        let n = !r && this.state.strict;
                                                        this.checkParams(e, !this.state.strict && !t && !s && !a, t, n), this.state.strict && e.id && this.checkIdentifier(e.id, yt, n)
                                                    })), this.prodParam.exit(), this.state.labels = i
                                                }
                                                this.expressionScope.exit()
                                            }
                                            isSimpleParameter(e) {
                                                return "Identifier" === e.type
                                            }
                                            isSimpleParamList(e) {
                                                for (let t = 0, s = e.length; t < s; t++)
                                                    if (!this.isSimpleParameter(e[t])) return !1;
                                                return !0
                                            }
                                            checkParams(e, t, s) {
                                                let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                                    i = !t && new Set,
                                                    a = {
                                                        type: "FormalParameters"
                                                    };
                                                for (let n of e.params) this.checkLVal(n, { in: a,
                                                    binding: lt,
                                                    checkClashes: i,
                                                    strictModeChanged: r
                                                })
                                            }
                                            parseExprList(e, t, s, r) {
                                                let i = [],
                                                    a = !0;
                                                for (; !this.eat(e);) {
                                                    if (a) a = !1;
                                                    else if (this.expect(12), this.match(e)) {
                                                        r && this.addTrailingCommaExtraToNode(r), this.next();
                                                        break
                                                    }
                                                    i.push(this.parseExprListItem(t, s))
                                                }
                                                return i
                                            }
                                            parseExprListItem(e, t, s) {
                                                let r;
                                                if (this.match(12)) e || this.raise(pe.UnexpectedToken, {
                                                    at: this.state.curPosition(),
                                                    unexpected: ","
                                                }), r = null;
                                                else if (this.match(21)) {
                                                    let e = this.state.startLoc;
                                                    r = this.parseParenItem(this.parseSpread(t), e)
                                                } else if (this.match(17)) {
                                                    this.expectPlugin("partialApplication"), s || this.raise(pe.UnexpectedArgumentPlaceholder, {
                                                        at: this.state.startLoc
                                                    });
                                                    let e = this.startNode();
                                                    this.next(), r = this.finishNode(e, "ArgumentPlaceholder")
                                                } else r = this.parseMaybeAssignAllowIn(t, this.parseParenItem);
                                                return r
                                            }
                                            parseIdentifier(e) {
                                                let t = this.startNode(),
                                                    s = this.parseIdentifierName(e);
                                                return this.createIdentifier(t, s)
                                            }
                                            createIdentifier(e, t) {
                                                return e.name = t, e.loc.identifierName = t, this.finishNode(e, "Identifier")
                                            }
                                            parseIdentifierName(e) {
                                                let t, {
                                                    startLoc: s,
                                                    type: r
                                                } = this.state;
                                                N(r) ? t = this.state.value : this.unexpected();
                                                let i = C(r);
                                                return e ? i && this.replaceToken(130) : this.checkReservedWord(t, s, i, !1), this.next(), t
                                            }
                                            checkReservedWord(e, t, s, r) {
                                                if (!(e.length > 10) && Fe(e))
                                                    if (s && Me(e)) this.raise(pe.UnexpectedKeyword, {
                                                        at: t,
                                                        keyword: e
                                                    });
                                                    else if ((this.state.strict ? r ? Le : Ie : Ne)(e, this.inModule)) this.raise(pe.UnexpectedReservedWord, {
                                                    at: t,
                                                    reservedWord: e
                                                });
                                                else if ("yield" === e) {
                                                    if (this.prodParam.hasYield) return void this.raise(pe.YieldBindingIdentifier, {
                                                        at: t
                                                    })
                                                } else if ("await" === e) {
                                                    if (this.prodParam.hasAwait) return void this.raise(pe.AwaitBindingIdentifier, {
                                                        at: t
                                                    });
                                                    if (this.scope.inStaticBlock) return void this.raise(pe.AwaitBindingIdentifierInStaticBlock, {
                                                        at: t
                                                    });
                                                    this.expressionScope.recordAsyncArrowParametersError({
                                                        at: t
                                                    })
                                                } else if ("arguments" === e && this.scope.inClassAndNotInNonArrowFunction) return void this.raise(pe.ArgumentsInClass, {
                                                    at: t
                                                })
                                            }
                                            isAwaitAllowed() {
                                                return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction)
                                            }
                                            parseAwait(e) {
                                                let t = this.startNodeAt(e);
                                                return this.expressionScope.recordParameterInitializerError(pe.AwaitExpressionFormalParameter, {
                                                    at: t
                                                }), this.eat(55) && this.raise(pe.ObsoleteAwaitStar, {
                                                    at: t
                                                }), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (t.argument = this.parseMaybeUnary(null, !0)), this.finishNode(t, "AwaitExpression")
                                            }
                                            isAmbiguousAwait() {
                                                if (this.hasPrecedingLineBreak()) return !0;
                                                let {
                                                    type: e
                                                } = this.state;
                                                return 53 === e || 10 === e || 0 === e || V(e) || 101 === e && !this.state.containsEsc || 135 === e || 56 === e || this.hasPlugin("v8intrinsic") && 54 === e
                                            }
                                            parseYield() {
                                                let e = this.startNode();
                                                this.expressionScope.recordParameterInitializerError(pe.YieldInParameter, {
                                                    at: e
                                                }), this.next();
                                                let t = !1,
                                                    s = null;
                                                if (!this.hasPrecedingLineBreak()) switch (t = this.eat(55), this.state.type) {
                                                    case 13:
                                                    case 137:
                                                    case 8:
                                                    case 11:
                                                    case 3:
                                                    case 9:
                                                    case 14:
                                                    case 12:
                                                        if (!t) break;
                                                    default:
                                                        s = this.parseMaybeAssign()
                                                }
                                                return e.delegate = t, e.argument = s, this.finishNode(e, "YieldExpression")
                                            }
                                            checkPipelineAtInfixOperator(e, t) {
                                                this.hasPlugin(["pipelineOperator", {
                                                    proposal: "smart"
                                                }]) && "SequenceExpression" === e.type && this.raise(pe.PipelineHeadSequenceExpression, {
                                                    at: t
                                                })
                                            }
                                            parseSmartPipelineBodyInStyle(e, t) {
                                                if (this.isSimpleReference(e)) {
                                                    let s = this.startNodeAt(t);
                                                    return s.callee = e, this.finishNode(s, "PipelineBareFunction")
                                                } {
                                                    let s = this.startNodeAt(t);
                                                    return this.checkSmartPipeTopicBodyEarlyErrors(t), s.expression = e, this.finishNode(s, "PipelineTopicExpression")
                                                }
                                            }
                                            isSimpleReference(e) {
                                                switch (e.type) {
                                                    case "MemberExpression":
                                                        return !e.computed && this.isSimpleReference(e.object);
                                                    case "Identifier":
                                                        return !0;
                                                    default:
                                                        return !1
                                                }
                                            }
                                            checkSmartPipeTopicBodyEarlyErrors(e) {
                                                if (this.match(19)) throw this.raise(pe.PipelineBodyNoArrow, {
                                                    at: this.state.startLoc
                                                });
                                                this.topicReferenceWasUsedInCurrentContext() || this.raise(pe.PipelineTopicUnused, {
                                                    at: e
                                                })
                                            }
                                            withTopicBindingContext(e) {
                                                let t = this.state.topicContext;
                                                this.state.topicContext = {
                                                    maxNumOfResolvableTopics: 1,
                                                    maxTopicIndex: null
                                                };
                                                try {
                                                    return e()
                                                } finally {
                                                    this.state.topicContext = t
                                                }
                                            }
                                            withSmartMixTopicForbiddingContext(e) {
                                                if (!this.hasPlugin(["pipelineOperator", {
                                                        proposal: "smart"
                                                    }])) return e(); {
                                                    let t = this.state.topicContext;
                                                    this.state.topicContext = {
                                                        maxNumOfResolvableTopics: 0,
                                                        maxTopicIndex: null
                                                    };
                                                    try {
                                                        return e()
                                                    } finally {
                                                        this.state.topicContext = t
                                                    }
                                                }
                                            }
                                            withSoloAwaitPermittingContext(e) {
                                                let t = this.state.soloAwait;
                                                this.state.soloAwait = !0;
                                                try {
                                                    return e()
                                                } finally {
                                                    this.state.soloAwait = t
                                                }
                                            }
                                            allowInAnd(e) {
                                                let t = this.prodParam.currentFlags();
                                                if (Ss & ~t) {
                                                    this.prodParam.enter(t | Ss);
                                                    try {
                                                        return e()
                                                    } finally {
                                                        this.prodParam.exit()
                                                    }
                                                }
                                                return e()
                                            }
                                            disallowInAnd(e) {
                                                let t = this.prodParam.currentFlags();
                                                if (Ss & t) {
                                                    this.prodParam.enter(t & ~Ss);
                                                    try {
                                                        return e()
                                                    } finally {
                                                        this.prodParam.exit()
                                                    }
                                                }
                                                return e()
                                            }
                                            registerTopicReference() {
                                                this.state.topicContext.maxTopicIndex = 0
                                            }
                                            topicReferenceIsAllowedInCurrentContext() {
                                                return this.state.topicContext.maxNumOfResolvableTopics >= 1
                                            }
                                            topicReferenceWasUsedInCurrentContext() {
                                                return null != this.state.topicContext.maxTopicIndex && this.state.topicContext.maxTopicIndex >= 0
                                            }
                                            parseFSharpPipelineBody(e) {
                                                let t = this.state.startLoc;
                                                this.state.potentialArrowAt = this.state.start;
                                                let s = this.state.inFSharpPipelineDirectBody;
                                                this.state.inFSharpPipelineDirectBody = !0;
                                                let r = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), t, e);
                                                return this.state.inFSharpPipelineDirectBody = s, r
                                            }
                                            parseModuleExpression() {
                                                this.expectPlugin("moduleBlocks");
                                                let e = this.startNode();
                                                this.next(), this.match(5) || this.unexpected(null, 5);
                                                let t = this.startNodeAt(this.state.endLoc);
                                                this.next();
                                                let s = this.initializeScopes(!0);
                                                this.enterInitialScopes();
                                                try {
                                                    e.body = this.parseProgram(t, 8, "module")
                                                } finally {
                                                    s()
                                                }
                                                return this.finishNode(e, "ModuleExpression")
                                            }
                                            parsePropertyNamePrefixOperator(e) {}
                                        },
                                        vr = {
                                            kind: "loop"
                                        },
                                        Cr = {
                                            kind: "switch"
                                        },
                                        Nr = /[\uD800-\uDFFF]/u,
                                        Ir = /in(?:stanceof)?/y;

                                    function kr(e, t) {
                                        for (let s = 0; s < e.length; s++) {
                                            let r = e[s],
                                                {
                                                    type: i
                                                } = r;
                                            if ("number" == typeof i) {
                                                if (136 === i) {
                                                    let {
                                                        loc: t,
                                                        start: i,
                                                        value: a,
                                                        end: n
                                                    } = r, o = i + 1, h = X(t.start, 1);
                                                    e.splice(s, 1, new ns({
                                                        type: q(27),
                                                        value: "#",
                                                        start: i,
                                                        end: o,
                                                        startLoc: t.start,
                                                        endLoc: h
                                                    }), new ns({
                                                        type: q(130),
                                                        value: a,
                                                        start: o,
                                                        end: n,
                                                        startLoc: h,
                                                        endLoc: t.end
                                                    })), s++;
                                                    continue
                                                }
                                                if (V(i)) {
                                                    let a, n, o, h, l, {
                                                            loc: p,
                                                            start: c,
                                                            value: u,
                                                            end: d
                                                        } = r,
                                                        m = c + 1,
                                                        f = X(p.start, 1);
                                                    a = 96 === t.charCodeAt(c) ? new ns({
                                                        type: q(22),
                                                        value: "`",
                                                        start: c,
                                                        end: m,
                                                        startLoc: p.start,
                                                        endLoc: f
                                                    }) : new ns({
                                                        type: q(8),
                                                        value: "}",
                                                        start: c,
                                                        end: m,
                                                        startLoc: p.start,
                                                        endLoc: f
                                                    }), 24 === i ? (o = d - 1, h = X(p.end, -1), n = null === u ? null : u.slice(1, -1), l = new ns({
                                                        type: q(22),
                                                        value: "`",
                                                        start: o,
                                                        end: d,
                                                        startLoc: h,
                                                        endLoc: p.end
                                                    })) : (o = d - 2, h = X(p.end, -2), n = null === u ? null : u.slice(1, -2), l = new ns({
                                                        type: q(23),
                                                        value: "${",
                                                        start: o,
                                                        end: d,
                                                        startLoc: h,
                                                        endLoc: p.end
                                                    })), e.splice(s, 1, a, new ns({
                                                        type: q(20),
                                                        value: n,
                                                        start: m,
                                                        end: o,
                                                        startLoc: f,
                                                        endLoc: h
                                                    }), l), s += 2;
                                                    continue
                                                }
                                                r.type = q(i)
                                            }
                                        }
                                        return e
                                    }
                                    var Lr = class extends Sr {
                                            parseTopLevel(e, t) {
                                                return e.program = this.parseProgram(t), e.comments = this.state.comments, this.options.tokens && (e.tokens = kr(this.tokens, this.input)), this.finishNode(e, "File")
                                            }
                                            parseProgram(e) {
                                                let t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 137,
                                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.options.sourceType;
                                                if (e.sourceType = r, e.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(e, !0, !0, s), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
                                                    for (let [i, a] of Array.from(this.scope.undefinedExports)) this.raise(pe.ModuleExportUndefined, {
                                                        at: a,
                                                        localName: i
                                                    });
                                                return t = 137 === s ? this.finishNode(e, "Program") : this.finishNodeAt(e, "Program", X(this.state.startLoc, -1)), t
                                            }
                                            stmtToDirective(e) {
                                                let t = e;
                                                t.type = "Directive", t.value = t.expression, delete t.expression;
                                                let s = t.value,
                                                    r = s.value,
                                                    i = this.input.slice(s.start, s.end),
                                                    a = s.value = i.slice(1, -1);
                                                return this.addExtra(s, "raw", i), this.addExtra(s, "rawValue", a), this.addExtra(s, "expressionValue", r), s.type = "DirectiveLiteral", t
                                            }
                                            parseInterpreterDirective() {
                                                if (!this.match(28)) return null;
                                                let e = this.startNode();
                                                return e.value = this.state.value, this.next(), this.finishNode(e, "InterpreterDirective")
                                            }
                                            isLet() {
                                                return !!this.isContextual(99) && this.hasFollowingBindingAtom()
                                            }
                                            chStartsBindingIdentifier(e, t) {
                                                if (Ae(e)) {
                                                    if (Ir.lastIndex = t, Ir.test(this.input)) {
                                                        let e = this.codePointAtPos(Ir.lastIndex);
                                                        if (!Ee(e) && 92 !== e) return !1
                                                    }
                                                    return !0
                                                }
                                                return 92 === e
                                            }
                                            chStartsBindingPattern(e) {
                                                return 91 === e || 123 === e
                                            }
                                            hasFollowingBindingAtom() {
                                                let e = this.nextTokenStart(),
                                                    t = this.codePointAtPos(e);
                                                return this.chStartsBindingPattern(t) || this.chStartsBindingIdentifier(t, e)
                                            }
                                            hasFollowingBindingIdentifier() {
                                                let e = this.nextTokenStart(),
                                                    t = this.codePointAtPos(e);
                                                return this.chStartsBindingIdentifier(t, e)
                                            }
                                            startsUsingForOf() {
                                                let e = this.lookahead();
                                                return !(101 === e.type && !e.containsEsc) && (this.expectPlugin("explicitResourceManagement"), !0)
                                            }
                                            parseModuleItem() {
                                                return this.parseStatementLike(15)
                                            }
                                            parseStatementListItem() {
                                                return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8))
                                            }
                                            parseStatementOrSloppyAnnexBFunctionDeclaration() {
                                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                                    t = 0;
                                                return this.options.annexB && !this.state.strict && (t |= 4, e && (t |= 8)), this.parseStatementLike(t)
                                            }
                                            parseStatement() {
                                                return this.parseStatementLike(0)
                                            }
                                            parseStatementLike(e) {
                                                let t = null;
                                                return this.match(26) && (t = this.parseDecorators(!0)), this.parseStatementContent(e, t)
                                            }
                                            parseStatementContent(e, t) {
                                                let s = this.state.type,
                                                    r = this.startNode(),
                                                    i = !!(2 & e),
                                                    a = !!(4 & e),
                                                    n = 1 & e;
                                                switch (s) {
                                                    case 60:
                                                        return this.parseBreakContinueStatement(r, !0);
                                                    case 63:
                                                        return this.parseBreakContinueStatement(r, !1);
                                                    case 64:
                                                        return this.parseDebuggerStatement(r);
                                                    case 90:
                                                        return this.parseDoWhileStatement(r);
                                                    case 91:
                                                        return this.parseForStatement(r);
                                                    case 68:
                                                        if (46 === this.lookaheadCharCode()) break;
                                                        return a || this.raise(this.state.strict ? pe.StrictFunction : this.options.annexB ? pe.SloppyFunctionAnnexB : pe.SloppyFunction, {
                                                            at: this.state.startLoc
                                                        }), this.parseFunctionStatement(r, !1, !i && a);
                                                    case 80:
                                                        return i || this.unexpected(), this.parseClass(this.maybeTakeDecorators(t, r), !0);
                                                    case 69:
                                                        return this.parseIfStatement(r);
                                                    case 70:
                                                        return this.parseReturnStatement(r);
                                                    case 71:
                                                        return this.parseSwitchStatement(r);
                                                    case 72:
                                                        return this.parseThrowStatement(r);
                                                    case 73:
                                                        return this.parseTryStatement(r);
                                                    case 105:
                                                        if (this.hasFollowingLineBreak() || this.state.containsEsc || !this.hasFollowingBindingIdentifier()) break;
                                                        return this.expectPlugin("explicitResourceManagement"), !this.scope.inModule && this.scope.inTopLevel ? this.raise(pe.UnexpectedUsingDeclaration, {
                                                            at: this.state.startLoc
                                                        }) : i || this.raise(pe.UnexpectedLexicalDeclaration, {
                                                            at: this.state.startLoc
                                                        }), this.parseVarStatement(r, "using");
                                                    case 99:
                                                        {
                                                            if (this.state.containsEsc) break;
                                                            let e = this.nextTokenStart(),
                                                                t = this.codePointAtPos(e);
                                                            if (91 !== t && (!i && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(t, e) && 123 !== t)) break
                                                        }
                                                    case 75:
                                                        i || this.raise(pe.UnexpectedLexicalDeclaration, {
                                                            at: this.state.startLoc
                                                        });
                                                    case 74:
                                                        {
                                                            let e = this.state.value;
                                                            return this.parseVarStatement(r, e)
                                                        }
                                                    case 92:
                                                        return this.parseWhileStatement(r);
                                                    case 76:
                                                        return this.parseWithStatement(r);
                                                    case 5:
                                                        return this.parseBlock();
                                                    case 13:
                                                        return this.parseEmptyStatement(r);
                                                    case 83:
                                                        {
                                                            let e = this.lookaheadCharCode();
                                                            if (40 === e || 46 === e) break
                                                        }
                                                    case 82:
                                                        {
                                                            let e;
                                                            return !this.options.allowImportExportEverywhere && !n && this.raise(pe.UnexpectedImportExport, {
                                                                at: this.state.startLoc
                                                            }),
                                                            this.next(),
                                                            83 === s ? (e = this.parseImport(r), "ImportDeclaration" === e.type && (!e.importKind || "value" === e.importKind) && (this.sawUnambiguousESM = !0)) : (e = this.parseExport(r, t), ("ExportNamedDeclaration" === e.type && (!e.exportKind || "value" === e.exportKind) || "ExportAllDeclaration" === e.type && (!e.exportKind || "value" === e.exportKind) || "ExportDefaultDeclaration" === e.type) && (this.sawUnambiguousESM = !0)),
                                                            this.assertModuleNodeAllowed(e),
                                                            e
                                                        }
                                                    default:
                                                        if (this.isAsyncFunction()) return i || this.raise(pe.AsyncFunctionInSingleStatementContext, {
                                                            at: this.state.startLoc
                                                        }), this.next(), this.parseFunctionStatement(r, !0, !i && a)
                                                }
                                                let o = this.state.value,
                                                    h = this.parseExpression();
                                                return v(s) && "Identifier" === h.type && this.eat(14) ? this.parseLabeledStatement(r, o, h, e) : this.parseExpressionStatement(r, h, t)
                                            }
                                            assertModuleNodeAllowed(e) {
                                                !this.options.allowImportExportEverywhere && !this.inModule && this.raise(pe.ImportOutsideModule, {
                                                    at: e
                                                })
                                            }
                                            decoratorsEnabledBeforeExport() {
                                                return !!this.hasPlugin("decorators-legacy") || this.hasPlugin("decorators") && !1 !== this.getPluginOption("decorators", "decoratorsBeforeExport")
                                            }
                                            maybeTakeDecorators(e, t, s) {
                                                return e && (t.decorators && t.decorators.length > 0 ? ("boolean" != typeof this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(pe.DecoratorsBeforeAfterExport, {
                                                    at: t.decorators[0]
                                                }), t.decorators.unshift(...e)) : t.decorators = e, this.resetStartLocationFromNode(t, e[0]), s && this.resetStartLocationFromNode(s, t)), t
                                            }
                                            canHaveLeadingDecorator() {
                                                return this.match(80)
                                            }
                                            parseDecorators(e) {
                                                let t = [];
                                                do {
                                                    t.push(this.parseDecorator())
                                                } while (this.match(26));
                                                if (this.match(82)) e || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(pe.DecoratorExportClass, {
                                                    at: this.state.startLoc
                                                });
                                                else if (!this.canHaveLeadingDecorator()) throw this.raise(pe.UnexpectedLeadingDecorator, {
                                                    at: this.state.startLoc
                                                });
                                                return t
                                            }
                                            parseDecorator() {
                                                this.expectOnePlugin(["decorators", "decorators-legacy"]);
                                                let e = this.startNode();
                                                if (this.next(), this.hasPlugin("decorators")) {
                                                    let t, s = this.state.startLoc;
                                                    if (this.match(10)) {
                                                        let s = this.state.startLoc;
                                                        this.next(), t = this.parseExpression(), this.expect(11), t = this.wrapParenthesis(s, t);
                                                        let r = this.state.startLoc;
                                                        e.expression = this.parseMaybeDecoratorArguments(t), !1 === this.getPluginOption("decorators", "allowCallParenthesized") && e.expression !== t && this.raise(pe.DecoratorArgumentsOutsideParentheses, {
                                                            at: r
                                                        })
                                                    } else {
                                                        for (t = this.parseIdentifier(!1); this.eat(16);) {
                                                            let e = this.startNodeAt(s);
                                                            e.object = t, this.match(136) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), e.property = this.parsePrivateName()) : e.property = this.parseIdentifier(!0), e.computed = !1, t = this.finishNode(e, "MemberExpression")
                                                        }
                                                        e.expression = this.parseMaybeDecoratorArguments(t)
                                                    }
                                                } else e.expression = this.parseExprSubscripts();
                                                return this.finishNode(e, "Decorator")
                                            }
                                            parseMaybeDecoratorArguments(e) {
                                                if (this.eat(10)) {
                                                    let t = this.startNodeAtNode(e);
                                                    return t.callee = e, t.arguments = this.parseCallExpressionArguments(11, !1), this.toReferencedList(t.arguments), this.finishNode(t, "CallExpression")
                                                }
                                                return e
                                            }
                                            parseBreakContinueStatement(e, t) {
                                                return this.next(), this.isLineTerminator() ? e.label = null : (e.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(e, t), this.finishNode(e, t ? "BreakStatement" : "ContinueStatement")
                                            }
                                            verifyBreakContinue(e, t) {
                                                let s;
                                                for (s = 0; s < this.state.labels.length; ++s) {
                                                    let r = this.state.labels[s];
                                                    if ((null == e.label || r.name === e.label.name) && (null != r.kind && (t || "loop" === r.kind) || e.label && t)) break
                                                }
                                                if (s === this.state.labels.length) {
                                                    let s = t ? "BreakStatement" : "ContinueStatement";
                                                    this.raise(pe.IllegalBreakContinue, {
                                                        at: e,
                                                        type: s
                                                    })
                                                }
                                            }
                                            parseDebuggerStatement(e) {
                                                return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement")
                                            }
                                            parseHeaderExpression() {
                                                this.expect(10);
                                                let e = this.parseExpression();
                                                return this.expect(11), e
                                            }
                                            parseDoWhileStatement(e) {
                                                return this.next(), this.state.labels.push(vr), e.body = this.withSmartMixTopicForbiddingContext((() => this.parseStatement())), this.state.labels.pop(), this.expect(92), e.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(e, "DoWhileStatement")
                                            }
                                            parseForStatement(e) {
                                                this.next(), this.state.labels.push(vr);
                                                let t = null;
                                                if (this.isAwaitAllowed() && this.eatContextual(96) && (t = this.state.lastTokStartLoc), this.scope.enter(Be), this.expect(10), this.match(13)) return null !== t && this.unexpected(t), this.parseFor(e, null);
                                                let s = this.isContextual(99),
                                                    r = this.isContextual(105) && !this.hasFollowingLineBreak(),
                                                    i = s && this.hasFollowingBindingAtom() || r && this.hasFollowingBindingIdentifier() && this.startsUsingForOf();
                                                if (this.match(74) || this.match(75) || i) {
                                                    let s = this.startNode(),
                                                        i = this.state.value;
                                                    this.next(), this.parseVar(s, !0, i);
                                                    let a = this.finishNode(s, "VariableDeclaration"),
                                                        n = this.match(58);
                                                    return n && r && this.raise(pe.ForInUsing, {
                                                        at: a
                                                    }), (n || this.isContextual(101)) && 1 === a.declarations.length ? this.parseForIn(e, a, t) : (null !== t && this.unexpected(t), this.parseFor(e, a))
                                                }
                                                let a = this.isContextual(95),
                                                    n = new Is,
                                                    o = this.parseExpression(!0, n),
                                                    h = this.isContextual(101);
                                                if (h && (s && this.raise(pe.ForOfLet, {
                                                        at: o
                                                    }), null === t && a && "Identifier" === o.type && this.raise(pe.ForOfAsync, {
                                                        at: o
                                                    })), h || this.match(58)) {
                                                    this.checkDestructuringPrivate(n), this.toAssignable(o, !0);
                                                    let s = h ? "ForOfStatement" : "ForInStatement";
                                                    return this.checkLVal(o, { in: {
                                                            type: s
                                                        }
                                                    }), this.parseForIn(e, o, t)
                                                }
                                                return this.checkExpressionErrors(n, !0), null !== t && this.unexpected(t), this.parseFor(e, o)
                                            }
                                            parseFunctionStatement(e, t, s) {
                                                return this.next(), this.parseFunction(e, 1 | (s ? 2 : 0) | (t ? 8 : 0))
                                            }
                                            parseIfStatement(e) {
                                                return this.next(), e.test = this.parseHeaderExpression(), e.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(), e.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null, this.finishNode(e, "IfStatement")
                                            }
                                            parseReturnStatement(e) {
                                                return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(pe.IllegalReturn, {
                                                    at: this.state.startLoc
                                                }), this.next(), this.isLineTerminator() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement")
                                            }
                                            parseSwitchStatement(e) {
                                                this.next(), e.discriminant = this.parseHeaderExpression();
                                                let t, s, r = e.cases = [];
                                                for (this.expect(5), this.state.labels.push(Cr), this.scope.enter(Be); !this.match(8);)
                                                    if (this.match(61) || this.match(65)) {
                                                        let e = this.match(61);
                                                        t && this.finishNode(t, "SwitchCase"), r.push(t = this.startNode()), t.consequent = [], this.next(), e ? t.test = this.parseExpression() : (s && this.raise(pe.MultipleDefaultsInSwitch, {
                                                            at: this.state.lastTokStartLoc
                                                        }), s = !0, t.test = null), this.expect(14)
                                                    } else t ? t.consequent.push(this.parseStatementListItem()) : this.unexpected();
                                                return this.scope.exit(), t && this.finishNode(t, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(e, "SwitchStatement")
                                            }
                                            parseThrowStatement(e) {
                                                return this.next(), this.hasPrecedingLineBreak() && this.raise(pe.NewlineAfterThrow, {
                                                    at: this.state.lastTokEndLoc
                                                }), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement")
                                            }
                                            parseCatchClauseParam() {
                                                let e = this.parseBindingAtom();
                                                return this.scope.enter(this.options.annexB && "Identifier" === e.type ? _e : 0), this.checkLVal(e, { in: {
                                                        type: "CatchClause"
                                                    },
                                                    binding: ht
                                                }), e
                                            }
                                            parseTryStatement(e) {
                                                if (this.next(), e.block = this.parseBlock(), e.handler = null, this.match(62)) {
                                                    let t = this.startNode();
                                                    this.next(), this.match(10) ? (this.expect(10), t.param = this.parseCatchClauseParam(), this.expect(11)) : (t.param = null, this.scope.enter(Be)), t.body = this.withSmartMixTopicForbiddingContext((() => this.parseBlock(!1, !1))), this.scope.exit(), e.handler = this.finishNode(t, "CatchClause")
                                                }
                                                return e.finalizer = this.eat(67) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(pe.NoCatchOrFinally, {
                                                    at: e
                                                }), this.finishNode(e, "TryStatement")
                                            }
                                            parseVarStatement(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                                return this.next(), this.parseVar(e, !1, t, s), this.semicolon(), this.finishNode(e, "VariableDeclaration")
                                            }
                                            parseWhileStatement(e) {
                                                return this.next(), e.test = this.parseHeaderExpression(), this.state.labels.push(vr), e.body = this.withSmartMixTopicForbiddingContext((() => this.parseStatement())), this.state.labels.pop(), this.finishNode(e, "WhileStatement")
                                            }
                                            parseWithStatement(e) {
                                                return this.state.strict && this.raise(pe.StrictWith, {
                                                    at: this.state.startLoc
                                                }), this.next(), e.object = this.parseHeaderExpression(), e.body = this.withSmartMixTopicForbiddingContext((() => this.parseStatement())), this.finishNode(e, "WithStatement")
                                            }
                                            parseEmptyStatement(e) {
                                                return this.next(), this.finishNode(e, "EmptyStatement")
                                            }
                                            parseLabeledStatement(e, t, s, r) {
                                                for (let a of this.state.labels) a.name === t && this.raise(pe.LabelRedeclaration, {
                                                    at: s,
                                                    labelName: t
                                                });
                                                let i = D(this.state.type) ? "loop" : this.match(71) ? "switch" : null;
                                                for (let a = this.state.labels.length - 1; a >= 0; a--) {
                                                    let t = this.state.labels[a];
                                                    if (t.statementStart !== e.start) break;
                                                    t.statementStart = this.state.start, t.kind = i
                                                }
                                                return this.state.labels.push({
                                                    name: t,
                                                    kind: i,
                                                    statementStart: this.state.start
                                                }), e.body = 8 & r ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0) : this.parseStatement(), this.state.labels.pop(), e.label = s, this.finishNode(e, "LabeledStatement")
                                            }
                                            parseExpressionStatement(e, t, s) {
                                                return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement")
                                            }
                                            parseBlock() {
                                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                                    s = arguments.length > 2 ? arguments[2] : void 0,
                                                    r = this.startNode();
                                                return e && this.state.strictErrors.clear(), this.expect(5), t && this.scope.enter(Be), this.parseBlockBody(r, e, !1, 8, s), t && this.scope.exit(), this.finishNode(r, "BlockStatement")
                                            }
                                            isValidDirective(e) {
                                                return "ExpressionStatement" === e.type && "StringLiteral" === e.expression.type && !e.expression.extra.parenthesized
                                            }
                                            parseBlockBody(e, t, s, r, i) {
                                                let a = e.body = [],
                                                    n = e.directives = [];
                                                this.parseBlockOrModuleBlockBody(a, t ? n : void 0, s, r, i)
                                            }
                                            parseBlockOrModuleBlockBody(e, t, s, r, i) {
                                                let a = this.state.strict,
                                                    n = !1,
                                                    o = !1;
                                                for (; !this.match(r);) {
                                                    let r = s ? this.parseModuleItem() : this.parseStatementListItem();
                                                    if (t && !o) {
                                                        if (this.isValidDirective(r)) {
                                                            let e = this.stmtToDirective(r);
                                                            t.push(e), !n && "use strict" === e.value.value && (n = !0, this.setStrict(!0));
                                                            continue
                                                        }
                                                        o = !0, this.state.strictErrors.clear()
                                                    }
                                                    e.push(r)
                                                }
                                                i && i.call(this, n), a || this.setStrict(!1), this.next()
                                            }
                                            parseFor(e, t) {
                                                return e.init = t, this.semicolon(!1), e.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), e.update = this.match(11) ? null : this.parseExpression(), this.expect(11), e.body = this.withSmartMixTopicForbiddingContext((() => this.parseStatement())), this.scope.exit(), this.state.labels.pop(), this.finishNode(e, "ForStatement")
                                            }
                                            parseForIn(e, t, s) {
                                                let r = this.match(58);
                                                return this.next(), r ? null !== s && this.unexpected(s) : e.await = null !== s, "VariableDeclaration" === t.type && null != t.declarations[0].init && (!r || !this.options.annexB || this.state.strict || "var" !== t.kind || "Identifier" !== t.declarations[0].id.type) && this.raise(pe.ForInOfLoopInitializer, {
                                                    at: t,
                                                    type: r ? "ForInStatement" : "ForOfStatement"
                                                }), "AssignmentPattern" === t.type && this.raise(pe.InvalidLhs, {
                                                    at: t,
                                                    ancestor: {
                                                        type: "ForStatement"
                                                    }
                                                }), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), e.body = this.withSmartMixTopicForbiddingContext((() => this.parseStatement())), this.scope.exit(), this.state.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
                                            }
                                            parseVar(e, t, s) {
                                                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                                    i = e.declarations = [];
                                                for (e.kind = s;;) {
                                                    let e = this.startNode();
                                                    if (this.parseVarId(e, s), e.init = this.eat(29) ? t ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, null === e.init && !r && ("Identifier" === e.id.type || t && (this.match(58) || this.isContextual(101)) ? "const" === s && !(this.match(58) || this.isContextual(101)) && this.raise(pe.DeclarationMissingInitializer, {
                                                            at: this.state.lastTokEndLoc,
                                                            kind: "const"
                                                        }) : this.raise(pe.DeclarationMissingInitializer, {
                                                            at: this.state.lastTokEndLoc,
                                                            kind: "destructuring"
                                                        })), i.push(this.finishNode(e, "VariableDeclarator")), !this.eat(12)) break
                                                }
                                                return e
                                            }
                                            parseVarId(e, t) {
                                                "using" === t && !this.inModule && this.match(96) && this.raise(pe.AwaitInUsingBinding, {
                                                    at: this.state.startLoc
                                                });
                                                let s = this.parseBindingAtom();
                                                this.checkLVal(s, { in: {
                                                        type: "VariableDeclarator"
                                                    },
                                                    binding: "var" === t ? lt : ot
                                                }), e.id = s
                                            }
                                            parseAsyncFunctionExpression(e) {
                                                return this.parseFunction(e, 8)
                                            }
                                            parseFunction(e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                                    s = 2 & t,
                                                    r = !!(1 & t),
                                                    i = r && !(4 & t),
                                                    a = !!(8 & t);
                                                this.initFunction(e, a), this.match(55) && (s && this.raise(pe.GeneratorInSingleStatementContext, {
                                                    at: this.state.startLoc
                                                }), this.next(), e.generator = !0), r && (e.id = this.parseFunctionId(i));
                                                let n = this.state.maybeInArrowParameters;
                                                return this.state.maybeInArrowParameters = !1, this.scope.enter(Re), this.prodParam.enter(Cs(a, e.generator)), r || (e.id = this.parseFunctionId()), this.parseFunctionParams(e, !1), this.withSmartMixTopicForbiddingContext((() => {
                                                    this.parseFunctionBodyAndFinish(e, r ? "FunctionDeclaration" : "FunctionExpression")
                                                })), this.prodParam.exit(), this.scope.exit(), r && !s && this.registerFunctionStatementId(e), this.state.maybeInArrowParameters = n, e
                                            }
                                            parseFunctionId(e) {
                                                return e || v(this.state.type) ? this.parseIdentifier() : null
                                            }
                                            parseFunctionParams(e, t) {
                                                this.expect(10), this.expressionScope.enter(xs()), e.params = this.parseBindingList(11, 41, 2 | (t ? 4 : 0)), this.expressionScope.exit()
                                            }
                                            registerFunctionStatementId(e) {
                                                e.id && this.scope.declareName(e.id.name, !this.options.annexB || this.state.strict || e.generator || e.async ? this.scope.treatFunctionsAsVar ? lt : ot : pt, e.id.loc.start)
                                            }
                                            parseClass(e, t, s) {
                                                this.next();
                                                let r = this.state.strict;
                                                return this.state.strict = !0, this.parseClassId(e, t, s), this.parseClassSuper(e), e.body = this.parseClassBody(!!e.superClass, r), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
                                            }
                                            isClassProperty() {
                                                return this.match(29) || this.match(13) || this.match(8)
                                            }
                                            isClassMethod() {
                                                return this.match(10)
                                            }
                                            isNonstaticConstructor(e) {
                                                return !e.computed && !e.static && ("constructor" === e.key.name || "constructor" === e.key.value)
                                            }
                                            parseClassBody(e, t) {
                                                this.classScope.enter();
                                                let s = {
                                                        hadConstructor: !1,
                                                        hadSuperClass: e
                                                    },
                                                    r = [],
                                                    i = this.startNode();
                                                if (i.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext((() => {
                                                        for (; !this.match(8);) {
                                                            if (this.eat(13)) {
                                                                if (r.length > 0) throw this.raise(pe.DecoratorSemicolon, {
                                                                    at: this.state.lastTokEndLoc
                                                                });
                                                                continue
                                                            }
                                                            if (this.match(26)) {
                                                                r.push(this.parseDecorator());
                                                                continue
                                                            }
                                                            let e = this.startNode();
                                                            r.length && (e.decorators = r, this.resetStartLocationFromNode(e, r[0]), r = []), this.parseClassMember(i, e, s), "constructor" === e.kind && e.decorators && e.decorators.length > 0 && this.raise(pe.DecoratorConstructor, {
                                                                at: e
                                                            })
                                                        }
                                                    })), this.state.strict = t, this.next(), r.length) throw this.raise(pe.TrailingDecorator, {
                                                    at: this.state.startLoc
                                                });
                                                return this.classScope.exit(), this.finishNode(i, "ClassBody")
                                            }
                                            parseClassMemberFromModifier(e, t) {
                                                let s = this.parseIdentifier(!0);
                                                if (this.isClassMethod()) {
                                                    let r = t;
                                                    return r.kind = "method", r.computed = !1, r.key = s, r.static = !1, this.pushClassMethod(e, r, !1, !1, !1, !1), !0
                                                }
                                                if (this.isClassProperty()) {
                                                    let r = t;
                                                    return r.computed = !1, r.key = s, r.static = !1, e.body.push(this.parseClassProperty(r)), !0
                                                }
                                                return this.resetPreviousNodeTrailingComments(s), !1
                                            }
                                            parseClassMember(e, t, s) {
                                                let r = this.isContextual(104);
                                                if (r) {
                                                    if (this.parseClassMemberFromModifier(e, t)) return;
                                                    if (this.eat(5)) return void this.parseClassStaticBlock(e, t)
                                                }
                                                this.parseClassMemberWithIsStatic(e, t, s, r)
                                            }
                                            parseClassMemberWithIsStatic(e, t, s, r) {
                                                let i = t,
                                                    a = t,
                                                    n = t,
                                                    o = t,
                                                    h = t,
                                                    l = i,
                                                    p = i;
                                                if (t.static = r, this.parsePropertyNamePrefixOperator(t), this.eat(55)) {
                                                    l.kind = "method";
                                                    let t = this.match(136);
                                                    return this.parseClassElementName(l), t ? void this.pushClassPrivateMethod(e, a, !0, !1) : (this.isNonstaticConstructor(i) && this.raise(pe.ConstructorIsGenerator, {
                                                        at: i.key
                                                    }), void this.pushClassMethod(e, i, !0, !1, !1, !1))
                                                }
                                                let c = v(this.state.type) && !this.state.containsEsc,
                                                    u = this.match(136),
                                                    d = this.parseClassElementName(t),
                                                    m = this.state.startLoc;
                                                if (this.parsePostMemberNameModifiers(p), this.isClassMethod()) {
                                                    if (l.kind = "method", u) return void this.pushClassPrivateMethod(e, a, !1, !1);
                                                    let r = this.isNonstaticConstructor(i),
                                                        n = !1;
                                                    r && (i.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(pe.DuplicateConstructor, {
                                                        at: d
                                                    }), r && this.hasPlugin("typescript") && t.override && this.raise(pe.OverrideOnConstructor, {
                                                        at: d
                                                    }), s.hadConstructor = !0, n = s.hadSuperClass), this.pushClassMethod(e, i, !1, !1, r, n)
                                                } else if (this.isClassProperty()) u ? this.pushClassPrivateProperty(e, o) : this.pushClassProperty(e, n);
                                                else if (c && "async" === d.name && !this.isLineTerminator()) {
                                                    this.resetPreviousNodeTrailingComments(d);
                                                    let t = this.eat(55);
                                                    p.optional && this.unexpected(m), l.kind = "method";
                                                    let s = this.match(136);
                                                    this.parseClassElementName(l), this.parsePostMemberNameModifiers(p), s ? this.pushClassPrivateMethod(e, a, t, !0) : (this.isNonstaticConstructor(i) && this.raise(pe.ConstructorIsAsync, {
                                                        at: i.key
                                                    }), this.pushClassMethod(e, i, t, !0, !1, !1))
                                                } else if (!c || "get" !== d.name && "set" !== d.name || this.match(55) && this.isLineTerminator())
                                                    if (c && "accessor" === d.name && !this.isLineTerminator()) {
                                                        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(d);
                                                        let t = this.match(136);
                                                        this.parseClassElementName(n), this.pushClassAccessorProperty(e, h, t)
                                                    } else this.isLineTerminator() ? u ? this.pushClassPrivateProperty(e, o) : this.pushClassProperty(e, n) : this.unexpected();
                                                else {
                                                    this.resetPreviousNodeTrailingComments(d), l.kind = d.name;
                                                    let t = this.match(136);
                                                    this.parseClassElementName(i), t ? this.pushClassPrivateMethod(e, a, !1, !1) : (this.isNonstaticConstructor(i) && this.raise(pe.ConstructorIsAccessor, {
                                                        at: i.key
                                                    }), this.pushClassMethod(e, i, !1, !1, !1, !1)), this.checkGetterSetterParams(i)
                                                }
                                            }
                                            parseClassElementName(e) {
                                                let {
                                                    type: t,
                                                    value: s
                                                } = this.state;
                                                if ((130 === t || 131 === t) && e.static && "prototype" === s && this.raise(pe.StaticPrototype, {
                                                        at: this.state.startLoc
                                                    }), 136 === t) {
                                                    "constructor" === s && this.raise(pe.ConstructorClassPrivateField, {
                                                        at: this.state.startLoc
                                                    });
                                                    let t = this.parsePrivateName();
                                                    return e.key = t, t
                                                }
                                                return this.parsePropertyName(e)
                                            }
                                            parseClassStaticBlock(e, t) {
                                                var s;
                                                this.scope.enter($e | Ve | ze);
                                                let r = this.state.labels;
                                                this.state.labels = [], this.prodParam.enter(Ts);
                                                let i = t.body = [];
                                                this.parseBlockOrModuleBlockBody(i, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = r, e.body.push(this.finishNode(t, "StaticBlock")), null != (s = t.decorators) && s.length && this.raise(pe.DecoratorStaticBlock, {
                                                    at: t
                                                })
                                            }
                                            pushClassProperty(e, t) {
                                                !t.computed && ("constructor" === t.key.name || "constructor" === t.key.value) && this.raise(pe.ConstructorClassField, {
                                                    at: t.key
                                                }), e.body.push(this.parseClassProperty(t))
                                            }
                                            pushClassPrivateProperty(e, t) {
                                                let s = this.parseClassPrivateProperty(t);
                                                e.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), It, s.key.loc.start)
                                            }
                                            pushClassAccessorProperty(e, t, s) {
                                                if (!s && !t.computed) {
                                                    let e = t.key;
                                                    ("constructor" === e.name || "constructor" === e.value) && this.raise(pe.ConstructorClassField, {
                                                        at: e
                                                    })
                                                }
                                                let r = this.parseClassAccessorProperty(t);
                                                e.body.push(r), s && this.classScope.declarePrivateName(this.getPrivateNameSV(r.key), It, r.key.loc.start)
                                            }
                                            pushClassMethod(e, t, s, r, i, a) {
                                                e.body.push(this.parseMethod(t, s, r, i, a, "ClassMethod", !0))
                                            }
                                            pushClassPrivateMethod(e, t, s, r) {
                                                let i = this.parseMethod(t, s, r, !1, !1, "ClassPrivateMethod", !0);
                                                e.body.push(i);
                                                let a = "get" === i.kind ? i.static ? St : Ct : "set" === i.kind ? i.static ? vt : Nt : It;
                                                this.declareClassPrivateMethodInScope(i, a)
                                            }
                                            declareClassPrivateMethodInScope(e, t) {
                                                this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), t, e.key.loc.start)
                                            }
                                            parsePostMemberNameModifiers(e) {}
                                            parseClassPrivateProperty(e) {
                                                return this.parseInitializer(e), this.semicolon(), this.finishNode(e, "ClassPrivateProperty")
                                            }
                                            parseClassProperty(e) {
                                                return this.parseInitializer(e), this.semicolon(), this.finishNode(e, "ClassProperty")
                                            }
                                            parseClassAccessorProperty(e) {
                                                return this.parseInitializer(e), this.semicolon(), this.finishNode(e, "ClassAccessorProperty")
                                            }
                                            parseInitializer(e) {
                                                this.scope.enter($e | ze), this.expressionScope.enter(bs()), this.prodParam.enter(Ts), e.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit()
                                            }
                                            parseClassId(e, t, s) {
                                                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nt;
                                                if (v(this.state.type)) e.id = this.parseIdentifier(), t && this.declareNameFromIdentifier(e.id, r);
                                                else {
                                                    if (!s && t) throw this.raise(pe.MissingClassName, {
                                                        at: this.state.startLoc
                                                    });
                                                    e.id = null
                                                }
                                            }
                                            parseClassSuper(e) {
                                                e.superClass = this.eat(81) ? this.parseExprSubscripts() : null
                                            }
                                            parseExport(e, t) {
                                                let s = this.maybeParseExportDefaultSpecifier(e),
                                                    r = !s || this.eat(12),
                                                    i = r && this.eatExportStar(e),
                                                    a = i && this.maybeParseExportNamespaceSpecifier(e),
                                                    n = r && (!a || this.eat(12)),
                                                    o = s || i;
                                                if (i && !a) {
                                                    if (s && this.unexpected(), t) throw this.raise(pe.UnsupportedDecoratorExport, {
                                                        at: e
                                                    });
                                                    return this.parseExportFrom(e, !0), this.finishNode(e, "ExportAllDeclaration")
                                                }
                                                let h, l = this.maybeParseExportNamedSpecifiers(e);
                                                if (s && r && !i && !l && this.unexpected(null, 5), a && n && this.unexpected(null, 97), o || l) {
                                                    if (h = !1, t) throw this.raise(pe.UnsupportedDecoratorExport, {
                                                        at: e
                                                    });
                                                    this.parseExportFrom(e, o)
                                                } else h = this.maybeParseExportDeclaration(e);
                                                if (o || l || h) {
                                                    var p;
                                                    let s = e;
                                                    if (this.checkExport(s, !0, !1, !!s.source), "ClassDeclaration" === (null == (p = s.declaration) ? void 0 : p.type)) this.maybeTakeDecorators(t, s.declaration, s);
                                                    else if (t) throw this.raise(pe.UnsupportedDecoratorExport, {
                                                        at: e
                                                    });
                                                    return this.finishNode(s, "ExportNamedDeclaration")
                                                }
                                                if (this.eat(65)) {
                                                    let s = e,
                                                        r = this.parseExportDefaultExpression();
                                                    if (s.declaration = r, "ClassDeclaration" === r.type) this.maybeTakeDecorators(t, r, s);
                                                    else if (t) throw this.raise(pe.UnsupportedDecoratorExport, {
                                                        at: e
                                                    });
                                                    return this.checkExport(s, !0, !0), this.finishNode(s, "ExportDefaultDeclaration")
                                                }
                                                this.unexpected(null, 5)
                                            }
                                            eatExportStar(e) {
                                                return this.eat(55)
                                            }
                                            maybeParseExportDefaultSpecifier(e) {
                                                if (this.isExportDefaultSpecifier()) {
                                                    this.expectPlugin("exportDefaultFrom");
                                                    let t = this.startNode();
                                                    return t.exported = this.parseIdentifier(!0), e.specifiers = [this.finishNode(t, "ExportDefaultSpecifier")], !0
                                                }
                                                return !1
                                            }
                                            maybeParseExportNamespaceSpecifier(e) {
                                                if (this.isContextual(93)) {
                                                    e.specifiers || (e.specifiers = []);
                                                    let t = this.startNodeAt(this.state.lastTokStartLoc);
                                                    return this.next(), t.exported = this.parseModuleExportName(), e.specifiers.push(this.finishNode(t, "ExportNamespaceSpecifier")), !0
                                                }
                                                return !1
                                            }
                                            maybeParseExportNamedSpecifiers(e) {
                                                if (this.match(5)) {
                                                    e.specifiers || (e.specifiers = []);
                                                    let t = "type" === e.exportKind;
                                                    return e.specifiers.push(...this.parseExportSpecifiers(t)), e.source = null, e.declaration = null, this.hasPlugin("importAssertions") && (e.assertions = []), !0
                                                }
                                                return !1
                                            }
                                            maybeParseExportDeclaration(e) {
                                                return !!this.shouldParseExportDeclaration() && (e.specifiers = [], e.source = null, this.hasPlugin("importAssertions") && (e.assertions = []), e.declaration = this.parseExportDeclaration(e), !0)
                                            }
                                            isAsyncFunction() {
                                                if (!this.isContextual(95)) return !1;
                                                let e = this.nextTokenStart();
                                                return !_t.test(this.input.slice(this.state.pos, e)) && this.isUnparsedContextual(e, "function")
                                            }
                                            parseExportDefaultExpression() {
                                                let e = this.startNode();
                                                if (this.match(68)) return this.next(), this.parseFunction(e, 5);
                                                if (this.isAsyncFunction()) return this.next(), this.next(), this.parseFunction(e, 13);
                                                if (this.match(80)) return this.parseClass(e, !0, !0);
                                                if (this.match(26)) return this.hasPlugin("decorators") && !0 === this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(pe.DecoratorBeforeExport, {
                                                    at: this.state.startLoc
                                                }), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0);
                                                if (this.match(75) || this.match(74) || this.isLet()) throw this.raise(pe.UnsupportedDefaultExport, {
                                                    at: this.state.startLoc
                                                });
                                                let t = this.parseMaybeAssignAllowIn();
                                                return this.semicolon(), t
                                            }
                                            parseExportDeclaration(e) {
                                                return this.match(80) ? this.parseClass(this.startNode(), !0, !1) : this.parseStatementListItem()
                                            }
                                            isExportDefaultSpecifier() {
                                                let {
                                                    type: e
                                                } = this.state;
                                                if (v(e)) {
                                                    if (95 === e && !this.state.containsEsc || 99 === e) return !1;
                                                    if ((128 === e || 127 === e) && !this.state.containsEsc) {
                                                        let {
                                                            type: e
                                                        } = this.lookahead();
                                                        if (v(e) && 97 !== e || 5 === e) return this.expectOnePlugin(["flow", "typescript"]), !1
                                                    }
                                                } else if (!this.match(65)) return !1;
                                                let t = this.nextTokenStart(),
                                                    s = this.isUnparsedContextual(t, "from");
                                                if (44 === this.input.charCodeAt(t) || v(this.state.type) && s) return !0;
                                                if (this.match(65) && s) {
                                                    let e = this.input.charCodeAt(this.nextTokenStartSince(t + 4));
                                                    return 34 === e || 39 === e
                                                }
                                                return !1
                                            }
                                            parseExportFrom(e, t) {
                                                if (this.eatContextual(97)) {
                                                    e.source = this.parseImportSource(), this.checkExport(e);
                                                    let t = this.maybeParseImportAssertions();
                                                    t && (e.assertions = t, this.checkJSONModuleImport(e))
                                                } else t && this.unexpected();
                                                this.semicolon()
                                            }
                                            shouldParseExportDeclaration() {
                                                let {
                                                    type: e
                                                } = this.state;
                                                return 26 === e && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (!0 === this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(pe.DecoratorBeforeExport, {
                                                    at: this.state.startLoc
                                                }), !0) : 74 === e || 75 === e || 68 === e || 80 === e || this.isLet() || this.isAsyncFunction()
                                            }
                                            checkExport(e, t, s, r) {
                                                if (t)
                                                    if (s) {
                                                        if (this.checkDuplicateExports(e, "default"), this.hasPlugin("exportDefaultFrom")) {
                                                            var i;
                                                            let t = e.declaration;
                                                            "Identifier" === t.type && "from" === t.name && t.end - t.start === 4 && (null == (i = t.extra) || !i.parenthesized) && this.raise(pe.ExportDefaultFromAsIdentifier, {
                                                                at: t
                                                            })
                                                        }
                                                    } else if (e.specifiers && e.specifiers.length)
                                                    for (let a of e.specifiers) {
                                                        let {
                                                            exported: e
                                                        } = a, t = "Identifier" === e.type ? e.name : e.value;
                                                        if (this.checkDuplicateExports(a, t), !r && a.local) {
                                                            let {
                                                                local: e
                                                            } = a;
                                                            "Identifier" !== e.type ? this.raise(pe.ExportBindingIsString, {
                                                                at: a,
                                                                localName: e.value,
                                                                exportName: t
                                                            }) : (this.checkReservedWord(e.name, e.loc.start, !0, !1), this.scope.checkLocalExport(e))
                                                        }
                                                    } else if (e.declaration)
                                                        if ("FunctionDeclaration" === e.declaration.type || "ClassDeclaration" === e.declaration.type) {
                                                            let t = e.declaration.id;
                                                            if (!t) throw new Error("Assertion failure");
                                                            this.checkDuplicateExports(e, t.name)
                                                        } else if ("VariableDeclaration" === e.declaration.type)
                                                    for (let a of e.declaration.declarations) this.checkDeclaration(a.id)
                                            }
                                            checkDeclaration(e) {
                                                if ("Identifier" === e.type) this.checkDuplicateExports(e, e.name);
                                                else if ("ObjectPattern" === e.type)
                                                    for (let t of e.properties) this.checkDeclaration(t);
                                                else if ("ArrayPattern" === e.type)
                                                    for (let t of e.elements) t && this.checkDeclaration(t);
                                                else "ObjectProperty" === e.type ? this.checkDeclaration(e.value) : "RestElement" === e.type ? this.checkDeclaration(e.argument) : "AssignmentPattern" === e.type && this.checkDeclaration(e.left)
                                            }
                                            checkDuplicateExports(e, t) {
                                                this.exportedIdentifiers.has(t) && ("default" === t ? this.raise(pe.DuplicateDefaultExport, {
                                                    at: e
                                                }) : this.raise(pe.DuplicateExport, {
                                                    at: e,
                                                    exportName: t
                                                })), this.exportedIdentifiers.add(t)
                                            }
                                            parseExportSpecifiers(e) {
                                                let t = [],
                                                    s = !0;
                                                for (this.expect(5); !this.eat(8);) {
                                                    if (s) s = !1;
                                                    else if (this.expect(12), this.eat(8)) break;
                                                    let r = this.isContextual(128),
                                                        i = this.match(131),
                                                        a = this.startNode();
                                                    a.local = this.parseModuleExportName(), t.push(this.parseExportSpecifier(a, i, e, r))
                                                }
                                                return t
                                            }
                                            parseExportSpecifier(e, t, s, r) {
                                                return this.eatContextual(93) ? e.exported = this.parseModuleExportName() : t ? e.exported = Ds(e.local) : e.exported || (e.exported = Os(e.local)), this.finishNode(e, "ExportSpecifier")
                                            }
                                            parseModuleExportName() {
                                                if (this.match(131)) {
                                                    let e = this.parseStringLiteral(this.state.value),
                                                        t = e.value.match(Nr);
                                                    return t && this.raise(pe.ModuleExportNameHasLoneSurrogate, {
                                                        at: e,
                                                        surrogateCharCode: t[0].charCodeAt(0)
                                                    }), e
                                                }
                                                return this.parseIdentifier(!0)
                                            }
                                            isJSONModuleImport(e) {
                                                return null != e.assertions && e.assertions.some((e => {
                                                    let {
                                                        key: t,
                                                        value: s
                                                    } = e;
                                                    return "json" === s.value && ("Identifier" === t.type ? "type" === t.name : "type" === t.value)
                                                }))
                                            }
                                            checkImportReflection(e) {
                                                var t;
                                                e.module && ((1 !== e.specifiers.length || "ImportDefaultSpecifier" !== e.specifiers[0].type) && this.raise(pe.ImportReflectionNotBinding, {
                                                    at: e.specifiers[0].loc.start
                                                }), (null == (t = e.assertions) ? void 0 : t.length) > 0 && this.raise(pe.ImportReflectionHasAssertion, {
                                                    at: e.specifiers[0].loc.start
                                                }))
                                            }
                                            checkJSONModuleImport(e) {
                                                if (this.isJSONModuleImport(e) && "ExportAllDeclaration" !== e.type) {
                                                    let {
                                                        specifiers: t
                                                    } = e;
                                                    if (null != t) {
                                                        let e = t.find((e => {
                                                            let t;
                                                            if ("ExportSpecifier" === e.type ? t = e.local : "ImportSpecifier" === e.type && (t = e.imported), void 0 !== t) return "Identifier" === t.type ? "default" !== t.name : "default" !== t.value
                                                        }));
                                                        void 0 !== e && this.raise(pe.ImportJSONBindingNotDefault, {
                                                            at: e.loc.start
                                                        })
                                                    }
                                                }
                                            }
                                            parseMaybeImportReflection(e) {
                                                let t = !1;
                                                if (this.isContextual(125)) {
                                                    let e = this.lookahead(),
                                                        s = e.type;
                                                    v(s) ? (97 !== s || 102 === this.input.charCodeAt(this.nextTokenStartSince(e.end))) && (t = !0) : 12 !== s && (t = !0)
                                                }
                                                t ? (this.expectPlugin("importReflection"), this.next(), e.module = !0) : this.hasPlugin("importReflection") && (e.module = !1)
                                            }
                                            parseImport(e) {
                                                if (e.specifiers = [], !this.match(131)) {
                                                    this.parseMaybeImportReflection(e);
                                                    let t = !this.maybeParseDefaultImportSpecifier(e) || this.eat(12),
                                                        s = t && this.maybeParseStarImportSpecifier(e);
                                                    t && !s && this.parseNamedImportSpecifiers(e), this.expectContextual(97)
                                                }
                                                e.source = this.parseImportSource();
                                                let t = this.maybeParseImportAssertions();
                                                if (t) e.assertions = t;
                                                else {
                                                    let t = this.maybeParseModuleAttributes();
                                                    t && (e.attributes = t)
                                                }
                                                return this.checkImportReflection(e), this.checkJSONModuleImport(e), this.semicolon(), this.finishNode(e, "ImportDeclaration")
                                            }
                                            parseImportSource() {
                                                return this.match(131) || this.unexpected(), this.parseExprAtom()
                                            }
                                            shouldParseDefaultImport(e) {
                                                return v(this.state.type)
                                            }
                                            parseImportSpecifierLocal(e, t, s) {
                                                t.local = this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(t, s))
                                            }
                                            finishImportSpecifier(e, t) {
                                                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ot;
                                                return this.checkLVal(e.local, { in: {
                                                        type: t
                                                    },
                                                    binding: s
                                                }), this.finishNode(e, t)
                                            }
                                            parseAssertEntries() {
                                                let e = [],
                                                    t = new Set;
                                                do {
                                                    if (this.match(8)) break;
                                                    let s = this.startNode(),
                                                        r = this.state.value;
                                                    if (t.has(r) && this.raise(pe.ModuleAttributesWithDuplicateKeys, {
                                                            at: this.state.startLoc,
                                                            key: r
                                                        }), t.add(r), this.match(131) ? s.key = this.parseStringLiteral(r) : s.key = this.parseIdentifier(!0), this.expect(14), !this.match(131)) throw this.raise(pe.ModuleAttributeInvalidValue, {
                                                        at: this.state.startLoc
                                                    });
                                                    s.value = this.parseStringLiteral(this.state.value), e.push(this.finishNode(s, "ImportAttribute"))
                                                } while (this.eat(12));
                                                return e
                                            }
                                            maybeParseModuleAttributes() {
                                                if (!this.match(76) || this.hasPrecedingLineBreak()) return this.hasPlugin("moduleAttributes") ? [] : null;
                                                this.expectPlugin("moduleAttributes"), this.next();
                                                let e = [],
                                                    t = new Set;
                                                do {
                                                    let s = this.startNode();
                                                    if (s.key = this.parseIdentifier(!0), "type" !== s.key.name && this.raise(pe.ModuleAttributeDifferentFromType, {
                                                            at: s.key
                                                        }), t.has(s.key.name) && this.raise(pe.ModuleAttributesWithDuplicateKeys, {
                                                            at: s.key,
                                                            key: s.key.name
                                                        }), t.add(s.key.name), this.expect(14), !this.match(131)) throw this.raise(pe.ModuleAttributeInvalidValue, {
                                                        at: this.state.startLoc
                                                    });
                                                    s.value = this.parseStringLiteral(this.state.value), this.finishNode(s, "ImportAttribute"), e.push(s)
                                                } while (this.eat(12));
                                                return e
                                            }
                                            maybeParseImportAssertions() {
                                                if (!this.isContextual(94) || this.hasPrecedingLineBreak()) return this.hasPlugin("importAssertions") ? [] : null;
                                                this.expectPlugin("importAssertions"), this.next(), this.eat(5);
                                                let e = this.parseAssertEntries();
                                                return this.eat(8), e
                                            }
                                            maybeParseDefaultImportSpecifier(e) {
                                                return !!this.shouldParseDefaultImport(e) && (this.parseImportSpecifierLocal(e, this.startNode(), "ImportDefaultSpecifier"), !0)
                                            }
                                            maybeParseStarImportSpecifier(e) {
                                                if (this.match(55)) {
                                                    let t = this.startNode();
                                                    return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(e, t, "ImportNamespaceSpecifier"), !0
                                                }
                                                return !1
                                            }
                                            parseNamedImportSpecifiers(e) {
                                                let t = !0;
                                                for (this.expect(5); !this.eat(8);) {
                                                    if (t) t = !1;
                                                    else {
                                                        if (this.eat(14)) throw this.raise(pe.DestructureNamedImport, {
                                                            at: this.state.startLoc
                                                        });
                                                        if (this.expect(12), this.eat(8)) break
                                                    }
                                                    let s = this.startNode(),
                                                        r = this.match(131),
                                                        i = this.isContextual(128);
                                                    s.imported = this.parseModuleExportName();
                                                    let a = this.parseImportSpecifier(s, r, "type" === e.importKind || "typeof" === e.importKind, i, void 0);
                                                    e.specifiers.push(a)
                                                }
                                            }
                                            parseImportSpecifier(e, t, s, r, i) {
                                                if (this.eatContextual(93)) e.local = this.parseIdentifier();
                                                else {
                                                    let {
                                                        imported: s
                                                    } = e;
                                                    if (t) throw this.raise(pe.ImportBindingIsString, {
                                                        at: e,
                                                        importName: s.value
                                                    });
                                                    this.checkReservedWord(s.name, e.loc.start, !0, !0), e.local || (e.local = Os(s))
                                                }
                                                return this.finishImportSpecifier(e, "ImportSpecifier", i)
                                            }
                                            isThisParam(e) {
                                                return "Identifier" === e.type && "this" === e.name
                                            }
                                        },
                                        Mr = class extends Lr {
                                            constructor(e, t) {
                                                super(e = s(e), t), this.options = e, this.initializeScopes(), this.plugins = Or(this.options.plugins), this.filename = e.sourceFilename
                                            }
                                            getScopeHandler() {
                                                return Lt
                                            }
                                            parse() {
                                                this.enterInitialScopes();
                                                let e = this.startNode(),
                                                    t = this.startNode();
                                                return this.nextToken(), e.errors = null, this.parseTopLevel(e, t), e.errors = this.state.errors, e
                                            }
                                        };

                                    function Or(e) {
                                        let t = new Map;
                                        for (let s of e) {
                                            let [e, r] = Array.isArray(s) ? s : [s, {}];
                                            t.has(e) || t.set(e, r || {})
                                        }
                                        return t
                                    }

                                    function Dr(e, t) {
                                        var s;
                                        if ("unambiguous" !== (null == (s = t) ? void 0 : s.sourceType)) return Rr(t, e).parse();
                                        t = Object.assign({}, t);
                                        try {
                                            t.sourceType = "module";
                                            let s = Rr(t, e),
                                                r = s.parse();
                                            if (s.sawUnambiguousESM) return r;
                                            if (s.ambiguousScriptDifferentAst) try {
                                                return t.sourceType = "script", Rr(t, e).parse()
                                            } catch {} else r.program.sourceType = "script";
                                            return r
                                        } catch (r) {
                                            try {
                                                return t.sourceType = "script", Rr(t, e).parse()
                                            } catch {}
                                            throw r
                                        }
                                    }

                                    function Fr(e, t) {
                                        let s = Rr(t, e);
                                        return s.options.strictMode && (s.state.strict = !0), s.getExpression()
                                    }

                                    function Br(e) {
                                        let t = {};
                                        for (let s of Object.keys(e)) t[s] = q(e[s]);
                                        return t
                                    }
                                    var jr = Br(S);

                                    function Rr(e, t) {
                                        let s = Mr;
                                        return null != e && e.plugins && (Ar(e.plugins), s = _r(e.plugins)), new s(e, t)
                                    }
                                    var Ur = {};

                                    function _r(e) {
                                        let t = wr.filter((t => xr(e, t))),
                                            s = t.join("/"),
                                            r = Ur[s];
                                        if (!r) {
                                            r = Mr;
                                            for (let e of t) r = Er[e](r);
                                            Ur[s] = r
                                        }
                                        return r
                                    }
                                    e.parse = Dr, e.parseExpression = Fr, e.tokTypes = jr
                                }
                            }),
                            re = o({
                                "src/language-js/parse/json.js" (e, t) {
                                    c();
                                    var s = V(),
                                        r = W(),
                                        i = K(),
                                        a = J();

                                    function n() {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            {
                                                allowComments: t = !0
                                            } = e;
                                        return function(e) {
                                            let r, {
                                                parseExpression: i
                                            } = se();
                                            try {
                                                r = i(e, {
                                                    tokens: !0,
                                                    ranges: !0
                                                })
                                            } catch (n) {
                                                throw a(n)
                                            }
                                            if (!t && s(r.comments)) throw o(r.comments[0], "Comment");
                                            return h(r), r
                                        }
                                    }

                                    function o(e, t) {
                                        let [s, i] = [e.loc.start, e.loc.end].map((e => {
                                            let {
                                                line: t,
                                                column: s
                                            } = e;
                                            return {
                                                line: t,
                                                column: s + 1
                                            }
                                        }));
                                        return r(`${t} is not allowed in JSON.`, {
                                            start: s,
                                            end: i
                                        })
                                    }

                                    function h(e) {
                                        switch (e.type) {
                                            case "ArrayExpression":
                                                for (let t of e.elements) null !== t && h(t);
                                                return;
                                            case "ObjectExpression":
                                                for (let t of e.properties) h(t);
                                                return;
                                            case "ObjectProperty":
                                                if (e.computed) throw o(e.key, "Computed key");
                                                if (e.shorthand) throw o(e.key, "Shorthand property");
                                                return "Identifier" !== e.key.type && h(e.key), void h(e.value);
                                            case "UnaryExpression":
                                                {
                                                    let {
                                                        operator: t,
                                                        argument: s
                                                    } = e;
                                                    if ("+" !== t && "-" !== t) throw o(e, `Operator '${e.operator}'`);
                                                    if ("NumericLiteral" === s.type || "Identifier" === s.type && ("Infinity" === s.name || "NaN" === s.name)) return;
                                                    throw o(s, `Operator '${t}' before '${s.type}'`)
                                                }
                                            case "Identifier":
                                                if ("Infinity" !== e.name && "NaN" !== e.name && "undefined" !== e.name) throw o(e, `Identifier '${e.name}'`);
                                                return;
                                            case "TemplateLiteral":
                                                if (s(e.expressions)) throw o(e.expressions[0], "'TemplateLiteral' with expression");
                                                for (let t of e.quasis) h(t);
                                                return;
                                            case "NullLiteral":
                                            case "BooleanLiteral":
                                            case "NumericLiteral":
                                            case "StringLiteral":
                                            case "TemplateElement":
                                                return;
                                            default:
                                                throw o(e, `'${e.type}'`)
                                        }
                                    }
                                    var l = n(),
                                        p = {
                                            json: i({
                                                parse: l,
                                                hasPragma: () => !0
                                            }),
                                            json5: i(l),
                                            "json-stringify": i({
                                                parse: n({
                                                    allowComments: !1
                                                }),
                                                astFormat: "estree-json"
                                            })
                                        };
                                    t.exports = p
                                }
                            });
                        c();
                        var ie = u(),
                            ae = d(),
                            ne = g(),
                            oe = K(),
                            he = J(),
                            le = te(),
                            pe = re(),
                            ce = {
                                sourceType: "module",
                                allowImportExportEverywhere: !0,
                                allowReturnOutsideFunction: !0,
                                allowSuperOutsideMethod: !0,
                                allowUndeclaredExports: !0,
                                errorRecovery: !0,
                                createParenthesizedExpressions: !0,
                                plugins: ["doExpressions", "exportDefaultFrom", "functionBind", "functionSent", "throwExpressions", "partialApplication", ["decorators", {
                                    decoratorsBeforeExport: !1
                                }], "importAssertions", "decimal", "moduleBlocks", "asyncDoExpressions", "regexpUnicodeSets", "destructuringPrivate", "decoratorAutoAccessors"],
                                tokens: !0,
                                ranges: !0
                            },
                            ue = ["recordAndTuple", {
                                syntaxType: "hash"
                            }],
                            de = "v8intrinsic",
                            me = [
                                ["pipelineOperator", {
                                    proposal: "hack",
                                    topicToken: "%"
                                }],
                                ["pipelineOperator", {
                                    proposal: "minimal"
                                }],
                                ["pipelineOperator", {
                                    proposal: "fsharp"
                                }]
                            ],
                            ye = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ce;
                                return Object.assign(Object.assign({}, t), {}, {
                                    plugins: [...t.plugins, ...e]
                                })
                            },
                            xe = /@(?:no)?flow\b/;

                        function Pe(e, t) {
                            if (t.filepath && t.filepath.endsWith(".js.flow")) return !0;
                            let s = ae(e);
                            s && (e = e.slice(s.length));
                            let r = ne(e, 0);
                            return !1 !== r && (e = e.slice(0, r)), xe.test(e)
                        }

                        function be(e, t, s) {
                            let r = (0, se()[e])(t, s),
                                i = r.errors.find((e => !Ne.has(e.reasonCode)));
                            if (i) throw i;
                            return r
                        }

                        function Te(e) {
                            for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) s[r - 1] = arguments[r];
                            return function(t, r) {
                                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                if (("babel" === i.parser || "__babel_estree" === i.parser) && Pe(t, i)) return i.parser = "babel-flow", Ee(t, r, i);
                                let a = s;
                                "script" === i.__babelSourceType && (a = a.map((e => Object.assign(Object.assign({}, e), {}, {
                                    sourceType: "script"
                                })))), /#[[{]/.test(t) && (a = a.map((e => ye([ue], e))));
                                let n = /%[A-Z]/.test(t);
                                t.includes("|>") ? a = (n ? [...me, de] : me).flatMap((e => a.map((t => ye([e], t))))) : n && (a = a.map((e => ye([de], e))));
                                let {
                                    result: o,
                                    error: h
                                } = ie(...a.map((s => () => be(e, t, s))));
                                if (!o) throw he(h);
                                return i.originalText = t, le(o, i)
                            }
                        }
                        var Ae = Te("parse", ye(["jsx", "flow"])),
                            Ee = Te("parse", ye(["jsx", ["flow", {
                                all: !0,
                                enums: !0
                            }]])),
                            we = Te("parse", ye(["jsx", "typescript"]), ye(["typescript"])),
                            Se = Te("parse", ye(["jsx", "flow", "estree"])),
                            ve = Te("parseExpression", ye(["jsx"])),
                            Ce = Te("parseExpression", ye(["typescript"])),
                            Ne = new Set(["StrictNumericEscape", "StrictWith", "StrictOctalLiteral", "StrictDelete", "StrictEvalArguments", "StrictEvalArgumentsBinding", "StrictFunction", "EmptyTypeArguments", "EmptyTypeParameters", "ConstructorHasTypeParameters", "UnsupportedParameterPropertyKind", "UnexpectedParameterModifier", "MixedLabeledAndUnlabeledElements", "InvalidTupleMemberLabel", "NonClassMethodPropertyHasAbstractModifer", "ReadonlyForMethodSignature", "ClassMethodHasDeclare", "ClassMethodHasReadonly", "InvalidModifierOnTypeMember", "DuplicateAccessibilityModifier", "IndexSignatureHasDeclare", "DecoratorExportClass", "ParamDupe", "InvalidDecimal", "RestTrailingComma", "UnsupportedParameterDecorator", "UnterminatedJsxContent", "UnexpectedReservedWord", "ModuleAttributesWithDuplicateKeys", "LineTerminatorBeforeArrow", "InvalidEscapeSequenceTemplate", "NonAbstractClassHasAbstractMethod", "UnsupportedPropertyDecorator", "OptionalTypeBeforeRequired", "PatternIsOptional", "OptionalBindingPattern", "DeclareClassFieldHasInitializer", "TypeImportCannotSpecifyDefaultAndNamed", "DeclareFunctionHasImplementation", "ConstructorClassField", "VarRedeclaration", "InvalidPrivateFieldResolution", "DuplicateExport"]),
                            ke = oe(Ae),
                            Le = oe(we),
                            Me = oe(ve),
                            Oe = oe(Ce);
                        t.exports = {
                            parsers: Object.assign(Object.assign({
                                babel: ke,
                                "babel-flow": oe(Ee),
                                "babel-ts": Le
                            }, pe), {}, {
                                __js_expression: Me,
                                __vue_expression: Me,
                                __vue_ts_expression: Oe,
                                __vue_event_binding: ke,
                                __vue_ts_event_binding: Le,
                                __babel_estree: oe(Se)
                            })
                        }
                    }));
                return ke()
            }()
        }
    }
]);