"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5933], {
        1709: function(e, t, n) {
            var r;
            n.d(t, {
                NI: function() {
                    return se
                },
                XI: function() {
                    return D
                },
                YF: function() {
                    return ue
                },
                Y_: function() {
                    return pe
                },
                bQ: function() {
                    return oe
                },
                eS: function() {
                    return ee
                },
                ll: function() {
                    return Z
                },
                qs: function() {
                    return fe
                },
                xp: function() {
                    return be
                }
            });
            var o = n(67294),
                u = n(64089),
                i = n(74159),
                c = n(88388),
                l = n(73935),
                s = n(68365),
                a = n(48043);
            const f = { ...r || (r = n.t(o, 2))
                },
                d = f.useInsertionEffect || (e => e());

            function v(e) {
                const t = o.useRef((() => {
                    0
                }));
                return d((() => {
                    t.current = e
                })), o.useCallback((function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null == t.current ? void 0 : t.current(...n)
                }), [])
            }
            const m = "ArrowUp",
                p = "ArrowDown",
                g = "ArrowLeft",
                b = "ArrowRight";
            var E = "undefined" !== typeof document ? o.useLayoutEffect : o.useEffect;
            const h = [g, b],
                y = [m, p];

            function w() {
                return w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, w.apply(this, arguments)
            }
            let R = !1,
                k = 0;
            const x = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + k++;
            const M = f.useId || function() {
                const [e, t] = o.useState((() => R ? x() : void 0));
                return E((() => {
                    null == e && t(x())
                }), []), o.useEffect((() => {
                    R = !0
                }), []), e
            };

            function C() {
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
                        var r;
                        e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter((e => e !== n))) || [])
                    }
                }
            }
            const P = o.createContext(null),
                L = o.createContext(null),
                T = () => {
                    var e;
                    return (null == (e = o.useContext(P)) ? void 0 : e.id) || null
                },
                K = () => o.useContext(L);

            function O(e) {
                return "data-floating-ui-" + e
            }

            function A(e) {
                const t = (0, o.useRef)(e);
                return E((() => {
                    t.current = e
                })), t
            }
            const I = O("safe-polygon");

            function S(e, t, n) {
                return n && !(0, u.r)(n) ? 0 : "number" === typeof e ? e : null == e ? void 0 : e[t]
            }

            function D(e, t) {
                void 0 === t && (t = {});
                const {
                    open: n,
                    onOpenChange: r,
                    dataRef: c,
                    events: l,
                    elements: s
                } = e, {
                    enabled: a = !0,
                    delay: f = 0,
                    handleClose: d = null,
                    mouseOnly: m = !1,
                    restMs: p = 0,
                    move: g = !0
                } = t, b = K(), h = T(), y = A(d), w = A(f), R = A(n), k = o.useRef(), x = o.useRef(-1), M = o.useRef(), C = o.useRef(-1), P = o.useRef(!0), L = o.useRef(!1), O = o.useRef((() => {})), D = o.useRef(!1), _ = o.useCallback((() => {
                    var e;
                    const t = null == (e = c.current.openEvent) ? void 0 : e.type;
                    return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
                }), [c]);
                o.useEffect((() => {
                    if (a) return l.on("openchange", e), () => {
                        l.off("openchange", e)
                    };

                    function e(e) {
                        let {
                            open: t
                        } = e;
                        t || (clearTimeout(x.current), clearTimeout(C.current), P.current = !0, D.current = !1)
                    }
                }), [a, l]), o.useEffect((() => {
                    if (!a) return;
                    if (!y.current) return;
                    if (!n) return;

                    function e(e) {
                        _() && r(!1, e, "hover")
                    }
                    const t = (0, u.Me)(s.floating).documentElement;
                    return t.addEventListener("mouseleave", e), () => {
                        t.removeEventListener("mouseleave", e)
                    }
                }), [s.floating, n, r, a, y, _]);
                const j = o.useCallback((function(e, t, n) {
                        void 0 === t && (t = !0), void 0 === n && (n = "hover");
                        const o = S(w.current, "close", k.current);
                        o && !M.current ? (clearTimeout(x.current), x.current = window.setTimeout((() => r(!1, e, n)), o)) : t && (clearTimeout(x.current), r(!1, e, n))
                    }), [w, r]),
                    B = v((() => {
                        O.current(), M.current = void 0
                    })),
                    U = v((() => {
                        if (L.current) {
                            const e = (0, u.Me)(s.floating).body;
                            e.style.pointerEvents = "", e.removeAttribute(I), L.current = !1
                        }
                    })),
                    F = v((() => !!c.current.openEvent && ["click", "mousedown"].includes(c.current.openEvent.type)));
                o.useEffect((() => {
                    if (a && (0, i.kK)(s.domReference)) {
                        var e;
                        const r = s.domReference;
                        return n && r.addEventListener("mouseleave", l), null == (e = s.floating) || e.addEventListener("mouseleave", l), g && r.addEventListener("mousemove", t, {
                            once: !0
                        }), r.addEventListener("mouseenter", t), r.addEventListener("mouseleave", o), () => {
                            var e;
                            n && r.removeEventListener("mouseleave", l), null == (e = s.floating) || e.removeEventListener("mouseleave", l), g && r.removeEventListener("mousemove", t), r.removeEventListener("mouseenter", t), r.removeEventListener("mouseleave", o)
                        }
                    }

                    function t(e) {
                        if (clearTimeout(x.current), P.current = !1, m && !(0, u.r)(k.current) || p > 0 && !S(w.current, "open")) return;
                        const t = S(w.current, "open", k.current);
                        t ? x.current = window.setTimeout((() => {
                            R.current || r(!0, e, "hover")
                        }), t) : n || r(!0, e, "hover")
                    }

                    function o(e) {
                        if (F()) return;
                        O.current();
                        const t = (0, u.Me)(s.floating);
                        if (clearTimeout(C.current), D.current = !1, y.current && c.current.floatingContext) {
                            n || clearTimeout(x.current), M.current = y.current({ ...c.current.floatingContext,
                                tree: b,
                                x: e.clientX,
                                y: e.clientY,
                                onClose() {
                                    U(), B(), F() || j(e, !0, "safe-polygon")
                                }
                            });
                            const r = M.current;
                            return t.addEventListener("mousemove", r), void(O.current = () => {
                                t.removeEventListener("mousemove", r)
                            })
                        }("touch" !== k.current || !(0, u.r3)(s.floating, e.relatedTarget)) && j(e)
                    }

                    function l(e) {
                        F() || c.current.floatingContext && (null == y.current || y.current({ ...c.current.floatingContext,
                            tree: b,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                U(), B(), F() || j(e)
                            }
                        })(e))
                    }
                }), [s, a, e, m, p, g, j, B, U, r, n, R, b, w, y, c, F]), E((() => {
                    var e;
                    if (a && n && null != (e = y.current) && e.__options.blockPointerEvents && _()) {
                        L.current = !0;
                        const e = s.floating;
                        if ((0, i.kK)(s.domReference) && e) {
                            var t;
                            const n = (0, u.Me)(s.floating).body;
                            n.setAttribute(I, "");
                            const r = s.domReference,
                                o = null == b || null == (t = b.nodesRef.current.find((e => e.id === h))) || null == (t = t.context) ? void 0 : t.elements.floating;
                            return o && (o.style.pointerEvents = ""), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", e.style.pointerEvents = "auto", () => {
                                n.style.pointerEvents = "", r.style.pointerEvents = "", e.style.pointerEvents = ""
                            }
                        }
                    }
                }), [a, n, h, s, b, y, _]), E((() => {
                    n || (k.current = void 0, D.current = !1, B(), U())
                }), [n, B, U]), o.useEffect((() => () => {
                    B(), clearTimeout(x.current), clearTimeout(C.current), U()
                }), [a, s.domReference, B, U]);
                const Y = o.useMemo((() => {
                        function e(e) {
                            k.current = e.pointerType
                        }
                        return {
                            onPointerDown: e,
                            onPointerEnter: e,
                            onMouseMove(e) {
                                const {
                                    nativeEvent: t
                                } = e;

                                function o() {
                                    P.current || R.current || r(!0, t, "hover")
                                }
                                m && !(0, u.r)(k.current) || n || 0 === p || D.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (clearTimeout(C.current), "touch" === k.current ? o() : (D.current = !0, C.current = window.setTimeout(o, p)))
                            }
                        }
                    }), [m, r, n, R, p]),
                    X = o.useMemo((() => ({
                        onMouseEnter() {
                            clearTimeout(x.current)
                        },
                        onMouseLeave(e) {
                            F() || j(e.nativeEvent, !1)
                        }
                    })), [j, F]);
                return o.useMemo((() => a ? {
                    reference: Y,
                    floating: X
                } : {}), [a, Y, X])
            }

            function _(e, t) {
                let n = e.filter((e => {
                        var n;
                        return e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
                    })),
                    r = n;
                for (; r.length;) r = e.filter((e => {
                    var t;
                    return null == (t = r) ? void 0 : t.some((t => {
                        var n;
                        return e.parentId === t.id && (null == (n = e.context) ? void 0 : n.open)
                    }))
                })), n = n.concat(r);
                return n
            }
            const j = () => ({
                getShadowRoot: !0,
                displayCheck: "function" === typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
            });

            function B(e, t) {
                const n = (0, c.ht)(e, j());
                "prev" === t && n.reverse();
                const r = n.indexOf((0, u.AW)((0, u.Me)(e)));
                return n.slice(r + 1)[0]
            }

            function U() {
                return B(document.body, "next")
            }

            function F() {
                return B(document.body, "prev")
            }

            function Y(e, t) {
                const n = t || e.currentTarget,
                    r = e.relatedTarget;
                return !r || !(0, u.r3)(n, r)
            }

            function X(e) {
                (0, c.ht)(e, j()).forEach((e => {
                    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                }))
            }

            function q(e) {
                e.querySelectorAll("[data-tabindex]").forEach((e => {
                    const t = e.dataset.tabindex;
                    delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
                }))
            }
            const N = {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "fixed",
                whiteSpace: "nowrap",
                width: "1px",
                top: 0,
                left: 0
            };

            function W(e) {
                "Tab" === e.key && (e.target, clearTimeout(undefined))
            }
            const H = o.forwardRef((function(e, t) {
                    const [n, r] = o.useState();
                    E((() => ((0, u.G6)() && r("button"), document.addEventListener("keydown", W), () => {
                        document.removeEventListener("keydown", W)
                    })), []);
                    const i = {
                        ref: t,
                        tabIndex: 0,
                        role: n,
                        "aria-hidden": !n || void 0,
                        [O("focus-guard")]: "",
                        style: N
                    };
                    return o.createElement("span", w({}, e, i))
                })),
                z = o.createContext(null),
                V = O("portal");

            function Z(e) {
                const {
                    children: t,
                    id: n,
                    root: r,
                    preserveTabOrder: u = !0
                } = e, c = function(e) {
                    void 0 === e && (e = {});
                    const {
                        id: t,
                        root: n
                    } = e, r = M(), u = G(), [c, l] = o.useState(null), s = o.useRef(null);
                    return E((() => () => {
                        null == c || c.remove(), queueMicrotask((() => {
                            s.current = null
                        }))
                    }), [c]), E((() => {
                        if (!r) return;
                        if (s.current) return;
                        const e = t ? document.getElementById(t) : null;
                        if (!e) return;
                        const n = document.createElement("div");
                        n.id = r, n.setAttribute(V, ""), e.appendChild(n), s.current = n, l(n)
                    }), [t, r]), E((() => {
                        if (null === n) return;
                        if (!r) return;
                        if (s.current) return;
                        let e = n || (null == u ? void 0 : u.portalNode);
                        e && !(0, i.kK)(e) && (e = e.current), e = e || document.body;
                        let o = null;
                        t && (o = document.createElement("div"), o.id = t, e.appendChild(o));
                        const c = document.createElement("div");
                        c.id = r, c.setAttribute(V, ""), e = o || e, e.appendChild(c), s.current = c, l(c)
                    }), [t, n, r, u]), c
                }({
                    id: n,
                    root: r
                }), [s, a] = o.useState(null), f = o.useRef(null), d = o.useRef(null), v = o.useRef(null), m = o.useRef(null), p = null == s ? void 0 : s.modal, g = null == s ? void 0 : s.open, b = !!s && !s.modal && s.open && u && !(!r && !c);
                return o.useEffect((() => {
                    if (c && u && !p) return c.addEventListener("focusin", e, !0), c.addEventListener("focusout", e, !0), () => {
                        c.removeEventListener("focusin", e, !0), c.removeEventListener("focusout", e, !0)
                    };

                    function e(e) {
                        if (c && Y(e)) {
                            ("focusin" === e.type ? q : X)(c)
                        }
                    }
                }), [c, u, p]), o.useEffect((() => {
                    c && (g || q(c))
                }), [g, c]), o.createElement(z.Provider, {
                    value: o.useMemo((() => ({
                        preserveTabOrder: u,
                        beforeOutsideRef: f,
                        afterOutsideRef: d,
                        beforeInsideRef: v,
                        afterInsideRef: m,
                        portalNode: c,
                        setFocusManagerState: a
                    })), [u, c])
                }, b && c && o.createElement(H, {
                    "data-type": "outside",
                    ref: f,
                    onFocus: e => {
                        if (Y(e, c)) {
                            var t;
                            null == (t = v.current) || t.focus()
                        } else {
                            const e = F() || (null == s ? void 0 : s.refs.domReference.current);
                            null == e || e.focus()
                        }
                    }
                }), b && c && o.createElement("span", {
                    "aria-owns": c.id,
                    style: N
                }), c && l.createPortal(t, c), b && c && o.createElement(H, {
                    "data-type": "outside",
                    ref: d,
                    onFocus: e => {
                        if (Y(e, c)) {
                            var t;
                            null == (t = m.current) || t.focus()
                        } else {
                            const t = U() || (null == s ? void 0 : s.refs.domReference.current);
                            null == t || t.focus(), (null == s ? void 0 : s.closeOnFocusOut) && (null == s || s.onOpenChange(!1, e.nativeEvent, "focus-out"))
                        }
                    }
                }))
            }
            const G = () => o.useContext(z),
                Q = "data-floating-ui-focusable";

            function J(e) {
                return (0, i.Re)(e.target) && "BUTTON" === e.target.tagName
            }

            function $(e) {
                return (0, u.j7)(e)
            }

            function ee(e, t) {
                void 0 === t && (t = {});
                const {
                    open: n,
                    onOpenChange: r,
                    dataRef: i,
                    elements: {
                        domReference: c
                    }
                } = e, {
                    enabled: l = !0,
                    event: s = "click",
                    toggle: a = !0,
                    ignoreMouse: f = !1,
                    keyboardHandlers: d = !0,
                    stickIfOpen: v = !0
                } = t, m = o.useRef(), p = o.useRef(!1), g = o.useMemo((() => ({
                    onPointerDown(e) {
                        m.current = e.pointerType
                    },
                    onMouseDown(e) {
                        const t = m.current;
                        0 === e.button && "click" !== s && ((0, u.r)(t, !0) && f || (!n || !a || i.current.openEvent && v && "mousedown" !== i.current.openEvent.type ? (e.preventDefault(), r(!0, e.nativeEvent, "click")) : r(!1, e.nativeEvent, "click")))
                    },
                    onClick(e) {
                        const t = m.current;
                        "mousedown" === s && m.current ? m.current = void 0 : (0, u.r)(t, !0) && f || (!n || !a || i.current.openEvent && v && "click" !== i.current.openEvent.type ? r(!0, e.nativeEvent, "click") : r(!1, e.nativeEvent, "click"))
                    },
                    onKeyDown(e) {
                        m.current = void 0, e.defaultPrevented || !d || J(e) || (" " !== e.key || $(c) || (e.preventDefault(), p.current = !0), "Enter" === e.key && r(!n || !a, e.nativeEvent, "click"))
                    },
                    onKeyUp(e) {
                        e.defaultPrevented || !d || J(e) || $(c) || " " === e.key && p.current && (p.current = !1, r(!n || !a, e.nativeEvent, "click"))
                    }
                })), [i, c, s, f, d, r, n, v, a]);
                return o.useMemo((() => l ? {
                    reference: g
                } : {}), [l, g])
            }
            const te = {
                    pointerdown: "onPointerDown",
                    mousedown: "onMouseDown",
                    click: "onClick"
                },
                ne = {
                    pointerdown: "onPointerDownCapture",
                    mousedown: "onMouseDownCapture",
                    click: "onClickCapture"
                },
                re = e => {
                    var t, n;
                    return {
                        escapeKey: "boolean" === typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
                        outsidePress: "boolean" === typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n
                    }
                };

            function oe(e, t) {
                void 0 === t && (t = {});
                const {
                    open: n,
                    onOpenChange: r,
                    elements: c,
                    dataRef: l
                } = e, {
                    enabled: a = !0,
                    escapeKey: f = !0,
                    outsidePress: d = !0,
                    outsidePressEvent: m = "pointerdown",
                    referencePress: p = !1,
                    referencePressEvent: g = "pointerdown",
                    ancestorScroll: b = !1,
                    bubbles: E,
                    capture: h
                } = t, y = K(), w = v("function" === typeof d ? d : () => !1), R = "function" === typeof d ? w : d, k = o.useRef(!1), x = o.useRef(!1), {
                    escapeKey: M,
                    outsidePress: C
                } = re(E), {
                    escapeKey: P,
                    outsidePress: L
                } = re(h), T = o.useRef(!1), A = v((e => {
                    var t;
                    if (!n || !a || !f || "Escape" !== e.key) return;
                    if (T.current) return;
                    const o = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                        i = y ? _(y.nodesRef.current, o) : [];
                    if (!M && (e.stopPropagation(), i.length > 0)) {
                        let e = !0;
                        if (i.forEach((t => {
                                var n;
                                null == (n = t.context) || !n.open || t.context.dataRef.current.__escapeKeyBubbles || (e = !1)
                            })), !e) return
                    }
                    r(!1, (0, u.MM)(e) ? e.nativeEvent : e, "escape-key")
                })), I = v((e => {
                    var t;
                    const n = () => {
                        var t;
                        A(e), null == (t = (0, u.U9)(e)) || t.removeEventListener("keydown", n)
                    };
                    null == (t = (0, u.U9)(e)) || t.addEventListener("keydown", n)
                })), S = v((e => {
                    var t;
                    const n = k.current;
                    k.current = !1;
                    const o = x.current;
                    if (x.current = !1, "click" === m && o) return;
                    if (n) return;
                    if ("function" === typeof R && !R(e)) return;
                    const s = (0, u.U9)(e),
                        a = "[" + O("inert") + "]",
                        f = (0, u.Me)(c.floating).querySelectorAll(a);
                    let d = (0, i.kK)(s) ? s : null;
                    for (; d && !(0, i.Py)(d);) {
                        const e = (0, i.Ow)(d);
                        if ((0, i.Py)(e) || !(0, i.kK)(e)) break;
                        d = e
                    }
                    if (f.length && (0, i.kK)(s) && !(0, u.ex)(s) && !(0, u.r3)(s, c.floating) && Array.from(f).every((e => !(0, u.r3)(d, e)))) return;
                    if ((0, i.Re)(s) && B) {
                        const t = s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                            n = s.clientHeight > 0 && s.scrollHeight > s.clientHeight;
                        let r = n && e.offsetX > s.clientWidth;
                        if (n) {
                            "rtl" === (0, i.Dx)(s).direction && (r = e.offsetX <= s.offsetWidth - s.clientWidth)
                        }
                        if (r || t && e.offsetY > s.clientHeight) return
                    }
                    const v = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                        p = y && _(y.nodesRef.current, v).some((t => {
                            var n;
                            return (0, u.Pe)(e, null == (n = t.context) ? void 0 : n.elements.floating)
                        }));
                    if ((0, u.Pe)(e, c.floating) || (0, u.Pe)(e, c.domReference) || p) return;
                    const g = y ? _(y.nodesRef.current, v) : [];
                    if (g.length > 0) {
                        let e = !0;
                        if (g.forEach((t => {
                                var n;
                                null == (n = t.context) || !n.open || t.context.dataRef.current.__outsidePressBubbles || (e = !1)
                            })), !e) return
                    }
                    r(!1, e, "outside-press")
                })), D = v((e => {
                    var t;
                    const n = () => {
                        var t;
                        S(e), null == (t = (0, u.U9)(e)) || t.removeEventListener(m, n)
                    };
                    null == (t = (0, u.U9)(e)) || t.addEventListener(m, n)
                }));
                o.useEffect((() => {
                    if (!n || !a) return;
                    l.current.__escapeKeyBubbles = M, l.current.__outsidePressBubbles = C;
                    let e = -1;

                    function t(e) {
                        r(!1, e, "ancestor-scroll")
                    }

                    function o() {
                        window.clearTimeout(e), T.current = !0
                    }

                    function d() {
                        e = window.setTimeout((() => {
                            T.current = !1
                        }), (0, i.Pf)() ? 5 : 0)
                    }
                    const v = (0, u.Me)(c.floating);
                    f && (v.addEventListener("keydown", P ? I : A, P), v.addEventListener("compositionstart", o), v.addEventListener("compositionend", d)), R && v.addEventListener(m, L ? D : S, L);
                    let p = [];
                    return b && ((0, i.kK)(c.domReference) && (p = (0, s.Kx)(c.domReference)), (0, i.kK)(c.floating) && (p = p.concat((0, s.Kx)(c.floating))), !(0, i.kK)(c.reference) && c.reference && c.reference.contextElement && (p = p.concat((0, s.Kx)(c.reference.contextElement)))), p = p.filter((e => {
                        var t;
                        return e !== (null == (t = v.defaultView) ? void 0 : t.visualViewport)
                    })), p.forEach((e => {
                        e.addEventListener("scroll", t, {
                            passive: !0
                        })
                    })), () => {
                        f && (v.removeEventListener("keydown", P ? I : A, P), v.removeEventListener("compositionstart", o), v.removeEventListener("compositionend", d)), R && v.removeEventListener(m, L ? D : S, L), p.forEach((e => {
                            e.removeEventListener("scroll", t)
                        })), window.clearTimeout(e)
                    }
                }), [l, c, f, R, m, n, r, b, a, M, C, A, P, I, S, L, D]), o.useEffect((() => {
                    k.current = !1
                }), [R, m]);
                const j = o.useMemo((() => ({
                        onKeyDown: A,
                        [te[g]]: e => {
                            p && r(!1, e.nativeEvent, "reference-press")
                        }
                    })), [A, r, p, g]),
                    B = o.useMemo((() => ({
                        onKeyDown: A,
                        onMouseDown() {
                            x.current = !0
                        },
                        onMouseUp() {
                            x.current = !0
                        },
                        [ne[m]]: () => {
                            k.current = !0
                        }
                    })), [A, m]);
                return o.useMemo((() => a ? {
                    reference: j,
                    floating: B
                } : {}), [a, j, B])
            }

            function ue(e) {
                void 0 === e && (e = {});
                const {
                    nodeId: t
                } = e, n = function(e) {
                    const {
                        open: t = !1,
                        onOpenChange: n,
                        elements: r
                    } = e, u = M(), i = o.useRef({}), [c] = o.useState((() => C())), l = null != T(), [s, a] = o.useState(r.reference), f = v(((e, t, r) => {
                        i.current.openEvent = e ? t : void 0, c.emit("openchange", {
                            open: e,
                            event: t,
                            reason: r,
                            nested: l
                        }), null == n || n(e, t, r)
                    })), d = o.useMemo((() => ({
                        setPositionReference: a
                    })), []), m = o.useMemo((() => ({
                        reference: s || r.reference || null,
                        floating: r.floating || null,
                        domReference: r.reference
                    })), [s, r.reference, r.floating]);
                    return o.useMemo((() => ({
                        dataRef: i,
                        open: t,
                        onOpenChange: f,
                        elements: m,
                        events: c,
                        floatingId: u,
                        refs: d
                    })), [t, f, m, c, u, d])
                }({ ...e,
                    elements: {
                        reference: null,
                        floating: null,
                        ...e.elements
                    }
                }), r = e.rootContext || n, u = r.elements, [c, l] = o.useState(null), [s, f] = o.useState(null), d = (null == u ? void 0 : u.domReference) || c, m = o.useRef(null), p = K();
                E((() => {
                    d && (m.current = d)
                }), [d]);
                const g = (0, a.YF)({ ...e,
                        elements: { ...u,
                            ...s && {
                                reference: s
                            }
                        }
                    }),
                    b = o.useCallback((e => {
                        const t = (0, i.kK)(e) ? {
                            getBoundingClientRect: () => e.getBoundingClientRect(),
                            contextElement: e
                        } : e;
                        f(t), g.refs.setReference(t)
                    }), [g.refs]),
                    h = o.useCallback((e => {
                        ((0, i.kK)(e) || null === e) && (m.current = e, l(e)), ((0, i.kK)(g.refs.reference.current) || null === g.refs.reference.current || null !== e && !(0, i.kK)(e)) && g.refs.setReference(e)
                    }), [g.refs]),
                    y = o.useMemo((() => ({ ...g.refs,
                        setReference: h,
                        setPositionReference: b,
                        domReference: m
                    })), [g.refs, h, b]),
                    w = o.useMemo((() => ({ ...g.elements,
                        domReference: d
                    })), [g.elements, d]),
                    R = o.useMemo((() => ({ ...g,
                        ...r,
                        refs: y,
                        elements: w,
                        nodeId: t
                    })), [g, y, w, t, r]);
                return E((() => {
                    r.dataRef.current.floatingContext = R;
                    const e = null == p ? void 0 : p.nodesRef.current.find((e => e.id === t));
                    e && (e.context = R)
                })), o.useMemo((() => ({ ...g,
                    context: R,
                    refs: y,
                    elements: w
                })), [g, y, w, R])
            }
            const ie = "active",
                ce = "selected";

            function le(e, t, n) {
                const r = new Map,
                    o = "item" === n;
                let u = e;
                if (o && e) {
                    const {
                        [ie]: t, [ce]: n, ...r
                    } = e;
                    u = r
                }
                return { ..."floating" === n && {
                        tabIndex: -1,
                        [Q]: ""
                    },
                    ...u,
                    ...t.map((t => {
                        const r = t ? t[n] : null;
                        return "function" === typeof r ? e ? r(e) : null : r
                    })).concat(e).reduce(((e, t) => t ? (Object.entries(t).forEach((t => {
                        let [n, u] = t;
                        var i;
                        o && [ie, ce].includes(n) || (0 === n.indexOf("on") ? (r.has(n) || r.set(n, []), "function" === typeof u && (null == (i = r.get(n)) || i.push(u), e[n] = function() {
                            for (var e, t = arguments.length, o = new Array(t), u = 0; u < t; u++) o[u] = arguments[u];
                            return null == (e = r.get(n)) ? void 0 : e.map((e => e(...o))).find((e => void 0 !== e))
                        })) : e[n] = u)
                    })), e) : e), {})
                }
            }

            function se(e) {
                void 0 === e && (e = []);
                const t = e.map((e => null == e ? void 0 : e.reference)),
                    n = e.map((e => null == e ? void 0 : e.floating)),
                    r = e.map((e => null == e ? void 0 : e.item)),
                    u = o.useCallback((t => le(t, e, "reference")), t),
                    i = o.useCallback((t => le(t, e, "floating")), n),
                    c = o.useCallback((t => le(t, e, "item")), r);
                return o.useMemo((() => ({
                    getReferenceProps: u,
                    getFloatingProps: i,
                    getItemProps: c
                })), [u, i, c])
            }
            const ae = new Map([
                ["select", "listbox"],
                ["combobox", "listbox"],
                ["label", !1]
            ]);

            function fe(e, t) {
                var n;
                void 0 === t && (t = {});
                const {
                    open: r,
                    floatingId: u
                } = e, {
                    enabled: i = !0,
                    role: c = "dialog"
                } = t, l = null != (n = ae.get(c)) ? n : c, s = M(), a = null != T(), f = o.useMemo((() => "tooltip" === l || "label" === c ? {
                    ["aria-" + ("label" === c ? "labelledby" : "describedby")]: r ? u : void 0
                } : {
                    "aria-expanded": r ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": r ? u : void 0,
                    ..."listbox" === l && {
                        role: "combobox"
                    },
                    ..."menu" === l && {
                        id: s
                    },
                    ..."menu" === l && a && {
                        role: "menuitem"
                    },
                    ..."select" === c && {
                        "aria-autocomplete": "none"
                    },
                    ..."combobox" === c && {
                        "aria-autocomplete": "list"
                    }
                }), [l, u, a, r, s, c]), d = o.useMemo((() => {
                    const e = {
                        id: u,
                        ...l && {
                            role: l
                        }
                    };
                    return "tooltip" === l || "label" === c ? e : { ...e,
                        ..."menu" === l && {
                            "aria-labelledby": s
                        }
                    }
                }), [l, u, s, c]), v = o.useCallback((e => {
                    let {
                        active: t,
                        selected: n
                    } = e;
                    const r = {
                        role: "option",
                        ...t && {
                            id: u + "-option"
                        }
                    };
                    switch (c) {
                        case "select":
                            return { ...r,
                                "aria-selected": t && n
                            };
                        case "combobox":
                            return { ...r,
                                ...t && {
                                    "aria-selected": !0
                                }
                            }
                    }
                    return {}
                }), [u, c]);
                return o.useMemo((() => i ? {
                    reference: f,
                    floating: d,
                    item: v
                } : {}), [i, f, d, v])
            }
            const de = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ((e, t) => (t ? "-" : "") + e.toLowerCase()));

            function ve(e, t) {
                return "function" === typeof e ? e(t) : e
            }

            function me(e, t) {
                void 0 === t && (t = {});
                const {
                    open: n,
                    elements: {
                        floating: r
                    }
                } = e, {
                    duration: u = 250
                } = t, i = ("number" === typeof u ? u : u.close) || 0, [c, l] = o.useState("unmounted"), s = function(e, t) {
                    const [n, r] = o.useState(e);
                    return e && !n && r(!0), o.useEffect((() => {
                        if (!e && n) {
                            const e = setTimeout((() => r(!1)), t);
                            return () => clearTimeout(e)
                        }
                    }), [e, n, t]), n
                }(n, i);
                return s || "close" !== c || l("unmounted"), E((() => {
                    if (r) {
                        if (n) {
                            l("initial");
                            const e = requestAnimationFrame((() => {
                                l("open")
                            }));
                            return () => {
                                cancelAnimationFrame(e)
                            }
                        }
                        l("close")
                    }
                }), [n, r]), {
                    isMounted: s,
                    status: c
                }
            }

            function pe(e, t) {
                void 0 === t && (t = {});
                const {
                    initial: n = {
                        opacity: 0
                    },
                    open: r,
                    close: u,
                    common: i,
                    duration: c = 250
                } = t, l = e.placement, s = l.split("-")[0], a = o.useMemo((() => ({
                    side: s,
                    placement: l
                })), [s, l]), f = "number" === typeof c, d = (f ? c : c.open) || 0, v = (f ? c : c.close) || 0, [m, p] = o.useState((() => ({ ...ve(i, a),
                    ...ve(n, a)
                }))), {
                    isMounted: g,
                    status: b
                } = me(e, {
                    duration: c
                }), h = A(n), y = A(r), w = A(u), R = A(i);
                return E((() => {
                    const e = ve(h.current, a),
                        t = ve(w.current, a),
                        n = ve(R.current, a),
                        r = ve(y.current, a) || Object.keys(e).reduce(((e, t) => (e[t] = "", e)), {});
                    if ("initial" === b && p((t => ({
                            transitionProperty: t.transitionProperty,
                            ...n,
                            ...e
                        }))), "open" === b && p({
                            transitionProperty: Object.keys(r).map(de).join(","),
                            transitionDuration: d + "ms",
                            ...n,
                            ...r
                        }), "close" === b) {
                        const r = t || e;
                        p({
                            transitionProperty: Object.keys(r).map(de).join(","),
                            transitionDuration: v + "ms",
                            ...n,
                            ...r
                        })
                    }
                }), [v, w, h, y, R, d, b, a]), {
                    isMounted: g,
                    styles: m
                }
            }

            function ge(e, t) {
                const [n, r] = e;
                let o = !1;
                const u = t.length;
                for (let i = 0, c = u - 1; i < u; c = i++) {
                    const [e, u] = t[i] || [0, 0], [l, s] = t[c] || [0, 0];
                    u >= r !== s >= r && n <= (l - e) * (r - u) / (s - u) + e && (o = !o)
                }
                return o
            }

            function be(e) {
                void 0 === e && (e = {});
                const {
                    buffer: t = .5,
                    blockPointerEvents: n = !1,
                    requireIntent: r = !0
                } = e;
                let o, c = !1,
                    l = null,
                    s = null,
                    a = performance.now();
                const f = e => {
                    let {
                        x: n,
                        y: f,
                        placement: d,
                        elements: v,
                        onClose: m,
                        nodeId: p,
                        tree: g
                    } = e;
                    return function(e) {
                        function b() {
                            clearTimeout(o), m()
                        }
                        if (clearTimeout(o), !v.domReference || !v.floating || null == d || null == n || null == f) return;
                        const {
                            clientX: E,
                            clientY: h
                        } = e, y = [E, h], w = (0, u.U9)(e), R = "mouseleave" === e.type, k = (0, u.r3)(v.floating, w), x = (0, u.r3)(v.domReference, w), M = v.domReference.getBoundingClientRect(), C = v.floating.getBoundingClientRect(), P = d.split("-")[0], L = n > C.right - C.width / 2, T = f > C.bottom - C.height / 2, K = function(e, t) {
                            return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
                        }(y, M), O = C.width > M.width, A = C.height > M.height, I = (O ? M : C).left, S = (O ? M : C).right, D = (A ? M : C).top, j = (A ? M : C).bottom;
                        if (k && (c = !0, !R)) return;
                        if (x && (c = !1), x && !R) return void(c = !0);
                        if (R && (0, i.kK)(e.relatedTarget) && (0, u.r3)(v.floating, e.relatedTarget)) return;
                        if (g && _(g.nodesRef.current, p).some((e => {
                                let {
                                    context: t
                                } = e;
                                return null == t ? void 0 : t.open
                            }))) return;
                        if ("top" === P && f >= M.bottom - 1 || "bottom" === P && f <= M.top + 1 || "left" === P && n >= M.right - 1 || "right" === P && n <= M.left + 1) return b();
                        let B = [];
                        switch (P) {
                            case "top":
                                B = [
                                    [I, M.top + 1],
                                    [I, C.bottom - 1],
                                    [S, C.bottom - 1],
                                    [S, M.top + 1]
                                ];
                                break;
                            case "bottom":
                                B = [
                                    [I, C.top + 1],
                                    [I, M.bottom - 1],
                                    [S, M.bottom - 1],
                                    [S, C.top + 1]
                                ];
                                break;
                            case "left":
                                B = [
                                    [C.right - 1, j],
                                    [C.right - 1, D],
                                    [M.left + 1, D],
                                    [M.left + 1, j]
                                ];
                                break;
                            case "right":
                                B = [
                                    [M.right - 1, j],
                                    [M.right - 1, D],
                                    [C.left + 1, D],
                                    [C.left + 1, j]
                                ]
                        }
                        if (!ge([E, h], B)) {
                            if (c && !K) return b();
                            if (!R && r) {
                                const t = function(e, t) {
                                        const n = performance.now(),
                                            r = n - a;
                                        if (null === l || null === s || 0 === r) return l = e, s = t, a = n, null;
                                        const o = e - l,
                                            u = t - s,
                                            i = Math.sqrt(o * o + u * u);
                                        return l = e, s = t, a = n, i / r
                                    }(e.clientX, e.clientY),
                                    n = .1;
                                if (null !== t && t < n) return b()
                            }
                            ge([E, h], function(e) {
                                let [n, r] = e;
                                switch (P) {
                                    case "top":
                                        return [
                                            [O ? n + t / 2 : L ? n + 4 * t : n - 4 * t, r + t + 1],
                                            [O ? n - t / 2 : L ? n + 4 * t : n - 4 * t, r + t + 1], ...[
                                                [C.left, L || O ? C.bottom - t : C.top],
                                                [C.right, L ? O ? C.bottom - t : C.top : C.bottom - t]
                                            ]
                                        ];
                                    case "bottom":
                                        return [
                                            [O ? n + t / 2 : L ? n + 4 * t : n - 4 * t, r - t],
                                            [O ? n - t / 2 : L ? n + 4 * t : n - 4 * t, r - t], ...[
                                                [C.left, L || O ? C.top + t : C.bottom],
                                                [C.right, L ? O ? C.top + t : C.bottom : C.top + t]
                                            ]
                                        ];
                                    case "left":
                                        {
                                            const e = [n + t + 1, A ? r + t / 2 : T ? r + 4 * t : r - 4 * t],
                                                o = [n + t + 1, A ? r - t / 2 : T ? r + 4 * t : r - 4 * t];
                                            return [...[
                                                [T || A ? C.right - t : C.left, C.top],
                                                [T ? A ? C.right - t : C.left : C.right - t, C.bottom]
                                            ], e, o]
                                        }
                                    case "right":
                                        return [
                                            [n - t, A ? r + t / 2 : T ? r + 4 * t : r - 4 * t],
                                            [n - t, A ? r - t / 2 : T ? r + 4 * t : r - 4 * t], ...[
                                                [T || A ? C.left + t : C.right, C.top],
                                                [T ? A ? C.left + t : C.right : C.left + t, C.bottom]
                                            ]
                                        ]
                                }
                            }([n, f])) ? !c && r && (o = window.setTimeout(b, 40)) : b()
                        }
                    }
                };
                return f.__options = {
                    blockPointerEvents: n
                }, f
            }
        }
    }
]);