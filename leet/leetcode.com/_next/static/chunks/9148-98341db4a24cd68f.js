"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9148], {
        89148: function(e, t, n) {
            n.d(t, {
                bv: function() {
                    return Q
                }
            });
            var r = n(67294),
                o = n.t(r, 2),
                i = n(2740),
                s = n(84539),
                c = n(85983),
                a = n(66037),
                u = n(73935);
            const l = e => {
                const {
                    element: t,
                    padding: n
                } = e;
                return {
                    name: "arrow",
                    options: e,
                    fn(e) {
                        return r = t, Object.prototype.hasOwnProperty.call(r, "current") ? null != t.current ? (0, c.x7)({
                            element: t.current,
                            padding: n
                        }).fn(e) : {} : t ? (0, c.x7)({
                            element: t,
                            padding: n
                        }).fn(e) : {};
                        var r
                    }
                }
            };
            var f = "undefined" !== typeof document ? r.useLayoutEffect : r.useEffect;

            function d(e, t) {
                if (e === t) return !0;
                if (typeof e !== typeof t) return !1;
                if ("function" === typeof e && e.toString() === t.toString()) return !0;
                let n, r, o;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if (n = e.length, n != t.length) return !1;
                        for (r = n; 0 !== r--;)
                            if (!d(e[r], t[r])) return !1;
                        return !0
                    }
                    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
                    for (r = n; 0 !== r--;)
                        if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 !== r--;) {
                        const n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !d(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e !== e && t !== t
            }

            function p(e) {
                const t = r.useRef(e);
                return f((() => {
                    t.current = e
                })), t
            }
            var m = "undefined" !== typeof document ? r.useLayoutEffect : r.useEffect;
            let h = !1,
                g = 0;
            const y = () => "floating-ui-" + g++;
            o["useId".toString()];

            function v() {
                const e = new Map;
                return {
                    emit(t, n) {
                        var r;
                        null == (r = e.get(t)) || r.forEach((e => e(n)))
                    },
                    on(t, n) {
                        e.set(t, [...e.get(t) || [], n])
                    },
                    off(t, n) {
                        e.set(t, (e.get(t) || []).filter((e => e !== n)))
                    }
                }
            }
            const w = r.createContext(null),
                x = () => r.useContext(w);

            function b(e) {
                return (null == e ? void 0 : e.ownerDocument) || document
            }

            function E(e) {
                return b(e).defaultView || window
            }

            function j(e) {
                return !!e && e instanceof E(e).Element
            }
            const C = o["useInsertionEffect".toString()] || (e => e());

            function R(e) {
                const t = r.useRef((() => {
                    0
                }));
                return C((() => {
                    t.current = e
                })), r.useCallback((function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null == t.current ? void 0 : t.current(...n)
                }), [])
            }

            function S(e) {
                void 0 === e && (e = {});
                const {
                    open: t = !1,
                    onOpenChange: n,
                    nodeId: o
                } = e, i = function(e) {
                    void 0 === e && (e = {});
                    const {
                        placement: t = "bottom",
                        strategy: n = "absolute",
                        middleware: o = [],
                        platform: i,
                        whileElementsMounted: s,
                        open: c
                    } = e, [l, m] = r.useState({
                        x: null,
                        y: null,
                        strategy: n,
                        placement: t,
                        middlewareData: {},
                        isPositioned: !1
                    }), [h, g] = r.useState(o);
                    d(h, o) || g(o);
                    const y = r.useRef(null),
                        v = r.useRef(null),
                        w = r.useRef(l),
                        x = p(s),
                        b = p(i),
                        [E, j] = r.useState(null),
                        [C, R] = r.useState(null),
                        S = r.useCallback((e => {
                            y.current !== e && (y.current = e, j(e))
                        }), []),
                        F = r.useCallback((e => {
                            v.current !== e && (v.current = e, R(e))
                        }), []),
                        P = r.useCallback((() => {
                            if (!y.current || !v.current) return;
                            const e = {
                                placement: t,
                                strategy: n,
                                middleware: h
                            };
                            b.current && (e.platform = b.current), (0, a.oo)(y.current, v.current, e).then((e => {
                                const t = { ...e,
                                    isPositioned: !0
                                };
                                k.current && !d(w.current, t) && (w.current = t, u.flushSync((() => {
                                    m(t)
                                })))
                            }))
                        }), [h, t, n, b]);
                    f((() => {
                        !1 === c && w.current.isPositioned && (w.current.isPositioned = !1, m((e => ({ ...e,
                            isPositioned: !1
                        }))))
                    }), [c]);
                    const k = r.useRef(!1);
                    f((() => (k.current = !0, () => {
                        k.current = !1
                    })), []), f((() => {
                        if (E && C) {
                            if (x.current) return x.current(E, C, P);
                            P()
                        }
                    }), [E, C, P, x]);
                    const O = r.useMemo((() => ({
                            reference: y,
                            floating: v,
                            setReference: S,
                            setFloating: F
                        })), [S, F]),
                        $ = r.useMemo((() => ({
                            reference: E,
                            floating: C
                        })), [E, C]);
                    return r.useMemo((() => ({ ...l,
                        update: P,
                        refs: O,
                        elements: $,
                        reference: S,
                        floating: F
                    })), [l, P, O, $, S, F])
                }(e), s = x(), c = r.useRef(null), l = r.useRef({}), h = r.useState((() => v()))[0], [g, y] = r.useState(null), w = r.useCallback((e => {
                    const t = j(e) ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e
                    } : e;
                    i.refs.setReference(t)
                }), [i.refs]), b = r.useCallback((e => {
                    (j(e) || null === e) && (c.current = e, y(e)), (j(i.refs.reference.current) || null === i.refs.reference.current || null !== e && !j(e)) && i.refs.setReference(e)
                }), [i.refs]), E = r.useMemo((() => ({ ...i.refs,
                    setReference: b,
                    setPositionReference: w,
                    domReference: c
                })), [i.refs, b, w]), C = r.useMemo((() => ({ ...i.elements,
                    domReference: g
                })), [i.elements, g]), S = R(n), F = r.useMemo((() => ({ ...i,
                    refs: E,
                    elements: C,
                    dataRef: l,
                    nodeId: o,
                    events: h,
                    open: t,
                    onOpenChange: S
                })), [i, o, h, t, S, E, C]);
                return m((() => {
                    const e = null == s ? void 0 : s.nodesRef.current.find((e => e.id === o));
                    e && (e.context = F)
                })), r.useMemo((() => ({ ...i,
                    context: F,
                    refs: E,
                    reference: b,
                    positionReference: w
                })), [i, E, F, b, w])
            }
            var F, P = Object.defineProperty,
                k = (e, t, n) => (((e, t, n) => {
                    t in e ? P(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" != typeof t ? t + "" : t, n), n),
                O = {
                    exports: {}
                },
                $ = {};
            O.exports = function() {
                if (F) return $;
                F = 1;
                var e = r,
                    t = Symbol.for("react.element"),
                    n = Symbol.for("react.fragment"),
                    o = Object.prototype.hasOwnProperty,
                    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    s = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function c(e, n, r) {
                    var c, a = {},
                        u = null,
                        l = null;
                    for (c in void 0 !== r && (u = "" + r), void 0 !== n.key && (u = "" + n.key), void 0 !== n.ref && (l = n.ref), n) o.call(n, c) && !s.hasOwnProperty(c) && (a[c] = n[c]);
                    if (e && e.defaultProps)
                        for (c in n = e.defaultProps) void 0 === a[c] && (a[c] = n[c]);
                    return {
                        $$typeof: t,
                        type: e,
                        key: u,
                        ref: l,
                        props: a,
                        _owner: i.current
                    }
                }
                return $.Fragment = n, $.jsx = c, $.jsxs = c, $
            }();
            var T = O.exports;
            const M = new class {
                constructor() {
                    k(this, "current", this.detect())
                }
                set(e) {
                    this.current !== e && (this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return typeof window > "u" || typeof document > "u" ? "server" : "client"
                }
            };

            function _(e, t, ...n) {
                if (e in t) {
                    const r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                const r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(r, _), r
            }

            function A(e) {
                return M.isServer ? null : e instanceof Node ? e.ownerDocument : e && Object.prototype.hasOwnProperty.call(e, "current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
            const I = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
            var N = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(N || {});

            function L(e) {
                const t = (0, r.useRef)(e);
                return ((e, t) => {
                    M.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
                })((() => {
                    t.current = e
                }), [e]), t
            }

            function D(e, t, n) {
                const o = L(t);
                (0, r.useEffect)((() => {
                    function t(e) {
                        o.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }), [e, n])
            }

            function z(e, t, n = !0) {
                const o = (0, r.useRef)(!1);

                function i(n, r) {
                    if (!o.current || n.defaultPrevented) return;
                    const i = function e(t) {
                            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                        }(e),
                        s = r(n);
                    if (null !== s && s.getRootNode().contains(s)) {
                        for (const e of i) {
                            if (null === e) continue;
                            const t = e instanceof HTMLElement ? e : e.current;
                            if (null != t && t.contains(s) || n.composed && n.composedPath().includes(t)) return
                        }
                        return ! function(e, t = 0) {
                            var n;
                            return e !== (null == (n = A(e)) ? void 0 : n.body) && _(t, {
                                0: () => e.matches(I),
                                1() {
                                    let t = e;
                                    for (; null !== t;) {
                                        if (t.matches(I)) return !0;
                                        t = t.parentElement
                                    }
                                    return !1
                                }
                            })
                        }(s, N.Loose) && -1 !== s.tabIndex && n.preventDefault(), t(n, s)
                    }
                }(0, r.useEffect)((() => {
                    requestAnimationFrame((() => {
                        o.current = n
                    }))
                }), [n]);
                const s = (0, r.useRef)(null);
                D("mousedown", (e => {
                    var t, n;
                    o.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }), !0), D("click", (e => {
                    s.current && (i(e, (() => s.current)), s.current = null)
                }), !0), D("blur", (e => i(e, (() => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null))), !0)
            }
            const B = (0, r.createContext)(null);
            B.displayName = "ReferenceContext";
            const U = (0, r.createContext)(null);
            U.displayName = "FloatingContext";
            const Y = (0, r.createContext)(null);

            function X(e) {
                const t = (0, r.useContext)(B);
                if (null === t) {
                    const t = new Error(`<${e} /> is missing a parent <Float /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, X), t
                }
                return t
            }

            function H(e) {
                const t = (0, r.useContext)(U);
                if (null === t) {
                    const t = new Error(`<${e} /> is missing a parent <Float /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, H), t
                }
                return t
            }

            function W(e) {
                const t = (0, r.useContext)(Y);
                if (null === t) {
                    const t = new Error(`<${e} /> is missing a parent <Float /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, W), t
                }
                return t
            }

            function V(e, t, n, o) {
                const {
                    referenceRef: i
                } = o, s = t;
                if (s.as === r.Fragment) return T.jsx(e.type, { ...e.props,
                    ...n,
                    ref: i
                });
                const c = s.as || "div";
                return T.jsx(c, { ...n,
                    ref: i,
                    children: T.jsx(e.type, { ...e.props
                    })
                })
            }

            function q(e, t, n, o) {
                const {
                    floatingRef: c,
                    props: a,
                    mounted: u,
                    setShow: l,
                    x: f,
                    y: d,
                    placement: p,
                    strategy: m,
                    referenceElWidth: h
                } = o, g = { ...a,
                    ...t
                }, y = function(e, t) {
                    return (0, r.useMemo)((() => "function" == typeof e.originClass ? e.originClass(t) : "string" == typeof e.originClass ? e.originClass : e.tailwindcssOriginClass ? (e => {
                        switch (e) {
                            case "top":
                                return "origin-bottom";
                            case "bottom":
                                return "origin-top";
                            case "left":
                                return "origin-right";
                            case "right":
                                return "origin-left";
                            case "top-start":
                            case "right-end":
                                return "origin-bottom-left";
                            case "top-end":
                            case "left-end":
                                return "origin-bottom-right";
                            case "right-start":
                            case "bottom-start":
                                return "origin-top-left";
                            case "left-start":
                            case "bottom-end":
                                return "origin-top-right";
                            default:
                                return ""
                        }
                    })(t) : ""), [t, e.originClass, e.tailwindcssOriginClass])
                }(g, p), v = {
                    show: !!u.current && g.show,
                    enter: `${g.enter||""} ${y}`,
                    enterFrom: `${g.enterFrom||""}`,
                    enterTo: `${g.enterTo||""}`,
                    leave: `${g.leave||""} ${y}`,
                    leaveFrom: `${g.leaveFrom||""}`,
                    leaveTo: `${g.leaveTo||""}`,
                    beforeEnter: () => {
                        l(!0)
                    },
                    afterLeave: () => {
                        l(!1)
                    }
                }, w = {
                    style: { ...g.dialog || !g.transform && void 0 !== g.transform ? {
                            position: m,
                            zIndex: g.zIndex || 9999,
                            top: `${d||0}px`,
                            left: `${f||0}px`
                        } : {
                            position: m,
                            zIndex: g.zIndex || 9999,
                            top: "0px",
                            left: "0px",
                            right: "auto",
                            bottom: "auto",
                            transform: `translate(${Math.round(f||0)}px,${Math.round(d||0)}px)`
                        },
                        width: g.adaptiveWidth && "number" == typeof h ? `${h}px` : void 0
                    }
                };
                return x = function(e) {
                    const t = { ...w,
                        ...n,
                        ref: c
                    };
                    if (g.as === r.Fragment) return T.jsx(e.type, { ...e.props,
                        ...t
                    });
                    const o = g.as || "div";
                    return T.jsx(o, { ...t,
                        children: T.jsx(e.type, { ...e.props
                        })
                    })
                }(M.isServer ? u.current && g.show ? T.jsx(e.type, { ...e.props
                }) : T.jsx(r.Fragment, {}) : g.transitionChild ? T.jsx(s.u.Child, {
                    as: r.Fragment,
                    ...v,
                    children: T.jsx(e.type, { ...e.props
                    })
                }) : T.jsx(s.u, {
                    as: r.Fragment,
                    ...v,
                    children: T.jsx(e.type, { ...e.props
                    })
                })), g.portal ? T.jsx(i.h, {
                    children: x
                }) : x;
                var x
            }

            function G([e, t], n) {
                var o, i;
                const s = (0, r.useRef)(!1),
                    [u, f] = (0, r.useState)(),
                    d = (0, r.useRef)(null),
                    p = (0, r.useMemo)((() => ({
                        show: n.onShow || (() => {}),
                        hide: n.onHide || (() => {}),
                        update: n.onUpdate || (() => {})
                    })), [n.onShow, n.onHide, n.onUpdate]),
                    {
                        x: m,
                        y: h,
                        placement: g,
                        strategy: y,
                        update: v,
                        refs: w,
                        middlewareData: x
                    } = S({
                        placement: n.placement || "bottom-start",
                        strategy: n.strategy,
                        middleware: u
                    }),
                    [b, E] = (0, r.useState)(null),
                    j = (0, r.useCallback)((() => {
                        v(), p.update()
                    }), [v, p]);
                (0, r.useEffect)(j, [n.placement, n.strategy, u]),
                function(e, t, n, o) {
                    (0, r.useEffect)((() => {
                        const r = [];
                        ("number" == typeof o.offset || "object" == typeof o.offset || "function" == typeof o.offset) && r.push((0, c.cv)(o.offset)), (!0 === o.flip || "number" == typeof o.flip || "object" == typeof o.flip) && r.push((0, c.RR)({
                            padding: "number" == typeof o.flip ? o.flip : void 0,
                            ..."object" == typeof o.flip ? o.flip : {}
                        })), (!0 === o.shift || "number" == typeof o.shift || "object" == typeof o.shift) && r.push((0, c.uY)({
                            padding: "number" == typeof o.shift ? o.shift : void 0,
                            ..."object" == typeof o.shift ? o.shift : {}
                        })), (!0 === o.autoPlacement || "object" == typeof o.autoPlacement) && r.push((0, c.X5)("object" == typeof o.autoPlacement ? o.autoPlacement : void 0)), (!0 === o.arrow || "number" == typeof o.arrow) && r.push(l({
                            element: n,
                            padding: !0 === o.arrow ? 0 : o.arrow
                        })), r.push(..."function" == typeof o.middleware ? o.middleware({
                            referenceEl: t.reference,
                            floatingEl: t.floating
                        }) : o.middleware || []), (!0 === o.hide || "object" == typeof o.hide) && r.push((0, c.Cp)("object" == typeof o.hide ? o.hide : void 0)), e(r)
                    }), [o.offset, o.shift, o.flip, o.arrow, o.autoPlacement, o.hide, o.middleware])
                }(f, w, d, n), (0, r.useEffect)((() => {
                    s.current = !0
                }), []),
                function(e, t, n) {
                    (0, r.useEffect)((() => {
                        if (e && M.isClient && typeof ResizeObserver < "u" && t.current && t.current instanceof Element) {
                            const e = new ResizeObserver((([e]) => {
                                const t = e.borderBoxSize.reduce(((e, {
                                    inlineSize: t
                                }) => e + t), 0);
                                n(t)
                            }));
                            return e.observe(t.current), () => {
                                e.disconnect(), n(null)
                            }
                        }
                    }), [])
                }(n.adaptiveWidth, w.reference, E), (0, r.useEffect)((() => {
                    if (w.reference.current && w.floating.current && e) {
                        const e = !1 !== n.autoUpdate ? (0, a.Me)(w.reference.current, w.floating.current, j, "object" == typeof n.autoUpdate ? n.autoUpdate : void 0) : () => {};
                        return p.show(), () => {
                            e(), p.hide()
                        }
                    }
                }), [e, j, w]);
                const C = (0, r.useRef)(!0);
                (0, r.useEffect)((() => {
                    !(w.reference.current instanceof Element) && w.reference.current && w.floating.current && C.current && (C.current = !1, j(), window.requestAnimationFrame((() => {
                        C.current = !0, j()
                    })))
                }), [w]);
                return {
                    referenceApi: {
                        referenceRef: w.setReference,
                        placement: g
                    },
                    floatingApi: {
                        floatingRef: w.setFloating,
                        props: n,
                        mounted: s,
                        setShow: t,
                        x: m,
                        y: h,
                        placement: g,
                        strategy: y,
                        referenceElWidth: b
                    },
                    arrowApi: {
                        arrowRef: d,
                        placement: g,
                        x: null == (o = x.arrow) ? void 0 : o.x,
                        y: null == (i = x.arrow) ? void 0 : i.y
                    },
                    x: m,
                    y: h,
                    placement: g,
                    strategy: y,
                    update: j,
                    refs: w,
                    middlewareData: x
                }
            }
            Y.displayName = "ArrowContext";
            const J = (0, r.forwardRef)(((e, t) => {
                const [n, o] = (0, r.useState)(e.show ? ? !1), {
                    referenceApi: i,
                    floatingApi: s,
                    arrowApi: c,
                    placement: a
                } = G([n, o], e), u = {
                    placement: a
                }, [l, f] = "function" == typeof e.children ? e.children(u) : e.children;
                if (!(0, r.isValidElement)(l)) return console.warn("<Float /> is missing a reference and floating element."), T.jsx(r.Fragment, {});

                function d(n) {
                    if (e.as === r.Fragment || !e.as) return T.jsx(r.Fragment, {
                        children: n
                    });
                    const o = e.as;
                    return T.jsx(o, {
                        ref: t,
                        className: e.className,
                        children: n
                    })
                }
                if (e.composable || e.dialog) return d(T.jsx(B.Provider, {
                    value: i,
                    children: T.jsx(U.Provider, {
                        value: s,
                        children: T.jsx(Y.Provider, {
                            value: c,
                            children: "function" == typeof e.children ? e.children(u) : e.children
                        })
                    })
                }, "FloatingNode"));
                const p = V(l, {
                        as: r.Fragment
                    }, {
                        key: "reference-node"
                    }, i),
                    m = q(f, {
                        as: e.floatingAs || "div"
                    }, {}, s);
                return d([p, T.jsx(Y.Provider, {
                    value: c,
                    children: m
                }, "floating-node")])
            }));

            function K({
                onInitial: e,
                children: t,
                ...n
            }) {
                const [o, i] = (0, r.useState)(n.show ? ? !1), s = (0, r.useMemo)((() => {
                    const {
                        as: e,
                        show: t,
                        placement: r,
                        strategy: o,
                        offset: i,
                        shift: s,
                        flip: c,
                        arrow: a,
                        autoPlacement: u,
                        hide: l,
                        autoUpdate: f,
                        zIndex: d,
                        enter: p,
                        enterFrom: m,
                        enterTo: h,
                        leave: g,
                        leaveFrom: y,
                        leaveTo: v,
                        originClass: w,
                        tailwindcssOriginClass: x,
                        portal: b,
                        transform: E,
                        middleware: j,
                        onShow: C,
                        onHide: R,
                        onUpdate: S,
                        ...F
                    } = n;
                    return F
                }), [n]), {
                    floatingApi: c,
                    arrowApi: a,
                    placement: u,
                    refs: l
                } = G([o, i], n);
                if ((0, r.useEffect)((() => {
                        i(n.show ? ? !1)
                    }), [n.show]), e({
                        show: o,
                        setShow: i,
                        placement: u,
                        refs: l
                    }), !t) return T.jsx(r.Fragment, {});
                const f = q("function" == typeof t ? t({
                    placement: u,
                    close: function() {
                        o && i(!1)
                    }
                }) : t, { ...n,
                    as: n.as || r.Fragment,
                    show: o
                }, s, c);
                return T.jsx(Y.Provider, {
                    value: a,
                    children: f
                })
            }
            J.displayName = "Float";
            const Q = Object.assign(J, {
                Reference: function(e) {
                    if (!e.children) return T.jsx(r.Fragment, {});
                    const t = (0, r.useMemo)((() => {
                            const {
                                as: t,
                                children: n,
                                ...r
                            } = e;
                            return r
                        }), [e]),
                        n = X("Float.Reference"),
                        {
                            placement: o
                        } = n,
                        i = {
                            placement: o
                        };
                    return V("function" == typeof e.children ? e.children(i) : e.children, { ...e,
                        as: e.as || r.Fragment
                    }, t, n)
                },
                Content: function(e) {
                    if (!e.children) return T.jsx(r.Fragment, {});
                    const t = (0, r.useMemo)((() => {
                            const {
                                as: t,
                                enter: n,
                                enterFrom: r,
                                enterTo: o,
                                leave: i,
                                leaveFrom: s,
                                leaveTo: c,
                                originClass: a,
                                tailwindcssOriginClass: u,
                                transitionChild: l,
                                children: f,
                                ...d
                            } = e;
                            return d
                        }), [e]),
                        n = H("Float.Content"),
                        {
                            placement: o
                        } = n,
                        i = {
                            placement: o
                        };
                    return q("function" == typeof e.children ? e.children(i) : e.children, { ...e,
                        as: e.as || "div"
                    }, t, n)
                },
                Arrow: function(e) {
                    const {
                        arrowRef: t,
                        placement: n,
                        x: o,
                        y: i
                    } = W("Float.Arrow"), s = (0, r.useMemo)((() => {
                        const {
                            as: t,
                            offset: n,
                            children: r,
                            ...o
                        } = e;
                        return o
                    }), [e]), c = {
                        left: "number" == typeof o ? `${o}px` : void 0,
                        top: "number" == typeof i ? `${i}px` : void 0,
                        right: void 0,
                        bottom: void 0,
                        [{
                            top: "bottom",
                            right: "left",
                            bottom: "top",
                            left: "right"
                        }[n.split("-")[0]]]: -1 * (e.offset ? ? 4) + "px",
                        ...s.style
                    };
                    if (e.as === r.Fragment) {
                        const o = {
                                placement: n
                            },
                            i = "function" == typeof e.children ? e.children(o) : e.children;
                        return i && (0, r.isValidElement)(i) ? T.jsx(i.type, { ...i.props,
                            ref: t,
                            style: c
                        }) : T.jsx(r.Fragment, {})
                    }
                    const a = e.as || "div";
                    return T.jsx(a, {
                        ref: t,
                        ...s,
                        style: c,
                        children: e.children
                    })
                },
                Virtual: K,
                ContextMenu: function(e) {
                    return T.jsx(K, {
                        flip: !0,
                        ...e,
                        show: !1,
                        portal: !0,
                        onInitial: function({
                            setShow: e,
                            refs: t
                        }) {
                            D("contextmenu", (n => {
                                n.preventDefault(), t.setPositionReference({
                                    getBoundingClientRect: () => ({
                                        width: 0,
                                        height: 0,
                                        x: n.clientX,
                                        y: n.clientY,
                                        top: n.clientY,
                                        left: n.clientX,
                                        right: n.clientX,
                                        bottom: n.clientY
                                    })
                                }), e(!0)
                            })), z(t.floating, (() => {
                                e(!1)
                            }))
                        }
                    })
                },
                Cursor: function({
                    globalHideCursor: e,
                    ...t
                }) {
                    return T.jsx(K, { ...t,
                        portal: !0,
                        className: "headlesui-float-cursor-root",
                        onInitial: function({
                            setShow: t,
                            refs: n
                        }) {
                            function o() {
                                t(!0)
                            }

                            function i() {
                                t(!1)
                            }

                            function s(e) {
                                n.setPositionReference({
                                    getBoundingClientRect: () => ({
                                        width: 0,
                                        height: 0,
                                        x: e.clientX,
                                        y: e.clientY,
                                        top: e.clientY,
                                        left: e.clientX,
                                        right: e.clientX,
                                        bottom: e.clientY
                                    })
                                })
                            }

                            function c(e) {
                                o(), s(e)
                            }

                            function a(e) {
                                o(), s(e.touches[0])
                            }
                            const u = A(n.floating);
                            u && ((0, r.useEffect)((() => {
                                if ((e || void 0 === e) && !u.getElementById("headlesui-float-cursor-style")) {
                                    const e = u.createElement("style");
                                    return (u.head || u.getElementsByTagName("head")[0]).appendChild(e), e.id = "headlesui-float-cursor-style", e.appendChild(u.createTextNode(["*, *::before, *::after {", "  cursor: none !important;", "}", ".headlesui-float-cursor-root {", "  pointer-events: none !important;", "}"].join("\n"))), () => {
                                        var e;
                                        return null == (e = u.getElementById("headlesui-float-cursor-style")) ? void 0 : e.remove()
                                    }
                                }
                            }), [e]), "ontouchstart" in window || navigator.maxTouchPoints > 0 ? (D("touchstart", a), D("touchend", i), D("touchmove", a)) : (D("mouseenter", c), D("mouseleave", i), D("mousemove", c)))
                        }
                    })
                }
            })
        }
    }
]);