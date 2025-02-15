"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [630], {
        15948: function(e, r, t) {
            t.d(r, {
                Z5: function() {
                    return In
                },
                _l: function() {
                    return ti
                },
                bK: function() {
                    return li
                }
            });
            var n = t(67294),
                i = t(94578),
                a = t(87462),
                o = t(14890),
                l = t(14416),
                c = t(51163),
                u = t(99343),
                d = t(30845),
                s = t(5729),
                p = t(73935);

            function f(e, r) {}
            f.bind(null, "warn"), f.bind(null, "error");

            function g() {}

            function v(e, r, t) {
                var n = r.map((function(r) {
                    var n = function(e, r) {
                        return (0, a.Z)({}, e, {}, r)
                    }(t, r.options);
                    return e.addEventListener(r.eventName, r.fn, n),
                        function() {
                            e.removeEventListener(r.eventName, r.fn, n)
                        }
                }));
                return function() {
                    n.forEach((function(e) {
                        e()
                    }))
                }
            }
            var m = "Invariant failed";

            function b(e) {
                this.message = e
            }

            function h(e, r) {
                if (!e) throw new b(m)
            }
            b.prototype.toString = function() {
                return this.message
            };
            var I = function(e) {
                    function r() {
                        for (var r, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return (r = e.call.apply(e, [this].concat(n)) || this).callbacks = null, r.unbind = g, r.onWindowError = function(e) {
                            var t = r.getCallbacks();
                            t.isDragging() && t.tryAbort(), e.error instanceof b && e.preventDefault()
                        }, r.getCallbacks = function() {
                            if (!r.callbacks) throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
                            return r.callbacks
                        }, r.setCallbacks = function(e) {
                            r.callbacks = e
                        }, r
                    }(0, i.Z)(r, e);
                    var t = r.prototype;
                    return t.componentDidMount = function() {
                        this.unbind = v(window, [{
                            eventName: "error",
                            fn: this.onWindowError
                        }])
                    }, t.componentDidCatch = function(e) {
                        if (!(e instanceof b)) throw e;
                        this.setState({})
                    }, t.componentWillUnmount = function() {
                        this.unbind()
                    }, t.render = function() {
                        return this.props.children(this.setCallbacks)
                    }, r
                }(n.Component),
                y = function(e) {
                    return e + 1
                },
                D = function(e, r) {
                    var t = e.droppableId === r.droppableId,
                        n = y(e.index),
                        i = y(r.index);
                    return t ? "\n      You have moved the item from position " + n + "\n      to position " + i + "\n    " : "\n    You have moved the item from position " + n + "\n    in list " + e.droppableId + "\n    to list " + r.droppableId + "\n    in position " + i + "\n  "
                },
                x = function(e, r, t) {
                    return r.droppableId === t.droppableId ? "\n      The item " + e + "\n      has been combined with " + t.draggableId : "\n      The item " + e + "\n      in list " + r.droppableId + "\n      has been combined with " + t.draggableId + "\n      in list " + t.droppableId + "\n    "
                },
                E = function(e) {
                    return "\n  The item has returned to its starting position\n  of " + y(e.index) + "\n"
                },
                w = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
                C = function(e) {
                    return "\n  You have lifted an item in position " + y(e.source.index) + "\n"
                },
                A = function(e) {
                    var r = e.destination;
                    if (r) return D(e.source, r);
                    var t = e.combine;
                    return t ? x(e.draggableId, e.source, t) : "You are over an area that cannot be dropped on"
                },
                B = function(e) {
                    if ("CANCEL" === e.reason) return "\n      Movement cancelled.\n      " + E(e.source) + "\n    ";
                    var r = e.destination,
                        t = e.combine;
                    return r ? "\n      You have dropped the item.\n      " + D(e.source, r) + "\n    " : t ? "\n      You have dropped the item.\n      " + x(e.draggableId, e.source, t) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + E(e.source) + "\n  "
                },
                R = {
                    x: 0,
                    y: 0
                },
                N = function(e, r) {
                    return {
                        x: e.x + r.x,
                        y: e.y + r.y
                    }
                },
                S = function(e, r) {
                    return {
                        x: e.x - r.x,
                        y: e.y - r.y
                    }
                },
                P = function(e, r) {
                    return e.x === r.x && e.y === r.y
                },
                O = function(e) {
                    return {
                        x: 0 !== e.x ? -e.x : 0,
                        y: 0 !== e.y ? -e.y : 0
                    }
                },
                L = function(e, r, t) {
                    var n;
                    return void 0 === t && (t = 0), (n = {})[e] = r, n["x" === e ? "y" : "x"] = t, n
                },
                T = function(e, r) {
                    return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2))
                },
                G = function(e, r) {
                    return Math.min.apply(Math, r.map((function(r) {
                        return T(e, r)
                    })))
                },
                M = function(e) {
                    return function(r) {
                        return {
                            x: e(r.x),
                            y: e(r.y)
                        }
                    }
                },
                _ = function(e, r) {
                    return {
                        top: e.top + r.y,
                        left: e.left + r.x,
                        bottom: e.bottom + r.y,
                        right: e.right + r.x
                    }
                },
                F = function(e) {
                    return [{
                        x: e.left,
                        y: e.top
                    }, {
                        x: e.right,
                        y: e.top
                    }, {
                        x: e.left,
                        y: e.bottom
                    }, {
                        x: e.right,
                        y: e.bottom
                    }]
                },
                k = function(e, r) {
                    return r && r.shouldClipSubject ? function(e, r) {
                        var t = (0, u.Dz)({
                            top: Math.max(r.top, e.top),
                            right: Math.min(r.right, e.right),
                            bottom: Math.min(r.bottom, e.bottom),
                            left: Math.max(r.left, e.left)
                        });
                        return t.width <= 0 || t.height <= 0 ? null : t
                    }(r.pageMarginBox, e) : (0, u.Dz)(e)
                },
                W = function(e) {
                    var r = e.page,
                        t = e.withPlaceholder,
                        n = e.axis,
                        i = e.frame,
                        o = function(e, r) {
                            return r ? _(e, r.scroll.diff.displacement) : e
                        }(r.marginBox, i),
                        l = function(e, r, t) {
                            var n;
                            return t && t.increasedBy ? (0, a.Z)({}, e, ((n = {})[r.end] = e[r.end] + t.increasedBy[r.line], n)) : e
                        }(o, n, t);
                    return {
                        page: r,
                        withPlaceholder: t,
                        active: k(l, i)
                    }
                },
                U = function(e, r) {
                    e.frame || h(!1);
                    var t = e.frame,
                        n = S(r, t.scroll.initial),
                        i = O(n),
                        o = (0, a.Z)({}, t, {
                            scroll: {
                                initial: t.scroll.initial,
                                current: r,
                                diff: {
                                    value: n,
                                    displacement: i
                                },
                                max: t.scroll.max
                            }
                        }),
                        l = W({
                            page: e.subject.page,
                            withPlaceholder: e.subject.withPlaceholder,
                            axis: e.axis,
                            frame: o
                        });
                    return (0, a.Z)({}, e, {
                        frame: o,
                        subject: l
                    })
                };

            function H(e) {
                return Object.values ? Object.values(e) : Object.keys(e).map((function(r) {
                    return e[r]
                }))
            }

            function Y(e, r) {
                if (e.findIndex) return e.findIndex(r);
                for (var t = 0; t < e.length; t++)
                    if (r(e[t])) return t;
                return -1
            }

            function Z(e, r) {
                if (e.find) return e.find(r);
                var t = Y(e, r);
                return -1 !== t ? e[t] : void 0
            }

            function j(e) {
                return Array.prototype.slice.call(e)
            }
            var V = (0, d.default)((function(e) {
                    return e.reduce((function(e, r) {
                        return e[r.descriptor.id] = r, e
                    }), {})
                })),
                z = (0, d.default)((function(e) {
                    return e.reduce((function(e, r) {
                        return e[r.descriptor.id] = r, e
                    }), {})
                })),
                q = (0, d.default)((function(e) {
                    return H(e)
                })),
                J = (0, d.default)((function(e) {
                    return H(e)
                })),
                X = (0, d.default)((function(e, r) {
                    var t = J(r).filter((function(r) {
                        return e === r.descriptor.droppableId
                    })).sort((function(e, r) {
                        return e.descriptor.index - r.descriptor.index
                    }));
                    return t
                }));

            function K(e) {
                return e.at && "REORDER" === e.at.type ? e.at.destination : null
            }

            function $(e) {
                return e.at && "COMBINE" === e.at.type ? e.at.combine : null
            }
            var Q = (0, d.default)((function(e, r) {
                    return r.filter((function(r) {
                        return r.descriptor.id !== e.descriptor.id
                    }))
                })),
                ee = function(e, r) {
                    return e.descriptor.droppableId === r.descriptor.id
                },
                re = {
                    point: R,
                    value: 0
                },
                te = {
                    invisible: {},
                    visible: {},
                    all: []
                },
                ne = {
                    displaced: te,
                    displacedBy: re,
                    at: null
                },
                ie = function(e, r) {
                    return function(t) {
                        return e <= t && t <= r
                    }
                },
                ae = function(e) {
                    var r = ie(e.top, e.bottom),
                        t = ie(e.left, e.right);
                    return function(n) {
                        if (r(n.top) && r(n.bottom) && t(n.left) && t(n.right)) return !0;
                        var i = r(n.top) || r(n.bottom),
                            a = t(n.left) || t(n.right);
                        if (i && a) return !0;
                        var o = n.top < e.top && n.bottom > e.bottom,
                            l = n.left < e.left && n.right > e.right;
                        return !(!o || !l) || (o && a || l && i)
                    }
                },
                oe = function(e) {
                    var r = ie(e.top, e.bottom),
                        t = ie(e.left, e.right);
                    return function(e) {
                        return r(e.top) && r(e.bottom) && t(e.left) && t(e.right)
                    }
                },
                le = {
                    direction: "vertical",
                    line: "y",
                    crossAxisLine: "x",
                    start: "top",
                    end: "bottom",
                    size: "height",
                    crossAxisStart: "left",
                    crossAxisEnd: "right",
                    crossAxisSize: "width"
                },
                ce = {
                    direction: "horizontal",
                    line: "x",
                    crossAxisLine: "y",
                    start: "left",
                    end: "right",
                    size: "width",
                    crossAxisStart: "top",
                    crossAxisEnd: "bottom",
                    crossAxisSize: "height"
                },
                ue = function(e) {
                    var r = e.target,
                        t = e.destination,
                        n = e.viewport,
                        i = e.withDroppableDisplacement,
                        a = e.isVisibleThroughFrameFn,
                        o = i ? function(e, r) {
                            var t = r.frame ? r.frame.scroll.diff.displacement : R;
                            return _(e, t)
                        }(r, t) : r;
                    return function(e, r, t) {
                        return !!r.subject.active && t(r.subject.active)(e)
                    }(o, t, a) && function(e, r, t) {
                        return t(r)(e)
                    }(o, n, a)
                },
                de = function(e) {
                    return ue((0, a.Z)({}, e, {
                        isVisibleThroughFrameFn: ae
                    }))
                },
                se = function(e) {
                    return ue((0, a.Z)({}, e, {
                        isVisibleThroughFrameFn: oe
                    }))
                };

            function pe(e) {
                var r = e.afterDragging,
                    t = e.destination,
                    n = e.displacedBy,
                    i = e.viewport,
                    a = e.forceShouldAnimate,
                    o = e.last;
                return r.reduce((function(e, r) {
                    var l = function(e, r) {
                            var t = e.page.marginBox,
                                n = {
                                    top: r.point.y,
                                    right: 0,
                                    bottom: 0,
                                    left: r.point.x
                                };
                            return (0, u.Dz)((0, u.jn)(t, n))
                        }(r, n),
                        c = r.descriptor.id;
                    if (e.all.push(c), !de({
                            target: l,
                            destination: t,
                            viewport: i,
                            withDroppableDisplacement: !0
                        })) return e.invisible[r.descriptor.id] = !0, e;
                    var d = function(e, r, t) {
                            if ("boolean" === typeof t) return t;
                            if (!r) return !0;
                            var n = r.invisible,
                                i = r.visible;
                            if (n[e]) return !1;
                            var a = i[e];
                            return !a || a.shouldAnimate
                        }(c, o, a),
                        s = {
                            draggableId: c,
                            shouldAnimate: d
                        };
                    return e.visible[c] = s, e
                }), {
                    all: [],
                    visible: {},
                    invisible: {}
                })
            }

            function fe(e) {
                var r = e.insideDestination,
                    t = e.inHomeList,
                    n = e.displacedBy,
                    i = e.destination,
                    a = function(e, r) {
                        if (!e.length) return 0;
                        var t = e[e.length - 1].descriptor.index;
                        return r.inHomeList ? t : t + 1
                    }(r, {
                        inHomeList: t
                    });
                return {
                    displaced: te,
                    displacedBy: n,
                    at: {
                        type: "REORDER",
                        destination: {
                            droppableId: i.descriptor.id,
                            index: a
                        }
                    }
                }
            }

            function ge(e) {
                var r = e.draggable,
                    t = e.insideDestination,
                    n = e.destination,
                    i = e.viewport,
                    a = e.displacedBy,
                    o = e.last,
                    l = e.index,
                    c = e.forceShouldAnimate,
                    u = ee(r, n);
                if (null == l) return fe({
                    insideDestination: t,
                    inHomeList: u,
                    displacedBy: a,
                    destination: n
                });
                var d = Z(t, (function(e) {
                    return e.descriptor.index === l
                }));
                if (!d) return fe({
                    insideDestination: t,
                    inHomeList: u,
                    displacedBy: a,
                    destination: n
                });
                var s = Q(r, t),
                    p = t.indexOf(d);
                return {
                    displaced: pe({
                        afterDragging: s.slice(p),
                        destination: n,
                        displacedBy: a,
                        last: o,
                        viewport: i.frame,
                        forceShouldAnimate: c
                    }),
                    displacedBy: a,
                    at: {
                        type: "REORDER",
                        destination: {
                            droppableId: n.descriptor.id,
                            index: l
                        }
                    }
                }
            }

            function ve(e, r) {
                return Boolean(r.effected[e])
            }
            var me = function(e) {
                    var r = e.isMovingForward,
                        t = e.isInHomeList,
                        n = e.draggable,
                        i = e.draggables,
                        a = e.destination,
                        o = e.insideDestination,
                        l = e.previousImpact,
                        c = e.viewport,
                        u = e.afterCritical,
                        d = l.at;
                    if (d || h(!1), "REORDER" === d.type) {
                        var s = function(e) {
                            var r = e.isMovingForward,
                                t = e.isInHomeList,
                                n = e.insideDestination,
                                i = e.location;
                            if (!n.length) return null;
                            var a = i.index,
                                o = r ? a + 1 : a - 1,
                                l = n[0].descriptor.index,
                                c = n[n.length - 1].descriptor.index;
                            return o < l || o > (t ? c : c + 1) ? null : o
                        }({
                            isMovingForward: r,
                            isInHomeList: t,
                            location: d.destination,
                            insideDestination: o
                        });
                        return null == s ? null : ge({
                            draggable: n,
                            insideDestination: o,
                            destination: a,
                            viewport: c,
                            last: l.displaced,
                            displacedBy: l.displacedBy,
                            index: s
                        })
                    }
                    var p = function(e) {
                        var r = e.isMovingForward,
                            t = e.destination,
                            n = e.draggables,
                            i = e.combine,
                            a = e.afterCritical;
                        if (!t.isCombineEnabled) return null;
                        var o = i.draggableId,
                            l = n[o].descriptor.index;
                        return ve(o, a) ? r ? l : l - 1 : r ? l + 1 : l
                    }({
                        isMovingForward: r,
                        destination: a,
                        displaced: l.displaced,
                        draggables: i,
                        combine: d.combine,
                        afterCritical: u
                    });
                    return null == p ? null : ge({
                        draggable: n,
                        insideDestination: o,
                        destination: a,
                        viewport: c,
                        last: l.displaced,
                        displacedBy: l.displacedBy,
                        index: p
                    })
                },
                be = function(e) {
                    var r = e.afterCritical,
                        t = e.impact,
                        n = e.draggables,
                        i = $(t);
                    i || h(!1);
                    var a = i.draggableId,
                        o = n[a].page.borderBox.center,
                        l = function(e) {
                            var r = e.displaced,
                                t = e.afterCritical,
                                n = e.combineWith,
                                i = e.displacedBy,
                                a = Boolean(r.visible[n] || r.invisible[n]);
                            return ve(n, t) ? a ? R : O(i.point) : a ? i.point : R
                        }({
                            displaced: t.displaced,
                            afterCritical: r,
                            combineWith: a,
                            displacedBy: t.displacedBy
                        });
                    return N(o, l)
                },
                he = function(e, r) {
                    return r.margin[e.start] + r.borderBox[e.size] / 2
                },
                Ie = function(e, r, t) {
                    return r[e.crossAxisStart] + t.margin[e.crossAxisStart] + t.borderBox[e.crossAxisSize] / 2
                },
                ye = function(e) {
                    var r = e.axis,
                        t = e.moveRelativeTo,
                        n = e.isMoving;
                    return L(r.line, t.marginBox[r.end] + he(r, n), Ie(r, t.marginBox, n))
                },
                De = function(e) {
                    var r = e.axis,
                        t = e.moveRelativeTo,
                        n = e.isMoving;
                    return L(r.line, t.marginBox[r.start] - function(e, r) {
                        return r.margin[e.end] + r.borderBox[e.size] / 2
                    }(r, n), Ie(r, t.marginBox, n))
                },
                xe = function(e) {
                    var r = e.impact,
                        t = e.draggable,
                        n = e.draggables,
                        i = e.droppable,
                        a = e.afterCritical,
                        o = X(i.descriptor.id, n),
                        l = t.page,
                        c = i.axis;
                    if (!o.length) return function(e) {
                        var r = e.axis,
                            t = e.moveInto,
                            n = e.isMoving;
                        return L(r.line, t.contentBox[r.start] + he(r, n), Ie(r, t.contentBox, n))
                    }({
                        axis: c,
                        moveInto: i.page,
                        isMoving: l
                    });
                    var d = r.displaced,
                        s = r.displacedBy,
                        p = d.all[0];
                    if (p) {
                        var f = n[p];
                        if (ve(p, a)) return De({
                            axis: c,
                            moveRelativeTo: f.page,
                            isMoving: l
                        });
                        var g = (0, u.cv)(f.page, s.point);
                        return De({
                            axis: c,
                            moveRelativeTo: g,
                            isMoving: l
                        })
                    }
                    var v = o[o.length - 1];
                    if (v.descriptor.id === t.descriptor.id) return l.borderBox.center;
                    if (ve(v.descriptor.id, a)) {
                        var m = (0, u.cv)(v.page, O(a.displacedBy.point));
                        return ye({
                            axis: c,
                            moveRelativeTo: m,
                            isMoving: l
                        })
                    }
                    return ye({
                        axis: c,
                        moveRelativeTo: v.page,
                        isMoving: l
                    })
                },
                Ee = function(e, r) {
                    var t = e.frame;
                    return t ? N(r, t.scroll.diff.displacement) : r
                },
                we = function(e) {
                    var r = function(e) {
                            var r = e.impact,
                                t = e.draggable,
                                n = e.droppable,
                                i = e.draggables,
                                a = e.afterCritical,
                                o = t.page.borderBox.center,
                                l = r.at;
                            return n && l ? "REORDER" === l.type ? xe({
                                impact: r,
                                draggable: t,
                                draggables: i,
                                droppable: n,
                                afterCritical: a
                            }) : be({
                                impact: r,
                                draggables: i,
                                afterCritical: a
                            }) : o
                        }(e),
                        t = e.droppable;
                    return t ? Ee(t, r) : r
                },
                Ce = function(e, r) {
                    var t = S(r, e.scroll.initial),
                        n = O(t);
                    return {
                        frame: (0, u.Dz)({
                            top: r.y,
                            bottom: r.y + e.frame.height,
                            left: r.x,
                            right: r.x + e.frame.width
                        }),
                        scroll: {
                            initial: e.scroll.initial,
                            max: e.scroll.max,
                            current: r,
                            diff: {
                                value: t,
                                displacement: n
                            }
                        }
                    }
                };

            function Ae(e, r) {
                return e.map((function(e) {
                    return r[e]
                }))
            }
            var Be = function(e) {
                    var r = e.pageBorderBoxCenter,
                        t = e.draggable,
                        n = function(e, r) {
                            return N(e.scroll.diff.displacement, r)
                        }(e.viewport, r),
                        i = S(n, t.page.borderBox.center);
                    return N(t.client.borderBox.center, i)
                },
                Re = function(e) {
                    var r = e.draggable,
                        t = e.destination,
                        n = e.newPageBorderBoxCenter,
                        i = e.viewport,
                        o = e.withDroppableDisplacement,
                        l = e.onlyOnMainAxis,
                        c = void 0 !== l && l,
                        u = S(n, r.page.borderBox.center),
                        d = {
                            target: _(r.page.borderBox, u),
                            destination: t,
                            withDroppableDisplacement: o,
                            viewport: i
                        };
                    return c ? function(e) {
                        return ue((0, a.Z)({}, e, {
                            isVisibleThroughFrameFn: (r = e.destination.axis, function(e) {
                                var t = ie(e.top, e.bottom),
                                    n = ie(e.left, e.right);
                                return function(e) {
                                    return r === le ? t(e.top) && t(e.bottom) : n(e.left) && n(e.right)
                                }
                            })
                        }));
                        var r
                    }(d) : se(d)
                },
                Ne = function(e) {
                    var r = e.isMovingForward,
                        t = e.draggable,
                        n = e.destination,
                        i = e.draggables,
                        o = e.previousImpact,
                        l = e.viewport,
                        c = e.previousPageBorderBoxCenter,
                        u = e.previousClientSelection,
                        d = e.afterCritical;
                    if (!n.isEnabled) return null;
                    var s = X(n.descriptor.id, i),
                        p = ee(t, n),
                        f = function(e) {
                            var r = e.isMovingForward,
                                t = e.draggable,
                                n = e.destination,
                                i = e.insideDestination,
                                o = e.previousImpact;
                            if (!n.isCombineEnabled) return null;
                            if (!K(o)) return null;

                            function l(e) {
                                var r = {
                                    type: "COMBINE",
                                    combine: {
                                        draggableId: e,
                                        droppableId: n.descriptor.id
                                    }
                                };
                                return (0, a.Z)({}, o, {
                                    at: r
                                })
                            }
                            var c = o.displaced.all,
                                u = c.length ? c[0] : null;
                            if (r) return u ? l(u) : null;
                            var d = Q(t, i);
                            if (!u) return d.length ? l(d[d.length - 1].descriptor.id) : null;
                            var s = Y(d, (function(e) {
                                return e.descriptor.id === u
                            })); - 1 === s && h(!1);
                            var p = s - 1;
                            return p < 0 ? null : l(d[p].descriptor.id)
                        }({
                            isMovingForward: r,
                            draggable: t,
                            destination: n,
                            insideDestination: s,
                            previousImpact: o
                        }) || me({
                            isMovingForward: r,
                            isInHomeList: p,
                            draggable: t,
                            draggables: i,
                            destination: n,
                            insideDestination: s,
                            previousImpact: o,
                            viewport: l,
                            afterCritical: d
                        });
                    if (!f) return null;
                    var g = we({
                        impact: f,
                        draggable: t,
                        droppable: n,
                        draggables: i,
                        afterCritical: d
                    });
                    if (Re({
                            draggable: t,
                            destination: n,
                            newPageBorderBoxCenter: g,
                            viewport: l.frame,
                            withDroppableDisplacement: !1,
                            onlyOnMainAxis: !0
                        })) return {
                        clientSelection: Be({
                            pageBorderBoxCenter: g,
                            draggable: t,
                            viewport: l
                        }),
                        impact: f,
                        scrollJumpRequest: null
                    };
                    var v = S(g, c),
                        m = function(e) {
                            var r = e.impact,
                                t = e.viewport,
                                n = e.destination,
                                i = e.draggables,
                                o = e.maxScrollChange,
                                l = Ce(t, N(t.scroll.current, o)),
                                c = n.frame ? U(n, N(n.frame.scroll.current, o)) : n,
                                u = r.displaced,
                                d = pe({
                                    afterDragging: Ae(u.all, i),
                                    destination: n,
                                    displacedBy: r.displacedBy,
                                    viewport: l.frame,
                                    last: u,
                                    forceShouldAnimate: !1
                                }),
                                s = pe({
                                    afterDragging: Ae(u.all, i),
                                    destination: c,
                                    displacedBy: r.displacedBy,
                                    viewport: t.frame,
                                    last: u,
                                    forceShouldAnimate: !1
                                }),
                                p = {},
                                f = {},
                                g = [u, d, s];
                            return u.all.forEach((function(e) {
                                var r = function(e, r) {
                                    for (var t = 0; t < r.length; t++) {
                                        var n = r[t].visible[e];
                                        if (n) return n
                                    }
                                    return null
                                }(e, g);
                                r ? f[e] = r : p[e] = !0
                            })), (0, a.Z)({}, r, {
                                displaced: {
                                    all: u.all,
                                    invisible: p,
                                    visible: f
                                }
                            })
                        }({
                            impact: f,
                            viewport: l,
                            destination: n,
                            draggables: i,
                            maxScrollChange: v
                        });
                    return {
                        clientSelection: u,
                        impact: m,
                        scrollJumpRequest: v
                    }
                },
                Se = function(e) {
                    var r = e.subject.active;
                    return r || h(!1), r
                },
                Pe = function(e, r) {
                    var t = e.page.borderBox.center;
                    return ve(e.descriptor.id, r) ? S(t, r.displacedBy.point) : t
                },
                Oe = function(e, r) {
                    var t = e.page.borderBox;
                    return ve(e.descriptor.id, r) ? _(t, O(r.displacedBy.point)) : t
                },
                Le = (0, d.default)((function(e, r) {
                    var t = r[e.line];
                    return {
                        value: t,
                        point: L(e.line, t)
                    }
                })),
                Te = function(e, r) {
                    return (0, a.Z)({}, e, {
                        scroll: (0, a.Z)({}, e.scroll, {
                            max: r
                        })
                    })
                },
                Ge = function(e, r, t) {
                    var n = e.frame;
                    ee(r, e) && h(!1), e.subject.withPlaceholder && h(!1);
                    var i = Le(e.axis, r.displaceBy).point,
                        o = function(e, r, t) {
                            var n = e.axis;
                            if ("virtual" === e.descriptor.mode) return L(n.line, r[n.line]);
                            var i = e.subject.page.contentBox[n.size],
                                a = X(e.descriptor.id, t).reduce((function(e, r) {
                                    return e + r.client.marginBox[n.size]
                                }), 0) + r[n.line] - i;
                            return a <= 0 ? null : L(n.line, a)
                        }(e, i, t),
                        l = {
                            placeholderSize: i,
                            increasedBy: o,
                            oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
                        };
                    if (!n) {
                        var c = W({
                            page: e.subject.page,
                            withPlaceholder: l,
                            axis: e.axis,
                            frame: e.frame
                        });
                        return (0, a.Z)({}, e, {
                            subject: c
                        })
                    }
                    var u = o ? N(n.scroll.max, o) : n.scroll.max,
                        d = Te(n, u),
                        s = W({
                            page: e.subject.page,
                            withPlaceholder: l,
                            axis: e.axis,
                            frame: d
                        });
                    return (0, a.Z)({}, e, {
                        subject: s,
                        frame: d
                    })
                },
                Me = function(e) {
                    var r = e.isMovingForward,
                        t = e.previousPageBorderBoxCenter,
                        n = e.draggable,
                        i = e.isOver,
                        a = e.draggables,
                        o = e.droppables,
                        l = e.viewport,
                        c = e.afterCritical,
                        u = function(e) {
                            var r = e.isMovingForward,
                                t = e.pageBorderBoxCenter,
                                n = e.source,
                                i = e.droppables,
                                a = e.viewport,
                                o = n.subject.active;
                            if (!o) return null;
                            var l = n.axis,
                                c = ie(o[l.start], o[l.end]),
                                u = q(i).filter((function(e) {
                                    return e !== n
                                })).filter((function(e) {
                                    return e.isEnabled
                                })).filter((function(e) {
                                    return Boolean(e.subject.active)
                                })).filter((function(e) {
                                    return ae(a.frame)(Se(e))
                                })).filter((function(e) {
                                    var t = Se(e);
                                    return r ? o[l.crossAxisEnd] < t[l.crossAxisEnd] : t[l.crossAxisStart] < o[l.crossAxisStart]
                                })).filter((function(e) {
                                    var r = Se(e),
                                        t = ie(r[l.start], r[l.end]);
                                    return c(r[l.start]) || c(r[l.end]) || t(o[l.start]) || t(o[l.end])
                                })).sort((function(e, t) {
                                    var n = Se(e)[l.crossAxisStart],
                                        i = Se(t)[l.crossAxisStart];
                                    return r ? n - i : i - n
                                })).filter((function(e, r, t) {
                                    return Se(e)[l.crossAxisStart] === Se(t[0])[l.crossAxisStart]
                                }));
                            if (!u.length) return null;
                            if (1 === u.length) return u[0];
                            var d = u.filter((function(e) {
                                return ie(Se(e)[l.start], Se(e)[l.end])(t[l.line])
                            }));
                            return 1 === d.length ? d[0] : d.length > 1 ? d.sort((function(e, r) {
                                return Se(e)[l.start] - Se(r)[l.start]
                            }))[0] : u.sort((function(e, r) {
                                var n = G(t, F(Se(e))),
                                    i = G(t, F(Se(r)));
                                return n !== i ? n - i : Se(e)[l.start] - Se(r)[l.start]
                            }))[0]
                        }({
                            isMovingForward: r,
                            pageBorderBoxCenter: t,
                            source: i,
                            droppables: o,
                            viewport: l
                        });
                    if (!u) return null;
                    var d = X(u.descriptor.id, a),
                        s = function(e) {
                            var r = e.pageBorderBoxCenter,
                                t = e.viewport,
                                n = e.destination,
                                i = e.insideDestination,
                                a = e.afterCritical,
                                o = i.filter((function(e) {
                                    return se({
                                        target: Oe(e, a),
                                        destination: n,
                                        viewport: t.frame,
                                        withDroppableDisplacement: !0
                                    })
                                })).sort((function(e, t) {
                                    var i = T(r, Ee(n, Pe(e, a))),
                                        o = T(r, Ee(n, Pe(t, a)));
                                    return i < o ? -1 : o < i ? 1 : e.descriptor.index - t.descriptor.index
                                }));
                            return o[0] || null
                        }({
                            pageBorderBoxCenter: t,
                            viewport: l,
                            destination: u,
                            insideDestination: d,
                            afterCritical: c
                        }),
                        p = function(e) {
                            var r = e.previousPageBorderBoxCenter,
                                t = e.moveRelativeTo,
                                n = e.insideDestination,
                                i = e.draggable,
                                a = e.draggables,
                                o = e.destination,
                                l = e.viewport,
                                c = e.afterCritical;
                            if (!t) {
                                if (n.length) return null;
                                var u = {
                                        displaced: te,
                                        displacedBy: re,
                                        at: {
                                            type: "REORDER",
                                            destination: {
                                                droppableId: o.descriptor.id,
                                                index: 0
                                            }
                                        }
                                    },
                                    d = we({
                                        impact: u,
                                        draggable: i,
                                        droppable: o,
                                        draggables: a,
                                        afterCritical: c
                                    }),
                                    s = ee(i, o) ? o : Ge(o, i, a);
                                return Re({
                                    draggable: i,
                                    destination: s,
                                    newPageBorderBoxCenter: d,
                                    viewport: l.frame,
                                    withDroppableDisplacement: !1,
                                    onlyOnMainAxis: !0
                                }) ? u : null
                            }
                            var p = Boolean(r[o.axis.line] <= t.page.borderBox.center[o.axis.line]),
                                f = function() {
                                    var e = t.descriptor.index;
                                    return t.descriptor.id === i.descriptor.id || p ? e : e + 1
                                }(),
                                g = Le(o.axis, i.displaceBy);
                            return ge({
                                draggable: i,
                                insideDestination: n,
                                destination: o,
                                viewport: l,
                                displacedBy: g,
                                last: te,
                                index: f
                            })
                        }({
                            previousPageBorderBoxCenter: t,
                            destination: u,
                            draggable: n,
                            draggables: a,
                            moveRelativeTo: s,
                            insideDestination: d,
                            viewport: l,
                            afterCritical: c
                        });
                    if (!p) return null;
                    var f = we({
                        impact: p,
                        draggable: n,
                        droppable: u,
                        draggables: a,
                        afterCritical: c
                    });
                    return {
                        clientSelection: Be({
                            pageBorderBoxCenter: f,
                            draggable: n,
                            viewport: l
                        }),
                        impact: p,
                        scrollJumpRequest: null
                    }
                },
                _e = function(e) {
                    var r = e.at;
                    return r ? "REORDER" === r.type ? r.destination.droppableId : r.combine.droppableId : null
                },
                Fe = function(e) {
                    var r = e.state,
                        t = e.type,
                        n = function(e, r) {
                            var t = _e(e);
                            return t ? r[t] : null
                        }(r.impact, r.dimensions.droppables),
                        i = Boolean(n),
                        a = r.dimensions.droppables[r.critical.droppable.id],
                        o = n || a,
                        l = o.axis.direction,
                        c = "vertical" === l && ("MOVE_UP" === t || "MOVE_DOWN" === t) || "horizontal" === l && ("MOVE_LEFT" === t || "MOVE_RIGHT" === t);
                    if (c && !i) return null;
                    var u = "MOVE_DOWN" === t || "MOVE_RIGHT" === t,
                        d = r.dimensions.draggables[r.critical.draggable.id],
                        s = r.current.page.borderBoxCenter,
                        p = r.dimensions,
                        f = p.draggables,
                        g = p.droppables;
                    return c ? Ne({
                        isMovingForward: u,
                        previousPageBorderBoxCenter: s,
                        draggable: d,
                        destination: o,
                        draggables: f,
                        viewport: r.viewport,
                        previousClientSelection: r.current.client.selection,
                        previousImpact: r.impact,
                        afterCritical: r.afterCritical
                    }) : Me({
                        isMovingForward: u,
                        previousPageBorderBoxCenter: s,
                        draggable: d,
                        isOver: o,
                        draggables: f,
                        droppables: g,
                        viewport: r.viewport,
                        afterCritical: r.afterCritical
                    })
                };

            function ke(e) {
                return "DRAGGING" === e.phase || "COLLECTING" === e.phase
            }

            function We(e) {
                var r = ie(e.top, e.bottom),
                    t = ie(e.left, e.right);
                return function(e) {
                    return r(e.y) && t(e.x)
                }
            }

            function Ue(e) {
                var r = e.pageBorderBox,
                    t = e.draggable,
                    n = e.droppables,
                    i = q(n).filter((function(e) {
                        if (!e.isEnabled) return !1;
                        var t, n, i = e.subject.active;
                        if (!i) return !1;
                        if (n = i, !((t = r).left < n.right && t.right > n.left && t.top < n.bottom && t.bottom > n.top)) return !1;
                        if (We(i)(r.center)) return !0;
                        var a = e.axis,
                            o = i.center[a.crossAxisLine],
                            l = r[a.crossAxisStart],
                            c = r[a.crossAxisEnd],
                            u = ie(i[a.crossAxisStart], i[a.crossAxisEnd]),
                            d = u(l),
                            s = u(c);
                        return !d && !s || (d ? l < o : c > o)
                    }));
                return i.length ? 1 === i.length ? i[0].descriptor.id : function(e) {
                    var r = e.pageBorderBox,
                        t = e.draggable,
                        n = e.candidates,
                        i = t.page.borderBox.center,
                        a = n.map((function(e) {
                            var t = e.axis,
                                n = L(e.axis.line, r.center[t.line], e.page.borderBox.center[t.crossAxisLine]);
                            return {
                                id: e.descriptor.id,
                                distance: T(i, n)
                            }
                        })).sort((function(e, r) {
                            return r.distance - e.distance
                        }));
                    return a[0] ? a[0].id : null
                }({
                    pageBorderBox: r,
                    draggable: t,
                    candidates: i
                }) : null
            }
            var He = function(e, r) {
                return (0, u.Dz)(_(e, r))
            };

            function Ye(e) {
                var r = e.displaced,
                    t = e.id;
                return Boolean(r.visible[t] || r.invisible[t])
            }
            var Ze = function(e) {
                    var r = e.pageOffset,
                        t = e.draggable,
                        n = e.draggables,
                        i = e.droppables,
                        a = e.previousImpact,
                        o = e.viewport,
                        l = e.afterCritical,
                        c = He(t.page.borderBox, r),
                        u = Ue({
                            pageBorderBox: c,
                            draggable: t,
                            droppables: i
                        });
                    if (!u) return ne;
                    var d = i[u],
                        s = X(d.descriptor.id, n),
                        p = function(e, r) {
                            var t = e.frame;
                            return t ? He(r, t.scroll.diff.value) : r
                        }(d, c);
                    return function(e) {
                        var r = e.draggable,
                            t = e.pageBorderBoxWithDroppableScroll,
                            n = e.previousImpact,
                            i = e.destination,
                            a = e.insideDestination,
                            o = e.afterCritical;
                        if (!i.isCombineEnabled) return null;
                        var l = i.axis,
                            c = Le(i.axis, r.displaceBy),
                            u = c.value,
                            d = t[l.start],
                            s = t[l.end],
                            p = Z(Q(r, a), (function(e) {
                                var r = e.descriptor.id,
                                    t = e.page.borderBox,
                                    i = t[l.size] / 4,
                                    a = ve(r, o),
                                    c = Ye({
                                        displaced: n.displaced,
                                        id: r
                                    });
                                return a ? c ? s > t[l.start] + i && s < t[l.end] - i : d > t[l.start] - u + i && d < t[l.end] - u - i : c ? s > t[l.start] + u + i && s < t[l.end] + u - i : d > t[l.start] + i && d < t[l.end] - i
                            }));
                        return p ? {
                            displacedBy: c,
                            displaced: n.displaced,
                            at: {
                                type: "COMBINE",
                                combine: {
                                    draggableId: p.descriptor.id,
                                    droppableId: i.descriptor.id
                                }
                            }
                        } : null
                    }({
                        pageBorderBoxWithDroppableScroll: p,
                        draggable: t,
                        previousImpact: a,
                        destination: d,
                        insideDestination: s,
                        afterCritical: l
                    }) || function(e) {
                        var r = e.pageBorderBoxWithDroppableScroll,
                            t = e.draggable,
                            n = e.destination,
                            i = e.insideDestination,
                            a = e.last,
                            o = e.viewport,
                            l = e.afterCritical,
                            c = n.axis,
                            u = Le(n.axis, t.displaceBy),
                            d = u.value,
                            s = r[c.start],
                            p = r[c.end],
                            f = function(e) {
                                var r = e.draggable,
                                    t = e.closest,
                                    n = e.inHomeList;
                                return t ? n && t.descriptor.index > r.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null
                            }({
                                draggable: t,
                                closest: Z(Q(t, i), (function(e) {
                                    var r = e.descriptor.id,
                                        t = e.page.borderBox.center[c.line],
                                        n = ve(r, l),
                                        i = Ye({
                                            displaced: a,
                                            id: r
                                        });
                                    return n ? i ? p <= t : s < t - d : i ? p <= t + d : s < t
                                })),
                                inHomeList: ee(t, n)
                            });
                        return ge({
                            draggable: t,
                            insideDestination: i,
                            destination: n,
                            viewport: o,
                            last: a,
                            displacedBy: u,
                            index: f
                        })
                    }({
                        pageBorderBoxWithDroppableScroll: p,
                        draggable: t,
                        destination: d,
                        insideDestination: s,
                        last: a.displaced,
                        viewport: o,
                        afterCritical: l
                    })
                },
                je = function(e, r) {
                    var t;
                    return (0, a.Z)({}, e, ((t = {})[r.descriptor.id] = r, t))
                },
                Ve = function(e) {
                    var r = e.previousImpact,
                        t = e.impact,
                        n = e.droppables,
                        i = _e(r),
                        o = _e(t);
                    if (!i) return n;
                    if (i === o) return n;
                    var l = n[i];
                    if (!l.subject.withPlaceholder) return n;
                    var c = function(e) {
                        var r = e.subject.withPlaceholder;
                        r || h(!1);
                        var t = e.frame;
                        if (!t) {
                            var n = W({
                                page: e.subject.page,
                                axis: e.axis,
                                frame: null,
                                withPlaceholder: null
                            });
                            return (0, a.Z)({}, e, {
                                subject: n
                            })
                        }
                        var i = r.oldFrameMaxScroll;
                        i || h(!1);
                        var o = Te(t, i),
                            l = W({
                                page: e.subject.page,
                                axis: e.axis,
                                frame: o,
                                withPlaceholder: null
                            });
                        return (0, a.Z)({}, e, {
                            subject: l,
                            frame: o
                        })
                    }(l);
                    return je(n, c)
                },
                ze = function(e) {
                    var r = e.state,
                        t = e.clientSelection,
                        n = e.dimensions,
                        i = e.viewport,
                        o = e.impact,
                        l = e.scrollJumpRequest,
                        c = i || r.viewport,
                        u = n || r.dimensions,
                        d = t || r.current.client.selection,
                        s = S(d, r.initial.client.selection),
                        p = {
                            offset: s,
                            selection: d,
                            borderBoxCenter: N(r.initial.client.borderBoxCenter, s)
                        },
                        f = {
                            selection: N(p.selection, c.scroll.current),
                            borderBoxCenter: N(p.borderBoxCenter, c.scroll.current),
                            offset: N(p.offset, c.scroll.diff.value)
                        },
                        g = {
                            client: p,
                            page: f
                        };
                    if ("COLLECTING" === r.phase) return (0, a.Z)({
                        phase: "COLLECTING"
                    }, r, {
                        dimensions: u,
                        viewport: c,
                        current: g
                    });
                    var v = u.draggables[r.critical.draggable.id],
                        m = o || Ze({
                            pageOffset: f.offset,
                            draggable: v,
                            draggables: u.draggables,
                            droppables: u.droppables,
                            previousImpact: r.impact,
                            viewport: c,
                            afterCritical: r.afterCritical
                        }),
                        b = function(e) {
                            var r = e.draggable,
                                t = e.draggables,
                                n = e.droppables,
                                i = e.previousImpact,
                                a = e.impact,
                                o = Ve({
                                    previousImpact: i,
                                    impact: a,
                                    droppables: n
                                }),
                                l = _e(a);
                            if (!l) return o;
                            var c = n[l];
                            if (ee(r, c)) return o;
                            if (c.subject.withPlaceholder) return o;
                            var u = Ge(c, r, t);
                            return je(o, u)
                        }({
                            draggable: v,
                            impact: m,
                            previousImpact: r.impact,
                            draggables: u.draggables,
                            droppables: u.droppables
                        });
                    return (0, a.Z)({}, r, {
                        current: g,
                        dimensions: {
                            draggables: u.draggables,
                            droppables: b
                        },
                        impact: m,
                        viewport: c,
                        scrollJumpRequest: l || null,
                        forceShouldAnimate: !l && null
                    })
                };
            var qe = function(e) {
                    var r = e.impact,
                        t = e.viewport,
                        n = e.draggables,
                        i = e.destination,
                        o = e.forceShouldAnimate,
                        l = r.displaced,
                        c = function(e, r) {
                            return e.map((function(e) {
                                return r[e]
                            }))
                        }(l.all, n),
                        u = pe({
                            afterDragging: c,
                            destination: i,
                            displacedBy: r.displacedBy,
                            viewport: t.frame,
                            forceShouldAnimate: o,
                            last: l
                        });
                    return (0, a.Z)({}, r, {
                        displaced: u
                    })
                },
                Je = function(e) {
                    var r = e.impact,
                        t = e.draggable,
                        n = e.droppable,
                        i = e.draggables,
                        a = e.viewport,
                        o = e.afterCritical,
                        l = we({
                            impact: r,
                            draggable: t,
                            draggables: i,
                            droppable: n,
                            afterCritical: o
                        });
                    return Be({
                        pageBorderBoxCenter: l,
                        draggable: t,
                        viewport: a
                    })
                },
                Xe = function(e) {
                    var r = e.state,
                        t = e.dimensions,
                        n = e.viewport;
                    "SNAP" !== r.movementMode && h(!1);
                    var i = r.impact,
                        a = n || r.viewport,
                        o = t || r.dimensions,
                        l = o.draggables,
                        c = o.droppables,
                        u = l[r.critical.draggable.id],
                        d = _e(i);
                    d || h(!1);
                    var s = c[d],
                        p = qe({
                            impact: i,
                            viewport: a,
                            destination: s,
                            draggables: l
                        }),
                        f = Je({
                            impact: p,
                            draggable: u,
                            droppable: s,
                            draggables: l,
                            viewport: a,
                            afterCritical: r.afterCritical
                        });
                    return ze({
                        impact: p,
                        clientSelection: f,
                        state: r,
                        dimensions: o,
                        viewport: a
                    })
                },
                Ke = function(e) {
                    var r = e.draggable,
                        t = e.home,
                        n = e.draggables,
                        i = e.viewport,
                        a = Le(t.axis, r.displaceBy),
                        o = X(t.descriptor.id, n),
                        l = o.indexOf(r); - 1 === l && h(!1);
                    var c, u = o.slice(l + 1),
                        d = u.reduce((function(e, r) {
                            return e[r.descriptor.id] = !0, e
                        }), {}),
                        s = {
                            inVirtualList: "virtual" === t.descriptor.mode,
                            displacedBy: a,
                            effected: d
                        };
                    return {
                        impact: {
                            displaced: pe({
                                afterDragging: u,
                                destination: t,
                                displacedBy: a,
                                last: null,
                                viewport: i.frame,
                                forceShouldAnimate: !1
                            }),
                            displacedBy: a,
                            at: {
                                type: "REORDER",
                                destination: (c = r.descriptor, {
                                    index: c.index,
                                    droppableId: c.droppableId
                                })
                            }
                        },
                        afterCritical: s
                    }
                },
                $e = function(e) {
                    0
                },
                Qe = function(e) {
                    0
                },
                er = function(e) {
                    var r = e.additions,
                        t = e.updatedDroppables,
                        n = e.viewport,
                        i = n.scroll.diff.value;
                    return r.map((function(e) {
                        var r = e.descriptor.droppableId,
                            o = function(e) {
                                var r = e.frame;
                                return r || h(!1), r
                            }(t[r]),
                            l = o.scroll.diff.value,
                            c = function(e) {
                                var r = e.draggable,
                                    t = e.offset,
                                    n = e.initialWindowScroll,
                                    i = (0, u.cv)(r.client, t),
                                    o = (0, u.oc)(i, n);
                                return (0, a.Z)({}, r, {
                                    placeholder: (0, a.Z)({}, r.placeholder, {
                                        client: i
                                    }),
                                    client: i,
                                    page: o
                                })
                            }({
                                draggable: e,
                                offset: N(i, l),
                                initialWindowScroll: n.scroll.initial
                            });
                        return c
                    }))
                },
                rr = function(e) {
                    return "SNAP" === e.movementMode
                },
                tr = function(e, r, t) {
                    var n = function(e, r) {
                        return {
                            draggables: e.draggables,
                            droppables: je(e.droppables, r)
                        }
                    }(e.dimensions, r);
                    return !rr(e) || t ? ze({
                        state: e,
                        dimensions: n
                    }) : Xe({
                        state: e,
                        dimensions: n
                    })
                };

            function nr(e) {
                return e.isDragging && "SNAP" === e.movementMode ? (0, a.Z)({
                    phase: "DRAGGING"
                }, e, {
                    scrollJumpRequest: null
                }) : e
            }
            var ir = {
                    phase: "IDLE",
                    completed: null,
                    shouldFlush: !1
                },
                ar = function(e, r) {
                    if (void 0 === e && (e = ir), "FLUSH" === r.type) return (0, a.Z)({}, ir, {
                        shouldFlush: !0
                    });
                    if ("INITIAL_PUBLISH" === r.type) {
                        "IDLE" !== e.phase && h(!1);
                        var t = r.payload,
                            n = t.critical,
                            i = t.clientSelection,
                            o = t.viewport,
                            l = t.dimensions,
                            c = t.movementMode,
                            u = l.draggables[n.draggable.id],
                            d = l.droppables[n.droppable.id],
                            s = {
                                selection: i,
                                borderBoxCenter: u.client.borderBox.center,
                                offset: R
                            },
                            p = {
                                client: s,
                                page: {
                                    selection: N(s.selection, o.scroll.initial),
                                    borderBoxCenter: N(s.selection, o.scroll.initial),
                                    offset: N(s.selection, o.scroll.diff.value)
                                }
                            },
                            f = q(l.droppables).every((function(e) {
                                return !e.isFixedOnPage
                            })),
                            g = Ke({
                                draggable: u,
                                home: d,
                                draggables: l.draggables,
                                viewport: o
                            }),
                            v = g.impact;
                        return {
                            phase: "DRAGGING",
                            isDragging: !0,
                            critical: n,
                            movementMode: c,
                            dimensions: l,
                            initial: p,
                            current: p,
                            isWindowScrollAllowed: f,
                            impact: v,
                            afterCritical: g.afterCritical,
                            onLiftImpact: v,
                            viewport: o,
                            scrollJumpRequest: null,
                            forceShouldAnimate: null
                        }
                    }
                    if ("COLLECTION_STARTING" === r.type) return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ? e : ("DRAGGING" !== e.phase && h(!1), (0, a.Z)({
                        phase: "COLLECTING"
                    }, e, {
                        phase: "COLLECTING"
                    }));
                    if ("PUBLISH_WHILE_DRAGGING" === r.type) return "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && h(!1),
                        function(e) {
                            var r = e.state,
                                t = e.published;
                            $e();
                            var n = t.modified.map((function(e) {
                                    var t = r.dimensions.droppables[e.droppableId];
                                    return U(t, e.scroll)
                                })),
                                i = (0, a.Z)({}, r.dimensions.droppables, {}, V(n)),
                                o = z(er({
                                    additions: t.additions,
                                    updatedDroppables: i,
                                    viewport: r.viewport
                                })),
                                l = (0, a.Z)({}, r.dimensions.draggables, {}, o);
                            t.removals.forEach((function(e) {
                                delete l[e]
                            }));
                            var c = {
                                    droppables: i,
                                    draggables: l
                                },
                                u = _e(r.impact),
                                d = u ? c.droppables[u] : null,
                                s = c.draggables[r.critical.draggable.id],
                                p = c.droppables[r.critical.droppable.id],
                                f = Ke({
                                    draggable: s,
                                    home: p,
                                    draggables: l,
                                    viewport: r.viewport
                                }),
                                g = f.impact,
                                v = f.afterCritical,
                                m = d && d.isCombineEnabled ? r.impact : g,
                                b = Ze({
                                    pageOffset: r.current.page.offset,
                                    draggable: c.draggables[r.critical.draggable.id],
                                    draggables: c.draggables,
                                    droppables: c.droppables,
                                    previousImpact: m,
                                    viewport: r.viewport,
                                    afterCritical: v
                                });
                            Qe();
                            var h = (0, a.Z)({
                                phase: "DRAGGING"
                            }, r, {
                                phase: "DRAGGING",
                                impact: b,
                                onLiftImpact: g,
                                dimensions: c,
                                afterCritical: v,
                                forceShouldAnimate: !1
                            });
                            return "COLLECTING" === r.phase ? h : (0, a.Z)({
                                phase: "DROP_PENDING"
                            }, h, {
                                phase: "DROP_PENDING",
                                reason: r.reason,
                                isWaiting: !1
                            })
                        }({
                            state: e,
                            published: r.payload
                        });
                    if ("MOVE" === r.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        ke(e) || h(!1);
                        var m = r.payload.client;
                        return P(m, e.current.client.selection) ? e : ze({
                            state: e,
                            clientSelection: m,
                            impact: rr(e) ? e.impact : null
                        })
                    }
                    if ("UPDATE_DROPPABLE_SCROLL" === r.type) {
                        if ("DROP_PENDING" === e.phase) return nr(e);
                        if ("COLLECTING" === e.phase) return nr(e);
                        ke(e) || h(!1);
                        var b = r.payload,
                            I = b.id,
                            y = b.newScroll,
                            D = e.dimensions.droppables[I];
                        if (!D) return e;
                        var x = U(D, y);
                        return tr(e, x, !1)
                    }
                    if ("UPDATE_DROPPABLE_IS_ENABLED" === r.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        ke(e) || h(!1);
                        var E = r.payload,
                            w = E.id,
                            C = E.isEnabled,
                            A = e.dimensions.droppables[w];
                        A || h(!1), A.isEnabled === C && h(!1);
                        var B = (0, a.Z)({}, A, {
                            isEnabled: C
                        });
                        return tr(e, B, !0)
                    }
                    if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === r.type) {
                        if ("DROP_PENDING" === e.phase) return e;
                        ke(e) || h(!1);
                        var S = r.payload,
                            O = S.id,
                            L = S.isCombineEnabled,
                            T = e.dimensions.droppables[O];
                        T || h(!1), T.isCombineEnabled === L && h(!1);
                        var G = (0, a.Z)({}, T, {
                            isCombineEnabled: L
                        });
                        return tr(e, G, !0)
                    }
                    if ("MOVE_BY_WINDOW_SCROLL" === r.type) {
                        if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase) return e;
                        ke(e) || h(!1), e.isWindowScrollAllowed || h(!1);
                        var M = r.payload.newScroll;
                        if (P(e.viewport.scroll.current, M)) return nr(e);
                        var _ = Ce(e.viewport, M);
                        return rr(e) ? Xe({
                            state: e,
                            viewport: _
                        }) : ze({
                            state: e,
                            viewport: _
                        })
                    }
                    if ("UPDATE_VIEWPORT_MAX_SCROLL" === r.type) {
                        if (!ke(e)) return e;
                        var F = r.payload.maxScroll;
                        if (P(F, e.viewport.scroll.max)) return e;
                        var k = (0, a.Z)({}, e.viewport, {
                            scroll: (0, a.Z)({}, e.viewport.scroll, {
                                max: F
                            })
                        });
                        return (0, a.Z)({
                            phase: "DRAGGING"
                        }, e, {
                            viewport: k
                        })
                    }
                    if ("MOVE_UP" === r.type || "MOVE_DOWN" === r.type || "MOVE_LEFT" === r.type || "MOVE_RIGHT" === r.type) {
                        if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e;
                        "DRAGGING" !== e.phase && h(!1);
                        var W = Fe({
                            state: e,
                            type: r.type
                        });
                        return W ? ze({
                            state: e,
                            impact: W.impact,
                            clientSelection: W.clientSelection,
                            scrollJumpRequest: W.scrollJumpRequest
                        }) : e
                    }
                    if ("DROP_PENDING" === r.type) {
                        var H = r.payload.reason;
                        return "COLLECTING" !== e.phase && h(!1), (0, a.Z)({
                            phase: "DROP_PENDING"
                        }, e, {
                            phase: "DROP_PENDING",
                            isWaiting: !0,
                            reason: H
                        })
                    }
                    if ("DROP_ANIMATE" === r.type) {
                        var Y = r.payload,
                            Z = Y.completed,
                            j = Y.dropDuration,
                            J = Y.newHomeClientOffset;
                        return "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && h(!1), {
                            phase: "DROP_ANIMATING",
                            completed: Z,
                            dropDuration: j,
                            newHomeClientOffset: J,
                            dimensions: e.dimensions
                        }
                    }
                    return "DROP_COMPLETE" === r.type ? {
                        phase: "IDLE",
                        completed: r.payload.completed,
                        shouldFlush: !1
                    } : e
                },
                or = function(e) {
                    return {
                        type: "PUBLISH_WHILE_DRAGGING",
                        payload: e
                    }
                },
                lr = function() {
                    return {
                        type: "COLLECTION_STARTING",
                        payload: null
                    }
                },
                cr = function(e) {
                    return {
                        type: "UPDATE_DROPPABLE_SCROLL",
                        payload: e
                    }
                },
                ur = function(e) {
                    return {
                        type: "UPDATE_DROPPABLE_IS_ENABLED",
                        payload: e
                    }
                },
                dr = function(e) {
                    return {
                        type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
                        payload: e
                    }
                },
                sr = function(e) {
                    return {
                        type: "MOVE",
                        payload: e
                    }
                },
                pr = function() {
                    return {
                        type: "MOVE_UP",
                        payload: null
                    }
                },
                fr = function() {
                    return {
                        type: "MOVE_DOWN",
                        payload: null
                    }
                },
                gr = function() {
                    return {
                        type: "MOVE_RIGHT",
                        payload: null
                    }
                },
                vr = function() {
                    return {
                        type: "MOVE_LEFT",
                        payload: null
                    }
                },
                mr = function(e) {
                    return {
                        type: "DROP_COMPLETE",
                        payload: e
                    }
                },
                br = function(e) {
                    return {
                        type: "DROP",
                        payload: e
                    }
                },
                hr = function() {
                    return {
                        type: "DROP_ANIMATION_FINISHED",
                        payload: null
                    }
                };
            var Ir = "cubic-bezier(.2,1,.1,1)",
                yr = {
                    drop: 0,
                    combining: .7
                },
                Dr = {
                    drop: .75
                },
                xr = .2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
                Er = {
                    fluid: "opacity " + xr,
                    snap: "transform " + xr + ", opacity " + xr,
                    drop: function(e) {
                        var r = e + "s " + Ir;
                        return "transform " + r + ", opacity " + r
                    },
                    outOfTheWay: "transform " + xr,
                    placeholder: "height " + xr + ", width " + xr + ", margin " + xr
                },
                wr = function(e) {
                    return P(e, R) ? null : "translate(" + e.x + "px, " + e.y + "px)"
                },
                Cr = wr,
                Ar = function(e, r) {
                    var t = wr(e);
                    return t ? r ? t + " scale(" + Dr.drop + ")" : t : null
                },
                Br = .33,
                Rr = .55,
                Nr = Rr - Br,
                Sr = function(e) {
                    var r = e.getState,
                        t = e.dispatch;
                    return function(e) {
                        return function(n) {
                            if ("DROP" === n.type) {
                                var i = r(),
                                    o = n.payload.reason;
                                if ("COLLECTING" !== i.phase) {
                                    if ("IDLE" !== i.phase) {
                                        "DROP_PENDING" === i.phase && i.isWaiting && h(!1), "DRAGGING" !== i.phase && "DROP_PENDING" !== i.phase && h(!1);
                                        var l = i.critical,
                                            c = i.dimensions,
                                            u = c.draggables[i.critical.draggable.id],
                                            d = function(e) {
                                                var r = e.draggables,
                                                    t = e.reason,
                                                    n = e.lastImpact,
                                                    i = e.home,
                                                    o = e.viewport,
                                                    l = e.onLiftImpact;
                                                return n.at && "DROP" === t ? "REORDER" === n.at.type ? {
                                                    impact: n,
                                                    didDropInsideDroppable: !0
                                                } : {
                                                    impact: (0, a.Z)({}, n, {
                                                        displaced: te
                                                    }),
                                                    didDropInsideDroppable: !0
                                                } : {
                                                    impact: qe({
                                                        draggables: r,
                                                        impact: l,
                                                        destination: i,
                                                        viewport: o,
                                                        forceShouldAnimate: !0
                                                    }),
                                                    didDropInsideDroppable: !1
                                                }
                                            }({
                                                reason: o,
                                                lastImpact: i.impact,
                                                afterCritical: i.afterCritical,
                                                onLiftImpact: i.onLiftImpact,
                                                home: i.dimensions.droppables[i.critical.droppable.id],
                                                viewport: i.viewport,
                                                draggables: i.dimensions.draggables
                                            }),
                                            s = d.impact,
                                            p = d.didDropInsideDroppable,
                                            f = p ? K(s) : null,
                                            g = p ? $(s) : null,
                                            v = {
                                                index: l.draggable.index,
                                                droppableId: l.droppable.id
                                            },
                                            m = {
                                                draggableId: u.descriptor.id,
                                                type: u.descriptor.type,
                                                source: v,
                                                reason: o,
                                                mode: i.movementMode,
                                                destination: f,
                                                combine: g
                                            },
                                            b = function(e) {
                                                var r = e.impact,
                                                    t = e.draggable,
                                                    n = e.dimensions,
                                                    i = e.viewport,
                                                    a = e.afterCritical,
                                                    o = n.draggables,
                                                    l = n.droppables,
                                                    c = _e(r),
                                                    u = c ? l[c] : null,
                                                    d = l[t.descriptor.droppableId],
                                                    s = Je({
                                                        impact: r,
                                                        draggable: t,
                                                        draggables: o,
                                                        afterCritical: a,
                                                        droppable: u || d,
                                                        viewport: i
                                                    });
                                                return S(s, t.client.borderBox.center)
                                            }({
                                                impact: s,
                                                draggable: u,
                                                dimensions: c,
                                                viewport: i.viewport,
                                                afterCritical: i.afterCritical
                                            }),
                                            I = {
                                                critical: i.critical,
                                                afterCritical: i.afterCritical,
                                                result: m,
                                                impact: s
                                            };
                                        if (!P(i.current.client.offset, b) || Boolean(m.combine)) {
                                            var y = function(e) {
                                                var r = e.current,
                                                    t = e.destination,
                                                    n = e.reason,
                                                    i = T(r, t);
                                                if (i <= 0) return Br;
                                                if (i >= 1500) return Rr;
                                                var a = Br + Nr * (i / 1500);
                                                return Number(("CANCEL" === n ? .6 * a : a).toFixed(2))
                                            }({
                                                current: i.current.client.offset,
                                                destination: b,
                                                reason: o
                                            });
                                            t(function(e) {
                                                return {
                                                    type: "DROP_ANIMATE",
                                                    payload: e
                                                }
                                            }({
                                                newHomeClientOffset: b,
                                                dropDuration: y,
                                                completed: I
                                            }))
                                        } else t(mr({
                                            completed: I
                                        }))
                                    }
                                } else t(function(e) {
                                    return {
                                        type: "DROP_PENDING",
                                        payload: e
                                    }
                                }({
                                    reason: o
                                }))
                            } else e(n)
                        }
                    }
                },
                Pr = function() {
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                };

            function Or(e) {
                var r = e.onWindowScroll;
                var t = (0, s.Z)((function() {
                        r(Pr())
                    })),
                    n = function(e) {
                        return {
                            eventName: "scroll",
                            options: {
                                passive: !0,
                                capture: !1
                            },
                            fn: function(r) {
                                r.target !== window && r.target !== window.document || e()
                            }
                        }
                    }(t),
                    i = g;

                function a() {
                    return i !== g
                }
                return {
                    start: function() {
                        a() && h(!1), i = v(window, [n])
                    },
                    stop: function() {
                        a() || h(!1), t.cancel(), i(), i = g
                    },
                    isActive: a
                }
            }
            var Lr = function(e) {
                    var r = Or({
                        onWindowScroll: function(r) {
                            e.dispatch({
                                type: "MOVE_BY_WINDOW_SCROLL",
                                payload: {
                                    newScroll: r
                                }
                            })
                        }
                    });
                    return function(e) {
                        return function(t) {
                            r.isActive() || "INITIAL_PUBLISH" !== t.type || r.start(), r.isActive() && function(e) {
                                return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
                            }(t) && r.stop(), e(t)
                        }
                    }
                },
                Tr = function() {
                    var e = [];
                    return {
                        add: function(r) {
                            var t = setTimeout((function() {
                                    return function(r) {
                                        var t = Y(e, (function(e) {
                                            return e.timerId === r
                                        })); - 1 === t && h(!1), e.splice(t, 1)[0].callback()
                                    }(t)
                                })),
                                n = {
                                    timerId: t,
                                    callback: r
                                };
                            e.push(n)
                        },
                        flush: function() {
                            if (e.length) {
                                var r = [].concat(e);
                                e.length = 0, r.forEach((function(e) {
                                    clearTimeout(e.timerId), e.callback()
                                }))
                            }
                        }
                    }
                },
                Gr = function(e, r) {
                    $e(), r(), Qe()
                },
                Mr = function(e, r) {
                    return {
                        draggableId: e.draggable.id,
                        type: e.droppable.type,
                        source: {
                            droppableId: e.droppable.id,
                            index: e.draggable.index
                        },
                        mode: r
                    }
                },
                _r = function(e, r, t, n) {
                    if (e) {
                        var i = function(e) {
                            var r = !1,
                                t = !1,
                                n = setTimeout((function() {
                                    t = !0
                                })),
                                i = function(i) {
                                    r || t || (r = !0, e(i), clearTimeout(n))
                                };
                            return i.wasCalled = function() {
                                return r
                            }, i
                        }(t);
                        e(r, {
                            announce: i
                        }), i.wasCalled() || t(n(r))
                    } else t(n(r))
                },
                Fr = function(e, r) {
                    var t = function(e, r) {
                        var t = Tr(),
                            n = null,
                            i = function(t) {
                                n || h(!1), n = null, Gr(0, (function() {
                                    return _r(e().onDragEnd, t, r, B)
                                }))
                            };
                        return {
                            beforeCapture: function(r, t) {
                                n && h(!1), Gr(0, (function() {
                                    var n = e().onBeforeCapture;
                                    n && n({
                                        draggableId: r,
                                        mode: t
                                    })
                                }))
                            },
                            beforeStart: function(r, t) {
                                n && h(!1), Gr(0, (function() {
                                    var n = e().onBeforeDragStart;
                                    n && n(Mr(r, t))
                                }))
                            },
                            start: function(i, a) {
                                n && h(!1);
                                var o = Mr(i, a);
                                n = {
                                    mode: a,
                                    lastCritical: i,
                                    lastLocation: o.source,
                                    lastCombine: null
                                }, t.add((function() {
                                    Gr(0, (function() {
                                        return _r(e().onDragStart, o, r, C)
                                    }))
                                }))
                            },
                            update: function(i, o) {
                                var l = K(o),
                                    c = $(o);
                                n || h(!1);
                                var u = ! function(e, r) {
                                    if (e === r) return !0;
                                    var t = e.draggable.id === r.draggable.id && e.draggable.droppableId === r.draggable.droppableId && e.draggable.type === r.draggable.type && e.draggable.index === r.draggable.index,
                                        n = e.droppable.id === r.droppable.id && e.droppable.type === r.droppable.type;
                                    return t && n
                                }(i, n.lastCritical);
                                u && (n.lastCritical = i);
                                var d, s, p = (s = l, !(null == (d = n.lastLocation) && null == s || null != d && null != s && d.droppableId === s.droppableId && d.index === s.index));
                                p && (n.lastLocation = l);
                                var f = ! function(e, r) {
                                    return null == e && null == r || null != e && null != r && e.draggableId === r.draggableId && e.droppableId === r.droppableId
                                }(n.lastCombine, c);
                                if (f && (n.lastCombine = c), u || p || f) {
                                    var g = (0, a.Z)({}, Mr(i, n.mode), {
                                        combine: c,
                                        destination: l
                                    });
                                    t.add((function() {
                                        Gr(0, (function() {
                                            return _r(e().onDragUpdate, g, r, A)
                                        }))
                                    }))
                                }
                            },
                            flush: function() {
                                n || h(!1), t.flush()
                            },
                            drop: i,
                            abort: function() {
                                if (n) {
                                    var e = (0, a.Z)({}, Mr(n.lastCritical, n.mode), {
                                        combine: null,
                                        destination: null,
                                        reason: "CANCEL"
                                    });
                                    i(e)
                                }
                            }
                        }
                    }(e, r);
                    return function(e) {
                        return function(r) {
                            return function(n) {
                                if ("BEFORE_INITIAL_CAPTURE" !== n.type) {
                                    if ("INITIAL_PUBLISH" === n.type) {
                                        var i = n.payload.critical;
                                        return t.beforeStart(i, n.payload.movementMode), r(n), void t.start(i, n.payload.movementMode)
                                    }
                                    if ("DROP_COMPLETE" === n.type) {
                                        var a = n.payload.completed.result;
                                        return t.flush(), r(n), void t.drop(a)
                                    }
                                    if (r(n), "FLUSH" !== n.type) {
                                        var o = e.getState();
                                        "DRAGGING" === o.phase && t.update(o.critical, o.impact)
                                    } else t.abort()
                                } else t.beforeCapture(n.payload.draggableId, n.payload.movementMode)
                            }
                        }
                    }
                },
                kr = function(e) {
                    return function(r) {
                        return function(t) {
                            if ("DROP_ANIMATION_FINISHED" === t.type) {
                                var n = e.getState();
                                "DROP_ANIMATING" !== n.phase && h(!1), e.dispatch(mr({
                                    completed: n.completed
                                }))
                            } else r(t)
                        }
                    }
                },
                Wr = function(e) {
                    var r = null,
                        t = null;
                    return function(n) {
                        return function(i) {
                            if ("FLUSH" !== i.type && "DROP_COMPLETE" !== i.type && "DROP_ANIMATION_FINISHED" !== i.type || (t && (cancelAnimationFrame(t), t = null), r && (r(), r = null)), n(i), "DROP_ANIMATE" === i.type) {
                                var a = {
                                    eventName: "scroll",
                                    options: {
                                        capture: !0,
                                        passive: !1,
                                        once: !0
                                    },
                                    fn: function() {
                                        "DROP_ANIMATING" === e.getState().phase && e.dispatch({
                                            type: "DROP_ANIMATION_FINISHED",
                                            payload: null
                                        })
                                    }
                                };
                                t = requestAnimationFrame((function() {
                                    t = null, r = v(window, [a])
                                }))
                            }
                        }
                    }
                },
                Ur = function(e) {
                    return function(r) {
                        return function(t) {
                            if (r(t), "PUBLISH_WHILE_DRAGGING" === t.type) {
                                var n = e.getState();
                                "DROP_PENDING" === n.phase && (n.isWaiting || e.dispatch(br({
                                    reason: n.reason
                                })))
                            }
                        }
                    }
                },
                Hr = o.qC,
                Yr = function(e) {
                    var r, t = e.dimensionMarshal,
                        n = e.focusMarshal,
                        i = e.styleMarshal,
                        a = e.getResponders,
                        l = e.announce,
                        c = e.autoScroller;
                    return (0, o.MT)(ar, Hr((0, o.md)((r = i, function() {
                        return function(e) {
                            return function(t) {
                                "INITIAL_PUBLISH" === t.type && r.dragging(), "DROP_ANIMATE" === t.type && r.dropping(t.payload.completed.result.reason), "FLUSH" !== t.type && "DROP_COMPLETE" !== t.type || r.resting(), e(t)
                            }
                        }
                    }), function(e) {
                        return function() {
                            return function(r) {
                                return function(t) {
                                    "DROP_COMPLETE" !== t.type && "FLUSH" !== t.type && "DROP_ANIMATE" !== t.type || e.stopPublishing(), r(t)
                                }
                            }
                        }
                    }(t), function(e) {
                        return function(r) {
                            var t = r.getState,
                                n = r.dispatch;
                            return function(r) {
                                return function(i) {
                                    if ("LIFT" === i.type) {
                                        var a = i.payload,
                                            o = a.id,
                                            l = a.clientSelection,
                                            c = a.movementMode,
                                            u = t();
                                        "DROP_ANIMATING" === u.phase && n(mr({
                                            completed: u.completed
                                        })), "IDLE" !== t().phase && h(!1), n({
                                            type: "FLUSH",
                                            payload: null
                                        }), n({
                                            type: "BEFORE_INITIAL_CAPTURE",
                                            payload: {
                                                draggableId: o,
                                                movementMode: c
                                            }
                                        });
                                        var d = {
                                                draggableId: o,
                                                scrollOptions: {
                                                    shouldPublishImmediately: "SNAP" === c
                                                }
                                            },
                                            s = e.startPublishing(d),
                                            p = s.critical,
                                            f = s.dimensions,
                                            g = s.viewport;
                                        n({
                                            type: "INITIAL_PUBLISH",
                                            payload: {
                                                critical: p,
                                                dimensions: f,
                                                clientSelection: l,
                                                movementMode: c,
                                                viewport: g
                                            }
                                        })
                                    } else r(i)
                                }
                            }
                        }
                    }(t), Sr, kr, Wr, Ur, function(e) {
                        return function(r) {
                            return function(t) {
                                return function(n) {
                                    if (function(e) {
                                            return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
                                        }(n)) return e.stop(), void t(n);
                                    if ("INITIAL_PUBLISH" === n.type) {
                                        t(n);
                                        var i = r.getState();
                                        return "DRAGGING" !== i.phase && h(!1), void e.start(i)
                                    }
                                    t(n), e.scroll(r.getState())
                                }
                            }
                        }
                    }(c), Lr, function(e) {
                        var r = !1;
                        return function() {
                            return function(t) {
                                return function(n) {
                                    if ("INITIAL_PUBLISH" === n.type) return r = !0, e.tryRecordFocus(n.payload.critical.draggable.id), t(n), void e.tryRestoreFocusRecorded();
                                    if (t(n), r) {
                                        if ("FLUSH" === n.type) return r = !1, void e.tryRestoreFocusRecorded();
                                        if ("DROP_COMPLETE" === n.type) {
                                            r = !1;
                                            var i = n.payload.completed.result;
                                            i.combine && e.tryShiftRecord(i.draggableId, i.combine.draggableId), e.tryRestoreFocusRecorded()
                                        }
                                    }
                                }
                            }
                        }
                    }(n), Fr(a, l))))
                };
            var Zr = function(e) {
                    var r = e.scrollHeight,
                        t = e.scrollWidth,
                        n = e.height,
                        i = e.width,
                        a = S({
                            x: t,
                            y: r
                        }, {
                            x: i,
                            y: n
                        });
                    return {
                        x: Math.max(0, a.x),
                        y: Math.max(0, a.y)
                    }
                },
                jr = function() {
                    var e = document.documentElement;
                    return e || h(!1), e
                },
                Vr = function() {
                    var e = jr();
                    return Zr({
                        scrollHeight: e.scrollHeight,
                        scrollWidth: e.scrollWidth,
                        width: e.clientWidth,
                        height: e.clientHeight
                    })
                },
                zr = function(e) {
                    var r = e.critical,
                        t = e.scrollOptions,
                        n = e.registry;
                    $e();
                    var i = function() {
                            var e = Pr(),
                                r = Vr(),
                                t = e.y,
                                n = e.x,
                                i = jr(),
                                a = n + i.clientWidth,
                                o = t + i.clientHeight;
                            return {
                                frame: (0, u.Dz)({
                                    top: t,
                                    left: n,
                                    right: a,
                                    bottom: o
                                }),
                                scroll: {
                                    initial: e,
                                    current: e,
                                    max: r,
                                    diff: {
                                        value: R,
                                        displacement: R
                                    }
                                }
                            }
                        }(),
                        a = i.scroll.current,
                        o = r.droppable,
                        l = n.droppable.getAllByType(o.type).map((function(e) {
                            return e.callbacks.getDimensionAndWatchScroll(a, t)
                        })),
                        c = n.draggable.getAllByType(r.draggable.type).map((function(e) {
                            return e.getDimension(a)
                        })),
                        d = {
                            draggables: z(c),
                            droppables: V(l)
                        };
                    return Qe(), {
                        dimensions: d,
                        critical: r,
                        viewport: i
                    }
                };

            function qr(e, r, t) {
                return t.descriptor.id !== r.id && (t.descriptor.type === r.type && "virtual" === e.droppable.getById(t.descriptor.droppableId).descriptor.mode)
            }
            var Jr = function(e, r) {
                    var t = null,
                        n = function(e) {
                            var r = e.registry,
                                t = e.callbacks,
                                n = {
                                    additions: {},
                                    removals: {},
                                    modified: {}
                                },
                                i = null,
                                a = function() {
                                    i || (t.collectionStarting(), i = requestAnimationFrame((function() {
                                        i = null, $e();
                                        var e = n,
                                            a = e.additions,
                                            o = e.removals,
                                            l = e.modified,
                                            c = Object.keys(a).map((function(e) {
                                                return r.draggable.getById(e).getDimension(R)
                                            })).sort((function(e, r) {
                                                return e.descriptor.index - r.descriptor.index
                                            })),
                                            u = Object.keys(l).map((function(e) {
                                                return {
                                                    droppableId: e,
                                                    scroll: r.droppable.getById(e).callbacks.getScrollWhileDragging()
                                                }
                                            })),
                                            d = {
                                                additions: c,
                                                removals: Object.keys(o),
                                                modified: u
                                            };
                                        n = {
                                            additions: {},
                                            removals: {},
                                            modified: {}
                                        }, Qe(), t.publish(d)
                                    })))
                                };
                            return {
                                add: function(e) {
                                    var r = e.descriptor.id;
                                    n.additions[r] = e, n.modified[e.descriptor.droppableId] = !0, n.removals[r] && delete n.removals[r], a()
                                },
                                remove: function(e) {
                                    var r = e.descriptor;
                                    n.removals[r.id] = !0, n.modified[r.droppableId] = !0, n.additions[r.id] && delete n.additions[r.id], a()
                                },
                                stop: function() {
                                    i && (cancelAnimationFrame(i), i = null, n = {
                                        additions: {},
                                        removals: {},
                                        modified: {}
                                    })
                                }
                            }
                        }({
                            callbacks: {
                                publish: r.publishWhileDragging,
                                collectionStarting: r.collectionStarting
                            },
                            registry: e
                        }),
                        i = function(r) {
                            t || h(!1);
                            var i = t.critical.draggable;
                            "ADDITION" === r.type && qr(e, i, r.value) && n.add(r.value), "REMOVAL" === r.type && qr(e, i, r.value) && n.remove(r.value)
                        },
                        a = {
                            updateDroppableIsEnabled: function(n, i) {
                                e.droppable.exists(n) || h(!1), t && r.updateDroppableIsEnabled({
                                    id: n,
                                    isEnabled: i
                                })
                            },
                            updateDroppableIsCombineEnabled: function(n, i) {
                                t && (e.droppable.exists(n) || h(!1), r.updateDroppableIsCombineEnabled({
                                    id: n,
                                    isCombineEnabled: i
                                }))
                            },
                            scrollDroppable: function(r, n) {
                                t && e.droppable.getById(r).callbacks.scroll(n)
                            },
                            updateDroppableScroll: function(n, i) {
                                t && (e.droppable.exists(n) || h(!1), r.updateDroppableScroll({
                                    id: n,
                                    newScroll: i
                                }))
                            },
                            startPublishing: function(r) {
                                t && h(!1);
                                var n = e.draggable.getById(r.draggableId),
                                    a = e.droppable.getById(n.descriptor.droppableId),
                                    o = {
                                        draggable: n.descriptor,
                                        droppable: a.descriptor
                                    },
                                    l = e.subscribe(i);
                                return t = {
                                    critical: o,
                                    unsubscribe: l
                                }, zr({
                                    critical: o,
                                    registry: e,
                                    scrollOptions: r.scrollOptions
                                })
                            },
                            stopPublishing: function() {
                                if (t) {
                                    n.stop();
                                    var r = t.critical.droppable;
                                    e.droppable.getAllByType(r.type).forEach((function(e) {
                                        return e.callbacks.dragStopped()
                                    })), t.unsubscribe(), t = null
                                }
                            }
                        };
                    return a
                },
                Xr = function(e, r) {
                    return "IDLE" === e.phase || "DROP_ANIMATING" === e.phase && (e.completed.result.draggableId !== r && "DROP" === e.completed.result.reason)
                },
                Kr = function(e) {
                    window.scrollBy(e.x, e.y)
                },
                $r = (0, d.default)((function(e) {
                    return q(e).filter((function(e) {
                        return !!e.isEnabled && !!e.frame
                    }))
                })),
                Qr = function(e) {
                    var r = e.center,
                        t = e.destination,
                        n = e.droppables;
                    if (t) {
                        var i = n[t];
                        return i.frame ? i : null
                    }
                    var a = function(e, r) {
                        var t = Z($r(r), (function(r) {
                            return r.frame || h(!1), We(r.frame.pageMarginBox)(e)
                        }));
                        return t
                    }(r, n);
                    return a
                },
                et = .25,
                rt = .05,
                tt = 28,
                nt = function(e) {
                    return Math.pow(e, 2)
                },
                it = {
                    stopDampeningAt: 1200,
                    accelerateAt: 360
                },
                at = function(e) {
                    var r = e.startOfRange,
                        t = e.endOfRange,
                        n = e.current,
                        i = t - r;
                    return 0 === i ? 0 : (n - r) / i
                },
                ot = it.accelerateAt,
                lt = it.stopDampeningAt,
                ct = function(e) {
                    var r = e.distanceToEdge,
                        t = e.thresholds,
                        n = e.dragStartTime,
                        i = e.shouldUseTimeDampening,
                        a = function(e, r) {
                            if (e > r.startScrollingFrom) return 0;
                            if (e <= r.maxScrollValueAt) return tt;
                            if (e === r.startScrollingFrom) return 1;
                            var t = at({
                                    startOfRange: r.maxScrollValueAt,
                                    endOfRange: r.startScrollingFrom,
                                    current: e
                                }),
                                n = tt * nt(1 - t);
                            return Math.ceil(n)
                        }(r, t);
                    return 0 === a ? 0 : i ? Math.max(function(e, r) {
                        var t = r,
                            n = lt,
                            i = Date.now() - t;
                        if (i >= lt) return e;
                        if (i < ot) return 1;
                        var a = at({
                                startOfRange: ot,
                                endOfRange: n,
                                current: i
                            }),
                            o = e * nt(a);
                        return Math.ceil(o)
                    }(a, n), 1) : a
                },
                ut = function(e) {
                    var r = e.container,
                        t = e.distanceToEdges,
                        n = e.dragStartTime,
                        i = e.axis,
                        a = e.shouldUseTimeDampening,
                        o = function(e, r) {
                            return {
                                startScrollingFrom: e[r.size] * et,
                                maxScrollValueAt: e[r.size] * rt
                            }
                        }(r, i);
                    return t[i.end] < t[i.start] ? ct({
                        distanceToEdge: t[i.end],
                        thresholds: o,
                        dragStartTime: n,
                        shouldUseTimeDampening: a
                    }) : -1 * ct({
                        distanceToEdge: t[i.start],
                        thresholds: o,
                        dragStartTime: n,
                        shouldUseTimeDampening: a
                    })
                },
                dt = M((function(e) {
                    return 0 === e ? 0 : e
                })),
                st = function(e) {
                    var r = e.dragStartTime,
                        t = e.container,
                        n = e.subject,
                        i = e.center,
                        a = e.shouldUseTimeDampening,
                        o = {
                            top: i.y - t.top,
                            right: t.right - i.x,
                            bottom: t.bottom - i.y,
                            left: i.x - t.left
                        },
                        l = ut({
                            container: t,
                            distanceToEdges: o,
                            dragStartTime: r,
                            axis: le,
                            shouldUseTimeDampening: a
                        }),
                        c = ut({
                            container: t,
                            distanceToEdges: o,
                            dragStartTime: r,
                            axis: ce,
                            shouldUseTimeDampening: a
                        }),
                        u = dt({
                            x: c,
                            y: l
                        });
                    if (P(u, R)) return null;
                    var d = function(e) {
                        var r = e.container,
                            t = e.subject,
                            n = e.proposedScroll,
                            i = t.height > r.height,
                            a = t.width > r.width;
                        return a || i ? a && i ? null : {
                            x: a ? 0 : n.x,
                            y: i ? 0 : n.y
                        } : n
                    }({
                        container: t,
                        subject: n,
                        proposedScroll: u
                    });
                    return d ? P(d, R) ? null : d : null
                },
                pt = M((function(e) {
                    return 0 === e ? 0 : e > 0 ? 1 : -1
                })),
                ft = function() {
                    var e = function(e, r) {
                        return e < 0 ? e : e > r ? e - r : 0
                    };
                    return function(r) {
                        var t = r.current,
                            n = r.max,
                            i = r.change,
                            a = N(t, i),
                            o = {
                                x: e(a.x, n.x),
                                y: e(a.y, n.y)
                            };
                        return P(o, R) ? null : o
                    }
                }(),
                gt = function(e) {
                    var r = e.max,
                        t = e.current,
                        n = e.change,
                        i = {
                            x: Math.max(t.x, r.x),
                            y: Math.max(t.y, r.y)
                        },
                        a = pt(n),
                        o = ft({
                            max: i,
                            current: t,
                            change: a
                        });
                    return !o || (0 !== a.x && 0 === o.x || 0 !== a.y && 0 === o.y)
                },
                vt = function(e, r) {
                    return gt({
                        current: e.scroll.current,
                        max: e.scroll.max,
                        change: r
                    })
                },
                mt = function(e, r) {
                    var t = e.frame;
                    return !!t && gt({
                        current: t.scroll.current,
                        max: t.scroll.max,
                        change: r
                    })
                },
                bt = function(e) {
                    var r = e.state,
                        t = e.dragStartTime,
                        n = e.shouldUseTimeDampening,
                        i = e.scrollWindow,
                        a = e.scrollDroppable,
                        o = r.current.page.borderBoxCenter,
                        l = r.dimensions.draggables[r.critical.draggable.id].page.marginBox;
                    if (r.isWindowScrollAllowed) {
                        var c = function(e) {
                            var r = e.viewport,
                                t = e.subject,
                                n = e.center,
                                i = e.dragStartTime,
                                a = e.shouldUseTimeDampening,
                                o = st({
                                    dragStartTime: i,
                                    container: r.frame,
                                    subject: t,
                                    center: n,
                                    shouldUseTimeDampening: a
                                });
                            return o && vt(r, o) ? o : null
                        }({
                            dragStartTime: t,
                            viewport: r.viewport,
                            subject: l,
                            center: o,
                            shouldUseTimeDampening: n
                        });
                        if (c) return void i(c)
                    }
                    var u = Qr({
                        center: o,
                        destination: _e(r.impact),
                        droppables: r.dimensions.droppables
                    });
                    if (u) {
                        var d = function(e) {
                            var r = e.droppable,
                                t = e.subject,
                                n = e.center,
                                i = e.dragStartTime,
                                a = e.shouldUseTimeDampening,
                                o = r.frame;
                            if (!o) return null;
                            var l = st({
                                dragStartTime: i,
                                container: o.pageMarginBox,
                                subject: t,
                                center: n,
                                shouldUseTimeDampening: a
                            });
                            return l && mt(r, l) ? l : null
                        }({
                            dragStartTime: t,
                            droppable: u,
                            subject: l,
                            center: o,
                            shouldUseTimeDampening: n
                        });
                        d && a(u.descriptor.id, d)
                    }
                },
                ht = function(e) {
                    var r = e.move,
                        t = e.scrollDroppable,
                        n = e.scrollWindow,
                        i = function(e, r) {
                            if (!mt(e, r)) return r;
                            var n = function(e, r) {
                                var t = e.frame;
                                return t && mt(e, r) ? ft({
                                    current: t.scroll.current,
                                    max: t.scroll.max,
                                    change: r
                                }) : null
                            }(e, r);
                            if (!n) return t(e.descriptor.id, r), null;
                            var i = S(r, n);
                            return t(e.descriptor.id, i), S(r, i)
                        },
                        a = function(e, r, t) {
                            if (!e) return t;
                            if (!vt(r, t)) return t;
                            var i = function(e, r) {
                                if (!vt(e, r)) return null;
                                var t = e.scroll.max,
                                    n = e.scroll.current;
                                return ft({
                                    current: n,
                                    max: t,
                                    change: r
                                })
                            }(r, t);
                            if (!i) return n(t), null;
                            var a = S(t, i);
                            return n(a), S(t, a)
                        };
                    return function(e) {
                        var t = e.scrollJumpRequest;
                        if (t) {
                            var n = _e(e.impact);
                            n || h(!1);
                            var o = i(e.dimensions.droppables[n], t);
                            if (o) {
                                var l = e.viewport,
                                    c = a(e.isWindowScrollAllowed, l, o);
                                c && function(e, t) {
                                    var n = N(e.current.client.selection, t);
                                    r({
                                        client: n
                                    })
                                }(e, c)
                            }
                        }
                    }
                },
                It = function(e) {
                    var r = e.scrollDroppable,
                        t = e.scrollWindow,
                        n = e.move,
                        i = function(e) {
                            var r = e.scrollWindow,
                                t = e.scrollDroppable,
                                n = (0, s.Z)(r),
                                i = (0, s.Z)(t),
                                a = null,
                                o = function(e) {
                                    a || h(!1);
                                    var r = a,
                                        t = r.shouldUseTimeDampening,
                                        o = r.dragStartTime;
                                    bt({
                                        state: e,
                                        scrollWindow: n,
                                        scrollDroppable: i,
                                        dragStartTime: o,
                                        shouldUseTimeDampening: t
                                    })
                                };
                            return {
                                start: function(e) {
                                    $e(), a && h(!1);
                                    var r = Date.now(),
                                        t = !1,
                                        n = function() {
                                            t = !0
                                        };
                                    bt({
                                        state: e,
                                        dragStartTime: 0,
                                        shouldUseTimeDampening: !1,
                                        scrollWindow: n,
                                        scrollDroppable: n
                                    }), a = {
                                        dragStartTime: r,
                                        shouldUseTimeDampening: t
                                    }, Qe(), t && o(e)
                                },
                                stop: function() {
                                    a && (n.cancel(), i.cancel(), a = null)
                                },
                                scroll: o
                            }
                        }({
                            scrollWindow: t,
                            scrollDroppable: r
                        }),
                        a = ht({
                            move: n,
                            scrollWindow: t,
                            scrollDroppable: r
                        });
                    return {
                        scroll: function(e) {
                            "DRAGGING" === e.phase && ("FLUID" !== e.movementMode ? e.scrollJumpRequest && a(e) : i.scroll(e))
                        },
                        start: i.start,
                        stop: i.stop
                    }
                },
                yt = function() {
                    var e = "data-rbd-drag-handle";
                    return {
                        base: e,
                        draggableId: e + "-draggable-id",
                        contextId: e + "-context-id"
                    }
                }(),
                Dt = function() {
                    var e = "data-rbd-draggable";
                    return {
                        base: e,
                        contextId: e + "-context-id",
                        id: e + "-id"
                    }
                }(),
                xt = function() {
                    var e = "data-rbd-droppable";
                    return {
                        base: e,
                        contextId: e + "-context-id",
                        id: e + "-id"
                    }
                }(),
                Et = {
                    contextId: "data-rbd-scroll-container-context-id"
                },
                wt = function(e, r) {
                    return e.map((function(e) {
                        var t = e.styles[r];
                        return t ? e.selector + " { " + t + " }" : ""
                    })).join(" ")
                },
                Ct = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? n.useLayoutEffect : n.useEffect,
                At = function() {
                    var e = document.querySelector("head");
                    return e || h(!1), e
                },
                Bt = function(e) {
                    var r = document.createElement("style");
                    return e && r.setAttribute("nonce", e), r.type = "text/css", r
                };

            function Rt(e, r) {
                var t = (0, c.Ye)((function() {
                        return function(e) {
                            var r, t = (r = e, function(e) {
                                    return "[" + e + '="' + r + '"]'
                                }),
                                n = function() {
                                    var e = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
                                    return {
                                        selector: t(yt.contextId),
                                        styles: {
                                            always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                                            resting: e,
                                            dragging: "pointer-events: none;",
                                            dropAnimating: e
                                        }
                                    }
                                }(),
                                i = [function() {
                                    var e = "\n      transition: " + Er.outOfTheWay + ";\n    ";
                                    return {
                                        selector: t(Dt.contextId),
                                        styles: {
                                            dragging: e,
                                            dropAnimating: e,
                                            userCancel: e
                                        }
                                    }
                                }(), n, {
                                    selector: t(xt.contextId),
                                    styles: {
                                        always: "overflow-anchor: none;"
                                    }
                                }, {
                                    selector: "body",
                                    styles: {
                                        dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
                                    }
                                }];
                            return {
                                always: wt(i, "always"),
                                resting: wt(i, "resting"),
                                dragging: wt(i, "dragging"),
                                dropAnimating: wt(i, "dropAnimating"),
                                userCancel: wt(i, "userCancel")
                            }
                        }(e)
                    }), [e]),
                    i = (0, n.useRef)(null),
                    a = (0, n.useRef)(null),
                    o = (0, c.I4)((0, d.default)((function(e) {
                        var r = a.current;
                        r || h(!1), r.textContent = e
                    })), []),
                    l = (0, c.I4)((function(e) {
                        var r = i.current;
                        r || h(!1), r.textContent = e
                    }), []);
                Ct((function() {
                    (i.current || a.current) && h(!1);
                    var n = Bt(r),
                        c = Bt(r);
                    return i.current = n, a.current = c, n.setAttribute("data-rbd-always", e), c.setAttribute("data-rbd-dynamic", e), At().appendChild(n), At().appendChild(c), l(t.always), o(t.resting),
                        function() {
                            var e = function(e) {
                                var r = e.current;
                                r || h(!1), At().removeChild(r), e.current = null
                            };
                            e(i), e(a)
                        }
                }), [r, l, o, t.always, t.resting, e]);
                var u = (0, c.I4)((function() {
                        return o(t.dragging)
                    }), [o, t.dragging]),
                    s = (0, c.I4)((function(e) {
                        o("DROP" !== e ? t.userCancel : t.dropAnimating)
                    }), [o, t.dropAnimating, t.userCancel]),
                    p = (0, c.I4)((function() {
                        a.current && o(t.resting)
                    }), [o, t.resting]);
                return (0, c.Ye)((function() {
                    return {
                        dragging: u,
                        dropping: s,
                        resting: p
                    }
                }), [u, s, p])
            }
            var Nt = function(e) {
                return e && e.ownerDocument ? e.ownerDocument.defaultView : window
            };

            function St(e) {
                return e instanceof Nt(e).HTMLElement
            }

            function Pt(e, r) {
                var t = "[" + yt.contextId + '="' + e + '"]',
                    n = j(document.querySelectorAll(t));
                if (!n.length) return null;
                var i = Z(n, (function(e) {
                    return e.getAttribute(yt.draggableId) === r
                }));
                return i && St(i) ? i : null
            }

            function Ot() {
                var e = {
                        draggables: {},
                        droppables: {}
                    },
                    r = [];

                function t(e) {
                    r.length && r.forEach((function(r) {
                        return r(e)
                    }))
                }

                function n(r) {
                    return e.draggables[r] || null
                }

                function i(r) {
                    return e.droppables[r] || null
                }
                return {
                    draggable: {
                        register: function(r) {
                            e.draggables[r.descriptor.id] = r, t({
                                type: "ADDITION",
                                value: r
                            })
                        },
                        update: function(r, t) {
                            var n = e.draggables[t.descriptor.id];
                            n && n.uniqueId === r.uniqueId && (delete e.draggables[t.descriptor.id], e.draggables[r.descriptor.id] = r)
                        },
                        unregister: function(r) {
                            var i = r.descriptor.id,
                                a = n(i);
                            a && r.uniqueId === a.uniqueId && (delete e.draggables[i], t({
                                type: "REMOVAL",
                                value: r
                            }))
                        },
                        getById: function(e) {
                            var r = n(e);
                            return r || h(!1), r
                        },
                        findById: n,
                        exists: function(e) {
                            return Boolean(n(e))
                        },
                        getAllByType: function(r) {
                            return H(e.draggables).filter((function(e) {
                                return e.descriptor.type === r
                            }))
                        }
                    },
                    droppable: {
                        register: function(r) {
                            e.droppables[r.descriptor.id] = r
                        },
                        unregister: function(r) {
                            var t = i(r.descriptor.id);
                            t && r.uniqueId === t.uniqueId && delete e.droppables[r.descriptor.id]
                        },
                        getById: function(e) {
                            var r = i(e);
                            return r || h(!1), r
                        },
                        findById: i,
                        exists: function(e) {
                            return Boolean(i(e))
                        },
                        getAllByType: function(r) {
                            return H(e.droppables).filter((function(e) {
                                return e.descriptor.type === r
                            }))
                        }
                    },
                    subscribe: function(e) {
                        return r.push(e),
                            function() {
                                var t = r.indexOf(e); - 1 !== t && r.splice(t, 1)
                            }
                    },
                    clean: function() {
                        e.draggables = {}, e.droppables = {}, r.length = 0
                    }
                }
            }
            var Lt = n.createContext(null),
                Tt = function() {
                    var e = document.body;
                    return e || h(!1), e
                },
                Gt = {
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    margin: "-1px",
                    border: "0",
                    padding: "0",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    "clip-path": "inset(100%)"
                };
            var Mt = 0,
                _t = {
                    separator: "::"
                };

            function Ft(e, r) {
                return void 0 === r && (r = _t), (0, c.Ye)((function() {
                    return "" + e + r.separator + Mt++
                }), [r.separator, e])
            }
            var kt = n.createContext(null);

            function Wt(e) {
                0
            }

            function Ut(e, r) {
                Wt()
            }

            function Ht() {
                Ut()
            }

            function Yt(e) {
                var r = (0, n.useRef)(e);
                return (0, n.useEffect)((function() {
                    r.current = e
                })), r
            }
            var Zt, jt = ((Zt = {})[13] = !0, Zt[9] = !0, Zt),
                Vt = function(e) {
                    jt[e.keyCode] && e.preventDefault()
                },
                zt = function() {
                    var e = "visibilitychange";
                    return "undefined" === typeof document ? e : Z([e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], (function(e) {
                        return "on" + e in document
                    })) || e
                }();
            var qt, Jt = {
                type: "IDLE"
            };

            function Xt(e) {
                var r = e.cancel,
                    t = e.completed,
                    n = e.getPhase,
                    i = e.setPhase;
                return [{
                    eventName: "mousemove",
                    fn: function(e) {
                        var r = e.button,
                            t = e.clientX,
                            a = e.clientY;
                        if (0 === r) {
                            var o = {
                                    x: t,
                                    y: a
                                },
                                l = n();
                            if ("DRAGGING" === l.type) return e.preventDefault(), void l.actions.move(o);
                            "PENDING" !== l.type && h(!1);
                            var c = l.point;
                            if (u = c, d = o, Math.abs(d.x - u.x) >= 5 || Math.abs(d.y - u.y) >= 5) {
                                var u, d;
                                e.preventDefault();
                                var s = l.actions.fluidLift(o);
                                i({
                                    type: "DRAGGING",
                                    actions: s
                                })
                            }
                        }
                    }
                }, {
                    eventName: "mouseup",
                    fn: function(e) {
                        var i = n();
                        "DRAGGING" === i.type ? (e.preventDefault(), i.actions.drop({
                            shouldBlockNextClick: !0
                        }), t()) : r()
                    }
                }, {
                    eventName: "mousedown",
                    fn: function(e) {
                        "DRAGGING" === n().type && e.preventDefault(), r()
                    }
                }, {
                    eventName: "keydown",
                    fn: function(e) {
                        if ("PENDING" !== n().type) return 27 === e.keyCode ? (e.preventDefault(), void r()) : void Vt(e);
                        r()
                    }
                }, {
                    eventName: "resize",
                    fn: r
                }, {
                    eventName: "scroll",
                    options: {
                        passive: !0,
                        capture: !1
                    },
                    fn: function() {
                        "PENDING" === n().type && r()
                    }
                }, {
                    eventName: "webkitmouseforcedown",
                    fn: function(e) {
                        var t = n();
                        "IDLE" === t.type && h(!1), t.actions.shouldRespectForcePress() ? r() : e.preventDefault()
                    }
                }, {
                    eventName: zt,
                    fn: r
                }]
            }

            function Kt() {}
            var $t = ((qt = {})[34] = !0, qt[33] = !0, qt[36] = !0, qt[35] = !0, qt);

            function Qt(e, r) {
                function t() {
                    r(), e.cancel()
                }
                return [{
                    eventName: "keydown",
                    fn: function(n) {
                        return 27 === n.keyCode ? (n.preventDefault(), void t()) : 32 === n.keyCode ? (n.preventDefault(), r(), void e.drop()) : 40 === n.keyCode ? (n.preventDefault(), void e.moveDown()) : 38 === n.keyCode ? (n.preventDefault(), void e.moveUp()) : 39 === n.keyCode ? (n.preventDefault(), void e.moveRight()) : 37 === n.keyCode ? (n.preventDefault(), void e.moveLeft()) : void($t[n.keyCode] ? n.preventDefault() : Vt(n))
                    }
                }, {
                    eventName: "mousedown",
                    fn: t
                }, {
                    eventName: "mouseup",
                    fn: t
                }, {
                    eventName: "click",
                    fn: t
                }, {
                    eventName: "touchstart",
                    fn: t
                }, {
                    eventName: "resize",
                    fn: t
                }, {
                    eventName: "wheel",
                    fn: t,
                    options: {
                        passive: !0
                    }
                }, {
                    eventName: zt,
                    fn: t
                }]
            }
            var en = {
                type: "IDLE"
            };
            var rn = {
                input: !0,
                button: !0,
                textarea: !0,
                select: !0,
                option: !0,
                optgroup: !0,
                video: !0,
                audio: !0
            };

            function tn(e, r) {
                if (null == r) return !1;
                if (Boolean(rn[r.tagName.toLowerCase()])) return !0;
                var t = r.getAttribute("contenteditable");
                return "true" === t || "" === t || r !== e && tn(e, r.parentElement)
            }

            function nn(e, r) {
                var t = r.target;
                return !!St(t) && tn(e, t)
            }
            var an = function(e) {
                return (0, u.Dz)(e.getBoundingClientRect()).center
            };
            var on = function() {
                var e = "matches";
                return "undefined" === typeof document ? e : Z([e, "msMatchesSelector", "webkitMatchesSelector"], (function(e) {
                    return e in Element.prototype
                })) || e
            }();

            function ln(e, r) {
                return null == e ? null : e[on](r) ? e : ln(e.parentElement, r)
            }

            function cn(e, r) {
                return e.closest ? e.closest(r) : ln(e, r)
            }

            function un(e, r) {
                var t, n = r.target;
                if (!((t = n) instanceof Nt(t).Element)) return null;
                var i = function(e) {
                        return "[" + yt.contextId + '="' + e + '"]'
                    }(e),
                    a = cn(n, i);
                return a && St(a) ? a : null
            }

            function dn(e) {
                e.preventDefault()
            }

            function sn(e) {
                var r = e.expected,
                    t = e.phase,
                    n = e.isLockActive;
                e.shouldWarn;
                return !!n() && r === t
            }

            function pn(e) {
                var r = e.lockAPI,
                    t = e.store,
                    n = e.registry,
                    i = e.draggableId;
                if (r.isClaimed()) return !1;
                var a = n.draggable.findById(i);
                return !!a && (!!a.options.isEnabled && !!Xr(t.getState(), i))
            }

            function fn(e) {
                var r = e.lockAPI,
                    t = e.contextId,
                    n = e.store,
                    i = e.registry,
                    o = e.draggableId,
                    l = e.forceSensorStop,
                    c = e.sourceEvent;
                if (!pn({
                        lockAPI: r,
                        store: n,
                        registry: i,
                        draggableId: o
                    })) return null;
                var u = i.draggable.getById(o),
                    d = function(e, r) {
                        var t = "[" + Dt.contextId + '="' + e + '"]',
                            n = Z(j(document.querySelectorAll(t)), (function(e) {
                                return e.getAttribute(Dt.id) === r
                            }));
                        return n && St(n) ? n : null
                    }(t, u.descriptor.id);
                if (!d) return null;
                if (c && !u.options.canDragInteractiveElements && nn(d, c)) return null;
                var p = r.claim(l || g),
                    f = "PRE_DRAG";

                function m() {
                    return u.options.shouldRespectForcePress
                }

                function b() {
                    return r.isActive(p)
                }
                var I = function(e, r) {
                    sn({
                        expected: e,
                        phase: f,
                        isLockActive: b,
                        shouldWarn: !0
                    }) && n.dispatch(r())
                }.bind(null, "DRAGGING");

                function y(e) {
                    function t() {
                        r.release(), f = "COMPLETED"
                    }

                    function i(r, i) {
                        if (void 0 === i && (i = {
                                shouldBlockNextClick: !1
                            }), e.cleanup(), i.shouldBlockNextClick) {
                            var a = v(window, [{
                                eventName: "click",
                                fn: dn,
                                options: {
                                    once: !0,
                                    passive: !1,
                                    capture: !0
                                }
                            }]);
                            setTimeout(a)
                        }
                        t(), n.dispatch(br({
                            reason: r
                        }))
                    }
                    return "PRE_DRAG" !== f && (t(), "PRE_DRAG" !== f && h(!1)), n.dispatch(function(e) {
                        return {
                            type: "LIFT",
                            payload: e
                        }
                    }(e.liftActionArgs)), f = "DRAGGING", (0, a.Z)({
                        isActive: function() {
                            return sn({
                                expected: "DRAGGING",
                                phase: f,
                                isLockActive: b,
                                shouldWarn: !1
                            })
                        },
                        shouldRespectForcePress: m,
                        drop: function(e) {
                            return i("DROP", e)
                        },
                        cancel: function(e) {
                            return i("CANCEL", e)
                        }
                    }, e.actions)
                }
                return {
                    isActive: function() {
                        return sn({
                            expected: "PRE_DRAG",
                            phase: f,
                            isLockActive: b,
                            shouldWarn: !1
                        })
                    },
                    shouldRespectForcePress: m,
                    fluidLift: function(e) {
                        var r = (0, s.Z)((function(e) {
                                I((function() {
                                    return sr({
                                        client: e
                                    })
                                }))
                            })),
                            t = y({
                                liftActionArgs: {
                                    id: o,
                                    clientSelection: e,
                                    movementMode: "FLUID"
                                },
                                cleanup: function() {
                                    return r.cancel()
                                },
                                actions: {
                                    move: r
                                }
                            });
                        return (0, a.Z)({}, t, {
                            move: r
                        })
                    },
                    snapLift: function() {
                        var e = {
                            moveUp: function() {
                                return I(pr)
                            },
                            moveRight: function() {
                                return I(gr)
                            },
                            moveDown: function() {
                                return I(fr)
                            },
                            moveLeft: function() {
                                return I(vr)
                            }
                        };
                        return y({
                            liftActionArgs: {
                                id: o,
                                clientSelection: an(d),
                                movementMode: "SNAP"
                            },
                            cleanup: g,
                            actions: e
                        })
                    },
                    abort: function() {
                        sn({
                            expected: "PRE_DRAG",
                            phase: f,
                            isLockActive: b,
                            shouldWarn: !0
                        }) && r.release()
                    }
                }
            }
            var gn = [function(e) {
                var r = (0, n.useRef)(Jt),
                    t = (0, n.useRef)(g),
                    i = (0, c.Ye)((function() {
                        return {
                            eventName: "mousedown",
                            fn: function(r) {
                                if (!r.defaultPrevented && 0 === r.button && !(r.ctrlKey || r.metaKey || r.shiftKey || r.altKey)) {
                                    var n = e.findClosestDraggableId(r);
                                    if (n) {
                                        var i = e.tryGetLock(n, l, {
                                            sourceEvent: r
                                        });
                                        if (i) {
                                            r.preventDefault();
                                            var a = {
                                                x: r.clientX,
                                                y: r.clientY
                                            };
                                            t.current(), s(i, a)
                                        }
                                    }
                                }
                            }
                        }
                    }), [e]),
                    a = (0, c.Ye)((function() {
                        return {
                            eventName: "webkitmouseforcewillbegin",
                            fn: function(r) {
                                if (!r.defaultPrevented) {
                                    var t = e.findClosestDraggableId(r);
                                    if (t) {
                                        var n = e.findOptionsForDraggable(t);
                                        n && (n.shouldRespectForcePress || e.canGetLock(t) && r.preventDefault())
                                    }
                                }
                            }
                        }
                    }), [e]),
                    o = (0, c.I4)((function() {
                        t.current = v(window, [a, i], {
                            passive: !1,
                            capture: !0
                        })
                    }), [a, i]),
                    l = (0, c.I4)((function() {
                        "IDLE" !== r.current.type && (r.current = Jt, t.current(), o())
                    }), [o]),
                    u = (0, c.I4)((function() {
                        var e = r.current;
                        l(), "DRAGGING" === e.type && e.actions.cancel({
                            shouldBlockNextClick: !0
                        }), "PENDING" === e.type && e.actions.abort()
                    }), [l]),
                    d = (0, c.I4)((function() {
                        var e = Xt({
                            cancel: u,
                            completed: l,
                            getPhase: function() {
                                return r.current
                            },
                            setPhase: function(e) {
                                r.current = e
                            }
                        });
                        t.current = v(window, e, {
                            capture: !0,
                            passive: !1
                        })
                    }), [u, l]),
                    s = (0, c.I4)((function(e, t) {
                        "IDLE" !== r.current.type && h(!1), r.current = {
                            type: "PENDING",
                            point: t,
                            actions: e
                        }, d()
                    }), [d]);
                Ct((function() {
                    return o(),
                        function() {
                            t.current()
                        }
                }), [o])
            }, function(e) {
                var r = (0, n.useRef)(Kt),
                    t = (0, c.Ye)((function() {
                        return {
                            eventName: "keydown",
                            fn: function(t) {
                                if (!t.defaultPrevented && 32 === t.keyCode) {
                                    var n = e.findClosestDraggableId(t);
                                    if (n) {
                                        var a = e.tryGetLock(n, c, {
                                            sourceEvent: t
                                        });
                                        if (a) {
                                            t.preventDefault();
                                            var o = !0,
                                                l = a.snapLift();
                                            r.current(), r.current = v(window, Qt(l, c), {
                                                capture: !0,
                                                passive: !1
                                            })
                                        }
                                    }
                                }

                                function c() {
                                    o || h(!1), o = !1, r.current(), i()
                                }
                            }
                        }
                    }), [e]),
                    i = (0, c.I4)((function() {
                        r.current = v(window, [t], {
                            passive: !1,
                            capture: !0
                        })
                    }), [t]);
                Ct((function() {
                    return i(),
                        function() {
                            r.current()
                        }
                }), [i])
            }, function(e) {
                var r = (0, n.useRef)(en),
                    t = (0, n.useRef)(g),
                    i = (0, c.I4)((function() {
                        return r.current
                    }), []),
                    a = (0, c.I4)((function(e) {
                        r.current = e
                    }), []),
                    o = (0, c.Ye)((function() {
                        return {
                            eventName: "touchstart",
                            fn: function(r) {
                                if (!r.defaultPrevented) {
                                    var n = e.findClosestDraggableId(r);
                                    if (n) {
                                        var i = e.tryGetLock(n, u, {
                                            sourceEvent: r
                                        });
                                        if (i) {
                                            var a = r.touches[0],
                                                o = {
                                                    x: a.clientX,
                                                    y: a.clientY
                                                };
                                            t.current(), f(i, o)
                                        }
                                    }
                                }
                            }
                        }
                    }), [e]),
                    l = (0, c.I4)((function() {
                        t.current = v(window, [o], {
                            capture: !0,
                            passive: !1
                        })
                    }), [o]),
                    u = (0, c.I4)((function() {
                        var e = r.current;
                        "IDLE" !== e.type && ("PENDING" === e.type && clearTimeout(e.longPressTimerId), a(en), t.current(), l())
                    }), [l, a]),
                    d = (0, c.I4)((function() {
                        var e = r.current;
                        u(), "DRAGGING" === e.type && e.actions.cancel({
                            shouldBlockNextClick: !0
                        }), "PENDING" === e.type && e.actions.abort()
                    }), [u]),
                    s = (0, c.I4)((function() {
                        var e = {
                                capture: !0,
                                passive: !1
                            },
                            r = {
                                cancel: d,
                                completed: u,
                                getPhase: i
                            },
                            n = v(window, function(e) {
                                var r = e.cancel,
                                    t = e.completed,
                                    n = e.getPhase;
                                return [{
                                    eventName: "touchmove",
                                    options: {
                                        capture: !1
                                    },
                                    fn: function(e) {
                                        var t = n();
                                        if ("DRAGGING" === t.type) {
                                            t.hasMoved = !0;
                                            var i = e.touches[0],
                                                a = {
                                                    x: i.clientX,
                                                    y: i.clientY
                                                };
                                            e.preventDefault(), t.actions.move(a)
                                        } else r()
                                    }
                                }, {
                                    eventName: "touchend",
                                    fn: function(e) {
                                        var i = n();
                                        "DRAGGING" === i.type ? (e.preventDefault(), i.actions.drop({
                                            shouldBlockNextClick: !0
                                        }), t()) : r()
                                    }
                                }, {
                                    eventName: "touchcancel",
                                    fn: function(e) {
                                        "DRAGGING" === n().type ? (e.preventDefault(), r()) : r()
                                    }
                                }, {
                                    eventName: "touchforcechange",
                                    fn: function(e) {
                                        var t = n();
                                        "IDLE" === t.type && h(!1);
                                        var i = e.touches[0];
                                        if (i && i.force >= .15) {
                                            var a = t.actions.shouldRespectForcePress();
                                            if ("PENDING" !== t.type) return a ? t.hasMoved ? void e.preventDefault() : void r() : void e.preventDefault();
                                            a && r()
                                        }
                                    }
                                }, {
                                    eventName: zt,
                                    fn: r
                                }]
                            }(r), e),
                            a = v(window, function(e) {
                                var r = e.cancel,
                                    t = e.getPhase;
                                return [{
                                    eventName: "orientationchange",
                                    fn: r
                                }, {
                                    eventName: "resize",
                                    fn: r
                                }, {
                                    eventName: "contextmenu",
                                    fn: function(e) {
                                        e.preventDefault()
                                    }
                                }, {
                                    eventName: "keydown",
                                    fn: function(e) {
                                        "DRAGGING" === t().type ? (27 === e.keyCode && e.preventDefault(), r()) : r()
                                    }
                                }, {
                                    eventName: zt,
                                    fn: r
                                }]
                            }(r), e);
                        t.current = function() {
                            n(), a()
                        }
                    }), [d, i, u]),
                    p = (0, c.I4)((function() {
                        var e = i();
                        "PENDING" !== e.type && h(!1);
                        var r = e.actions.fluidLift(e.point);
                        a({
                            type: "DRAGGING",
                            actions: r,
                            hasMoved: !1
                        })
                    }), [i, a]),
                    f = (0, c.I4)((function(e, r) {
                        "IDLE" !== i().type && h(!1);
                        var t = setTimeout(p, 120);
                        a({
                            type: "PENDING",
                            point: r,
                            actions: e,
                            longPressTimerId: t
                        }), s()
                    }), [s, i, a, p]);
                Ct((function() {
                    return l(),
                        function() {
                            t.current();
                            var e = i();
                            "PENDING" === e.type && (clearTimeout(e.longPressTimerId), a(en))
                        }
                }), [i, l, a]), Ct((function() {
                    return v(window, [{
                        eventName: "touchmove",
                        fn: function() {},
                        options: {
                            capture: !1,
                            passive: !1
                        }
                    }])
                }), [])
            }];

            function vn(e) {
                var r = e.contextId,
                    t = e.store,
                    i = e.registry,
                    a = e.customSensors,
                    o = e.enableDefaultSensors,
                    l = [].concat(o ? gn : [], a || []),
                    u = (0, n.useState)((function() {
                        return function() {
                            var e = null;

                            function r() {
                                e || h(!1), e = null
                            }
                            return {
                                isClaimed: function() {
                                    return Boolean(e)
                                },
                                isActive: function(r) {
                                    return r === e
                                },
                                claim: function(r) {
                                    e && h(!1);
                                    var t = {
                                        abandon: r
                                    };
                                    return e = t, t
                                },
                                release: r,
                                tryAbandon: function() {
                                    e && (e.abandon(), r())
                                }
                            }
                        }()
                    }))[0],
                    d = (0, c.I4)((function(e, r) {
                        e.isDragging && !r.isDragging && u.tryAbandon()
                    }), [u]);
                Ct((function() {
                    var e = t.getState();
                    return t.subscribe((function() {
                        var r = t.getState();
                        d(e, r), e = r
                    }))
                }), [u, t, d]), Ct((function() {
                    return u.tryAbandon
                }), [u.tryAbandon]);
                var s = (0, c.I4)((function(e) {
                        return pn({
                            lockAPI: u,
                            registry: i,
                            store: t,
                            draggableId: e
                        })
                    }), [u, i, t]),
                    p = (0, c.I4)((function(e, n, a) {
                        return fn({
                            lockAPI: u,
                            registry: i,
                            contextId: r,
                            store: t,
                            draggableId: e,
                            forceSensorStop: n,
                            sourceEvent: a && a.sourceEvent ? a.sourceEvent : null
                        })
                    }), [r, u, i, t]),
                    f = (0, c.I4)((function(e) {
                        return function(e, r) {
                            var t = un(e, r);
                            return t ? t.getAttribute(yt.draggableId) : null
                        }(r, e)
                    }), [r]),
                    g = (0, c.I4)((function(e) {
                        var r = i.draggable.findById(e);
                        return r ? r.options : null
                    }), [i.draggable]),
                    v = (0, c.I4)((function() {
                        u.isClaimed() && (u.tryAbandon(), "IDLE" !== t.getState().phase && t.dispatch({
                            type: "FLUSH",
                            payload: null
                        }))
                    }), [u, t]),
                    m = (0, c.I4)(u.isClaimed, [u]),
                    b = (0, c.Ye)((function() {
                        return {
                            canGetLock: s,
                            tryGetLock: p,
                            findClosestDraggableId: f,
                            findOptionsForDraggable: g,
                            tryReleaseLock: v,
                            isLockClaimed: m
                        }
                    }), [s, p, f, g, v, m]);
                Wt();
                for (var I = 0; I < l.length; I++) l[I](b)
            }

            function mn(e) {
                return e.current || h(!1), e.current
            }

            function bn(e) {
                var r = e.contextId,
                    t = e.setCallbacks,
                    i = e.sensors,
                    u = e.nonce,
                    d = e.dragHandleUsageInstructions,
                    s = (0, n.useRef)(null);
                Ht();
                var p = Yt(e),
                    f = (0, c.I4)((function() {
                        return function(e) {
                            return {
                                onBeforeCapture: e.onBeforeCapture,
                                onBeforeDragStart: e.onBeforeDragStart,
                                onDragStart: e.onDragStart,
                                onDragEnd: e.onDragEnd,
                                onDragUpdate: e.onDragUpdate
                            }
                        }(p.current)
                    }), [p]),
                    g = function(e) {
                        var r = (0, c.Ye)((function() {
                                return function(e) {
                                    return "rbd-announcement-" + e
                                }(e)
                            }), [e]),
                            t = (0, n.useRef)(null);
                        return (0, n.useEffect)((function() {
                            var e = document.createElement("div");
                            return t.current = e, e.id = r, e.setAttribute("aria-live", "assertive"), e.setAttribute("aria-atomic", "true"), (0, a.Z)(e.style, Gt), Tt().appendChild(e),
                                function() {
                                    setTimeout((function() {
                                        var r = Tt();
                                        r.contains(e) && r.removeChild(e), e === t.current && (t.current = null)
                                    }))
                                }
                        }), [r]), (0, c.I4)((function(e) {
                            var r = t.current;
                            r && (r.textContent = e)
                        }), [])
                    }(r),
                    v = function(e) {
                        var r = e.contextId,
                            t = e.text,
                            i = Ft("hidden-text", {
                                separator: "-"
                            }),
                            a = (0, c.Ye)((function() {
                                return "rbd-hidden-text-" + (e = {
                                    contextId: r,
                                    uniqueId: i
                                }).contextId + "-" + e.uniqueId;
                                var e
                            }), [i, r]);
                        return (0, n.useEffect)((function() {
                            var e = document.createElement("div");
                            return e.id = a, e.textContent = t, e.style.display = "none", Tt().appendChild(e),
                                function() {
                                    var r = Tt();
                                    r.contains(e) && r.removeChild(e)
                                }
                        }), [a, t]), a
                    }({
                        contextId: r,
                        text: d
                    }),
                    m = Rt(r, u),
                    b = (0, c.I4)((function(e) {
                        mn(s).dispatch(e)
                    }), []),
                    h = (0, c.Ye)((function() {
                        return (0, o.DE)({
                            publishWhileDragging: or,
                            updateDroppableScroll: cr,
                            updateDroppableIsEnabled: ur,
                            updateDroppableIsCombineEnabled: dr,
                            collectionStarting: lr
                        }, b)
                    }), [b]),
                    I = function() {
                        var e = (0, c.Ye)(Ot, []);
                        return (0, n.useEffect)((function() {
                            return function() {
                                requestAnimationFrame(e.clean)
                            }
                        }), [e]), e
                    }(),
                    y = (0, c.Ye)((function() {
                        return Jr(I, h)
                    }), [I, h]),
                    D = (0, c.Ye)((function() {
                        return It((0, a.Z)({
                            scrollWindow: Kr,
                            scrollDroppable: y.scrollDroppable
                        }, (0, o.DE)({
                            move: sr
                        }, b)))
                    }), [y.scrollDroppable, b]),
                    x = function(e) {
                        var r = (0, n.useRef)({}),
                            t = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            a = (0, n.useRef)(!1),
                            o = (0, c.I4)((function(e, t) {
                                var n = {
                                    id: e,
                                    focus: t
                                };
                                return r.current[e] = n,
                                    function() {
                                        var t = r.current;
                                        t[e] !== n && delete t[e]
                                    }
                            }), []),
                            l = (0, c.I4)((function(r) {
                                var t = Pt(e, r);
                                t && t !== document.activeElement && t.focus()
                            }), [e]),
                            u = (0, c.I4)((function(e, r) {
                                t.current === e && (t.current = r)
                            }), []),
                            d = (0, c.I4)((function() {
                                i.current || a.current && (i.current = requestAnimationFrame((function() {
                                    i.current = null;
                                    var e = t.current;
                                    e && l(e)
                                })))
                            }), [l]),
                            s = (0, c.I4)((function(e) {
                                t.current = null;
                                var r = document.activeElement;
                                r && r.getAttribute(yt.draggableId) === e && (t.current = e)
                            }), []);
                        return Ct((function() {
                            return a.current = !0,
                                function() {
                                    a.current = !1;
                                    var e = i.current;
                                    e && cancelAnimationFrame(e)
                                }
                        }), []), (0, c.Ye)((function() {
                            return {
                                register: o,
                                tryRecordFocus: s,
                                tryRestoreFocusRecorded: d,
                                tryShiftRecord: u
                            }
                        }), [o, s, d, u])
                    }(r),
                    E = (0, c.Ye)((function() {
                        return Yr({
                            announce: g,
                            autoScroller: D,
                            dimensionMarshal: y,
                            focusMarshal: x,
                            getResponders: f,
                            styleMarshal: m
                        })
                    }), [g, D, y, x, f, m]);
                s.current = E;
                var w = (0, c.I4)((function() {
                        var e = mn(s);
                        "IDLE" !== e.getState().phase && e.dispatch({
                            type: "FLUSH",
                            payload: null
                        })
                    }), []),
                    C = (0, c.I4)((function() {
                        var e = mn(s).getState();
                        return e.isDragging || "DROP_ANIMATING" === e.phase
                    }), []);
                t((0, c.Ye)((function() {
                    return {
                        isDragging: C,
                        tryAbort: w
                    }
                }), [C, w]));
                var A = (0, c.I4)((function(e) {
                        return Xr(mn(s).getState(), e)
                    }), []),
                    B = (0, c.I4)((function() {
                        return ke(mn(s).getState())
                    }), []),
                    R = (0, c.Ye)((function() {
                        return {
                            marshal: y,
                            focus: x,
                            contextId: r,
                            canLift: A,
                            isMovementAllowed: B,
                            dragHandleUsageInstructionsId: v,
                            registry: I
                        }
                    }), [r, y, v, x, A, B, I]);
                return vn({
                    contextId: r,
                    store: E,
                    registry: I,
                    customSensors: i,
                    enableDefaultSensors: !1 !== e.enableDefaultSensors
                }), (0, n.useEffect)((function() {
                    return w
                }), [w]), n.createElement(kt.Provider, {
                    value: R
                }, n.createElement(l.zt, {
                    context: Lt,
                    store: E
                }, e.children))
            }
            var hn = 0;

            function In(e) {
                var r = (0, c.Ye)((function() {
                        return "" + hn++
                    }), []),
                    t = e.dragHandleUsageInstructions || w;
                return n.createElement(I, null, (function(i) {
                    return n.createElement(bn, {
                        nonce: e.nonce,
                        contextId: r,
                        setCallbacks: i,
                        dragHandleUsageInstructions: t,
                        enableDefaultSensors: e.enableDefaultSensors,
                        sensors: e.sensors,
                        onBeforeCapture: e.onBeforeCapture,
                        onBeforeDragStart: e.onBeforeDragStart,
                        onDragStart: e.onDragStart,
                        onDragUpdate: e.onDragUpdate,
                        onDragEnd: e.onDragEnd
                    }, e.children)
                }))
            }
            var yn = function(e) {
                    return function(r) {
                        return e === r
                    }
                },
                Dn = yn("scroll"),
                xn = yn("auto"),
                En = (yn("visible"), function(e, r) {
                    return r(e.overflowX) || r(e.overflowY)
                }),
                wn = function(e) {
                    var r = window.getComputedStyle(e),
                        t = {
                            overflowX: r.overflowX,
                            overflowY: r.overflowY
                        };
                    return En(t, Dn) || En(t, xn)
                },
                Cn = function e(r) {
                    return null == r || r === document.body || r === document.documentElement ? null : wn(r) ? r : e(r.parentElement)
                },
                An = function(e) {
                    return {
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }
                },
                Bn = function e(r) {
                    return !!r && ("fixed" === window.getComputedStyle(r).position || e(r.parentElement))
                },
                Rn = function(e) {
                    return {
                        closestScrollable: Cn(e),
                        isFixedOnPage: Bn(e)
                    }
                },
                Nn = function(e) {
                    var r = e.ref,
                        t = e.descriptor,
                        n = e.env,
                        i = e.windowScroll,
                        a = e.direction,
                        o = e.isDropDisabled,
                        l = e.isCombineEnabled,
                        c = e.shouldClipSubject,
                        d = n.closestScrollable,
                        s = function(e, r) {
                            var t = (0, u.iz)(e);
                            if (!r) return t;
                            if (e !== r) return t;
                            var n = t.paddingBox.top - r.scrollTop,
                                i = t.paddingBox.left - r.scrollLeft,
                                a = n + r.scrollHeight,
                                o = {
                                    top: n,
                                    right: i + r.scrollWidth,
                                    bottom: a,
                                    left: i
                                },
                                l = (0, u.jn)(o, t.border);
                            return (0, u.dO)({
                                borderBox: l,
                                margin: t.margin,
                                border: t.border,
                                padding: t.padding
                            })
                        }(r, d),
                        p = (0, u.oc)(s, i),
                        f = function() {
                            if (!d) return null;
                            var e = (0, u.iz)(d),
                                r = {
                                    scrollHeight: d.scrollHeight,
                                    scrollWidth: d.scrollWidth
                                };
                            return {
                                client: e,
                                page: (0, u.oc)(e, i),
                                scroll: An(d),
                                scrollSize: r,
                                shouldClipSubject: c
                            }
                        }(),
                        g = function(e) {
                            var r = e.descriptor,
                                t = e.isEnabled,
                                n = e.isCombineEnabled,
                                i = e.isFixedOnPage,
                                a = e.direction,
                                o = e.client,
                                l = e.page,
                                c = e.closest,
                                u = function() {
                                    if (!c) return null;
                                    var e = c.scrollSize,
                                        r = c.client,
                                        t = Zr({
                                            scrollHeight: e.scrollHeight,
                                            scrollWidth: e.scrollWidth,
                                            height: r.paddingBox.height,
                                            width: r.paddingBox.width
                                        });
                                    return {
                                        pageMarginBox: c.page.marginBox,
                                        frameClient: r,
                                        scrollSize: e,
                                        shouldClipSubject: c.shouldClipSubject,
                                        scroll: {
                                            initial: c.scroll,
                                            current: c.scroll,
                                            max: t,
                                            diff: {
                                                value: R,
                                                displacement: R
                                            }
                                        }
                                    }
                                }(),
                                d = "vertical" === a ? le : ce;
                            return {
                                descriptor: r,
                                isCombineEnabled: n,
                                isFixedOnPage: i,
                                axis: d,
                                isEnabled: t,
                                client: o,
                                page: l,
                                frame: u,
                                subject: W({
                                    page: l,
                                    withPlaceholder: null,
                                    axis: d,
                                    frame: u
                                })
                            }
                        }({
                            descriptor: t,
                            isEnabled: !o,
                            isCombineEnabled: l,
                            isFixedOnPage: n.isFixedOnPage,
                            direction: a,
                            client: s,
                            page: p,
                            closest: f
                        });
                    return g
                },
                Sn = {
                    passive: !1
                },
                Pn = {
                    passive: !0
                },
                On = function(e) {
                    return e.shouldPublishImmediately ? Sn : Pn
                };

            function Ln(e) {
                var r = (0, n.useContext)(e);
                return r || h(!1), r
            }
            var Tn = function(e) {
                return e && e.env.closestScrollable || null
            };

            function Gn() {}
            var Mn = {
                    width: 0,
                    height: 0,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                },
                _n = function(e) {
                    var r = e.isAnimatingOpenOnMount,
                        t = e.placeholder,
                        n = e.animate,
                        i = function(e) {
                            var r = e.isAnimatingOpenOnMount,
                                t = e.placeholder,
                                n = e.animate;
                            return r || "close" === n ? Mn : {
                                height: t.client.borderBox.height,
                                width: t.client.borderBox.width,
                                margin: t.client.margin
                            }
                        }({
                            isAnimatingOpenOnMount: r,
                            placeholder: t,
                            animate: n
                        });
                    return {
                        display: t.display,
                        boxSizing: "border-box",
                        width: i.width,
                        height: i.height,
                        marginTop: i.margin.top,
                        marginRight: i.margin.right,
                        marginBottom: i.margin.bottom,
                        marginLeft: i.margin.left,
                        flexShrink: "0",
                        flexGrow: "0",
                        pointerEvents: "none",
                        transition: "none" !== n ? Er.placeholder : null
                    }
                };
            var Fn = n.memo((function(e) {
                    var r = (0, n.useRef)(null),
                        t = (0, c.I4)((function() {
                            r.current && (clearTimeout(r.current), r.current = null)
                        }), []),
                        i = e.animate,
                        a = e.onTransitionEnd,
                        o = e.onClose,
                        l = e.contextId,
                        u = (0, n.useState)("open" === e.animate),
                        d = u[0],
                        s = u[1];
                    (0, n.useEffect)((function() {
                        return d ? "open" !== i ? (t(), s(!1), Gn) : r.current ? Gn : (r.current = setTimeout((function() {
                            r.current = null, s(!1)
                        })), t) : Gn
                    }), [i, d, t]);
                    var p = (0, c.I4)((function(e) {
                            "height" === e.propertyName && (a(), "close" === i && o())
                        }), [i, o, a]),
                        f = _n({
                            isAnimatingOpenOnMount: d,
                            animate: e.animate,
                            placeholder: e.placeholder
                        });
                    return n.createElement(e.placeholder.tagName, {
                        style: f,
                        "data-rbd-placeholder-context-id": l,
                        onTransitionEnd: p,
                        ref: e.innerRef
                    })
                })),
                kn = n.createContext(null);
            var Wn = function(e) {
                    function r() {
                        for (var r, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return (r = e.call.apply(e, [this].concat(n)) || this).state = {
                            isVisible: Boolean(r.props.on),
                            data: r.props.on,
                            animate: r.props.shouldAnimate && r.props.on ? "open" : "none"
                        }, r.onClose = function() {
                            "close" === r.state.animate && r.setState({
                                isVisible: !1
                            })
                        }, r
                    }
                    return (0, i.Z)(r, e), r.getDerivedStateFromProps = function(e, r) {
                        return e.shouldAnimate ? e.on ? {
                            isVisible: !0,
                            data: e.on,
                            animate: "open"
                        } : r.isVisible ? {
                            isVisible: !0,
                            data: r.data,
                            animate: "close"
                        } : {
                            isVisible: !1,
                            animate: "close",
                            data: null
                        } : {
                            isVisible: Boolean(e.on),
                            data: e.on,
                            animate: "none"
                        }
                    }, r.prototype.render = function() {
                        if (!this.state.isVisible) return null;
                        var e = {
                            onClose: this.onClose,
                            data: this.state.data,
                            animate: this.state.animate
                        };
                        return this.props.children(e)
                    }, r
                }(n.PureComponent),
                Un = 5e3,
                Hn = 4500,
                Yn = function(e, r) {
                    return r ? Er.drop(r.duration) : e ? Er.snap : Er.fluid
                },
                Zn = function(e, r) {
                    return e ? r ? yr.drop : yr.combining : null
                };

            function jn(e) {
                return "DRAGGING" === e.type ? function(e) {
                    var r = e.dimension.client,
                        t = e.offset,
                        n = e.combineWith,
                        i = e.dropping,
                        a = Boolean(n),
                        o = function(e) {
                            return null != e.forceShouldAnimate ? e.forceShouldAnimate : "SNAP" === e.mode
                        }(e),
                        l = Boolean(i),
                        c = l ? Ar(t, a) : Cr(t);
                    return {
                        position: "fixed",
                        top: r.marginBox.top,
                        left: r.marginBox.left,
                        boxSizing: "border-box",
                        width: r.borderBox.width,
                        height: r.borderBox.height,
                        transition: Yn(o, i),
                        transform: c,
                        opacity: Zn(a, l),
                        zIndex: l ? Hn : Un,
                        pointerEvents: "none"
                    }
                }(e) : {
                    transform: Cr((r = e).offset),
                    transition: r.shouldAnimateDisplacement ? null : "none"
                };
                var r
            }

            function Vn(e) {
                var r = Ft("draggable"),
                    t = e.descriptor,
                    i = e.registry,
                    a = e.getDraggableRef,
                    o = e.canDragInteractiveElements,
                    l = e.shouldRespectForcePress,
                    d = e.isEnabled,
                    s = (0, c.Ye)((function() {
                        return {
                            canDragInteractiveElements: o,
                            shouldRespectForcePress: l,
                            isEnabled: d
                        }
                    }), [o, d, l]),
                    p = (0, c.I4)((function(e) {
                        var r = a();
                        return r || h(!1),
                            function(e, r, t) {
                                void 0 === t && (t = R);
                                var n = window.getComputedStyle(r),
                                    i = r.getBoundingClientRect(),
                                    a = (0, u.Oq)(i, n),
                                    o = (0, u.oc)(a, t);
                                return {
                                    descriptor: e,
                                    placeholder: {
                                        client: a,
                                        tagName: r.tagName.toLowerCase(),
                                        display: n.display
                                    },
                                    displaceBy: {
                                        x: a.marginBox.width,
                                        y: a.marginBox.height
                                    },
                                    client: a,
                                    page: o
                                }
                            }(t, r, e)
                    }), [t, a]),
                    f = (0, c.Ye)((function() {
                        return {
                            uniqueId: r,
                            descriptor: t,
                            options: s,
                            getDimension: p
                        }
                    }), [t, p, s, r]),
                    g = (0, n.useRef)(f),
                    v = (0, n.useRef)(!0);
                Ct((function() {
                    return i.draggable.register(g.current),
                        function() {
                            return i.draggable.unregister(g.current)
                        }
                }), [i.draggable]), Ct((function() {
                    if (v.current) v.current = !1;
                    else {
                        var e = g.current;
                        g.current = f, i.draggable.update(f, e)
                    }
                }), [f, i.draggable])
            }

            function zn(e, r, t) {
                Ut()
            }

            function qn(e) {
                e.preventDefault()
            }
            var Jn = function(e, r) {
                    return e === r
                },
                Xn = function(e) {
                    var r = e.combine,
                        t = e.destination;
                    return t ? t.droppableId : r ? r.droppableId : null
                };

            function Kn(e) {
                return {
                    isDragging: !1,
                    isDropAnimating: !1,
                    isClone: !1,
                    dropAnimation: null,
                    mode: null,
                    draggingOver: null,
                    combineTargetFor: e,
                    combineWith: null
                }
            }
            var $n = {
                mapped: {
                    type: "SECONDARY",
                    offset: R,
                    combineTargetFor: null,
                    shouldAnimateDisplacement: !0,
                    snapshot: Kn(null)
                }
            };
            var Qn = {
                    dropAnimationFinished: hr
                },
                ei = (0, l.$j)((function() {
                    var e = function() {
                            var e = (0, d.default)((function(e, r) {
                                    return {
                                        x: e,
                                        y: r
                                    }
                                })),
                                r = (0, d.default)((function(e, r, t, n, i) {
                                    return {
                                        isDragging: !0,
                                        isClone: r,
                                        isDropAnimating: Boolean(i),
                                        dropAnimation: i,
                                        mode: e,
                                        draggingOver: t,
                                        combineWith: n,
                                        combineTargetFor: null
                                    }
                                })),
                                t = (0, d.default)((function(e, t, n, i, a, o, l) {
                                    return {
                                        mapped: {
                                            type: "DRAGGING",
                                            dropping: null,
                                            draggingOver: a,
                                            combineWith: o,
                                            mode: t,
                                            offset: e,
                                            dimension: n,
                                            forceShouldAnimate: l,
                                            snapshot: r(t, i, a, o, null)
                                        }
                                    }
                                }));
                            return function(n, i) {
                                if (n.isDragging) {
                                    if (n.critical.draggable.id !== i.draggableId) return null;
                                    var a = n.current.client.offset,
                                        o = n.dimensions.draggables[i.draggableId],
                                        l = _e(n.impact),
                                        c = (d = n.impact).at && "COMBINE" === d.at.type ? d.at.combine.draggableId : null,
                                        u = n.forceShouldAnimate;
                                    return t(e(a.x, a.y), n.movementMode, o, i.isClone, l, c, u)
                                }
                                var d;
                                if ("DROP_ANIMATING" === n.phase) {
                                    var s = n.completed;
                                    if (s.result.draggableId !== i.draggableId) return null;
                                    var p = i.isClone,
                                        f = n.dimensions.draggables[i.draggableId],
                                        g = s.result,
                                        v = g.mode,
                                        m = Xn(g),
                                        b = function(e) {
                                            return e.combine ? e.combine.draggableId : null
                                        }(g),
                                        h = {
                                            duration: n.dropDuration,
                                            curve: Ir,
                                            moveTo: n.newHomeClientOffset,
                                            opacity: b ? yr.drop : null,
                                            scale: b ? Dr.drop : null
                                        };
                                    return {
                                        mapped: {
                                            type: "DRAGGING",
                                            offset: n.newHomeClientOffset,
                                            dimension: f,
                                            dropping: h,
                                            draggingOver: m,
                                            combineWith: b,
                                            mode: v,
                                            forceShouldAnimate: null,
                                            snapshot: r(v, p, m, b, h)
                                        }
                                    }
                                }
                                return null
                            }
                        }(),
                        r = function() {
                            var e = (0, d.default)((function(e, r) {
                                    return {
                                        x: e,
                                        y: r
                                    }
                                })),
                                r = (0, d.default)(Kn),
                                t = (0, d.default)((function(e, t, n) {
                                    return void 0 === t && (t = null), {
                                        mapped: {
                                            type: "SECONDARY",
                                            offset: e,
                                            combineTargetFor: t,
                                            shouldAnimateDisplacement: n,
                                            snapshot: r(t)
                                        }
                                    }
                                })),
                                n = function(e) {
                                    return e ? t(R, e, !0) : null
                                },
                                i = function(r, i, a, o) {
                                    var l = a.displaced.visible[r],
                                        c = Boolean(o.inVirtualList && o.effected[r]),
                                        u = $(a),
                                        d = u && u.draggableId === r ? i : null;
                                    if (!l) {
                                        if (!c) return n(d);
                                        if (a.displaced.invisible[r]) return null;
                                        var s = O(o.displacedBy.point),
                                            p = e(s.x, s.y);
                                        return t(p, d, !0)
                                    }
                                    if (c) return n(d);
                                    var f = a.displacedBy.point,
                                        g = e(f.x, f.y);
                                    return t(g, d, l.shouldAnimate)
                                };
                            return function(e, r) {
                                if (e.isDragging) return e.critical.draggable.id === r.draggableId ? null : i(r.draggableId, e.critical.draggable.id, e.impact, e.afterCritical);
                                if ("DROP_ANIMATING" === e.phase) {
                                    var t = e.completed;
                                    return t.result.draggableId === r.draggableId ? null : i(r.draggableId, t.result.draggableId, t.impact, t.afterCritical)
                                }
                                return null
                            }
                        }();
                    return function(t, n) {
                        return e(t, n) || r(t, n) || $n
                    }
                }), Qn, null, {
                    context: Lt,
                    pure: !0,
                    areStatePropsEqual: Jn
                })((function(e) {
                    var r = (0, n.useRef)(null),
                        t = (0, c.I4)((function(e) {
                            r.current = e
                        }), []),
                        i = (0, c.I4)((function() {
                            return r.current
                        }), []),
                        a = Ln(kt),
                        o = a.contextId,
                        l = a.dragHandleUsageInstructionsId,
                        u = a.registry,
                        d = Ln(kn),
                        s = d.type,
                        p = d.droppableId,
                        f = (0, c.Ye)((function() {
                            return {
                                id: e.draggableId,
                                index: e.index,
                                type: s,
                                droppableId: p
                            }
                        }), [e.draggableId, e.index, s, p]),
                        g = e.children,
                        v = e.draggableId,
                        m = e.isEnabled,
                        b = e.shouldRespectForcePress,
                        h = e.canDragInteractiveElements,
                        I = e.isClone,
                        y = e.mapped,
                        D = e.dropAnimationFinished;
                    zn(), Wt(), I || Vn((0, c.Ye)((function() {
                        return {
                            descriptor: f,
                            registry: u,
                            getDraggableRef: i,
                            canDragInteractiveElements: h,
                            shouldRespectForcePress: b,
                            isEnabled: m
                        }
                    }), [f, u, i, h, b, m]));
                    var x = (0, c.Ye)((function() {
                            return m ? {
                                tabIndex: 0,
                                role: "button",
                                "aria-describedby": l,
                                "data-rbd-drag-handle-draggable-id": v,
                                "data-rbd-drag-handle-context-id": o,
                                draggable: !1,
                                onDragStart: qn
                            } : null
                        }), [o, l, v, m]),
                        E = (0, c.I4)((function(e) {
                            "DRAGGING" === y.type && y.dropping && "transform" === e.propertyName && D()
                        }), [D, y]),
                        w = (0, c.Ye)((function() {
                            var e = jn(y),
                                r = "DRAGGING" === y.type && y.dropping ? E : null;
                            return {
                                innerRef: t,
                                draggableProps: {
                                    "data-rbd-draggable-context-id": o,
                                    "data-rbd-draggable-id": v,
                                    style: e,
                                    onTransitionEnd: r
                                },
                                dragHandleProps: x
                            }
                        }), [o, x, v, y, E, t]),
                        C = (0, c.Ye)((function() {
                            return {
                                draggableId: f.id,
                                type: f.type,
                                source: {
                                    index: f.index,
                                    droppableId: f.droppableId
                                }
                            }
                        }), [f.droppableId, f.id, f.index, f.type]);
                    return g(w, y.snapshot, C)
                }));

            function ri(e) {
                return Ln(kn).isUsingCloneFor !== e.draggableId || e.isClone ? n.createElement(ei, e) : null
            }

            function ti(e) {
                var r = "boolean" !== typeof e.isDragDisabled || !e.isDragDisabled,
                    t = Boolean(e.disableInteractiveElementBlocking),
                    i = Boolean(e.shouldRespectForcePress);
                return n.createElement(ri, (0, a.Z)({}, e, {
                    isClone: !1,
                    isEnabled: r,
                    canDragInteractiveElements: t,
                    shouldRespectForcePress: i
                }))
            }
            var ni = function(e, r) {
                    return e === r.droppable.type
                },
                ii = function(e, r) {
                    return r.draggables[e.draggable.id]
                },
                ai = {
                    updateViewportMaxScroll: function(e) {
                        return {
                            type: "UPDATE_VIEWPORT_MAX_SCROLL",
                            payload: e
                        }
                    }
                };
            var oi = {
                    mode: "standard",
                    type: "DEFAULT",
                    direction: "vertical",
                    isDropDisabled: !1,
                    isCombineEnabled: !1,
                    ignoreContainerClipping: !1,
                    renderClone: null,
                    getContainerForClone: function() {
                        return document.body || h(!1), document.body
                    }
                },
                li = (0, l.$j)((function() {
                    var e = {
                            placeholder: null,
                            shouldAnimatePlaceholder: !0,
                            snapshot: {
                                isDraggingOver: !1,
                                draggingOverWith: null,
                                draggingFromThisWith: null,
                                isUsingPlaceholder: !1
                            },
                            useClone: null
                        },
                        r = (0, a.Z)({}, e, {
                            shouldAnimatePlaceholder: !1
                        }),
                        t = (0, d.default)((function(e) {
                            return {
                                draggableId: e.id,
                                type: e.type,
                                source: {
                                    index: e.index,
                                    droppableId: e.droppableId
                                }
                            }
                        })),
                        n = (0, d.default)((function(n, i, a, o, l, c) {
                            var u = l.descriptor.id;
                            if (l.descriptor.droppableId === n) {
                                var d = c ? {
                                        render: c,
                                        dragging: t(l.descriptor)
                                    } : null,
                                    s = {
                                        isDraggingOver: a,
                                        draggingOverWith: a ? u : null,
                                        draggingFromThisWith: u,
                                        isUsingPlaceholder: !0
                                    };
                                return {
                                    placeholder: l.placeholder,
                                    shouldAnimatePlaceholder: !1,
                                    snapshot: s,
                                    useClone: d
                                }
                            }
                            if (!i) return r;
                            if (!o) return e;
                            var p = {
                                isDraggingOver: a,
                                draggingOverWith: u,
                                draggingFromThisWith: null,
                                isUsingPlaceholder: !0
                            };
                            return {
                                placeholder: l.placeholder,
                                shouldAnimatePlaceholder: !0,
                                snapshot: p,
                                useClone: null
                            }
                        }));
                    return function(t, i) {
                        var a = i.droppableId,
                            o = i.type,
                            l = !i.isDropDisabled,
                            c = i.renderClone;
                        if (t.isDragging) {
                            var u = t.critical;
                            if (!ni(o, u)) return r;
                            var d = ii(u, t.dimensions),
                                s = _e(t.impact) === a;
                            return n(a, l, s, s, d, c)
                        }
                        if ("DROP_ANIMATING" === t.phase) {
                            var p = t.completed;
                            if (!ni(o, p.critical)) return r;
                            var f = ii(p.critical, t.dimensions);
                            return n(a, l, Xn(p.result) === a, _e(p.impact) === a, f, c)
                        }
                        if ("IDLE" === t.phase && t.completed && !t.shouldFlush) {
                            var g = t.completed;
                            if (!ni(o, g.critical)) return r;
                            var v = _e(g.impact) === a,
                                m = Boolean(g.impact.at && "COMBINE" === g.impact.at.type),
                                b = g.critical.droppable.id === a;
                            return v ? m ? e : r : b ? e : r
                        }
                        return r
                    }
                }), ai, null, {
                    context: Lt,
                    pure: !0,
                    areStatePropsEqual: Jn
                })((function(e) {
                    var r = (0, n.useContext)(kt);
                    r || h(!1);
                    var t = r.contextId,
                        i = r.isMovementAllowed,
                        a = (0, n.useRef)(null),
                        o = (0, n.useRef)(null),
                        l = e.children,
                        u = e.droppableId,
                        f = e.type,
                        g = e.mode,
                        v = e.direction,
                        m = e.ignoreContainerClipping,
                        b = e.isDropDisabled,
                        I = e.isCombineEnabled,
                        y = e.snapshot,
                        D = e.useClone,
                        x = e.updateViewportMaxScroll,
                        E = e.getContainerForClone,
                        w = (0, c.I4)((function() {
                            return a.current
                        }), []),
                        C = (0, c.I4)((function(e) {
                            a.current = e
                        }), []),
                        A = ((0, c.I4)((function() {
                            return o.current
                        }), []), (0, c.I4)((function(e) {
                            o.current = e
                        }), []));
                    Ut();
                    var B = (0, c.I4)((function() {
                        i() && x({
                            maxScroll: Vr()
                        })
                    }), [i, x]);
                    ! function(e) {
                        var r = (0, n.useRef)(null),
                            t = Ln(kt),
                            i = Ft("droppable"),
                            a = t.registry,
                            o = t.marshal,
                            l = Yt(e),
                            u = (0, c.Ye)((function() {
                                return {
                                    id: e.droppableId,
                                    type: e.type,
                                    mode: e.mode
                                }
                            }), [e.droppableId, e.mode, e.type]),
                            p = (0, n.useRef)(u),
                            f = (0, c.Ye)((function() {
                                return (0, d.default)((function(e, t) {
                                    r.current || h(!1);
                                    var n = {
                                        x: e,
                                        y: t
                                    };
                                    o.updateDroppableScroll(u.id, n)
                                }))
                            }), [u.id, o]),
                            g = (0, c.I4)((function() {
                                var e = r.current;
                                return e && e.env.closestScrollable ? An(e.env.closestScrollable) : R
                            }), []),
                            v = (0, c.I4)((function() {
                                var e = g();
                                f(e.x, e.y)
                            }), [g, f]),
                            m = (0, c.Ye)((function() {
                                return (0, s.Z)(v)
                            }), [v]),
                            b = (0, c.I4)((function() {
                                var e = r.current,
                                    t = Tn(e);
                                e && t || h(!1), e.scrollOptions.shouldPublishImmediately ? v() : m()
                            }), [m, v]),
                            I = (0, c.I4)((function(e, n) {
                                r.current && h(!1);
                                var i = l.current,
                                    a = i.getDroppableRef();
                                a || h(!1);
                                var o = Rn(a),
                                    c = {
                                        ref: a,
                                        descriptor: u,
                                        env: o,
                                        scrollOptions: n
                                    };
                                r.current = c;
                                var d = Nn({
                                        ref: a,
                                        descriptor: u,
                                        env: o,
                                        windowScroll: e,
                                        direction: i.direction,
                                        isDropDisabled: i.isDropDisabled,
                                        isCombineEnabled: i.isCombineEnabled,
                                        shouldClipSubject: !i.ignoreContainerClipping
                                    }),
                                    s = o.closestScrollable;
                                return s && (s.setAttribute(Et.contextId, t.contextId), s.addEventListener("scroll", b, On(c.scrollOptions))), d
                            }), [t.contextId, u, b, l]),
                            y = (0, c.I4)((function() {
                                var e = r.current,
                                    t = Tn(e);
                                return e && t || h(!1), An(t)
                            }), []),
                            D = (0, c.I4)((function() {
                                var e = r.current;
                                e || h(!1);
                                var t = Tn(e);
                                r.current = null, t && (m.cancel(), t.removeAttribute(Et.contextId), t.removeEventListener("scroll", b, On(e.scrollOptions)))
                            }), [b, m]),
                            x = (0, c.I4)((function(e) {
                                var t = r.current;
                                t || h(!1);
                                var n = Tn(t);
                                n || h(!1), n.scrollTop += e.y, n.scrollLeft += e.x
                            }), []),
                            E = (0, c.Ye)((function() {
                                return {
                                    getDimensionAndWatchScroll: I,
                                    getScrollWhileDragging: y,
                                    dragStopped: D,
                                    scroll: x
                                }
                            }), [D, I, y, x]),
                            w = (0, c.Ye)((function() {
                                return {
                                    uniqueId: i,
                                    descriptor: u,
                                    callbacks: E
                                }
                            }), [E, u, i]);
                        Ct((function() {
                            return p.current = w.descriptor, a.droppable.register(w),
                                function() {
                                    r.current && D(), a.droppable.unregister(w)
                                }
                        }), [E, u, D, w, o, a.droppable]), Ct((function() {
                            r.current && o.updateDroppableIsEnabled(p.current.id, !e.isDropDisabled)
                        }), [e.isDropDisabled, o]), Ct((function() {
                            r.current && o.updateDroppableIsCombineEnabled(p.current.id, e.isCombineEnabled)
                        }), [e.isCombineEnabled, o])
                    }({
                        droppableId: u,
                        type: f,
                        mode: g,
                        direction: v,
                        isDropDisabled: b,
                        isCombineEnabled: I,
                        ignoreContainerClipping: m,
                        getDroppableRef: w
                    });
                    var N = n.createElement(Wn, {
                            on: e.placeholder,
                            shouldAnimate: e.shouldAnimatePlaceholder
                        }, (function(e) {
                            var r = e.onClose,
                                i = e.data,
                                a = e.animate;
                            return n.createElement(Fn, {
                                placeholder: i,
                                onClose: r,
                                innerRef: A,
                                animate: a,
                                contextId: t,
                                onTransitionEnd: B
                            })
                        })),
                        S = (0, c.Ye)((function() {
                            return {
                                innerRef: C,
                                placeholder: N,
                                droppableProps: {
                                    "data-rbd-droppable-id": u,
                                    "data-rbd-droppable-context-id": t
                                }
                            }
                        }), [t, u, N, C]),
                        P = D ? D.dragging.draggableId : null,
                        O = (0, c.Ye)((function() {
                            return {
                                droppableId: u,
                                type: f,
                                isUsingCloneFor: P
                            }
                        }), [u, P, f]);
                    return n.createElement(kn.Provider, {
                        value: O
                    }, l(S, y), function() {
                        if (!D) return null;
                        var e = D.dragging,
                            r = D.render,
                            t = n.createElement(ri, {
                                draggableId: e.draggableId,
                                index: e.source.index,
                                isClone: !0,
                                isEnabled: !0,
                                shouldRespectForcePress: !1,
                                canDragInteractiveElements: !0
                            }, (function(t, n) {
                                return r(t, n, e)
                            }));
                        return p.createPortal(t, E())
                    }())
                }));
            li.defaultProps = oi
        }
    }
]);