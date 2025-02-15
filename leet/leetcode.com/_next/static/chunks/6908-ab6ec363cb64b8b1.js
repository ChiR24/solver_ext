"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6908], {
        91276: function(e, t, n) {
            var r;
            n.d(t, {
                M: function() {
                    return s
                }
            });
            var o = n(67294),
                i = n(9981);
            const a = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {});
            let l = 0;

            function s(e) {
                const [t, n] = o.useState(a());
                return (0, i.b)((() => {
                    e || n((e => null !== e && void 0 !== e ? e : String(l++)))
                }), [e]), e || (t ? `radix-${t}` : "")
            }
        },
        80507: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return Y
                },
                Eh: function() {
                    return B
                },
                VY: function() {
                    return Z
                },
                fC: function() {
                    return W
                },
                D7: function() {
                    return C
                }
            });
            var r = n(87462),
                o = n(67294),
                i = n(85983),
                a = n(66037),
                l = n(73935);
            var s = "undefined" !== typeof document ? o.useLayoutEffect : o.useEffect;

            function c(e, t) {
                if (e === t) return !0;
                if (typeof e !== typeof t) return !1;
                if ("function" === typeof e && e.toString() === t.toString()) return !0;
                let n, r, o;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if (n = e.length, n != t.length) return !1;
                        for (r = n; 0 !== r--;)
                            if (!c(e[r], t[r])) return !1;
                        return !0
                    }
                    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
                    for (r = n; 0 !== r--;)
                        if (!{}.hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 !== r--;) {
                        const n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !c(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e !== e && t !== t
            }

            function u(e) {
                if ("undefined" === typeof window) return 1;
                return (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function d(e, t) {
                const n = u(e);
                return Math.round(t * n) / n
            }

            function p(e) {
                const t = o.useRef(e);
                return s((() => {
                    t.current = e
                })), t
            }
            var f = n(75320);
            const h = (0, o.forwardRef)(((e, t) => {
                    const {
                        children: n,
                        width: i = 10,
                        height: a = 5,
                        ...l
                    } = e;
                    return (0, o.createElement)(f.WV.svg, (0, r.Z)({}, l, {
                        ref: t,
                        width: i,
                        height: a,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none"
                    }), e.asChild ? n : (0, o.createElement)("polygon", {
                        points: "0,0 30,0 15,10"
                    }))
                })),
                g = h;
            var v = n(28771),
                m = n(25360),
                y = n(79698),
                w = n(9981),
                x = n(7546);
            const b = "Popper",
                [E, C] = (0, m.b)(b),
                [T, P] = E(b),
                _ = e => {
                    const {
                        __scopePopper: t,
                        children: n
                    } = e, [r, i] = (0, o.useState)(null);
                    return (0, o.createElement)(T, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: i
                    }, n)
                },
                R = "PopperAnchor",
                k = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopePopper: n,
                        virtualRef: i,
                        ...a
                    } = e, l = P(R, n), s = (0, o.useRef)(null), c = (0, v.e)(t, s);
                    return (0, o.useEffect)((() => {
                        l.onAnchorChange((null === i || void 0 === i ? void 0 : i.current) || s.current)
                    })), i ? null : (0, o.createElement)(f.WV.div, (0, r.Z)({}, a, {
                        ref: c
                    }))
                })),
                S = "PopperContent",
                [M, A] = E(S),
                O = (0, o.forwardRef)(((e, t) => {
                    var n, h, g, m, b, E, C, T;
                    const {
                        __scopePopper: _,
                        side: R = "bottom",
                        sideOffset: k = 0,
                        align: A = "center",
                        alignOffset: O = 0,
                        arrowPadding: D = 0,
                        avoidCollisions: L = !0,
                        collisionBoundary: H = [],
                        collisionPadding: W = 0,
                        sticky: Y = "partial",
                        hideWhenDetached: Z = !1,
                        updatePositionStrategy: B = "optimized",
                        onPlaced: V,
                        ...X
                    } = e, F = P(S, _), [j, K] = (0, o.useState)(null), N = (0, v.e)(t, (e => K(e))), [q, G] = (0, o.useState)(null), J = (0, x.t)(q), Q = null !== (n = null === J || void 0 === J ? void 0 : J.width) && void 0 !== n ? n : 0, U = null !== (h = null === J || void 0 === J ? void 0 : J.height) && void 0 !== h ? h : 0, ee = R + ("center" !== A ? "-" + A : ""), te = "number" === typeof W ? W : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...W
                    }, ne = Array.isArray(H) ? H : [H], re = ne.length > 0, oe = {
                        padding: te,
                        boundary: ne.filter(I),
                        altBoundary: re
                    }, {
                        refs: ie,
                        floatingStyles: ae,
                        placement: le,
                        isPositioned: se,
                        middlewareData: ce
                    } = function(e) {
                        void 0 === e && (e = {});
                        const {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: r = [],
                            platform: i,
                            elements: {
                                reference: f,
                                floating: h
                            } = {},
                            transform: g = !0,
                            whileElementsMounted: v,
                            open: m
                        } = e, [y, w] = o.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [x, b] = o.useState(r);
                        c(x, r) || b(r);
                        const [E, C] = o.useState(null), [T, P] = o.useState(null), _ = o.useCallback((e => {
                            e != M.current && (M.current = e, C(e))
                        }), [C]), R = o.useCallback((e => {
                            e !== A.current && (A.current = e, P(e))
                        }), [P]), k = f || E, S = h || T, M = o.useRef(null), A = o.useRef(null), O = o.useRef(y), D = p(v), L = p(i), H = o.useCallback((() => {
                            if (!M.current || !A.current) return;
                            const e = {
                                placement: t,
                                strategy: n,
                                middleware: x
                            };
                            L.current && (e.platform = L.current), (0, a.oo)(M.current, A.current, e).then((e => {
                                const t = { ...e,
                                    isPositioned: !0
                                };
                                I.current && !c(O.current, t) && (O.current = t, l.flushSync((() => {
                                    w(t)
                                })))
                            }))
                        }), [x, t, n, L]);
                        s((() => {
                            !1 === m && O.current.isPositioned && (O.current.isPositioned = !1, w((e => ({ ...e,
                                isPositioned: !1
                            }))))
                        }), [m]);
                        const I = o.useRef(!1);
                        s((() => (I.current = !0, () => {
                            I.current = !1
                        })), []), s((() => {
                            if (k && (M.current = k), S && (A.current = S), k && S) {
                                if (D.current) return D.current(k, S, H);
                                H()
                            }
                        }), [k, S, H, D]);
                        const $ = o.useMemo((() => ({
                                reference: M,
                                floating: A,
                                setReference: _,
                                setFloating: R
                            })), [_, R]),
                            z = o.useMemo((() => ({
                                reference: k,
                                floating: S
                            })), [k, S]),
                            W = o.useMemo((() => {
                                const e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!z.floating) return e;
                                const t = d(z.floating, y.x),
                                    r = d(z.floating, y.y);
                                return g ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...u(z.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }), [n, g, z.floating, y.x, y.y]);
                        return o.useMemo((() => ({ ...y,
                            update: H,
                            refs: $,
                            elements: z,
                            floatingStyles: W
                        })), [y, H, $, z, W])
                    }({
                        strategy: "fixed",
                        placement: ee,
                        whileElementsMounted: (...e) => (0, a.Me)(...e, {
                            animationFrame: "always" === B
                        }),
                        elements: {
                            reference: F.anchor
                        },
                        middleware: [(0, i.cv)({
                            mainAxis: k + U,
                            alignmentAxis: O
                        }), L && (0, i.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === Y ? (0, i.dr)() : void 0,
                            ...oe
                        }), L && (0, i.RR)({ ...oe
                        }), (0, i.dp)({ ...oe,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: r
                            }) => {
                                const {
                                    width: o,
                                    height: i
                                } = t.reference, a = e.floating.style;
                                a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), q && (ue = {
                            element: q,
                            padding: D
                        }, {
                            name: "arrow",
                            options: ue,
                            fn(e) {
                                const {
                                    element: t,
                                    padding: n
                                } = "function" === typeof ue ? ue(e) : ue;
                                return t && (r = t, {}.hasOwnProperty.call(r, "current")) ? null != t.current ? (0, i.x7)({
                                    element: t.current,
                                    padding: n
                                }).fn(e) : {} : t ? (0, i.x7)({
                                    element: t,
                                    padding: n
                                }).fn(e) : {};
                                var r
                            }
                        }), $({
                            arrowWidth: Q,
                            arrowHeight: U
                        }), Z && (0, i.Cp)({
                            strategy: "referenceHidden",
                            ...oe
                        })]
                    });
                    var ue;
                    const [de, pe] = z(le), fe = (0, y.W)(V);
                    (0, w.b)((() => {
                        se && (null === fe || void 0 === fe || fe())
                    }), [se, fe]);
                    const he = null === (g = ce.arrow) || void 0 === g ? void 0 : g.x,
                        ge = null === (m = ce.arrow) || void 0 === m ? void 0 : m.y,
                        ve = 0 !== (null === (b = ce.arrow) || void 0 === b ? void 0 : b.centerOffset),
                        [me, ye] = (0, o.useState)();
                    return (0, w.b)((() => {
                        j && ye(window.getComputedStyle(j).zIndex)
                    }), [j]), (0, o.createElement)("div", {
                        ref: ie.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...ae,
                            transform: se ? ae.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: me,
                            "--radix-popper-transform-origin": [null === (E = ce.transformOrigin) || void 0 === E ? void 0 : E.x, null === (C = ce.transformOrigin) || void 0 === C ? void 0 : C.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, o.createElement)(M, {
                        scope: _,
                        placedSide: de,
                        onArrowChange: G,
                        arrowX: he,
                        arrowY: ge,
                        shouldHideArrow: ve
                    }, (0, o.createElement)(f.WV.div, (0, r.Z)({
                        "data-side": de,
                        "data-align": pe
                    }, X, {
                        ref: N,
                        style: { ...X.style,
                            animation: se ? void 0 : "none",
                            opacity: null !== (T = ce.hide) && void 0 !== T && T.referenceHidden ? 0 : void 0
                        }
                    }))))
                })),
                D = "PopperArrow",
                L = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                H = (0, o.forwardRef)((function(e, t) {
                    const {
                        __scopePopper: n,
                        ...i
                    } = e, a = A(D, n), l = L[a.placedSide];
                    return (0, o.createElement)("span", {
                        ref: a.onArrowChange,
                        style: {
                            position: "absolute",
                            left: a.arrowX,
                            top: a.arrowY,
                            [l]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[a.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[a.placedSide],
                            visibility: a.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, o.createElement)(g, (0, r.Z)({}, i, {
                        ref: t,
                        style: { ...i.style,
                            display: "block"
                        }
                    })))
                }));

            function I(e) {
                return null !== e
            }
            const $ = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, a;
                    const {
                        placement: l,
                        rects: s,
                        middlewareData: c
                    } = t, u = 0 !== (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset), d = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [f, h] = z(l), g = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], v = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2, m = (null !== (i = null === (a = c.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== i ? i : 0) + p / 2;
                    let y = "",
                        w = "";
                    return "bottom" === f ? (y = u ? g : `${v}px`, w = -p + "px") : "top" === f ? (y = u ? g : `${v}px`, w = `${s.floating.height+p}px`) : "right" === f ? (y = -p + "px", w = u ? g : `${m}px`) : "left" === f && (y = `${s.floating.width+p}px`, w = u ? g : `${m}px`), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function z(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n]
            }
            const W = _,
                Y = k,
                Z = O,
                B = H
        },
        66908: function(e, t, n) {
            n.d(t, {
                Eh: function() {
                    return q
                },
                VY: function() {
                    return N
                },
                fC: function() {
                    return F
                },
                h_: function() {
                    return K
                },
                xz: function() {
                    return j
                },
                zt: function() {
                    return X
                }
            });
            var r = n(87462),
                o = n(67294),
                i = n(36206),
                a = n(28771),
                l = n(25360),
                s = n(46063),
                c = n(91276),
                u = n(80507),
                d = n(42651),
                p = n(29115),
                f = n(75320),
                h = n(88426),
                g = n(77342),
                v = n(96219);
            const [m, y] = (0, l.b)("Tooltip", [u.D7]), w = (0, u.D7)(), x = "TooltipProvider", b = 700, E = "tooltip.open", [C, T] = m(x), P = e => {
                const {
                    __scopeTooltip: t,
                    delayDuration: n = b,
                    skipDelayDuration: r = 300,
                    disableHoverableContent: i = !1,
                    children: a
                } = e, [l, s] = (0, o.useState)(!0), c = (0, o.useRef)(!1), u = (0, o.useRef)(0);
                return (0, o.useEffect)((() => {
                    const e = u.current;
                    return () => window.clearTimeout(e)
                }), []), (0, o.createElement)(C, {
                    scope: t,
                    isOpenDelayed: l,
                    delayDuration: n,
                    onOpen: (0, o.useCallback)((() => {
                        window.clearTimeout(u.current), s(!1)
                    }), []),
                    onClose: (0, o.useCallback)((() => {
                        window.clearTimeout(u.current), u.current = window.setTimeout((() => s(!0)), r)
                    }), [r]),
                    isPointerInTransitRef: c,
                    onPointerInTransitChange: (0, o.useCallback)((e => {
                        c.current = e
                    }), []),
                    disableHoverableContent: i
                }, a)
            }, _ = "Tooltip", [R, k] = m(_), S = e => {
                const {
                    __scopeTooltip: t,
                    children: n,
                    open: r,
                    defaultOpen: i = !1,
                    onOpenChange: a,
                    disableHoverableContent: l,
                    delayDuration: s
                } = e, d = T(_, e.__scopeTooltip), p = w(t), [f, h] = (0, o.useState)(null), v = (0, c.M)(), m = (0, o.useRef)(0), y = null !== l && void 0 !== l ? l : d.disableHoverableContent, x = null !== s && void 0 !== s ? s : d.delayDuration, b = (0, o.useRef)(!1), [C = !1, P] = (0, g.T)({
                    prop: r,
                    defaultProp: i,
                    onChange: e => {
                        e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(E))) : d.onClose(), null === a || void 0 === a || a(e)
                    }
                }), k = (0, o.useMemo)((() => C ? b.current ? "delayed-open" : "instant-open" : "closed"), [C]), S = (0, o.useCallback)((() => {
                    window.clearTimeout(m.current), b.current = !1, P(!0)
                }), [P]), M = (0, o.useCallback)((() => {
                    window.clearTimeout(m.current), P(!1)
                }), [P]), A = (0, o.useCallback)((() => {
                    window.clearTimeout(m.current), m.current = window.setTimeout((() => {
                        b.current = !0, P(!0)
                    }), x)
                }), [x, P]);
                return (0, o.useEffect)((() => () => window.clearTimeout(m.current)), []), (0, o.createElement)(u.fC, p, (0, o.createElement)(R, {
                    scope: t,
                    contentId: v,
                    open: C,
                    stateAttribute: k,
                    trigger: f,
                    onTriggerChange: h,
                    onTriggerEnter: (0, o.useCallback)((() => {
                        d.isOpenDelayed ? A() : S()
                    }), [d.isOpenDelayed, A, S]),
                    onTriggerLeave: (0, o.useCallback)((() => {
                        y ? M() : window.clearTimeout(m.current)
                    }), [M, y]),
                    onOpen: S,
                    onClose: M,
                    disableHoverableContent: y
                }, n))
            }, M = "TooltipTrigger", A = (0, o.forwardRef)(((e, t) => {
                const {
                    __scopeTooltip: n,
                    ...l
                } = e, s = k(M, n), c = T(M, n), d = w(n), p = (0, o.useRef)(null), h = (0, a.e)(t, p, s.onTriggerChange), g = (0, o.useRef)(!1), v = (0, o.useRef)(!1), m = (0, o.useCallback)((() => g.current = !1), []);
                return (0, o.useEffect)((() => () => document.removeEventListener("pointerup", m)), [m]), (0, o.createElement)(u.ee, (0, r.Z)({
                    asChild: !0
                }, d), (0, o.createElement)(f.WV.button, (0, r.Z)({
                    "aria-describedby": s.open ? s.contentId : void 0,
                    "data-state": s.stateAttribute
                }, l, {
                    ref: h,
                    onPointerMove: (0, i.M)(e.onPointerMove, (e => {
                        "touch" !== e.pointerType && (v.current || c.isPointerInTransitRef.current || (s.onTriggerEnter(), v.current = !0))
                    })),
                    onPointerLeave: (0, i.M)(e.onPointerLeave, (() => {
                        s.onTriggerLeave(), v.current = !1
                    })),
                    onPointerDown: (0, i.M)(e.onPointerDown, (() => {
                        g.current = !0, document.addEventListener("pointerup", m, {
                            once: !0
                        })
                    })),
                    onFocus: (0, i.M)(e.onFocus, (() => {
                        g.current || s.onOpen()
                    })),
                    onBlur: (0, i.M)(e.onBlur, s.onClose),
                    onClick: (0, i.M)(e.onClick, s.onClose)
                })))
            })), O = "TooltipPortal", [D, L] = m(O, {
                forceMount: void 0
            }), H = e => {
                const {
                    __scopeTooltip: t,
                    forceMount: n,
                    children: r,
                    container: i
                } = e, a = k(O, t);
                return (0, o.createElement)(D, {
                    scope: t,
                    forceMount: n
                }, (0, o.createElement)(p.z, {
                    present: n || a.open
                }, (0, o.createElement)(d.h, {
                    asChild: !0,
                    container: i
                }, r)))
            }, I = "TooltipContent", $ = (0, o.forwardRef)(((e, t) => {
                const n = L(I, e.__scopeTooltip),
                    {
                        forceMount: i = n.forceMount,
                        side: a = "top",
                        ...l
                    } = e,
                    s = k(I, e.__scopeTooltip);
                return (0, o.createElement)(p.z, {
                    present: i || s.open
                }, s.disableHoverableContent ? (0, o.createElement)(Z, (0, r.Z)({
                    side: a
                }, l, {
                    ref: t
                })) : (0, o.createElement)(z, (0, r.Z)({
                    side: a
                }, l, {
                    ref: t
                })))
            })), z = (0, o.forwardRef)(((e, t) => {
                const n = k(I, e.__scopeTooltip),
                    i = T(I, e.__scopeTooltip),
                    l = (0, o.useRef)(null),
                    s = (0, a.e)(t, l),
                    [c, u] = (0, o.useState)(null),
                    {
                        trigger: d,
                        onClose: p
                    } = n,
                    f = l.current,
                    {
                        onPointerInTransitChange: h
                    } = i,
                    g = (0, o.useCallback)((() => {
                        u(null), h(!1)
                    }), [h]),
                    v = (0, o.useCallback)(((e, t) => {
                        const n = e.currentTarget,
                            r = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            o = function(e, t, n = 5) {
                                const r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, function(e, t) {
                                const n = Math.abs(t.top - e.y),
                                    r = Math.abs(t.bottom - e.y),
                                    o = Math.abs(t.right - e.x),
                                    i = Math.abs(t.left - e.x);
                                switch (Math.min(n, r, o, i)) {
                                    case i:
                                        return "left";
                                    case o:
                                        return "right";
                                    case n:
                                        return "top";
                                    case r:
                                        return "bottom";
                                    default:
                                        throw new Error("unreachable")
                                }
                            }(r, n.getBoundingClientRect())),
                            i = function(e) {
                                const t = e.slice();
                                return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        const t = [];
                                        for (let r = 0; r < e.length; r++) {
                                            const n = e[r];
                                            for (; t.length >= 2;) {
                                                const e = t[t.length - 1],
                                                    r = t[t.length - 2];
                                                if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                                                t.pop()
                                            }
                                            t.push(n)
                                        }
                                        t.pop();
                                        const n = [];
                                        for (let r = e.length - 1; r >= 0; r--) {
                                            const t = e[r];
                                            for (; n.length >= 2;) {
                                                const e = n[n.length - 1],
                                                    r = n[n.length - 2];
                                                if (!((e.x - r.x) * (t.y - r.y) >= (e.y - r.y) * (t.x - r.x))) break;
                                                n.pop()
                                            }
                                            n.push(t)
                                        }
                                        return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                                    }(t)
                            }([...o, ... function(e) {
                                const {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect())]);
                        u(i), h(!0)
                    }), [h]);
                return (0, o.useEffect)((() => () => g()), [g]), (0, o.useEffect)((() => {
                    if (d && f) {
                        const e = e => v(e, f),
                            t = e => v(e, d);
                        return d.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                            d.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
                        }
                    }
                }), [d, f, v, g]), (0, o.useEffect)((() => {
                    if (c) {
                        const e = e => {
                            const t = e.target,
                                n = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                r = (null === d || void 0 === d ? void 0 : d.contains(t)) || (null === f || void 0 === f ? void 0 : f.contains(t)),
                                o = ! function(e, t) {
                                    const {
                                        x: n,
                                        y: r
                                    } = e;
                                    let o = !1;
                                    for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
                                        const e = t[i].x,
                                            l = t[i].y,
                                            s = t[a].x,
                                            c = t[a].y;
                                        l > r !== c > r && n < (s - e) * (r - l) / (c - l) + e && (o = !o)
                                    }
                                    return o
                                }(n, c);
                            r ? g() : o && (g(), p())
                        };
                        return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                    }
                }), [d, f, c, p, g]), (0, o.createElement)(Z, (0, r.Z)({}, e, {
                    ref: s
                }))
            })), [W, Y] = m(_, {
                isInside: !1
            }), Z = (0, o.forwardRef)(((e, t) => {
                const {
                    __scopeTooltip: n,
                    children: i,
                    "aria-label": a,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: c,
                    ...d
                } = e, p = k(I, n), f = w(n), {
                    onClose: g
                } = p;
                return (0, o.useEffect)((() => (document.addEventListener(E, g), () => document.removeEventListener(E, g))), [g]), (0, o.useEffect)((() => {
                    if (p.trigger) {
                        const e = e => {
                            const t = e.target;
                            null !== t && void 0 !== t && t.contains(p.trigger) && g()
                        };
                        return window.addEventListener("scroll", e, {
                            capture: !0
                        }), () => window.removeEventListener("scroll", e, {
                            capture: !0
                        })
                    }
                }), [p.trigger, g]), (0, o.createElement)(s.XB, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: c,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: g
                }, (0, o.createElement)(u.VY, (0, r.Z)({
                    "data-state": p.stateAttribute
                }, f, d, {
                    ref: t,
                    style: { ...d.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }), (0, o.createElement)(h.A4, null, i), (0, o.createElement)(W, {
                    scope: n,
                    isInside: !0
                }, (0, o.createElement)(v.f, {
                    id: p.contentId,
                    role: "tooltip"
                }, a || i))))
            })), B = "TooltipArrow", V = (0, o.forwardRef)(((e, t) => {
                const {
                    __scopeTooltip: n,
                    ...i
                } = e, a = w(n);
                return Y(B, n).isInside ? null : (0, o.createElement)(u.Eh, (0, r.Z)({}, a, i, {
                    ref: t
                }))
            }));
            const X = P,
                F = S,
                j = A,
                K = H,
                N = $,
                q = V
        },
        7546: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return i
                }
            });
            var r = n(67294),
                o = n(9981);

            function i(e) {
                const [t, n] = (0, r.useState)(void 0);
                return (0, o.b)((() => {
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        const t = new ResizeObserver((t => {
                            if (!Array.isArray(t)) return;
                            if (!t.length) return;
                            const r = t[0];
                            let o, i;
                            if ("borderBoxSize" in r) {
                                const e = r.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                o = t.inlineSize, i = t.blockSize
                            } else o = e.offsetWidth, i = e.offsetHeight;
                            n({
                                width: o,
                                height: i
                            })
                        }));
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    n(void 0)
                }), [e]), t
            }
        }
    }
]);