"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9510], {
        6431: function(e, t, n) {
            function o(e) {
                return e && e.__esModule ? e.default : e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                cW: function() {
                    return nt
                }
            });
            var r, s, a, l, c, d, h = {},
                u = [],
                p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function f(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function _(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function g(e, t, n) {
                var o, i, s, a = {};
                for (s in t) "key" == s ? o = t[s] : "ref" == s ? i = t[s] : a[s] = t[s];
                if (arguments.length > 2 && (a.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                    for (s in e.defaultProps) void 0 === a[s] && (a[s] = e.defaultProps[s]);
                return m(e, a, o, i, null)
            }

            function m(e, t, n, o, i) {
                var r = {
                    type: e,
                    props: t,
                    key: n,
                    ref: o,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == i ? ++a : i
                };
                return null == i && null != s.vnode && s.vnode(r), r
            }

            function v(e) {
                return e.children
            }

            function b(e, t) {
                this.props = e, this.context = t
            }

            function k(e, t) {
                if (null == t) return e.__ ? k(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? k(e) : null
            }

            function w(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                        if (null != (n = e.__k[t]) && null != n.__e) {
                            e.__e = e.__c.base = n.__e;
                            break
                        }
                    return w(e)
                }
            }

            function y(e) {
                (!e.__d && (e.__d = !0) && l.push(e) && !C.__r++ || d !== s.debounceRendering) && ((d = s.debounceRendering) || c)(C)
            }

            function C() {
                for (var e; C.__r = l.length;) e = l.sort((function(e, t) {
                    return e.__v.__b - t.__v.__b
                })), l = [], e.some((function(e) {
                    var t, n, o, i, r, s;
                    e.__d && (r = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (o = f({}, i)).__v = i.__v + 1, R(s, i, o, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [r] : null, n, null == r ? k(i) : r, i.__h), B(n, i), i.__e != r && w(i)))
                }))
            }

            function x(e, t, n, o, i, r, s, a, l, c) {
                var d, p, f, _, g, b, w, y = o && o.__k || u,
                    C = y.length;
                for (n.__k = [], d = 0; d < t.length; d++)
                    if (null != (_ = n.__k[d] = null == (_ = t[d]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? m(null, _, null, null, _) : Array.isArray(_) ? m(v, {
                            children: _
                        }, null, null, null) : _.__b > 0 ? m(_.type, _.props, _.key, null, _.__v) : _)) {
                        if (_.__ = n, _.__b = n.__b + 1, null === (f = y[d]) || f && _.key == f.key && _.type === f.type) y[d] = void 0;
                        else
                            for (p = 0; p < C; p++) {
                                if ((f = y[p]) && _.key == f.key && _.type === f.type) {
                                    y[p] = void 0;
                                    break
                                }
                                f = null
                            }
                        R(e, _, f = f || h, i, r, s, a, l, c), g = _.__e, (p = _.ref) && f.ref != p && (w || (w = []), f.ref && w.push(f.ref, null, _), w.push(p, _.__c || g, _)), null != g ? (null == b && (b = g), "function" == typeof _.type && _.__k === f.__k ? _.__d = l = S(_, l, e) : l = z(e, _, f, y, g, l), "function" == typeof n.type && (n.__d = l)) : l && f.__e == l && l.parentNode != e && (l = k(f))
                    }
                for (n.__e = b, d = C; d--;) null != y[d] && ("function" == typeof n.type && null != y[d].__e && y[d].__e == n.__d && (n.__d = k(o, d + 1)), A(y[d], y[d]));
                if (w)
                    for (d = 0; d < w.length; d++) H(w[d], w[++d], w[++d])
            }

            function S(e, t, n) {
                for (var o, i = e.__k, r = 0; i && r < i.length; r++)(o = i[r]) && (o.__ = e, t = "function" == typeof o.type ? S(o, t, n) : z(n, o, o, i, o.__e, t));
                return t
            }

            function j(e, t) {
                return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
                    j(e, t)
                })) : t.push(e)), t
            }

            function z(e, t, n, o, i, r) {
                var s, a, l;
                if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
                else if (null == n || i != r || null == i.parentNode) e: if (null == r || r.parentNode !== e) e.appendChild(i), s = null;
                    else {
                        for (a = r, l = 0;
                            (a = a.nextSibling) && l < o.length; l += 2)
                            if (a == i) break e;
                        e.insertBefore(i, r), s = r
                    }
                return void 0 !== s ? s : i.nextSibling
            }

            function M(e, t, n) {
                "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px"
            }

            function L(e, t, n, o, i) {
                var r;
                e: if ("style" === t)
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if ("string" == typeof o && (e.style.cssText = o = ""), o)
                            for (t in o) n && t in n || M(e.style, t, "");
                        if (n)
                            for (t in n) o && n[t] === o[t] || M(e.style, t, n[t])
                    }
                else if ("o" === t[0] && "n" === t[1]) r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? o || e.addEventListener(t, r ? P : E, r) : e.removeEventListener(t, r ? P : E, r);
                else if ("dangerouslySetInnerHTML" !== t) {
                    if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                    else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (s) {}
                    "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
                }
            }

            function E(e) {
                this.l[e.type + !1](s.event ? s.event(e) : e)
            }

            function P(e) {
                this.l[e.type + !0](s.event ? s.event(e) : e)
            }

            function R(e, t, n, o, i, a, l, c, d) {
                var u, p, g, m, w, y, C, S, j, z, M, E = t.type;
                if (void 0 !== t.constructor) return null;
                null != n.__h && (d = n.__h, c = t.__e = n.__e, t.__h = null, a = [c]), (u = s.__b) && u(t);
                try {
                    e: if ("function" == typeof E) {
                        if (S = t.props, j = (u = E.contextType) && o[u.__c], z = u ? j ? j.props.value : u.__ : o, n.__c ? C = (p = t.__c = n.__c).__ = p.__E : ("prototype" in E && E.prototype.render ? t.__c = p = new E(S, z) : (t.__c = p = new b(S, z), p.constructor = E, p.render = T), j && j.sub(p), p.props = S, p.state || (p.state = {}), p.context = z, p.__n = o, g = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != E.getDerivedStateFromProps && (p.__s == p.state && (p.__s = f({}, p.__s)), f(p.__s, E.getDerivedStateFromProps(S, p.__s))), m = p.props, w = p.state, g) null == E.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
                        else {
                            if (null == E.getDerivedStateFromProps && S !== m && null != p.componentWillReceiveProps && p.componentWillReceiveProps(S, z), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(S, p.__s, z) || t.__v === n.__v) {
                                p.props = S, p.state = p.__s, t.__v !== n.__v && (p.__d = !1), p.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                                    e && (e.__ = t)
                                })), p.__h.length && l.push(p);
                                break e
                            }
                            null != p.componentWillUpdate && p.componentWillUpdate(S, p.__s, z), null != p.componentDidUpdate && p.__h.push((function() {
                                p.componentDidUpdate(m, w, y)
                            }))
                        }
                        p.context = z, p.props = S, p.state = p.__s, (u = s.__r) && u(t), p.__d = !1, p.__v = t, p.__P = e, u = p.render(p.props, p.state, p.context), p.state = p.__s, null != p.getChildContext && (o = f(f({}, o), p.getChildContext())), g || null == p.getSnapshotBeforeUpdate || (y = p.getSnapshotBeforeUpdate(m, w)), M = null != u && u.type === v && null == u.key ? u.props.children : u, x(e, Array.isArray(M) ? M : [M], t, n, o, i, a, l, c, d), p.base = t.__e, t.__h = null, p.__h.length && l.push(p), C && (p.__E = p.__ = null), p.__e = !1
                    } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, o, i, s, a, l) {
                        var c, d, u, p = n.props,
                            f = t.props,
                            g = t.type,
                            m = 0;
                        if ("svg" === g && (i = !0), null != s)
                            for (; m < s.length; m++)
                                if ((c = s[m]) && "setAttribute" in c == !!g && (g ? c.localName === g : 3 === c.nodeType)) {
                                    e = c, s[m] = null;
                                    break
                                }
                        if (null == e) {
                            if (null === g) return document.createTextNode(f);
                            e = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, f.is && f), s = null, l = !1
                        }
                        if (null === g) p === f || l && e.data === f || (e.data = f);
                        else {
                            if (s = s && r.call(e.childNodes), d = (p = n.props || h).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !l) {
                                if (null != s)
                                    for (p = {}, m = 0; m < e.attributes.length; m++) p[e.attributes[m].name] = e.attributes[m].value;
                                (u || d) && (u && (d && u.__html == d.__html || u.__html === e.innerHTML) || (e.innerHTML = u && u.__html || ""))
                            }
                            if (function(e, t, n, o, i) {
                                    var r;
                                    for (r in n) "children" === r || "key" === r || r in t || L(e, r, null, n[r], o);
                                    for (r in t) i && "function" != typeof t[r] || "children" === r || "key" === r || "value" === r || "checked" === r || n[r] === t[r] || L(e, r, t[r], n[r], o)
                                }(e, f, p, i, l), u) t.__k = [];
                            else if (m = t.props.children, x(e, Array.isArray(m) ? m : [m], t, n, o, i && "foreignObject" !== g, s, a, s ? s[0] : n.__k && k(n, 0), l), null != s)
                                for (m = s.length; m--;) null != s[m] && _(s[m]);
                            l || ("value" in f && void 0 !== (m = f.value) && (m !== p.value || m !== e.value || "progress" === g && !m) && L(e, "value", m, p.value, !1), "checked" in f && void 0 !== (m = f.checked) && m !== e.checked && L(e, "checked", m, p.checked, !1))
                        }
                        return e
                    }(n.__e, t, n, o, i, a, l, d);
                    (u = s.diffed) && u(t)
                }
                catch (P) {
                    t.__v = null, (d || null != a) && (t.__e = c, t.__h = !!d, a[a.indexOf(c)] = null), s.__e(P, t, n)
                }
            }

            function B(e, t) {
                s.__c && s.__c(t, e), e.some((function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some((function(e) {
                            e.call(t)
                        }))
                    } catch (n) {
                        s.__e(n, t.__v)
                    }
                }))
            }

            function H(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (o) {
                    s.__e(o, n)
                }
            }

            function A(e, t, n) {
                var o, i;
                if (s.unmount && s.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || H(o, null, t)), null != (o = e.__c)) {
                    if (o.componentWillUnmount) try {
                        o.componentWillUnmount()
                    } catch (r) {
                        s.__e(r, t)
                    }
                    o.base = o.__P = null
                }
                if (o = e.__k)
                    for (i = 0; i < o.length; i++) o[i] && A(o[i], t, "function" != typeof e.type);
                n || null == e.__e || _(e.__e), e.__e = e.__d = void 0
            }

            function T(e, t, n) {
                return this.constructor(e, n)
            }

            function I(e, t, n) {
                var o, i, a;
                s.__ && s.__(e, t), i = (o = "function" == typeof n) ? null : n && n.__k || t.__k, a = [], R(t, e = (!o && n || t).__k = g(v, null, [e]), i || h, h, void 0 !== t.ownerSVGElement, !o && n ? [n] : i ? null : t.firstChild ? r.call(t.childNodes) : null, a, !o && n ? n : i ? i.__e : t.firstChild, o), B(a, e)
            }
            r = u.slice, s = {
                __e: function(e, t) {
                    for (var n, o, i; t = t.__;)
                        if ((n = t.__c) && !n.__) try {
                            if ((o = n.constructor) && null != o.getDerivedStateFromError && (n.setState(o.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
                        } catch (r) {
                            e = r
                        }
                    throw e
                }
            }, a = 0, b.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = f({}, this.state), "function" == typeof e && (e = e(f({}, n), this.props)), e && f(n, e), null != e && this.__v && (t && this.__h.push(t), y(this))
            }, b.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), y(this))
            }, b.prototype.render = v, l = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, C.__r = 0;
            var O = 0;

            function V(e, t, n, o, i) {
                var r, a, l = {};
                for (a in t) "ref" == a ? r = t[a] : l[a] = t[a];
                var c = {
                    type: e,
                    props: l,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: --O,
                    __source: o,
                    __self: i
                };
                if ("function" == typeof e && (r = e.defaultProps))
                    for (a in r) void 0 === l[a] && (l[a] = r[a]);
                return s.vnode && s.vnode(c), c
            }
            var D = {
                set: function(e, t) {
                    try {
                        window.localStorage[`emoji-mart.${e}`] = JSON.stringify(t)
                    } catch (n) {}
                },
                get: function(e) {
                    try {
                        const t = window.localStorage[`emoji-mart.${e}`];
                        if (t) return JSON.parse(t)
                    } catch (t) {}
                }
            };
            const $ = new Map,
                U = [{
                    v: 15,
                    emoji: "\ud83e\udee8"
                }, {
                    v: 14,
                    emoji: "\ud83e\udee0"
                }, {
                    v: 13.1,
                    emoji: "\ud83d\ude36\u200d\ud83c\udf2b\ufe0f"
                }, {
                    v: 13,
                    emoji: "\ud83e\udd78"
                }, {
                    v: 12.1,
                    emoji: "\ud83e\uddd1\u200d\ud83e\uddb0"
                }, {
                    v: 12,
                    emoji: "\ud83e\udd71"
                }, {
                    v: 11,
                    emoji: "\ud83e\udd70"
                }, {
                    v: 5,
                    emoji: "\ud83e\udd29"
                }, {
                    v: 4,
                    emoji: "\ud83d\udc71\u200d\u2640\ufe0f"
                }, {
                    v: 3,
                    emoji: "\ud83e\udd23"
                }, {
                    v: 2,
                    emoji: "\ud83d\udc4b\ud83c\udffb"
                }, {
                    v: 1,
                    emoji: "\ud83d\ude43"
                }];

            function F(e) {
                if ($.has(e)) return $.get(e);
                const t = N(e);
                return $.set(e, t), t
            }
            const N = (() => {
                let e = null;
                try {
                    navigator.userAgent.includes("jsdom") || (e = document.createElement("canvas").getContext("2d", {
                        willReadFrequently: !0
                    }))
                } catch {}
                if (!e) return () => !1;
                const t = 20,
                    n = Math.floor(12.5);
                return e.font = n + "px Arial, Sans-Serif", e.textBaseline = "top", e.canvas.width = 40, e.canvas.height = 25, n => {
                    e.clearRect(0, 0, 40, 25), e.fillStyle = "#FF0000", e.fillText(n, 0, 22), e.fillStyle = "#0000FF", e.fillText(n, t, 22);
                    const o = e.getImageData(0, 0, t, 25).data,
                        i = o.length;
                    let r = 0;
                    for (; r < i && !o[r + 3]; r += 4);
                    if (r >= i) return !1;
                    const s = t + r / 4 % t,
                        a = Math.floor(r / 4 / t),
                        l = e.getImageData(s, a, 1, 1).data;
                    return o[r] === l[0] && o[r + 2] === l[2] && !(e.measureText(n).width >= t)
                }
            })();
            var W = {
                latestVersion: function() {
                    for (const {
                            v: e,
                            emoji: t
                        } of U)
                        if (F(t)) return e
                },
                noCountryFlags: function() {
                    return !F("\ud83c\udde8\ud83c\udde6")
                }
            };
            const q = ["+1", "grinning", "kissing_heart", "heart_eyes", "laughing", "stuck_out_tongue_winking_eye", "sweat_smile", "joy", "scream", "disappointed", "unamused", "weary", "sob", "sunglasses", "heart"];
            let K = null;
            var G, X = {
                add: function(e) {
                    K || (K = D.get("frequently") || {});
                    const t = e.id || e;
                    t && (K[t] || (K[t] = 0), K[t] += 1, D.set("last", t), D.set("frequently", K))
                },
                get: function({
                    maxFrequentRows: e,
                    perLine: t
                }) {
                    if (!e) return [];
                    K || (K = D.get("frequently"));
                    let n = [];
                    if (!K) {
                        K = {};
                        for (let e in q.slice(0, t)) {
                            const o = q[e];
                            K[o] = t - e, n.push(o)
                        }
                        return n
                    }
                    const o = e * t,
                        i = D.get("last");
                    for (let r in K) n.push(r);
                    if (n.sort(((e, t) => {
                            const n = K[t],
                                o = K[e];
                            return n == o ? e.localeCompare(t) : n - o
                        })), n.length > o) {
                        const e = n.slice(o);
                        n = n.slice(0, o);
                        for (let t of e) t != i && delete K[t];
                        i && -1 == n.indexOf(i) && (delete K[n[n.length - 1]], n.splice(-1, 1, i)), D.set("frequently", K)
                    }
                    return n
                },
                DEFAULTS: q
            };
            G = JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn\u2019t be found","pick":"Pick an emoji\u2026","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');
            var J = {
                autoFocus: {
                    value: !1
                },
                dynamicWidth: {
                    value: !1
                },
                emojiButtonColors: {
                    value: null
                },
                emojiButtonRadius: {
                    value: "100%"
                },
                emojiButtonSize: {
                    value: 36
                },
                emojiSize: {
                    value: 24
                },
                emojiVersion: {
                    value: 15,
                    choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14, 15]
                },
                exceptEmojis: {
                    value: []
                },
                icons: {
                    value: "auto",
                    choices: ["auto", "outline", "solid"]
                },
                locale: {
                    value: "en",
                    choices: ["en", "ar", "be", "cs", "de", "es", "fa", "fi", "fr", "hi", "it", "ja", "ko", "nl", "pl", "pt", "ru", "sa", "tr", "uk", "vi", "zh"]
                },
                maxFrequentRows: {
                    value: 4
                },
                navPosition: {
                    value: "top",
                    choices: ["top", "bottom", "none"]
                },
                noCountryFlags: {
                    value: !1
                },
                noResultsEmoji: {
                    value: null
                },
                perLine: {
                    value: 9
                },
                previewEmoji: {
                    value: null
                },
                previewPosition: {
                    value: "bottom",
                    choices: ["top", "bottom", "none"]
                },
                searchPosition: {
                    value: "sticky",
                    choices: ["sticky", "static", "none"]
                },
                set: {
                    value: "native",
                    choices: ["native", "apple", "facebook", "google", "twitter"]
                },
                skin: {
                    value: 1,
                    choices: [1, 2, 3, 4, 5, 6]
                },
                skinTonePosition: {
                    value: "preview",
                    choices: ["preview", "search", "none"]
                },
                theme: {
                    value: "auto",
                    choices: ["auto", "light", "dark"]
                },
                categories: null,
                categoryIcons: null,
                custom: null,
                data: null,
                i18n: null,
                getImageURL: null,
                getSpritesheetURL: null,
                onAddCustomEmoji: null,
                onClickOutside: null,
                onEmojiSelect: null,
                stickySearch: {
                    deprecated: !0,
                    value: !0
                }
            };
            let Y = null,
                Z = null;
            const Q = {};
            async function ee(e) {
                if (Q[e]) return Q[e];
                const t = await fetch(e),
                    n = await t.json();
                return Q[e] = n, n
            }
            let te = null,
                ne = null,
                oe = !1;

            function ie(e, {
                caller: t
            } = {}) {
                return te || (te = new Promise((e => {
                    ne = e
                }))), e ? async function(e) {
                    oe = !0;
                    let {
                        emojiVersion: t,
                        set: n,
                        locale: i
                    } = e;
                    if (t || (t = J.emojiVersion.value), n || (n = J.set.value), i || (i = J.locale.value), Z) Z.categories = Z.categories.filter((e => !!!e.name));
                    else {
                        Z = ("function" === typeof e.data ? await e.data() : e.data) || await ee(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`), Z.emoticons = {}, Z.natives = {}, Z.categories.unshift({
                            id: "frequent",
                            emojis: []
                        });
                        for (const e in Z.aliases) {
                            const t = Z.aliases[e],
                                n = Z.emojis[t];
                            n && (n.aliases || (n.aliases = []), n.aliases.push(e))
                        }
                        Z.originalCategories = Z.categories
                    }
                    if (Y = ("function" === typeof e.i18n ? await e.i18n() : e.i18n) || ("en" == i ? o(G) : await ee(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)), e.custom)
                        for (let o in e.custom) {
                            o = parseInt(o);
                            const t = e.custom[o],
                                n = e.custom[o - 1];
                            if (t.emojis && t.emojis.length) {
                                t.id || (t.id = `custom_${o+1}`), t.name || (t.name = Y.categories.custom), n && !t.icon && (t.target = n.target || n), Z.categories.push(t);
                                for (const e of t.emojis) Z.emojis[e.id] = e
                            }
                        }
                    e.categories && (Z.categories = Z.originalCategories.filter((t => -1 != e.categories.indexOf(t.id))).sort(((t, n) => e.categories.indexOf(t.id) - e.categories.indexOf(n.id))));
                    let r = null,
                        s = null;
                    "native" == n && (r = W.latestVersion(), s = e.noCountryFlags || W.noCountryFlags());
                    let a = Z.categories.length,
                        l = !1;
                    for (; a--;) {
                        const t = Z.categories[a];
                        if ("frequent" == t.id) {
                            let {
                                maxFrequentRows: n,
                                perLine: o
                            } = e;
                            n = n >= 0 ? n : J.maxFrequentRows.value, o || (o = J.perLine.value), t.emojis = X.get({
                                maxFrequentRows: n,
                                perLine: o
                            })
                        }
                        if (!t.emojis || !t.emojis.length) {
                            Z.categories.splice(a, 1);
                            continue
                        }
                        const {
                            categoryIcons: n
                        } = e;
                        if (n) {
                            const e = n[t.id];
                            e && !t.icon && (t.icon = e)
                        }
                        let o = t.emojis.length;
                        for (; o--;) {
                            const n = t.emojis[o],
                                i = n.id ? n : Z.emojis[n],
                                a = () => {
                                    t.emojis.splice(o, 1)
                                };
                            if (!i || e.exceptEmojis && e.exceptEmojis.includes(i.id)) a();
                            else if (r && i.version > r) a();
                            else if (!s || "flags" != t.id || ce.includes(i.id)) {
                                if (!i.search) {
                                    if (l = !0, i.search = "," + [
                                            [i.id, !1],
                                            [i.name, !0],
                                            [i.keywords, !1],
                                            [i.emoticons, !1]
                                        ].map((([e, t]) => {
                                            if (e) return (Array.isArray(e) ? e : [e]).map((e => (t ? e.split(/[-|_|\s]+/) : [e]).map((e => e.toLowerCase())))).flat()
                                        })).flat().filter((e => e && e.trim())).join(","), i.emoticons)
                                        for (const t of i.emoticons) Z.emoticons[t] || (Z.emoticons[t] = i.id);
                                    let e = 0;
                                    for (const t of i.skins) {
                                        if (!t) continue;
                                        e++;
                                        const {
                                            native: n
                                        } = t;
                                        n && (Z.natives[n] = i.id, i.search += `,${n}`);
                                        const o = 1 == e ? "" : `:skin-tone-${e}:`;
                                        t.shortcodes = `:${i.id}:${o}`
                                    }
                                }
                            } else a()
                        }
                    }
                    l && le.reset();
                    ne()
                }(e) : t && !oe && console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`), te
            }

            function re(e, t, n) {
                e || (e = {});
                const o = {};
                for (let i in t) o[i] = se(i, e, t, n);
                return o
            }

            function se(e, t, n, o) {
                const i = n[e];
                let r = o && o.getAttribute(e) || (null != t[e] && void 0 != t[e] ? t[e] : null);
                return i ? (null != r && i.value && typeof i.value != typeof r && (r = "boolean" == typeof i.value ? "false" != r : i.value.constructor(r)), i.transform && r && (r = i.transform(r)), (null == r || i.choices && -1 == i.choices.indexOf(r)) && (r = i.value), r) : r
            }
            let ae = null;
            var le = {
                search: async function(e, {
                    maxResults: t,
                    caller: n
                } = {}) {
                    if (!e || !e.trim().length) return null;
                    t || (t = 90), await ie(null, {
                        caller: n || "SearchIndex.search"
                    });
                    const o = e.toLowerCase().replace(/(\w)-/, "$1 ").split(/[\s|,]+/).filter(((e, t, n) => e.trim() && n.indexOf(e) == t));
                    if (!o.length) return;
                    let i, r, s = ae || (ae = Object.values(Z.emojis));
                    for (const a of o) {
                        if (!s.length) break;
                        i = [], r = {};
                        for (const e of s) {
                            if (!e.search) continue;
                            const t = e.search.indexOf(`,${a}`); - 1 != t && (i.push(e), r[e.id] || (r[e.id] = 0), r[e.id] += e.id == a ? 0 : t + 1)
                        }
                        s = i
                    }
                    return i.length < 2 || (i.sort(((e, t) => {
                        const n = r[e.id],
                            o = r[t.id];
                        return n == o ? e.id.localeCompare(t.id) : n - o
                    })), i.length > t && (i = i.slice(0, t))), i
                },
                get: function(e) {
                    return e.id ? e : Z.emojis[e] || Z.emojis[Z.aliases[e]] || Z.emojis[Z.natives[e]]
                },
                reset: function() {
                    ae = null
                },
                SHORTCODES_REGEX: /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/
            };
            const ce = ["checkered_flag", "crossed_flags", "pirate_flag", "rainbow-flag", "transgender_flag", "triangular_flag_on_post", "waving_black_flag", "waving_white_flag"];
            async function de(e = 1) {
                for (let t in [...Array(e).keys()]) await new Promise(requestAnimationFrame)
            }

            function he(e, {
                skinIndex: t = 0
            } = {}) {
                const n = e.skins[t] || (t = 0, e.skins[t]),
                    o = {
                        id: e.id,
                        name: e.name,
                        native: n.native,
                        unified: n.unified,
                        keywords: e.keywords,
                        shortcodes: n.shortcodes || e.shortcodes
                    };
                return e.skins.length > 1 && (o.skin = t + 1), n.src && (o.src = n.src), e.aliases && e.aliases.length && (o.aliases = e.aliases), e.emoticons && e.emoticons.length && (o.emoticons = e.emoticons), o
            }
            var ue = {
                categories: {
                    activity: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: V("path", {
                                d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
                            })
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: V("path", {
                                d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
                            })
                        })
                    },
                    custom: V("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 448 512",
                        children: V("path", {
                            d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
                        })
                    }),
                    flags: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: V("path", {
                                d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
                            })
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: V("path", {
                                d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
                            })
                        })
                    },
                    foods: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: V("path", {
                                d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
                            })
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: V("path", {
                                d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
                            })
                        })
                    },
                    frequent: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [V("path", {
                                d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
                            }), V("path", {
                                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                            })]
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: V("path", {
                                d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
                            })
                        })
                    },
                    nature: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [V("path", {
                                d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
                            }), V("path", {
                                d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
                            })]
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 576 512",
                            children: V("path", {
                                d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
                            })
                        })
                    },
                    objects: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [V("path", {
                                d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
                            }), V("path", {
                                d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
                            })]
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 384 512",
                            children: V("path", {
                                d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
                            })
                        })
                    },
                    people: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [V("path", {
                                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
                            }), V("path", {
                                d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
                            })]
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: V("path", {
                                d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
                            })
                        })
                    },
                    places: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: [V("path", {
                                d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
                            }), V("path", {
                                d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
                            })]
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: V("path", {
                                d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
                            })
                        })
                    },
                    symbols: {
                        outline: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: V("path", {
                                d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
                            })
                        }),
                        solid: V("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            children: V("path", {
                                d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
                            })
                        })
                    }
                },
                search: {
                    loupe: V("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        children: V("path", {
                            d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                        })
                    }),
                    delete: V("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        children: V("path", {
                            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                        })
                    })
                }
            };

            function pe(e) {
                let {
                    id: t,
                    skin: n,
                    emoji: o
                } = e;
                if (e.shortcodes) {
                    const o = e.shortcodes.match(le.SHORTCODES_REGEX);
                    o && (t = o[1], o[2] && (n = o[2]))
                }
                if (o || (o = le.get(t || e.native)), !o) return e.fallback;
                const i = o.skins[n - 1] || o.skins[0],
                    r = i.src || ("native" == e.set || e.spritesheet ? void 0 : "function" === typeof e.getImageURL ? e.getImageURL(e.set, i.unified) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/64/${i.unified}.png`),
                    s = "function" === typeof e.getSpritesheetURL ? e.getSpritesheetURL(e.set) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/sheets-256/64.png`;
                return V("span", {
                    class: "emoji-mart-emoji",
                    "data-emoji-set": e.set,
                    children: r ? V("img", {
                        style: {
                            maxWidth: e.size || "1em",
                            maxHeight: e.size || "1em",
                            display: "inline-block"
                        },
                        alt: i.native || i.shortcodes,
                        src: r
                    }) : "native" == e.set ? V("span", {
                        style: {
                            fontSize: e.size,
                            fontFamily: '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'
                        },
                        children: i.native
                    }) : V("span", {
                        style: {
                            display: "block",
                            width: e.size,
                            height: e.size,
                            backgroundImage: `url(${s})`,
                            backgroundSize: `${100*Z.sheet.cols}% ${100*Z.sheet.rows}%`,
                            backgroundPosition: `${100/(Z.sheet.cols-1)*i.x}% ${100/(Z.sheet.rows-1)*i.y}%`
                        }
                    })
                })
            }
            const fe = "undefined" !== typeof window && window.HTMLElement ? window.HTMLElement : Object;
            class _e extends fe {
                static get observedAttributes() {
                    return Object.keys(this.Props)
                }
                update(e = {}) {
                    for (let t in e) this.attributeChangedCallback(t, null, e[t])
                }
                attributeChangedCallback(e, t, n) {
                    if (!this.component) return;
                    const o = se(e, {
                        [e]: n
                    }, this.constructor.Props, this);
                    this.component.componentWillReceiveProps ? this.component.componentWillReceiveProps({
                        [e]: o
                    }) : (this.component.props[e] = o, this.component.forceUpdate())
                }
                disconnectedCallback() {
                    this.disconnected = !0, this.component && this.component.unregister && this.component.unregister()
                }
                constructor(e = {}) {
                    if (super(), this.props = e, e.parent || e.ref) {
                        let t = null;
                        const n = e.parent || (t = e.ref && e.ref.current);
                        t && (t.innerHTML = ""), n && n.appendChild(this)
                    }
                }
            }
            class ge extends _e {
                setShadow() {
                    this.attachShadow({
                        mode: "open"
                    })
                }
                injectStyles(e) {
                    if (!e) return;
                    const t = document.createElement("style");
                    t.textContent = e, this.shadowRoot.insertBefore(t, this.shadowRoot.firstChild)
                }
                constructor(e, {
                    styles: t
                } = {}) {
                    super(e), this.setShadow(), this.injectStyles(t)
                }
            }
            var me = {
                fallback: "",
                id: "",
                native: "",
                shortcodes: "",
                size: {
                    value: "",
                    transform: e => /\D/.test(e) ? e : `${e}px`
                },
                set: J.set,
                skin: J.skin
            };
            class ve extends _e {
                async connectedCallback() {
                    const e = re(this.props, me, this);
                    e.element = this, e.ref = e => {
                        this.component = e
                    }, await ie(), this.disconnected || I(V(pe, { ...e
                    }), this)
                }
                constructor(e) {
                    super(e)
                }
            }
            i(ve, "Props", me), "undefined" === typeof customElements || customElements.get("em-emoji") || customElements.define("em-emoji", ve);
            var be, ke, we = [],
                ye = s.__b,
                Ce = s.__r,
                xe = s.diffed,
                Se = s.__c,
                je = s.unmount;

            function ze() {
                var e;
                for (we.sort((function(e, t) {
                        return e.__v.__b - t.__v.__b
                    })); e = we.pop();)
                    if (e.__P) try {
                        e.__H.__h.forEach(Le), e.__H.__h.forEach(Ee), e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [], s.__e(t, e.__v)
                    }
            }
            s.__b = function(e) {
                be = null, ye && ye(e)
            }, s.__r = function(e) {
                Ce && Ce(e), 0;
                var t = (be = e.__c).__H;
                t && (t.__h.forEach(Le), t.__h.forEach(Ee), t.__h = [])
            }, s.diffed = function(e) {
                xe && xe(e);
                var t = e.__c;
                t && t.__H && t.__H.__h.length && (1 !== we.push(t) && ke === s.requestAnimationFrame || ((ke = s.requestAnimationFrame) || function(e) {
                    var t, n = function() {
                            clearTimeout(o), Me && cancelAnimationFrame(t), setTimeout(e)
                        },
                        o = setTimeout(n, 100);
                    Me && (t = requestAnimationFrame(n))
                })(ze)), be = null
            }, s.__c = function(e, t) {
                t.some((function(e) {
                    try {
                        e.__h.forEach(Le), e.__h = e.__h.filter((function(e) {
                            return !e.__ || Ee(e)
                        }))
                    } catch (n) {
                        t.some((function(e) {
                            e.__h && (e.__h = [])
                        })), t = [], s.__e(n, e.__v)
                    }
                })), Se && Se(e, t)
            }, s.unmount = function(e) {
                je && je(e);
                var t, n = e.__c;
                n && n.__H && (n.__H.__.forEach((function(e) {
                    try {
                        Le(e)
                    } catch (n) {
                        t = n
                    }
                })), t && s.__e(t, n.__v))
            };
            var Me = "function" == typeof requestAnimationFrame;

            function Le(e) {
                var t = be,
                    n = e.__c;
                "function" == typeof n && (e.__c = void 0, n()), be = t
            }

            function Ee(e) {
                var t = be;
                e.__c = e.__(), be = t
            }

            function Pe(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function Re(e, t) {
                for (var n in e)
                    if ("__source" !== n && !(n in t)) return !0;
                for (var o in t)
                    if ("__source" !== o && e[o] !== t[o]) return !0;
                return !1
            }

            function Be(e) {
                this.props = e
            }(Be.prototype = new b).isPureReactComponent = !0, Be.prototype.shouldComponentUpdate = function(e, t) {
                return Re(this.props, e) || Re(this.state, t)
            };
            var He = s.__b;
            s.__b = function(e) {
                e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), He && He(e)
            };
            "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
            var Ae = s.__e;
            s.__e = function(e, t, n) {
                if (e.then)
                    for (var o, i = t; i = i.__;)
                        if ((o = i.__c) && o.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
                Ae(e, t, n)
            };
            var Te = s.unmount;

            function Ie() {
                this.__u = 0, this.t = null, this.__b = null
            }

            function Oe(e) {
                var t = e.__.__c;
                return t && t.__e && t.__e(e)
            }

            function Ve() {
                this.u = null, this.o = null
            }
            s.unmount = function(e) {
                var t = e.__c;
                t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Te && Te(e)
            }, (Ie.prototype = new b).__c = function(e, t) {
                var n = t.__c,
                    o = this;
                null == o.t && (o.t = []), o.t.push(n);
                var i = Oe(o.__v),
                    r = !1,
                    s = function() {
                        r || (r = !0, n.__R = null, i ? i(a) : a())
                    };
                n.__R = s;
                var a = function() {
                        if (!--o.__u) {
                            if (o.state.__e) {
                                var e = o.state.__e;
                                o.__v.__k[0] = function e(t, n, o) {
                                    return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                                        return e(t, n, o)
                                    })), t.__c && t.__c.__P === n && (t.__e && o.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = o)), t
                                }(e, e.__c.__P, e.__c.__O)
                            }
                            var t;
                            for (o.setState({
                                    __e: o.__b = null
                                }); t = o.t.pop();) t.forceUpdate()
                        }
                    },
                    l = !0 === t.__h;
                o.__u++ || l || o.setState({
                    __e: o.__b = o.__v.__k[0]
                }), e.then(s, s)
            }, Ie.prototype.componentWillUnmount = function() {
                this.t = []
            }, Ie.prototype.render = function(e, t) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"),
                            o = this.__v.__k[0].__c;
                        this.__v.__k[0] = function e(t, n, o) {
                            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                                "function" == typeof e.__c && e.__c()
                            })), t.__c.__H = null), null != (t = Pe({}, t)).__c && (t.__c.__P === o && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                                return e(t, n, o)
                            }))), t
                        }(this.__b, n, o.__O = o.__P)
                    }
                    this.__b = null
                }
                var i = t.__e && g(v, null, e.fallback);
                return i && (i.__h = null), [g(v, null, t.__e ? null : e.children), i]
            };
            var De = function(e, t, n) {
                if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
                    for (n = e.u; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        e.u = n = n[2]
                    }
            };
            (Ve.prototype = new b).__e = function(e) {
                var t = this,
                    n = Oe(t.__v),
                    o = t.o.get(e);
                return o[0]++,
                    function(i) {
                        var r = function() {
                            t.props.revealOrder ? (o.push(i), De(t, e, o)) : i()
                        };
                        n ? n(r) : r()
                    }
            }, Ve.prototype.render = function(e) {
                this.u = null, this.o = new Map;
                var t = j(e.children);
                e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
                return e.children
            }, Ve.prototype.componentDidUpdate = Ve.prototype.componentDidMount = function() {
                var e = this;
                this.o.forEach((function(t, n) {
                    De(e, n, t)
                }))
            };
            var $e = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                Ue = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                Fe = "undefined" != typeof document;
            b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
                Object.defineProperty(b.prototype, e, {
                    configurable: !0,
                    get: function() {
                        return this["UNSAFE_" + e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            }));
            var Ne = s.event;

            function We() {}

            function qe() {
                return this.cancelBubble
            }

            function Ke() {
                return this.defaultPrevented
            }
            s.event = function(e) {
                return Ne && (e = Ne(e)), e.persist = We, e.isPropagationStopped = qe, e.isDefaultPrevented = Ke, e.nativeEvent = e
            };
            var Ge = {
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                Xe = s.vnode;
            s.vnode = function(e) {
                var t, n = e.type,
                    o = e.props,
                    i = o;
                if ("string" == typeof n) {
                    var r = -1 === n.indexOf("-");
                    for (var s in i = {}, o) {
                        var a = o[s];
                        Fe && "children" === s && "noscript" === n || "value" === s && "defaultValue" in o && null == a || ("defaultValue" === s && "value" in o && null == o.value ? s = "value" : "download" === s && !0 === a ? a = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + n) && (t = o.type, !("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(t)) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(s) ? s = s.toLowerCase() : r && Ue.test(s) ? s = s.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === a && (a = void 0), i[s] = a)
                    }
                    "select" == n && i.multiple && Array.isArray(i.value) && (i.value = j(o.children).forEach((function(e) {
                        e.props.selected = -1 != i.value.indexOf(e.props.value)
                    }))), "select" == n && null != i.defaultValue && (i.value = j(o.children).forEach((function(e) {
                        e.props.selected = i.multiple ? -1 != i.defaultValue.indexOf(e.props.value) : i.defaultValue == e.props.value
                    }))), e.props = i, o.class != o.className && (Ge.enumerable = "className" in o, null != o.className && (i.class = o.className), Object.defineProperty(i, "className", Ge))
                }
                e.$$typeof = $e, Xe && Xe(e)
            };
            var Je = s.__r;
            s.__r = function(e) {
                Je && Je(e), e.__c
            };
            const Ye = {
                light: "outline",
                dark: "solid"
            };
            class Ze extends Be {
                renderIcon(e) {
                    const {
                        icon: t
                    } = e;
                    if (t) {
                        if (t.svg) return V("span", {
                            class: "flex",
                            dangerouslySetInnerHTML: {
                                __html: t.svg
                            }
                        });
                        if (t.src) return V("img", {
                            src: t.src
                        })
                    }
                    const n = ue.categories[e.id] || ue.categories.custom;
                    return n["auto" == this.props.icons ? Ye[this.props.theme] : this.props.icons] || n
                }
                render() {
                    let e = null;
                    return V("nav", {
                        id: "nav",
                        class: "padding",
                        "data-position": this.props.position,
                        dir: this.props.dir,
                        children: V("div", {
                            class: "flex relative",
                            children: [this.categories.map(((t, n) => {
                                const o = t.name || Y.categories[t.id],
                                    i = !this.props.unfocused && t.id == this.state.categoryId;
                                return i && (e = n), V("button", {
                                    "aria-label": o,
                                    "aria-selected": i || void 0,
                                    title: o,
                                    type: "button",
                                    class: "flex flex-grow flex-center",
                                    onMouseDown: e => e.preventDefault(),
                                    onClick: () => {
                                        this.props.onClick({
                                            category: t,
                                            i: n
                                        })
                                    },
                                    children: this.renderIcon(t)
                                })
                            })), V("div", {
                                class: "bar",
                                style: {
                                    width: 100 / this.categories.length + "%",
                                    opacity: null == e ? 0 : 1,
                                    transform: "rtl" === this.props.dir ? `scaleX(-1) translateX(${100*e}%)` : `translateX(${100*e}%)`
                                }
                            })]
                        })
                    })
                }
                constructor() {
                    super(), this.categories = Z.categories.filter((e => !e.target)), this.state = {
                        categoryId: this.categories[0].id
                    }
                }
            }
            class Qe extends Be {
                shouldComponentUpdate(e) {
                    for (let t in e)
                        if ("children" != t && e[t] != this.props[t]) return !0;
                    return !1
                }
                render() {
                    return this.props.children
                }
            }
            const et = 10;
            class tt extends b {
                getInitialState(e = this.props) {
                    return {
                        skin: D.get("skin") || e.skin,
                        theme: this.initTheme(e.theme)
                    }
                }
                componentWillMount() {
                    this.dir = Y.rtl ? "rtl" : "ltr", this.refs = {
                        menu: {
                            current: null
                        },
                        navigation: {
                            current: null
                        },
                        scroll: {
                            current: null
                        },
                        search: {
                            current: null
                        },
                        searchInput: {
                            current: null
                        },
                        skinToneButton: {
                            current: null
                        },
                        skinToneRadio: {
                            current: null
                        }
                    }, this.initGrid(), 0 == this.props.stickySearch && "sticky" == this.props.searchPosition && (console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."), this.props.searchPosition = "static")
                }
                componentDidMount() {
                    if (this.register(), this.shadowRoot = this.base.parentNode, this.props.autoFocus) {
                        const {
                            searchInput: e
                        } = this.refs;
                        e.current && e.current.focus()
                    }
                }
                componentWillReceiveProps(e) {
                    this.nextState || (this.nextState = {});
                    for (const t in e) this.nextState[t] = e[t];
                    clearTimeout(this.nextStateTimer), this.nextStateTimer = setTimeout((() => {
                        let e = !1;
                        for (const n in this.nextState) this.props[n] = this.nextState[n], "custom" !== n && "categories" !== n || (e = !0);
                        delete this.nextState;
                        const t = this.getInitialState();
                        if (e) return this.reset(t);
                        this.setState(t)
                    }))
                }
                componentWillUnmount() {
                    this.unregister()
                }
                async reset(e = {}) {
                    await ie(this.props), this.initGrid(), this.unobserve(), this.setState(e, (() => {
                        this.observeCategories(), this.observeRows()
                    }))
                }
                register() {
                    document.addEventListener("click", this.handleClickOutside), this.observe()
                }
                unregister() {
                    document.removeEventListener("click", this.handleClickOutside), this.darkMedia ? .removeEventListener("change", this.darkMediaCallback), this.unobserve()
                }
                observe() {
                    this.observeCategories(), this.observeRows()
                }
                unobserve({
                    except: e = []
                } = {}) {
                    Array.isArray(e) || (e = [e]);
                    for (const t of this.observers) e.includes(t) || t.disconnect();
                    this.observers = [].concat(e)
                }
                initGrid() {
                    const {
                        categories: e
                    } = Z;
                    this.refs.categories = new Map;
                    const t = Z.categories.map((e => e.id)).join(",");
                    this.navKey && this.navKey != t && this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0), this.navKey = t, this.grid = [], this.grid.setsize = 0;
                    const n = (e, t) => {
                        const n = [];
                        n.__categoryId = t.id, n.__index = e.length, this.grid.push(n);
                        const o = this.grid.length - 1,
                            i = o % et ? {} : {
                                current: null
                            };
                        return i.index = o, i.posinset = this.grid.setsize + 1, e.push(i), n
                    };
                    for (let o of e) {
                        const e = [];
                        let t = n(e, o);
                        for (let i of o.emojis) t.length == this.getPerLine() && (t = n(e, o)), this.grid.setsize += 1, t.push(i);
                        this.refs.categories.set(o.id, {
                            root: {
                                current: null
                            },
                            rows: e
                        })
                    }
                }
                initTheme(e) {
                    if ("auto" != e) return e;
                    if (!this.darkMedia) {
                        if (this.darkMedia = matchMedia("(prefers-color-scheme: dark)"), this.darkMedia.media.match(/^not/)) return "light";
                        this.darkMedia.addEventListener("change", this.darkMediaCallback)
                    }
                    return this.darkMedia.matches ? "dark" : "light"
                }
                initDynamicPerLine(e = this.props) {
                    if (!e.dynamicWidth) return;
                    const {
                        element: t,
                        emojiButtonSize: n
                    } = e, o = () => {
                        const {
                            width: e
                        } = t.getBoundingClientRect();
                        return Math.floor(e / n)
                    }, i = new ResizeObserver((() => {
                        this.unobserve({
                            except: i
                        }), this.setState({
                            perLine: o()
                        }, (() => {
                            this.initGrid(), this.forceUpdate((() => {
                                this.observeCategories(), this.observeRows()
                            }))
                        }))
                    }));
                    return i.observe(t), this.observers.push(i), o()
                }
                getPerLine() {
                    return this.state.perLine || this.props.perLine
                }
                getEmojiByPos([e, t]) {
                    const n = this.state.searchResults || this.grid,
                        o = n[e] && n[e][t];
                    if (o) return le.get(o)
                }
                observeCategories() {
                    const e = this.refs.navigation.current;
                    if (!e) return;
                    const t = new Map,
                        n = {
                            root: this.refs.scroll.current,
                            threshold: [0, 1]
                        },
                        o = new IntersectionObserver((n => {
                            for (const e of n) {
                                const n = e.target.dataset.id;
                                t.set(n, e.intersectionRatio)
                            }
                            const o = [...t];
                            for (const [t, r] of o)
                                if (r) {
                                    (i = t) != e.state.categoryId && e.setState({
                                        categoryId: i
                                    });
                                    break
                                }
                            var i
                        }), n);
                    for (const {
                            root: i
                        } of this.refs.categories.values()) o.observe(i.current);
                    this.observers.push(o)
                }
                observeRows() {
                    const e = { ...this.state.visibleRows
                        },
                        t = new IntersectionObserver((t => {
                            for (const n of t) {
                                const t = parseInt(n.target.dataset.index);
                                n.isIntersecting ? e[t] = !0 : delete e[t]
                            }
                            this.setState({
                                visibleRows: e
                            })
                        }), {
                            root: this.refs.scroll.current,
                            rootMargin: `${this.props.emojiButtonSize*(et+5)}px 0px ${this.props.emojiButtonSize*et}px`
                        });
                    for (const {
                            rows: n
                        } of this.refs.categories.values())
                        for (const e of n) e.current && t.observe(e.current);
                    this.observers.push(t)
                }
                preventDefault(e) {
                    e.preventDefault()
                }
                unfocusSearch() {
                    const e = this.refs.searchInput.current;
                    e && e.blur()
                }
                navigate({
                    e: e,
                    input: t,
                    left: n,
                    right: o,
                    up: i,
                    down: r
                }) {
                    const s = this.state.searchResults || this.grid;
                    if (!s.length) return;
                    let [a, l] = this.state.pos;
                    const c = (() => {
                        if (0 == a && 0 == l && !e.repeat && (n || i)) return null;
                        if (-1 == a) return e.repeat || !o && !r || t.selectionStart != t.value.length ? null : [0, 0];
                        if (n || o) {
                            let e = s[a];
                            const t = n ? -1 : 1;
                            if (l += t, !e[l]) {
                                if (a += t, e = s[a], !e) return a = n ? 0 : s.length - 1, l = n ? 0 : s[a].length - 1, [a, l];
                                l = n ? e.length - 1 : 0
                            }
                            return [a, l]
                        }
                        if (i || r) {
                            a += i ? -1 : 1;
                            const e = s[a];
                            return e ? (e[l] || (l = e.length - 1), [a, l]) : (a = i ? 0 : s.length - 1, l = i ? 0 : s[a].length - 1, [a, l])
                        }
                    })();
                    c ? (e.preventDefault(), this.setState({
                        pos: c,
                        keyboard: !0
                    }, (() => {
                        this.scrollTo({
                            row: c[0]
                        })
                    }))) : this.state.pos[0] > -1 && this.setState({
                        pos: [-1, -1]
                    })
                }
                scrollTo({
                    categoryId: e,
                    row: t
                }) {
                    const n = this.state.searchResults || this.grid;
                    if (!n.length) return;
                    const o = this.refs.scroll.current,
                        i = o.getBoundingClientRect();
                    let r = 0;
                    if (t >= 0 && (e = n[t].__categoryId), e) {
                        r = (this.refs[e] || this.refs.categories.get(e).root).current.getBoundingClientRect().top - (i.top - o.scrollTop) + 1
                    }
                    if (t >= 0)
                        if (t) {
                            const e = r + n[t].__index * this.props.emojiButtonSize,
                                s = e + this.props.emojiButtonSize + .88 * this.props.emojiButtonSize;
                            if (e < o.scrollTop) r = e;
                            else {
                                if (!(s > o.scrollTop + i.height)) return;
                                r = s - i.height
                            }
                        } else r = 0;
                    this.ignoreMouse(), o.scrollTop = r
                }
                ignoreMouse() {
                    this.mouseIsIgnored = !0, clearTimeout(this.ignoreMouseTimer), this.ignoreMouseTimer = setTimeout((() => {
                        delete this.mouseIsIgnored
                    }), 100)
                }
                handleEmojiOver(e) {
                    this.mouseIsIgnored || this.state.showSkins || this.setState({
                        pos: e || [-1, -1],
                        keyboard: !1
                    })
                }
                handleEmojiClick({
                    e: e,
                    emoji: t,
                    pos: n
                }) {
                    if (this.props.onEmojiSelect && (!t && n && (t = this.getEmojiByPos(n)), t)) {
                        const n = he(t, {
                            skinIndex: this.state.skin - 1
                        });
                        this.props.maxFrequentRows && X.add(n, this.props), this.props.onEmojiSelect(n, e)
                    }
                }
                closeSkins() {
                    this.state.showSkins && (this.setState({
                        showSkins: null,
                        tempSkin: null
                    }), this.base.removeEventListener("click", this.handleBaseClick), this.base.removeEventListener("keydown", this.handleBaseKeydown))
                }
                handleSkinMouseOver(e) {
                    this.setState({
                        tempSkin: e
                    })
                }
                handleSkinClick(e) {
                    this.ignoreMouse(), this.closeSkins(), this.setState({
                        skin: e,
                        tempSkin: null
                    }), D.set("skin", e)
                }
                renderNav() {
                    return V(Ze, {
                        ref: this.refs.navigation,
                        icons: this.props.icons,
                        theme: this.state.theme,
                        dir: this.dir,
                        unfocused: !!this.state.searchResults,
                        position: this.props.navPosition,
                        onClick: this.handleCategoryClick
                    }, this.navKey)
                }
                renderPreview() {
                    const e = this.getEmojiByPos(this.state.pos),
                        t = this.state.searchResults && !this.state.searchResults.length;
                    return V("div", {
                        id: "preview",
                        class: "flex flex-middle",
                        dir: this.dir,
                        "data-position": this.props.previewPosition,
                        children: [V("div", {
                            class: "flex flex-middle flex-grow",
                            children: [V("div", {
                                class: "flex flex-auto flex-middle flex-center",
                                style: {
                                    height: this.props.emojiButtonSize,
                                    fontSize: this.props.emojiButtonSize
                                },
                                children: V(pe, {
                                    emoji: e,
                                    id: t ? this.props.noResultsEmoji || "cry" : this.props.previewEmoji || ("top" == this.props.previewPosition ? "point_down" : "point_up"),
                                    set: this.props.set,
                                    size: this.props.emojiButtonSize,
                                    skin: this.state.tempSkin || this.state.skin,
                                    spritesheet: !0,
                                    getSpritesheetURL: this.props.getSpritesheetURL
                                })
                            }), V("div", {
                                class: `margin-${this.dir[0]}`,
                                children: V("div", e || t ? {
                                    class: `padding-${this.dir[2]} align-${this.dir[0]}`,
                                    children: [V("div", {
                                        class: "preview-title ellipsis",
                                        children: e ? e.name : Y.search_no_results_1
                                    }), V("div", {
                                        class: "preview-subtitle ellipsis color-c",
                                        children: e ? e.skins[0].shortcodes : Y.search_no_results_2
                                    })]
                                } : {
                                    class: "preview-placeholder color-c",
                                    children: Y.pick
                                })
                            })]
                        }), !e && "preview" == this.props.skinTonePosition && this.renderSkinToneButton()]
                    })
                }
                renderEmojiButton(e, {
                    pos: t,
                    posinset: n,
                    grid: o
                }) {
                    const i = this.props.emojiButtonSize,
                        r = this.state.tempSkin || this.state.skin,
                        s = (e.skins[r - 1] || e.skins[0]).native,
                        a = (l = this.state.pos, c = t, Array.isArray(l) && Array.isArray(c) && l.length === c.length && l.every(((e, t) => e == c[t])));
                    var l, c;
                    const d = t.concat(e.id).join("");
                    return V(Qe, {
                        selected: a,
                        skin: r,
                        size: i,
                        children: V("button", {
                            "aria-label": s,
                            "aria-selected": a || void 0,
                            "aria-posinset": n,
                            "aria-setsize": o.setsize,
                            "data-keyboard": this.state.keyboard,
                            title: "none" == this.props.previewPosition ? e.name : void 0,
                            type: "button",
                            class: "flex flex-center flex-middle",
                            tabindex: "-1",
                            onClick: t => this.handleEmojiClick({
                                e: t,
                                emoji: e
                            }),
                            onMouseEnter: () => this.handleEmojiOver(t),
                            onMouseLeave: () => this.handleEmojiOver(),
                            style: {
                                width: this.props.emojiButtonSize,
                                height: this.props.emojiButtonSize,
                                fontSize: this.props.emojiSize,
                                lineHeight: 0
                            },
                            children: [V("div", {
                                "aria-hidden": "true",
                                class: "background",
                                style: {
                                    borderRadius: this.props.emojiButtonRadius,
                                    backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(n - 1) % this.props.emojiButtonColors.length] : void 0
                                }
                            }), V(pe, {
                                emoji: e,
                                set: this.props.set,
                                size: this.props.emojiSize,
                                skin: r,
                                spritesheet: !0,
                                getSpritesheetURL: this.props.getSpritesheetURL
                            })]
                        })
                    }, d)
                }
                renderSearch() {
                    const e = "none" == this.props.previewPosition || "search" == this.props.skinTonePosition;
                    return V("div", {
                        children: [V("div", {
                            class: "spacer"
                        }), V("div", {
                            class: "flex flex-middle",
                            children: [V("div", {
                                class: "search relative flex-grow",
                                children: [V("input", {
                                    type: "search",
                                    ref: this.refs.searchInput,
                                    placeholder: Y.search,
                                    onClick: this.handleSearchClick,
                                    onInput: this.handleSearchInput,
                                    onKeyDown: this.handleSearchKeyDown,
                                    autoComplete: "off"
                                }), V("span", {
                                    class: "icon loupe flex",
                                    children: ue.search.loupe
                                }), this.state.searchResults && V("button", {
                                    title: "Clear",
                                    "aria-label": "Clear",
                                    type: "button",
                                    class: "icon delete flex",
                                    onClick: this.clearSearch,
                                    onMouseDown: this.preventDefault,
                                    children: ue.search.delete
                                })]
                            }), e && this.renderSkinToneButton()]
                        })]
                    })
                }
                renderSearchResults() {
                    const {
                        searchResults: e
                    } = this.state;
                    return e ? V("div", {
                        class: "category",
                        ref: this.refs.search,
                        children: [V("div", {
                            class: `sticky padding-small align-${this.dir[0]}`,
                            children: Y.categories.search
                        }), V("div", {
                            children: e.length ? e.map(((t, n) => V("div", {
                                class: "flex",
                                children: t.map(((t, o) => this.renderEmojiButton(t, {
                                    pos: [n, o],
                                    posinset: n * this.props.perLine + o + 1,
                                    grid: e
                                })))
                            }))) : V("div", {
                                class: `padding-small align-${this.dir[0]}`,
                                children: this.props.onAddCustomEmoji && V("a", {
                                    onClick: this.props.onAddCustomEmoji,
                                    children: Y.add_custom
                                })
                            })
                        })]
                    }) : null
                }
                renderCategories() {
                    const {
                        categories: e
                    } = Z, t = !!this.state.searchResults, n = this.getPerLine();
                    return V("div", {
                        style: {
                            visibility: t ? "hidden" : void 0,
                            display: t ? "none" : void 0,
                            height: "100%"
                        },
                        children: e.map((e => {
                            const {
                                root: t,
                                rows: o
                            } = this.refs.categories.get(e.id);
                            return V("div", {
                                "data-id": e.target ? e.target.id : e.id,
                                class: "category",
                                ref: t,
                                children: [V("div", {
                                    class: `sticky padding-small align-${this.dir[0]}`,
                                    children: e.name || Y.categories[e.id]
                                }), V("div", {
                                    class: "relative",
                                    style: {
                                        height: o.length * this.props.emojiButtonSize
                                    },
                                    children: o.map(((t, o) => {
                                        const i = t.index - t.index % et,
                                            r = this.state.visibleRows[i],
                                            s = "current" in t ? t : void 0;
                                        if (!r && !s) return null;
                                        const a = o * n,
                                            l = a + n,
                                            c = e.emojis.slice(a, l);
                                        return c.length < n && c.push(...new Array(n - c.length)), V("div", {
                                            "data-index": t.index,
                                            ref: s,
                                            class: "flex row",
                                            style: {
                                                top: o * this.props.emojiButtonSize
                                            },
                                            children: r && c.map(((e, n) => {
                                                if (!e) return V("div", {
                                                    style: {
                                                        width: this.props.emojiButtonSize,
                                                        height: this.props.emojiButtonSize
                                                    }
                                                });
                                                const o = le.get(e);
                                                return this.renderEmojiButton(o, {
                                                    pos: [t.index, n],
                                                    posinset: t.posinset + n,
                                                    grid: this.grid
                                                })
                                            }))
                                        }, t.index)
                                    }))
                                })]
                            })
                        }))
                    })
                }
                renderSkinToneButton() {
                    return "none" == this.props.skinTonePosition ? null : V("div", {
                        class: "flex flex-auto flex-center flex-middle",
                        style: {
                            position: "relative",
                            width: this.props.emojiButtonSize,
                            height: this.props.emojiButtonSize
                        },
                        children: V("button", {
                            type: "button",
                            ref: this.refs.skinToneButton,
                            class: "skin-tone-button flex flex-auto flex-center flex-middle",
                            "aria-selected": this.state.showSkins ? "" : void 0,
                            "aria-label": Y.skins.choose,
                            title: Y.skins.choose,
                            onClick: this.openSkins,
                            style: {
                                width: this.props.emojiSize,
                                height: this.props.emojiSize
                            },
                            children: V("span", {
                                class: `skin-tone skin-tone-${this.state.skin}`
                            })
                        })
                    })
                }
                renderLiveRegion() {
                    const e = this.getEmojiByPos(this.state.pos);
                    return V("div", {
                        "aria-live": "polite",
                        class: "sr-only",
                        children: e ? e.name : ""
                    })
                }
                renderSkins() {
                    const e = this.refs.skinToneButton.current.getBoundingClientRect(),
                        t = this.base.getBoundingClientRect(),
                        n = {};
                    return "ltr" == this.dir ? n.right = t.right - e.right - 3 : n.left = e.left - t.left - 3, "bottom" == this.props.previewPosition && "preview" == this.props.skinTonePosition ? n.bottom = t.bottom - e.top + 6 : (n.top = e.bottom - t.top + 3, n.bottom = "auto"), V("div", {
                        ref: this.refs.menu,
                        role: "radiogroup",
                        dir: this.dir,
                        "aria-label": Y.skins.choose,
                        class: "menu hidden",
                        "data-position": n.top ? "top" : "bottom",
                        style: n,
                        children: [...Array(6).keys()].map((e => {
                            const t = e + 1,
                                n = this.state.skin == t;
                            return V("div", {
                                children: [V("input", {
                                    type: "radio",
                                    name: "skin-tone",
                                    value: t,
                                    "aria-label": Y.skins[t],
                                    ref: n ? this.refs.skinToneRadio : null,
                                    defaultChecked: n,
                                    onChange: () => this.handleSkinMouseOver(t),
                                    onKeyDown: e => {
                                        "Enter" != e.code && "Space" != e.code && "Tab" != e.code || (e.preventDefault(), this.handleSkinClick(t))
                                    }
                                }), V("button", {
                                    "aria-hidden": "true",
                                    tabindex: "-1",
                                    onClick: () => this.handleSkinClick(t),
                                    onMouseEnter: () => this.handleSkinMouseOver(t),
                                    onMouseLeave: () => this.handleSkinMouseOver(),
                                    class: "option flex flex-grow flex-middle",
                                    children: [V("span", {
                                        class: `skin-tone skin-tone-${t}`
                                    }), V("span", {
                                        class: "margin-small-lr",
                                        children: Y.skins[t]
                                    })]
                                })]
                            })
                        }))
                    })
                }
                render() {
                    const e = this.props.perLine * this.props.emojiButtonSize;
                    return V("section", {
                        id: "root",
                        class: "flex flex-column",
                        dir: this.dir,
                        style: {
                            width: this.props.dynamicWidth ? "100%" : `calc(${e}px + (var(--padding) + var(--sidebar-width)))`
                        },
                        "data-emoji-set": this.props.set,
                        "data-theme": this.state.theme,
                        "data-menu": this.state.showSkins ? "" : void 0,
                        children: ["top" == this.props.previewPosition && this.renderPreview(), "top" == this.props.navPosition && this.renderNav(), "sticky" == this.props.searchPosition && V("div", {
                            class: "padding-lr",
                            children: this.renderSearch()
                        }), V("div", {
                            ref: this.refs.scroll,
                            class: "scroll flex-grow padding-lr",
                            children: V("div", {
                                style: {
                                    width: this.props.dynamicWidth ? "100%" : e,
                                    height: "100%"
                                },
                                children: ["static" == this.props.searchPosition && this.renderSearch(), this.renderSearchResults(), this.renderCategories()]
                            })
                        }), "bottom" == this.props.navPosition && this.renderNav(), "bottom" == this.props.previewPosition && this.renderPreview(), this.state.showSkins && this.renderSkins(), this.renderLiveRegion()]
                    })
                }
                constructor(e) {
                    super(), i(this, "darkMediaCallback", (() => {
                        "auto" == this.props.theme && this.setState({
                            theme: this.darkMedia.matches ? "dark" : "light"
                        })
                    })), i(this, "handleClickOutside", (e => {
                        const {
                            element: t
                        } = this.props;
                        e.target != t && (this.state.showSkins && this.closeSkins(), this.props.onClickOutside && this.props.onClickOutside(e))
                    })), i(this, "handleBaseClick", (e => {
                        this.state.showSkins && (e.target.closest(".menu") || (e.preventDefault(), e.stopImmediatePropagation(), this.closeSkins()))
                    })), i(this, "handleBaseKeydown", (e => {
                        this.state.showSkins && "Escape" == e.key && (e.preventDefault(), e.stopImmediatePropagation(), this.closeSkins())
                    })), i(this, "handleSearchClick", (() => {
                        this.getEmojiByPos(this.state.pos) && this.setState({
                            pos: [-1, -1]
                        })
                    })), i(this, "handleSearchInput", (async () => {
                        const e = this.refs.searchInput.current;
                        if (!e) return;
                        const {
                            value: t
                        } = e, n = await le.search(t), o = () => {
                            this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0)
                        };
                        if (!n) return this.setState({
                            searchResults: n,
                            pos: [-1, -1]
                        }, o);
                        const i = e.selectionStart == e.value.length ? [0, 0] : [-1, -1],
                            r = [];
                        r.setsize = n.length;
                        let s = null;
                        for (let a of n) r.length && s.length != this.getPerLine() || (s = [], s.__categoryId = "search", s.__index = r.length, r.push(s)), s.push(a);
                        this.ignoreMouse(), this.setState({
                            searchResults: r,
                            pos: i
                        }, o)
                    })), i(this, "handleSearchKeyDown", (e => {
                        const t = e.currentTarget;
                        switch (e.stopImmediatePropagation(), e.key) {
                            case "ArrowLeft":
                                this.navigate({
                                    e: e,
                                    input: t,
                                    left: !0
                                });
                                break;
                            case "ArrowRight":
                                this.navigate({
                                    e: e,
                                    input: t,
                                    right: !0
                                });
                                break;
                            case "ArrowUp":
                                this.navigate({
                                    e: e,
                                    input: t,
                                    up: !0
                                });
                                break;
                            case "ArrowDown":
                                this.navigate({
                                    e: e,
                                    input: t,
                                    down: !0
                                });
                                break;
                            case "Enter":
                                e.preventDefault(), this.handleEmojiClick({
                                    e: e,
                                    pos: this.state.pos
                                });
                                break;
                            case "Escape":
                                e.preventDefault(), this.state.searchResults ? this.clearSearch() : this.unfocusSearch()
                        }
                    })), i(this, "clearSearch", (() => {
                        const e = this.refs.searchInput.current;
                        e && (e.value = "", e.focus(), this.handleSearchInput())
                    })), i(this, "handleCategoryClick", (({
                        category: e,
                        i: t
                    }) => {
                        this.scrollTo(0 == t ? {
                            row: -1
                        } : {
                            categoryId: e.id
                        })
                    })), i(this, "openSkins", (e => {
                        const {
                            currentTarget: t
                        } = e, n = t.getBoundingClientRect();
                        this.setState({
                            showSkins: n
                        }, (async () => {
                            await de(2);
                            const e = this.refs.menu.current;
                            e && (e.classList.remove("hidden"), this.refs.skinToneRadio.current.focus(), this.base.addEventListener("click", this.handleBaseClick, !0), this.base.addEventListener("keydown", this.handleBaseKeydown, !0))
                        }))
                    })), this.observers = [], this.state = {
                        pos: [-1, -1],
                        perLine: this.initDynamicPerLine(e),
                        visibleRows: {
                            0: !0
                        },
                        ...this.getInitialState(e)
                    }
                }
            }
            class nt extends ge {
                async connectedCallback() {
                    const e = re(this.props, J, this);
                    e.element = this, e.ref = e => {
                        this.component = e
                    }, await ie(e), this.disconnected || I(V(tt, { ...e
                    }), this.shadowRoot)
                }
                constructor(e) {
                    super(e, {
                        styles: o(ot)
                    })
                }
            }
            i(nt, "Props", J), "undefined" === typeof customElements || customElements.get("em-emoji-picker") || customElements.define("em-emoji-picker", nt);
            var ot = {};
            ot = ':host {\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;\n  --font-size: 15px;\n  --preview-placeholder-size: 21px;\n  --preview-title-size: 1.1em;\n  --preview-subtitle-size: .9em;\n  --shadow-color: 0deg 0% 0%;\n  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);\n  display: flex;\n}\n\n[data-theme="light"] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme="dark"] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, 0, .2, 1);\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n  position: relative;\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  line-height: normal;\n}\n\n*, :before, :after {\n  box-sizing: border-box;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: none;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-r {\n  margin-right: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.align-l {\n  text-align: left;\n}\n\n.align-r {\n  text-align: right;\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sr-only {\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  top: auto;\n  left: -10000px;\n  overflow: hidden;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n[dir="rtl"] .scroll {\n  padding-left: 0;\n  padding-right: var(--padding);\n}\n\n.scroll {\n  padding-right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  z-index: 1;\n  background-color: rgba(var(--em-rgb-background), .9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  font-weight: 500;\n  position: sticky;\n  top: -1px;\n}\n\n[dir="rtl"] .search input[type="search"] {\n  padding: 10px 2.2em 10px 2em;\n}\n\n[dir="rtl"] .search .loupe {\n  left: auto;\n  right: .7em;\n}\n\n[dir="rtl"] .search .delete {\n  left: .7em;\n  right: auto;\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size)  - 1px);\n}\n\n.search input[type="search"] {\n  width: 100%;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n  border: 0;\n  border-radius: 10px;\n  outline: 0;\n  padding: 10px 2em 10px 2.2em;\n  display: block;\n}\n\n.search input[type="search"]::-ms-input-placeholder {\n  color: inherit;\n  opacity: .6;\n}\n\n.search input[type="search"]::placeholder {\n  color: inherit;\n  opacity: .6;\n}\n\n.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n}\n\n.search input[type="search"]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);\n}\n\n.search .icon {\n  z-index: 1;\n  color: rgba(var(--em-rgb-color), .7);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  pointer-events: none;\n  left: .7em;\n}\n\n.search .delete {\n  right: .7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  background-color: rgba(0, 0, 0, 0);\n  border: 0;\n}\n\n#nav {\n  z-index: 2;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n  position: relative;\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav[dir="rtl"] .bar {\n  left: auto;\n  right: 0;\n}\n\n#nav .bar {\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  transition: transform var(--duration) var(--easing);\n  border-radius: 3px 3px 0 0;\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  padding: calc(var(--padding)  + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n  position: relative;\n}\n\n#preview .preview-placeholder {\n  font-size: var(--preview-placeholder-size);\n}\n\n#preview .preview-title {\n  font-size: var(--preview-title-size);\n}\n\n#preview .preview-subtitle {\n  font-size: var(--preview-subtitle-size);\n}\n\n#nav:before, #preview:before {\n  content: "";\n  height: 2px;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n#nav[data-position="top"]:before, #preview[data-position="top"]:before {\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n  top: 100%;\n}\n\n#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n  bottom: 100%;\n}\n\n.category:last-child {\n  min-height: calc(100% + 1px);\n}\n\n.category button {\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;\n  position: relative;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0s;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.skin-tone-button {\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 100%;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  background-color: var(--em-color-border);\n  border-top-color: rgba(0, 0, 0, .05);\n  border-bottom-color: rgba(0, 0, 0, 0);\n  border-left-width: 0;\n  border-right-width: 0;\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(.9);\n}\n\n.menu {\n  z-index: 2;\n  white-space: nowrap;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), .9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n  border-radius: 10px;\n  padding: 4px;\n  position: absolute;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position="bottom"] {\n  transform-origin: 100% 100%;\n}\n\n.menu[data-position="bottom"].hidden {\n  transform: scale(.9)rotate(-3deg)translateY(5%);\n}\n\n.menu[data-position="top"] {\n  transform-origin: 100% 0;\n}\n\n.menu[data-position="top"].hidden {\n  transform: scale(.9)rotate(3deg)translateY(-5%);\n}\n\n.menu input[type="radio"] {\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n}\n\n.menu input[type="radio"]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  border-radius: 6px;\n  padding: 4px 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: "";\n  mix-blend-mode: overlay;\n  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));\n  border: 1px solid rgba(0, 0, 0, .8);\n  border-radius: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-index] {\n  justify-content: space-between;\n}\n\n[data-emoji-set="twitter"] .skin-tone:after {\n  box-shadow: none;\n  border-color: rgba(0, 0, 0, .5);\n}\n\n[data-emoji-set="twitter"] .skin-tone-1 {\n  background-color: #fade72;\n}\n\n[data-emoji-set="twitter"] .skin-tone-2 {\n  background-color: #f3dfd0;\n}\n\n[data-emoji-set="twitter"] .skin-tone-3 {\n  background-color: #eed3a8;\n}\n\n[data-emoji-set="twitter"] .skin-tone-4 {\n  background-color: #cfad8d;\n}\n\n[data-emoji-set="twitter"] .skin-tone-5 {\n  background-color: #a8805d;\n}\n\n[data-emoji-set="twitter"] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set="google"] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);\n}\n\n[data-emoji-set="google"] .skin-tone-1 {\n  background-color: #f5c748;\n}\n\n[data-emoji-set="google"] .skin-tone-2 {\n  background-color: #f1d5aa;\n}\n\n[data-emoji-set="google"] .skin-tone-3 {\n  background-color: #d4b48d;\n}\n\n[data-emoji-set="google"] .skin-tone-4 {\n  background-color: #aa876b;\n}\n\n[data-emoji-set="google"] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set="google"] .skin-tone-6 {\n  background-color: #61493f;\n}\n\n[data-emoji-set="facebook"] .skin-tone:after {\n  border-color: rgba(0, 0, 0, .4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set="facebook"] .skin-tone-1 {\n  background-color: #f5c748;\n}\n\n[data-emoji-set="facebook"] .skin-tone-2 {\n  background-color: #f1d5aa;\n}\n\n[data-emoji-set="facebook"] .skin-tone-3 {\n  background-color: #d4b48d;\n}\n\n[data-emoji-set="facebook"] .skin-tone-4 {\n  background-color: #aa876b;\n}\n\n[data-emoji-set="facebook"] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set="facebook"] .skin-tone-6 {\n  background-color: #61493f;\n}\n\n'
        }
    }
]);