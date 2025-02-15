"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6419], {
        86419: function(e, o, t) {
            t.d(o, {
                VY: function() {
                    return B
                },
                fC: function() {
                    return N
                },
                h_: function() {
                    return Y
                },
                xz: function() {
                    return W
                }
            });
            var n = t(87462),
                r = t(67294),
                a = t(36206),
                c = t(28771),
                u = t(25360),
                s = t(46063),
                i = t(27552),
                l = t(95420),
                p = t(91276),
                d = t(80507),
                f = t(42651),
                v = t(29115),
                h = t(75320),
                g = t(88426),
                m = t(77342),
                E = t(23541),
                C = t(42026);
            const P = "Popover",
                [O, _] = (0, u.b)(P, [d.D7]),
                w = (0, d.D7)(),
                [b, F] = O(P),
                R = e => {
                    const {
                        __scopePopover: o,
                        children: t,
                        open: n,
                        defaultOpen: a,
                        onOpenChange: c,
                        modal: u = !1
                    } = e, s = w(o), i = (0, r.useRef)(null), [l, f] = (0, r.useState)(!1), [v = !1, h] = (0, m.T)({
                        prop: n,
                        defaultProp: a,
                        onChange: c
                    });
                    return (0, r.createElement)(d.fC, s, (0, r.createElement)(b, {
                        scope: o,
                        contentId: (0, p.M)(),
                        triggerRef: i,
                        open: v,
                        onOpenChange: h,
                        onOpenToggle: (0, r.useCallback)((() => h((e => !e))), [h]),
                        hasCustomAnchor: l,
                        onCustomAnchorAdd: (0, r.useCallback)((() => f(!0)), []),
                        onCustomAnchorRemove: (0, r.useCallback)((() => f(!1)), []),
                        modal: u
                    }, t))
                },
                D = "PopoverTrigger",
                A = (0, r.forwardRef)(((e, o) => {
                    const {
                        __scopePopover: t,
                        ...u
                    } = e, s = F(D, t), i = w(t), l = (0, c.e)(o, s.triggerRef), p = (0, r.createElement)(h.WV.button, (0, n.Z)({
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": s.open,
                        "aria-controls": s.contentId,
                        "data-state": V(s.open)
                    }, u, {
                        ref: l,
                        onClick: (0, a.M)(e.onClick, s.onOpenToggle)
                    }));
                    return s.hasCustomAnchor ? p : (0, r.createElement)(d.ee, (0, n.Z)({
                        asChild: !0
                    }, i), p)
                })),
                x = "PopoverPortal",
                [M, k] = O(x, {
                    forceMount: void 0
                }),
                y = e => {
                    const {
                        __scopePopover: o,
                        forceMount: t,
                        children: n,
                        container: a
                    } = e, c = F(x, o);
                    return (0, r.createElement)(M, {
                        scope: o,
                        forceMount: t
                    }, (0, r.createElement)(v.z, {
                        present: t || c.open
                    }, (0, r.createElement)(f.h, {
                        asChild: !0,
                        container: a
                    }, n)))
                },
                Z = "PopoverContent",
                I = (0, r.forwardRef)(((e, o) => {
                    const t = k(Z, e.__scopePopover),
                        {
                            forceMount: a = t.forceMount,
                            ...c
                        } = e,
                        u = F(Z, e.__scopePopover);
                    return (0, r.createElement)(v.z, {
                        present: a || u.open
                    }, u.modal ? (0, r.createElement)(T, (0, n.Z)({}, c, {
                        ref: o
                    })) : (0, r.createElement)(z, (0, n.Z)({}, c, {
                        ref: o
                    })))
                })),
                T = (0, r.forwardRef)(((e, o) => {
                    const t = F(Z, e.__scopePopover),
                        u = (0, r.useRef)(null),
                        s = (0, c.e)(o, u),
                        i = (0, r.useRef)(!1);
                    return (0, r.useEffect)((() => {
                        const e = u.current;
                        if (e) return (0, E.Ry)(e)
                    }), []), (0, r.createElement)(C.Z, {
                        as: g.g7,
                        allowPinchZoom: !0
                    }, (0, r.createElement)(K, (0, n.Z)({}, e, {
                        ref: s,
                        trapFocus: t.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e => {
                            var o;
                            e.preventDefault(), i.current || null === (o = t.triggerRef.current) || void 0 === o || o.focus()
                        })),
                        onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e => {
                            const o = e.detail.originalEvent,
                                t = 0 === o.button && !0 === o.ctrlKey,
                                n = 2 === o.button || t;
                            i.current = n
                        }), {
                            checkForDefaultPrevented: !1
                        }),
                        onFocusOutside: (0, a.M)(e.onFocusOutside, (e => e.preventDefault()), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                })),
                z = (0, r.forwardRef)(((e, o) => {
                    const t = F(Z, e.__scopePopover),
                        a = (0, r.useRef)(!1),
                        c = (0, r.useRef)(!1);
                    return (0, r.createElement)(K, (0, n.Z)({}, e, {
                        ref: o,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: o => {
                            var n, r;
                            (null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, o), o.defaultPrevented) || (a.current || null === (r = t.triggerRef.current) || void 0 === r || r.focus(), o.preventDefault());
                            a.current = !1, c.current = !1
                        },
                        onInteractOutside: o => {
                            var n, r;
                            null === (n = e.onInteractOutside) || void 0 === n || n.call(e, o), o.defaultPrevented || (a.current = !0, "pointerdown" === o.detail.originalEvent.type && (c.current = !0));
                            const u = o.target;
                            (null === (r = t.triggerRef.current) || void 0 === r ? void 0 : r.contains(u)) && o.preventDefault(), "focusin" === o.detail.originalEvent.type && c.current && o.preventDefault()
                        }
                    }))
                })),
                K = (0, r.forwardRef)(((e, o) => {
                    const {
                        __scopePopover: t,
                        trapFocus: a,
                        onOpenAutoFocus: c,
                        onCloseAutoFocus: u,
                        disableOutsidePointerEvents: p,
                        onEscapeKeyDown: f,
                        onPointerDownOutside: v,
                        onFocusOutside: h,
                        onInteractOutside: g,
                        ...m
                    } = e, E = F(Z, t), C = w(t);
                    return (0, i.EW)(), (0, r.createElement)(l.M, {
                        asChild: !0,
                        loop: !0,
                        trapped: a,
                        onMountAutoFocus: c,
                        onUnmountAutoFocus: u
                    }, (0, r.createElement)(s.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: p,
                        onInteractOutside: g,
                        onEscapeKeyDown: f,
                        onPointerDownOutside: v,
                        onFocusOutside: h,
                        onDismiss: () => E.onOpenChange(!1)
                    }, (0, r.createElement)(d.VY, (0, n.Z)({
                        "data-state": V(E.open),
                        role: "dialog",
                        id: E.contentId
                    }, C, m, {
                        ref: o,
                        style: { ...m.style,
                            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))))
                }));

            function V(e) {
                return e ? "open" : "closed"
            }
            const N = R,
                W = A,
                Y = y,
                B = I
        }
    }
]);