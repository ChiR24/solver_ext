"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5762], {
        47421: function(t, e, i) {
            i.d(e, {
                $1: function() {
                    return fs
                },
                $f: function() {
                    return cs
                },
                AE: function() {
                    return js
                },
                Eu: function() {
                    return _o
                },
                HM: function() {
                    return As
                },
                HQ: function() {
                    return Jo
                },
                Nm: function() {
                    return bt
                },
                OO: function() {
                    return te
                },
                S2: function() {
                    return no
                },
                SJ: function() {
                    return Oo
                },
                Sd: function() {
                    return Co
                },
                Uw: function() {
                    return ks
                },
                W$: function() {
                    return Zs
                },
                ZO: function() {
                    return Gs
                },
                Zs: function() {
                    return io
                },
                bF: function() {
                    return yo
                },
                gB: function() {
                    return xo
                },
                hJ: function() {
                    return go
                },
                l9: function() {
                    return nt
                },
                lg: function() {
                    return oe
                },
                mH: function() {
                    return Do
                },
                p: function() {
                    return lt
                },
                qr: function() {
                    return Vs
                },
                tk: function() {
                    return is
                },
                v5: function() {
                    return Po
                }
            });
            var s = i(78120),
                o = i(28699),
                n = i(81754);

            function r(t) {
                let e;
                return e = 11 == t.nodeType ? t.getSelection ? t : t.ownerDocument : t, e.getSelection()
            }

            function l(t, e) {
                return !!e && (t == e || t.contains(1 != e.nodeType ? e.parentNode : e))
            }

            function h(t, e) {
                if (!e.anchorNode) return !1;
                try {
                    return l(t, e.anchorNode)
                } catch (i) {
                    return !1
                }
            }

            function a(t) {
                return 3 == t.nodeType ? S(t, 0, t.nodeValue.length).getClientRects() : 1 == t.nodeType ? t.getClientRects() : []
            }

            function c(t, e, i, s) {
                return !!i && (f(t, e, i, s, -1) || f(t, e, i, s, 1))
            }

            function d(t) {
                for (var e = 0;; e++)
                    if (!(t = t.previousSibling)) return e
            }

            function u(t) {
                return 1 == t.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)
            }

            function f(t, e, i, s, o) {
                for (;;) {
                    if (t == i && e == s) return !0;
                    if (e == (o < 0 ? 0 : p(t))) {
                        if ("DIV" == t.nodeName) return !1;
                        let i = t.parentNode;
                        if (!i || 1 != i.nodeType) return !1;
                        e = d(t) + (o < 0 ? 0 : 1), t = i
                    } else {
                        if (1 != t.nodeType) return !1;
                        if (1 == (t = t.childNodes[e + (o < 0 ? -1 : 0)]).nodeType && "false" == t.contentEditable) return !1;
                        e = o < 0 ? p(t) : 0
                    }
                }
            }

            function p(t) {
                return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length
            }

            function g(t, e) {
                let i = e ? t.left : t.right;
                return {
                    left: i,
                    right: i,
                    top: t.top,
                    bottom: t.bottom
                }
            }

            function m(t) {
                let e = t.visualViewport;
                return e ? {
                    left: 0,
                    right: e.width,
                    top: 0,
                    bottom: e.height
                } : {
                    left: 0,
                    right: t.innerWidth,
                    top: 0,
                    bottom: t.innerHeight
                }
            }

            function v(t, e) {
                let i = e.width / t.offsetWidth,
                    s = e.height / t.offsetHeight;
                return (i > .995 && i < 1.005 || !isFinite(i) || Math.abs(e.width - t.offsetWidth) < 1) && (i = 1), (s > .995 && s < 1.005 || !isFinite(s) || Math.abs(e.height - t.offsetHeight) < 1) && (s = 1), {
                    scaleX: i,
                    scaleY: s
                }
            }
            class w {
                constructor() {
                    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
                }
                eq(t) {
                    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset
                }
                setRange(t) {
                    let {
                        anchorNode: e,
                        focusNode: i
                    } = t;
                    this.set(e, Math.min(t.anchorOffset, e ? p(e) : 0), i, Math.min(t.focusOffset, i ? p(i) : 0))
                }
                set(t, e, i, s) {
                    this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s
                }
            }
            let b, y = null;

            function x(t) {
                if (t.setActive) return t.setActive();
                if (y) return t.focus(y);
                let e = [];
                for (let i = t; i && (e.push(i, i.scrollTop, i.scrollLeft), i != i.ownerDocument); i = i.parentNode);
                if (t.focus(null == y ? {
                        get preventScroll() {
                            return y = {
                                preventScroll: !0
                            }, !0
                        }
                    } : void 0), !y) {
                    y = !1;
                    for (let t = 0; t < e.length;) {
                        let i = e[t++],
                            s = e[t++],
                            o = e[t++];
                        i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != o && (i.scrollLeft = o)
                    }
                }
            }

            function S(t, e, i = e) {
                let s = b || (b = document.createRange());
                return s.setEnd(t, i), s.setStart(t, e), s
            }

            function M(t, e, i, s) {
                let o = {
                    key: e,
                    code: e,
                    keyCode: i,
                    which: i,
                    cancelable: !0
                };
                s && ({
                    altKey: o.altKey,
                    ctrlKey: o.ctrlKey,
                    shiftKey: o.shiftKey,
                    metaKey: o.metaKey
                } = s);
                let n = new KeyboardEvent("keydown", o);
                n.synthetic = !0, t.dispatchEvent(n);
                let r = new KeyboardEvent("keyup", o);
                return r.synthetic = !0, t.dispatchEvent(r), n.defaultPrevented || r.defaultPrevented
            }

            function C(t) {
                for (; t.attributes.length;) t.removeAttributeNode(t.attributes[0])
            }

            function k(t) {
                return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4)
            }

            function A(t, e) {
                for (let i = t, s = e;;) {
                    if (3 == i.nodeType && s > 0) return {
                        node: i,
                        offset: s
                    };
                    if (1 == i.nodeType && s > 0) {
                        if ("false" == i.contentEditable) return null;
                        i = i.childNodes[s - 1], s = p(i)
                    } else {
                        if (!i.parentNode || u(i)) return null;
                        s = d(i), i = i.parentNode
                    }
                }
            }

            function T(t, e) {
                for (let i = t, s = e;;) {
                    if (3 == i.nodeType && s < i.nodeValue.length) return {
                        node: i,
                        offset: s
                    };
                    if (1 == i.nodeType && s < i.childNodes.length) {
                        if ("false" == i.contentEditable) return null;
                        i = i.childNodes[s], s = 0
                    } else {
                        if (!i.parentNode || u(i)) return null;
                        s = d(i) + 1, i = i.parentNode
                    }
                }
            }
            class D {
                constructor(t, e, i = !0) {
                    this.node = t, this.offset = e, this.precise = i
                }
                static before(t, e) {
                    return new D(t.parentNode, d(t), e)
                }
                static after(t, e) {
                    return new D(t.parentNode, d(t) + 1, e)
                }
            }
            const O = [];
            class E {
                constructor() {
                    this.parent = null, this.dom = null, this.flags = 2
                }
                get overrideDOMText() {
                    return null
                }
                get posAtStart() {
                    return this.parent ? this.parent.posBefore(this) : 0
                }
                get posAtEnd() {
                    return this.posAtStart + this.length
                }
                posBefore(t) {
                    let e = this.posAtStart;
                    for (let i of this.children) {
                        if (i == t) return e;
                        e += i.length + i.breakAfter
                    }
                    throw new RangeError("Invalid child in posBefore")
                }
                posAfter(t) {
                    return this.posBefore(t) + t.length
                }
                sync(t, e) {
                    if (2 & this.flags) {
                        let i, s = this.dom,
                            o = null;
                        for (let n of this.children) {
                            if (7 & n.flags) {
                                if (!n.dom && (i = o ? o.nextSibling : s.firstChild)) {
                                    let t = E.get(i);
                                    (!t || !t.parent && t.canReuseDOM(n)) && n.reuseDOM(i)
                                }
                                n.sync(t, e), n.flags &= -8
                            }
                            if (i = o ? o.nextSibling : s.firstChild, e && !e.written && e.node == s && i != n.dom && (e.written = !0), n.dom.parentNode == s)
                                for (; i && i != n.dom;) i = R(i);
                            else s.insertBefore(n.dom, i);
                            o = n.dom
                        }
                        for (i = o ? o.nextSibling : s.firstChild, i && e && e.node == s && (e.written = !0); i;) i = R(i)
                    } else if (1 & this.flags)
                        for (let i of this.children) 7 & i.flags && (i.sync(t, e), i.flags &= -8)
                }
                reuseDOM(t) {}
                localPosFromDOM(t, e) {
                    let i;
                    if (t == this.dom) i = this.dom.childNodes[e];
                    else {
                        let s = 0 == p(t) ? 0 : 0 == e ? -1 : 1;
                        for (;;) {
                            let e = t.parentNode;
                            if (e == this.dom) break;
                            0 == s && e.firstChild != e.lastChild && (s = t == e.firstChild ? -1 : 1), t = e
                        }
                        i = s < 0 ? t : t.nextSibling
                    }
                    if (i == this.dom.firstChild) return 0;
                    for (; i && !E.get(i);) i = i.nextSibling;
                    if (!i) return this.length;
                    for (let s = 0, o = 0;; s++) {
                        let t = this.children[s];
                        if (t.dom == i) return o;
                        o += t.length + t.breakAfter
                    }
                }
                domBoundsAround(t, e, i = 0) {
                    let s = -1,
                        o = -1,
                        n = -1,
                        r = -1;
                    for (let l = 0, h = i, a = i; l < this.children.length; l++) {
                        let i = this.children[l],
                            c = h + i.length;
                        if (h < t && c > e) return i.domBoundsAround(t, e, h);
                        if (c >= t && -1 == s && (s = l, o = h), h > e && i.dom.parentNode == this.dom) {
                            n = l, r = a;
                            break
                        }
                        a = c, h = c + i.breakAfter
                    }
                    return {
                        from: o,
                        to: r < 0 ? i + this.length : r,
                        startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
                        endDOM: n < this.children.length && n >= 0 ? this.children[n].dom : null
                    }
                }
                markDirty(t = !1) {
                    this.flags |= 2, this.markParentsDirty(t)
                }
                markParentsDirty(t) {
                    for (let e = this.parent; e; e = e.parent) {
                        if (t && (e.flags |= 2), 1 & e.flags) return;
                        e.flags |= 1, t = !1
                    }
                }
                setParent(t) {
                    this.parent != t && (this.parent = t, 7 & this.flags && this.markParentsDirty(!0))
                }
                setDOM(t) {
                    this.dom != t && (this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this)
                }
                get rootView() {
                    for (let t = this;;) {
                        let e = t.parent;
                        if (!e) return t;
                        t = e
                    }
                }
                replaceChildren(t, e, i = O) {
                    this.markDirty();
                    for (let s = t; s < e; s++) {
                        let t = this.children[s];
                        t.parent == this && i.indexOf(t) < 0 && t.destroy()
                    }
                    this.children.splice(t, e - t, ...i);
                    for (let s = 0; s < i.length; s++) i[s].setParent(this)
                }
                ignoreMutation(t) {
                    return !1
                }
                ignoreEvent(t) {
                    return !1
                }
                childCursor(t = this.length) {
                    return new B(this.children, t, this.children.length)
                }
                childPos(t, e = 1) {
                    return this.childCursor().findPos(t, e)
                }
                toString() {
                    let t = this.constructor.name.replace("View", "");
                    return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + ("Text" == t ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "")
                }
                static get(t) {
                    return t.cmView
                }
                get isEditable() {
                    return !0
                }
                get isWidget() {
                    return !1
                }
                get isHidden() {
                    return !1
                }
                merge(t, e, i, s, o, n) {
                    return !1
                }
                become(t) {
                    return !1
                }
                canReuseDOM(t) {
                    return t.constructor == this.constructor && !(8 & (this.flags | t.flags))
                }
                getSide() {
                    return 0
                }
                destroy() {
                    for (let t of this.children) t.parent == this && t.destroy();
                    this.parent = null
                }
            }

            function R(t) {
                let e = t.nextSibling;
                return t.parentNode.removeChild(t), e
            }
            E.prototype.breakAfter = 0;
            class B {
                constructor(t, e, i) {
                    this.children = t, this.pos = e, this.i = i, this.off = 0
                }
                findPos(t, e = 1) {
                    for (;;) {
                        if (t > this.pos || t == this.pos && (e > 0 || 0 == this.i || this.children[this.i - 1].breakAfter)) return this.off = t - this.pos, this;
                        let i = this.children[--this.i];
                        this.pos -= i.length + i.breakAfter
                    }
                }
            }

            function L(t, e, i, s, o, n, r, l, h) {
                let {
                    children: a
                } = t, c = a.length ? a[e] : null, d = n.length ? n[n.length - 1] : null, u = d ? d.breakAfter : r;
                if (!(e == s && c && !r && !u && n.length < 2 && c.merge(i, o, n.length ? d : null, 0 == i, l, h))) {
                    if (s < a.length) {
                        let t = a[s];
                        t && (o < t.length || t.breakAfter && (null === d || void 0 === d ? void 0 : d.breakAfter)) ? (e == s && (t = t.split(o), o = 0), !u && d && t.merge(0, o, d, !0, 0, h) ? n[n.length - 1] = t : ((o || t.children.length && !t.children[0].length) && t.merge(0, o, null, !1, 0, h), n.push(t))) : (null === t || void 0 === t ? void 0 : t.breakAfter) && (d ? d.breakAfter = 1 : r = 1), s++
                    }
                    for (c && (c.breakAfter = r, i > 0 && (!r && n.length && c.merge(i, c.length, n[0], !1, l, 0) ? c.breakAfter = n.shift().breakAfter : (i < c.length || c.children.length && 0 == c.children[c.children.length - 1].length) && c.merge(i, c.length, null, !1, l, 0), e++)); e < s && n.length;)
                        if (a[s - 1].become(n[n.length - 1])) s--, n.pop(), h = n.length ? 0 : l;
                        else {
                            if (!a[e].become(n[0])) break;
                            e++, n.shift(), l = n.length ? 0 : h
                        }!n.length && e && s < a.length && !a[e - 1].breakAfter && a[s].merge(0, 0, a[e - 1], !1, l, h) && e--, (e < s || n.length) && t.replaceChildren(e, s, n)
                }
            }

            function P(t, e, i, s, o, n) {
                let r = t.childCursor(),
                    {
                        i: l,
                        off: h
                    } = r.findPos(i, 1),
                    {
                        i: a,
                        off: c
                    } = r.findPos(e, -1),
                    d = e - i;
                for (let u of s) d += u.length;
                t.length += d, L(t, a, c, l, h, s, 0, o, n)
            }
            let H = "undefined" != typeof navigator ? navigator : {
                    userAgent: "",
                    vendor: "",
                    platform: ""
                },
                V = "undefined" != typeof document ? document : {
                    documentElement: {
                        style: {}
                    }
                };
            const N = /Edge\/(\d+)/.exec(H.userAgent),
                W = /MSIE \d/.test(H.userAgent),
                F = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(H.userAgent),
                z = !!(W || F || N),
                I = !z && /gecko\/(\d+)/i.test(H.userAgent),
                q = !z && /Chrome\/(\d+)/.exec(H.userAgent),
                K = "webkitFontSmoothing" in V.documentElement.style,
                j = !z && /Apple Computer/.test(H.vendor),
                $ = j && (/Mobile\/\w+/.test(H.userAgent) || H.maxTouchPoints > 2);
            var X = {
                mac: $ || /Mac/.test(H.platform),
                windows: /Win/.test(H.platform),
                linux: /Linux|X11/.test(H.platform),
                ie: z,
                ie_version: W ? V.documentMode || 6 : F ? +F[1] : N ? +N[1] : 0,
                gecko: I,
                gecko_version: I ? +(/Firefox\/(\d+)/.exec(H.userAgent) || [0, 0])[1] : 0,
                chrome: !!q,
                chrome_version: q ? +q[1] : 0,
                ios: $,
                android: /Android\b/.test(H.userAgent),
                webkit: K,
                safari: j,
                webkit_version: K ? +(/\bAppleWebKit\/(\d+)/.exec(H.userAgent) || [0, 0])[1] : 0,
                tabSize: null != V.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
            };
            class Y extends E {
                constructor(t) {
                    super(), this.text = t
                }
                get length() {
                    return this.text.length
                }
                createDOM(t) {
                    this.setDOM(t || document.createTextNode(this.text))
                }
                sync(t, e) {
                    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text)
                }
                reuseDOM(t) {
                    3 == t.nodeType && this.createDOM(t)
                }
                merge(t, e, i) {
                    return !(8 & this.flags || i && (!(i instanceof Y) || this.length - (e - t) + i.length > 256 || 8 & i.flags)) && (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), !0)
                }
                split(t) {
                    let e = new Y(this.text.slice(t));
                    return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= 8 & this.flags, e
                }
                localPosFromDOM(t, e) {
                    return t == this.dom ? e : e ? this.text.length : 0
                }
                domAtPos(t) {
                    return new D(this.dom, t)
                }
                domBoundsAround(t, e, i) {
                    return {
                        from: i,
                        to: i + this.length,
                        startDOM: this.dom,
                        endDOM: this.dom.nextSibling
                    }
                }
                coordsAt(t, e) {
                    return function(t, e, i) {
                        let s = t.nodeValue.length;
                        e > s && (e = s);
                        let o = e,
                            n = e,
                            r = 0;
                        0 == e && i < 0 || e == s && i >= 0 ? X.chrome || X.gecko || (e ? (o--, r = 1) : n < s && (n++, r = -1)) : i < 0 ? o-- : n < s && n++;
                        let l = S(t, o, n).getClientRects();
                        if (!l.length) return null;
                        let h = l[(r ? r < 0 : i >= 0) ? 0 : l.length - 1];
                        X.safari && !r && 0 == h.width && (h = Array.prototype.find.call(l, (t => t.width)) || h);
                        return r ? g(h, r < 0) : h || null
                    }(this.dom, t, e)
                }
            }
            class G extends E {
                constructor(t, e = [], i = 0) {
                    super(), this.mark = t, this.children = e, this.length = i;
                    for (let s of e) s.setParent(this)
                }
                setAttrs(t) {
                    if (C(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
                        for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
                    return t
                }
                canReuseDOM(t) {
                    return super.canReuseDOM(t) && !(8 & (this.flags | t.flags))
                }
                reuseDOM(t) {
                    t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.flags |= 6)
                }
                sync(t, e) {
                    this.dom ? 4 & this.flags && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e)
                }
                merge(t, e, i, s, o, n) {
                    return (!i || !(!(i instanceof G && i.mark.eq(this.mark)) || t && o <= 0 || e < this.length && n <= 0)) && (P(this, t, e, i ? i.children.slice() : [], o - 1, n - 1), this.markDirty(), !0)
                }
                split(t) {
                    let e = [],
                        i = 0,
                        s = -1,
                        o = 0;
                    for (let r of this.children) {
                        let n = i + r.length;
                        n > t && e.push(i < t ? r.split(t - i) : r), s < 0 && i >= t && (s = o), i = n, o++
                    }
                    let n = this.length - t;
                    return this.length = t, s > -1 && (this.children.length = s, this.markDirty()), new G(this.mark, e, n)
                }
                domAtPos(t) {
                    return Q(this, t)
                }
                coordsAt(t, e) {
                    return J(this, t, e)
                }
            }
            class _ extends E {
                static create(t, e, i) {
                    return new _(t, e, i)
                }
                constructor(t, e, i) {
                    super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null
                }
                split(t) {
                    let e = _.create(this.widget, this.length - t, this.side);
                    return this.length -= t, e
                }
                sync(t) {
                    this.dom && this.widget.updateDOM(this.dom, t) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"))
                }
                getSide() {
                    return this.side
                }
                merge(t, e, i, s, o, n) {
                    return !(i && (!(i instanceof _ && this.widget.compare(i.widget)) || t > 0 && o <= 0 || e < this.length && n <= 0)) && (this.length = t + (i ? i.length : 0) + (this.length - e), !0)
                }
                become(t) {
                    return t instanceof _ && t.side == this.side && this.widget.constructor == t.widget.constructor && (this.widget.compare(t.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, !0)
                }
                ignoreMutation() {
                    return !0
                }
                ignoreEvent(t) {
                    return this.widget.ignoreEvent(t)
                }
                get overrideDOMText() {
                    if (0 == this.length) return s.xv.empty;
                    let t = this;
                    for (; t.parent;) t = t.parent;
                    let {
                        view: e
                    } = t, i = e && e.state.doc, o = this.posAtStart;
                    return i ? i.slice(o, o + this.length) : s.xv.empty
                }
                domAtPos(t) {
                    return (this.length ? 0 == t : this.side > 0) ? D.before(this.dom) : D.after(this.dom, t == this.length)
                }
                domBoundsAround() {
                    return null
                }
                coordsAt(t, e) {
                    let i = this.widget.coordsAt(this.dom, t, e);
                    if (i) return i;
                    let s = this.dom.getClientRects(),
                        o = null;
                    if (!s.length) return null;
                    let n = this.side ? this.side < 0 : t > 0;
                    for (let r = n ? s.length - 1 : 0; o = s[r], !(t > 0 ? 0 == r : r == s.length - 1 || o.top < o.bottom); r += n ? -1 : 1);
                    return g(o, !n)
                }
                get isEditable() {
                    return !1
                }
                get isWidget() {
                    return !0
                }
                get isHidden() {
                    return this.widget.isHidden
                }
                destroy() {
                    super.destroy(), this.dom && this.widget.destroy(this.dom)
                }
            }
            class U extends E {
                constructor(t) {
                    super(), this.side = t
                }
                get length() {
                    return 0
                }
                merge() {
                    return !1
                }
                become(t) {
                    return t instanceof U && t.side == this.side
                }
                split() {
                    return new U(this.side)
                }
                sync() {
                    if (!this.dom) {
                        let t = document.createElement("img");
                        t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t)
                    }
                }
                getSide() {
                    return this.side
                }
                domAtPos(t) {
                    return this.side > 0 ? D.before(this.dom) : D.after(this.dom)
                }
                localPosFromDOM() {
                    return 0
                }
                domBoundsAround() {
                    return null
                }
                coordsAt(t) {
                    return this.dom.getBoundingClientRect()
                }
                get overrideDOMText() {
                    return s.xv.empty
                }
                get isHidden() {
                    return !0
                }
            }

            function Q(t, e) {
                let i = t.dom,
                    {
                        children: s
                    } = t,
                    o = 0;
                for (let n = 0; o < s.length; o++) {
                    let t = s[o],
                        r = n + t.length;
                    if (!(r == n && t.getSide() <= 0)) {
                        if (e > n && e < r && t.dom.parentNode == i) return t.domAtPos(e - n);
                        if (e <= n) break;
                        n = r
                    }
                }
                for (let n = o; n > 0; n--) {
                    let t = s[n - 1];
                    if (t.dom.parentNode == i) return t.domAtPos(t.length)
                }
                for (let n = o; n < s.length; n++) {
                    let t = s[n];
                    if (t.dom.parentNode == i) return t.domAtPos(0)
                }
                return new D(i, 0)
            }

            function Z(t, e, i) {
                let s, {
                    children: o
                } = t;
                i > 0 && e instanceof G && o.length && (s = o[o.length - 1]) instanceof G && s.mark.eq(e.mark) ? Z(s, e.children[0], i - 1) : (o.push(e), e.setParent(t)), t.length += e.length
            }

            function J(t, e, i) {
                let s = null,
                    o = -1,
                    n = null,
                    r = -1;
                ! function t(e, l) {
                    for (let h = 0, a = 0; h < e.children.length && a <= l; h++) {
                        let c = e.children[h],
                            d = a + c.length;
                        d >= l && (c.children.length ? t(c, l - a) : (!n || n.isHidden && i > 0) && (d > l || a == d && c.getSide() > 0) ? (n = c, r = l - a) : (a < l || a == d && c.getSide() < 0 && !c.isHidden) && (s = c, o = l - a)), a = d
                    }
                }(t, e);
                let l = (i < 0 ? s : n) || s || n;
                return l ? l.coordsAt(Math.max(0, l == s ? o : r), i) : function(t) {
                    let e = t.dom.lastChild;
                    if (!e) return t.dom.getBoundingClientRect();
                    let i = a(e);
                    return i[i.length - 1] || null
                }(t)
            }

            function tt(t, e) {
                for (let i in t) "class" == i && e.class ? e.class += " " + t.class : "style" == i && e.style ? e.style += ";" + t.style : e[i] = t[i];
                return e
            }
            Y.prototype.children = _.prototype.children = U.prototype.children = O;
            const et = Object.create(null);

            function it(t, e, i) {
                if (t == e) return !0;
                t || (t = et), e || (e = et);
                let s = Object.keys(t),
                    o = Object.keys(e);
                if (s.length - (i && s.indexOf(i) > -1 ? 1 : 0) != o.length - (i && o.indexOf(i) > -1 ? 1 : 0)) return !1;
                for (let n of s)
                    if (n != i && (-1 == o.indexOf(n) || t[n] !== e[n])) return !1;
                return !0
            }

            function st(t, e, i) {
                let s = !1;
                if (e)
                    for (let o in e) i && o in i || (s = !0, "style" == o ? t.style.cssText = "" : t.removeAttribute(o));
                if (i)
                    for (let o in i) e && e[o] == i[o] || (s = !0, "style" == o ? t.style.cssText = i[o] : t.setAttribute(o, i[o]));
                return s
            }

            function ot(t) {
                let e = Object.create(null);
                for (let i = 0; i < t.attributes.length; i++) {
                    let s = t.attributes[i];
                    e[s.name] = s.value
                }
                return e
            }
            class nt {
                eq(t) {
                    return !1
                }
                updateDOM(t, e) {
                    return !1
                }
                compare(t) {
                    return this == t || this.constructor == t.constructor && this.eq(t)
                }
                get estimatedHeight() {
                    return -1
                }
                get lineBreaks() {
                    return 0
                }
                ignoreEvent(t) {
                    return !0
                }
                coordsAt(t, e, i) {
                    return null
                }
                get isHidden() {
                    return !1
                }
                get editable() {
                    return !1
                }
                destroy(t) {}
            }
            var rt = function(t) {
                return t[t.Text = 0] = "Text", t[t.WidgetBefore = 1] = "WidgetBefore", t[t.WidgetAfter = 2] = "WidgetAfter", t[t.WidgetRange = 3] = "WidgetRange", t
            }(rt || (rt = {}));
            class lt extends s.uU {
                constructor(t, e, i, s) {
                    super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = s
                }
                get heightRelevant() {
                    return !1
                }
                static mark(t) {
                    return new ht(t)
                }
                static widget(t) {
                    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)),
                        i = !!t.block;
                    return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new ct(t, e, e, i, t.widget || null, !1)
                }
                static replace(t) {
                    let e, i, s = !!t.block;
                    if (t.isBlockGap) e = -5e8, i = 4e8;
                    else {
                        let {
                            start: o,
                            end: n
                        } = dt(t, s);
                        e = (o ? s ? -3e8 : -1 : 5e8) - 1, i = 1 + (n ? s ? 2e8 : 1 : -6e8)
                    }
                    return new ct(t, e, i, s, t.widget || null, !0)
                }
                static line(t) {
                    return new at(t)
                }
                static set(t, e = !1) {
                    return s.Xs.of(t, e)
                }
                hasHeight() {
                    return !!this.widget && this.widget.estimatedHeight > -1
                }
            }
            lt.none = s.Xs.empty;
            class ht extends lt {
                constructor(t) {
                    let {
                        start: e,
                        end: i
                    } = dt(t);
                    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null
                }
                eq(t) {
                    var e, i;
                    return this == t || t instanceof ht && this.tagName == t.tagName && (this.class || (null === (e = this.attrs) || void 0 === e ? void 0 : e.class)) == (t.class || (null === (i = t.attrs) || void 0 === i ? void 0 : i.class)) && it(this.attrs, t.attrs, "class")
                }
                range(t, e = t) {
                    if (t >= e) throw new RangeError("Mark decorations may not be empty");
                    return super.range(t, e)
                }
            }
            ht.prototype.point = !1;
            class at extends lt {
                constructor(t) {
                    super(-2e8, -2e8, null, t)
                }
                eq(t) {
                    return t instanceof at && this.spec.class == t.spec.class && it(this.spec.attributes, t.spec.attributes)
                }
                range(t, e = t) {
                    if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
                    return super.range(t, e)
                }
            }
            at.prototype.mapMode = s.gc.TrackBefore, at.prototype.point = !0;
            class ct extends lt {
                constructor(t, e, i, o, n, r) {
                    super(e, i, n, t), this.block = o, this.isReplace = r, this.mapMode = o ? e <= 0 ? s.gc.TrackBefore : s.gc.TrackAfter : s.gc.TrackDel
                }
                get type() {
                    return this.startSide != this.endSide ? rt.WidgetRange : this.startSide <= 0 ? rt.WidgetBefore : rt.WidgetAfter
                }
                get heightRelevant() {
                    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
                }
                eq(t) {
                    return t instanceof ct && (e = this.widget, i = t.widget, e == i || !!(e && i && e.compare(i))) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
                    var e, i
                }
                range(t, e = t) {
                    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
                    if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
                    return super.range(t, e)
                }
            }

            function dt(t, e = !1) {
                let {
                    inclusiveStart: i,
                    inclusiveEnd: s
                } = t;
                return null == i && (i = t.inclusive), null == s && (s = t.inclusive), {
                    start: null !== i && void 0 !== i ? i : e,
                    end: null !== s && void 0 !== s ? s : e
                }
            }

            function ut(t, e, i, s = 0) {
                let o = i.length - 1;
                o >= 0 && i[o] + s >= t ? i[o] = Math.max(i[o], e) : i.push(t, e)
            }
            ct.prototype.point = !0;
            class ft extends E {
                constructor() {
                    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0
                }
                merge(t, e, i, s, o, n) {
                    if (i) {
                        if (!(i instanceof ft)) return !1;
                        this.dom || i.transferDOM(this)
                    }
                    return s && this.setDeco(i ? i.attrs : null), P(this, t, e, i ? i.children.slice() : [], o, n), !0
                }
                split(t) {
                    let e = new ft;
                    if (e.breakAfter = this.breakAfter, 0 == this.length) return e;
                    let {
                        i: i,
                        off: s
                    } = this.childPos(t);
                    s && (e.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
                    for (let o = i; o < this.children.length; o++) e.append(this.children[o], 0);
                    for (; i > 0 && 0 == this.children[i - 1].length;) this.children[--i].destroy();
                    return this.children.length = i, this.markDirty(), this.length = t, e
                }
                transferDOM(t) {
                    this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null)
                }
                setDeco(t) {
                    it(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t)
                }
                append(t, e) {
                    Z(this, t, e)
                }
                addLineDeco(t) {
                    let e = t.spec.attributes,
                        i = t.spec.class;
                    e && (this.attrs = tt(e, this.attrs || {})), i && (this.attrs = tt({
                        class: i
                    }, this.attrs || {}))
                }
                domAtPos(t) {
                    return Q(this, t)
                }
                reuseDOM(t) {
                    "DIV" == t.nodeName && (this.setDOM(t), this.flags |= 6)
                }
                sync(t, e) {
                    var i;
                    this.dom ? 4 & this.flags && (C(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), void 0 !== this.prevAttrs && (st(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
                    let s = this.dom.lastChild;
                    for (; s && E.get(s) instanceof G;) s = s.lastChild;
                    if (!s || !this.length || "BR" != s.nodeName && 0 == (null === (i = E.get(s)) || void 0 === i ? void 0 : i.isEditable) && (!X.ios || !this.children.some((t => t instanceof Y)))) {
                        let t = document.createElement("BR");
                        t.cmIgnore = !0, this.dom.appendChild(t)
                    }
                }
                measureTextSize() {
                    if (0 == this.children.length || this.length > 20) return null;
                    let t, e = 0;
                    for (let i of this.children) {
                        if (!(i instanceof Y) || /[^ -~]/.test(i.text)) return null;
                        let s = a(i.dom);
                        if (1 != s.length) return null;
                        e += s[0].width, t = s[0].height
                    }
                    return e ? {
                        lineHeight: this.dom.getBoundingClientRect().height,
                        charWidth: e / this.length,
                        textHeight: t
                    } : null
                }
                coordsAt(t, e) {
                    let i = J(this, t, e);
                    if (!this.children.length && i && this.parent) {
                        let {
                            heightOracle: t
                        } = this.parent.view.viewState, e = i.bottom - i.top;
                        if (Math.abs(e - t.lineHeight) < 2 && t.textHeight < e) {
                            let s = (e - t.textHeight) / 2;
                            return {
                                top: i.top + s,
                                bottom: i.bottom - s,
                                left: i.left,
                                right: i.left
                            }
                        }
                    }
                    return i
                }
                become(t) {
                    return t instanceof ft && 0 == this.children.length && 0 == t.children.length && it(this.attrs, t.attrs) && this.breakAfter == t.breakAfter
                }
                covers() {
                    return !0
                }
                static find(t, e) {
                    for (let i = 0, s = 0; i < t.children.length; i++) {
                        let o = t.children[i],
                            n = s + o.length;
                        if (n >= e) {
                            if (o instanceof ft) return o;
                            if (n > e) break
                        }
                        s = n + o.breakAfter
                    }
                    return null
                }
            }
            class pt extends E {
                constructor(t, e, i) {
                    super(), this.widget = t, this.length = e, this.deco = i, this.breakAfter = 0, this.prevWidget = null
                }
                merge(t, e, i, s, o, n) {
                    return !(i && (!(i instanceof pt && this.widget.compare(i.widget)) || t > 0 && o <= 0 || e < this.length && n <= 0)) && (this.length = t + (i ? i.length : 0) + (this.length - e), !0)
                }
                domAtPos(t) {
                    return 0 == t ? D.before(this.dom) : D.after(this.dom, t == this.length)
                }
                split(t) {
                    let e = this.length - t;
                    this.length = t;
                    let i = new pt(this.widget, e, this.deco);
                    return i.breakAfter = this.breakAfter, i
                }
                get children() {
                    return O
                }
                sync(t) {
                    this.dom && this.widget.updateDOM(this.dom, t) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"))
                }
                get overrideDOMText() {
                    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : s.xv.empty
                }
                domBoundsAround() {
                    return null
                }
                become(t) {
                    return t instanceof pt && t.widget.constructor == this.widget.constructor && (t.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, !0)
                }
                ignoreMutation() {
                    return !0
                }
                ignoreEvent(t) {
                    return this.widget.ignoreEvent(t)
                }
                get isEditable() {
                    return !1
                }
                get isWidget() {
                    return !0
                }
                coordsAt(t, e) {
                    let i = this.widget.coordsAt(this.dom, t, e);
                    return i || (this.widget instanceof gt ? null : g(this.dom.getBoundingClientRect(), this.length ? 0 == t : e <= 0))
                }
                destroy() {
                    super.destroy(), this.dom && this.widget.destroy(this.dom)
                }
                covers(t) {
                    let {
                        startSide: e,
                        endSide: i
                    } = this.deco;
                    return e != i && (t < 0 ? e < 0 : i > 0)
                }
            }
            class gt extends nt {
                constructor(t) {
                    super(), this.height = t
                }
                toDOM() {
                    let t = document.createElement("div");
                    return t.className = "cm-gap", this.updateDOM(t), t
                }
                eq(t) {
                    return t.height == this.height
                }
                updateDOM(t) {
                    return t.style.height = this.height + "px", !0
                }
                get editable() {
                    return !0
                }
                get estimatedHeight() {
                    return this.height
                }
                ignoreEvent() {
                    return !1
                }
            }
            class mt {
                constructor(t, e, i, s) {
                    this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e
                }
                posCovered() {
                    if (0 == this.content.length) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
                    let t = this.content[this.content.length - 1];
                    return !(t.breakAfter || t instanceof pt && t.deco.endSide < 0)
                }
                getLine() {
                    return this.curLine || (this.content.push(this.curLine = new ft), this.atCursorPos = !0), this.curLine
                }
                flushBuffer(t = this.bufferMarks) {
                    this.pendingBuffer && (this.curLine.append(vt(new U(-1), t), t.length), this.pendingBuffer = 0)
                }
                addBlockWidget(t) {
                    this.flushBuffer(), this.curLine = null, this.content.push(t)
                }
                finish(t) {
                    this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || t && this.content.length && this.content[this.content.length - 1] instanceof pt || this.getLine()
                }
                buildText(t, e, i) {
                    for (; t > 0;) {
                        if (this.textOff == this.text.length) {
                            let {
                                value: e,
                                lineBreak: i,
                                done: s
                            } = this.cursor.next(this.skip);
                            if (this.skip = 0, s) throw new Error("Ran out of text content when drawing inline views");
                            if (i) {
                                this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, t--;
                                continue
                            }
                            this.text = e, this.textOff = 0
                        }
                        let s = Math.min(this.text.length - this.textOff, t, 512);
                        this.flushBuffer(e.slice(e.length - i)), this.getLine().append(vt(new Y(this.text.slice(this.textOff, this.textOff + s)), e), i), this.atCursorPos = !0, this.textOff += s, t -= s, i = 0
                    }
                }
                span(t, e, i, s) {
                    this.buildText(e - t, i, s), this.pos = e, this.openStart < 0 && (this.openStart = s)
                }
                point(t, e, i, s, o, n) {
                    if (this.disallowBlockEffectsFor[n] && i instanceof ct) {
                        if (i.block) throw new RangeError("Block decorations may not be specified via plugins");
                        if (e > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                    }
                    let r = e - t;
                    if (i instanceof ct)
                        if (i.block) i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new pt(i.widget || wt.block, r, i));
                        else {
                            let n = _.create(i.widget || wt.inline, r, r ? 0 : i.startSide),
                                l = this.atCursorPos && !n.isEditable && o <= s.length && (t < e || i.startSide > 0),
                                h = !n.isEditable && (t < e || o > s.length || i.startSide <= 0),
                                a = this.getLine();
                            2 != this.pendingBuffer || l || n.isEditable || (this.pendingBuffer = 0), this.flushBuffer(s), l && (a.append(vt(new U(1), s), o), o = s.length + Math.max(0, o - s.length)), a.append(vt(n, s), o), this.atCursorPos = h, this.pendingBuffer = h ? t < e || o > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice())
                        }
                    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
                    r && (this.textOff + r <= this.text.length ? this.textOff += r : (this.skip += r - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = o)
                }
                static build(t, e, i, o, n) {
                    let r = new mt(t, e, i, n);
                    return r.openEnd = s.Xs.spans(o, e, i, r), r.openStart < 0 && (r.openStart = r.openEnd), r.finish(r.openEnd), r
                }
            }

            function vt(t, e) {
                for (let i of e) t = new G(i, [t], t.length);
                return t
            }
            class wt extends nt {
                constructor(t) {
                    super(), this.tag = t
                }
                eq(t) {
                    return t.tag == this.tag
                }
                toDOM() {
                    return document.createElement(this.tag)
                }
                updateDOM(t) {
                    return t.nodeName.toLowerCase() == this.tag
                }
                get isHidden() {
                    return !0
                }
            }
            wt.inline = new wt("span"), wt.block = new wt("div");
            var bt = function(t) {
                return t[t.LTR = 0] = "LTR", t[t.RTL = 1] = "RTL", t
            }(bt || (bt = {}));
            const yt = bt.LTR,
                xt = bt.RTL;

            function St(t) {
                let e = [];
                for (let i = 0; i < t.length; i++) e.push(1 << +t[i]);
                return e
            }
            const Mt = St("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
                Ct = St("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
                kt = Object.create(null),
                At = [];
            for (let tn of ["()", "[]", "{}"]) {
                let t = tn.charCodeAt(0),
                    e = tn.charCodeAt(1);
                kt[t] = e, kt[e] = -t
            }

            function Tt(t) {
                return t <= 247 ? Mt[t] : 1424 <= t && t <= 1524 ? 2 : 1536 <= t && t <= 1785 ? Ct[t - 1536] : 1774 <= t && t <= 2220 ? 4 : 8192 <= t && t <= 8204 ? 256 : 64336 <= t && t <= 65023 ? 4 : 1
            }
            const Dt = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
            class Ot {
                get dir() {
                    return this.level % 2 ? xt : yt
                }
                constructor(t, e, i) {
                    this.from = t, this.to = e, this.level = i
                }
                side(t, e) {
                    return this.dir == e == t ? this.to : this.from
                }
                forward(t, e) {
                    return t == (this.dir == e)
                }
                static find(t, e, i, s) {
                    let o = -1;
                    for (let n = 0; n < t.length; n++) {
                        let r = t[n];
                        if (r.from <= e && r.to >= e) {
                            if (r.level == i) return n;
                            (o < 0 || (0 != s ? s < 0 ? r.from < e : r.to > e : t[o].level > r.level)) && (o = n)
                        }
                    }
                    if (o < 0) throw new RangeError("Index out of range");
                    return o
                }
            }

            function Et(t, e) {
                if (t.length != e.length) return !1;
                for (let i = 0; i < t.length; i++) {
                    let s = t[i],
                        o = e[i];
                    if (s.from != o.from || s.to != o.to || s.direction != o.direction || !Et(s.inner, o.inner)) return !1
                }
                return !0
            }
            const Rt = [];

            function Bt(t, e, i, s, o, n, r) {
                let l = s % 2 ? 2 : 1;
                if (s % 2 == o % 2)
                    for (let h = e, a = 0; h < i;) {
                        let e = !0,
                            c = !1;
                        if (a == n.length || h < n[a].from) {
                            let t = Rt[h];
                            t != l && (e = !1, c = 16 == t)
                        }
                        let d = e || 1 != l ? null : [],
                            u = e ? s : s + 1,
                            f = h;
                        t: for (;;)
                            if (a < n.length && f == n[a].from) {
                                if (c) break t;
                                let p = n[a];
                                if (!e)
                                    for (let t = p.to, e = a + 1;;) {
                                        if (t == i) break t;
                                        if (!(e < n.length && n[e].from == t)) {
                                            if (Rt[t] == l) break t;
                                            break
                                        }
                                        t = n[e++].to
                                    }
                                if (a++, d) d.push(p);
                                else {
                                    p.from > h && r.push(new Ot(h, p.from, u)), Lt(t, p.direction == yt != !(u % 2) ? s + 1 : s, o, p.inner, p.from, p.to, r), h = p.to
                                }
                                f = p.to
                            } else {
                                if (f == i || (e ? Rt[f] != l : Rt[f] == l)) break;
                                f++
                            }
                        d ? Bt(t, h, f, s + 1, o, d, r) : h < f && r.push(new Ot(h, f, u)), h = f
                    } else
                        for (let h = i, a = n.length; h > e;) {
                            let i = !0,
                                c = !1;
                            if (!a || h > n[a - 1].to) {
                                let t = Rt[h - 1];
                                t != l && (i = !1, c = 16 == t)
                            }
                            let d = i || 1 != l ? null : [],
                                u = i ? s : s + 1,
                                f = h;
                            t: for (;;)
                                if (a && f == n[a - 1].to) {
                                    if (c) break t;
                                    let p = n[--a];
                                    if (!i)
                                        for (let t = p.from, i = a;;) {
                                            if (t == e) break t;
                                            if (!i || n[i - 1].to != t) {
                                                if (Rt[t - 1] == l) break t;
                                                break
                                            }
                                            t = n[--i].from
                                        }
                                    if (d) d.push(p);
                                    else {
                                        p.to < h && r.push(new Ot(p.to, h, u)), Lt(t, p.direction == yt != !(u % 2) ? s + 1 : s, o, p.inner, p.from, p.to, r), h = p.from
                                    }
                                    f = p.from
                                } else {
                                    if (f == e || (i ? Rt[f - 1] != l : Rt[f - 1] == l)) break;
                                    f--
                                }
                            d ? Bt(t, f, h, s + 1, o, d, r) : f < h && r.push(new Ot(f, h, u)), h = f
                        }
            }

            function Lt(t, e, i, s, o, n, r) {
                let l = e % 2 ? 2 : 1;
                ! function(t, e, i, s, o) {
                    for (let n = 0; n <= s.length; n++) {
                        let r = n ? s[n - 1].to : e,
                            l = n < s.length ? s[n].from : i,
                            h = n ? 256 : o;
                        for (let e = r, i = h, s = h; e < l; e++) {
                            let o = Tt(t.charCodeAt(e));
                            512 == o ? o = i : 8 == o && 4 == s && (o = 16), Rt[e] = 4 == o ? 2 : o, 7 & o && (s = o), i = o
                        }
                        for (let t = r, e = h, s = h; t < l; t++) {
                            let o = Rt[t];
                            if (128 == o) t < l - 1 && e == Rt[t + 1] && 24 & e ? o = Rt[t] = e : Rt[t] = 256;
                            else if (64 == o) {
                                let o = t + 1;
                                for (; o < l && 64 == Rt[o];) o++;
                                let n = t && 8 == e || o < i && 8 == Rt[o] ? 1 == s ? 1 : 8 : 256;
                                for (let e = t; e < o; e++) Rt[e] = n;
                                t = o - 1
                            } else 8 == o && 1 == s && (Rt[t] = 1);
                            e = o, 7 & o && (s = o)
                        }
                    }
                }(t, o, n, s, l),
                function(t, e, i, s, o) {
                    let n = 1 == o ? 2 : 1;
                    for (let r = 0, l = 0, h = 0; r <= s.length; r++) {
                        let a = r ? s[r - 1].to : e,
                            c = r < s.length ? s[r].from : i;
                        for (let e, i, s, r = a; r < c; r++)
                            if (i = kt[e = t.charCodeAt(r)])
                                if (i < 0) {
                                    for (let t = l - 3; t >= 0; t -= 3)
                                        if (At[t + 1] == -i) {
                                            let e = At[t + 2],
                                                i = 2 & e ? o : 4 & e ? 1 & e ? n : o : 0;
                                            i && (Rt[r] = Rt[At[t]] = i), l = t;
                                            break
                                        }
                                } else {
                                    if (189 == At.length) break;
                                    At[l++] = r, At[l++] = e, At[l++] = h
                                }
                        else if (2 == (s = Rt[r]) || 1 == s) {
                            let t = s == o;
                            h = t ? 0 : 1;
                            for (let e = l - 3; e >= 0; e -= 3) {
                                let i = At[e + 2];
                                if (2 & i) break;
                                if (t) At[e + 2] |= 2;
                                else {
                                    if (4 & i) break;
                                    At[e + 2] |= 4
                                }
                            }
                        }
                    }
                }(t, o, n, s, l),
                function(t, e, i, s) {
                    for (let o = 0, n = s; o <= i.length; o++) {
                        let r = o ? i[o - 1].to : t,
                            l = o < i.length ? i[o].from : e;
                        for (let h = r; h < l;) {
                            let r = Rt[h];
                            if (256 == r) {
                                let r = h + 1;
                                for (;;)
                                    if (r == l) {
                                        if (o == i.length) break;
                                        r = i[o++].to, l = o < i.length ? i[o].from : e
                                    } else {
                                        if (256 != Rt[r]) break;
                                        r++
                                    }
                                let a = 1 == n,
                                    c = a == (1 == (r < e ? Rt[r] : s)) ? a ? 1 : 2 : s;
                                for (let e = r, s = o, n = s ? i[s - 1].to : t; e > h;) e == n && (e = i[--s].from, n = s ? i[s - 1].to : t), Rt[--e] = c;
                                h = r
                            } else n = r, h++
                        }
                    }
                }(o, n, s, l), Bt(t, o, n, e, i, s, r)
            }

            function Pt(t, e, i) {
                if (!t) return [new Ot(0, 0, e == xt ? 1 : 0)];
                if (e == yt && !i.length && !Dt.test(t)) return Ht(t.length);
                if (i.length)
                    for (; t.length > Rt.length;) Rt[Rt.length] = 256;
                let s = [],
                    o = e == yt ? 0 : 1;
                return Lt(t, o, o, i, 0, t.length, s), s
            }

            function Ht(t) {
                return [new Ot(0, t, 0)]
            }
            let Vt = "";

            function Nt(t, e, i, o, n) {
                var r;
                let l = o.head - t.from,
                    h = Ot.find(e, l, null !== (r = o.bidiLevel) && void 0 !== r ? r : -1, o.assoc),
                    a = e[h],
                    c = a.side(n, i);
                if (l == c) {
                    let t = h += n ? 1 : -1;
                    if (t < 0 || t >= e.length) return null;
                    a = e[h = t], l = a.side(!n, i), c = a.side(n, i)
                }
                let d = (0, s.cp)(t.text, l, a.forward(n, i));
                (d < a.from || d > a.to) && (d = c), Vt = t.text.slice(Math.min(l, d), Math.max(l, d));
                let u = h == (n ? e.length - 1 : 0) ? null : e[h + (n ? 1 : -1)];
                return u && d == c && u.level + (n ? 0 : 1) < a.level ? s.jT.cursor(u.side(!n, i) + t.from, u.forward(n, i) ? 1 : -1, u.level) : s.jT.cursor(d + t.from, a.forward(n, i) ? -1 : 1, a.level)
            }

            function Wt(t, e, i) {
                for (let s = e; s < i; s++) {
                    let e = Tt(t.charCodeAt(s));
                    if (1 == e) return yt;
                    if (2 == e || 4 == e) return xt
                }
                return yt
            }
            const Ft = s.r$.define(),
                zt = s.r$.define(),
                It = s.r$.define(),
                qt = s.r$.define(),
                Kt = s.r$.define(),
                jt = s.r$.define(),
                $t = s.r$.define(),
                Xt = s.r$.define(),
                Yt = s.r$.define(),
                Gt = s.r$.define({
                    combine: t => t.some((t => t))
                }),
                _t = s.r$.define({
                    combine: t => t.some((t => t))
                }),
                Ut = s.r$.define();
            class Qt {
                constructor(t, e = "nearest", i = "nearest", s = 5, o = 5, n = !1) {
                    this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = o, this.isSnapshot = n
                }
                map(t) {
                    return t.empty ? this : new Qt(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
                }
                clip(t) {
                    return this.range.to <= t.doc.length ? this : new Qt(s.jT.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
                }
            }
            const Zt = s.Py.define({
                    map: (t, e) => t.map(e)
                }),
                Jt = s.Py.define();

            function te(t, e, i) {
                let s = t.facet(qt);
                s.length ? s[0](e) : window.onerror ? window.onerror(String(e), i, void 0, void 0, e) : i ? console.error(i + ":", e) : console.error(e)
            }
            const ee = s.r$.define({
                combine: t => !t.length || t[0]
            });
            let ie = 0;
            const se = s.r$.define();
            class oe {
                constructor(t, e, i, s, o) {
                    this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = s, this.extension = o(this)
                }
                static define(t, e) {
                    const {
                        eventHandlers: i,
                        eventObservers: s,
                        provide: o,
                        decorations: n
                    } = e || {};
                    return new oe(ie++, t, i, s, (t => {
                        let e = [se.of(t)];
                        return n && e.push(he.of((e => {
                            let i = e.plugin(t);
                            return i ? n(i) : lt.none
                        }))), o && e.push(o(t)), e
                    }))
                }
                static fromClass(t, e) {
                    return oe.define((e => new t(e)), e)
                }
            }
            class ne {
                constructor(t) {
                    this.spec = t, this.mustUpdate = null, this.value = null
                }
                update(t) {
                    if (this.value) {
                        if (this.mustUpdate) {
                            let t = this.mustUpdate;
                            if (this.mustUpdate = null, this.value.update) try {
                                this.value.update(t)
                            } catch (e) {
                                if (te(t.state, e, "CodeMirror plugin crashed"), this.value.destroy) try {
                                    this.value.destroy()
                                } catch (i) {}
                                this.deactivate()
                            }
                        }
                    } else if (this.spec) try {
                        this.value = this.spec.create(t)
                    } catch (e) {
                        te(t.state, e, "CodeMirror plugin crashed"), this.deactivate()
                    }
                    return this
                }
                destroy(t) {
                    var e;
                    if (null === (e = this.value) || void 0 === e ? void 0 : e.destroy) try {
                        this.value.destroy()
                    } catch (i) {
                        te(t.state, i, "CodeMirror plugin crashed")
                    }
                }
                deactivate() {
                    this.spec = this.value = null
                }
            }
            const re = s.r$.define(),
                le = s.r$.define(),
                he = s.r$.define(),
                ae = s.r$.define(),
                ce = s.r$.define(),
                de = s.r$.define();

            function ue(t, e) {
                let i = t.state.facet(de);
                if (!i.length) return i;
                let o = i.map((e => e instanceof Function ? e(t) : e)),
                    n = [];
                return s.Xs.spans(o, e.from, e.to, {
                    point() {},
                    span(t, i, s, o) {
                        let r = t - e.from,
                            l = i - e.from,
                            h = n;
                        for (let n = s.length - 1; n >= 0; n--, o--) {
                            let t, i = s[n].spec.bidiIsolate;
                            if (null == i && (i = Wt(e.text, r, l)), o > 0 && h.length && (t = h[h.length - 1]).to == r && t.direction == i) t.to = l, h = t.inner;
                            else {
                                let t = {
                                    from: r,
                                    to: l,
                                    direction: i,
                                    inner: []
                                };
                                h.push(t), h = t.inner
                            }
                        }
                    }
                }), n
            }
            const fe = s.r$.define();

            function pe(t) {
                let e = 0,
                    i = 0,
                    s = 0,
                    o = 0;
                for (let n of t.state.facet(fe)) {
                    let r = n(t);
                    r && (null != r.left && (e = Math.max(e, r.left)), null != r.right && (i = Math.max(i, r.right)), null != r.top && (s = Math.max(s, r.top)), null != r.bottom && (o = Math.max(o, r.bottom)))
                }
                return {
                    left: e,
                    right: i,
                    top: s,
                    bottom: o
                }
            }
            const ge = s.r$.define();
            class me {
                constructor(t, e, i, s) {
                    this.fromA = t, this.toA = e, this.fromB = i, this.toB = s
                }
                join(t) {
                    return new me(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB))
                }
                addToSet(t) {
                    let e = t.length,
                        i = this;
                    for (; e > 0; e--) {
                        let s = t[e - 1];
                        if (!(s.fromA > i.toA)) {
                            if (s.toA < i.fromA) break;
                            i = i.join(s), t.splice(e - 1, 1)
                        }
                    }
                    return t.splice(e, 0, i), t
                }
                static extendWithRanges(t, e) {
                    if (0 == e.length) return t;
                    let i = [];
                    for (let s = 0, o = 0, n = 0, r = 0;; s++) {
                        let l = s == t.length ? null : t[s],
                            h = n - r,
                            a = l ? l.fromB : 1e9;
                        for (; o < e.length && e[o] < a;) {
                            let t = e[o],
                                s = e[o + 1],
                                n = Math.max(r, t),
                                l = Math.min(a, s);
                            if (n <= l && new me(n + h, l + h, n, l).addToSet(i), s > a) break;
                            o += 2
                        }
                        if (!l) return i;
                        new me(l.fromA, l.toA, l.fromB, l.toB).addToSet(i), n = l.toA, r = l.toB
                    }
                }
            }
            class ve {
                constructor(t, e, i) {
                    this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = s.as.empty(this.startState.doc.length);
                    for (let s of i) this.changes = this.changes.compose(s.changes);
                    let o = [];
                    this.changes.iterChangedRanges(((t, e, i, s) => o.push(new me(t, e, i, s)))), this.changedRanges = o
                }
                static create(t, e, i) {
                    return new ve(t, e, i)
                }
                get viewportChanged() {
                    return (4 & this.flags) > 0
                }
                get heightChanged() {
                    return (2 & this.flags) > 0
                }
                get geometryChanged() {
                    return this.docChanged || (10 & this.flags) > 0
                }
                get focusChanged() {
                    return (1 & this.flags) > 0
                }
                get docChanged() {
                    return !this.changes.empty
                }
                get selectionSet() {
                    return this.transactions.some((t => t.selection))
                }
                get empty() {
                    return 0 == this.flags && 0 == this.transactions.length
                }
            }
            class we extends E {
                get length() {
                    return this.view.state.doc.length
                }
                constructor(t) {
                    super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = new Set, this.editContextFormatting = lt.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new ft], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new me(0, 0, 0, t.state.doc.length)], 0, null)
                }
                update(t) {
                    var e;
                    let i = t.changedRanges;
                    this.minWidth > 0 && i.length && (i.every((({
                        fromA: t,
                        toA: e
                    }) => e < this.minWidthFrom || t > this.minWidthTo)) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
                    let o = -1;
                    this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (e = this.domChanged) || void 0 === e ? void 0 : e.newSel) ? o = this.domChanged.newSel.head : function(t, e) {
                        let i = !1;
                        e && t.iterChangedRanges(((t, s) => {
                            t < e.to && s > e.from && (i = !0)
                        }));
                        return i
                    }(t.changes, this.hasComposition) || t.selectionSet || (o = t.state.selection.main.head));
                    let n = o > -1 ? function(t, e, i) {
                        let s = be(t, i);
                        if (!s) return null;
                        let {
                            node: o,
                            from: n,
                            to: r
                        } = s, l = o.nodeValue;
                        if (/[\n\r]/.test(l)) return null;
                        if (t.state.doc.sliceString(s.from, s.to) != l) return null;
                        let h = e.invertedDesc,
                            a = new me(h.mapPos(n), h.mapPos(r), n, r),
                            c = [];
                        for (let d = o.parentNode;; d = d.parentNode) {
                            let e = E.get(d);
                            if (e instanceof G) c.push({
                                node: d,
                                deco: e.mark
                            });
                            else {
                                if (e instanceof ft || "DIV" == d.nodeName && d.parentNode == t.contentDOM) return {
                                    range: a,
                                    text: o,
                                    marks: c,
                                    line: d
                                };
                                if (d == t.contentDOM) return null;
                                c.push({
                                    node: d,
                                    deco: new ht({
                                        inclusive: !0,
                                        attributes: ot(d),
                                        tagName: d.tagName.toLowerCase()
                                    })
                                })
                            }
                        }
                    }(this.view, t.changes, o) : null;
                    if (this.domChanged = null, this.hasComposition) {
                        this.markedForComposition.clear();
                        let {
                            from: e,
                            to: s
                        } = this.hasComposition;
                        i = new me(e, s, t.changes.mapPos(e, -1), t.changes.mapPos(s, 1)).addToSet(i.slice())
                    }
                    this.hasComposition = n ? {
                        from: n.range.fromB,
                        to: n.range.toB
                    } : null, (X.ie || X.chrome) && !n && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
                    let r = function(t, e, i) {
                        let o = new class {
                            constructor() {
                                this.changes = []
                            }
                            compareRange(t, e) {
                                ut(t, e, this.changes)
                            }
                            comparePoint(t, e) {
                                ut(t, e, this.changes)
                            }
                        };
                        return s.Xs.compare(t, e, i, o), o.changes
                    }(this.decorations, this.updateDeco(), t.changes);
                    return i = me.extendWithRanges(i, r), !!(7 & this.flags || 0 != i.length) && (this.updateInner(i, t.startState.doc.length, n), t.transactions.length && (this.lastUpdate = Date.now()), !0)
                }
                updateInner(t, e, i) {
                    this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e, i);
                    let {
                        observer: s
                    } = this.view;
                    s.ignore((() => {
                        this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
                        let t = X.chrome || X.ios ? {
                            node: s.selectionRange.focusNode,
                            written: !1
                        } : void 0;
                        this.sync(this.view, t), this.flags &= -8, t && (t.written || s.selectionRange.focusNode != t.node) && (this.forceSelection = !0), this.dom.style.height = ""
                    })), this.markedForComposition.forEach((t => t.flags &= -9));
                    let o = [];
                    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
                        for (let n of this.children) n instanceof pt && n.widget instanceof gt && o.push(n.dom);
                    s.updateGaps(o)
                }
                updateChildren(t, e, i) {
                    let s = i ? i.range.addToSet(t.slice()) : t,
                        o = this.childCursor(e);
                    for (let n = s.length - 1;; n--) {
                        let t = n >= 0 ? s[n] : null;
                        if (!t) break;
                        let e, r, l, h, {
                            fromA: a,
                            toA: c,
                            fromB: d,
                            toB: u
                        } = t;
                        if (i && i.range.fromB < u && i.range.toB > d) {
                            let t = mt.build(this.view.state.doc, d, i.range.fromB, this.decorations, this.dynamicDecorationMap),
                                s = mt.build(this.view.state.doc, i.range.toB, u, this.decorations, this.dynamicDecorationMap);
                            r = t.breakAtStart, l = t.openStart, h = s.openEnd;
                            let o = this.compositionView(i);
                            s.breakAtStart ? o.breakAfter = 1 : s.content.length && o.merge(o.length, o.length, s.content[0], !1, s.openStart, 0) && (o.breakAfter = s.content[0].breakAfter, s.content.shift()), t.content.length && o.merge(0, 0, t.content[t.content.length - 1], !0, 0, t.openEnd) && t.content.pop(), e = t.content.concat(o).concat(s.content)
                        } else({
                            content: e,
                            breakAtStart: r,
                            openStart: l,
                            openEnd: h
                        } = mt.build(this.view.state.doc, d, u, this.decorations, this.dynamicDecorationMap));
                        let {
                            i: f,
                            off: p
                        } = o.findPos(c, 1), {
                            i: g,
                            off: m
                        } = o.findPos(a, -1);
                        L(this, g, m, f, p, e, r, l, h)
                    }
                    i && this.fixCompositionDOM(i)
                }
                updateEditContextFormatting(t) {
                    this.editContextFormatting = this.editContextFormatting.map(t.changes);
                    for (let e of t.transactions)
                        for (let t of e.effects) t.is(Jt) && (this.editContextFormatting = t.value)
                }
                compositionView(t) {
                    let e = new Y(t.text.nodeValue);
                    e.flags |= 8;
                    for (let {
                            deco: s
                        } of t.marks) e = new G(s, [e], e.length);
                    let i = new ft;
                    return i.append(e, 0), i
                }
                fixCompositionDOM(t) {
                    let e = (t, e) => {
                            e.flags |= 8 | (e.children.some((t => 7 & t.flags)) ? 1 : 0), this.markedForComposition.add(e);
                            let i = E.get(t);
                            i && i != e && (i.dom = null), e.setDOM(t)
                        },
                        i = this.childPos(t.range.fromB, 1),
                        s = this.children[i.i];
                    e(t.line, s);
                    for (let o = t.marks.length - 1; o >= -1; o--) i = s.childPos(i.off, 1), s = s.children[i.i], e(o >= 0 ? t.marks[o].node : t.text, s)
                }
                updateSelection(t = !1, e = !1) {
                    !t && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
                    let i = this.view.root.activeElement,
                        s = i == this.dom,
                        o = !s && h(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
                    if (!(s || e || o)) return;
                    let n = this.forceSelection;
                    this.forceSelection = !1;
                    let l = this.view.state.selection.main,
                        a = this.moveToLine(this.domAtPos(l.anchor)),
                        d = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
                    if (X.gecko && l.empty && !this.hasComposition && (1 == (u = a).node.nodeType && u.node.firstChild && (0 == u.offset || "false" == u.node.childNodes[u.offset - 1].contentEditable) && (u.offset == u.node.childNodes.length || "false" == u.node.childNodes[u.offset].contentEditable))) {
                        let t = document.createTextNode("");
                        this.view.observer.ignore((() => a.node.insertBefore(t, a.node.childNodes[a.offset] || null))), a = d = new D(t, 0), n = !0
                    }
                    var u;
                    let f = this.view.observer.selectionRange;
                    !n && f.focusNode && (c(a.node, a.offset, f.anchorNode, f.anchorOffset) && c(d.node, d.offset, f.focusNode, f.focusOffset) || this.suppressWidgetCursorChange(f, l)) || (this.view.observer.ignore((() => {
                        X.android && X.chrome && this.dom.contains(f.focusNode) && function(t, e) {
                            for (let i = t; i && i != e; i = i.assignedSlot || i.parentNode)
                                if (1 == i.nodeType && "false" == i.contentEditable) return !0;
                            return !1
                        }(f.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
                            preventScroll: !0
                        }));
                        let t = r(this.view.root);
                        if (t)
                            if (l.empty) {
                                if (X.gecko) {
                                    let t = (e = a.node, s = a.offset, 1 != e.nodeType ? 0 : (s && "false" == e.childNodes[s - 1].contentEditable ? 1 : 0) | (s < e.childNodes.length && "false" == e.childNodes[s].contentEditable ? 2 : 0));
                                    if (t && 3 != t) {
                                        let e = (1 == t ? A : T)(a.node, a.offset);
                                        e && (a = new D(e.node, e.offset))
                                    }
                                }
                                t.collapse(a.node, a.offset), null != l.bidiLevel && void 0 !== t.caretBidiLevel && (t.caretBidiLevel = l.bidiLevel)
                            } else if (t.extend) {
                            t.collapse(a.node, a.offset);
                            try {
                                t.extend(d.node, d.offset)
                            } catch (n) {}
                        } else {
                            let e = document.createRange();
                            l.anchor > l.head && ([a, d] = [d, a]), e.setEnd(d.node, d.offset), e.setStart(a.node, a.offset), t.removeAllRanges(), t.addRange(e)
                        } else;
                        var e, s;
                        o && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus())
                    })), this.view.observer.setSelectionRange(a, d)), this.impreciseAnchor = a.precise ? null : new D(f.anchorNode, f.anchorOffset), this.impreciseHead = d.precise ? null : new D(f.focusNode, f.focusOffset)
                }
                suppressWidgetCursorChange(t, e) {
                    return this.hasComposition && e.empty && c(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head
                }
                enforceCursorAssoc() {
                    if (this.hasComposition) return;
                    let {
                        view: t
                    } = this, e = t.state.selection.main, i = r(t.root), {
                        anchorNode: s,
                        anchorOffset: o
                    } = t.observer.selectionRange;
                    if (!i || !e.empty || !e.assoc || !i.modify) return;
                    let n = ft.find(this, e.head);
                    if (!n) return;
                    let l = n.posAtStart;
                    if (e.head == l || e.head == l + n.length) return;
                    let h = this.coordsAt(e.head, -1),
                        a = this.coordsAt(e.head, 1);
                    if (!h || !a || h.bottom > a.top) return;
                    let c = this.domAtPos(e.head + e.assoc);
                    i.collapse(c.node, c.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
                    let d = t.observer.selectionRange;
                    t.docView.posFromDOM(d.anchorNode, d.anchorOffset) != e.from && i.collapse(s, o)
                }
                moveToLine(t) {
                    let e, i = this.dom;
                    if (t.node != i) return t;
                    for (let s = t.offset; !e && s < i.childNodes.length; s++) {
                        let t = E.get(i.childNodes[s]);
                        t instanceof ft && (e = t.domAtPos(0))
                    }
                    for (let s = t.offset - 1; !e && s >= 0; s--) {
                        let t = E.get(i.childNodes[s]);
                        t instanceof ft && (e = t.domAtPos(t.length))
                    }
                    return e ? new D(e.node, e.offset, !0) : t
                }
                nearest(t) {
                    for (let e = t; e;) {
                        let t = E.get(e);
                        if (t && t.rootView == this) return t;
                        e = e.parentNode
                    }
                    return null
                }
                posFromDOM(t, e) {
                    let i = this.nearest(t);
                    if (!i) throw new RangeError("Trying to find position for a DOM position outside of the document");
                    return i.localPosFromDOM(t, e) + i.posAtStart
                }
                domAtPos(t) {
                    let {
                        i: e,
                        off: i
                    } = this.childCursor().findPos(t, -1);
                    for (; e < this.children.length - 1;) {
                        let t = this.children[e];
                        if (i < t.length || t instanceof ft) break;
                        e++, i = 0
                    }
                    return this.children[e].domAtPos(i)
                }
                coordsAt(t, e) {
                    let i = null,
                        s = 0;
                    for (let o = this.length, n = this.children.length - 1; n >= 0; n--) {
                        let r = this.children[n],
                            l = o - r.breakAfter,
                            h = l - r.length;
                        if (l < t) break;
                        if (h <= t && (h < t || r.covers(-1)) && (l > t || r.covers(1)) && (!i || r instanceof ft && !(i instanceof ft && e >= 0))) i = r, s = h;
                        else if (i && h == t && l == t && r instanceof pt && Math.abs(e) < 2) {
                            if (r.deco.startSide < 0) break;
                            n && (i = null)
                        }
                        o = h
                    }
                    return i ? i.coordsAt(t - s, e) : null
                }
                coordsForChar(t) {
                    let {
                        i: e,
                        off: i
                    } = this.childPos(t, 1), o = this.children[e];
                    if (!(o instanceof ft)) return null;
                    for (; o.children.length;) {
                        let {
                            i: t,
                            off: e
                        } = o.childPos(i, 1);
                        for (;; t++) {
                            if (t == o.children.length) return null;
                            if ((o = o.children[t]).length) break
                        }
                        i = e
                    }
                    if (!(o instanceof Y)) return null;
                    let n = (0, s.cp)(o.text, i);
                    if (n == i) return null;
                    let r = S(o.dom, i, n).getClientRects();
                    for (let s = 0; s < r.length; s++) {
                        let t = r[s];
                        if (s == r.length - 1 || t.top < t.bottom && t.left < t.right) return t
                    }
                    return null
                }
                measureVisibleLineHeights(t) {
                    let e = [],
                        {
                            from: i,
                            to: s
                        } = t,
                        o = this.view.contentDOM.clientWidth,
                        n = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
                        r = -1,
                        l = this.view.textDirection == bt.LTR;
                    for (let h = 0, c = 0; c < this.children.length; c++) {
                        let t = this.children[c],
                            d = h + t.length;
                        if (d > s) break;
                        if (h >= i) {
                            let i = t.dom.getBoundingClientRect();
                            if (e.push(i.height), n) {
                                let e = t.dom.lastChild,
                                    s = e ? a(e) : [];
                                if (s.length) {
                                    let t = s[s.length - 1],
                                        e = l ? t.right - i.left : i.right - t.left;
                                    e > r && (r = e, this.minWidth = o, this.minWidthFrom = h, this.minWidthTo = d)
                                }
                            }
                        }
                        h = d + t.breakAfter
                    }
                    return e
                }
                textDirectionAt(t) {
                    let {
                        i: e
                    } = this.childPos(t, 1);
                    return "rtl" == getComputedStyle(this.children[e].dom).direction ? bt.RTL : bt.LTR
                }
                measureTextSize() {
                    for (let o of this.children)
                        if (o instanceof ft) {
                            let t = o.measureTextSize();
                            if (t) return t
                        }
                    let t, e, i, s = document.createElement("div");
                    return s.className = "cm-line", s.style.width = "99999px", s.style.position = "absolute", s.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
                        this.dom.appendChild(s);
                        let o = a(s.firstChild)[0];
                        t = s.getBoundingClientRect().height, e = o ? o.width / 27 : 7, i = o ? o.height : t, s.remove()
                    })), {
                        lineHeight: t,
                        charWidth: e,
                        textHeight: i
                    }
                }
                childCursor(t = this.length) {
                    let e = this.children.length;
                    return e && (t -= this.children[--e].length), new B(this.children, t, e)
                }
                computeBlockGapDeco() {
                    let t = [],
                        e = this.view.viewState;
                    for (let i = 0, s = 0;; s++) {
                        let o = s == e.viewports.length ? null : e.viewports[s],
                            n = o ? o.from - 1 : this.length;
                        if (n > i) {
                            let s = (e.lineBlockAt(n).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
                            t.push(lt.replace({
                                widget: new gt(s),
                                block: !0,
                                inclusive: !0,
                                isBlockGap: !0
                            }).range(i, n))
                        }
                        if (!o) break;
                        i = o.to + 1
                    }
                    return lt.set(t)
                }
                updateDeco() {
                    let t = 1,
                        e = this.view.state.facet(he).map((e => (this.dynamicDecorationMap[t++] = "function" == typeof e) ? e(this.view) : e)),
                        i = !1,
                        o = this.view.state.facet(ae).map(((t, e) => {
                            let s = "function" == typeof t;
                            return s && (i = !0), s ? t(this.view) : t
                        }));
                    for (o.length && (this.dynamicDecorationMap[t++] = i, e.push(s.Xs.join(o))), this.decorations = [this.editContextFormatting, ...e, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t < this.decorations.length;) this.dynamicDecorationMap[t++] = !1;
                    return this.decorations
                }
                scrollIntoView(t) {
                    if (t.isSnapshot) {
                        let e = this.view.viewState.lineBlockAt(t.range.head);
                        return this.view.scrollDOM.scrollTop = e.top - t.yMargin, void(this.view.scrollDOM.scrollLeft = t.xMargin)
                    }
                    for (let a of this.view.state.facet(Ut)) try {
                        if (a(this.view, t.range, t)) return !0
                    } catch (h) {
                        te(this.view.state, h, "scroll handler")
                    }
                    let e, {
                            range: i
                        } = t,
                        s = this.coordsAt(i.head, i.empty ? i.assoc : i.head > i.anchor ? -1 : 1);
                    if (!s) return;
                    !i.empty && (e = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (s = {
                        left: Math.min(s.left, e.left),
                        top: Math.min(s.top, e.top),
                        right: Math.max(s.right, e.right),
                        bottom: Math.max(s.bottom, e.bottom)
                    });
                    let o = pe(this.view),
                        n = {
                            left: s.left - o.left,
                            top: s.top - o.top,
                            right: s.right + o.right,
                            bottom: s.bottom + o.bottom
                        },
                        {
                            offsetWidth: r,
                            offsetHeight: l
                        } = this.view.scrollDOM;
                    ! function(t, e, i, s, o, n, r, l) {
                        let h = t.ownerDocument,
                            a = h.defaultView || window;
                        for (let c = t, d = !1; c && !d;)
                            if (1 == c.nodeType) {
                                let t, u = c == h.body,
                                    f = 1,
                                    p = 1;
                                if (u) t = m(a);
                                else {
                                    if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (d = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
                                        c = c.assignedSlot || c.parentNode;
                                        continue
                                    }
                                    let e = c.getBoundingClientRect();
                                    ({
                                        scaleX: f,
                                        scaleY: p
                                    } = v(c, e)), t = {
                                        left: e.left,
                                        right: e.left + c.clientWidth * f,
                                        top: e.top,
                                        bottom: e.top + c.clientHeight * p
                                    }
                                }
                                let g = 0,
                                    w = 0;
                                if ("nearest" == o) e.top < t.top ? (w = -(t.top - e.top + r), i > 0 && e.bottom > t.bottom + w && (w = e.bottom - t.bottom + w + r)) : e.bottom > t.bottom && (w = e.bottom - t.bottom + r, i < 0 && e.top - w < t.top && (w = -(t.top + w - e.top + r)));
                                else {
                                    let s = e.bottom - e.top,
                                        n = t.bottom - t.top;
                                    w = ("center" == o && s <= n ? e.top + s / 2 - n / 2 : "start" == o || "center" == o && i < 0 ? e.top - r : e.bottom - n + r) - t.top
                                }
                                if ("nearest" == s ? e.left < t.left ? (g = -(t.left - e.left + n), i > 0 && e.right > t.right + g && (g = e.right - t.right + g + n)) : e.right > t.right && (g = e.right - t.right + n, i < 0 && e.left < t.left + g && (g = -(t.left + g - e.left + n))) : g = ("center" == s ? e.left + (e.right - e.left) / 2 - (t.right - t.left) / 2 : "start" == s == l ? e.left - n : e.right - (t.right - t.left) + n) - t.left, g || w)
                                    if (u) a.scrollBy(g, w);
                                    else {
                                        let t = 0,
                                            i = 0;
                                        if (w) {
                                            let t = c.scrollTop;
                                            c.scrollTop += w / p, i = (c.scrollTop - t) * p
                                        }
                                        if (g) {
                                            let e = c.scrollLeft;
                                            c.scrollLeft += g / f, t = (c.scrollLeft - e) * f
                                        }
                                        e = {
                                            left: e.left - t,
                                            top: e.top - i,
                                            right: e.right - t,
                                            bottom: e.bottom - i
                                        }, t && Math.abs(t - g) < 1 && (s = "nearest"), i && Math.abs(i - w) < 1 && (o = "nearest")
                                    }
                                if (u) break;
                                c = c.assignedSlot || c.parentNode
                            } else {
                                if (11 != c.nodeType) break;
                                c = c.host
                            }
                    }(this.view.scrollDOM, n, i.head < i.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, r), -r), Math.max(Math.min(t.yMargin, l), -l), this.view.textDirection == bt.LTR)
                }
            }

            function be(t, e) {
                let i = t.observer.selectionRange;
                if (!i.focusNode) return null;
                let s = A(i.focusNode, i.focusOffset),
                    o = T(i.focusNode, i.focusOffset),
                    n = s || o;
                if (o && s && o.node != s.node) {
                    let e = E.get(o.node);
                    if (!e || e instanceof Y && e.text != o.node.nodeValue) n = o;
                    else if (t.docView.lastCompositionAfterCursor) {
                        let t = E.get(s.node);
                        !t || t instanceof Y && t.text != s.node.nodeValue || (n = o)
                    }
                }
                if (t.docView.lastCompositionAfterCursor = n != s, !n) return null;
                let r = e - n.offset;
                return {
                    from: r,
                    to: r + n.node.nodeValue.length,
                    node: n.node
                }
            }

            function ye(t, e) {
                return e.left > t ? e.left - t : Math.max(0, t - e.right)
            }

            function xe(t, e) {
                return e.top > t ? e.top - t : Math.max(0, t - e.bottom)
            }

            function Se(t, e) {
                return t.top < e.bottom - 1 && t.bottom > e.top + 1
            }

            function Me(t, e) {
                return e < t.top ? {
                    top: e,
                    left: t.left,
                    right: t.right,
                    bottom: t.bottom
                } : t
            }

            function Ce(t, e) {
                return e > t.bottom ? {
                    top: t.top,
                    left: t.left,
                    right: t.right,
                    bottom: e
                } : t
            }

            function ke(t, e, i) {
                let s, o, n, r, l, h, c, d, u = !1;
                for (let p = t.firstChild; p; p = p.nextSibling) {
                    let t = a(p);
                    for (let a = 0; a < t.length; a++) {
                        let f = t[a];
                        o && Se(o, f) && (f = Me(Ce(f, o.bottom), o.top));
                        let g = ye(e, f),
                            m = xe(i, f);
                        if (0 == g && 0 == m) return 3 == p.nodeType ? Ae(p, e, i) : ke(p, e, i);
                        if (!s || r > m || r == m && n > g) {
                            s = p, o = f, n = g, r = m;
                            let l = m ? i < f.top ? -1 : 1 : g ? e < f.left ? -1 : 1 : 0;
                            u = !l || (l > 0 ? a < t.length - 1 : a > 0)
                        }
                        0 == g ? i > f.bottom && (!c || c.bottom < f.bottom) ? (l = p, c = f) : i < f.top && (!d || d.top > f.top) && (h = p, d = f) : c && Se(c, f) ? c = Ce(c, f.bottom) : d && Se(d, f) && (d = Me(d, f.top))
                    }
                }
                if (c && c.bottom >= i ? (s = l, o = c) : d && d.top <= i && (s = h, o = d), !s) return {
                    node: t,
                    offset: 0
                };
                let f = Math.max(o.left, Math.min(o.right, e));
                return 3 == s.nodeType ? Ae(s, f, i) : u && "false" != s.contentEditable ? ke(s, f, i) : {
                    node: t,
                    offset: Array.prototype.indexOf.call(t.childNodes, s) + (e >= (o.left + o.right) / 2 ? 1 : 0)
                }
            }

            function Ae(t, e, i) {
                let s = t.nodeValue.length,
                    o = -1,
                    n = 1e9,
                    r = 0;
                for (let l = 0; l < s; l++) {
                    let s = S(t, l, l + 1).getClientRects();
                    for (let h = 0; h < s.length; h++) {
                        let a = s[h];
                        if (a.top == a.bottom) continue;
                        r || (r = e - a.left);
                        let c = (a.top > i ? a.top - i : i - a.bottom) - 1;
                        if (a.left - 1 <= e && a.right + 1 >= e && c < n) {
                            let i = e >= (a.left + a.right) / 2,
                                s = i;
                            if (X.chrome || X.gecko) {
                                S(t, l).getBoundingClientRect().left == a.right && (s = !i)
                            }
                            if (c <= 0) return {
                                node: t,
                                offset: l + (s ? 1 : 0)
                            };
                            o = l + (s ? 1 : 0), n = c
                        }
                    }
                }
                return {
                    node: t,
                    offset: o > -1 ? o : r > 0 ? t.nodeValue.length : 0
                }
            }

            function Te(t, e, i, s = -1) {
                var o, n;
                let r, l = t.contentDOM.getBoundingClientRect(),
                    h = l.top + t.viewState.paddingTop,
                    {
                        docHeight: a
                    } = t.viewState,
                    {
                        x: c,
                        y: d
                    } = e,
                    u = d - h;
                if (u < 0) return 0;
                if (u > a) return t.state.doc.length;
                for (let y = t.viewState.heightOracle.textHeight / 2, x = !1; r = t.elementAtHeight(u), r.type != rt.Text;)
                    for (; u = s > 0 ? r.bottom + y : r.top - y, !(u >= 0 && u <= a);) {
                        if (x) return i ? null : 0;
                        x = !0, s = -s
                    }
                d = h + u;
                let f = r.from;
                if (f < t.viewport.from) return 0 == t.viewport.from ? 0 : i ? null : De(t, l, r, c, d);
                if (f > t.viewport.to) return t.viewport.to == t.state.doc.length ? t.state.doc.length : i ? null : De(t, l, r, c, d);
                let p = t.dom.ownerDocument,
                    g = t.root.elementFromPoint ? t.root : p,
                    m = g.elementFromPoint(c, d);
                m && !t.contentDOM.contains(m) && (m = null), m || (c = Math.max(l.left + 1, Math.min(l.right - 1, c)), m = g.elementFromPoint(c, d), m && !t.contentDOM.contains(m) && (m = null));
                let v, w = -1;
                if (m && 0 != (null === (o = t.docView.nearest(m)) || void 0 === o ? void 0 : o.isEditable))
                    if (p.caretPositionFromPoint) {
                        let t = p.caretPositionFromPoint(c, d);
                        t && ({
                            offsetNode: v,
                            offset: w
                        } = t)
                    } else if (p.caretRangeFromPoint) {
                    let e = p.caretRangeFromPoint(c, d);
                    e && (({
                        startContainer: v,
                        startOffset: w
                    } = e), (!t.contentDOM.contains(v) || X.safari && function(t, e, i) {
                        let s;
                        if (3 != t.nodeType || e != (s = t.nodeValue.length)) return !1;
                        for (let o = t.nextSibling; o; o = o.nextSibling)
                            if (1 != o.nodeType || "BR" != o.nodeName) return !1;
                        return S(t, s - 1, s).getBoundingClientRect().left > i
                    }(v, w, c) || X.chrome && function(t, e, i) {
                        if (0 != e) return !1;
                        for (let o = t;;) {
                            let t = o.parentNode;
                            if (!t || 1 != t.nodeType || t.firstChild != o) return !1;
                            if (t.classList.contains("cm-line")) break;
                            o = t
                        }
                        let s = 1 == t.nodeType ? t.getBoundingClientRect() : S(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
                        return i - s.left > 5
                    }(v, w, c)) && (v = void 0))
                }
                if (!v || !t.docView.dom.contains(v)) {
                    let e = ft.find(t.docView, f);
                    if (!e) return u > r.top + r.height / 2 ? r.to : r.from;
                    ({
                        node: v,
                        offset: w
                    } = ke(e.dom, c, d))
                }
                let b = t.docView.nearest(v);
                if (!b) return null;
                if (b.isWidget && 1 == (null === (n = b.dom) || void 0 === n ? void 0 : n.nodeType)) {
                    let t = b.dom.getBoundingClientRect();
                    return e.y < t.top || e.y <= t.bottom && e.x <= (t.left + t.right) / 2 ? b.posAtStart : b.posAtEnd
                }
                return b.localPosFromDOM(v, w) + b.posAtStart
            }

            function De(t, e, i, o, n) {
                let r = Math.round((o - e.left) * t.defaultCharacterWidth);
                if (t.lineWrapping && i.height > 1.5 * t.defaultLineHeight) {
                    let e = t.viewState.heightOracle.textHeight;
                    r += Math.floor((n - i.top - .5 * (t.defaultLineHeight - e)) / e) * t.viewState.heightOracle.lineLength
                }
                let l = t.state.sliceDoc(i.from, i.to);
                return i.from + (0, s.Gz)(l, r, t.state.tabSize)
            }

            function Oe(t, e) {
                let i = t.lineBlockAt(e);
                if (Array.isArray(i.type))
                    for (let s of i.type)
                        if (s.to > e || s.to == e && (s.to == i.to || s.type == rt.Text)) return s;
                return i
            }

            function Ee(t, e, i, s) {
                let o = t.state.doc.lineAt(e.head),
                    n = t.bidiSpans(o),
                    r = t.textDirectionAt(o.from);
                for (let l = e, h = null;;) {
                    let e = Nt(o, n, r, l, i),
                        a = Vt;
                    if (!e) {
                        if (o.number == (i ? t.state.doc.lines : 1)) return l;
                        a = "\n", o = t.state.doc.line(o.number + (i ? 1 : -1)), n = t.bidiSpans(o), e = t.visualLineSide(o, !i)
                    }
                    if (h) {
                        if (!h(a)) return l
                    } else {
                        if (!s) return e;
                        h = s(a)
                    }
                    l = e
                }
            }

            function Re(t, e, i) {
                for (;;) {
                    let s = 0;
                    for (let o of t) o.between(e - 1, e + 1, ((t, o, n) => {
                        if (e > t && e < o) {
                            let n = s || i || (e - t < o - e ? -1 : 1);
                            e = n < 0 ? t : o, s = n
                        }
                    }));
                    if (!s) return e
                }
            }

            function Be(t, e, i) {
                let o = Re(t.state.facet(ce).map((e => e(t))), i.from, e.head > i.from ? -1 : 1);
                return o == i.from ? i : s.jT.cursor(o, o < i.from ? 1 : -1)
            }
            const Le = "\uffff";
            class Pe {
                constructor(t, e) {
                    this.points = t, this.text = "", this.lineSeparator = e.facet(s.yy.lineSeparator)
                }
                append(t) {
                    this.text += t
                }
                lineBreak() {
                    this.text += Le
                }
                readRange(t, e) {
                    if (!t) return this;
                    let i = t.parentNode;
                    for (let s = t;;) {
                        this.findPointBefore(i, s);
                        let t = this.text.length;
                        this.readNode(s);
                        let o = s.nextSibling;
                        if (o == e) break;
                        let n = E.get(s),
                            r = E.get(o);
                        (n && r ? n.breakAfter : (n ? n.breakAfter : u(s)) || u(o) && ("BR" != s.nodeName || s.cmIgnore) && this.text.length > t) && this.lineBreak(), s = o
                    }
                    return this.findPointBefore(i, e), this
                }
                readTextNode(t) {
                    let e = t.nodeValue;
                    for (let i of this.points) i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
                    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g;;) {
                        let o, n = -1,
                            r = 1;
                        if (this.lineSeparator ? (n = e.indexOf(this.lineSeparator, i), r = this.lineSeparator.length) : (o = s.exec(e)) && (n = o.index, r = o[0].length), this.append(e.slice(i, n < 0 ? e.length : n)), n < 0) break;
                        if (this.lineBreak(), r > 1)
                            for (let e of this.points) e.node == t && e.pos > this.text.length && (e.pos -= r - 1);
                        i = n + r
                    }
                }
                readNode(t) {
                    if (t.cmIgnore) return;
                    let e = E.get(t),
                        i = e && e.overrideDOMText;
                    if (null != i) {
                        this.findPointInside(t, i.length);
                        for (let t = i.iter(); !t.next().done;) t.lineBreak ? this.lineBreak() : this.append(t.value)
                    } else 3 == t.nodeType ? this.readTextNode(t) : "BR" == t.nodeName ? t.nextSibling && this.lineBreak() : 1 == t.nodeType && this.readRange(t.firstChild, null)
                }
                findPointBefore(t, e) {
                    for (let i of this.points) i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length)
                }
                findPointInside(t, e) {
                    for (let i of this.points)(3 == t.nodeType ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (He(t, i.node, i.offset) ? e : 0))
                }
            }

            function He(t, e, i) {
                for (;;) {
                    if (!e || i < p(e)) return !1;
                    if (e == t) return !0;
                    i = d(e) + 1, e = e.parentNode
                }
            }
            class Ve {
                constructor(t, e) {
                    this.node = t, this.offset = e, this.pos = -1
                }
            }
            class Ne {
                constructor(t, e, i, o) {
                    this.typeOver = o, this.bounds = null, this.text = "", this.domChanged = e > -1;
                    let {
                        impreciseHead: n,
                        impreciseAnchor: r
                    } = t.docView;
                    if (t.state.readOnly && e > -1) this.newSel = null;
                    else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
                        let e = n || r ? [] : function(t) {
                                let e = [];
                                if (t.root.activeElement != t.contentDOM) return e;
                                let {
                                    anchorNode: i,
                                    anchorOffset: s,
                                    focusNode: o,
                                    focusOffset: n
                                } = t.observer.selectionRange;
                                i && (e.push(new Ve(i, s)), o == i && n == s || e.push(new Ve(o, n)));
                                return e
                            }(t),
                            i = new Pe(e, t.state);
                        i.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = i.text, this.newSel = function(t, e) {
                            if (0 == t.length) return null;
                            let i = t[0].pos,
                                o = 2 == t.length ? t[1].pos : i;
                            return i > -1 && o > -1 ? s.jT.single(i + e, o + e) : null
                        }(e, this.bounds.from)
                    } else {
                        let e = t.observer.selectionRange,
                            i = n && n.node == e.focusNode && n.offset == e.focusOffset || !l(t.contentDOM, e.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(e.focusNode, e.focusOffset),
                            o = r && r.node == e.anchorNode && r.offset == e.anchorOffset || !l(t.contentDOM, e.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(e.anchorNode, e.anchorOffset),
                            h = t.viewport;
                        if ((X.ios || X.chrome) && t.state.selection.main.empty && i != o && (h.from > 0 || h.to < t.state.doc.length)) {
                            let e = Math.min(i, o),
                                s = Math.max(i, o),
                                n = h.from - e,
                                r = h.to - s;
                            0 != n && 1 != n && 0 != e || 0 != r && -1 != r && s != t.state.doc.length || (i = 0, o = t.state.doc.length)
                        }
                        this.newSel = s.jT.single(o, i)
                    }
                }
            }

            function We(t, e) {
                let i, {
                        newSel: o
                    } = e,
                    n = t.state.selection.main,
                    r = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
                if (e.bounds) {
                    let {
                        from: o,
                        to: l
                    } = e.bounds, h = n.from, a = null;
                    (8 === r || X.android && e.text.length < l - o) && (h = n.to, a = "end");
                    let c = function(t, e, i, s) {
                        let o = Math.min(t.length, e.length),
                            n = 0;
                        for (; n < o && t.charCodeAt(n) == e.charCodeAt(n);) n++;
                        if (n == o && t.length == e.length) return null;
                        let r = t.length,
                            l = e.length;
                        for (; r > 0 && l > 0 && t.charCodeAt(r - 1) == e.charCodeAt(l - 1);) r--, l--;
                        if ("end" == s) {
                            i -= r + Math.max(0, n - Math.min(r, l)) - n
                        }
                        if (r < n && t.length < e.length) {
                            n -= i <= n && i >= r ? n - i : 0, l = n + (l - r), r = n
                        } else if (l < n) {
                            n -= i <= n && i >= l ? n - i : 0, r = n + (r - l), l = n
                        }
                        return {
                            from: n,
                            toA: r,
                            toB: l
                        }
                    }(t.state.doc.sliceString(o, l, Le), e.text, h - o, a);
                    c && (X.chrome && 13 == r && c.toB == c.from + 2 && "\uffff\uffff" == e.text.slice(c.from, c.toB) && c.toB--, i = {
                        from: o + c.from,
                        to: o + c.toA,
                        insert: s.xv.of(e.text.slice(c.from, c.toB).split(Le))
                    })
                } else o && (!t.hasFocus && t.state.facet(ee) || o.main.eq(n)) && (o = null);
                if (!i && !o) return !1;
                if (!i && e.typeOver && !n.empty && o && o.main.empty ? i = {
                        from: n.from,
                        to: n.to,
                        insert: t.state.doc.slice(n.from, n.to)
                    } : i && i.from >= n.from && i.to <= n.to && (i.from != n.from || i.to != n.to) && n.to - n.from - (i.to - i.from) <= 4 ? i = {
                        from: n.from,
                        to: n.to,
                        insert: t.state.doc.slice(n.from, i.from).append(i.insert).append(t.state.doc.slice(i.to, n.to))
                    } : (X.mac || X.android) && i && i.from == i.to && i.from == n.head - 1 && /^\. ?$/.test(i.insert.toString()) && "off" == t.contentDOM.getAttribute("autocorrect") ? (o && 2 == i.insert.length && (o = s.jT.single(o.main.anchor - 1, o.main.head - 1)), i = {
                        from: n.from,
                        to: n.to,
                        insert: s.xv.of([" "])
                    }) : X.chrome && i && i.from == i.to && i.from == n.head && "\n " == i.insert.toString() && t.lineWrapping && (o && (o = s.jT.single(o.main.anchor - 1, o.main.head - 1)), i = {
                        from: n.from,
                        to: n.to,
                        insert: s.xv.of([" "])
                    }), i) return Fe(t, i, o, r);
                if (o && !o.main.eq(n)) {
                    let e = !1,
                        i = "select";
                    return t.inputState.lastSelectionTime > Date.now() - 50 && ("select" == t.inputState.lastSelectionOrigin && (e = !0), i = t.inputState.lastSelectionOrigin), t.dispatch({
                        selection: o,
                        scrollIntoView: e,
                        userEvent: i
                    }), !0
                }
                return !1
            }

            function Fe(t, e, i, o = -1) {
                if (X.ios && t.inputState.flushIOSKey(e)) return !0;
                let n = t.state.selection.main;
                if (X.android && (e.to == n.to && (e.from == n.from || e.from == n.from - 1 && " " == t.state.sliceDoc(e.from, n.from)) && 1 == e.insert.length && 2 == e.insert.lines && M(t.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && 0 == e.insert.length || 8 == o && e.insert.length < e.to - e.from && e.to > n.head) && M(t.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && 0 == e.insert.length && M(t.contentDOM, "Delete", 46))) return !0;
                let r, l = e.insert.toString();
                t.inputState.composing >= 0 && t.inputState.composing++;
                let h = () => r || (r = function(t, e, i) {
                    let o, n = t.state,
                        r = n.selection.main;
                    if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!i || i.main.empty && i.main.from == e.from + e.insert.length) && t.inputState.composing < 0) {
                        let i = r.from < e.from ? n.sliceDoc(r.from, e.from) : "",
                            s = r.to > e.to ? n.sliceDoc(e.to, r.to) : "";
                        o = n.replaceSelection(t.state.toText(i + e.insert.sliceString(0, void 0, t.state.lineBreak) + s))
                    } else {
                        let l = n.changes(e),
                            h = i && i.main.to <= l.newLength ? i.main : void 0;
                        if (n.selection.ranges.length > 1 && t.inputState.composing >= 0 && e.to <= r.to && e.to >= r.to - 10) {
                            let a, c = t.state.sliceDoc(e.from, e.to),
                                d = i && be(t, i.main.head);
                            if (d) {
                                let t = e.insert.length - (e.to - e.from);
                                a = {
                                    from: d.from,
                                    to: d.to - t
                                }
                            } else a = t.state.doc.lineAt(r.head);
                            let u = r.to - e.to,
                                f = r.to - r.from;
                            o = n.changeByRange((i => {
                                if (i.from == r.from && i.to == r.to) return {
                                    changes: l,
                                    range: h || i.map(l)
                                };
                                let o = i.to - u,
                                    d = o - c.length;
                                if (i.to - i.from != f || t.state.sliceDoc(d, o) != c || i.to >= a.from && i.from <= a.to) return {
                                    range: i
                                };
                                let p = n.changes({
                                        from: d,
                                        to: o,
                                        insert: e.insert
                                    }),
                                    g = i.to - r.to;
                                return {
                                    changes: p,
                                    range: h ? s.jT.range(Math.max(0, h.anchor + g), Math.max(0, h.head + g)) : i.map(p)
                                }
                            }))
                        } else o = {
                            changes: l,
                            selection: h && n.selection.replaceRange(h)
                        }
                    }
                    let l = "input.type";
                    (t.composing || t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50) && (t.inputState.compositionPendingChange = !1, l += ".compose", t.inputState.compositionFirstChange && (l += ".start", t.inputState.compositionFirstChange = !1));
                    return n.update(o, {
                        userEvent: l,
                        scrollIntoView: !0
                    })
                }(t, e, i));
                return t.state.facet(jt).some((i => i(t, e.from, e.to, l, h))) || t.dispatch(h()), !0
            }
            class ze {
                setSelectionOrigin(t) {
                    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now()
                }
                constructor(t) {
                    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, X.safari && t.contentDOM.addEventListener("input", (() => null)), X.gecko && function(t) {
                        fi.has(t) || (fi.add(t), t.addEventListener("copy", (() => {})), t.addEventListener("cut", (() => {})))
                    }(t.contentDOM.ownerDocument)
                }
                handleEvent(t) {
                    (function(t, e) {
                        if (!e.bubbles) return !0;
                        if (e.defaultPrevented) return !1;
                        for (let i, s = e.target; s != t.contentDOM; s = s.parentNode)
                            if (!s || 11 == s.nodeType || (i = E.get(s)) && i.ignoreEvent(e)) return !1;
                        return !0
                    })(this.view, t) && !this.ignoreDuringComposition(t) && ("keydown" == t.type && this.keydown(t) || this.runHandlers(t.type, t))
                }
                runHandlers(t, e) {
                    let i = this.handlers[t];
                    if (i) {
                        for (let t of i.observers) t(this.view, e);
                        for (let t of i.handlers) {
                            if (e.defaultPrevented) break;
                            if (t(this.view, e)) {
                                e.preventDefault();
                                break
                            }
                        }
                    }
                }
                ensureHandlers(t) {
                    let e = qe(t),
                        i = this.handlers,
                        s = this.view.contentDOM;
                    for (let o in e)
                        if ("scroll" != o) {
                            let t = !e[o].handlers.length,
                                n = i[o];
                            n && t != !n.handlers.length && (s.removeEventListener(o, this.handleEvent), n = null), n || s.addEventListener(o, this.handleEvent, {
                                passive: t
                            })
                        }
                    for (let o in i) "scroll" == o || e[o] || s.removeEventListener(o, this.handleEvent);
                    this.handlers = e
                }
                keydown(t) {
                    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), 9 == t.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
                    if (this.tabFocusMode > 0 && 27 != t.keyCode && $e.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), X.android && X.chrome && !t.synthetic && (13 == t.keyCode || 8 == t.keyCode)) return this.view.observer.delayAndroidKey(t.key, t.keyCode), !0;
                    let e;
                    return !X.ios || t.synthetic || t.altKey || t.metaKey || !((e = Ke.find((e => e.keyCode == t.keyCode))) && !t.ctrlKey || je.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (229 != t.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = e || t, setTimeout((() => this.flushIOSKey()), 250), !0)
                }
                flushIOSKey(t) {
                    let e = this.pendingIOSKey;
                    return !!e && (!("Enter" == e.key && t && t.from < t.to && /^\S+$/.test(t.insert.toString())) && (this.pendingIOSKey = void 0, M(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0)))
                }
                ignoreDuringComposition(t) {
                    return !!/^key/.test(t.type) && (this.composing > 0 || !!(X.safari && !X.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
                }
                startMouseSelection(t) {
                    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t
                }
                update(t) {
                    this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
                }
                destroy() {
                    this.mouseSelection && this.mouseSelection.destroy()
                }
            }

            function Ie(t, e) {
                return (i, s) => {
                    try {
                        return e.call(t, s, i)
                    } catch (o) {
                        te(i.state, o)
                    }
                }
            }

            function qe(t) {
                let e = Object.create(null);

                function i(t) {
                    return e[t] || (e[t] = {
                        observers: [],
                        handlers: []
                    })
                }
                for (let s of t) {
                    let t = s.spec;
                    if (t && t.domEventHandlers)
                        for (let e in t.domEventHandlers) {
                            let o = t.domEventHandlers[e];
                            o && i(e).handlers.push(Ie(s.value, o))
                        }
                    if (t && t.domEventObservers)
                        for (let e in t.domEventObservers) {
                            let o = t.domEventObservers[e];
                            o && i(e).observers.push(Ie(s.value, o))
                        }
                }
                for (let s in Ge) i(s).handlers.push(Ge[s]);
                for (let s in _e) i(s).observers.push(_e[s]);
                return e
            }
            const Ke = [{
                    key: "Backspace",
                    keyCode: 8,
                    inputType: "deleteContentBackward"
                }, {
                    key: "Enter",
                    keyCode: 13,
                    inputType: "insertParagraph"
                }, {
                    key: "Enter",
                    keyCode: 13,
                    inputType: "insertLineBreak"
                }, {
                    key: "Delete",
                    keyCode: 46,
                    inputType: "deleteContentForward"
                }],
                je = "dthko",
                $e = [16, 17, 18, 20, 91, 92, 224, 225];

            function Xe(t) {
                return .7 * Math.max(0, t) + 8
            }
            class Ye {
                constructor(t, e, i, o) {
                    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = o, this.scrollSpeed = {
                        x: 0,
                        y: 0
                    }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = function(t) {
                        let e, i, s = t.ownerDocument;
                        for (let o = t.parentNode; o && !(o == s.body || e && i);)
                            if (1 == o.nodeType) !i && o.scrollHeight > o.clientHeight && (i = o), !e && o.scrollWidth > o.clientWidth && (e = o), o = o.assignedSlot || o.parentNode;
                            else {
                                if (11 != o.nodeType) break;
                                o = o.host
                            }
                        return {
                            x: e,
                            y: i
                        }
                    }(t.contentDOM), this.atoms = t.state.facet(ce).map((e => e(t)));
                    let n = t.contentDOM.ownerDocument;
                    n.addEventListener("mousemove", this.move = this.move.bind(this)), n.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(s.yy.allowMultipleSelections) && function(t, e) {
                        let i = t.state.facet(Ft);
                        return i.length ? i[0](e) : X.mac ? e.metaKey : e.ctrlKey
                    }(t, e), this.dragging = !(! function(t, e) {
                        let {
                            main: i
                        } = t.state.selection;
                        if (i.empty) return !1;
                        let s = r(t.root);
                        if (!s || 0 == s.rangeCount) return !0;
                        let o = s.getRangeAt(0).getClientRects();
                        for (let n = 0; n < o.length; n++) {
                            let t = o[n];
                            if (t.left <= e.clientX && t.right >= e.clientX && t.top <= e.clientY && t.bottom >= e.clientY) return !0
                        }
                        return !1
                    }(t, e) || 1 != li(e)) && null
                }
                start(t) {
                    !1 === this.dragging && this.select(t)
                }
                move(t) {
                    if (0 == t.buttons) return this.destroy();
                    if (this.dragging || null == this.dragging && (e = this.startEvent, i = t, Math.max(Math.abs(e.clientX - i.clientX), Math.abs(e.clientY - i.clientY)) < 10)) return;
                    var e, i;
                    this.select(this.lastEvent = t);
                    let s = 0,
                        o = 0,
                        n = 0,
                        r = 0,
                        l = this.view.win.innerWidth,
                        h = this.view.win.innerHeight;
                    this.scrollParents.x && ({
                        left: n,
                        right: l
                    } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
                        top: r,
                        bottom: h
                    } = this.scrollParents.y.getBoundingClientRect());
                    let a = pe(this.view);
                    t.clientX - a.left <= n + 6 ? s = -Xe(n - t.clientX) : t.clientX + a.right >= l - 6 && (s = Xe(t.clientX - l)), t.clientY - a.top <= r + 6 ? o = -Xe(r - t.clientY) : t.clientY + a.bottom >= h - 6 && (o = Xe(t.clientY - h)), this.setScrollSpeed(s, o)
                }
                up(t) {
                    null == this.dragging && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy()
                }
                destroy() {
                    this.setScrollSpeed(0, 0);
                    let t = this.view.contentDOM.ownerDocument;
                    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
                }
                setScrollSpeed(t, e) {
                    this.scrollSpeed = {
                        x: t,
                        y: e
                    }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
                }
                scroll() {
                    let {
                        x: t,
                        y: e
                    } = this.scrollSpeed;
                    t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), !1 === this.dragging && this.select(this.lastEvent)
                }
                skipAtoms(t) {
                    let e = null;
                    for (let i = 0; i < t.ranges.length; i++) {
                        let o = t.ranges[i],
                            n = null;
                        if (o.empty) {
                            let t = Re(this.atoms, o.from, 0);
                            t != o.from && (n = s.jT.cursor(t, -1))
                        } else {
                            let t = Re(this.atoms, o.from, -1),
                                e = Re(this.atoms, o.to, 1);
                            t == o.from && e == o.to || (n = s.jT.range(o.from == o.anchor ? t : e, o.from == o.head ? t : e))
                        }
                        n && (e || (e = t.ranges.slice()), e[i] = n)
                    }
                    return e ? s.jT.create(e, t.mainIndex) : t
                }
                select(t) {
                    let {
                        view: e
                    } = this, i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
                    !this.mustSelect && i.eq(e.state.selection, !1 === this.dragging) || this.view.dispatch({
                        selection: i,
                        userEvent: "select.pointer"
                    }), this.mustSelect = !1
                }
                update(t) {
                    t.transactions.some((t => t.isUserEvent("input.type"))) ? this.destroy() : this.style.update(t) && setTimeout((() => this.select(this.lastEvent)), 20)
                }
            }
            const Ge = Object.create(null),
                _e = Object.create(null),
                Ue = X.ie && X.ie_version < 15 || X.ios && X.webkit_version < 604;

            function Qe(t, e, i) {
                for (let s of t.facet(e)) i = s(i, t);
                return i
            }

            function Ze(t, e) {
                e = Qe(t.state, Xt, e);
                let i, {
                        state: o
                    } = t,
                    n = 1,
                    r = o.toText(e),
                    l = r.lines == o.selection.ranges.length;
                if (null != ai && o.selection.ranges.every((t => t.empty)) && ai == r.toString()) {
                    let t = -1;
                    i = o.changeByRange((i => {
                        let h = o.doc.lineAt(i.from);
                        if (h.from == t) return {
                            range: i
                        };
                        t = h.from;
                        let a = o.toText((l ? r.line(n++).text : e) + o.lineBreak);
                        return {
                            changes: {
                                from: h.from,
                                insert: a
                            },
                            range: s.jT.cursor(i.from + a.length)
                        }
                    }))
                } else i = l ? o.changeByRange((t => {
                    let e = r.line(n++);
                    return {
                        changes: {
                            from: t.from,
                            to: t.to,
                            insert: e.text
                        },
                        range: s.jT.cursor(t.from + e.length)
                    }
                })) : o.replaceSelection(r);
                t.dispatch(i, {
                    userEvent: "input.paste",
                    scrollIntoView: !0
                })
            }

            function Je(t, e, i, o) {
                if (1 == o) return s.jT.cursor(e, i);
                if (2 == o) return function(t, e, i = 1) {
                    let o = t.charCategorizer(e),
                        n = t.doc.lineAt(e),
                        r = e - n.from;
                    if (0 == n.length) return s.jT.cursor(e);
                    0 == r ? i = 1 : r == n.length && (i = -1);
                    let l = r,
                        h = r;
                    i < 0 ? l = (0, s.cp)(n.text, r, !1) : h = (0, s.cp)(n.text, r);
                    let a = o(n.text.slice(l, h));
                    for (; l > 0;) {
                        let t = (0, s.cp)(n.text, l, !1);
                        if (o(n.text.slice(t, l)) != a) break;
                        l = t
                    }
                    for (; h < n.length;) {
                        let t = (0, s.cp)(n.text, h);
                        if (o(n.text.slice(h, t)) != a) break;
                        h = t
                    }
                    return s.jT.range(l + n.from, h + n.from)
                }(t.state, e, i); {
                    let i = ft.find(t.docView, e),
                        o = t.state.doc.lineAt(i ? i.posAtEnd : e),
                        n = i ? i.posAtStart : o.from,
                        r = i ? i.posAtEnd : o.to;
                    return r < t.state.doc.length && r == o.to && r++, s.jT.range(n, r)
                }
            }
            _e.scroll = t => {
                t.inputState.lastScrollTop = t.scrollDOM.scrollTop, t.inputState.lastScrollLeft = t.scrollDOM.scrollLeft
            }, Ge.keydown = (t, e) => (t.inputState.setSelectionOrigin("select"), 27 == e.keyCode && 0 != t.inputState.tabFocusMode && (t.inputState.tabFocusMode = Date.now() + 2e3), !1), _e.touchstart = (t, e) => {
                t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer")
            }, _e.touchmove = t => {
                t.inputState.setSelectionOrigin("select.pointer")
            }, Ge.mousedown = (t, e) => {
                if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3) return !1;
                let i = null;
                for (let s of t.state.facet(It))
                    if (i = s(t, e), i) break;
                if (i || 0 != e.button || (i = function(t, e) {
                        let i = ii(t, e),
                            o = li(e),
                            n = t.state.selection;
                        return {
                            update(t) {
                                t.docChanged && (i.pos = t.changes.mapPos(i.pos), n = n.map(t.changes))
                            },
                            get(e, r, l) {
                                let h, a = ii(t, e),
                                    c = Je(t, a.pos, a.bias, o);
                                if (i.pos != a.pos && !r) {
                                    let e = Je(t, i.pos, i.bias, o),
                                        n = Math.min(e.from, c.from),
                                        r = Math.max(e.to, c.to);
                                    c = n < c.from ? s.jT.range(n, r) : s.jT.range(r, n)
                                }
                                return r ? n.replaceRange(n.main.extend(c.from, c.to)) : l && 1 == o && n.ranges.length > 1 && (h = function(t, e) {
                                    for (let i = 0; i < t.ranges.length; i++) {
                                        let {
                                            from: o,
                                            to: n
                                        } = t.ranges[i];
                                        if (o <= e && n >= e) return s.jT.create(t.ranges.slice(0, i).concat(t.ranges.slice(i + 1)), t.mainIndex == i ? 0 : t.mainIndex - (t.mainIndex > i ? 1 : 0))
                                    }
                                    return null
                                }(n, a.pos)) ? h : l ? n.addRange(c) : s.jT.create([c])
                            }
                        }
                    }(t, e)), i) {
                    let s = !t.hasFocus;
                    t.inputState.startMouseSelection(new Ye(t, e, i, s)), s && t.observer.ignore((() => {
                        x(t.contentDOM);
                        let e = t.root.activeElement;
                        e && !e.contains(t.contentDOM) && e.blur()
                    }));
                    let o = t.inputState.mouseSelection;
                    if (o) return o.start(e), !1 === o.dragging
                }
                return !1
            };
            let ti = (t, e, i) => e >= i.top && e <= i.bottom && t >= i.left && t <= i.right;

            function ei(t, e, i, s) {
                let o = ft.find(t.docView, e);
                if (!o) return 1;
                let n = e - o.posAtStart;
                if (0 == n) return 1;
                if (n == o.length) return -1;
                let r = o.coordsAt(n, -1);
                if (r && ti(i, s, r)) return -1;
                let l = o.coordsAt(n, 1);
                return l && ti(i, s, l) ? 1 : r && r.bottom >= s ? -1 : 1
            }

            function ii(t, e) {
                let i = t.posAtCoords({
                    x: e.clientX,
                    y: e.clientY
                }, !1);
                return {
                    pos: i,
                    bias: ei(t, i, e.clientX, e.clientY)
                }
            }
            const si = X.ie && X.ie_version <= 11;
            let oi = null,
                ni = 0,
                ri = 0;

            function li(t) {
                if (!si) return t.detail;
                let e = oi,
                    i = ri;
                return oi = t, ri = Date.now(), ni = !e || i > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (ni + 1) % 3 : 1
            }

            function hi(t, e, i, s) {
                if (!(i = Qe(t.state, Xt, i))) return;
                let o = t.posAtCoords({
                        x: e.clientX,
                        y: e.clientY
                    }, !1),
                    {
                        draggedContent: n
                    } = t.inputState,
                    r = s && n && function(t, e) {
                        let i = t.state.facet(zt);
                        return i.length ? i[0](e) : X.mac ? !e.altKey : !e.ctrlKey
                    }(t, e) ? {
                        from: n.from,
                        to: n.to
                    } : null,
                    l = {
                        from: o,
                        insert: i
                    },
                    h = t.state.changes(r ? [r, l] : l);
                t.focus(), t.dispatch({
                    changes: h,
                    selection: {
                        anchor: h.mapPos(o, -1),
                        head: h.mapPos(o, 1)
                    },
                    userEvent: r ? "move.drop" : "input.drop"
                }), t.inputState.draggedContent = null
            }
            Ge.dragstart = (t, e) => {
                let {
                    selection: {
                        main: i
                    }
                } = t.state;
                if (e.target.draggable) {
                    let o = t.docView.nearest(e.target);
                    if (o && o.isWidget) {
                        let t = o.posAtStart,
                            e = t + o.length;
                        (t >= i.to || e <= i.from) && (i = s.jT.range(t, e))
                    }
                }
                let {
                    inputState: o
                } = t;
                return o.mouseSelection && (o.mouseSelection.dragging = !0), o.draggedContent = i, e.dataTransfer && (e.dataTransfer.setData("Text", Qe(t.state, Yt, t.state.sliceDoc(i.from, i.to))), e.dataTransfer.effectAllowed = "copyMove"), !1
            }, Ge.dragend = t => (t.inputState.draggedContent = null, !1), Ge.drop = (t, e) => {
                if (!e.dataTransfer) return !1;
                if (t.state.readOnly) return !0;
                let i = e.dataTransfer.files;
                if (i && i.length) {
                    let s = Array(i.length),
                        o = 0,
                        n = () => {
                            ++o == i.length && hi(t, e, s.filter((t => null != t)).join(t.state.lineBreak), !1)
                        };
                    for (let t = 0; t < i.length; t++) {
                        let e = new FileReader;
                        e.onerror = n, e.onload = () => {
                            /[\x00-\x08\x0e-\x1f]{2}/.test(e.result) || (s[t] = e.result), n()
                        }, e.readAsText(i[t])
                    }
                    return !0
                } {
                    let i = e.dataTransfer.getData("Text");
                    if (i) return hi(t, e, i, !0), !0
                }
                return !1
            }, Ge.paste = (t, e) => {
                if (t.state.readOnly) return !0;
                t.observer.flush();
                let i = Ue ? null : e.clipboardData;
                return i ? (Ze(t, i.getData("text/plain") || i.getData("text/uri-list")), !0) : (function(t) {
                    let e = t.dom.parentNode;
                    if (!e) return;
                    let i = e.appendChild(document.createElement("textarea"));
                    i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.focus(), setTimeout((() => {
                        t.focus(), i.remove(), Ze(t, i.value)
                    }), 50)
                }(t), !1)
            };
            let ai = null;
            Ge.copy = Ge.cut = (t, e) => {
                let {
                    text: i,
                    ranges: s,
                    linewise: o
                } = function(t) {
                    let e = [],
                        i = [],
                        s = !1;
                    for (let o of t.selection.ranges) o.empty || (e.push(t.sliceDoc(o.from, o.to)), i.push(o));
                    if (!e.length) {
                        let o = -1;
                        for (let {
                                from: s
                            } of t.selection.ranges) {
                            let n = t.doc.lineAt(s);
                            n.number > o && (e.push(n.text), i.push({
                                from: n.from,
                                to: Math.min(t.doc.length, n.to + 1)
                            })), o = n.number
                        }
                        s = !0
                    }
                    return {
                        text: Qe(t, Yt, e.join(t.lineBreak)),
                        ranges: i,
                        linewise: s
                    }
                }(t.state);
                if (!i && !o) return !1;
                ai = o ? i : null, "cut" != e.type || t.state.readOnly || t.dispatch({
                    changes: s,
                    scrollIntoView: !0,
                    userEvent: "delete.cut"
                });
                let n = Ue ? null : e.clipboardData;
                return n ? (n.clearData(), n.setData("text/plain", i), !0) : (function(t, e) {
                    let i = t.dom.parentNode;
                    if (!i) return;
                    let s = i.appendChild(document.createElement("textarea"));
                    s.style.cssText = "position: fixed; left: -10000px; top: 10px", s.value = e, s.focus(), s.selectionEnd = e.length, s.selectionStart = 0, setTimeout((() => {
                        s.remove(), t.focus()
                    }), 50)
                }(t, i), !1)
            };
            const ci = s.q6.define();

            function di(t, e) {
                let i = [];
                for (let s of t.facet($t)) {
                    let o = s(t, e);
                    o && i.push(o)
                }
                return i ? t.update({
                    effects: i,
                    annotations: ci.of(!0)
                }) : null
            }

            function ui(t) {
                setTimeout((() => {
                    let e = t.hasFocus;
                    if (e != t.inputState.notifiedFocused) {
                        let i = di(t.state, e);
                        i ? t.dispatch(i) : t.update([])
                    }
                }), 10)
            }
            _e.focus = t => {
                t.inputState.lastFocusTime = Date.now(), t.scrollDOM.scrollTop || !t.inputState.lastScrollTop && !t.inputState.lastScrollLeft || (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), ui(t)
            }, _e.blur = t => {
                t.observer.clearSelectionRange(), ui(t)
            }, _e.compositionstart = _e.compositionupdate = t => {
                t.observer.editContext || (null == t.inputState.compositionFirstChange && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0))
            }, _e.compositionend = t => {
                t.observer.editContext || (t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionPendingKey = !0, t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0, t.inputState.compositionFirstChange = null, X.chrome && X.android ? t.observer.flushSoon() : t.inputState.compositionPendingChange ? Promise.resolve().then((() => t.observer.flush())) : setTimeout((() => {
                    t.inputState.composing < 0 && t.docView.hasComposition && t.update([])
                }), 50))
            }, _e.contextmenu = t => {
                t.inputState.lastContextMenu = Date.now()
            }, Ge.beforeinput = (t, e) => {
                var i, s;
                if ("insertReplacementText" == e.inputType && t.observer.editContext) {
                    let s = null === (i = e.dataTransfer) || void 0 === i ? void 0 : i.getData("text/plain"),
                        o = e.getTargetRanges();
                    if (s && o.length) {
                        let e = o[0],
                            i = t.posAtDOM(e.startContainer, e.startOffset),
                            n = t.posAtDOM(e.endContainer, e.endOffset);
                        return Fe(t, {
                            from: i,
                            to: n,
                            insert: t.state.toText(s)
                        }, null), !0
                    }
                }
                let o;
                if (X.chrome && X.android && (o = Ke.find((t => t.inputType == e.inputType))) && (t.observer.delayAndroidKey(o.key, o.keyCode), "Backspace" == o.key || "Delete" == o.key)) {
                    let e = (null === (s = window.visualViewport) || void 0 === s ? void 0 : s.height) || 0;
                    setTimeout((() => {
                        var i;
                        ((null === (i = window.visualViewport) || void 0 === i ? void 0 : i.height) || 0) > e + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus())
                    }), 100)
                }
                return X.ios && "deleteContentForward" == e.inputType && t.observer.flushSoon(), X.safari && "insertText" == e.inputType && t.inputState.composing >= 0 && setTimeout((() => _e.compositionend(t, e)), 20), !1
            };
            const fi = new Set;
            const pi = ["pre-wrap", "normal", "pre-line", "break-spaces"];
            let gi = !1;

            function mi() {
                gi = !1
            }
            class vi {
                constructor(t) {
                    this.lineWrapping = t, this.doc = s.xv.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
                }
                heightForGap(t, e) {
                    let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
                    return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * .5) / this.lineLength))), this.lineHeight * i
                }
                heightForLine(t) {
                    if (!this.lineWrapping) return this.lineHeight;
                    return (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight
                }
                setDoc(t) {
                    return this.doc = t, this
                }
                mustRefreshForWrapping(t) {
                    return pi.indexOf(t) > -1 != this.lineWrapping
                }
                mustRefreshForHeights(t) {
                    let e = !1;
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        s < 0 ? i++ : this.heightSamples[Math.floor(10 * s)] || (e = !0, this.heightSamples[Math.floor(10 * s)] = !0)
                    }
                    return e
                }
                refresh(t, e, i, s, o, n) {
                    let r = pi.indexOf(t) > -1,
                        l = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != r;
                    if (this.lineWrapping = r, this.lineHeight = e, this.charWidth = i, this.textHeight = s, this.lineLength = o, l) {
                        this.heightSamples = {};
                        for (let t = 0; t < n.length; t++) {
                            let e = n[t];
                            e < 0 ? t++ : this.heightSamples[Math.floor(10 * e)] = !0
                        }
                    }
                    return l
                }
            }
            class wi {
                constructor(t, e) {
                    this.from = t, this.heights = e, this.index = 0
                }
                get more() {
                    return this.index < this.heights.length
                }
            }
            class bi {
                constructor(t, e, i, s, o) {
                    this.from = t, this.length = e, this.top = i, this.height = s, this._content = o
                }
                get type() {
                    return "number" == typeof this._content ? rt.Text : Array.isArray(this._content) ? this._content : this._content.type
                }
                get to() {
                    return this.from + this.length
                }
                get bottom() {
                    return this.top + this.height
                }
                get widget() {
                    return this._content instanceof ct ? this._content.widget : null
                }
                get widgetLineBreaks() {
                    return "number" == typeof this._content ? this._content : 0
                }
                join(t) {
                    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
                    return new bi(this.from, this.length + t.length, this.top, this.height + t.height, e)
                }
            }
            var yi = function(t) {
                return t[t.ByPos = 0] = "ByPos", t[t.ByHeight = 1] = "ByHeight", t[t.ByPosNoHeight = 2] = "ByPosNoHeight", t
            }(yi || (yi = {}));
            const xi = .001;
            class Si {
                constructor(t, e, i = 2) {
                    this.length = t, this.height = e, this.flags = i
                }
                get outdated() {
                    return (2 & this.flags) > 0
                }
                set outdated(t) {
                    this.flags = (t ? 2 : 0) | -3 & this.flags
                }
                setHeight(t) {
                    this.height != t && (Math.abs(this.height - t) > xi && (gi = !0), this.height = t)
                }
                replace(t, e, i) {
                    return Si.of(i)
                }
                decomposeLeft(t, e) {
                    e.push(this)
                }
                decomposeRight(t, e) {
                    e.push(this)
                }
                applyChanges(t, e, i, s) {
                    let o = this,
                        n = i.doc;
                    for (let r = s.length - 1; r >= 0; r--) {
                        let {
                            fromA: l,
                            toA: h,
                            fromB: a,
                            toB: c
                        } = s[r], d = o.lineAt(l, yi.ByPosNoHeight, i.setDoc(e), 0, 0), u = d.to >= h ? d : o.lineAt(h, yi.ByPosNoHeight, i, 0, 0);
                        for (c += u.to - h, h = u.to; r > 0 && d.from <= s[r - 1].toA;) l = s[r - 1].fromA, a = s[r - 1].fromB, r--, l < d.from && (d = o.lineAt(l, yi.ByPosNoHeight, i, 0, 0));
                        a += d.from - l, l = d.from;
                        let f = Oi.build(i.setDoc(n), t, a, c);
                        o = Mi(o, o.replace(l, h, f))
                    }
                    return o.updateHeight(i, 0)
                }
                static empty() {
                    return new ki(0, 0)
                }
                static of (t) {
                    if (1 == t.length) return t[0];
                    let e = 0,
                        i = t.length,
                        s = 0,
                        o = 0;
                    for (;;)
                        if (e == i)
                            if (s > 2 * o) {
                                let o = t[e - 1];
                                o.break ? t.splice(--e, 1, o.left, null, o.right) : t.splice(--e, 1, o.left, o.right), i += 1 + o.break, s -= o.size
                            } else {
                                if (!(o > 2 * s)) break; {
                                    let e = t[i];
                                    e.break ? t.splice(i, 1, e.left, null, e.right) : t.splice(i, 1, e.left, e.right), i += 2 + e.break, o -= e.size
                                }
                            }
                    else if (s < o) {
                        let i = t[e++];
                        i && (s += i.size)
                    } else {
                        let e = t[--i];
                        e && (o += e.size)
                    }
                    let n = 0;
                    return null == t[e - 1] ? (n = 1, e--) : null == t[e] && (n = 1, i++), new Ti(Si.of(t.slice(0, e)), n, Si.of(t.slice(i)))
                }
            }

            function Mi(t, e) {
                return t == e ? t : (t.constructor != e.constructor && (gi = !0), e)
            }
            Si.prototype.size = 1;
            class Ci extends Si {
                constructor(t, e, i) {
                    super(t, e), this.deco = i
                }
                blockAt(t, e, i, s) {
                    return new bi(s, this.length, i, this.height, this.deco || 0)
                }
                lineAt(t, e, i, s, o) {
                    return this.blockAt(0, i, s, o)
                }
                forEachLine(t, e, i, s, o, n) {
                    t <= o + this.length && e >= o && n(this.blockAt(0, i, s, o))
                }
                updateHeight(t, e = 0, i = !1, s) {
                    return s && s.from <= e && s.more && this.setHeight(s.heights[s.index++]), this.outdated = !1, this
                }
                toString() {
                    return `block(${this.length})`
                }
            }
            class ki extends Ci {
                constructor(t, e) {
                    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0
                }
                blockAt(t, e, i, s) {
                    return new bi(s, this.length, i, this.height, this.breaks)
                }
                replace(t, e, i) {
                    let s = i[0];
                    return 1 == i.length && (s instanceof ki || s instanceof Ai && 4 & s.flags) && Math.abs(this.length - s.length) < 10 ? (s instanceof Ai ? s = new ki(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : Si.of(i)
                }
                updateHeight(t, e = 0, i = !1, s) {
                    return s && s.from <= e && s.more ? this.setHeight(s.heights[s.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = !1, this
                }
                toString() {
                    return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
                }
            }
            class Ai extends Si {
                constructor(t) {
                    super(t, 0)
                }
                heightMetrics(t, e) {
                    let i, s = t.doc.lineAt(e).number,
                        o = t.doc.lineAt(e + this.length).number,
                        n = o - s + 1,
                        r = 0;
                    if (t.lineWrapping) {
                        let e = Math.min(this.height, t.lineHeight * n);
                        i = e / n, this.length > n + 1 && (r = (this.height - e) / (this.length - n - 1))
                    } else i = this.height / n;
                    return {
                        firstLine: s,
                        lastLine: o,
                        perLine: i,
                        perChar: r
                    }
                }
                blockAt(t, e, i, s) {
                    let {
                        firstLine: o,
                        lastLine: n,
                        perLine: r,
                        perChar: l
                    } = this.heightMetrics(e, s);
                    if (e.lineWrapping) {
                        let o = s + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)),
                            n = e.doc.lineAt(o),
                            h = r + n.length * l,
                            a = Math.max(i, t - h / 2);
                        return new bi(n.from, n.length, a, h, 0)
                    } {
                        let s = Math.max(0, Math.min(n - o, Math.floor((t - i) / r))),
                            {
                                from: l,
                                length: h
                            } = e.doc.line(o + s);
                        return new bi(l, h, i + r * s, r, 0)
                    }
                }
                lineAt(t, e, i, s, o) {
                    if (e == yi.ByHeight) return this.blockAt(t, i, s, o);
                    if (e == yi.ByPosNoHeight) {
                        let {
                            from: e,
                            to: s
                        } = i.doc.lineAt(t);
                        return new bi(e, s - e, 0, 0, 0)
                    }
                    let {
                        firstLine: n,
                        perLine: r,
                        perChar: l
                    } = this.heightMetrics(i, o), h = i.doc.lineAt(t), a = r + h.length * l, c = h.number - n, d = s + r * c + l * (h.from - o - c);
                    return new bi(h.from, h.length, Math.max(s, Math.min(d, s + this.height - a)), a, 0)
                }
                forEachLine(t, e, i, s, o, n) {
                    t = Math.max(t, o), e = Math.min(e, o + this.length);
                    let {
                        firstLine: r,
                        perLine: l,
                        perChar: h
                    } = this.heightMetrics(i, o);
                    for (let a = t, c = s; a <= e;) {
                        let e = i.doc.lineAt(a);
                        if (a == t) {
                            let i = e.number - r;
                            c += l * i + h * (t - o - i)
                        }
                        let s = l + h * e.length;
                        n(new bi(e.from, e.length, c, s, 0)), c += s, a = e.to + 1
                    }
                }
                replace(t, e, i) {
                    let s = this.length - e;
                    if (s > 0) {
                        let t = i[i.length - 1];
                        t instanceof Ai ? i[i.length - 1] = new Ai(t.length + s) : i.push(null, new Ai(s - 1))
                    }
                    if (t > 0) {
                        let e = i[0];
                        e instanceof Ai ? i[0] = new Ai(t + e.length) : i.unshift(new Ai(t - 1), null)
                    }
                    return Si.of(i)
                }
                decomposeLeft(t, e) {
                    e.push(new Ai(t - 1), null)
                }
                decomposeRight(t, e) {
                    e.push(null, new Ai(this.length - t - 1))
                }
                updateHeight(t, e = 0, i = !1, s) {
                    let o = e + this.length;
                    if (s && s.from <= e + this.length && s.more) {
                        let i = [],
                            n = Math.max(e, s.from),
                            r = -1;
                        for (s.from > e && i.push(new Ai(s.from - e - 1).updateHeight(t, e)); n <= o && s.more;) {
                            let e = t.doc.lineAt(n).length;
                            i.length && i.push(null);
                            let o = s.heights[s.index++]; - 1 == r ? r = o : Math.abs(o - r) >= xi && (r = -2);
                            let l = new ki(e, o);
                            l.outdated = !1, i.push(l), n += e + 1
                        }
                        n <= o && i.push(null, new Ai(o - n).updateHeight(t, n));
                        let l = Si.of(i);
                        return (r < 0 || Math.abs(l.height - this.height) >= xi || Math.abs(r - this.heightMetrics(t, e).perLine) >= xi) && (gi = !0), Mi(this, l)
                    }
                    return (i || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = !1), this
                }
                toString() {
                    return `gap(${this.length})`
                }
            }
            class Ti extends Si {
                constructor(t, e, i) {
                    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size
                }
                get break() {
                    return 1 & this.flags
                }
                blockAt(t, e, i, s) {
                    let o = i + this.left.height;
                    return t < o ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, o, s + this.left.length + this.break)
                }
                lineAt(t, e, i, s, o) {
                    let n = s + this.left.height,
                        r = o + this.left.length + this.break,
                        l = e == yi.ByHeight ? t < n : t < r,
                        h = l ? this.left.lineAt(t, e, i, s, o) : this.right.lineAt(t, e, i, n, r);
                    if (this.break || (l ? h.to < r : h.from > r)) return h;
                    let a = e == yi.ByPosNoHeight ? yi.ByPosNoHeight : yi.ByPos;
                    return l ? h.join(this.right.lineAt(r, a, i, n, r)) : this.left.lineAt(r, a, i, s, o).join(h)
                }
                forEachLine(t, e, i, s, o, n) {
                    let r = s + this.left.height,
                        l = o + this.left.length + this.break;
                    if (this.break) t < l && this.left.forEachLine(t, e, i, s, o, n), e >= l && this.right.forEachLine(t, e, i, r, l, n);
                    else {
                        let h = this.lineAt(l, yi.ByPos, i, s, o);
                        t < h.from && this.left.forEachLine(t, h.from - 1, i, s, o, n), h.to >= t && h.from <= e && n(h), e > h.to && this.right.forEachLine(h.to + 1, e, i, r, l, n)
                    }
                }
                replace(t, e, i) {
                    let s = this.left.length + this.break;
                    if (e < s) return this.balanced(this.left.replace(t, e, i), this.right);
                    if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - s, e - s, i));
                    let o = [];
                    t > 0 && this.decomposeLeft(t, o);
                    let n = o.length;
                    for (let r of i) o.push(r);
                    if (t > 0 && Di(o, n - 1), e < this.length) {
                        let t = o.length;
                        this.decomposeRight(e, o), Di(o, t)
                    }
                    return Si.of(o)
                }
                decomposeLeft(t, e) {
                    let i = this.left.length;
                    if (t <= i) return this.left.decomposeLeft(t, e);
                    e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e)
                }
                decomposeRight(t, e) {
                    let i = this.left.length,
                        s = i + this.break;
                    if (t >= s) return this.right.decomposeRight(t - s, e);
                    t < i && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right)
                }
                balanced(t, e) {
                    return t.size > 2 * e.size || e.size > 2 * t.size ? Si.of(this.break ? [t, null, e] : [t, e]) : (this.left = Mi(this.left, t), this.right = Mi(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break+e.length, this)
                }
                updateHeight(t, e = 0, i = !1, s) {
                    let {
                        left: o,
                        right: n
                    } = this, r = e + o.length + this.break, l = null;
                    return s && s.from <= e + o.length && s.more ? l = o = o.updateHeight(t, e, i, s) : o.updateHeight(t, e, i), s && s.from <= r + n.length && s.more ? l = n = n.updateHeight(t, r, i, s) : n.updateHeight(t, r, i), l ? this.balanced(o, n) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
                }
                toString() {
                    return this.left + (this.break ? " " : "-") + this.right
                }
            }

            function Di(t, e) {
                let i, s;
                null == t[e] && (i = t[e - 1]) instanceof Ai && (s = t[e + 1]) instanceof Ai && t.splice(e - 1, 3, new Ai(i.length + 1 + s.length))
            }
            class Oi {
                constructor(t, e) {
                    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t
                }
                get isCovered() {
                    return this.covering && this.nodes[this.nodes.length - 1] == this.covering
                }
                span(t, e) {
                    if (this.lineStart > -1) {
                        let t = Math.min(e, this.lineEnd),
                            i = this.nodes[this.nodes.length - 1];
                        i instanceof ki ? i.length += t - this.pos : (t > this.pos || !this.isCovered) && this.nodes.push(new ki(t - this.pos, -1)), this.writtenTo = t, e > t && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
                    }
                    this.pos = e
                }
                point(t, e, i) {
                    if (t < e || i.heightRelevant) {
                        let s = i.widget ? i.widget.estimatedHeight : 0,
                            o = i.widget ? i.widget.lineBreaks : 0;
                        s < 0 && (s = this.oracle.lineHeight);
                        let n = e - t;
                        i.block ? this.addBlock(new Ci(n, s, i)) : (n || o || s >= 5) && this.addLineDeco(s, o, n)
                    } else e > t && this.span(t, e);
                    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
                }
                enterLine() {
                    if (this.lineStart > -1) return;
                    let {
                        from: t,
                        to: e
                    } = this.oracle.doc.lineAt(this.pos);
                    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new ki(this.pos - t, -1)), this.writtenTo = this.pos
                }
                blankContent(t, e) {
                    let i = new Ai(e - t);
                    return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i
                }
                ensureLine() {
                    this.enterLine();
                    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
                    if (t instanceof ki) return t;
                    let e = new ki(0, -1);
                    return this.nodes.push(e), e
                }
                addBlock(t) {
                    this.enterLine();
                    let e = t.deco;
                    e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t)
                }
                addLineDeco(t, e, i) {
                    let s = this.ensureLine();
                    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, t), s.breaks += e, this.writtenTo = this.pos = this.pos + i
                }
                finish(t) {
                    let e = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
                    !(this.lineStart > -1) || e instanceof ki || this.isCovered ? (this.writtenTo < this.pos || null == e) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new ki(0, -1));
                    let i = t;
                    for (let s of this.nodes) s instanceof ki && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
                    return this.nodes
                }
                static build(t, e, i, o) {
                    let n = new Oi(i, t);
                    return s.Xs.spans(e, i, o, n, 0), n.finish(i)
                }
            }
            class Ei {
                constructor() {
                    this.changes = []
                }
                compareRange() {}
                comparePoint(t, e, i, s) {
                    (t < e || i && i.heightRelevant || s && s.heightRelevant) && ut(t, e, this.changes, 5)
                }
            }

            function Ri(t, e) {
                let i = t.getBoundingClientRect(),
                    s = t.ownerDocument,
                    o = s.defaultView || window,
                    n = Math.max(0, i.left),
                    r = Math.min(o.innerWidth, i.right),
                    l = Math.max(0, i.top),
                    h = Math.min(o.innerHeight, i.bottom);
                for (let a = t.parentNode; a && a != s.body;)
                    if (1 == a.nodeType) {
                        let e = a,
                            i = window.getComputedStyle(e);
                        if ((e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth) && "visible" != i.overflow) {
                            let i = e.getBoundingClientRect();
                            n = Math.max(n, i.left), r = Math.min(r, i.right), l = Math.max(l, i.top), h = Math.min(a == t.parentNode ? o.innerHeight : h, i.bottom)
                        }
                        a = "absolute" == i.position || "fixed" == i.position ? e.offsetParent : e.parentNode
                    } else {
                        if (11 != a.nodeType) break;
                        a = a.host
                    }
                return {
                    left: n - i.left,
                    right: Math.max(n, r) - i.left,
                    top: l - (i.top + e),
                    bottom: Math.max(l, h) - (i.top + e)
                }
            }

            function Bi(t, e) {
                let i = t.getBoundingClientRect();
                return {
                    left: 0,
                    right: i.right - i.left,
                    top: e,
                    bottom: i.bottom - (i.top + e)
                }
            }
            class Li {
                constructor(t, e, i) {
                    this.from = t, this.to = e, this.size = i
                }
                static same(t, e) {
                    if (t.length != e.length) return !1;
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i],
                            o = e[i];
                        if (s.from != o.from || s.to != o.to || s.size != o.size) return !1
                    }
                    return !0
                }
                draw(t, e) {
                    return lt.replace({
                        widget: new Pi(this.size * (e ? t.scaleY : t.scaleX), e)
                    }).range(this.from, this.to)
                }
            }
            class Pi extends nt {
                constructor(t, e) {
                    super(), this.size = t, this.vertical = e
                }
                eq(t) {
                    return t.size == this.size && t.vertical == this.vertical
                }
                toDOM() {
                    let t = document.createElement("div");
                    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t
                }
                get estimatedHeight() {
                    return this.vertical ? this.size : -1
                }
            }
            class Hi {
                constructor(t) {
                    this.state = t, this.pixelViewport = {
                        left: 0,
                        right: window.innerWidth,
                        top: 0,
                        bottom: 0
                    }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Fi, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = bt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
                    let e = t.facet(le).some((t => "function" != typeof t && "cm-lineWrapping" == t.class));
                    this.heightOracle = new vi(e), this.stateDeco = t.facet(he).filter((t => "function" != typeof t)), this.heightMap = Si.empty().applyChanges(this.stateDeco, s.xv.empty, this.heightOracle.setDoc(t.doc), [new me(0, 0, 0, t.doc.length)]);
                    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); i++);
                    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = lt.set(this.lineGaps.map((t => t.draw(this, !1)))), this.computeVisibleRanges()
                }
                updateForViewport() {
                    let t = [this.viewport],
                        {
                            main: e
                        } = this.state.selection;
                    for (let i = 0; i <= 1; i++) {
                        let s = i ? e.head : e.anchor;
                        if (!t.some((({
                                from: t,
                                to: e
                            }) => s >= t && s <= e))) {
                            let {
                                from: e,
                                to: i
                            } = this.lineBlockAt(s);
                            t.push(new Vi(e, i))
                        }
                    }
                    return this.viewports = t.sort(((t, e) => t.from - e.from)), this.updateScaler()
                }
                updateScaler() {
                    let t = this.scaler;
                    return this.scaler = this.heightMap.height <= 7e6 ? Fi : new zi(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2
                }
                updateViewportLines() {
                    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t => {
                        this.viewportLines.push(Ii(t, this.scaler))
                    }))
                }
                update(t, e = null) {
                    this.state = t.state;
                    let i = this.stateDeco;
                    this.stateDeco = this.state.facet(he).filter((t => "function" != typeof t));
                    let o = t.changedRanges,
                        n = me.extendWithRanges(o, function(t, e, i) {
                            let o = new Ei;
                            return s.Xs.compare(t, e, i, o, 0), o.changes
                        }(i, this.stateDeco, t ? t.changes : s.as.empty(this.state.doc.length))),
                        r = this.heightMap.height,
                        l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
                    mi(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), n), (this.heightMap.height != r || gi) && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
                    let h = n.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
                    (e && (e.range.head < h.from || e.range.head > h.to) || !this.viewportIsAppropriate(h)) && (h = this.getViewport(0, e));
                    let a = h.from != this.viewport.from || h.to != this.viewport.to;
                    this.viewport = h, t.flags |= this.updateForViewport(), (a || !t.changes.empty || 2 & t.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(_t) && (this.mustEnforceCursorAssoc = !0)
                }
                measure(t) {
                    let e = t.contentDOM,
                        i = window.getComputedStyle(e),
                        o = this.heightOracle,
                        n = i.whiteSpace;
                    this.defaultTextDirection = "rtl" == i.direction ? bt.RTL : bt.LTR;
                    let r = this.heightOracle.mustRefreshForWrapping(n),
                        l = e.getBoundingClientRect(),
                        h = r || this.mustMeasureContent || this.contentDOMHeight != l.height;
                    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
                    let a = 0,
                        c = 0;
                    if (l.width && l.height) {
                        let {
                            scaleX: t,
                            scaleY: i
                        } = v(e, l);
                        (t > .005 && Math.abs(this.scaleX - t) > .005 || i > .005 && Math.abs(this.scaleY - i) > .005) && (this.scaleX = t, this.scaleY = i, a |= 8, r = h = !0)
                    }
                    let d = (parseInt(i.paddingTop) || 0) * this.scaleY,
                        u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
                    this.paddingTop == d && this.paddingBottom == u || (this.paddingTop = d, this.paddingBottom = u, a |= 10), this.editorWidth != t.scrollDOM.clientWidth && (o.lineWrapping && (h = !0), this.editorWidth = t.scrollDOM.clientWidth, a |= 8);
                    let f = t.scrollDOM.scrollTop * this.scaleY;
                    this.scrollTop != f && (this.scrollAnchorHeight = -1, this.scrollTop = f), this.scrolledToBottom = k(t.scrollDOM);
                    let p = (this.printing ? Bi : Ri)(e, this.paddingTop),
                        g = p.top - this.pixelViewport.top,
                        m = p.bottom - this.pixelViewport.bottom;
                    this.pixelViewport = p;
                    let w = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
                    if (w != this.inView && (this.inView = w, w && (h = !0)), !this.inView && !this.scrollTarget) return 0;
                    let b = l.width;
                    if (this.contentDOMWidth == b && this.editorHeight == t.scrollDOM.clientHeight || (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, a |= 8), h) {
                        let e = t.docView.measureVisibleLineHeights(this.viewport);
                        if (o.mustRefreshForHeights(e) && (r = !0), r || o.lineWrapping && Math.abs(b - this.contentDOMWidth) > o.charWidth) {
                            let {
                                lineHeight: i,
                                charWidth: s,
                                textHeight: l
                            } = t.docView.measureTextSize();
                            r = i > 0 && o.refresh(n, i, s, l, b / s, e), r && (t.docView.minWidth = 0, a |= 8)
                        }
                        g > 0 && m > 0 ? c = Math.max(g, m) : g < 0 && m < 0 && (c = Math.min(g, m)), mi();
                        for (let i of this.viewports) {
                            let n = i.from == this.viewport.from ? e : t.docView.measureVisibleLineHeights(i);
                            this.heightMap = (r ? Si.empty().applyChanges(this.stateDeco, s.xv.empty, this.heightOracle, [new me(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(o, 0, r, new wi(i.from, n))
                        }
                        gi && (a |= 2)
                    }
                    let y = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
                    return y && (2 & a && (a |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), a |= this.updateForViewport()), (2 & a || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r ? [] : this.lineGaps, t)), a |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), a
                }
                get visibleTop() {
                    return this.scaler.fromDOM(this.pixelViewport.top)
                }
                get visibleBottom() {
                    return this.scaler.fromDOM(this.pixelViewport.bottom)
                }
                getViewport(t, e) {
                    let i = .5 - Math.max(-.5, Math.min(.5, t / 1e3 / 2)),
                        s = this.heightMap,
                        o = this.heightOracle,
                        {
                            visibleTop: n,
                            visibleBottom: r
                        } = this,
                        l = new Vi(s.lineAt(n - 1e3 * i, yi.ByHeight, o, 0, 0).from, s.lineAt(r + 1e3 * (1 - i), yi.ByHeight, o, 0, 0).to);
                    if (e) {
                        let {
                            head: t
                        } = e.range;
                        if (t < l.from || t > l.to) {
                            let i, n = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
                                r = s.lineAt(t, yi.ByPos, o, 0, 0);
                            i = "center" == e.y ? (r.top + r.bottom) / 2 - n / 2 : "start" == e.y || "nearest" == e.y && t < l.from ? r.top : r.bottom - n, l = new Vi(s.lineAt(i - 500, yi.ByHeight, o, 0, 0).from, s.lineAt(i + n + 500, yi.ByHeight, o, 0, 0).to)
                        }
                    }
                    return l
                }
                mapViewport(t, e) {
                    let i = e.mapPos(t.from, -1),
                        s = e.mapPos(t.to, 1);
                    return new Vi(this.heightMap.lineAt(i, yi.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, yi.ByPos, this.heightOracle, 0, 0).to)
                }
                viewportIsAppropriate({
                    from: t,
                    to: e
                }, i = 0) {
                    if (!this.inView) return !0;
                    let {
                        top: s
                    } = this.heightMap.lineAt(t, yi.ByPos, this.heightOracle, 0, 0), {
                        bottom: o
                    } = this.heightMap.lineAt(e, yi.ByPos, this.heightOracle, 0, 0), {
                        visibleTop: n,
                        visibleBottom: r
                    } = this;
                    return (0 == t || s <= n - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || o >= r + Math.max(10, Math.min(i, 250))) && s > n - 2e3 && o < r + 2e3
                }
                mapLineGaps(t, e) {
                    if (!t.length || e.empty) return t;
                    let i = [];
                    for (let s of t) e.touchesRange(s.from, s.to) || i.push(new Li(e.mapPos(s.from), e.mapPos(s.to), s.size));
                    return i
                }
                ensureLineGaps(t, e) {
                    let i = this.heightOracle.lineWrapping,
                        o = i ? 1e4 : 2e3,
                        n = o >> 1,
                        r = o << 1;
                    if (this.defaultTextDirection != bt.LTR && !i) return [];
                    let l = [],
                        h = (o, r, a, c) => {
                            if (r - o < n) return;
                            let d = this.state.selection.main,
                                u = [d.from];
                            d.empty || u.push(d.to);
                            for (let t of u)
                                if (t > o && t < r) return h(o, t - 10, a, c), void h(t + 10, r, a, c);
                            let f = function(t, e) {
                                for (let i of t)
                                    if (e(i)) return i;
                                return
                            }(t, (t => t.from >= a.from && t.to <= a.to && Math.abs(t.from - o) < n && Math.abs(t.to - r) < n && !u.some((e => t.from < e && t.to > e))));
                            if (!f) {
                                if (r < a.to && e && i && e.visibleRanges.some((t => t.from <= r && t.to >= r))) {
                                    let t = e.moveToLineBoundary(s.jT.cursor(r), !1, !0).head;
                                    t > o && (r = t)
                                }
                                f = new Li(o, r, this.gapSize(a, o, r, c))
                            }
                            l.push(f)
                        },
                        a = t => {
                            if (t.length < r || t.type != rt.Text) return;
                            let e = function(t, e, i) {
                                let o = [],
                                    n = t,
                                    r = 0;
                                s.Xs.spans(i, t, e, {
                                    span() {},
                                    point(t, e) {
                                        t > n && (o.push({
                                            from: n,
                                            to: t
                                        }), r += t - n), n = e
                                    }
                                }, 20), n < e && (o.push({
                                    from: n,
                                    to: e
                                }), r += e - n);
                                return {
                                    total: r,
                                    ranges: o
                                }
                            }(t.from, t.to, this.stateDeco);
                            if (e.total < r) return;
                            let n, l, a = this.scrollTarget ? this.scrollTarget.range.head : null;
                            if (i) {
                                let i, s, r = o / this.heightOracle.lineLength * this.heightOracle.lineHeight;
                                if (null != a) {
                                    let o = Wi(e, a),
                                        n = ((this.visibleBottom - this.visibleTop) / 2 + r) / t.height;
                                    i = o - n, s = o + n
                                } else i = (this.visibleTop - t.top - r) / t.height, s = (this.visibleBottom - t.top + r) / t.height;
                                n = Ni(e, i), l = Ni(e, s)
                            } else {
                                let t, i, s = e.total * this.heightOracle.charWidth,
                                    r = o * this.heightOracle.charWidth;
                                if (null != a) {
                                    let o = Wi(e, a),
                                        n = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + r) / s;
                                    t = o - n, i = o + n
                                } else t = (this.pixelViewport.left - r) / s, i = (this.pixelViewport.right + r) / s;
                                n = Ni(e, t), l = Ni(e, i)
                            }
                            n > t.from && h(t.from, n, t, e), l < t.to && h(l, t.to, t, e)
                        };
                    for (let s of this.viewportLines) Array.isArray(s.type) ? s.type.forEach(a) : a(s);
                    return l
                }
                gapSize(t, e, i, s) {
                    let o = Wi(s, i) - Wi(s, e);
                    return this.heightOracle.lineWrapping ? t.height * o : s.total * this.heightOracle.charWidth * o
                }
                updateLineGaps(t) {
                    Li.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = lt.set(t.map((t => t.draw(this, this.heightOracle.lineWrapping)))))
                }
                computeVisibleRanges() {
                    let t = this.stateDeco;
                    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
                    let e = [];
                    s.Xs.spans(t, this.viewport.from, this.viewport.to, {
                        span(t, i) {
                            e.push({
                                from: t,
                                to: i
                            })
                        },
                        point() {}
                    }, 20);
                    let i = e.length != this.visibleRanges.length || this.visibleRanges.some(((t, i) => t.from != e[i].from || t.to != e[i].to));
                    return this.visibleRanges = e, i ? 4 : 0
                }
                lineBlockAt(t) {
                    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e => e.from <= t && e.to >= t)) || Ii(this.heightMap.lineAt(t, yi.ByPos, this.heightOracle, 0, 0), this.scaler)
                }
                lineBlockAtHeight(t) {
                    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e => e.top <= t && e.bottom >= t)) || Ii(this.heightMap.lineAt(this.scaler.fromDOM(t), yi.ByHeight, this.heightOracle, 0, 0), this.scaler)
                }
                scrollAnchorAt(t) {
                    let e = this.lineBlockAtHeight(t + 8);
                    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0]
                }
                elementAtHeight(t) {
                    return Ii(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler)
                }
                get docHeight() {
                    return this.scaler.toDOM(this.heightMap.height)
                }
                get contentHeight() {
                    return this.docHeight + this.paddingTop + this.paddingBottom
                }
            }
            class Vi {
                constructor(t, e) {
                    this.from = t, this.to = e
                }
            }

            function Ni({
                total: t,
                ranges: e
            }, i) {
                if (i <= 0) return e[0].from;
                if (i >= 1) return e[e.length - 1].to;
                let s = Math.floor(t * i);
                for (let o = 0;; o++) {
                    let {
                        from: t,
                        to: i
                    } = e[o], n = i - t;
                    if (s <= n) return t + s;
                    s -= n
                }
            }

            function Wi(t, e) {
                let i = 0;
                for (let {
                        from: s,
                        to: o
                    } of t.ranges) {
                    if (e <= o) {
                        i += e - s;
                        break
                    }
                    i += o - s
                }
                return i / t.total
            }
            const Fi = {
                toDOM: t => t,
                fromDOM: t => t,
                scale: 1,
                eq(t) {
                    return t == this
                }
            };
            class zi {
                constructor(t, e, i) {
                    let s = 0,
                        o = 0,
                        n = 0;
                    this.viewports = i.map((({
                        from: i,
                        to: o
                    }) => {
                        let n = e.lineAt(i, yi.ByPos, t, 0, 0).top,
                            r = e.lineAt(o, yi.ByPos, t, 0, 0).bottom;
                        return s += r - n, {
                            from: i,
                            to: o,
                            top: n,
                            bottom: r,
                            domTop: 0,
                            domBottom: 0
                        }
                    })), this.scale = (7e6 - s) / (e.height - s);
                    for (let r of this.viewports) r.domTop = n + (r.top - o) * this.scale, n = r.domBottom = r.domTop + (r.bottom - r.top), o = r.bottom
                }
                toDOM(t) {
                    for (let e = 0, i = 0, s = 0;; e++) {
                        let o = e < this.viewports.length ? this.viewports[e] : null;
                        if (!o || t < o.top) return s + (t - i) * this.scale;
                        if (t <= o.bottom) return o.domTop + (t - o.top);
                        i = o.bottom, s = o.domBottom
                    }
                }
                fromDOM(t) {
                    for (let e = 0, i = 0, s = 0;; e++) {
                        let o = e < this.viewports.length ? this.viewports[e] : null;
                        if (!o || t < o.domTop) return i + (t - s) / this.scale;
                        if (t <= o.domBottom) return o.top + (t - o.domTop);
                        i = o.bottom, s = o.domBottom
                    }
                }
                eq(t) {
                    return t instanceof zi && (this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every(((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to)))
                }
            }

            function Ii(t, e) {
                if (1 == e.scale) return t;
                let i = e.toDOM(t.top),
                    s = e.toDOM(t.bottom);
                return new bi(t.from, t.length, i, s - i, Array.isArray(t._content) ? t._content.map((t => Ii(t, e))) : t._content)
            }
            const qi = s.r$.define({
                    combine: t => t.join(" ")
                }),
                Ki = s.r$.define({
                    combine: t => t.indexOf(!0) > -1
                }),
                ji = o.V.newName(),
                $i = o.V.newName(),
                Xi = o.V.newName(),
                Yi = {
                    "&light": "." + $i,
                    "&dark": "." + Xi
                };

            function Gi(t, e, i) {
                return new o.V(e, {
                    finish: e => /&/.test(e) ? e.replace(/&\w*/, (e => {
                        if ("&" == e) return t;
                        if (!i || !i[e]) throw new RangeError(`Unsupported selector: ${e}`);
                        return i[e]
                    })) : t + " " + e
                })
            }
            const _i = Gi("." + ji, {
                    "&": {
                        position: "relative !important",
                        boxSizing: "border-box",
                        "&.cm-focused": {
                            outline: "1px dotted #212121"
                        },
                        display: "flex !important",
                        flexDirection: "column"
                    },
                    ".cm-scroller": {
                        display: "flex !important",
                        alignItems: "flex-start !important",
                        fontFamily: "monospace",
                        lineHeight: 1.4,
                        height: "100%",
                        overflowX: "auto",
                        position: "relative",
                        zIndex: 0,
                        overflowAnchor: "none"
                    },
                    ".cm-content": {
                        margin: 0,
                        flexGrow: 2,
                        flexShrink: 0,
                        display: "block",
                        whiteSpace: "pre",
                        wordWrap: "normal",
                        boxSizing: "border-box",
                        minHeight: "100%",
                        padding: "4px 0",
                        outline: "none",
                        "&[contenteditable=true]": {
                            WebkitUserModify: "read-write-plaintext-only"
                        }
                    },
                    ".cm-lineWrapping": {
                        whiteSpace_fallback: "pre-wrap",
                        whiteSpace: "break-spaces",
                        wordBreak: "break-word",
                        overflowWrap: "anywhere",
                        flexShrink: 1
                    },
                    "&light .cm-content": {
                        caretColor: "black"
                    },
                    "&dark .cm-content": {
                        caretColor: "white"
                    },
                    ".cm-line": {
                        display: "block",
                        padding: "0 2px 0 6px"
                    },
                    ".cm-layer": {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        contain: "size style",
                        "& > *": {
                            position: "absolute"
                        }
                    },
                    "&light .cm-selectionBackground": {
                        background: "#d9d9d9"
                    },
                    "&dark .cm-selectionBackground": {
                        background: "#222"
                    },
                    "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
                        background: "#d7d4f0"
                    },
                    "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
                        background: "#233"
                    },
                    ".cm-cursorLayer": {
                        pointerEvents: "none"
                    },
                    "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
                        animation: "steps(1) cm-blink 1.2s infinite"
                    },
                    "@keyframes cm-blink": {
                        "0%": {},
                        "50%": {
                            opacity: 0
                        },
                        "100%": {}
                    },
                    "@keyframes cm-blink2": {
                        "0%": {},
                        "50%": {
                            opacity: 0
                        },
                        "100%": {}
                    },
                    ".cm-cursor, .cm-dropCursor": {
                        borderLeft: "1.2px solid black",
                        marginLeft: "-0.6px",
                        pointerEvents: "none"
                    },
                    ".cm-cursor": {
                        display: "none"
                    },
                    "&dark .cm-cursor": {
                        borderLeftColor: "#444"
                    },
                    ".cm-dropCursor": {
                        position: "absolute"
                    },
                    "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
                        display: "block"
                    },
                    ".cm-iso": {
                        unicodeBidi: "isolate"
                    },
                    ".cm-announced": {
                        position: "fixed",
                        top: "-10000px"
                    },
                    "@media print": {
                        ".cm-announced": {
                            display: "none"
                        }
                    },
                    "&light .cm-activeLine": {
                        backgroundColor: "#cceeff44"
                    },
                    "&dark .cm-activeLine": {
                        backgroundColor: "#99eeff33"
                    },
                    "&light .cm-specialChar": {
                        color: "red"
                    },
                    "&dark .cm-specialChar": {
                        color: "#f78"
                    },
                    ".cm-gutters": {
                        flexShrink: 0,
                        display: "flex",
                        height: "100%",
                        boxSizing: "border-box",
                        insetInlineStart: 0,
                        zIndex: 200
                    },
                    "&light .cm-gutters": {
                        backgroundColor: "#f5f5f5",
                        color: "#6c6c6c",
                        borderRight: "1px solid #ddd"
                    },
                    "&dark .cm-gutters": {
                        backgroundColor: "#333338",
                        color: "#ccc"
                    },
                    ".cm-gutter": {
                        display: "flex !important",
                        flexDirection: "column",
                        flexShrink: 0,
                        boxSizing: "border-box",
                        minHeight: "100%",
                        overflow: "hidden"
                    },
                    ".cm-gutterElement": {
                        boxSizing: "border-box"
                    },
                    ".cm-lineNumbers .cm-gutterElement": {
                        padding: "0 3px 0 5px",
                        minWidth: "20px",
                        textAlign: "right",
                        whiteSpace: "nowrap"
                    },
                    "&light .cm-activeLineGutter": {
                        backgroundColor: "#e2f2ff"
                    },
                    "&dark .cm-activeLineGutter": {
                        backgroundColor: "#222227"
                    },
                    ".cm-panels": {
                        boxSizing: "border-box",
                        position: "sticky",
                        left: 0,
                        right: 0,
                        zIndex: 300
                    },
                    "&light .cm-panels": {
                        backgroundColor: "#f5f5f5",
                        color: "black"
                    },
                    "&light .cm-panels-top": {
                        borderBottom: "1px solid #ddd"
                    },
                    "&light .cm-panels-bottom": {
                        borderTop: "1px solid #ddd"
                    },
                    "&dark .cm-panels": {
                        backgroundColor: "#333338",
                        color: "white"
                    },
                    ".cm-tab": {
                        display: "inline-block",
                        overflow: "hidden",
                        verticalAlign: "bottom"
                    },
                    ".cm-widgetBuffer": {
                        verticalAlign: "text-top",
                        height: "1em",
                        width: 0,
                        display: "inline"
                    },
                    ".cm-placeholder": {
                        color: "#888",
                        display: "inline-block",
                        verticalAlign: "top"
                    },
                    ".cm-highlightSpace:before": {
                        content: "attr(data-display)",
                        position: "absolute",
                        pointerEvents: "none",
                        color: "#888"
                    },
                    ".cm-highlightTab": {
                        backgroundImage: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',
                        backgroundSize: "auto 100%",
                        backgroundPosition: "right 90%",
                        backgroundRepeat: "no-repeat"
                    },
                    ".cm-trailingSpace": {
                        backgroundColor: "#ff332255"
                    },
                    ".cm-button": {
                        verticalAlign: "middle",
                        color: "inherit",
                        fontSize: "70%",
                        padding: ".2em 1em",
                        borderRadius: "1px"
                    },
                    "&light .cm-button": {
                        backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
                        border: "1px solid #888",
                        "&:active": {
                            backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
                        }
                    },
                    "&dark .cm-button": {
                        backgroundImage: "linear-gradient(#393939, #111)",
                        border: "1px solid #888",
                        "&:active": {
                            backgroundImage: "linear-gradient(#111, #333)"
                        }
                    },
                    ".cm-textfield": {
                        verticalAlign: "middle",
                        color: "inherit",
                        fontSize: "70%",
                        border: "1px solid silver",
                        padding: ".2em .5em"
                    },
                    "&light .cm-textfield": {
                        backgroundColor: "white"
                    },
                    "&dark .cm-textfield": {
                        border: "1px solid #555",
                        backgroundColor: "inherit"
                    }
                }, Yi),
                Ui = {
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                    attributes: !0,
                    characterDataOldValue: !0
                },
                Qi = X.ie && X.ie_version <= 11;
            class Zi {
                constructor(t) {
                    this.view = t, this.active = !1, this.editContext = null, this.selectionRange = new w, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e => {
                        for (let t of e) this.queue.push(t);
                        (X.ie && X.ie_version <= 11 || X.ios && t.composing) && e.some((t => "childList" == t.type && t.removedNodes.length || "characterData" == t.type && t.oldValue.length > t.target.nodeValue.length)) ? this.flushSoon() : this.flush()
                    })), !window.EditContext || !1 === t.constructor.EDIT_CONTEXT || X.chrome && X.chrome_version < 126 || (this.editContext = new es(t), t.state.facet(ee) && (t.contentDOM.editContext = this.editContext.editContext)), Qi && (this.onCharData = t => {
                        this.queue.push({
                            target: t.target,
                            type: "characterData",
                            oldValue: t.prevValue
                        }), this.flushSoon()
                    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
                        var t;
                        (null === (t = this.view.docView) || void 0 === t ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize()
                    })), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((t => {
                        this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
                    }), {
                        threshold: [0, .001]
                    }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t => {
                        t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
                    }), {})), this.listenForScroll(), this.readSelectionRange()
                }
                onScrollChanged(t) {
                    this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure()
                }
                onScroll(t) {
                    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t)
                }
                onResize() {
                    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
                        this.resizeTimeout = -1, this.view.requestMeasure()
                    }), 50))
                }
                onPrint(t) {
                    ("change" != t.type && t.type || t.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
                        this.view.viewState.printing = !1, this.view.requestMeasure()
                    }), 500))
                }
                updateGaps(t) {
                    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some(((e, i) => e != t[i])))) {
                        this.gapIntersection.disconnect();
                        for (let e of t) this.gapIntersection.observe(e);
                        this.gaps = t
                    }
                }
                onSelectionChange(t) {
                    let e = this.selectionChanged;
                    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
                    let {
                        view: i
                    } = this, s = this.selectionRange;
                    if (i.state.facet(ee) ? i.root.activeElement != this.dom : !h(i.dom, s)) return;
                    let o = s.anchorNode && i.docView.nearest(s.anchorNode);
                    o && o.ignoreEvent(t) ? e || (this.selectionChanged = !1) : (X.ie && X.ie_version <= 11 || X.android && X.chrome) && !i.state.selection.main.empty && s.focusNode && c(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1)
                }
                readSelectionRange() {
                    let {
                        view: t
                    } = this, e = r(t.root);
                    if (!e) return !1;
                    let i = X.safari && 11 == t.root.nodeType && function(t) {
                        let e = t.activeElement;
                        for (; e && e.shadowRoot;) e = e.shadowRoot.activeElement;
                        return e
                    }(this.dom.ownerDocument) == this.dom && function(t, e) {
                        if (e.getComposedRanges) {
                            let i = e.getComposedRanges(t.root)[0];
                            if (i) return ts(t, i)
                        }
                        let i = null;

                        function s(t) {
                            t.preventDefault(), t.stopImmediatePropagation(), i = t.getTargetRanges()[0]
                        }
                        return t.contentDOM.addEventListener("beforeinput", s, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", s, !0), i ? ts(t, i) : null
                    }(this.view, e) || e;
                    if (!i || this.selectionRange.eq(i)) return !1;
                    let s = h(this.dom, i);
                    return s && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && function(t, e) {
                        let i = e.focusNode,
                            s = e.focusOffset;
                        if (!i || e.anchorNode != i || e.anchorOffset != s) return !1;
                        for (s = Math.min(s, p(i));;)
                            if (s) {
                                if (1 != i.nodeType) return !1;
                                let t = i.childNodes[s - 1];
                                "false" == t.contentEditable ? s-- : (i = t, s = p(i))
                            } else {
                                if (i == t) return !0;
                                s = d(i), i = i.parentNode
                            }
                    }(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0)
                }
                setSelectionRange(t, e) {
                    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1
                }
                clearSelectionRange() {
                    this.selectionRange.set(null, 0, null, 0)
                }
                listenForScroll() {
                    this.parentCheck = -1;
                    let t = 0,
                        e = null;
                    for (let i = this.dom; i;)
                        if (1 == i.nodeType) !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
                        else {
                            if (11 != i.nodeType) break;
                            i = i.host
                        }
                    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
                        for (let t of this.scrollTargets) t.removeEventListener("scroll", this.onScroll);
                        for (let t of this.scrollTargets = e) t.addEventListener("scroll", this.onScroll)
                    }
                }
                ignore(t) {
                    if (!this.active) return t();
                    try {
                        return this.stop(), t()
                    } finally {
                        this.start(), this.clear()
                    }
                }
                start() {
                    this.active || (this.observer.observe(this.dom, Ui), Qi && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
                }
                stop() {
                    this.active && (this.active = !1, this.observer.disconnect(), Qi && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
                }
                clear() {
                    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
                }
                delayAndroidKey(t, e) {
                    var i;
                    if (!this.delayedAndroidKey) {
                        let t = () => {
                            let t = this.delayedAndroidKey;
                            if (t) {
                                this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = t.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && t.force && M(this.dom, t.key, t.keyCode)
                            }
                        };
                        this.flushingAndroidKey = this.view.win.requestAnimationFrame(t)
                    }
                    this.delayedAndroidKey && "Enter" != t || (this.delayedAndroidKey = {
                        key: t,
                        keyCode: e,
                        force: this.lastChange < Date.now() - 50 || !!(null === (i = this.delayedAndroidKey) || void 0 === i ? void 0 : i.force)
                    })
                }
                clearDelayedAndroidKey() {
                    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1
                }
                flushSoon() {
                    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame((() => {
                        this.delayedFlush = -1, this.flush()
                    })))
                }
                forceFlush() {
                    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush()
                }
                pendingRecords() {
                    for (let t of this.observer.takeRecords()) this.queue.push(t);
                    return this.queue
                }
                processRecords() {
                    let t = this.pendingRecords();
                    t.length && (this.queue = []);
                    let e = -1,
                        i = -1,
                        s = !1;
                    for (let o of t) {
                        let t = this.readMutation(o);
                        t && (t.typeOver && (s = !0), -1 == e ? ({
                            from: e,
                            to: i
                        } = t) : (e = Math.min(t.from, e), i = Math.max(t.to, i)))
                    }
                    return {
                        from: e,
                        to: i,
                        typeOver: s
                    }
                }
                readChange() {
                    let {
                        from: t,
                        to: e,
                        typeOver: i
                    } = this.processRecords(), s = this.selectionChanged && h(this.dom, this.selectionRange);
                    if (t < 0 && !s) return null;
                    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
                    let o = new Ne(this.view, t, e, i);
                    return this.view.docView.domChanged = {
                        newSel: o.newSel ? o.newSel.main : null
                    }, o
                }
                flush(t = !0) {
                    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
                    t && this.readSelectionRange();
                    let e = this.readChange();
                    if (!e) return this.view.requestMeasure(), !1;
                    let i = this.view.state,
                        s = We(this.view, e);
                    return this.view.state == i && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s
                }
                readMutation(t) {
                    let e = this.view.docView.nearest(t.target);
                    if (!e || e.ignoreMutation(t)) return null;
                    if (e.markDirty("attributes" == t.type), "attributes" == t.type && (e.flags |= 4), "childList" == t.type) {
                        let i = Ji(e, t.previousSibling || t.target.previousSibling, -1),
                            s = Ji(e, t.nextSibling || t.target.nextSibling, 1);
                        return {
                            from: i ? e.posAfter(i) : e.posAtStart,
                            to: s ? e.posBefore(s) : e.posAtEnd,
                            typeOver: !1
                        }
                    }
                    return "characterData" == t.type ? {
                        from: e.posAtStart,
                        to: e.posAtEnd,
                        typeOver: t.target.nodeValue == t.oldValue
                    } : null
                }
                setWindow(t) {
                    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win))
                }
                addWindowListeners(t) {
                    t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange)
                }
                removeWindowListeners(t) {
                    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange)
                }
                update(t) {
                    this.editContext && (this.editContext.update(t), t.startState.facet(ee) != t.state.facet(ee) && (t.view.contentDOM.editContext = t.state.facet(ee) ? this.editContext.editContext : null))
                }
                destroy() {
                    var t, e, i;
                    this.stop(), null === (t = this.intersection) || void 0 === t || t.disconnect(), null === (e = this.gapIntersection) || void 0 === e || e.disconnect(), null === (i = this.resizeScroll) || void 0 === i || i.disconnect();
                    for (let s of this.scrollTargets) s.removeEventListener("scroll", this.onScroll);
                    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
                }
            }

            function Ji(t, e, i) {
                for (; e;) {
                    let s = E.get(e);
                    if (s && s.parent == t) return s;
                    let o = e.parentNode;
                    e = o != t.dom ? o : i > 0 ? e.nextSibling : e.previousSibling
                }
                return null
            }

            function ts(t, e) {
                let i = e.startContainer,
                    s = e.startOffset,
                    o = e.endContainer,
                    n = e.endOffset,
                    r = t.docView.domAtPos(t.state.selection.main.anchor);
                return c(r.node, r.offset, o, n) && ([i, s, o, n] = [o, n, i, s]), {
                    anchorNode: i,
                    anchorOffset: s,
                    focusNode: o,
                    focusOffset: n
                }
            }
            class es {
                constructor(t) {
                    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.resetRange(t.state);
                    let e = this.editContext = new window.EditContext({
                        text: t.state.doc.sliceString(this.from, this.to),
                        selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
                        selectionEnd: this.toContextPos(t.state.selection.main.head)
                    });
                    this.handlers.textupdate = e => {
                        let {
                            anchor: i
                        } = t.state.selection.main, o = {
                            from: this.toEditorPos(e.updateRangeStart),
                            to: this.toEditorPos(e.updateRangeEnd),
                            insert: s.xv.of(e.text.split("\n"))
                        };
                        o.from == this.from && i < this.from ? o.from = i : o.to == this.to && i > this.to && (o.to = i), (o.from != o.to || o.insert.length) && (this.pendingContextChange = o, t.state.readOnly || Fe(t, o, s.jT.single(this.toEditorPos(e.selectionStart), this.toEditorPos(e.selectionEnd))), this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)))
                    }, this.handlers.characterboundsupdate = i => {
                        let s = [],
                            o = null;
                        for (let e = this.toEditorPos(i.rangeStart), n = this.toEditorPos(i.rangeEnd); e < n; e++) {
                            let i = t.coordsForChar(e);
                            o = i && new DOMRect(i.left, i.top, i.right - i.left, i.bottom - i.top) || o || new DOMRect, s.push(o)
                        }
                        e.updateCharacterBounds(i.rangeStart, s)
                    }, this.handlers.textformatupdate = e => {
                        let i = [];
                        for (let t of e.getTextFormats()) {
                            let e = t.underlineStyle,
                                s = t.underlineThickness;
                            if ("None" != e && "None" != s) {
                                let o = `text-decoration: underline ${"Dashed"==e?"dashed ":"Squiggle"==e?"wavy ":""}${"Thin"==s?1:2}px`;
                                i.push(lt.mark({
                                    attributes: {
                                        style: o
                                    }
                                }).range(this.toEditorPos(t.rangeStart), this.toEditorPos(t.rangeEnd)))
                            }
                        }
                        t.dispatch({
                            effects: Jt.of(lt.set(i))
                        })
                    }, this.handlers.compositionstart = () => {
                        t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = !0)
                    }, this.handlers.compositionend = () => {
                        t.inputState.composing = -1, t.inputState.compositionFirstChange = null
                    };
                    for (let i in this.handlers) e.addEventListener(i, this.handlers[i]);
                    this.measureReq = {
                        read: t => {
                            this.editContext.updateControlBounds(t.contentDOM.getBoundingClientRect());
                            let e = r(t.root);
                            e && e.rangeCount && this.editContext.updateSelectionBounds(e.getRangeAt(0).getBoundingClientRect())
                        }
                    }
                }
                applyEdits(t) {
                    let e = 0,
                        i = !1,
                        s = this.pendingContextChange;
                    return t.changes.iterChanges(((o, n, r, l, h) => {
                        if (i) return;
                        let a = h.length - (n - o);
                        if (s && n >= s.to) {
                            if (s.from == o && s.to == n && s.insert.eq(h)) return s = this.pendingContextChange = null, e += a, void(this.to += a);
                            s = null, this.revertPending(t.state)
                        }
                        if (o += e, (n += e) <= this.from) this.from += a, this.to += a;
                        else if (o < this.to) {
                            if (o < this.from || n > this.to || this.to - this.from + h.length > 3e4) return void(i = !0);
                            this.editContext.updateText(this.toContextPos(o), this.toContextPos(n), h.toString()), this.to += a
                        }
                        e += a
                    })), s && !i && this.revertPending(t.state), !i
                }
                update(t) {
                    let e = this.pendingContextChange;
                    this.applyEdits(t) && this.rangeIsValid(t.state) ? (t.docChanged || t.selectionSet || e) && this.setSelection(t.state) : (this.pendingContextChange = null, this.resetRange(t.state), this.editContext.updateText(0, this.editContext.text.length, t.state.doc.sliceString(this.from, this.to)), this.setSelection(t.state)), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq)
                }
                resetRange(t) {
                    let {
                        head: e
                    } = t.selection.main;
                    this.from = Math.max(0, e - 1e4), this.to = Math.min(t.doc.length, e + 1e4)
                }
                revertPending(t) {
                    let e = this.pendingContextChange;
                    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to))
                }
                setSelection(t) {
                    let {
                        main: e
                    } = t.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), s = this.toContextPos(e.head);
                    this.editContext.selectionStart == i && this.editContext.selectionEnd == s || this.editContext.updateSelection(i, s)
                }
                rangeIsValid(t) {
                    let {
                        head: e
                    } = t.selection.main;
                    return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 3e4)
                }
                toEditorPos(t) {
                    return t + this.from
                }
                toContextPos(t) {
                    return t - this.from
                }
                destroy() {
                    for (let t in this.handlers) this.editContext.removeEventListener(t, this.handlers[t])
                }
            }
            class is {
                get state() {
                    return this.viewState.state
                }
                get viewport() {
                    return this.viewState.viewport
                }
                get visibleRanges() {
                    return this.viewState.visibleRanges
                }
                get inView() {
                    return this.viewState.inView
                }
                get composing() {
                    return this.inputState.composing > 0
                }
                get compositionStarted() {
                    return this.inputState.composing >= 0
                }
                get root() {
                    return this._root
                }
                get win() {
                    return this.dom.ownerDocument.defaultView || window
                }
                constructor(t = {}) {
                    var e;
                    this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
                    let {
                        dispatch: i
                    } = t;
                    this.dispatchTransactions = t.dispatchTransactions || i && (t => t.forEach((t => i(t, this)))) || (t => this.update(t)), this.dispatch = this.dispatch.bind(this), this._root = t.root || function(t) {
                        for (; t;) {
                            if (t && (9 == t.nodeType || 11 == t.nodeType && t.host)) return t;
                            t = t.assignedSlot || t.parentNode
                        }
                        return null
                    }(t.parent) || document, this.viewState = new Hi(t.state || s.yy.create(t)), t.scrollTo && t.scrollTo.is(Zt) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(se).map((t => new ne(t)));
                    for (let s of this.plugins) s.update(this);
                    this.observer = new Zi(this), this.inputState = new ze(this), this.inputState.ensureHandlers(this.plugins), this.docView = new we(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (e = document.fonts) || void 0 === e ? void 0 : e.ready) && document.fonts.ready.then((() => this.requestMeasure()))
                }
                dispatch(...t) {
                    let e = 1 == t.length && t[0] instanceof s.YW ? t : 1 == t.length && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
                    this.dispatchTransactions(e, this)
                }
                update(t) {
                    if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
                    let e, i = !1,
                        o = !1,
                        n = this.state;
                    for (let s of t) {
                        if (s.startState != n) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
                        n = s.state
                    }
                    if (this.destroyed) return void(this.viewState.state = n);
                    let r = this.hasFocus,
                        l = 0,
                        h = null;
                    t.some((t => t.annotation(ci))) ? (this.inputState.notifiedFocused = r, l = 1) : r != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = r, h = di(n, r), h || (l = 1));
                    let a = this.observer.delayedAndroidKey,
                        c = null;
                    if (a ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(n.doc) || !this.state.selection.eq(n.selection)) && (c = null)) : this.observer.clear(), n.facet(s.yy.phrases) != this.state.facet(s.yy.phrases)) return this.setState(n);
                    e = ve.create(this, n, t), e.flags |= l;
                    let d = this.viewState.scrollTarget;
                    try {
                        this.updateState = 2;
                        for (let e of t) {
                            if (d && (d = d.map(e.changes)), e.scrollIntoView) {
                                let {
                                    main: t
                                } = e.state.selection;
                                d = new Qt(t.empty ? t : s.jT.cursor(t.head, t.head > t.anchor ? -1 : 1))
                            }
                            for (let t of e.effects) t.is(Zt) && (d = t.value.clip(this.state))
                        }
                        this.viewState.update(e, d), this.bidiCache = ns.update(this.bidiCache, e.changes), e.empty || (this.updatePlugins(e), this.inputState.update(e)), i = this.docView.update(e), this.state.facet(ge) != this.styleModules && this.mountStyles(), o = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(i, t.some((t => t.isUserEvent("select.pointer"))))
                    } finally {
                        this.updateState = 0
                    }
                    if (e.startState.facet(qi) != e.state.facet(qi) && (this.viewState.mustMeasureContent = !0), (i || o || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), i && this.docViewUpdate(), !e.empty)
                        for (let s of this.state.facet(Kt)) try {
                            s(e)
                        } catch (u) {
                            te(this.state, u, "update listener")
                        }(h || c) && Promise.resolve().then((() => {
                            h && this.state == h.startState && this.dispatch(h), c && !We(this, c) && a.force && M(this.contentDOM, a.key, a.keyCode)
                        }))
                }
                setState(t) {
                    if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
                    if (this.destroyed) return void(this.viewState.state = t);
                    this.updateState = 2;
                    let e = this.hasFocus;
                    try {
                        for (let t of this.plugins) t.destroy(this);
                        this.viewState = new Hi(t), this.plugins = t.facet(se).map((t => new ne(t))), this.pluginMap.clear();
                        for (let t of this.plugins) t.update(this);
                        this.docView.destroy(), this.docView = new we(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
                    } finally {
                        this.updateState = 0
                    }
                    e && this.focus(), this.requestMeasure()
                }
                updatePlugins(t) {
                    let e = t.startState.facet(se),
                        i = t.state.facet(se);
                    if (e != i) {
                        let s = [];
                        for (let o of i) {
                            let i = e.indexOf(o);
                            if (i < 0) s.push(new ne(o));
                            else {
                                let e = this.plugins[i];
                                e.mustUpdate = t, s.push(e)
                            }
                        }
                        for (let e of this.plugins) e.mustUpdate != t && e.destroy(this);
                        this.plugins = s, this.pluginMap.clear()
                    } else
                        for (let s of this.plugins) s.mustUpdate = t;
                    for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
                    e != i && this.inputState.ensureHandlers(this.plugins)
                }
                docViewUpdate() {
                    for (let e of this.plugins) {
                        let i = e.value;
                        if (i && i.docViewUpdate) try {
                            i.docViewUpdate(this)
                        } catch (t) {
                            te(this.state, t, "doc view update listener")
                        }
                    }
                }
                measure(t = !0) {
                    if (this.destroyed) return;
                    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
                    this.measureScheduled = 0, t && this.observer.forceFlush();
                    let e = null,
                        i = this.scrollDOM,
                        s = i.scrollTop * this.scaleY,
                        {
                            scrollAnchorPos: o,
                            scrollAnchorHeight: n
                        } = this.viewState;
                    Math.abs(s - this.viewState.scrollTop) > 1 && (n = -1), this.viewState.scrollAnchorHeight = -1;
                    try {
                        for (let t = 0;; t++) {
                            if (n < 0)
                                if (k(i)) o = -1, n = this.viewState.heightMap.height;
                                else {
                                    let t = this.viewState.scrollAnchorAt(s);
                                    o = t.from, n = t.top
                                }
                            this.updateState = 1;
                            let l = this.viewState.measure(this);
                            if (!l && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
                            if (t > 5) {
                                console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
                                break
                            }
                            let h = [];
                            4 & l || ([this.measureRequests, h] = [h, this.measureRequests]);
                            let a = h.map((t => {
                                    try {
                                        return t.read(this)
                                    } catch (e) {
                                        return te(this.state, e), os
                                    }
                                })),
                                c = ve.create(this, this.state, []),
                                d = !1;
                            c.flags |= l, e ? e.flags |= l : e = c, this.updateState = 2, c.empty || (this.updatePlugins(c), this.inputState.update(c), this.updateAttrs(), d = this.docView.update(c), d && this.docViewUpdate());
                            for (let t = 0; t < h.length; t++)
                                if (a[t] != os) try {
                                    let e = h[t];
                                    e.write && e.write(a[t], this)
                                } catch (r) {
                                    te(this.state, r)
                                }
                            if (d && this.docView.updateSelection(!0), !c.viewportChanged && 0 == this.measureRequests.length) {
                                if (this.viewState.editorHeight) {
                                    if (this.viewState.scrollTarget) {
                                        this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, n = -1;
                                        continue
                                    } {
                                        let t = (o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) - n;
                                        if (t > 1 || t < -1) {
                                            s += t, i.scrollTop = s / this.scaleY, n = -1;
                                            continue
                                        }
                                    }
                                }
                                break
                            }
                        }
                    } finally {
                        this.updateState = 0, this.measureScheduled = -1
                    }
                    if (e && !e.empty)
                        for (let l of this.state.facet(Kt)) l(e)
                }
                get themeClasses() {
                    return ji + " " + (this.state.facet(Ki) ? Xi : $i) + " " + this.state.facet(qi)
                }
                updateAttrs() {
                    let t = rs(this, re, {
                            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
                        }),
                        e = {
                            spellcheck: "false",
                            autocorrect: "off",
                            autocapitalize: "off",
                            translate: "no",
                            contenteditable: this.state.facet(ee) ? "true" : "false",
                            class: "cm-content",
                            style: `${X.tabSize}: ${this.state.tabSize}`,
                            role: "textbox",
                            "aria-multiline": "true"
                        };
                    this.state.readOnly && (e["aria-readonly"] = "true"), rs(this, le, e);
                    let i = this.observer.ignore((() => {
                        let i = st(this.contentDOM, this.contentAttrs, e),
                            s = st(this.dom, this.editorAttrs, t);
                        return i || s
                    }));
                    return this.editorAttrs = t, this.contentAttrs = e, i
                }
                showAnnouncements(t) {
                    let e = !0;
                    for (let i of t)
                        for (let t of i.effects)
                            if (t.is(is.announce)) {
                                e && (this.announceDOM.textContent = ""), e = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = t.value
                            }
                }
                mountStyles() {
                    this.styleModules = this.state.facet(ge);
                    let t = this.state.facet(is.cspNonce);
                    o.V.mount(this.root, this.styleModules.concat(_i).reverse(), t ? {
                        nonce: t
                    } : void 0)
                }
                readMeasured() {
                    if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
                    0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
                }
                requestMeasure(t) {
                    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), t) {
                        if (this.measureRequests.indexOf(t) > -1) return;
                        if (null != t.key)
                            for (let e = 0; e < this.measureRequests.length; e++)
                                if (this.measureRequests[e].key === t.key) return void(this.measureRequests[e] = t);
                        this.measureRequests.push(t)
                    }
                }
                plugin(t) {
                    let e = this.pluginMap.get(t);
                    return (void 0 === e || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find((e => e.spec == t)) || null), e && e.update(this).value
                }
                get documentTop() {
                    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
                }
                get documentPadding() {
                    return {
                        top: this.viewState.paddingTop,
                        bottom: this.viewState.paddingBottom
                    }
                }
                get scaleX() {
                    return this.viewState.scaleX
                }
                get scaleY() {
                    return this.viewState.scaleY
                }
                elementAtHeight(t) {
                    return this.readMeasured(), this.viewState.elementAtHeight(t)
                }
                lineBlockAtHeight(t) {
                    return this.readMeasured(), this.viewState.lineBlockAtHeight(t)
                }
                get viewportLineBlocks() {
                    return this.viewState.viewportLines
                }
                lineBlockAt(t) {
                    return this.viewState.lineBlockAt(t)
                }
                get contentHeight() {
                    return this.viewState.contentHeight
                }
                moveByChar(t, e, i) {
                    return Be(this, t, Ee(this, t, e, i))
                }
                moveByGroup(t, e) {
                    return Be(this, t, Ee(this, t, e, (e => function(t, e, i) {
                        let o = t.state.charCategorizer(e),
                            n = o(i);
                        return t => {
                            let e = o(t);
                            return n == s.D0.Space && (n = e), n == e
                        }
                    }(this, t.head, e))))
                }
                visualLineSide(t, e) {
                    let i = this.bidiSpans(t),
                        o = this.textDirectionAt(t.from),
                        n = i[e ? i.length - 1 : 0];
                    return s.jT.cursor(n.side(e, o) + t.from, n.forward(!e, o) ? 1 : -1)
                }
                moveToLineBoundary(t, e, i = !0) {
                    return function(t, e, i, o) {
                        let n = Oe(t, e.head),
                            r = o && n.type == rt.Text && (t.lineWrapping || n.widgetLineBreaks) ? t.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head) : null;
                        if (r) {
                            let e = t.dom.getBoundingClientRect(),
                                o = t.textDirectionAt(n.from),
                                l = t.posAtCoords({
                                    x: i == (o == bt.LTR) ? e.right - 1 : e.left + 1,
                                    y: (r.top + r.bottom) / 2
                                });
                            if (null != l) return s.jT.cursor(l, i ? -1 : 1)
                        }
                        return s.jT.cursor(i ? n.to : n.from, i ? -1 : 1)
                    }(this, t, e, i)
                }
                moveVertically(t, e, i) {
                    return Be(this, t, function(t, e, i, o) {
                        let n = e.head,
                            r = i ? 1 : -1;
                        if (n == (i ? t.state.doc.length : 0)) return s.jT.cursor(n, e.assoc);
                        let l, h = e.goalColumn,
                            a = t.contentDOM.getBoundingClientRect(),
                            c = t.coordsAtPos(n, e.assoc || -1),
                            d = t.documentTop;
                        if (c) null == h && (h = c.left - a.left), l = r < 0 ? c.top : c.bottom;
                        else {
                            let e = t.viewState.lineBlockAt(n);
                            null == h && (h = Math.min(a.right - a.left, t.defaultCharacterWidth * (n - e.from))), l = (r < 0 ? e.top : e.bottom) + d
                        }
                        let u = a.left + h,
                            f = null !== o && void 0 !== o ? o : t.viewState.heightOracle.textHeight >> 1;
                        for (let p = 0;; p += 10) {
                            let e = l + (f + p) * r,
                                i = Te(t, {
                                    x: u,
                                    y: e
                                }, !1, r);
                            if (e < a.top || e > a.bottom || (r < 0 ? i < n : i > n)) {
                                let o = t.docView.coordsForChar(i),
                                    n = !o || e < o.top ? -1 : 1;
                                return s.jT.cursor(i, n, void 0, h)
                            }
                        }
                    }(this, t, e, i))
                }
                domAtPos(t) {
                    return this.docView.domAtPos(t)
                }
                posAtDOM(t, e = 0) {
                    return this.docView.posFromDOM(t, e)
                }
                posAtCoords(t, e = !0) {
                    return this.readMeasured(), Te(this, t, e)
                }
                coordsAtPos(t, e = 1) {
                    this.readMeasured();
                    let i = this.docView.coordsAt(t, e);
                    if (!i || i.left == i.right) return i;
                    let s = this.state.doc.lineAt(t),
                        o = this.bidiSpans(s);
                    return g(i, o[Ot.find(o, t - s.from, -1, e)].dir == bt.LTR == e > 0)
                }
                coordsForChar(t) {
                    return this.readMeasured(), this.docView.coordsForChar(t)
                }
                get defaultCharacterWidth() {
                    return this.viewState.heightOracle.charWidth
                }
                get defaultLineHeight() {
                    return this.viewState.heightOracle.lineHeight
                }
                get textDirection() {
                    return this.viewState.defaultTextDirection
                }
                textDirectionAt(t) {
                    return !this.state.facet(Gt) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t))
                }
                get lineWrapping() {
                    return this.viewState.heightOracle.lineWrapping
                }
                bidiSpans(t) {
                    if (t.length > ss) return Ht(t.length);
                    let e, i = this.textDirectionAt(t.from);
                    for (let o of this.bidiCache)
                        if (o.from == t.from && o.dir == i && (o.fresh || Et(o.isolates, e = ue(this, t)))) return o.order;
                    e || (e = ue(this, t));
                    let s = Pt(t.text, i, e);
                    return this.bidiCache.push(new ns(t.from, t.to, i, e, !0, s)), s
                }
                get hasFocus() {
                    var t;
                    return (this.dom.ownerDocument.hasFocus() || X.safari && (null === (t = this.inputState) || void 0 === t ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
                }
                focus() {
                    this.observer.ignore((() => {
                        x(this.contentDOM), this.docView.updateSelection()
                    }))
                }
                setRoot(t) {
                    this._root != t && (this._root = t, this.observer.setWindow((9 == t.nodeType ? t : t.ownerDocument).defaultView || window), this.mountStyles())
                }
                destroy() {
                    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
                    for (let t of this.plugins) t.destroy(this);
                    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
                }
                static scrollIntoView(t, e = {}) {
                    return Zt.of(new Qt("number" == typeof t ? s.jT.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin))
                }
                scrollSnapshot() {
                    let {
                        scrollTop: t,
                        scrollLeft: e
                    } = this.scrollDOM, i = this.viewState.scrollAnchorAt(t);
                    return Zt.of(new Qt(s.jT.cursor(i.from), "start", "start", i.top - t, e, !0))
                }
                setTabFocusMode(t) {
                    null == t ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof t ? this.inputState.tabFocusMode = t ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + t)
                }
                static domEventHandlers(t) {
                    return oe.define((() => ({})), {
                        eventHandlers: t
                    })
                }
                static domEventObservers(t) {
                    return oe.define((() => ({})), {
                        eventObservers: t
                    })
                }
                static theme(t, e) {
                    let i = o.V.newName(),
                        s = [qi.of(i), ge.of(Gi(`.${i}`, t))];
                    return e && e.dark && s.push(Ki.of(!0)), s
                }
                static baseTheme(t) {
                    return s.Wl.lowest(ge.of(Gi("." + ji, t, Yi)))
                }
                static findFromDOM(t) {
                    var e;
                    let i = t.querySelector(".cm-content"),
                        s = i && E.get(i) || E.get(t);
                    return (null === (e = null === s || void 0 === s ? void 0 : s.rootView) || void 0 === e ? void 0 : e.view) || null
                }
            }
            is.styleModule = ge, is.inputHandler = jt, is.clipboardInputFilter = Xt, is.clipboardOutputFilter = Yt, is.scrollHandler = Ut, is.focusChangeEffect = $t, is.perLineTextDirection = Gt, is.exceptionSink = qt, is.updateListener = Kt, is.editable = ee, is.mouseSelectionStyle = It, is.dragMovesSelection = zt, is.clickAddsSelectionRange = Ft, is.decorations = he, is.outerDecorations = ae, is.atomicRanges = ce, is.bidiIsolatedRanges = de, is.scrollMargins = fe, is.darkTheme = Ki, is.cspNonce = s.r$.define({
                combine: t => t.length ? t[0] : ""
            }), is.contentAttributes = le, is.editorAttributes = re, is.lineWrapping = is.contentAttributes.of({
                class: "cm-lineWrapping"
            }), is.announce = s.Py.define();
            const ss = 4096,
                os = {};
            class ns {
                constructor(t, e, i, s, o, n) {
                    this.from = t, this.to = e, this.dir = i, this.isolates = s, this.fresh = o, this.order = n
                }
                static update(t, e) {
                    if (e.empty && !t.some((t => t.fresh))) return t;
                    let i = [],
                        s = t.length ? t[t.length - 1].dir : bt.LTR;
                    for (let o = Math.max(0, t.length - 10); o < t.length; o++) {
                        let n = t[o];
                        n.dir != s || e.touchesRange(n.from, n.to) || i.push(new ns(e.mapPos(n.from, 1), e.mapPos(n.to, -1), n.dir, n.isolates, !1, n.order))
                    }
                    return i
                }
            }

            function rs(t, e, i) {
                for (let s = t.state.facet(e), o = s.length - 1; o >= 0; o--) {
                    let e = s[o],
                        n = "function" == typeof e ? e(t) : e;
                    n && tt(n, i)
                }
                return i
            }
            const ls = X.mac ? "mac" : X.windows ? "win" : X.linux ? "linux" : "key";

            function hs(t, e, i) {
                return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), !1 !== i && e.shiftKey && (t = "Shift-" + t), t
            }
            const as = s.Wl.default(is.domEventHandlers({
                    keydown: (t, e) => ms(us(e.state), t, e, "editor")
                })),
                cs = s.r$.define({
                    enables: as
                }),
                ds = new WeakMap;

            function us(t) {
                let e = t.facet(cs),
                    i = ds.get(e);
                return i || ds.set(e, i = function(t, e = ls) {
                    let i = Object.create(null),
                        s = Object.create(null),
                        o = (t, e) => {
                            let i = s[t];
                            if (null == i) s[t] = e;
                            else if (i != e) throw new Error("Key binding " + t + " is used both as a regular binding and as a multi-stroke prefix")
                        },
                        n = (t, s, n, r, l) => {
                            var h, a;
                            let c = i[t] || (i[t] = Object.create(null)),
                                d = s.split(/ (?!$)/).map((t => function(t, e) {
                                    const i = t.split(/-(?!$)/);
                                    let s, o, n, r, l = i[i.length - 1];
                                    "Space" == l && (l = " ");
                                    for (let h = 0; h < i.length - 1; ++h) {
                                        const t = i[h];
                                        if (/^(cmd|meta|m)$/i.test(t)) r = !0;
                                        else if (/^a(lt)?$/i.test(t)) s = !0;
                                        else if (/^(c|ctrl|control)$/i.test(t)) o = !0;
                                        else if (/^s(hift)?$/i.test(t)) n = !0;
                                        else {
                                            if (!/^mod$/i.test(t)) throw new Error("Unrecognized modifier name: " + t);
                                            "mac" == e ? r = !0 : o = !0
                                        }
                                    }
                                    return s && (l = "Alt-" + l), o && (l = "Ctrl-" + l), r && (l = "Meta-" + l), n && (l = "Shift-" + l), l
                                }(t, e)));
                            for (let e = 1; e < d.length; e++) {
                                let i = d.slice(0, e).join(" ");
                                o(i, !0), c[i] || (c[i] = {
                                    preventDefault: !0,
                                    stopPropagation: !1,
                                    run: [e => {
                                        let s = ps = {
                                            view: e,
                                            prefix: i,
                                            scope: t
                                        };
                                        return setTimeout((() => {
                                            ps == s && (ps = null)
                                        }), 4e3), !0
                                    }]
                                })
                            }
                            let u = d.join(" ");
                            o(u, !1);
                            let f = c[u] || (c[u] = {
                                preventDefault: !1,
                                stopPropagation: !1,
                                run: (null === (a = null === (h = c._any) || void 0 === h ? void 0 : h.run) || void 0 === a ? void 0 : a.slice()) || []
                            });
                            n && f.run.push(n), r && (f.preventDefault = !0), l && (f.stopPropagation = !0)
                        };
                    for (let r of t) {
                        let t = r.scope ? r.scope.split(" ") : ["editor"];
                        if (r.any)
                            for (let e of t) {
                                let t = i[e] || (i[e] = Object.create(null));
                                t._any || (t._any = {
                                    preventDefault: !1,
                                    stopPropagation: !1,
                                    run: []
                                });
                                let {
                                    any: s
                                } = r;
                                for (let e in t) t[e].run.push((t => s(t, gs)))
                            }
                        let s = r[e] || r.key;
                        if (s)
                            for (let e of t) n(e, s, r.run, r.preventDefault, r.stopPropagation), r.shift && n(e, "Shift-" + s, r.shift, r.preventDefault, r.stopPropagation)
                    }
                    return i
                }(e.reduce(((t, e) => t.concat(e)), []))), i
            }

            function fs(t, e, i) {
                return ms(us(t.state), e, t, i)
            }
            let ps = null;
            let gs = null;

            function ms(t, e, i, o) {
                gs = e;
                let r = (0, n.YG)(e),
                    l = (0, s.gm)(r, 0),
                    h = (0, s.nZ)(l) == r.length && " " != r,
                    a = "",
                    c = !1,
                    d = !1,
                    u = !1;
                ps && ps.view == i && ps.scope == o && (a = ps.prefix + " ", $e.indexOf(e.keyCode) < 0 && (d = !0, ps = null));
                let f, p, g = new Set,
                    m = t => {
                        if (t) {
                            for (let e of t.run)
                                if (!g.has(e) && (g.add(e), e(i))) return t.stopPropagation && (u = !0), !0;
                            t.preventDefault && (t.stopPropagation && (u = !0), d = !0)
                        }
                        return !1
                    },
                    v = t[o];
                return v && (m(v[a + hs(r, e, !h)]) ? c = !0 : h && (e.altKey || e.metaKey || e.ctrlKey) && !(X.windows && e.ctrlKey && e.altKey) && (f = n.ue[e.keyCode]) && f != r ? (m(v[a + hs(f, e, !0)]) || e.shiftKey && (p = n.uY[e.keyCode]) != r && p != f && m(v[a + hs(p, e, !1)])) && (c = !0) : h && e.shiftKey && m(v[a + hs(r, e, !0)]) && (c = !0), !c && m(v._any) && (c = !0)), d && (c = !0), c && u && e.stopPropagation(), gs = null, c
            }
            class vs {
                constructor(t, e, i, s, o) {
                    this.className = t, this.left = e, this.top = i, this.width = s, this.height = o
                }
                draw() {
                    let t = document.createElement("div");
                    return t.className = this.className, this.adjust(t), t
                }
                update(t, e) {
                    return e.className == this.className && (this.adjust(t), !0)
                }
                adjust(t) {
                    t.style.left = this.left + "px", t.style.top = this.top + "px", null != this.width && (t.style.width = this.width + "px"), t.style.height = this.height + "px"
                }
                eq(t) {
                    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className
                }
                static forRange(t, e, i) {
                    if (i.empty) {
                        let s = t.coordsAtPos(i.head, i.assoc || 1);
                        if (!s) return [];
                        let o = ws(t);
                        return [new vs(e, s.left - o.left, s.top - o.top, null, s.bottom - s.top)]
                    }
                    return function(t, e, i) {
                        if (i.to <= t.viewport.from || i.from >= t.viewport.to) return [];
                        let s = Math.max(i.from, t.viewport.from),
                            o = Math.min(i.to, t.viewport.to),
                            n = t.textDirection == bt.LTR,
                            r = t.contentDOM,
                            l = r.getBoundingClientRect(),
                            h = ws(t),
                            a = r.querySelector(".cm-line"),
                            c = a && window.getComputedStyle(a),
                            d = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0),
                            u = l.right - (c ? parseInt(c.paddingRight) : 0),
                            f = Oe(t, s),
                            p = Oe(t, o),
                            g = f.type == rt.Text ? f : null,
                            m = p.type == rt.Text ? p : null;
                        g && (t.lineWrapping || f.widgetLineBreaks) && (g = bs(t, s, 1, g));
                        m && (t.lineWrapping || p.widgetLineBreaks) && (m = bs(t, o, -1, m));
                        if (g && m && g.from == m.from && g.to == m.to) return w(b(i.from, i.to, g)); {
                            let e = g ? b(i.from, null, g) : y(f, !1),
                                s = m ? b(null, i.to, m) : y(p, !0),
                                o = [];
                            return (g || f).to < (m || p).from - (g && m ? 1 : 0) || f.widgetLineBreaks > 1 && e.bottom + t.defaultLineHeight / 2 < s.top ? o.push(v(d, e.bottom, u, s.top)) : e.bottom < s.top && t.elementAtHeight((e.bottom + s.top) / 2).type == rt.Text && (e.bottom = s.top = (e.bottom + s.top) / 2), w(e).concat(o).concat(w(s))
                        }

                        function v(t, i, s, o) {
                            return new vs(e, t - h.left, i - h.top - .01, s - t, o - i + .01)
                        }

                        function w({
                            top: t,
                            bottom: e,
                            horizontal: i
                        }) {
                            let s = [];
                            for (let o = 0; o < i.length; o += 2) s.push(v(i[o], t, i[o + 1], e));
                            return s
                        }

                        function b(e, i, s) {
                            let o = 1e9,
                                r = -1e9,
                                l = [];

                            function h(e, i, h, a, c) {
                                let f = t.coordsAtPos(e, e == s.to ? -2 : 2),
                                    p = t.coordsAtPos(h, h == s.from ? 2 : -2);
                                f && p && (o = Math.min(f.top, p.top, o), r = Math.max(f.bottom, p.bottom, r), c == bt.LTR ? l.push(n && i ? d : f.left, n && a ? u : p.right) : l.push(!n && a ? d : p.left, !n && i ? u : f.right))
                            }
                            let a = null !== e && void 0 !== e ? e : s.from,
                                c = null !== i && void 0 !== i ? i : s.to;
                            for (let n of t.visibleRanges)
                                if (n.to > a && n.from < c)
                                    for (let s = Math.max(n.from, a), o = Math.min(n.to, c);;) {
                                        let n = t.state.doc.lineAt(s);
                                        for (let r of t.bidiSpans(n)) {
                                            let t = r.from + n.from,
                                                l = r.to + n.from;
                                            if (t >= o) break;
                                            l > s && h(Math.max(t, s), null == e && t <= a, Math.min(l, o), null == i && l >= c, r.dir)
                                        }
                                        if (s = n.to + 1, s >= o) break
                                    }
                            return 0 == l.length && h(a, null == e, c, null == i, t.textDirection), {
                                top: o,
                                bottom: r,
                                horizontal: l
                            }
                        }

                        function y(t, e) {
                            let i = l.top + (e ? t.top : t.bottom);
                            return {
                                top: i,
                                bottom: i,
                                horizontal: []
                            }
                        }
                    }(t, e, i)
                }
            }

            function ws(t) {
                let e = t.scrollDOM.getBoundingClientRect();
                return {
                    left: (t.textDirection == bt.LTR ? e.left : e.right - t.scrollDOM.clientWidth * t.scaleX) - t.scrollDOM.scrollLeft * t.scaleX,
                    top: e.top - t.scrollDOM.scrollTop * t.scaleY
                }
            }

            function bs(t, e, i, s) {
                let o = t.coordsAtPos(e, 2 * i);
                if (!o) return s;
                let n = t.dom.getBoundingClientRect(),
                    r = (o.top + o.bottom) / 2,
                    l = t.posAtCoords({
                        x: n.left + 1,
                        y: r
                    }),
                    h = t.posAtCoords({
                        x: n.right - 1,
                        y: r
                    });
                return null == l || null == h ? s : {
                    from: Math.max(s.from, Math.min(l, h)),
                    to: Math.min(s.to, Math.max(l, h))
                }
            }
            class ys {
                constructor(t, e) {
                    this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
                        read: this.measure.bind(this),
                        write: this.draw.bind(this)
                    }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t)
                }
                update(t) {
                    t.startState.facet(xs) != t.state.facet(xs) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq))
                }
                docViewUpdate(t) {
                    !1 !== this.layer.updateOnDocViewUpdate && t.requestMeasure(this.measureReq)
                }
                setOrder(t) {
                    let e = 0,
                        i = t.facet(xs);
                    for (; e < i.length && i[e] != this.layer;) e++;
                    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e)
                }
                measure() {
                    return this.layer.markers(this.view)
                }
                scale() {
                    let {
                        scaleX: t,
                        scaleY: e
                    } = this.view;
                    t == this.scaleX && e == this.scaleY || (this.scaleX = t, this.scaleY = e, this.dom.style.transform = `scale(${1/t}, ${1/e})`)
                }
                draw(t) {
                    if (t.length != this.drawn.length || t.some(((t, e) => {
                            return i = t, s = this.drawn[e], !(i.constructor == s.constructor && i.eq(s));
                            var i, s
                        }))) {
                        let e = this.dom.firstChild,
                            i = 0;
                        for (let s of t) s.update && e && s.constructor && this.drawn[i].constructor && s.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(s.draw(), e);
                        for (; e;) {
                            let t = e.nextSibling;
                            e.remove(), e = t
                        }
                        this.drawn = t
                    }
                }
                destroy() {
                    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
                }
            }
            const xs = s.r$.define();

            function Ss(t) {
                return [oe.define((e => new ys(e, t))), xs.of(t)]
            }
            const Ms = !X.ios,
                Cs = s.r$.define({
                    combine: t => (0, s.BO)(t, {
                        cursorBlinkRate: 1200,
                        drawRangeCursor: !0
                    }, {
                        cursorBlinkRate: (t, e) => Math.min(t, e),
                        drawRangeCursor: (t, e) => t || e
                    })
                });

            function ks(t = {}) {
                return [Cs.of(t), Ds, Es, Bs, _t.of(!0)]
            }

            function As(t) {
                return t.facet(Cs)
            }

            function Ts(t) {
                return t.startState.facet(Cs) != t.state.facet(Cs)
            }
            const Ds = Ss({
                above: !0,
                markers(t) {
                    let {
                        state: e
                    } = t, i = e.facet(Cs), o = [];
                    for (let n of e.selection.ranges) {
                        let r = n == e.selection.main;
                        if (n.empty ? !r || Ms : i.drawRangeCursor) {
                            let e = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
                                i = n.empty ? n : s.jT.cursor(n.head, n.head > n.anchor ? -1 : 1);
                            for (let s of vs.forRange(t, e, i)) o.push(s)
                        }
                    }
                    return o
                },
                update(t, e) {
                    t.transactions.some((t => t.selection)) && (e.style.animationName = "cm-blink" == e.style.animationName ? "cm-blink2" : "cm-blink");
                    let i = Ts(t);
                    return i && Os(t.state, e), t.docChanged || t.selectionSet || i
                },
                mount(t, e) {
                    Os(e.state, t)
                },
                class: "cm-cursorLayer"
            });

            function Os(t, e) {
                e.style.animationDuration = t.facet(Cs).cursorBlinkRate + "ms"
            }
            const Es = Ss({
                    above: !1,
                    markers: t => t.state.selection.ranges.map((e => e.empty ? [] : vs.forRange(t, "cm-selectionBackground", e))).reduce(((t, e) => t.concat(e))),
                    update: (t, e) => t.docChanged || t.selectionSet || t.viewportChanged || Ts(t),
                    class: "cm-selectionLayer"
                }),
                Rs = {
                    ".cm-line": {
                        "& ::selection, &::selection": {
                            backgroundColor: "transparent !important"
                        }
                    },
                    ".cm-content": {
                        "& :focus": {
                            caretColor: "initial !important",
                            "&::selection, & ::selection": {
                                backgroundColor: "Highlight !important"
                            }
                        }
                    }
                };
            Ms && (Rs[".cm-line"].caretColor = Rs[".cm-content"].caretColor = "transparent !important");
            const Bs = s.Wl.highest(is.theme(Rs)),
                Ls = s.Py.define({
                    map: (t, e) => null == t ? null : e.mapPos(t)
                }),
                Ps = s.QQ.define({
                    create: () => null,
                    update: (t, e) => (null != t && (t = e.changes.mapPos(t)), e.effects.reduce(((t, e) => e.is(Ls) ? e.value : t), t))
                }),
                Hs = oe.fromClass(class {
                    constructor(t) {
                        this.view = t, this.cursor = null, this.measureReq = {
                            read: this.readPos.bind(this),
                            write: this.drawCursor.bind(this)
                        }
                    }
                    update(t) {
                        var e;
                        let i = t.state.field(Ps);
                        null == i ? null != this.cursor && (null === (e = this.cursor) || void 0 === e || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (t.startState.field(Ps) != i || t.docChanged || t.geometryChanged) && this.view.requestMeasure(this.measureReq))
                    }
                    readPos() {
                        let {
                            view: t
                        } = this, e = t.state.field(Ps), i = null != e && t.coordsAtPos(e);
                        if (!i) return null;
                        let s = t.scrollDOM.getBoundingClientRect();
                        return {
                            left: i.left - s.left + t.scrollDOM.scrollLeft * t.scaleX,
                            top: i.top - s.top + t.scrollDOM.scrollTop * t.scaleY,
                            height: i.bottom - i.top
                        }
                    }
                    drawCursor(t) {
                        if (this.cursor) {
                            let {
                                scaleX: e,
                                scaleY: i
                            } = this.view;
                            t ? (this.cursor.style.left = t.left / e + "px", this.cursor.style.top = t.top / i + "px", this.cursor.style.height = t.height / i + "px") : this.cursor.style.left = "-100000px"
                        }
                    }
                    destroy() {
                        this.cursor && this.cursor.remove()
                    }
                    setDropPos(t) {
                        this.view.state.field(Ps) != t && this.view.dispatch({
                            effects: Ls.of(t)
                        })
                    }
                }, {
                    eventObservers: {
                        dragover(t) {
                            this.setDropPos(this.view.posAtCoords({
                                x: t.clientX,
                                y: t.clientY
                            }))
                        },
                        dragleave(t) {
                            t.target != this.view.contentDOM && this.view.contentDOM.contains(t.relatedTarget) || this.setDropPos(null)
                        },
                        dragend() {
                            this.setDropPos(null)
                        },
                        drop() {
                            this.setDropPos(null)
                        }
                    }
                });

            function Vs() {
                return [Ps, Hs]
            }

            function Ns(t, e, i, s, o) {
                e.lastIndex = 0;
                for (let n, r = t.iterRange(i, s), l = i; !r.next().done; l += r.value.length)
                    if (!r.lineBreak)
                        for (; n = e.exec(r.value);) o(l + n.index, n)
            }
            class Ws {
                constructor(t) {
                    const {
                        regexp: e,
                        decoration: i,
                        decorate: s,
                        boundary: o,
                        maxLength: n = 1e3
                    } = t;
                    if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
                    if (this.regexp = e, s) this.addMatch = (t, e, i, o) => s(o, i, i + t[0].length, t, e);
                    else if ("function" == typeof i) this.addMatch = (t, e, s, o) => {
                        let n = i(t, e, s);
                        n && o(s, s + t[0].length, n)
                    };
                    else {
                        if (!i) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
                        this.addMatch = (t, e, s, o) => o(s, s + t[0].length, i)
                    }
                    this.boundary = o, this.maxLength = n
                }
                createDeco(t) {
                    let e = new s.f_,
                        i = e.add.bind(e);
                    for (let {
                            from: s,
                            to: o
                        } of function(t, e) {
                            let i = t.visibleRanges;
                            if (1 == i.length && i[0].from == t.viewport.from && i[0].to == t.viewport.to) return i;
                            let s = [];
                            for (let {
                                    from: o,
                                    to: n
                                } of i) o = Math.max(t.state.doc.lineAt(o).from, o - e), n = Math.min(t.state.doc.lineAt(n).to, n + e), s.length && s[s.length - 1].to >= o ? s[s.length - 1].to = n : s.push({
                                from: o,
                                to: n
                            });
                            return s
                        }(t, this.maxLength)) Ns(t.state.doc, this.regexp, s, o, ((e, s) => this.addMatch(s, t, e, i)));
                    return e.finish()
                }
                updateDeco(t, e) {
                    let i = 1e9,
                        s = -1;
                    return t.docChanged && t.changes.iterChanges(((e, o, n, r) => {
                        r > t.view.viewport.from && n < t.view.viewport.to && (i = Math.min(n, i), s = Math.max(r, s))
                    })), t.viewportChanged || s - i > 1e3 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e
                }
                updateRange(t, e, i, s) {
                    for (let o of t.visibleRanges) {
                        let n = Math.max(o.from, i),
                            r = Math.min(o.to, s);
                        if (r > n) {
                            let i = t.state.doc.lineAt(n),
                                s = i.to < r ? t.state.doc.lineAt(r) : i,
                                l = Math.max(o.from, i.from),
                                h = Math.min(o.to, s.to);
                            if (this.boundary) {
                                for (; n > i.from; n--)
                                    if (this.boundary.test(i.text[n - 1 - i.from])) {
                                        l = n;
                                        break
                                    }
                                for (; r < s.to; r++)
                                    if (this.boundary.test(s.text[r - s.from])) {
                                        h = r;
                                        break
                                    }
                            }
                            let a, c = [],
                                d = (t, e, i) => c.push(i.range(t, e));
                            if (i == s)
                                for (this.regexp.lastIndex = l - i.from;
                                    (a = this.regexp.exec(i.text)) && a.index < h - i.from;) this.addMatch(a, t, a.index + i.from, d);
                            else Ns(t.state.doc, this.regexp, l, h, ((e, i) => this.addMatch(i, t, e, d)));
                            e = e.update({
                                filterFrom: l,
                                filterTo: h,
                                filter: (t, e) => t < l || e > h,
                                add: c
                            })
                        }
                    }
                    return e
                }
            }
            const Fs = null != /x/.unicode ? "gu" : "g",
                zs = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", Fs),
                Is = {
                    0: "null",
                    7: "bell",
                    8: "backspace",
                    10: "newline",
                    11: "vertical tab",
                    13: "carriage return",
                    27: "escape",
                    8203: "zero width space",
                    8204: "zero width non-joiner",
                    8205: "zero width joiner",
                    8206: "left-to-right mark",
                    8207: "right-to-left mark",
                    8232: "line separator",
                    8237: "left-to-right override",
                    8238: "right-to-left override",
                    8294: "left-to-right isolate",
                    8295: "right-to-left isolate",
                    8297: "pop directional isolate",
                    8233: "paragraph separator",
                    65279: "zero width no-break space",
                    65532: "object replacement"
                };
            let qs = null;
            const Ks = s.r$.define({
                combine(t) {
                    let e = (0, s.BO)(t, {
                        render: null,
                        specialChars: zs,
                        addSpecialChars: null
                    });
                    return (e.replaceTabs = ! function() {
                        var t;
                        if (null == qs && "undefined" != typeof document && document.body) {
                            let e = document.body.style;
                            qs = null != (null !== (t = e.tabSize) && void 0 !== t ? t : e.MozTabSize)
                        }
                        return qs || !1
                    }()) && (e.specialChars = new RegExp("\t|" + e.specialChars.source, Fs)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Fs)), e
                }
            });

            function js(t = {}) {
                return [Ks.of(t), $s || ($s = oe.fromClass(class {
                    constructor(t) {
                        this.view = t, this.decorations = lt.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(t.state.facet(Ks)), this.decorations = this.decorator.createDeco(t)
                    }
                    makeDecorator(t) {
                        return new Ws({
                            regexp: t.specialChars,
                            decoration: (e, i, o) => {
                                let {
                                    doc: n
                                } = i.state, r = (0, s.gm)(e[0], 0);
                                if (9 == r) {
                                    let t = n.lineAt(o),
                                        e = i.state.tabSize,
                                        r = (0, s.IS)(t.text, e, o - t.from);
                                    return lt.replace({
                                        widget: new Ys((e - r % e) * this.view.defaultCharacterWidth / this.view.scaleX)
                                    })
                                }
                                return this.decorationCache[r] || (this.decorationCache[r] = lt.replace({
                                    widget: new Xs(t, r)
                                }))
                            },
                            boundary: t.replaceTabs ? void 0 : /[^]/
                        })
                    }
                    update(t) {
                        let e = t.state.facet(Ks);
                        t.startState.facet(Ks) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(t.view)) : this.decorations = this.decorator.updateDeco(t, this.decorations)
                    }
                }, {
                    decorations: t => t.decorations
                }))]
            }
            let $s = null;
            class Xs extends nt {
                constructor(t, e) {
                    super(), this.options = t, this.code = e
                }
                eq(t) {
                    return t.code == this.code
                }
                toDOM(t) {
                    let e = (i = this.code) >= 32 ? "\u2022" : 10 == i ? "\u2424" : String.fromCharCode(9216 + i);
                    var i;
                    let s = t.state.phrase("Control character") + " " + (Is[this.code] || "0x" + this.code.toString(16)),
                        o = this.options.render && this.options.render(this.code, s, e);
                    if (o) return o;
                    let n = document.createElement("span");
                    return n.textContent = e, n.title = s, n.setAttribute("aria-label", s), n.className = "cm-specialChar", n
                }
                ignoreEvent() {
                    return !1
                }
            }
            class Ys extends nt {
                constructor(t) {
                    super(), this.width = t
                }
                eq(t) {
                    return t.width == this.width
                }
                toDOM() {
                    let t = document.createElement("span");
                    return t.textContent = "\t", t.className = "cm-tab", t.style.width = this.width + "px", t
                }
                ignoreEvent() {
                    return !1
                }
            }

            function Gs() {
                return Us
            }
            const _s = lt.line({
                    class: "cm-activeLine"
                }),
                Us = oe.fromClass(class {
                    constructor(t) {
                        this.decorations = this.getDeco(t)
                    }
                    update(t) {
                        (t.docChanged || t.selectionSet) && (this.decorations = this.getDeco(t.view))
                    }
                    getDeco(t) {
                        let e = -1,
                            i = [];
                        for (let s of t.state.selection.ranges) {
                            let o = t.lineBlockAt(s.head);
                            o.from > e && (i.push(_s.range(o.from)), e = o.from)
                        }
                        return lt.set(i)
                    }
                }, {
                    decorations: t => t.decorations
                });
            class Qs extends nt {
                constructor(t) {
                    super(), this.content = t
                }
                toDOM() {
                    let t = document.createElement("span");
                    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : this.content), "string" == typeof this.content ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t
                }
                coordsAt(t) {
                    let e = t.firstChild ? a(t.firstChild) : [];
                    if (!e.length) return null;
                    let i = window.getComputedStyle(t.parentNode),
                        s = g(e[0], "rtl" != i.direction),
                        o = parseInt(i.lineHeight);
                    return s.bottom - s.top > 1.5 * o ? {
                        left: s.left,
                        right: s.right,
                        top: s.top,
                        bottom: s.top + o
                    } : s
                }
                ignoreEvent() {
                    return !1
                }
            }

            function Zs(t) {
                return oe.fromClass(class {
                    constructor(e) {
                        this.view = e, this.placeholder = t ? lt.set([lt.widget({
                            widget: new Qs(t),
                            side: 1
                        }).range(0)]) : lt.none
                    }
                    get decorations() {
                        return this.view.state.doc.length ? lt.none : this.placeholder
                    }
                }, {
                    decorations: t => t.decorations
                })
            }
            const Js = 2e3;

            function to(t, e) {
                let i = t.posAtCoords({
                        x: e.clientX,
                        y: e.clientY
                    }, !1),
                    o = t.state.doc.lineAt(i),
                    n = i - o.from,
                    r = n > Js ? -1 : n == o.length ? function(t, e) {
                        let i = t.coordsAtPos(t.viewport.from);
                        return i ? Math.round(Math.abs((i.left - e) / t.defaultCharacterWidth)) : -1
                    }(t, e.clientX) : (0, s.IS)(o.text, t.state.tabSize, i - o.from);
                return {
                    line: o.number,
                    col: r,
                    off: n
                }
            }

            function eo(t, e) {
                let i = to(t, e),
                    o = t.state.selection;
                return i ? {
                    update(t) {
                        if (t.docChanged) {
                            let e = t.changes.mapPos(t.startState.doc.line(i.line).from),
                                s = t.state.doc.lineAt(e);
                            i = {
                                line: s.number,
                                col: i.col,
                                off: Math.min(i.off, s.length)
                            }, o = o.map(t.changes)
                        }
                    },
                    get(e, n, r) {
                        let l = to(t, e);
                        if (!l) return o;
                        let h = function(t, e, i) {
                            let o = Math.min(e.line, i.line),
                                n = Math.max(e.line, i.line),
                                r = [];
                            if (e.off > Js || i.off > Js || e.col < 0 || i.col < 0) {
                                let l = Math.min(e.off, i.off),
                                    h = Math.max(e.off, i.off);
                                for (let e = o; e <= n; e++) {
                                    let i = t.doc.line(e);
                                    i.length <= h && r.push(s.jT.range(i.from + l, i.to + h))
                                }
                            } else {
                                let l = Math.min(e.col, i.col),
                                    h = Math.max(e.col, i.col);
                                for (let e = o; e <= n; e++) {
                                    let i = t.doc.line(e),
                                        o = (0, s.Gz)(i.text, l, t.tabSize, !0);
                                    if (o < 0) r.push(s.jT.cursor(i.to));
                                    else {
                                        let e = (0, s.Gz)(i.text, h, t.tabSize);
                                        r.push(s.jT.range(i.from + o, i.from + e))
                                    }
                                }
                            }
                            return r
                        }(t.state, i, l);
                        return h.length ? r ? s.jT.create(h.concat(o.ranges)) : s.jT.create(h) : o
                    }
                } : null
            }

            function io(t) {
                let e = (null === t || void 0 === t ? void 0 : t.eventFilter) || (t => t.altKey && 0 == t.button);
                return is.mouseSelectionStyle.of(((t, i) => e(i) ? eo(t, i) : null))
            }
            const so = {
                    Alt: [18, t => !!t.altKey],
                    Control: [17, t => !!t.ctrlKey],
                    Shift: [16, t => !!t.shiftKey],
                    Meta: [91, t => !!t.metaKey]
                },
                oo = {
                    style: "cursor: crosshair"
                };

            function no(t = {}) {
                let [e, i] = so[t.key || "Alt"], s = oe.fromClass(class {
                    constructor(t) {
                        this.view = t, this.isDown = !1
                    }
                    set(t) {
                        this.isDown != t && (this.isDown = t, this.view.update([]))
                    }
                }, {
                    eventObservers: {
                        keydown(t) {
                            this.set(t.keyCode == e || i(t))
                        },
                        keyup(t) {
                            t.keyCode != e && i(t) || this.set(!1)
                        },
                        mousemove(t) {
                            this.set(i(t))
                        }
                    }
                });
                return [s, is.contentAttributes.of((t => {
                    var e;
                    return (null === (e = t.plugin(s)) || void 0 === e ? void 0 : e.isDown) ? oo : null
                }))]
            }
            const ro = "-10000px";
            class lo {
                constructor(t, e, i, s) {
                    this.facet = e, this.createTooltipView = i, this.removeTooltipView = s, this.input = t.state.facet(e), this.tooltips = this.input.filter((t => t));
                    let o = null;
                    this.tooltipViews = this.tooltips.map((t => o = i(t, o)))
                }
                update(t, e) {
                    var i;
                    let s = t.state.facet(this.facet),
                        o = s.filter((t => t));
                    if (s === this.input) {
                        for (let e of this.tooltipViews) e.update && e.update(t);
                        return !1
                    }
                    let n = [],
                        r = e ? [] : null;
                    for (let l = 0; l < o.length; l++) {
                        let i = o[l],
                            s = -1;
                        if (i) {
                            for (let t = 0; t < this.tooltips.length; t++) {
                                let e = this.tooltips[t];
                                e && e.create == i.create && (s = t)
                            }
                            if (s < 0) n[l] = this.createTooltipView(i, l ? n[l - 1] : null), r && (r[l] = !!i.above);
                            else {
                                let i = n[l] = this.tooltipViews[s];
                                r && (r[l] = e[s]), i.update && i.update(t)
                            }
                        }
                    }
                    for (let l of this.tooltipViews) n.indexOf(l) < 0 && (this.removeTooltipView(l), null === (i = l.destroy) || void 0 === i || i.call(l));
                    return e && (r.forEach(((t, i) => e[i] = t)), e.length = r.length), this.input = s, this.tooltips = o, this.tooltipViews = n, !0
                }
            }

            function ho(t) {
                let {
                    win: e
                } = t;
                return {
                    top: 0,
                    left: 0,
                    bottom: e.innerHeight,
                    right: e.innerWidth
                }
            }
            const ao = s.r$.define({
                    combine: t => {
                        var e, i, s;
                        return {
                            position: X.ios ? "absolute" : (null === (e = t.find((t => t.position))) || void 0 === e ? void 0 : e.position) || "fixed",
                            parent: (null === (i = t.find((t => t.parent))) || void 0 === i ? void 0 : i.parent) || null,
                            tooltipSpace: (null === (s = t.find((t => t.tooltipSpace))) || void 0 === s ? void 0 : s.tooltipSpace) || ho
                        }
                    }
                }),
                co = new WeakMap,
                uo = oe.fromClass(class {
                    constructor(t) {
                        this.view = t, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
                        let e = t.state.facet(ao);
                        this.position = e.position, this.parent = e.parent, this.classes = t.themeClasses, this.createContainer(), this.measureReq = {
                            read: this.readMeasure.bind(this),
                            write: this.writeMeasure.bind(this),
                            key: this
                        }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new lo(t, go, ((t, e) => this.createTooltip(t, e)), (t => {
                            this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove()
                        })), this.above = this.manager.tooltips.map((t => !!t.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((t => {
                            Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon()
                        }), {
                            threshold: [1]
                        }) : null, this.observeIntersection(), t.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
                    }
                    createContainer() {
                        this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
                    }
                    observeIntersection() {
                        if (this.intersectionObserver) {
                            this.intersectionObserver.disconnect();
                            for (let t of this.manager.tooltipViews) this.intersectionObserver.observe(t.dom)
                        }
                    }
                    measureSoon() {
                        this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
                            this.measureTimeout = -1, this.maybeMeasure()
                        }), 50))
                    }
                    update(t) {
                        t.transactions.length && (this.lastTransaction = Date.now());
                        let e = this.manager.update(t, this.above);
                        e && this.observeIntersection();
                        let i = e || t.geometryChanged,
                            s = t.state.facet(ao);
                        if (s.position != this.position && !this.madeAbsolute) {
                            this.position = s.position;
                            for (let t of this.manager.tooltipViews) t.dom.style.position = this.position;
                            i = !0
                        }
                        if (s.parent != this.parent) {
                            this.parent && this.container.remove(), this.parent = s.parent, this.createContainer();
                            for (let t of this.manager.tooltipViews) this.container.appendChild(t.dom);
                            i = !0
                        } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
                        i && this.maybeMeasure()
                    }
                    createTooltip(t, e) {
                        let i = t.create(this.view),
                            s = e ? e.dom : null;
                        if (i.dom.classList.add("cm-tooltip"), t.arrow && !i.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
                            let t = document.createElement("div");
                            t.className = "cm-tooltip-arrow", i.dom.appendChild(t)
                        }
                        return i.dom.style.position = this.position, i.dom.style.top = ro, i.dom.style.left = "0px", this.container.insertBefore(i.dom, s), i.mount && i.mount(this.view), this.resizeObserver && this.resizeObserver.observe(i.dom), i
                    }
                    destroy() {
                        var t, e, i;
                        this.view.win.removeEventListener("resize", this.measureSoon);
                        for (let s of this.manager.tooltipViews) s.dom.remove(), null === (t = s.destroy) || void 0 === t || t.call(s);
                        this.parent && this.container.remove(), null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), null === (i = this.intersectionObserver) || void 0 === i || i.disconnect(), clearTimeout(this.measureTimeout)
                    }
                    readMeasure() {
                        let t = this.view.dom.getBoundingClientRect(),
                            e = 1,
                            i = 1,
                            s = !1;
                        if ("fixed" == this.position && this.manager.tooltipViews.length) {
                            let {
                                dom: t
                            } = this.manager.tooltipViews[0];
                            if (X.gecko) s = t.offsetParent != this.container.ownerDocument.body;
                            else if (t.style.top == ro && "0px" == t.style.left) {
                                let e = t.getBoundingClientRect();
                                s = Math.abs(e.top + 1e4) > 1 || Math.abs(e.left) > 1
                            }
                        }
                        if (s || "absolute" == this.position)
                            if (this.parent) {
                                let t = this.parent.getBoundingClientRect();
                                t.width && t.height && (e = t.width / this.parent.offsetWidth, i = t.height / this.parent.offsetHeight)
                            } else({
                                scaleX: e,
                                scaleY: i
                            } = this.view.viewState);
                        return {
                            editor: t,
                            parent: this.parent ? this.container.getBoundingClientRect() : t,
                            pos: this.manager.tooltips.map(((t, e) => {
                                let i = this.manager.tooltipViews[e];
                                return i.getCoords ? i.getCoords(t.pos) : this.view.coordsAtPos(t.pos)
                            })),
                            size: this.manager.tooltipViews.map((({
                                dom: t
                            }) => t.getBoundingClientRect())),
                            space: this.view.state.facet(ao).tooltipSpace(this.view),
                            scaleX: e,
                            scaleY: i,
                            makeAbsolute: s
                        }
                    }
                    writeMeasure(t) {
                        var e;
                        if (t.makeAbsolute) {
                            this.madeAbsolute = !0, this.position = "absolute";
                            for (let t of this.manager.tooltipViews) t.dom.style.position = "absolute"
                        }
                        let {
                            editor: i,
                            space: s,
                            scaleX: o,
                            scaleY: n
                        } = t, r = [];
                        for (let l = 0; l < this.manager.tooltips.length; l++) {
                            let h = this.manager.tooltips[l],
                                a = this.manager.tooltipViews[l],
                                {
                                    dom: c
                                } = a,
                                d = t.pos[l],
                                u = t.size[l];
                            if (!d || d.bottom <= Math.max(i.top, s.top) || d.top >= Math.min(i.bottom, s.bottom) || d.right < Math.max(i.left, s.left) - .1 || d.left > Math.min(i.right, s.right) + .1) {
                                c.style.top = ro;
                                continue
                            }
                            let f = h.arrow ? a.dom.querySelector(".cm-tooltip-arrow") : null,
                                p = f ? 7 : 0,
                                g = u.right - u.left,
                                m = null !== (e = co.get(a)) && void 0 !== e ? e : u.bottom - u.top,
                                v = a.offset || po,
                                w = this.view.textDirection == bt.LTR,
                                b = u.width > s.right - s.left ? w ? s.left : s.right - u.width : w ? Math.max(s.left, Math.min(d.left - (f ? 14 : 0) + v.x, s.right - g)) : Math.min(Math.max(s.left, d.left - g + (f ? 14 : 0) - v.x), s.right - g),
                                y = this.above[l];
                            !h.strictSide && (y ? d.top - (u.bottom - u.top) - v.y < s.top : d.bottom + (u.bottom - u.top) + v.y > s.bottom) && y == s.bottom - d.bottom > d.top - s.top && (y = this.above[l] = !y);
                            let x = (y ? d.top - s.top : s.bottom - d.bottom) - p;
                            if (x < m && !1 !== a.resize) {
                                if (x < this.view.defaultLineHeight) {
                                    c.style.top = ro;
                                    continue
                                }
                                co.set(a, m), c.style.height = (m = x) / n + "px"
                            } else c.style.height && (c.style.height = "");
                            let S = y ? d.top - m - p - v.y : d.bottom + p + v.y,
                                M = b + g;
                            if (!0 !== a.overlap)
                                for (let t of r) t.left < M && t.right > b && t.top < S + m && t.bottom > S && (S = y ? t.top - m - 2 - p : t.bottom + p + 2);
                            if ("absolute" == this.position ? (c.style.top = (S - t.parent.top) / n + "px", c.style.left = (b - t.parent.left) / o + "px") : (c.style.top = S / n + "px", c.style.left = b / o + "px"), f) {
                                let t = d.left + (w ? v.x : -v.x) - (b + 14 - 7);
                                f.style.left = t / o + "px"
                            }!0 !== a.overlap && r.push({
                                left: b,
                                top: S,
                                right: M,
                                bottom: S + m
                            }), c.classList.toggle("cm-tooltip-above", y), c.classList.toggle("cm-tooltip-below", !y), a.positioned && a.positioned(t.space)
                        }
                    }
                    maybeMeasure() {
                        if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
                            for (let t of this.manager.tooltipViews) t.dom.style.top = ro
                    }
                }, {
                    eventObservers: {
                        scroll() {
                            this.maybeMeasure()
                        }
                    }
                }),
                fo = is.baseTheme({
                    ".cm-tooltip": {
                        zIndex: 100,
                        boxSizing: "border-box"
                    },
                    "&light .cm-tooltip": {
                        border: "1px solid #bbb",
                        backgroundColor: "#f5f5f5"
                    },
                    "&light .cm-tooltip-section:not(:first-child)": {
                        borderTop: "1px solid #bbb"
                    },
                    "&dark .cm-tooltip": {
                        backgroundColor: "#333338",
                        color: "white"
                    },
                    ".cm-tooltip-arrow": {
                        height: "7px",
                        width: "14px",
                        position: "absolute",
                        zIndex: -1,
                        overflow: "hidden",
                        "&:before, &:after": {
                            content: "''",
                            position: "absolute",
                            width: 0,
                            height: 0,
                            borderLeft: "7px solid transparent",
                            borderRight: "7px solid transparent"
                        },
                        ".cm-tooltip-above &": {
                            bottom: "-7px",
                            "&:before": {
                                borderTop: "7px solid #bbb"
                            },
                            "&:after": {
                                borderTop: "7px solid #f5f5f5",
                                bottom: "1px"
                            }
                        },
                        ".cm-tooltip-below &": {
                            top: "-7px",
                            "&:before": {
                                borderBottom: "7px solid #bbb"
                            },
                            "&:after": {
                                borderBottom: "7px solid #f5f5f5",
                                top: "1px"
                            }
                        }
                    },
                    "&dark .cm-tooltip .cm-tooltip-arrow": {
                        "&:before": {
                            borderTopColor: "#333338",
                            borderBottomColor: "#333338"
                        },
                        "&:after": {
                            borderTopColor: "transparent",
                            borderBottomColor: "transparent"
                        }
                    }
                }),
                po = {
                    x: 0,
                    y: 0
                },
                go = s.r$.define({
                    enables: [uo, fo]
                }),
                mo = s.r$.define({
                    combine: t => t.reduce(((t, e) => t.concat(e)), [])
                });
            class vo {
                static create(t) {
                    return new vo(t)
                }
                constructor(t) {
                    this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new lo(t, mo, ((t, e) => this.createHostedView(t, e)), (t => t.dom.remove()))
                }
                createHostedView(t, e) {
                    let i = t.create(this.view);
                    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, e ? e.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i
                }
                mount(t) {
                    for (let e of this.manager.tooltipViews) e.mount && e.mount(t);
                    this.mounted = !0
                }
                positioned(t) {
                    for (let e of this.manager.tooltipViews) e.positioned && e.positioned(t)
                }
                update(t) {
                    this.manager.update(t)
                }
                destroy() {
                    var t;
                    for (let e of this.manager.tooltipViews) null === (t = e.destroy) || void 0 === t || t.call(e)
                }
                passProp(t) {
                    let e;
                    for (let i of this.manager.tooltipViews) {
                        let s = i[t];
                        if (void 0 !== s)
                            if (void 0 === e) e = s;
                            else if (e !== s) return
                    }
                    return e
                }
                get offset() {
                    return this.passProp("offset")
                }
                get getCoords() {
                    return this.passProp("getCoords")
                }
                get overlap() {
                    return this.passProp("overlap")
                }
                get resize() {
                    return this.passProp("resize")
                }
            }
            const wo = go.compute([mo], (t => {
                let e = t.facet(mo);
                return 0 === e.length ? null : {
                    pos: Math.min(...e.map((t => t.pos))),
                    end: Math.max(...e.map((t => {
                        var e;
                        return null !== (e = t.end) && void 0 !== e ? e : t.pos
                    }))),
                    create: vo.create,
                    above: e[0].above,
                    arrow: e.some((t => t.arrow))
                }
            }));
            class bo {
                constructor(t, e, i, s, o) {
                    this.view = t, this.source = e, this.field = i, this.setHover = s, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
                        x: 0,
                        y: 0,
                        target: t.dom,
                        time: 0
                    }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
                }
                update() {
                    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
                }
                get active() {
                    return this.view.state.field(this.field)
                }
                checkHover() {
                    if (this.hoverTimeout = -1, this.active.length) return;
                    let t = Date.now() - this.lastMove.time;
                    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover()
                }
                startHover() {
                    clearTimeout(this.restartTimeout);
                    let {
                        view: t,
                        lastMove: e
                    } = this, i = t.docView.nearest(e.target);
                    if (!i) return;
                    let s, o = 1;
                    if (i instanceof _) s = i.posAtStart;
                    else {
                        if (s = t.posAtCoords(e), null == s) return;
                        let i = t.coordsAtPos(s);
                        if (!i || e.y < i.top || e.y > i.bottom || e.x < i.left - t.defaultCharacterWidth || e.x > i.right + t.defaultCharacterWidth) return;
                        let n = t.bidiSpans(t.state.doc.lineAt(s)).find((t => t.from <= s && t.to >= s)),
                            r = n && n.dir == bt.RTL ? -1 : 1;
                        o = e.x < i.left ? -r : r
                    }
                    let n = this.source(t, s, o);
                    if (null === n || void 0 === n ? void 0 : n.then) {
                        let e = this.pending = {
                            pos: s
                        };
                        n.then((i => {
                            this.pending == e && (this.pending = null, !i || Array.isArray(i) && !i.length || t.dispatch({
                                effects: this.setHover.of(Array.isArray(i) ? i : [i])
                            }))
                        }), (e => te(t.state, e, "hover tooltip")))
                    } else !n || Array.isArray(n) && !n.length || t.dispatch({
                        effects: this.setHover.of(Array.isArray(n) ? n : [n])
                    })
                }
                get tooltip() {
                    let t = this.view.plugin(uo),
                        e = t ? t.manager.tooltips.findIndex((t => t.create == vo.create)) : -1;
                    return e > -1 ? t.manager.tooltipViews[e] : null
                }
                mousemove(t) {
                    var e, i;
                    this.lastMove = {
                        x: t.clientX,
                        y: t.clientY,
                        target: t.target,
                        time: Date.now()
                    }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
                    let {
                        active: s,
                        tooltip: o
                    } = this;
                    if (s.length && o && ! function(t, e) {
                            let i, {
                                left: s,
                                right: o,
                                top: n,
                                bottom: r
                            } = t.getBoundingClientRect();
                            if (i = t.querySelector(".cm-tooltip-arrow")) {
                                let t = i.getBoundingClientRect();
                                n = Math.min(t.top, n), r = Math.max(t.bottom, r)
                            }
                            return e.clientX >= s - 4 && e.clientX <= o + 4 && e.clientY >= n - 4 && e.clientY <= r + 4
                        }(o.dom, t) || this.pending) {
                        let {
                            pos: o
                        } = s[0] || this.pending, n = null !== (i = null === (e = s[0]) || void 0 === e ? void 0 : e.end) && void 0 !== i ? i : o;
                        (o == n ? this.view.posAtCoords(this.lastMove) == o : function(t, e, i, s, o, n) {
                            let r = t.scrollDOM.getBoundingClientRect(),
                                l = t.documentTop + t.documentPadding.top + t.contentHeight;
                            if (r.left > s || r.right < s || r.top > o || Math.min(r.bottom, l) < o) return !1;
                            let h = t.posAtCoords({
                                x: s,
                                y: o
                            }, !1);
                            return h >= e && h <= i
                        }(this.view, o, n, t.clientX, t.clientY)) || (this.view.dispatch({
                            effects: this.setHover.of([])
                        }), this.pending = null)
                    }
                }
                mouseleave(t) {
                    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
                    let {
                        active: e
                    } = this;
                    if (e.length) {
                        let {
                            tooltip: e
                        } = this;
                        e && e.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(e.dom) : this.view.dispatch({
                            effects: this.setHover.of([])
                        })
                    }
                }
                watchTooltipLeave(t) {
                    let e = i => {
                        t.removeEventListener("mouseleave", e), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({
                            effects: this.setHover.of([])
                        })
                    };
                    t.addEventListener("mouseleave", e)
                }
                destroy() {
                    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
                }
            }

            function yo(t, e = {}) {
                let i = s.Py.define(),
                    o = s.QQ.define({
                        create: () => [],
                        update(t, o) {
                            if (t.length && (e.hideOnChange && (o.docChanged || o.selection) ? t = [] : e.hideOn && (t = t.filter((t => !e.hideOn(o, t)))), o.docChanged)) {
                                let e = [];
                                for (let i of t) {
                                    let t = o.changes.mapPos(i.pos, -1, s.gc.TrackDel);
                                    if (null != t) {
                                        let s = Object.assign(Object.create(null), i);
                                        s.pos = t, null != s.end && (s.end = o.changes.mapPos(s.end)), e.push(s)
                                    }
                                }
                                t = e
                            }
                            for (let e of o.effects) e.is(i) && (t = e.value), e.is(So) && (t = []);
                            return t
                        },
                        provide: t => mo.from(t)
                    });
                return {
                    active: o,
                    extension: [o, oe.define((s => new bo(s, t, o, i, e.hoverTime || 300))), wo]
                }
            }

            function xo(t, e) {
                let i = t.plugin(uo);
                if (!i) return null;
                let s = i.manager.tooltips.indexOf(e);
                return s < 0 ? null : i.manager.tooltipViews[s]
            }
            const So = s.Py.define();
            const Mo = s.r$.define({
                combine(t) {
                    let e, i;
                    for (let s of t) e = e || s.topContainer, i = i || s.bottomContainer;
                    return {
                        topContainer: e,
                        bottomContainer: i
                    }
                }
            });

            function Co(t, e) {
                let i = t.plugin(ko),
                    s = i ? i.specs.indexOf(e) : -1;
                return s > -1 ? i.panels[s] : null
            }
            const ko = oe.fromClass(class {
                constructor(t) {
                    this.input = t.state.facet(Do), this.specs = this.input.filter((t => t)), this.panels = this.specs.map((e => e(t)));
                    let e = t.state.facet(Mo);
                    this.top = new Ao(t, !0, e.topContainer), this.bottom = new Ao(t, !1, e.bottomContainer), this.top.sync(this.panels.filter((t => t.top))), this.bottom.sync(this.panels.filter((t => !t.top)));
                    for (let i of this.panels) i.dom.classList.add("cm-panel"), i.mount && i.mount()
                }
                update(t) {
                    let e = t.state.facet(Mo);
                    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Ao(t.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Ao(t.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
                    let i = t.state.facet(Do);
                    if (i != this.input) {
                        let e = i.filter((t => t)),
                            s = [],
                            o = [],
                            n = [],
                            r = [];
                        for (let i of e) {
                            let e, l = this.specs.indexOf(i);
                            l < 0 ? (e = i(t.view), r.push(e)) : (e = this.panels[l], e.update && e.update(t)), s.push(e), (e.top ? o : n).push(e)
                        }
                        this.specs = e, this.panels = s, this.top.sync(o), this.bottom.sync(n);
                        for (let t of r) t.dom.classList.add("cm-panel"), t.mount && t.mount()
                    } else
                        for (let s of this.panels) s.update && s.update(t)
                }
                destroy() {
                    this.top.sync([]), this.bottom.sync([])
                }
            }, {
                provide: t => is.scrollMargins.of((e => {
                    let i = e.plugin(t);
                    return i && {
                        top: i.top.scrollMargin(),
                        bottom: i.bottom.scrollMargin()
                    }
                }))
            });
            class Ao {
                constructor(t, e, i) {
                    this.view = t, this.top = e, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
                }
                sync(t) {
                    for (let e of this.panels) e.destroy && t.indexOf(e) < 0 && e.destroy();
                    this.panels = t, this.syncDOM()
                }
                syncDOM() {
                    if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
                    if (!this.dom) {
                        this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
                        let t = this.container || this.view.dom;
                        t.insertBefore(this.dom, this.top ? t.firstChild : null)
                    }
                    let t = this.dom.firstChild;
                    for (let e of this.panels)
                        if (e.dom.parentNode == this.dom) {
                            for (; t != e.dom;) t = To(t);
                            t = t.nextSibling
                        } else this.dom.insertBefore(e.dom, t);
                    for (; t;) t = To(t)
                }
                scrollMargin() {
                    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
                }
                syncClasses() {
                    if (this.container && this.classes != this.view.themeClasses) {
                        for (let t of this.classes.split(" ")) t && this.container.classList.remove(t);
                        for (let t of (this.classes = this.view.themeClasses).split(" ")) t && this.container.classList.add(t)
                    }
                }
            }

            function To(t) {
                let e = t.nextSibling;
                return t.remove(), e
            }
            const Do = s.r$.define({
                enables: ko
            });
            class Oo extends s.uU {
                compare(t) {
                    return this == t || this.constructor == t.constructor && this.eq(t)
                }
                eq(t) {
                    return !1
                }
                destroy(t) {}
            }
            Oo.prototype.elementClass = "", Oo.prototype.toDOM = void 0, Oo.prototype.mapMode = s.gc.TrackBefore, Oo.prototype.startSide = Oo.prototype.endSide = -1, Oo.prototype.point = !0;
            const Eo = s.r$.define(),
                Ro = s.r$.define(),
                Bo = {
                    class: "",
                    renderEmptyElements: !1,
                    elementStyle: "",
                    markers: () => s.Xs.empty,
                    lineMarker: () => null,
                    widgetMarker: () => null,
                    lineMarkerChange: null,
                    initialSpacer: null,
                    updateSpacer: null,
                    domEventHandlers: {}
                },
                Lo = s.r$.define();

            function Po(t) {
                return [Vo(), Lo.of(Object.assign(Object.assign({}, Bo), t))]
            }
            const Ho = s.r$.define({
                combine: t => t.some((t => t))
            });

            function Vo(t) {
                let e = [No];
                return t && !1 === t.fixed && e.push(Ho.of(!0)), e
            }
            const No = oe.fromClass(class {
                constructor(t) {
                    this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = t.state.facet(Lo).map((e => new Io(t, e)));
                    for (let e of this.gutters) this.dom.appendChild(e.dom);
                    this.fixed = !t.state.facet(Ho), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM)
                }
                update(t) {
                    if (this.updateGutters(t)) {
                        let e = this.prevViewport,
                            i = t.view.viewport,
                            s = Math.min(e.to, i.to) - Math.max(e.from, i.from);
                        this.syncGutters(s < .8 * (i.to - i.from))
                    }
                    t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(Ho) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport
                }
                syncGutters(t) {
                    let e = this.dom.nextSibling;
                    t && this.dom.remove();
                    let i = s.Xs.iter(this.view.state.facet(Eo), this.view.viewport.from),
                        o = [],
                        n = this.gutters.map((t => new zo(t, this.view.viewport, -this.view.documentPadding.top)));
                    for (let s of this.view.viewportLineBlocks)
                        if (o.length && (o = []), Array.isArray(s.type)) {
                            let t = !0;
                            for (let e of s.type)
                                if (e.type == rt.Text && t) {
                                    Fo(i, o, e.from);
                                    for (let t of n) t.line(this.view, e, o);
                                    t = !1
                                } else if (e.widget)
                                for (let t of n) t.widget(this.view, e)
                        } else if (s.type == rt.Text) {
                        Fo(i, o, s.from);
                        for (let t of n) t.line(this.view, s, o)
                    } else if (s.widget)
                        for (let t of n) t.widget(this.view, s);
                    for (let s of n) s.finish();
                    t && this.view.scrollDOM.insertBefore(this.dom, e)
                }
                updateGutters(t) {
                    let e = t.startState.facet(Lo),
                        i = t.state.facet(Lo),
                        o = t.docChanged || t.heightChanged || t.viewportChanged || !s.Xs.eq(t.startState.facet(Eo), t.state.facet(Eo), t.view.viewport.from, t.view.viewport.to);
                    if (e == i)
                        for (let s of this.gutters) s.update(t) && (o = !0);
                    else {
                        o = !0;
                        let s = [];
                        for (let o of i) {
                            let i = e.indexOf(o);
                            i < 0 ? s.push(new Io(this.view, o)) : (this.gutters[i].update(t), s.push(this.gutters[i]))
                        }
                        for (let t of this.gutters) t.dom.remove(), s.indexOf(t) < 0 && t.destroy();
                        for (let t of s) this.dom.appendChild(t.dom);
                        this.gutters = s
                    }
                    return o
                }
                destroy() {
                    for (let t of this.gutters) t.destroy();
                    this.dom.remove()
                }
            }, {
                provide: t => is.scrollMargins.of((e => {
                    let i = e.plugin(t);
                    return i && 0 != i.gutters.length && i.fixed ? e.textDirection == bt.LTR ? {
                        left: i.dom.offsetWidth * e.scaleX
                    } : {
                        right: i.dom.offsetWidth * e.scaleX
                    } : null
                }))
            });

            function Wo(t) {
                return Array.isArray(t) ? t : [t]
            }

            function Fo(t, e, i) {
                for (; t.value && t.from <= i;) t.from == i && e.push(t.value), t.next()
            }
            class zo {
                constructor(t, e, i) {
                    this.gutter = t, this.height = i, this.i = 0, this.cursor = s.Xs.iter(t.markers, e.from)
                }
                addElement(t, e, i) {
                    let {
                        gutter: s
                    } = this, o = (e.top - this.height) / t.scaleY, n = e.height / t.scaleY;
                    if (this.i == s.elements.length) {
                        let e = new qo(t, n, o, i);
                        s.elements.push(e), s.dom.appendChild(e.dom)
                    } else s.elements[this.i].update(t, n, o, i);
                    this.height = e.bottom, this.i++
                }
                line(t, e, i) {
                    let s = [];
                    Fo(this.cursor, s, e.from), i.length && (s = s.concat(i));
                    let o = this.gutter.config.lineMarker(t, e, s);
                    o && s.unshift(o);
                    let n = this.gutter;
                    (0 != s.length || n.config.renderEmptyElements) && this.addElement(t, e, s)
                }
                widget(t, e) {
                    let i = this.gutter.config.widgetMarker(t, e.widget, e),
                        s = i ? [i] : null;
                    for (let o of t.state.facet(Ro)) {
                        let i = o(t, e.widget, e);
                        i && (s || (s = [])).push(i)
                    }
                    s && this.addElement(t, e, s)
                }
                finish() {
                    let t = this.gutter;
                    for (; t.elements.length > this.i;) {
                        let e = t.elements.pop();
                        t.dom.removeChild(e.dom), e.destroy()
                    }
                }
            }
            class Io {
                constructor(t, e) {
                    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
                    for (let i in e.domEventHandlers) this.dom.addEventListener(i, (s => {
                        let o, n = s.target;
                        if (n != this.dom && this.dom.contains(n)) {
                            for (; n.parentNode != this.dom;) n = n.parentNode;
                            let t = n.getBoundingClientRect();
                            o = (t.top + t.bottom) / 2
                        } else o = s.clientY;
                        let r = t.lineBlockAtHeight(o - t.documentTop);
                        e.domEventHandlers[i](t, r, s) && s.preventDefault()
                    }));
                    this.markers = Wo(e.markers(t)), e.initialSpacer && (this.spacer = new qo(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
                }
                update(t) {
                    let e = this.markers;
                    if (this.markers = Wo(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
                        let e = this.config.updateSpacer(this.spacer.markers[0], t);
                        e != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [e])
                    }
                    let i = t.view.viewport;
                    return !s.Xs.eq(this.markers, e, i.from, i.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(t)
                }
                destroy() {
                    for (let t of this.elements) t.destroy()
                }
            }
            class qo {
                constructor(t, e, i, s) {
                    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s)
                }
                update(t, e, i, s) {
                    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""),
                        function(t, e) {
                            if (t.length != e.length) return !1;
                            for (let i = 0; i < t.length; i++)
                                if (!t[i].compare(e[i])) return !1;
                            return !0
                        }(this.markers, s) || this.setMarkers(t, s)
                }
                setMarkers(t, e) {
                    let i = "cm-gutterElement",
                        s = this.dom.firstChild;
                    for (let o = 0, n = 0;;) {
                        let r = n,
                            l = o < e.length ? e[o++] : null,
                            h = !1;
                        if (l) {
                            let t = l.elementClass;
                            t && (i += " " + t);
                            for (let e = n; e < this.markers.length; e++)
                                if (this.markers[e].compare(l)) {
                                    r = e, h = !0;
                                    break
                                }
                        } else r = this.markers.length;
                        for (; n < r;) {
                            let t = this.markers[n++];
                            if (t.toDOM) {
                                t.destroy(s);
                                let e = s.nextSibling;
                                s.remove(), s = e
                            }
                        }
                        if (!l) break;
                        l.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(l.toDOM(t), s)), h && n++
                    }
                    this.dom.className = i, this.markers = e
                }
                destroy() {
                    this.setMarkers(null, [])
                }
            }
            const Ko = s.r$.define(),
                jo = s.r$.define(),
                $o = s.r$.define({
                    combine: t => (0, s.BO)(t, {
                        formatNumber: String,
                        domEventHandlers: {}
                    }, {
                        domEventHandlers(t, e) {
                            let i = Object.assign({}, t);
                            for (let s in e) {
                                let t = i[s],
                                    o = e[s];
                                i[s] = t ? (e, i, s) => t(e, i, s) || o(e, i, s) : o
                            }
                            return i
                        }
                    })
                });
            class Xo extends Oo {
                constructor(t) {
                    super(), this.number = t
                }
                eq(t) {
                    return this.number == t.number
                }
                toDOM() {
                    return document.createTextNode(this.number)
                }
            }

            function Yo(t, e) {
                return t.state.facet($o).formatNumber(e, t.state)
            }
            const Go = Lo.compute([$o], (t => ({
                class: "cm-lineNumbers",
                renderEmptyElements: !1,
                markers: t => t.state.facet(Ko),
                lineMarker: (t, e, i) => i.some((t => t.toDOM)) ? null : new Xo(Yo(t, t.state.doc.lineAt(e.from).number)),
                widgetMarker: (t, e, i) => {
                    for (let s of t.state.facet(jo)) {
                        let o = s(t, e, i);
                        if (o) return o
                    }
                    return null
                },
                lineMarkerChange: t => t.startState.facet($o) != t.state.facet($o),
                initialSpacer: t => new Xo(Yo(t, Uo(t.state.doc.lines))),
                updateSpacer(t, e) {
                    let i = Yo(e.view, Uo(e.view.state.doc.lines));
                    return i == t.number ? t : new Xo(i)
                },
                domEventHandlers: t.facet($o).domEventHandlers
            })));

            function _o(t = {}) {
                return [$o.of(t), Vo(), Go]
            }

            function Uo(t) {
                let e = 9;
                for (; e < t;) e = 10 * e + 9;
                return e
            }
            const Qo = new class extends Oo {
                    constructor() {
                        super(...arguments), this.elementClass = "cm-activeLineGutter"
                    }
                },
                Zo = Eo.compute(["selection"], (t => {
                    let e = [],
                        i = -1;
                    for (let s of t.selection.ranges) {
                        let o = t.doc.lineAt(s.head).from;
                        o > i && (i = o, e.push(Qo.range(o)))
                    }
                    return s.Xs.of(e)
                }));

            function Jo() {
                return Zo
            }
        }
    }
]);