"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8931], {
        23541: function(e, n, t) {
            t.d(n, {
                Ry: function() {
                    return l
                }
            });
            var r = function(e) {
                    return "undefined" === typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
                },
                o = new WeakMap,
                c = new WeakMap,
                a = {},
                u = 0,
                i = function(e) {
                    return e && (e.host || i(e.parentNode))
                },
                s = function(e, n, t, r) {
                    var s = function(e, n) {
                        return n.map((function(n) {
                            if (e.contains(n)) return n;
                            var t = i(n);
                            return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
                        })).filter((function(e) {
                            return Boolean(e)
                        }))
                    }(n, Array.isArray(e) ? e : [e]);
                    a[t] || (a[t] = new WeakMap);
                    var l = a[t],
                        d = [],
                        f = new Set,
                        v = new Set(s),
                        m = function(e) {
                            e && !f.has(e) && (f.add(e), m(e.parentNode))
                        };
                    s.forEach(m);
                    var p = function(e) {
                        e && !v.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                            if (f.has(e)) p(e);
                            else {
                                var n = e.getAttribute(r),
                                    a = null !== n && "false" !== n,
                                    u = (o.get(e) || 0) + 1,
                                    i = (l.get(e) || 0) + 1;
                                o.set(e, u), l.set(e, i), d.push(e), 1 === u && a && c.set(e, !0), 1 === i && e.setAttribute(t, "true"), a || e.setAttribute(r, "true")
                            }
                        }))
                    };
                    return p(n), f.clear(), u++,
                        function() {
                            d.forEach((function(e) {
                                var n = o.get(e) - 1,
                                    a = l.get(e) - 1;
                                o.set(e, n), l.set(e, a), n || (c.has(e) || e.removeAttribute(r), c.delete(e)), a || e.removeAttribute(t)
                            })), --u || (o = new WeakMap, o = new WeakMap, c = new WeakMap, a = {})
                        }
                },
                l = function(e, n, t) {
                    void 0 === t && (t = "data-aria-hidden");
                    var o = Array.from(Array.isArray(e) ? e : [e]),
                        c = n || r(e);
                    return c ? (o.push.apply(o, Array.from(c.querySelectorAll("[aria-live]"))), s(o, c, t, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        71642: function(e, n, t) {
            t.d(n, {
                Av: function() {
                    return a
                },
                pF: function() {
                    return r
                },
                xv: function() {
                    return c
                },
                zi: function() {
                    return o
                }
            });
            var r = "right-scroll-bar-position",
                o = "width-before-scroll-bar",
                c = "with-scroll-bars-hidden",
                a = "--removed-body-scroll-bar-size"
        },
        37087: function(e, n, t) {
            t.d(n, {
                jp: function() {
                    return d
                }
            });
            var r = t(67294),
                o = t(6525),
                c = t(71642),
                a = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                u = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                i = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" === typeof window) return a;
                    var n = function(e) {
                            var n = window.getComputedStyle(document.body),
                                t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = n["padding" === e ? "paddingTop" : "marginTop"],
                                o = n["padding" === e ? "paddingRight" : "marginRight"];
                            return [u(t), u(r), u(o)]
                        }(e),
                        t = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: n[0],
                        top: n[1],
                        right: n[2],
                        gap: Math.max(0, r - t + n[2] - n[0])
                    }
                },
                s = (0, o.Ws)(),
                l = function(e, n, t, r) {
                    var o = e.left,
                        a = e.top,
                        u = e.right,
                        i = e.gap;
                    return void 0 === t && (t = "margin"), "\n  .".concat(c.xv, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(i, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(c.pF, " {\n    right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(c.zi, " {\n    margin-right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(c.pF, " .").concat(c.pF, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c.zi, " .").concat(c.zi, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat(c.Av, ": ").concat(i, "px;\n  }\n")
                },
                d = function(e) {
                    var n = e.noRelative,
                        t = e.noImportant,
                        o = e.gapMode,
                        c = void 0 === o ? "margin" : o,
                        a = r.useMemo((function() {
                            return i(c)
                        }), [c]);
                    return r.createElement(s, {
                        styles: l(a, !n, c, t ? "" : "!important")
                    })
                }
        },
        42026: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return T
                }
            });
            var r = t(70655),
                o = t(67294),
                c = t(71642),
                a = t(99495),
                u = (0, t(87122)._)(),
                i = function() {},
                s = o.forwardRef((function(e, n) {
                    var t = o.useRef(null),
                        c = o.useState({
                            onScrollCapture: i,
                            onWheelCapture: i,
                            onTouchMoveCapture: i
                        }),
                        s = c[0],
                        l = c[1],
                        d = e.forwardProps,
                        f = e.children,
                        v = e.className,
                        m = e.removeScrollBar,
                        p = e.enabled,
                        h = e.shards,
                        g = e.sideCar,
                        E = e.noIsolation,
                        y = e.inert,
                        b = e.allowPinchZoom,
                        w = e.as,
                        C = void 0 === w ? "div" : w,
                        S = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        k = g,
                        _ = (0, a.q)([t, n]),
                        L = (0, r.__assign)((0, r.__assign)({}, S), s);
                    return o.createElement(o.Fragment, null, p && o.createElement(k, {
                        sideCar: u,
                        removeScrollBar: m,
                        shards: h,
                        noIsolation: E,
                        inert: y,
                        setCallbacks: l,
                        allowPinchZoom: !!b,
                        lockRef: t
                    }), d ? o.cloneElement(o.Children.only(f), (0, r.__assign)((0, r.__assign)({}, L), {
                        ref: _
                    })) : o.createElement(C, (0, r.__assign)({}, L, {
                        className: v,
                        ref: _
                    }), f))
                }));
            s.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, s.classNames = {
                fullWidth: c.zi,
                zeroRight: c.pF
            };
            var l = t(66781),
                d = t(37087),
                f = t(6525),
                v = !1;
            if ("undefined" !== typeof window) try {
                var m = Object.defineProperty({}, "passive", {
                    get: function() {
                        return v = !0, !0
                    }
                });
                window.addEventListener("test", m, m), window.removeEventListener("test", m, m)
            } catch (N) {
                v = !1
            }
            var p = !!v && {
                    passive: !1
                },
                h = function(e, n) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
                        return "TEXTAREA" === e.tagName
                    }(e) && "visible" === t[n])
                },
                g = function(e, n) {
                    var t = n;
                    do {
                        if ("undefined" !== typeof ShadowRoot && t instanceof ShadowRoot && (t = t.host), E(e, t)) {
                            var r = y(e, t);
                            if (r[1] > r[2]) return !0
                        }
                        t = t.parentNode
                    } while (t && t !== document.body);
                    return !1
                },
                E = function(e, n) {
                    return "v" === e ? function(e) {
                        return h(e, "overflowY")
                    }(n) : function(e) {
                        return h(e, "overflowX")
                    }(n)
                },
                y = function(e, n) {
                    return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
                        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
                    }(n);
                    var t
                },
                b = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                w = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                C = function(e) {
                    return e && "current" in e ? e.current : e
                },
                S = function(e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
                },
                k = 0,
                _ = [];
            var L = (0, l.L)(u, (function(e) {
                    var n = o.useRef([]),
                        t = o.useRef([0, 0]),
                        c = o.useRef(),
                        a = o.useState(k++)[0],
                        u = o.useState((function() {
                            return (0, f.Ws)()
                        }))[0],
                        i = o.useRef(e);
                    o.useEffect((function() {
                        i.current = e
                    }), [e]), o.useEffect((function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(a));
                            var n = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(C), !0).filter(Boolean);
                            return n.forEach((function(e) {
                                    return e.classList.add("allow-interactivity-".concat(a))
                                })),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(a)), n.forEach((function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(a))
                                    }))
                                }
                        }
                    }), [e.inert, e.lockRef.current, e.shards]);
                    var s = o.useCallback((function(e, n) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var r, o = b(e),
                                a = t.current,
                                u = "deltaX" in e ? e.deltaX : a[0] - o[0],
                                s = "deltaY" in e ? e.deltaY : a[1] - o[1],
                                l = e.target,
                                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === l.type) return !1;
                            var f = g(d, l);
                            if (!f) return !0;
                            if (f ? r = d : (r = "v" === d ? "h" : "v", f = g(d, l)), !f) return !1;
                            if (!c.current && "changedTouches" in e && (u || s) && (c.current = r), !r) return !0;
                            var v = c.current || r;
                            return function(e, n, t, r, o) {
                                var c = function(e, n) {
                                        return "h" === e && "rtl" === n ? -1 : 1
                                    }(e, window.getComputedStyle(n).direction),
                                    a = c * r,
                                    u = t.target,
                                    i = n.contains(u),
                                    s = !1,
                                    l = a > 0,
                                    d = 0,
                                    f = 0;
                                do {
                                    var v = y(e, u),
                                        m = v[0],
                                        p = v[1] - v[2] - c * m;
                                    (m || p) && E(e, u) && (d += p, f += m), u = u.parentNode
                                } while (!i && u !== document.body || i && (n.contains(u) || n === u));
                                return (l && (o && 0 === d || !o && a > d) || !l && (o && 0 === f || !o && -a > f)) && (s = !0), s
                            }(v, n, e, "h" === v ? u : s, !0)
                        }), []),
                        l = o.useCallback((function(e) {
                            var t = e;
                            if (_.length && _[_.length - 1] === u) {
                                var r = "deltaY" in t ? w(t) : b(t),
                                    o = n.current.filter((function(e) {
                                        return e.name === t.type && e.target === t.target && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                                        var n, o
                                    }))[0];
                                if (o && o.should) t.cancelable && t.preventDefault();
                                else if (!o) {
                                    var c = (i.current.shards || []).map(C).filter(Boolean).filter((function(e) {
                                        return e.contains(t.target)
                                    }));
                                    (c.length > 0 ? s(t, c[0]) : !i.current.noIsolation) && t.cancelable && t.preventDefault()
                                }
                            }
                        }), []),
                        v = o.useCallback((function(e, t, r, o) {
                            var c = {
                                name: e,
                                delta: t,
                                target: r,
                                should: o
                            };
                            n.current.push(c), setTimeout((function() {
                                n.current = n.current.filter((function(e) {
                                    return e !== c
                                }))
                            }), 1)
                        }), []),
                        m = o.useCallback((function(e) {
                            t.current = b(e), c.current = void 0
                        }), []),
                        h = o.useCallback((function(n) {
                            v(n.type, w(n), n.target, s(n, e.lockRef.current))
                        }), []),
                        L = o.useCallback((function(n) {
                            v(n.type, b(n), n.target, s(n, e.lockRef.current))
                        }), []);
                    o.useEffect((function() {
                        return _.push(u), e.setCallbacks({
                                onScrollCapture: h,
                                onWheelCapture: h,
                                onTouchMoveCapture: L
                            }), document.addEventListener("wheel", l, p), document.addEventListener("touchmove", l, p), document.addEventListener("touchstart", m, p),
                            function() {
                                _ = _.filter((function(e) {
                                    return e !== u
                                })), document.removeEventListener("wheel", l, p), document.removeEventListener("touchmove", l, p), document.removeEventListener("touchstart", m, p)
                            }
                    }), []);
                    var A = e.removeScrollBar,
                        T = e.inert;
                    return o.createElement(o.Fragment, null, T ? o.createElement(u, {
                        styles: S(a)
                    }) : null, A ? o.createElement(d.jp, {
                        gapMode: "margin"
                    }) : null)
                })),
                A = o.forwardRef((function(e, n) {
                    return o.createElement(s, (0, r.__assign)({}, e, {
                        ref: n,
                        sideCar: L
                    }))
                }));
            A.classNames = s.classNames;
            var T = A
        },
        6525: function(e, n, t) {
            t.d(n, {
                Ws: function() {
                    return u
                }
            });
            var r, o = t(67294);

            function c() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = r || t.nc;
                return n && e.setAttribute("nonce", n), e
            }
            var a = function() {
                    var e = 0,
                        n = null;
                    return {
                        add: function(t) {
                            var r, o;
                            0 == e && (n = c()) && (o = t, (r = n).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                            }(n)), e++
                        },
                        remove: function() {
                            !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
                        }
                    }
                },
                u = function() {
                    var e = function() {
                        var e = a();
                        return function(n, t) {
                            o.useEffect((function() {
                                return e.add(n),
                                    function() {
                                        e.remove()
                                    }
                            }), [n && t])
                        }
                    }();
                    return function(n) {
                        var t = n.styles,
                            r = n.dynamic;
                        return e(t, r), null
                    }
                }
        },
        99495: function(e, n, t) {
            t.d(n, {
                q: function() {
                    return o
                }
            });
            var r = t(67294);

            function o(e, n) {
                return function(e, n) {
                    var t = (0, r.useState)((function() {
                        return {
                            value: e,
                            callback: n,
                            facade: {
                                get current() {
                                    return t.value
                                },
                                set current(e) {
                                    var n = t.value;
                                    n !== e && (t.value = e, t.callback(e, n))
                                }
                            }
                        }
                    }))[0];
                    return t.callback = n, t.facade
                }(n || null, (function(n) {
                    return e.forEach((function(e) {
                        return function(e, n) {
                            return "function" === typeof e ? e(n) : e && (e.current = n), e
                        }(e, n)
                    }))
                }))
            }
        },
        66781: function(e, n, t) {
            t.d(n, {
                L: function() {
                    return a
                }
            });
            var r = t(70655),
                o = t(67294),
                c = function(e) {
                    var n = e.sideCar,
                        t = (0, r.__rest)(e, ["sideCar"]);
                    if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var c = n.read();
                    if (!c) throw new Error("Sidecar medium not found");
                    return o.createElement(c, (0, r.__assign)({}, t))
                };

            function a(e, n) {
                return e.useMedium(n), c
            }
            c.isSideCarExport = !0
        },
        87122: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return a
                }
            });
            var r = t(70655);

            function o(e) {
                return e
            }

            function c(e, n) {
                void 0 === n && (n = o);
                var t = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return t.length ? t[t.length - 1] : e
                    },
                    useMedium: function(e) {
                        var o = n(e, r);
                        return t.push(o),
                            function() {
                                t = t.filter((function(e) {
                                    return e !== o
                                }))
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (r = !0; t.length;) {
                            var n = t;
                            t = [], n.forEach(e)
                        }
                        t = {
                            push: function(n) {
                                return e(n)
                            },
                            filter: function() {
                                return t
                            }
                        }
                    },
                    assignMedium: function(e) {
                        r = !0;
                        var n = [];
                        if (t.length) {
                            var o = t;
                            t = [], o.forEach(e), n = t
                        }
                        var c = function() {
                                var t = n;
                                n = [], t.forEach(e)
                            },
                            a = function() {
                                return Promise.resolve().then(c)
                            };
                        a(), t = {
                            push: function(e) {
                                n.push(e), a()
                            },
                            filter: function(e) {
                                return n = n.filter(e), t
                            }
                        }
                    }
                }
            }

            function a(e) {
                void 0 === e && (e = {});
                var n = c(null);
                return n.options = (0, r.__assign)({
                    async: !0,
                    ssr: !1
                }, e), n
            }
        },
        27552: function(e, n, t) {
            t.d(n, {
                EW: function() {
                    return c
                }
            });
            var r = t(67294);
            let o = 0;

            function c() {
                (0, r.useEffect)((() => {
                    var e, n;
                    const t = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = t[0]) && void 0 !== e ? e : a()), document.body.insertAdjacentElement("beforeend", null !== (n = t[1]) && void 0 !== n ? n : a()), o++, () => {
                        1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), o--
                    }
                }), [])
            }

            function a() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
        },
        95420: function(e, n, t) {
            t.d(n, {
                M: function() {
                    return d
                }
            });
            var r = t(87462),
                o = t(67294),
                c = t(28771),
                a = t(75320),
                u = t(79698);
            const i = "focusScope.autoFocusOnMount",
                s = "focusScope.autoFocusOnUnmount",
                l = {
                    bubbles: !1,
                    cancelable: !0
                },
                d = (0, o.forwardRef)(((e, n) => {
                    const {
                        loop: t = !1,
                        trapped: d = !1,
                        onMountAutoFocus: m,
                        onUnmountAutoFocus: g,
                        ...E
                    } = e, [y, b] = (0, o.useState)(null), w = (0, u.W)(m), C = (0, u.W)(g), S = (0, o.useRef)(null), k = (0, c.e)(n, (e => b(e))), _ = (0, o.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, o.useEffect)((() => {
                        if (d) {
                            function e(e) {
                                if (_.paused || !y) return;
                                const n = e.target;
                                y.contains(n) ? S.current = n : p(S.current, {
                                    select: !0
                                })
                            }

                            function n(e) {
                                if (_.paused || !y) return;
                                const n = e.relatedTarget;
                                null !== n && (y.contains(n) || p(S.current, {
                                    select: !0
                                }))
                            }

                            function t(e) {
                                if (document.activeElement === document.body)
                                    for (const n of e) n.removedNodes.length > 0 && p(y)
                            }
                            document.addEventListener("focusin", e), document.addEventListener("focusout", n);
                            const r = new MutationObserver(t);
                            return y && r.observe(y, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", n), r.disconnect()
                            }
                        }
                    }), [d, y, _.paused]), (0, o.useEffect)((() => {
                        if (y) {
                            h.add(_);
                            const n = document.activeElement;
                            if (!y.contains(n)) {
                                const t = new CustomEvent(i, l);
                                y.addEventListener(i, w), y.dispatchEvent(t), t.defaultPrevented || (! function(e, {
                                    select: n = !1
                                } = {}) {
                                    const t = document.activeElement;
                                    for (const r of e)
                                        if (p(r, {
                                                select: n
                                            }), document.activeElement !== t) return
                                }((e = f(y), e.filter((e => "A" !== e.tagName))), {
                                    select: !0
                                }), document.activeElement === n && p(y))
                            }
                            return () => {
                                y.removeEventListener(i, w), setTimeout((() => {
                                    const e = new CustomEvent(s, l);
                                    y.addEventListener(s, C), y.dispatchEvent(e), e.defaultPrevented || p(null !== n && void 0 !== n ? n : document.body, {
                                        select: !0
                                    }), y.removeEventListener(s, C), h.remove(_)
                                }), 0)
                            }
                        }
                        var e
                    }), [y, w, C, _]);
                    const L = (0, o.useCallback)((e => {
                        if (!t && !d) return;
                        if (_.paused) return;
                        const n = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            r = document.activeElement;
                        if (n && r) {
                            const n = e.currentTarget,
                                [o, c] = function(e) {
                                    const n = f(e),
                                        t = v(n, e),
                                        r = v(n.reverse(), e);
                                    return [t, r]
                                }(n);
                            o && c ? e.shiftKey || r !== c ? e.shiftKey && r === o && (e.preventDefault(), t && p(c, {
                                select: !0
                            })) : (e.preventDefault(), t && p(o, {
                                select: !0
                            })) : r === n && e.preventDefault()
                        }
                    }), [t, d, _.paused]);
                    return (0, o.createElement)(a.WV.div, (0, r.Z)({
                        tabIndex: -1
                    }, E, {
                        ref: k,
                        onKeyDown: L
                    }))
                }));

            function f(e) {
                const n = [],
                    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            const n = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || n ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; t.nextNode();) n.push(t.currentNode);
                return n
            }

            function v(e, n) {
                for (const t of e)
                    if (!m(t, {
                            upTo: n
                        })) return t
            }

            function m(e, {
                upTo: n
            }) {
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                for (; e;) {
                    if (void 0 !== n && e === n) return !1;
                    if ("none" === getComputedStyle(e).display) return !0;
                    e = e.parentElement
                }
                return !1
            }

            function p(e, {
                select: n = !1
            } = {}) {
                if (e && e.focus) {
                    const t = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== t && function(e) {
                        return e instanceof HTMLInputElement && "select" in e
                    }(e) && n && e.select()
                }
            }
            const h = function() {
                let e = [];
                return {
                    add(n) {
                        const t = e[0];
                        n !== t && (null === t || void 0 === t || t.pause()), e = g(e, n), e.unshift(n)
                    },
                    remove(n) {
                        var t;
                        e = g(e, n), null === (t = e[0]) || void 0 === t || t.resume()
                    }
                }
            }();

            function g(e, n) {
                const t = [...e],
                    r = t.indexOf(n);
                return -1 !== r && t.splice(r, 1), t
            }
        }
    }
]);