"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1272], {
        77493: function(e, u, t) {
            t.d(u, {
                E9: function() {
                    return W
                },
                Jh: function() {
                    return bt
                },
                ML: function() {
                    return V
                },
                NB: function() {
                    return S
                },
                OX: function() {
                    return q
                },
                W_: function() {
                    return j
                },
                YR: function() {
                    return je
                },
                e6: function() {
                    return P
                },
                o4: function() {
                    return J
                },
                wo: function() {
                    return tt
                },
                xv: function() {
                    return H
                },
                y$: function() {
                    return h
                }
            });
            var r = t(90111),
                n = t(91622),
                o = {
                    transform(e, u) {
                        var {
                            current: t,
                            affinity: r
                        } = e;
                        if (null != t) {
                            var n = h.transform(t, u, {
                                affinity: r
                            });
                            e.current = n, null == n && e.unref()
                        }
                    }
                },
                a = {
                    transform(e, u) {
                        var {
                            current: t,
                            affinity: r
                        } = e;
                        if (null != t) {
                            var n = W.transform(t, u, {
                                affinity: r
                            });
                            e.current = n, null == n && e.unref()
                        }
                    }
                },
                i = {
                    transform(e, u) {
                        var {
                            current: t,
                            affinity: r
                        } = e;
                        if (null != t) {
                            var n = P.transform(t, u, {
                                affinity: r
                            });
                            e.current = n, null == n && e.unref()
                        }
                    }
                },
                s = new WeakMap,
                D = new WeakMap,
                l = new WeakMap,
                f = new WeakMap,
                c = new WeakMap,
                C = new WeakMap,
                B = new WeakMap,
                h = {
                    ancestors(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: t = !1
                            } = u,
                            r = h.levels(e, u);
                        return r = t ? r.slice(1) : r.slice(0, -1)
                    },
                    common(e, u) {
                        for (var t = [], r = 0; r < e.length && r < u.length; r++) {
                            var n = e[r];
                            if (n !== u[r]) break;
                            t.push(n)
                        }
                        return t
                    },
                    compare(e, u) {
                        for (var t = Math.min(e.length, u.length), r = 0; r < t; r++) {
                            if (e[r] < u[r]) return -1;
                            if (e[r] > u[r]) return 1
                        }
                        return 0
                    },
                    endsAfter(e, u) {
                        var t = e.length - 1,
                            r = e.slice(0, t),
                            n = u.slice(0, t),
                            o = e[t],
                            a = u[t];
                        return h.equals(r, n) && o > a
                    },
                    endsAt(e, u) {
                        var t = e.length,
                            r = e.slice(0, t),
                            n = u.slice(0, t);
                        return h.equals(r, n)
                    },
                    endsBefore(e, u) {
                        var t = e.length - 1,
                            r = e.slice(0, t),
                            n = u.slice(0, t),
                            o = e[t],
                            a = u[t];
                        return h.equals(r, n) && o < a
                    },
                    equals: (e, u) => e.length === u.length && e.every(((e, t) => e === u[t])),
                    hasPrevious: e => e[e.length - 1] > 0,
                    isAfter: (e, u) => 1 === h.compare(e, u),
                    isAncestor: (e, u) => e.length < u.length && 0 === h.compare(e, u),
                    isBefore: (e, u) => -1 === h.compare(e, u),
                    isChild: (e, u) => e.length === u.length + 1 && 0 === h.compare(e, u),
                    isCommon: (e, u) => e.length <= u.length && 0 === h.compare(e, u),
                    isDescendant: (e, u) => e.length > u.length && 0 === h.compare(e, u),
                    isParent: (e, u) => e.length + 1 === u.length && 0 === h.compare(e, u),
                    isPath: e => Array.isArray(e) && (0 === e.length || "number" === typeof e[0]),
                    isSibling(e, u) {
                        if (e.length !== u.length) return !1;
                        var t = e.slice(0, -1),
                            r = u.slice(0, -1);
                        return e[e.length - 1] !== u[u.length - 1] && h.equals(t, r)
                    },
                    levels(e) {
                        for (var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                reverse: t = !1
                            } = u, r = [], n = 0; n <= e.length; n++) r.push(e.slice(0, n));
                        return t && r.reverse(), r
                    },
                    next(e) {
                        if (0 === e.length) throw new Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
                        var u = e[e.length - 1];
                        return e.slice(0, -1).concat(u + 1)
                    },
                    operationCanTransformPath(e) {
                        switch (e.type) {
                            case "insert_node":
                            case "remove_node":
                            case "merge_node":
                            case "split_node":
                            case "move_node":
                                return !0;
                            default:
                                return !1
                        }
                    },
                    parent(e) {
                        if (0 === e.length) throw new Error("Cannot get the parent path of the root path [".concat(e, "]."));
                        return e.slice(0, -1)
                    },
                    previous(e) {
                        if (0 === e.length) throw new Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
                        var u = e[e.length - 1];
                        if (u <= 0) throw new Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
                        return e.slice(0, -1).concat(u - 1)
                    },
                    relative(e, u) {
                        if (!h.isAncestor(u, e) && !h.equals(e, u)) throw new Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(u, "], because it is not above or equal to the path."));
                        return e.slice(u.length)
                    },
                    transform(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e) return null;
                        var r = [...e],
                            {
                                affinity: n = "forward"
                            } = t;
                        if (0 === e.length) return r;
                        switch (u.type) {
                            case "insert_node":
                                var {
                                    path: o
                                } = u;
                                (h.equals(o, r) || h.endsBefore(o, r) || h.isAncestor(o, r)) && (r[o.length - 1] += 1);
                                break;
                            case "remove_node":
                                var {
                                    path: a
                                } = u;
                                if (h.equals(a, r) || h.isAncestor(a, r)) return null;
                                h.endsBefore(a, r) && (r[a.length - 1] -= 1);
                                break;
                            case "merge_node":
                                var {
                                    path: i,
                                    position: s
                                } = u;
                                h.equals(i, r) || h.endsBefore(i, r) ? r[i.length - 1] -= 1 : h.isAncestor(i, r) && (r[i.length - 1] -= 1, r[i.length] += s);
                                break;
                            case "split_node":
                                var {
                                    path: D,
                                    position: l
                                } = u;
                                if (h.equals(D, r)) {
                                    if ("forward" === n) r[r.length - 1] += 1;
                                    else if ("backward" !== n) return null
                                } else h.endsBefore(D, r) ? r[D.length - 1] += 1 : h.isAncestor(D, r) && e[D.length] >= l && (r[D.length - 1] += 1, r[D.length] -= l);
                                break;
                            case "move_node":
                                var {
                                    path: f,
                                    newPath: c
                                } = u;
                                if (h.equals(f, c)) return r;
                                if (h.isAncestor(f, r) || h.equals(f, r)) {
                                    var C = c.slice();
                                    return h.endsBefore(f, c) && f.length < c.length && (C[f.length - 1] -= 1), C.concat(r.slice(f.length))
                                }
                                h.isSibling(f, c) && (h.isAncestor(c, r) || h.equals(c, r)) ? h.endsBefore(f, r) ? r[f.length - 1] -= 1 : r[f.length - 1] += 1 : h.endsBefore(c, r) || h.equals(c, r) || h.isAncestor(c, r) ? (h.endsBefore(f, r) && (r[f.length - 1] -= 1), r[c.length - 1] += 1) : h.endsBefore(f, r) && (h.equals(c, r) && (r[c.length - 1] += 1), r[f.length - 1] -= 1)
                        }
                        return r
                    }
                };

            function v(e) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, v(e)
            }

            function d(e) {
                var u = function(e, u) {
                    if ("object" !== v(e) || null === e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, u || "default");
                        if ("object" !== v(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === u ? String : Number)(e)
                }(e, "string");
                return "symbol" === v(u) ? u : String(u)
            }

            function A(e, u, t) {
                return (u = d(u)) in e ? Object.defineProperty(e, u, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[u] = t, e
            }

            function p(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function F(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? p(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var E = {
                    transform(e, u) {
                        e.children = (0, n.P2)(e.children);
                        var t = e.selection && (0, n.P2)(e.selection);
                        try {
                            t = ((e, u, t) => {
                                switch (t.type) {
                                    case "insert_node":
                                        var {
                                            path: r,
                                            node: n
                                        } = t, o = S.parent(e, r), a = r[r.length - 1];
                                        if (a > o.children.length) throw new Error('Cannot apply an "insert_node" operation at path ['.concat(r, "] because the destination is past the end of the node."));
                                        if (o.children.splice(a, 0, n), u)
                                            for (var [i, s] of P.points(u)) u[s] = W.transform(i, t);
                                        break;
                                    case "insert_text":
                                        var {
                                            path: D,
                                            offset: l,
                                            text: f
                                        } = t;
                                        if (0 === f.length) break;
                                        var c = S.leaf(e, D),
                                            C = c.text.slice(0, l),
                                            B = c.text.slice(l);
                                        if (c.text = C + f + B, u)
                                            for (var [v, d] of P.points(u)) u[d] = W.transform(v, t);
                                        break;
                                    case "merge_node":
                                        var {
                                            path: A
                                        } = t, p = S.get(e, A), E = h.previous(A), g = S.get(e, E), m = S.parent(e, A), y = A[A.length - 1];
                                        if (H.isText(p) && H.isText(g)) g.text += p.text;
                                        else {
                                            if (H.isText(p) || H.isText(g)) throw new Error('Cannot apply a "merge_node" operation at path ['.concat(A, "] to nodes of different interfaces: ").concat(J.stringify(p), " ").concat(J.stringify(g)));
                                            g.children.push(...p.children)
                                        }
                                        if (m.children.splice(y, 1), u)
                                            for (var [w, b] of P.points(u)) u[b] = W.transform(w, t);
                                        break;
                                    case "move_node":
                                        var {
                                            path: O,
                                            newPath: x
                                        } = t;
                                        if (h.isAncestor(O, x)) throw new Error("Cannot move a path [".concat(O, "] to new path [").concat(x, "] because the destination is inside itself."));
                                        var j = S.get(e, O),
                                            k = S.parent(e, O),
                                            N = O[O.length - 1];
                                        k.children.splice(N, 1);
                                        var R = h.transform(O, t),
                                            _ = S.get(e, h.parent(R)),
                                            T = R[R.length - 1];
                                        if (_.children.splice(T, 0, j), u)
                                            for (var [q, z] of P.points(u)) u[z] = W.transform(q, t);
                                        break;
                                    case "remove_node":
                                        var {
                                            path: V
                                        } = t, I = V[V.length - 1];
                                        if (S.parent(e, V).children.splice(I, 1), u)
                                            for (var [M, L] of P.points(u)) {
                                                var $ = W.transform(M, t);
                                                if (null != u && null != $) u[L] = $;
                                                else {
                                                    var Z = void 0,
                                                        U = void 0;
                                                    for (var [X, Y] of S.texts(e)) {
                                                        if (-1 !== h.compare(Y, V)) {
                                                            U = [X, Y];
                                                            break
                                                        }
                                                        Z = [X, Y]
                                                    }
                                                    var G = !1;
                                                    Z && U && (G = h.equals(U[1], V) ? !h.hasPrevious(U[1]) : h.common(Z[1], V).length < h.common(U[1], V).length), Z && !G ? (M.path = Z[1], M.offset = Z[0].text.length) : U ? (M.path = U[1], M.offset = 0) : u = null
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var {
                                            path: K,
                                            offset: Q,
                                            text: ee
                                        } = t;
                                        if (0 === ee.length) break;
                                        var ue = S.leaf(e, K),
                                            te = ue.text.slice(0, Q),
                                            re = ue.text.slice(Q + ee.length);
                                        if (ue.text = te + re, u)
                                            for (var [ne, oe] of P.points(u)) u[oe] = W.transform(ne, t);
                                        break;
                                    case "set_node":
                                        var {
                                            path: ae,
                                            properties: ie,
                                            newProperties: se
                                        } = t;
                                        if (0 === ae.length) throw new Error("Cannot set properties on the root node!");
                                        var De = S.get(e, ae);
                                        for (var le in se) {
                                            if ("children" === le || "text" === le) throw new Error('Cannot set the "'.concat(le, '" property of nodes!'));
                                            var fe = se[le];
                                            null == fe ? delete De[le] : De[le] = fe
                                        }
                                        for (var ce in ie) se.hasOwnProperty(ce) || delete De[ce];
                                        break;
                                    case "set_selection":
                                        var {
                                            newProperties: Ce
                                        } = t;
                                        if (null == Ce) u = Ce;
                                        else {
                                            if (null == u) {
                                                if (!P.isRange(Ce)) throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(J.stringify(Ce), " when there is no current selection."));
                                                u = F({}, Ce)
                                            }
                                            for (var Be in Ce) {
                                                var he = Ce[Be];
                                                if (null == he) {
                                                    if ("anchor" === Be || "focus" === Be) throw new Error('Cannot remove the "'.concat(Be, '" selection property'));
                                                    delete u[Be]
                                                } else u[Be] = he
                                            }
                                        }
                                        break;
                                    case "split_node":
                                        var {
                                            path: ve,
                                            position: de,
                                            properties: Ae
                                        } = t;
                                        if (0 === ve.length) throw new Error('Cannot apply a "split_node" operation at path ['.concat(ve, "] because the root node cannot be split."));
                                        var pe, Fe = S.get(e, ve),
                                            Ee = S.parent(e, ve),
                                            ge = ve[ve.length - 1];
                                        if (H.isText(Fe)) {
                                            var me = Fe.text.slice(0, de),
                                                ye = Fe.text.slice(de);
                                            Fe.text = me, pe = F(F({}, Ae), {}, {
                                                text: ye
                                            })
                                        } else {
                                            var we = Fe.children.slice(0, de),
                                                be = Fe.children.slice(de);
                                            Fe.children = we, pe = F(F({}, Ae), {}, {
                                                children: be
                                            })
                                        }
                                        if (Ee.children.splice(ge + 1, 0, pe), u)
                                            for (var [Oe, Pe] of P.points(u)) u[Pe] = W.transform(Oe, t)
                                }
                                return u
                            })(e, t, u)
                        } finally {
                            e.children = (0, n._x)(e.children), e.selection = t ? (0, n.mv)(t) ? (0, n._x)(t) : t : null
                        }
                    }
                },
                g = {
                    insertNodes(e, u, t) {
                        e.insertNodes(u, t)
                    },
                    liftNodes(e, u) {
                        e.liftNodes(u)
                    },
                    mergeNodes(e, u) {
                        e.mergeNodes(u)
                    },
                    moveNodes(e, u) {
                        e.moveNodes(u)
                    },
                    removeNodes(e, u) {
                        e.removeNodes(u)
                    },
                    setNodes(e, u, t) {
                        e.setNodes(u, t)
                    },
                    splitNodes(e, u) {
                        e.splitNodes(u)
                    },
                    unsetNodes(e, u, t) {
                        e.unsetNodes(u, t)
                    },
                    unwrapNodes(e, u) {
                        e.unwrapNodes(u)
                    },
                    wrapNodes(e, u, t) {
                        e.wrapNodes(u, t)
                    }
                },
                m = {
                    collapse(e, u) {
                        e.collapse(u)
                    },
                    deselect(e) {
                        e.deselect()
                    },
                    move(e, u) {
                        e.move(u)
                    },
                    select(e, u) {
                        e.select(u)
                    },
                    setPoint(e, u, t) {
                        e.setPoint(u, t)
                    },
                    setSelection(e, u) {
                        e.setSelection(u)
                    }
                },
                y = (e, u) => {
                    for (var t in e) {
                        var n = e[t],
                            o = u[t];
                        if ((0, r.P)(n) && (0, r.P)(o)) {
                            if (!y(n, o)) return !1
                        } else if (Array.isArray(n) && Array.isArray(o)) {
                            if (n.length !== o.length) return !1;
                            for (var a = 0; a < n.length; a++)
                                if (n[a] !== o[a]) return !1
                        } else if (n !== o) return !1
                    }
                    for (var i in u)
                        if (void 0 === e[i] && void 0 !== u[i]) return !1;
                    return !0
                };

            function w(e, u) {
                if (null == e) return {};
                var t, r, n = function(e, u) {
                    if (null == e) return {};
                    var t, r, n = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) t = o[r], u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n
                }(e, u);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) t = o[r], u.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                }
                return n
            }
            var b = ["anchor", "focus"];

            function O(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var P = {
                    edges(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: t = !1
                            } = u,
                            {
                                anchor: r,
                                focus: n
                            } = e;
                        return P.isBackward(e) === t ? [r, n] : [n, r]
                    },
                    end(e) {
                        var [, u] = P.edges(e);
                        return u
                    },
                    equals: (e, u) => W.equals(e.anchor, u.anchor) && W.equals(e.focus, u.focus),
                    includes(e, u) {
                        if (P.isRange(u)) {
                            if (P.includes(e, u.anchor) || P.includes(e, u.focus)) return !0;
                            var [t, r] = P.edges(e), [n, o] = P.edges(u);
                            return W.isBefore(t, n) && W.isAfter(r, o)
                        }
                        var [a, i] = P.edges(e), s = !1, D = !1;
                        return W.isPoint(u) ? (s = W.compare(u, a) >= 0, D = W.compare(u, i) <= 0) : (s = h.compare(u, a.path) >= 0, D = h.compare(u, i.path) <= 0), s && D
                    },
                    intersection(e, u) {
                        var t = w(e, b),
                            [r, n] = P.edges(e),
                            [o, a] = P.edges(u),
                            i = W.isBefore(r, o) ? o : r,
                            s = W.isBefore(n, a) ? n : a;
                        return W.isBefore(s, i) ? null : function(e) {
                            for (var u = 1; u < arguments.length; u++) {
                                var t = null != arguments[u] ? arguments[u] : {};
                                u % 2 ? O(Object(t), !0).forEach((function(u) {
                                    A(e, u, t[u])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach((function(u) {
                                    Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                                }))
                            }
                            return e
                        }({
                            anchor: i,
                            focus: s
                        }, t)
                    },
                    isBackward(e) {
                        var {
                            anchor: u,
                            focus: t
                        } = e;
                        return W.isAfter(u, t)
                    },
                    isCollapsed(e) {
                        var {
                            anchor: u,
                            focus: t
                        } = e;
                        return W.equals(u, t)
                    },
                    isExpanded: e => !P.isCollapsed(e),
                    isForward: e => !P.isBackward(e),
                    isRange: e => (0, r.P)(e) && W.isPoint(e.anchor) && W.isPoint(e.focus),
                    * points(e) {
                        yield [e.anchor, "anchor"], yield [e.focus, "focus"]
                    },
                    start(e) {
                        var [u] = P.edges(e);
                        return u
                    },
                    transform(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, n.Uy)(e, (e => {
                            if (null === e) return null;
                            var r, n, {
                                affinity: o = "inward"
                            } = t;
                            if ("inward" === o) {
                                var a = P.isCollapsed(e);
                                P.isForward(e) ? (r = "forward", n = a ? r : "backward") : (r = "backward", n = a ? r : "forward")
                            } else "outward" === o ? P.isForward(e) ? (r = "backward", n = "forward") : (r = "forward", n = "backward") : (r = o, n = o);
                            var i = W.transform(e.anchor, u, {
                                    affinity: r
                                }),
                                s = W.transform(e.focus, u, {
                                    affinity: n
                                });
                            if (!i || !s) return null;
                            e.anchor = i, e.focus = s
                        }))
                    }
                },
                x = e => (0, r.P)(e) && S.isNodeList(e.children) && !V.isEditor(e),
                j = {
                    isAncestor: e => (0, r.P)(e) && S.isNodeList(e.children),
                    isElement: x,
                    isElementList: e => Array.isArray(e) && e.every((e => j.isElement(e))),
                    isElementProps: e => void 0 !== e.children,
                    isElementType: function(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
                        return x(e) && e[t] === u
                    },
                    matches(e, u) {
                        for (var t in u)
                            if ("children" !== t && e[t] !== u[t]) return !1;
                        return !0
                    }
                },
                k = ["children"],
                N = ["text"],
                R = new WeakMap,
                S = {
                    ancestor(e, u) {
                        var t = S.get(e, u);
                        if (H.isText(t)) throw new Error("Cannot get the ancestor node at path [".concat(u, "] because it refers to a text node instead: ").concat(J.stringify(t)));
                        return t
                    },
                    ancestors(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return function*() {
                            for (var r of h.ancestors(u, t)) {
                                var n = [S.ancestor(e, r), r];
                                yield n
                            }
                        }()
                    },
                    child(e, u) {
                        if (H.isText(e)) throw new Error("Cannot get the child of a text node: ".concat(J.stringify(e)));
                        var t = e.children[u];
                        if (null == t) throw new Error("Cannot get child at index `".concat(u, "` in node: ").concat(J.stringify(e)));
                        return t
                    },
                    children(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return function*() {
                            for (var {
                                    reverse: r = !1
                                } = t, n = S.ancestor(e, u), {
                                    children: o
                                } = n, a = r ? o.length - 1 : 0; r ? a >= 0 : a < o.length;) {
                                var i = S.child(n, a),
                                    s = u.concat(a);
                                yield [i, s], a = r ? a - 1 : a + 1
                            }
                        }()
                    },
                    common(e, u, t) {
                        var r = h.common(u, t);
                        return [S.get(e, r), r]
                    },
                    descendant(e, u) {
                        var t = S.get(e, u);
                        if (V.isEditor(t)) throw new Error("Cannot get the descendant node at path [".concat(u, "] because it refers to the root editor node instead: ").concat(J.stringify(t)));
                        return t
                    },
                    descendants(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return function*() {
                            for (var [t, r] of S.nodes(e, u)) 0 !== r.length && (yield [t, r])
                        }()
                    },
                    elements(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return function*() {
                            for (var [t, r] of S.nodes(e, u)) j.isElement(t) && (yield [t, r])
                        }()
                    },
                    extractProps: e => j.isAncestor(e) ? w(e, k) : w(e, N),
                    first(e, u) {
                        for (var t = u.slice(), r = S.get(e, t); r && !H.isText(r) && 0 !== r.children.length;) r = r.children[0], t.push(0);
                        return [r, t]
                    },
                    fragment(e, u) {
                        if (H.isText(e)) throw new Error("Cannot get a fragment starting from a root text node: ".concat(J.stringify(e)));
                        var t = (0, n.Uy)({
                            children: e.children
                        }, (e => {
                            var [t, r] = P.edges(u), n = S.nodes(e, {
                                reverse: !0,
                                pass: e => {
                                    var [, t] = e;
                                    return !P.includes(u, t)
                                }
                            });
                            for (var [, o] of n) {
                                if (!P.includes(u, o)) {
                                    var a = S.parent(e, o),
                                        i = o[o.length - 1];
                                    a.children.splice(i, 1)
                                }
                                if (h.equals(o, r.path)) {
                                    var s = S.leaf(e, o);
                                    s.text = s.text.slice(0, r.offset)
                                }
                                if (h.equals(o, t.path)) {
                                    var D = S.leaf(e, o);
                                    D.text = D.text.slice(t.offset)
                                }
                            }
                            V.isEditor(e) && (e.selection = null)
                        }));
                        return t.children
                    },
                    get(e, u) {
                        for (var t = e, r = 0; r < u.length; r++) {
                            var n = u[r];
                            if (H.isText(t) || !t.children[n]) throw new Error("Cannot find a descendant at path [".concat(u, "] in node: ").concat(J.stringify(e)));
                            t = t.children[n]
                        }
                        return t
                    },
                    has(e, u) {
                        for (var t = e, r = 0; r < u.length; r++) {
                            var n = u[r];
                            if (H.isText(t) || !t.children[n]) return !1;
                            t = t.children[n]
                        }
                        return !0
                    },
                    isNode: e => H.isText(e) || j.isElement(e) || V.isEditor(e),
                    isNodeList(e) {
                        if (!Array.isArray(e)) return !1;
                        var u = R.get(e);
                        if (void 0 !== u) return u;
                        var t = e.every((e => S.isNode(e)));
                        return R.set(e, t), t
                    },
                    last(e, u) {
                        for (var t = u.slice(), r = S.get(e, t); r && !H.isText(r) && 0 !== r.children.length;) {
                            var n = r.children.length - 1;
                            r = r.children[n], t.push(n)
                        }
                        return [r, t]
                    },
                    leaf(e, u) {
                        var t = S.get(e, u);
                        if (!H.isText(t)) throw new Error("Cannot get the leaf node at path [".concat(u, "] because it refers to a non-leaf node: ").concat(J.stringify(t)));
                        return t
                    },
                    levels(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return function*() {
                            for (var r of h.levels(u, t)) {
                                var n = S.get(e, r);
                                yield [n, r]
                            }
                        }()
                    },
                    matches: (e, u) => j.isElement(e) && j.isElementProps(u) && j.matches(e, u) || H.isText(e) && H.isTextProps(u) && H.matches(e, u),
                    nodes(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return function*() {
                            for (var {
                                    pass: t,
                                    reverse: r = !1
                                } = u, {
                                    from: n = [],
                                    to: o
                                } = u, a = new Set, i = [], s = e; !o || !(r ? h.isBefore(i, o) : h.isAfter(i, o));)
                                if (a.has(s) || (yield [s, i]), a.has(s) || H.isText(s) || 0 === s.children.length || null != t && !1 !== t([s, i])) {
                                    if (0 === i.length) break;
                                    if (!r) {
                                        var D = h.next(i);
                                        if (S.has(e, D)) {
                                            i = D, s = S.get(e, i);
                                            continue
                                        }
                                    }
                                    if (r && 0 !== i[i.length - 1]) i = h.previous(i), s = S.get(e, i);
                                    else i = h.parent(i), s = S.get(e, i), a.add(s)
                                } else {
                                    a.add(s);
                                    var l = r ? s.children.length - 1 : 0;
                                    h.isAncestor(i, n) && (l = n[i.length]), i = i.concat(l), s = S.get(e, i)
                                }
                        }()
                    },
                    parent(e, u) {
                        var t = h.parent(u),
                            r = S.get(e, t);
                        if (H.isText(r)) throw new Error("Cannot get the parent of path [".concat(u, "] because it does not exist in the root."));
                        return r
                    },
                    string: e => H.isText(e) ? e.text : e.children.map(S.string).join(""),
                    texts(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return function*() {
                            for (var [t, r] of S.nodes(e, u)) H.isText(t) && (yield [t, r])
                        }()
                    }
                };

            function _(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function T(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? _(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var q = {
                    isNodeOperation: e => q.isOperation(e) && e.type.endsWith("_node"),
                    isOperation(e) {
                        if (!(0, r.P)(e)) return !1;
                        switch (e.type) {
                            case "insert_node":
                            case "remove_node":
                                return h.isPath(e.path) && S.isNode(e.node);
                            case "insert_text":
                            case "remove_text":
                                return "number" === typeof e.offset && "string" === typeof e.text && h.isPath(e.path);
                            case "merge_node":
                                return "number" === typeof e.position && h.isPath(e.path) && (0, r.P)(e.properties);
                            case "move_node":
                                return h.isPath(e.path) && h.isPath(e.newPath);
                            case "set_node":
                                return h.isPath(e.path) && (0, r.P)(e.properties) && (0, r.P)(e.newProperties);
                            case "set_selection":
                                return null === e.properties && P.isRange(e.newProperties) || null === e.newProperties && P.isRange(e.properties) || (0, r.P)(e.properties) && (0, r.P)(e.newProperties);
                            case "split_node":
                                return h.isPath(e.path) && "number" === typeof e.position && (0, r.P)(e.properties);
                            default:
                                return !1
                        }
                    },
                    isOperationList: e => Array.isArray(e) && e.every((e => q.isOperation(e))),
                    isSelectionOperation: e => q.isOperation(e) && e.type.endsWith("_selection"),
                    isTextOperation: e => q.isOperation(e) && e.type.endsWith("_text"),
                    inverse(e) {
                        switch (e.type) {
                            case "insert_node":
                                return T(T({}, e), {}, {
                                    type: "remove_node"
                                });
                            case "insert_text":
                                return T(T({}, e), {}, {
                                    type: "remove_text"
                                });
                            case "merge_node":
                                return T(T({}, e), {}, {
                                    type: "split_node",
                                    path: h.previous(e.path)
                                });
                            case "move_node":
                                var {
                                    newPath: u,
                                    path: t
                                } = e;
                                if (h.equals(u, t)) return e;
                                if (h.isSibling(t, u)) return T(T({}, e), {}, {
                                    path: u,
                                    newPath: t
                                });
                                var r = h.transform(t, e),
                                    n = h.transform(h.next(t), e);
                                return T(T({}, e), {}, {
                                    path: r,
                                    newPath: n
                                });
                            case "remove_node":
                                return T(T({}, e), {}, {
                                    type: "insert_node"
                                });
                            case "remove_text":
                                return T(T({}, e), {}, {
                                    type: "insert_text"
                                });
                            case "set_node":
                                var {
                                    properties: o,
                                    newProperties: a
                                } = e;
                                return T(T({}, e), {}, {
                                    properties: a,
                                    newProperties: o
                                });
                            case "set_selection":
                                var {
                                    properties: i,
                                    newProperties: s
                                } = e;
                                return T(T({}, e), {}, null == i ? {
                                    properties: s,
                                    newProperties: null
                                } : null == s ? {
                                    properties: null,
                                    newProperties: i
                                } : {
                                    properties: s,
                                    newProperties: i
                                });
                            case "split_node":
                                return T(T({}, e), {}, {
                                    type: "merge_node",
                                    path: h.next(e.path)
                                })
                        }
                    }
                },
                z = new WeakMap,
                V = {
                    above: (e, u) => e.above(u),
                    addMark(e, u, t) {
                        e.addMark(u, t)
                    },
                    after: (e, u, t) => e.after(u, t),
                    before: (e, u, t) => e.before(u, t),
                    deleteBackward(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: t = "character"
                            } = u;
                        e.deleteBackward(t)
                    },
                    deleteForward(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: t = "character"
                            } = u;
                        e.deleteForward(t)
                    },
                    deleteFragment(e, u) {
                        e.deleteFragment(u)
                    },
                    edges: (e, u) => e.edges(u),
                    elementReadOnly(e) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e.elementReadOnly(u)
                    },
                    end: (e, u) => e.end(u),
                    first: (e, u) => e.first(u),
                    fragment: (e, u) => e.fragment(u),
                    hasBlocks: (e, u) => e.hasBlocks(u),
                    hasInlines: (e, u) => e.hasInlines(u),
                    hasPath: (e, u) => e.hasPath(u),
                    hasTexts: (e, u) => e.hasTexts(u),
                    insertBreak(e) {
                        e.insertBreak()
                    },
                    insertFragment(e, u, t) {
                        e.insertFragment(u, t)
                    },
                    insertNode(e, u) {
                        e.insertNode(u)
                    },
                    insertSoftBreak(e) {
                        e.insertSoftBreak()
                    },
                    insertText(e, u) {
                        e.insertText(u)
                    },
                    isBlock: (e, u) => e.isBlock(u),
                    isEdge: (e, u, t) => e.isEdge(u, t),
                    isEditor: e => (e => {
                        var u = z.get(e);
                        if (void 0 !== u) return u;
                        if (!(0, r.P)(e)) return !1;
                        var t = "function" === typeof e.addMark && "function" === typeof e.apply && "function" === typeof e.deleteFragment && "function" === typeof e.insertBreak && "function" === typeof e.insertSoftBreak && "function" === typeof e.insertFragment && "function" === typeof e.insertNode && "function" === typeof e.insertText && "function" === typeof e.isElementReadOnly && "function" === typeof e.isInline && "function" === typeof e.isSelectable && "function" === typeof e.isVoid && "function" === typeof e.normalizeNode && "function" === typeof e.onChange && "function" === typeof e.removeMark && "function" === typeof e.getDirtyPaths && (null === e.marks || (0, r.P)(e.marks)) && (null === e.selection || P.isRange(e.selection)) && S.isNodeList(e.children) && q.isOperationList(e.operations);
                        return z.set(e, t), t
                    })(e),
                    isElementReadOnly: (e, u) => e.isElementReadOnly(u),
                    isEmpty: (e, u) => e.isEmpty(u),
                    isEnd: (e, u, t) => e.isEnd(u, t),
                    isInline: (e, u) => e.isInline(u),
                    isNormalizing: e => e.isNormalizing(),
                    isSelectable: (e, u) => e.isSelectable(u),
                    isStart: (e, u, t) => e.isStart(u, t),
                    isVoid: (e, u) => e.isVoid(u),
                    last: (e, u) => e.last(u),
                    leaf: (e, u, t) => e.leaf(u, t),
                    levels: (e, u) => e.levels(u),
                    marks: e => e.getMarks(),
                    next: (e, u) => e.next(u),
                    node: (e, u, t) => e.node(u, t),
                    nodes: (e, u) => e.nodes(u),
                    normalize(e, u) {
                        e.normalize(u)
                    },
                    parent: (e, u, t) => e.parent(u, t),
                    path: (e, u, t) => e.path(u, t),
                    pathRef: (e, u, t) => e.pathRef(u, t),
                    pathRefs: e => e.pathRefs(),
                    point: (e, u, t) => e.point(u, t),
                    pointRef: (e, u, t) => e.pointRef(u, t),
                    pointRefs: e => e.pointRefs(),
                    positions: (e, u) => e.positions(u),
                    previous: (e, u) => e.previous(u),
                    range: (e, u, t) => e.range(u, t),
                    rangeRef: (e, u, t) => e.rangeRef(u, t),
                    rangeRefs: e => e.rangeRefs(),
                    removeMark(e, u) {
                        e.removeMark(u)
                    },
                    setNormalizing(e, u) {
                        e.setNormalizing(u)
                    },
                    start: (e, u) => e.start(u),
                    string: (e, u, t) => e.string(u, t),
                    unhangRange: (e, u, t) => e.unhangRange(u, t),
                    void: (e, u) => e.void(u),
                    withoutNormalizing(e, u) {
                        e.withoutNormalizing(u)
                    },
                    shouldMergeNodesRemovePrevNode: (e, u, t) => e.shouldMergeNodesRemovePrevNode(u, t)
                },
                I = {
                    isSpan: e => Array.isArray(e) && 2 === e.length && e.every(h.isPath)
                };

            function M(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function L(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? M(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var W = {
                    compare(e, u) {
                        var t = h.compare(e.path, u.path);
                        return 0 === t ? e.offset < u.offset ? -1 : e.offset > u.offset ? 1 : 0 : t
                    },
                    isAfter: (e, u) => 1 === W.compare(e, u),
                    isBefore: (e, u) => -1 === W.compare(e, u),
                    equals: (e, u) => e.offset === u.offset && h.equals(e.path, u.path),
                    isPoint: e => (0, r.P)(e) && "number" === typeof e.offset && h.isPath(e.path),
                    transform(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, n.Uy)(e, (e => {
                            if (null === e) return null;
                            var {
                                affinity: r = "forward"
                            } = t, {
                                path: n,
                                offset: o
                            } = e;
                            switch (u.type) {
                                case "insert_node":
                                case "move_node":
                                    e.path = h.transform(n, u, t);
                                    break;
                                case "insert_text":
                                    h.equals(u.path, n) && (u.offset < o || u.offset === o && "forward" === r) && (e.offset += u.text.length);
                                    break;
                                case "merge_node":
                                    h.equals(u.path, n) && (e.offset += u.position), e.path = h.transform(n, u, t);
                                    break;
                                case "remove_text":
                                    h.equals(u.path, n) && u.offset <= o && (e.offset -= Math.min(o - u.offset, u.text.length));
                                    break;
                                case "remove_node":
                                    if (h.equals(u.path, n) || h.isAncestor(u.path, n)) return null;
                                    e.path = h.transform(n, u, t);
                                    break;
                                case "split_node":
                                    if (h.equals(u.path, n)) {
                                        if (u.position === o && null == r) return null;
                                        (u.position < o || u.position === o && "forward" === r) && (e.offset -= u.position, e.path = h.transform(n, u, L(L({}, t), {}, {
                                            affinity: "forward"
                                        })))
                                    } else e.path = h.transform(n, u, t)
                            }
                        }))
                    }
                },
                $ = void 0,
                J = {
                    setScrubber(e) {
                        $ = e
                    },
                    stringify: e => JSON.stringify(e, $)
                },
                Z = ["text"],
                U = ["anchor", "focus"];

            function X(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function Y(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? X(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var G, H = {
                    equals(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                loose: r = !1
                            } = t;

                        function n(e) {
                            return w(e, Z)
                        }
                        return y(r ? n(e) : e, r ? n(u) : u)
                    },
                    isText: e => (0, r.P)(e) && "string" === typeof e.text,
                    isTextList: e => Array.isArray(e) && e.every((e => H.isText(e))),
                    isTextProps: e => void 0 !== e.text,
                    matches(e, u) {
                        for (var t in u)
                            if ("text" !== t && (!e.hasOwnProperty(t) || e[t] !== u[t])) return !1;
                        return !0
                    },
                    decorations(e, u) {
                        var t = [Y({}, e)];
                        for (var r of u) {
                            var n = w(r, U),
                                [o, a] = P.edges(r),
                                i = [],
                                s = 0,
                                D = o.offset,
                                l = a.offset;
                            for (var f of t) {
                                var {
                                    length: c
                                } = f.text, C = s;
                                if (s += c, D <= C && s <= l) Object.assign(f, n), i.push(f);
                                else if (D !== l && (D === s || l === C) || D > s || l < C || l === C && 0 !== C) i.push(f);
                                else {
                                    var B = f,
                                        h = void 0,
                                        v = void 0;
                                    if (l < s) {
                                        var d = l - C;
                                        v = Y(Y({}, B), {}, {
                                            text: B.text.slice(d)
                                        }), B = Y(Y({}, B), {}, {
                                            text: B.text.slice(0, d)
                                        })
                                    }
                                    if (D > C) {
                                        var A = D - C;
                                        h = Y(Y({}, B), {}, {
                                            text: B.text.slice(0, A)
                                        }), B = Y(Y({}, B), {}, {
                                            text: B.text.slice(A)
                                        })
                                    }
                                    Object.assign(B, n), h && i.push(h), i.push(B), v && i.push(v)
                                }
                            }
                            t = i
                        }
                        return t
                    }
                },
                K = e => e.selection ? e.selection : e.children.length > 0 ? V.end(e, []) : [0],
                Q = (e, u) => {
                    var [t] = V.node(e, u);
                    return e => e === t
                },
                ee = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = !u,
                        r = u ? ie(e) : e,
                        n = G.None,
                        o = G.None,
                        a = 0,
                        i = null;
                    for (var s of r) {
                        var D = s.codePointAt(0);
                        if (!D) break;
                        var l = pe(s, D);
                        if ([n, o] = t ? [o, l] : [l, n], Fe(n, G.ZWJ) && Fe(o, G.ExtPict) && !ye(t ? e.substring(0, a) : e.substring(0, e.length - a))) break;
                        if (Fe(n, G.RI) && Fe(o, G.RI) && !(i = null !== i ? !i : !!t || be(e.substring(0, e.length - a)))) break;
                        if (n !== G.None && o !== G.None && ge(n, o)) break;
                        a += s.length
                    }
                    return a || 1
                },
                ue = /\s/,
                te = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                re = /['\u2018\u2019]/,
                ne = function(e) {
                    for (var u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = 0, r = !1; e.length > 0;) {
                        var n = ee(e, u),
                            [o, a] = oe(e, n, u);
                        if (ae(o, a, u)) r = !0, t += n;
                        else {
                            if (r) break;
                            t += n
                        }
                        e = a
                    }
                    return t
                },
                oe = (e, u, t) => {
                    if (t) {
                        var r = e.length - u;
                        return [e.slice(r, e.length), e.slice(0, r)]
                    }
                    return [e.slice(0, u), e.slice(u)]
                },
                ae = function e(u, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (ue.test(u)) return !1;
                    if (re.test(u)) {
                        var n = ee(t, r),
                            [o, a] = oe(t, n, r);
                        if (e(o, a, r)) return !0
                    }
                    return !te.test(u)
                },
                ie = function*(e) {
                    for (var u = e.length - 1, t = 0; t < e.length; t++) {
                        var r = e.charAt(u - t);
                        if (De(r.charCodeAt(0))) {
                            var n = e.charAt(u - t - 1);
                            if (se(n.charCodeAt(0))) {
                                yield n + r, t++;
                                continue
                            }
                        }
                        yield r
                    }
                },
                se = e => e >= 55296 && e <= 56319,
                De = e => e >= 56320 && e <= 57343;
            ! function(e) {
                e[e.None = 0] = "None", e[e.Extend = 1] = "Extend", e[e.ZWJ = 2] = "ZWJ", e[e.RI = 4] = "RI", e[e.Prepend = 8] = "Prepend", e[e.SpacingMark = 16] = "SpacingMark", e[e.L = 32] = "L", e[e.V = 64] = "V", e[e.T = 128] = "T", e[e.LV = 256] = "LV", e[e.LVT = 512] = "LVT", e[e.ExtPict = 1024] = "ExtPict", e[e.Any = 2048] = "Any"
            }(G || (G = {}));
            var le = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
                fe = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
                ce = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
                Ce = /^[\u1100-\u115F\uA960-\uA97C]$/,
                Be = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
                he = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
                ve = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
                de = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
                Ae = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
                pe = (e, u) => {
                    var t = G.Any;
                    return -1 !== e.search(le) && (t |= G.Extend), 8205 === u && (t |= G.ZWJ), u >= 127462 && u <= 127487 && (t |= G.RI), -1 !== e.search(fe) && (t |= G.Prepend), -1 !== e.search(ce) && (t |= G.SpacingMark), -1 !== e.search(Ce) && (t |= G.L), -1 !== e.search(Be) && (t |= G.V), -1 !== e.search(he) && (t |= G.T), -1 !== e.search(ve) && (t |= G.LV), -1 !== e.search(de) && (t |= G.LVT), -1 !== e.search(Ae) && (t |= G.ExtPict), t
                };

            function Fe(e, u) {
                return 0 !== (e & u)
            }
            var Ee = [
                [G.L, G.L | G.V | G.LV | G.LVT],
                [G.LV | G.V, G.V | G.T],
                [G.LVT | G.T, G.T],
                [G.Any, G.Extend | G.ZWJ],
                [G.Any, G.SpacingMark],
                [G.Prepend, G.Any],
                [G.ZWJ, G.ExtPict],
                [G.RI, G.RI]
            ];

            function ge(e, u) {
                return -1 === Ee.findIndex((t => Fe(e, t[0]) && Fe(u, t[1])))
            }
            var me = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
                ye = e => -1 !== e.search(me),
                we = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
                be = e => {
                    var u = e.match(we);
                    return null !== u && u[0].length / 2 % 2 === 1
                },
                Oe = {
                    delete(e, u) {
                        e.delete(u)
                    },
                    insertFragment(e, u, t) {
                        e.insertFragment(u, t)
                    },
                    insertText(e, u) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        V.withoutNormalizing(e, (() => {
                            var {
                                voids: r = !1
                            } = t, {
                                at: n = K(e)
                            } = t;
                            if (h.isPath(n) && (n = V.range(e, n)), P.isRange(n))
                                if (P.isCollapsed(n)) n = n.anchor;
                                else {
                                    var o = P.end(n);
                                    if (!r && V.void(e, {
                                            at: o
                                        })) return;
                                    var a = P.start(n),
                                        i = V.pointRef(e, a),
                                        s = V.pointRef(e, o);
                                    je.delete(e, {
                                        at: n,
                                        voids: r
                                    });
                                    var D = i.unref(),
                                        l = s.unref();
                                    n = D || l, je.setSelection(e, {
                                        anchor: n,
                                        focus: n
                                    })
                                }
                            if (!(!r && V.void(e, {
                                    at: n
                                }) || V.elementReadOnly(e, {
                                    at: n
                                }))) {
                                var {
                                    path: f,
                                    offset: c
                                } = n;
                                u.length > 0 && e.apply({
                                    type: "insert_text",
                                    path: f,
                                    offset: c,
                                    text: u
                                })
                            }
                        }))
                    }
                };

            function Pe(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function xe(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? Pe(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pe(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var je = xe(xe(xe(xe({}, E), g), m), Oe),
                ke = new WeakMap,
                Ne = (e, u, t) => {
                    var r = ke.get(e) || !1;
                    ke.set(e, !0);
                    try {
                        u(), t()
                    } finally {
                        ke.set(e, r)
                    }
                };

            function Re(e, u, t) {
                var r, n, o = s.get(e) || [],
                    a = D.get(e) || new Set,
                    i = e => {
                        if (e) {
                            var u = e.join(",");
                            n.has(u) || (n.add(u), r.push(e))
                        }
                    };
                if (t)
                    for (var l of (r = [], n = new Set, o)) {
                        i(t(l))
                    } else r = o, n = a;
                for (var f of u) i(f);
                s.set(e, r), D.set(e, n)
            }
            var Se = (e, u) => {
                    for (var t of V.pathRefs(e)) o.transform(t, u);
                    for (var r of V.pointRefs(e)) a.transform(r, u);
                    for (var n of V.rangeRefs(e)) i.transform(n, u);
                    if (!(e => ke.get(e) || !1)(e)) {
                        var s = h.operationCanTransformPath(u) ? e => h.transform(e, u) : void 0;
                        Re(e, e.getDirtyPaths(u), s)
                    }
                    je.transform(e, u), e.operations.push(u), V.normalize(e, {
                        operation: u
                    }), "set_selection" === u.type && (e.marks = null), l.get(e) || (l.set(e, !0), Promise.resolve().then((() => {
                        l.set(e, !1), e.onChange({
                            operation: u
                        }), e.operations = []
                    })))
                },
                _e = (e, u) => {
                    switch (u.type) {
                        case "insert_text":
                        case "remove_text":
                        case "set_node":
                            var {
                                path: t
                            } = u;
                            return h.levels(t);
                        case "insert_node":
                            var {
                                node: r,
                                path: n
                            } = u, o = h.levels(n), a = H.isText(r) ? [] : Array.from(S.nodes(r), (e => {
                                var [, u] = e;
                                return n.concat(u)
                            }));
                            return [...o, ...a];
                        case "merge_node":
                            var {
                                path: i
                            } = u;
                            return [...h.ancestors(i), h.previous(i)];
                        case "move_node":
                            var {
                                path: s,
                                newPath: D
                            } = u;
                            if (h.equals(s, D)) return [];
                            var l = [],
                                f = [];
                            for (var c of h.ancestors(s)) {
                                var C = h.transform(c, u);
                                l.push(C)
                            }
                            for (var B of h.ancestors(D)) {
                                var v = h.transform(B, u);
                                f.push(v)
                            }
                            var d = f[f.length - 1],
                                A = D[D.length - 1],
                                p = d.concat(A);
                            return [...l, ...f, p];
                        case "remove_node":
                            var {
                                path: F
                            } = u;
                            return [...h.ancestors(F)];
                        case "split_node":
                            var {
                                path: E
                            } = u;
                            return [...h.levels(E), h.next(E)];
                        default:
                            return []
                    }
                },
                Te = e => {
                    var {
                        selection: u
                    } = e;
                    return u ? S.fragment(e, u) : []
                },
                qe = (e, u) => {
                    var [t, r] = u;
                    if (!H.isText(t))
                        if (j.isElement(t) && 0 === t.children.length) {
                            je.insertNodes(e, {
                                text: ""
                            }, {
                                at: r.concat(0),
                                voids: !0
                            })
                        } else
                            for (var n = !V.isEditor(t) && (j.isElement(t) && (e.isInline(t) || 0 === t.children.length || H.isText(t.children[0]) || e.isInline(t.children[0]))), o = 0, a = 0; a < t.children.length; a++, o++) {
                                var i = S.get(e, r);
                                if (!H.isText(i)) {
                                    var s = i.children[o],
                                        D = i.children[o - 1],
                                        l = a === t.children.length - 1;
                                    if ((H.isText(s) || j.isElement(s) && e.isInline(s)) !== n) je.removeNodes(e, {
                                        at: r.concat(o),
                                        voids: !0
                                    }), o--;
                                    else if (j.isElement(s)) {
                                        if (e.isInline(s))
                                            if (null != D && H.isText(D)) {
                                                if (l) {
                                                    je.insertNodes(e, {
                                                        text: ""
                                                    }, {
                                                        at: r.concat(o + 1),
                                                        voids: !0
                                                    }), o++
                                                }
                                            } else {
                                                je.insertNodes(e, {
                                                    text: ""
                                                }, {
                                                    at: r.concat(o),
                                                    voids: !0
                                                }), o++
                                            }
                                    } else {
                                        if (!H.isText(s) && !("children" in s)) s.children = [];
                                        null != D && H.isText(D) && (H.equals(s, D, {
                                            loose: !0
                                        }) ? (je.mergeNodes(e, {
                                            at: r.concat(o),
                                            voids: !0
                                        }), o--) : "" === D.text ? (je.removeNodes(e, {
                                            at: r.concat(o - 1),
                                            voids: !0
                                        }), o--) : "" === s.text && (je.removeNodes(e, {
                                            at: r.concat(o),
                                            voids: !0
                                        }), o--))
                                    }
                                }
                            }
                },
                ze = (e, u) => {
                    var {
                        iteration: t,
                        initialDirtyPathsLength: r
                    } = u, n = 42 * r;
                    if (t > n) throw new Error("Could not completely normalize the editor after ".concat(n, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
                    return !0
                },
                Ve = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            voids: t = !1,
                            mode: r = "lowest",
                            at: n = e.selection,
                            match: o
                        } = u;
                    if (n) {
                        var a = V.path(e, n),
                            i = "lowest" === r;
                        for (var [s, D] of V.levels(e, {
                                at: a,
                                voids: t,
                                match: o,
                                reverse: i
                            }))
                            if (!H.isText(s))
                                if (P.isRange(n)) {
                                    if (h.isAncestor(D, n.anchor.path) && h.isAncestor(D, n.focus.path)) return [s, D]
                                } else if (!h.equals(a, D)) return [s, D]
                    }
                };

            function Ie(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function Me(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? Ie(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ie(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var Le = (e, u, t) => {
                var {
                    selection: r
                } = e;
                if (r) {
                    var n = (u, t) => {
                            if (!H.isText(u)) return !1;
                            var [r, n] = V.parent(e, t);
                            return !e.isVoid(r) || e.markableVoid(r)
                        },
                        o = P.isExpanded(r),
                        a = !1;
                    if (!o) {
                        var [i, s] = V.node(e, r);
                        if (i && n(i, s)) {
                            var [D] = V.parent(e, s);
                            a = D && e.markableVoid(D)
                        }
                    }
                    if (o || a) je.setNodes(e, {
                        [u]: t
                    }, {
                        match: n,
                        split: !0,
                        voids: !0
                    });
                    else {
                        var f = Me(Me({}, V.marks(e) || {}), {}, {
                            [u]: t
                        });
                        e.marks = f, l.get(e) || e.onChange()
                    }
                }
            };

            function We(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function $e(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? We(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : We(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var Je = function(e, u) {
                var t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = V.point(e, u, {
                        edge: "end"
                    }),
                    o = V.end(e, []),
                    a = {
                        anchor: n,
                        focus: o
                    },
                    {
                        distance: i = 1
                    } = r,
                    s = 0;
                for (var D of V.positions(e, $e($e({}, r), {}, {
                        at: a
                    }))) {
                    if (s > i) break;
                    0 !== s && (t = D), s++
                }
                return t
            };

            function Ze(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function Ue(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? Ze(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ze(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var Xe = function(e, u) {
                    var t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = V.start(e, []),
                        o = V.point(e, u, {
                            edge: "start"
                        }),
                        a = {
                            anchor: n,
                            focus: o
                        },
                        {
                            distance: i = 1
                        } = r,
                        s = 0;
                    for (var D of V.positions(e, Ue(Ue({}, r), {}, {
                            at: a,
                            reverse: !0
                        }))) {
                        if (s > i) break;
                        0 !== s && (t = D), s++
                    }
                    return t
                },
                Ye = (e, u) => {
                    var {
                        selection: t
                    } = e;
                    t && P.isCollapsed(t) && je.delete(e, {
                        unit: u,
                        reverse: !0
                    })
                },
                Ge = (e, u) => {
                    var {
                        selection: t
                    } = e;
                    t && P.isCollapsed(t) && je.delete(e, {
                        unit: u
                    })
                },
                He = function(e) {
                    var {
                        direction: u = "forward"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        selection: t
                    } = e;
                    t && P.isExpanded(t) && je.delete(e, {
                        reverse: "backward" === u
                    })
                },
                Ke = (e, u) => [V.start(e, u), V.end(e, u)];

            function Qe(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function eu(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? Qe(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qe(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var uu = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return V.above(e, eu(eu({}, u), {}, {
                        match: u => j.isElement(u) && V.isElementReadOnly(e, u)
                    }))
                },
                tu = (e, u) => V.point(e, u, {
                    edge: "end"
                }),
                ru = (e, u) => {
                    var t = V.path(e, u, {
                        edge: "start"
                    });
                    return V.node(e, t)
                },
                nu = (e, u) => {
                    var t = V.range(e, u);
                    return S.fragment(e, t)
                };

            function ou(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function au(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? ou(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ou(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var iu = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return V.above(e, au(au({}, u), {}, {
                        match: u => j.isElement(u) && V.isVoid(e, u)
                    }))
                },
                su = (e, u) => u.children.some((u => j.isElement(u) && V.isBlock(e, u))),
                Du = (e, u) => u.children.some((u => H.isText(u) || V.isInline(e, u))),
                lu = (e, u) => S.has(e, u),
                fu = (e, u) => u.children.every((e => H.isText(e))),
                cu = e => {
                    je.splitNodes(e, {
                        always: !0
                    })
                },
                Cu = (e, u, t) => {
                    je.insertNodes(e, u, t)
                },
                Bu = e => {
                    je.splitNodes(e, {
                        always: !0
                    })
                };

            function hu(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function vu(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? hu(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hu(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var du = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            selection: r,
                            marks: n
                        } = e;
                    if (r) {
                        if (n) {
                            var o = vu({
                                text: u
                            }, n);
                            je.insertNodes(e, o, {
                                at: t.at,
                                voids: t.voids
                            })
                        } else je.insertText(e, u, t);
                        e.marks = null
                    }
                },
                Au = (e, u) => !e.isInline(u),
                pu = (e, u, t) => V.isStart(e, u, t) || V.isEnd(e, u, t),
                Fu = (e, u) => {
                    var {
                        children: t
                    } = u, [r] = t;
                    return 0 === t.length || 1 === t.length && H.isText(r) && "" === r.text && !e.isVoid(u)
                },
                Eu = (e, u, t) => {
                    var r = V.end(e, t);
                    return W.equals(u, r)
                },
                gu = e => {
                    var u = f.get(e);
                    return void 0 === u || u
                },
                mu = (e, u, t) => {
                    if (0 !== u.offset) return !1;
                    var r = V.start(e, t);
                    return W.equals(u, r)
                },
                yu = (e, u) => {
                    var t = V.path(e, u, {
                        edge: "end"
                    });
                    return V.node(e, t)
                },
                wu = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = V.path(e, u, t),
                        n = S.leaf(e, r);
                    return [n, r]
                };

            function bu(e) {
                var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function*() {
                    var {
                        at: t = e.selection,
                        reverse: r = !1,
                        voids: n = !1
                    } = u, {
                        match: o
                    } = u;
                    if (null == o && (o = () => !0), t) {
                        var a = [],
                            i = V.path(e, t);
                        for (var [s, D] of S.levels(e, i))
                            if (o(s, D) && (a.push([s, D]), !n && j.isElement(s) && V.isVoid(e, s))) break;
                        r && a.reverse(), yield* a
                    }
                }()
            }
            var Ou = ["text"],
                Pu = ["text"],
                xu = function(e) {
                    var {
                        marks: u,
                        selection: t
                    } = e;
                    if (!t) return null;
                    var {
                        anchor: r,
                        focus: n
                    } = t;
                    if (u) return u;
                    if (P.isExpanded(t)) {
                        if (V.isEnd(e, r, r.path)) {
                            var o = V.after(e, r);
                            o && (r = o)
                        }
                        var [a] = V.nodes(e, {
                            match: H.isText,
                            at: {
                                anchor: r,
                                focus: n
                            }
                        });
                        if (a) {
                            var [i] = a;
                            return w(i, Ou)
                        }
                        return {}
                    }
                    var {
                        path: s
                    } = r, [D] = V.leaf(e, s);
                    if (0 === r.offset) {
                        var l = V.previous(e, {
                            at: s,
                            match: H.isText
                        });
                        if (!V.above(e, {
                                match: u => j.isElement(u) && V.isVoid(e, u) && e.markableVoid(u)
                            })) {
                            var f = V.above(e, {
                                match: u => j.isElement(u) && V.isBlock(e, u)
                            });
                            if (l && f) {
                                var [c, C] = l, [, B] = f;
                                h.isAncestor(B, C) && (D = c)
                            }
                        }
                    }
                    return w(D, Pu)
                },
                ju = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            mode: t = "lowest",
                            voids: r = !1
                        } = u,
                        {
                            match: n,
                            at: o = e.selection
                        } = u;
                    if (o) {
                        var a = V.after(e, o, {
                            voids: r
                        });
                        if (a) {
                            var [, i] = V.last(e, []), s = [a.path, i];
                            if (h.isPath(o) && 0 === o.length) throw new Error("Cannot get the next node from the root node!");
                            if (null == n)
                                if (h.isPath(o)) {
                                    var [D] = V.parent(e, o);
                                    n = e => D.children.includes(e)
                                } else n = () => !0;
                            var [l] = V.nodes(e, {
                                at: s,
                                match: n,
                                mode: t,
                                voids: r
                            });
                            return l
                        }
                    }
                },
                ku = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = V.path(e, u, t),
                        n = S.get(e, r);
                    return [n, r]
                };

            function Nu(e) {
                var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function*() {
                    var {
                        at: t = e.selection,
                        mode: r = "all",
                        universal: n = !1,
                        reverse: o = !1,
                        voids: a = !1,
                        ignoreNonSelectable: i = !1
                    } = u, {
                        match: s
                    } = u;
                    if (s || (s = () => !0), t) {
                        var D, l;
                        if (I.isSpan(t)) D = t[0], l = t[1];
                        else {
                            var f = V.path(e, t, {
                                    edge: "start"
                                }),
                                c = V.path(e, t, {
                                    edge: "end"
                                });
                            D = o ? c : f, l = o ? f : c
                        }
                        var C, B = S.nodes(e, {
                                reverse: o,
                                from: D,
                                to: l,
                                pass: u => {
                                    var [t] = u;
                                    return !!j.isElement(t) && (!(a || !V.isVoid(e, t) && !V.isElementReadOnly(e, t)) || !(!i || V.isSelectable(e, t)))
                                }
                            }),
                            v = [];
                        for (var [d, A] of B)
                            if (!i || !j.isElement(d) || V.isSelectable(e, d)) {
                                var p = C && 0 === h.compare(A, C[1]);
                                if ("highest" !== r || !p)
                                    if (s(d, A))
                                        if ("lowest" === r && p) C = [d, A];
                                        else {
                                            var F = "lowest" === r ? C : [d, A];
                                            F && (n ? v.push(F) : yield F), C = [d, A]
                                        }
                                else if (n && !p && H.isText(d)) return
                            }
                        "lowest" === r && C && (n ? v.push(C) : yield C), n && (yield* v)
                    }
                }()
            }
            var Ru = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            force: t = !1,
                            operation: r
                        } = u,
                        n = e => s.get(e) || [],
                        o = e => D.get(e) || new Set,
                        a = e => {
                            var u = n(e).pop(),
                                t = u.join(",");
                            return o(e).delete(t), u
                        };
                    if (V.isNormalizing(e)) {
                        if (t) {
                            var i = Array.from(S.nodes(e), (e => {
                                    var [, u] = e;
                                    return u
                                })),
                                l = new Set(i.map((e => e.join(","))));
                            s.set(e, i), D.set(e, l)
                        }
                        0 !== n(e).length && V.withoutNormalizing(e, (() => {
                            for (var u of n(e))
                                if (S.has(e, u)) {
                                    var t = V.node(e, u),
                                        [o, i] = t;
                                    j.isElement(o) && 0 === o.children.length && e.normalizeNode(t, {
                                        operation: r
                                    })
                                }
                            for (var s = n(e), D = s.length, l = 0; 0 !== s.length;) {
                                if (!e.shouldNormalize({
                                        dirtyPaths: s,
                                        iteration: l,
                                        initialDirtyPathsLength: D,
                                        operation: r
                                    })) return;
                                var f = a(e);
                                if (S.has(e, f)) {
                                    var c = V.node(e, f);
                                    e.normalizeNode(c, {
                                        operation: r
                                    })
                                }
                                l++, s = n(e)
                            }
                        }))
                    }
                },
                Su = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = V.path(e, u, t),
                        n = h.parent(r),
                        o = V.node(e, n);
                    return o
                },
                _u = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            affinity: r = "forward"
                        } = t,
                        n = {
                            current: u,
                            affinity: r,
                            unref() {
                                var {
                                    current: u
                                } = n;
                                return V.pathRefs(e).delete(n), n.current = null, u
                            }
                        },
                        o = V.pathRefs(e);
                    return o.add(n), n
                },
                Tu = e => {
                    var u = c.get(e);
                    return u || (u = new Set, c.set(e, u)), u
                },
                qu = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            depth: r,
                            edge: n
                        } = t;
                    if (h.isPath(u))
                        if ("start" === n) {
                            var [, o] = S.first(e, u);
                            u = o
                        } else if ("end" === n) {
                        var [, a] = S.last(e, u);
                        u = a
                    }
                    return P.isRange(u) && (u = "start" === n ? P.start(u) : "end" === n ? P.end(u) : h.common(u.anchor.path, u.focus.path)), W.isPoint(u) && (u = u.path), null != r && (u = u.slice(0, r)), u
                },
                zu = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            affinity: r = "forward"
                        } = t,
                        n = {
                            current: u,
                            affinity: r,
                            unref() {
                                var {
                                    current: u
                                } = n;
                                return V.pointRefs(e).delete(n), n.current = null, u
                            }
                        },
                        o = V.pointRefs(e);
                    return o.add(n), n
                },
                Vu = e => {
                    var u = C.get(e);
                    return u || (u = new Set, C.set(e, u)), u
                },
                Iu = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            edge: r = "start"
                        } = t;
                    if (h.isPath(u)) {
                        var n;
                        if ("end" === r) {
                            var [, o] = S.last(e, u);
                            n = o
                        } else {
                            var [, a] = S.first(e, u);
                            n = a
                        }
                        var i = S.get(e, n);
                        if (!H.isText(i)) throw new Error("Cannot get the ".concat(r, " point in the node at path [").concat(u, "] because it has no ").concat(r, " text node."));
                        return {
                            path: n,
                            offset: "end" === r ? i.text.length : 0
                        }
                    }
                    if (P.isRange(u)) {
                        var [s, D] = P.edges(u);
                        return "start" === r ? s : D
                    }
                    return u
                };

            function Mu(e) {
                var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function*() {
                    var {
                        at: t = e.selection,
                        unit: r = "offset",
                        reverse: n = !1,
                        voids: o = !1,
                        ignoreNonSelectable: a = !1
                    } = u;
                    if (t) {
                        var i = V.range(e, t),
                            [s, D] = P.edges(i),
                            l = n ? D : s,
                            f = !1,
                            c = "",
                            C = 0,
                            B = 0,
                            v = 0;
                        for (var [d, A] of V.nodes(e, {
                                at: t,
                                reverse: n,
                                voids: o,
                                ignoreNonSelectable: a
                            })) {
                            if (j.isElement(d)) {
                                if (!o && (e.isVoid(d) || e.isElementReadOnly(d))) {
                                    yield V.start(e, A);
                                    continue
                                }
                                if (e.isInline(d)) continue;
                                if (V.hasInlines(e, d)) {
                                    var p = h.isAncestor(A, D.path) ? D : V.end(e, A),
                                        F = h.isAncestor(A, s.path) ? s : V.start(e, A);
                                    c = V.string(e, {
                                        anchor: F,
                                        focus: p
                                    }, {
                                        voids: o
                                    }), f = !0
                                }
                            }
                            if (H.isText(d)) {
                                var E = h.equals(A, l.path);
                                for (E ? (B = n ? l.offset : d.text.length - l.offset, v = l.offset) : (B = d.text.length, v = n ? B : 0), (E || f || "offset" === r) && (yield {
                                        path: A,
                                        offset: v
                                    }, f = !1);;) {
                                    if (0 === C) {
                                        if ("" === c) break;
                                        C = g(c, r, n), c = oe(c, C, n)[1]
                                    }
                                    if (v = n ? v - C : v + C, (B -= C) < 0) {
                                        C = -B;
                                        break
                                    }
                                    C = 0, yield {
                                        path: A,
                                        offset: v
                                    }
                                }
                            }
                        }
                    }

                    function g(e, u, t) {
                        return "character" === u ? ee(e, t) : "word" === u ? ne(e, t) : "line" === u || "block" === u ? e.length : 1
                    }
                }()
            }
            var Lu = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            mode: t = "lowest",
                            voids: r = !1
                        } = u,
                        {
                            match: n,
                            at: o = e.selection
                        } = u;
                    if (o) {
                        var a = V.before(e, o, {
                            voids: r
                        });
                        if (a) {
                            var [, i] = V.first(e, []), s = [a.path, i];
                            if (h.isPath(o) && 0 === o.length) throw new Error("Cannot get the previous node from the root node!");
                            if (null == n)
                                if (h.isPath(o)) {
                                    var [D] = V.parent(e, o);
                                    n = e => D.children.includes(e)
                                } else n = () => !0;
                            var [l] = V.nodes(e, {
                                reverse: !0,
                                at: s,
                                match: n,
                                mode: t,
                                voids: r
                            });
                            return l
                        }
                    }
                },
                Wu = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            affinity: r = "forward"
                        } = t,
                        n = {
                            current: u,
                            affinity: r,
                            unref() {
                                var {
                                    current: u
                                } = n;
                                return V.rangeRefs(e).delete(n), n.current = null, u
                            }
                        },
                        o = V.rangeRefs(e);
                    return o.add(n), n
                },
                $u = e => {
                    var u = B.get(e);
                    return u || (u = new Set, B.set(e, u)), u
                },
                Ju = (e, u, t) => P.isRange(u) && !t ? u : {
                    anchor: V.start(e, u),
                    focus: V.end(e, t || u)
                };

            function Zu(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var Uu = (e, u) => {
                    var {
                        selection: t
                    } = e;
                    if (t) {
                        var r = (u, t) => {
                                if (!H.isText(u)) return !1;
                                var [r, n] = V.parent(e, t);
                                return !e.isVoid(r) || e.markableVoid(r)
                            },
                            n = P.isExpanded(t),
                            o = !1;
                        if (!n) {
                            var [a, i] = V.node(e, t);
                            if (a && r(a, i)) {
                                var [s] = V.parent(e, i);
                                o = s && e.markableVoid(s)
                            }
                        }
                        if (n || o) je.unsetNodes(e, u, {
                            match: r,
                            split: !0,
                            voids: !0
                        });
                        else {
                            var D = function(e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = null != arguments[u] ? arguments[u] : {};
                                    u % 2 ? Zu(Object(t), !0).forEach((function(u) {
                                        A(e, u, t[u])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Zu(Object(t)).forEach((function(u) {
                                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                                    }))
                                }
                                return e
                            }({}, V.marks(e) || {});
                            delete D[u], e.marks = D, l.get(e) || e.onChange()
                        }
                    }
                },
                Xu = (e, u) => {
                    f.set(e, u)
                },
                Yu = (e, u) => V.point(e, u, {
                    edge: "start"
                }),
                Gu = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            voids: r = !1
                        } = t,
                        n = V.range(e, u),
                        [o, a] = P.edges(n),
                        i = "";
                    for (var [s, D] of V.nodes(e, {
                            at: n,
                            match: H.isText,
                            voids: r
                        })) {
                        var l = s.text;
                        h.equals(D, a.path) && (l = l.slice(0, a.offset)), h.equals(D, o.path) && (l = l.slice(o.offset)), i += l
                    }
                    return i
                },
                Hu = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            voids: r = !1
                        } = t,
                        [n, o] = P.edges(u);
                    if (0 !== n.offset || 0 !== o.offset || P.isCollapsed(u) || h.hasPrevious(o.path)) return u;
                    var a = V.above(e, {
                            at: o,
                            match: u => j.isElement(u) && V.isBlock(e, u),
                            voids: r
                        }),
                        i = a ? a[1] : [],
                        s = V.start(e, n),
                        D = {
                            anchor: s,
                            focus: o
                        },
                        l = !0;
                    for (var [f, c] of V.nodes(e, {
                            at: D,
                            match: H.isText,
                            reverse: !0,
                            voids: r
                        }))
                        if (l) l = !1;
                        else if ("" !== f.text || h.isBefore(c, i)) {
                        o = {
                            path: c,
                            offset: f.text.length
                        };
                        break
                    }
                    return {
                        anchor: n,
                        focus: o
                    }
                },
                Ku = (e, u) => {
                    var t = V.isNormalizing(e);
                    V.setNormalizing(e, !1);
                    try {
                        u()
                    } finally {
                        V.setNormalizing(e, t)
                    }
                    V.normalize(e)
                },
                Qu = (e, u, t) => {
                    var [r, n] = u;
                    return j.isElement(r) && V.isEmpty(e, r) || H.isText(r) && "" === r.text && 0 !== n[n.length - 1]
                },
                et = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    V.withoutNormalizing(e, (() => {
                        var t, r, {
                                reverse: n = !1,
                                unit: o = "character",
                                distance: a = 1,
                                voids: i = !1
                            } = u,
                            {
                                at: s = e.selection,
                                hanging: D = !1
                            } = u;
                        if (s) {
                            var l = !1;
                            if (P.isRange(s) && P.isCollapsed(s) && (l = !0, s = s.anchor), W.isPoint(s)) {
                                var f = V.void(e, {
                                    at: s,
                                    mode: "highest"
                                });
                                if (!i && f) {
                                    var [, c] = f;
                                    s = c
                                } else {
                                    var C = {
                                        unit: o,
                                        distance: a
                                    };
                                    s = {
                                        anchor: s,
                                        focus: n ? V.before(e, s, C) || V.start(e, []) : V.after(e, s, C) || V.end(e, [])
                                    }, D = !0
                                }
                            }
                            if (h.isPath(s)) je.removeNodes(e, {
                                at: s,
                                voids: i
                            });
                            else if (!P.isCollapsed(s)) {
                                if (!D) {
                                    var [, B] = P.edges(s), v = V.end(e, []);
                                    W.equals(B, v) || (s = V.unhangRange(e, s, {
                                        voids: i
                                    }))
                                }
                                var [d, A] = P.edges(s), p = V.above(e, {
                                    match: u => j.isElement(u) && V.isBlock(e, u),
                                    at: d,
                                    voids: i
                                }), F = V.above(e, {
                                    match: u => j.isElement(u) && V.isBlock(e, u),
                                    at: A,
                                    voids: i
                                }), E = p && F && !h.equals(p[1], F[1]), g = h.equals(d.path, A.path), m = i ? null : null !== (t = V.void(e, {
                                    at: d,
                                    mode: "highest"
                                })) && void 0 !== t ? t : V.elementReadOnly(e, {
                                    at: d,
                                    mode: "highest"
                                }), y = i ? null : null !== (r = V.void(e, {
                                    at: A,
                                    mode: "highest"
                                })) && void 0 !== r ? r : V.elementReadOnly(e, {
                                    at: A,
                                    mode: "highest"
                                });
                                if (m) {
                                    var w = V.before(e, d);
                                    w && p && h.isAncestor(p[1], w.path) && (d = w)
                                }
                                if (y) {
                                    var b = V.after(e, A);
                                    b && F && h.isAncestor(F[1], b.path) && (A = b)
                                }
                                var O, x = [];
                                for (var k of V.nodes(e, {
                                        at: s,
                                        voids: i
                                    })) {
                                    var [N, R] = k;
                                    O && 0 === h.compare(R, O) || (!i && j.isElement(N) && (V.isVoid(e, N) || V.isElementReadOnly(e, N)) || !h.isCommon(R, d.path) && !h.isCommon(R, A.path)) && (x.push(k), O = R)
                                }
                                var S = Array.from(x, (u => {
                                        var [, t] = u;
                                        return V.pathRef(e, t)
                                    })),
                                    _ = V.pointRef(e, d),
                                    T = V.pointRef(e, A),
                                    q = "";
                                if (!g && !m) {
                                    var z = _.current,
                                        [I] = V.leaf(e, z),
                                        {
                                            path: M
                                        } = z,
                                        {
                                            offset: L
                                        } = d,
                                        $ = I.text.slice(L);
                                    $.length > 0 && (e.apply({
                                        type: "remove_text",
                                        path: M,
                                        offset: L,
                                        text: $
                                    }), q = $)
                                }
                                if (S.reverse().map((e => e.unref())).filter((e => null !== e)).forEach((u => je.removeNodes(e, {
                                        at: u,
                                        voids: i
                                    }))), !y) {
                                    var J = T.current,
                                        [Z] = V.leaf(e, J),
                                        {
                                            path: U
                                        } = J,
                                        X = g ? d.offset : 0,
                                        Y = Z.text.slice(X, A.offset);
                                    Y.length > 0 && (e.apply({
                                        type: "remove_text",
                                        path: U,
                                        offset: X,
                                        text: Y
                                    }), q = Y)
                                }!g && E && T.current && _.current && je.mergeNodes(e, {
                                    at: T.current,
                                    hanging: !0,
                                    voids: i
                                }), l && n && "character" === o && q.length > 1 && q.match(/[\u0E00-\u0E7F]+/) && je.insertText(e, q.slice(0, q.length - a));
                                var G = _.unref(),
                                    H = T.unref(),
                                    K = n ? G || H : H || G;
                                null == u.at && K && je.select(e, K)
                            }
                        }
                    }))
                },
                ut = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            hanging: r = !1,
                            voids: n = !1
                        } = t, {
                            at: o = K(e),
                            batchDirty: a = !0
                        } = t;
                        if (u.length) {
                            if (P.isRange(o))
                                if (r || (o = V.unhangRange(e, o, {
                                        voids: n
                                    })), P.isCollapsed(o)) o = o.anchor;
                                else {
                                    var [, i] = P.edges(o);
                                    if (!n && V.void(e, {
                                            at: i
                                        })) return;
                                    var s = V.pointRef(e, i);
                                    je.delete(e, {
                                        at: o
                                    }), o = s.unref()
                                }
                            else h.isPath(o) && (o = V.start(e, o));
                            if (n || !V.void(e, {
                                    at: o
                                })) {
                                var D = V.above(e, {
                                    at: o,
                                    match: u => j.isElement(u) && V.isInline(e, u),
                                    mode: "highest",
                                    voids: n
                                });
                                if (D) {
                                    var [, l] = D;
                                    if (V.isEnd(e, o, l)) o = V.after(e, l);
                                    else if (V.isStart(e, o, l)) {
                                        o = V.before(e, l)
                                    }
                                }
                                var f = V.above(e, {
                                        match: u => j.isElement(u) && V.isBlock(e, u),
                                        at: o,
                                        voids: n
                                    }),
                                    [, c] = f,
                                    C = V.isStart(e, o, c),
                                    B = V.isEnd(e, o, c),
                                    v = C && B,
                                    d = !C || C && B,
                                    A = !B,
                                    [, p] = S.first({
                                        children: u
                                    }, []),
                                    [, F] = S.last({
                                        children: u
                                    }, []),
                                    E = [],
                                    g = u => {
                                        var [t, r] = u;
                                        return !(0 === r.length) && (!!v || !(d && h.isAncestor(r, p) && j.isElement(t) && !e.isVoid(t) && !e.isInline(t)) && !(A && h.isAncestor(r, F) && j.isElement(t) && !e.isVoid(t) && !e.isInline(t)))
                                    };
                                for (var m of S.nodes({
                                        children: u
                                    }, {
                                        pass: g
                                    })) g(m) && E.push(m);
                                var y = [],
                                    w = [],
                                    b = [],
                                    O = !0,
                                    x = !1;
                                for (var [k] of E) j.isElement(k) && !e.isInline(k) ? (O = !1, x = !0, w.push(k)) : O ? y.push(k) : b.push(k);
                                var [N] = V.nodes(e, {
                                    at: o,
                                    match: u => H.isText(u) || V.isInline(e, u),
                                    mode: "highest",
                                    voids: n
                                }), [, R] = N, _ = V.isStart(e, o, R), T = V.isEnd(e, o, R), q = V.pathRef(e, B && !b.length ? h.next(c) : c), z = V.pathRef(e, T ? h.next(R) : R);
                                je.splitNodes(e, {
                                    at: o,
                                    match: u => x ? j.isElement(u) && V.isBlock(e, u) : H.isText(u) || V.isInline(e, u),
                                    mode: x ? "lowest" : "highest",
                                    always: x && (!C || y.length > 0) && (!B || b.length > 0),
                                    voids: n
                                });
                                var I, M = V.pathRef(e, !_ || _ && T ? h.next(R) : R);
                                if (je.insertNodes(e, y, {
                                        at: M.current,
                                        match: u => H.isText(u) || V.isInline(e, u),
                                        mode: "highest",
                                        voids: n,
                                        batchDirty: a
                                    }), v && !y.length && w.length && !b.length && je.delete(e, {
                                        at: c,
                                        voids: n
                                    }), je.insertNodes(e, w, {
                                        at: q.current,
                                        match: u => j.isElement(u) && V.isBlock(e, u),
                                        mode: "lowest",
                                        voids: n,
                                        batchDirty: a
                                    }), je.insertNodes(e, b, {
                                        at: z.current,
                                        match: u => H.isText(u) || V.isInline(e, u),
                                        mode: "highest",
                                        voids: n,
                                        batchDirty: a
                                    }), !t.at)
                                    if (b.length > 0 && z.current ? I = h.previous(z.current) : w.length > 0 && q.current ? I = h.previous(q.current) : M.current && (I = h.previous(M.current)), I) {
                                        var L = V.end(e, I);
                                        je.select(e, L)
                                    }
                                M.unref(), q.unref(), z.unref()
                            }
                        }
                    }))
                },
                tt = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            edge: t = "anchor"
                        } = u,
                        {
                            selection: r
                        } = e;
                    if (r)
                        if ("anchor" === t) je.select(e, r.anchor);
                        else if ("focus" === t) je.select(e, r.focus);
                    else if ("start" === t) {
                        var [n] = P.edges(r);
                        je.select(e, n)
                    } else if ("end" === t) {
                        var [, o] = P.edges(r);
                        je.select(e, o)
                    }
                },
                rt = e => {
                    var {
                        selection: u
                    } = e;
                    u && e.apply({
                        type: "set_selection",
                        properties: u,
                        newProperties: null
                    })
                },
                nt = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            selection: t
                        } = e,
                        {
                            distance: r = 1,
                            unit: n = "character",
                            reverse: o = !1
                        } = u,
                        {
                            edge: a = null
                        } = u;
                    if (t) {
                        "start" === a && (a = P.isBackward(t) ? "focus" : "anchor"), "end" === a && (a = P.isBackward(t) ? "anchor" : "focus");
                        var {
                            anchor: i,
                            focus: s
                        } = t, D = {
                            distance: r,
                            unit: n,
                            ignoreNonSelectable: !0
                        }, l = {};
                        if (null == a || "anchor" === a) {
                            var f = o ? V.before(e, i, D) : V.after(e, i, D);
                            f && (l.anchor = f)
                        }
                        if (null == a || "focus" === a) {
                            var c = o ? V.before(e, s, D) : V.after(e, s, D);
                            c && (l.focus = c)
                        }
                        je.setSelection(e, l)
                    }
                },
                ot = (e, u) => {
                    var {
                        selection: t
                    } = e;
                    if (u = V.range(e, u), t) je.setSelection(e, u);
                    else {
                        if (!P.isRange(u)) throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(J.stringify(u)));
                        e.apply({
                            type: "set_selection",
                            properties: t,
                            newProperties: u
                        })
                    }
                };

            function at(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function it(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? at(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : at(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var st = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            selection: r
                        } = e,
                        {
                            edge: n = "both"
                        } = t;
                    if (r) {
                        "start" === n && (n = P.isBackward(r) ? "focus" : "anchor"), "end" === n && (n = P.isBackward(r) ? "anchor" : "focus");
                        var {
                            anchor: o,
                            focus: a
                        } = r, i = "anchor" === n ? o : a;
                        je.setSelection(e, {
                            ["anchor" === n ? "anchor" : "focus"]: it(it({}, i), u)
                        })
                    }
                },
                Dt = (e, u) => {
                    var {
                        selection: t
                    } = e, r = {}, n = {};
                    if (t) {
                        for (var o in u)("anchor" === o && null != u.anchor && !W.equals(u.anchor, t.anchor) || "focus" === o && null != u.focus && !W.equals(u.focus, t.focus) || "anchor" !== o && "focus" !== o && u[o] !== t[o]) && (r[o] = t[o], n[o] = u[o]);
                        Object.keys(r).length > 0 && e.apply({
                            type: "set_selection",
                            properties: r,
                            newProperties: n
                        })
                    }
                },
                lt = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            hanging: r = !1,
                            voids: n = !1,
                            mode: o = "lowest",
                            batchDirty: a = !0
                        } = t, {
                            at: i,
                            match: s,
                            select: D
                        } = t;
                        if (S.isNode(u) && (u = [u]), 0 !== u.length) {
                            var [l] = u;
                            if (i || (i = K(e), !1 !== D && (D = !0)), null == D && (D = !1), P.isRange(i))
                                if (r || (i = V.unhangRange(e, i, {
                                        voids: n
                                    })), P.isCollapsed(i)) i = i.anchor;
                                else {
                                    var [, f] = P.edges(i), c = V.pointRef(e, f);
                                    je.delete(e, {
                                        at: i
                                    }), i = c.unref()
                                }
                            if (W.isPoint(i)) {
                                null == s && (s = H.isText(l) ? e => H.isText(e) : e.isInline(l) ? u => H.isText(u) || V.isInline(e, u) : u => j.isElement(u) && V.isBlock(e, u));
                                var [C] = V.nodes(e, {
                                    at: i.path,
                                    match: s,
                                    mode: o,
                                    voids: n
                                });
                                if (!C) return;
                                var [, B] = C, v = V.pathRef(e, B), d = V.isEnd(e, i, B);
                                je.splitNodes(e, {
                                    at: i,
                                    match: s,
                                    mode: o,
                                    voids: n
                                });
                                var A = v.unref();
                                i = d ? h.next(A) : A
                            }
                            var p = h.parent(i),
                                F = i[i.length - 1];
                            if (n || !V.void(e, {
                                    at: p
                                })) {
                                if (a) {
                                    var E = [],
                                        g = h.levels(p);
                                    Ne(e, (() => {
                                        var t = function() {
                                            var u = p.concat(F);
                                            F++;
                                            var t = {
                                                type: "insert_node",
                                                path: u,
                                                node: r
                                            };
                                            e.apply(t), i = h.next(i), E.push(t), H.isText ? g.push(...Array.from(S.nodes(r), (e => {
                                                var [, t] = e;
                                                return u.concat(t)
                                            }))) : g.push(u)
                                        };
                                        for (var r of u) t()
                                    }), (() => {
                                        Re(e, g, (e => {
                                            var u = e;
                                            for (var t of E)
                                                if (h.operationCanTransformPath(t) && !(u = h.transform(u, t))) return null;
                                            return u
                                        }))
                                    }))
                                } else
                                    for (var m of u) {
                                        var y = p.concat(F);
                                        F++, e.apply({
                                            type: "insert_node",
                                            path: y,
                                            node: m
                                        }), i = h.next(i)
                                    }
                                if (i = h.previous(i), D) {
                                    var w = V.end(e, i);
                                    w && je.select(e, w)
                                }
                            }
                        }
                    }))
                },
                ft = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            at: t = e.selection,
                            mode: r = "lowest",
                            voids: n = !1
                        } = u, {
                            match: o
                        } = u;
                        if (null == o && (o = h.isPath(t) ? Q(e, t) : u => j.isElement(u) && V.isBlock(e, u)), t) {
                            var a = V.nodes(e, {
                                    at: t,
                                    match: o,
                                    mode: r,
                                    voids: n
                                }),
                                i = Array.from(a, (u => {
                                    var [, t] = u;
                                    return V.pathRef(e, t)
                                }));
                            for (var s of i) {
                                var D = s.unref();
                                if (D.length < 2) throw new Error("Cannot lift node at a path [".concat(D, "] because it has a depth of less than `2`."));
                                var l = V.node(e, h.parent(D)),
                                    [f, c] = l,
                                    C = D[D.length - 1],
                                    {
                                        length: B
                                    } = f.children;
                                if (1 === B) {
                                    var v = h.next(c);
                                    je.moveNodes(e, {
                                        at: D,
                                        to: v,
                                        voids: n
                                    }), je.removeNodes(e, {
                                        at: c,
                                        voids: n
                                    })
                                } else if (0 === C) je.moveNodes(e, {
                                    at: D,
                                    to: c,
                                    voids: n
                                });
                                else if (C === B - 1) {
                                    var d = h.next(c);
                                    je.moveNodes(e, {
                                        at: D,
                                        to: d,
                                        voids: n
                                    })
                                } else {
                                    var A = h.next(D),
                                        p = h.next(c);
                                    je.splitNodes(e, {
                                        at: A,
                                        voids: n
                                    }), je.moveNodes(e, {
                                        at: D,
                                        to: p,
                                        voids: n
                                    })
                                }
                            }
                        }
                    }))
                },
                ct = ["text"],
                Ct = ["children"],
                Bt = (e, u) => {
                    if (j.isElement(u)) {
                        var t = u;
                        return !!V.isVoid(e, u) || 1 === t.children.length && Bt(e, t.children[0])
                    }
                    return !V.isEditor(u)
                },
                ht = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            match: t,
                            at: r = e.selection
                        } = u, {
                            hanging: n = !1,
                            voids: o = !1,
                            mode: a = "lowest"
                        } = u;
                        if (r) {
                            if (null == t)
                                if (h.isPath(r)) {
                                    var [i] = V.parent(e, r);
                                    t = e => i.children.includes(e)
                                } else t = u => j.isElement(u) && V.isBlock(e, u);
                            if (!n && P.isRange(r) && (r = V.unhangRange(e, r, {
                                    voids: o
                                })), P.isRange(r))
                                if (P.isCollapsed(r)) r = r.anchor;
                                else {
                                    var [, s] = P.edges(r), D = V.pointRef(e, s);
                                    je.delete(e, {
                                        at: r
                                    }), r = D.unref(), null == u.at && je.select(e, r)
                                }
                            var [l] = V.nodes(e, {
                                at: r,
                                match: t,
                                voids: o,
                                mode: a
                            }), f = V.previous(e, {
                                at: r,
                                match: t,
                                voids: o,
                                mode: a
                            });
                            if (l && f) {
                                var [c, C] = l, [B, v] = f;
                                if (0 !== C.length && 0 !== v.length) {
                                    var d, A, p = h.next(v),
                                        F = h.common(C, v),
                                        E = h.isSibling(C, v),
                                        g = Array.from(V.levels(e, {
                                            at: C
                                        }), (e => {
                                            var [u] = e;
                                            return u
                                        })).slice(F.length).slice(0, -1),
                                        m = V.above(e, {
                                            at: C,
                                            mode: "highest",
                                            match: u => g.includes(u) && Bt(e, u)
                                        }),
                                        y = m && V.pathRef(e, m[1]);
                                    if (H.isText(c) && H.isText(B)) {
                                        var b = w(c, ct);
                                        A = B.text.length, d = b
                                    } else {
                                        if (!j.isElement(c) || !j.isElement(B)) throw new Error("Cannot merge the node at path [".concat(C, "] with the previous sibling because it is not the same kind: ").concat(J.stringify(c), " ").concat(J.stringify(B)));
                                        b = w(c, Ct);
                                        A = B.children.length, d = b
                                    }
                                    E || je.moveNodes(e, {
                                        at: C,
                                        to: p,
                                        voids: o
                                    }), y && je.removeNodes(e, {
                                        at: y.current,
                                        voids: o
                                    }), V.shouldMergeNodesRemovePrevNode(e, f, l) ? je.removeNodes(e, {
                                        at: v,
                                        voids: o
                                    }) : e.apply({
                                        type: "merge_node",
                                        path: p,
                                        position: A,
                                        properties: d
                                    }), y && y.unref()
                                }
                            }
                        }
                    }))
                },
                vt = (e, u) => {
                    V.withoutNormalizing(e, (() => {
                        var {
                            to: t,
                            at: r = e.selection,
                            mode: n = "lowest",
                            voids: o = !1
                        } = u, {
                            match: a
                        } = u;
                        if (r) {
                            null == a && (a = h.isPath(r) ? Q(e, r) : u => j.isElement(u) && V.isBlock(e, u));
                            var i = V.pathRef(e, t),
                                s = V.nodes(e, {
                                    at: r,
                                    match: a,
                                    mode: n,
                                    voids: o
                                }),
                                D = Array.from(s, (u => {
                                    var [, t] = u;
                                    return V.pathRef(e, t)
                                }));
                            for (var l of D) {
                                var f = l.unref(),
                                    c = i.current;
                                0 !== f.length && e.apply({
                                    type: "move_node",
                                    path: f,
                                    newPath: c
                                }), i.current && h.isSibling(c, f) && h.isAfter(c, f) && (i.current = h.next(i.current))
                            }
                            i.unref()
                        }
                    }))
                },
                dt = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            hanging: t = !1,
                            voids: r = !1,
                            mode: n = "lowest"
                        } = u, {
                            at: o = e.selection,
                            match: a
                        } = u;
                        if (o) {
                            null == a && (a = h.isPath(o) ? Q(e, o) : u => j.isElement(u) && V.isBlock(e, u)), !t && P.isRange(o) && (o = V.unhangRange(e, o, {
                                voids: r
                            }));
                            var i = V.nodes(e, {
                                    at: o,
                                    match: a,
                                    mode: n,
                                    voids: r
                                }),
                                s = Array.from(i, (u => {
                                    var [, t] = u;
                                    return V.pathRef(e, t)
                                }));
                            for (var D of s) {
                                var l = D.unref();
                                if (l) {
                                    var [f] = V.node(e, l);
                                    e.apply({
                                        type: "remove_node",
                                        path: l,
                                        node: f
                                    })
                                }
                            }
                        }
                    }))
                },
                At = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            match: r,
                            at: n = e.selection,
                            compare: o,
                            merge: a
                        } = t, {
                            hanging: i = !1,
                            mode: s = "lowest",
                            split: D = !1,
                            voids: l = !1
                        } = t;
                        if (n) {
                            if (null == r && (r = h.isPath(n) ? Q(e, n) : u => j.isElement(u) && V.isBlock(e, u)), !i && P.isRange(n) && (n = V.unhangRange(e, n, {
                                    voids: l
                                })), D && P.isRange(n)) {
                                if (P.isCollapsed(n) && V.leaf(e, n.anchor)[0].text.length > 0) return;
                                var f = V.rangeRef(e, n, {
                                        affinity: "inward"
                                    }),
                                    [c, C] = P.edges(n),
                                    B = "lowest" === s ? "lowest" : "highest",
                                    v = V.isEnd(e, C, C.path);
                                je.splitNodes(e, {
                                    at: C,
                                    match: r,
                                    mode: B,
                                    voids: l,
                                    always: !v
                                });
                                var d = V.isStart(e, c, c.path);
                                je.splitNodes(e, {
                                    at: c,
                                    match: r,
                                    mode: B,
                                    voids: l,
                                    always: !d
                                }), n = f.unref(), null == t.at && je.select(e, n)
                            }
                            for (var [A, p] of (o || (o = (e, u) => e !== u), V.nodes(e, {
                                    at: n,
                                    match: r,
                                    mode: s,
                                    voids: l
                                }))) {
                                var F = {},
                                    E = {};
                                if (0 !== p.length) {
                                    var g = !1;
                                    for (var m in u) "children" !== m && "text" !== m && o(u[m], A[m]) && (g = !0, A.hasOwnProperty(m) && (F[m] = A[m]), a ? null != u[m] && (E[m] = a(A[m], u[m])) : null != u[m] && (E[m] = u[m]));
                                    g && e.apply({
                                        type: "set_node",
                                        path: p,
                                        properties: F,
                                        newProperties: E
                                    })
                                }
                            }
                        }
                    }))
                },
                pt = (e, u) => {
                    if (P.isCollapsed(u)) return u.anchor;
                    var [, t] = P.edges(u), r = V.pointRef(e, t);
                    return je.delete(e, {
                        at: u
                    }), r.unref()
                },
                Ft = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            mode: t = "lowest",
                            voids: r = !1
                        } = u, {
                            match: n,
                            at: o = e.selection,
                            height: a = 0,
                            always: i = !1
                        } = u;
                        if (null == n && (n = u => j.isElement(u) && V.isBlock(e, u)), P.isRange(o) && (o = pt(e, o)), h.isPath(o)) {
                            var s = o,
                                D = V.point(e, s),
                                [l] = V.parent(e, s);
                            n = e => e === l, a = D.path.length - s.length + 1, o = D, i = !0
                        }
                        if (o) {
                            var f, c = V.pointRef(e, o, {
                                affinity: "backward"
                            });
                            try {
                                var [C] = V.nodes(e, {
                                    at: o,
                                    match: n,
                                    mode: t,
                                    voids: r
                                });
                                if (!C) return;
                                var B = V.void(e, {
                                    at: o,
                                    mode: "highest"
                                });
                                if (!r && B) {
                                    var [v, d] = B;
                                    if (j.isElement(v) && e.isInline(v)) {
                                        var A = V.after(e, d);
                                        if (!A) {
                                            var p = h.next(d);
                                            je.insertNodes(e, {
                                                text: ""
                                            }, {
                                                at: p,
                                                voids: r
                                            }), A = V.point(e, p)
                                        }
                                        o = A, i = !0
                                    }
                                    a = o.path.length - d.length + 1, i = !0
                                }
                                f = V.pointRef(e, o);
                                var F = o.path.length - a,
                                    [, E] = C,
                                    g = o.path.slice(0, F),
                                    m = 0 === a ? o.offset : o.path[F] + 0;
                                for (var [y, w] of V.levels(e, {
                                        at: g,
                                        reverse: !0,
                                        voids: r
                                    })) {
                                    var b = !1;
                                    if (w.length < E.length || 0 === w.length || !r && j.isElement(y) && V.isVoid(e, y)) break;
                                    var O = c.current,
                                        x = V.isEnd(e, O, w);
                                    if (i || !c || !V.isEdge(e, O, w)) {
                                        b = !0;
                                        var k = S.extractProps(y);
                                        e.apply({
                                            type: "split_node",
                                            path: w,
                                            position: m,
                                            properties: k
                                        })
                                    }
                                    m = w[w.length - 1] + (b || x ? 1 : 0)
                                }
                                if (null == u.at) {
                                    var N = f.current || V.end(e, []);
                                    je.select(e, N)
                                }
                            } finally {
                                var R;
                                c.unref(), null === (R = f) || void 0 === R || R.unref()
                            }
                        }
                    }))
                },
                Et = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Array.isArray(u) || (u = [u]);
                    var r = {};
                    for (var n of u) r[n] = null;
                    je.setNodes(e, r, t)
                },
                gt = function(e) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            mode: t = "lowest",
                            split: r = !1,
                            voids: n = !1
                        } = u, {
                            at: o = e.selection,
                            match: a
                        } = u;
                        if (o) {
                            null == a && (a = h.isPath(o) ? Q(e, o) : u => j.isElement(u) && V.isBlock(e, u)), h.isPath(o) && (o = V.range(e, o));
                            var i = P.isRange(o) ? V.rangeRef(e, o) : null,
                                s = V.nodes(e, {
                                    at: o,
                                    match: a,
                                    mode: t,
                                    voids: n
                                }),
                                D = Array.from(s, (u => {
                                    var [, t] = u;
                                    return V.pathRef(e, t)
                                })).reverse(),
                                l = function() {
                                    var u = f.unref(),
                                        [t] = V.node(e, u),
                                        o = V.range(e, u);
                                    r && i && (o = P.intersection(i.current, o)), je.liftNodes(e, {
                                        at: o,
                                        match: e => j.isAncestor(t) && t.children.includes(e),
                                        voids: n
                                    })
                                };
                            for (var f of D) l();
                            i && i.unref()
                        }
                    }))
                };

            function mt(e, u) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    u && (r = r.filter((function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function yt(e) {
                for (var u = 1; u < arguments.length; u++) {
                    var t = null != arguments[u] ? arguments[u] : {};
                    u % 2 ? mt(Object(t), !0).forEach((function(u) {
                        A(e, u, t[u])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mt(Object(t)).forEach((function(u) {
                        Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(t, u))
                    }))
                }
                return e
            }
            var wt = function(e, u) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    V.withoutNormalizing(e, (() => {
                        var {
                            mode: r = "lowest",
                            split: n = !1,
                            voids: o = !1
                        } = t, {
                            match: a,
                            at: i = e.selection
                        } = t;
                        if (i) {
                            if (null == a && (a = h.isPath(i) ? Q(e, i) : e.isInline(u) ? u => j.isElement(u) && V.isInline(e, u) || H.isText(u) : u => j.isElement(u) && V.isBlock(e, u)), n && P.isRange(i)) {
                                var [s, D] = P.edges(i), l = V.rangeRef(e, i, {
                                    affinity: "inward"
                                });
                                je.splitNodes(e, {
                                    at: D,
                                    match: a,
                                    voids: o
                                }), je.splitNodes(e, {
                                    at: s,
                                    match: a,
                                    voids: o
                                }), i = l.unref(), null == t.at && je.select(e, i)
                            }
                            var f = Array.from(V.nodes(e, {
                                    at: i,
                                    match: e.isInline(u) ? u => j.isElement(u) && V.isBlock(e, u) : e => V.isEditor(e),
                                    mode: "lowest",
                                    voids: o
                                })),
                                c = function() {
                                    var t = P.isRange(i) ? P.intersection(i, V.range(e, C)) : i;
                                    if (!t) return 0;
                                    var n = Array.from(V.nodes(e, {
                                        at: t,
                                        match: a,
                                        mode: r,
                                        voids: o
                                    }));
                                    if (n.length > 0) {
                                        var [s] = n, D = n[n.length - 1], [, l] = s, [, f] = D;
                                        if (0 === l.length && 0 === f.length) return 0;
                                        var c = h.equals(l, f) ? h.parent(l) : h.common(l, f),
                                            B = V.range(e, l, f),
                                            v = V.node(e, c),
                                            [d] = v,
                                            A = c.length + 1,
                                            p = h.next(f.slice(0, A)),
                                            F = yt(yt({}, u), {}, {
                                                children: []
                                            });
                                        je.insertNodes(e, F, {
                                            at: p,
                                            voids: o
                                        }), je.moveNodes(e, {
                                            at: B,
                                            match: e => j.isAncestor(d) && d.children.includes(e),
                                            to: p.concat(0),
                                            voids: o
                                        })
                                    }
                                };
                            for (var [, C] of f) c()
                        }
                    }))
                },
                bt = () => {
                    var e = {
                        children: [],
                        operations: [],
                        selection: null,
                        marks: null,
                        isElementReadOnly: () => !1,
                        isInline: () => !1,
                        isSelectable: () => !0,
                        isVoid: () => !1,
                        markableVoid: () => !1,
                        onChange: () => {},
                        apply: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Se(e, ...t)
                        },
                        addMark: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Le(e, ...t)
                        },
                        deleteBackward: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Ye(e, ...t)
                        },
                        deleteForward: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Ge(e, ...t)
                        },
                        deleteFragment: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return He(e, ...t)
                        },
                        getFragment: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Te(e, ...t)
                        },
                        insertBreak: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return cu(e, ...t)
                        },
                        insertSoftBreak: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Bu(e, ...t)
                        },
                        insertFragment: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return ut(e, ...t)
                        },
                        insertNode: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Cu(e, ...t)
                        },
                        insertText: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return du(e, ...t)
                        },
                        normalizeNode: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return qe(e, ...t)
                        },
                        removeMark: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Uu(e, ...t)
                        },
                        getDirtyPaths: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return _e(e, ...t)
                        },
                        shouldNormalize: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return ze(e, ...t)
                        },
                        above: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Ve(e, ...t)
                        },
                        after: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Je(e, ...t)
                        },
                        before: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Xe(e, ...t)
                        },
                        collapse: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return tt(e, ...t)
                        },
                        delete: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return et(e, ...t)
                        },
                        deselect: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return rt(e, ...t)
                        },
                        edges: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Ke(e, ...t)
                        },
                        elementReadOnly: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return uu(e, ...t)
                        },
                        end: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return tu(e, ...t)
                        },
                        first: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return ru(e, ...t)
                        },
                        fragment: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return nu(e, ...t)
                        },
                        getMarks: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return xu(e, ...t)
                        },
                        hasBlocks: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return su(e, ...t)
                        },
                        hasInlines: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Du(e, ...t)
                        },
                        hasPath: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return lu(e, ...t)
                        },
                        hasTexts: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return fu(e, ...t)
                        },
                        insertNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return lt(e, ...t)
                        },
                        isBlock: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Au(e, ...t)
                        },
                        isEdge: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return pu(e, ...t)
                        },
                        isEmpty: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Fu(e, ...t)
                        },
                        isEnd: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Eu(e, ...t)
                        },
                        isNormalizing: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return gu(e, ...t)
                        },
                        isStart: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return mu(e, ...t)
                        },
                        last: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return yu(e, ...t)
                        },
                        leaf: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return wu(e, ...t)
                        },
                        levels: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return bu(e, ...t)
                        },
                        liftNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return ft(e, ...t)
                        },
                        mergeNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return ht(e, ...t)
                        },
                        move: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return nt(e, ...t)
                        },
                        moveNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return vt(e, ...t)
                        },
                        next: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return ju(e, ...t)
                        },
                        node: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return ku(e, ...t)
                        },
                        nodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Nu(e, ...t)
                        },
                        normalize: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Ru(e, ...t)
                        },
                        parent: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Su(e, ...t)
                        },
                        path: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return qu(e, ...t)
                        },
                        pathRef: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return _u(e, ...t)
                        },
                        pathRefs: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Tu(e, ...t)
                        },
                        point: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Iu(e, ...t)
                        },
                        pointRef: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return zu(e, ...t)
                        },
                        pointRefs: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Vu(e, ...t)
                        },
                        positions: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Mu(e, ...t)
                        },
                        previous: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Lu(e, ...t)
                        },
                        range: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Ju(e, ...t)
                        },
                        rangeRef: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Wu(e, ...t)
                        },
                        rangeRefs: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return $u(e, ...t)
                        },
                        removeNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return dt(e, ...t)
                        },
                        select: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return ot(e, ...t)
                        },
                        setNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return At(e, ...t)
                        },
                        setNormalizing: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Xu(e, ...t)
                        },
                        setPoint: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return st(e, ...t)
                        },
                        setSelection: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Dt(e, ...t)
                        },
                        splitNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Ft(e, ...t)
                        },
                        start: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Yu(e, ...t)
                        },
                        string: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Gu(e, ...t)
                        },
                        unhangRange: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Hu(e, ...t)
                        },
                        unsetNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Et(e, ...t)
                        },
                        unwrapNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return gt(e, ...t)
                        },
                        void: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return iu(e, ...t)
                        },
                        withoutNormalizing: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Ku(e, ...t)
                        },
                        wrapNodes: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return wt(e, ...t)
                        },
                        shouldMergeNodesRemovePrevNode: function() {
                            for (var u = arguments.length, t = new Array(u), r = 0; r < u; r++) t[r] = arguments[r];
                            return Qu(e, ...t)
                        }
                    };
                    return e
                }
        }
    }
]);