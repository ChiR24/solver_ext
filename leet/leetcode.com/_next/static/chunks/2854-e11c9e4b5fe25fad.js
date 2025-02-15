"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2854], {
        12854: function(e, t, n) {
            n.d(t, {
                Dx: function() {
                    return ee
                },
                VY: function() {
                    return $
                },
                aV: function() {
                    return Q
                },
                dk: function() {
                    return te
                },
                fC: function() {
                    return H
                },
                h_: function() {
                    return L
                },
                jm: function() {
                    return q
                },
                p8: function() {
                    return C
                },
                x8: function() {
                    return ne
                },
                xz: function() {
                    return J
                }
            });
            var o = n(87462),
                r = n(67294),
                a = n(36206),
                l = n(28771),
                c = n(25360),
                u = n(91276),
                i = n(77342),
                s = n(46063),
                f = n(95420),
                d = n(42651),
                p = n(29115),
                g = n(75320),
                D = n(27552),
                _ = n(42026),
                m = n(23541),
                E = n(88426);
            const v = "Dialog",
                [R, C] = (0, c.b)(v),
                [h, M] = R(v),
                O = e => {
                    const {
                        __scopeDialog: t,
                        children: n,
                        open: o,
                        defaultOpen: a,
                        onOpenChange: l,
                        modal: c = !0
                    } = e, s = (0, r.useRef)(null), f = (0, r.useRef)(null), [d = !1, p] = (0, i.T)({
                        prop: o,
                        defaultProp: a,
                        onChange: l
                    });
                    return (0, r.createElement)(h, {
                        scope: t,
                        triggerRef: s,
                        contentRef: f,
                        contentId: (0, u.M)(),
                        titleId: (0, u.M)(),
                        descriptionId: (0, u.M)(),
                        open: d,
                        onOpenChange: p,
                        onOpenToggle: (0, r.useCallback)((() => p((e => !e))), [p]),
                        modal: c
                    }, n)
                },
                b = "DialogTrigger",
                w = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeDialog: n,
                        ...c
                    } = e, u = M(b, n), i = (0, l.e)(t, u.triggerRef);
                    return (0, r.createElement)(g.WV.button, (0, o.Z)({
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": u.open,
                        "aria-controls": u.contentId,
                        "data-state": X(u.open)
                    }, c, {
                        ref: i,
                        onClick: (0, a.M)(e.onClick, u.onOpenToggle)
                    }))
                })),
                F = "DialogPortal",
                [Z, k] = R(F, {
                    forceMount: void 0
                }),
                y = e => {
                    const {
                        __scopeDialog: t,
                        forceMount: n,
                        children: o,
                        container: a
                    } = e, l = M(F, t);
                    return (0, r.createElement)(Z, {
                        scope: t,
                        forceMount: n
                    }, r.Children.map(o, (e => (0, r.createElement)(p.z, {
                        present: n || l.open
                    }, (0, r.createElement)(d.h, {
                        asChild: !0,
                        container: a
                    }, e)))))
                },
                I = "DialogOverlay",
                P = (0, r.forwardRef)(((e, t) => {
                    const n = k(I, e.__scopeDialog),
                        {
                            forceMount: a = n.forceMount,
                            ...l
                        } = e,
                        c = M(I, e.__scopeDialog);
                    return c.modal ? (0, r.createElement)(p.z, {
                        present: a || c.open
                    }, (0, r.createElement)(A, (0, o.Z)({}, l, {
                        ref: t
                    }))) : null
                })),
                A = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeDialog: n,
                        ...a
                    } = e, l = M(I, n);
                    return (0, r.createElement)(_.Z, {
                        as: E.g7,
                        allowPinchZoom: !0,
                        shards: [l.contentRef]
                    }, (0, r.createElement)(g.WV.div, (0, o.Z)({
                        "data-state": X(l.open)
                    }, a, {
                        ref: t,
                        style: {
                            pointerEvents: "auto",
                            ...a.style
                        }
                    })))
                })),
                V = "DialogContent",
                W = (0, r.forwardRef)(((e, t) => {
                    const n = k(V, e.__scopeDialog),
                        {
                            forceMount: a = n.forceMount,
                            ...l
                        } = e,
                        c = M(V, e.__scopeDialog);
                    return (0, r.createElement)(p.z, {
                        present: a || c.open
                    }, c.modal ? (0, r.createElement)(T, (0, o.Z)({}, l, {
                        ref: t
                    })) : (0, r.createElement)(x, (0, o.Z)({}, l, {
                        ref: t
                    })))
                })),
                T = (0, r.forwardRef)(((e, t) => {
                    const n = M(V, e.__scopeDialog),
                        c = (0, r.useRef)(null),
                        u = (0, l.e)(t, n.contentRef, c);
                    return (0, r.useEffect)((() => {
                        const e = c.current;
                        if (e) return (0, m.Ry)(e)
                    }), []), (0, r.createElement)(z, (0, o.Z)({}, e, {
                        ref: u,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        })),
                        onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e => {
                            const t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        })),
                        onFocusOutside: (0, a.M)(e.onFocusOutside, (e => e.preventDefault()))
                    }))
                })),
                x = (0, r.forwardRef)(((e, t) => {
                    const n = M(V, e.__scopeDialog),
                        a = (0, r.useRef)(!1),
                        l = (0, r.useRef)(!1);
                    return (0, r.createElement)(z, (0, o.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var o, r;
                            (null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t), t.defaultPrevented) || (a.current || null === (r = n.triggerRef.current) || void 0 === r || r.focus(), t.preventDefault());
                            a.current = !1, l.current = !1
                        },
                        onInteractOutside: t => {
                            var o, r;
                            null === (o = e.onInteractOutside) || void 0 === o || o.call(e, t), t.defaultPrevented || (a.current = !0, "pointerdown" === t.detail.originalEvent.type && (l.current = !0));
                            const c = t.target;
                            (null === (r = n.triggerRef.current) || void 0 === r ? void 0 : r.contains(c)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && l.current && t.preventDefault()
                        }
                    }))
                })),
                z = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeDialog: n,
                        trapFocus: a,
                        onOpenAutoFocus: c,
                        onCloseAutoFocus: u,
                        ...i
                    } = e, d = M(V, n), p = (0, r.useRef)(null), g = (0, l.e)(t, p);
                    return (0, D.EW)(), (0, r.createElement)(r.Fragment, null, (0, r.createElement)(f.M, {
                        asChild: !0,
                        loop: !0,
                        trapped: a,
                        onMountAutoFocus: c,
                        onUnmountAutoFocus: u
                    }, (0, r.createElement)(s.XB, (0, o.Z)({
                        role: "dialog",
                        id: d.contentId,
                        "aria-describedby": d.descriptionId,
                        "aria-labelledby": d.titleId,
                        "data-state": X(d.open)
                    }, i, {
                        ref: g,
                        onDismiss: () => d.onOpenChange(!1)
                    }))), !1)
                })),
                N = "DialogTitle",
                j = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeDialog: n,
                        ...a
                    } = e, l = M(N, n);
                    return (0, r.createElement)(g.WV.h2, (0, o.Z)({
                        id: l.titleId
                    }, a, {
                        ref: t
                    }))
                })),
                B = "DialogDescription",
                K = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeDialog: n,
                        ...a
                    } = e, l = M(B, n);
                    return (0, r.createElement)(g.WV.p, (0, o.Z)({
                        id: l.descriptionId
                    }, a, {
                        ref: t
                    }))
                })),
                S = "DialogClose",
                U = (0, r.forwardRef)(((e, t) => {
                    const {
                        __scopeDialog: n,
                        ...l
                    } = e, c = M(S, n);
                    return (0, r.createElement)(g.WV.button, (0, o.Z)({
                        type: "button"
                    }, l, {
                        ref: t,
                        onClick: (0, a.M)(e.onClick, (() => c.onOpenChange(!1)))
                    }))
                }));

            function X(e) {
                return e ? "open" : "closed"
            }
            const Y = "DialogTitleWarning",
                [q, G] = (0, c.k)(Y, {
                    contentName: V,
                    titleName: N,
                    docsSlug: "dialog"
                }),
                H = O,
                J = w,
                L = y,
                Q = P,
                $ = W,
                ee = j,
                te = K,
                ne = U
        }
    }
]);