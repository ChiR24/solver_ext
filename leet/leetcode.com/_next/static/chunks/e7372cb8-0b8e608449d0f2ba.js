"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1332], {
        1300: function(e, t, r) {
            r.d(t, {
                BU: function() {
                    return Ht
                },
                CX: function() {
                    return Pt
                },
                F3: function() {
                    return xe
                },
                GQ: function() {
                    return vt
                },
                UE: function() {
                    return At
                },
                mH: function() {
                    return _t
                },
                ui: function() {
                    return pt
                },
                vt: function() {
                    return ct
                }
            });
            var n = r(6907),
                a = r.n(n),
                o = r(53434),
                i = r(111),
                l = r(67294),
                s = r(17423),
                d = r(77493),
                c = r(58354),
                u = r(18156),
                f = r(73935);

            function v(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }

            function h(e) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, h(e)
            }

            function p(e) {
                var t = function(e, t) {
                    if ("object" !== h(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== h(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === h(t) ? t : String(t)
            }

            function g(e, t, r) {
                return (t = p(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var m, w, b = (0, l.createContext)(null),
                y = () => {
                    var e = (0, l.useContext)(b);
                    if (!e) throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
                    return e
                },
                M = parseInt(l.version.split(".")[0], 10),
                x = "undefined" !== typeof navigator && "undefined" !== typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                k = "undefined" !== typeof navigator && /Mac OS X/.test(navigator.userAgent),
                E = "undefined" !== typeof navigator && /Android/.test(navigator.userAgent),
                O = "undefined" !== typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                C = "undefined" !== typeof navigator && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent),
                L = "undefined" !== typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
                D = "undefined" !== typeof navigator && /Chrome/i.test(navigator.userAgent),
                S = "undefined" !== typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
                P = E && "undefined" !== typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
                B = "undefined" !== typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
                R = "undefined" !== typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
                T = "undefined" !== typeof navigator && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent),
                F = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
            "undefined" !== typeof navigator && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && null !== (m = navigator.userAgent.match(/Version\/(\d+)/)) && void 0 !== m && m[1] && parseInt(null === (w = navigator.userAgent.match(/Version\/(\d+)/)) || void 0 === w ? void 0 : w[1], 10);
            var N = (!S || !P) && !L && "undefined" !== typeof globalThis && globalThis.InputEvent && "function" === typeof globalThis.InputEvent.prototype.getTargetRanges,
                j = new WeakMap,
                W = new WeakMap,
                A = new WeakMap,
                I = new WeakMap,
                q = new WeakMap,
                _ = new WeakMap,
                Y = new WeakMap,
                U = new WeakMap,
                $ = new WeakMap,
                V = new WeakMap,
                z = new WeakMap,
                H = new WeakMap,
                K = new WeakMap,
                X = new WeakMap,
                G = new WeakMap,
                Z = new WeakMap,
                J = new WeakMap,
                Q = new WeakMap,
                ee = new WeakMap,
                te = new WeakMap,
                re = new WeakMap,
                ne = Symbol("placeholder"),
                ae = Symbol("mark-placeholder"),
                oe = globalThis.Node,
                ie = globalThis.Text,
                le = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
                se = e => de(e) && 1 === e.nodeType,
                de = e => {
                    var t = le(e);
                    return !!t && e instanceof t.Node
                },
                ce = e => {
                    var t = e && e.anchorNode && le(e.anchorNode);
                    return !!t && e instanceof t.Selection
                },
                ue = e => de(e) && 3 === e.nodeType,
                fe = (e, t, r) => {
                    for (var n, {
                            childNodes: a
                        } = e, o = a[t], i = t, l = !1, s = !1;
                        (de(n = o) && 8 === n.nodeType || se(o) && 0 === o.childNodes.length || se(o) && "false" === o.getAttribute("contenteditable")) && (!l || !s);) i >= a.length ? (l = !0, i = t - 1, r = "backward") : i < 0 ? (s = !0, i = t + 1, r = "forward") : (o = a[i], t = i, i += "forward" === r ? 1 : -1);
                    return [o, t]
                },
                ve = (e, t, r) => {
                    var [n] = fe(e, t, r);
                    return n
                },
                he = e => {
                    var t = "";
                    if (ue(e) && e.nodeValue) return e.nodeValue;
                    if (se(e)) {
                        for (var r of Array.from(e.childNodes)) t += he(r);
                        var n = getComputedStyle(e).getPropertyValue("display");
                        "block" !== n && "list" !== n && "BR" !== e.tagName || (t += "\n")
                    }
                    return t
                },
                pe = /data-slate-fragment="(.+?)"/m,
                ge = e => {
                    var t = e.getData("text/html"),
                        [, r] = t.match(pe) || [];
                    return r
                },
                me = e => null != e.getSelection ? e.getSelection() : document.getSelection(),
                we = (e, t, r) => {
                    var {
                        target: n
                    } = t;
                    if (se(n) && n.matches('[contentEditable="false"]')) return !1;
                    var {
                        document: a
                    } = xe.getWindow(e);
                    if (a.contains(n)) return xe.hasDOMNode(e, n, {
                        editable: !0
                    });
                    var o = r.find((e => {
                        var {
                            addedNodes: t,
                            removedNodes: r
                        } = e;
                        for (var a of t)
                            if (a === n || a.contains(n)) return !0;
                        for (var o of r)
                            if (o === n || o.contains(n)) return !0
                    }));
                    return !(!o || o === t) && we(e, o, r)
                },
                be = (e, t) => Boolean(e.compareDocumentPosition(t) & oe.DOCUMENT_POSITION_PRECEDING),
                ye = 0;
            class Me {
                constructor() {
                    g(this, "id", void 0), this.id = "".concat(ye++)
                }
            }
            var xe = {
                androidPendingDiffs: e => Q.get(e),
                androidScheduleFlush: e => {
                    var t;
                    null === (t = G.get(e)) || void 0 === t || t()
                },
                blur: e => {
                    var t = xe.toDOMNode(e, e),
                        r = xe.findDocumentOrShadowRoot(e);
                    z.set(e, !1), r.activeElement === t && t.blur()
                },
                deselect: e => {
                    var {
                        selection: t
                    } = e, r = xe.findDocumentOrShadowRoot(e), n = me(r);
                    n && n.rangeCount > 0 && n.removeAllRanges(), t && d.YR.deselect(e)
                },
                findDocumentOrShadowRoot: e => {
                    var t = xe.toDOMNode(e, e),
                        r = t.getRootNode();
                    return r instanceof Document || r instanceof ShadowRoot ? r : t.ownerDocument
                },
                findEventRange: (e, t) => {
                    "nativeEvent" in t && (t = t.nativeEvent);
                    var {
                        clientX: r,
                        clientY: n,
                        target: a
                    } = t;
                    if (null == r || null == n) throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                    var o, i = xe.toSlateNode(e, t.target),
                        l = xe.findPath(e, i);
                    if (d.W_.isElement(i) && d.ML.isVoid(e, i)) {
                        var s = a.getBoundingClientRect(),
                            c = e.isInline(i) ? r - s.left < s.left + s.width - r : n - s.top < s.top + s.height - n,
                            u = d.ML.point(e, l, {
                                edge: c ? "start" : "end"
                            }),
                            f = c ? d.ML.before(e, u) : d.ML.after(e, u);
                        if (f) return d.ML.range(e, f)
                    }
                    var {
                        document: v
                    } = xe.getWindow(e);
                    if (v.caretRangeFromPoint) o = v.caretRangeFromPoint(r, n);
                    else {
                        var h = v.caretPositionFromPoint(r, n);
                        h && ((o = v.createRange()).setStart(h.offsetNode, h.offset), o.setEnd(h.offsetNode, h.offset))
                    }
                    if (!o) throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                    return xe.toSlateRange(e, o, {
                        exactMatch: !1,
                        suppressThrow: !1
                    })
                },
                findKey: (e, t) => {
                    var r = U.get(t);
                    return r || (r = new Me, U.set(t, r)), r
                },
                findPath: (e, t) => {
                    for (var r = [], n = t;;) {
                        var a = W.get(n);
                        if (null == a) {
                            if (d.ML.isEditor(n)) return r;
                            break
                        }
                        var o = j.get(n);
                        if (null == o) break;
                        r.unshift(o), n = a
                    }
                    throw new Error("Unable to find the path for Slate node: ".concat(d.o4.stringify(t)))
                },
                focus: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        retries: 5
                    };
                    if (!z.get(e)) {
                        if (t.retries <= 0) throw new Error("Could not set focus, editor seems stuck with pending operations");
                        if (e.operations.length > 0) setTimeout((() => {
                            xe.focus(e, {
                                retries: t.retries - 1
                            })
                        }), 10);
                        else {
                            var r = xe.toDOMNode(e, e),
                                n = xe.findDocumentOrShadowRoot(e);
                            if (n.activeElement !== r) {
                                if (e.selection && n instanceof Document) {
                                    var a = me(n),
                                        o = xe.toDOMRange(e, e.selection);
                                    null === a || void 0 === a || a.removeAllRanges(), null === a || void 0 === a || a.addRange(o)
                                }
                                e.selection || d.YR.select(e, d.ML.start(e, [])), z.set(e, !0), r.focus({
                                    preventScroll: !0
                                })
                            }
                        }
                    }
                },
                getWindow: e => {
                    var t = A.get(e);
                    if (!t) throw new Error("Unable to find a host window element for this editor");
                    return t
                },
                hasDOMNode: function(e, t) {
                    var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            editable: a = !1
                        } = n,
                        o = xe.toDOMNode(e, e);
                    try {
                        r = se(t) ? t : t.parentElement
                    } catch (i) {
                        if (i instanceof Error && !i.message.includes('Permission denied to access property "nodeType"')) throw i
                    }
                    return !!r && (r.closest("[data-slate-editor]") === o && (!(a && !r.isContentEditable) || ("boolean" === typeof r.isContentEditable && r.closest('[contenteditable="false"]') === o || !!r.getAttribute("data-slate-zero-width"))))
                },
                hasEditableTarget: (e, t) => de(t) && xe.hasDOMNode(e, t, {
                    editable: !0
                }),
                hasRange: (e, t) => {
                    var {
                        anchor: r,
                        focus: n
                    } = t;
                    return d.ML.hasPath(e, r.path) && d.ML.hasPath(e, n.path)
                },
                hasSelectableTarget: (e, t) => xe.hasEditableTarget(e, t) || xe.isTargetInsideNonReadonlyVoid(e, t),
                hasTarget: (e, t) => de(t) && xe.hasDOMNode(e, t),
                insertData: (e, t) => {
                    e.insertData(t)
                },
                insertFragmentData: (e, t) => e.insertFragmentData(t),
                insertTextData: (e, t) => e.insertTextData(t),
                isComposing: e => !!H.get(e),
                isFocused: e => !!z.get(e),
                isReadOnly: e => !!V.get(e),
                isTargetInsideNonReadonlyVoid: (e, t) => {
                    if (V.get(e)) return !1;
                    var r = xe.hasTarget(e, t) && xe.toSlateNode(e, t);
                    return d.W_.isElement(r) && d.ML.isVoid(e, r)
                },
                setFragmentData: (e, t, r) => e.setFragmentData(t, r),
                toDOMNode: (e, t) => {
                    var r = $.get(e),
                        n = d.ML.isEditor(t) ? I.get(e) : null === r || void 0 === r ? void 0 : r.get(xe.findKey(e, t));
                    if (!n) throw new Error("Cannot resolve a DOM node from Slate node: ".concat(d.o4.stringify(t)));
                    return n
                },
                toDOMPoint: (e, t) => {
                    var r, [n] = d.ML.node(e, t.path),
                        a = xe.toDOMNode(e, n);
                    d.ML.void(e, {
                        at: t
                    }) && (t = {
                        path: t.path,
                        offset: 0
                    });
                    for (var o = Array.from(a.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), i = 0, l = 0; l < o.length; l++) {
                        var s = o[l],
                            c = s.childNodes[0];
                        if (null != c && null != c.textContent) {
                            var {
                                length: u
                            } = c.textContent, f = s.getAttribute("data-slate-length"), v = i + (null == f ? u : parseInt(f, 10)), h = o[l + 1];
                            if (t.offset === v && null !== h && void 0 !== h && h.hasAttribute("data-slate-mark-placeholder")) {
                                var p, g = h.childNodes[0];
                                r = [g instanceof ie ? g : h, null !== (p = h.textContent) && void 0 !== p && p.startsWith("\ufeff") ? 1 : 0];
                                break
                            }
                            if (t.offset <= v) {
                                r = [c, Math.min(u, Math.max(0, t.offset - i))];
                                break
                            }
                            i = v
                        }
                    }
                    if (!r) throw new Error("Cannot resolve a DOM point from Slate point: ".concat(d.o4.stringify(t)));
                    return r
                },
                toDOMRange: (e, t) => {
                    var {
                        anchor: r,
                        focus: n
                    } = t, a = d.e6.isBackward(t), o = xe.toDOMPoint(e, r), i = d.e6.isCollapsed(t) ? o : xe.toDOMPoint(e, n), l = xe.getWindow(e).document.createRange(), [s, c] = a ? i : o, [u, f] = a ? o : i, v = !!(se(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"), h = !!(se(u) ? u : u.parentElement).getAttribute("data-slate-zero-width");
                    return l.setStart(s, v ? 1 : c), l.setEnd(u, h ? 1 : f), l
                },
                toSlateNode: (e, t) => {
                    var r = se(t) ? t : t.parentElement;
                    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
                    var n = r ? _.get(r) : null;
                    if (!n) throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
                    return n
                },
                toSlatePoint: (e, t, r) => {
                    var {
                        exactMatch: n,
                        suppressThrow: a,
                        searchDirection: o = "backward"
                    } = r, [i, l] = n ? t : (e => {
                        var [t, r] = e;
                        if (se(t) && t.childNodes.length) {
                            var n = r === t.childNodes.length,
                                a = n ? r - 1 : r;
                            for ([t, a] = fe(t, a, n ? "backward" : "forward"), n = a < r; se(t) && t.childNodes.length;) {
                                var o = n ? t.childNodes.length - 1 : 0;
                                t = ve(t, o, n ? "backward" : "forward")
                            }
                            r = n && null != t.textContent ? t.textContent.length : 0
                        }
                        return [t, r]
                    })(t), s = i.parentNode, c = null, u = 0;
                    if (s) {
                        var f, v, h = xe.toDOMNode(e, e),
                            p = s.closest('[data-slate-void="true"]'),
                            g = p && h.contains(p) ? p : null,
                            m = s.closest('[contenteditable="false"]'),
                            w = m && h.contains(m) ? m : null,
                            b = s.closest("[data-slate-leaf]"),
                            y = null;
                        if (b) {
                            if (c = b.closest('[data-slate-node="text"]')) {
                                var M = xe.getWindow(e).document.createRange();
                                M.setStart(c, 0), M.setEnd(i, l);
                                var x = M.cloneContents();
                                [...Array.prototype.slice.call(x.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(x.querySelectorAll("[contenteditable=false]"))].forEach((e => {
                                    E && !n && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\ufeff" !== e.textContext ? e.textContent.startsWith("\ufeff") && (e.textContent = e.textContent.slice(1)) : e.parentNode.removeChild(e)
                                })), u = x.textContent.length, y = c
                            }
                        } else if (g) {
                            for (var k = g.querySelectorAll("[data-slate-leaf]"), C = 0; C < k.length; C++) {
                                var L = k[C];
                                if (xe.hasDOMNode(e, L)) {
                                    b = L;
                                    break
                                }
                            }
                            b ? (c = b.closest('[data-slate-node="text"]'), u = (y = b).textContent.length, y.querySelectorAll("[data-slate-zero-width]").forEach((e => {
                                u -= e.textContent.length
                            }))) : u = 1
                        } else if (w) {
                            var D, S, P = e => e ? e.querySelectorAll("[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])") : [],
                                B = w.closest('[data-slate-node="element"]');
                            if ("forward" === o) b = null !== (D = [...P(B), ...P(null === B || void 0 === B ? void 0 : B.nextElementSibling)].find((e => ((e, t) => Boolean(e.compareDocumentPosition(t) & oe.DOCUMENT_POSITION_FOLLOWING))(w, e)))) && void 0 !== D ? D : null;
                            else b = null !== (S = [...P(null === B || void 0 === B ? void 0 : B.previousElementSibling), ...P(B)].findLast((e => be(w, e)))) && void 0 !== S ? S : null;
                            b && (c = b.closest('[data-slate-node="text"]'), y = b, "forward" === o ? u = 0 : (u = y.textContent.length, y.querySelectorAll("[data-slate-zero-width]").forEach((e => {
                                u -= e.textContent.length
                            }))))
                        }
                        y && u === y.textContent.length && E && "z" === y.getAttribute("data-slate-zero-width") && null !== (f = y.textContent) && void 0 !== f && f.startsWith("\ufeff") && (s.hasAttribute("data-slate-zero-width") || O && null !== (v = y.textContent) && void 0 !== v && v.endsWith("\n\n")) && u--
                    }
                    if (E && !c && !n) {
                        var R = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
                        if (R && xe.hasDOMNode(e, R, {
                                editable: !0
                            })) {
                            var T = xe.toSlateNode(e, R),
                                {
                                    path: F,
                                    offset: N
                                } = d.ML.start(e, xe.findPath(e, T));
                            return R.querySelector("[data-slate-leaf]") || (N = l), {
                                path: F,
                                offset: N
                            }
                        }
                    }
                    if (!c) {
                        if (a) return null;
                        throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                    }
                    var j = xe.toSlateNode(e, c);
                    return {
                        path: xe.findPath(e, j),
                        offset: u
                    }
                },
                toSlateRange: (e, t, r) => {
                    var n, a, o, i, l, s, {
                        exactMatch: c,
                        suppressThrow: u
                    } = r;
                    if (ce(t) ? t.anchorNode : t.startContainer)
                        if (ce(t)) {
                            if (O && t.rangeCount > 1) {
                                i = t.focusNode;
                                var f = t.getRangeAt(0),
                                    v = t.getRangeAt(t.rangeCount - 1);
                                if (i instanceof HTMLTableRowElement && f.startContainer instanceof HTMLTableRowElement && v.startContainer instanceof HTMLTableRowElement) {
                                    function x(e) {
                                        return e.childElementCount > 0 ? x(e.children[0]) : e
                                    }
                                    var h = f.startContainer,
                                        p = v.startContainer,
                                        g = x(h.children[f.startOffset]),
                                        m = x(p.children[v.startOffset]);
                                    l = 0, a = m.childNodes.length > 0 ? m.childNodes[0] : m, i = g.childNodes.length > 0 ? g.childNodes[0] : g, o = m instanceof HTMLElement ? m.innerHTML.length : 0
                                } else f.startContainer === i ? (a = v.endContainer, o = v.endOffset, l = f.startOffset) : (a = f.startContainer, o = f.endOffset, l = v.startOffset)
                            } else a = t.anchorNode, o = t.anchorOffset, i = t.focusNode, l = t.focusOffset;
                            s = D && (e => {
                                for (var t = e && e.parentNode; t;) {
                                    if ("[object ShadowRoot]" === t.toString()) return !0;
                                    t = t.parentNode
                                }
                                return !1
                            })(a) || O ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed
                        } else a = t.startContainer, o = t.startOffset, i = t.endContainer, l = t.endOffset, s = t.collapsed;
                    if (null == a || null == i || null == o || null == l) throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                    O && null !== (n = i.textContent) && void 0 !== n && n.endsWith("\n\n") && l === i.textContent.length && l--;
                    var w = xe.toSlatePoint(e, [a, o], {
                        exactMatch: c,
                        suppressThrow: u
                    });
                    if (!w) return null;
                    var b = be(a, i) || a === i && l < o,
                        y = s ? w : xe.toSlatePoint(e, [i, l], {
                            exactMatch: c,
                            suppressThrow: u,
                            searchDirection: b ? "forward" : "backward"
                        });
                    if (!y) return null;
                    var M = {
                        anchor: w,
                        focus: y
                    };
                    return d.e6.isExpanded(M) && d.e6.isForward(M) && se(i) && d.ML.void(e, {
                        at: M.focus,
                        mode: "highest"
                    }) && (M = d.ML.unhangRange(e, M, {
                        voids: !0
                    })), M
                }
            };

            function ke(e, t) {
                var {
                    path: r,
                    diff: n
                } = t;
                if (!d.ML.hasPath(e, r)) return !1;
                var a = d.NB.get(e, r);
                if (!d.xv.isText(a)) return !1;
                if (n.start !== a.text.length || 0 === n.text.length) return a.text.slice(n.start, n.start + n.text.length) === n.text;
                var o = d.y$.next(r);
                if (!d.ML.hasPath(e, o)) return !1;
                var i = d.NB.get(e, o);
                return d.xv.isText(i) && i.text.startsWith(n.text)
            }

            function Ee(e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return r.reduce(((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end)), e)
            }

            function Oe(e, t) {
                var {
                    start: r,
                    end: n,
                    text: a
                } = t, o = e.slice(r, n), i = function(e, t) {
                    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
                        if (e.charAt(n) !== t.charAt(n)) return n;
                    return r
                }(o, a), l = function(e, t, r) {
                    for (var n = Math.min(e.length, t.length, r), a = 0; a < n; a++)
                        if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1)) return a;
                    return n
                }(o, a, Math.min(o.length - i, a.length - i)), s = {
                    start: r + i,
                    end: n - l,
                    text: a.slice(i, a.length - l)
                };
                return s.start === s.end && 0 === s.text.length ? null : s
            }

            function Ce(e) {
                var {
                    path: t,
                    diff: r
                } = e;
                return {
                    anchor: {
                        path: t,
                        offset: r.start
                    },
                    focus: {
                        path: t,
                        offset: r.end
                    }
                }
            }

            function Le(e, t) {
                var {
                    path: r,
                    offset: n
                } = t;
                if (!d.ML.hasPath(e, r)) return null;
                var a = d.NB.get(e, r);
                if (!d.xv.isText(a)) return null;
                var o = d.ML.above(e, {
                    match: t => d.W_.isElement(t) && d.ML.isBlock(e, t),
                    at: r
                });
                if (!o) return null;
                for (; n > a.text.length;) {
                    var i = d.ML.next(e, {
                        at: r,
                        match: d.xv.isText
                    });
                    if (!i || !d.y$.isDescendant(i[1], o[1])) return null;
                    n -= a.text.length, a = i[0], r = i[1]
                }
                return {
                    path: r,
                    offset: n
                }
            }

            function De(e, t) {
                var r = Le(e, t.anchor);
                if (!r) return null;
                if (d.e6.isCollapsed(t)) return {
                    anchor: r,
                    focus: r
                };
                var n = Le(e, t.focus);
                return n ? {
                    anchor: r,
                    focus: n
                } : null
            }

            function Se(e, t, r) {
                var n = Q.get(e),
                    a = null === n || void 0 === n ? void 0 : n.find((e => {
                        var {
                            path: r
                        } = e;
                        return d.y$.equals(r, t.path)
                    }));
                if (!a || t.offset <= a.diff.start) return d.E9.transform(t, r, {
                    affinity: "backward"
                });
                var {
                    diff: o
                } = a;
                if (t.offset <= o.start + o.text.length) {
                    var i = {
                            path: t.path,
                            offset: o.start
                        },
                        l = d.E9.transform(i, r, {
                            affinity: "backward"
                        });
                    return l ? {
                        path: l.path,
                        offset: l.offset + t.offset - o.start
                    } : null
                }
                var s = {
                        path: t.path,
                        offset: t.offset - o.text.length + o.end - o.start
                    },
                    c = d.E9.transform(s, r, {
                        affinity: "backward"
                    });
                return c ? "split_node" === r.type && d.y$.equals(r.path, t.path) && s.offset < r.position && o.start < r.position ? c : {
                    path: c.path,
                    offset: c.offset + o.text.length - o.end + o.start
                } : null
            }

            function Pe(e, t, r) {
                var n = Se(e, t.anchor, r);
                if (!n) return null;
                if (d.e6.isCollapsed(t)) return {
                    anchor: n,
                    focus: n
                };
                var a = Se(e, t.focus, r);
                return a ? {
                    anchor: n,
                    focus: a
                } : null
            }

            function Be(e, t) {
                var {
                    path: r,
                    diff: n,
                    id: a
                } = e;
                switch (t.type) {
                    case "insert_text":
                        return !d.y$.equals(t.path, r) || t.offset >= n.end ? e : t.offset <= n.start ? {
                            diff: {
                                start: t.text.length + n.start,
                                end: t.text.length + n.end,
                                text: n.text
                            },
                            id: a,
                            path: r
                        } : {
                            diff: {
                                start: n.start,
                                end: n.end + t.text.length,
                                text: n.text
                            },
                            id: a,
                            path: r
                        };
                    case "remove_text":
                        return !d.y$.equals(t.path, r) || t.offset >= n.end ? e : t.offset + t.text.length <= n.start ? {
                            diff: {
                                start: n.start - t.text.length,
                                end: n.end - t.text.length,
                                text: n.text
                            },
                            id: a,
                            path: r
                        } : {
                            diff: {
                                start: n.start,
                                end: n.end - t.text.length,
                                text: n.text
                            },
                            id: a,
                            path: r
                        };
                    case "split_node":
                        return !d.y$.equals(t.path, r) || t.position >= n.end ? {
                            diff: n,
                            id: a,
                            path: d.y$.transform(r, t, {
                                affinity: "backward"
                            })
                        } : t.position > n.start ? {
                            diff: {
                                start: n.start,
                                end: Math.min(t.position, n.end),
                                text: n.text
                            },
                            id: a,
                            path: r
                        } : {
                            diff: {
                                start: n.start - t.position,
                                end: n.end - t.position,
                                text: n.text
                            },
                            id: a,
                            path: d.y$.transform(r, t, {
                                affinity: "forward"
                            })
                        };
                    case "merge_node":
                        return d.y$.equals(t.path, r) ? {
                            diff: {
                                start: n.start + t.position,
                                end: n.end + t.position,
                                text: n.text
                            },
                            id: a,
                            path: d.y$.transform(r, t)
                        } : {
                            diff: n,
                            id: a,
                            path: d.y$.transform(r, t)
                        }
                }
                var o = d.y$.transform(r, t);
                return o ? {
                    diff: n,
                    path: o,
                    id: a
                } : null
            }

            function Re(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Re(Object(r), !0).forEach((function(t) {
                        g(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Re(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Fe(e) {
                var {
                    editor: t,
                    scheduleOnDOMSelectionChange: r,
                    onDOMSelectionChange: n
                } = e, a = !1, o = null, i = null, l = null, s = 0, c = !1, u = () => {
                    var e = te.get(t);
                    if (te.delete(t), e) {
                        var {
                            selection: r
                        } = t, n = De(t, e);
                        !n || r && d.e6.equals(n, r) || d.YR.select(t, n)
                    }
                }, f = () => {
                    if (i && (clearTimeout(i), i = null), l && (clearTimeout(l), l = null), m() || g()) {
                        a || (a = !0, setTimeout((() => a = !1))), g() && (a = "action");
                        var e = t.selection && d.ML.rangeRef(t, t.selection, {
                            affinity: "forward"
                        });
                        J.set(t, t.marks), ee.get(t), Q.get(t);
                        for (var o, s = m(); o = null === (f = Q.get(t)) || void 0 === f ? void 0 : f[0];) {
                            var f, v, h = Z.get(t);
                            void 0 !== h && (Z.delete(t), t.marks = h), h && !1 === c && (c = null);
                            var p = Ce(o);
                            t.selection && d.e6.equals(t.selection, p) || d.YR.select(t, p), o.diff.text ? d.ML.insertText(t, o.diff.text) : d.ML.deleteFragment(t), Q.set(t, null === (v = Q.get(t)) || void 0 === v ? void 0 : v.filter((e => {
                                var {
                                    id: t
                                } = e;
                                return t !== o.id
                            }))), ke(t, o) || (s = !1, ee.delete(t), J.delete(t), a = "action", te.delete(t), r.cancel(), n.cancel(), null === e || void 0 === e || e.unref())
                        }
                        var w = null === e || void 0 === e ? void 0 : e.unref();
                        if (!w || te.get(t) || t.selection && d.e6.equals(w, t.selection) || d.YR.select(t, w), g())(() => {
                            var e = ee.get(t);
                            if (ee.delete(t), e) {
                                if (e.at) {
                                    var r = d.E9.isPoint(e.at) ? Le(t, e.at) : De(t, e.at);
                                    if (!r) return;
                                    var n = d.ML.range(t, r);
                                    t.selection && d.e6.equals(t.selection, n) || d.YR.select(t, r)
                                }
                                e.run()
                            }
                        })();
                        else {
                            s && r(), r.flush(), n.flush(), u();
                            var b = J.get(t);
                            J.delete(t), void 0 !== b && (t.marks = b, t.onChange())
                        }
                    } else u()
                }, v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        r = q.get(t);
                    r && (m() || e ? r.style.display = "none" : r.style.removeProperty("display"))
                }, h = (e, r) => {
                    var n, a = null !== (n = Q.get(t)) && void 0 !== n ? n : [];
                    Q.set(t, a);
                    var o = d.NB.leaf(t, e),
                        i = a.findIndex((t => d.y$.equals(t.path, e)));
                    if (i < 0) return Oe(o.text, r) && a.push({
                        path: e,
                        diff: r,
                        id: s++
                    }), void v();
                    var l = function(e, t, r) {
                        var n = Math.min(t.start, r.start),
                            a = Math.max(0, Math.min(t.start + t.text.length, r.end) - r.start),
                            o = Ee(e, t, r),
                            i = Math.max(r.start + r.text.length, t.start + t.text.length + (t.start + t.text.length > r.start ? r.text.length : 0) - a),
                            l = o.slice(n, i);
                        return Oe(e, {
                            start: n,
                            end: Math.max(t.end, r.end - t.text.length + (t.end - t.start)),
                            text: l
                        })
                    }(o.text, a[i].diff, r);
                    if (!l) return a.splice(i, 1), void v();
                    a[i] = Te(Te({}, a[i]), {}, {
                        diff: l
                    })
                }, p = function(e) {
                    var {
                        at: a
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    c = !1, te.delete(t), r.cancel(), n.cancel(), g() && f(), ee.set(t, {
                        at: a,
                        run: e
                    }), l = setTimeout(f)
                }, g = () => !!ee.get(t), m = () => {
                    var e;
                    return !(null === (e = Q.get(t)) || void 0 === e || !e.length)
                }, w = e => {
                    te.set(t, e), i && (clearTimeout(i), i = null);
                    var {
                        selection: r
                    } = t;
                    if (e) {
                        var n = !r || !d.y$.equals(r.anchor.path, e.anchor.path),
                            a = !r || !d.y$.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                        (n && c || a) && (c = !1), (n || m()) && (i = setTimeout(f, 200))
                    }
                }, b = () => {
                    g() || (l = setTimeout(f))
                };
                return {
                    flush: f,
                    scheduleFlush: b,
                    hasPendingDiffs: m,
                    hasPendingAction: g,
                    hasPendingChanges: () => g() || m(),
                    isFlushing: () => a,
                    handleUserSelect: w,
                    handleCompositionEnd: e => {
                        o && clearTimeout(o), o = setTimeout((() => {
                            H.set(t, !1), f()
                        }), 25)
                    },
                    handleCompositionStart: e => {
                        H.set(t, !0), o && (clearTimeout(o), o = null)
                    },
                    handleDOMBeforeInput: e => {
                        var r;
                        i && (clearTimeout(i), i = null);
                        var {
                            inputType: n
                        } = e, a = null, o = e.dataTransfer || e.data || void 0;
                        !1 !== c && "insertText" !== n && "insertCompositionText" !== n && (c = !1);
                        var [l] = e.getTargetRanges();
                        l && (a = xe.toSlateRange(t, l, {
                            exactMatch: !1,
                            suppressThrow: !0
                        }));
                        var s = xe.getWindow(t).getSelection();
                        if (!a && s && (l = s, a = xe.toSlateRange(t, s, {
                                exactMatch: !1,
                                suppressThrow: !0
                            })), a = null !== (r = a) && void 0 !== r ? r : t.selection) {
                            var u, f = !0;
                            if (n.startsWith("delete")) {
                                if (d.e6.isExpanded(a)) {
                                    var [v, g] = d.e6.edges(a);
                                    if (d.NB.leaf(t, v.path).text.length === v.offset && 0 === g.offset) {
                                        var m = d.ML.next(t, {
                                            at: v.path,
                                            match: d.xv.isText
                                        });
                                        m && d.y$.equals(m[1], g.path) && (a = {
                                            anchor: g,
                                            focus: g
                                        })
                                    }
                                }
                                var y = n.endsWith("Backward") ? "backward" : "forward",
                                    [M, x] = d.e6.edges(a),
                                    [k, E] = d.ML.leaf(t, M.path),
                                    O = {
                                        text: "",
                                        start: M.offset,
                                        end: x.offset
                                    },
                                    C = Q.get(t),
                                    L = null === C || void 0 === C ? void 0 : C.find((e => d.y$.equals(e.path, E))),
                                    D = L ? [L.diff, O] : [O];
                                if (0 === Ee(k.text, ...D).length && (f = !1), d.e6.isExpanded(a)) {
                                    if (f && d.y$.equals(a.anchor.path, a.focus.path)) {
                                        var S = {
                                                path: a.anchor.path,
                                                offset: M.offset
                                            },
                                            P = d.ML.range(t, S, S);
                                        return w(P), h(a.anchor.path, {
                                            text: "",
                                            end: x.offset,
                                            start: M.offset
                                        })
                                    }
                                    return p((() => d.ML.deleteFragment(t, {
                                        direction: y
                                    })), {
                                        at: a
                                    })
                                }
                            }
                            switch (n) {
                                case "deleteByComposition":
                                case "deleteByCut":
                                case "deleteByDrag":
                                    return p((() => d.ML.deleteFragment(t)), {
                                        at: a
                                    });
                                case "deleteContent":
                                case "deleteContentForward":
                                    var {
                                        anchor: B
                                    } = a;
                                    if (f && d.e6.isCollapsed(a)) {
                                        var R = d.NB.leaf(t, B.path);
                                        if (B.offset < R.text.length) return h(B.path, {
                                            text: "",
                                            start: B.offset,
                                            end: B.offset + 1
                                        })
                                    }
                                    return p((() => d.ML.deleteForward(t)), {
                                        at: a
                                    });
                                case "deleteContentBackward":
                                    var T, {
                                            anchor: F
                                        } = a,
                                        N = ce(l) ? l.isCollapsed : !(null === (T = l) || void 0 === T || !T.collapsed);
                                    return f && N && d.e6.isCollapsed(a) && F.offset > 0 ? h(F.path, {
                                        text: "",
                                        start: F.offset - 1,
                                        end: F.offset
                                    }) : p((() => d.ML.deleteBackward(t)), {
                                        at: a
                                    });
                                case "deleteEntireSoftLine":
                                    return p((() => {
                                        d.ML.deleteBackward(t, {
                                            unit: "line"
                                        }), d.ML.deleteForward(t, {
                                            unit: "line"
                                        })
                                    }), {
                                        at: a
                                    });
                                case "deleteHardLineBackward":
                                    return p((() => d.ML.deleteBackward(t, {
                                        unit: "block"
                                    })), {
                                        at: a
                                    });
                                case "deleteSoftLineBackward":
                                    return p((() => d.ML.deleteBackward(t, {
                                        unit: "line"
                                    })), {
                                        at: a
                                    });
                                case "deleteHardLineForward":
                                    return p((() => d.ML.deleteForward(t, {
                                        unit: "block"
                                    })), {
                                        at: a
                                    });
                                case "deleteSoftLineForward":
                                    return p((() => d.ML.deleteForward(t, {
                                        unit: "line"
                                    })), {
                                        at: a
                                    });
                                case "deleteWordBackward":
                                    return p((() => d.ML.deleteBackward(t, {
                                        unit: "word"
                                    })), {
                                        at: a
                                    });
                                case "deleteWordForward":
                                    return p((() => d.ML.deleteForward(t, {
                                        unit: "word"
                                    })), {
                                        at: a
                                    });
                                case "insertLineBreak":
                                    return p((() => d.ML.insertSoftBreak(t)), {
                                        at: a
                                    });
                                case "insertParagraph":
                                    return p((() => d.ML.insertBreak(t)), {
                                        at: a
                                    });
                                case "insertCompositionText":
                                case "deleteCompositionText":
                                case "insertFromComposition":
                                case "insertFromDrop":
                                case "insertFromPaste":
                                case "insertFromYank":
                                case "insertReplacementText":
                                case "insertText":
                                    if ("DataTransfer" === (null === (u = o) || void 0 === u ? void 0 : u.constructor.name)) return p((() => xe.insertData(t, o)), {
                                        at: a
                                    });
                                    var j = null !== o && void 0 !== o ? o : "";
                                    if (Z.get(t) && (j = j.replace("\ufeff", "")), "insertText" === n && /.*\n.*\n$/.test(j) && (j = j.slice(0, -1)), j.includes("\n")) return p((() => {
                                        var e = j.split("\n");
                                        e.forEach(((r, n) => {
                                            r && d.ML.insertText(t, r), n !== e.length - 1 && d.ML.insertSoftBreak(t)
                                        }))
                                    }), {
                                        at: a
                                    });
                                    if (d.y$.equals(a.anchor.path, a.focus.path)) {
                                        var [W, A] = d.e6.edges(a), I = {
                                            start: W.offset,
                                            end: A.offset,
                                            text: j
                                        };
                                        if (j && c && "insertCompositionText" === n) {
                                            var q = c.start + c.text.search(/\S|$/);
                                            I.start + I.text.search(/\S|$/) === q + 1 && I.end === c.start + c.text.length ? (I.start -= 1, c = null, b()) : c = !1
                                        } else c = "insertText" === n && (null === c ? I : !(!c || !d.e6.isCollapsed(a) || c.end + c.text.length !== W.offset) && Te(Te({}, c), {}, {
                                            text: c.text + j
                                        }));
                                        if (f) return void h(W.path, I)
                                    }
                                    return p((() => d.ML.insertText(t, j)), {
                                        at: a
                                    })
                            }
                        }
                    },
                    handleKeyDown: e => {
                        m() || (v(!0), setTimeout(v))
                    },
                    handleDomMutations: e => {
                        var r;
                        m() || g() || e.some((r => we(t, r, e))) && (null === (r = re.get(t)) || void 0 === r || r())
                    },
                    handleInput: () => {
                        !g() && m() || f()
                    }
                }
            }
            var Ne = F ? l.useLayoutEffect : l.useEffect;
            var je = ["node"];

            function We(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var Ae = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                },
                Ie = E ? e => {
                    var {
                        node: t
                    } = e, r = v(e, je);
                    if (!E) return null;
                    var n = y(),
                        a = function() {
                            var e = (0, l.useRef)(!1);
                            return (0, l.useEffect)((() => (e.current = !0, () => {
                                e.current = !1
                            })), []), e.current
                        }(),
                        [o] = (0, l.useState)((() => Fe(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? We(Object(r), !0).forEach((function(t) {
                                    g(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : We(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({
                            editor: n
                        }, r))));
                    return function(e, t, r) {
                        var [n] = (0, l.useState)((() => new MutationObserver(t)));
                        Ne((() => {
                            n.takeRecords()
                        })), (0, l.useEffect)((() => {
                            if (!e.current) throw new Error("Failed to attach MutationObserver, `node` is undefined");
                            return n.observe(e.current, r), () => n.disconnect()
                        }), [n, e, r])
                    }(t, o.handleDomMutations, Ae), G.set(n, o.scheduleFlush), a && o.flush(), o
                } : () => null,
                qe = ["anchor", "focus"],
                _e = ["anchor", "focus"],
                Ye = (e, t) => {
                    var r, n, a = v(e, qe),
                        o = v(t, _e);
                    return e[ne] === t[ne] && (r = a, n = o, Object.keys(r).length === Object.keys(n).length && Object.keys(r).every((e => n.hasOwnProperty(e) && r[e] === n[e])))
                };

            function Ue(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var $e = e => {
                    var {
                        isLast: t,
                        leaf: r,
                        parent: n,
                        text: a
                    } = e, o = y(), i = xe.findPath(o, a), s = d.y$.parent(i), c = Boolean(r[ae]);
                    return o.isVoid(n) ? l.createElement(He, {
                        length: d.NB.string(n).length
                    }) : "" !== r.text || n.children[n.children.length - 1] !== a || o.isInline(n) || "" !== d.ML.string(o, s) ? "" === r.text ? l.createElement(He, {
                        isMarkPlaceholder: c
                    }) : t && "\n" === r.text.slice(-1) ? l.createElement(Ve, {
                        isTrailing: !0,
                        text: r.text
                    }) : l.createElement(Ve, {
                        text: r.text
                    }) : l.createElement(He, {
                        isLineBreak: !0,
                        isMarkPlaceholder: c
                    })
                },
                Ve = e => {
                    var {
                        text: t,
                        isTrailing: r = !1
                    } = e, n = (0, l.useRef)(null), a = () => "".concat(null !== t && void 0 !== t ? t : "").concat(r ? "\n" : ""), [o] = (0, l.useState)(a);
                    return Ne((() => {
                        var e = a();
                        n.current && n.current.textContent !== e && (n.current.textContent = e)
                    })), l.createElement(ze, {
                        ref: n
                    }, o)
                },
                ze = (0, l.memo)((0, l.forwardRef)(((e, t) => l.createElement("span", {
                    "data-slate-string": !0,
                    ref: t
                }, e.children)))),
                He = e => {
                    var {
                        length: t = 0,
                        isLineBreak: r = !1,
                        isMarkPlaceholder: n = !1
                    } = e, a = {
                        "data-slate-zero-width": r ? "n" : "z",
                        "data-slate-length": t
                    };
                    return n && (a["data-slate-mark-placeholder"] = !0), l.createElement("span", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ue(Object(r), !0).forEach((function(t) {
                                g(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ue(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, a), (E || x) && r ? null : "\ufeff", r ? l.createElement("br", null) : null)
                };

            function Ke(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ke(Object(r), !0).forEach((function(t) {
                        g(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ke(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ge = E ? 300 : 0;

            function Ze(e) {
                e.current && (clearTimeout(e.current), e.current = null)
            }
            var Je = e => {
                    var {
                        leaf: t,
                        isLast: r,
                        text: n,
                        parent: a,
                        renderPlaceholder: o,
                        renderLeaf: i = (e => l.createElement(et, Xe({}, e)))
                    } = e, s = y(), d = (0, l.useRef)(null), u = (0, l.useRef)(null), [f, v] = (0, l.useState)(!1), h = (0, l.useRef)(null), p = (0, l.useCallback)((e => {
                        if (function(e, t) {
                                e.current && (e.current.disconnect(), t && (e.current = null))
                            }(d, null == e), null == e) {
                            var r;
                            q.delete(s), null === (r = t.onPlaceholderResize) || void 0 === r || r.call(t, null)
                        } else {
                            if (q.set(s, e), !d.current) {
                                var n = window.ResizeObserver || c.do;
                                d.current = new n((() => {
                                    var r;
                                    null === (r = t.onPlaceholderResize) || void 0 === r || r.call(t, e)
                                }))
                            }
                            d.current.observe(e), u.current = e
                        }
                    }), [u, t, s]), g = l.createElement($e, {
                        isLast: r,
                        leaf: t,
                        parent: a,
                        text: n
                    }), m = Boolean(t[ne]);
                    if ((0, l.useEffect)((() => (m ? h.current || (h.current = setTimeout((() => {
                            v(!0), h.current = null
                        }), Ge)) : (Ze(h), v(!1)), () => Ze(h))), [m, v]), m && f) {
                        var w = {
                            children: t.placeholder,
                            attributes: {
                                "data-slate-placeholder": !0,
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    pointerEvents: "none",
                                    width: "100%",
                                    maxWidth: "100%",
                                    display: "block",
                                    opacity: "0.333",
                                    userSelect: "none",
                                    textDecoration: "none",
                                    WebkitUserModify: C ? "inherit" : void 0
                                },
                                contentEditable: !1,
                                ref: p
                            }
                        };
                        g = l.createElement(l.Fragment, null, o(w), g)
                    }
                    return i({
                        attributes: {
                            "data-slate-leaf": !0
                        },
                        children: g,
                        leaf: t,
                        text: n
                    })
                },
                Qe = l.memo(Je, ((e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && d.xv.equals(t.leaf, e.leaf) && t.leaf[ne] === e.leaf[ne])),
                et = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return l.createElement("span", Xe({}, t), r)
                },
                tt = e => {
                    for (var {
                            decorations: t,
                            isLast: r,
                            parent: n,
                            renderPlaceholder: a,
                            renderLeaf: o,
                            text: i
                        } = e, s = y(), c = (0, l.useRef)(null), u = d.xv.decorations(i, t), f = xe.findKey(s, i), v = [], h = 0; h < u.length; h++) {
                        var p = u[h];
                        v.push(l.createElement(Qe, {
                            isLast: r && h === u.length - 1,
                            key: "".concat(f.id, "-").concat(h),
                            renderPlaceholder: a,
                            leaf: p,
                            text: i,
                            parent: n,
                            renderLeaf: o
                        }))
                    }
                    var g = (0, l.useCallback)((e => {
                        var t = $.get(s);
                        e ? (null === t || void 0 === t || t.set(f, e), Y.set(i, e), _.set(e, i)) : (null === t || void 0 === t || t.delete(f), Y.delete(i), c.current && _.delete(c.current)), c.current = e
                    }), [c, s, f, i]);
                    return l.createElement("span", {
                        "data-slate-node": "text",
                        ref: g
                    }, v)
                },
                rt = l.memo(tt, ((e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && ((e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            a = t[r];
                        if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !Ye(n, a)) return !1
                    }
                    return !0
                })(t.decorations, e.decorations)));

            function nt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function at(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nt(Object(r), !0).forEach((function(t) {
                        g(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ot = e => {
                    var {
                        decorations: t,
                        element: r,
                        renderElement: n = (e => l.createElement(lt, at({}, e))),
                        renderPlaceholder: o,
                        renderLeaf: i,
                        selection: s
                    } = e, c = y(), u = vt(), f = c.isInline(r), v = xe.findKey(c, r), h = (0, l.useCallback)((e => {
                        var t = $.get(c);
                        e ? (null === t || void 0 === t || t.set(v, e), Y.set(r, e), _.set(e, r)) : (null === t || void 0 === t || t.delete(v), Y.delete(r))
                    }), [c, v, r]), p = ut({
                        decorations: t,
                        node: r,
                        renderElement: n,
                        renderPlaceholder: o,
                        renderLeaf: i,
                        selection: s
                    }), g = {
                        "data-slate-node": "element",
                        ref: h
                    };
                    if (f && (g["data-slate-inline"] = !0), !f && d.ML.hasInlines(c, r)) {
                        var m = d.NB.string(r),
                            w = a()(m);
                        "rtl" === w && (g.dir = w)
                    }
                    if (d.ML.isVoid(c, r)) {
                        g["data-slate-void"] = !0, !u && f && (g.contentEditable = !1);
                        var b = f ? "span" : "div",
                            [
                                [M]
                            ] = d.NB.texts(r);
                        p = l.createElement(b, {
                            "data-slate-spacer": !0,
                            style: {
                                height: "0",
                                color: "transparent",
                                outline: "none",
                                position: "absolute"
                            }
                        }, l.createElement(rt, {
                            renderPlaceholder: o,
                            decorations: [],
                            isLast: !1,
                            parent: r,
                            text: M
                        })), j.set(M, 0), W.set(M, r)
                    }
                    return n({
                        attributes: g,
                        children: p,
                        element: r
                    })
                },
                it = l.memo(ot, ((e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && ((e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            a = t[r];
                        if (!d.e6.equals(n, a) || !Ye(n, a)) return !1
                    }
                    return !0
                })(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && d.e6.equals(e.selection, t.selection)))),
                lt = e => {
                    var {
                        attributes: t,
                        children: r,
                        element: n
                    } = e, a = y().isInline(n) ? "span" : "div";
                    return l.createElement(a, at(at({}, t), {}, {
                        style: {
                            position: "relative"
                        }
                    }), r)
                },
                st = (0, l.createContext)((() => [])),
                dt = (0, l.createContext)(!1),
                ct = () => (0, l.useContext)(dt),
                ut = e => {
                    for (var {
                            decorations: t,
                            node: r,
                            renderElement: n,
                            renderPlaceholder: a,
                            renderLeaf: o,
                            selection: i
                        } = e, s = (0, l.useContext)(st), c = y(), u = xe.findPath(c, r), f = [], v = d.W_.isElement(r) && !c.isInline(r) && d.ML.hasInlines(c, r), h = 0; h < r.children.length; h++) {
                        var p = u.concat(h),
                            g = r.children[h],
                            m = xe.findKey(c, g),
                            w = d.ML.range(c, p),
                            b = i && d.e6.intersection(w, i),
                            M = s([g, p]);
                        for (var x of t) {
                            var k = d.e6.intersection(x, w);
                            k && M.push(k)
                        }
                        d.W_.isElement(g) ? f.push(l.createElement(dt.Provider, {
                            key: "provider-".concat(m.id),
                            value: !!b
                        }, l.createElement(it, {
                            decorations: M,
                            element: g,
                            key: m.id,
                            renderElement: n,
                            renderPlaceholder: a,
                            renderLeaf: o,
                            selection: b
                        }))) : f.push(l.createElement(rt, {
                            decorations: M,
                            key: m.id,
                            isLast: v && h === r.children.length - 1,
                            parent: r,
                            renderPlaceholder: a,
                            renderLeaf: o,
                            text: g
                        })), j.set(g, h), W.set(g, r)
                    }
                    return f
                },
                ft = (0, l.createContext)(!1),
                vt = () => (0, l.useContext)(ft),
                ht = (0, l.createContext)(null),
                pt = () => {
                    var e = (0, l.useContext)(ht);
                    if (!e) throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                    var {
                        editor: t
                    } = e;
                    return t
                };
            var gt = {
                    bold: "mod+b",
                    compose: ["down", "left", "right", "up", "backspace", "enter"],
                    moveBackward: "left",
                    moveForward: "right",
                    moveWordBackward: "ctrl+left",
                    moveWordForward: "ctrl+right",
                    deleteBackward: "shift?+backspace",
                    deleteForward: "shift?+delete",
                    extendBackward: "shift+left",
                    extendForward: "shift+right",
                    italic: "mod+i",
                    insertSoftBreak: "shift+enter",
                    splitBlock: "enter",
                    undo: "mod+z"
                },
                mt = {
                    moveLineBackward: "opt+up",
                    moveLineForward: "opt+down",
                    moveWordBackward: "opt+left",
                    moveWordForward: "opt+right",
                    deleteBackward: ["ctrl+backspace", "ctrl+h"],
                    deleteForward: ["ctrl+delete", "ctrl+d"],
                    deleteLineBackward: "cmd+shift?+backspace",
                    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
                    deleteWordBackward: "opt+shift?+backspace",
                    deleteWordForward: "opt+shift?+delete",
                    extendLineBackward: "opt+shift+up",
                    extendLineForward: "opt+shift+down",
                    redo: "cmd+shift+z",
                    transposeCharacter: "ctrl+t"
                },
                wt = {
                    deleteWordBackward: "ctrl+shift?+backspace",
                    deleteWordForward: "ctrl+shift?+delete",
                    redo: ["ctrl+y", "ctrl+shift+z"]
                },
                bt = e => {
                    var t = gt[e],
                        r = mt[e],
                        n = wt[e],
                        a = t && (0, u.P6)(t),
                        o = r && (0, u.P6)(r),
                        i = n && (0, u.P6)(n);
                    return e => !(!a || !a(e)) || (!!(k && o && o(e)) || !(k || !i || !i(e)))
                },
                yt = {
                    isBold: bt("bold"),
                    isCompose: bt("compose"),
                    isMoveBackward: bt("moveBackward"),
                    isMoveForward: bt("moveForward"),
                    isDeleteBackward: bt("deleteBackward"),
                    isDeleteForward: bt("deleteForward"),
                    isDeleteLineBackward: bt("deleteLineBackward"),
                    isDeleteLineForward: bt("deleteLineForward"),
                    isDeleteWordBackward: bt("deleteWordBackward"),
                    isDeleteWordForward: bt("deleteWordForward"),
                    isExtendBackward: bt("extendBackward"),
                    isExtendForward: bt("extendForward"),
                    isExtendLineBackward: bt("extendLineBackward"),
                    isExtendLineForward: bt("extendLineForward"),
                    isItalic: bt("italic"),
                    isMoveLineBackward: bt("moveLineBackward"),
                    isMoveLineForward: bt("moveLineForward"),
                    isMoveWordBackward: bt("moveWordBackward"),
                    isMoveWordForward: bt("moveWordForward"),
                    isRedo: bt("redo"),
                    isSoftBreak: bt("insertSoftBreak"),
                    isSplitBlock: bt("splitBlock"),
                    isTransposeCharacter: bt("transposeCharacter"),
                    isUndo: bt("undo")
                },
                Mt = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                };
            class xt extends l.Component {
                constructor() {
                    super(...arguments), g(this, "context", null), g(this, "manager", null), g(this, "mutationObserver", null)
                }
                observe() {
                    var e, {
                        node: t
                    } = this.props;
                    if (!t.current) throw new Error("Failed to attach MutationObserver, `node` is undefined");
                    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, Mt)
                }
                componentDidMount() {
                    var {
                        receivedUserInput: e
                    } = this.props, t = this.context;
                    this.manager = ((e, t) => {
                        var r = [],
                            n = () => {
                                r = []
                            };
                        return {
                            registerMutations: n => {
                                if (t.current) {
                                    var a = n.filter((t => we(e, t, n)));
                                    r.push(...a)
                                }
                            },
                            restoreDOM: function() {
                                r.length > 0 && (r.reverse().forEach((e => {
                                    "characterData" !== e.type && (e.removedNodes.forEach((t => {
                                        e.target.insertBefore(t, e.nextSibling)
                                    })), e.addedNodes.forEach((t => {
                                        e.target.removeChild(t)
                                    })))
                                })), n())
                            },
                            clear: n
                        }
                    })(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
                }
                getSnapshotBeforeUpdate() {
                    var e, t, r, n, a = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
                    null !== a && void 0 !== a && a.length && (null === (n = this.manager) || void 0 === n || n.registerMutations(a));
                    return null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (r = this.manager) || void 0 === r || r.restoreDOM(), null
                }
                componentDidUpdate() {
                    var e;
                    null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
                }
                render() {
                    return this.props.children
                }
            }
            g(xt, "contextType", b);
            var kt = E ? xt : e => {
                    var {
                        children: t
                    } = e;
                    return l.createElement(l.Fragment, null, t)
                },
                Et = (0, l.createContext)(!1),
                Ot = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
                Ct = ["text"];

            function Lt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Dt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Lt(Object(r), !0).forEach((function(t) {
                        g(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var St = e => l.createElement(l.Fragment, null, ut(e)),
                Pt = (0, l.forwardRef)(((e, t) => {
                    var r = (0, l.useCallback)((e => l.createElement(Bt, Dt({}, e))), []),
                        {
                            autoFocus: n,
                            decorate: s = Rt,
                            onDOMBeforeInput: c,
                            placeholder: u,
                            readOnly: f = !1,
                            renderElement: h,
                            renderLeaf: p,
                            renderPlaceholder: g = r,
                            scrollSelectionIntoView: m = Tt,
                            style: w = {},
                            as: b = "div",
                            disableDefaultStyles: M = !1
                        } = e,
                        k = v(e, Ot),
                        L = pt(),
                        [S, P] = (0, l.useState)(!1),
                        j = (0, l.useRef)(null),
                        W = (0, l.useRef)([]),
                        [q, U] = (0, l.useState)(),
                        $ = (0, l.useRef)(!1),
                        {
                            onUserInput: X,
                            receivedUserInput: G
                        } = function() {
                            var e = y(),
                                t = (0, l.useRef)(!1),
                                r = (0, l.useRef)(0),
                                n = (0, l.useCallback)((() => {
                                    if (!t.current) {
                                        t.current = !0;
                                        var n = xe.getWindow(e);
                                        n.cancelAnimationFrame(r.current), r.current = n.requestAnimationFrame((() => {
                                            t.current = !1
                                        }))
                                    }
                                }), [e]);
                            return (0, l.useEffect)((() => () => cancelAnimationFrame(r.current)), []), {
                                receivedUserInput: t,
                                onUserInput: n
                            }
                        }(),
                        [, Q] = (0, l.useReducer)((e => e + 1), 0);
                    re.set(L, Q), V.set(L, f);
                    var ee = (0, l.useMemo)((() => ({
                        isDraggingInternally: !1,
                        isUpdatingSelection: !1,
                        latestElement: null,
                        hasMarkPlaceholder: !1
                    })), []);
                    (0, l.useEffect)((() => {
                        j.current && n && j.current.focus()
                    }), [n]);
                    var te = (0, l.useRef)(),
                        oe = (0, l.useMemo)((() => (0, i.Z)((() => {
                            var e = xe.toDOMNode(L, L).getRootNode();
                            if (!$.current && C && e instanceof ShadowRoot) {
                                $.current = !0;
                                var t = (() => {
                                    for (var e = document.activeElement; null !== (t = e) && void 0 !== t && t.shadowRoot && null !== (r = e.shadowRoot) && void 0 !== r && r.activeElement;) {
                                        var t, r, n;
                                        e = null === (n = e) || void 0 === n || null === (n = n.shadowRoot) || void 0 === n ? void 0 : n.activeElement
                                    }
                                    return e
                                })();
                                return t ? document.execCommand("indent") : d.YR.deselect(L), void($.current = !1)
                            }
                            var r = te.current;
                            if ((E || !xe.isComposing(L)) && (!ee.isUpdatingSelection || null !== r && void 0 !== r && r.isFlushing()) && !ee.isDraggingInternally) {
                                var n = xe.findDocumentOrShadowRoot(L),
                                    {
                                        activeElement: a
                                    } = n,
                                    o = xe.toDOMNode(L, L),
                                    i = me(n);
                                if (a === o ? (ee.latestElement = a, z.set(L, !0)) : z.delete(L), !i) return d.YR.deselect(L);
                                var {
                                    anchorNode: l,
                                    focusNode: s
                                } = i, c = xe.hasEditableTarget(L, l) || xe.isTargetInsideNonReadonlyVoid(L, l), u = xe.hasTarget(L, s);
                                if (c && u) {
                                    var v = xe.toSlateRange(L, i, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    v && (xe.isComposing(L) || null !== r && void 0 !== r && r.hasPendingChanges() || null !== r && void 0 !== r && r.isFlushing() ? null === r || void 0 === r || r.handleUserSelect(v) : d.YR.select(L, v))
                                }!f || c && u || d.YR.deselect(L)
                            }
                        }), 100)), [L, f, ee]),
                        ie = (0, l.useMemo)((() => (0, o.Z)(oe, 0)), [oe]);
                    te.current = Ie({
                        node: j,
                        onDOMSelectionChange: oe,
                        scheduleOnDOMSelectionChange: ie
                    }), Ne((() => {
                        var e, t, r;
                        j.current && (r = le(j.current)) ? (A.set(L, r), I.set(L, j.current), Y.set(L, j.current), _.set(j.current, L)) : Y.delete(L);
                        var {
                            selection: n
                        } = L, a = xe.findDocumentOrShadowRoot(L), o = me(a);
                        if (o && xe.isFocused(L) && (null === (e = te.current) || void 0 === e || !e.hasPendingAction())) {
                            var i = e => {
                                var t = "None" !== o.type;
                                if (n || t) {
                                    var r, a = o.focusNode;
                                    if (O && o.rangeCount > 1) {
                                        var i = o.getRangeAt(0),
                                            l = o.getRangeAt(o.rangeCount - 1);
                                        r = i.startContainer === a ? l.endContainer : i.startContainer
                                    } else r = o.anchorNode;
                                    var s = I.get(L),
                                        c = !1;
                                    if (s.contains(r) && s.contains(a) && (c = !0), t && c && n && !e) {
                                        var u = xe.toSlateRange(L, o, {
                                            exactMatch: !0,
                                            suppressThrow: !0
                                        });
                                        if (u && d.e6.equals(u, n)) {
                                            var f;
                                            if (!ee.hasMarkPlaceholder) return;
                                            if (null !== (f = r) && void 0 !== f && null !== (f = f.parentElement) && void 0 !== f && f.hasAttribute("data-slate-mark-placeholder")) return
                                        }
                                    }
                                    if (!n || xe.hasRange(L, n)) {
                                        ee.isUpdatingSelection = !0;
                                        var v = n && xe.toDOMRange(L, n);
                                        return v ? (xe.isComposing(L) && !E ? o.collapseToEnd() : d.e6.isBackward(n) ? o.setBaseAndExtent(v.endContainer, v.endOffset, v.startContainer, v.startOffset) : o.setBaseAndExtent(v.startContainer, v.startOffset, v.endContainer, v.endOffset), m(L, v)) : o.removeAllRanges(), v
                                    }
                                    L.selection = xe.toSlateRange(L, o, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    })
                                }
                            };
                            o.rangeCount <= 1 && i();
                            var l = "action" === (null === (t = te.current) || void 0 === t ? void 0 : t.isFlushing());
                            if (E && l) {
                                var s = null,
                                    c = requestAnimationFrame((() => {
                                        if (l) {
                                            var e = e => {
                                                try {
                                                    xe.toDOMNode(L, L).focus(), i(e)
                                                } catch (t) {}
                                            };
                                            e(), s = setTimeout((() => {
                                                e(!0), ee.isUpdatingSelection = !1
                                            }))
                                        }
                                    }));
                                return () => {
                                    cancelAnimationFrame(c), s && clearTimeout(s)
                                }
                            }
                            setTimeout((() => {
                                ee.isUpdatingSelection = !1
                            }))
                        }
                    }));
                    var ce = (0, l.useCallback)((e => {
                            var t = xe.toDOMNode(L, L).getRootNode();
                            if (null !== $ && void 0 !== $ && $.current && C && t instanceof ShadowRoot) {
                                var r = e.getTargetRanges()[0],
                                    n = new window.Range;
                                n.setStart(r.startContainer, r.startOffset), n.setEnd(r.endContainer, r.endOffset);
                                var a = xe.toSlateRange(L, n, {
                                    exactMatch: !1,
                                    suppressThrow: !1
                                });
                                return d.YR.select(L, a), e.preventDefault(), void e.stopImmediatePropagation()
                            }
                            if (X(), !f && xe.hasEditableTarget(L, e.target) && !jt(e, c)) {
                                var o;
                                if (te.current) return te.current.handleDOMBeforeInput(e);
                                ie.flush(), oe.flush();
                                var {
                                    selection: i
                                } = L, {
                                    inputType: l
                                } = e, s = e.dataTransfer || e.data || void 0, u = "insertCompositionText" === l || "deleteCompositionText" === l;
                                if (u && xe.isComposing(L)) return;
                                var v = !1;
                                if ("insertText" === l && i && d.e6.isCollapsed(i) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== i.anchor.offset) {
                                    var h, p;
                                    v = !0, L.marks && (v = !1);
                                    var {
                                        anchor: g
                                    } = i, [m, w] = xe.toDOMPoint(L, g), b = null === (h = m.parentElement) || void 0 === h ? void 0 : h.closest("a"), y = xe.getWindow(L);
                                    if (v && b && xe.hasDOMNode(L, b)) {
                                        var M, x = null === y || void 0 === y ? void 0 : y.document.createTreeWalker(b, NodeFilter.SHOW_TEXT).lastChild();
                                        x === m && (null === (M = x.textContent) || void 0 === M ? void 0 : M.length) === w && (v = !1)
                                    }
                                    if (v && m.parentElement && "pre" === (null === y || void 0 === y || null === (p = y.getComputedStyle(m.parentElement)) || void 0 === p ? void 0 : p.whiteSpace)) {
                                        var k = d.ML.above(L, {
                                            at: g.path,
                                            match: e => d.W_.isElement(e) && d.ML.isBlock(L, e)
                                        });
                                        k && d.NB.string(k[0]).includes("\t") && (v = !1)
                                    }
                                }
                                if (!l.startsWith("delete") || l.startsWith("deleteBy")) {
                                    var [E] = e.getTargetRanges();
                                    if (E) {
                                        var O = xe.toSlateRange(L, E, {
                                            exactMatch: !1,
                                            suppressThrow: !1
                                        });
                                        if (!i || !d.e6.equals(i, O)) {
                                            v = !1;
                                            var D = !u && L.selection && d.ML.rangeRef(L, L.selection);
                                            d.YR.select(L, O), D && K.set(L, D)
                                        }
                                    }
                                }
                                if (u) return;
                                if (v || e.preventDefault(), i && d.e6.isExpanded(i) && l.startsWith("delete")) {
                                    var S = l.endsWith("Backward") ? "backward" : "forward";
                                    return void d.ML.deleteFragment(L, {
                                        direction: S
                                    })
                                }
                                switch (l) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        d.ML.deleteFragment(L);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        d.ML.deleteForward(L);
                                        break;
                                    case "deleteContentBackward":
                                        d.ML.deleteBackward(L);
                                        break;
                                    case "deleteEntireSoftLine":
                                        d.ML.deleteBackward(L, {
                                            unit: "line"
                                        }), d.ML.deleteForward(L, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteHardLineBackward":
                                        d.ML.deleteBackward(L, {
                                            unit: "block"
                                        });
                                        break;
                                    case "deleteSoftLineBackward":
                                        d.ML.deleteBackward(L, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteHardLineForward":
                                        d.ML.deleteForward(L, {
                                            unit: "block"
                                        });
                                        break;
                                    case "deleteSoftLineForward":
                                        d.ML.deleteForward(L, {
                                            unit: "line"
                                        });
                                        break;
                                    case "deleteWordBackward":
                                        d.ML.deleteBackward(L, {
                                            unit: "word"
                                        });
                                        break;
                                    case "deleteWordForward":
                                        d.ML.deleteForward(L, {
                                            unit: "word"
                                        });
                                        break;
                                    case "insertLineBreak":
                                        d.ML.insertSoftBreak(L);
                                        break;
                                    case "insertParagraph":
                                        d.ML.insertBreak(L);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === l && xe.isComposing(L) && (P(!1), H.set(L, !1)), "DataTransfer" === (null === s || void 0 === s ? void 0 : s.constructor.name) ? xe.insertData(L, s) : "string" === typeof s && (v ? W.current.push((() => d.ML.insertText(L, s))) : d.ML.insertText(L, s))
                                }
                                var B = null === (o = K.get(L)) || void 0 === o ? void 0 : o.unref();
                                K.delete(L), !B || L.selection && d.e6.equals(L.selection, B) || d.YR.select(L, B)
                            }
                        }), [L, oe, X, c, f, ie]),
                        ue = (0, l.useCallback)((e => {
                            null == e ? (oe.cancel(), ie.cancel(), I.delete(L), Y.delete(L), j.current && N && j.current.removeEventListener("beforeinput", ce)) : N && e.addEventListener("beforeinput", ce), j.current = e, "function" === typeof t ? t(e) : t && (t.current = e)
                        }), [oe, ie, L, ce, t]);
                    Ne((() => {
                        var e = xe.getWindow(L);
                        e.document.addEventListener("selectionchange", ie);
                        var t = () => {
                            ee.isDraggingInternally = !1
                        };
                        return e.document.addEventListener("dragend", t), e.document.addEventListener("drop", t), () => {
                            e.document.removeEventListener("selectionchange", ie), e.document.removeEventListener("dragend", t), e.document.removeEventListener("drop", t)
                        }
                    }), [ie, ee]);
                    var fe = s([L, []]),
                        ve = u && 1 === L.children.length && 1 === Array.from(d.NB.texts(L)).length && "" === d.NB.string(L) && !S,
                        he = (0, l.useCallback)((e => {
                            var t;
                            e && ve ? U(null === (t = e.getBoundingClientRect()) || void 0 === t ? void 0 : t.height) : U(void 0)
                        }), [ve]);
                    if (ve) {
                        var pe = d.ML.start(L, []);
                        fe.push({
                            [ne]: !0,
                            placeholder: u,
                            onPlaceholderResize: he,
                            anchor: pe,
                            focus: pe
                        })
                    }
                    var {
                        marks: ge
                    } = L;
                    if (ee.hasMarkPlaceholder = !1, L.selection && d.e6.isCollapsed(L.selection) && ge) {
                        var {
                            anchor: we
                        } = L.selection, be = d.NB.leaf(L, we.path), ye = v(be, Ct);
                        if (!d.xv.equals(be, ge, {
                                loose: !0
                            })) {
                            ee.hasMarkPlaceholder = !0;
                            var Me = Object.fromEntries(Object.keys(ye).map((e => [e, null])));
                            fe.push(Dt(Dt(Dt({
                                [ae]: !0
                            }, Me), ge), {}, {
                                anchor: we,
                                focus: we
                            }))
                        }
                    }
                    return (0, l.useEffect)((() => {
                        setTimeout((() => {
                            var {
                                selection: e
                            } = L;
                            if (e) {
                                var {
                                    anchor: t
                                } = e, r = d.NB.leaf(L, t.path);
                                if (ge && !d.xv.equals(r, ge, {
                                        loose: !0
                                    })) return void Z.set(L, ge)
                            }
                            Z.delete(L)
                        }))
                    })), l.createElement(ft.Provider, {
                        value: f
                    }, l.createElement(Et.Provider, {
                        value: S
                    }, l.createElement(st.Provider, {
                        value: s
                    }, l.createElement(kt, {
                        node: j,
                        receivedUserInput: G
                    }, l.createElement(b, Dt(Dt({
                        role: f ? void 0 : "textbox",
                        "aria-multiline": !f || void 0
                    }, k), {}, {
                        spellCheck: !(!N && F) && k.spellCheck,
                        autoCorrect: N || !F ? k.autoCorrect : "false",
                        autoCapitalize: N || !F ? k.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !f,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: ue,
                        style: Dt(Dt({}, M ? {} : Dt({
                            position: "relative",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }, q ? {
                            minHeight: q
                        } : {})), w),
                        onBeforeInput: (0, l.useCallback)((e => {
                            if (!N && !f && !Ft(e, k.onBeforeInput) && xe.hasSelectableTarget(L, e.target) && (e.preventDefault(), !xe.isComposing(L))) {
                                var t = e.data;
                                d.ML.insertText(L, t)
                            }
                        }), [k.onBeforeInput, L, f]),
                        onInput: (0, l.useCallback)((e => {
                            if (!Ft(e, k.onInput))
                                if (te.current) te.current.handleInput();
                                else {
                                    for (var t of W.current) t();
                                    W.current = []
                                }
                        }), [k.onInput]),
                        onBlur: (0, l.useCallback)((e => {
                            if (!f && !ee.isUpdatingSelection && xe.hasSelectableTarget(L, e.target) && !Ft(e, k.onBlur)) {
                                var t = xe.findDocumentOrShadowRoot(L);
                                if (ee.latestElement !== t.activeElement) {
                                    var {
                                        relatedTarget: r
                                    } = e;
                                    if (r !== xe.toDOMNode(L, L) && (!se(r) || !r.hasAttribute("data-slate-spacer"))) {
                                        if (null != r && de(r) && xe.hasDOMNode(L, r)) {
                                            var n = xe.toSlateNode(L, r);
                                            if (d.W_.isElement(n) && !L.isVoid(n)) return
                                        }
                                        if (C) {
                                            var a = me(t);
                                            null === a || void 0 === a || a.removeAllRanges()
                                        }
                                        z.delete(L)
                                    }
                                }
                            }
                        }), [f, ee.isUpdatingSelection, ee.latestElement, L, k.onBlur]),
                        onClick: (0, l.useCallback)((e => {
                            if (xe.hasTarget(L, e.target) && !Ft(e, k.onClick) && de(e.target)) {
                                var t = xe.toSlateNode(L, e.target),
                                    r = xe.findPath(L, t);
                                if (!d.ML.hasPath(L, r) || d.NB.get(L, r) !== t) return;
                                if (3 === e.detail && r.length >= 1) {
                                    var n = r;
                                    if (!d.W_.isElement(t) || !d.ML.isBlock(L, t)) {
                                        var a, o = d.ML.above(L, {
                                            match: e => d.W_.isElement(e) && d.ML.isBlock(L, e),
                                            at: r
                                        });
                                        n = null !== (a = null === o || void 0 === o ? void 0 : o[1]) && void 0 !== a ? a : r.slice(0, 1)
                                    }
                                    var i = d.ML.range(L, n);
                                    return void d.YR.select(L, i)
                                }
                                if (f) return;
                                var l = d.ML.start(L, r),
                                    s = d.ML.end(L, r),
                                    c = d.ML.void(L, {
                                        at: l
                                    }),
                                    u = d.ML.void(L, {
                                        at: s
                                    });
                                if (c && u && d.y$.equals(c[1], u[1])) {
                                    var v = d.ML.range(L, l);
                                    d.YR.select(L, v)
                                }
                            }
                        }), [L, k.onClick, f]),
                        onCompositionEnd: (0, l.useCallback)((e => {
                            if (xe.hasSelectableTarget(L, e.target)) {
                                var t;
                                if (xe.isComposing(L) && Promise.resolve().then((() => {
                                        P(!1), H.set(L, !1)
                                    })), null === (t = te.current) || void 0 === t || t.handleCompositionEnd(e), Ft(e, k.onCompositionEnd) || E) return;
                                if (!C && !B && !x && !T && !R && e.data) {
                                    var r = Z.get(L);
                                    Z.delete(L), void 0 !== r && (J.set(L, L.marks), L.marks = r), d.ML.insertText(L, e.data);
                                    var n = J.get(L);
                                    J.delete(L), void 0 !== n && (L.marks = n)
                                }
                            }
                        }), [k.onCompositionEnd, L]),
                        onCompositionUpdate: (0, l.useCallback)((e => {
                            xe.hasSelectableTarget(L, e.target) && !Ft(e, k.onCompositionUpdate) && (xe.isComposing(L) || (P(!0), H.set(L, !0)))
                        }), [k.onCompositionUpdate, L]),
                        onCompositionStart: (0, l.useCallback)((e => {
                            if (xe.hasSelectableTarget(L, e.target)) {
                                var t;
                                if (null === (t = te.current) || void 0 === t || t.handleCompositionStart(e), Ft(e, k.onCompositionStart) || E) return;
                                P(!0);
                                var {
                                    selection: r
                                } = L;
                                if (r && d.e6.isExpanded(r)) return void d.ML.deleteFragment(L)
                            }
                        }), [k.onCompositionStart, L]),
                        onCopy: (0, l.useCallback)((e => {
                            !xe.hasSelectableTarget(L, e.target) || Ft(e, k.onCopy) || Nt(e) || (e.preventDefault(), xe.setFragmentData(L, e.clipboardData, "copy"))
                        }), [k.onCopy, L]),
                        onCut: (0, l.useCallback)((e => {
                            if (!f && xe.hasSelectableTarget(L, e.target) && !Ft(e, k.onCut) && !Nt(e)) {
                                e.preventDefault(), xe.setFragmentData(L, e.clipboardData, "cut");
                                var {
                                    selection: t
                                } = L;
                                if (t)
                                    if (d.e6.isExpanded(t)) d.ML.deleteFragment(L);
                                    else {
                                        var r = d.NB.parent(L, t.anchor.path);
                                        d.ML.isVoid(L, r) && d.YR.delete(L)
                                    }
                            }
                        }), [f, L, k.onCut]),
                        onDragOver: (0, l.useCallback)((e => {
                            if (xe.hasTarget(L, e.target) && !Ft(e, k.onDragOver)) {
                                var t = xe.toSlateNode(L, e.target);
                                d.W_.isElement(t) && d.ML.isVoid(L, t) && e.preventDefault()
                            }
                        }), [k.onDragOver, L]),
                        onDragStart: (0, l.useCallback)((e => {
                            if (!f && xe.hasTarget(L, e.target) && !Ft(e, k.onDragStart)) {
                                var t = xe.toSlateNode(L, e.target),
                                    r = xe.findPath(L, t);
                                if (d.W_.isElement(t) && d.ML.isVoid(L, t) || d.ML.void(L, {
                                        at: r,
                                        voids: !0
                                    })) {
                                    var n = d.ML.range(L, r);
                                    d.YR.select(L, n)
                                }
                                ee.isDraggingInternally = !0, xe.setFragmentData(L, e.dataTransfer, "drag")
                            }
                        }), [f, L, k.onDragStart, ee]),
                        onDrop: (0, l.useCallback)((e => {
                            if (!f && xe.hasTarget(L, e.target) && !Ft(e, k.onDrop)) {
                                e.preventDefault();
                                var t = L.selection,
                                    r = xe.findEventRange(L, e),
                                    n = e.dataTransfer;
                                d.YR.select(L, r), ee.isDraggingInternally && (!t || d.e6.equals(t, r) || d.ML.void(L, {
                                    at: r,
                                    voids: !0
                                }) || d.YR.delete(L, {
                                    at: t
                                })), xe.insertData(L, n), xe.isFocused(L) || xe.focus(L)
                            }
                        }), [f, L, k.onDrop, ee]),
                        onDragEnd: (0, l.useCallback)((e => {
                            !f && ee.isDraggingInternally && k.onDragEnd && xe.hasTarget(L, e.target) && k.onDragEnd(e)
                        }), [f, ee, k, L]),
                        onFocus: (0, l.useCallback)((e => {
                            if (!f && !ee.isUpdatingSelection && xe.hasEditableTarget(L, e.target) && !Ft(e, k.onFocus)) {
                                var t = xe.toDOMNode(L, L),
                                    r = xe.findDocumentOrShadowRoot(L);
                                if (ee.latestElement = r.activeElement, O && e.target !== t) return void t.focus();
                                z.set(L, !0)
                            }
                        }), [f, ee, L, k.onFocus]),
                        onKeyDown: (0, l.useCallback)((e => {
                            if (!f && xe.hasEditableTarget(L, e.target)) {
                                var t;
                                null === (t = te.current) || void 0 === t || t.handleKeyDown(e);
                                var {
                                    nativeEvent: r
                                } = e;
                                if (xe.isComposing(L) && !1 === r.isComposing && (H.set(L, !1), P(!1)), Ft(e, k.onKeyDown) || xe.isComposing(L)) return;
                                var {
                                    selection: n
                                } = L, o = L.children[null !== n ? n.focus.path[0] : 0], i = "rtl" === a()(d.NB.string(o));
                                if (yt.isRedo(r)) {
                                    e.preventDefault();
                                    var l = L;
                                    return void("function" === typeof l.redo && l.redo())
                                }
                                if (yt.isUndo(r)) {
                                    e.preventDefault();
                                    var s = L;
                                    return void("function" === typeof s.undo && s.undo())
                                }
                                if (yt.isMoveLineBackward(r)) return e.preventDefault(), void d.YR.move(L, {
                                    unit: "line",
                                    reverse: !0
                                });
                                if (yt.isMoveLineForward(r)) return e.preventDefault(), void d.YR.move(L, {
                                    unit: "line"
                                });
                                if (yt.isExtendLineBackward(r)) return e.preventDefault(), void d.YR.move(L, {
                                    unit: "line",
                                    edge: "focus",
                                    reverse: !0
                                });
                                if (yt.isExtendLineForward(r)) return e.preventDefault(), void d.YR.move(L, {
                                    unit: "line",
                                    edge: "focus"
                                });
                                if (yt.isMoveBackward(r)) return e.preventDefault(), void(n && d.e6.isCollapsed(n) ? d.YR.move(L, {
                                    reverse: !i
                                }) : d.YR.collapse(L, {
                                    edge: i ? "end" : "start"
                                }));
                                if (yt.isMoveForward(r)) return e.preventDefault(), void(n && d.e6.isCollapsed(n) ? d.YR.move(L, {
                                    reverse: i
                                }) : d.YR.collapse(L, {
                                    edge: i ? "start" : "end"
                                }));
                                if (yt.isMoveWordBackward(r)) return e.preventDefault(), n && d.e6.isExpanded(n) && d.YR.collapse(L, {
                                    edge: "focus"
                                }), void d.YR.move(L, {
                                    unit: "word",
                                    reverse: !i
                                });
                                if (yt.isMoveWordForward(r)) return e.preventDefault(), n && d.e6.isExpanded(n) && d.YR.collapse(L, {
                                    edge: "focus"
                                }), void d.YR.move(L, {
                                    unit: "word",
                                    reverse: i
                                });
                                if (N) {
                                    if ((D || C) && n && (yt.isDeleteBackward(r) || yt.isDeleteForward(r)) && d.e6.isCollapsed(n)) {
                                        var c = d.NB.parent(L, n.anchor.path);
                                        if (d.W_.isElement(c) && d.ML.isVoid(L, c) && (d.ML.isInline(L, c) || d.ML.isBlock(L, c))) return e.preventDefault(), void d.ML.deleteBackward(L, {
                                            unit: "block"
                                        })
                                    }
                                } else {
                                    if (yt.isBold(r) || yt.isItalic(r) || yt.isTransposeCharacter(r)) return void e.preventDefault();
                                    if (yt.isSoftBreak(r)) return e.preventDefault(), void d.ML.insertSoftBreak(L);
                                    if (yt.isSplitBlock(r)) return e.preventDefault(), void d.ML.insertBreak(L);
                                    if (yt.isDeleteBackward(r)) return e.preventDefault(), void(n && d.e6.isExpanded(n) ? d.ML.deleteFragment(L, {
                                        direction: "backward"
                                    }) : d.ML.deleteBackward(L));
                                    if (yt.isDeleteForward(r)) return e.preventDefault(), void(n && d.e6.isExpanded(n) ? d.ML.deleteFragment(L, {
                                        direction: "forward"
                                    }) : d.ML.deleteForward(L));
                                    if (yt.isDeleteLineBackward(r)) return e.preventDefault(), void(n && d.e6.isExpanded(n) ? d.ML.deleteFragment(L, {
                                        direction: "backward"
                                    }) : d.ML.deleteBackward(L, {
                                        unit: "line"
                                    }));
                                    if (yt.isDeleteLineForward(r)) return e.preventDefault(), void(n && d.e6.isExpanded(n) ? d.ML.deleteFragment(L, {
                                        direction: "forward"
                                    }) : d.ML.deleteForward(L, {
                                        unit: "line"
                                    }));
                                    if (yt.isDeleteWordBackward(r)) return e.preventDefault(), void(n && d.e6.isExpanded(n) ? d.ML.deleteFragment(L, {
                                        direction: "backward"
                                    }) : d.ML.deleteBackward(L, {
                                        unit: "word"
                                    }));
                                    if (yt.isDeleteWordForward(r)) return e.preventDefault(), void(n && d.e6.isExpanded(n) ? d.ML.deleteFragment(L, {
                                        direction: "forward"
                                    }) : d.ML.deleteForward(L, {
                                        unit: "word"
                                    }))
                                }
                            }
                        }), [f, L, k.onKeyDown]),
                        onPaste: (0, l.useCallback)((e => {
                            f || !xe.hasEditableTarget(L, e.target) || Ft(e, k.onPaste) || (!N || (e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length)(e.nativeEvent) || C) && (e.preventDefault(), xe.insertData(L, e.clipboardData))
                        }), [f, L, k.onPaste])
                    }), l.createElement(St, {
                        decorations: fe,
                        node: L,
                        renderElement: h,
                        renderPlaceholder: g,
                        renderLeaf: p,
                        selection: L.selection
                    }))))))
                })),
                Bt = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return l.createElement("span", Dt({}, t), r, E && l.createElement("br", null))
                },
                Rt = () => [],
                Tt = (e, t) => {
                    if (t.getBoundingClientRect && (!e.selection || e.selection && d.e6.isCollapsed(e.selection))) {
                        var r = t.startContainer.parentElement;
                        r.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, s.Z)(r, {
                            scrollMode: "if-needed"
                        }), delete r.getBoundingClientRect
                    }
                },
                Ft = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped()
                },
                Nt = e => de(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement),
                jt = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.defaultPrevented
                },
                Wt = (0, l.createContext)(!1),
                At = () => (0, l.useContext)(Wt);
            var It = (0, l.createContext)({});
            var qt = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"],
                _t = e => {
                    var {
                        editor: t,
                        children: r,
                        onChange: n,
                        onSelectionChange: a,
                        onValueChange: o,
                        initialValue: i
                    } = e, s = v(e, qt), [c, u] = l.useState((() => {
                        if (!d.NB.isNodeList(i)) throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(d.o4.stringify(i)));
                        if (!d.ML.isEditor(t)) throw new Error("[Slate] editor is invalid! You passed: ".concat(d.o4.stringify(t)));
                        return t.children = i, Object.assign(t, s), {
                            v: 0,
                            editor: t
                        }
                    })), {
                        selectorContext: f,
                        onChange: h
                    } = function(e) {
                        var t = (0, l.useRef)([]).current,
                            r = (0, l.useRef)({
                                editor: e
                            }).current,
                            n = (0, l.useCallback)((e => {
                                r.editor = e, t.forEach((t => t(e)))
                            }), [t, r]);
                        return {
                            selectorContext: (0, l.useMemo)((() => ({
                                getSlate: () => r.editor,
                                addEventListener: e => (t.push(e), () => {
                                    t.splice(t.indexOf(e), 1)
                                })
                            })), [t, r]),
                            onChange: n
                        }
                    }(t), p = (0, l.useCallback)((e => {
                        var r;
                        if (n && n(t.children), "set_selection" === (null === e || void 0 === e || null === (r = e.operation) || void 0 === r ? void 0 : r.type)) null === a || void 0 === a || a(t.selection);
                        else null === o || void 0 === o || o(t.children);
                        u((e => ({
                            v: e.v + 1,
                            editor: t
                        }))), h(t)
                    }), [t, h, n, a, o]);
                    (0, l.useEffect)((() => (X.set(t, p), () => {
                        X.set(t, (() => {}))
                    })), [t, p]);
                    var [g, m] = (0, l.useState)(xe.isFocused(t));
                    return (0, l.useEffect)((() => {
                        m(xe.isFocused(t))
                    }), [t]), Ne((() => {
                        var e = () => m(xe.isFocused(t));
                        return M >= 17 ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
                        }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
                            document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
                        })
                    }), []), l.createElement(It.Provider, {
                        value: f
                    }, l.createElement(ht.Provider, {
                        value: c
                    }, l.createElement(b.Provider, {
                        value: c.editor
                    }, l.createElement(Wt.Provider, {
                        value: g
                    }, r))))
                },
                Yt = (e, t) => {
                    var r = (t.top + t.bottom) / 2;
                    return e.top <= r && e.bottom >= r
                },
                Ut = (e, t, r) => {
                    var n = xe.toDOMRange(e, t).getBoundingClientRect(),
                        a = xe.toDOMRange(e, r).getBoundingClientRect();
                    return Yt(n, a) && Yt(a, n)
                },
                $t = (e, t) => {
                    var r = d.ML.range(e, d.e6.end(t)),
                        n = Array.from(d.ML.positions(e, {
                            at: t
                        })),
                        a = 0,
                        o = n.length,
                        i = Math.floor(o / 2);
                    if (Ut(e, d.ML.range(e, n[a]), r)) return d.ML.range(e, n[a], r);
                    if (n.length < 2) return d.ML.range(e, n[n.length - 1], r);
                    for (; i !== n.length && i !== a;) Ut(e, d.ML.range(e, n[i]), r) ? o = i : a = i, i = Math.floor((a + o) / 2);
                    return d.ML.range(e, n[o], r)
                };

            function Vt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function zt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Vt(Object(r), !0).forEach((function(t) {
                        g(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ht = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                        r = e,
                        {
                            apply: n,
                            onChange: a,
                            deleteBackward: o,
                            addMark: i,
                            removeMark: l
                        } = r;
                    return $.set(r, new WeakMap), r.addMark = (e, t) => {
                        var n, a;
                        null === (n = G.get(r)) || void 0 === n || n(), !Z.get(r) && null !== (a = Q.get(r)) && void 0 !== a && a.length && Z.set(r, null), J.delete(r), i(e, t)
                    }, r.removeMark = e => {
                        var t;
                        !Z.get(r) && null !== (t = Q.get(r)) && void 0 !== t && t.length && Z.set(r, null), J.delete(r), l(e)
                    }, r.deleteBackward = e => {
                        if ("line" !== e) return o(e);
                        if (r.selection && d.e6.isCollapsed(r.selection)) {
                            var t = d.ML.above(r, {
                                match: e => d.W_.isElement(e) && d.ML.isBlock(r, e),
                                at: r.selection
                            });
                            if (t) {
                                var [, n] = t, a = d.ML.range(r, n, r.selection.anchor), i = $t(r, a);
                                d.e6.isCollapsed(i) || d.YR.delete(r, {
                                    at: i
                                })
                            }
                        }
                    }, r.apply = t => {
                        var a = [],
                            o = [],
                            i = Q.get(r);
                        if (null !== i && void 0 !== i && i.length) {
                            var l = i.map((e => Be(e, t))).filter(Boolean);
                            Q.set(r, l)
                        }
                        var s = te.get(r);
                        s && te.set(r, Pe(r, s, t));
                        var c = ee.get(r);
                        if (null !== c && void 0 !== c && c.at) {
                            var u = d.E9.isPoint(null === c || void 0 === c ? void 0 : c.at) ? Se(r, c.at, t) : Pe(r, c.at, t);
                            ee.set(r, u ? zt(zt({}, c), {}, {
                                at: u
                            }) : null)
                        }
                        switch (t.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                            case "split_node":
                                a.push(...Kt(r, t.path));
                                break;
                            case "set_selection":
                                var f;
                                null === (f = K.get(r)) || void 0 === f || f.unref(), K.delete(r);
                                break;
                            case "insert_node":
                            case "remove_node":
                                a.push(...Kt(r, d.y$.parent(t.path)));
                                break;
                            case "merge_node":
                                var v = d.y$.previous(t.path);
                                a.push(...Kt(r, v));
                                break;
                            case "move_node":
                                var h, p = d.y$.common(d.y$.parent(t.path), d.y$.parent(t.newPath));
                                a.push(...Kt(r, p)), d.y$.isBefore(t.path, t.newPath) ? (a.push(...Kt(r, d.y$.parent(t.path))), h = t.newPath) : (a.push(...Kt(r, d.y$.parent(t.newPath))), h = t.path);
                                var g = d.NB.get(e, d.y$.parent(h)),
                                    m = xe.findKey(r, g),
                                    w = d.ML.pathRef(r, d.y$.parent(h));
                                o.push([w, m])
                        }
                        for (var [b, y] of (n(t), a)) {
                            var [M] = d.ML.node(r, b);
                            U.set(M, y)
                        }
                        for (var [x, k] of o)
                            if (x.current) {
                                var [E] = d.ML.node(r, x.current);
                                U.set(E, k)
                            }
                    }, r.setFragmentData = e => {
                        var {
                            selection: n
                        } = r;
                        if (n) {
                            var [a, o] = d.e6.edges(n), i = d.ML.void(r, {
                                at: a.path
                            }), l = d.ML.void(r, {
                                at: o.path
                            });
                            if (!d.e6.isCollapsed(n) || i) {
                                var s = xe.toDOMRange(r, n),
                                    c = s.cloneContents(),
                                    u = c.childNodes[0];
                                if (c.childNodes.forEach((e => {
                                        e.textContent && "" !== e.textContent.trim() && (u = e)
                                    })), l) {
                                    var [f] = l, v = s.cloneRange(), h = xe.toDOMNode(r, f);
                                    v.setEndAfter(h), c = v.cloneContents()
                                }
                                if (i && (u = c.querySelector("[data-slate-spacer]")), Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach((e => {
                                        var t = "n" === e.getAttribute("data-slate-zero-width");
                                        e.textContent = t ? "\n" : ""
                                    })), ue(u)) {
                                    var p = u.ownerDocument.createElement("span");
                                    p.style.whiteSpace = "pre", p.appendChild(u), c.appendChild(p), u = p
                                }
                                var g = r.getFragment(),
                                    m = JSON.stringify(g),
                                    w = window.btoa(encodeURIComponent(m));
                                u.setAttribute("data-slate-fragment", w), e.setData("application/".concat(t), w);
                                var b = c.ownerDocument.createElement("div");
                                return b.appendChild(c), b.setAttribute("hidden", "true"), c.ownerDocument.body.appendChild(b), e.setData("text/html", b.innerHTML), e.setData("text/plain", he(b)), c.ownerDocument.body.removeChild(b), e
                            }
                        }
                    }, r.insertData = e => {
                        r.insertFragmentData(e) || r.insertTextData(e)
                    }, r.insertFragmentData = e => {
                        var n = e.getData("application/".concat(t)) || ge(e);
                        if (n) {
                            var a = decodeURIComponent(window.atob(n)),
                                o = JSON.parse(a);
                            return r.insertFragment(o), !0
                        }
                        return !1
                    }, r.insertTextData = e => {
                        var t = e.getData("text/plain");
                        if (t) {
                            var n = t.split(/\r\n|\r|\n/),
                                a = !1;
                            for (var o of n) a && d.YR.splitNodes(r, {
                                always: !0
                            }), r.insertText(o), a = !0;
                            return !0
                        }
                        return !1
                    }, r.onChange = e => {
                        (M < 18 ? f.unstable_batchedUpdates : e => e())((() => {
                            var t = X.get(r);
                            t && t(e), a(e)
                        }))
                    }, r
                },
                Kt = (e, t) => {
                    var r = [];
                    for (var [n, a] of d.ML.levels(e, {
                            at: t
                        })) {
                        var o = xe.findKey(e, n);
                        r.push([a, o])
                    }
                    return r
                }
        }
    }
]);