"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [682], {
        13744: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return J
                }
            });
            var r = n(83946),
                o = n(19013),
                i = n(13882);
            var a = n(96843),
                u = n(49160),
                l = n(60792);

            function s(e) {
                (0, i.Z)(1, arguments);
                var t = (0, o.Z)(e),
                    n = t.getDate();
                return n
            }
            var c = n(43703),
                d = n(30890),
                f = n(77349),
                p = n(84314);

            function v(e, t, n) {
                var a, u, l, s, c, d, v, b;
                (0, i.Z)(2, arguments);
                var m = (0, p.j)(),
                    y = (0, r.Z)(null !== (a = null !== (u = null !== (l = null !== (s = null === n || void 0 === n ? void 0 : n.weekStartsOn) && void 0 !== s ? s : null === n || void 0 === n || null === (c = n.locale) || void 0 === c || null === (d = c.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== l ? l : m.weekStartsOn) && void 0 !== u ? u : null === (v = m.locale) || void 0 === v || null === (b = v.options) || void 0 === b ? void 0 : b.weekStartsOn) && void 0 !== a ? a : 0);
                if (!(y >= 0 && y <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
                var g = (0, o.Z)(e),
                    h = (0, r.Z)(t),
                    x = g.getDay(),
                    O = h % 7,
                    w = (O + 7) % 7,
                    R = 7 - y,
                    S = h < 0 || h > 6 ? h - (x + R) % 7 : (w + R) % 7 - (x + R) % 7;
                return (0, f.Z)(g, S)
            }
            var b = n(20466),
                m = n(11640),
                y = n(63500),
                g = n(584),
                h = n(54559);

            function x(e, t) {
                (0, i.Z)(2, arguments);
                var n = (0, r.Z)(t);
                return (0, y.Z)(e, -n)
            }
            var O, w, R = n(7069),
                S = n(67294);
            (w = O || (O = {})).Month = "month", w.Week = "week", w.Day = "day";
            var I = O,
                T = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                P = function(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                },
                k = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return P(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(e, t) : void 0
                    }
                },
                D = function(e) {
                    return function(e) {
                        if (Array.isArray(e)) return P(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || k(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                };

            function E(e) {
                return D(new Array(e).keys())
            }
            var M = 0,
                Z = new Map;

            function C(e) {
                if (Z.has(e)) {
                    var t = Z.get(e) + 1;
                    Z.set(e, t), M = t
                } else Z.set(e, 1), M = 1;
                return "".concat(e, "-").concat(M)
            }

            function L(e) {
                return function(e, t) {
                    (0, i.Z)(2, arguments);
                    var n = (0, o.Z)(e),
                        a = (0, r.Z)(t);
                    return n.setHours(a), n
                }(function(e, t) {
                    (0, i.Z)(2, arguments);
                    var n = (0, o.Z)(e),
                        a = (0, r.Z)(t);
                    return n.setMinutes(a), n
                }(function(e, t) {
                    (0, i.Z)(2, arguments);
                    var n = (0, o.Z)(e),
                        a = (0, r.Z)(t);
                    return n.setSeconds(a), n
                }(function(e, t) {
                    (0, i.Z)(2, arguments);
                    var n = (0, o.Z)(e),
                        a = (0, r.Z)(t);
                    return n.setMilliseconds(a), n
                }(e, 0), 0), 0), 0)
            }

            function j() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return t.reduce((function(e, t, n) {
                        var r = 0 === n ? e : [e];
                        return t.apply(void 0, D(r))
                    }), n)
                }
            }

            function z(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return j.apply(void 0, n)(e)
            }

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        T(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function F(e, t) {
                return e.map((function(e) {
                    return N(N({}, e), {}, {
                        key: C(t)
                    })
                }))
            }

            function V(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(n), !0).forEach((function(t) {
                        T(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function $(e, t) {
                return function(n) {
                    var r = n.value,
                        c = function(e, t) {
                            return (0, u.Z)(t, e) && (0, l.Z)(t, e)
                        }(t, r),
                        d = function(e, t) {
                            var n = L(e),
                                r = L(t);
                            return (0, a.Z)(n, r)
                        }(e, r),
                        f = function(e) {
                            (0, i.Z)(1, arguments);
                            var t = (0, o.Z)(e).getDay();
                            return 0 === t || 6 === t
                        }(r);
                    return W(W({}, n), {}, {
                        date: s(r),
                        isCurrentMonth: c,
                        isCurrentDate: d,
                        isWeekend: f
                    })
                }
            }

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach((function(t) {
                        T(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Y(e) {
                return function(t) {
                    return Q(Q({}, t), {}, {
                        key: C(e)
                    })
                }
            }
            var _ = function(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }
                }(e, t) || k(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            };

            function G(e, t) {
                var n = t.weekStartsOn,
                    r = function(e) {
                        return {
                            year: e.getFullYear(),
                            month: e.getMonth(),
                            day: e.getDate()
                        }
                    }(e),
                    o = r.year,
                    i = r.month,
                    a = r.day,
                    u = function(e, t) {
                        var n = ((0, c.Z)(e).getDay() - t) % 7;
                        return n < 0 ? n + 7 : n
                    }(e, n),
                    l = function(e, t) {
                        var n = (0, d.Z)(e);
                        return Math.ceil((t + n) / 7)
                    }(e, u),
                    s = E(7).map((function(t) {
                        return {
                            value: v(e, t + n)
                        }
                    }));
                return {
                    cursorDate: e,
                    year: o,
                    month: i,
                    day: a,
                    weekStartsOn: n,
                    startWeekdayInMonth: u,
                    weeksInMonth: l,
                    weekendDays: s,
                    today: {
                        weekIndex: B(a, u),
                        dateIndex: (0, b.Z)(e)
                    },
                    getDateCellByIndex: function(e, t) {
                        return {
                            value: new Date(o, i, 7 * e + t - u + 1)
                        }
                    }
                }
            }

            function B(e, t) {
                return (e + t) % 7 > 0 ? Math.floor((e + t) / 7) : Math.floor((e + t) / 7) - 1
            }

            function K() {
                var e = (0, S.useState)(!1),
                    t = _(e, 2),
                    n = t[0],
                    r = t[1];
                return (0, S.useEffect)((function() {
                    r(!0)
                }), []), n
            }

            function H(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(n), !0).forEach((function(t) {
                        T(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var J = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.defaultDate,
                    n = e.defaultWeekStart,
                    r = void 0 === n ? 0 : n,
                    o = e.defaultViewType,
                    i = void 0 === o ? I.Month : o,
                    a = K(),
                    u = (0, S.useMemo)((function() {
                        return null != t ? new Date(t) : new Date
                    }), [t, a]),
                    l = (0, S.useState)(r),
                    s = _(l, 2),
                    d = s[0],
                    p = s[1],
                    v = (0, S.useState)(u),
                    b = _(v, 2),
                    O = b[0],
                    w = b[1],
                    P = (0, S.useState)(i),
                    k = _(P, 2),
                    D = k[0],
                    M = k[1],
                    Z = G(O, {
                        weekStartsOn: d
                    }),
                    L = Z.weekendDays,
                    j = Z.weeksInMonth,
                    A = Z.today,
                    N = Z.getDateCellByIndex,
                    V = (0, S.useCallback)((function(e) {
                        switch (e) {
                            case I.Month:
                            case I.Week:
                                return {
                                    weekDays: F(L, "weekdays")
                                };
                            case I.Day:
                            default:
                                return {
                                    weekDays: F([{
                                        value: O
                                    }], "weekdays")
                                }
                        }
                    }), [O, L]),
                    W = (0, S.useCallback)((function(e) {
                        return {
                            value: E(e).map((function(e) {
                                return {
                                    key: C("weeks"),
                                    value: E(7).map((function(t) {
                                        return z(N(e, t), $(u, O), Y("days"))
                                    }))
                                }
                            }))
                        }
                    }), [u, O, N]),
                    U = (0, S.useCallback)((function(e) {
                        var t, n, r = W(j),
                            o = A.weekIndex,
                            i = A.dateIndex;
                        return (n = {}, T(n, I.Month, r), T(n, I.Week, {
                            value: [r.value[o]]
                        }), T(n, I.Day, {
                            value: [{
                                key: "week-day-type",
                                value: [null === (t = r.value[o]) || void 0 === t ? void 0 : t.value[i]]
                            }]
                        }), n)[e]
                    }), [W, A, j]),
                    Q = (0, S.useMemo)((function() {
                        switch (D) {
                            case I.Month:
                                return function(e) {
                                    return (0, m.Z)((0, c.Z)(e), 1)
                                };
                            case I.Week:
                                return function(e) {
                                    return (0, y.Z)((0, g.Z)(e, {
                                        weekStartsOn: d
                                    }), 1)
                                };
                            case I.Day:
                                return function(e) {
                                    return (0, f.Z)(e, 1)
                                }
                        }
                    }), [D, d]),
                    B = (0, S.useMemo)((function() {
                        switch (D) {
                            case I.Month:
                                return function(e) {
                                    return (0, h.Z)((0, c.Z)(e), 1)
                                };
                            case I.Week:
                                return function(e) {
                                    return x((0, g.Z)(e, {
                                        weekStartsOn: d
                                    }), 1)
                                };
                            case I.Day:
                                return function(e) {
                                    return (0, R.Z)(e, 1)
                                }
                        }
                    }), [D, d]);
                return (0, S.useMemo)((function() {
                    return q(q({}, Z), {}, {
                        headers: V(D),
                        body: U(D),
                        navigation: {
                            toNext: function() {
                                return w((function(e) {
                                    return Q(e)
                                }))
                            },
                            toPrev: function() {
                                return w((function(e) {
                                    return B(e)
                                }))
                            },
                            setToday: function() {
                                return w(new Date)
                            },
                            setDate: function(e) {
                                return w(e)
                            }
                        },
                        view: {
                            type: D,
                            setViewType: M,
                            setWeekStartsOn: p,
                            isMonthView: D === I.Month,
                            isWeekView: D === I.Week,
                            isDayView: D === I.Day,
                            showMonthView: function() {
                                return M(I.Month)
                            },
                            showWeekView: function() {
                                return M(I.Week)
                            },
                            showDayView: function() {
                                return M(I.Day)
                            }
                        }
                    })
                }), [Z, U, V, Q, B, D])
            }
        },
        20466: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(19013),
                o = n(13882);

            function i(e) {
                (0, o.Z)(1, arguments);
                var t = (0, r.Z)(e),
                    n = t.getDay();
                return n
            }
        },
        96843: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(19013),
                o = n(13882);

            function i(e, t) {
                (0, o.Z)(2, arguments);
                var n = (0, r.Z)(e),
                    i = (0, r.Z)(t);
                return n.getTime() === i.getTime()
            }
        },
        54559: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(83946),
                o = n(11640),
                i = n(13882);

            function a(e, t) {
                (0, i.Z)(2, arguments);
                var n = (0, r.Z)(t);
                return (0, o.Z)(e, -n)
            }
        },
        39516: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return f
                },
                f: function() {
                    return d
                }
            });
            var r = n(67294),
                o = n(19946),
                i = n(35748),
                a = n(16723),
                u = n(23784),
                l = n(73781);
            let s = (0, r.createContext)(null);

            function c() {
                let e = (0, r.useContext)(s);
                if (null === e) {
                    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, c), e
                }
                return e
            }

            function d() {
                let [e, t] = (0, r.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)((() => function(e) {
                    let n = (0, l.z)((e => (t((t => [...t, e])), () => t((t => {
                            let n = t.slice(),
                                r = n.indexOf(e);
                            return -1 !== r && n.splice(r, 1), n
                        }))))),
                        o = (0, r.useMemo)((() => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        })), [n, e.slot, e.name, e.props]);
                    return r.createElement(s.Provider, {
                        value: o
                    }, e.children)
                }), [t])]
            }
            let f = (0, i.yV)((function(e, t) {
                let n = (0, o.M)(),
                    {
                        id: r = `headlessui-description-${n}`,
                        ...l
                    } = e,
                    s = c(),
                    d = (0, u.T)(t);
                (0, a.e)((() => s.register(r)), [r, s.register]);
                let f = {
                    ref: d,
                    ...s.props,
                    id: r
                };
                return (0, i.sY)({
                    ourProps: f,
                    theirProps: l,
                    slot: s.slot || {},
                    defaultTag: "p",
                    name: s.name || "Description"
                })
            }))
        },
        95389: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return f
                },
                b: function() {
                    return d
                }
            });
            var r = n(67294),
                o = n(19946),
                i = n(35748),
                a = n(16723),
                u = n(23784),
                l = n(73781);
            let s = (0, r.createContext)(null);

            function c() {
                let e = (0, r.useContext)(s);
                if (null === e) {
                    let e = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, c), e
                }
                return e
            }

            function d() {
                let [e, t] = (0, r.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)((() => function(e) {
                    let n = (0, l.z)((e => (t((t => [...t, e])), () => t((t => {
                            let n = t.slice(),
                                r = n.indexOf(e);
                            return -1 !== r && n.splice(r, 1), n
                        }))))),
                        o = (0, r.useMemo)((() => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        })), [n, e.slot, e.name, e.props]);
                    return r.createElement(s.Provider, {
                        value: o
                    }, e.children)
                }), [t])]
            }
            let f = (0, i.yV)((function(e, t) {
                let n = (0, o.M)(),
                    {
                        id: r = `headlessui-label-${n}`,
                        passive: l = !1,
                        ...s
                    } = e,
                    d = c(),
                    f = (0, u.T)(t);
                (0, a.e)((() => d.register(r)), [r, d.register]);
                let p = {
                    ref: f,
                    ...d.props,
                    id: r
                };
                return l && ("onClick" in p && delete p.onClick, "onClick" in s && delete s.onClick), (0, i.sY)({
                    ourProps: p,
                    theirProps: s,
                    slot: d.slot || {},
                    defaultTag: "label",
                    name: d.name || "Label"
                })
            }))
        },
        64729: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return _
                }
            });
            var r, o, i = n(67294),
                a = n(94192),
                u = n(19946),
                l = n(16723),
                s = n(71646),
                c = n(23784),
                d = n(35748),
                f = n(32984),
                p = n(9362),
                v = n(61363),
                b = n(11497),
                m = n(64103),
                y = n(84575),
                g = n(16567),
                h = n(14157),
                x = n(39650),
                O = n(46045),
                w = n(18689),
                R = n(15466),
                S = n(73781),
                I = n(31147),
                T = n(3855),
                P = n(40476),
                k = ((o = k || {})[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o),
                D = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(D || {}),
                E = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(E || {}),
                M = ((r = M || {})[r.OpenListbox = 0] = "OpenListbox", r[r.CloseListbox = 1] = "CloseListbox", r[r.GoToOption = 2] = "GoToOption", r[r.Search = 3] = "Search", r[r.ClearSearch = 4] = "ClearSearch", r[r.RegisterOption = 5] = "RegisterOption", r[r.UnregisterOption = 6] = "UnregisterOption", r[r.RegisterLabel = 7] = "RegisterLabel", r);

            function Z(e, t = (e => e)) {
                let n = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
                    r = (0, y.z2)(t(e.options.slice()), (e => e.dataRef.current.domRef.current)),
                    o = n ? r.indexOf(n) : null;
                return -1 === o && (o = null), {
                    options: r,
                    activeOptionIndex: o
                }
            }
            let C = {
                    1: e => e.dataRef.current.disabled || 1 === e.listboxState ? e : { ...e,
                        activeOptionIndex: null,
                        listboxState: 1
                    },
                    0(e) {
                        if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
                        let t = e.activeOptionIndex,
                            {
                                isSelected: n
                            } = e.dataRef.current,
                            r = e.options.findIndex((e => n(e.dataRef.current.value)));
                        return -1 !== r && (t = r), { ...e,
                            listboxState: 0,
                            activeOptionIndex: t
                        }
                    },
                    2(e, t) {
                        var n;
                        if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
                        let r = Z(e),
                            o = (0, b.d)(t, {
                                resolveItems: () => r.options,
                                resolveActiveIndex: () => r.activeOptionIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...r,
                            searchQuery: "",
                            activeOptionIndex: o,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            o = (null !== e.activeOptionIndex ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((e => {
                                var t;
                                return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r))
                            })),
                            i = o ? e.options.indexOf(o) : -1;
                        return -1 === i || i === e.activeOptionIndex ? { ...e,
                            searchQuery: r
                        } : { ...e,
                            searchQuery: r,
                            activeOptionIndex: i,
                            activationTrigger: 1
                        }
                    },
                    4: e => e.dataRef.current.disabled || 1 === e.listboxState || "" === e.searchQuery ? e : { ...e,
                        searchQuery: ""
                    },
                    5: (e, t) => {
                        let n = {
                                id: t.id,
                                dataRef: t.dataRef
                            },
                            r = Z(e, (e => [...e, n]));
                        return null === e.activeOptionIndex && e.dataRef.current.isSelected(t.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(n)), { ...e,
                            ...r
                        }
                    },
                    6: (e, t) => {
                        let n = Z(e, (e => {
                            let n = e.findIndex((e => e.id === t.id));
                            return -1 !== n && e.splice(n, 1), e
                        }));
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    },
                    7: (e, t) => ({ ...e,
                        labelId: t.id
                    })
                },
                L = (0, i.createContext)(null);

            function j(e) {
                let t = (0, i.useContext)(L);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, j), t
                }
                return t
            }
            L.displayName = "ListboxActionsContext";
            let z = (0, i.createContext)(null);

            function A(e) {
                let t = (0, i.useContext)(z);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, A), t
                }
                return t
            }

            function N(e, t) {
                return (0, f.E)(t.type, C, e, t)
            }
            z.displayName = "ListboxDataContext";
            let F = i.Fragment,
                V = (0, d.yV)((function(e, t) {
                    let {
                        value: n,
                        defaultValue: r,
                        name: o,
                        onChange: u,
                        by: s = ((e, t) => e === t),
                        disabled: p = !1,
                        horizontal: v = !1,
                        multiple: m = !1,
                        ...h
                    } = e;
                    const R = v ? "horizontal" : "vertical";
                    let T = (0, c.T)(t),
                        [P = (m ? [] : void 0), k] = (0, I.q)(n, u, r),
                        [D, E] = (0, i.useReducer)(N, {
                            dataRef: (0, i.createRef)(),
                            listboxState: 1,
                            options: [],
                            searchQuery: "",
                            labelId: null,
                            activeOptionIndex: null,
                            activationTrigger: 1
                        }),
                        M = (0, i.useRef)({
                            static: !1,
                            hold: !1
                        }),
                        Z = (0, i.useRef)(null),
                        C = (0, i.useRef)(null),
                        j = (0, i.useRef)(null),
                        A = (0, S.z)("string" == typeof s ? (e, t) => {
                            let n = s;
                            return (null == e ? void 0 : e[n]) === (null == t ? void 0 : t[n])
                        } : s),
                        V = (0, i.useCallback)((e => (0, f.E)(W.mode, {
                            1: () => P.some((t => A(t, e))),
                            0: () => A(P, e)
                        })), [P]),
                        W = (0, i.useMemo)((() => ({ ...D,
                            value: P,
                            disabled: p,
                            mode: m ? 1 : 0,
                            orientation: R,
                            compare: A,
                            isSelected: V,
                            optionsPropsRef: M,
                            labelRef: Z,
                            buttonRef: C,
                            optionsRef: j
                        })), [P, p, m, D]);
                    (0, l.e)((() => {
                        D.dataRef.current = W
                    }), [W]), (0, x.O)([W.buttonRef, W.optionsRef], ((e, t) => {
                        var n;
                        E({
                            type: 1
                        }), (0, y.sP)(t, y.tJ.Loose) || (e.preventDefault(), null == (n = W.buttonRef.current) || n.focus())
                    }), 0 === W.listboxState);
                    let $ = (0, i.useMemo)((() => ({
                            open: 0 === W.listboxState,
                            disabled: p,
                            value: P
                        })), [W, p, P]),
                        U = (0, S.z)((e => {
                            let t = W.options.find((t => t.id === e));
                            !t || H(t.dataRef.current.value)
                        })),
                        Q = (0, S.z)((() => {
                            if (null !== W.activeOptionIndex) {
                                let {
                                    dataRef: e,
                                    id: t
                                } = W.options[W.activeOptionIndex];
                                H(e.current.value), E({
                                    type: 2,
                                    focus: b.T.Specific,
                                    id: t
                                })
                            }
                        })),
                        Y = (0, S.z)((() => E({
                            type: 0
                        }))),
                        _ = (0, S.z)((() => E({
                            type: 1
                        }))),
                        G = (0, S.z)(((e, t, n) => e === b.T.Specific ? E({
                            type: 2,
                            focus: b.T.Specific,
                            id: t,
                            trigger: n
                        }) : E({
                            type: 2,
                            focus: e,
                            trigger: n
                        }))),
                        B = (0, S.z)(((e, t) => (E({
                            type: 5,
                            id: e,
                            dataRef: t
                        }), () => E({
                            type: 6,
                            id: e
                        })))),
                        K = (0, S.z)((e => (E({
                            type: 7,
                            id: e
                        }), () => E({
                            type: 7,
                            id: null
                        })))),
                        H = (0, S.z)((e => (0, f.E)(W.mode, {
                            0: () => null == k ? void 0 : k(e),
                            1() {
                                let t = W.value.slice(),
                                    n = t.findIndex((t => A(t, e)));
                                return -1 === n ? t.push(e) : t.splice(n, 1), null == k ? void 0 : k(t)
                            }
                        }))),
                        q = (0, S.z)((e => E({
                            type: 3,
                            value: e
                        }))),
                        J = (0, S.z)((() => E({
                            type: 4
                        }))),
                        X = (0, i.useMemo)((() => ({
                            onChange: H,
                            registerOption: B,
                            registerLabel: K,
                            goToOption: G,
                            closeListbox: _,
                            openListbox: Y,
                            selectActiveOption: Q,
                            selectOption: U,
                            search: q,
                            clearSearch: J
                        })), []),
                        ee = {
                            ref: T
                        },
                        te = (0, i.useRef)(null),
                        ne = (0, a.G)();
                    return (0, i.useEffect)((() => {
                        !te.current || void 0 !== r && ne.addEventListener(te.current, "reset", (() => {
                            H(r)
                        }))
                    }), [te, H]), i.createElement(L.Provider, {
                        value: X
                    }, i.createElement(z.Provider, {
                        value: W
                    }, i.createElement(g.up, {
                        value: (0, f.E)(W.listboxState, {
                            0: g.ZM.Open,
                            1: g.ZM.Closed
                        })
                    }, null != o && null != P && (0, w.t)({
                        [o]: P
                    }).map((([e, t], n) => i.createElement(O._, {
                        features: O.A.Hidden,
                        ref: 0 === n ? e => {
                            var t;
                            te.current = null != (t = null == e ? void 0 : e.closest("form")) ? t : null
                        } : void 0,
                        ...(0, d.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            name: e,
                            value: t
                        })
                    }))), (0, d.sY)({
                        ourProps: ee,
                        theirProps: h,
                        slot: $,
                        defaultTag: F,
                        name: "Listbox"
                    }))))
                })),
                W = (0, d.yV)((function(e, t) {
                    var n;
                    let r = (0, u.M)(),
                        {
                            id: o = `headlessui-listbox-button-${r}`,
                            ...l
                        } = e,
                        f = A("Listbox.Button"),
                        p = j("Listbox.Button"),
                        y = (0, c.T)(f.buttonRef, t),
                        g = (0, a.G)(),
                        x = (0, S.z)((e => {
                            switch (e.key) {
                                case v.R.Space:
                                case v.R.Enter:
                                case v.R.ArrowDown:
                                    e.preventDefault(), p.openListbox(), g.nextFrame((() => {
                                        f.value || p.goToOption(b.T.First)
                                    }));
                                    break;
                                case v.R.ArrowUp:
                                    e.preventDefault(), p.openListbox(), g.nextFrame((() => {
                                        f.value || p.goToOption(b.T.Last)
                                    }))
                            }
                        })),
                        O = (0, S.z)((e => {
                            if (e.key === v.R.Space) e.preventDefault()
                        })),
                        w = (0, S.z)((e => {
                            if ((0, m.P)(e.currentTarget)) return e.preventDefault();
                            0 === f.listboxState ? (p.closeListbox(), g.nextFrame((() => {
                                var e;
                                return null == (e = f.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }))) : (e.preventDefault(), p.openListbox())
                        })),
                        R = (0, s.v)((() => {
                            if (f.labelId) return [f.labelId, o].join(" ")
                        }), [f.labelId, o]),
                        I = (0, i.useMemo)((() => ({
                            open: 0 === f.listboxState,
                            disabled: f.disabled,
                            value: f.value
                        })), [f]),
                        T = {
                            ref: y,
                            id: o,
                            type: (0, h.f)(e, f.buttonRef),
                            "aria-haspopup": !0,
                            "aria-controls": null == (n = f.optionsRef.current) ? void 0 : n.id,
                            "aria-expanded": f.disabled ? void 0 : 0 === f.listboxState,
                            "aria-labelledby": R,
                            disabled: f.disabled,
                            onKeyDown: x,
                            onKeyUp: O,
                            onClick: w
                        };
                    return (0, d.sY)({
                        ourProps: T,
                        theirProps: l,
                        slot: I,
                        defaultTag: "button",
                        name: "Listbox.Button"
                    })
                })),
                $ = (0, d.yV)((function(e, t) {
                    let n = (0, u.M)(),
                        {
                            id: r = `headlessui-listbox-label-${n}`,
                            ...o
                        } = e,
                        a = A("Listbox.Label"),
                        s = j("Listbox.Label"),
                        f = (0, c.T)(a.labelRef, t);
                    (0, l.e)((() => s.registerLabel(r)), [r]);
                    let p = (0, S.z)((() => {
                            var e;
                            return null == (e = a.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        })),
                        v = (0, i.useMemo)((() => ({
                            open: 0 === a.listboxState,
                            disabled: a.disabled
                        })), [a]);
                    return (0, d.sY)({
                        ourProps: {
                            ref: f,
                            id: r,
                            onClick: p
                        },
                        theirProps: o,
                        slot: v,
                        defaultTag: "label",
                        name: "Listbox.Label"
                    })
                })),
                U = d.AN.RenderStrategy | d.AN.Static,
                Q = (0, d.yV)((function(e, t) {
                    var n;
                    let r = (0, u.M)(),
                        {
                            id: o = `headlessui-listbox-options-${r}`,
                            ...l
                        } = e,
                        m = A("Listbox.Options"),
                        y = j("Listbox.Options"),
                        h = (0, c.T)(m.optionsRef, t),
                        x = (0, a.G)(),
                        O = (0, a.G)(),
                        w = (0, g.oJ)(),
                        I = null !== w ? w === g.ZM.Open : 0 === m.listboxState;
                    (0, i.useEffect)((() => {
                        var e;
                        let t = m.optionsRef.current;
                        !t || 0 === m.listboxState && t !== (null == (e = (0, R.r)(t)) ? void 0 : e.activeElement) && t.focus({
                            preventScroll: !0
                        })
                    }), [m.listboxState, m.optionsRef]);
                    let T = (0, S.z)((e => {
                            switch (O.dispose(), e.key) {
                                case v.R.Space:
                                    if ("" !== m.searchQuery) return e.preventDefault(), e.stopPropagation(), y.search(e.key);
                                case v.R.Enter:
                                    if (e.preventDefault(), e.stopPropagation(), null !== m.activeOptionIndex) {
                                        let {
                                            dataRef: e
                                        } = m.options[m.activeOptionIndex];
                                        y.onChange(e.current.value)
                                    }
                                    0 === m.mode && (y.closeListbox(), (0, p.k)().nextFrame((() => {
                                        var e;
                                        return null == (e = m.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    })));
                                    break;
                                case (0, f.E)(m.orientation, {
                                    vertical: v.R.ArrowDown,
                                    horizontal: v.R.ArrowRight
                                }):
                                    return e.preventDefault(), e.stopPropagation(), y.goToOption(b.T.Next);
                                case (0, f.E)(m.orientation, {
                                    vertical: v.R.ArrowUp,
                                    horizontal: v.R.ArrowLeft
                                }):
                                    return e.preventDefault(), e.stopPropagation(), y.goToOption(b.T.Previous);
                                case v.R.Home:
                                case v.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), y.goToOption(b.T.First);
                                case v.R.End:
                                case v.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), y.goToOption(b.T.Last);
                                case v.R.Escape:
                                    return e.preventDefault(), e.stopPropagation(), y.closeListbox(), x.nextFrame((() => {
                                        var e;
                                        return null == (e = m.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                case v.R.Tab:
                                    e.preventDefault(), e.stopPropagation();
                                    break;
                                default:
                                    1 === e.key.length && (y.search(e.key), O.setTimeout((() => y.clearSearch()), 350))
                            }
                        })),
                        P = (0, s.v)((() => {
                            var e, t, n;
                            return null != (n = null == (e = m.labelRef.current) ? void 0 : e.id) ? n : null == (t = m.buttonRef.current) ? void 0 : t.id
                        }), [m.labelRef.current, m.buttonRef.current]),
                        k = (0, i.useMemo)((() => ({
                            open: 0 === m.listboxState
                        })), [m]),
                        D = {
                            "aria-activedescendant": null === m.activeOptionIndex || null == (n = m.options[m.activeOptionIndex]) ? void 0 : n.id,
                            "aria-multiselectable": 1 === m.mode || void 0,
                            "aria-labelledby": P,
                            "aria-orientation": m.orientation,
                            id: o,
                            onKeyDown: T,
                            role: "listbox",
                            tabIndex: 0,
                            ref: h
                        };
                    return (0, d.sY)({
                        ourProps: D,
                        theirProps: l,
                        slot: k,
                        defaultTag: "ul",
                        features: U,
                        visible: I,
                        name: "Listbox.Options"
                    })
                })),
                Y = (0, d.yV)((function(e, t) {
                    let n = (0, u.M)(),
                        {
                            id: r = `headlessui-listbox-option-${n}`,
                            disabled: o = !1,
                            value: a,
                            ...s
                        } = e,
                        f = A("Listbox.Option"),
                        v = j("Listbox.Option"),
                        m = null !== f.activeOptionIndex && f.options[f.activeOptionIndex].id === r,
                        y = f.isSelected(a),
                        g = (0, i.useRef)(null),
                        h = (0, T.E)({
                            disabled: o,
                            value: a,
                            domRef: g,
                            get textValue() {
                                var e, t;
                                return null == (t = null == (e = g.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                            }
                        }),
                        x = (0, c.T)(t, g);
                    (0, l.e)((() => {
                        if (0 !== f.listboxState || !m || 0 === f.activationTrigger) return;
                        let e = (0, p.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = g.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [g, m, f.listboxState, f.activationTrigger, f.activeOptionIndex]), (0, l.e)((() => v.registerOption(r, h)), [h, r]);
                    let O = (0, S.z)((e => {
                            if (o) return e.preventDefault();
                            v.onChange(a), 0 === f.mode && (v.closeListbox(), (0, p.k)().nextFrame((() => {
                                var e;
                                return null == (e = f.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            })))
                        })),
                        w = (0, S.z)((() => {
                            if (o) return v.goToOption(b.T.Nothing);
                            v.goToOption(b.T.Specific, r)
                        })),
                        R = (0, P.g)(),
                        I = (0, S.z)((e => R.update(e))),
                        k = (0, S.z)((e => {
                            !R.wasMoved(e) || o || m || v.goToOption(b.T.Specific, r, 0)
                        })),
                        D = (0, S.z)((e => {
                            !R.wasMoved(e) || o || !m || v.goToOption(b.T.Nothing)
                        })),
                        E = (0, i.useMemo)((() => ({
                            active: m,
                            selected: y,
                            disabled: o
                        })), [m, y, o]);
                    return (0, d.sY)({
                        ourProps: {
                            id: r,
                            ref: x,
                            role: "option",
                            tabIndex: !0 === o ? void 0 : -1,
                            "aria-disabled": !0 === o || void 0,
                            "aria-selected": y,
                            disabled: void 0,
                            onClick: O,
                            onFocus: w,
                            onPointerEnter: I,
                            onMouseEnter: I,
                            onPointerMove: k,
                            onMouseMove: k,
                            onPointerLeave: D,
                            onMouseLeave: D
                        },
                        theirProps: s,
                        slot: E,
                        defaultTag: "li",
                        name: "Listbox.Option"
                    })
                })),
                _ = Object.assign(V, {
                    Button: W,
                    Label: $,
                    Options: Q,
                    Option: Y
                })
        },
        72510: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return F
                }
            });
            var r, o, i = n(67294),
                a = n(32984),
                u = n(35748),
                l = n(9362),
                s = n(94192),
                c = n(16723),
                d = n(23784),
                f = n(19946),
                p = n(61363),
                v = n(11497),
                b = n(64103),
                m = n(84575),
                y = n(39650),
                g = n(31591),
                h = n(16567),
                x = n(14157),
                O = n(51074),
                w = n(73781),
                R = n(40476),
                S = ((o = S || {})[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o),
                I = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(I || {}),
                T = ((r = T || {})[r.OpenMenu = 0] = "OpenMenu", r[r.CloseMenu = 1] = "CloseMenu", r[r.GoToItem = 2] = "GoToItem", r[r.Search = 3] = "Search", r[r.ClearSearch = 4] = "ClearSearch", r[r.RegisterItem = 5] = "RegisterItem", r[r.UnregisterItem = 6] = "UnregisterItem", r);

            function P(e, t = (e => e)) {
                let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    r = (0, m.z2)(t(e.items.slice()), (e => e.dataRef.current.domRef.current)),
                    o = n ? r.indexOf(n) : null;
                return -1 === o && (o = null), {
                    items: r,
                    activeItemIndex: o
                }
            }
            let k = {
                    1: e => 1 === e.menuState ? e : { ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : { ...e,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var n;
                        let r = P(e),
                            o = (0, v.d)(t, {
                                resolveItems: () => r.items,
                                resolveActiveIndex: () => r.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...r,
                            searchQuery: "",
                            activeItemIndex: o,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            o = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                            })),
                            i = o ? e.items.indexOf(o) : -1;
                        return -1 === i || i === e.activeItemIndex ? { ...e,
                            searchQuery: r
                        } : { ...e,
                            searchQuery: r,
                            activeItemIndex: i,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : { ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let n = P(e, (e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]));
                        return { ...e,
                            ...n
                        }
                    },
                    6: (e, t) => {
                        let n = P(e, (e => {
                            let n = e.findIndex((e => e.id === t.id));
                            return -1 !== n && e.splice(n, 1), e
                        }));
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    }
                },
                D = (0, i.createContext)(null);

            function E(e) {
                let t = (0, i.useContext)(D);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, E), t
                }
                return t
            }

            function M(e, t) {
                return (0, a.E)(t.type, k, e, t)
            }
            D.displayName = "MenuContext";
            let Z = i.Fragment,
                C = (0, u.yV)((function(e, t) {
                    let n = (0, i.useReducer)(M, {
                            menuState: 1,
                            buttonRef: (0, i.createRef)(),
                            itemsRef: (0, i.createRef)(),
                            items: [],
                            searchQuery: "",
                            activeItemIndex: null,
                            activationTrigger: 1
                        }),
                        [{
                            menuState: r,
                            itemsRef: o,
                            buttonRef: l
                        }, s] = n,
                        c = (0, d.T)(t);
                    (0, y.O)([l, o], ((e, t) => {
                        var n;
                        s({
                            type: 1
                        }), (0, m.sP)(t, m.tJ.Loose) || (e.preventDefault(), null == (n = l.current) || n.focus())
                    }), 0 === r);
                    let f = (0, w.z)((() => {
                            s({
                                type: 1
                            })
                        })),
                        p = (0, i.useMemo)((() => ({
                            open: 0 === r,
                            close: f
                        })), [r, f]),
                        v = e,
                        b = {
                            ref: c
                        };
                    return i.createElement(D.Provider, {
                        value: n
                    }, i.createElement(h.up, {
                        value: (0, a.E)(r, {
                            0: h.ZM.Open,
                            1: h.ZM.Closed
                        })
                    }, (0, u.sY)({
                        ourProps: b,
                        theirProps: v,
                        slot: p,
                        defaultTag: Z,
                        name: "Menu"
                    })))
                })),
                L = (0, u.yV)((function(e, t) {
                    var n;
                    let r = (0, f.M)(),
                        {
                            id: o = `headlessui-menu-button-${r}`,
                            ...a
                        } = e,
                        [l, c] = E("Menu.Button"),
                        m = (0, d.T)(l.buttonRef, t),
                        y = (0, s.G)(),
                        g = (0, w.z)((e => {
                            switch (e.key) {
                                case p.R.Space:
                                case p.R.Enter:
                                case p.R.ArrowDown:
                                    e.preventDefault(), e.stopPropagation(), c({
                                        type: 0
                                    }), y.nextFrame((() => c({
                                        type: 2,
                                        focus: v.T.First
                                    })));
                                    break;
                                case p.R.ArrowUp:
                                    e.preventDefault(), e.stopPropagation(), c({
                                        type: 0
                                    }), y.nextFrame((() => c({
                                        type: 2,
                                        focus: v.T.Last
                                    })))
                            }
                        })),
                        h = (0, w.z)((e => {
                            if (e.key === p.R.Space) e.preventDefault()
                        })),
                        O = (0, w.z)((t => {
                            if ((0, b.P)(t.currentTarget)) return t.preventDefault();
                            e.disabled || (0 === l.menuState ? (c({
                                type: 1
                            }), y.nextFrame((() => {
                                var e;
                                return null == (e = l.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }))) : (t.preventDefault(), c({
                                type: 0
                            })))
                        })),
                        R = (0, i.useMemo)((() => ({
                            open: 0 === l.menuState
                        })), [l]),
                        S = {
                            ref: m,
                            id: o,
                            type: (0, x.f)(e, l.buttonRef),
                            "aria-haspopup": !0,
                            "aria-controls": null == (n = l.itemsRef.current) ? void 0 : n.id,
                            "aria-expanded": e.disabled ? void 0 : 0 === l.menuState,
                            onKeyDown: g,
                            onKeyUp: h,
                            onClick: O
                        };
                    return (0, u.sY)({
                        ourProps: S,
                        theirProps: a,
                        slot: R,
                        defaultTag: "button",
                        name: "Menu.Button"
                    })
                })),
                j = u.AN.RenderStrategy | u.AN.Static,
                z = (0, u.yV)((function(e, t) {
                    var n, r;
                    let o = (0, f.M)(),
                        {
                            id: a = `headlessui-menu-items-${o}`,
                            ...c
                        } = e,
                        [b, y] = E("Menu.Items"),
                        x = (0, d.T)(b.itemsRef, t),
                        R = (0, O.i)(b.itemsRef),
                        S = (0, s.G)(),
                        I = (0, h.oJ)(),
                        T = null !== I ? I === h.ZM.Open : 0 === b.menuState;
                    (0, i.useEffect)((() => {
                        let e = b.itemsRef.current;
                        !e || 0 === b.menuState && e !== (null == R ? void 0 : R.activeElement) && e.focus({
                            preventScroll: !0
                        })
                    }), [b.menuState, b.itemsRef, R]), (0, g.B)({
                        container: b.itemsRef.current,
                        enabled: 0 === b.menuState,
                        accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                        walk(e) {
                            e.setAttribute("role", "none")
                        }
                    });
                    let P = (0, w.z)((e => {
                            var t, n;
                            switch (S.dispose(), e.key) {
                                case p.R.Space:
                                    if ("" !== b.searchQuery) return e.preventDefault(), e.stopPropagation(), y({
                                        type: 3,
                                        value: e.key
                                    });
                                case p.R.Enter:
                                    if (e.preventDefault(), e.stopPropagation(), y({
                                            type: 1
                                        }), null !== b.activeItemIndex) {
                                        let {
                                            dataRef: e
                                        } = b.items[b.activeItemIndex];
                                        null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                                    }(0, m.wI)(b.buttonRef.current);
                                    break;
                                case p.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), y({
                                        type: 2,
                                        focus: v.T.Next
                                    });
                                case p.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), y({
                                        type: 2,
                                        focus: v.T.Previous
                                    });
                                case p.R.Home:
                                case p.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), y({
                                        type: 2,
                                        focus: v.T.First
                                    });
                                case p.R.End:
                                case p.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), y({
                                        type: 2,
                                        focus: v.T.Last
                                    });
                                case p.R.Escape:
                                    e.preventDefault(), e.stopPropagation(), y({
                                        type: 1
                                    }), (0, l.k)().nextFrame((() => {
                                        var e;
                                        return null == (e = b.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                    break;
                                case p.R.Tab:
                                    e.preventDefault(), e.stopPropagation(), y({
                                        type: 1
                                    }), (0, l.k)().nextFrame((() => {
                                        (0, m.EO)(b.buttonRef.current, e.shiftKey ? m.TO.Previous : m.TO.Next)
                                    }));
                                    break;
                                default:
                                    1 === e.key.length && (y({
                                        type: 3,
                                        value: e.key
                                    }), S.setTimeout((() => y({
                                        type: 4
                                    })), 350))
                            }
                        })),
                        k = (0, w.z)((e => {
                            if (e.key === p.R.Space) e.preventDefault()
                        })),
                        D = (0, i.useMemo)((() => ({
                            open: 0 === b.menuState
                        })), [b]),
                        M = {
                            "aria-activedescendant": null === b.activeItemIndex || null == (n = b.items[b.activeItemIndex]) ? void 0 : n.id,
                            "aria-labelledby": null == (r = b.buttonRef.current) ? void 0 : r.id,
                            id: a,
                            onKeyDown: P,
                            onKeyUp: k,
                            role: "menu",
                            tabIndex: 0,
                            ref: x
                        };
                    return (0, u.sY)({
                        ourProps: M,
                        theirProps: c,
                        slot: D,
                        defaultTag: "div",
                        features: j,
                        visible: T,
                        name: "Menu.Items"
                    })
                })),
                A = i.Fragment,
                N = (0, u.yV)((function(e, t) {
                    let n = (0, f.M)(),
                        {
                            id: r = `headlessui-menu-item-${n}`,
                            disabled: o = !1,
                            ...a
                        } = e,
                        [s, p] = E("Menu.Item"),
                        b = null !== s.activeItemIndex && s.items[s.activeItemIndex].id === r,
                        y = (0, i.useRef)(null),
                        g = (0, d.T)(t, y);
                    (0, c.e)((() => {
                        if (0 !== s.menuState || !b || 0 === s.activationTrigger) return;
                        let e = (0, l.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = y.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [y, b, s.menuState, s.activationTrigger, s.activeItemIndex]);
                    let h = (0, i.useRef)({
                        disabled: o,
                        domRef: y
                    });
                    (0, c.e)((() => {
                        h.current.disabled = o
                    }), [h, o]), (0, c.e)((() => {
                        var e, t;
                        h.current.textValue = null == (t = null == (e = y.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                    }), [h, y]), (0, c.e)((() => (p({
                        type: 5,
                        id: r,
                        dataRef: h
                    }), () => p({
                        type: 6,
                        id: r
                    }))), [h, r]);
                    let x = (0, w.z)((() => {
                            p({
                                type: 1
                            })
                        })),
                        O = (0, w.z)((e => {
                            if (o) return e.preventDefault();
                            p({
                                type: 1
                            }), (0, m.wI)(s.buttonRef.current)
                        })),
                        S = (0, w.z)((() => {
                            if (o) return p({
                                type: 2,
                                focus: v.T.Nothing
                            });
                            p({
                                type: 2,
                                focus: v.T.Specific,
                                id: r
                            })
                        })),
                        I = (0, R.g)(),
                        T = (0, w.z)((e => I.update(e))),
                        P = (0, w.z)((e => {
                            !I.wasMoved(e) || o || b || p({
                                type: 2,
                                focus: v.T.Specific,
                                id: r,
                                trigger: 0
                            })
                        })),
                        k = (0, w.z)((e => {
                            !I.wasMoved(e) || o || !b || p({
                                type: 2,
                                focus: v.T.Nothing
                            })
                        })),
                        D = (0, i.useMemo)((() => ({
                            active: b,
                            disabled: o,
                            close: x
                        })), [b, o, x]);
                    return (0, u.sY)({
                        ourProps: {
                            id: r,
                            ref: g,
                            role: "menuitem",
                            tabIndex: !0 === o ? void 0 : -1,
                            "aria-disabled": !0 === o || void 0,
                            disabled: void 0,
                            onClick: O,
                            onFocus: S,
                            onPointerEnter: T,
                            onMouseEnter: T,
                            onPointerMove: P,
                            onMouseMove: P,
                            onPointerLeave: k,
                            onMouseLeave: k
                        },
                        theirProps: a,
                        slot: D,
                        defaultTag: A,
                        name: "Menu.Item"
                    })
                })),
                F = Object.assign(C, {
                    Button: L,
                    Items: z,
                    Item: N
                })
        },
        77768: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return x
                }
            });
            var r = n(67294),
                o = n(35748),
                i = n(19946),
                a = n(61363),
                u = n(64103),
                l = n(95389),
                s = n(39516),
                c = n(14157),
                d = n(23784),
                f = n(46045),
                p = n(18689),
                v = n(73781),
                b = n(31147),
                m = n(94192);
            let y = (0, r.createContext)(null);
            y.displayName = "GroupContext";
            let g = r.Fragment;
            let h = (0, o.yV)((function(e, t) {
                    let n = (0, i.M)(),
                        {
                            id: l = `headlessui-switch-${n}`,
                            checked: s,
                            defaultChecked: g = !1,
                            onChange: h,
                            name: x,
                            value: O,
                            ...w
                        } = e,
                        R = (0, r.useContext)(y),
                        S = (0, r.useRef)(null),
                        I = (0, d.T)(S, t, null === R ? null : R.setSwitch),
                        [T, P] = (0, b.q)(s, h, g),
                        k = (0, v.z)((() => null == P ? void 0 : P(!T))),
                        D = (0, v.z)((e => {
                            if ((0, u.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), k()
                        })),
                        E = (0, v.z)((e => {
                            e.key === a.R.Space ? (e.preventDefault(), k()) : e.key === a.R.Enter && (0, p.g)(e.currentTarget)
                        })),
                        M = (0, v.z)((e => e.preventDefault())),
                        Z = (0, r.useMemo)((() => ({
                            checked: T
                        })), [T]),
                        C = {
                            id: l,
                            ref: I,
                            role: "switch",
                            type: (0, c.f)(e, S),
                            tabIndex: 0,
                            "aria-checked": T,
                            "aria-labelledby": null == R ? void 0 : R.labelledby,
                            "aria-describedby": null == R ? void 0 : R.describedby,
                            onClick: D,
                            onKeyUp: E,
                            onKeyPress: M
                        },
                        L = (0, m.G)();
                    return (0, r.useEffect)((() => {
                        var e;
                        let t = null == (e = S.current) ? void 0 : e.closest("form");
                        !t || void 0 !== g && L.addEventListener(t, "reset", (() => {
                            P(g)
                        }))
                    }), [S, P]), r.createElement(r.Fragment, null, null != x && T && r.createElement(f._, {
                        features: f.A.Hidden,
                        ...(0, o.oA)({
                            as: "input",
                            type: "checkbox",
                            hidden: !0,
                            readOnly: !0,
                            checked: T,
                            name: x,
                            value: O
                        })
                    }), (0, o.sY)({
                        ourProps: C,
                        theirProps: w,
                        slot: Z,
                        defaultTag: "button",
                        name: "Switch"
                    }))
                })),
                x = Object.assign(h, {
                    Group: function(e) {
                        let [t, n] = (0, r.useState)(null), [i, a] = (0, l.b)(), [u, c] = (0, s.f)(), d = (0, r.useMemo)((() => ({
                            switch: t,
                            setSwitch: n,
                            labelledby: i,
                            describedby: u
                        })), [t, n, i, u]), f = e;
                        return r.createElement(c, {
                            name: "Switch.Description"
                        }, r.createElement(a, {
                            name: "Switch.Label",
                            props: {
                                onClick() {
                                    !t || (t.click(), t.focus({
                                        preventScroll: !0
                                    }))
                                }
                            }
                        }, r.createElement(y.Provider, {
                            value: d
                        }, (0, o.sY)({
                            ourProps: {},
                            theirProps: f,
                            defaultTag: g,
                            name: "Switch.Group"
                        }))))
                    },
                    Label: l._,
                    Description: s.d
                })
        },
        71646: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return a
                }
            });
            var r = n(67294),
                o = n(16723),
                i = n(3855);

            function a(e, t) {
                let [n, a] = (0, r.useState)(e), u = (0, i.E)(e);
                return (0, o.e)((() => a(u.current)), [u, a, ...t]), n
            }
        },
        31147: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var r = n(67294),
                o = n(73781);

            function i(e, t, n) {
                let [i, a] = (0, r.useState)(n), u = void 0 !== e, l = (0, r.useRef)(u), s = (0, r.useRef)(!1), c = (0, r.useRef)(!1);
                return !u || l.current || s.current ? !u && l.current && !c.current && (c.current = !0, l.current = u, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (s.current = !0, l.current = u, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [u ? e : i, (0, o.z)((e => (u || a(e), null == t ? void 0 : t(e))))]
            }
        },
        40476: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return i
                }
            });
            var r = n(67294);

            function o(e) {
                return [e.screenX, e.screenY]
            }

            function i() {
                let e = (0, r.useRef)([-1, -1]);
                return {
                    wasMoved(t) {
                        let n = o(t);
                        return (e.current[0] !== n[0] || e.current[1] !== n[1]) && (e.current = n, !0)
                    },
                    update(t) {
                        e.current = o(t)
                    }
                }
            }
        },
        31591: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return a
                }
            });
            var r = n(67294),
                o = n(16723),
                i = n(15466);

            function a({
                container: e,
                accept: t,
                walk: n,
                enabled: a = !0
            }) {
                let u = (0, r.useRef)(t),
                    l = (0, r.useRef)(n);
                (0, r.useEffect)((() => {
                    u.current = t, l.current = n
                }), [t, n]), (0, o.e)((() => {
                    if (!e || !a) return;
                    let t = (0, i.r)(e);
                    if (!t) return;
                    let n = u.current,
                        r = l.current,
                        o = Object.assign((e => n(e)), {
                            acceptNode: n
                        }),
                        s = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, o, !1);
                    for (; s.nextNode();) r(s.currentNode)
                }), [e, a, u, l])
            }
        },
        11497: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return o
                },
                d: function() {
                    return i
                }
            });
            var r, o = ((r = o || {})[r.First = 0] = "First", r[r.Previous = 1] = "Previous", r[r.Next = 2] = "Next", r[r.Last = 3] = "Last", r[r.Specific = 4] = "Specific", r[r.Nothing = 5] = "Nothing", r);

            function i(e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                    o = null != r ? r : -1,
                    i = (() => {
                        switch (e.focus) {
                            case 0:
                                return n.findIndex((e => !t.resolveDisabled(e)));
                            case 1:
                                {
                                    let e = n.slice().reverse().findIndex(((e, n, r) => !(-1 !== o && r.length - n - 1 >= o) && !t.resolveDisabled(e)));
                                    return -1 === e ? e : n.length - 1 - e
                                }
                            case 2:
                                return n.findIndex(((e, n) => !(n <= o) && !t.resolveDisabled(e)));
                            case 3:
                                {
                                    let e = n.slice().reverse().findIndex((e => !t.resolveDisabled(e)));
                                    return -1 === e ? e : n.length - 1 - e
                                }
                            case 4:
                                return n.findIndex((n => t.resolveId(n) === e.id));
                            case 5:
                                return null;
                            default:
                                ! function(e) {
                                    throw new Error("Unexpected object: " + e)
                                }(e)
                        }
                    })();
                return -1 === i ? r : i
            }
        },
        18689: function(e, t, n) {
            function r(e = {}, t = null, n = []) {
                for (let [r, a] of Object.entries(e)) i(n, o(t, r), a);
                return n
            }

            function o(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function i(e, t, n) {
                if (Array.isArray(n))
                    for (let [r, a] of n.entries()) i(e, o(t, r.toString()), a);
                else n instanceof Date ? e.push([t, n.toISOString()]) : "boolean" == typeof n ? e.push([t, n ? "1" : "0"]) : "string" == typeof n ? e.push([t, n]) : "number" == typeof n ? e.push([t, `${n}`]) : null == n ? e.push([t, ""]) : r(n, t, e)
            }

            function a(e) {
                var t;
                let n = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                if (n)
                    for (let r of n.elements)
                        if ("INPUT" === r.tagName && "submit" === r.type || "BUTTON" === r.tagName && "submit" === r.type || "INPUT" === r.nodeName && "image" === r.type) return void r.click()
            }
            n.d(t, {
                g: function() {
                    return a
                },
                t: function() {
                    return r
                }
            })
        },
        37483: function(e, t, n) {
            n.d(t, {
                fC: function() {
                    return O
                },
                z$: function() {
                    return w
                }
            });
            var r = n(87462),
                o = n(67294),
                i = n(25360),
                a = n(75320);
            const u = "Progress",
                l = 100,
                [s, c] = (0, i.b)(u),
                [d, f] = s(u),
                p = (0, o.forwardRef)(((e, t) => {
                    const {
                        __scopeProgress: n,
                        value: i,
                        max: u,
                        getValueLabel: s = m,
                        ...c
                    } = e, f = h(u) ? u : l, p = x(i, f) ? i : null, v = g(p) ? s(p, f) : void 0;
                    return (0, o.createElement)(d, {
                        scope: n,
                        value: p,
                        max: f
                    }, (0, o.createElement)(a.WV.div, (0, r.Z)({
                        "aria-valuemax": f,
                        "aria-valuemin": 0,
                        "aria-valuenow": g(p) ? p : void 0,
                        "aria-valuetext": v,
                        role: "progressbar",
                        "data-state": y(p, f),
                        "data-value": null !== p && void 0 !== p ? p : void 0,
                        "data-max": f
                    }, c, {
                        ref: t
                    })))
                }));
            p.propTypes = {
                max(e, t, n) {
                    const r = e[t],
                        o = String(r);
                    return r && !h(r) ? new Error(function(e, t) {
                        return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
                    }(o, n)) : null
                },
                value(e, t, n) {
                    const r = e[t],
                        o = String(r),
                        i = h(e.max) ? e.max : l;
                    return null == r || x(r, i) ? null : new Error(function(e, t) {
                        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
                    }(o, n))
                }
            };
            const v = "ProgressIndicator",
                b = (0, o.forwardRef)(((e, t) => {
                    var n;
                    const {
                        __scopeProgress: i,
                        ...u
                    } = e, l = f(v, i);
                    return (0, o.createElement)(a.WV.div, (0, r.Z)({
                        "data-state": y(l.value, l.max),
                        "data-value": null !== (n = l.value) && void 0 !== n ? n : void 0,
                        "data-max": l.max
                    }, u, {
                        ref: t
                    }))
                }));

            function m(e, t) {
                return `${Math.round(e/t*100)}%`
            }

            function y(e, t) {
                return null == e ? "indeterminate" : e === t ? "complete" : "loading"
            }

            function g(e) {
                return "number" === typeof e
            }

            function h(e) {
                return g(e) && !isNaN(e) && e > 0
            }

            function x(e, t) {
                return g(e) && !isNaN(e) && e <= t && e >= 0
            }
            const O = p,
                w = b
        },
        59637: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(39474),
                o = n(13375),
                a = n(53128),
                u = n(91566);

            function l(e) {
                return (0, r.Z)(e) || (0, o.Z)(e) || (0, u.Z)(e, i) || (0, a.Z)()
            }
        },
        53434: function(e, t, n) {
            var r = n(77226),
                o = n(25222),
                i = n(25742),
                a = Math.max,
                u = Math.min;
            t.Z = function(e, t, n) {
                var l, s, c, d, f, p, v = 0,
                    b = !1,
                    m = !1,
                    y = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function g(t) {
                    var n = l,
                        r = s;
                    return l = s = void 0, v = t, d = e.apply(r, n)
                }

                function h(e) {
                    return v = e, f = setTimeout(O, t), b ? g(e) : d
                }

                function x(e) {
                    var n = e - p;
                    return void 0 === p || n >= t || n < 0 || m && e - v >= c
                }

                function O() {
                    var e = (0, o.Z)();
                    if (x(e)) return w(e);
                    f = setTimeout(O, function(e) {
                        var n = t - (e - p);
                        return m ? u(n, c - (e - v)) : n
                    }(e))
                }

                function w(e) {
                    return f = void 0, y && l ? g(e) : (l = s = void 0, d)
                }

                function R() {
                    var e = (0, o.Z)(),
                        n = x(e);
                    if (l = arguments, s = this, p = e, n) {
                        if (void 0 === f) return h(p);
                        if (m) return clearTimeout(f), f = setTimeout(O, t), g(p)
                    }
                    return void 0 === f && (f = setTimeout(O, t)), d
                }
                return t = (0, i.Z)(t) || 0, (0, r.Z)(n) && (b = !!n.leading, c = (m = "maxWait" in n) ? a((0, i.Z)(n.maxWait) || 0, t) : c, y = "trailing" in n ? !!n.trailing : y), R.cancel = function() {
                    void 0 !== f && clearTimeout(f), v = 0, l = p = s = f = void 0
                }, R.flush = function() {
                    return void 0 === f ? d : w((0, o.Z)())
                }, R
            }
        },
        25222: function(e, t, n) {
            var r = n(66092);
            t.Z = function() {
                return r.Z.Date.now()
            }
        },
        111: function(e, t, n) {
            var r = n(53434),
                o = n(77226);
            t.Z = function(e, t, n) {
                var i = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return (0, o.Z)(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), (0, r.Z)(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: a
                })
            }
        }
    }
]);