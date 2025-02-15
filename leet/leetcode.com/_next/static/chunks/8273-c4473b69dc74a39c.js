"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8273], {
        19635: function(e, t, i) {
            i.d(t, {
                $: function() {
                    return p
                }
            });
            var l = i(85893),
                r = i(67294),
                n = i(11321),
                a = i(63808),
                s = i(88525),
                o = function() {
                    return (0, s.m)(a.f6)
                },
                c = i(50632),
                u = i(19579),
                d = i(59564),
                p = function() {
                    var e = (0, n.$G)("common").t,
                        t = (0, c.U5)().data,
                        i = o().mutateAsync,
                        a = (null === t || void 0 === t ? void 0 : t.userStatus) || {},
                        s = a.isSignedIn,
                        p = a.checkedInToday;
                    return (0, r.useEffect)((function() {
                        s && !p && i({}).then((function(t) {
                            var i, r;
                            (null === t || void 0 === t || null === (i = t.checkin) || void 0 === i ? void 0 : i.ok) && (null === t || void 0 === t || null === (r = t.checkin) || void 0 === r ? void 0 : r.checkedIn) && u.y.plain((0, l.jsxs)("div", {
                                children: [(0, l.jsx)("img", {
                                    src: d.Z,
                                    width: "18px",
                                    height: "18px",
                                    className: "mr-2 inline-block",
                                    alt: e("dailyCheckIn")
                                }), (0, l.jsx)("span", {
                                    children: e("dailyCheckIn")
                                })]
                            }))
                        }))
                    }), [s, p]), null
                }
        },
        34588: function(e, t, i) {
            i.d(t, {
                sH: function() {
                    return o
                },
                eN: function() {
                    return X
                },
                Ts: function() {
                    return s
                },
                jP: function() {
                    return y
                },
                LA: function() {
                    return p
                },
                KG: function() {
                    return c
                },
                _G: function() {
                    return V
                },
                q1: function() {
                    return u
                },
                Hd: function() {
                    return d
                },
                ZP: function() {
                    return v
                },
                yX: function() {
                    return m
                }
            });
            var l, r = i(14924),
                n = i(68779),
                a = i(23874);
            ! function(e) {
                e.Multiple = "multiple", e.Rate = "rate", e.Time = "time"
            }(l || (l = {}));
            var s, o = [{
                    value: a.YSR.All,
                    name: "all"
                }, {
                    value: a.YSR.Any,
                    name: "any"
                }],
                c = [{
                    value: a.lno.Is,
                    name: "is"
                }, {
                    value: a.lno.IsNot,
                    name: "not"
                }],
                u = [{
                    value: "range",
                    name: "range"
                }],
                d = [{
                    value: "range",
                    name: "range"
                }, {
                    value: "past",
                    name: "past"
                }];
            ! function(e) {
                e.frequency = "frequency", e.companies = "companies", e.position = "position", e.status = "status", e.difficulty = "difficulty", e.topics = "topics", e.lang = "lang", e.acceptance = "acceptance", e.lastSubmit = "lastSubmit", e.published = "published", e.premium = "premium"
            }(s || (s = {}));
            var p, m = Object.keys(s);
            ! function(e) {
                e.frequencyFilter = "frequencyFilter", e.companyFilter = "companyFilter", e.positionFilter = "positionFilter", e.statusFilter = "statusFilter", e.difficultyFilter = "difficultyFilter", e.topicFilter = "topicFilter", e.languageFilter = "languageFilter", e.acceptanceFilter = "acceptanceFilter", e.lastSubmittedFilter = "lastSubmittedFilter", e.publishedFilter = "publishedFilter", e.premiumFilter = "premiumFilter"
            }(p || (p = {}));
            var f, _, b, y, V = [s.frequency, s.companies, s.position],
                X = (f = {}, (0, r.Z)(f, s.frequency, p.frequencyFilter), (0, r.Z)(f, s.companies, p.companyFilter), (0, r.Z)(f, s.position, p.positionFilter), (0, r.Z)(f, s.status, p.statusFilter), (0, r.Z)(f, s.difficulty, p.difficultyFilter), (0, r.Z)(f, s.topics, p.topicFilter), (0, r.Z)(f, s.lang, p.languageFilter), (0, r.Z)(f, s.acceptance, p.acceptanceFilter), (0, r.Z)(f, s.lastSubmit, p.lastSubmittedFilter), (0, r.Z)(f, s.published, p.publishedFilter), (0, r.Z)(f, s.premium, p.premiumFilter), f),
                v = (_ = {}, (0, r.Z)(_, p.frequencyFilter, s.frequency), (0, r.Z)(_, p.companyFilter, s.companies), (0, r.Z)(_, p.positionFilter, s.position), (0, r.Z)(_, p.statusFilter, s.status), (0, r.Z)(_, p.difficultyFilter, s.difficulty), (0, r.Z)(_, p.topicFilter, s.topics), (0, r.Z)(_, p.languageFilter, s.lang), (0, r.Z)(_, p.acceptanceFilter, s.acceptance), (0, r.Z)(_, p.lastSubmittedFilter, s.lastSubmit), (0, r.Z)(_, p.publishedFilter, s.published), (0, r.Z)(_, p.premiumFilter, s.premium), b = {}, (0, r.Z)(b, s.frequency, {
                    key: "frequency",
                    icon: null,
                    svgIcon: "/_next/static/images/frequency-d5c58161d46593c4f6282b25121c963e.svg",
                    isPremiumOnly: !0,
                    chooseType: l.Rate,
                    showDefault: !1
                }), (0, r.Z)(b, s.companies, {
                    key: "companies",
                    icon: null,
                    svgIcon: "/_next/static/images/companies-5304359ce65d9cc54896008b59addeac.svg",
                    isPremiumOnly: !0,
                    chooseType: l.Multiple,
                    showDefault: !0
                }), (0, r.Z)(b, s.position, {
                    key: "position",
                    icon: null,
                    svgIcon: "/_next/static/images/position-329b63d0bfaeddd0eafbad8a872b0616.svg",
                    isPremiumOnly: !0,
                    chooseType: l.Multiple,
                    showDefault: !0
                }), (0, r.Z)(b, s.status, {
                    key: "status",
                    icon: n.chG,
                    svgIcon: null,
                    isPremiumOnly: !1,
                    chooseType: l.Multiple,
                    showDefault: !0
                }), (0, r.Z)(b, s.difficulty, {
                    key: "difficulty",
                    icon: n.Yal,
                    svgIcon: null,
                    isPremiumOnly: !1,
                    chooseType: l.Multiple,
                    showDefault: !0
                }), (0, r.Z)(b, s.topics, {
                    key: "topics",
                    icon: n.tho,
                    svgIcon: null,
                    isPremiumOnly: !1,
                    chooseType: l.Multiple,
                    showDefault: !0
                }), (0, r.Z)(b, s.lang, {
                    key: "lang",
                    icon: n.dT$,
                    svgIcon: null,
                    isPremiumOnly: !1,
                    chooseType: l.Multiple,
                    showDefault: !0
                }), (0, r.Z)(b, s.acceptance, {
                    key: "acceptance",
                    icon: n.cL$,
                    svgIcon: null,
                    isPremiumOnly: !1,
                    chooseType: l.Rate,
                    showDefault: !1
                }), (0, r.Z)(b, s.lastSubmit, {
                    key: "lastSubmit",
                    icon: n.On6,
                    svgIcon: null,
                    isPremiumOnly: !1,
                    chooseType: l.Time,
                    showDefault: !1
                }), (0, r.Z)(b, s.published, {
                    key: "published",
                    icon: n.Acd,
                    svgIcon: null,
                    isPremiumOnly: !1,
                    chooseType: l.Time,
                    showDefault: !1
                }), (0, r.Z)(b, s.premium, {
                    key: "premium",
                    icon: n.nmd,
                    svgIcon: null,
                    isPremiumOnly: !1,
                    chooseType: l.Multiple,
                    showDefault: !1
                }), b);
            ! function(e) {
                e.filterCombineType = "filterCombineType", e.frequencyFilterRangeLeft = "frequencyFilterRangeLeft", e.frequencyFilterRangeRight = "frequencyFilterRangeRight", e.companies = "companies", e.companyType = "companyType", e.position = "position", e.positionType = "positionType", e.status = "status", e.statusType = "statusType", e.difficulty = "difficulty", e.difficultyType = "difficultyType", e.topics = "topics", e.topicsType = "topicsType", e.lang = "lang", e.langType = "langType", e.acceptanceRangeLeft = "acceptanceRangeLeft", e.acceptanceRangeRight = "acceptanceRangeRight", e.lastSubmittedStartFrom = "lastSubmittedStartFrom", e.lastSubmittedEndAt = "lastSubmittedEndAt", e.lastSubmittedPastDays = "lastSubmittedPastDays", e.publishedStartFrom = "publishedStartFrom", e.publishedEndAt = "publishedEndAt", e.publishedPastDays = "publishedPastDays", e.premium = "premium", e.premiumType = "premiumType"
            }(y || (y = {}))
        },
        99184: function(e, t, i) {
            i.d(t, {
                F: function() {
                    return s
                },
                p: function() {
                    return a
                }
            });
            var l = i(26042),
                r = i(85893),
                n = i(2962),
                a = function(e) {
                    return (0, r.jsx)(n.PB, (0, l.Z)({}, e))
                },
                s = function() {
                    return (0, r.jsx)(n.PB, {
                        noindex: !0
                    })
                }
        },
        83210: function(e, t, i) {
            i.d(t, {
                d: function() {
                    return p
                },
                z: function() {
                    return m
                }
            });
            var l = i(26042),
                r = i(69396),
                n = i(99534),
                a = i(85893),
                s = i(67294),
                o = i(88426),
                c = i(29107),
                u = i(12922),
                d = function() {
                    return (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        className: "animate-spin",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a1 1 0 100-2 8 8 0 118-8 1 1 0 102 0z",
                            clipRule: "evenodd"
                        })
                    })
                },
                p = (0, c.j)("relative inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sd-ring disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-sd-primary text-sd-primary-foreground hover:bg-sd-primary/90",
                            outline: "border border-sd-input bg-transparent hover:bg-sd-accent text-sd-foreground hover:text-sd-accent-foreground",
                            secondary: "bg-sd-secondary text-sd-secondary-foreground hover:bg-sd-secondary/80",
                            ghost: "text-sd-foreground hover:bg-sd-accent hover:text-sd-accent-foreground",
                            link: "text-sd-primary underline-offset-4 hover:underline",
                            danger: "bg-sd-danger text-sd-fixed-white hover:bg-sd-danger/80",
                            warning: "bg-sd-warning text-sd-fixed-white hover:bg-sd-warning/80",
                            info: "bg-sd-info text-sd-fixed-white hover:bg-sd-info/80",
                            success: "bg-sd-success text-sd-fixed-white hover:bg-sd-success/80"
                        },
                        size: {
                            default: "h-9 px-4 py-2",
                            xs: "h-7 rounded-sd-md px-2 text-xs",
                            sm: "h-8 rounded-sd-md px-3 text-sm",
                            lg: "h-10 rounded-sd-md px-8"
                        },
                        onlyIcon: {
                            true: "p-0",
                            false: ""
                        },
                        shape: {
                            square: "rounded-sd-md",
                            rounded: "rounded-full"
                        }
                    },
                    compoundVariants: [{
                        size: "xs",
                        onlyIcon: !0,
                        class: "h-7 w-7"
                    }, {
                        size: "sm",
                        onlyIcon: !0,
                        class: "h-8 w-8"
                    }, {
                        size: "default",
                        onlyIcon: !0,
                        class: "h-9 w-9"
                    }, {
                        size: "lg",
                        onlyIcon: !0,
                        class: "h-10 w-10"
                    }],
                    defaultVariants: {
                        variant: "default",
                        size: "default",
                        onlyIcon: !1,
                        shape: "square"
                    }
                }),
                m = s.forwardRef((function(e, t) {
                    var i = e.className,
                        s = e.variant,
                        c = e.size,
                        m = e.onlyIcon,
                        f = e.shape,
                        _ = e.asChild,
                        b = void 0 !== _ && _,
                        y = e.isLoading,
                        V = e.children,
                        X = (0, n.Z)(e, ["className", "variant", "size", "onlyIcon", "shape", "asChild", "isLoading", "children"]),
                        v = b ? o.g7 : "button";
                    return (0, a.jsx)(v, (0, r.Z)((0, l.Z)({
                        className: (0, u.yI)(p({
                            variant: s,
                            size: c,
                            onlyIcon: m,
                            shape: f,
                            className: i
                        })),
                        ref: t
                    }, X), {
                        disabled: y || X.disabled,
                        children: y ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "opacity-0",
                                children: V
                            }), (0, a.jsx)("div", {
                                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                                children: (0, a.jsx)(d, {})
                            })]
                        }) : V
                    }))
                }));
            m.displayName = "Button"
        },
        89952: function(e, t, i) {
            i.d(t, {
                $N: function() {
                    return v
                },
                Be: function() {
                    return k
                },
                Vq: function() {
                    return m
                },
                cN: function() {
                    return X
                },
                cZ: function() {
                    return y
                },
                fK: function() {
                    return V
                },
                hg: function() {
                    return f
                }
            });
            var l = i(40872),
                r = i(26042),
                n = i(69396),
                a = i(99534),
                s = i(85893),
                o = i(67294),
                c = i(12854),
                u = i(68779),
                d = i(12922),
                p = i(134),
                m = c.fC,
                f = c.xz,
                _ = function(e) {
                    var t = (0, l.Z)({}, e);
                    return (0, s.jsx)(c.h_, (0, r.Z)({}, t))
                };
            _.displayName = c.h_.displayName;
            var b = o.forwardRef((function(e, t) {
                var i = e.className,
                    l = (0, a.Z)(e, ["className"]);
                return (0, s.jsx)(c.aV, (0, r.Z)({
                    ref: t,
                    className: (0, d.yI)("bg-sd-background/80 z-modal fixed inset-0 backdrop-blur-sm", "data-[state=open]:animate-from-to data-[state=open]:fade-from-0 data-[state=open]:fade-to-1", "data-[state=closed]:animate-out data-[state=closed]:fade-out-0", i)
                }, l))
            }));
            b.displayName = c.aV.displayName;
            var y = o.forwardRef((function(e, t) {
                var i = e.className,
                    l = e.overlayClassName,
                    o = e.closeClassName,
                    m = e.children,
                    f = (0, a.Z)(e, ["className", "overlayClassName", "closeClassName", "children"]);
                return (0, s.jsx)(_, {
                    children: (0, s.jsxs)("div", {
                        className: (0, d.yI)("z-modal fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center"),
                        children: [(0, s.jsx)(b, {
                            className: (0, d.yI)("fixed inset-0 overflow-auto", l)
                        }), (0, s.jsxs)(c.VY, (0, n.Z)((0, r.Z)({
                            ref: t,
                            className: (0, d.yI)("bg-sd-card text-sd-card-foreground rounded-sd-lg sd-md:w-full border-sd-border z-modal relative grid max-h-[90vh] w-full max-w-lg gap-4 overflow-y-auto border p-4 shadow-lg duration-200", "animate-duration-200", "data-[state=open]:animate-from-to data-[state=open]:fade-from-0 data-[state=open]:fade-to-1 data-[state=open]:zoom-from-95 data-[state=open]:zoom-to-100", i),
                            onOpenAutoFocus: function(e) {
                                return e.preventDefault()
                            },
                            onWheel: function(e) {
                                return e.stopPropagation()
                            }
                        }, f), {
                            children: [m, (0, s.jsxs)(c.x8, {
                                className: (0, d.yI)("ring-offset-sd-background focus:ring-sd-ring data-[state=open]:bg-sd-accent data-[state=open]:text-sd-muted-foreground rounded-sd-sm absolute right-4 top-[22px] opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none", o),
                                children: [(0, s.jsx)(p.e, {
                                    className: "h-4 w-4",
                                    variant: "20px",
                                    padding: "none",
                                    icon: u.YIN
                                }), (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })]
                            })]
                        }))]
                    })
                })
            }));
            y.displayName = c.VY.displayName;
            var V = function(e) {
                var t = e.className,
                    i = (0, a.Z)(e, ["className"]);
                return (0, s.jsx)("div", (0, r.Z)({
                    className: (0, d.yI)("sd-sm:text-left flex flex-col gap-2 text-center", t)
                }, i))
            };
            V.displayName = "DialogHeader";
            var X = function(e) {
                var t = e.className,
                    i = (0, a.Z)(e, ["className"]);
                return (0, s.jsx)("div", (0, r.Z)({
                    className: (0, d.yI)("sd-sm:flex-row sd-sm:justify-end sd-sm:space-x-2 flex flex-col-reverse", t)
                }, i))
            };
            X.displayName = "DialogFooter";
            var v = o.forwardRef((function(e, t) {
                var i = e.className,
                    l = (0, a.Z)(e, ["className"]);
                return (0, s.jsx)(c.Dx, (0, r.Z)({
                    ref: t,
                    className: (0, d.yI)("text-lg font-semibold tracking-tight", i)
                }, l))
            }));
            v.displayName = c.Dx.displayName;
            var k = o.forwardRef((function(e, t) {
                var i = e.className,
                    l = (0, a.Z)(e, ["className"]);
                return (0, s.jsx)(c.dk, (0, r.Z)({
                    ref: t,
                    className: (0, d.yI)("text-sd-muted-foreground text-sm", i)
                }, l))
            }));
            k.displayName = c.dk.displayName
        },
        44765: function(e, t, i) {
            i.d(t, {
                J: function() {
                    return s
                }
            });
            var l = i(85893),
                r = i(67294),
                n = i(62758),
                a = i(12922),
                s = function(e) {
                    var t = e.children,
                        i = e.title,
                        s = e.className,
                        o = (0, r.useRef)(null),
                        c = (0, r.useState)(!1),
                        u = c[0],
                        d = c[1],
                        p = function() {
                            var e, t, i = (null === (e = o.current) || void 0 === e ? void 0 : e.scrollWidth) || 0,
                                l = (null === (t = o.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                            d(i > l)
                        };
                    return (0, r.useEffect)((function() {
                        return p(), window.addEventListener("resize", p),
                            function() {
                                window.removeEventListener("resize", p)
                            }
                    }), []), (0, l.jsx)(n.u, {
                        label: u && (0, l.jsx)(l.Fragment, {
                            children: i || t
                        }),
                        children: (0, l.jsx)("div", {
                            ref: o,
                            className: (0, a.yI)("truncate", s),
                            children: t
                        })
                    })
                }
        },
        87740: function(e, t, i) {
            i.d(t, {
                O: function() {
                    return n
                }
            });
            var l = i(67294),
                r = i(69485);

            function n(e, t) {
                var i = (0, l.useState)(e),
                    n = i[0],
                    a = i[1],
                    s = (0, r.z)(t),
                    o = (0, l.useCallback)((function(e) {
                        a((function(t) {
                            var i = "function" === typeof e ? e(t) : e;
                            return i !== t && s(i), i
                        }))
                    }), [s]);
                return [n, (0, l.useMemo)((function() {
                    return {
                        on: function() {
                            return o(!0)
                        },
                        off: function() {
                            return o(!1)
                        },
                        toggle: function() {
                            return o((function(e) {
                                return !e
                            }))
                        },
                        setBool: o
                    }
                }), [o])]
            }
        },
        37609: function(e, t, i) {
            i.r(t), i.d(t, {
                FilteredGraphQLErrorEnum: function() {
                    return l
                },
                defaultErrorHandler: function() {
                    return s
                },
                filterGraphQLError: function() {
                    return n
                },
                handleErrorWithFallback: function() {
                    return a
                }
            });
            var l, r = i(19579);

            function n(e) {
                var t = Array.isArray(e) ? e[0] : e;
                if (function(e) {
                        return e && "object" === typeof e && "string" === typeof e.message
                    }(t)) {
                    var i = t.message.indexOf("\ud83d\udc38\u2615");
                    return i > -1 ? {
                        errorType: l.frogTea,
                        message: t.message.slice(i + "\ud83d\udc38\u2615".length)
                    } : {
                        errorType: l.unknown,
                        message: t.message
                    }
                }
                return null
            }! function(e) {
                e.frogTea = "frog-tea", e.unknown = "unknown"
            }(l || (l = {}));
            var a = function(e) {
                    return function(t) {
                        var i, a, s = n(null === t || void 0 === t || null === (i = t.response) || void 0 === i ? void 0 : i.errors);
                        (null === t || void 0 === t || null === (a = t.response) || void 0 === a ? void 0 : a.status) >= 400 || ((null === s || void 0 === s ? void 0 : s.errorType) === l.frogTea || (null === s || void 0 === s ? void 0 : s.errorType) === l.unknown ? r.y.error(s.message).then() : e && r.y.error(e).then())
                    }
                },
                s = a()
        },
        55964: function(e, t, i) {
            i.d(t, {
                DI: function() {
                    return a
                },
                LE: function() {
                    return s
                },
                Ts: function() {
                    return r
                },
                jY: function() {
                    return n
                }
            });
            var l = i(34155),
                r = "",
                n = (l.env.UGC_OSS_REGION, "https://leetcode-cn.com"),
                a = "https://pay.lingkou.com",
                s = "wxadf3350b709be02e"
        },
        50438: function(e, t, i) {
            i.d(t, {
                P: function() {
                    return n
                }
            });
            var l = i(8183),
                r = i(23025),
                n = {
                    problemlistSaveClick: function(e) {
                        var t = {
                            key: "problemlist_save_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistSavePopupExposure: function(e) {
                        var t = {
                            key: "problemlist_save_popup_exposure",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistSaveSelectionClick: function(e) {
                        var t = {
                            key: "problemlist_save_selection_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistSavePopupCreateClick: function(e) {
                        var t = {
                            key: "problemlist_save_popup_create_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistSavePopupViewAllClick: function(e) {
                        var t = {
                            key: "problemlist_save_popup_view_all_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailExposure: function(e) {
                        var t = {
                            key: "problemlist_list_detail_exposure",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailPracticeClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_practice_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailEditClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_edit_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailEditSaveClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_edit_save_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailShareClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_share_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailChannelClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_channel_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailForkClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_fork_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailDeleteClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_delete_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailSaveClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_save_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailProgressResetClick: function(e) {
                        var t = {
                            key: "problemlist_list_detail_progress_reset_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListProgressResetConfirmClick: function(e) {
                        var t = {
                            key: "problemlist_list_progress_reset_confirm_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListDetailProgressHoverExposure: function(e) {
                        var t = {
                            key: "problemlist_list_detail_progress_hover_exposure",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListsExposure: function() {
                        var e = {
                            key: "problemlist_lists_exposure",
                            data: {}
                        };
                        l.V[r.X.GIO](e), l.V[r.X.GA4](e), l.V[r.X.CONSOLE](e), l.V[r.X.SELF_DB](e)
                    },
                    problemlistListsListClick: function(e) {
                        var t = {
                            key: "problemlist_lists_list_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListsCloseClick: function(e) {
                        var t = {
                            key: "problemlist_lists_close_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableExposure: function(e) {
                        var t = {
                            key: "problemlist_problems_table_exposure",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableTagClick: function(e) {
                        var t = {
                            key: "problemlist_problems_table_tag_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableSaveClick: function(e) {
                        var t = {
                            key: "problemlist_problems_table_save_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableMoreClick: function(e) {
                        var t = {
                            key: "problemlist_problems_table_more_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableMoreRemoveClick: function(e) {
                        var t = {
                            key: "problemlist_problems_table_more_remove_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableMoreAddClick: function(e) {
                        var t = {
                            key: "problemlist_problems_table_more_add_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableMoreTopClick: function(e) {
                        var t = {
                            key: "problemlist_problems_table_more_top_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableMoreBottomClick: function(e) {
                        var t = {
                            key: "problemlist_problems_table_more_bottom_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistProblemsTableMoveClick: function(e) {
                        var t = {
                            key: "problemlist_problems_table_move_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListProblemsClick: function(e) {
                        var t = {
                            key: "problemlist_list_problems_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistFilterClick: function() {
                        var e = {
                            key: "problemlist_filter_click",
                            data: {}
                        };
                        l.V[r.X.GIO](e), l.V[r.X.GA4](e), l.V[r.X.CONSOLE](e), l.V[r.X.SELF_DB](e)
                    },
                    problemlistFilterRuleAddClick: function(e) {
                        var t = {
                            key: "problemlist_filter_rule_add_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistFilterRuleAddSelectClick: function(e) {
                        var t = {
                            key: "problemlist_filter_rule_add_select_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistFilterRuleModuleExposure: function(e) {
                        var t = {
                            key: "problemlist_filter_rule_module_exposure",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistFilterRuleModuleMatchClick: function(e) {
                        var t = {
                            key: "problemlist_filter_rule_module_match_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistFilterModuleConditionClick: function(e) {
                        var t = {
                            key: "problemlist_filter_module_condition_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistFilterModuleResetClick: function(e) {
                        var t = {
                            key: "problemlist_filter_module_reset_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistSortClick: function(e) {
                        var t = {
                            key: "problemlist_sort_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistShuffleClick: function() {
                        var e = {
                            key: "problemlist_shuffle_click",
                            data: {}
                        };
                        l.V[r.X.GIO](e), l.V[r.X.GA4](e), l.V[r.X.CONSOLE](e), l.V[r.X.SELF_DB](e)
                    },
                    problemlistSortConditionClick: function(e) {
                        var t = {
                            key: "problemlist_sort_condition_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistSortTagClick: function(e) {
                        var t = {
                            key: "problemlist_sort_tag_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistSearchClick: function() {
                        var e = {
                            key: "problemlist_search_click",
                            data: {}
                        };
                        l.V[r.X.GIO](e), l.V[r.X.GA4](e), l.V[r.X.CONSOLE](e), l.V[r.X.SELF_DB](e)
                    },
                    problemlistSearchKeywordClick: function(e) {
                        var t = {
                            key: "problemlist_search_keyword_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistSmartlistRuleSettingClick: function() {
                        var e = {
                            key: "problemlist_smartlist_rule_setting_click",
                            data: {}
                        };
                        l.V[r.X.GIO](e), l.V[r.X.GA4](e), l.V[r.X.CONSOLE](e), l.V[r.X.SELF_DB](e)
                    },
                    problemlistSmartlistRuleSettingSaveClick: function(e) {
                        var t = {
                            key: "problemlist_smartlist_rule_setting_save_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistAddQuestionClick: function(e) {
                        var t = {
                            key: "problemlist_add_question_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistAddQuestionPopupExposure: function(e) {
                        var t = {
                            key: "problemlist_add_question_popup_exposure",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistAddQuestionPopupSearchClick: function(e) {
                        var t = {
                            key: "problemlist_add_question_popup_search_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistAddQuestionPopupKeywordClick: function(e) {
                        var t = {
                            key: "problemlist_add_question_popup_keyword_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistPublicClick: function(e) {
                        var t = {
                            key: "problemlist_public_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListNodataExposure: function(e) {
                        var t = {
                            key: "problemlist_list_nodata_exposure",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    },
                    problemlistListNodataButtonClick: function(e) {
                        var t = {
                            key: "problemlist_list_nodata_button_click",
                            data: e
                        };
                        l.V[r.X.GIO](t), l.V[r.X.GA4](t), l.V[r.X.CONSOLE](t), l.V[r.X.SELF_DB](t)
                    }
                }
        },
        59564: function(e, t) {
            t.Z = "/_next/static/images/coin-6275d6995221472db2a76f0931c086e3.gif"
        }
    }
]);