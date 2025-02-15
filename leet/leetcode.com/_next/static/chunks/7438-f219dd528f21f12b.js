"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7438], {
        77768: function(t, n, e) {
            e.d(n, {
                r: function() {
                    return w
                }
            });
            var r = e(67294),
                i = e(35748),
                o = e(19946),
                u = e(61363),
                a = e(64103),
                s = e(95389),
                l = e(39516),
                c = e(14157),
                h = e(23784),
                f = e(46045),
                p = e(18689),
                d = e(73781),
                v = e(31147),
                y = e(94192);
            let g = (0, r.createContext)(null);
            g.displayName = "GroupContext";
            let _ = r.Fragment;
            let m = (0, i.yV)((function(t, n) {
                    let e = (0, o.M)(),
                        {
                            id: s = `headlessui-switch-${e}`,
                            checked: l,
                            defaultChecked: _ = !1,
                            onChange: m,
                            name: w,
                            value: b,
                            ...x
                        } = t,
                        k = (0, r.useContext)(g),
                        A = (0, r.useRef)(null),
                        N = (0, h.T)(A, n, null === k ? null : k.setSwitch),
                        [E, $] = (0, v.q)(l, m, _),
                        S = (0, d.z)((() => null == $ ? void 0 : $(!E))),
                        M = (0, d.z)((t => {
                            if ((0, a.P)(t.currentTarget)) return t.preventDefault();
                            t.preventDefault(), S()
                        })),
                        C = (0, d.z)((t => {
                            t.key === u.R.Space ? (t.preventDefault(), S()) : t.key === u.R.Enter && (0, p.g)(t.currentTarget)
                        })),
                        z = (0, d.z)((t => t.preventDefault())),
                        P = (0, r.useMemo)((() => ({
                            checked: E
                        })), [E]),
                        T = {
                            id: s,
                            ref: N,
                            role: "switch",
                            type: (0, c.f)(t, A),
                            tabIndex: 0,
                            "aria-checked": E,
                            "aria-labelledby": null == k ? void 0 : k.labelledby,
                            "aria-describedby": null == k ? void 0 : k.describedby,
                            onClick: M,
                            onKeyUp: C,
                            onKeyPress: z
                        },
                        q = (0, y.G)();
                    return (0, r.useEffect)((() => {
                        var t;
                        let n = null == (t = A.current) ? void 0 : t.closest("form");
                        !n || void 0 !== _ && q.addEventListener(n, "reset", (() => {
                            $(_)
                        }))
                    }), [A, $]), r.createElement(r.Fragment, null, null != w && E && r.createElement(f._, {
                        features: f.A.Hidden,
                        ...(0, i.oA)({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            checked: E,
                            name: w,
                            value: b
                        })
                    }), (0, i.sY)({
                        ourProps: T,
                        theirProps: x,
                        slot: P,
                        defaultTag: "button",
                        name: "Switch"
                    }))
                })),
                w = Object.assign(m, {
                    Group: function(t) {
                        let [n, e] = (0, r.useState)(null), [o, u] = (0, s.b)(), [a, c] = (0, l.f)(), h = (0, r.useMemo)((() => ({
                            switch: n,
                            setSwitch: e,
                            labelledby: o,
                            describedby: a
                        })), [n, e, o, a]), f = t;
                        return r.createElement(c, {
                            name: "Switch.Description"
                        }, r.createElement(u, {
                            name: "Switch.Label",
                            props: {
                                onClick() {
                                    !n || (n.click(), n.focus({
                                        preventScroll: !0
                                    }))
                                }
                            }
                        }, r.createElement(g.Provider, {
                            value: h
                        }, (0, i.sY)({
                            ourProps: {},
                            theirProps: f,
                            defaultTag: _,
                            name: "Switch.Group"
                        }))))
                    },
                    Label: s._,
                    Description: l.d
                })
        },
        64075: function(t, n, e) {
            function r() {}

            function i(t) {
                return null == t ? r : function() {
                    return this.querySelector(t)
                }
            }

            function o(t) {
                return null == t ? [] : Array.isArray(t) ? t : Array.from(t)
            }

            function u() {
                return []
            }

            function a(t) {
                return null == t ? u : function() {
                    return this.querySelectorAll(t)
                }
            }

            function s(t) {
                return function() {
                    return this.matches(t)
                }
            }

            function l(t) {
                return function(n) {
                    return n.matches(t)
                }
            }
            e.d(n, {
                bT9: function() {
                    return qe
                },
                G_s: function() {
                    return Ge
                }
            });
            var c = Array.prototype.find;

            function h() {
                return this.firstElementChild
            }
            var f = Array.prototype.filter;

            function p() {
                return Array.from(this.children)
            }

            function d(t) {
                return new Array(t.length)
            }

            function v(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }

            function y(t) {
                return function() {
                    return t
                }
            }

            function g(t, n, e, r, i, o) {
                for (var u, a = 0, s = n.length, l = o.length; a < l; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new v(t, o[a]);
                for (; a < s; ++a)(u = n[a]) && (i[a] = u)
            }

            function _(t, n, e, r, i, o, u) {
                var a, s, l, c = new Map,
                    h = n.length,
                    f = o.length,
                    p = new Array(h);
                for (a = 0; a < h; ++a)(s = n[a]) && (p[a] = l = u.call(s, s.__data__, a, n) + "", c.has(l) ? i[a] = s : c.set(l, s));
                for (a = 0; a < f; ++a) l = u.call(t, o[a], a, o) + "", (s = c.get(l)) ? (r[a] = s, s.__data__ = o[a], c.delete(l)) : e[a] = new v(t, o[a]);
                for (a = 0; a < h; ++a)(s = n[a]) && c.get(p[a]) === s && (i[a] = s)
            }

            function m(t) {
                return t.__data__
            }

            function w(t) {
                return "object" === typeof t && "length" in t ? t : Array.from(t)
            }

            function b(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            v.prototype = {
                constructor: v,
                appendChild: function(t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function(t, n) {
                    return this._parent.insertBefore(t, n)
                },
                querySelector: function(t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function(t) {
                    return this._parent.querySelectorAll(t)
                }
            };
            var x = "http://www.w3.org/1999/xhtml",
                k = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: x,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                };

            function A(t) {
                var n = t += "",
                    e = n.indexOf(":");
                return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), k.hasOwnProperty(n) ? {
                    space: k[n],
                    local: t
                } : t
            }

            function N(t) {
                return function() {
                    this.removeAttribute(t)
                }
            }

            function E(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }

            function $(t, n) {
                return function() {
                    this.setAttribute(t, n)
                }
            }

            function S(t, n) {
                return function() {
                    this.setAttributeNS(t.space, t.local, n)
                }
            }

            function M(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            }

            function C(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
            }

            function z(t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            }

            function P(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            }

            function T(t, n, e) {
                return function() {
                    this.style.setProperty(t, n, e)
                }
            }

            function q(t, n, e) {
                return function() {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
            }

            function O(t, n) {
                return t.style.getPropertyValue(n) || z(t).getComputedStyle(t, null).getPropertyValue(n)
            }

            function X(t) {
                return function() {
                    delete this[t]
                }
            }

            function B(t, n) {
                return function() {
                    this[t] = n
                }
            }

            function R(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
            }

            function D(t) {
                return t.trim().split(/^|\s+/)
            }

            function H(t) {
                return t.classList || new L(t)
            }

            function L(t) {
                this._node = t, this._names = D(t.getAttribute("class") || "")
            }

            function Y(t, n) {
                for (var e = H(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
            }

            function j(t, n) {
                for (var e = H(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
            }

            function I(t) {
                return function() {
                    Y(this, t)
                }
            }

            function V(t) {
                return function() {
                    j(this, t)
                }
            }

            function G(t, n) {
                return function() {
                    (n.apply(this, arguments) ? Y : j)(this, t)
                }
            }

            function U() {
                this.textContent = ""
            }

            function F(t) {
                return function() {
                    this.textContent = t
                }
            }

            function K(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n
                }
            }

            function W() {
                this.innerHTML = ""
            }

            function J(t) {
                return function() {
                    this.innerHTML = t
                }
            }

            function Q(t) {
                return function() {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n
                }
            }

            function Z() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function tt() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function nt(t) {
                return function() {
                    var n = this.ownerDocument,
                        e = this.namespaceURI;
                    return e === x && n.documentElement.namespaceURI === x ? n.createElement(t) : n.createElementNS(e, t)
                }
            }

            function et(t) {
                return function() {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
            }

            function rt(t) {
                var n = A(t);
                return (n.local ? et : nt)(n)
            }

            function it() {
                return null
            }

            function ot() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function ut() {
                var t = this.cloneNode(!1),
                    n = this.parentNode;
                return n ? n.insertBefore(t, this.nextSibling) : t
            }

            function at() {
                var t = this.cloneNode(!0),
                    n = this.parentNode;
                return n ? n.insertBefore(t, this.nextSibling) : t
            }

            function st(t) {
                return t.trim().split(/^|\s+/).map((function(t) {
                    var n = "",
                        e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                        type: t,
                        name: n
                    }
                }))
            }

            function lt(t) {
                return function() {
                    var n = this.__on;
                    if (n) {
                        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);
                        ++i ? n.length = i : delete this.__on
                    }
                }
            }

            function ct(t, n, e) {
                return function() {
                    var r, i = this.__on,
                        o = function(t) {
                            return function(n) {
                                t.call(this, n, this.__data__)
                            }
                        }(n);
                    if (i)
                        for (var u = 0, a = i.length; u < a; ++u)
                            if ((r = i[u]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
                    this.addEventListener(t.type, o, e), r = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: o,
                        options: e
                    }, i ? i.push(r) : this.__on = [r]
                }
            }

            function ht(t, n, e) {
                var r = z(t),
                    i = r.CustomEvent;
                "function" === typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
            }

            function ft(t, n) {
                return function() {
                    return ht(this, t, n)
                }
            }

            function pt(t, n) {
                return function() {
                    return ht(this, t, n.apply(this, arguments))
                }
            }
            L.prototype = {
                add: function(t) {
                    this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                },
                remove: function(t) {
                    var n = this._names.indexOf(t);
                    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                },
                contains: function(t) {
                    return this._names.indexOf(t) >= 0
                }
            };
            var dt = [null];

            function vt(t, n) {
                this._groups = t, this._parents = n
            }

            function yt() {
                return new vt([
                    [document.documentElement]
                ], dt)
            }
            vt.prototype = yt.prototype = {
                constructor: vt,
                select: function(t) {
                    "function" !== typeof t && (t = i(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), o = 0; o < e; ++o)
                        for (var u, a, s = n[o], l = s.length, c = r[o] = new Array(l), h = 0; h < l; ++h)(u = s[h]) && (a = t.call(u, u.__data__, h, s)) && ("__data__" in u && (a.__data__ = u.__data__), c[h] = a);
                    return new vt(r, this._parents)
                },
                selectAll: function(t) {
                    t = "function" === typeof t ? function(t) {
                        return function() {
                            return o(t.apply(this, arguments))
                        }
                    }(t) : a(t);
                    for (var n = this._groups, e = n.length, r = [], i = [], u = 0; u < e; ++u)
                        for (var s, l = n[u], c = l.length, h = 0; h < c; ++h)(s = l[h]) && (r.push(t.call(s, s.__data__, h, l)), i.push(s));
                    return new vt(r, i)
                },
                selectChild: function(t) {
                    return this.select(null == t ? h : function(t) {
                        return function() {
                            return c.call(this.children, t)
                        }
                    }("function" === typeof t ? t : l(t)))
                },
                selectChildren: function(t) {
                    return this.selectAll(null == t ? p : function(t) {
                        return function() {
                            return f.call(this.children, t)
                        }
                    }("function" === typeof t ? t : l(t)))
                },
                filter: function(t) {
                    "function" !== typeof t && (t = s(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var o, u = n[i], a = u.length, l = r[i] = [], c = 0; c < a; ++c)(o = u[c]) && t.call(o, o.__data__, c, u) && l.push(o);
                    return new vt(r, this._parents)
                },
                data: function(t, n) {
                    if (!arguments.length) return Array.from(this, m);
                    var e = n ? _ : g,
                        r = this._parents,
                        i = this._groups;
                    "function" !== typeof t && (t = y(t));
                    for (var o = i.length, u = new Array(o), a = new Array(o), s = new Array(o), l = 0; l < o; ++l) {
                        var c = r[l],
                            h = i[l],
                            f = h.length,
                            p = w(t.call(c, c && c.__data__, l, r)),
                            d = p.length,
                            v = a[l] = new Array(d),
                            b = u[l] = new Array(d),
                            x = s[l] = new Array(f);
                        e(c, h, v, b, x, p, n);
                        for (var k, A, N = 0, E = 0; N < d; ++N)
                            if (k = v[N]) {
                                for (N >= E && (E = N + 1); !(A = b[E]) && ++E < d;);
                                k._next = A || null
                            }
                    }
                    return (u = new vt(u, r))._enter = a, u._exit = s, u
                },
                enter: function() {
                    return new vt(this._enter || this._groups.map(d), this._parents)
                },
                exit: function() {
                    return new vt(this._exit || this._groups.map(d), this._parents)
                },
                join: function(t, n, e) {
                    var r = this.enter(),
                        i = this,
                        o = this.exit();
                    return "function" === typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != n && (i = n(i)) && (i = i.selection()), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
                },
                merge: function(t) {
                    for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, u = Math.min(i, o), a = new Array(i), s = 0; s < u; ++s)
                        for (var l, c = e[s], h = r[s], f = c.length, p = a[s] = new Array(f), d = 0; d < f; ++d)(l = c[d] || h[d]) && (p[d] = l);
                    for (; s < i; ++s) a[s] = e[s];
                    return new vt(a, this._parents)
                },
                selection: function() {
                    return this
                },
                order: function() {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                        for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && 4 ^ r.compareDocumentPosition(u) && u.parentNode.insertBefore(r, u), u = r);
                    return this
                },
                sort: function(t) {
                    function n(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
                    t || (t = b);
                    for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                        for (var u, a = e[o], s = a.length, l = i[o] = new Array(s), c = 0; c < s; ++c)(u = a[c]) && (l[c] = u);
                        l.sort(n)
                    }
                    return new vt(i, this._parents).order()
                },
                call: function() {
                    var t = arguments[0];
                    return arguments[0] = this, t.apply(null, arguments), this
                },
                nodes: function() {
                    return Array.from(this)
                },
                node: function() {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                            var u = r[i];
                            if (u) return u
                        }
                    return null
                },
                size: function() {
                    let t = 0;
                    for (const n of this) ++t;
                    return t
                },
                empty: function() {
                    return !this.node()
                },
                each: function(t) {
                    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                        for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
                    return this
                },
                attr: function(t, n) {
                    var e = A(t);
                    if (arguments.length < 2) {
                        var r = this.node();
                        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                    }
                    return this.each((null == n ? e.local ? E : N : "function" === typeof n ? e.local ? C : M : e.local ? S : $)(e, n))
                },
                style: function(t, n, e) {
                    return arguments.length > 1 ? this.each((null == n ? P : "function" === typeof n ? q : T)(t, n, null == e ? "" : e)) : O(this.node(), t)
                },
                property: function(t, n) {
                    return arguments.length > 1 ? this.each((null == n ? X : "function" === typeof n ? R : B)(t, n)) : this.node()[t]
                },
                classed: function(t, n) {
                    var e = D(t + "");
                    if (arguments.length < 2) {
                        for (var r = H(this.node()), i = -1, o = e.length; ++i < o;)
                            if (!r.contains(e[i])) return !1;
                        return !0
                    }
                    return this.each(("function" === typeof n ? G : n ? I : V)(e, n))
                },
                text: function(t) {
                    return arguments.length ? this.each(null == t ? U : ("function" === typeof t ? K : F)(t)) : this.node().textContent
                },
                html: function(t) {
                    return arguments.length ? this.each(null == t ? W : ("function" === typeof t ? Q : J)(t)) : this.node().innerHTML
                },
                raise: function() {
                    return this.each(Z)
                },
                lower: function() {
                    return this.each(tt)
                },
                append: function(t) {
                    var n = "function" === typeof t ? t : rt(t);
                    return this.select((function() {
                        return this.appendChild(n.apply(this, arguments))
                    }))
                },
                insert: function(t, n) {
                    var e = "function" === typeof t ? t : rt(t),
                        r = null == n ? it : "function" === typeof n ? n : i(n);
                    return this.select((function() {
                        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                    }))
                },
                remove: function() {
                    return this.each(ot)
                },
                clone: function(t) {
                    return this.select(t ? at : ut)
                },
                datum: function(t) {
                    return arguments.length ? this.property("__data__", t) : this.node().__data__
                },
                on: function(t, n, e) {
                    var r, i, o = st(t + ""),
                        u = o.length;
                    if (!(arguments.length < 2)) {
                        for (a = n ? ct : lt, r = 0; r < u; ++r) this.each(a(o[r], n, e));
                        return this
                    }
                    var a = this.node().__on;
                    if (a)
                        for (var s, l = 0, c = a.length; l < c; ++l)
                            for (r = 0, s = a[l]; r < u; ++r)
                                if ((i = o[r]).type === s.type && i.name === s.name) return s.value
                },
                dispatch: function(t, n) {
                    return this.each(("function" === typeof n ? pt : ft)(t, n))
                },
                [Symbol.iterator]: function*() {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var r, i = t[n], o = 0, u = i.length; o < u; ++o)(r = i[o]) && (yield r)
                }
            };
            var gt = yt,
                _t = {
                    value: () => {}
                };

            function mt() {
                for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
                    r[t] = []
                }
                return new wt(r)
            }

            function wt(t) {
                this._ = t
            }

            function bt(t, n) {
                return t.trim().split(/^|\s+/).map((function(t) {
                    var e = "",
                        r = t.indexOf(".");
                    if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    return {
                        type: t,
                        name: e
                    }
                }))
            }

            function xt(t, n) {
                for (var e, r = 0, i = t.length; r < i; ++r)
                    if ((e = t[r]).name === n) return e.value
            }

            function kt(t, n, e) {
                for (var r = 0, i = t.length; r < i; ++r)
                    if (t[r].name === n) {
                        t[r] = _t, t = t.slice(0, r).concat(t.slice(r + 1));
                        break
                    }
                return null != e && t.push({
                    name: n,
                    value: e
                }), t
            }
            wt.prototype = mt.prototype = {
                constructor: wt,
                on: function(t, n) {
                    var e, r = this._,
                        i = bt(t + "", r),
                        o = -1,
                        u = i.length;
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" !== typeof n) throw new Error("invalid callback: " + n);
                        for (; ++o < u;)
                            if (e = (t = i[o]).type) r[e] = kt(r[e], t.name, n);
                            else if (null == n)
                            for (e in r) r[e] = kt(r[e], t.name, null);
                        return this
                    }
                    for (; ++o < u;)
                        if ((e = (t = i[o]).type) && (e = xt(r[e], t.name))) return e
                },
                copy: function() {
                    var t = {},
                        n = this._;
                    for (var e in n) t[e] = n[e].slice();
                    return new wt(t)
                },
                call: function(t, n) {
                    if ((e = arguments.length - 2) > 0)
                        for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
                },
                apply: function(t, n, e) {
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
                }
            };
            var At, Nt, Et = mt,
                $t = 0,
                St = 0,
                Mt = 0,
                Ct = 0,
                zt = 0,
                Pt = 0,
                Tt = "object" === typeof performance && performance.now ? performance : Date,
                qt = "object" === typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                    setTimeout(t, 17)
                };

            function Ot() {
                return zt || (qt(Xt), zt = Tt.now() + Pt)
            }

            function Xt() {
                zt = 0
            }

            function Bt() {
                this._call = this._time = this._next = null
            }

            function Rt(t, n, e) {
                var r = new Bt;
                return r.restart(t, n, e), r
            }

            function Dt() {
                zt = (Ct = Tt.now()) + Pt, $t = St = 0;
                try {
                    ! function() {
                        Ot(), ++$t;
                        for (var t, n = At; n;)(t = zt - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
                        --$t
                    }()
                } finally {
                    $t = 0,
                        function() {
                            var t, n, e = At,
                                r = 1 / 0;
                            for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : At = n);
                            Nt = t, Lt(r)
                        }(), zt = 0
                }
            }

            function Ht() {
                var t = Tt.now(),
                    n = t - Ct;
                n > 1e3 && (Pt -= n, Ct = t)
            }

            function Lt(t) {
                $t || (St && (St = clearTimeout(St)), t - zt > 24 ? (t < 1 / 0 && (St = setTimeout(Dt, t - Tt.now() - Pt)), Mt && (Mt = clearInterval(Mt))) : (Mt || (Ct = Tt.now(), Mt = setInterval(Ht, 1e3)), $t = 1, qt(Dt)))
            }

            function Yt(t, n, e) {
                var r = new Bt;
                return n = null == n ? 0 : +n, r.restart((e => {
                    r.stop(), t(e + n)
                }), n, e), r
            }
            Bt.prototype = Rt.prototype = {
                constructor: Bt,
                restart: function(t, n, e) {
                    if ("function" !== typeof t) throw new TypeError("callback is not a function");
                    e = (null == e ? Ot() : +e) + (null == n ? 0 : +n), this._next || Nt === this || (Nt ? Nt._next = this : At = this, Nt = this), this._call = t, this._time = e, Lt()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, Lt())
                }
            };
            var jt = Et("start", "end", "cancel", "interrupt"),
                It = [];

            function Vt(t, n, e, r, i, o) {
                var u = t.__transition;
                if (u) {
                    if (e in u) return
                } else t.__transition = {};
                ! function(t, n, e) {
                    var r, i = t.__transition;

                    function o(t) {
                        e.state = 1, e.timer.restart(u, e.delay, e.time), e.delay <= t && u(t - e.delay)
                    }

                    function u(o) {
                        var l, c, h, f;
                        if (1 !== e.state) return s();
                        for (l in i)
                            if ((f = i[l]).name === e.name) {
                                if (3 === f.state) return Yt(u);
                                4 === f.state ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete i[l]) : +l < n && (f.state = 6, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete i[l])
                            }
                        if (Yt((function() {
                                3 === e.state && (e.state = 4, e.timer.restart(a, e.delay, e.time), a(o))
                            })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
                            for (e.state = 3, r = new Array(h = e.tween.length), l = 0, c = -1; l < h; ++l)(f = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (r[++c] = f);
                            r.length = c + 1
                        }
                    }

                    function a(n) {
                        for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(s), e.state = 5, 1), o = -1, u = r.length; ++o < u;) r[o].call(t, i);
                        5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), s())
                    }

                    function s() {
                        for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
                        delete t.__transition
                    }
                    i[n] = e, e.timer = Rt(o, 0, e.time)
                }(t, e, {
                    name: n,
                    index: r,
                    group: i,
                    on: jt,
                    tween: It,
                    time: o.time,
                    delay: o.delay,
                    duration: o.duration,
                    ease: o.ease,
                    timer: null,
                    state: 0
                })
            }

            function Gt(t, n) {
                var e = Ft(t, n);
                if (e.state > 0) throw new Error("too late; already scheduled");
                return e
            }

            function Ut(t, n) {
                var e = Ft(t, n);
                if (e.state > 3) throw new Error("too late; already running");
                return e
            }

            function Ft(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n])) throw new Error("transition not found");
                return e
            }

            function Kt(t, n) {
                return t = +t, n = +n,
                    function(e) {
                        return t * (1 - e) + n * e
                    }
            }
            var Wt, Jt = 180 / Math.PI,
                Qt = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1
                };

            function Zt(t, n, e, r, i, o) {
                var u, a, s;
                return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (s = t * e + n * r) && (e -= t * s, r -= n * s), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, s /= a), t * r < n * e && (t = -t, n = -n, s = -s, u = -u), {
                    translateX: i,
                    translateY: o,
                    rotate: Math.atan2(n, t) * Jt,
                    skewX: Math.atan(s) * Jt,
                    scaleX: u,
                    scaleY: a
                }
            }

            function tn(t, n, e, r) {
                function i(t) {
                    return t.length ? t.pop() + " " : ""
                }
                return function(o, u) {
                    var a = [],
                        s = [];
                    return o = t(o), u = t(u),
                        function(t, r, i, o, u, a) {
                            if (t !== i || r !== o) {
                                var s = u.push("translate(", null, n, null, e);
                                a.push({
                                    i: s - 4,
                                    x: Kt(t, i)
                                }, {
                                    i: s - 2,
                                    x: Kt(r, o)
                                })
                            } else(i || o) && u.push("translate(" + i + n + o + e)
                        }(o.translateX, o.translateY, u.translateX, u.translateY, a, s),
                        function(t, n, e, o) {
                            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                                i: e.push(i(e) + "rotate(", null, r) - 2,
                                x: Kt(t, n)
                            })) : n && e.push(i(e) + "rotate(" + n + r)
                        }(o.rotate, u.rotate, a, s),
                        function(t, n, e, o) {
                            t !== n ? o.push({
                                i: e.push(i(e) + "skewX(", null, r) - 2,
                                x: Kt(t, n)
                            }) : n && e.push(i(e) + "skewX(" + n + r)
                        }(o.skewX, u.skewX, a, s),
                        function(t, n, e, r, o, u) {
                            if (t !== e || n !== r) {
                                var a = o.push(i(o) + "scale(", null, ",", null, ")");
                                u.push({
                                    i: a - 4,
                                    x: Kt(t, e)
                                }, {
                                    i: a - 2,
                                    x: Kt(n, r)
                                })
                            } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                        }(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, s), o = u = null,
                        function(t) {
                            for (var n, e = -1, r = s.length; ++e < r;) a[(n = s[e]).i] = n.x(t);
                            return a.join("")
                        }
                }
            }
            var nn = tn((function(t) {
                    const n = new("function" === typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
                    return n.isIdentity ? Qt : Zt(n.a, n.b, n.c, n.d, n.e, n.f)
                }), "px, ", "px)", "deg)"),
                en = tn((function(t) {
                    return null == t ? Qt : (Wt || (Wt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wt.setAttribute("transform", t), (t = Wt.transform.baseVal.consolidate()) ? Zt((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Qt)
                }), ", ", ")", ")");

            function rn(t, n) {
                var e, r;
                return function() {
                    var i = Ut(this, t),
                        o = i.tween;
                    if (o !== e)
                        for (var u = 0, a = (r = e = o).length; u < a; ++u)
                            if (r[u].name === n) {
                                (r = r.slice()).splice(u, 1);
                                break
                            }
                    i.tween = r
                }
            }

            function on(t, n, e) {
                var r, i;
                if ("function" !== typeof e) throw new Error;
                return function() {
                    var o = Ut(this, t),
                        u = o.tween;
                    if (u !== r) {
                        i = (r = u).slice();
                        for (var a = {
                                name: n,
                                value: e
                            }, s = 0, l = i.length; s < l; ++s)
                            if (i[s].name === n) {
                                i[s] = a;
                                break
                            }
                        s === l && i.push(a)
                    }
                    o.tween = i
                }
            }

            function un(t, n, e) {
                var r = t._id;
                return t.each((function() {
                        var t = Ut(this, r);
                        (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                    })),
                    function(t) {
                        return Ft(t, r).value[n]
                    }
            }

            function an(t, n, e) {
                t.prototype = n.prototype = e, e.constructor = t
            }

            function sn(t, n) {
                var e = Object.create(t.prototype);
                for (var r in n) e[r] = n[r];
                return e
            }

            function ln() {}
            var cn = .7,
                hn = 1 / cn,
                fn = "\\s*([+-]?\\d+)\\s*",
                pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                dn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                vn = /^#([0-9a-f]{3,8})$/,
                yn = new RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`),
                gn = new RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`),
                _n = new RegExp(`^rgba\\(${fn},${fn},${fn},${pn}\\)$`),
                mn = new RegExp(`^rgba\\(${dn},${dn},${dn},${pn}\\)$`),
                wn = new RegExp(`^hsl\\(${pn},${dn},${dn}\\)$`),
                bn = new RegExp(`^hsla\\(${pn},${dn},${dn},${pn}\\)$`),
                xn = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                };

            function kn() {
                return this.rgb().formatHex()
            }

            function An() {
                return this.rgb().formatRgb()
            }

            function Nn(t) {
                var n, e;
                return t = (t + "").trim().toLowerCase(), (n = vn.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? En(n) : 3 === e ? new Cn(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? $n(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? $n(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = yn.exec(t)) ? new Cn(n[1], n[2], n[3], 1) : (n = gn.exec(t)) ? new Cn(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = _n.exec(t)) ? $n(n[1], n[2], n[3], n[4]) : (n = mn.exec(t)) ? $n(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = wn.exec(t)) ? Xn(n[1], n[2] / 100, n[3] / 100, 1) : (n = bn.exec(t)) ? Xn(n[1], n[2] / 100, n[3] / 100, n[4]) : xn.hasOwnProperty(t) ? En(xn[t]) : "transparent" === t ? new Cn(NaN, NaN, NaN, 0) : null
            }

            function En(t) {
                return new Cn(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function $n(t, n, e, r) {
                return r <= 0 && (t = n = e = NaN), new Cn(t, n, e, r)
            }

            function Sn(t) {
                return t instanceof ln || (t = Nn(t)), t ? new Cn((t = t.rgb()).r, t.g, t.b, t.opacity) : new Cn
            }

            function Mn(t, n, e, r) {
                return 1 === arguments.length ? Sn(t) : new Cn(t, n, e, null == r ? 1 : r)
            }

            function Cn(t, n, e, r) {
                this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
            }

            function zn() {
                return `#${On(this.r)}${On(this.g)}${On(this.b)}`
            }

            function Pn() {
                const t = Tn(this.opacity);
                return `${1===t?"rgb(":"rgba("}${qn(this.r)}, ${qn(this.g)}, ${qn(this.b)}${1===t?")":`, ${t})`}`
            }

            function Tn(t) {
                return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
            }

            function qn(t) {
                return Math.max(0, Math.min(255, Math.round(t) || 0))
            }

            function On(t) {
                return ((t = qn(t)) < 16 ? "0" : "") + t.toString(16)
            }

            function Xn(t, n, e, r) {
                return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Rn(t, n, e, r)
            }

            function Bn(t) {
                if (t instanceof Rn) return new Rn(t.h, t.s, t.l, t.opacity);
                if (t instanceof ln || (t = Nn(t)), !t) return new Rn;
                if (t instanceof Rn) return t;
                var n = (t = t.rgb()).r / 255,
                    e = t.g / 255,
                    r = t.b / 255,
                    i = Math.min(n, e, r),
                    o = Math.max(n, e, r),
                    u = NaN,
                    a = o - i,
                    s = (o + i) / 2;
                return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= s < .5 ? o + i : 2 - o - i, u *= 60) : a = s > 0 && s < 1 ? 0 : u, new Rn(u, a, s, t.opacity)
            }

            function Rn(t, n, e, r) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }

            function Dn(t) {
                return (t = (t || 0) % 360) < 0 ? t + 360 : t
            }

            function Hn(t) {
                return Math.max(0, Math.min(1, t || 0))
            }

            function Ln(t, n, e) {
                return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
            }

            function Yn(t, n, e, r, i) {
                var o = t * t,
                    u = o * t;
                return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
            }
            an(ln, Nn, {
                copy(t) {
                    return Object.assign(new this.constructor, this, t)
                },
                displayable() {
                    return this.rgb().displayable()
                },
                hex: kn,
                formatHex: kn,
                formatHex8: function() {
                    return this.rgb().formatHex8()
                },
                formatHsl: function() {
                    return Bn(this).formatHsl()
                },
                formatRgb: An,
                toString: An
            }), an(Cn, Mn, sn(ln, {
                brighter(t) {
                    return t = null == t ? hn : Math.pow(hn, t), new Cn(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker(t) {
                    return t = null == t ? cn : Math.pow(cn, t), new Cn(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb() {
                    return this
                },
                clamp() {
                    return new Cn(qn(this.r), qn(this.g), qn(this.b), Tn(this.opacity))
                },
                displayable() {
                    return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
                },
                hex: zn,
                formatHex: zn,
                formatHex8: function() {
                    return `#${On(this.r)}${On(this.g)}${On(this.b)}${On(255*(isNaN(this.opacity)?1:this.opacity))}`
                },
                formatRgb: Pn,
                toString: Pn
            })), an(Rn, (function(t, n, e, r) {
                return 1 === arguments.length ? Bn(t) : new Rn(t, n, e, null == r ? 1 : r)
            }), sn(ln, {
                brighter(t) {
                    return t = null == t ? hn : Math.pow(hn, t), new Rn(this.h, this.s, this.l * t, this.opacity)
                },
                darker(t) {
                    return t = null == t ? cn : Math.pow(cn, t), new Rn(this.h, this.s, this.l * t, this.opacity)
                },
                rgb() {
                    var t = this.h % 360 + 360 * (this.h < 0),
                        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        e = this.l,
                        r = e + (e < .5 ? e : 1 - e) * n,
                        i = 2 * e - r;
                    return new Cn(Ln(t >= 240 ? t - 240 : t + 120, i, r), Ln(t, i, r), Ln(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
                },
                clamp() {
                    return new Rn(Dn(this.h), Hn(this.s), Hn(this.l), Tn(this.opacity))
                },
                displayable() {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                },
                formatHsl() {
                    const t = Tn(this.opacity);
                    return `${1===t?"hsl(":"hsla("}${Dn(this.h)}, ${100*Hn(this.s)}%, ${100*Hn(this.l)}%${1===t?")":`, ${t})`}`
                }
            }));
            var jn = t => () => t;

            function In(t, n) {
                return function(e) {
                    return t + e * n
                }
            }

            function Vn(t) {
                return 1 === (t = +t) ? Gn : function(n, e) {
                    return e - n ? function(t, n, e) {
                        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                            function(r) {
                                return Math.pow(t + r * n, e)
                            }
                    }(n, e, t) : jn(isNaN(n) ? e : n)
                }
            }

            function Gn(t, n) {
                var e = n - t;
                return e ? In(t, e) : jn(isNaN(t) ? n : t)
            }
            var Un = function t(n) {
                var e = Vn(n);

                function r(t, n) {
                    var r = e((t = Mn(t)).r, (n = Mn(n)).r),
                        i = e(t.g, n.g),
                        o = e(t.b, n.b),
                        u = Gn(t.opacity, n.opacity);
                    return function(n) {
                        return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
                    }
                }
                return r.gamma = t, r
            }(1);

            function Fn(t) {
                return function(n) {
                    var e, r, i = n.length,
                        o = new Array(i),
                        u = new Array(i),
                        a = new Array(i);
                    for (e = 0; e < i; ++e) r = Mn(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
                    return o = t(o), u = t(u), a = t(a), r.opacity = 1,
                        function(t) {
                            return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
                        }
                }
            }
            Fn((function(t) {
                var n = t.length - 1;
                return function(e) {
                    var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                        i = t[r],
                        o = t[r + 1],
                        u = r > 0 ? t[r - 1] : 2 * i - o,
                        a = r < n - 1 ? t[r + 2] : 2 * o - i;
                    return Yn((e - r / n) * n, u, i, o, a)
                }
            })), Fn((function(t) {
                var n = t.length;
                return function(e) {
                    var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                        i = t[(r + n - 1) % n],
                        o = t[r % n],
                        u = t[(r + 1) % n],
                        a = t[(r + 2) % n];
                    return Yn((e - r / n) * n, i, o, u, a)
                }
            }));
            var Kn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                Wn = new RegExp(Kn.source, "g");

            function Jn(t, n) {
                var e, r, i, o = Kn.lastIndex = Wn.lastIndex = 0,
                    u = -1,
                    a = [],
                    s = [];
                for (t += "", n += "";
                    (e = Kn.exec(t)) && (r = Wn.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, s.push({
                    i: u,
                    x: Kt(e, r)
                })), o = Wn.lastIndex;
                return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? s[0] ? function(t) {
                    return function(n) {
                        return t(n) + ""
                    }
                }(s[0].x) : function(t) {
                    return function() {
                        return t
                    }
                }(n) : (n = s.length, function(t) {
                    for (var e, r = 0; r < n; ++r) a[(e = s[r]).i] = e.x(t);
                    return a.join("")
                })
            }

            function Qn(t, n) {
                var e;
                return ("number" === typeof n ? Kt : n instanceof Nn ? Un : (e = Nn(n)) ? (n = e, Un) : Jn)(t, n)
            }

            function Zn(t) {
                return function() {
                    this.removeAttribute(t)
                }
            }

            function te(t) {
                return function() {
                    this.removeAttributeNS(t.space, t.local)
                }
            }

            function ne(t, n, e) {
                var r, i, o = e + "";
                return function() {
                    var u = this.getAttribute(t);
                    return u === o ? null : u === r ? i : i = n(r = u, e)
                }
            }

            function ee(t, n, e) {
                var r, i, o = e + "";
                return function() {
                    var u = this.getAttributeNS(t.space, t.local);
                    return u === o ? null : u === r ? i : i = n(r = u, e)
                }
            }

            function re(t, n, e) {
                var r, i, o;
                return function() {
                    var u, a, s = e(this);
                    if (null != s) return (u = this.getAttribute(t)) === (a = s + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, s));
                    this.removeAttribute(t)
                }
            }

            function ie(t, n, e) {
                var r, i, o;
                return function() {
                    var u, a, s = e(this);
                    if (null != s) return (u = this.getAttributeNS(t.space, t.local)) === (a = s + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, s));
                    this.removeAttributeNS(t.space, t.local)
                }
            }

            function oe(t, n) {
                return function(e) {
                    this.setAttribute(t, n.call(this, e))
                }
            }

            function ue(t, n) {
                return function(e) {
                    this.setAttributeNS(t.space, t.local, n.call(this, e))
                }
            }

            function ae(t, n) {
                var e, r;

                function i() {
                    var i = n.apply(this, arguments);
                    return i !== r && (e = (r = i) && ue(t, i)), e
                }
                return i._value = n, i
            }

            function se(t, n) {
                var e, r;

                function i() {
                    var i = n.apply(this, arguments);
                    return i !== r && (e = (r = i) && oe(t, i)), e
                }
                return i._value = n, i
            }

            function le(t, n) {
                return function() {
                    Gt(this, t).delay = +n.apply(this, arguments)
                }
            }

            function ce(t, n) {
                return n = +n,
                    function() {
                        Gt(this, t).delay = n
                    }
            }

            function he(t, n) {
                return function() {
                    Ut(this, t).duration = +n.apply(this, arguments)
                }
            }

            function fe(t, n) {
                return n = +n,
                    function() {
                        Ut(this, t).duration = n
                    }
            }

            function pe(t, n) {
                if ("function" !== typeof n) throw new Error;
                return function() {
                    Ut(this, t).ease = n
                }
            }

            function de(t, n, e) {
                var r, i, o = function(t) {
                    return (t + "").trim().split(/^|\s+/).every((function(t) {
                        var n = t.indexOf(".");
                        return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                    }))
                }(n) ? Gt : Ut;
                return function() {
                    var u = o(this, t),
                        a = u.on;
                    a !== r && (i = (r = a).copy()).on(n, e), u.on = i
                }
            }
            var ve = gt.prototype.constructor;

            function ye(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            }

            function ge(t, n, e) {
                return function(r) {
                    this.style.setProperty(t, n.call(this, r), e)
                }
            }

            function _e(t, n, e) {
                var r, i;

                function o() {
                    var o = n.apply(this, arguments);
                    return o !== i && (r = (i = o) && ge(t, o, e)), r
                }
                return o._value = n, o
            }

            function me(t) {
                return function(n) {
                    this.textContent = t.call(this, n)
                }
            }

            function we(t) {
                var n, e;

                function r() {
                    var r = t.apply(this, arguments);
                    return r !== e && (n = (e = r) && me(r)), n
                }
                return r._value = t, r
            }
            var be = 0;

            function xe(t, n, e, r) {
                this._groups = t, this._parents = n, this._name = e, this._id = r
            }

            function ke() {
                return ++be
            }
            var Ae = gt.prototype;
            xe.prototype = function(t) {
                return gt().transition(t)
            }.prototype = {
                constructor: xe,
                select: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" !== typeof t && (t = i(t));
                    for (var r = this._groups, o = r.length, u = new Array(o), a = 0; a < o; ++a)
                        for (var s, l, c = r[a], h = c.length, f = u[a] = new Array(h), p = 0; p < h; ++p)(s = c[p]) && (l = t.call(s, s.__data__, p, c)) && ("__data__" in s && (l.__data__ = s.__data__), f[p] = l, Vt(f[p], n, e, p, f, Ft(s, e)));
                    return new xe(u, this._parents, n, e)
                },
                selectAll: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" !== typeof t && (t = a(t));
                    for (var r = this._groups, i = r.length, o = [], u = [], s = 0; s < i; ++s)
                        for (var l, c = r[s], h = c.length, f = 0; f < h; ++f)
                            if (l = c[f]) {
                                for (var p, d = t.call(l, l.__data__, f, c), v = Ft(l, e), y = 0, g = d.length; y < g; ++y)(p = d[y]) && Vt(p, n, e, y, d, v);
                                o.push(d), u.push(l)
                            }
                    return new xe(o, u, n, e)
                },
                selectChild: Ae.selectChild,
                selectChildren: Ae.selectChildren,
                filter: function(t) {
                    "function" !== typeof t && (t = s(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var o, u = n[i], a = u.length, l = r[i] = [], c = 0; c < a; ++c)(o = u[c]) && t.call(o, o.__data__, c, u) && l.push(o);
                    return new xe(r, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error;
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                        for (var s, l = n[a], c = e[a], h = l.length, f = u[a] = new Array(h), p = 0; p < h; ++p)(s = l[p] || c[p]) && (f[p] = s);
                    for (; a < r; ++a) u[a] = n[a];
                    return new xe(u, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new ve(this._groups, this._parents)
                },
                transition: function() {
                    for (var t = this._name, n = this._id, e = ke(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                        for (var u, a = r[o], s = a.length, l = 0; l < s; ++l)
                            if (u = a[l]) {
                                var c = Ft(u, n);
                                Vt(u, t, e, l, a, {
                                    time: c.time + c.delay + c.duration,
                                    delay: 0,
                                    duration: c.duration,
                                    ease: c.ease
                                })
                            }
                    return new xe(r, this._parents, t, e)
                },
                call: Ae.call,
                nodes: Ae.nodes,
                node: Ae.node,
                size: Ae.size,
                empty: Ae.empty,
                each: Ae.each,
                on: function(t, n) {
                    var e = this._id;
                    return arguments.length < 2 ? Ft(this.node(), e).on.on(t) : this.each(de(e, t, n))
                },
                attr: function(t, n) {
                    var e = A(t),
                        r = "transform" === e ? en : Qn;
                    return this.attrTween(t, "function" === typeof n ? (e.local ? ie : re)(e, r, un(this, "attr." + t, n)) : null == n ? (e.local ? te : Zn)(e) : (e.local ? ee : ne)(e, r, n))
                },
                attrTween: function(t, n) {
                    var e = "attr." + t;
                    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                    if (null == n) return this.tween(e, null);
                    if ("function" !== typeof n) throw new Error;
                    var r = A(t);
                    return this.tween(e, (r.local ? ae : se)(r, n))
                },
                style: function(t, n, e) {
                    var r = "transform" === (t += "") ? nn : Qn;
                    return null == n ? this.styleTween(t, function(t, n) {
                        var e, r, i;
                        return function() {
                            var o = O(this, t),
                                u = (this.style.removeProperty(t), O(this, t));
                            return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u)
                        }
                    }(t, r)).on("end.style." + t, ye(t)) : "function" === typeof n ? this.styleTween(t, function(t, n, e) {
                        var r, i, o;
                        return function() {
                            var u = O(this, t),
                                a = e(this),
                                s = a + "";
                            return null == a && (this.style.removeProperty(t), s = a = O(this, t)), u === s ? null : u === r && s === i ? o : (i = s, o = n(r = u, a))
                        }
                    }(t, r, un(this, "style." + t, n))).each(function(t, n) {
                        var e, r, i, o, u = "style." + n,
                            a = "end." + u;
                        return function() {
                            var s = Ut(this, t),
                                l = s.on,
                                c = null == s.value[u] ? o || (o = ye(n)) : void 0;
                            l === e && i === c || (r = (e = l).copy()).on(a, i = c), s.on = r
                        }
                    }(this._id, t)) : this.styleTween(t, function(t, n, e) {
                        var r, i, o = e + "";
                        return function() {
                            var u = O(this, t);
                            return u === o ? null : u === r ? i : i = n(r = u, e)
                        }
                    }(t, r, n), e).on("end.style." + t, null)
                },
                styleTween: function(t, n, e) {
                    var r = "style." + (t += "");
                    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                    if (null == n) return this.tween(r, null);
                    if ("function" !== typeof n) throw new Error;
                    return this.tween(r, _e(t, n, null == e ? "" : e))
                },
                text: function(t) {
                    return this.tween("text", "function" === typeof t ? function(t) {
                        return function() {
                            var n = t(this);
                            this.textContent = null == n ? "" : n
                        }
                    }(un(this, "text", t)) : function(t) {
                        return function() {
                            this.textContent = t
                        }
                    }(null == t ? "" : t + ""))
                },
                textTween: function(t) {
                    var n = "text";
                    if (arguments.length < 1) return (n = this.tween(n)) && n._value;
                    if (null == t) return this.tween(n, null);
                    if ("function" !== typeof t) throw new Error;
                    return this.tween(n, we(t))
                },
                remove: function() {
                    return this.on("end.remove", function(t) {
                        return function() {
                            var n = this.parentNode;
                            for (var e in this.__transition)
                                if (+e !== t) return;
                            n && n.removeChild(this)
                        }
                    }(this._id))
                },
                tween: function(t, n) {
                    var e = this._id;
                    if (t += "", arguments.length < 2) {
                        for (var r, i = Ft(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                            if ((r = i[o]).name === t) return r.value;
                        return null
                    }
                    return this.each((null == n ? rn : on)(e, t, n))
                },
                delay: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" === typeof t ? le : ce)(n, t)) : Ft(this.node(), n).delay
                },
                duration: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" === typeof t ? he : fe)(n, t)) : Ft(this.node(), n).duration
                },
                ease: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(pe(n, t)) : Ft(this.node(), n).ease
                },
                easeVarying: function(t) {
                    if ("function" !== typeof t) throw new Error;
                    return this.each(function(t, n) {
                        return function() {
                            var e = n.apply(this, arguments);
                            if ("function" !== typeof e) throw new Error;
                            Ut(this, t).ease = e
                        }
                    }(this._id, t))
                },
                end: function() {
                    var t, n, e = this,
                        r = e._id,
                        i = e.size();
                    return new Promise((function(o, u) {
                        var a = {
                                value: u
                            },
                            s = {
                                value: function() {
                                    0 === --i && o()
                                }
                            };
                        e.each((function() {
                            var e = Ut(this, r),
                                i = e.on;
                            i !== t && ((n = (t = i).copy())._.cancel.push(a), n._.interrupt.push(a), n._.end.push(s)), e.on = n
                        })), 0 === i && o()
                    }))
                },
                [Symbol.iterator]: Ae[Symbol.iterator]
            };
            var Ne = {
                time: null,
                delay: 0,
                duration: 250,
                ease: function(t) {
                    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
                }
            };

            function Ee(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)
                    if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
                return e
            }
            gt.prototype.interrupt = function(t) {
                return this.each((function() {
                    ! function(t, n) {
                        var e, r, i, o = t.__transition,
                            u = !0;
                        if (o) {
                            for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                            u && delete t.__transition
                        }
                    }(this, t)
                }))
            }, gt.prototype.transition = function(t) {
                var n, e;
                t instanceof xe ? (n = t._id, t = t._name) : (n = ke(), (e = Ne).time = Ot(), t = null == t ? null : t + "");
                for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                    for (var u, a = r[o], s = a.length, l = 0; l < s; ++l)(u = a[l]) && Vt(u, t, n, l, a, e || Ee(u, n));
                return new xe(r, this._parents, t, n)
            };
            const {
                abs: $e,
                max: Se,
                min: Me
            } = Math;

            function Ce(t) {
                return [+t[0], +t[1]]
            }

            function ze(t) {
                return [Ce(t[0]), Ce(t[1])]
            }["w", "e"].map(Pe), ["n", "s"].map(Pe), ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Pe);

            function Pe(t) {
                return {
                    type: t
                }
            }

            function Te(t) {
                var n = 0,
                    e = t.children,
                    r = e && e.length;
                if (r)
                    for (; --r >= 0;) n += e[r].value;
                else n = 1;
                t.value = n
            }

            function qe(t, n) {
                t instanceof Map ? (t = [void 0, t], void 0 === n && (n = Xe)) : void 0 === n && (n = Oe);
                for (var e, r, i, o, u, a = new De(t), s = [a]; e = s.pop();)
                    if ((i = n(e.data)) && (u = (i = Array.from(i)).length))
                        for (e.children = i, o = u - 1; o >= 0; --o) s.push(r = i[o] = new De(i[o])), r.parent = e, r.depth = e.depth + 1;
                return a.eachBefore(Re)
            }

            function Oe(t) {
                return t.children
            }

            function Xe(t) {
                return Array.isArray(t) ? t[1] : null
            }

            function Be(t) {
                void 0 !== t.data.value && (t.value = t.data.value), t.data = t.data.data
            }

            function Re(t) {
                var n = 0;
                do {
                    t.height = n
                } while ((t = t.parent) && t.height < ++n)
            }

            function De(t) {
                this.data = t, this.depth = this.height = 0, this.parent = null
            }

            function He(t, n) {
                return t.parent === n.parent ? 1 : 2
            }

            function Le(t) {
                var n = t.children;
                return n ? n[0] : t.t
            }

            function Ye(t) {
                var n = t.children;
                return n ? n[n.length - 1] : t.t
            }

            function je(t, n, e) {
                var r = e / (n.i - t.i);
                n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
            }

            function Ie(t, n, e) {
                return t.a.parent === n.parent ? t.a : e
            }

            function Ve(t, n) {
                this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
            }

            function Ge() {
                var t = He,
                    n = 1,
                    e = 1,
                    r = null;

                function i(i) {
                    var s = function(t) {
                        for (var n, e, r, i, o, u = new Ve(t, 0), a = [u]; n = a.pop();)
                            if (r = n._.children)
                                for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new Ve(r[i], i)), e.parent = n;
                        return (u.parent = new Ve(null, 0)).children = [u], u
                    }(i);
                    if (s.eachAfter(o), s.parent.m = -s.z, s.eachBefore(u), r) i.eachBefore(a);
                    else {
                        var l = i,
                            c = i,
                            h = i;
                        i.eachBefore((function(t) {
                            t.x < l.x && (l = t), t.x > c.x && (c = t), t.depth > h.depth && (h = t)
                        }));
                        var f = l === c ? 1 : t(l, c) / 2,
                            p = f - l.x,
                            d = n / (c.x + f + p),
                            v = e / (h.depth || 1);
                        i.eachBefore((function(t) {
                            t.x = (t.x + p) * d, t.y = t.depth * v
                        }))
                    }
                    return i
                }

                function o(n) {
                    var e = n.children,
                        r = n.parent.children,
                        i = n.i ? r[n.i - 1] : null;
                    if (e) {
                        ! function(t) {
                            for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
                        }(n);
                        var o = (e[0].z + e[e.length - 1].z) / 2;
                        i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o
                    } else i && (n.z = i.z + t(n._, i._));
                    n.parent.A = function(n, e, r) {
                        if (e) {
                            for (var i, o = n, u = n, a = e, s = o.parent.children[0], l = o.m, c = u.m, h = a.m, f = s.m; a = Ye(a), o = Le(o), a && o;) s = Le(s), (u = Ye(u)).a = n, (i = a.z + h - o.z - l + t(a._, o._)) > 0 && (je(Ie(a, n, r), n, i), l += i, c += i), h += a.m, l += o.m, f += s.m, c += u.m;
                            a && !Ye(u) && (u.t = a, u.m += h - c), o && !Le(s) && (s.t = o, s.m += l - f, r = n)
                        }
                        return r
                    }(n, i, n.parent.A || r[0])
                }

                function u(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function a(t) {
                    t.x *= n, t.y = t.depth * e
                }
                return i.separation = function(n) {
                    return arguments.length ? (t = n, i) : t
                }, i.size = function(t) {
                    return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
                }, i.nodeSize = function(t) {
                    return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
                }, i
            }

            function Ue(t, n, e) {
                this.k = t, this.x = n, this.y = e
            }
            De.prototype = qe.prototype = {
                constructor: De,
                count: function() {
                    return this.eachAfter(Te)
                },
                each: function(t, n) {
                    let e = -1;
                    for (const r of this) t.call(n, r, ++e, this);
                    return this
                },
                eachAfter: function(t, n) {
                    for (var e, r, i, o = this, u = [o], a = [], s = -1; o = u.pop();)
                        if (a.push(o), e = o.children)
                            for (r = 0, i = e.length; r < i; ++r) u.push(e[r]);
                    for (; o = a.pop();) t.call(n, o, ++s, this);
                    return this
                },
                eachBefore: function(t, n) {
                    for (var e, r, i = this, o = [i], u = -1; i = o.pop();)
                        if (t.call(n, i, ++u, this), e = i.children)
                            for (r = e.length - 1; r >= 0; --r) o.push(e[r]);
                    return this
                },
                find: function(t, n) {
                    let e = -1;
                    for (const r of this)
                        if (t.call(n, r, ++e, this)) return r
                },
                sum: function(t) {
                    return this.eachAfter((function(n) {
                        for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                        n.value = e
                    }))
                },
                sort: function(t) {
                    return this.eachBefore((function(n) {
                        n.children && n.children.sort(t)
                    }))
                },
                path: function(t) {
                    for (var n = this, e = function(t, n) {
                            if (t === n) return t;
                            var e = t.ancestors(),
                                r = n.ancestors(),
                                i = null;
                            t = e.pop(), n = r.pop();
                            for (; t === n;) i = t, t = e.pop(), n = r.pop();
                            return i
                        }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
                    for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
                    return r
                },
                ancestors: function() {
                    for (var t = this, n = [t]; t = t.parent;) n.push(t);
                    return n
                },
                descendants: function() {
                    return Array.from(this)
                },
                leaves: function() {
                    var t = [];
                    return this.eachBefore((function(n) {
                        n.children || t.push(n)
                    })), t
                },
                links: function() {
                    var t = this,
                        n = [];
                    return t.each((function(e) {
                        e !== t && n.push({
                            source: e.parent,
                            target: e
                        })
                    })), n
                },
                copy: function() {
                    return qe(this).eachBefore(Be)
                },
                [Symbol.iterator]: function*() {
                    var t, n, e, r, i = this,
                        o = [i];
                    do {
                        for (t = o.reverse(), o = []; i = t.pop();)
                            if (yield i, n = i.children)
                                for (e = 0, r = n.length; e < r; ++e) o.push(n[e])
                    } while (o.length)
                }
            }, Ve.prototype = Object.create(De.prototype), Ue.prototype = {
                constructor: Ue,
                scale: function(t) {
                    return 1 === t ? this : new Ue(this.k * t, this.x, this.y)
                },
                translate: function(t, n) {
                    return 0 === t & 0 === n ? this : new Ue(this.k, this.x + this.k * t, this.y + this.k * n)
                },
                apply: function(t) {
                    return [t[0] * this.k + this.x, t[1] * this.k + this.y]
                },
                applyX: function(t) {
                    return t * this.k + this.x
                },
                applyY: function(t) {
                    return t * this.k + this.y
                },
                invert: function(t) {
                    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
                },
                invertX: function(t) {
                    return (t - this.x) / this.k
                },
                invertY: function(t) {
                    return (t - this.y) / this.k
                },
                rescaleX: function(t) {
                    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
                },
                rescaleY: function(t) {
                    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
                },
                toString: function() {
                    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
                }
            };
            new Ue(1, 0, 0);
            Ue.prototype
        }
    }
]);