"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5872], {
        78990: function(e, t, n) {
            n.d(t, {
                gm: function() {
                    return l
                }
            });
            var o = n(67294);
            const r = (0, o.createContext)(void 0);

            function l(e) {
                const t = (0, o.useContext)(r);
                return e || t || "ltr"
            }
        },
        85872: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return Te
                },
                ZA: function() {
                    return Ie
                },
                JO: function() {
                    return Re
                },
                ck: function() {
                    return Ve
                },
                wU: function() {
                    return We
                },
                eT: function() {
                    return Oe
                },
                __: function() {
                    return Pe
                },
                h_: function() {
                    return Me
                },
                fC: function() {
                    return Se
                },
                Z0: function() {
                    return Ne
                },
                xz: function() {
                    return _e
                },
                B4: function() {
                    return ke
                },
                l_: function() {
                    return De
                }
            });
            var o = n(87462),
                r = n(67294),
                l = n(73935);

            function a(e, [t, n]) {
                return Math.min(n, Math.max(t, e))
            }
            var i = n(36206),
                c = n(65936),
                s = n(28771),
                u = n(25360),
                d = n(78990),
                p = n(46063),
                f = n(27552),
                v = n(95420),
                m = n(91276),
                h = n(80507),
                g = n(42651),
                w = n(75320),
                b = n(88426),
                y = n(79698),
                x = n(77342),
                C = n(9981),
                E = n(57898),
                S = n(96219),
                _ = n(23541),
                k = n(42026);
            const R = [" ", "Enter", "ArrowUp", "ArrowDown"],
                M = [" ", "Enter"],
                T = "Select",
                [D, I, P] = (0, c.B)(T),
                [V, O] = (0, u.b)(T, [P, h.D7]),
                W = (0, h.D7)(),
                [N, Z] = V(T),
                [H, L] = V(T),
                A = e => {
                    const {
                        __scopeSelect: t,
                        children: n,
                        open: o,
                        defaultOpen: l,
                        onOpenChange: a,
                        value: i,
                        defaultValue: c,
                        onValueChange: s,
                        dir: u,
                        name: p,
                        autoComplete: f,
                        disabled: v,
                        required: g
                    } = e, w = W(t), [b, y] = (0, r.useState)(null), [C, E] = (0, r.useState)(null), [S, _] = (0, r.useState)(!1), k = (0, d.gm)(u), [R = !1, M] = (0, x.T)({
                        prop: o,
                        defaultProp: l,
                        onChange: a
                    }), [T, I] = (0, x.T)({
                        prop: i,
                        defaultProp: c,
                        onChange: s
                    }), P = (0, r.useRef)(null), V = !b || Boolean(b.closest("form")), [O, Z] = (0, r.useState)(new Set), L = Array.from(O).map((e => e.props.value)).join(";");
                    return (0, r.createElement)(h.fC, w, (0, r.createElement)(N, {
                        required: g,
                        scope: t,
                        trigger: b,
                        onTriggerChange: y,
                        valueNode: C,
                        onValueNodeChange: E,
                        valueNodeHasChildren: S,
                        onValueNodeHasChildrenChange: _,
                        contentId: (0, m.M)(),
                        value: T,
                        onValueChange: I,
                        open: R,
                        onOpenChange: M,
                        dir: k,
                        triggerPointerDownPosRef: P,
                        disabled: v
                    }, (0, r.createElement)(D.Provider, {
                        scope: t
                    }, (0, r.createElement)(H, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: (0, r.useCallback)((e => {
                            Z((t => new Set(t).add(e)))
                        }), []),
                        onNativeOptionRemove: (0, r.useCallback)((e => {
                            Z((t => {
                                const n = new Set(t);
                                return n.delete(e), n
                            }))
                        }), [])
                    }, n)), V ? (0, r.createElement)(xe, {
                        key: L,
                        "aria-hidden": !0,
                        required: g,
                        tabIndex: -1,
                        name: p,
                        autoComplete: f,
                        value: T,
                        onChange: e => I(e.target.value),
                        disabled: v
                    }, void 0 === T ? (0, r.createElement)("option", {
                        value: ""
                    }) : null, Array.from(O)) : null))
                },
                B = "SelectTrigger",
                K = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        disabled: l = !1,
                        ...a
                    } = e, c = W(n), u = Z(B, n), d = u.disabled || l, p = (0, s.e)(t, u.onTriggerChange), f = I(n), [v, m, g] = Ce((e => {
                        const t = f().filter((e => !e.disabled)),
                            n = t.find((e => e.value === u.value)),
                            o = Ee(t, e, n);
                        void 0 !== o && u.onValueChange(o.value)
                    })), b = () => {
                        d || (u.onOpenChange(!0), g())
                    };
                    return (0, r.createElement)(h.ee, (0, o.Z)({
                        asChild: !0
                    }, c), (0, r.createElement)(w.WV.button, (0, o.Z)({
                        type: "button",
                        role: "combobox",
                        "aria-controls": u.contentId,
                        "aria-expanded": u.open,
                        "aria-required": u.required,
                        "aria-autocomplete": "none",
                        dir: u.dir,
                        "data-state": u.open ? "open" : "closed",
                        disabled: d,
                        "data-disabled": d ? "" : void 0,
                        "data-placeholder": ye(u.value) ? "" : void 0
                    }, a, {
                        ref: p,
                        onClick: (0, i.M)(a.onClick, (e => {
                            e.currentTarget.focus()
                        })),
                        onPointerDown: (0, i.M)(a.onPointerDown, (e => {
                            const t = e.target;
                            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (b(), u.triggerPointerDownPosRef.current = {
                                x: Math.round(e.pageX),
                                y: Math.round(e.pageY)
                            }, e.preventDefault())
                        })),
                        onKeyDown: (0, i.M)(a.onKeyDown, (e => {
                            const t = "" !== v.current;
                            e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), t && " " === e.key || R.includes(e.key) && (b(), e.preventDefault())
                        }))
                    })))
                })),
                F = "SelectValue",
                U = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        className: l,
                        style: a,
                        children: i,
                        placeholder: c = "",
                        ...u
                    } = e, d = Z(F, n), {
                        onValueNodeHasChildrenChange: p
                    } = d, f = void 0 !== i, v = (0, s.e)(t, d.onValueNodeChange);
                    return (0, C.b)((() => {
                        p(f)
                    }), [p, f]), (0, r.createElement)(w.WV.span, (0, o.Z)({}, u, {
                        ref: v,
                        style: {
                            pointerEvents: "none"
                        }
                    }), ye(d.value) ? (0, r.createElement)(r.Fragment, null, c) : i)
                })),
                z = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        children: l,
                        ...a
                    } = e;
                    return (0, r.createElement)(w.WV.span, (0, o.Z)({
                        "aria-hidden": !0
                    }, a, {
                        ref: t
                    }), l || "\u25bc")
                })),
                q = e => (0, r.createElement)(g.h, (0, o.Z)({
                    asChild: !0
                }, e)),
                Y = "SelectContent",
                j = (0, r.forwardRef)(((e, t) => {
                    const n = Z(Y, e.__scopeSelect),
                        [a, i] = (0, r.useState)();
                    if ((0, C.b)((() => {
                            i(new DocumentFragment)
                        }), []), !n.open) {
                        const t = a;
                        return t ? (0, l.createPortal)((0, r.createElement)(G, {
                            scope: e.__scopeSelect
                        }, (0, r.createElement)(D.Slot, {
                            scope: e.__scopeSelect
                        }, (0, r.createElement)("div", null, e.children))), t) : null
                    }
                    return (0, r.createElement)($, (0, o.Z)({}, e, {
                        ref: t
                    }))
                })),
                X = 10,
                [G, J] = V(Y),
                $ = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        position: l = "item-aligned",
                        onCloseAutoFocus: a,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: u,
                        side: d,
                        sideOffset: m,
                        align: h,
                        alignOffset: g,
                        arrowPadding: w,
                        collisionBoundary: y,
                        collisionPadding: x,
                        sticky: C,
                        hideWhenDetached: E,
                        avoidCollisions: S,
                        ...R
                    } = e, M = Z(Y, n), [T, D] = (0, r.useState)(null), [P, V] = (0, r.useState)(null), O = (0, s.e)(t, (e => D(e))), [W, N] = (0, r.useState)(null), [H, L] = (0, r.useState)(null), A = I(n), [B, K] = (0, r.useState)(!1), F = (0, r.useRef)(!1);
                    (0, r.useEffect)((() => {
                        if (T) return (0, _.Ry)(T)
                    }), [T]), (0, f.EW)();
                    const U = (0, r.useCallback)((e => {
                            const [t, ...n] = A().map((e => e.ref.current)), [o] = n.slice(-1), r = document.activeElement;
                            for (const l of e) {
                                if (l === r) return;
                                if (null === l || void 0 === l || l.scrollIntoView({
                                        block: "nearest"
                                    }), l === t && P && (P.scrollTop = 0), l === o && P && (P.scrollTop = P.scrollHeight), null === l || void 0 === l || l.focus(), document.activeElement !== r) return
                            }
                        }), [A, P]),
                        z = (0, r.useCallback)((() => U([W, T])), [U, W, T]);
                    (0, r.useEffect)((() => {
                        B && z()
                    }), [B, z]);
                    const {
                        onOpenChange: q,
                        triggerPointerDownPosRef: j
                    } = M;
                    (0, r.useEffect)((() => {
                        if (T) {
                            let e = {
                                x: 0,
                                y: 0
                            };
                            const t = t => {
                                    var n, o, r, l;
                                    e = {
                                        x: Math.abs(Math.round(t.pageX) - (null !== (n = null === (o = j.current) || void 0 === o ? void 0 : o.x) && void 0 !== n ? n : 0)),
                                        y: Math.abs(Math.round(t.pageY) - (null !== (r = null === (l = j.current) || void 0 === l ? void 0 : l.y) && void 0 !== r ? r : 0))
                                    }
                                },
                                n = n => {
                                    e.x <= 10 && e.y <= 10 ? n.preventDefault() : T.contains(n.target) || q(!1), document.removeEventListener("pointermove", t), j.current = null
                                };
                            return null !== j.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                                capture: !0,
                                once: !0
                            })), () => {
                                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                                    capture: !0
                                })
                            }
                        }
                    }), [T, q, j]), (0, r.useEffect)((() => {
                        const e = () => q(!1);
                        return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                            window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                        }
                    }), [q]);
                    const [X, J] = Ce((e => {
                        const t = A().filter((e => !e.disabled)),
                            n = t.find((e => e.ref.current === document.activeElement)),
                            o = Ee(t, e, n);
                        o && setTimeout((() => o.ref.current.focus()))
                    })), $ = (0, r.useCallback)(((e, t, n) => {
                        const o = !F.current && !n;
                        (void 0 !== M.value && M.value === t || o) && (N(e), o && (F.current = !0))
                    }), [M.value]), te = (0, r.useCallback)((() => null === T || void 0 === T ? void 0 : T.focus()), [T]), ne = (0, r.useCallback)(((e, t, n) => {
                        const o = !F.current && !n;
                        (void 0 !== M.value && M.value === t || o) && L(e)
                    }), [M.value]), oe = "popper" === l ? ee : Q, re = oe === ee ? {
                        side: d,
                        sideOffset: m,
                        align: h,
                        alignOffset: g,
                        arrowPadding: w,
                        collisionBoundary: y,
                        collisionPadding: x,
                        sticky: C,
                        hideWhenDetached: E,
                        avoidCollisions: S
                    } : {};
                    return (0, r.createElement)(G, {
                        scope: n,
                        content: T,
                        viewport: P,
                        onViewportChange: V,
                        itemRefCallback: $,
                        selectedItem: W,
                        onItemLeave: te,
                        itemTextRefCallback: ne,
                        focusSelectedItem: z,
                        selectedItemText: H,
                        position: l,
                        isPositioned: B,
                        searchRef: X
                    }, (0, r.createElement)(k.Z, {
                        as: b.g7,
                        allowPinchZoom: !0
                    }, (0, r.createElement)(v.M, {
                        asChild: !0,
                        trapped: M.open,
                        onMountAutoFocus: e => {
                            e.preventDefault()
                        },
                        onUnmountAutoFocus: (0, i.M)(a, (e => {
                            var t;
                            null === (t = M.trigger) || void 0 === t || t.focus({
                                preventScroll: !0
                            }), e.preventDefault()
                        }))
                    }, (0, r.createElement)(p.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: u,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: () => M.onOpenChange(!1)
                    }, (0, r.createElement)(oe, (0, o.Z)({
                        role: "listbox",
                        id: M.contentId,
                        "data-state": M.open ? "open" : "closed",
                        dir: M.dir,
                        onContextMenu: e => e.preventDefault()
                    }, R, re, {
                        onPlaced: () => K(!0),
                        ref: O,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...R.style
                        },
                        onKeyDown: (0, i.M)(R.onKeyDown, (e => {
                            const t = e.ctrlKey || e.altKey || e.metaKey;
                            if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || J(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                let t = A().filter((e => !e.disabled)).map((e => e.ref.current));
                                if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                    const n = e.target,
                                        o = t.indexOf(n);
                                    t = t.slice(o + 1)
                                }
                                setTimeout((() => U(t))), e.preventDefault()
                            }
                        }))
                    }))))))
                })),
                Q = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        onPlaced: l,
                        ...i
                    } = e, c = Z(Y, n), u = J(Y, n), [d, p] = (0, r.useState)(null), [f, v] = (0, r.useState)(null), m = (0, s.e)(t, (e => v(e))), h = I(n), g = (0, r.useRef)(!1), b = (0, r.useRef)(!0), {
                        viewport: y,
                        selectedItem: x,
                        selectedItemText: E,
                        focusSelectedItem: S
                    } = u, _ = (0, r.useCallback)((() => {
                        if (c.trigger && c.valueNode && d && f && y && x && E) {
                            const e = c.trigger.getBoundingClientRect(),
                                t = f.getBoundingClientRect(),
                                n = c.valueNode.getBoundingClientRect(),
                                o = E.getBoundingClientRect();
                            if ("rtl" !== c.dir) {
                                const r = o.left - t.left,
                                    l = n.left - r,
                                    i = e.left - l,
                                    c = e.width + i,
                                    s = Math.max(c, t.width),
                                    u = window.innerWidth - X,
                                    p = a(l, [X, u - s]);
                                d.style.minWidth = c + "px", d.style.left = p + "px"
                            } else {
                                const r = t.right - o.right,
                                    l = window.innerWidth - n.right - r,
                                    i = window.innerWidth - e.right - l,
                                    c = e.width + i,
                                    s = Math.max(c, t.width),
                                    u = window.innerWidth - X,
                                    p = a(l, [X, u - s]);
                                d.style.minWidth = c + "px", d.style.right = p + "px"
                            }
                            const r = h(),
                                i = window.innerHeight - 2 * X,
                                s = y.scrollHeight,
                                u = window.getComputedStyle(f),
                                p = parseInt(u.borderTopWidth, 10),
                                v = parseInt(u.paddingTop, 10),
                                m = parseInt(u.borderBottomWidth, 10),
                                w = p + v + s + parseInt(u.paddingBottom, 10) + m,
                                b = Math.min(5 * x.offsetHeight, w),
                                C = window.getComputedStyle(y),
                                S = parseInt(C.paddingTop, 10),
                                _ = parseInt(C.paddingBottom, 10),
                                k = e.top + e.height / 2 - X,
                                R = i - k,
                                M = x.offsetHeight / 2,
                                T = p + v + (x.offsetTop + M),
                                D = w - T;
                            if (T <= k) {
                                const e = x === r[r.length - 1].ref.current;
                                d.style.bottom = "0px";
                                const t = f.clientHeight - y.offsetTop - y.offsetHeight,
                                    n = T + Math.max(R, M + (e ? _ : 0) + t + m);
                                d.style.height = n + "px"
                            } else {
                                const e = x === r[0].ref.current;
                                d.style.top = "0px";
                                const t = Math.max(k, p + y.offsetTop + (e ? S : 0) + M) + D;
                                d.style.height = t + "px", y.scrollTop = T - k + y.offsetTop
                            }
                            d.style.margin = `${X}px 0`, d.style.minHeight = b + "px", d.style.maxHeight = i + "px", null === l || void 0 === l || l(), requestAnimationFrame((() => g.current = !0))
                        }
                    }), [h, c.trigger, c.valueNode, d, f, y, x, E, c.dir, l]);
                    (0, C.b)((() => _()), [_]);
                    const [k, R] = (0, r.useState)();
                    (0, C.b)((() => {
                        f && R(window.getComputedStyle(f).zIndex)
                    }), [f]);
                    const M = (0, r.useCallback)((e => {
                        e && !0 === b.current && (_(), null === S || void 0 === S || S(), b.current = !1)
                    }), [_, S]);
                    return (0, r.createElement)(te, {
                        scope: n,
                        contentWrapper: d,
                        shouldExpandOnScrollRef: g,
                        onScrollButtonChange: M
                    }, (0, r.createElement)("div", {
                        ref: p,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: k
                        }
                    }, (0, r.createElement)(w.WV.div, (0, o.Z)({}, i, {
                        ref: m,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...i.style
                        }
                    }))))
                })),
                ee = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        align: l = "start",
                        collisionPadding: a = X,
                        ...i
                    } = e, c = W(n);
                    return (0, r.createElement)(h.VY, (0, o.Z)({}, c, i, {
                        ref: t,
                        align: l,
                        collisionPadding: a,
                        style: {
                            boxSizing: "border-box",
                            ...i.style,
                            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                })),
                [te, ne] = V(Y, {}),
                oe = "SelectViewport",
                re = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        ...l
                    } = e, a = J(oe, n), c = ne(oe, n), u = (0, s.e)(t, a.onViewportChange), d = (0, r.useRef)(0);
                    return (0, r.createElement)(r.Fragment, null, (0, r.createElement)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        }
                    }), (0, r.createElement)(D.Slot, {
                        scope: n
                    }, (0, r.createElement)(w.WV.div, (0, o.Z)({
                        "data-radix-select-viewport": "",
                        role: "presentation"
                    }, l, {
                        ref: u,
                        style: {
                            position: "relative",
                            flex: 1,
                            overflow: "auto",
                            ...l.style
                        },
                        onScroll: (0, i.M)(l.onScroll, (e => {
                            const t = e.currentTarget,
                                {
                                    contentWrapper: n,
                                    shouldExpandOnScrollRef: o
                                } = c;
                            if (null !== o && void 0 !== o && o.current && n) {
                                const e = Math.abs(d.current - t.scrollTop);
                                if (e > 0) {
                                    const o = window.innerHeight - 2 * X,
                                        r = parseFloat(n.style.minHeight),
                                        l = parseFloat(n.style.height),
                                        a = Math.max(r, l);
                                    if (a < o) {
                                        const r = a + e,
                                            l = Math.min(o, r),
                                            i = r - l;
                                        n.style.height = l + "px", "0px" === n.style.bottom && (t.scrollTop = i > 0 ? i : 0, n.style.justifyContent = "flex-end")
                                    }
                                }
                            }
                            d.current = t.scrollTop
                        }))
                    }))))
                })),
                le = "SelectGroup",
                [ae, ie] = V(le),
                ce = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        ...l
                    } = e, a = (0, m.M)();
                    return (0, r.createElement)(ae, {
                        scope: n,
                        id: a
                    }, (0, r.createElement)(w.WV.div, (0, o.Z)({
                        role: "group",
                        "aria-labelledby": a
                    }, l, {
                        ref: t
                    })))
                })),
                se = "SelectLabel",
                ue = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        ...l
                    } = e, a = ie(se, n);
                    return (0, r.createElement)(w.WV.div, (0, o.Z)({
                        id: a.id
                    }, l, {
                        ref: t
                    }))
                })),
                de = "SelectItem",
                [pe, fe] = V(de),
                ve = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        value: l,
                        disabled: a = !1,
                        textValue: c,
                        ...u
                    } = e, d = Z(de, n), p = J(de, n), f = d.value === l, [v, h] = (0, r.useState)(null !== c && void 0 !== c ? c : ""), [g, b] = (0, r.useState)(!1), y = (0, s.e)(t, (e => {
                        var t;
                        return null === (t = p.itemRefCallback) || void 0 === t ? void 0 : t.call(p, e, l, a)
                    })), x = (0, m.M)(), C = () => {
                        a || (d.onValueChange(l), d.onOpenChange(!1))
                    };
                    if ("" === l) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, r.createElement)(pe, {
                        scope: n,
                        value: l,
                        disabled: a,
                        textId: x,
                        isSelected: f,
                        onItemTextChange: (0, r.useCallback)((e => {
                            h((t => {
                                var n;
                                return t || (null !== (n = null === e || void 0 === e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim()
                            }))
                        }), [])
                    }, (0, r.createElement)(D.ItemSlot, {
                        scope: n,
                        value: l,
                        disabled: a,
                        textValue: v
                    }, (0, r.createElement)(w.WV.div, (0, o.Z)({
                        role: "option",
                        "aria-labelledby": x,
                        "data-highlighted": g ? "" : void 0,
                        "aria-selected": f && g,
                        "data-state": f ? "checked" : "unchecked",
                        "aria-disabled": a || void 0,
                        "data-disabled": a ? "" : void 0,
                        tabIndex: a ? void 0 : -1
                    }, u, {
                        ref: y,
                        onFocus: (0, i.M)(u.onFocus, (() => b(!0))),
                        onBlur: (0, i.M)(u.onBlur, (() => b(!1))),
                        onPointerUp: (0, i.M)(u.onPointerUp, C),
                        onPointerMove: (0, i.M)(u.onPointerMove, (e => {
                            var t;
                            a ? null === (t = p.onItemLeave) || void 0 === t || t.call(p) : e.currentTarget.focus({
                                preventScroll: !0
                            })
                        })),
                        onPointerLeave: (0, i.M)(u.onPointerLeave, (e => {
                            var t;
                            e.currentTarget === document.activeElement && (null === (t = p.onItemLeave) || void 0 === t || t.call(p))
                        })),
                        onKeyDown: (0, i.M)(u.onKeyDown, (e => {
                            var t;
                            "" !== (null === (t = p.searchRef) || void 0 === t ? void 0 : t.current) && " " === e.key || (M.includes(e.key) && C(), " " === e.key && e.preventDefault())
                        }))
                    }))))
                })),
                me = "SelectItemText",
                he = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        className: a,
                        style: i,
                        ...c
                    } = e, u = Z(me, n), d = J(me, n), p = fe(me, n), f = L(me, n), [v, m] = (0, r.useState)(null), h = (0, s.e)(t, (e => m(e)), p.onItemTextChange, (e => {
                        var t;
                        return null === (t = d.itemTextRefCallback) || void 0 === t ? void 0 : t.call(d, e, p.value, p.disabled)
                    })), g = null === v || void 0 === v ? void 0 : v.textContent, b = (0, r.useMemo)((() => (0, r.createElement)("option", {
                        key: p.value,
                        value: p.value,
                        disabled: p.disabled
                    }, g)), [p.disabled, p.value, g]), {
                        onNativeOptionAdd: y,
                        onNativeOptionRemove: x
                    } = f;
                    return (0, C.b)((() => (y(b), () => x(b))), [y, x, b]), (0, r.createElement)(r.Fragment, null, (0, r.createElement)(w.WV.span, (0, o.Z)({
                        id: p.textId
                    }, c, {
                        ref: h
                    })), p.isSelected && u.valueNode && !u.valueNodeHasChildren ? (0, l.createPortal)(c.children, u.valueNode) : null)
                })),
                ge = "SelectItemIndicator",
                we = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        ...l
                    } = e;
                    return fe(ge, n).isSelected ? (0, r.createElement)(w.WV.span, (0, o.Z)({
                        "aria-hidden": !0
                    }, l, {
                        ref: t
                    })) : null
                })),
                be = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeSelect: n,
                        ...l
                    } = e;
                    return (0, r.createElement)(w.WV.div, (0, o.Z)({
                        "aria-hidden": !0
                    }, l, {
                        ref: t
                    }))
                }));

            function ye(e) {
                return "" === e || void 0 === e
            }
            const xe = (0, r.forwardRef)(((e, t) => {
                const {
                    value: n,
                    ...l
                } = e, a = (0, r.useRef)(null), i = (0, s.e)(t, a), c = (0, E.D)(n);
                return (0, r.useEffect)((() => {
                    const e = a.current,
                        t = window.HTMLSelectElement.prototype,
                        o = Object.getOwnPropertyDescriptor(t, "value").set;
                    if (c !== n && o) {
                        const t = new Event("change", {
                            bubbles: !0
                        });
                        o.call(e, n), e.dispatchEvent(t)
                    }
                }), [c, n]), (0, r.createElement)(S.T, {
                    asChild: !0
                }, (0, r.createElement)("select", (0, o.Z)({}, l, {
                    ref: i,
                    defaultValue: n
                })))
            }));

            function Ce(e) {
                const t = (0, y.W)(e),
                    n = (0, r.useRef)(""),
                    o = (0, r.useRef)(0),
                    l = (0, r.useCallback)((e => {
                        const r = n.current + e;
                        t(r),
                            function e(t) {
                                n.current = t, window.clearTimeout(o.current), "" !== t && (o.current = window.setTimeout((() => e("")), 1e3))
                            }(r)
                    }), [t]),
                    a = (0, r.useCallback)((() => {
                        n.current = "", window.clearTimeout(o.current)
                    }), []);
                return (0, r.useEffect)((() => () => window.clearTimeout(o.current)), []), [n, l, a]
            }

            function Ee(e, t, n) {
                const o = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
                    r = n ? e.indexOf(n) : -1;
                let l = (a = e, i = Math.max(r, 0), a.map(((e, t) => a[(i + t) % a.length])));
                var a, i;
                1 === o.length && (l = l.filter((e => e !== n)));
                const c = l.find((e => e.textValue.toLowerCase().startsWith(o.toLowerCase())));
                return c !== n ? c : void 0
            }
            xe.displayName = "BubbleSelect";
            const Se = A,
                _e = K,
                ke = U,
                Re = z,
                Me = q,
                Te = j,
                De = re,
                Ie = ce,
                Pe = ue,
                Ve = ve,
                Oe = he,
                We = we,
                Ne = be
        },
        57898: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return r
                }
            });
            var o = n(67294);

            function r(e) {
                const t = (0, o.useRef)({
                    value: e,
                    previous: e
                });
                return (0, o.useMemo)((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
            }
        }
    }
]);