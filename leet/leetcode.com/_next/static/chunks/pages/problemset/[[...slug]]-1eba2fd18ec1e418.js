(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8026], {
        71882: function(e, t, n) {
            var r = n(87537),
                a = n(23645)(r);
            a.push([e.id, "@media screen and (max-width:1186px){.vTJ01{align-items:flex-start;flex-direction:column}}@media screen and (max-width:920px){.vTJ01{align-items:flex-start;flex-direction:column}}@media screen and (max-width:880px){.vTJ01{align-items:flex-start;flex-direction:column}}@media screen and (max-width:680px){.vTJ01{align-items:center;flex-direction:row}}", "", {
                version: 3,
                sources: ["webpack://./shared/components/progress-calendar/calendar-premium/calendar-premium.iso.css"],
                names: [],
                mappings: "AAAA,qCACE,OAEE,sBAAuB,CADvB,qBAEF,CACF,CAEA,oCACE,OAEE,sBAAuB,CADvB,qBAEF,CACF,CAEA,oCACE,OAEE,sBAAuB,CADvB,qBAEF,CACF,CAEA,oCACE,OAEE,kBAAmB,CADnB,kBAEF,CACF",
                sourcesContent: ["@media screen and (max-width: 1186px) {\n  .weeklyPremium {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media screen and (max-width: 920px) {\n  .weeklyPremium {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media screen and (max-width: 880px) {\n  .weeklyPremium {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n@media screen and (max-width: 680px) {\n  .weeklyPremium {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n"],
                sourceRoot: ""
            }]), a.locals = {
                weeklyPremium: "vTJ01"
            }, e.exports = a
        },
        11501: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/problemset/[[...slug]]", function() {
                return n(64336)
            }])
        },
        66614: function(e, t, n) {
            "use strict";
            var r, a, s, i, l, o, c;
            n.d(t, {
                    F4: function() {
                        return o
                    },
                    Fd: function() {
                        return r
                    },
                    GZ: function() {
                        return l
                    },
                    Hc: function() {
                        return s
                    },
                    Vk: function() {
                        return c
                    },
                    lr: function() {
                        return a
                    }
                }),
                function(e) {
                    e.Easy = "EASY", e.Medium = "MEDIUM", e.Hard = "HARD"
                }(r || (r = {})),
                function(e) {
                    e.NotStarted = "NOT_STARTED", e.Ac = "AC", e.Tried = "TRIED"
                }(a || (a = {})),
                function(e) {
                    e.Html = "HTML", e.Markdown = "MARKDOWN"
                }(s || (s = {})),
                function(e) {
                    e.SIX_MONTH = "SIX_MONTH", e.ONE_YEAR = "ONE_YEAR", e.TWO_YEAR = "TWO_YEAR"
                }(i || (i = {})),
                function(e) {
                    e.LAST_THREE_MONTH = "three_months", e.LAST_SIX_MONTH = "six_months", e.SIX_MONTH_AGO = "more_than_six_months"
                }(l || (l = {})),
                function(e) {
                    e.Liked = "LIKED", e.Disliked = "DISLIKED", e.Neutral = "NEUTRAL"
                }(o || (o = {})),
                function(e) {
                    e.UnclearDescription = "UNCLEAR_DESCRIPTION", e.UnclearDifficulty = "UNCLEAR_DIFFICULTY", e.UnclearTestCases = "UNCLEAR_TEST_CASES", e.RuntimeStrict = "RUNTIME_STRICT", e.EdgeCases = "EDGE_CASES", e.Other = "OTHER"
                }(c || (c = {}))
        },
        8276: function(e, t, n) {
            "use strict";
            n.d(t, {
                Hv: function() {
                    return d
                },
                hx: function() {
                    return u
                },
                x1: function() {
                    return c
                }
            });
            var r = n(51438),
                a = n(26042),
                s = n(69396),
                i = n(68708),
                l = n(75117),
                o = function() {
                    function e(t) {
                        (0, r.Z)(this, e), this.headers = {
                            "content-type": "application/json"
                        }, this.baseUrl = "", this.baseUrl = t
                    }
                    var t = e.prototype;
                    return t.request = function(e, t, n) {
                        return this.rawRequest(e, t, n).then((function(e) {
                            if (!e.ok) throw new Error("Network response was not ok");
                            return e.json()
                        }))
                    }, t.rawRequest = function(e, t, n) {
                        var r = function(e, t) {
                            var n;
                            if (t || e) {
                                if (!e) return t;
                                var r, i, l, o = null !== t && void 0 !== t ? t : {},
                                    c = null !== (r = o.headers) && void 0 !== r ? r : {};
                                return (0, s.Z)((0, a.Z)({}, o), {
                                    headers: (0, s.Z)((0, a.Z)({}, c), {
                                        cookie: null !== (i = e.headers.cookie) && void 0 !== i ? i : "",
                                        "X-CSRFToken": null !== (l = null === (n = e.cookies) || void 0 === n ? void 0 : n.csrftoken) && void 0 !== l ? l : ""
                                    })
                                })
                            }
                        }(n, t);
                        return fetch("".concat(this.baseUrl).concat(e), (0, a.Z)({
                            headers: new Headers((0, s.Z)((0, a.Z)({}, this.headers), {
                                "X-CSRFToken": (0, i._V)()
                            })),
                            credentials: "same-origin"
                        }, r))
                    }, t.requestHeaders = function(e, t) {
                        return this.headers = (0, a.Z)({}, this.headers, null === t || void 0 === t ? void 0 : t.headers), this.request(e, null === t || void 0 === t ? void 0 : t.settings)
                    }, e
                }(),
                c = new o(""),
                u = new o(l.Vq),
                d = (new o(l.Vq), {
                    favoriteLists: function(e) {
                        return "/api/problems/favorite_lists/".concat(e, "/")
                    },
                    problems: function(e) {
                        return "/api/problems/".concat(e, "/")
                    },
                    problemsFilter: function(e) {
                        return "/problems/api/filter-questions/".concat(encodeURIComponent(e))
                    },
                    problemsList: "/problems/api/favorites/",
                    problemsTags: "/problems/api/tags/",
                    problemsCategories: "/problems/api/card-info/",
                    banner: function(e) {
                        return "/api/banner/".concat(e, "/")
                    },
                    session: "/session/",
                    virtualContestStart: function(e) {
                        return "/contest/api/".concat(e, "/virtual_participate")
                    },
                    runcodeTaskEnqueue: function(e) {
                        return "/problems/".concat(e, "/interpret_solution/")
                    },
                    runcodeResult: function(e) {
                        return "/submissions/detail/".concat(e, "/check/")
                    },
                    submitTaskEnqueue: function(e) {
                        return "/problems/".concat(e, "/submit/")
                    },
                    submitResult: function(e) {
                        return "/submissions/detail/".concat(e, "/check/")
                    },
                    memoryDistribution: function(e) {
                        return "/submissions/api/memory_distribution/".concat(e, "/")
                    },
                    runtimeDistribution: function(e) {
                        return "/submissions/api/runtime_distribution/".concat(e, "/")
                    },
                    lastSubmittedCode: function(e, t) {
                        return "/submissions/latest/?qid=".concat(e, "&lang=").concat(t)
                    },
                    contestRuncodeTaskEnqueue: function(e, t) {
                        return "/contest/api/".concat(e, "/problems/").concat(t, "/interpret_solution/")
                    },
                    contestSubmitTaskEnqueue: function(e, t) {
                        return "/contest/api/".concat(e, "/problems/").concat(t, "/submit/")
                    },
                    contestInfo: function(e) {
                        return "/contest/api/info/".concat(e, "/")
                    },
                    contestRankingTop: function(e) {
                        var t = e.contestTitleSlug,
                            n = e.region;
                        return "/contest/api/ranking/".concat(t, "/?region=").concat(n, "&top=true")
                    },
                    contestRankingPage: function(e) {
                        var t = e.contestTitleSlug,
                            n = e.pagination,
                            r = void 0 === n ? 1 : n,
                            a = e.region;
                        return "/contest/api/ranking/".concat(t, "/?pagination=").concat(r, "&region=").concat(a)
                    },
                    contestMyRanking: function(e, t) {
                        return "/contest/api/myranking/".concat(e, "/?region=").concat(t)
                    },
                    contestSubmission: function(e) {
                        return "/api/submissions/".concat(e, "/")
                    },
                    contestSubmissionReportStatus: function(e) {
                        return "/contest/api/reports/submissions/".concat(e, "/")
                    },
                    contestSubmissionReport: "/contest/api/reports/",
                    student: "/student/api/",
                    studentDiscount: "/student/api/24discount/",
                    subscribeCheckout: "/subscription/add_card_and_checkout/",
                    isChinaIp: "/api/is_china_ip/",
                    ctdidToken: "/accounts/ctdid/o/token/",
                    subscription: "/subscription/premium_info/",
                    subscriptionAddCard: "/subscription/card/",
                    subscriptionReactivate: "/subscription/reactivate/",
                    subscriptionCancel: "/subscription/cancel/",
                    subscriptionBillHistory: "/subscription/billing_history/"
                })
        },
        70060: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ar: function() {
                    return m
                },
                B2: function() {
                    return x
                },
                Mw: function() {
                    return v
                }
            });
            var r, a, s = n(26042),
                i = n(69396),
                l = n(36492),
                o = n(63808),
                c = n(23874),
                u = n(8276),
                d = function(e, t) {
                    var n;
                    if (!e.advertisementAdsByPage) return null;
                    var r = null === (n = e.advertisementAdsByPage) || void 0 === n ? void 0 : n.find((function(e) {
                            return e.position.nameSlug === t
                        })),
                        a = ((null === r || void 0 === r ? void 0 : r.ads) || []).map((function(e) {
                            var t, n, r, a, s, i;
                            return {
                                identifier: e.name,
                                title: e.title,
                                imageLink: e.image,
                                targetLink: e.link,
                                isTagShown: e.isTagShown,
                                subtitle: null !== (t = e.subtitle) && void 0 !== t ? t : "",
                                extraInfo: null !== (n = e.extraInfo) && void 0 !== n ? n : "",
                                baiduWidth: null !== (r = e.baiduWidth) && void 0 !== r ? r : void 0,
                                baiduHeight: null !== (a = e.baiduHeight) && void 0 !== a ? a : void 0,
                                baiduAdId: null !== (s = e.baiduAdId) && void 0 !== s ? s : "",
                                baiduAdHide: null === (i = e.baiduAdHide) || void 0 === i || i
                            }
                        }));
                    return {
                        positionTitle: (null === r || void 0 === r ? void 0 : r.position.name) || "",
                        displayStyle: (null === r || void 0 === r ? void 0 : r.position.displayStyle) || c.KLD.Tiled,
                        ads: a
                    }
                },
                m = function(e, t, n, r, a) {
                    return (0, c.pvw)(o.f6, {
                        pageSlug: e,
                        customType: r,
                        customId: a
                    }, (0, i.Z)((0, s.Z)({}, n), {
                        select: function(e) {
                            return d(e, t)
                        }
                    }))
                },
                f = function(e) {
                    return {
                        positionTitle: "",
                        displayStyle: c.KLD.Tiled,
                        ads: e.map((function(e) {
                            return {
                                title: null !== (r = e.displayTitle) && void 0 !== r ? r : "",
                                subtitle: null !== (a = e.subheading) && void 0 !== a ? a : "",
                                imageLink: e.imageLink,
                                targetLink: e.targetLink,
                                isTagShown: !1,
                                identifier: e.name
                            }
                        }))
                    }
                },
                v = function(e, t, n) {
                    return (0, l.a)(["banner-ads", t], (function() {
                        return u.x1.request(u.Hv.banner(t)).then(f)
                    }), n)
                },
                x = function(e, t, n) {
                    return (0, l.a)(["banner-ads", t], (function() {
                        return u.x1.request(u.Hv.banner(t)).then(f)
                    }), n)
                }
        },
        20416: function(e, t, n) {
            "use strict";
            n.d(t, {
                Db: function() {
                    return i
                },
                EG: function() {
                    return u
                },
                Pf: function() {
                    return l
                },
                fh: function() {
                    return o
                },
                w8: function() {
                    return d
                }
            });
            var r = n(14924),
                a = n(26756),
                s = n(66614);

            function i(e) {
                switch (e) {
                    case "ac":
                        return a.lr.Ac;
                    case "notac":
                        return a.lr.Tried;
                    default:
                        return a.lr.NotStarted
                }
            }

            function l(e) {
                switch (e) {
                    case "E":
                    case "Easy":
                        return a.Fd.Easy;
                    case "M":
                    case "Medium":
                        return a.Fd.Medium;
                    case "H":
                    case "Hard":
                        return a.Fd.Hard;
                    default:
                        return console.error("Invalid Question difficulty: ".concat(e)), a.Fd.Easy
                }
            }
            var o = function(e) {
                    var t = {
                        totalAccepted: 0,
                        totalSubmissions: 0,
                        acRate: "0%"
                    };
                    if (!e) return t;
                    try {
                        var n = JSON.parse(e);
                        return t.totalAccepted = Number(n.totalAcceptedRaw) || 0, t.totalSubmissions = Number(n.totalSubmissionRaw) || 0, t.acRate = n.acRate || "0%", t
                    } catch (r) {
                        return t
                    }
                },
                c = function(e) {
                    return e ? e.map((function(e) {
                        var t = e.name;
                        return {
                            slug: e.slug || "",
                            name: t || "",
                            timesEncountered: e.timesEncountered || 0
                        }
                    })) : []
                },
                u = function(e) {
                    var t, n = e ? JSON.parse(e) : {};
                    return t = {}, (0, r.Z)(t, s.GZ.LAST_THREE_MONTH, {
                        tags: c(n.three_months),
                        hasMore: !1
                    }), (0, r.Z)(t, s.GZ.LAST_SIX_MONTH, {
                        tags: c(n.six_months),
                        hasMore: !1
                    }), (0, r.Z)(t, s.GZ.SIX_MONTH_AGO, {
                        tags: c(n.more_than_six_months),
                        hasMore: !1
                    }), t
                },
                d = function(e) {
                    return null === e || void 0 === e ? s.F4.Neutral : e ? s.F4.Liked : s.F4.Disliked
                }
        },
        23494: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        36833: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.793 3C4.635 3 2.737 4.35 2.055 6.325a1 1 0 101.89.652C4.349 5.81 5.489 5 6.794 5c1.663 0 3 1.3 3 2.889V10H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-6.207V7.889c0-2.707-2.244-4.889-5-4.889zM12 14a2 2 0 100 4 2 2 0 000-4z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        92733: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 6l6 6-6 6",
                            opacity: .9
                        })
                    }))
                }))
        },
        17023: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2.286,
                            d: "M13.5 4l7.5 8m0 0l-7.5 8m7.5-8H3"
                        })
                    }))
                }))
        },
        98265: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M21.6 12a9.6 9.6 0 01-9.6 9.6 9.6 9.6 0 110-19.2c1.507 0 2.932.347 4.2.965M19.8 6l-8.4 8.4L9 12"
                        })
                    }))
                }))
        },
        46563: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsxs)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: [(0, s.jsx)("path", {
                            strokeWidth: 2,
                            d: "M18 12a6.002 6.002 0 01-5.004 5.918c-.545.09-.996-.366-.996-.918V7c0-.552.451-1.009.996-.918A6.002 6.002 0 0118 12z"
                        }), (0, s.jsx)("path", {
                            strokeWidth: 2,
                            d: "M21.6 12a9.6 9.6 0 01-9.6 9.6 9.6 9.6 0 119.6-9.6z",
                            clipRule: "evenodd"
                        })]
                    }))
                }))
        },
        94424: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5.414 11H21a1 1 0 110 2H5.414L12 19.586A1 1 0 0110.586 21l-8.293-8.293a.997.997 0 01.003-1.417L10.586 3A1 1 0 1112 4.414L5.414 11z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        36806: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        75247: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M16.091 4.929l-7.057 7.078 7.057 7.064a1 1 0 01-1.414 1.414l-7.764-7.77a1 1 0 010-1.415l7.764-7.785a1 1 0 111.415 1.414z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        67222: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        23860: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.707 12.293L12 16.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414zM12 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 9.586z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        6650: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M11.707 7.707L7.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414zM14.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L14.414 12z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        57845: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12.293 16.293L16.586 12l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414zM9.586 12L5.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        72004: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M17.707 11.707a1 1 0 01-1.414 0L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 010 1.414zm-1.414 7L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        30123: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M14.707 16.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L10.414 12l4.293 4.293z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        4522: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M9.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 12 9.293 7.707z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        17473: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        66360: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        99437: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        14631: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5.725 9.255h2.843a1 1 0 110 2H3.2a1 1 0 01-1-1V4.887a1 1 0 012 0v3.056l2.445-2.297a9.053 9.053 0 11-2.142 9.415 1 1 0 011.886-.665 7.053 7.053 0 1010.064-8.515 7.063 7.063 0 00-8.417 1.202L5.725 9.255z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        61815: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.793 3C4.635 3 2.737 4.35 2.055 6.325a1 1 0 101.89.652C4.349 5.81 5.489 5 6.794 5c1.663 0 3 1.3 3 2.889V10H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-6.207V7.889c0-2.707-2.244-4.889-5-4.889zM12 14a2 2 0 100 4 2 2 0 000-4z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        68352: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1.414-8l2.293 2.293a1 1 0 01-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 12 8.293 9.707a1 1 0 011.414-1.414L12 10.586l2.293-2.293a1 1 0 111.414 1.414L13.414 12z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        88850: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M10.944 9.835a1 1 0 11-1.887-.663 3.25 3.25 0 016.316 1.082c0 1.06-.618 1.884-1.57 2.52a5.915 5.915 0 01-1.364.678 1 1 0 11-.633-1.897c.205-.068.552-.222.887-.446.454-.302.68-.604.68-.857a1.25 1.25 0 00-2.43-.417zM11.186 16a1 1 0 112 0v.135a1 1 0 11-2 0V16zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        46283: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsx)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        18687: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return _
                }
            });
            var r = n(10253),
                a = n(85893),
                s = n(68779),
                i = n(67294),
                l = n(11321),
                o = n(11163),
                c = n(57538),
                u = n(83269),
                d = n(69485),
                m = n(70341),
                f = n(4563),
                v = n(21971),
                x = n(28813),
                p = n(26042),
                h = n(69396),
                g = n(63808),
                j = n(88525),
                b = n(82960),
                y = function(e) {
                    return (0, j.jHE)(g.f6, (0, h.Z)((0, p.Z)({}, e), {
                        filtersV2: (0, b.$)(e.filtersV2)
                    }), {
                        cacheTime: 0,
                        select: function(e) {
                            var t;
                            return null === (t = e.randomQuestionV2) || void 0 === t ? void 0 : t.titleSlug
                        }
                    })
                },
                C = n(62758),
                w = n(83210),
                N = n(134),
                k = n(97334),
                S = n(50438),
                _ = function(e) {
                    var t = e.slug,
                        n = e.envType,
                        p = e.categorySlug,
                        h = (0, l.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        g = (0, o.useRouter)(),
                        j = (0, k.y)().searchKeyword,
                        b = (0, r.Z)((0, c.I)("favoriteSlug"), 1)[0],
                        _ = (0, v.S)({
                            enable: !0
                        }),
                        Z = _.dataMap,
                        T = _.filterCombineType,
                        I = (0, i.useMemo)((function() {
                            return {
                                favoriteSlug: p ? void 0 : n === u.Zw.Company ? null !== b && void 0 !== b ? b : "" : t,
                                categorySlug: p,
                                filtersV2: (0, x.N)(Z, T),
                                searchKeyword: j
                            }
                        }), [p, n, b, j, t, Z, T]),
                        F = (0, i.useMemo)((function() {
                            return new URLSearchParams({
                                envType: null !== n && void 0 !== n ? n : u.Zw.Problemset,
                                envId: t || ""
                            })
                        }), [n, t]);
                    (0, f.Nd)() && F.append("id", t || "");
                    var L = (0, i.useMemo)((function() {
                            var e = F.toString(),
                                t = g.asPath.split("?")[1] || "";
                            return t ? "".concat(e, "&").concat(t) : e
                        }), [F, g.asPath]),
                        O = y(I),
                        E = O.data,
                        R = O.refetch,
                        V = (0, d.z)((function() {
                            E && (S.P.problemlistShuffleClick(), n === u.Zw.Problemset ? window.open(m.Hb.questionDetail(E), "_blank") : window.open(m.Hb.questionDetailWithLearningEnvironment(E, L), "_blank"))
                        }));
                    return (0, a.jsx)("div", {
                        children: (0, a.jsx)(C.u, {
                            label: h("random"),
                            placement: "top",
                            children: (0, a.jsx)(w.z, {
                                className: "h-8 p-2",
                                variant: "ghost",
                                size: "xs",
                                shape: "rounded",
                                disabled: !E,
                                onClick: V,
                                onMouseEnter: function() {
                                    return R()
                                },
                                children: (0, a.jsx)(N.e, {
                                    icon: s.V$d,
                                    className: "text-sd-muted-foreground",
                                    variant: "14px"
                                })
                            })
                        })
                    })
                }
        },
        32663: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return c
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(99534),
                i = n(85893),
                l = n(67294),
                o = n(12922),
                c = (0, l.forwardRef)((function(e, t) {
                    var n = e.className,
                        l = (0, s.Z)(e, ["className"]);
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)("svg", (0, a.Z)((0, r.Z)({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "currentColor",
                            className: (0, o.yI)("text-[#61DAFB]", n),
                            ref: t
                        }, l), {
                            children: [(0, i.jsx)("path", {
                                d: "M24.0001 28.275C26.3611 28.275 28.2751 26.361 28.2751 24C28.2751 21.639 26.3611 19.725 24.0001 19.725C21.6391 19.725 19.7251 21.639 19.7251 24C19.7251 26.361 21.6391 28.275 24.0001 28.275Z",
                                fill: "currentColor"
                            }), (0, i.jsx)("path", {
                                d: "M40.2374 16.95C39.4124 16.65 38.5499 16.35 37.6499 16.0875C37.8749 15.1875 38.0624 14.2875 38.2124 13.425C38.9999 8.47498 38.1374 4.98748 35.7374 3.63748C35.0249 3.22498 34.2374 3.03748 33.3374 3.03748C30.7124 3.03748 27.3749 4.98748 23.9999 8.24998C20.6249 4.98748 17.2874 3.03748 14.6624 3.03748C13.7624 3.03748 12.9749 3.22498 12.2624 3.63748C9.8624 5.02498 8.9999 8.51248 9.7874 13.425C9.9374 14.2875 10.1249 15.1875 10.3499 16.0875C9.4499 16.35 8.5874 16.6125 7.7624 16.95C3.0749 18.75 0.524902 21.225 0.524902 24C0.524902 26.775 3.1124 29.25 7.7624 31.05C8.5874 31.35 9.4499 31.65 10.3499 31.9125C10.1249 32.8125 9.9374 33.7125 9.7874 34.575C8.9999 39.525 9.8624 43.0125 12.2624 44.3625C12.9749 44.775 13.7624 44.9625 14.6624 44.9625C17.3249 44.9625 20.6624 43.0125 23.9999 39.75C27.3749 43.0125 30.7124 44.9625 33.3374 44.9625C34.2374 44.9625 35.0249 44.775 35.7374 44.3625C38.1374 42.975 38.9999 39.4875 38.2124 34.575C38.0624 33.7125 37.8749 32.8125 37.6499 31.9125C38.5499 31.65 39.4124 31.3875 40.2374 31.05C44.9249 29.25 47.4749 26.775 47.4749 24C47.4749 21.225 44.9249 18.75 40.2374 16.95ZM34.6874 5.51248C36.2249 6.41248 36.7499 9.18748 36.1124 13.125C35.9999 13.9125 35.8124 14.7375 35.5874 15.6C33.6374 15.15 31.5749 14.85 29.3999 14.6625C28.1249 12.8625 26.8124 11.25 25.4999 9.78748C28.2749 7.04998 31.0874 5.17498 33.3749 5.17498C33.8624 5.17498 34.3124 5.28748 34.6874 5.51248ZM30.4874 27.75C29.8124 28.95 29.0249 30.15 28.1999 31.35C26.8124 31.4625 25.4249 31.5 23.9999 31.5C22.5374 31.5 21.1499 31.4625 19.7999 31.35C18.9749 30.15 18.2249 28.95 17.5499 27.75C16.8374 26.5125 16.1624 25.2375 15.5624 24C16.1624 22.7625 16.8374 21.4875 17.5499 20.25C18.2249 19.05 19.0124 17.85 19.8374 16.65C21.2249 16.5375 22.6124 16.5 24.0374 16.5C25.4999 16.5 26.8874 16.5375 28.2374 16.65C29.0624 17.85 29.8124 19.05 30.4874 20.25C31.1999 21.4875 31.8749 22.7625 32.4749 24C31.8374 25.2375 31.1999 26.475 30.4874 27.75ZM33.5999 26.5125C34.1624 27.825 34.6124 29.1 35.0249 30.375C33.7499 30.675 32.3999 30.9 30.9749 31.0875C31.4249 30.375 31.9124 29.625 32.3249 28.8375C32.7749 28.05 33.1874 27.2625 33.5999 26.5125ZM23.9999 36.675C23.0999 35.7 22.2374 34.65 21.4124 33.5625C22.2749 33.6 23.1374 33.6375 23.9999 33.6375C24.8624 33.6375 25.7249 33.6 26.5874 33.5625C25.7624 34.65 24.8999 35.7 23.9999 36.675ZM17.0249 31.05C15.5999 30.8625 14.2499 30.6375 12.9749 30.3375C13.3874 29.1 13.8374 27.7875 14.3999 26.475C14.8124 27.225 15.2249 28.0125 15.6749 28.7625C16.1249 29.5875 16.5749 30.3 17.0249 31.05ZM14.3999 21.4875C13.8374 20.175 13.3874 18.9 12.9749 17.625C14.2499 17.325 15.5999 17.1 17.0249 16.9125C16.5749 17.625 16.0874 18.375 15.6749 19.1625C15.2249 19.95 14.8124 20.7375 14.3999 21.4875ZM23.9999 11.325C24.8999 12.3 25.7624 13.35 26.5874 14.4375C25.7249 14.4 24.8624 14.3625 23.9999 14.3625C23.1374 14.3625 22.2749 14.4 21.4124 14.4375C22.2374 13.35 23.0999 12.3 23.9999 11.325ZM32.3249 19.2L30.9749 16.95C32.3999 17.1375 33.7499 17.3625 35.0249 17.6625C34.6124 18.9 34.1624 20.2125 33.5999 21.525C33.1874 20.7375 32.7749 19.95 32.3249 19.2ZM11.8874 13.125C11.2499 9.18748 11.7749 6.41248 13.3124 5.51248C13.6874 5.28748 14.1374 5.17498 14.6249 5.17498C16.8749 5.17498 19.6874 7.01248 22.4999 9.78748C21.1874 11.2125 19.8749 12.8625 18.5999 14.6625C16.4249 14.85 14.3624 15.1875 12.4124 15.6C12.1874 14.7375 12.0374 13.9125 11.8874 13.125ZM2.6249 24C2.6249 22.2375 4.7624 20.3625 8.5124 18.975C9.2624 18.675 10.0874 18.4125 10.9124 18.1875C11.5124 20.0625 12.2624 22.05 13.1624 24.0375C12.2624 26.025 11.4749 27.975 10.9124 29.85C5.7374 28.35 2.6249 26.1 2.6249 24ZM13.3124 42.4875C11.7749 41.5875 11.2499 38.8125 11.8874 34.875C11.9999 34.0875 12.1874 33.2625 12.4124 32.4C14.3624 32.85 16.4249 33.15 18.5999 33.3375C19.8749 35.1375 21.1874 36.75 22.4999 38.2125C19.7249 40.95 16.9124 42.825 14.6249 42.825C14.1374 42.825 13.6874 42.7125 13.3124 42.4875ZM36.1124 34.875C36.7499 38.8125 36.2249 41.5875 34.6874 42.4875C34.3124 42.7125 33.8624 42.825 33.3749 42.825C31.1249 42.825 28.3124 40.9875 25.4999 38.2125C26.8124 36.7875 28.1249 35.1375 29.3999 33.3375C31.5749 33.15 33.6374 32.8125 35.5874 32.4C35.8124 33.2625 35.9624 34.0875 36.1124 34.875ZM39.4874 29.025C38.7374 29.325 37.9124 29.5875 37.0874 29.8125C36.4874 27.9375 35.7374 25.95 34.8374 23.9625C35.7374 21.975 36.5249 20.025 37.0874 18.15C42.2624 19.65 45.3749 21.9 45.3749 24C45.3749 25.7625 43.1999 27.6375 39.4874 29.025Z",
                                fill: "currentColor"
                            })]
                        }))
                    })
                }))
        },
        8254: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return c
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(99534),
                i = n(85893),
                l = n(67294),
                o = n(12922),
                c = (0, l.forwardRef)((function(e, t) {
                    var n = e.className,
                        l = (0, s.Z)(e, ["className"]);
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("svg", (0, a.Z)((0, r.Z)({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "currentColor",
                            className: (0, o.yI)("text-[#83CD29]", n),
                            ref: t
                        }, l), {
                            children: (0, i.jsx)("path", {
                                d: "M42.2891 11.3753L25.7528 1.77338C24.7099 1.17938 23.352 1.17938 22.3009 1.77338L5.58788 11.3753C4.51163 11.9944 3.75 13.158 3.75 14.4026V33.5809C3.75 34.8255 4.5315 35.9895 5.60775 36.612L10.0234 39.12C12.1339 40.1595 12.8798 40.1595 13.8401 40.1595C16.965 40.1595 18.75 38.2699 18.75 34.974V16.0403C18.75 15.7729 18.6109 15.375 18.3484 15.375H16.2397C15.9727 15.375 15.375 15.7729 15.375 16.0399V34.9736C15.375 36.4346 14.0535 37.8885 11.5837 36.6536L7.02112 34.0238C6.86212 33.9375 6.75 33.7639 6.75 33.5809V14.4026C6.75 14.2219 6.95813 14.0404 7.11825 13.9478L23.7772 4.36238C23.9329 4.27426 24.1616 4.27426 24.3169 4.36238L40.7726 13.9455C40.9301 14.0404 40.8746 14.2163 40.8746 14.4026V33.5809C40.8746 33.7639 40.9432 33.942 40.7876 34.0301L24.2554 43.6211C24.1136 43.7063 23.9377 43.7063 23.7825 43.6211L19.5424 41.0903C19.4145 41.016 19.2626 40.9894 19.14 41.058C17.9603 41.7266 17.7427 41.8155 16.6361 42.1991C16.3639 42.294 15.9622 42.4586 16.7899 42.9225L22.3391 46.2053C22.8689 46.5113 23.4699 46.6724 24.0818 46.6725C24.6975 46.6725 25.3005 46.5128 25.8319 46.2053L42.2887 36.612C43.365 35.985 43.875 34.8255 43.875 33.5809V14.4026C43.875 13.158 43.365 11.9974 42.2891 11.3753ZM29.2163 30.5419C24.819 30.5419 23.8504 29.3288 23.5275 27.1421C23.49 26.9066 23.2901 26.625 23.0505 26.625H20.9014C20.6355 26.625 20.4217 26.9475 20.4217 27.2123C20.4217 30.012 21.9439 33.4043 29.2166 33.4043C34.4813 33.4043 37.4996 31.3586 37.4996 27.7384C37.4996 24.1489 35.0745 23.2069 29.9689 22.5311C24.8081 21.849 24.2839 21.5044 24.2839 20.2954C24.2839 19.2986 24.7279 17.9693 28.5491 17.9693C31.9635 17.9693 33.222 18.702 33.7399 21.0034C33.7841 21.2198 33.9817 21.375 34.2049 21.375H36.3626C36.4954 21.375 36.6221 21.3214 36.7151 21.2265C36.8051 21.1245 36.8527 20.9966 36.8407 20.8594C36.5066 16.8964 33.8737 15.0495 28.5487 15.0495C23.8121 15.0495 20.9865 17.0498 20.9865 20.4026C20.9865 24.0394 23.7979 25.0444 28.3447 25.494C33.7841 26.0273 34.2071 26.8223 34.2071 27.8921C34.2071 29.7503 32.7154 30.5419 29.2163 30.5419Z",
                                fill: "currentColor"
                            })
                        }))
                    })
                }))
        },
        70067: function(e, t, n) {
            "use strict";
            n.d(t, {
                vs: function() {
                    return g
                }
            });
            var r = n(85893),
                a = n(94184),
                s = n.n(a),
                i = n(67294),
                l = n(41664),
                o = n.n(l),
                c = n(62758),
                u = n(26042),
                d = n(69396),
                m = i.forwardRef((function(e, t) {
                    return (0, r.jsx)("svg", (0, d.Z)((0, u.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18.741 6.75H20.5a1 1 0 011 1V12a1 1 0 01-1 1h-.7v7.5a1 1 0 01-1 1H5.2a1 1 0 01-1-1V13h-.7a1 1 0 01-1-1V7.75a1 1 0 011-1h1.759A3.125 3.125 0 018.175 2.5c1.68 0 2.94.968 3.825 2.502.885-1.534 2.145-2.502 3.825-2.502a3.125 3.125 0 012.916 4.25zm-2.916 0a1.125 1.125 0 000-2.25c-.872 0-1.58.566-2.152 1.607a6.57 6.57 0 00-.308.643h2.46zM13 8.75V11h6.5V8.75H13zm-2 0H4.5V11H11V8.75zm-2.825-2h2.46a6.57 6.57 0 00-.308-.643C9.754 5.066 9.047 4.5 8.175 4.5a1.125 1.125 0 000 2.25zM13 19.5h4.8V13H13v6.5zm-2 0V13H6.2v6.5H11z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                f = n(15371),
                v = n(88525),
                x = n(63808);
            var p = n(70341),
                h = {
                    revertBackIcon: s()("w-full h-full", f.Cj.label2),
                    feedbackIcon: s()("w-full h-full", f.Cj.labelBlueStandard)
                },
                g = function() {
                    var e, t, n, a = s()(f.eq.card, f.Cj.bgLayer1, "cursor-pointer group h-12 w-12 rounded-lg flex mb-3 last:mb-0"),
                        l = s()(f.Cj.fill4Hover, "h-full w-full rounded-lg flex"),
                        u = (n = !0, (0, v.Kt6)(x.f6, void 0, {
                            enabled: n
                        })),
                        d = null === (e = u.data) || void 0 === e ? void 0 : e.didCompleteUpc,
                        g = null === (t = u.data) || void 0 === t ? void 0 : t.user,
                        j = (null === g || void 0 === g ? void 0 : g.joinedTimestamp) || 0,
                        b = (0, i.useMemo)((function() {
                            return Math.floor((Date.now() / 1e3 - j) / 86400)
                        }), [j]),
                        y = (0, i.useMemo)((function() {
                            return !d && b <= 14
                        }), [d, b]),
                        C = (0, i.useMemo)((function() {
                            return 14 - b ? 14 - b : 1
                        }), [b]);
                    return (0, r.jsx)("div", {
                        className: "z-overlay fixed bottom-4 right-4 md:bottom-[31px] md:right-[30px]",
                        children: y && (0, r.jsx)(c.u, {
                            placement: "left",
                            label: "Complete your profile within ".concat(C, " day").concat(1 === C ? "s" : "", " to unlock an exclusive starter list!"),
                            children: (0, r.jsx)("div", {
                                className: "mb-3",
                                children: (0, r.jsx)(o(), {
                                    href: p.Hb.onboarding(),
                                    passHref: !0,
                                    children: (0, r.jsx)("a", {
                                        "aria-label": "complete your profile",
                                        href: p.Hb.onboarding(),
                                        children: (0, r.jsx)("div", {
                                            className: a,
                                            children: (0, r.jsx)("div", {
                                                className: l,
                                                children: (0, r.jsx)("div", {
                                                    className: "w-6 m-auto",
                                                    children: (0, r.jsx)(m, {
                                                        className: h.feedbackIcon
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
        },
        99299: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return a
                }
            });
            var r = n(15371),
                a = {
                    menuButton: "flex items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5",
                    menuButtonBg: r.Cj.fill3,
                    menuButtonText: r.Cj.label2,
                    menuButtonHover: r.Cj.fill2Hover,
                    menuButtonActive: "active:bg-fill-3 dark:active:bg-dark-fill-3",
                    menuButtonIcon: "w-4.5 h-4.5 ml-3 pointer-events-none transition duration-300 ".concat(r.Cj.label3),
                    menuButtonDisabled: r.Cj.label4,
                    dropdownTransition: {
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95 hidden",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95 hidden"
                    },
                    menuItems: "max-w-[15rem] min-w-[8.75rem] absolute z-dropdown mt-1 rounded-lg p-2 overflow-auto focus:outline-none ".concat(r.eq.commandBar),
                    menuItemsMaxH: "max-h-[600px]",
                    menuItemsBg: r.Cj.bgOverlay3,
                    menuItem: "cursor-pointer select-none relative h-8 py-1.5 pl-2 pr-12",
                    menuItemText: r.Cj.label1,
                    menuItemActive: "rounded ".concat(r.Cj.fill4),
                    menuItemHover: r.Cj.fill4Hover,
                    menuItemSelectedIconWrapper: "absolute inset-y-0 right-0 flex items-center pr-2 text-blue dark:text-dark-blue",
                    popoverTransition: {
                        enter: "transition ease-out duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    },
                    popoverPanel: "absolute w-max max-w-xs z-dropdown mt-1 p-2.5 rounded-lg focus:outline-none"
                }
        },
        22201: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return u
                }
            });
            var r = n(85893),
                a = (n(67294), n(11321)),
                s = n(62758),
                i = n(99437),
                l = n(98265),
                o = n(46563),
                c = n(26756),
                u = function(e) {
                    var t = e.question,
                        n = e.isPremiumUser,
                        u = (0, a.$G)("question-list").t;
                    return t.paidOnly && !n ? (0, r.jsx)(i.d, {
                        className: "text-brand-orange h-[18px] w-[18px]"
                    }) : t.status === c.lr.Ac ? (0, r.jsx)(s.u, {
                        label: u("status.solved"),
                        children: (0, r.jsx)("span", {
                            children: (0, r.jsx)(l.A, {
                                className: "h-4.5 w-4.5 text-lc-green-60 dark:text-dark-lc-green-60 inline-block shrink-0 fill-none stroke-current"
                            })
                        })
                    }) : t.status === c.lr.Tried ? (0, r.jsx)(s.u, {
                        label: u("status.attempted"),
                        children: (0, r.jsx)("span", {
                            className: "mr-1",
                            children: (0, r.jsx)(o.V, {
                                className: "h-4.5 w-4.5 text-lc-yellow-60 dark:text-dark-lc-yellow-60 inline-block shrink-0 fill-none stroke-current"
                            })
                        })
                    }) : null
                }
        },
        26756: function(e, t, n) {
            "use strict";
            var r, a, s, i, l;
            n.d(t, {
                    Fd: function() {
                        return r
                    },
                    S5: function() {
                        return i
                    },
                    lr: function() {
                        return a
                    },
                    mZ: function() {
                        return s
                    },
                    sQ: function() {
                        return l
                    }
                }),
                function(e) {
                    e.Easy = "EASY", e.Medium = "MEDIUM", e.Hard = "HARD"
                }(r || (r = {})),
                function(e) {
                    e.NotStarted = "NOT_STARTED", e.Ac = "AC", e.Tried = "TRIED"
                }(a || (a = {})),
                function(e) {
                    e.Ascending = "ASCENDING", e.Descending = "DESCENDING"
                }(s || (s = {})),
                function(e) {
                    e.FrontendId = "FRONTEND_ID", e.SolutionNum = "SOLUTION_NUM", e.AcRate = "AC_RATE", e.Frequency = "FREQUENCY", e.Difficulty = "DIFFICULTY"
                }(i || (i = {})),
                function(e) {
                    e.FRONTEND_ID = "title", e.SOLUTION_NUM = "solution", e.AC_RATE = "acRate", e.FREQUENCY = "frequency", e.DIFFICULTY = "difficulty"
                }(l || (l = {}))
        },
        83338: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return r
                }
            });
            var r = function() {
                return !1
            }
        },
        6199: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return v
                }
            });
            var r = n(14924),
                a = n(85893),
                s = (n(67294), n(11321)),
                i = n(12922),
                l = n(15371),
                o = n(23494),
                c = n(36833),
                u = n(93531),
                d = n(62e3),
                m = function(e) {
                    var t = e.isLock,
                        n = e.title,
                        r = e.showLock,
                        s = e.className,
                        u = (0, i.yI)("font-['Helvetica_Neue',sans-serif] text-body font-medium mb-1.5 line-clamp-1", l.xy.labelTextPrimary);
                    return (0, a.jsxs)("div", {
                        className: "flex items-start",
                        children: [(0, a.jsx)("p", {
                            className: (0, i.yI)(u, s),
                            children: n
                        }), r ? t ? (0, a.jsx)(o.Z, {
                            className: "ml-2 mt-0.5 inline-block h-4 w-4 shrink-0 text-[#FFA116]"
                        }) : (0, a.jsx)(c.i, {
                            className: "ml-2 mt-0.5 inline-block h-4 w-4 shrink-0 text-[#FFA116]"
                        }) : null]
                    })
                },
                f = function(e) {
                    var t, n = e.showOngoingTag,
                        c = e.status,
                        f = e.showLock,
                        v = e.title,
                        x = e.image,
                        p = e.desc,
                        h = e.totalProgress,
                        g = e.doneProgress,
                        j = e.isLock,
                        b = e.completedTime,
                        y = e.giveUpTime,
                        C = e.onClick,
                        w = e.onClickTitle,
                        N = e.isLockTitle,
                        k = (0, s.$G)("new-study-plan", {
                            keyPrefix: "common"
                        }).t,
                        S = (0, s.$G)("new-study-plan", {
                            keyPrefix: "detail"
                        }).t,
                        _ = (0, i.yI)("font-['Helvetica_Neue',sans-serif] text-caption opacity-50", l.xy.labelTextPrimary),
                        Z = (0, i.yI)("font-['Helvetica_Neue',sans-serif] text-caption", l.xy.labelTextPrimary),
                        T = (0, i.yI)("font-['Helvetica_Neue',sans-serif] text-[12px] font-medium opacity-50", l.xy.labelTextSecondary),
                        I = (0, i.yI)("font-['Helvetica_Neue',sans-serif] text-[12px] font-medium mr-1", l.xy.labelTextPrimary);
                    return (0, a.jsxs)("div", {
                        className: (0, i.yI)("relative flex cursor-pointer items-start p-2 duration-300", l.xy.bgLayer01, (t = {}, (0, r.Z)(t, (0, i.yI)(l.qV.bgLayer01, l.$e.down01, "hover:shadow-down-02"), "ad" === c), (0, r.Z)(t, (0, i.yI)(l.qV.bgFill02), "ad" !== c), (0, r.Z)(t, "rounded-[4px]", "card" === c), (0, r.Z)(t, "rounded-lg", "card" !== c), t), "dark:hover:bg-dark-lc-fill-02 dark:shadow-none dark:hover:shadow-none"),
                        onClick: C,
                        children: [(0, a.jsx)("img", {
                            alt: v,
                            src: x,
                            className: (0, i.yI)("rounded-[4px]", {
                                "mr-3 h-14 w-14": "card" === c,
                                "mr-3.5 h-[72px] w-[72px]": "card" !== c
                            }),
                            style: "ad" === c || "notJoin" === c ? {} : {
                                filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.02)) drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.02)) drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.02))"
                            }
                        }), (0, a.jsxs)("div", {
                            className: (0, i.yI)("flex-grow", {
                                "py-1": "card" !== c,
                                "h-[56px]": "card" === c,
                                "h-[72px]": "card" !== c
                            }),
                            children: ["card" === c && (0, a.jsxs)("div", {
                                className: "flex h-14 flex-col justify-center",
                                children: [(0, a.jsx)(m, {
                                    title: v,
                                    isLock: j,
                                    showLock: f,
                                    className: (0, i.yI)("text-xs", l.qV.labelSystemPrimary)
                                }), (0, a.jsxs)("div", {
                                    className: "mx-0 -mt-1 mb-0.5 flex items-center",
                                    children: [(0, a.jsx)(u.E, {
                                        className: (0, i.yI)("h-1.5 w-full", l.xy.bgFill03),
                                        barClassName: "bg-[linear-gradient(90deg,#007AFF_0%,#7ED1FF_99.66%)]",
                                        value: +(g / h * 100).toFixed(0)
                                    }), (0, a.jsxs)("p", {
                                        className: (0, i.yI)(Z, "ml-1.5"),
                                        children: [(g / h * 100).toFixed(0), "%"]
                                    })]
                                }), (0, a.jsx)("div", {
                                    onClick: w,
                                    children: N ? (0, a.jsxs)("div", {
                                        className: (0, i.yI)("flex items-center text-[12px]", l.xy.labelTextTertiary),
                                        children: [(0, a.jsx)(o.Z, {
                                            className: "mr-1.5 inline-block h-3.5 w-3.5 shrink-0 text-[#FFA116]"
                                        }), (0, a.jsx)("p", {
                                            children: S("subscribeToUnlock")
                                        })]
                                    }) : (0, a.jsx)(d.J, {
                                        className: (0, i.yI)("text-caption font-['Helvetica_Neue',sans-serif]", l.xy.labelTextTertiary, l.qV.labelSystemPrimary),
                                        children: p
                                    })
                                })]
                            }), "ad" === c && (0, a.jsxs)("div", {
                                className: "flex h-full flex-col justify-center",
                                children: [(0, a.jsx)(m, {
                                    title: v,
                                    showLock: f,
                                    isLock: j,
                                    className: "line-clamp-2"
                                }), (0, a.jsx)(d.J, {
                                    className: (0, i.yI)("text-caption font-['Helvetica_Neue',sans-serif]", l.xy.labelTextTertiary),
                                    children: p
                                })]
                            }), ("notJoin" === c || !c) && (0, a.jsxs)("div", {
                                className: "flex h-full flex-col justify-center",
                                children: [(0, a.jsx)(m, {
                                    title: v,
                                    showLock: f,
                                    isLock: j,
                                    className: "line-clamp-2"
                                }), (0, a.jsx)(d.J, {
                                    className: (0, i.yI)("text-caption font-['Helvetica_Neue',sans-serif]", l.xy.labelTextTertiary),
                                    children: p
                                }), n && (0, a.jsx)("div", {
                                    className: (0, i.yI)("text-caption absolute right-0 top-0 h-[22px] rounded-bl-lg rounded-tr-lg px-2 py-0 leading-[22px]", l.xy.bgSupportInfo, l.xy.labelSystemPrimary),
                                    children: k("ongoing")
                                })]
                            }), "inProgress" === c && (0, a.jsxs)("div", {
                                className: "flex flex-col justify-center pr-1",
                                children: [(0, a.jsx)(m, {
                                    showLock: f,
                                    title: v,
                                    isLock: j
                                }), (0, a.jsx)("div", {
                                    className: "mb-[11px] mt-[5px]",
                                    children: (0, a.jsx)(u.E, {
                                        className: (0, i.yI)("h-1.5", l.xy.bgFill03),
                                        barClassName: "bg-[linear-gradient(90deg,#007AFF_0%,#7ED1FF_99.66%)]",
                                        value: +(g / h * 100).toFixed(0)
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0, a.jsx)("p", {
                                        className: _,
                                        children: k("totalProgress")
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, a.jsx)("p", {
                                            className: I,
                                            children: g
                                        }), (0, a.jsxs)("p", {
                                            className: T,
                                            children: ["/ ", h]
                                        })]
                                    })]
                                })]
                            }), "completed" === c && (0, a.jsxs)("div", {
                                className: "flex flex-col pr-1",
                                children: [(0, a.jsx)(m, {
                                    showLock: f,
                                    title: v,
                                    isLock: j
                                }), (0, a.jsxs)("div", {
                                    className: "mb-1 flex items-center justify-between",
                                    children: [(0, a.jsx)("p", {
                                        className: _,
                                        children: k("progress")
                                    }), (0, a.jsxs)("p", {
                                        className: Z,
                                        children: [g, " / ", h]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "mb-1 flex items-center justify-between",
                                    children: [(0, a.jsx)("p", {
                                        className: _,
                                        children: k("completed")
                                    }), (0, a.jsx)("p", {
                                        className: Z,
                                        children: b
                                    })]
                                })]
                            }), "giveUp" === c && (0, a.jsxs)("div", {
                                className: "flex flex-col pr-1",
                                children: [(0, a.jsx)(m, {
                                    showLock: f,
                                    title: v,
                                    isLock: j
                                }), (0, a.jsxs)("div", {
                                    className: "mb-1 flex items-center justify-between",
                                    children: [(0, a.jsx)("p", {
                                        className: _,
                                        children: k("progress")
                                    }), (0, a.jsxs)("p", {
                                        className: Z,
                                        children: [g, " / ", h]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "mb-1 flex items-center justify-between",
                                    children: [(0, a.jsx)("p", {
                                        className: _,
                                        children: k("giveUp")
                                    }), (0, a.jsx)("p", {
                                        className: Z,
                                        children: y
                                    })]
                                })]
                            })]
                        })]
                    })
                };
            f.displayName = "StudyPlanCard";
            var v = f
        },
        59646: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return o
                }
            });
            var r = n(85893),
                a = (n(67294), n(46398)),
                s = n(12922),
                i = n(15371),
                l = function(e) {
                    var t = e.status;
                    return (0, r.jsx)(a.O, {
                        children: (0, r.jsxs)("div", {
                            className: (0, s.yI)("flex items-start rounded-lg p-2", i.xy.bgLayer01),
                            children: [(0, r.jsx)("div", {
                                className: (0, s.yI)("rounded-[4px]", i.xy.bgFill02, {
                                    "h-[56px] w-[56px]": "card" === t,
                                    "h-[72px] w-[72px]": "card" !== t,
                                    "mr-3": "card" === t,
                                    "mr-3.5": "card" !== t
                                })
                            }), (0, r.jsxs)("div", {
                                className: (0, s.yI)("flex-grow py-1", {
                                    "h-[56px]": "card" === t,
                                    "h-[72px]": "card" !== t
                                }),
                                children: [("notJoin" === t || !t || "ad" === t) && (0, r.jsxs)("div", {
                                    className: "flex h-full flex-col justify-center gap-1.5",
                                    children: [(0, r.jsx)("div", {
                                        className: (0, s.yI)("h-5 w-16 rounded-[4px]", i.xy.bgFill02)
                                    }), (0, r.jsx)("div", {
                                        className: (0, s.yI)("h-4 w-full rounded-[4px]", i.xy.bgFill02)
                                    })]
                                }), "inProgress" === t && (0, r.jsxs)("div", {
                                    className: "flex h-[72px] flex-col justify-center",
                                    children: [(0, r.jsx)("div", {
                                        className: (0, s.yI)("h-5 w-16 rounded-[4px]", i.xy.bgFill02)
                                    }), (0, r.jsx)("div", {
                                        className: (0, s.yI)("my-[11px] h-1.5 w-full rounded-[4px]", i.xy.bgFill02)
                                    }), (0, r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0, r.jsx)("div", {
                                            className: (0, s.yI)("h-4 w-14 rounded-[4px]", i.xy.bgFill02)
                                        }), (0, r.jsx)("div", {
                                            className: (0, s.yI)("h-4 w-12 rounded-[4px]", i.xy.bgFill02)
                                        })]
                                    })]
                                }), "completed" === t && (0, r.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, r.jsx)("div", {
                                        className: (0, s.yI)("h-5 w-16 rounded-[4px]", i.xy.bgFill02)
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-1 flex justify-between",
                                        children: [(0, r.jsx)("div", {
                                            className: (0, s.yI)("h-4 w-[30px] rounded-[4px]", i.xy.bgFill02)
                                        }), (0, r.jsx)("div", {
                                            className: (0, s.yI)("h-4 w-12 rounded-[4px]", i.xy.bgFill02)
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-1 flex justify-between",
                                        children: [(0, r.jsx)("div", {
                                            className: (0, s.yI)("h-4 w-[30px] rounded-[4px]", i.xy.bgFill02)
                                        }), (0, r.jsx)("div", {
                                            className: (0, s.yI)("h-4 w-12 rounded-[4px]", i.xy.bgFill02)
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                };
            l.displayName = "StudyPlanCardSkeleton";
            var o = l
        },
        89117: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return i
                },
                y: function() {
                    return s
                }
            });
            var r = n(88525),
                a = n(63808),
                s = function(e, t) {
                    return (0, r.LG7)(a.f6, {
                        offset: (e - 1) * t,
                        limit: t,
                        progressType: r.X3u.OnGoing
                    }, {
                        select: function(e) {
                            return e.studyPlanV2UserProgresses
                        }
                    })
                },
                i = function(e, t) {
                    return (0, r.LG7)(a.f6, {
                        offset: (e - 1) * t,
                        limit: t,
                        progressType: r.X3u.History
                    }, {
                        select: function(e) {
                            return e.studyPlanV2UserProgresses
                        }
                    })
                }
        },
        91635: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return m
                },
                default: function() {
                    return f
                }
            });
            var r = n(85893),
                a = n(9008),
                s = n.n(a),
                i = n(94184),
                l = n.n(i),
                o = n(11321),
                c = n(15371),
                u = n(97516),
                d = n(99184),
                m = !0;

            function f() {
                var e = (0, o.$G)("common").t;
                return (0, r.jsxs)(u.A, {
                    children: [(0, r.jsx)(s(), {
                        children: (0, r.jsx)("title", {
                            children: e("404.title")
                        })
                    }), (0, r.jsx)(d.F, {}), (0, r.jsxs)("div", {
                        className: "mt-40 flex w-full flex-col items-center justify-center space-y-2 md:flex-row md:space-x-[20px] md:space-y-0",
                        children: [(0, r.jsx)("img", {
                            className: "w-[270px]",
                            src: "/static/images/404_face.png",
                            alt: "404 not found"
                        }), (0, r.jsxs)("div", {
                            className: "text-center md:text-left",
                            children: [(0, r.jsx)("h1", {
                                className: l()(c.Cj.label2, "text-xl font-bold"),
                                children: e("404.pageNotFound")
                            }), (0, r.jsx)("p", {
                                className: l()(c.Cj.label3, "mt-2 max-w-[300px] text-sm"),
                                children: e("404.message")
                            })]
                        })]
                    })]
                })
            }
        },
        64336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return li
                },
                default: function() {
                    return oi
                }
            });
            var r, a = n(85893),
                s = n(11321),
                i = n(11163),
                l = n.n(i),
                o = n(67294),
                c = n(24138),
                u = n(99184),
                d = n(36492),
                m = n(29815),
                f = n(8276),
                v = n(68708),
                x = [{
                    title: "Code Essentials",
                    slug: "code-essentials"
                }, {
                    title: "Frontend",
                    slug: "frontend"
                }],
                p = ["vanilla-js", "vanillajs", "react"],
                h = [{
                    title: "All Topics",
                    titleSlug: "all-code-essentials",
                    info: null,
                    categoryGroup: "code-essentials"
                }, {
                    title: "All Frameworks",
                    titleSlug: "all-frontend",
                    info: null,
                    categoryGroup: "frontend"
                }],
                g = function() {
                    return ((0, v.jU)() ? f.x1 : f.hx).request(f.Hv.problemsCategories).then((function(e) {
                        var t = e.categories[0].map((function(e) {
                                return {
                                    title: e.title,
                                    titleSlug: e.slug,
                                    info: null,
                                    categoryGroup: (t = e.slug, p.includes(t) ? "frontend" : "code-essentials")
                                };
                                var t
                            })),
                            n = t.some((function(e) {
                                return "frontend" === e.categoryGroup
                            })),
                            r = n ? x : [],
                            a = n ? h : h.filter((function(e) {
                                return "frontend" !== e.categoryGroup
                            }));
                        return {
                            categories: (0, m.Z)(a).concat((0, m.Z)(t)),
                            categoryGroups: r
                        }
                    }))
                },
                j = function() {
                    return (0, d.a)(["problemset-categories"], (function() {
                        return g()
                    }))
                },
                b = n(94184),
                y = n.n(b),
                C = n(14924),
                w = n(26042),
                N = n(69396),
                k = n(10253),
                S = n(8183),
                _ = n(23025),
                Z = function(e) {
                    var t = {
                        key: "problemset_page_exposure",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                T = function(e) {
                    var t = {
                        key: "problemset_topic_tags_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                I = function() {
                    var e = {
                        key: "problemset_topic_tags_expand_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                F = function(e) {
                    var t = {
                        key: "problemset_switch_category_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                L = function(e) {
                    var t = {
                        key: "problemset_filter_status_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                O = function(e) {
                    var t = {
                        key: "problemset_filter_list_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                E = function(e) {
                    var t = {
                        key: "problemset_filter_difficulty_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                R = function(e) {
                    var t = {
                        key: "problemset_filter_tag_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                V = function() {
                    var e = {
                        key: "problemset_search_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                A = function(e) {
                    var t = {
                        key: "problemset_show_topic_tags_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                M = function(e) {
                    var t = {
                        key: "problemset_show_company_tags_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                B = function(e) {
                    var t = {
                        key: "problemset_show_premium_only_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                P = function() {
                    var e = {
                        key: "problemset_random_question_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                D = function(e) {
                    var t = {
                        key: "problemset_select_question_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                H = function() {
                    var e = {
                        key: "problemset_question_next_page_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                q = function(e) {
                    var t = {
                        key: "problemset_dcc_calendar_date_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                G = function(e) {
                    var t = {
                        key: "problemset_dcc_calendar_week_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                X = function() {
                    var e = {
                        key: "problemset_dcc_ttt_redeem_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                z = function(e) {
                    var t = {
                        key: "problemset_popular_company_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                W = function() {
                    var e = {
                        key: "problemset_popular_company_more_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                U = function() {
                    var e = {
                        key: "problemset_question_order_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                Q = function() {
                    var e = {
                        key: "problemset_difficulty_order_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                K = function() {
                    var e = {
                        key: "problemset_status_order_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                $ = function() {
                    var e = {
                        key: "problemset_frequency_order_click",
                        data: {}
                    };
                    S.V[_.X.GIO](e), S.V[_.X.GA4](e), S.V[_.X.CONSOLE](e), S.V[_.X.SELF_DB](e)
                },
                J = function(e) {
                    var t = {
                        key: "problemset_ad_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                Y = function(e) {
                    var t = {
                        key: "problemset_ad_exposure",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                ee = function(e) {
                    var t = {
                        key: "problemset_popular_company_search_click",
                        data: e
                    };
                    S.V[_.X.GIO](t), S.V[_.X.GA4](t), S.V[_.X.CONSOLE](t), S.V[_.X.SELF_DB](t)
                },
                te = n(63808),
                ne = n(88525),
                re = function(e) {
                    return (0, ne.ihS)(te.f6, e, {
                        select: function(e) {
                            var t;
                            return null === (t = e.randomQuestion) || void 0 === t ? void 0 : t.titleSlug
                        },
                        enabled: !1
                    })
                },
                ae = n(87887),
                se = n(57538),
                ie = n(70341),
                le = function() {
                    return (0, d.a)(["problems-list"], (function() {
                        return f.x1.request(f.Hv.problemsList)
                    }), {
                        select: function(e) {
                            return e.filter((function(e) {
                                return "Challenges for New Users" !== e.name
                            }))
                        }
                    })
                },
                oe = n(14428),
                ce = n(23874),
                ue = function(e) {
                    var t, n, r = null !== (n = null === (t = e.questionTopicTags) || void 0 === t ? void 0 : t.edges.map((function(e) {
                            return null === e || void 0 === e ? void 0 : e.node
                        }))) && void 0 !== n ? n : [],
                        a = oe.Z.compact(r.map((function(e) {
                            var t;
                            return e && (null === (t = e.questionIds) || void 0 === t ? void 0 : t.length) ? {
                                id: e.id,
                                name: e.name,
                                slug: e.slug,
                                translatedName: e.translatedName,
                                questionCount: e.questionIds.length
                            } : null
                        }))),
                        s = oe.Z.sortBy(a, (function(e) {
                            return e.questionCount
                        }));
                    return oe.Z.reverse(s)
                },
                de = function(e) {
                    return (0, ce.g5e)(te.f6, {}, (0, N.Z)((0, w.Z)({}, e), {
                        select: ue
                    }))
                },
                me = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M2.398 18.296H5.38a3.6 3.6 0 002.93-1.508l1.023-1.433m11.522-9.71h-2.98a3.6 3.6 0 00-2.93 1.507l-1.146 1.603m5.298-5.747l2.502 2.636-2.502 2.637m0 7.438l2.502 2.636-2.502 2.637M2.398 6.052H5.38a3.6 3.6 0 012.93 1.507l6.635 9.289a3.6 3.6 0 002.93 1.507h2.98"
                        })
                    }))
                })),
                fe = n(17396),
                ve = fe.dE,
                xe = n(83269),
                pe = n(72510),
                he = n(84539),
                ge = n(12922),
                je = n(36806),
                be = n(66360),
                ye = n(44765),
                Ce = n(99299),
                we = function(e) {
                    var t = e.text,
                        n = e.items,
                        r = e.selected,
                        s = e.setSelected,
                        i = e.className,
                        l = e.wrapperClassName,
                        c = e.disabled,
                        u = void 0 !== c && c;
                    return (0, a.jsxs)(pe.v, {
                        as: "div",
                        className: (0, ge.yI)("relative", l),
                        children: [(0, a.jsx)("div", {
                            className: "w-full",
                            children: (0, a.jsx)(pe.v.Button, {
                                disabled: u,
                                className: (0, ge.yI)(Ce.W.menuButton, Ce.W.menuButtonBg, u ? [Ce.W.menuButtonDisabled, "!cursor-default"] : [Ce.W.menuButtonText, Ce.W.menuButtonHover, Ce.W.menuButtonActive], "flex w-full justify-between", i),
                                children: function(e) {
                                    var n = e.open;
                                    return (0, a.jsxs)(a.Fragment, {
                                        children: [t, (0, a.jsx)(je.C, {
                                            className: (0, ge.yI)(Ce.W.menuButtonIcon, (0, C.Z)({
                                                "rotate-180 transform": n
                                            }, Ce.W.menuButtonDisabled, u)),
                                            "aria-hidden": "true"
                                        })]
                                    })
                                }
                            })
                        }), !u && (0, a.jsx)(he.u, (0, N.Z)((0, w.Z)({
                            as: o.Fragment
                        }, Ce.W.dropdownTransition), {
                            children: (0, a.jsx)(pe.v.Items, {
                                className: (0, ge.yI)(Ce.W.menuItems, Ce.W.menuItemsBg, Ce.W.menuItemsMaxH),
                                children: n.map((function(e, t) {
                                    var n = e.value,
                                        i = e.text;
                                    return (0, a.jsx)(pe.v.Item, {
                                        children: function(e) {
                                            var t = e.active;
                                            return (0, a.jsxs)("div", {
                                                className: (0, ge.yI)(Ce.W.menuItem, Ce.W.menuItemText, (0, C.Z)({}, Ce.W.menuItemActive, t)),
                                                onClick: function() {
                                                    return s(r !== n ? n : void 0)
                                                },
                                                children: [(0, a.jsx)("div", {
                                                    className: "flex h-5 items-center",
                                                    children: (0, a.jsx)(ye.J, {
                                                        children: i
                                                    })
                                                }), r === n ? (0, a.jsx)("span", {
                                                    className: Ce.W.menuItemSelectedIconWrapper,
                                                    children: (0, a.jsx)(be.N, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    })
                                                }) : null]
                                            })
                                        }
                                    }, t)
                                }))
                            })
                        }))]
                    })
                },
                Ne = function(e) {
                    var t = e.items,
                        n = e.selected,
                        r = e.setSelected,
                        i = e.className,
                        l = (0, s.$G)("question-list").t,
                        c = o.useMemo((function() {
                            return t.map((function(e) {
                                return {
                                    value: e,
                                    text: e.name
                                }
                            }))
                        }), [t]);
                    return (0, a.jsx)(we, {
                        wrapperClassName: i,
                        text: l("filter.list"),
                        items: c,
                        setSelected: function(e) {
                            var t = e ? e.name : "";
                            t && O({
                                problemset_list_title: t
                            }), r(e)
                        },
                        selected: n
                    })
                },
                ke = n(15371),
                Se = n(26756),
                _e = function(e) {
                    var t = e.difficulty,
                        n = (0, s.$G)("common", {
                            keyPrefix: "difficulty"
                        }).t;
                    return t === Se.Fd.Easy || "Easy" === t ? (0, a.jsx)("span", {
                        className: ke.Cj.labelOlive,
                        children: n("easy")
                    }) : t === Se.Fd.Medium || "Medium" === t ? (0, a.jsx)("span", {
                        className: ke.Cj.labelYellow,
                        children: n("medium")
                    }) : t === Se.Fd.Hard || "Hard" === t ? (0, a.jsx)("span", {
                        className: ke.Cj.labelPink,
                        children: n("hard")
                    }) : null
                },
                Ze = function(e) {
                    var t = e.selected,
                        n = e.setSelected,
                        r = e.className,
                        i = e.translationNamespace,
                        l = void 0 === i ? "question-list" : i,
                        c = e.disabled,
                        u = void 0 !== c && c,
                        d = e.trackName,
                        m = void 0 === d ? "problemset" : d,
                        f = (0, s.$G)(l).t,
                        v = o.useMemo((function() {
                            return [{
                                value: Se.Fd.Easy,
                                text: (0, a.jsx)(_e, {
                                    difficulty: Se.Fd.Easy
                                })
                            }, {
                                value: Se.Fd.Medium,
                                text: (0, a.jsx)(_e, {
                                    difficulty: Se.Fd.Medium
                                })
                            }, {
                                value: Se.Fd.Hard,
                                text: (0, a.jsx)(_e, {
                                    difficulty: Se.Fd.Hard
                                })
                            }]
                        }), []),
                        x = (0, o.useCallback)((function(e) {
                            "problemset" === m && E({
                                problemset_difficulty: e
                            }), n(e)
                        }), [n, m]);
                    return (0, a.jsx)(we, {
                        text: f("filter.difficulty"),
                        items: v,
                        setSelected: x,
                        selected: t,
                        disabled: u,
                        wrapperClassName: r
                    })
                },
                Te = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Ie = n(46563),
                Fe = n(72014),
                Le = function(e) {
                    var t = e.status,
                        n = (0, s.$G)("question-list").t;
                    return t === ce.lrT.NotStarted ? (0, a.jsxs)("span", {
                        className: "flex items-center",
                        children: [(0, a.jsx)(Te, {
                            className: "mr-1 h-[14px] w-[14px]"
                        }), (0, a.jsx)("span", {
                            children: n("status.todo")
                        })]
                    }) : t === ce.lrT.Ac ? (0, a.jsxs)("span", {
                        className: "flex items-center",
                        children: [(0, a.jsx)(be.N, {
                            className: y()("mr-1 h-[14px] w-[14px]", ke.Cj.labelGreenStandard)
                        }), (0, a.jsx)("span", {
                            children: n("status.solved")
                        })]
                    }) : t === ce.lrT.Tried ? (0, a.jsxs)("span", {
                        className: "flex items-center",
                        children: [(0, a.jsx)(Ie.V, {
                            className: "text-lc-yellow-60 dark:text-dark-lc-yellow-60 inline-block h-3.5 w-3.5 shrink-0 fill-none stroke-current"
                        }), (0, a.jsx)("span", {
                            className: "ml-1",
                            children: n("status.attempted")
                        })]
                    }) : null
                },
                Oe = function(e) {
                    var t = e.selected,
                        n = e.setSelected,
                        r = e.className,
                        i = (0, s.$G)("question-list").t,
                        l = o.useMemo((function() {
                            return [{
                                value: ce.lrT.NotStarted,
                                text: (0, a.jsx)(Le, {
                                    status: ce.lrT.NotStarted
                                })
                            }, {
                                value: ce.lrT.Ac,
                                text: (0, a.jsx)(Le, {
                                    status: ce.lrT.Ac
                                })
                            }, {
                                value: ce.lrT.Tried,
                                text: (0, a.jsx)(Le, {
                                    status: ce.lrT.Tried
                                })
                            }]
                        }), []),
                        c = (0, o.useCallback)((function(e) {
                            L({
                                problemset_status: e
                            }), n(e)
                        }), [n]),
                        u = (0, Fe.A)();
                    return (0, a.jsx)(we, {
                        wrapperClassName: r,
                        text: i("filter.status"),
                        items: l,
                        selected: t,
                        setSelected: c,
                        disabled: !u
                    })
                },
                Ee = n(42268),
                Re = n(62758),
                Ve = n(50632),
                Ae = function(e) {
                    return (0, ne.tU$)(te.f6, {}, e)
                },
                Me = n(99437),
                Be = function(e) {
                    var t = e.children,
                        n = e.activeKey,
                        r = e.onChange,
                        s = e.showTitle,
                        i = void 0 === s || s,
                        l = (0, o.useCallback)((function(e) {
                            var t = e.currentTarget.dataset.key;
                            void 0 !== t && r(t)
                        }), [r]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [i && (0, a.jsx)("nav", {
                            className: "flex items-center space-x-6",
                            children: o.Children.map(t, (function(e) {
                                var t;
                                return o.isValidElement(e) ? (0, a.jsxs)("div", {
                                    className: y()("flex flex-col", {
                                        "cursor-pointer": !e.props.disabled,
                                        "cursor-not-allowed": e.props.disabled
                                    }),
                                    "data-key": e.key,
                                    onClick: l,
                                    children: [(0, a.jsx)("div", {
                                        className: y()("text-sm leading-5", (t = {}, (0, C.Z)(t, y()("font-medium", ke.Cj.label1), n === e.key), (0, C.Z)(t, y()("font-normal", ke.Cj.label2), n !== e.key), t)),
                                        children: e.props.title
                                    }), (0, a.jsx)("hr", {
                                        className: y()("bg-label-1 dark:bg-dark-label-1 mt-1 h-0.5 rounded-full border-none", {
                                            visible: n === e.key,
                                            invisible: n !== e.key
                                        })
                                    })]
                                }, e.key) : null
                            }))
                        }), o.Children.map(t, (function(e) {
                            return o.isValidElement(e) ? (0, a.jsx)("div", {
                                className: n === e.key ? "block" : "hidden",
                                children: e.props.children
                            }, e.key) : null
                        }))]
                    })
                },
                Pe = function(e) {
                    var t = e.children;
                    return (0, a.jsx)(a.Fragment, {
                        children: t
                    })
                },
                De = n(20970),
                He = function(e) {
                    var t = e.filteredTags,
                        n = e.remainingTags,
                        r = e.selected,
                        s = e.handleSelect,
                        i = (0, o.useState)(!1),
                        l = i[0],
                        c = i[1],
                        u = n.length > 13;
                    return (0, a.jsxs)("div", {
                        className: "-m-1 mt-1 flex max-h-[400px] flex-wrap overflow-auto py-4",
                        children: [t.map((function(e) {
                            return (0, a.jsx)(De.V, {
                                className: "m-1",
                                isActive: r.has(e.slug),
                                onClick: s,
                                "data-slug": e.slug,
                                "data-name": e.name,
                                children: e.name
                            }, e.name)
                        })), t.length > 0 && n.length > 0 && (0, a.jsx)("span", {
                            className: "h-2 w-full"
                        }, "span"), (l ? n : n.slice(0, l ? void 0 : 13)).map((function(e) {
                            return (0, a.jsx)(De.V, {
                                className: "m-1",
                                isActive: r.has(e.slug),
                                onClick: s,
                                "data-slug": e.slug,
                                "data-name": e.name,
                                children: e.name
                            }, e.name)
                        })), u && (0, a.jsx)("div", {
                            className: "text-blue dark:text-dark-blue m-1 flex cursor-pointer items-center px-1",
                            onClick: function() {
                                return c(!l)
                            },
                            children: l ? "Collapse" : "Expand"
                        }, "collapse")]
                    })
                },
                qe = n(86215),
                Ge = function(e) {
                    var t = e.buttonText,
                        n = e.footer,
                        r = e.panelClassName,
                        s = e.className,
                        i = e.disabled,
                        l = void 0 !== i && i,
                        c = e.children;
                    return (0, a.jsx)(qe.J, {
                        className: y()("relative flex-1"),
                        children: function(e) {
                            var i = e.open;
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(qe.J.Button, {
                                    disabled: l,
                                    className: y()(Ce.W.menuButton, Ce.W.menuButtonBg, l ? [Ce.W.menuButtonDisabled, "!cursor-default"] : [Ce.W.menuButtonText, Ce.W.menuButtonHover], (0, C.Z)({}, Ce.W.menuButtonActive, i), "flex w-full justify-between", s),
                                    children: function(e) {
                                        var n = e.open;
                                        return (0, a.jsxs)(a.Fragment, {
                                            children: [t, (0, a.jsx)(je.C, {
                                                className: y()(Ce.W.menuButtonIcon, (0, C.Z)({
                                                    "rotate-180 transform": n
                                                }, Ce.W.menuButtonDisabled, l)),
                                                "aria-hidden": "true"
                                            })]
                                        })
                                    }
                                }), (0, a.jsx)(he.u, (0, N.Z)((0, w.Z)({
                                    as: o.Fragment
                                }, Ce.W.popoverTransition), {
                                    children: (0, a.jsx)(qe.J.Panel, {
                                        className: y()(r, Ce.W.popoverPanel, Ce.W.menuItemsBg, ke.eq.dropdown),
                                        children: (0, a.jsxs)("div", {
                                            className: "overflow-hidden",
                                            children: [c, (0, a.jsx)("hr", {
                                                className: "border-divider-2 dark:border-dark-divider-2"
                                            }), n]
                                        })
                                    })
                                }))]
                            })
                        }
                    })
                },
                Xe = function(e) {
                    var t = e.selectedItemsCount,
                        n = e.translationNamespace,
                        r = (0, s.$G)(n).t;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("span", {
                            children: r("filter.tag")
                        }), t > 0 ? (0, a.jsx)("span", {
                            className: y()("ml-2 h-[18px] rounded-full px-1.5 text-center text-xs leading-normal", ke.Cj.fill2, ke.Cj.label2),
                            children: t
                        }) : null]
                    })
                },
                ze = n(14631),
                We = function(e) {
                    var t = e.enableReset,
                        n = e.handleReset,
                        r = e.translationNamespace,
                        i = (0, s.$G)(r).t;
                    return (0, a.jsx)("div", {
                        className: "mt-2.5 flex flex-row-reverse px-2 py-0.5",
                        children: (0, a.jsxs)("div", {
                            className: y()("flex items-center space-x-1 outline-none", ke.Cj.label3, {
                                "opacity-60": !t,
                                "cursor-pointer": t,
                                "cursor-not-allowed": !t
                            }),
                            onClick: n,
                            children: [(0, a.jsx)(ze.D, {
                                className: "h-4 w-4"
                            }), (0, a.jsx)("span", {
                                children: i("filter.reset")
                            })]
                        })
                    })
                },
                Ue = n(43822),
                Qe = n(9337),
                Ke = function(e) {
                    var t = e.placeholder,
                        n = e.onChange,
                        r = e.handleComposition,
                        i = e.noResult,
                        l = e.className,
                        o = e.translationNamespace,
                        c = (0, s.$G)(o).t;
                    return (0, a.jsxs)("div", {
                        className: l,
                        children: [(0, a.jsx)(Ue.I, {
                            type: "text",
                            placeholder: t,
                            leftIcon: Qe.j,
                            onChange: n,
                            onCompositionStart: r,
                            onCompositionUpdate: r,
                            onCompositionEnd: r,
                            className: xe.UG
                        }), i && (0, a.jsx)("div", {
                            className: "text-red-s dark:text-dark-red-s mt-4",
                            children: c("filter.noResult")
                        })]
                    })
                };
            ! function(e) {
                e.TOPIC = "topic", e.COMPANY = "company"
            }(r || (r = {}));
            var $e = function(e) {
                    var t, n, s, i = e.tags,
                        l = e.selectedTopics,
                        c = e.setSelectedTopics,
                        u = e.showCompanies,
                        d = void 0 === u || u,
                        m = e.selectedCompanies,
                        f = e.setSelectedCompanies,
                        v = e.translationNamespace,
                        x = void 0 === v ? "question-list" : v,
                        p = e.className,
                        h = e.popoverClassName,
                        g = e.disabled,
                        j = void 0 !== g && g,
                        b = e.trackName,
                        C = void 0 === b ? "problemset" : b,
                        w = Ae().data,
                        N = (0, o.useMemo)((function() {
                            return null !== (n = null === w || void 0 === w ? void 0 : w.companyTags) && void 0 !== n ? n : []
                        }), [null === w || void 0 === w ? void 0 : w.companyTags]),
                        S = (0, Ve.U5)().data,
                        _ = Boolean(null === S || void 0 === S || null === (t = S.userStatus) || void 0 === t ? void 0 : t.isPremium),
                        Z = (0, o.useState)(""),
                        T = Z[0],
                        I = Z[1],
                        F = (0, o.useState)(r.TOPIC),
                        L = F[0],
                        O = F[1],
                        E = (0, o.useCallback)((function(e) {
                            (e !== r.COMPANY || _) && O(e)
                        }), [_]),
                        V = (0, o.useCallback)((function(e) {
                            I((0, Ee.Z)(e.currentTarget.value || ""))
                        }), [I]),
                        A = (0, o.useCallback)((function(e) {
                            var t = e.currentTarget.dataset.slug,
                                n = e.currentTarget.dataset.name;
                            t && n && (l.has(t) ? (l.delete(t), c(l)) : (l.set(t, n), c(l), "problemset" === C && R({
                                problemset_tag: t
                            })))
                        }), [l, c, C]),
                        M = (0, o.useCallback)((function(e) {
                            var t = e.currentTarget.dataset.slug,
                                n = e.currentTarget.dataset.name;
                            t && n && m && f && (m.has(t) ? (m.delete(t), f(m)) : (m.set(t, n), f(m), "problemset" === C && R({
                                problemset_tag: t
                            })))
                        }), [m, f, C]),
                        B = (0, o.useCallback)((function() {
                            c(new Map), f && f(new Map)
                        }), [c, f]),
                        P = (0, k.Z)(o.useMemo((function() {
                            if (!T) return [
                                [], i, [], N
                            ];
                            var e = T.toLowerCase();
                            return [i.filter((function(t) {
                                return t.name.toLowerCase().includes(e)
                            })), i.filter((function(t) {
                                return !t.name.toLowerCase().includes(e)
                            })), N.filter((function(t) {
                                return t.name.toLowerCase().includes(e)
                            })), N.filter((function(t) {
                                return !t.name.toLowerCase().includes(e)
                            }))]
                        }), [i, N, T]), 4),
                        D = P[0],
                        H = P[1],
                        q = P[2],
                        G = P[3],
                        X = l.size + (null !== (s = null === m || void 0 === m ? void 0 : m.size) && void 0 !== s ? s : 0),
                        z = X > 0,
                        W = L === r.TOPIC ? D.length : q.length;
                    return (0, a.jsxs)(Ge, {
                        buttonText: (0, a.jsx)(Xe, {
                            selectedItemsCount: X,
                            translationNamespace: x
                        }),
                        footer: (0, a.jsx)(We, {
                            enableReset: z,
                            handleReset: B,
                            translationNamespace: x
                        }),
                        className: p,
                        panelClassName: y()(h, "md:max-w-[400px] transform translate-x-[-85%] left-[60%] md:-translate-x-1/2 md:left-1/2 lg:-translate-x-0 lg:left-0"),
                        disabled: j,
                        children: [(0, a.jsx)(Ke, {
                            onChange: V,
                            noResult: !!T && 0 === W,
                            placeholder: L === r.TOPIC ? "Filter topics" : "Filter companies",
                            translationNamespace: x
                        }), (0, a.jsx)("div", {
                            className: y()(d ? "mt-4" : "-mt-1"),
                            children: (0, a.jsxs)(Be, {
                                showTitle: d,
                                activeKey: L,
                                onChange: E,
                                children: [(0, a.jsx)(Pe, {
                                    title: "Topics",
                                    children: (0, a.jsx)(He, {
                                        selected: l,
                                        handleSelect: A,
                                        filteredTags: D,
                                        remainingTags: H
                                    })
                                }, r.TOPIC), d && (0, a.jsx)(Pe, {
                                    title: _ ? "Companies" : (0, a.jsx)(Re.u, {
                                        label: "Subscribe to unlock this feature",
                                        children: (0, a.jsx)("a", {
                                            href: ie.Hb.premium("ql_fct"),
                                            children: (0, a.jsxs)("div", {
                                                className: "flex items-center space-x-1",
                                                children: [(0, a.jsx)("span", {
                                                    children: "Companies"
                                                }), (0, a.jsx)(Me.d, {
                                                    className: "text-gray-5 dark:text-dark-gray-5 h-4 w-4"
                                                })]
                                            })
                                        })
                                    }),
                                    children: (0, a.jsx)(He, {
                                        selected: null !== m && void 0 !== m ? m : new Map,
                                        handleSelect: M,
                                        filteredTags: q,
                                        remainingTags: G
                                    })
                                }, r.COMPANY)]
                            })
                        })]
                    })
                },
                Je = function(e) {
                    var t = e.setQuery,
                        n = e.debounceTime,
                        r = e.value,
                        i = e.setValue,
                        l = e.className,
                        c = e.translationNamespace,
                        u = void 0 === c ? "question-list" : c,
                        d = e.disabled,
                        m = void 0 !== d && d,
                        f = e.trackName,
                        v = void 0 === f ? "problemset" : f,
                        x = (0, s.$G)(u).t,
                        p = (0, o.useRef)(),
                        h = (0, o.useCallback)((function(e) {
                            var r = e.currentTarget.value || "";
                            i(r), p.current && clearTimeout(p.current), p.current = setTimeout((function() {
                                t(r), "problemset" === v && V()
                            }), n)
                        }), [i, n, t, v]);
                    return (0, a.jsx)("div", {
                        className: l,
                        children: (0, a.jsx)(Ue.I, {
                            disabled: m,
                            type: "text",
                            onChange: h,
                            value: r,
                            placeholder: x("filter.searchPlaceholder"),
                            leftIcon: Qe.j,
                            className: xe.UG
                        })
                    })
                },
                Ye = n(86639),
                et = function(e) {
                    var t = e.text,
                        n = e.onRemove,
                        r = e.className;
                    return (0, a.jsxs)("span", {
                        className: y()("m-1 inline-flex items-center whitespace-nowrap rounded px-2 py-[3px] text-xs leading-normal", ke.Cj.label1, ke.Cj.fill3, "rounded", r),
                        children: [(0, a.jsx)("span", {
                            className: "mr-1",
                            children: t
                        }), (0, a.jsx)("span", {
                            className: "cursor-pointer transition-all",
                            onClick: n,
                            children: (0, a.jsx)(Ye.X, {
                                className: y()("h-3.5 w-3.5", ke.Cj.label4, "hover:text-label-3 dark:hover:text-dark-label-3")
                            })
                        })]
                    })
                },
                tt = function(e) {
                    var t = e.statusFilter,
                        n = e.difficultyFilter,
                        r = e.listFilter,
                        i = e.topicTagsFilter,
                        l = e.companyTagsFilter,
                        c = e.searchQuery,
                        u = e.clearStatusFilter,
                        d = e.clearDifficultyFilter,
                        f = e.clearListFilter,
                        v = e.clearTopicTagFilter,
                        x = e.clearCompanyTagFilter,
                        p = e.clearSearchQuery,
                        h = e.clearAll,
                        g = e.translationNamespace,
                        j = void 0 === g ? "question-list" : g,
                        b = e.className,
                        C = (0, s.$G)(j).t;
                    return (0, a.jsx)(he.u, {
                        as: o.Fragment,
                        show: Boolean(c || t || n || r || i.size || (null === l || void 0 === l ? void 0 : l.size)),
                        children: (0, a.jsxs)("div", {
                            className: "mt-3 flex flex-nowrap justify-between",
                            children: [(0, a.jsxs)("div", {
                                className: "-mx-1 flex flex-wrap",
                                children: [r && (0, a.jsx)(et, {
                                    text: r.name,
                                    onRemove: f,
                                    className: b
                                }), n && (0, a.jsx)(et, {
                                    text: (0, a.jsx)(_e, {
                                        difficulty: n
                                    }),
                                    onRemove: d,
                                    className: b
                                }), t && (0, a.jsx)(et, {
                                    text: (0, a.jsx)(Le, {
                                        status: t
                                    }),
                                    onRemove: u,
                                    className: b
                                }), (0, m.Z)(i.entries()).map((function(e) {
                                    var t = (0, k.Z)(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    return (0, a.jsx)(et, {
                                        text: r,
                                        onRemove: function() {
                                            return v(n)
                                        },
                                        className: "!rounded-full"
                                    }, n)
                                })), l && x ? (0, m.Z)(l.entries()).map((function(e) {
                                    var t = (0, k.Z)(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    return (0, a.jsx)(et, {
                                        text: r,
                                        onRemove: function() {
                                            return x(n)
                                        },
                                        className: "!rounded-full"
                                    }, n)
                                })) : null, c && (0, a.jsx)(et, {
                                    text: c,
                                    onRemove: p,
                                    className: b
                                })]
                            }), (0, a.jsxs)("div", {
                                className: y()("mb-1.5 flex cursor-pointer items-center space-x-1 self-end outline-none", "whitespace-nowrap leading-[20px]", ke.Cj.label3),
                                onClick: h,
                                children: [(0, a.jsx)(ze.D, {
                                    className: "h-4 w-4"
                                }), (0, a.jsx)("span", {
                                    children: C("filter.reset")
                                })]
                            })]
                        })
                    })
                },
                nt = n(64572),
                rt = n(23641),
                at = n(82723).E,
                st = function(e) {
                    var t = e.showTopicTags,
                        n = e.setShowTopicTags,
                        r = e.premiumQuestionsFilter,
                        i = e.setPremiumQuestionsFilter,
                        l = e.showCompanyTags,
                        c = e.setShowCompanyTags,
                        u = (0, s.$G)("question-list").t,
                        d = (0, o.useCallback)((function(e) {
                            n(e), A({
                                problemset_show_topic_tags_checked: e.toString()
                            })
                        }), [n]),
                        m = (0, o.useCallback)((function(e) {
                            i(e), B({
                                problemset_show_premium_only_checked: e.toString()
                            })
                        }), [i]),
                        f = (0, o.useCallback)((function(e) {
                            c(e), M({
                                problemset_show_company_tags_checked: e.toString()
                            })
                        }), [c]);
                    return (0, a.jsx)(qe.J, {
                        className: "relative",
                        children: function(e) {
                            var n = e.open;
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(qe.J.Button, {
                                    "aria-label": "settings",
                                    className: y()(Ce.W.menuButton, Ce.W.menuButtonBg, Ce.W.menuButtonText, Ce.W.menuButtonHover, (0, C.Z)({}, Ce.W.menuButtonActive, n)),
                                    children: (0, a.jsx)(nt.k, {
                                        className: y()("pointer-events-none h-5 w-5", (0, C.Z)({}, ke.Cj.labelBlueStandard, n)),
                                        "aria-hidden": "true"
                                    })
                                }), (0, a.jsx)(he.u, (0, N.Z)((0, w.Z)({
                                    as: o.Fragment
                                }, Ce.W.popoverTransition), {
                                    children: (0, a.jsxs)(qe.J.Panel, {
                                        className: y()("left-full -translate-x-full transform", "z-dropdown absolute mt-1 max-w-xs overflow-auto rounded-lg p-2.5 focus:outline-none", Ce.W.menuItemsBg, ke.eq.dropdown),
                                        children: [(0, a.jsx)("div", {
                                            className: y()("rounded outline-none", "relative h-8 cursor-pointer select-none py-1.5 pl-2 pr-5", Ce.W.menuItemText, Ce.W.menuItemHover),
                                            children: (0, a.jsx)(rt.X, {
                                                checked: t,
                                                onChange: d,
                                                label: u("settings.showTopicTags")
                                            })
                                        }), (0, a.jsx)(at, {
                                            showCompanyTags: l,
                                            onShowCompanyTagChange: f
                                        }), (0, a.jsx)("div", {
                                            className: y()("rounded outline-none", "relative h-8 cursor-pointer select-none py-1.5 pl-2 pr-5", Ce.W.menuItemText, Ce.W.menuItemHover),
                                            children: (0, a.jsx)(rt.X, {
                                                checked: r,
                                                onChange: m,
                                                label: (0, a.jsx)("span", {
                                                    className: "text-brand-orange",
                                                    children: u("settings.premiumQuestions")
                                                })
                                            })
                                        })]
                                    })
                                }))]
                            })
                        }
                    })
                },
                it = function(e) {
                    var t = e.onClick,
                        n = e.isLoading,
                        r = (0, s.$G)("question-list").t;
                    return (0, a.jsxs)("div", {
                        onClick: t,
                        className: y()("ml-auto inline-flex shrink-0 items-center pl-2.5", {
                            "cursor-pointer": !n,
                            "cursor-loading opacity-30": n
                        }),
                        children: [(0, a.jsx)("span", {
                            className: y()("flex h-8 w-8 items-center justify-center rounded-full shadow-md", "from-fixed-green to-green-s dark:to-dark-green-s bg-gradient-to-b", "shadow-fixed-green"),
                            children: (0, a.jsx)(me, {
                                className: "h-[18px] w-[18px] fill-none stroke-current text-white"
                            })
                        }), (0, a.jsx)("span", {
                            className: "text-green-s dark:text-dark-green-s hidden pl-2.5 md:inline",
                            children: r("pickOne")
                        })]
                    })
                },
                lt = function(e) {
                    var t, n, r = e.difficultyFilter,
                        s = e.setDifficultyFilter,
                        i = e.statusFilter,
                        l = e.setStatusFilter,
                        c = e.listFilter,
                        u = e.setListFilter,
                        d = e.topicTagsFilter,
                        m = e.setTopicTagsFilter,
                        f = e.companyTagsFilter,
                        v = e.setCompanyTagsFilter,
                        x = e.searchQuery,
                        p = e.setSearchQuery,
                        h = e.premiumQuestionsFilter,
                        g = e.setPremiumQuestionsFilter,
                        j = e.listData,
                        b = e.showTopicTags,
                        C = e.setShowTopicTags,
                        w = e.showCompanyTags,
                        N = e.setShowCompanyTags,
                        k = e.topicTagsData,
                        S = e.isLoadingRandomQuestion,
                        _ = e.onRandomQuestionClick,
                        Z = e.clearAllFilters,
                        T = de({
                            enabled: !k
                        }).data,
                        I = null !== k && void 0 !== k ? k : T,
                        F = (0, o.useState)(x),
                        L = F[0],
                        O = F[1],
                        E = null !== (n = null === (t = ve()) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : void 0;
                    return (0, o.useEffect)((function() {
                        O(x)
                    }), [x]), (0, a.jsxs)("div", {
                        className: "mb-3 flex flex-col",
                        children: [(0, a.jsxs)("div", {
                            className: "flex w-full flex-wrap gap-2",
                            children: [(0, a.jsx)(Ne, {
                                className: "flex-1",
                                items: j || [],
                                selected: c,
                                setSelected: u
                            }), (0, a.jsx)(Ze, {
                                className: "flex-1",
                                selected: r,
                                setSelected: s
                            }), (0, a.jsx)(Oe, {
                                className: "flex-1",
                                selected: i,
                                setSelected: l
                            }), (0, a.jsx)($e, {
                                tags: I || [],
                                selectedTopics: d,
                                setSelectedTopics: m,
                                selectedCompanies: f,
                                setSelectedCompanies: v,
                                tagTypesWithTags: E
                            }), (0, a.jsxs)("div", {
                                className: "flex min-w-[300px] flex-[4_4_0%] gap-2",
                                children: [(0, a.jsx)(Je, {
                                    className: y()("flex-1", xe.UG),
                                    value: L,
                                    setValue: O,
                                    setQuery: p,
                                    debounceTime: 500
                                }), (0, a.jsx)(st, {
                                    showTopicTags: b,
                                    setShowTopicTags: C,
                                    premiumQuestionsFilter: h,
                                    setPremiumQuestionsFilter: g,
                                    showCompanyTags: w,
                                    setShowCompanyTags: N
                                }), (0, a.jsx)(it, {
                                    onClick: _,
                                    isLoading: S
                                })]
                            })]
                        }), (0, a.jsx)(tt, {
                            difficultyFilter: r,
                            statusFilter: i,
                            listFilter: c,
                            topicTagsFilter: d,
                            companyTagsFilter: f,
                            searchQuery: x,
                            clearDifficultyFilter: function() {
                                return s(void 0)
                            },
                            clearStatusFilter: function() {
                                return l(void 0)
                            },
                            clearListFilter: function() {
                                return u(void 0)
                            },
                            clearTopicTagFilter: function(e) {
                                d.delete(e), m(d)
                            },
                            clearCompanyTagFilter: function(e) {
                                f.delete(e), v(f)
                            },
                            clearSearchQuery: function() {
                                p(""), O("")
                            },
                            clearAll: function() {
                                Z()
                            }
                        })]
                    })
                },
                ot = n(20416);

            function ct(e) {
                var t, n, r = e.problemsetQuestionList;
                return {
                    total: r.total,
                    questions: r.questions.map((function(e) {
                        return (0, N.Z)((0, w.Z)({}, e), {
                            frontendQuestionId: e.frontendQuestionId,
                            status: (0, ot.Db)(e.status),
                            difficulty: (0, ot.Pf)(e.difficulty),
                            paidOnly: null !== (t = e.paidOnly) && void 0 !== t && t,
                            topicTags: null !== (n = e.topicTags) && void 0 !== n ? n : []
                        })
                    }))
                }
            }
            var ut, dt, mt, ft, vt = function(e) {
                    return (0, ne.esR)(te.f6, e, {
                        select: ct
                    })
                },
                xt = n(7958),
                pt = function(e) {
                    var t = e.options,
                        n = e.selected,
                        r = e.setSelected,
                        i = (0, s.$G)("common").t,
                        l = o.useMemo((function() {
                            return t.map((function(e) {
                                return {
                                    value: e,
                                    text: "".concat(e, " ").concat(i("pagination.perpage"))
                                }
                            }))
                        }), [t, i]),
                        c = o.useCallback((function(e) {
                            return r(e.value)
                        }), [r]);
                    return (0, a.jsx)(xt.P, {
                        options: l,
                        selected: l.find((function(e) {
                            return e.value === n
                        })),
                        setSelected: c
                    })
                },
                ht = n(26622),
                gt = n(66247),
                jt = n(13721),
                bt = n(99534),
                yt = n(79521),
                Ct = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            d: "M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"
                        })
                    }))
                })),
                wt = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 14 14",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            d: "M7.44926 11.8332C7.46161 11.8229 7.47354 11.8123 7.48504 11.8013L10.9052 8.52958C11.0376 8.4029 11.0305 8.20389 10.8893 8.08509C10.8243 8.03043 10.7385 8.00001 10.6495 8.00001H3.35053C3.15694 8.00001 3 8.1408 3 8.31447C3 8.39354 3.0332 8.46971 3.09299 8.5278L6.45859 11.7977C6.72125 12.0529 7.16479 12.0688 7.44926 11.8332Z"
                        })
                    }))
                })),
                Nt = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 14 14",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            d: "M10.9052 5.47044L7.48504 2.19872C7.47354 2.18772 7.46161 2.1771 7.44926 2.16687C7.16479 1.93123 6.72125 1.94709 6.45859 2.20229L3.09299 5.47222C3.0332 5.53031 3 5.60648 3 5.68555C3 5.85922 3.15694 6.00001 3.35053 6.00001H10.6495C10.7385 6.00001 10.8243 5.96959 10.8893 5.91493C11.0305 5.79613 11.0376 5.59712 10.9052 5.47044Z"
                        })
                    }))
                })),
                kt = function(e) {
                    var t = e.columns,
                        n = e.data,
                        r = e.onSortChanged,
                        s = e.hiddenColumns,
                        i = e.sortBy,
                        l = e.rootClassName,
                        c = (0, yt.useTable)({
                            columns: t,
                            data: n,
                            manualSortBy: !0,
                            autoResetSortBy: !1,
                            disableMultiSort: !0,
                            autoResetHiddenColumns: !1,
                            initialState: {
                                hiddenColumns: s
                            }
                        }, yt.useSortBy, yt.useFlexLayout),
                        u = c.getTableProps,
                        d = c.getTableBodyProps,
                        m = c.headerGroups,
                        f = c.rows,
                        v = c.prepareRow,
                        x = c.state.sortBy,
                        p = c.setSortBy,
                        h = c.setHiddenColumns,
                        g = (0, k.Z)(function(e) {
                            var t = (0, o.useState)(!1),
                                n = t[0],
                                r = t[1],
                                a = (0, o.useCallback)((function() {
                                    r(!0)
                                }), []);
                            return (0, o.useEffect)((function() {
                                e || a()
                            }), [e, a]), [n, a]
                        }(), 1),
                        j = g[0];
                    return (0, o.useEffect)((function() {
                        j && r(x[0])
                    }), [JSON.stringify(x)]), (0, o.useEffect)((function() {
                        j && p(i)
                    }), [j, JSON.stringify(i)]), (0, o.useEffect)((function() {
                        s && h(s)
                    }), [s, h]), (0, a.jsx)("div", (0, N.Z)((0, w.Z)({}, u()), {
                        className: y()(l, "border-spacing-0 overflow-auto"),
                        children: (0, a.jsxs)("div", {
                            className: "inline-block min-w-full",
                            children: [(0, a.jsx)("div", {
                                className: "border-divider-border-2 dark:border-dark-divider-border-2 border-b",
                                children: m.map((function(e) {
                                    var t = e.getHeaderGroupProps(),
                                        n = t.key,
                                        r = (0, bt.Z)(t, ["key"]);
                                    return (0, a.jsx)("div", (0, N.Z)((0, w.Z)({}, r), {
                                        children: e.headers.map((function(e) {
                                            var t = e.getHeaderProps(e.getSortByToggleProps({
                                                    title: void 0
                                                })),
                                                n = t.key,
                                                r = (0, bt.Z)(t, ["key"]);
                                            return (0, a.jsx)("div", (0, N.Z)((0, w.Z)({}, r), {
                                                className: y()("mx-2 py-[11px] font-normal", ke.Cj.label3, {
                                                    "hover:text-gray-7 dark:hover:text-dark-gray-7 group": e.canSort
                                                }),
                                                children: (0, a.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [e.render("Header"), e.canSort && (0, a.jsx)("span", {
                                                        className: y()("text-gray-5 dark:text-dark-gray-5 ml-2 h-3.5 w-3.5", {
                                                            "group-hover:text-gray-7 dark:group-hover:text-dark-gray-7": e.canSort
                                                        }),
                                                        children: e.isSorted ? e.isSortedDesc ? (0, a.jsx)(wt, {}) : (0, a.jsx)(Nt, {}) : (0, a.jsx)(Ct, {})
                                                    })]
                                                })
                                            }), n)
                                        }))
                                    }), n)
                                }))
                            }), (0, a.jsx)("div", (0, N.Z)((0, w.Z)({}, d()), {
                                children: f.map((function(e) {
                                    v(e);
                                    var t = e.getRowProps(),
                                        n = t.key,
                                        r = (0, bt.Z)(t, ["key"]);
                                    return (0, a.jsx)("div", (0, N.Z)((0, w.Z)({}, r), {
                                        className: "odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4",
                                        children: e.cells.map((function(e) {
                                            var t = e.getCellProps(),
                                                n = t.key,
                                                r = (0, bt.Z)(t, ["key"]);
                                            return (0, a.jsx)("div", (0, N.Z)((0, w.Z)({}, r), {
                                                className: y()("mx-2 flex items-center py-[11px]"),
                                                children: e.render("Cell")
                                            }), n)
                                        }))
                                    }), n)
                                }))
                            }))]
                        })
                    }))
                },
                St = n(38740);
            ! function(e) {
                e[e.EASY = 1] = "EASY", e[e.MEDIUM = 2] = "MEDIUM", e[e.HARD = 3] = "HARD"
            }(ut || (ut = {})),
            function(e) {
                e.EASY = "Easy", e.MEDIUM = "Medium", e.HARD = "Hard"
            }(dt || (dt = {})),
            function(e) {
                e.TODO = "Todo", e.SOLVED = "Solved", e.ATTEMPTED = "Attempted"
            }(mt || (mt = {})),
            function(e) {
                e.ITEM_PER_PAGE = "itemsPerPage"
            }(ft || (ft = {}));
            var _t = n(80129),
                Zt = n.n(_t),
                Tt = n(34275),
                It = n(75117),
                Ft = n(92068),
                Lt = (n(79361), n(83714)),
                Ot = n(17473),
                Et = n(46283);
            var Rt = function(e) {
                    var t = e.status,
                        n = e.link;
                    return (0, a.jsx)("a", {
                        href: n,
                        children: t === Lt._.Finish ? (0, a.jsx)(Ot.M, {
                            className: "h-[18px] w-[18px] cursor-pointer ".concat(ke.Cj.labelGreenStandard)
                        }) : (0, a.jsx)(Et.j, {
                            className: "h-[18px] w-[18px] cursor-pointer ".concat(ke.Cj.labelGreenStandard)
                        })
                    })
                },
                Vt = n(22201),
                At = n(61815),
                Mt = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M15.392 7.765l5.695.832a.942.942 0 01.521 1.607l-4.12 4.014.972 5.67a.942.942 0 01-1.367.993L12 18.203 6.907 20.88a.942.942 0 01-1.367-.993l.972-5.67-4.12-4.014a.942.942 0 01.52-1.607l5.696-.832 2.547-5.16a.942.942 0 011.69 0l2.547 5.16z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Bt = n(83338),
                Pt = n(36088),
                Dt = function(e) {
                    var t = e.topics,
                        n = e.useTranslation,
                        r = e.topicTagsFilter,
                        s = (0, o.useState)(0),
                        i = s[0],
                        l = s[1],
                        c = (0, o.useState)(3),
                        u = c[0],
                        d = c[1],
                        m = (0, o.useRef)(null);
                    return (0, o.useEffect)((function() {
                        var e = function() {
                            var e, t;
                            l(null !== (t = null === (e = m.current) || void 0 === e ? void 0 : e.offsetWidth) && void 0 !== t ? t : 0)
                        };
                        return m.current && e(), window.addEventListener("resize", e),
                            function() {
                                window.removeEventListener("resize", e)
                            }
                    }), []), (0, o.useEffect)((function() {
                        m.current && function(e) {
                            var t = e.clientWidth,
                                n = e.clientHeight,
                                r = e.scrollWidth;
                            return e.scrollHeight > n || r > t
                        }(m.current) && d((function(e) {
                            return e > 1 ? e - 1 : 1
                        }))
                    }), [i]), (null === t || void 0 === t ? void 0 : t.length) ? (0, a.jsxs)("div", {
                        ref: m,
                        className: "mt-1 flex flex-nowrap space-x-1",
                        children: [t.slice(0, u).map((function(e) {
                            var t = e.id,
                                s = e.nameTranslated,
                                i = e.name,
                                l = e.slug;
                            return (0, a.jsx)(De.V, {
                                isActive: r.has(l),
                                children: n && s || i
                            }, t)
                        })), t.length > u && (0, a.jsx)(De.V, {
                            children: "".concat(t.length - u, "+")
                        }, "more")]
                    }) : null
                },
                Ht = function(e) {
                    var t, n, r = e.question,
                        s = e.showTopics,
                        i = e.isDCC,
                        l = e.topicTagsFilter,
                        c = e.link,
                        u = e.className,
                        d = e.onTitleClick,
                        m = s && r.topicTags,
                        f = (0, Bt.E)(),
                        v = Boolean(null === (t = (0, Ve.U5)().data) || void 0 === t || null === (n = t.userStatus) || void 0 === n ? void 0 : n.isPremium),
                        x = (0, o.useCallback)((function(e) {
                            return D({
                                problemset_is_today_question: Boolean(i).toString()
                            }), null === d || void 0 === d || d(e), !0
                        }), [i, d]),
                        p = f && r.titleCn || r.title;
                    return (0, a.jsxs)("div", {
                        className: y()(u, "flex items-center overflow-hidden", {
                            "my-[-5px]": m
                        }),
                        children: [(0, a.jsxs)("div", {
                            className: "overflow-hidden",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, a.jsx)(ye.J, {
                                    title: "".concat(r.frontendQuestionId, ". ").concat(p),
                                    children: (0, a.jsxs)("a", {
                                        onClick: x,
                                        href: c,
                                        className: y()("h-5", ke.Cj.labelBlueStandardHover, {
                                            "opacity-60": !v && r.paidOnly
                                        }),
                                        children: [r.frontendQuestionId, ". ", p]
                                    })
                                }), r.paidOnly && (0, a.jsx)(a.Fragment, {
                                    children: v ? (0, a.jsx)(At.z, {
                                        className: "text-brand-orange ml-2 shrink-0"
                                    }) : (0, a.jsx)(Pt.k, {
                                        className: "ml-2 h-4 shrink-0"
                                    })
                                })]
                            }), m && (0, a.jsx)(Dt, {
                                topics: r.topicTags,
                                useTranslation: f,
                                topicTagsFilter: l
                            })]
                        }), r.isFavor && (0, a.jsx)("span", {
                            className: "ml-auto shrink-0",
                            children: (0, a.jsx)(Mt, {
                                className: y()("ml-2", ke.Cj.labelYellow)
                            })
                        })]
                    })
                },
                qt = o.forwardRef((function(e, t) {
                    return (0, a.jsxs)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: [(0, a.jsx)("path", {
                            d: "M10 15.464v-3.927a.8.8 0 011.259-.656l2.805 1.964a.8.8 0 010 1.31l-2.805 1.964A.8.8 0 0110 15.464z"
                        }), (0, a.jsx)("path", {
                            d: "M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6zM4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5z"
                        })]
                    }))
                })),
                Gt = o.forwardRef((function(e, t) {
                    return (0, a.jsxs)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: [(0, a.jsx)("path", {
                            d: "M15.207 11.293a1 1 0 010 1.414l-3.5 3.5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 14.086l2.793-2.793a1 1 0 011.414 0z"
                        }), (0, a.jsx)("path", {
                            d: "M4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6z"
                        })]
                    }))
                })),
                Xt = function(e) {
                    var t = e.question;
                    if (!t.hasSolution) return null;
                    var n = t.hasVideoSolution ? (0, a.jsx)(qt, {
                            className: "text-purple dark:text-dark-purple h-5 w-5"
                        }) : (0, a.jsx)(Gt, {
                            className: "text-blue dark:text-dark-blue h-5 w-5"
                        }),
                        r = "/problems/".concat(t.titleSlug, "/solution");
                    return (0, a.jsx)("a", {
                        "aria-label": "solution",
                        href: r,
                        className: "truncate",
                        children: n
                    })
                },
                zt = function(e) {
                    var t = e.question;
                    return (0, a.jsx)(_e, {
                        difficulty: t.difficulty
                    })
                },
                Wt = function(e) {
                    return e
                },
                Ut = function(e) {
                    var t = e.question;
                    if (!t.acRate) return (0, a.jsx)("span", {
                        children: "N/A"
                    });
                    var n = Wt(t.acRate);
                    return (0, a.jsx)("span", {
                        children: "".concat(n.toFixed(1), "%")
                    })
                },
                Qt = n(77648),
                Kt = n(31799),
                $t = function() {
                    return (0, a.jsx)(Re.u, {
                        label: "Subscribe to unlock",
                        children: (0, a.jsx)("a", {
                            className: "flex h-full w-full flex-row items-center",
                            href: ie.Hb.premium(Kt.D.ProblemsetFrequency),
                            children: (0, a.jsxs)("div", {
                                className: "flex h-full w-full flex-row items-center",
                                children: [(0, a.jsx)("span", {
                                    className: "h-2 flex-1 rounded-l-lg ".concat(ke.Cj.fill3)
                                }), (0, a.jsx)(Me.d, {
                                    className: "text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                                }), (0, a.jsx)("span", {
                                    className: "h-2 flex-1 rounded-r-lg ".concat(ke.Cj.fill3)
                                })]
                            })
                        })
                    })
                },
                Jt = function() {
                    return (0, a.jsx)($t, {})
                },
                Yt = function(e) {
                    var t = e.question.freqBar || 0;
                    return (0, a.jsx)(Re.u, {
                        label: "".concat(t.toFixed(2), "%"),
                        children: (0, a.jsx)("div", {
                            className: "flex h-full w-full items-center",
                            children: (0, a.jsx)(Qt.E, {
                                percentage: t,
                                color: "orange"
                            })
                        })
                    })
                },
                en = n(67331),
                tn = function(e) {
                    var t = e.subscribed,
                        n = e.isOddRow;
                    return (0, a.jsxs)("div", {
                        className: y()("z-base-1 flex min-w-[22px] shrink-0 items-center rounded-full px-1", "tracking-tightest text-xs leading-[18px]", "bg-gray-3 dark:bg-dark-gray-4", "border-2", ke.Cj.label3, {
                            "border-overlay-3 dark:border-dark-overlay-3": n,
                            "border-overlay-1 dark:border-dark-overlay-1": !n
                        }),
                        children: [(0, a.jsx)("div", {
                            children: t
                        }), (0, a.jsx)(en.S, {
                            height: 8,
                            width: 8,
                            className: "shrink-0"
                        })]
                    })
                },
                nn = function(e) {
                    var t = e.imgUrl,
                        n = e.isOddRow;
                    return (0, a.jsx)("div", {
                        className: y()("ml-[-7px] last:ml-0"),
                        children: (0, a.jsx)("div", {
                            className: y()("h-[21px] w-[21px] rounded-full border-2 bg-cover bg-center", {
                                "border-overlay-3 dark:border-dark-overlay-3": n,
                                "border-overlay-1 dark:border-dark-overlay-1": !n
                            }),
                            style: {
                                backgroundImage: 'url("'.concat(t, '")')
                            }
                        })
                    })
                },
                rn = function(e) {
                    var t, n = e.question,
                        r = e.index,
                        s = ((null === (t = n.extra) || void 0 === t ? void 0 : t.topCompanyTags) || []).filter((function(e) {
                            return e.imgUrl
                        })).reverse(),
                        i = s.reduce((function(e, t) {
                            return e + t.numSubscribed
                        }), 0);
                    if (s.length < 1) return null;
                    var l = Boolean(r % 2);
                    return (0, a.jsxs)("div", {
                        className: y()("flex flex-row-reverse justify-end"),
                        children: [s.map((function(e) {
                            return (0, a.jsx)(nn, {
                                imgUrl: e.imgUrl,
                                isOddRow: l
                            }, e.slug)
                        })), i > 0 && (0, a.jsx)(tn, {
                            subscribed: i,
                            isOddRow: l
                        })]
                    })
                },
                an = n(46398),
                sn = n(27415),
                ln = function() {
                    return (0, a.jsx)(an.O, {
                        className: "flex h-[21px] items-center",
                        children: (0, a.jsx)(sn.a, {
                            className: "h-4.5 w-4.5 rounded-full"
                        })
                    })
                },
                on = function() {
                    return (0, a.jsx)(an.O, {
                        className: "flex h-[21px] w-full items-center",
                        children: (0, a.jsx)(sn.a, {
                            className: "h-4 w-[200px] max-w-full rounded"
                        })
                    })
                },
                cn = function() {
                    return (0, a.jsx)(an.O, {
                        className: "flex h-[21px] items-center",
                        children: (0, a.jsx)(sn.a, {
                            className: "h-4 w-[40px] rounded"
                        })
                    })
                },
                un = ln,
                dn = cn,
                mn = cn,
                fn = function() {
                    return (0, a.jsx)(an.O, {
                        className: "flex h-[21px] w-full items-center",
                        children: (0, a.jsx)(sn.a, {
                            className: "h-2 w-full rounded-full"
                        })
                    })
                },
                vn = function(e, t, n) {
                    var r, a = 0 === t,
                        s = e.frontendQuestionId === (null === n || void 0 === n || null === (r = n.question) || void 0 === r ? void 0 : r.frontendQuestionId);
                    return a && s
                },
                xn = function(e, t, n) {
                    return vn(e, t, n) && (null === n || void 0 === n ? void 0 : n.link)
                },
                pn = {
                    status: 52,
                    title: 260,
                    company: 84,
                    solution: 54,
                    acRate: 100,
                    difficulty: 84,
                    frequency: 84
                },
                hn = function(e) {
                    return e.hasSolution
                },
                gn = function(e) {
                    return (0, a.jsx)("div", {
                        className: "overflow-hidden text-ellipsis",
                        children: e
                    })
                },
                jn = function(e) {
                    var t = e.record,
                        n = e.index,
                        r = e.dailyQuestion,
                        a = e.questionLink,
                        s = e.date;
                    return xn(t, n, r) ? "".concat(null === r || void 0 === r ? void 0 : r.link, "?envType=daily-question&envId=").concat(s) : a
                },
                bn = function() {
                    return ["company"]
                },
                yn = [20, 50, 100],
                Cn = o.forwardRef((function(e, t) {
                    var n, r, i = e.page,
                        l = e.setPage,
                        c = e.slug,
                        u = e.listSlug,
                        d = e.showTopicTags,
                        m = e.showCompanyTags,
                        f = e.topicTagsFilter,
                        v = e.dailyQuestion,
                        x = e.filters,
                        p = e.FilterComponent,
                        h = e.setSorting,
                        g = e.questionsLoadedCallback,
                        j = e.tableChangeCallback,
                        b = e.pageChangeCallback,
                        C = e.width,
                        S = e.handleSetWidth,
                        _ = e.tableClassName,
                        Z = (0, Ve.U5)().data,
                        T = Boolean(null === Z || void 0 === Z || null === (n = Z.userStatus) || void 0 === n ? void 0 : n.isPremium),
                        I = (0, k.Z)((0, gt._)("problem-list:".concat(ft.ITEM_PER_PAGE), 50), 2),
                        F = I[0],
                        L = I[1],
                        O = (0, o.useMemo)((function() {
                            return F > 1e3 ? 100 : F
                        }), [F]),
                        E = vt({
                            categorySlug: c,
                            skip: (i - 1) * O,
                            limit: O,
                            filters: x
                        }),
                        R = E.isInitialLoading,
                        V = E.isFetching,
                        A = E.data,
                        M = function(e) {
                            var t = e.isPremium,
                                n = e.showTopicTags,
                                r = e.username,
                                i = e.dailyQuestion,
                                l = e.topicTagsFilter,
                                c = e.listSlug,
                                u = e.isLoading,
                                d = e.categorySlug,
                                m = (0, s.$G)("question-list").t,
                                f = (0, Ft.pe)().data,
                                v = null === f || void 0 === f ? void 0 : f.currentTimestamp,
                                x = (0, o.useMemo)((function() {
                                    return {
                                        date: (0, Tt.B)(1e3 * Number(v)).tz(It.aB).format("YYYY-MM-DD")
                                    }
                                }), [v]).date;
                            return o.useMemo((function() {
                                var e = [{
                                    Header: gn(m("table.header.status")),
                                    Cell: function(e) {
                                        var n, s = e.row;
                                        if (u) return (0, a.jsx)(ln, {});
                                        var l = s.original,
                                            o = s.index,
                                            c = "".concat((null === i || void 0 === i ? void 0 : i.link) || ie.Hb.questionDetail(l.titleSlug), "?envType=daily-question&envId=").concat(x);
                                        return vn(l, o, i) ? (0, a.jsx)(Rt, {
                                            status: i.status,
                                            questionSlug: l.titleSlug,
                                            userSlug: r,
                                            submissionId: null === i || void 0 === i || null === (n = i.lastSubmission) || void 0 === n ? void 0 : n.id,
                                            link: c
                                        }) : (0, a.jsx)(Vt.g, {
                                            question: s.original,
                                            isPremiumUser: t
                                        })
                                    },
                                    accessor: "status",
                                    width: pn.status,
                                    disableSortBy: !0
                                }, {
                                    Header: gn(m("table.header.title")),
                                    Cell: function(e) {
                                        var t, r = e.row;
                                        if (u) return (0, a.jsx)(on, {});
                                        var s = r.original,
                                            o = r.index,
                                            m = {};
                                        c && (m = (0, N.Z)((0, w.Z)({}, m), {
                                            envType: xe.Zw.FeaturedList,
                                            envId: c
                                        })), "pandas" === d && (m = (0, N.Z)((0, w.Z)({}, m), {
                                            lang: "pythondata"
                                        }));
                                        var f = ie.Hb.questionDetailWithLearningEnvironment(s.titleSlug, Zt().stringify(m)) + (c ? "?envType=".concat(xe.Zw.FeaturedList, "&envId=").concat(c) : ""),
                                            v = jn({
                                                record: s,
                                                index: o,
                                                dailyQuestion: i,
                                                questionLink: f,
                                                date: x
                                            });
                                        return (0, a.jsx)(Ht, {
                                            isDCC: (null === i || void 0 === i || null === (t = i.question) || void 0 === t ? void 0 : t.frontendQuestionId) === s.frontendQuestionId,
                                            question: s,
                                            showTopics: n,
                                            topicTagsFilter: l,
                                            link: v || "",
                                            className: "max-w-[302px]"
                                        }, s.frontendQuestionId)
                                    },
                                    accessor: "title",
                                    width: pn.title,
                                    maxWidth: 346,
                                    sortDescFirst: !0
                                }, {
                                    Header: gn(m("table.header.company")),
                                    Cell: function(e) {
                                        var t = e.row;
                                        return u ? (0, a.jsx)(cn, {}) : (0, a.jsx)(rn, {
                                            question: t.original,
                                            index: t.index
                                        })
                                    },
                                    accessor: function(e) {
                                        var t;
                                        return null === (t = e.extra) || void 0 === t ? void 0 : t.topCompanyTags
                                    },
                                    id: "company",
                                    width: pn.company,
                                    disableSortBy: !0
                                }, {
                                    Header: gn(m("table.header.solution")),
                                    Cell: function(e) {
                                        var t = e.row;
                                        return u ? (0, a.jsx)(un, {}) : (0, a.jsx)(Xt, {
                                            question: t.original
                                        })
                                    },
                                    accessor: hn,
                                    id: "solution",
                                    width: pn.solution,
                                    disableSortBy: !0,
                                    sortDescFirst: !0
                                }, {
                                    Header: gn(m("table.header.acceptance")),
                                    Cell: function(e) {
                                        var t = e.row;
                                        return u ? (0, a.jsx)(dn, {}) : (0, a.jsx)(Ut, {
                                            question: t.original
                                        })
                                    },
                                    accessor: "acRate",
                                    width: pn.acRate,
                                    sortDescFirst: !0
                                }, {
                                    Header: gn(m("table.header.difficulty")),
                                    Cell: function(e) {
                                        var t = e.row;
                                        return u ? (0, a.jsx)(mn, {}) : (0, a.jsx)(zt, {
                                            question: t.original
                                        })
                                    },
                                    accessor: "difficulty",
                                    width: pn.difficulty,
                                    sortDescFirst: !0
                                }, {
                                    Header: (0, a.jsx)(Re.u, {
                                        label: m("table.tooltip.frequency"),
                                        children: gn(m("table.header.frequency"))
                                    }),
                                    Cell: function(e) {
                                        var n = e.row;
                                        return u ? (0, a.jsx)(fn, {}) : t ? (0, a.jsx)(Yt, {
                                            question: n.original
                                        }) : (0, a.jsx)(Jt, {})
                                    },
                                    id: "frequency",
                                    accessor: "freqBar",
                                    width: pn.frequency,
                                    disableSortBy: !t,
                                    sortDescFirst: !0
                                }];
                                return e
                            }), [m, t, u, i, x, r, c, d, n, l])
                        }({
                            isPremium: T,
                            showTopicTags: d,
                            topicTagsFilter: f,
                            username: null === Z || void 0 === Z || null === (r = Z.userStatus) || void 0 === r ? void 0 : r.username,
                            dailyQuestion: v,
                            showCompanyTags: m,
                            listSlug: u,
                            categorySlug: c,
                            isLoading: R
                        }),
                        B = {
                            difficulty: Se.Fd.Easy,
                            frontendQuestionId: "",
                            isFavor: !1,
                            paidOnly: !1,
                            status: Se.lr.NotStarted,
                            title: "",
                            titleSlug: "",
                            topicTags: [],
                            hasVideoSolution: !1
                        },
                        P = R ? {
                            total: O,
                            questions: Array(O).fill(B)
                        } : null !== A && void 0 !== A ? A : {
                            total: 0,
                            questions: []
                        },
                        D = (null === P || void 0 === P ? void 0 : P.total) || 0,
                        H = (0, jt.R)(t),
                        q = (0, o.useState)(!1),
                        G = q[0],
                        X = q[1];
                    (0, o.useEffect)((function() {
                        G && H.current && (requestAnimationFrame((function() {
                            var e;
                            return null === (e = H.current) || void 0 === e ? void 0 : e.scrollIntoView({
                                behavior: "smooth"
                            })
                        })), X(!1))
                    }), [P, H]);
                    var z = (0, o.useCallback)((function(e) {
                            X(!0), l(e), b && b(e)
                        }), [b, l]),
                        W = (0, o.useCallback)((function(e) {
                            if (e) {
                                var t = void 0;
                                void 0 !== e.desc && (t = e.desc ? Se.mZ.Descending : Se.mZ.Ascending);
                                var n = void 0;
                                switch (e.id) {
                                    case "title":
                                        n = Se.S5.FrontendId;
                                        break;
                                    case "acRate":
                                        n = Se.S5.AcRate;
                                        break;
                                    case "frequency":
                                        n = Se.S5.Frequency;
                                        break;
                                    case "solution":
                                        n = Se.S5.SolutionNum;
                                        break;
                                    case "difficulty":
                                        n = Se.S5.Difficulty
                                }
                                h([{
                                    sortOrder: t,
                                    orderBy: n
                                }]), j && j(e)
                            } else h([{
                                sortOrder: void 0,
                                orderBy: void 0
                            }])
                        }), [h, j]),
                        U = (null === P || void 0 === P ? void 0 : P.questions) || [];
                    g && (U = g(U, i)), (0, o.useEffect)((function() {
                        var e = function() {
                            var e, t;
                            S(null !== (t = null === (e = H.current) || void 0 === e ? void 0 : e.offsetWidth) && void 0 !== t ? t : 0)
                        };
                        return H.current && e(), window.addEventListener("resize", e),
                            function() {
                                window.removeEventListener("resize", e)
                            }
                    }), [H, S]), (0, o.useEffect)((function() {
                        yn.includes(F) || L(50)
                    }), [F, L]);
                    var Q = bn(m),
                        K = null === x || void 0 === x ? void 0 : x.orderBy,
                        $ = null === x || void 0 === x ? void 0 : x.sortOrder,
                        J = (0, o.useMemo)((function() {
                            return K ? [{
                                id: Se.sQ[K],
                                desc: void 0 === $ ? void 0 : $ === Se.mZ.Descending
                            }] : []
                        }), [K, $]);
                    return (0, o.useEffect)((function() {
                        R || V || (0, St.ad)("problems_table")
                    }), [R, V]), (0, a.jsxs)("div", {
                        ref: H,
                        children: [p, (0, a.jsx)("div", {
                            className: y()("-mx-4 transition-opacity md:mx-0", {
                                "pointer-events-none opacity-50": !R && V
                            }),
                            children: (0, a.jsx)(kt, {
                                columns: M,
                                data: U || [],
                                onSortChanged: W,
                                hiddenColumns: Q,
                                sortBy: J,
                                rootClassName: _
                            })
                        }), (0, a.jsxs)("div", {
                            className: "mt-4 flex flex-col-reverse items-center md:flex-row md:justify-between",
                            children: [(0, a.jsx)(pt, {
                                options: yn,
                                selected: O,
                                setSelected: function(e) {
                                    return L(Number(e))
                                }
                            }), !R && (0, a.jsx)(ht.t, {
                                className: "mb-6 md:mb-0",
                                currentPage: i,
                                totalItems: D,
                                itemsPerPage: O,
                                onChange: z,
                                maxPageItems: C < 510 ? 5 : 8
                            })]
                        })]
                    })
                })),
                wn = n(71156),
                Nn = n(92946),
                kn = n(31523),
                Sn = function(e) {
                    var t, n = (0, s.$G)("question-list").t,
                        r = de({
                            enabled: !e
                        }).data,
                        a = null === (t = Ae().data) || void 0 === t ? void 0 : t.companyTags,
                        c = null !== e && void 0 !== e ? e : r,
                        u = le().data,
                        d = (0, i.useRouter)(),
                        f = d.query,
                        v = d.pathname,
                        x = (0, o.useMemo)((function() {
                            return f
                        }), [JSON.stringify(f)]),
                        p = (0, wn.d)(),
                        h = (0, o.useMemo)((function() {
                            return (0, w.Z)({}, x, p)
                        }), [p, x]),
                        g = (0, k.Z)((0, se.I)("page"), 2),
                        j = g[0],
                        b = g[1],
                        y = (0, o.useMemo)((function() {
                            return j ? parseInt(j) : parseInt(null !== (t = "page", e = new URLSearchParams(window.location.search).get(t)) && void 0 !== e ? e : "1");
                            var e, t
                        }), [j]),
                        C = (0, o.useCallback)((function(e) {
                            b(e.toString())
                        }), [b]),
                        N = (0, o.useCallback)((function() {
                            C(1)
                        }), [C]),
                        S = (0, k.Z)((0, Nn.H)((0, se.I)(n("filter.key.difficulty")), N), 2),
                        _ = S[0],
                        Z = S[1],
                        T = (0, k.Z)((0, Nn.H)((0, se.I)(n("filter.key.status")), N), 2),
                        I = T[0],
                        F = T[1],
                        L = (0, k.Z)((0, Nn.H)((0, se.I)(n("filter.key.topics")), N), 2),
                        O = L[0],
                        E = L[1],
                        R = (0, k.Z)((0, Nn.H)((0, se.I)(n("filter.key.companies")), N), 2),
                        V = R[0],
                        A = R[1],
                        M = (0, k.Z)((0, Nn.H)((0, se.I)(n("filter.key.list")), N), 2),
                        B = M[0],
                        P = M[1],
                        D = (0, k.Z)((0, Nn.H)((0, se.I)(n("filter.key.search")), N), 2),
                        H = D[0],
                        q = D[1],
                        G = (0, k.Z)((0, Nn.H)((0, se.I)(n("filter.key.premium")), N), 2),
                        X = G[0],
                        z = G[1],
                        W = [n("filter.key.difficulty"), n("filter.key.status"), n("filter.key.topics"), n("filter.key.companies"), n("filter.key.list"), n("filter.key.search"), n("filter.key.premium")];
                    (0, kn.r)((function() {
                        N()
                    }), [_, I, O, V, B, H, X]);
                    var U = (0, o.useCallback)((function(e) {
                            P((null === e || void 0 === e ? void 0 : e.id) || "")
                        }), [P]),
                        Q = o.useMemo((function() {
                            if (u && B) return u.find((function(e) {
                                return e.id === B
                            }))
                        }), [u, B]),
                        K = (0, o.useCallback)((function(e) {
                            E((0, m.Z)(e.keys()).join(","))
                        }), [E]),
                        $ = o.useMemo((function() {
                            var e = new Map;
                            return c && O && O.split(",").filter(Boolean).forEach((function(t) {
                                var n, r = null === (n = c.filter(Boolean)) || void 0 === n ? void 0 : n.find((function(e) {
                                    return e.slug === t
                                }));
                                r && e.set(t, r.translatedName || r.name)
                            })), e
                        }), [c, O]),
                        J = (0, o.useCallback)((function(e) {
                            A((0, m.Z)(e.keys()).join(","))
                        }), [A]),
                        Y = o.useMemo((function() {
                            var e = new Map;
                            return a && V && V.split(",").filter(Boolean).forEach((function(t) {
                                var n, r = null === (n = a.filter(Boolean)) || void 0 === n ? void 0 : n.find((function(e) {
                                    return e.slug === t
                                }));
                                r && e.set(t, r.name)
                            })), e
                        }), [a, V]);
                    return {
                        page: y,
                        setPage: C,
                        difficultyFilter: _,
                        setDifficultyFilter: Z,
                        statusFilter: I,
                        setStatusFilter: F,
                        listFilter: Q,
                        setListFilter: U,
                        topicTagsFilter: $,
                        setTopicTagsFilter: K,
                        companyTagsFilter: Y,
                        setCompanyTagsFilter: J,
                        searchQuery: H,
                        setSearchQuery: q,
                        premiumQuestionsFilter: Boolean(X),
                        setPremiumQuestionsFilter: z,
                        clearAllFilters: function() {
                            Object.keys(h).forEach((function(e) {
                                W.includes(e) && delete h[e]
                            })), l().push({
                                pathname: v,
                                query: h
                            }, void 0, {
                                shallow: !0
                            })
                        }
                    }
                },
                _n = n(51438),
                Zn = n(52300),
                Tn = function e() {
                    (0, _n.Z)(this, e)
                };
            Tn.serialise = function(e) {
                try {
                    return (0, Zn.cv)(JSON.stringify(e))
                } catch (t) {
                    return console.error(t), ""
                }
            }, Tn.deserialise = function(e) {
                var t = [{
                    orderBy: void 0,
                    sortOrder: void 0
                }];
                if (!e) return t;
                try {
                    return JSON.parse((0, Zn.Jx)(e))
                } catch (n) {
                    return console.error(n), t
                }
            };
            var In = function(e) {
                    var t, n = e.categorySlug,
                        r = e.topicTagsData,
                        s = (0, k.Z)((0, se.I)("sorting"), 2),
                        i = s[0],
                        l = s[1],
                        c = (0, o.useMemo)((function() {
                            return Tn.deserialise(i)
                        }), [i]),
                        u = Sn(r),
                        d = (0, o.useState)(0),
                        f = d[0],
                        v = d[1],
                        x = (0, o.useRef)(null),
                        p = (0, o.useState)(!1),
                        h = p[0],
                        g = p[1],
                        j = (0, o.useMemo)((function() {
                            var e;
                            return Object.entries({
                                orderBy: c[0].orderBy,
                                sortOrder: c[0].sortOrder,
                                difficulty: u.difficultyFilter,
                                status: u.statusFilter,
                                searchKeywords: u.searchQuery,
                                tags: (0, m.Z)(u.topicTagsFilter.keys()),
                                companies: (0, m.Z)(u.companyTagsFilter.keys()),
                                listId: null === (e = u.listFilter) || void 0 === e ? void 0 : e.id,
                                premiumOnly: u.premiumQuestionsFilter
                            }).filter((function(e) {
                                var t = (0, k.Z)(e, 2)[1];
                                return Array.isArray(t) ? t.length : !!t
                            })).reduce((function(e, t) {
                                var n = (0, k.Z)(t, 2),
                                    r = n[0],
                                    a = n[1];
                                return (0, N.Z)((0, w.Z)({}, e), (0, C.Z)({}, r, a))
                            }), {})
                        }), [c, u.difficultyFilter, u.statusFilter, u.searchQuery, u.topicTagsFilter, u.companyTagsFilter, null === (t = u.listFilter) || void 0 === t ? void 0 : t.id, u.premiumQuestionsFilter]),
                        b = (0, ae.qe)(),
                        y = b.isFetching,
                        S = b.data,
                        _ = function() {
                            var e = (0, o.useState)(!1),
                                t = e[0],
                                n = e[1],
                                r = (0, o.useState)(!1);
                            return {
                                showTopicTags: t,
                                setShowTopicTags: n,
                                showCompanyTags: r[0],
                                setShowCompanyTags: r[1]
                            }
                        }(),
                        Z = _.showTopicTags,
                        T = _.showCompanyTags,
                        I = re({
                            categorySlug: n,
                            filters: j
                        }),
                        F = I.isFetching,
                        L = I.refetch,
                        O = le().data;
                    (0, o.useEffect)((function() {
                        var e = function() {
                            var e, t;
                            v(null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.offsetWidth) && void 0 !== t ? t : 0)
                        };
                        return x.current && e(), window.addEventListener("resize", e),
                            function() {
                                window.removeEventListener("resize", e)
                            }
                    }), []);
                    var E = (0, o.useCallback)((function(e) {
                            if (e) switch (e.id) {
                                case "title":
                                    U();
                                    break;
                                case "acRate":
                                    K();
                                    break;
                                case "frequency":
                                    $();
                                    break;
                                case "difficulty":
                                    Q()
                            }
                        }), []),
                        R = (0, o.useCallback)((function(e, t) {
                            return !y && e && (null === S || void 0 === S ? void 0 : S.question) && 1 === t && (e = [S.question].concat((0, m.Z)(e))), e
                        }), [y, S]),
                        V = (0, o.useCallback)((function(e) {
                            v(e)
                        }), []),
                        A = (0, o.useCallback)((function(e) {
                            l(Tn.serialise(e))
                        }), [l]),
                        M = u.page,
                        B = u.setPage;
                    return (0, a.jsx)(Cn, {
                        page: M,
                        setPage: B,
                        slug: n,
                        showTopicTags: Z,
                        showCompanyTags: T,
                        topicTagsData: r,
                        topicTagsFilter: u.topicTagsFilter,
                        dailyQuestion: S,
                        setSorting: A,
                        filters: j,
                        handleSetWidth: V,
                        width: f,
                        pageChangeCallback: function() {
                            H()
                        },
                        tableChangeCallback: E,
                        questionsLoadedCallback: R,
                        ref: x,
                        FilterComponent: (0, a.jsx)(lt, (0, N.Z)((0, w.Z)({}, u, _), {
                            listData: O,
                            topicTagsData: r,
                            onRandomQuestionClick: function() {
                                h || F || (P(), g(!0), L().then((function(e) {
                                    var t = e.data;
                                    g(!1), t && (window.location.href = ie.Hb.questionDetail(t))
                                })))
                            },
                            isLoadingRandomQuestion: h || F
                        }))
                    })
                },
                Fn = n(6650),
                Ln = n(57845),
                On = n(72058);
            var En = n(54841),
                Rn = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M20 10v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-2 2zM6 10v9h12v-9H6zM4 6v2h16V6H4zm6 7.5a1 1 0 110-2h4a1 1 0 110 2h-4z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Vn = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5.828 1.793a1 1 0 011.415 0L10.45 5h8.05a1 1 0 011 1v2.895a3.502 3.502 0 010 6.71V18.5a1 1 0 01-1 1H10V21a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1h5a1 1 0 011 1v1.5h7.5v-1.895a3.502 3.502 0 010-6.71V7h-6.98l-3.277 3.278a1 1 0 01-1.415 0L2.293 6.743a1 1 0 010-1.415l3.535-3.535zm.708 2.121L4.414 6.036l2.122 2.12 2.12-2.12-2.12-2.122zM18.5 10.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 20v-3h3v3H5z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                An = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18 7.658c-1.466.66-3.611 1.009-6 1.009-2.388 0-4.534-.35-6-1.01V12c0 .052.429.392 1.358.702 1.192.398 2.85.631 4.642.631 1.791 0 3.45-.233 4.642-.63.93-.311 1.358-.65 1.358-.703V7.658zm1.64-3.426c.22.183.36.46.36.768v13.667C20 20.809 16.433 22 12 22s-8-1.19-8-3.333V5c0-.309.14-.585.36-.768C5.373 2.789 8.412 2 12 2s6.627.789 7.64 2.232zM18 14.328c-1.463.658-3.605 1.005-6 1.005s-4.536-.347-6-1.005v4.339c0 .052.429.392 1.358.702C8.55 19.767 10.208 20 12 20c1.791 0 3.45-.233 4.642-.631.93-.31 1.358-.65 1.358-.702v-4.339zM6.005 5.345v-.021c.013 0 .054.046.164.133.25.197.66.4 1.197.579 1.195.398 2.854.632 4.634.632 1.78 0 3.439-.234 4.634-.632.537-.18.947-.382 1.197-.579.11-.086.15-.132.164-.133v.021c-.013 0-.054-.047-.164-.133-.25-.197-.66-.4-1.197-.579C15.439 4.234 13.78 4 12 4c-1.78 0-3.439.234-4.634.632-.537.18-.947.382-1.197.579-.11.086-.15.132-.164.133z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Mn = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            d: "M8 2a1 1 0 011 1v1.7h.877c.307 0 .565.107.783.325.218.218.325.476.325.783v.027c0 .306-.107.559-.323.767l-.002.002a1.062 1.062 0 01-.783.325H7.225c-.55 0-1.02.193-1.405.577l-.001.002a1.947 1.947 0 00-.576 1.403c0 .38.09.72.276 1.014.185.292.46.531.816.719.12.063.385.153.775.27.396.12.936.27 1.62.452 1.01.289 1.73.654 2.178 1.085h.001c.636.603.965 1.483.965 2.667 0 1.164-.408 2.155-1.228 2.984A4.15 4.15 0 019 19.126V21a1 1 0 11-2 0v-1.67H4.094c-.296 0-.55-.107-.769-.326l-.002-.002A1.017 1.017 0 013 18.235v-.027c0-.306.107-.564.325-.782.22-.22.473-.326.77-.326h3.704c.55 0 1.021-.193 1.405-.577.384-.384.577-.855.577-1.405 0-.363-.091-.687-.278-.965-.187-.278-.463-.5-.818-.674h-.002a7.78 7.78 0 00-.728-.24c-.395-.12-.948-.28-1.659-.48-1-.297-1.72-.67-2.18-1.111-.637-.63-.966-1.534-.966-2.737 0-1.163.409-2.15 1.228-2.97C5.12 5.2 5.992 4.791 7 4.714V3a1 1 0 011-1zM14.496 9.532a1 1 0 10-.992 1.736l5.48 3.132-5.48 3.132a1 1 0 10.992 1.736l5.48-3.132c1.344-.767 1.344-2.705 0-3.473l-5.48-3.131z"
                        })
                    }))
                })),
                Bn = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M16.664 3.48C16.02 2.905 15 3.363 15 4.226v3.546c0 .863 1.02 1.32 1.664.748l1.995-1.774a1 1 0 000-1.494l-1.995-1.774zM4 9a4 4 0 014-4h5a1 1 0 110 2H8a2 2 0 100 4h8a4 4 0 110 8h-6a1 1 0 010-2h6a2 2 0 000-4H8a4 4 0 01-4-4zm4 10.773v-3.546c0-.863-1.02-1.32-1.664-.748L4.34 17.253a1 1 0 000 1.494l1.995 1.773c.645.574 1.664.116 1.664-.747z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Pn = o.forwardRef((function(e, t) {
                    return (0, a.jsxs)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 18 18",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: [(0, a.jsxs)("mask", {
                            id: "javascript_svg__a",
                            width: 16,
                            height: 18,
                            x: .8,
                            y: .081,
                            maskUnits: "userSpaceOnUse",
                            children: [(0, a.jsx)("path", {
                                d: "M.8.081h16v18H.8z"
                            }), (0, a.jsx)("path", {
                                d: "M11.221 11.254a3.236 3.236 0 01-1.735-.314 1.135 1.135 0 01-.425-.798.175.175 0 00-.18-.174 37.413 37.413 0 00-.753 0 .167.167 0 00-.183.147 1.843 1.843 0 00.597 1.456 3.175 3.175 0 001.767.663c.67.078 1.349.049 2.01-.085a2.484 2.484 0 001.332-.714c.402-.494.521-1.16.313-1.762a1.481 1.481 0 00-.975-.864c-1.016-.356-2.114-.328-3.15-.598-.18-.055-.4-.117-.48-.306a.673.673 0 01.225-.755 2.037 2.037 0 011.071-.265 3.248 3.248 0 011.494.213c.288.169.488.456.545.783a.192.192 0 00.181.186c.25.006.498.002.749.002a.18.18 0 00.195-.132 1.92 1.92 0 00-.942-1.664 4.685 4.685 0 00-2.553-.388 2.788 2.788 0 00-1.726.69 1.712 1.712 0 00-.344 1.786 1.529 1.529 0 00.966.84c1.014.363 2.124.246 3.145.569.2.067.432.17.493.39a.782.782 0 01-.214.748 2.366 2.366 0 01-1.423.346zm4.361-6.669a6909.08 6909.08 0 00-5.934-3.336 1.336 1.336 0 00-1.298 0L2.438 4.572a1.217 1.217 0 00-.638 1.06v6.692a1.226 1.226 0 00.663 1.07c.566.306 1.116.645 1.693.931a2.441 2.441 0 002.172.06 1.678 1.678 0 00.79-1.518c.003-2.208 0-4.417.001-6.625a.173.173 0 00-.164-.201 31.753 31.753 0 00-.756 0 .167.167 0 00-.182.168c-.003 2.194.002 4.39 0 6.585 0 .31-.193.588-.485.697a1.22 1.22 0 01-.984-.132l-1.572-.884a.187.187 0 01-.107-.186V5.667a.204.204 0 01.124-.205l5.891-3.306a.204.204 0 01.232 0l5.892 3.305a.207.207 0 01.123.205v6.624a.191.191 0 01-.106.188c-1.934 1.089-3.87 2.176-5.805 3.262-.092.05-.202.133-.31.07-.508-.285-1.007-.582-1.513-.87a.163.163 0 00-.183-.012c-.222.13-.456.24-.7.326-.109.044-.244.057-.32.158.096.104.213.187.344.245l1.773 1.02a1.298 1.298 0 001.314.036c1.97-1.105 3.941-2.211 5.912-3.319a1.229 1.229 0 00.663-1.07V5.631a1.216 1.216 0 00-.618-1.046z"
                            })]
                        }), (0, a.jsx)("path", {
                            d: "M11.221 11.254a3.236 3.236 0 01-1.735-.314 1.135 1.135 0 01-.425-.798.175.175 0 00-.18-.174 37.413 37.413 0 00-.753 0 .167.167 0 00-.183.147 1.843 1.843 0 00.597 1.456 3.175 3.175 0 001.767.663c.67.078 1.349.049 2.01-.085a2.484 2.484 0 001.332-.714c.402-.494.521-1.16.313-1.762a1.481 1.481 0 00-.975-.864c-1.016-.356-2.114-.328-3.15-.598-.18-.055-.4-.117-.48-.306a.673.673 0 01.225-.755 2.037 2.037 0 011.071-.265 3.248 3.248 0 011.494.213c.288.169.488.456.545.783a.192.192 0 00.181.186c.25.006.498.002.749.002a.18.18 0 00.195-.132 1.92 1.92 0 00-.942-1.664 4.685 4.685 0 00-2.553-.388 2.788 2.788 0 00-1.726.69 1.712 1.712 0 00-.344 1.786 1.529 1.529 0 00.966.84c1.014.363 2.124.246 3.145.569.2.067.432.17.493.39a.782.782 0 01-.214.748 2.366 2.366 0 01-1.423.346zm4.361-6.669a6909.08 6909.08 0 00-5.934-3.336 1.336 1.336 0 00-1.298 0L2.438 4.572a1.217 1.217 0 00-.638 1.06v6.692a1.226 1.226 0 00.663 1.07c.566.306 1.116.645 1.693.931a2.441 2.441 0 002.172.06 1.678 1.678 0 00.79-1.518c.003-2.208 0-4.417.001-6.625a.173.173 0 00-.164-.201 31.753 31.753 0 00-.756 0 .167.167 0 00-.182.168c-.003 2.194.002 4.39 0 6.585 0 .31-.193.588-.485.697a1.22 1.22 0 01-.984-.132l-1.572-.884a.187.187 0 01-.107-.186V5.667a.204.204 0 01.124-.205l5.891-3.306a.204.204 0 01.232 0l5.892 3.305a.207.207 0 01.123.205v6.624a.191.191 0 01-.106.188c-1.934 1.089-3.87 2.176-5.805 3.262-.092.05-.202.133-.31.07-.508-.285-1.007-.582-1.513-.87a.163.163 0 00-.183-.012c-.222.13-.456.24-.7.326-.109.044-.244.057-.32.158.096.104.213.187.344.245l1.773 1.02a1.298 1.298 0 001.314.036c1.97-1.105 3.941-2.211 5.912-3.319a1.229 1.229 0 00.663-1.07V5.631a1.216 1.216 0 00-.618-1.046z"
                        }), (0, a.jsx)("path", {
                            strokeWidth: .48,
                            d: "M11.221 11.254a3.236 3.236 0 01-1.735-.314 1.135 1.135 0 01-.425-.798.175.175 0 00-.18-.174 37.413 37.413 0 00-.753 0 .167.167 0 00-.183.147 1.843 1.843 0 00.597 1.456 3.175 3.175 0 001.767.663c.67.078 1.349.049 2.01-.085a2.484 2.484 0 001.332-.714c.402-.494.521-1.16.313-1.762a1.481 1.481 0 00-.975-.864c-1.016-.356-2.114-.328-3.15-.598-.18-.055-.4-.117-.48-.306a.673.673 0 01.225-.755 2.037 2.037 0 011.071-.265 3.248 3.248 0 011.494.213c.288.169.488.456.545.783a.192.192 0 00.181.186c.25.006.498.002.749.002a.18.18 0 00.195-.132 1.92 1.92 0 00-.942-1.664 4.685 4.685 0 00-2.553-.388 2.788 2.788 0 00-1.726.69 1.712 1.712 0 00-.344 1.786 1.529 1.529 0 00.966.84c1.014.363 2.124.246 3.145.569.2.067.432.17.493.39a.782.782 0 01-.214.748 2.366 2.366 0 01-1.423.346zm4.361-6.669a6909.08 6909.08 0 00-5.934-3.336 1.336 1.336 0 00-1.298 0L2.438 4.572a1.217 1.217 0 00-.638 1.06v6.692a1.226 1.226 0 00.663 1.07c.566.306 1.116.645 1.693.931a2.441 2.441 0 002.172.06 1.678 1.678 0 00.79-1.518c.003-2.208 0-4.417.001-6.625a.173.173 0 00-.164-.201 31.753 31.753 0 00-.756 0 .167.167 0 00-.182.168c-.003 2.194.002 4.39 0 6.585 0 .31-.193.588-.485.697a1.22 1.22 0 01-.984-.132l-1.572-.884a.187.187 0 01-.107-.186V5.667a.204.204 0 01.124-.205l5.891-3.306a.204.204 0 01.232 0l5.892 3.305a.207.207 0 01.123.205v6.624a.191.191 0 01-.106.188c-1.934 1.089-3.87 2.176-5.805 3.262-.092.05-.202.133-.31.07-.508-.285-1.007-.582-1.513-.87a.163.163 0 00-.183-.012c-.222.13-.456.24-.7.326-.109.044-.244.057-.32.158.096.104.213.187.344.245l1.773 1.02a1.298 1.298 0 001.314.036c1.97-1.105 3.941-2.211 5.912-3.319a1.229 1.229 0 00.663-1.07V5.631a1.216 1.216 0 00-.618-1.046z",
                            mask: "url(#javascript_svg__a)"
                        })]
                    }))
                })),
                Dn = o.forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, N.Z)((0, w.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5.282 22.051a1 1 0 01-1-1V8.658a1 1 0 012 0V21.05a1 1 0 01-1 1zm5.575-9.229v3.908a1 1 0 01-2 0v-3.908a1 1 0 112 0zm-1-1.879a1 1 0 01-1-1v-.507a1 1 0 112 0v.507a1 1 0 01-1 1zm0-3.286a1 1 0 01-1-1V2.949a1 1 0 012 0v3.708a1 1 0 01-1 1zm4.307 12.902a1 1 0 01-1-1V15.65a1 1 0 112 0v3.908a1 1 0 01-1 1zm0-6.787a1 1 0 01-1-1v-.507a1 1 0 112 0v.507a1 1 0 01-1 1zm0-3.287a1 1 0 01-1-1V5.777a1 1 0 112 0v3.708a1 1 0 01-1 1zm4.554 5.144a1 1 0 01-1-1V2.949a1 1 0 112 0v11.68a1 1 0 01-1 1z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Hn = n(8254),
                qn = n(32663),
                Gn = function(e) {
                    var t = e.categorySlug,
                        n = e.className,
                        r = e.isActive;
                    switch (t) {
                        case "all-code-essentials":
                        case "all-frontend":
                            return (0, a.jsx)(Rn, {
                                className: (0, ge.yI)(n, (0, C.Z)({}, ke.Cj.labelReverse, r))
                            });
                        case "algorithms":
                            return (0, a.jsx)(Vn, {
                                className: (0, ge.yI)("text-brand-orange", n, (0, C.Z)({}, ke.Cj.labelReverse, r))
                            });
                        case "database":
                            return (0, a.jsx)(An, {
                                className: (0, ge.yI)("text-blue dark:text-dark-blue", n, (0, C.Z)({}, ke.Cj.labelReverse, r))
                            });
                        case "shell":
                            return (0, a.jsx)(Mn, {
                                className: (0, ge.yI)("text-green-s dark:text-dark-green-s", n, (0, C.Z)({}, ke.Cj.labelReverse, r))
                            });
                        case "concurrency":
                            return (0, a.jsx)(Bn, {
                                className: (0, ge.yI)("text-purple dark:text-dark-purple", n, (0, C.Z)({}, ke.Cj.labelReverse, r))
                            });
                        case "javascript":
                            var s;
                            return (0, a.jsx)(Pn, {
                                className: (0, ge.yI)(n, (s = {}, (0, C.Z)(s, ke.Cj.labelTeal, !r), (0, C.Z)(s, ke.Cj.labelReverse, r), s))
                            });
                        case "pandas":
                            return (0, a.jsx)(Dn, {
                                className: (0, ge.yI)(n, "text-[#140854] dark:text-[#5b40ec]", (0, C.Z)({}, ke.Cj.labelReverse, r))
                            });
                        case "vanilla-js":
                        case "vanillajs":
                            return (0, a.jsx)(Hn.J, {
                                className: (0, ge.yI)(n, (0, C.Z)({}, ke.Cj.labelReverse, r))
                            });
                        case "react":
                            return (0, a.jsx)(qn.v, {
                                className: (0, ge.yI)(n, (0, C.Z)({}, ke.Cj.labelReverse, r))
                            })
                    }
                    return null
                },
                Xn = {
                    "code-essentials": ["all-code-essentials", "algorithms", "database", "pandas", "javascript", "shell", "concurrency"],
                    frontend: ["all-frontend", "vanilla-js", "vanillajs", "react"]
                },
                zn = function(e, t) {
                    return (0, o.useMemo)((function() {
                        var n = {};
                        if (!t) return n;
                        var r = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var i, l = function() {
                                    var t, r, a = i.value.slug,
                                        s = null !== (t = null === e || void 0 === e ? void 0 : e.filter((function(e) {
                                            return e.categoryGroup === a
                                        }))) && void 0 !== t ? t : [],
                                        l = null !== (r = Xn[a]) && void 0 !== r ? r : [];
                                    n[a] = function(e, t) {
                                        return (0, m.Z)(e).sort((function(e, n) {
                                            var r = t.indexOf(e.titleSlug),
                                                a = t.indexOf(n.titleSlug);
                                            return -1 === r && -1 === a ? e.titleSlug.localeCompare(n.titleSlug) : -1 === r ? 1 : -1 === a ? -1 : r - a
                                        }))
                                    }(s, l)
                                }, o = t[Symbol.iterator](); !(r = (i = o.next()).done); r = !0) l()
                        } catch (c) {
                            a = !0, s = c
                        } finally {
                            try {
                                r || null == o.return || o.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return n
                    }), [e, t])
                },
                Wn = function() {
                    return (0, a.jsx)(En.O, {
                        className: "flex h-10 w-32 shrink-0 items-center space-x-2 rounded-full"
                    })
                },
                Un = function(e) {
                    var t = e.currentCategorySlug,
                        n = e.problemsetCategories,
                        r = (0, o.useRef)(null),
                        s = (0, k.Z)(o.useState(0), 2),
                        i = s[0],
                        c = s[1];
                    (0, o.useEffect)((function() {
                        var e = setTimeout((function() {
                            return c((function(e) {
                                return e + 1
                            }))
                        }), 100);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [t, n]);
                    var u = function(e, t) {
                            var n = (0, o.useState)(!1),
                                r = n[0],
                                a = n[1],
                                s = (0, o.useState)(!1),
                                i = s[0],
                                l = s[1],
                                c = (0, o.useState)(!0),
                                u = c[0],
                                d = c[1],
                                m = (0, o.useState)(!1),
                                f = m[0],
                                v = m[1],
                                x = (0, o.useState)(!0),
                                p = x[0],
                                h = x[1],
                                g = (0, o.useState)(!1),
                                j = g[0],
                                b = g[1],
                                y = (0, On.i)();
                            return (0, o.useEffect)((function() {
                                if (e.current) {
                                    var t = e.current.scrollWidth > e.current.clientWidth,
                                        n = e.current.scrollHeight > e.current.clientHeight;
                                    r !== t && a(t), i !== n && l(n);
                                    var s = e.current,
                                        o = function() {
                                            var t;
                                            if (e.current) {
                                                var n = e.current.scrollWidth - e.current.clientWidth;
                                                e.current.scrollLeft >= n && !f ? v(!0) : v(!1), 0 === (null === e || void 0 === e || null === (t = e.current) || void 0 === t ? void 0 : t.scrollLeft) ? d(!0) : d(!1);
                                                var r = e.current.scrollHeight - e.current.clientHeight;
                                                e.current.scrollTop >= r && !j ? b(!0) : b(!1), 0 === e.current.scrollTop ? h(!0) : h(!1)
                                            }
                                        };
                                    return e.current.addEventListener("scroll", o),
                                        function() {
                                            return null === s || void 0 === s ? void 0 : s.removeEventListener("scroll", o)
                                        }
                                }
                            }), [e, r, f, i, j, y.width, t]), {
                                refXOverflowing: r,
                                refYOverflowing: i,
                                refXScrollBegin: u,
                                refXScrollEnd: f,
                                refYScrollBegin: p,
                                refYScrollEnd: j
                            }
                        }(r, i),
                        d = u.refXOverflowing,
                        m = u.refXScrollEnd,
                        f = (0, o.useCallback)((function() {
                            r.current && (m ? r.current.scrollLeft = 0 : r.current.scrollLeft += 100)
                        }), [m]),
                        v = (0, o.useCallback)((function(e) {
                            return function(t) {
                                t.stopPropagation(), t.preventDefault(), F({
                                    problemset_category: e
                                });
                                var n = new URLSearchParams(window.location.search);
                                n.delete("page");
                                var r = String(n);
                                r && (r = "?" + r), l().push(t.currentTarget.href + r, void 0, {
                                    shallow: !0,
                                    scroll: !1
                                })
                            }
                        }), []),
                        x = null !== n && void 0 !== n ? n : [],
                        p = (0, o.useMemo)((function() {
                            var e, r, a;
                            return null !== (a = null !== (r = null === (e = null === n || void 0 === n ? void 0 : n.find((function(e) {
                                return e.titleSlug === t
                            }))) || void 0 === e ? void 0 : e.titleSlug) && void 0 !== r ? r : null === n || void 0 === n ? void 0 : n[0].titleSlug) && void 0 !== a ? a : ""
                        }), [n, t]);
                    return (0, a.jsxs)("div", {
                        ref: r,
                        className: (0, ge.yI)("relative flex select-none items-center gap-4 overflow-hidden"),
                        children: [0 === x.length ? Array.from({
                            length: 10
                        }).map((function(e, t) {
                            return (0, a.jsx)(Wn, {}, t)
                        })) : null, x.map((function(e, t) {
                            var n, r, s = p === e.titleSlug;
                            return (0, a.jsx)("a", {
                                href: ie.Hb.problemset(e.titleSlug),
                                onClick: v(e.titleSlug),
                                className: (0, ge.yI)("relative"),
                                style: {
                                    order: t
                                },
                                children: (0, a.jsxs)("div", {
                                    className: (0, ge.yI)("flex items-center space-x-2 whitespace-nowrap rounded-full px-4 py-[10px]", "pointer-event-none text-base leading-tight", (r = {}, (0, C.Z)(r, ke.Cj.fill3, !s), (0, C.Z)(r, ke.Cj.label2, !s), (0, C.Z)(r, ke.Cj.fill2Hover, !s), (0, C.Z)(r, "hover:text-label-2 dark:hover:text-dark-label-2", !s), (0, C.Z)(r, "bg-gray-8 dark:bg-white", s), (0, C.Z)(r, ke.Cj.labelReverse, s), (0, C.Z)(r, ke.eq.commandBar, s), r)),
                                    children: [(0, a.jsx)(Gn, {
                                        className: "mr-2 hidden h-[18px] w-[18px] lg:block",
                                        categorySlug: e.titleSlug,
                                        isActive: s
                                    }), (null === (n = e.info) || void 0 === n ? void 0 : n.titleCn) || e.title]
                                })
                            }, e.titleSlug)
                        })), d && (0, a.jsxs)("div", {
                            className: (0, ge.yI)("sticky -right-px", "order-last flex self-end", ke.Cj.label3),
                            children: [(0, a.jsx)("span", {
                                className: "from-paper dark:from-dark-paper h-10 w-4 bg-gradient-to-l"
                            }), (0, a.jsx)("span", {
                                className: "bg-paper dark:bg-dark-paper flex h-10 w-8 cursor-pointer items-center pl-1 font-normal",
                                onClick: f,
                                children: m ? (0, a.jsx)(Fn.C, {
                                    className: "h-3.5 w-3.5"
                                }) : (0, a.jsx)(Ln.B, {
                                    className: "h-3.5 w-3.5"
                                })
                            })]
                        })]
                    })
                };

            function Qn(e) {
                var t = e.categorySlug,
                    n = j().data,
                    r = null !== n && void 0 !== n ? n : {},
                    s = r.categories,
                    i = r.categoryGroups,
                    l = (0, o.useState)(x[0].slug),
                    c = l[0],
                    u = l[1];
                (0, o.useEffect)((function() {
                    var e = null === s || void 0 === s ? void 0 : s.find((function(e) {
                        return e.titleSlug === t
                    }));
                    e && u(e.categoryGroup)
                }), [s, t]);
                var d, m, f = null !== (m = null !== (d = zn(s, i)[c]) && void 0 !== d ? d : s) && void 0 !== m ? m : void 0;
                return (0, a.jsx)(Un, {
                    currentCategorySlug: t,
                    problemsetCategories: f
                })
            }
            var Kn, $n, Jn = n(72004),
                Yn = n(23860),
                er = function(e) {
                    var t = e.topicTagsData,
                        n = e.className,
                        r = (0, s.$G)("question-list").t,
                        i = (0, Bt.E)(),
                        l = de({
                            enabled: !t
                        }).data,
                        c = null !== t && void 0 !== t ? t : l,
                        u = (0, o.useState)(!1),
                        d = u[0],
                        m = u[1],
                        f = (0, o.useCallback)((function() {
                            m(!d), I()
                        }), [d]),
                        v = (0, o.useCallback)((function(e) {
                            return function() {
                                return T({
                                    problemset_topic_tag: e
                                }), !0
                            }
                        }), []);
                    return (0, a.jsxs)("div", {
                        className: y()("relative flex", n),
                        children: [(0, a.jsx)("div", {
                            className: y()("relative my-[-10px] ml-[-10px] flex overflow-hidden", {
                                "flex-nowrap": !d,
                                "flex-wrap": d
                            }),
                            children: c && c.map((function(e) {
                                return (0, a.jsx)("div", {
                                    className: y()("group m-[10px] flex items-center"),
                                    children: (0, a.jsxs)("a", {
                                        className: "inline-flex items-center",
                                        href: "/tag/".concat(e.slug),
                                        onClick: v(e.slug),
                                        children: [(0, a.jsx)("span", {
                                            className: y()("whitespace-nowrap ", "group-hover:text-blue dark:group-hover:text-dark-blue", ke.Cj.label1),
                                            children: i && e.translatedName || e.name
                                        }), (0, a.jsx)("span", {
                                            className: y()("ml-1 flex h-[18px] items-center justify-center rounded-[10px] px-1.5 text-xs font-normal", ke.Cj.label3, ke.Cj.fill3, "group-hover:text-blue dark:group-hover:text-dark-blue", "group-hover:bg-blue-0 dark:group-hover:bg-dark-blue-0"),
                                            children: e.questionCount
                                        })]
                                    })
                                }, e.slug)
                            }))
                        }), (0, a.jsxs)("div", {
                            className: y()("z-base-1 absolute bottom-[-7px] right-0", "flex self-end", ke.Cj.label3),
                            children: [(0, a.jsx)("span", {
                                className: "from-layer-1 z-base-2 dark:from-dark-layer-bg h-9 w-6 bg-gradient-to-l"
                            }), (0, a.jsxs)("span", {
                                className: "bg-layer-1 dark:bg-dark-layer-bg flex h-9 cursor-pointer items-center pl-0.5 font-normal",
                                onClick: f,
                                children: [(0, a.jsx)("span", {
                                    className: "grow text-right",
                                    children: r(d ? "topicTags.collapse" : "topicTags.expand")
                                }), d ? (0, a.jsx)(Jn.D, {
                                    className: "h-[15px] w-[15px]"
                                }) : (0, a.jsx)(Yn.H, {
                                    className: "h-[15px] w-[15px]"
                                })]
                            })]
                        })]
                    })
                },
                tr = n(70060),
                nr = n(30719),
                rr = n(87231),
                ar = {
                    2: (Kn = {}, (0, C.Z)(Kn, xe.r1.MD, {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 16
                    }), (0, C.Z)(Kn, xe.r1.LG, {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 24
                    }), Kn),
                    3: ($n = {}, (0, C.Z)($n, xe.r1.MD, {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 16
                    }), (0, C.Z)($n, xe.r1.LG, {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                        spaceBetween: 24
                    }), $n)
                },
                sr = {},
                ir = n(19906),
                lr = (0, o.memo)((function(e) {
                    var t = e.targetLink,
                        n = e.adName,
                        r = e.imageLink,
                        s = e.title,
                        i = e.isTagShown,
                        l = e.ratio,
                        c = e.showBannerName,
                        u = e.onClick,
                        d = (0, o.useCallback)((function(e) {
                            e.preventDefault(), u()
                        }), [u]);
                    return (0, a.jsxs)("a", {
                        className: "flex flex-col",
                        onClick: d,
                        href: t,
                        "aria-label": n,
                        children: [(0, a.jsx)("div", {
                            className: y()({
                                "md:aspect-w-1 md:aspect-h-1 h-[116px] w-[116px] md:h-auto md:w-auto": 1 === l,
                                "md:aspect-w-2 md:aspect-h-1 h-[100px] w-[200px] md:h-auto md:w-auto": 2 === l
                            }),
                            children: (0, a.jsxs)("span", {
                                className: y()("relative inline-block overflow-hidden", ke.eq.card, "rounded-[8px]"),
                                children: [(0, a.jsx)(ir.y, {
                                    className: y()("object-cover md:h-full md:w-full", {
                                        "h-[116px] w-[116px]": 1 === l,
                                        "h-[100px] w-[200px]": 2 === l
                                    }),
                                    src: r,
                                    alt: s
                                }), !!i && (0, a.jsx)("span", {
                                    className: y()("absolute bottom-0 right-0 block h-[20px] w-[40px] rounded-tl-[8px]", "bg-gray-8 bg-opacity-30 text-center text-xs leading-[20px] text-white"),
                                    children: "\u5e7f\u544a"
                                })]
                            })
                        }), c && (0, a.jsx)("span", {
                            className: y()("pt-1 text-center text-xs md:pt-2 md:text-sm", ke.Cj.label1, {
                                "md:aspect-w-1 w-[116px] md:h-auto md:w-auto": 1 === l,
                                "md:aspect-w-2 w-[200px] md:h-auto md:w-auto": 2 === l
                            }),
                            children: s
                        })]
                    })
                })),
                or = function(e) {
                    var t = e.ad,
                        n = e.ratio,
                        r = e.positionTitle,
                        s = e.adsPositionKey,
                        l = e.showBannerName,
                        c = (0, i.useRouter)(),
                        u = (0, o.useCallback)((function() {
                            c.push(t.targetLink), J({
                                problemset_ad_position: r || s || "",
                                problemset_ad_name: t.identifier
                            }), rr.o.advertisementAdClick({
                                advertisement_ad_position: r || s || "",
                                advertisement_ad_name: t.identifier
                            })
                        }), [c, s, r, t]);
                    return (0, a.jsx)(lr, {
                        targetLink: t.targetLink,
                        adName: t.identifier,
                        imageLink: t.imageLink,
                        title: t.title,
                        isTagShown: t.isTagShown,
                        showBannerName: l,
                        ratio: n,
                        onClick: u
                    })
                },
                cr = n(30123),
                ur = n(4522),
                dr = function(e) {
                    var t, n = e.onClick,
                        r = e.className,
                        s = e.children,
                        i = (0, bt.Z)(e, ["onClick", "className", "children"]);
                    return (0, a.jsx)("button", (0, N.Z)((0, w.Z)({
                        onClick: n,
                        className: y()("rounded text-[24px] focus:outline-none", ke.Cj.fill4, ke.Cj.fill3Hover, "active:text-label-3 dark:active:text-dark-label-3", (t = {}, (0, C.Z)(t, ke.Cj.label2, !i.disabled), (0, C.Z)(t, ke.Cj.label4, i.disabled), t), r)
                    }, i), {
                        children: s
                    }))
                },
                mr = function(e) {
                    var t = e.title,
                        n = e.navigation,
                        r = e.onPrev,
                        s = e.onNext;
                    return (0, a.jsxs)("div", {
                        className: "flex items-center pb-3",
                        children: [(0, a.jsx)("h3", {
                            className: y()("truncate text-[20px] font-medium", ke.Cj.label2),
                            children: t || "\u3000"
                        }), !!n && (0, a.jsxs)("div", {
                            className: "ml-auto flex items-center",
                            children: [(0, a.jsx)(dr, {
                                "aria-label": "Prev",
                                onClick: r,
                                children: (0, a.jsx)(cr.P, {})
                            }), (0, a.jsx)(dr, {
                                "aria-label": "Next",
                                onClick: s,
                                className: y()("ml-1.5"),
                                children: (0, a.jsx)(ur.h, {})
                            })]
                        })]
                    })
                },
                fr = function(e) {
                    var t = e.ratio,
                        n = e.showBannerName,
                        r = e.ads,
                        s = e.positionTitle,
                        i = e.adsPositionKey,
                        l = e.isLoading,
                        c = e.className,
                        u = (0, On.i)().width || ((0, v.jU)() ? window.innerWidth : xe.r1.LG),
                        d = 1 === t ? 3 : 2,
                        m = (0, o.useMemo)((function() {
                            return function(e, t) {
                                var n = ar[e],
                                    r = Object.keys(n).map((function(e) {
                                        return Number(e)
                                    })).sort((function(e, t) {
                                        return t - e
                                    })).find((function(e) {
                                        return e < t
                                    })) || -1;
                                return -1 !== r ? n[r] : sr
                            }(d, u)
                        }), [d, u]),
                        f = (0, o.useMemo)((function() {
                            return u < xe.r1.MD ? (0, w.Z)({
                                slidesPerView: "auto",
                                freeMode: !0,
                                loopedSlides: 0,
                                spaceBetween: 16,
                                loopFillGroupWithBlank: !0
                            }, m) : (0, N.Z)((0, w.Z)({
                                slidesPerView: d,
                                slidesPerGroup: d,
                                spaceBetween: 16,
                                allowTouchMove: (0, v.b1)(),
                                loopFillGroupWithBlank: !0
                            }, m), {
                                breakpoints: void 0
                            })
                        }), [d, m, u]),
                        x = (0, o.useRef)(new Set);
                    (0, o.useEffect)((function() {
                        x.current.clear()
                    }), [r]);
                    var p = (0, o.useMemo)((function() {
                            return null === r || void 0 === r ? void 0 : r.map((function(e, t) {
                                return function() {
                                    x.current.has(t) || (Y({
                                        problemset_ad_position: s || i || "",
                                        problemset_ad_name: e.identifier
                                    }), rr.o.advertisementAdExposure({
                                        advertisement_ad_position: s || i || "",
                                        advertisement_ad_name: e.identifier
                                    }), x.current.add(t))
                                }
                            }))
                        }), [r, i, s]),
                        h = (0, o.useRef)(),
                        g = "auto" === f.slidesPerView ? 1 : f.slidesPerView,
                        j = null === r || void 0 === r ? void 0 : r.length,
                        b = !!j && g < j,
                        y = (0, o.useCallback)((function(e) {
                            h.current = e
                        }), []),
                        C = (0, o.useCallback)((function() {
                            var e, t, n = null !== (t = null === (e = h.current) || void 0 === e ? void 0 : e.realIndex) && void 0 !== t ? t : null;
                            if (null !== n && p)
                                for (var r = 0; r < g; r++) {
                                    var a = p[r + n];
                                    a && a()
                                }
                        }), [h, p, g]);
                    (0, o.useEffect)((function() {
                        C()
                    }), [C]);
                    var k = (0, o.useCallback)((function() {
                            var e;
                            null === (e = h.current) || void 0 === e || e.slidePrev()
                        }), []),
                        S = (0, o.useCallback)((function() {
                            var e;
                            null === (e = h.current) || void 0 === e || e.slideNext()
                        }), []);
                    return l || j ? (0, a.jsxs)("div", {
                        className: c,
                        children: [(0, a.jsx)(mr, {
                            title: s,
                            navigation: b,
                            onPrev: k,
                            onNext: S
                        }), l ? (0, a.jsx)(an.O, {
                            className: "-m-2 grid gap-6 p-2 min-[390px]:grid-cols-2 min-[900px]:grid-cols-3",
                            children: Array(u < 900 ? 2 : 3).fill(1).map((function(e, t) {
                                return (0, a.jsx)(sn.a, {
                                    className: (0, ge.yI)("md:aspect-w-2 md:aspect-h-1 h-[100px] w-[200px] md:h-auto md:w-auto")
                                }, t)
                            }))
                        }) : (0, a.jsx)(nr.tq, (0, N.Z)((0, w.Z)({}, f), {
                            loop: b,
                            onSwiper: y,
                            className: "-m-2 p-2",
                            onSlideChange: C,
                            children: (r || []).map((function(e, r) {
                                return (0, a.jsx)(nr.o5, {
                                    className: "w-auto",
                                    children: (0, a.jsx)(or, {
                                        ad: e,
                                        ratio: t,
                                        positionTitle: s,
                                        adsPositionKey: i,
                                        showBannerName: n
                                    })
                                }, r)
                            }))
                        }))]
                    }) : null
                },
                vr = function(e) {
                    var t = e.adPageKey,
                        n = e.adsPositionKey,
                        r = e.ratio,
                        s = e.showBannerName,
                        i = e.className,
                        l = (0, tr.Mw)(t, n, {
                            enabled: !0
                        }),
                        o = l.isInitialLoading,
                        c = l.data,
                        u = null !== c && void 0 !== c ? c : {},
                        d = u.ads,
                        m = u.positionTitle;
                    return (0, a.jsx)(fr, {
                        ratio: r,
                        showBannerName: s,
                        ads: d,
                        positionTitle: m,
                        adsPositionKey: n,
                        isLoading: o,
                        className: i
                    })
                },
                xr = n(97516),
                pr = n(70067),
                hr = n(59646),
                gr = n(6199),
                jr = function() {
                    return (0, ne.Mqr)(te.f6, {}, {
                        select: function(e) {
                            return e.studyPlansV2AdQuestionPage
                        }
                    })
                },
                br = n(86781),
                yr = function(e, t) {
                    br.m.spV2ProblemsetAdClick({
                        sp_v_2_is_premium: t ? "1" : "0",
                        sp_v_2_plan_slug: e
                    })
                },
                Cr = function(e) {
                    br.m.spV2ProblemsetSeeMoreClick({
                        sp_v_2_is_premium: e ? "1" : "0"
                    })
                },
                wr = function() {
                    var e, t = (0, s.$G)("new-study-plan", {
                            keyPrefix: "common"
                        }).t,
                        n = jr(),
                        r = n.data,
                        i = n.isInitialLoading,
                        l = (0, Ve.U5)().data,
                        o = null === l || void 0 === l || null === (e = l.userStatus) || void 0 === e ? void 0 : e.isPremium;
                    return (0, a.jsxs)("div", {
                        className: "mt-8",
                        children: [(0, a.jsxs)("div", {
                            className: "mb-4 flex items-center justify-between",
                            children: [(0, a.jsx)("p", {
                                className: (0, ge.yI)("text-[20px] font-medium", ke.xy.labelTextSecondary),
                                children: t("studyPlan")
                            }), (0, a.jsx)("a", {
                                href: ie.Hb.studyPlanV2,
                                onClick: function() {
                                    Cr(!!o)
                                },
                                className: (0, ge.yI)("text-[14px]", ke.xy.labelSystemPrimary),
                                children: t("seeAll")
                            })]
                        }), (0, a.jsx)("div", {
                            className: "grid gap-4 min-[390px]:grid-cols-2 min-[900px]:grid-cols-3",
                            children: i ? [1, 2, 3, 4, 5, 6].map((function(e) {
                                return (0, a.jsx)(hr.V, {
                                    status: "ad"
                                }, "problem_set_plan_card_".concat(e))
                            })) : (r || []).map((function(e) {
                                return (0, a.jsx)("a", {
                                    href: ie.Hb.studyPlanV2Detail(e.slug),
                                    onClick: function() {
                                        return t = e.slug, void yr(t);
                                        var t
                                    },
                                    children: (0, a.jsx)(gr.N, {
                                        status: "ad",
                                        desc: e.highlight,
                                        title: e.name,
                                        image: e.cover,
                                        showLock: e.premiumOnly,
                                        isLock: !o
                                    })
                                }, e.slug)
                            }))
                        })]
                    })
                },
                Nr = n(62434),
                kr = n(46991),
                Sr = n(90461),
                _r = n(13744),
                Zr = n(28835),
                Tr = function(e, t) {
                    return (0, ne.$iX)(te.f6, {
                        year: e,
                        month: t
                    }, {
                        select: function(e) {
                            var t = e.dailyCodingChallengeV2;
                            return t ? {
                                challenges: null === t || void 0 === t ? void 0 : t.challenges.map((function(e) {
                                    var t = e.userStatus,
                                        n = e.date,
                                        r = e.question,
                                        a = e.link,
                                        s = Lt._.NotStart;
                                    return t === ne.DRm.Finish && (s = Lt._.Finish), {
                                        link: a,
                                        status: s,
                                        date: n,
                                        question: r
                                    }
                                })),
                                weeklyChallenges: null === t || void 0 === t ? void 0 : t.weeklyChallenges.map((function(e) {
                                    var t = e.userStatus,
                                        n = e.date,
                                        r = e.question,
                                        a = e.link,
                                        s = Lt._.NotStart;
                                    return t === ne.DRm.Finish && (s = Lt._.Finish), {
                                        link: a,
                                        status: s,
                                        date: n,
                                        question: (0, N.Z)((0, w.Z)({}, r), {
                                            isPaidOnly: !!r.isPaidOnly
                                        })
                                    }
                                }))
                            } : {
                                challenges: [],
                                weeklyChallenges: []
                            }
                        },
                        refetchOnMount: "always"
                    })
                };
            var Ir = function(e) {
                    return (0, ne.M4V)(te.f6, {}, (0, N.Z)((0, w.Z)({}, e), {
                        select: function(e) {
                            if (!e) return {
                                usedCount: 0,
                                cardCount: 0
                            };
                            var t = e.redeemedTimeTravelTicketCount;
                            return {
                                usedCount: t - e.validTimeTravelTicketCount,
                                cardCount: t
                            }
                        }
                    }))
                },
                Fr = n(92733),
                Lr = n(17023),
                Or = n(80183),
                Er = n(89117),
                Rr = function(e) {
                    return ie.Hb.premium(Kt.D.StudyPlanV2PremiumGroupCalendar, {
                        slug: e
                    })
                },
                Vr = function() {
                    var e, t, n, r, i, l, c, u = (0, s.$G)("new-study-plan", {
                            keyPrefix: "common"
                        }).t,
                        d = (0, Er.y)(1, 3).data,
                        f = (0, m.Z)((null === d || void 0 === d ? void 0 : d.planUserProgresses) || []),
                        v = f.shift(),
                        x = (null === v || void 0 === v ? void 0 : v.plan.slug) || "",
                        p = (0, Ve.U5)().data,
                        h = null === p || void 0 === p || null === (e = p.userStatus) || void 0 === e ? void 0 : e.isPremium,
                        g = null === p || void 0 === p || null === (t = p.userStatus) || void 0 === t ? void 0 : t.useTranslation,
                        j = !h && (null === v || void 0 === v || null === (n = v.nextQuestionInfo) || void 0 === n ? void 0 : n.inPremiumSubgroup),
                        b = (0, o.useMemo)((function() {
                            var e, t = null === v || void 0 === v || null === (e = v.nextQuestionInfo) || void 0 === e ? void 0 : e.nextQuestion;
                            return g && (null === t || void 0 === t ? void 0 : t.translatedTitle) || (null === t || void 0 === t ? void 0 : t.title)
                        }), [g, v]);
                    return (null === d || void 0 === d || null === (r = d.planUserProgresses) || void 0 === r ? void 0 : r.length) ? (0, a.jsxs)("div", {
                        className: "px-3 pt-2",
                        children: [(0, a.jsxs)("div", {
                            className: (0, ge.yI)("mb-1.5 ml-1 flex border-t pt-3.5 text-[14px] font-medium", ke.xy.labelTextPrimary, ke.xy.borderFill02),
                            children: [(0, a.jsx)("span", {
                                children: u("ongoingStudyPlan")
                            }), f.length > 2 && (0, a.jsx)(Fr.G, {
                                className: (0, ge.yI)("ml-2 inline-block h-3 w-3 shrink-0 fill-none stroke-current", ke.xy.labelIconTertiary)
                            })]
                        }), (0, a.jsx)("a", {
                            href: ie.Hb.studyPlanV2Detail((null === v || void 0 === v ? void 0 : v.plan.slug) || ""),
                            onClick: function() {
                                br.m.spV2ProblemsRpSpdetialClick({
                                    sp_v_2_plan_slug: x,
                                    sp_v_2_is_current_sp: "yes"
                                })
                            },
                            className: "mb-1 block",
                            children: (0, a.jsx)(gr.N, {
                                status: "card",
                                title: (null === v || void 0 === v || null === (i = v.plan) || void 0 === i ? void 0 : i.name) || "",
                                image: (null === v || void 0 === v || null === (l = v.plan) || void 0 === l ? void 0 : l.cover) || "",
                                doneProgress: (null === v || void 0 === v ? void 0 : v.finishedQuestionNum) || 0,
                                desc: b || "",
                                totalProgress: (null === v || void 0 === v ? void 0 : v.plan.questionNum) || 0,
                                showLock: null === v || void 0 === v || null === (c = v.plan) || void 0 === c ? void 0 : c.premiumOnly,
                                isLock: !h,
                                onClickTitle: function(e) {
                                    var t, n;
                                    e.stopPropagation(), j ? window.open(Rr(x)) : (window.open(ie.Hb.questionDetailWithLearningEnvironment((null === v || void 0 === v || null === (t = v.nextQuestionInfo) || void 0 === t || null === (n = t.nextQuestion) || void 0 === n ? void 0 : n.titleSlug) || "", new URLSearchParams({
                                        envType: xe.Zw.StudyPlanV2,
                                        envId: (null === v || void 0 === v ? void 0 : v.plan.slug) || ""
                                    }).toString())), br.m.spV2ProblemsRpQdClick({
                                        sp_v_2_plan_slug: x
                                    }))
                                },
                                isLockTitle: j
                            }, null === v || void 0 === v ? void 0 : v.id)
                        }), (0, a.jsx)("div", {
                            children: f.map((function(e) {
                                var t, n;
                                return (0, a.jsx)("a", {
                                    href: ie.Hb.studyPlanV2Detail((null === e || void 0 === e || null === (t = e.plan) || void 0 === t ? void 0 : t.slug) || ""),
                                    onClick: function() {
                                        var t, n;
                                        return n = (null === e || void 0 === e || null === (t = e.plan) || void 0 === t ? void 0 : t.slug) || "", void br.m.spV2ProblemsRpSpdetialClick({
                                            sp_v_2_plan_slug: n,
                                            sp_v_2_is_current_sp: "no"
                                        })
                                    },
                                    children: (0, a.jsxs)("div", {
                                        className: (0, ge.yI)("group flex cursor-pointer items-center justify-between border-t", ke.xy.borderFill02),
                                        children: [(0, a.jsxs)("div", {
                                            className: "ml-1 flex w-0 flex-1 items-center py-2",
                                            children: [(0, a.jsx)(Or._, {
                                                customThickness: 10,
                                                className: "h-6 w-6",
                                                variant: "info",
                                                percentage: +(((null === e || void 0 === e ? void 0 : e.finishedQuestionNum) || 0) / ((null === e || void 0 === e ? void 0 : e.plan.questionNum) || 0) * 100).toFixed(0),
                                                bgClassName: "stroke-lc-fill-02 dark:stroke-dark-lc-fill-02"
                                            }), (0, a.jsx)("p", {
                                                className: (0, ge.yI)("ml-3 w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-medium", ke.xy.labelTextPrimary, ke.qV.labelSystemPrimaryGroup),
                                                children: (null === e || void 0 === e || null === (n = e.plan) || void 0 === n ? void 0 : n.name) || ""
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "hidden group-hover:block",
                                            children: (0, a.jsx)(Lr.N, {
                                                className: (0, ge.yI)("inline-block h-4 w-4 shrink-0 fill-none stroke-current", ke.xy.labelIconTertiary)
                                            })
                                        })]
                                    })
                                }, e.id)
                            }))
                        })]
                    }) : null
                },
                Ar = n(36787),
                Mr = n(46216),
                Br = n(60792),
                Pr = n(35077),
                Dr = n(54303),
                Hr = n(82497),
                qr = ke.Cj.labelBlueStandard,
                Gr = function() {
                    return !1
                },
                Xr = function(e) {
                    var t = e.date,
                        n = e.isCurrentDate,
                        r = e.completed,
                        i = e.incomplete,
                        l = e.canComplete,
                        c = e.className,
                        u = e.tooltip,
                        d = (0, bt.Z)(e, ["date", "isCurrentDate", "completed", "incomplete", "canComplete", "className", "tooltip"]),
                        m = (0, s.$G)("progress-calendar").t,
                        f = (0, o.useMemo)((function() {
                            if (r) return (0, a.jsx)(Ot.M, {
                                className: y()("h-6 w-6", qr)
                            });
                            if (n) return (0, a.jsx)(Hr.M, {
                                children: t
                            });
                            var e = Gr(l);
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("span", {
                                    className: y()({
                                        "group-hover:hidden": e
                                    }),
                                    children: t
                                }), (0, a.jsx)("span", {
                                    className: y()({
                                        "group-hover:block": e
                                    }, "hidden", ke.Cj.labelBrandOrange),
                                    children: m("fill")
                                }), (0, a.jsx)("span", {
                                    className: y()({
                                        hidden: !i
                                    }, "absolute bottom-[3px] h-1 w-1 rounded-full", ke.Cj.bgRedStandard)
                                })]
                            })
                        }), [r, n, l, t, m, i]);
                    return (0, a.jsx)(Re.u, {
                        label: u,
                        delayDuration: 200,
                        placement: "top",
                        children: (0, a.jsx)("a", (0, N.Z)((0, w.Z)({
                            className: y()(c, ke.Cj.label3Hover, "group flex h-8 w-8 cursor-pointer items-center justify-center", {
                                "hover:bg-fill-3 dark:hover:bg-dark-fill-3 rounded-full": !n,
                                relative: i
                            })
                        }, d), {
                            children: f
                        }))
                    })
                },
                zr = n(8927),
                Wr = n(4758),
                Ur = function(e, t) {
                    return null === e || void 0 === e ? void 0 : e.find((function(e) {
                        return e.date === (0, Mr.Z)(t, "yyyy-MM-dd")
                    }))
                },
                Qr = function(e) {
                    var t, n = e.challenges,
                        r = e.ticketCount,
                        s = e.headers,
                        i = e.body,
                        l = e.className,
                        c = e.cursorDate,
                        u = null === (t = (0, Ve.U5)().data) || void 0 === t ? void 0 : t.userStatus,
                        d = (null === u || void 0 === u ? void 0 : u.isSignedIn) || !1,
                        m = (0, o.useCallback)((function(e, t) {
                            if (t) {
                                var r = n && Ur(n, new Date(t));
                                if (r) {
                                    var a = r.date === (0, Mr.Z)(new Date, "yyyy-MM-dd");
                                    q({
                                        problemset_is_today_question: a.toString()
                                    })
                                }
                            }
                        }), [n]),
                        f = Date.now();
                    return (0, a.jsxs)(zr.U, {
                        className: l,
                        children: [s.weekDays.map((function(e) {
                            var t = e.key,
                                n = e.value;
                            return (0, a.jsx)(Dr.H, {
                                children: (0, Mr.Z)(n, "EEEEE", {
                                    locale: Pr.Z
                                })
                            }, t)
                        })), i.value.map((function(e) {
                            return e.value.map((function(e) {
                                var t = e.key,
                                    s = e.value,
                                    i = e.date;
                                if (!e.isCurrentMonth) return (0, a.jsx)("span", {}, t);
                                var l = n && Ur(n, s),
                                    o = "";
                                if (null === l || void 0 === l ? void 0 : l.question) {
                                    var v, x, p, h = (null === u || void 0 === u ? void 0 : u.useTranslation) && (null === l || void 0 === l || null === (v = l.question) || void 0 === v ? void 0 : v.translatedTitle) ? l.question.translatedTitle : null === l || void 0 === l || null === (x = l.question) || void 0 === x ? void 0 : x.title;
                                    o = "".concat(null === l || void 0 === l || null === (p = l.question) || void 0 === p ? void 0 : p.questionFrontendId, ". ").concat(h)
                                }
                                var g = (0, Tt.B)().tz(It.aB).date() === i && (0, Wr.HK)(c),
                                    j = (null === l || void 0 === l ? void 0 : l.link) && "".concat(l.link, "?envType=daily-question&envId=").concat(null === l || void 0 === l ? void 0 : l.date);
                                return (0, a.jsx)(Xr, {
                                    tooltip: o,
                                    href: j,
                                    target: "_blank",
                                    date: i,
                                    isCurrentDate: g,
                                    completed: (null === l || void 0 === l ? void 0 : l.status) === Lt._.Finish,
                                    incomplete: d && (null === l || void 0 === l ? void 0 : l.status) === Lt._.NotStart,
                                    canComplete: Boolean((0, Br.Z)(s, f) && l && l.status !== Lt._.Finish && r > 0),
                                    onClick: function(e) {
                                        return m(e, s)
                                    }
                                }, t)
                            }))
                        }))]
                    })
                },
                Kr = n(94424),
                $r = n(22378),
                Jr = n(50409),
                Yr = n(30890),
                ea = n(79185),
                ta = "M30 2.73205C31.8564 1.66025 34.1436 1.66025 36 2.73205L61.1769 17.2679C63.0333 18.3397 64.1769 20.3205 64.1769 22.4641V51.5359C64.1769 53.6795 63.0333 55.6603 61.1769 56.7321L36 71.2679C34.1436 72.3397 31.8564 72.3397 30 71.2679L4.82309 56.7321C2.96668 55.6603 1.82309 53.6795 1.82309 51.5359V22.4641C1.82309 20.3205 2.96668 18.3397 4.82309 17.2679L30 2.73205Z",
                na = function(e) {
                    var t, n = e.completedCount,
                        r = e.date,
                        s = (0, o.useRef)(null),
                        i = (0, ea.C)(r.getFullYear(), r.getMonth() + 1).data;
                    if (!i) return null;
                    var l = (0, Yr.Z)(r),
                        c = l === n,
                        u = 216 * n / l - 1.75,
                        d = "".concat(u, " ").concat(216 - u),
                        m = i.config.icon,
                        f = null === (t = s.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                        v = (null === f || void 0 === f ? void 0 : f.width) || 0,
                        x = (null === f || void 0 === f ? void 0 : f.height) || 0,
                        p = 32 * v / 240,
                        h = 6 * x / 240,
                        g = 208 * v / 240,
                        j = 234 * x / 240;
                    return (0, a.jsxs)("div", {
                        ref: s,
                        className: "lc-xl:block group relative md:hidden",
                        title: i.name,
                        children: [m && (0, a.jsx)(ir.y, {
                            src: m,
                            alt: i.name
                        }), (0, a.jsxs)("svg", {
                            width: g,
                            height: j,
                            viewBox: "0 0 66 74",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            style: {
                                left: "".concat(p / 2, "px"),
                                top: "".concat(h / 2, "px")
                            },
                            className: y()("z-base-1 absolute", "transition duration-500 ease-in-out group-hover:opacity-0", {
                                "opacity-0": c
                            }),
                            children: [(0, a.jsx)("path", {
                                d: ta,
                                fill: "currentColor",
                                className: "rounded-[2px] text-white opacity-[0.85] dark:text-black dark:opacity-50"
                            }), (0, a.jsx)("path", {
                                d: ta,
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: 3.5,
                                className: "text-gray-4 dark:text-dark-gray-4"
                            }), n > 0 && (0, a.jsx)("path", {
                                d: ta,
                                fill: "none",
                                stroke: "currentColor",
                                strokeOpacity: "0.75",
                                strokeDasharray: d,
                                strokeDashoffset: "212.5",
                                strokeWidth: 3.5,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: ke.Cj.label2
                            })]
                        })]
                    })
                },
                ra = function(e) {
                    var t = e.className,
                        n = e.hasPrev,
                        r = e.hasNext,
                        s = e.onPrevClick,
                        i = e.onNextClick,
                        l = e.onThisMonthClick,
                        c = e.challengeCompletedCount,
                        u = e.cursorDate,
                        d = (0, Ft.pe)().data,
                        m = (0, k.Z)((0, $r.a)(0), 2),
                        f = m[0],
                        v = m[1],
                        x = v.startCountdown,
                        p = v.resetCountdown,
                        h = null === d || void 0 === d ? void 0 : d.currentTimestamp,
                        g = (0, Wr.HK)(u),
                        j = (0, Tt.B)().tz(It.aB);
                    (0, o.useEffect)((function() {
                        if (h) {
                            var e = j.startOf("day").add(1, "day"),
                                t = Math.floor(e.diff(j) / 1e3);
                            p(t), x()
                        }
                    }), [j, h, u, p, x]);
                    var b = new Date(1e3 * f).toISOString().substr(11, 8);
                    return (0, a.jsxs)("div", {
                        className: y()("flex h-9 items-center py-[6px] pl-[15px]", t, "justify-between pr-3"),
                        children: [r ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("button", {
                                "aria-label": "Back",
                                className: y()("flex items-center focus:outline-none", ke.Cj.label3),
                                onClick: l,
                                children: [(0, a.jsx)(Kr.D, {}), (0, a.jsx)("span", {
                                    className: "ml-[5px] leading-[0]",
                                    children: "Today"
                                })]
                            }), g && (0, a.jsxs)("div", {
                                className: y()("ml-[4px] text-[10px] tracking-tighter", ke.Cj.label4),
                                children: [b, " left"]
                            })]
                        }) : (0, a.jsxs)("div", {
                            className: "flex shrink-0 items-center",
                            children: [(0, a.jsxs)("div", {
                                className: y()("text-sm lg:block", ke.Cj.label2),
                                children: ["Day ", j.date()]
                            }), (0, a.jsxs)("div", {
                                className: y()("ml-[4px] text-[10px] tracking-tighter", ke.Cj.label4),
                                children: [b, " left"]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: y()("flex max-w-[100px] items-center md:ml-[8px]"),
                            children: [(0, a.jsx)(Jr.W, {
                                "aria-label": "Prev",
                                disabled: !n,
                                onClick: s,
                                children: (0, a.jsx)(cr.P, {
                                    className: "max-h-[18px] max-w-[18px]"
                                })
                            }), (0, a.jsx)("div", {
                                className: y()("-translate-y-1/3 transform"),
                                children: (0, a.jsx)(na, {
                                    completedCount: c,
                                    date: u
                                })
                            }), (0, a.jsx)(Jr.W, {
                                "aria-label": "Next",
                                disabled: !r,
                                onClick: i,
                                children: (0, a.jsx)(ur.h, {
                                    className: "max-h-[18px] max-w-[18px]"
                                })
                            })]
                        })]
                    })
                },
                aa = n(41435),
                sa = n(78030),
                ia = n(88850),
                la = n(4563),
                oa = function(e) {
                    var t, n = e.name,
                        r = e.completed,
                        s = e.isCurrentWeek,
                        i = e.isPast,
                        l = e.href,
                        c = e.tooltip,
                        u = e.isJumpToPremium,
                        d = e.date,
                        m = null === (t = (0, Ve.U5)().data) || void 0 === t ? void 0 : t.userStatus,
                        f = (null === m || void 0 === m ? void 0 : m.isPremium) || !1,
                        v = !i && !s,
                        x = (0, o.useMemo)((function() {
                            return r ? l : "".concat(l, "?envType=").concat(Wr.y6.WeeklyQuestion, "&envId=").concat(d)
                        }), [r, d, l]),
                        p = v ? void 0 : u ? ie.Hb.premiumDetail({
                            sourceType: "calendar_week"
                        }) : x,
                        h = (0, o.useCallback)((function() {
                            p && G({
                                problemset_is_this_week_question: s.toString()
                            })
                        }), [s, p]),
                        g = (0, o.useMemo)((function() {
                            var e;
                            return (0, a.jsx)("div", {
                                className: "mb-3 inline-flex flex-col items-center justify-center",
                                children: (0, a.jsx)("a", {
                                    className: y()("flex w-full flex-col items-center justify-center", {
                                        "cursor-default": v
                                    }),
                                    href: p,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    onClick: h,
                                    children: r ? (0, a.jsx)(Ot.M, {
                                        height: 16,
                                        width: 16,
                                        className: "".concat(ke.Cj.labelBrandOrange, " -mt-1")
                                    }) : (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsxs)("div", {
                                            className: y()("font-typo relative mb-0.5 text-xs", i || s ? ke.Cj.labelBrandOrange : ke.Cj.labelGrey8, (e = {}, (0, C.Z)(e, "".concat(ke.Cj.bgBrandOrange, " ").concat(ke.Cj.labelWhite, " align-center flex h-[24px] w-[24px] justify-center rounded-full pt-1 text-center"), s), (0, C.Z)(e, ke.Cj.label4, v), e)),
                                            children: [n, !s && i && f && (0, a.jsx)("div", {
                                                className: "absolute left-0 right-0 top-4 flex items-center justify-center",
                                                children: (0, a.jsx)("span", {
                                                    className: y()("h-1 w-1 rounded-full", ke.Cj.bgRedStandard)
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        }), [v, p, h, r, i, s, n, f]);
                    return (0, a.jsx)("div", {
                        className: "mt-2",
                        children: (0, a.jsx)(Re.u, {
                            label: (i || s) && c,
                            children: (0, a.jsx)("div", {
                                className: "group flex items-center justify-center",
                                children: g
                            })
                        })
                    })
                },
                ca = n(1114),
                ua = n.n(ca),
                da = function(e) {
                    var t = e.content,
                        n = (0, o.useState)(!1),
                        r = n[0],
                        s = n[1];
                    return (0, a.jsx)(aa.J2, {
                        trigger: (0, la.tq)() ? "click" : "hover",
                        openDelay: 100,
                        closeDelay: 200,
                        open: r,
                        onOpenChange: s,
                        className: "bg-sd-popover text-sd-popover-foreground rounded-sd-md z-modal animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 p-0 text-xs shadow",
                        content: (0, a.jsx)("div", {
                            className: "rounded-sd-md relative px-3 py-1.5",
                            children: t
                        }),
                        children: (0, a.jsx)(ia.S, {
                            width: 14,
                            height: 14,
                            className: "ml-1"
                        })
                    })
                },
                ma = function(e) {
                    var t, n, r = e.weeklyChallenges,
                        s = e.weeksInMonth,
                        i = e.currentWeekIndex,
                        l = e.isActiveCodingChallenge,
                        c = e.isCurrentMonth;
                    (0, sa.y)(ua());
                    var u = null === (t = (0, Ve.U5)().data) || void 0 === t ? void 0 : t.userStatus,
                        d = Boolean(null === u || void 0 === u ? void 0 : u.isPremium),
                        m = (0, Ar.c)().isNewVersion,
                        f = (null === (n = (0, Ft.pe)().data) || void 0 === n ? void 0 : n.currentTimestamp) || 0,
                        v = (0, Tt.B)(1e3 * f).tz(It.aB),
                        x = (0, o.useState)(0),
                        p = x[0],
                        h = x[1];
                    (0, o.useEffect)((function() {
                        if (f) {
                            var e = v.date(),
                                t = v.clone().tz(It.aB).endOf("month").subtract(1, "day"),
                                n = Math.min(7 * Math.ceil(e / 7), t.date()),
                                r = v.clone().tz(It.aB).date(n).hour(23).minute(59).second(59);
                            h(r.diff(v, "day"))
                        }
                    }), [v, f]);
                    var g = null === u || void 0 === u ? void 0 : u.useTranslation;
                    return (0, a.jsx)("div", {
                        className: y()("mb-2 mt-1 min-h-[77px] px-4"),
                        children: (0, a.jsxs)("div", {
                            className: y()("h-full w-full rounded-lg bg-cover bg-center bg-no-repeat px-2.5"),
                            style: {
                                backgroundImage: "url(".concat("/_next/static/images/background-5ebcfd14b8131f79ce1a1c2d7075ab3e.svg", ")")
                            },
                            children: [(0, a.jsxs)("div", {
                                className: y()("mb-1 flex items-center justify-between pt-2", (0, C.Z)({}, ua().weeklyPremium, !m)),
                                children: [(0, a.jsxs)("div", {
                                    className: "font-typo text-brand-orange mr-3 flex items-center justify-center text-xs font-bold leading-[22px]",
                                    children: ["Weekly Premium", (0, a.jsx)(da, {
                                        content: d ? "Earn 35 LeetCoins after completing challenges exclusive for premium" : "Subscribe to premium to unlock more challenges and earn extra rewards"
                                    })]
                                }), c && (0, a.jsx)("span", {
                                    className: "".concat(ke.Cj.label4, " text-xs"),
                                    children: p ? "".concat(p, " day").concat(p > 1 ? "s" : "", " left") : "Less than a day"
                                })]
                            }), (0, a.jsx)("div", {
                                className: "flex flex-1 items-center justify-between px-2.5",
                                children: oe.Z.range(0, s).map((function(e, t) {
                                    var n = r && r[e],
                                        s = "";
                                    if (null === n || void 0 === n ? void 0 : n.question) {
                                        var o, c, u, m = g && (null === n || void 0 === n || null === (o = n.question) || void 0 === o ? void 0 : o.translatedTitle) ? n.question.translatedTitle : null === n || void 0 === n || null === (c = n.question) || void 0 === c ? void 0 : c.title;
                                        s = "".concat(null === n || void 0 === n || null === (u = n.question) || void 0 === u ? void 0 : u.questionFrontendId, ". ").concat(m)
                                    }
                                    return (0, a.jsx)(oa, {
                                        name: "W".concat(e + 1),
                                        completed: (null === n || void 0 === n ? void 0 : n.status) === Lt._.Finish,
                                        isCurrentWeek: l && e === i,
                                        isPast: !l || e < i,
                                        href: null === n || void 0 === n ? void 0 : n.link,
                                        date: null === n || void 0 === n ? void 0 : n.date,
                                        tooltip: s,
                                        isJumpToPremium: !d && !(null === n || void 0 === n ? void 0 : n.question.isPaidOnly)
                                    }, t)
                                }))
                            })]
                        })
                    })
                },
                fa = n(11095),
                va = n(43506),
                xa = function(e) {
                    var t = e.children,
                        n = e.activeKey,
                        r = e.onChange;
                    return (0, a.jsxs)("div", {
                        className: "w-full",
                        children: [(0, a.jsx)("ul", {
                            className: "mx-auto my-0 flex list-none justify-center pl-0",
                            children: o.Children.map(t, (function(e) {
                                var t;
                                return o.isValidElement(e) ? (0, a.jsx)("li", {
                                    className: y()("inline-flex cursor-pointer items-center justify-center", "h-[60px] w-[140px] rounded-b-[13px] pl-[10px] pr-[10px]", "text-center text-[18px] font-medium leading-[20px]", (t = {}, (0, C.Z)(t, y()(ke.Cj.bgBlueStandard, ke.Cj.labelReverse, ke.eq.card), n === e.key), (0, C.Z)(t, y()(ke.Cj.fill4, ke.Cj.label4), n !== e.key), t)),
                                    onClick: function() {
                                        return r(e.key)
                                    },
                                    children: e.props.title
                                }, e.key) : null
                            }))
                        }), (0, a.jsx)("div", {
                            className: "w-full",
                            children: o.Children.map(t, (function(e) {
                                return o.isValidElement(e) ? (0, a.jsx)("div", {
                                    className: y()("pt-[26px]", n === e.key ? "block" : "hidden"),
                                    children: e.props.children
                                }, e.key) : null
                            }))
                        })]
                    })
                },
                pa = function(e) {
                    var t = e.children;
                    return (0, a.jsx)(a.Fragment, {
                        children: t
                    })
                },
                ha = {
                    numberWrapper: y()("inline min-w-min w-6 h-6 rounded-full text-[14px] leading-[24px] text-center mr-2", ke.Cj.labelReverse, ke.Cj.bgBlueStandard),
                    ruleContainer: "w-full flex justify-between flex-col md:flex-row items-center gap-6",
                    ruleImg: y()("w-full h-[167px] mt-3 rounded-lg", ke.eq.card),
                    ruleSection: "w-[210px]",
                    primaryHeader: y()("text-[14px] font-medium leading-[24px] flex items-center", ke.Cj.labelBlueStandard),
                    textWrapper: y()("w-[185px] md:h-[100px] text-xs leading-[20px] mx-auto mt-3 mb-0", ke.Cj.label3),
                    noteText: y()("w-[104px] my-[-10px] mx-auto text-center text-[14px] leading-[20px]", ke.Cj.label3, ke.Cj.bgOverlay3),
                    note: y()("w-full mt-5 mb-4 leading-[20px] text-xs", ke.Cj.label4),
                    declaration: y()("pl-[26px] pr-[26px] h-8 rounded-l-4 text-xs leading-[32px] rounded-tl-[8px] rounded-tr-[8px] text-center mt-auto", ke.Cj.bgOverlay1, ke.Cj.label4)
                },
                ga = It.Oo,
                ja = function() {
                    var e = (0, s.$G)("progress-calendar").t,
                        t = (0, k.Z)((0, va.s)("show_mark_rule"), 1)[0],
                        n = [{
                            title: e("markRuleOptions.option1.title"),
                            img: "/_next/static/images/mark1-a8295cb67c03c541b099047ef57faf83.png",
                            desc: e("markRuleOptions.option1.desc")
                        }, {
                            title: e("markRuleOptions.option2.title"),
                            img: "/_next/static/images/mark2-b72c8694ee2032e91ea0cda33e2c98eb.png",
                            desc: e("markRuleOptions.option2.desc")
                        }, {
                            title: e("markRuleOptions.option3.title"),
                            img: "/_next/static/images/mark3-d1726f0948cf08aa0531509454cd9292.png",
                            desc: e("markRuleOptions.option3.desc")
                        }],
                        r = [{
                            title: e("remarkRuleOptions.option1.title"),
                            img: "/_next/static/images/remark1-36c83c77ac8a2fbdd6f5795d8844d01b.png",
                            desc: e("remarkRuleOptions.option1.desc")
                        }, {
                            title: e("remarkRuleOptions.option2.title"),
                            img: "/_next/static/images/remark2-6eef6dbc9dbd726ccc1c28e9636319cc.png",
                            desc: e("remarkRuleOptions.option2.desc")
                        }, {
                            title: e("remarkRuleOptions.option3.title"),
                            img: "/_next/static/images/remark3-71feaa396336b0e6d96e3af2be94d919.png",
                            desc: e("remarkRuleOptions.option3.desc")
                        }],
                        i = "1" === t ? "remark_rule" : "mark_rule",
                        l = (0, o.useState)(i),
                        c = l[0],
                        u = l[1],
                        d = (0, o.useState)((function() {
                            return !!t
                        })),
                        m = d[0],
                        f = d[1],
                        v = (0, o.useCallback)((function() {
                            f((function(e) {
                                return !e
                            }))
                        }), []),
                        x = (0, o.useCallback)((function() {
                            f(!1)
                        }), []);
                    (0, o.useEffect)((function() {}), [m]);
                    var p = function(e) {
                            var t = (0, o.useRef)(!1);
                            return function() {
                                t.current || (e(), t.current = !0)
                            }
                        }((function() {})),
                        h = (0, o.useCallback)((function(e) {
                            "remark_rule" === e && p(), u(e)
                        }), [p]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("span", {
                            className: "cursor-pointer text-xs ".concat(ke.Cj.label3),
                            onClick: v,
                            children: e("rules")
                        }), (0, a.jsx)(fa.u, {
                            className: "rounded-lg !p-0 md:min-w-[750px] md:max-w-[750px]",
                            visible: m,
                            onCancel: x,
                            children: (0, a.jsxs)("div", {
                                className: "z-base relative flex min-h-[548px] flex-col items-center px-10 py-0",
                                children: [(0, a.jsxs)(xa, {
                                    activeKey: String(c),
                                    onChange: h,
                                    children: [(0, a.jsx)(pa, {
                                        title: e("markRules"),
                                        children: (0, a.jsx)("div", {
                                            className: ha.ruleContainer,
                                            children: n.map((function(t, n) {
                                                var r = t.title,
                                                    s = t.img,
                                                    i = t.desc;
                                                return (0, a.jsxs)("div", {
                                                    className: ha.ruleSection,
                                                    children: [(0, a.jsxs)("div", {
                                                        className: ha.primaryHeader,
                                                        children: [(0, a.jsx)("div", {
                                                            className: ha.numberWrapper,
                                                            children: n + 1
                                                        }), (0, a.jsx)("span", {
                                                            children: r
                                                        })]
                                                    }), (0, a.jsx)(ir.y, {
                                                        className: ha.ruleImg,
                                                        src: s,
                                                        alt: e("rule")
                                                    }), (0, a.jsx)("div", {
                                                        className: ha.textWrapper,
                                                        children: i
                                                    })]
                                                }, r)
                                            }))
                                        })
                                    }, "mark_rule"), (0, a.jsx)(pa, {
                                        title: e("remarkRules"),
                                        children: (0, a.jsx)("div", {
                                            className: ha.ruleContainer,
                                            children: r.map((function(t, n) {
                                                var r = t.title,
                                                    s = t.img,
                                                    i = t.desc;
                                                return (0, a.jsxs)("div", {
                                                    className: ha.ruleSection,
                                                    children: [(0, a.jsxs)("div", {
                                                        className: ha.primaryHeader,
                                                        children: [(0, a.jsx)("div", {
                                                            className: ha.numberWrapper,
                                                            children: n + 1
                                                        }), (0, a.jsx)("span", {
                                                            children: r
                                                        })]
                                                    }), (0, a.jsx)(ir.y, {
                                                        className: ha.ruleImg,
                                                        src: s,
                                                        alt: e("rule")
                                                    }), (0, a.jsx)("div", {
                                                        className: ha.textWrapper,
                                                        children: i
                                                    })]
                                                }, r)
                                            }))
                                        })
                                    }, "remark_rule")]
                                }), (0, a.jsx)("div", {
                                    className: "border-divider-2 dark:border-dark-divider-2 mt-[34px] w-full"
                                }), (0, a.jsx)("div", {
                                    className: ha.noteText,
                                    children: e("guideline")
                                }), (0, a.jsx)("div", {
                                    className: ha.note,
                                    children: "mark_rule" === c ? (0, a.jsxs)(a.Fragment, {
                                        children: ["\u2022 ", e("markGuideline.option1"), (0, a.jsx)("br", {}), "\u2022 ", (0, a.jsx)("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: e("markGuideline.option2")
                                            }
                                        }), (0, a.jsx)("br", {}), "\u2022 ", e("markGuideline.option3"), (0, a.jsx)("br", {}), "\u2022 ", e("markGuideline.option4"), (0, a.jsx)("br", {}), "\u2022 ", e("markGuideline.option5")]
                                    }) : (0, a.jsxs)(a.Fragment, {
                                        children: ["\u2022 ", e("remarkGuideline.option1"), (0, a.jsx)("br", {}), "\u2022 ", e("remarkGuideline.option2"), (0, a.jsx)("br", {}), "\u2022 ", e("remarkGuideline.option3"), ga && (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("br", {}), "\u2022 ", e("remarkGuideline.option4")]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: ha.declaration,
                                    children: e("rightText")
                                })]
                            })
                        })]
                    })
                },
                ba = function(e) {
                    var t = e.ticketCount,
                        n = (0, s.$G)("progress-calendar").t,
                        r = (0, Ar.c)().isNewVersion,
                        i = (0, o.useCallback)((function() {
                            return X(), !0
                        }), []),
                        l = "".concat(ie.Hb.store(), "?redeem=time_travel_ticket");
                    return (0, a.jsxs)("div", {
                        className: y()("flex h-9 items-center px-4 text-xs", ke.Cj.label2),
                        children: [(0, a.jsx)(ir.y, {
                            alt: "time-travel-ticket",
                            src: "/_next/static/images/ttt-a2c700529300981c5d372d69bb9bbdaa.png",
                            className: "h-[18px] w-[18px]"
                        }), (0, a.jsx)("span", {
                            className: y()("ml-1 pl-1 font-medium"),
                            children: t
                        }), (0, a.jsx)("a", {
                            href: l,
                            onClick: i,
                            className: "ml-2",
                            children: (0, a.jsx)("span", {
                                className: y()(ke.Cj.labelGreenStandard, ke.Cj.labelGreenStandardHover),
                                children: n("redeem")
                            })
                        }), (0, a.jsx)("span", {
                            className: y()(ke.Cj.label3, "ml-auto pl-1", {
                                "hidden md:inline": !r
                            }),
                            children: (0, a.jsx)(ja, {})
                        })]
                    })
                },
                ya = new Date(2020, 3, 1),
                Ca = function() {
                    var e, t = (0, Tt.B)().tz(It.aB),
                        n = (0, Ar.c)().isNewVersion,
                        r = new Date(t.year(), t.month()),
                        s = (0, v.qb)(r) ? r : new Date,
                        i = (0, _r.ZP)({
                            defaultDate: s
                        }),
                        l = i.navigation,
                        c = i.cursorDate,
                        u = (0, Wr.HK)(c),
                        d = c > ya,
                        m = c < s,
                        f = Tr(c.getFullYear(), c.getMonth() + 1).data,
                        x = (null === f || void 0 === f ? void 0 : f.challenges) || [],
                        p = (null === f || void 0 === f ? void 0 : f.weeklyChallenges) || [],
                        h = (null === x || void 0 === x ? void 0 : x.filter((function(e) {
                            return e.status === Lt._.Finish
                        })).length) || 0,
                        g = null === (e = (0, Ve.U5)().data) || void 0 === e ? void 0 : e.userStatus,
                        j = (null === g || void 0 === g ? void 0 : g.isSignedIn) || !1,
                        b = Ir({
                            enabled: Boolean(j)
                        }).data,
                        C = (0, o.useCallback)((function() {
                            l.toNext()
                        }), [l]),
                        k = (0, o.useCallback)((function() {
                            l.toPrev()
                        }), [l]),
                        S = (0, o.useCallback)((function() {
                            l.setToday()
                        }), [l]),
                        _ = b ? b.cardCount - b.usedCount : 0,
                        Z = Math.floor((t.date() - 1) / 7),
                        T = new Date(i.year, i.month + 1, 0).getDate(),
                        I = Math.ceil(T / 7);
                    return (0, a.jsxs)(Zr.Z, {
                        className: y()("lc-xl:mt-[39px] relative mt-[39px] flex flex-col py-2 pb-[2px] md:mt-0"),
                        children: [(0, a.jsx)(ra, {
                            hasPrev: d,
                            hasNext: m,
                            onPrevClick: k,
                            onNextClick: C,
                            onThisMonthClick: S,
                            challengeCompletedCount: h,
                            cursorDate: c
                        }), (0, a.jsx)(Qr, (0, N.Z)((0, w.Z)({
                            challenges: x,
                            ticketCount: _
                        }, i), {
                            className: "mx-[10px]"
                        })), p.length > 0 && (0, a.jsx)(ma, {
                            isActiveCodingChallenge: u,
                            isCurrentMonth: !m,
                            weeklyChallenges: p,
                            weeksInMonth: I,
                            currentWeekIndex: Z
                        }), (0, a.jsx)(ba, {
                            ticketCount: _
                        }), !n && (0, a.jsx)(Vr, {})]
                    })
                },
                wa = function(e) {
                    return (0, a.jsx)("a", (0, w.Z)({
                        className: "hover:text-sd-blue-500 hover:underline",
                        target: "_blank",
                        rel: "noreferrer"
                    }, e))
                },
                Na = function(e) {
                    return (0, a.jsx)("div", (0, w.Z)({
                        className: "bg-sd-border h-[12.5px] w-[2px]"
                    }, e))
                },
                ka = n(23358),
                Sa = function() {
                    var e = (new Date).getFullYear(),
                        t = (0, o.useState)(!1),
                        n = t[0],
                        r = t[1];
                    return (0, a.jsxs)("div", {
                        className: "text-sd-muted-foreground flex w-full flex-col gap-2 text-xs font-normal",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [(0, a.jsx)(wa, {
                                href: "/support",
                                children: "Support"
                            }), (0, a.jsx)(Na, {}), (0, a.jsx)(wa, {
                                href: "/terms",
                                children: "Terms"
                            }), (0, a.jsx)(Na, {}), (0, a.jsx)(wa, {
                                href: "/privacy",
                                children: "Privacy Policy"
                            }), (0, a.jsx)(Na, {}), (0, a.jsxs)(ka.h_, {
                                open: n,
                                onOpenChange: r,
                                modal: !1,
                                children: [(0, a.jsx)(ka.$F, {
                                    asChild: !0,
                                    children: (0, a.jsx)("div", {
                                        className: "cursor-pointer",
                                        children: (0, a.jsx)(wa, {
                                            children: "More"
                                        })
                                    })
                                }), (0, a.jsxs)(ka.AW, {
                                    align: "start",
                                    className: "z-base-2 w-[110px]",
                                    children: [(0, a.jsx)(ka.Xi, {
                                        className: "select-none",
                                        onClick: function() {
                                            r(!1), window.open("/student")
                                        },
                                        children: "Student"
                                    }), (0, a.jsx)(ka.Xi, {
                                        className: "select-none",
                                        onClick: function() {
                                            r(!1), window.open("/jobs")
                                        },
                                        children: "Job"
                                    }), (0, a.jsx)(ka.Xi, {
                                        className: "select-none",
                                        onClick: function() {
                                            r(!1), window.open("/bugbounty")
                                        },
                                        children: "Bug Bounty"
                                    })]
                                })]
                            })]
                        }), (0, a.jsxs)(wa, {
                            href: "/",
                            children: ["Copyright \xa9\xa0", e, "\xa0LeetCode"]
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, a.jsx)("img", {
                                className: "h-[14px] w-[14px]",
                                alt: "",
                                src: "/_next/static/images/us-155ec17c384e18aeab7fd22e2f206768.svg"
                            }), (0, a.jsx)(wa, {
                                href: "/region",
                                children: "United States"
                            })]
                        })]
                    })
                },
                _a = n(23282),
                Za = n(9840),
                Ta = function(e) {
                    var t, n = e.onClick,
                        r = e.className,
                        s = e.children,
                        i = (0, bt.Z)(e, ["onClick", "className", "children"]);
                    return (0, a.jsx)("button", (0, N.Z)((0, w.Z)({
                        onClick: n,
                        className: y()("rounded text-[24px] focus:outline-none", ke.Cj.fill4, ke.Cj.fill3Hover, "active:text-label-3 dark:active:text-dark-label-3", (t = {}, (0, C.Z)(t, ke.Cj.label2, !i.disabled), (0, C.Z)(t, ke.Cj.label4, i.disabled), t), r)
                    }, i), {
                        children: s
                    }))
                },
                Ia = n(47568),
                Fa = n(70655),
                La = function() {
                    return (0, ne.q8i)(te.f6)
                },
                Oa = function() {
                    return function() {}
                },
                Ea = function(e) {
                    var t = e.companyTag,
                        n = e.queryString,
                        r = Oa(t, n),
                        s = La().mutateAsync,
                        i = (0, o.useCallback)((0, Ia.Z)((function() {
                            return (0, Fa.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return r(), z({
                                            problemset_popular_company_name: t.slug,
                                            problemset_tag_search_query_filter: (!!n).toString()
                                        }), n && s ? [4, s({
                                            tagSlug: t.slug
                                        })] : [3, 2];
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        })), [t.slug, s, n, r]);
                    return (0, a.jsx)("a", {
                        href: "/company/".concat(t.slug),
                        className: "mb-4 mr-3",
                        translate: "no",
                        onClick: i,
                        children: (0, a.jsxs)(De.V, {
                            "data-tag": "tagslug",
                            className: "",
                            children: [(0, a.jsx)("span", {
                                className: y()("max-w-[200px] overflow-hidden overflow-ellipsis font-medium", ke.Cj.label2),
                                children: t.name
                            }), (0, a.jsx)("span", {
                                className: y()("ml-1 rounded-full px-1.5 text-xs font-normal", ke.Cj.bgBrandOrange, ke.Cj.labelReverse),
                                children: t.questionCount || 0
                            })]
                        })
                    })
                },
                Ra = "swiper-no-swiping-content",
                Va = {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    loop: !1,
                    autoHeight: !0,
                    noSwiping: !0,
                    noSwipingClass: Ra
                },
                Aa = function(e) {
                    var t, n = e.className,
                        r = (0, bt.Z)(e, ["className"]),
                        i = (0, s.$G)("problemset").t,
                        l = null === (t = Ae().data) || void 0 === t ? void 0 : t.companyTags,
                        c = (0, o.useState)(""),
                        u = c[0],
                        d = c[1],
                        m = (0, o.useState)(!0),
                        f = m[0],
                        v = m[1],
                        x = (0, o.useState)(!1),
                        p = x[0],
                        h = x[1],
                        g = u ? ((null === l || void 0 === l ? void 0 : l.filter((function(e) {
                            return null === e || void 0 === e ? void 0 : e.name.toLowerCase().includes(u.toLowerCase())
                        }))) || []).sort((function(e, t) {
                            var n = u.toLowerCase(),
                                r = 0 === e.name.toLowerCase().indexOf(n),
                                a = 0 === t.name.toLowerCase().indexOf(n);
                            return r && !a ? -1 : a && !r ? 1 : Number(t.questionCount) - Number(e.questionCount)
                        })) : l,
                        j = (0, o.useRef)(null),
                        b = (0, o.useCallback)((function() {
                            var e, t, n = g && 0 === g.length;
                            v(!(!(null === (e = j.current) || void 0 === e ? void 0 : e.isBeginning) && !n)), h(!(!(null === (t = j.current) || void 0 === t ? void 0 : t.isEnd) && !n))
                        }), [g]),
                        C = (0, Za.N)(u, 1e3);
                    (0, o.useEffect)((function() {
                        C.length && ee({
                            problemset_tag_search_query_filter: C
                        })
                    }), [C]);
                    var k = (0, o.useCallback)((function(e) {
                        j.current = e, null === e || void 0 === e || e.on("slideChange", b)
                    }), [b]);
                    (0, o.useEffect)((function() {
                        b()
                    }), [g, b]);
                    var S = (0, o.useCallback)((function() {
                            var e;
                            null === (e = j.current) || void 0 === e || e.slidePrev()
                        }), []),
                        _ = (0, o.useCallback)((function() {
                            var e;
                            null === (e = j.current) || void 0 === e || e.slideNext(), W()
                        }), []);
                    if (!l || !l.length) return null;
                    var Z = (0, _a.Z)(g, 20);
                    return (0, a.jsxs)(Zr.Z, (0, N.Z)((0, w.Z)({
                        className: y()(n, "px-4 pb-1 pt-2")
                    }, r), {
                        children: [(0, a.jsxs)("div", {
                            className: "flex h-[36px] items-center justify-between",
                            children: [(0, a.jsx)("div", {
                                className: y()("text-sm font-medium", ke.Cj.label2),
                                children: i("companies")
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, a.jsx)(Ta, {
                                    "aria-label": "Prev",
                                    onClick: S,
                                    disabled: f,
                                    children: (0, a.jsx)(cr.P, {
                                        className: ""
                                    })
                                }), (0, a.jsx)(Ta, {
                                    "aria-label": "Next",
                                    onClick: _,
                                    className: y()("ml-1.5"),
                                    disabled: p,
                                    children: (0, a.jsx)(ur.h, {
                                        className: ""
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mt-0",
                            children: [(0, a.jsx)("div", {
                                className: "mb-4",
                                children: (0, a.jsx)(Ue.I, {
                                    leftIcon: Qe.j,
                                    placeholder: i("searchCompanyPlaceholder"),
                                    value: u,
                                    onChange: function(e) {
                                        var t, n;
                                        d((null === (t = e.target) || void 0 === t ? void 0 : t.value) || ""), null === (n = j.current) || void 0 === n || n.slideTo(0, 0)
                                    },
                                    className: xe.UG
                                })
                            }), (null === g || void 0 === g ? void 0 : g.length) ? (0, a.jsx)(nr.tq, (0, N.Z)((0, w.Z)({}, Va), {
                                onSwiper: k,
                                children: Z.map((function(e, t) {
                                    return (0, a.jsx)(nr.o5, {
                                        className: y()("-mr-3 flex flex-wrap", Ra),
                                        children: e.map((function(e) {
                                            return (0, a.jsx)(Ea, {
                                                companyTag: e,
                                                queryString: u
                                            }, e.slug)
                                        }))
                                    }, t)
                                }))
                            })) : (0, a.jsx)("div", {
                                className: y()("mb-2 text-center text-sm font-normal", ke.Cj.labelGrey4),
                                children: i("emptyList")
                            })]
                        })]
                    }))
                },
                Ma = function(e) {
                    return (0, d.a)(["user-sessions"], (function() {
                        return f.x1.request(f.Hv.session, {
                            headers: {
                                "content-type": "application/json",
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            method: "POST"
                        }).then((function(e) {
                            return e.sessions.map((function(e) {
                                return {
                                    id: "".concat(e.id),
                                    name: e.name,
                                    isActive: e.is_active
                                }
                            }))
                        }))
                    }), e)
                },
                Ba = function(e, t) {
                    return (0, ne.vS)(te.f6, {
                        username: e
                    }, (0, w.Z)({
                        select: function(e) {
                            var t, n = null === (t = e.matchedUser) || void 0 === t ? void 0 : t.submitStats,
                                r = e.allQuestionsCount;
                            if (!n || !r) return {
                                progresses: [],
                                submitPercentages: []
                            };
                            var a = n.acSubmissionNum,
                                s = n.totalSubmissionNum,
                                i = null === a || void 0 === a ? void 0 : a.map((function(e) {
                                    var t, n, a = e.difficulty,
                                        s = e.count;
                                    return {
                                        difficulty: "All" === a ? "TOTAL" : a.toUpperCase(),
                                        acceptedNum: s,
                                        totalNum: null !== (n = null === (t = r.find((function(e) {
                                            return e.difficulty === a
                                        }))) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : 0
                                    }
                                })),
                                l = null === a || void 0 === a ? void 0 : a.map((function(e) {
                                    var t, n = e.difficulty,
                                        r = e.submissions,
                                        a = null === (t = null === s || void 0 === s ? void 0 : s.find((function(e) {
                                            return e.difficulty === n
                                        }))) || void 0 === t ? void 0 : t.submissions;
                                    return {
                                        difficulty: "All" === n ? "TOTAL" : n.toUpperCase(),
                                        percentage: a ? r / a : null
                                    }
                                }));
                            return {
                                progresses: i,
                                submitPercentages: l
                            }
                        }
                    }, t))
                },
                Pa = n(7061),
                Da = function(e) {
                    var t = e.progress,
                        n = e.onDifficultyHover,
                        r = e.onDifficultyEndHover,
                        s = t.difficulty,
                        i = t.acceptedNum,
                        l = t.totalNum,
                        o = y()(ke.Cj.label2, "font-semibold leading-none px-[3px] text-sm"),
                        c = y()(ke.Cj.label4, "text-xs leading-none font-semibold pr-1", {
                            "tracking-tightest": l >= 1e3
                        });
                    return (0, a.jsxs)("div", {
                        onMouseEnter: n,
                        onMouseLeave: r,
                        "data-difficulty": s,
                        className: "flex items-center justify-between text-center truncate cursor-pointer",
                        children: [(0, a.jsx)("div", {
                            className: "text-sm leading-tight grow text-left",
                            children: (0, a.jsx)(_e, {
                                difficulty: s
                            })
                        }), (0, a.jsx)("div", {
                            className: o,
                            children: i
                        }), (0, a.jsxs)("div", {
                            className: c,
                            children: ["/", l]
                        })]
                    })
                },
                Ha = function(e) {
                    var t = e.progress,
                        n = e.onDifficultyHover,
                        r = e.onDifficultyEndHover,
                        i = (0, s.$G)("progress-stats").t,
                        l = t.difficulty,
                        o = t.acceptedNum,
                        c = t.totalNum;
                    return (0, a.jsxs)("div", {
                        onMouseEnter: n,
                        onMouseLeave: r,
                        "data-difficulty": l,
                        className: "truncate text-center",
                        children: [(0, a.jsx)("div", {
                            className: "mb-[1px] text-[11px]",
                            children: (0, a.jsx)("span", {
                                className: y()(ke.Cj.label3),
                                children: i("total")
                            })
                        }), (0, a.jsx)("div", {
                            className: "text-dark-paper dark:text-paper pb-0.5 text-xl font-medium leading-none lg:text-2xl lg:leading-none",
                            children: o
                        }), (0, a.jsx)(Pa.i, {
                            className: "mx-auto max-w-[32px]"
                        }), (0, a.jsx)("div", {
                            className: y()(ke.Cj.label4, "pt-0.5 text-xs font-semibold"),
                            children: c
                        })]
                    })
                },
                qa = function(e) {
                    var t = e.progresses,
                        n = e.onDifficultyHover,
                        r = e.onDifficultyEndHover;
                    return (0, a.jsx)("div", {
                        className: "flex flex-auto flex-col min-w-max space-y-2.5 max-w-[128px]",
                        children: t.map((function(e) {
                            return (0, a.jsx)(Da, {
                                progress: e,
                                onDifficultyEndHover: r,
                                onDifficultyHover: n
                            }, e.difficulty)
                        }))
                    })
                },
                Ga = n(290),
                Xa = 100,
                za = 84 * Math.PI,
                Wa = function(e) {
                    return (0, a.jsx)("circle", (0, w.Z)({
                        fill: "none",
                        cx: "".concat(50, "px"),
                        cy: "".concat(50, "px"),
                        r: "".concat(e.r ? e.r : 42, "px"),
                        strokeWidth: 3,
                        strokeLinecap: "round",
                        stroke: "currentColor"
                    }, e))
                },
                Ua = function(e) {
                    var t, n = e.isActive,
                        r = e.difficulty,
                        s = e.className,
                        i = e.difficultyStrokeWidth,
                        l = (0, bt.Z)(e, ["isActive", "difficulty", "className", "difficultyStrokeWidth"]);
                    return (0, a.jsx)(Wa, (0, w.Z)({
                        strokeWidth: n ? 8 : void 0 !== i ? i : 3,
                        className: y()("cursor-pointer", (t = {}, (0, C.Z)(t, ke.Cj.labelOlive, "EASY" === r.toUpperCase()), (0, C.Z)(t, ke.Cj.labelYellow, "MEDIUM" === r.toUpperCase()), (0, C.Z)(t, ke.Cj.labelPink, "HARD" === r.toUpperCase()), (0, C.Z)(t, ke.Cj.labelBrandOrange, "ALL" === r.toUpperCase()), t), s)
                    }, l))
                };

            function Qa(e, t) {
                var n, r, a = t.find((function(e) {
                        return "TOTAL" === e.difficulty
                    })),
                    s = a ? a.totalNum : 0,
                    i = null !== (r = null === (n = t.find((function(t) {
                        return t.difficulty.toLowerCase() === e.toLowerCase()
                    }))) || void 0 === n ? void 0 : n.acceptedNum) && void 0 !== r ? r : 0;
                return s && i / s
            }
            var Ka = o.memo((function(e) {
                    var t, n = e.progresses,
                        r = e.activeDifficulty,
                        i = e.submitPercentages,
                        l = e.onSliceHover,
                        c = e.onSliceEndHover,
                        u = e.onCircleHover,
                        d = e.onCircleEndHover,
                        f = (0, s.$G)("progress-stats").t,
                        v = (0, o.useState)(!0),
                        x = v[0],
                        p = v[1],
                        h = (0, o.useRef)(null),
                        g = (0, On.i)(),
                        j = null === (t = i.find((function(e) {
                            return e.difficulty === r
                        }))) || void 0 === t ? void 0 : t.percentage,
                        b = (0, k.Z)((0, Ga.Z)(j) ? (100 * j).toFixed(1).split(".") : [void 0, void 0], 2),
                        w = b[0],
                        N = b[1],
                        S = "100" === w || "0" === w && "0" === N,
                        _ = n.find((function(e) {
                            return "TOTAL" === e.difficulty
                        }));
                    (0, o.useEffect)((function() {
                        var e;
                        (null === (e = h.current) || void 0 === e ? void 0 : e.clientWidth) && p(h.current.clientWidth < 95)
                    }), [g.width]);
                    var Z, T = (0, o.useMemo)((function() {
                        var e = Qa("EASY", n),
                            t = za * e,
                            r = Qa("MEDIUM", n),
                            a = t,
                            s = za * r,
                            i = Qa("HARD", n),
                            l = a + s,
                            o = za * i;
                        return [{
                            percentage: e,
                            difficulty: ce.FdC.Easy,
                            strokeDasharray: "".concat(t, " ").concat(za - t),
                            strokeDashoffset: -0
                        }, {
                            percentage: r,
                            difficulty: ce.FdC.Medium,
                            strokeDasharray: "".concat(s, " ").concat(za - s),
                            strokeDashoffset: -a
                        }, {
                            percentage: i,
                            difficulty: ce.FdC.Hard,
                            strokeDasharray: "".concat(o, " ").concat(za - o),
                            strokeDashoffset: -l
                        }].filter((function(e) {
                            return e.percentage
                        }))
                    }), [n]);
                    return (0, a.jsxs)("div", {
                        ref: h,
                        className: y()("shrink-1 z-base relative max-h-[100px] max-w-[100px]"),
                        onMouseEnter: u,
                        onMouseLeave: d,
                        children: [(0, a.jsxs)("svg", {
                            className: "h-full w-full origin-center -rotate-90 transform",
                            viewBox: "0 0 ".concat(Xa, " ").concat(Xa),
                            children: [(0, a.jsx)(Wa, {
                                className: "text-gray-4 dark:text-dark-gray-4"
                            }), (0, m.Z)(T).sort((function(e, t) {
                                return e.difficulty === r ? 1 : t.difficulty === r ? -1 : 0
                            })).map((function(e) {
                                var t = e.difficulty,
                                    n = e.strokeDasharray,
                                    s = e.strokeDashoffset;
                                return (0, a.jsx)(Ua, {
                                    difficulty: t,
                                    strokeDasharray: n,
                                    strokeDashoffset: s,
                                    "data-difficulty": t,
                                    isActive: r === t,
                                    onMouseEnter: l,
                                    onMouseLeave: c
                                }, t)
                            }))]
                        }), (0, a.jsx)("div", {
                            className: y()("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default"),
                            children: r ? (0, a.jsx)(a.Fragment, {
                                children: void 0 !== w && void 0 !== N ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsxs)("div", {
                                        className: y()("text-center", (Z = {}, (0, C.Z)(Z, ke.Cj.labelOlive, "EASY" === (null === r || void 0 === r ? void 0 : r.toUpperCase())), (0, C.Z)(Z, ke.Cj.labelYellow, "MEDIUM" === (null === r || void 0 === r ? void 0 : r.toUpperCase())), (0, C.Z)(Z, ke.Cj.labelPink, "HARD" === (null === r || void 0 === r ? void 0 : r.toUpperCase())), Z)),
                                        children: [(0, a.jsx)("span", {
                                            className: "text-xl font-semibold",
                                            children: w
                                        }), (0, a.jsx)("span", {
                                            className: "text-[10px] font-semibold",
                                            children: S ? "%" : ".".concat(N, "%")
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: y()("whitespace-nowrap text-[11px] leading-[15px]", ke.Cj.label3, {
                                            hidden: x
                                        }),
                                        children: f("acceptanceRate")
                                    })]
                                }) : (0, a.jsx)("div", {
                                    className: y()("text-[11px] leading-[15px]", ke.Cj.label3, "text-center text-[10px]"),
                                    children: f("noSubmission")
                                })
                            }) : _ ? (0, a.jsx)(Ha, {
                                progress: _
                            }) : null
                        })]
                    })
                })),
                $a = function(e) {
                    var t = e.userSessionProgress,
                        n = (0, o.useState)(""),
                        r = n[0],
                        s = n[1],
                        i = (0, o.useCallback)((function(e) {
                            e.stopPropagation();
                            var t = e.currentTarget.dataset.difficulty;
                            t && ["EASY", "MEDIUM", "HARD"].includes(t.toUpperCase()) && s(t)
                        }), []),
                        l = (0, o.useCallback)((function(e) {
                            e && e.stopPropagation(), s("")
                        }), []),
                        c = (0, o.useCallback)((function() {
                            s("TOTAL")
                        }), []),
                        u = (0, o.useCallback)((function() {
                            s("")
                        }), []),
                        d = t.progresses,
                        m = t.submitPercentages;
                    return (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, a.jsx)(Ka, {
                            submitPercentages: m,
                            progresses: d,
                            activeDifficulty: r,
                            onSliceHover: i,
                            onSliceEndHover: l,
                            onCircleHover: c,
                            onCircleEndHover: u
                        }), (0, a.jsx)(qa, {
                            progresses: d.filter((function(e) {
                                return "TOTAL" !== e.difficulty
                            })),
                            onDifficultyHover: i,
                            onDifficultyEndHover: l
                        })]
                    })
                },
                Ja = {
                    configButton: y()("flex items-center justify-center w-[22px] h-[24px] ml-px rounded-r-[5px] cursor-pointer focus:outline-none", ke.Cj.label3, ke.Cj.fill3),
                    sessionButton: y()("flex items-center h-[24px] rounded-l-[5px] px-1.5 text-xs cursor-pointer focus:outline-none", ke.Cj.fill3, ke.Cj.label3),
                    sessionButtonText: "w-20 truncate",
                    sessionButtonIcon: "w-3 h-3 ml-1 pointer-events-none",
                    dropdownTransition: {
                        enter: "transition ease-out duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    },
                    menuItems: y()("absolute z-dropdown mt-1 rounded-lg p-2 overflow-auto focus:outline-none space-y-0.5 text-xs", "transform -translate-x-full left-full max-w-[10rem]", ke.eq.commandBar, ke.Cj.bgOverlay3),
                    menuItem: y()("flex items-center cursor-pointer select-none relative h-6 py-0.5 pl-2 pr-12", ke.Cj.label1),
                    menuItemActive: "rounded ".concat(ke.Cj.fill4),
                    menuItemHover: ke.Cj.fill4Hover,
                    menuItemSelectedIconWrapper: "absolute inset-y-0 right-0 flex items-center pr-2 text-blue dark:text-dark-blue"
                },
                Ya = function(e) {
                    var t = e.onClick;
                    return (0, a.jsx)("button", {
                        "aria-label": "config",
                        className: Ja.configButton,
                        onClick: t,
                        children: (0, a.jsx)(nt.k, {
                            className: "h-3 w-3"
                        })
                    })
                },
                es = function(e) {
                    var t = e.sessions,
                        n = (0, s.$G)("progress-stats").t,
                        r = t.find((function(e) {
                            return e.isActive
                        })),
                        i = (0, o.useCallback)((function() {
                            window.location.href = "/session/"
                        }), []);
                    return (0, a.jsxs)("div", {
                        className: "flex",
                        children: [(0, a.jsx)("div", {
                            className: Ja.sessionButton,
                            onClick: i,
                            children: (0, a.jsx)("span", {
                                className: "w-20 truncate",
                                children: (null === r || void 0 === r ? void 0 : r.name) || n("session.anonymous")
                            })
                        }), (0, a.jsx)(Ya, {
                            onClick: i
                        })]
                    })
                },
                ts = function() {
                    return (0, a.jsx)(Zr.Z, {
                        className: "px-4 py-2",
                        children: (0, a.jsxs)(an.O, {
                            children: [(0, a.jsx)(sn.a, {
                                className: "h-9"
                            }), (0, a.jsxs)("div", {
                                className: "h-25 flex items-center justify-between",
                                children: [(0, a.jsx)(sn.a, {
                                    className: "mr-2 h-20 w-20 rounded-full"
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-auto flex-col",
                                    children: [(0, a.jsx)(sn.a, {
                                        className: "my-2 w-[100%]"
                                    }), (0, a.jsx)(sn.a, {
                                        className: "my-2 w-[100%]"
                                    }), (0, a.jsx)(sn.a, {
                                        className: "my-2 w-[100%]"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                ns = function(e) {
                    var t, n, r = e.className,
                        i = (0, s.$G)("progress-stats").t,
                        l = (0, Ve.U5)(),
                        o = l.isInitialLoading,
                        c = l.data,
                        u = null === c || void 0 === c || null === (t = c.userStatus) || void 0 === t ? void 0 : t.isSignedIn,
                        d = null === c || void 0 === c || null === (n = c.userStatus) || void 0 === n ? void 0 : n.username,
                        m = Ma({
                            enabled: Boolean(u)
                        }),
                        f = m.isInitialLoading,
                        v = m.data,
                        x = Ba(d, {
                            enabled: Boolean(d)
                        }),
                        p = x.isInitialLoading,
                        h = x.data;
                    return o || f || p ? (0, a.jsx)(ts, {}) : u && v && h ? (0, a.jsxs)(Zr.Z, {
                        className: y()(r, "py-2"),
                        children: [(0, a.jsxs)("div", {
                            className: "flex h-9 items-center justify-between px-4 lg:pr-4",
                            children: [(0, a.jsx)("div", {
                                className: y()("min-w-[59px] flex-shrink truncate text-sm font-medium", ke.xy.labelTextPrimary),
                                children: i("session")
                            }), (0, a.jsx)(es, {
                                sessions: v
                            })]
                        }), (0, a.jsx)("div", {
                            className: "pl-2 pr-4",
                            children: (0, a.jsx)($a, {
                                userSessionProgress: h
                            })
                        })]
                    }) : null
                },
                rs = function() {
                    var e = (0, Ar.c)().isNewVersion;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "pt-0.5 md:top-3",
                            children: (0, a.jsx)(Ca, {})
                        }), (0, a.jsx)("div", {
                            className: "mt-4 hidden space-y-4 md:block",
                            children: (0, a.jsx)(Sr.f, {
                                adPageKey: "problemset",
                                adsPositionKey: "problemset",
                                limit: 4
                            })
                        }), (0, a.jsx)("div", {
                            className: "mt-4 pt-0.5 md:top-3",
                            children: (0, a.jsx)(Aa, {})
                        }), !e && (0, a.jsx)("div", {
                            className: "mt-4 hidden md:block",
                            children: (0, a.jsx)(ns, {})
                        }), e && (0, a.jsx)("div", {
                            className: "lc-dsw-xl:block mt-6 hidden",
                            children: (0, a.jsx)(Sa, {})
                        })]
                    })
                };

            function as(e) {
                var t = e.topicTags,
                    n = e.categorySlug;
                return (0, o.useEffect)((function() {
                    Z({
                        problemset_is_new_version: "false"
                    })
                }), []), (0, a.jsxs)(xr.A, {
                    className: "dark:bg-dark-layer-bg bg-white",
                    pageReference: kr.g.QuestionList,
                    children: [(0, a.jsx)(Nr.I, {}), (0, a.jsxs)("div", {
                        className: y()("grid grid-cols-4 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"),
                        children: [(0, a.jsxs)("div", {
                            className: y()("col-span-4 md:col-span-2 lg:col-span-3"),
                            children: [(0, a.jsx)(vr, {
                                ratio: 2,
                                adPageKey: "problemset",
                                adsPositionKey: "problemset_primary",
                                showBannerName: !1,
                                className: "-mr-2 md:mr-0"
                            }), (0, a.jsx)(wr, {}), (0, a.jsxs)("div", {
                                className: y()("mb-8 mt-8 flex w-full flex-col gap-8 overflow-hidden"),
                                children: [(0, a.jsx)(er, {
                                    topicTagsData: t
                                }), (0, a.jsx)(Qn, {
                                    categorySlug: n
                                })]
                            }), (0, a.jsx)(In, {
                                categorySlug: n,
                                topicTagsData: t
                            })]
                        }), (0, a.jsx)("div", {
                            className: "col-span-4 md:col-span-1",
                            children: (0, a.jsx)(rs, {})
                        })]
                    }), (0, a.jsx)(pr.vs, {})]
                })
            }
            var ss = n(68779),
                is = n(75696),
                ls = n(134),
                os = function(e) {
                    var t = e.adPageKey,
                        n = e.adsPositionKey,
                        r = (0, tr.Mw)(t, n, {
                            enabled: !0
                        }),
                        s = r.isInitialLoading,
                        i = r.data,
                        l = (null !== i && void 0 !== i ? i : {}).ads,
                        c = void 0 === l ? [] : l,
                        u = (0, o.useRef)(null),
                        d = (0, o.useState)(0),
                        m = d[0],
                        f = d[1],
                        v = (0, o.useState)(0),
                        x = v[0],
                        p = v[1],
                        h = (0, o.useState)(0),
                        g = h[0],
                        j = h[1],
                        b = m <= 5,
                        y = m + x + 5 >= g,
                        C = (0, is.n)((function(e) {
                            return e.isSidebarOpen
                        })),
                        w = function() {
                            var e, t, n;
                            f((null === (e = u.current) || void 0 === e ? void 0 : e.scrollLeft) || 0), p((null === (t = u.current) || void 0 === t ? void 0 : t.clientWidth) || 0), j((null === (n = u.current) || void 0 === n ? void 0 : n.scrollWidth) || 0)
                        };
                    (0, o.useEffect)((function() {
                        if (u.current) return w(), u.current.addEventListener("scroll", w),
                            function() {
                                var e;
                                null === (e = u.current) || void 0 === e || e.removeEventListener("scroll", w)
                            }
                    }), [u.current, C, s]);
                    return (0, a.jsxs)("div", {
                        className: "group relative",
                        children: [s ? null : (0, a.jsx)("div", {
                            className: (0, ge.yI)("z-base-1 absolute left-4 top-0 flex h-full select-none items-center", b ? "pointer-events-none" : "pointer-events-auto"),
                            children: (0, a.jsx)("div", {
                                className: (0, ge.yI)("invisible flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-all hover:opacity-80 group-hover:visible", b ? "scale-0" : "scale-100"),
                                style: {
                                    backgroundColor: "rgba(210, 210, 215, 0.64)"
                                },
                                onClick: function(e) {
                                    var t;
                                    e.preventDefault(), e.stopPropagation(), null === (t = u.current) || void 0 === t || t.scrollBy({
                                        behavior: "smooth",
                                        left: -270
                                    })
                                },
                                children: (0, a.jsx)(ls.e, {
                                    icon: ss.A35,
                                    color: "black"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "rounded-sd-md scrollbar-hide flex select-none gap-6 overflow-y-hidden overflow-x-scroll",
                            ref: u,
                            children: s ? Array.from(new Array(4)).map((function(e, t) {
                                return (0, a.jsx)("div", {
                                    className: "rounded-sd-md h-[135px] w-[270px] overflow-hidden",
                                    children: (0, a.jsx)(sn.a, {
                                        className: "h-full w-full"
                                    }, t)
                                }, t)
                            })) : c.map((function(e, t) {
                                return (0, a.jsx)("a", {
                                    href: e.targetLink,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, a.jsx)("div", {
                                        className: "rounded-sd-md h-[135px] w-[270px] overflow-hidden",
                                        children: (0, a.jsx)("img", {
                                            alt: e.title,
                                            src: e.imageLink,
                                            className: "h-full w-full"
                                        })
                                    })
                                }, t)
                            }))
                        }), s ? null : (0, a.jsx)("div", {
                            className: (0, ge.yI)("z-base-2 absolute right-4 top-0 flex h-full select-none items-center", y ? "pointer-events-none" : "pointer-events-auto"),
                            children: (0, a.jsx)("div", {
                                className: (0, ge.yI)("invisible flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-all hover:opacity-80 group-hover:visible", y ? "scale-0" : "scale-100"),
                                style: {
                                    backgroundColor: "rgba(210, 210, 215, 0.64)"
                                },
                                onClick: function(e) {
                                    var t;
                                    e.preventDefault(), e.stopPropagation(), null === (t = u.current) || void 0 === t || t.scrollBy({
                                        behavior: "smooth",
                                        left: 270
                                    })
                                },
                                children: (0, a.jsx)(ls.e, {
                                    icon: ss._tD,
                                    color: "black"
                                })
                            })
                        })]
                    })
                },
                cs = n(607),
                us = n(83210),
                ds = n(89952),
                ms = function() {
                    var e = (0, o.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return (0, a.jsxs)("div", {
                        className: "lc-dsw-xl:hidden block",
                        children: [(0, a.jsx)(us.z, {
                            size: "lg",
                            onlyIcon: !0,
                            shape: "rounded",
                            className: "bg-sd-green-400 hover:bg-sd-green-400 fixed bottom-[104px] right-4 h-[48px] w-[48px]",
                            onClick: function() {
                                return n(!0)
                            },
                            children: (0, a.jsx)(ls.e, {
                                icon: ss.fT7,
                                className: "text-fixed-white h-[24px] w-[24px] text-2xl"
                            })
                        }), (0, a.jsx)(ds.Vq, {
                            open: t,
                            onOpenChange: n,
                            children: (0, a.jsx)(ds.cZ, {
                                className: "flex max-w-[352px] justify-center border-none bg-transparent shadow-none",
                                children: (0, a.jsx)("div", {
                                    className: "w-[270px]",
                                    children: (0, a.jsx)(Ca, {})
                                })
                            })
                        })]
                    })
                },
                fs = n(22111),
                vs = n(88204),
                xs = n(68623),
                ps = n(18687),
                hs = n(21971),
                gs = n(28813),
                js = n(97334),
                bs = n(85945),
                ys = n(58420),
                Cs = n(62e3),
                ws = n(25082),
                Ns = n(30366),
                ks = n(11516),
                Ss = n(50438),
                _s = n(85110),
                Zs = n(62018),
                Ts = n(54464),
                Is = n(71711),
                Fs = n(19579),
                Ls = function() {
                    var e = (0, ne.Q5G)(te.f6).mutateAsync;
                    return {
                        mutateAsync: function(t) {
                            return e(t)
                        }
                    }
                },
                Os = n(27342),
                Es = n(59419),
                Rs = n(60291),
                Vs = function(e) {
                    var t = e.favorite,
                        n = e.filters,
                        r = e.queryKey,
                        i = e.setPopoverOpen,
                        l = e.categorySlug,
                        c = (0, s.$G)("description").t,
                        u = (0, bs.NL)(),
                        d = (0, js.y)(),
                        m = d.searchKeyword,
                        f = d.sortOrder,
                        v = d.sortField,
                        x = Ls().mutateAsync,
                        p = (0, ys.pm)().toast,
                        h = t.favoriteType === ce.cPe.SmartList,
                        g = (0, o.useCallback)(function() {
                            var e = (0, Ia.Z)((function(e, t) {
                                var s, o;
                                return (0, Fa.__generator)(this, (function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return h ? [2] : (Ss.P.problemlistSaveSelectionClick({
                                                problemlist_page: "problemset",
                                                problemlist_question_slug: "",
                                                problemlist_collection_type: "add",
                                                problemlist_list_slug: e
                                            }), [4, x({
                                                categorySlug: l,
                                                favoriteSlug: e,
                                                filters: n,
                                                searchKeyword: m,
                                                sortBy: {
                                                    sortField: v,
                                                    sortOrder: f
                                                }
                                            })]);
                                        case 1:
                                            return (null === (o = d.sent()) || void 0 === o || null === (s = o.addFilteredQuestionsToFavorite) || void 0 === s ? void 0 : s.ok) && (o.addFilteredQuestionsToFavorite.error ? Fs.y.error(o.addFilteredQuestionsToFavorite.error) : (i(!1), p({
                                                variant: "success",
                                                description: (0, a.jsxs)("div", {
                                                    children: [c("addProblemToListSuccess"), " ", (0, a.jsx)("a", {
                                                        className: "text-blue",
                                                        target: "_blank",
                                                        href: ie.Hb.problemList(e),
                                                        rel: "noreferrer",
                                                        children: t
                                                    })]
                                                }),
                                                className: "last:mt-[48px]",
                                                duration: 2e3
                                            }), r && u.invalidateQueries(r))), [2]
                                    }
                                }))
                            }));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), [h, x, l, n, m, v, f, i, p, c, r, u]);
                    return (0, a.jsxs)("div", {
                        className: (0, ge.yI)("hover:bg-sd-accent flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-[5px]", ke.Cj.label1, {
                            "cursor-not-allowed": h
                        }),
                        onClick: function() {
                            return g(t.slug || "", t.name)
                        },
                        children: [(0, a.jsx)("div", {
                            className: (0, ge.yI)("text-md flex w-full max-w-[192px] flex-1 items-center space-x-2 truncate"),
                            children: (0, a.jsx)(Cs.J, {
                                title: t.name,
                                children: (0, a.jsx)("span", {
                                    children: t.name
                                })
                            })
                        }), (0, a.jsx)(ls.e, {
                            icon: h ? ss.A47 : t.isPublicFavorite ? ss.g4A : ss.byT,
                            className: "text-sd-muted-foreground"
                        })]
                    })
                },
                As = function(e) {
                    var t, n = e.refreshList,
                        r = e.filters,
                        i = e.queryKey,
                        l = e.setPopoverOpen,
                        c = e.categorySlug,
                        u = (0, s.$G)("description").t,
                        d = (0, js.y)(),
                        m = d.searchKeyword,
                        f = d.sortOrder,
                        v = d.sortField,
                        x = (0, o.useState)(!1),
                        p = x[0],
                        h = x[1],
                        g = (0, o.useRef)(null),
                        j = (0, o.useState)(!1),
                        b = j[0],
                        y = j[1],
                        w = (0, o.useState)(""),
                        N = w[0],
                        k = w[1],
                        S = (0, o.useState)(!1),
                        _ = S[0],
                        Z = S[1],
                        T = (0, Is.j)().mutateAsync,
                        I = Ls().mutateAsync,
                        F = (0, ys.pm)().toast,
                        L = (0, o.useCallback)((function(e) {
                            k(e.target.value.trim())
                        }), [k]),
                        O = (0, o.useCallback)((function() {
                            h(!0)
                        }), [h]),
                        E = (0, o.useCallback)((function() {
                            h(!1)
                        }), [h]),
                        R = (0, o.useCallback)((function(e) {
                            y(e)
                        }), [y]),
                        V = (0, bs.NL)(),
                        A = (0, o.useCallback)((0, Ia.Z)((function() {
                            return (0, Fa.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return !N || _ ? [2] : (Z(!0), Ss.P.problemlistSavePopupCreateClick({
                                            problemlist_page: "problemset",
                                            problemlist_private: JSON.stringify(b),
                                            problemlist_question_slug: ""
                                        }), [4, T({
                                            name: N,
                                            isPublicFavorite: !b,
                                            favoriteType: ce.cPe.Normal
                                        }, {
                                            onSettled: function() {
                                                var e = (0, Ia.Z)((function(e) {
                                                    var t, s, o, d, x, p, j, b;
                                                    return (0, Fa.__generator)(this, (function(C) {
                                                        switch (C.label) {
                                                            case 0:
                                                                return d = null !== (o = null === e || void 0 === e || null === (t = e.createEmptyFavorite) || void 0 === t ? void 0 : t.favoriteSlug) && void 0 !== o ? o : "", (null === e || void 0 === e || null === (s = e.createEmptyFavorite) || void 0 === s ? void 0 : s.ok) ? [3, 1] : ((null === e || void 0 === e || null === (x = e.createEmptyFavorite) || void 0 === x ? void 0 : x.error) && Fs.y.error(e.createEmptyFavorite.error), [2]);
                                                            case 1:
                                                                return [4, I({
                                                                    categorySlug: c,
                                                                    favoriteSlug: d,
                                                                    filters: r,
                                                                    searchKeyword: m,
                                                                    sortBy: {
                                                                        sortField: v,
                                                                        sortOrder: f
                                                                    }
                                                                })];
                                                            case 2:
                                                                (null === (j = C.sent()) || void 0 === j || null === (p = j.addFilteredQuestionsToFavorite) || void 0 === p ? void 0 : p.ok) && ((null === j || void 0 === j || null === (b = j.addFilteredQuestionsToFavorite) || void 0 === b ? void 0 : b.error) ? Fs.y.error(j.addFilteredQuestionsToFavorite.error) : (F({
                                                                    variant: "success",
                                                                    description: (0, a.jsxs)("div", {
                                                                        children: [u("addProblemToListSuccess"), " ", (0, a.jsx)("a", {
                                                                            className: "text-blue",
                                                                            target: "_blank",
                                                                            href: ie.Hb.problemList(d),
                                                                            rel: "noreferrer",
                                                                            children: N
                                                                        })]
                                                                    }),
                                                                    className: "last:mt-[48px]",
                                                                    duration: 2e3
                                                                }), l(!1))), n(), h(!1), y(!1), k(""), g.current && (g.current.value = ""), V.invalidateQueries(i), C.label = 3;
                                                            case 3:
                                                                return Z(!1), [2]
                                                        }
                                                    }))
                                                }));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(),
                                            onError: function() {
                                                Z(!1)
                                            }
                                        })]);
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        })), [N, _, b, T, I, c, r, m, v, f, n, V, i, F, u, l]);
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            className: (0, ge.yI)("text-md text-sd-muted-foreground hover:bg-sd-accent hover:text-sd-foreground w-full cursor-pointer items-center space-x-2 rounded p-2", {
                                flex: !p
                            }),
                            onClick: O,
                            children: [(0, a.jsx)("div", {
                                className: (0, ge.yI)("text-base", ke.Cj.labelGrey7),
                                children: (0, a.jsx)(en.S, {})
                            }), (0, a.jsx)("div", {
                                children: u("createNewList")
                            })]
                        }), (0, a.jsxs)("div", {
                            className: (0, ge.yI)("bg-sd-popover absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-lg p-3", {
                                hidden: !p,
                                flex: p
                            }),
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsxs)("a", {
                                    className: "mb-4 flex cursor-pointer items-center gap-2",
                                    onClick: E,
                                    children: [(0, a.jsx)(ls.e, {
                                        icon: ss.A35
                                    }), (0, a.jsx)("span", {
                                        className: "text-sm font-bold",
                                        children: u("createNewList")
                                    })]
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)(ws.I, {
                                        ref: g,
                                        placeholder: u("nameListPlaceholder"),
                                        onChange: L,
                                        className: (0, ge.yI)("h-8", xe.UG),
                                        maxLength: 30
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "mt-2 flex items-center gap-2",
                                    children: [(0, a.jsx)(Ns.X, {
                                        checked: b,
                                        onCheckedChange: R
                                    }), (0, a.jsx)("span", {
                                        className: "cursor-pointer text-sm",
                                        onClick: function() {
                                            return R(!b)
                                        },
                                        children: u("setAsPrivate")
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "mt-4 flex space-x-2.5",
                                children: (0, a.jsx)(us.z, {
                                    className: (0, ge.yI)("text-md flex !h-8 flex-1 items-center justify-center rounded-lg  px-2.5 ", (t = {}, (0, C.Z)(t, "cursor-pointer", N), (0, C.Z)(t, "cursor-not-allowed opacity-50", !N), t)),
                                    onClick: A,
                                    isLoading: _,
                                    children: u("create")
                                })
                            })]
                        })]
                    })
                },
                Ms = function(e) {
                    var t = e.queryKey,
                        n = e.setPopoverOpen,
                        r = e.categorySlug,
                        i = (0, s.$G)("description").t,
                        l = (0, _s.v)(),
                        c = l.data,
                        u = l.isInitialLoading,
                        d = l.refetch,
                        m = (null !== c && void 0 !== c ? c : {}).myCreatedFavoriteList,
                        f = void 0 === m ? [] : m,
                        v = (0, hs.S)({
                            enable: !0
                        }),
                        x = v.dataMap,
                        p = v.filterCombineType,
                        h = (0, gs.N)(x, p);
                    return (0, o.useEffect)((function() {
                        Ss.P.problemlistSavePopupExposure({
                            problemlist_page: "problemset",
                            problemlist_question_slug: "",
                            problemlist_is_company: "false"
                        })
                    }), []), u ? (0, a.jsx)("div", {
                        className: "flex h-[200px] items-center justify-center",
                        children: (0, a.jsx)(Zs.g, {
                            className: "h-10 w-10"
                        })
                    }) : (0, a.jsxs)("div", {
                        className: "h-[265px]",
                        children: [(0, a.jsx)("header", {
                            className: "flex h-10 w-full items-center justify-between py-1 pl-3 pr-1",
                            children: (0, a.jsx)("h2", {
                                className: (0, ge.yI)("text-center text-sm font-bold", ke.Cj.label1),
                                children: i("myLists")
                            })
                        }), (0, a.jsx)("div", {
                            className: (0, ge.yI)("flex max-h-[calc(100vh-150px)] min-h-[177px]  w-full flex-col"),
                            children: (0, a.jsxs)("div", {
                                className: "flex max-h-[177px] flex-col overflow-y-auto px-1",
                                children: [f.map((function(e) {
                                    return (0, a.jsx)("div", {
                                        children: (0, a.jsx)(Vs, {
                                            favorite: e,
                                            filters: h,
                                            queryKey: t,
                                            setPopoverOpen: n,
                                            categorySlug: r
                                        })
                                    }, e.slug)
                                })), 0 === f.length && (0, a.jsx)("div", {
                                    className: "flex h-[177px] w-full items-center justify-center",
                                    children: (0, a.jsx)(Ts.PlaceholderForNull, {
                                        className: "w-[80px]"
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "border-sd-border border-t-[1px] p-1",
                            children: (0, a.jsx)(As, {
                                refreshList: d,
                                filters: h,
                                queryKey: t,
                                setPopoverOpen: n,
                                categorySlug: r
                            })
                        })]
                    })
                },
                Bs = function(e) {
                    var t, n, r = e.categorySlug,
                        l = (0, s.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        c = (0, i.useRouter)(),
                        u = (0, o.useState)(!1),
                        d = u[0],
                        m = u[1],
                        f = (0, Ve.U5)().data,
                        v = (null !== (t = null === f || void 0 === f ? void 0 : f.userStatus) && void 0 !== t ? t : {}).isSignedIn,
                        x = (0, js.y)(),
                        p = x.searchKeyword,
                        h = x.sortOrder,
                        g = x.sortField,
                        j = (0, hs.S)({
                            enable: !0
                        }),
                        b = j.dataMap,
                        y = j.filterCombineType,
                        C = (0, gs.N)(b, y),
                        k = (0, Os.W)({
                            filters: C,
                            categorySlug: r,
                            searchKeyword: p
                        }, !0).data,
                        S = null !== (n = null === k || void 0 === k ? void 0 : k.problemsetQuestionListV2.totalLength) && void 0 !== n ? n : 0,
                        _ = (0, o.useMemo)((function() {
                            return {
                                skip: 0,
                                limit: Es.I
                            }
                        }), []),
                        Z = (0, o.useMemo)((function() {
                            return (0, N.Z)((0, w.Z)({}, _), {
                                categorySlug: r,
                                filters: (0, gs.N)(b, y),
                                searchKeyword: p,
                                sortBy: {
                                    sortField: g,
                                    sortOrder: h
                                }
                            })
                        }), [r, _, p, g, h, b, y]),
                        T = (0, Rs.U)(Z);
                    return 0 === S ? null : (0, a.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, a.jsx)("div", {
                            className: "text-sd-muted-foreground mr-4 text-sm",
                            children: l("totalNum", {
                                count: S
                            })
                        }), (0, a.jsxs)(ka.h_, {
                            open: d,
                            onOpenChange: m,
                            modal: !1,
                            children: [(0, a.jsx)(ka.$F, {
                                asChild: !0,
                                children: (0, a.jsx)("div", {
                                    onClick: function() {
                                        !1 !== v ? m(!0) : c.push(ie.Hb.signIn(location.href))
                                    },
                                    children: (0, a.jsx)(Re.u, {
                                        label: l("addQuestionsToListTip", {
                                            count: S
                                        }),
                                        placement: "top",
                                        children: (0, a.jsx)(us.z, {
                                            className: "relative h-8 p-2",
                                            variant: "ghost",
                                            size: "xs",
                                            shape: "rounded",
                                            children: (0, a.jsx)(ls.e, {
                                                icon: ss.rZt,
                                                className: "text-sd-muted-foreground",
                                                variant: "14px"
                                            })
                                        })
                                    })
                                })
                            }), (0, a.jsx)(ka.AW, {
                                align: "end",
                                side: "bottom",
                                className: (0, ge.yI)("z-base-2 w-[240px] rounded-lg p-0", ks.nx.bgLayer02, ks.nx.borderBorderTertiary),
                                children: (0, a.jsx)(Ms, {
                                    queryKey: T,
                                    setPopoverOpen: m,
                                    categorySlug: r
                                })
                            })]
                        })]
                    })
                },
                Ps = function(e) {
                    var t, n, r, s, i, l, c, u, d, m, f, v, x, p, h, g, j, b, y, C, w, N, k, S, _ = e.isPanel,
                        Z = e.envType,
                        T = e.categorySlug,
                        I = (0, hs.S)({
                            enable: !0
                        }),
                        F = I.dataMap,
                        L = I.filterCombineType,
                        O = (0, js.y)().searchKeyword,
                        E = (0, gs.N)(F, L),
                        R = (0, o.useMemo)((function() {
                            var e, t, n, r, a, s, i, l, o, c, u, d, m, f, v, x, p, h, g, j, b, y, C, w;
                            return !!((null === (e = E.companyFilter) || void 0 === e || null === (t = e.companySlugs) || void 0 === t ? void 0 : t.length) || (null === (n = E.positionFilter) || void 0 === n || null === (r = n.positionSlugs) || void 0 === r ? void 0 : r.length) || (null === (a = E.statusFilter) || void 0 === a || null === (s = a.questionStatuses) || void 0 === s ? void 0 : s.length) || (null === (i = E.difficultyFilter) || void 0 === i || null === (l = i.difficulties) || void 0 === l ? void 0 : l.length) || (null === (o = E.topicFilter) || void 0 === o || null === (c = o.topicSlugs) || void 0 === c ? void 0 : c.length) || (null === (u = E.languageFilter) || void 0 === u || null === (d = u.languageSlugs) || void 0 === d ? void 0 : d.length) || void 0 !== (null === (m = E.acceptanceFilter) || void 0 === m ? void 0 : m.rangeLeft) || void 0 !== (null === (f = E.acceptanceFilter) || void 0 === f ? void 0 : f.rangeRight) || void 0 !== (null === (v = E.frequencyFilter) || void 0 === v ? void 0 : v.rangeLeft) || void 0 !== (null === (x = E.frequencyFilter) || void 0 === x ? void 0 : x.rangeRight) || (null === (p = E.lastSubmittedFilter) || void 0 === p ? void 0 : p.startFrom) || (null === (h = E.lastSubmittedFilter) || void 0 === h ? void 0 : h.endAt) || void 0 !== (null === (g = E.lastSubmittedFilter) || void 0 === g ? void 0 : g.pastDays) || (null === (j = E.publishedFilter) || void 0 === j ? void 0 : j.startFrom) || (null === (b = E.publishedFilter) || void 0 === b ? void 0 : b.endAt) || void 0 !== (null === (y = E.publishedFilter) || void 0 === y ? void 0 : y.pastDays) || (null === (C = E.premiumFilter) || void 0 === C || null === (w = C.premiumStatus) || void 0 === w ? void 0 : w.length) || "" !== O)
                        }), [null === (t = E.acceptanceFilter) || void 0 === t ? void 0 : t.rangeLeft, null === (n = E.acceptanceFilter) || void 0 === n ? void 0 : n.rangeRight, null === (r = E.companyFilter) || void 0 === r || null === (s = r.companySlugs) || void 0 === s ? void 0 : s.length, null === (i = E.difficultyFilter) || void 0 === i || null === (l = i.difficulties) || void 0 === l ? void 0 : l.length, null === (c = E.frequencyFilter) || void 0 === c ? void 0 : c.rangeLeft, null === (u = E.frequencyFilter) || void 0 === u ? void 0 : u.rangeRight, null === (d = E.languageFilter) || void 0 === d || null === (m = d.languageSlugs) || void 0 === m ? void 0 : m.length, null === (f = E.lastSubmittedFilter) || void 0 === f ? void 0 : f.endAt, null === (v = E.lastSubmittedFilter) || void 0 === v ? void 0 : v.pastDays, null === (x = E.lastSubmittedFilter) || void 0 === x ? void 0 : x.startFrom, null === (p = E.positionFilter) || void 0 === p || null === (h = p.positionSlugs) || void 0 === h ? void 0 : h.length, null === (g = E.premiumFilter) || void 0 === g || null === (j = g.premiumStatus) || void 0 === j ? void 0 : j.length, null === (b = E.publishedFilter) || void 0 === b ? void 0 : b.endAt, null === (y = E.publishedFilter) || void 0 === y ? void 0 : y.pastDays, null === (C = E.publishedFilter) || void 0 === C ? void 0 : C.startFrom, null === (w = E.statusFilter) || void 0 === w || null === (N = w.questionStatuses) || void 0 === N ? void 0 : N.length, null === (k = E.topicFilter) || void 0 === k || null === (S = k.topicSlugs) || void 0 === S ? void 0 : S.length, O]);
                    return (0, a.jsxs)("div", {
                        className: "flex w-full justify-between",
                        children: [(0, a.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, a.jsx)(vs.P, {}), (0, a.jsx)(fs.w, {
                                useQueryString: !0,
                                showSaveAsSmartListBtn: !0,
                                envType: Z,
                                categorySlug: T
                            }), (0, a.jsx)(xs.o, {})]
                        }), (0, a.jsxs)("div", {
                            className: "relative flex gap-2",
                            children: [R && (0, a.jsx)(Bs, {
                                categorySlug: T
                            }), !_ && (0, a.jsx)(ps.k, {
                                envType: Z,
                                categorySlug: T
                            })]
                        })]
                    })
                },
                Ds = n(21710),
                Hs = n(75955),
                qs = n(17687),
                Gs = n(25351),
                Xs = function() {
                    return (0, ne.pw0)(te.f6, {}, {
                        select: function(e) {
                            var t, n, r = e.activeDailyCodingChallengeQuestion;
                            if (!r) return null;
                            var a, s, i = r.userStatus,
                                l = r.date,
                                o = r.question,
                                c = r.link,
                                u = i === ne.DRm.Finish ? Gs.s.SOLVED : Gs.s.TO_DO;
                            return {
                                link: c,
                                date: l,
                                question: (0, N.Z)((0, w.Z)({}, o), {
                                    id: o.id || "",
                                    difficulty: null === (t = o.difficulty) || void 0 === t ? void 0 : t.toUpperCase(),
                                    paidOnly: !!o.paidOnly,
                                    questionFrontendId: o.questionFrontendId || "",
                                    status: u,
                                    translatedTitle: o.translatedTitle || "",
                                    frequency: null !== (a = o.frequency) && void 0 !== a ? a : 0,
                                    acRate: o.acRate ? o.acRate / 100 : null !== (s = o.acRate) && void 0 !== s ? s : 0,
                                    topicTags: (null === (n = o.topicTags) || void 0 === n ? void 0 : n.map((function(e) {
                                        return (0, N.Z)((0, w.Z)({}, e), {
                                            nameTranslated: e.nameTranslated || ""
                                        })
                                    }))) || []
                                })
                            }
                        }
                    })
                },
                zs = n(74617),
                Ws = function(e) {
                    var t, n = e.categorySlug,
                        r = (0, o.useState)(),
                        s = r[0],
                        i = r[1],
                        l = (0, js.y)(),
                        c = l.sortOrder,
                        u = l.sortField,
                        d = l.searchKeyword,
                        m = l.showTags,
                        f = (0, hs.S)({
                            enable: !0
                        }),
                        v = f.dataMap,
                        x = f.filterCombineType,
                        p = Xs(),
                        h = p.isInitialLoading,
                        g = p.data,
                        j = (0, o.useMemo)((function() {
                            return {
                                skip: 0,
                                limit: Es.I
                            }
                        }), []),
                        b = (0, o.useMemo)((function() {
                            return (0, N.Z)((0, w.Z)({}, j), {
                                categorySlug: n,
                                filters: (0, gs.N)(v, x),
                                searchKeyword: d,
                                sortBy: {
                                    sortField: u,
                                    sortOrder: c
                                }
                            })
                        }), [n, j, d, u, c, v, x]),
                        y = (0, Rs.U)(b),
                        C = (0, qs.u)(b),
                        k = C.isInitialLoading,
                        S = C.isFetching,
                        _ = C.data,
                        Z = C.hasNextPage,
                        T = C.fetchNextPage,
                        I = (0, o.useMemo)((function() {
                            return _ && _.pages ? _.pages.flatMap((function(e) {
                                return e.problemList
                            })) : []
                        }), [_]),
                        F = (0, Hs.M)({
                            enabled: !S && Z,
                            threshold: 0,
                            onIntersect: T
                        }),
                        L = F.setContainerDom,
                        O = F.setTargetDom;
                    return (0, o.useEffect)((function() {
                        L(null)
                    }), [L]), (0, o.useEffect)((function() {
                        i(I)
                    }), [I]), k || h ? (0, a.jsx)("div", {
                        className: "w-full flex-1",
                        children: new Array(15).fill(0).map((function(e, t) {
                            return (0, a.jsx)("div", {
                                className: (0, ge.yI)("h-[44px] w-full animate-pulse rounded-lg", t % 2 ? "bg-transparent" : "bg-sd-accent")
                            }, t)
                        }))
                    }) : 0 !== (null === _ || void 0 === _ || null === (t = _.pages) || void 0 === t ? void 0 : t[0].total) || g ? (0, a.jsx)("div", {
                        className: "w-full flex-1",
                        children: (0, a.jsxs)("div", {
                            className: "w-full pb-[80px]",
                            children: [g && (0, a.jsx)(Ds.H, {
                                slug: "",
                                data: g.question,
                                showTags: m,
                                isOddRow: !1,
                                canEdit: !1,
                                isDailyQuestion: !0,
                                showZebraGrid: !0,
                                queryKey: y,
                                showFrequency: !0,
                                showAcRate: !0,
                                date: g.date,
                                viewOnly: !0,
                                dailyQuestionSlug: g.question.titleSlug
                            }), null === s || void 0 === s ? void 0 : s.map((function(e, t) {
                                var n;
                                return (0, a.jsx)(Ds.H, {
                                    slug: "",
                                    data: e,
                                    showTags: m,
                                    isOddRow: g ? !Boolean(t % 2) : Boolean(t % 2),
                                    canEdit: !1,
                                    favoriteQuestionList: I,
                                    isProblemset: !0,
                                    showZebraGrid: !0,
                                    queryKey: y,
                                    showFrequency: !0,
                                    showAcRate: !0,
                                    viewOnly: !0,
                                    dailyQuestionSlug: null === g || void 0 === g || null === (n = g.question) || void 0 === n ? void 0 : n.titleSlug
                                }, e.id)
                            })), Z && (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)("div", {
                                    className: "w-full",
                                    ref: O,
                                    children: [(0, a.jsx)("div", {
                                        className: (0, ge.yI)("h-[44px] w-full animate-pulse rounded-lg bg-transparent")
                                    }), (0, a.jsx)("div", {
                                        className: (0, ge.yI)("bg-sd-accent h-[44px] w-full animate-pulse rounded-lg")
                                    }), (0, a.jsx)("div", {
                                        className: (0, ge.yI)("h-[44px] w-full animate-pulse rounded-lg bg-transparent")
                                    }), (0, a.jsx)("div", {
                                        className: (0, ge.yI)("bg-sd-accent h-[44px] w-full animate-pulse rounded-lg")
                                    })]
                                })
                            })]
                        })
                    }) : (0, a.jsx)("div", {
                        className: " lc-dsw-lg:pt-[140px] flex w-full flex-col items-center gap-6 pt-[40px]",
                        children: (0, a.jsx)(ir.y, {
                            className: "h-[200px] w-[200px]",
                            src: zs.Z,
                            alt: "Null"
                        })
                    })
                },
                Us = n(111),
                Qs = n(69485),
                Ks = function() {
                    var e = (0, s.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        t = (0, Qs.z)((function() {
                            return window.scroll({
                                top: 0,
                                behavior: "smooth"
                            })
                        })),
                        n = (0, o.useState)(!1),
                        r = n[0],
                        i = n[1];
                    return (0, o.useEffect)((function() {
                        var e = (0, Us.Z)((function() {
                            var e = document.documentElement.scrollTop;
                            i(e > 30)
                        }), 300);
                        return window.addEventListener("scroll", e),
                            function() {
                                window.removeEventListener("scroll", e)
                            }
                    }), []), (0, a.jsx)(Re.u, {
                        placement: "top",
                        label: e("backToTop"),
                        children: (0, a.jsx)(us.z, {
                            size: "lg",
                            onlyIcon: !0,
                            shape: "rounded",
                            variant: "secondary",
                            className: (0, ge.yI)("bg-sd-secondary z-base-1 fixed bottom-[168px] right-4 hidden h-[48px] w-[48px]", {
                                flex: r
                            }),
                            onClick: t,
                            children: (0, a.jsx)(ls.e, {
                                icon: ss.bqB,
                                className: "text-sd-muted-foreground h-[24px] w-[24px] text-2xl"
                            })
                        })
                    })
                },
                $s = function() {
                    var e = (0, o.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return (0, a.jsxs)("div", {
                        className: "lc-dsw-xl:hidden block",
                        children: [(0, a.jsx)(us.z, {
                            size: "lg",
                            onlyIcon: !0,
                            shape: "rounded",
                            className: "bg-sd-green-400 hover:bg-sd-green-400 fixed bottom-10 right-4 h-[48px] w-[48px] bg-[linear-gradient(91deg,#FFE4B2_0%,#F9BF69_100%)]",
                            onClick: function() {
                                return n(!0)
                            },
                            children: (0, a.jsx)(ls.e, {
                                icon: ss.gju,
                                className: "h-[24px] w-[24px] text-2xl text-[#513D2E]"
                            })
                        }), (0, a.jsx)(ds.Vq, {
                            open: t,
                            onOpenChange: n,
                            children: (0, a.jsx)(ds.cZ, {
                                className: "flex max-w-[352px] justify-center border-none bg-transparent shadow-none",
                                children: (0, a.jsx)("div", {
                                    className: "w-[270px]",
                                    children: (0, a.jsx)(Aa, {})
                                })
                            })
                        })]
                    })
                },
                Js = n(93769),
                Ys = n(61306),
                ei = n(96244),
                ti = n(92127),
                ni = "problems_satisfaction_survey",
                ri = function(e) {
                    var t = e.surveyJson,
                        n = e.leetcoinsReward,
                        r = (0, s.$G)("new-study-plan").t,
                        i = (0, Js.z2)((function(e) {
                            return e.setSatisfactionSurveyIsOpen
                        })),
                        l = [(0, o.useCallback)((function() {
                            return i(!0)
                        }), [i]), (0, o.useCallback)((function() {
                            return i(!1)
                        }), [i])],
                        c = l[0],
                        u = l[1];
                    (0, o.useEffect)((function() {
                        return c()
                    }), [c]);
                    var d = (0, ti.a)(),
                        m = d.mutateAsync,
                        f = d.completeSurvey,
                        v = (0, o.useCallback)((function(e, t) {
                            var n = null !== e.satisfaction_rate;
                            n && f(ni), m({
                                surveySlug: ni,
                                surveyResponse: JSON.stringify(e),
                                cancelled: !1,
                                completedRequiredQuestions: n,
                                completedAllQuestions: t
                            })
                        }), [m, f]),
                        x = (0, o.useCallback)((function(e) {
                            var t = null !== e.satisfaction_rate;
                            m({
                                surveySlug: ni,
                                surveyResponse: JSON.stringify(e),
                                cancelled: !0,
                                completedAllQuestions: !1,
                                completedRequiredQuestions: t
                            })
                        }), [m]);
                    return (0, a.jsx)(Ys.n, {
                        className: "z-message fixed bottom-[10px] right-[10px]",
                        surveyJson: t,
                        onSubmit: v,
                        onCancel: x,
                        onClose: u,
                        leetCoinsReward: n,
                        submitBtnText: r("survey.submit")
                    })
                },
                ai = function() {
                    var e = (0, ei.Z)(ni),
                        t = e.data,
                        n = e.isInitialLoading,
                        r = (0, k.Z)((0, gt._)("problemset_page_visit_times", 0), 2),
                        s = r[0],
                        i = r[1];
                    return (0, o.useEffect)((function() {
                        setTimeout((function() {
                            s < 2 && i(s + 1)
                        }), 1e3)
                    }), []), n || !(null === t || void 0 === t ? void 0 : t.showSurvey) || !t.surveyJson || s < 2 ? null : (0, a.jsx)(ri, {
                        surveyJson: t.surveyJson,
                        leetcoinsReward: t.leetcoinAmount
                    })
                };

            function si(e) {
                var t = e.topicTags,
                    n = e.categorySlug;
                return (0, o.useEffect)((function() {
                    Z({
                        problemset_is_new_version: "true"
                    })
                }), []), (0, a.jsxs)(cs.i, {
                    children: [(0, a.jsx)("div", {
                        className: "flex w-full flex-1 overflow-hidden",
                        children: (0, a.jsxs)("div", {
                            className: "flex w-full justify-between overflow-hidden",
                            children: [(0, a.jsx)("div", {
                                className: "flex flex-1 justify-center overflow-hidden",
                                children: (0, a.jsxs)("div", {
                                    className: "lc-dsw-xl:max-w-[1100px] lc-dsw-xl:px-6 mt-14 w-full px-4",
                                    children: [(0, a.jsx)(os, {
                                        ratio: 2,
                                        adPageKey: "problemset",
                                        adsPositionKey: "problemset_primary",
                                        showBannerName: !1,
                                        className: "-mr-2 md:mr-0"
                                    }), (0, a.jsxs)("div", {
                                        className: "my-8 flex flex-col gap-8 overflow-hidden",
                                        children: [(0, a.jsx)(er, {
                                            topicTagsData: t
                                        }), (0, a.jsx)(Qn, {
                                            categorySlug: n
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "mt-6 flex flex-col items-center gap-4",
                                        children: [(0, a.jsx)(Ps, {
                                            envType: xe.Zw.Problemset,
                                            categorySlug: n
                                        }), (0, a.jsx)(Ws, {
                                            categorySlug: n
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "lc-dsw-xl:flex mr-4 mt-4 hidden w-[270px] flex-col",
                                children: (0, a.jsx)(rs, {})
                            })]
                        })
                    }), (0, a.jsx)(Ks, {}), (0, a.jsx)(ms, {}), (0, a.jsx)($s, {}), (0, a.jsx)(ai, {})]
                })
            }
            var ii = n(91635),
                li = !0;

            function oi(e) {
                var t, n = e.topicTags,
                    r = e.enableNewVersion,
                    l = (0, s.$G)("problemset").t,
                    d = j(),
                    m = d.data,
                    f = d.isLoading,
                    v = (null !== m && void 0 !== m ? m : {}).categories,
                    x = (0, c.T)((function(e) {
                        return e.setIsNewVersion
                    }));
                (0, o.useEffect)((function() {
                    x(r)
                }), [r]);
                var p = null === (t = (0, i.useRouter)().query.slug) || void 0 === t ? void 0 : t[0],
                    h = null !== p && void 0 !== p ? p : "all-code-essentials",
                    g = (0, o.useMemo)((function() {
                        var e;
                        return null !== (e = null === v || void 0 === v ? void 0 : v.some((function(e) {
                            return e.titleSlug === h
                        }))) && void 0 !== e && e
                    }), [v, h]);
                return f ? null : g ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.p, {
                        title: l("meta.title"),
                        description: l("meta.description"),
                        openGraph: {
                            images: [{
                                url: l("meta.ogImage")
                            }]
                        }
                    }), r ? (0, a.jsx)(si, {
                        topicTags: n,
                        categorySlug: h
                    }) : (0, a.jsx)(as, {
                        topicTags: n,
                        categorySlug: h
                    })]
                }) : (0, a.jsx)(ii.default, {})
            }
        },
        90461: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return S
                }
            });
            var r = n(29815),
                a = n(85893),
                s = n(94184),
                i = n.n(s),
                l = n(67294),
                o = n(15371),
                c = n(23874),
                u = n(70060),
                d = n(19906),
                m = n(26042),
                f = n(69396),
                v = n(24302),
                x = n(30719),
                p = n(99534),
                h = n(87231),
                g = n(42056),
                j = n(74654),
                b = (0, g.F)("a", (function(e) {
                    h.o.advertisementAdClick({
                        advertisement_ad_position: e["data-position-title"] || "",
                        advertisement_ad_name: e["data-identifier"] || ""
                    })
                })),
                y = (0, j.b)(b, (function(e) {
                    h.o.advertisementAdExposure({
                        advertisement_ad_position: e["data-position-title"] || "",
                        advertisement_ad_name: e["data-identifier"] || ""
                    })
                })),
                C = function(e) {
                    var t = e.isTagShown,
                        n = e.className,
                        r = e.children,
                        s = e.positionTitle,
                        l = e.identifier,
                        o = (0, p.Z)(e, ["isTagShown", "className", "children", "positionTitle", "identifier"]);
                    return (0, a.jsxs)(y, (0, f.Z)((0, m.Z)({
                        className: i()(n, "relative block")
                    }, o), {
                        "data-position-title": s,
                        "data-identifier": l,
                        children: [r, t && (0, a.jsx)("span", {
                            className: i()("absolute bottom-0 right-0 block h-[20px] w-[40px] rounded-tl-[8px]", "bg-gray-8 bg-opacity-30 text-center text-xs leading-[20px] text-white"),
                            children: "\u5e7f\u544a"
                        })]
                    }))
                };
            v.ZP.use([v.tl, v.pt]);
            var w = {
                    speed: 500,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: !1
                    },
                    loop: !0,
                    pagination: {
                        type: "bullets",
                        clickable: !0
                    }
                },
                N = l.memo((function(e) {
                    var t = e.ads,
                        n = e.positionName,
                        r = e.direction,
                        s = void 0 === r ? "horizontal" : r,
                        c = e.className,
                        u = e.containerClass,
                        v = (0, l.useRef)(),
                        p = (0, l.useCallback)((function(e) {
                            v.current = e
                        }), []),
                        h = (0, l.useCallback)((function() {
                            var e;
                            null === (e = v.current) || void 0 === e || e.autoplay.stop()
                        }), []),
                        g = (0, l.useCallback)((function() {
                            var e;
                            null === (e = v.current) || void 0 === e || e.autoplay.start()
                        }), []);
                    return (0, a.jsx)("div", {
                        className: i()("ads rounded-lg", c, "overflow-hidden", o.eq.card),
                        onMouseEnter: h,
                        onMouseLeave: g,
                        children: (0, a.jsx)(x.tq, (0, f.Z)((0, m.Z)({
                            className: "rounded-lg"
                        }, w), {
                            direction: s,
                            onSwiper: p,
                            children: t.map((function(e) {
                                var t = e.imageLink,
                                    r = e.targetLink,
                                    s = e.title,
                                    l = e.isTagShown,
                                    o = e.identifier;
                                return (0, a.jsx)(x.o5, {
                                    children: (0, a.jsx)(C, {
                                        positionTitle: n,
                                        identifier: o,
                                        isTagShown: l,
                                        href: r,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, a.jsx)("div", {
                                            className: i()("aspect-w-2 aspect-h-1", u),
                                            children: (0, a.jsx)(d.y, {
                                                className: "max-h-[137px] w-full object-cover",
                                                src: t,
                                                alt: s
                                            })
                                        })
                                    })
                                }, s)
                            }))
                        }))
                    })
                })),
                k = function() {
                    return u.Mw
                },
                S = l.memo((function(e) {
                    var t, n = e.adPageKey,
                        s = e.adsPositionKey,
                        l = e.limit,
                        u = e.className,
                        m = e.carouselDirection,
                        f = e.carouselClassName,
                        v = e.adsData,
                        x = e.customType,
                        p = e.customId,
                        h = e.containerClass,
                        g = [x, p],
                        j = k(x).apply(void 0, [n, s, {
                            enabled: !v
                        }].concat((0, r.Z)(g))),
                        b = j.isFetching,
                        y = j.data;
                    if (b) return null;
                    var w = null !== (t = null !== v && void 0 !== v ? v : y) && void 0 !== t ? t : {},
                        S = w.ads,
                        _ = w.displayStyle,
                        Z = w.positionTitle,
                        T = (null === S || void 0 === S ? void 0 : S.slice(0, l)) || [];
                    if (!(null === S || void 0 === S ? void 0 : S.length)) return null;
                    var I = null;
                    return _ === c.KLD.Tiled || 1 === (null === S || void 0 === S ? void 0 : S.length) ? I = null === T || void 0 === T ? void 0 : T.map((function(e) {
                        var t = e.imageLink,
                            n = e.title,
                            r = e.identifier,
                            l = e.targetLink,
                            c = e.isTagShown;
                        return (0, a.jsx)(C, {
                            className: i()("transform overflow-hidden rounded-lg transition duration-500 hover:-translate-y-0.5", o.eq.card),
                            identifier: r,
                            positionTitle: null !== Z && void 0 !== Z ? Z : s,
                            isTagShown: c,
                            href: l,
                            target: "_blank",
                            "aria-label": "ad",
                            rel: "noreferrer",
                            children: (0, a.jsx)("div", {
                                className: i()("aspect-w-2 aspect-h-1", h),
                                children: (0, a.jsx)(d.y, {
                                    className: "w-full object-cover md:max-h-[135px]",
                                    src: t,
                                    alt: n
                                })
                            })
                        }, "".concat(r))
                    })) : _ === c.KLD.Carousel && (I = (0, a.jsx)(N, {
                        ads: T,
                        positionName: Z || "",
                        direction: m,
                        className: f
                    })), (0, a.jsx)("div", {
                        className: i()(u, "space-y-4"),
                        children: I
                    })
                }))
        },
        62434: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return i
                }
            });
            var r = n(85893),
                a = function() {
                    return (0, r.jsxs)("div", {
                        className: "hidden",
                        children: [(0, r.jsx)("div", {
                            className: "swiper-autoheight"
                        }), (0, r.jsx)("div", {
                            className: "swiper-autoheight"
                        }), (0, r.jsx)("div", {
                            className: "gap-8"
                        }), (0, r.jsx)("div", {
                            className: "gap-8"
                        }), (0, r.jsx)("div", {
                            className: "gap-6"
                        }), (0, r.jsx)("div", {
                            className: "gap-6"
                        }), (0, r.jsx)("div", {
                            className: "pt-3"
                        }), (0, r.jsx)("div", {
                            className: "pt-3"
                        }), (0, r.jsx)("div", {
                            className: "space-y-1.5"
                        }), (0, r.jsx)("div", {
                            className: "space-y-1.5"
                        }), (0, r.jsx)("div", {
                            role: "rowgroup"
                        }), (0, r.jsx)("div", {
                            role: "rowgroup"
                        }), (0, r.jsx)("div", {
                            role: "table"
                        }), (0, r.jsx)("div", {
                            role: "table"
                        })]
                    })
                },
                s = function() {
                    return (0, r.jsx)(a, {})
                },
                i = function() {
                    return (0, r.jsx)("div", {
                        className: "hidden",
                        children: (0, r.jsx)(s, {})
                    })
                }
        },
        68623: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return v
                }
            });
            var r = n(85893),
                a = n(68779),
                s = n(67294),
                i = n(11321),
                l = n(25082),
                o = n(134),
                c = n(83210),
                u = n(50438),
                d = n(9840),
                m = n(31523),
                f = n(97334),
                v = function(e) {
                    var t = e.slug,
                        n = (0, s.useState)(!1),
                        v = n[0],
                        x = n[1],
                        p = (0, f.y)(),
                        h = p.searchKeyword,
                        g = p.setSearchKeyword,
                        j = (0, s.useState)(null),
                        b = j[0],
                        y = j[1],
                        C = (0, s.useState)(h),
                        w = C[0],
                        N = C[1],
                        k = (0, d.N)(w, 500),
                        S = (0, i.$G)("description").t;
                    (0, s.useEffect)((function() {
                        v && b && b.focus()
                    }), [v, b]), (0, s.useEffect)((function() {
                        N("")
                    }), [t]);
                    return (0, m.r)((function() {
                        g(k), u.P.problemlistSearchKeywordClick({
                            problemlist_search_keyword: k
                        })
                    }), [k]), v || h.trim() ? (0, r.jsxs)("div", {
                        className: "relative",
                        children: [(0, r.jsx)(l.I, {
                            ref: y,
                            placeholder: S("searchPlaceholder"),
                            onBlur: function() {
                                return x(!1)
                            },
                            className: "bg-sd-accent h-8 rounded-full border-none py-1.5 pl-[34px] pr-3 text-sm focus-visible:ring-0",
                            value: w,
                            onChange: function(e) {
                                N(e.target.value)
                            }
                        }), (0, r.jsx)(o.e, {
                            icon: a.wn1,
                            variant: "14px",
                            className: "text-sd-muted-foreground absolute left-3 top-2"
                        })]
                    }) : (0, r.jsx)(c.z, {
                        className: "h-8 cursor-pointer p-2",
                        variant: "ghost",
                        size: "xs",
                        shape: "rounded",
                        onClick: function() {
                            x(!0), u.P.problemlistSearchClick()
                        },
                        children: (0, r.jsx)(o.e, {
                            icon: a.wn1,
                            variant: "14px",
                            className: "text-sd-muted-foreground"
                        })
                    })
                }
        },
        88204: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return k
                }
            });
            var r = n(85893),
                a = n(68779),
                s = n(67294),
                i = n(11321),
                l = n(11163),
                o = n(23874),
                c = n(12922),
                u = n(50438),
                d = n(26042),
                m = n(50632),
                f = n(70341),
                v = n(31799),
                x = n(97334),
                p = n(8050),
                h = n(134),
                g = n(62758),
                j = [{
                    name: o.lL5.Custom,
                    isPremiumOnly: !1
                }, {
                    name: o.lL5.Frequency,
                    isPremiumOnly: !0
                }, {
                    name: o.lL5.Difficulty,
                    isPremiumOnly: !1
                }, {
                    name: o.lL5.AcRate,
                    isPremiumOnly: !1
                }, {
                    name: o.lL5.FrontendId,
                    isPremiumOnly: !1
                }],
                b = function() {
                    return f.Hb.premium(v.D.SmartListFilter, {
                        key: "frequency"
                    })
                },
                y = function(e) {
                    var t, n = e.icon,
                        s = (0, x.y)(),
                        l = s.showTags,
                        f = s.setShowTags,
                        v = s.sortField,
                        y = s.setSortField,
                        C = s.sortOrder,
                        w = s.setSortOrder,
                        N = (0, i.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        k = (0, m.U5)().data,
                        S = Boolean(null === k || void 0 === k || null === (t = k.userStatus) || void 0 === t ? void 0 : t.isPremium),
                        _ = function(e) {
                            var t = e.name,
                                s = e.isPremiumOnly;
                            return (0, r.jsxs)("div", {
                                className: (0, c.yI)("flex w-full cursor-pointer items-center justify-between rounded px-2 py-1.5", {
                                    "bg-sd-accent": v === t
                                }),
                                onClick: function() {
                                    return function(e, t) {
                                        if (!t || S) {
                                            var n = e === v ? C === o.Piq.Descending ? o.Piq.Ascending : o.Piq.Descending : o.Piq.Ascending;
                                            y(e), w(n), u.P.problemlistSortConditionClick({
                                                problemlist_sort: "".concat(e, "_").concat(n)
                                            })
                                        }
                                    }(t, s)
                                },
                                children: [s ? S ? (0, r.jsx)(p.t, {
                                    style: {
                                        fontSize: "14px",
                                        lineHeight: "20px"
                                    },
                                    children: N("sort.".concat(t.toLowerCase()))
                                }) : (0, r.jsx)("div", {
                                    className: (0, c.yI)("text-sd-foreground text-sm opacity-30"),
                                    children: N("sort.".concat(t.toLowerCase()))
                                }) : (0, r.jsx)("div", {
                                    className: (0, c.yI)("text-sd-popover-foreground text-sm", {
                                        "text-sd-foreground": s
                                    }),
                                    children: N("sort.".concat(t.toLowerCase()))
                                }), v === t && (0, r.jsx)(h.e, {
                                    icon: t === o.lL5.Custom ? a.LEp : n,
                                    className: (0, c.yI)("text-sd-foreground")
                                }), s && !S && (0, r.jsx)(h.e, {
                                    icon: a.byT,
                                    className: (0, c.yI)("text-brand-orange")
                                })]
                            })
                        };
                    return (0, r.jsxs)("div", {
                        className: "flex h-[208px] w-[240px] flex-col",
                        children: [(0, r.jsx)("div", {
                            className: "p-1",
                            children: j.map((function(e) {
                                return (0, r.jsx)("div", {
                                    children: e.isPremiumOnly && !S ? (0, r.jsx)(g.u, {
                                        label: N("sort.premiumOnlyTip"),
                                        className: "z-modal-5",
                                        placement: "top",
                                        children: (0, r.jsx)("a", {
                                            href: b(),
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, r.jsx)(_, (0, d.Z)({}, e))
                                        })
                                    }) : (0, r.jsx)(_, (0, d.Z)({}, e))
                                }, e.name)
                            }))
                        }), (0, r.jsx)("div", {
                            className: "border-sd-border w-full border-t"
                        }), (0, r.jsxs)("div", {
                            className: "flex cursor-pointer justify-between px-3 py-2.5",
                            onClick: function() {
                                f(!l), u.P.problemlistSortTagClick({
                                    problemlist_sort_tag_show: "".concat(!l)
                                })
                            },
                            children: [(0, r.jsx)("div", {
                                className: "text-sm",
                                children: N("tag")
                            }), (0, r.jsx)(h.e, {
                                icon: l ? a.Mdf : a.Aq,
                                className: "text-sd-popover-foreground",
                                variant: "14px"
                            })]
                        })]
                    })
                },
                C = n(23358),
                w = n(83210),
                N = n(22111),
                k = function() {
                    var e = (0, i.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        t = (0, l.useRouter)().pathname,
                        n = (0, x.y)(),
                        d = n.sortField,
                        m = n.sortOrder,
                        f = (0, s.useState)(!1),
                        v = f[0],
                        p = f[1],
                        j = o.lL5.Custom === d,
                        b = (0, s.useMemo)((function() {
                            return j ? a.Xqz : d === o.lL5.FrontendId ? m === o.Piq.Ascending ? a.DlO : a.bQK : m === o.Piq.Ascending ? a.ccG : a.MdH
                        }), [d, m, j]);
                    return (0, r.jsxs)(C.h_, {
                        open: v,
                        onOpenChange: p,
                        modal: !1,
                        children: [(0, r.jsx)(C.$F, {
                            asChild: !0,
                            children: (0, r.jsx)("div", {
                                onClick: function() {
                                    u.P.problemlistSortClick({
                                        problemlist_filter_source: (0, N.G)(t)
                                    })
                                },
                                children: (0, r.jsx)(g.u, {
                                    label: e("sort.tooltip.".concat(d.toLowerCase())),
                                    placement: "top",
                                    children: (0, r.jsx)(w.z, {
                                        className: "h-8 p-2",
                                        variant: "ghost",
                                        size: "xs",
                                        shape: "rounded",
                                        children: (0, r.jsx)(h.e, {
                                            icon: b,
                                            className: (0, c.yI)(j ? "text-sd-muted-foreground" : "text-sd-green-500"),
                                            variant: "14px"
                                        })
                                    })
                                })
                            })
                        }), (0, r.jsx)(C.AW, {
                            align: "start",
                            className: "z-modal-3 p-0",
                            children: (0, r.jsx)(y, {
                                icon: b
                            })
                        })]
                    })
                }
        },
        36088: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return i
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294).forwardRef((function(e, t) {
                    return (0, s.jsxs)("svg", (0, a.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 51 16",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: [(0, s.jsx)("rect", {
                            width: "51",
                            height: "16",
                            rx: "5",
                            fill: "#FFA116"
                        }), (0, s.jsx)("path", {
                            d: "M5.7334 8.3623H7.12988C7.51725 8.3623 7.84766 8.22559 8.12109 7.95215C8.39128 7.68197 8.52637 7.35319 8.52637 6.96582C8.52637 6.57845 8.39128 6.24805 8.12109 5.97461C7.84766 5.70117 7.51725 5.56445 7.12988 5.56445C6.74251 5.56445 6.41211 5.70117 6.13867 5.97461C5.86849 6.24805 5.7334 6.57845 5.7334 6.96582V8.3623ZM5.7334 9.55859V11.4092C5.7334 11.5752 5.6748 11.7135 5.55762 11.8242C5.44043 11.9414 5.30208 12 5.14258 12H5.12793C4.96842 12 4.83008 11.9414 4.71289 11.8242C4.5957 11.7135 4.53711 11.5752 4.53711 11.4092V6.96582C4.53711 6.24967 4.79102 5.6377 5.29883 5.12988C5.80664 4.62533 6.41699 4.37305 7.12988 4.37305C7.84603 4.37305 8.45638 4.62533 8.96094 5.12988C9.46875 5.6377 9.72266 6.24967 9.72266 6.96582C9.72266 7.67871 9.46875 8.28906 8.96094 8.79688C8.45638 9.30469 7.84603 9.55859 7.12988 9.55859H5.7334ZM12.9844 6.375C13.1471 6.375 13.2871 6.43359 13.4043 6.55078C13.5182 6.66797 13.5752 6.80794 13.5752 6.9707V6.98047C13.5752 7.14323 13.5182 7.28158 13.4043 7.39551C13.2871 7.5127 13.1471 7.57129 12.9844 7.57129H12.7061C12.4391 7.57129 12.2129 7.66406 12.0273 7.84961C11.8451 8.03516 11.7523 8.26139 11.749 8.52832V11.4092C11.749 11.5752 11.6904 11.7135 11.5732 11.8242C11.4561 11.9414 11.3177 12 11.1582 12H11.1436C10.984 12 10.8457 11.9414 10.7285 11.8242C10.6113 11.7135 10.5527 11.5752 10.5527 11.4092V8.52832C10.5592 7.93262 10.7692 7.4248 11.1826 7.00488C11.6025 6.58496 12.1104 6.375 12.7061 6.375H12.9844ZM16.7832 7.58105C16.334 7.58105 15.9515 7.73893 15.6357 8.05469C15.3232 8.37044 15.167 8.75293 15.167 9.20215V9.23633L17.8965 8.01074C17.6556 7.72428 17.2845 7.58105 16.7832 7.58105ZM19.3369 8.01562C19.376 8.09701 19.3955 8.18001 19.3955 8.26465C19.3955 8.33301 19.3825 8.40137 19.3564 8.46973C19.3011 8.62272 19.1969 8.7334 19.0439 8.80176C18.5882 9.00684 17.9893 9.27702 17.2471 9.6123C16.3258 10.029 15.7855 10.2747 15.626 10.3496C15.8734 10.6621 16.2591 10.8184 16.7832 10.8184C17.1315 10.8184 17.4473 10.7158 17.7305 10.5107C18.0072 10.3089 18.2008 10.0485 18.3115 9.72949C18.4059 9.46257 18.5947 9.3291 18.8779 9.3291C19.0798 9.3291 19.2409 9.41374 19.3613 9.58301C19.4362 9.68717 19.4736 9.79622 19.4736 9.91016C19.4736 9.97852 19.4606 10.0485 19.4346 10.1201C19.2425 10.6768 18.9056 11.126 18.4238 11.4678C17.9355 11.8226 17.3887 12 16.7832 12C16.0085 12 15.346 11.7249 14.7959 11.1748C14.2458 10.6247 13.9707 9.96224 13.9707 9.1875C13.9707 8.41276 14.2458 7.75033 14.7959 7.2002C15.346 6.65007 16.0085 6.375 16.7832 6.375C17.3431 6.375 17.8542 6.52799 18.3164 6.83398C18.7754 7.13346 19.1156 7.52734 19.3369 8.01562ZM21.5537 11.4092C21.5537 11.5752 21.4951 11.7135 21.3779 11.8242C21.2607 11.9414 21.1224 12 20.9629 12H20.9482C20.7887 12 20.6504 11.9414 20.5332 11.8242C20.416 11.7135 20.3574 11.5752 20.3574 11.4092V8.72363C20.3574 8.0791 20.5869 7.52572 21.0459 7.06348C21.5049 6.60449 22.0583 6.375 22.7061 6.375C23.4808 6.375 24.0651 6.63216 24.459 7.14648C24.8496 6.63216 25.4323 6.375 26.207 6.375C26.8548 6.375 27.4082 6.60449 27.8672 7.06348C28.3262 7.52572 28.5557 8.0791 28.5557 8.72363V11.4092C28.5557 11.5719 28.4987 11.7103 28.3848 11.8242C28.2676 11.9414 28.1276 12 27.9648 12H27.9551C27.7891 12 27.6507 11.9414 27.54 11.8242C27.4229 11.7135 27.3643 11.5752 27.3643 11.4092V8.72363C27.3643 8.40462 27.252 8.13281 27.0273 7.9082C26.8027 7.68359 26.5293 7.57129 26.207 7.57129C25.888 7.57129 25.6162 7.68359 25.3916 7.9082C25.167 8.13281 25.0547 8.40462 25.0547 8.72363V11.4092C25.0547 11.5752 24.9961 11.7135 24.8789 11.8242C24.7682 11.9414 24.6299 12 24.4639 12H24.4541C24.2913 12 24.1514 11.9414 24.0342 11.8242C23.917 11.7135 23.8584 11.5752 23.8584 11.4092V8.72363C23.8584 8.40462 23.7461 8.13281 23.5215 7.9082C23.2969 7.68359 23.0251 7.57129 22.7061 7.57129C22.387 7.57129 22.1152 7.68359 21.8906 7.9082C21.666 8.13281 21.5537 8.40462 21.5537 8.72363V11.4092ZM30.3232 6.375C30.4893 6.375 30.6276 6.43359 30.7383 6.55078C30.8555 6.66797 30.9141 6.80794 30.9141 6.9707V11.4092C30.9141 11.5752 30.8555 11.7135 30.7383 11.8242C30.6276 11.9414 30.4893 12 30.3232 12H30.3135C30.1507 12 30.0107 11.9414 29.8936 11.8242C29.7764 11.7135 29.7178 11.5752 29.7178 11.4092V6.9707C29.7178 6.80794 29.7764 6.66797 29.8936 6.55078C30.0107 6.43359 30.1507 6.375 30.3135 6.375H30.3232ZM30.3184 5.74023C30.1296 5.74023 29.9684 5.6735 29.835 5.54004C29.7015 5.40658 29.6348 5.24544 29.6348 5.05664C29.6348 4.87109 29.7015 4.71159 29.835 4.57812C29.9684 4.44466 30.1296 4.37793 30.3184 4.37793C30.5039 4.37793 30.6634 4.44466 30.7969 4.57812C30.9336 4.70833 31.002 4.86784 31.002 5.05664C31.002 5.2487 30.9336 5.40983 30.7969 5.54004C30.6634 5.6735 30.5039 5.74023 30.3184 5.74023ZM33.2725 9.6416C33.2725 9.96387 33.3848 10.2389 33.6094 10.4668C33.8372 10.6914 34.1139 10.8037 34.4395 10.8037C34.7617 10.8037 35.0368 10.6914 35.2646 10.4668C35.4893 10.2389 35.6016 9.96387 35.6016 9.6416V6.9707C35.6016 6.80794 35.6602 6.66797 35.7773 6.55078C35.8945 6.43359 36.0345 6.375 36.1973 6.375H36.207C36.373 6.375 36.5114 6.43359 36.6221 6.55078C36.7393 6.66797 36.7979 6.80794 36.7979 6.9707V9.6416C36.7979 10.2894 36.5667 10.8444 36.1045 11.3066C35.6423 11.7689 35.0872 12 34.4395 12C33.7884 12 33.2318 11.7689 32.7695 11.3066C32.3073 10.8444 32.0762 10.2894 32.0762 9.6416V6.9707C32.0762 6.80794 32.1348 6.66797 32.252 6.55078C32.3691 6.43359 32.5075 6.375 32.667 6.375H32.6816C32.8411 6.375 32.9795 6.43359 33.0967 6.55078C33.2139 6.66797 33.2725 6.80794 33.2725 6.9707V9.6416ZM38.9756 11.4092C38.9756 11.5752 38.917 11.7135 38.7998 11.8242C38.6826 11.9414 38.5443 12 38.3848 12H38.3701C38.2106 12 38.0723 11.9414 37.9551 11.8242C37.8379 11.7135 37.7793 11.5752 37.7793 11.4092V8.72363C37.7793 8.0791 38.0088 7.52572 38.4678 7.06348C38.9268 6.60449 39.4801 6.375 40.1279 6.375C40.9027 6.375 41.487 6.63216 41.8809 7.14648C42.2715 6.63216 42.8542 6.375 43.6289 6.375C44.2767 6.375 44.8301 6.60449 45.2891 7.06348C45.748 7.52572 45.9775 8.0791 45.9775 8.72363V11.4092C45.9775 11.5719 45.9206 11.7103 45.8066 11.8242C45.6895 11.9414 45.5495 12 45.3867 12H45.377C45.2109 12 45.0726 11.9414 44.9619 11.8242C44.8447 11.7135 44.7861 11.5752 44.7861 11.4092V8.72363C44.7861 8.40462 44.6738 8.13281 44.4492 7.9082C44.2246 7.68359 43.9512 7.57129 43.6289 7.57129C43.3099 7.57129 43.0381 7.68359 42.8135 7.9082C42.5889 8.13281 42.4766 8.40462 42.4766 8.72363V11.4092C42.4766 11.5752 42.418 11.7135 42.3008 11.8242C42.1901 11.9414 42.0518 12 41.8857 12H41.876C41.7132 12 41.5732 11.9414 41.4561 11.8242C41.3389 11.7135 41.2803 11.5752 41.2803 11.4092V8.72363C41.2803 8.40462 41.168 8.13281 40.9434 7.9082C40.7188 7.68359 40.4469 7.57129 40.1279 7.57129C39.8089 7.57129 39.5371 7.68359 39.3125 7.9082C39.0879 8.13281 38.9756 8.40462 38.9756 8.72363V11.4092Z",
                            fill: "white"
                        })]
                    }))
                }))
        },
        8927: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return u
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(99534),
                i = n(85893),
                l = (n(67294), n(94184)),
                o = n.n(l),
                c = n(15371),
                u = function(e) {
                    var t = e.className,
                        n = e.children,
                        l = (0, s.Z)(e, ["className", "children"]);
                    return (0, i.jsx)("div", (0, a.Z)((0, r.Z)({
                        className: o()(t, "grid grid-cols-7 text-xs", c.Cj.label3)
                    }, l), {
                        children: n
                    }))
                }
        },
        82497: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return l
                }
            });
            var r = n(85893),
                a = (n(67294), n(94184)),
                s = n.n(a),
                i = n(15371),
                l = function(e) {
                    var t = e.children;
                    return (0, r.jsx)("span", {
                        className: s()("h-7 w-7", i.Cj.bgGreenStandard, i.Cj.bgGreen3Hover, "text-white", "flex items-center justify-center rounded-full"),
                        children: t
                    })
                }
        },
        54303: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return l
                }
            });
            var r = n(85893),
                a = (n(67294), n(94184)),
                s = n.n(a),
                i = n(15371),
                l = function(e) {
                    var t = e.children;
                    return (0, r.jsx)("span", {
                        className: s()(i.Cj.label4, "pointer-events-none flex h-[26px] w-8 items-center justify-center"),
                        children: t
                    })
                }
        },
        50409: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return d
                }
            });
            var r = n(14924),
                a = n(26042),
                s = n(69396),
                i = n(99534),
                l = n(85893),
                o = (n(67294), n(94184)),
                c = n.n(o),
                u = n(15371),
                d = function(e) {
                    var t, n = e.children,
                        o = (0, i.Z)(e, ["children"]),
                        d = o.disabled;
                    return (0, l.jsx)("button", (0, s.Z)((0, a.Z)({
                        className: c()("focus:outline-none", (t = {}, (0, r.Z)(t, u.Cj.label2, !d), (0, r.Z)(t, u.Cj.label4, d), t))
                    }, o), {
                        children: n
                    }))
                }
        },
        134: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return v
                }
            });
            var r = n(14924),
                a = n(26042),
                s = n(99534),
                i = n(85893),
                l = n(99603),
                o = n(12922),
                c = {
                    "12px": "text-[12px]",
                    "14px": "text-[14px]",
                    "16px": "text-[16px]",
                    "20px": "text-[20px]",
                    "24px": "text-[24px]",
                    "32px": "text-[32px]"
                },
                u = {
                    "12px": "before:h-3",
                    "14px": "before:h-3.5",
                    "16px": "before:h-4",
                    "20px": "before:h-5",
                    "24px": "before:h-6",
                    "32px": "before:h-8"
                },
                d = {
                    "12px": "before:w-3",
                    "14px": "before:w-3.5",
                    "16px": "before:w-4",
                    "20px": "before:w-5",
                    "24px": "before:w-6",
                    "32px": "before:w-8"
                },
                m = {
                    "12px": "p-[1px]",
                    "14px": "p-[1px]",
                    "16px": "p-0.5",
                    "20px": "p-0.5",
                    "24px": "p-[3px]",
                    "32px": "p-1"
                },
                f = {
                    "12px": "p-0.5",
                    "14px": "p-[3px]",
                    "16px": "p-1",
                    "20px": "p-[5px]",
                    "24px": "p-1.5",
                    "32px": "p-2"
                },
                v = function(e) {
                    var t, n = e.variant,
                        v = void 0 === n ? "14px" : n,
                        x = e.padding,
                        p = void 0 === x ? "square" : x,
                        h = e.className,
                        g = (0, s.Z)(e, ["variant", "padding", "className"]);
                    return (0, i.jsx)("div", {
                        className: (0, o.yI)("relative", c[v], "leading-[normal]", (t = {}, (0, r.Z)(t, m[v], "square" === p), (0, r.Z)(t, f[v], "roomy" === p), t), "before:block", u[v], d[v], h),
                        children: (0, i.jsx)(l.G, (0, a.Z)({
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        }, g))
                    })
                }
        },
        41435: function(e, t, n) {
            "use strict";
            n.d(t, {
                J2: function() {
                    return x
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(99534),
                i = n(10253),
                l = n(85893),
                o = n(67294),
                c = n(86419),
                u = n(12922),
                d = n(9962),
                m = c.fC,
                f = c.xz,
                v = o.forwardRef((function(e, t) {
                    var n = e.className,
                        a = e.align,
                        i = void 0 === a ? "center" : a,
                        o = e.sideOffset,
                        d = void 0 === o ? 8 : o,
                        m = e.collisionPadding,
                        f = void 0 === m ? 8 : m,
                        v = (0, s.Z)(e, ["className", "align", "sideOffset", "collisionPadding"]);
                    return (0, l.jsx)(c.h_, {
                        children: (0, l.jsx)(c.VY, (0, r.Z)({
                            ref: t,
                            align: i,
                            sideOffset: d,
                            collisionPadding: f,
                            className: (0, u.yI)("bg-sd-popover text-sd-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-sd-md border-sd-border z-modal border p-4 shadow-md outline-none", n),
                            onOpenAutoFocus: function(e) {
                                return e.preventDefault()
                            }
                        }, v))
                    })
                }));
            v.displayName = c.VY.displayName;
            var x = function(e) {
                var t, n = e.defaultOpen,
                    c = e.open,
                    x = e.onOpenChange,
                    p = e.modal,
                    h = e.children,
                    g = e.content,
                    j = e.trigger,
                    b = void 0 === j ? "click" : j,
                    y = e.openDelay,
                    C = void 0 === y ? 100 : y,
                    w = e.closeDelay,
                    N = void 0 === w ? 300 : w,
                    k = e.className,
                    S = e.hideWhenDetached,
                    _ = (0, s.Z)(e, ["defaultOpen", "open", "onOpenChange", "modal", "children", "content", "trigger", "openDelay", "closeDelay", "className", "hideWhenDetached"]),
                    Z = o.useRef(null),
                    T = (0, d.s)(Z.current, {
                        root: null,
                        threshold: 0
                    }),
                    I = null !== (t = null === T || void 0 === T ? void 0 : T.isIntersecting) && void 0 !== t && t,
                    F = S && !I,
                    L = (0, i.Z)(o.useState(null), 2),
                    O = L[0],
                    E = L[1],
                    R = (0, i.Z)(o.useState(null), 2),
                    V = R[0],
                    A = R[1],
                    M = o.useCallback((function() {
                        V && clearTimeout(V);
                        var e = setTimeout((function() {
                            return null === x || void 0 === x ? void 0 : x(!0)
                        }), C);
                        E(e)
                    }), [V, x, C]),
                    B = o.useCallback((function() {
                        O && clearTimeout(O);
                        var e = setTimeout((function() {
                            return null === x || void 0 === x ? void 0 : x(!1)
                        }), N);
                        A(e)
                    }), [O, x, N]),
                    P = o.useCallback((function(e) {
                        return e.preventDefault()
                    }), []);
                o.useEffect((function() {
                    return function() {
                        O && clearTimeout(O), V && clearTimeout(V)
                    }
                }), [O, V]);
                var D = o.useMemo((function() {
                    return "hover" === b ? {
                        onMouseEnter: M,
                        onMouseLeave: B,
                        onClick: P
                    } : {}
                }), [M, B, P, b]);
                return (0, l.jsxs)(m, {
                    defaultOpen: n,
                    open: c,
                    onOpenChange: x,
                    modal: p,
                    children: [(0, l.jsx)(f, (0, a.Z)((0, r.Z)({
                        asChild: !0,
                        ref: Z
                    }, D), {
                        children: h
                    })), (0, l.jsx)(v, (0, a.Z)((0, r.Z)({
                        className: (0, u.yI)(k, {
                            hidden: F
                        }),
                        hideWhenDetached: S
                    }, _, D), {
                        children: g
                    }))]
                })
            }
        },
        80183: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return s
                }
            });
            var r = n(85893),
                a = n(12922),
                s = function(e) {
                    var t = e.percentage,
                        n = e.size,
                        s = void 0 === n ? "md" : n,
                        i = e.customThickness,
                        l = e.variant,
                        o = void 0 === l ? "default" : l,
                        c = e.lineCap,
                        u = void 0 === c ? "round" : c,
                        d = e.className,
                        m = e.barClassName,
                        f = e.bgClassName,
                        v = e.children,
                        x = Math.max(Math.min(t, 100), 0),
                        p = 11;
                    switch (s) {
                        case "sm":
                            p = 12.5;
                            break;
                        case "lg":
                            p = 5
                    }
                    p = null !== i && void 0 !== i ? i : p;
                    var h = 2.64 * x;
                    return (0, r.jsxs)("div", {
                        className: (0, a.yI)("relative flex items-center justify-center", {
                            "h-3 w-3": "sm" === s,
                            "h-4.5 w-4.5": "md" === s,
                            "h-[100px] w-[100px]": "lg" === s
                        }, d),
                        children: [(0, r.jsxs)("svg", {
                            viewBox: "0 0 100 100",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "absolute left-0 top-0 h-full w-full fill-transparent",
                            style: {
                                strokeWidth: p
                            },
                            children: [(0, r.jsx)("defs", {
                                children: (0, r.jsxs)("linearGradient", {
                                    x1: "1",
                                    y1: "0",
                                    x2: "0",
                                    y2: "0",
                                    id: "gradientProgressCircleInfo",
                                    children: [(0, r.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#007AFF"
                                    }), (0, r.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#73B6FF"
                                    })]
                                })
                            }), (0, r.jsx)("circle", {
                                cx: 50,
                                cy: 50,
                                r: 42,
                                className: (0, a.yI)("stroke-sd-primary/20", f)
                            }), (0, r.jsx)("circle", {
                                cx: 50,
                                cy: 50,
                                r: 42,
                                className: (0, a.yI)({
                                    "stroke-sd-primary": "default" === o,
                                    "stroke-[url(#gradientProgressCircleInfo)]": "info" === o,
                                    "stroke-sd-easy": "easy" === o,
                                    "stroke-sd-medium": "medium" === o,
                                    "stroke-sd-hard": "hard" === o
                                }, m),
                                style: {
                                    strokeLinecap: "flat" === u || 0 === x ? "initial" : "round",
                                    strokeDasharray: "".concat(h, " ").concat(264 - h),
                                    strokeDashoffset: 66
                                }
                            })]
                        }), v]
                    })
                }
        },
        93531: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return u
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(99534),
                i = n(85893),
                l = n(67294),
                o = n(37483),
                c = n(12922),
                u = l.forwardRef((function(e, t) {
                    var n = e.className,
                        l = e.barClassName,
                        u = e.value,
                        d = (0, s.Z)(e, ["className", "barClassName", "value"]);
                    return (0, i.jsx)(o.fC, (0, a.Z)((0, r.Z)({
                        ref: t,
                        className: (0, c.yI)("bg-sd-primary/20 relative h-2 w-full overflow-hidden rounded-full", n)
                    }, d), {
                        children: (0, i.jsx)(o.z$, {
                            className: (0, c.yI)("bg-sd-primary h-full flex-1 rounded-full transition-all", l),
                            style: {
                                width: "".concat(u, "%")
                            }
                        })
                    }))
                }));
            u.displayName = o.fC.displayName
        },
        54841: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return l
                }
            });
            var r = n(26042),
                a = n(99534),
                s = n(85893),
                i = n(12922);

            function l(e) {
                var t = e.className,
                    n = (0, a.Z)(e, ["className"]);
                return (0, s.jsx)("div", (0, r.Z)({
                    className: (0, i.yI)("bg-sd-primary/10 rounded-sd-md animate-pulse", t)
                }, n))
            }
        },
        62758: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return p
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(99534),
                i = n(85893),
                l = n(67294),
                o = n(66908),
                c = n(12922),
                u = o.zt,
                d = o.fC,
                m = o.h_,
                f = o.xz,
                v = l.forwardRef((function(e, t) {
                    var n = e.className,
                        l = e.sideOffset,
                        u = void 0 === l ? 6 : l,
                        d = e.collisionPadding,
                        m = void 0 === d ? 8 : d,
                        f = e.hasBorder,
                        v = e.children,
                        x = (0, s.Z)(e, ["className", "sideOffset", "collisionPadding", "hasBorder", "children"]);
                    return (0, i.jsx)(o.VY, (0, a.Z)((0, r.Z)({
                        ref: t,
                        sideOffset: u,
                        collisionPadding: m,
                        className: (0, c.yI)("bg-sd-popover text-sd-popover-foreground rounded-sd-md z-modal text-xs shadow", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", "data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1", "max-w-[300px]", {
                            "border-sd-border border": f
                        }, n)
                    }, x), {
                        children: (0, i.jsx)("div", {
                            className: "rounded-sd-md relative px-3 py-1.5",
                            children: v
                        })
                    }))
                }));
            v.displayName = o.VY.displayName;
            var x = l.forwardRef((function(e, t) {
                var n = e.className,
                    l = e.hasBorder,
                    u = (0, s.Z)(e, ["className", "hasBorder"]);
                return (0, i.jsx)(o.Eh, (0, a.Z)((0, r.Z)({
                    ref: t,
                    asChild: !0
                }, u), {
                    children: (0, i.jsx)("div", {
                        className: (0, c.yI)("absolute h-2 w-4 -translate-x-1/2 overflow-hidden", n),
                        children: (0, i.jsx)("div", {
                            className: (0, c.yI)("bg-sd-popover absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-br-[1px] shadow", {
                                "border-sd-border border": l
                            })
                        })
                    })
                }))
            }));
            x.displayName = o.Eh.displayName;
            var p = function(e) {
                var t, n = e.defaultOpen,
                    l = e.open,
                    o = e.onOpenChange,
                    c = e.delayDuration,
                    p = void 0 === c ? 100 : c,
                    h = e.disableHoverableContent,
                    g = void 0 === h || h,
                    j = e.children,
                    b = e.label,
                    y = e.hasBorder,
                    C = void 0 === y || y,
                    w = e.hasArrow,
                    N = e.arrowClassName,
                    k = e.placement,
                    S = void 0 === k ? "bottom" : k,
                    _ = e.isDisabled,
                    Z = (0, s.Z)(e, ["defaultOpen", "open", "onOpenChange", "delayDuration", "disableHoverableContent", "children", "label", "hasBorder", "hasArrow", "arrowClassName", "placement", "isDisabled"]),
                    T = S.split("-")[0],
                    I = null !== (t = S.split("-")[1]) && void 0 !== t ? t : "center";
                return _ || !b ? (0, i.jsx)(i.Fragment, {
                    children: j
                }) : (0, i.jsx)(u, {
                    children: (0, i.jsxs)(d, {
                        defaultOpen: n,
                        open: l,
                        onOpenChange: o,
                        delayDuration: p,
                        disableHoverableContent: g,
                        children: [(0, i.jsx)(f, {
                            asChild: !0,
                            children: j
                        }), (0, i.jsx)(m, {
                            children: (0, i.jsxs)(v, (0, a.Z)((0, r.Z)({
                                side: T,
                                align: I,
                                hasBorder: C
                            }, Z), {
                                children: [b, w && (0, i.jsx)(x, {
                                    className: N,
                                    hasBorder: C
                                })]
                            }))
                        })]
                    })
                })
            }
        },
        28835: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return r
                },
                Z: function() {
                    return c
                }
            });
            var r, a = n(14924),
                s = n(85893),
                i = n(67294),
                l = n(12922),
                o = n(15371);
            ! function(e) {
                e.BORDER = "border", e.CARD = "card", e.DROPDOWN = "dropdown"
            }(r || (r = {}));
            var c = i.forwardRef((function(e, t) {
                var n = e.className,
                    i = e.children,
                    c = e.borderType,
                    u = void 0 === c ? r.CARD : c;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, l.yI)((0, a.Z)({}, "".concat(o.Cj.dividerBorder2, " border"), u === r.BORDER), o.Cj.bgLayer1, o.$e.down01, "rounded-lg", n),
                    children: i
                })
            }))
        },
        7061: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return l
                }
            });
            var r = n(26042),
                a = n(99534),
                s = n(85893),
                i = (n(67294), n(12922)),
                l = function(e) {
                    var t = e.orientation,
                        n = void 0 === t ? "horizontal" : t,
                        l = e.className,
                        o = (0, a.Z)(e, ["orientation", "className"]);
                    return "vertical" !== n ? (0, s.jsx)("hr", (0, r.Z)({
                        className: (0, i.yI)("border-divider-2 dark:border-dark-divider-2", l)
                    }, o)) : (0, s.jsx)("div", (0, r.Z)({
                        className: (0, i.yI)("bg-divider-2 dark:bg-dark-divider-2 h-full w-px", l)
                    }, o))
                }
        },
        43822: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return x
                }
            });
            var r = n(14924),
                a = n(26042),
                s = n(69396),
                i = n(99534),
                l = n(85893),
                o = n(67294),
                c = n(12922),
                u = n(15371),
                d = n(68352),
                m = n(81548),
                f = n.n(m),
                v = function(e) {
                    var t = e.icon,
                        n = e.onClick,
                        r = e.className,
                        i = o.isValidElement(t),
                        u = i ? t.props : {},
                        d = i ? o.cloneElement(t, Object.assign({}, (0, s.Z)((0, a.Z)({}, u), {
                            className: (0, c.yI)("w-4 h-4", u.className)
                        }))) : o.createElement(t, {
                            className: "w-4 h-4"
                        });
                    return (0, l.jsx)("div", {
                        className: (0, c.yI)("text-gray-6 dark:text-dark-gray-6 absolute inset-y-0 flex items-center pl-3", {
                            "pointer-events-none": !i
                        }, r),
                        onClick: n,
                        children: (0, l.jsx)("span", {
                            children: d
                        })
                    })
                },
                x = o.forwardRef((function(e, t) {
                    var n, s = e.leftIcon,
                        o = e.leftIconClassName,
                        m = e.leftIconClick,
                        x = e.rightIcon,
                        p = e.rightIconClassName,
                        h = e.rightIconClick,
                        g = e.variant,
                        j = void 0 === g ? "default" : g,
                        b = e.className,
                        y = e.disabled,
                        C = e.wrapperClassName,
                        w = e.autoComplete,
                        N = void 0 === w ? "off" : w,
                        k = e.handleClear,
                        S = e.value,
                        _ = (0, i.Z)(e, ["leftIcon", "leftIconClassName", "leftIconClick", "rightIcon", "rightIconClassName", "rightIconClick", "variant", "className", "disabled", "wrapperClassName", "autoComplete", "handleClear", "value"]),
                        Z = !!s,
                        T = !!x,
                        I = !!k && !!S;
                    return (0, l.jsxs)("div", {
                        className: (0, c.yI)(" relative rounded-md ".concat(f()["input-container"]), C),
                        children: [Z ? (0, l.jsx)(v, {
                            icon: s,
                            onClick: m,
                            className: (0, c.yI)("left-0", o)
                        }) : null, (0, l.jsx)("input", (0, a.Z)({
                            ref: t,
                            className: (0, c.yI)("block w-full rounded-md pr-3 leading-5 outline-none", u.Cj.placeholderLabel4, (n = {
                                "border-none py-1.5": "default" === j
                            }, (0, r.Z)(n, u.Cj.label2, "default" === j), (0, r.Z)(n, u.Cj.fill3, "default" === j), (0, r.Z)(n, "focus:bg-fill-2 dark:focus:bg-dark-fill-2", "default" === j), n), {
                                "border-green-s focus:shadow-form border py-[5px] transition-all": "border" === j
                            }, {
                                "pl-3": !Z,
                                "pl-9": Z,
                                "pr-3": !T,
                                "pr-12": T
                            }, b),
                            disabled: y,
                            autoComplete: N,
                            value: S
                        }, _)), T ? (0, l.jsx)(v, {
                            icon: x,
                            onClick: h,
                            className: (0, c.yI)("right-4", (0, r.Z)({}, "".concat(f()["right-icon"]), I), (0, r.Z)({}, u.Cj.label4, y), p)
                        }) : null, I ? (0, l.jsx)(v, {
                            icon: (0, l.jsx)(d.U, {
                                className: (0, c.yI)("hidden cursor-pointer ".concat(f()["clear-icon"], " right-3"))
                            }),
                            onClick: function(e) {
                                e.stopPropagation(), k()
                            },
                            className: (0, c.yI)("right-4", p)
                        }) : null]
                    })
                }))
        },
        26622: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return g
                }
            });
            var r = n(29815),
                a = n(85893),
                s = n(67294),
                i = n(12922),
                l = n(15371),
                o = n(75247),
                c = n(67222),
                u = n(16142),
                d = n(83210),
                m = n(14924),
                f = n(26042),
                v = n(69396),
                x = n(99534),
                p = {
                    pagination: "flex flex-nowrap items-center space-x-2",
                    itemBase: "flex items-center justify-center px-3 h-8 rounded select-none focus:outline-none",
                    itemDefault: "bg-fill-3 dark:bg-dark-fill-3 text-label-2 dark:text-dark-label-2",
                    itemDisabled: "disabled:opacity-40 disabled:pointer-events-none",
                    itemHover: "hover:bg-fill-2 dark:hover:bg-dark-fill-2",
                    itemActive: "pointer-events-none bg-paper dark:bg-dark-gray-5 text-label-1 dark:text-dark-label-1 ".concat(l.eq.card)
                },
                h = function(e) {
                    var t, n = e.children,
                        r = e.className,
                        s = e.activeClassName,
                        l = e.current,
                        o = e.page,
                        c = e.onClickHandler,
                        u = (0, x.Z)(e, ["children", "className", "activeClassName", "current", "page", "onClickHandler"]);
                    return (0, a.jsx)("button", (0, v.Z)((0, f.Z)({
                        className: (0, i.yI)(p.itemBase, (t = {}, (0, m.Z)(t, p.itemDefault, !l), (0, m.Z)(t, p.itemHover, !l), (0, m.Z)(t, p.itemActive, l), (0, m.Z)(t, p.itemDisabled, u.disabled), (0, m.Z)(t, null !== s && void 0 !== s ? s : "", l), t), r)
                    }, u), {
                        onClick: function() {
                            c && c(o)
                        },
                        children: o || n
                    }))
                },
                g = function(e) {
                    var t = e.className,
                        n = e.currentPage,
                        m = e.totalItems,
                        f = e.onChange,
                        v = e.pageItemClassName,
                        x = e.activePageItemClassName,
                        g = e.chevronClassName,
                        j = e.arrowButtonClassName,
                        b = e.itemsPerPage,
                        y = void 0 === b ? 50 : b,
                        C = e.maxPageItems,
                        w = void 0 === C ? 8 : C,
                        N = e.disabled,
                        k = void 0 !== N && N,
                        S = e.isSimple,
                        _ = void 0 !== S && S,
                        Z = Math.ceil(m / y) || 0,
                        T = w > Z ? Z : w,
                        I = (0, r.Z)(Array(T)).map((function(e, t) {
                            return function(e, t, n, r) {
                                var a = (n = n < 1 ? 1 : n) - 2,
                                    s = a,
                                    i = r - a + 1,
                                    l = r - n,
                                    o = t - Math.ceil((n - 4) / 2) - 2,
                                    c = n - 1;
                                return 1 === n ? t : n === 1 / 0 || r <= n ? e + 1 : n < 5 ? t + c > r ? l + e + 1 : t + e : 0 === e ? 1 : e + 1 === n ? r : t < s ? e < s ? e + 1 : "gap" : t > i ? e > 1 ? l + e + 1 : "gap" : 1 === e || e + 1 === c ? "gap" : e + o + 1
                            }(t, n, w, Z)
                        })),
                        F = n > 1,
                        L = n < Z,
                        O = (0, s.useCallback)((function(e) {
                            null != e && f(e)
                        }), [f]),
                        E = function() {
                            F && O(n - 1)
                        },
                        R = function() {
                            L && O(n + 1)
                        };
                    return (0, s.useEffect)((function() {
                        n > Z && Z ? O(Z) : n || O(1)
                    }), [Z, O, n]), _ ? (0, a.jsxs)("nav", {
                        role: "navigation",
                        className: (0, i.yI)(t, p.pagination),
                        children: [(0, a.jsx)(d.z, {
                            "aria-label": "prev",
                            disabled: !F || k,
                            onClick: E,
                            variant: "ghost",
                            className: "h-[30px] p-2",
                            children: (0, a.jsx)(o.e, {
                                className: (0, i.yI)(l.Cj.label2, g)
                            })
                        }, "prev"), (0, a.jsxs)("div", {
                            className: "text-sd-muted-foreground",
                            children: [(0, a.jsx)("span", {
                                className: "text-sd-foreground",
                                children: n
                            }), "/", Z]
                        }), (0, a.jsx)(d.z, {
                            "aria-label": "next",
                            disabled: !L || k,
                            onClick: R,
                            variant: "ghost",
                            className: "h-[30px] p-2",
                            children: (0, a.jsx)(c.V, {
                                className: (0, i.yI)(l.Cj.label2, g)
                            })
                        }, "next")]
                    }) : (0, a.jsxs)("nav", {
                        role: "navigation",
                        className: (0, i.yI)(p.pagination, t),
                        children: [(0, a.jsx)(h, {
                            "aria-label": "prev",
                            disabled: !F || k,
                            onClickHandler: E,
                            className: (0, i.yI)(v, j),
                            children: (0, a.jsx)(o.e, {
                                className: (0, i.yI)(l.Cj.label2, g)
                            })
                        }, "prev"), I.map((function(e, t) {
                            return "gap" === e ? (0, a.jsx)(h, {
                                "aria-label": "gap",
                                disabled: !0,
                                className: v,
                                children: (0, a.jsx)(u.q, {
                                    className: l.Cj.label2
                                })
                            }, t) : (0, a.jsx)(h, {
                                current: e === n,
                                page: e,
                                onClickHandler: O,
                                className: v,
                                activeClassName: x,
                                disabled: k
                            }, t)
                        })), (0, a.jsx)(h, {
                            "aria-label": "next",
                            disabled: !L || k,
                            onClickHandler: R,
                            className: (0, i.yI)(v, j),
                            children: (0, a.jsx)(c.V, {
                                className: (0, i.yI)(l.Cj.label2, g)
                            })
                        }, "next")]
                    })
                }
        },
        77648: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return b
                }
            });
            var r = n(14924),
                a = n(85893),
                s = n(67294),
                i = n(94184),
                l = n.n(i),
                o = n(15371),
                c = "bg-blue-s dark:bg-dark-blue-s",
                u = "bg-brand-orange dark:bg-dark-brand-orange",
                d = "bg-olive dark:bg-dark-olive",
                m = "bg-green-s dark:bg-green-s",
                f = "bg-green-1 dark:bg-dark-green-1",
                v = "bg-yellow dark:bg-dark-yellow",
                x = "bg-yellow-1 dark:bg-dark-yellow-1",
                p = "bg-pink dark:bg-dark-pink",
                h = "bg-red-s dark:bg-dark-red-s",
                g = "bg-red-1 dark:bg-dark-red-1",
                j = "bg-gradient-to-r from-[#f8c26f] to-[#d89211]",
                b = s.forwardRef((function(e, t) {
                    var n, s, i = e.percentage,
                        b = e.color,
                        y = void 0 === b ? "orange" : b,
                        C = e.backgroundColor,
                        w = e.className,
                        N = void 0 === w ? "" : w,
                        k = e.bgClassName,
                        S = void 0 === k ? "" : k,
                        _ = e.flagNode;
                    return (0, a.jsxs)("div", {
                        ref: t,
                        className: l()("relative h-2 w-full overflow-hidden rounded-full", N),
                        children: [(0, a.jsx)("div", {
                            className: l()("absolute h-full w-full", (n = {}, (0, r.Z)(n, o.Cj.fill3, !C), (0, r.Z)(n, f, "lightGreen" === C), (0, r.Z)(n, x, "lightYellow" === C), (0, r.Z)(n, g, "lightRed" === C), n), S)
                        }), (0, a.jsx)("div", {
                            className: l()("absolute h-full rounded-full", "transition-all duration-300 ease-out", (s = {}, (0, r.Z)(s, u, "orange" === y), (0, r.Z)(s, c, "blue" === y), (0, r.Z)(s, d, "green" === y), (0, r.Z)(s, m, "greenS" === y), (0, r.Z)(s, v, "yellow" === y), (0, r.Z)(s, p, "red" === y), (0, r.Z)(s, h, "darkRed" === y), (0, r.Z)(s, j, "gradientYellow" === y), s)),
                            style: {
                                width: "".concat(i, "%")
                            },
                            children: _
                        })]
                    })
                }))
        },
        7958: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return m
                }
            });
            var r = n(14924),
                a = n(85893),
                s = n(67294),
                i = n(64729),
                l = n(84539),
                o = n(36806),
                c = n(66360),
                u = n(15371),
                d = n(12922),
                m = function(e) {
                    var t = e.options,
                        n = e.selected,
                        m = e.setSelected,
                        f = e.dropdownClassName,
                        v = e.optionClassName,
                        x = e.activeClassName,
                        p = e.selectedClassName,
                        h = e.iconClassName,
                        g = e.buttonClassName,
                        j = e.buttonChevronClassName,
                        b = e.buttonContainerClassName,
                        y = e.renderSelected;
                    return (0, a.jsx)(i.R, {
                        value: n,
                        onChange: m,
                        children: function(e) {
                            var m = e.open;
                            return (0, a.jsxs)("div", {
                                className: (0, d.yI)("relative", b),
                                children: [(0, a.jsxs)(i.R.Button, {
                                    className: (0, d.yI)("flex cursor-pointer items-center rounded px-3 py-1.5 text-left focus:outline-none", "whitespace-nowrap", u.Cj.fill3, u.Cj.label2, u.Cj.fill2Hover, "active:bg-fill-3 dark:active:bg-dark-fill-3", g),
                                    children: [y ? y(n) : null === n || void 0 === n ? void 0 : n.text, (0, a.jsx)(o.C, {
                                        className: (0, d.yI)("pointer-events-none ml-3", j),
                                        "aria-hidden": "true"
                                    })]
                                }), (0, a.jsx)(l.u, {
                                    show: m,
                                    as: s.Fragment,
                                    leave: "transition ease-in duration-100",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, a.jsx)(i.R.Options, {
                                        static: !0,
                                        style: {
                                            filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.04)) drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.12))"
                                        },
                                        className: (0, d.yI)("z-dropdown absolute mt-1 max-h-56 overflow-auto rounded-lg p-2 focus:outline-none", u.eq.commandBar, u.Cj.bgOverlay3, f),
                                        children: t.map((function(e, t) {
                                            return (0, a.jsx)(i.R.Option, {
                                                className: function(e) {
                                                    var t = e.active;
                                                    return (0, d.yI)(u.Cj.label1, "relative flex h-8 cursor-pointer select-none py-1.5 pl-2", v, (0, r.Z)({}, "rounded ".concat(u.Cj.fill4, " ").concat(x), t))
                                                },
                                                value: e,
                                                children: function(t) {
                                                    var n = t.selected;
                                                    return (0, a.jsxs)(a.Fragment, {
                                                        children: [(0, a.jsx)("div", {
                                                            className: (0, d.yI)("flex h-5 flex-1 items-center pr-2", (0, r.Z)({}, p || "", n)),
                                                            children: (0, a.jsx)("div", {
                                                                className: "whitespace-nowrap",
                                                                children: e.text
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            className: (0, d.yI)("text-blue dark:text-dark-blue", "flex items-center pr-2", {
                                                                visible: n,
                                                                invisible: !n
                                                            }),
                                                            children: (0, a.jsx)(c.N, {
                                                                className: (0, d.yI)("h-5 w-5", h),
                                                                "aria-hidden": "true"
                                                            })
                                                        })]
                                                    })
                                                }
                                            }, t)
                                        }))
                                    })
                                })]
                            })
                        }
                    })
                }
        },
        46398: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return i
                }
            });
            var r = n(85893),
                a = (n(67294), n(94184)),
                s = n.n(a),
                i = function(e) {
                    var t = e.className,
                        n = e.children;
                    return (0, r.jsx)("div", {
                        className: s()("animate-pulse", t),
                        children: n
                    })
                }
        },
        27415: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return i
                }
            });
            var r = n(85893),
                a = (n(67294), n(12922)),
                s = n(15371),
                i = function(e) {
                    var t = e.className,
                        n = e.style;
                    return (0, r.jsx)("div", {
                        className: (0, a.yI)("h-3 rounded-[5px]", s.Cj.fill3, t),
                        style: n
                    })
                }
        },
        20970: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return m
                }
            });
            var r = n(14924),
                a = n(26042),
                s = n(69396),
                i = n(99534),
                l = n(85893),
                o = n(67294),
                c = n(12922),
                u = n(15371),
                d = n(86639),
                m = o.forwardRef((function(e, t) {
                    var n, m, f = e.isActive,
                        v = e.borderRadius,
                        x = e.onClose,
                        p = e.onClick,
                        h = e.className,
                        g = e.children,
                        j = e.clickable,
                        b = (0, i.Z)(e, ["isActive", "borderRadius", "onClose", "onClick", "className", "children", "clickable"]),
                        y = j || !!p,
                        C = !!x,
                        w = (0, o.useCallback)((function(e) {
                            e.stopPropagation(), x && x()
                        }), [x]);
                    return (0, l.jsxs)("span", (0, s.Z)((0, a.Z)({
                        ref: t
                    }, b), {
                        className: (0, c.yI)("inline-flex items-center", "px-2", "whitespace-nowrap text-xs leading-6", void 0 !== v ? v : "rounded-full", (n = {}, (0, r.Z)(n, (0, c.yI)(u.Cj.label3, u.Cj.fill3), !f), (0, r.Z)(n, (0, c.yI)("bg-blue-s dark:bg-dark-blue-s text-white"), f), (0, r.Z)(n, (0, c.yI)("cursor-pointer transition-all", u.Cj.fill2Hover), y && !f), (0, r.Z)(n, (0, c.yI)("cursor-pointer transition-all", "hover:bg-blue-3 dark:hover:bg-dark-blue-3"), y && f), n), h),
                        onClick: p,
                        children: [g, C && (0, l.jsx)("span", {
                            className: "ml-1 cursor-pointer transition-all",
                            onClick: w,
                            children: (0, l.jsx)(d.X, {
                                className: (0, c.yI)("h-3.5 w-3.5", (m = {}, (0, r.Z)(m, (0, c.yI)(u.Cj.label4, "hover:text-label-3 dark:hover:text-dark-label-3"), !f), (0, r.Z)(m, (0, c.yI)("text-dark-label-4 dark:text-label-2", "hover:text-dark-label-3 dark:hover:text-label-1"), f), m))
                            })
                        })]
                    }))
                }))
        },
        85099: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return d
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(99534),
                i = n(10253),
                l = n(85893),
                o = n(67294),
                c = n(12922),
                u = n(15371),
                d = o.forwardRef((function(e, t) {
                    var n = e.value,
                        d = void 0 === n ? "" : n,
                        m = e.autoSize,
                        f = void 0 !== m && m,
                        v = e.onChange,
                        x = e.className,
                        p = e.maxLength,
                        h = e.showRecord,
                        g = e.rows,
                        j = e.wrapperClassName,
                        b = (0, s.Z)(e, ["value", "autoSize", "onChange", "className", "maxLength", "showRecord", "rows", "wrapperClassName"]),
                        y = (0, o.useCallback)((function(e) {
                            null === v || void 0 === v || v(e.target.value)
                        }), [v]),
                        C = (0, o.useRef)(null),
                        w = (0, o.useCallback)((function(e) {
                            C.current = e, "function" === typeof t ? t(e) : (null === t || void 0 === t ? void 0 : t.current) && (t.current = e)
                        }), []),
                        N = (0, o.useState)(1),
                        k = N[0],
                        S = N[1],
                        _ = (0, o.useRef)(null);
                    return (0, o.useEffect)((function() {
                        if (f) {
                            var e = _.current;
                            if (e) {
                                var t = new ResizeObserver((function(e) {
                                    var t = (0, i.Z)(e, 1)[0];
                                    S(t.target.scrollHeight / 20 | 0)
                                }));
                                return t.observe(e),
                                    function() {
                                        t.disconnect()
                                    }
                            }
                        }
                    }), [f]), (0, o.useEffect)((function() {
                        var e = _.current;
                        e && f && S(e.scrollHeight / 20 | 0)
                    }), [d, f]), (0, l.jsxs)("div", {
                        className: (0, c.yI)("relative", j),
                        children: [(0, l.jsx)("div", {
                            className: "h-0 overflow-hidden",
                            children: (0, l.jsx)("textarea", {
                                ref: _,
                                className: "w-full resize-none overflow-hidden px-2 leading-5 outline-none",
                                rows: 1,
                                value: d,
                                disabled: !0
                            })
                        }), (0, l.jsx)("textarea", (0, a.Z)((0, r.Z)({}, b), {
                            ref: w,
                            maxLength: p,
                            value: d,
                            onChange: y,
                            rows: f ? k : g,
                            className: (0, c.yI)({
                                "overflow-hidden": f
                            }, "w-full rounded-lg px-2 py-2.5 leading-5", "focus:border-green-s border border-transparent outline-none transition-[border-color]", x)
                        })), p && p > 0 && h && (0, l.jsxs)("div", {
                            className: (0, c.yI)("absolute bottom-2 right-2 text-xs", u.Cj.label3),
                            children: [d.length, " / ", p]
                        })]
                    })
                }))
        },
        22378: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return s
                }
            });
            var r = n(67294),
                a = n(68708),
                s = function(e, t) {
                    var n = (0, r.useState)(e),
                        s = n[0],
                        i = n[1],
                        l = (0, r.useState)(!1),
                        o = l[0],
                        c = l[1],
                        u = (0, r.useRef)({
                            timestamp: 0
                        }),
                        d = (0, r.useRef)(null);
                    (0, r.useEffect)((function() {
                        (0, a.jU)() && (d.current && (clearInterval(d.current), d.current = null), o && (d.current = setInterval((function() {
                            var e = (new Date).getTime(),
                                n = (e - u.current.timestamp) / 1e3;
                            u.current.timestamp = e;
                            var r = Math.max(0, s - n);
                            i(r), 0 === r && (c(!1), t && t())
                        }), 1e3)))
                    }), [o, i, s, t]);
                    return [Math.round(s), {
                        startCountdown: function() {
                            u.current.timestamp = (new Date).getTime(), c(!0)
                        },
                        resetCountdown: function(t) {
                            c(!1), i(t || e)
                        }
                    }]
                }
        },
        69485: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(29815),
                a = n(67294),
                s = n(44876);

            function i(e) {
                var t = (0, a.useRef)(e);
                return (0, s.L)((function() {
                    t.current = e
                })), (0, a.useCallback)((function() {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    var s, i;
                    return null === (i = t.current) || void 0 === i ? void 0 : (s = i).call.apply(s, [t].concat((0, r.Z)(n)))
                }), [])
            }
        },
        9962: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return a
                }
            });
            var r = n(67294),
                a = function(e, t) {
                    var n = (0, r.useState)(null),
                        a = n[0],
                        s = n[1],
                        i = t.threshold,
                        l = t.root,
                        o = t.rootMargin,
                        c = t.enabled,
                        u = void 0 === c || c;
                    return (0, r.useEffect)((function() {
                        if (u && e && "function" === typeof IntersectionObserver) {
                            var t = new IntersectionObserver((function(e) {
                                s(e[0])
                            }), {
                                threshold: i,
                                root: l,
                                rootMargin: o
                            });
                            return t.observe(e),
                                function() {
                                    s(null), t.disconnect()
                                }
                        }
                    }), [e, i, l, o, u]), a
                }
        },
        40832: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return i
                }
            });
            var r = n(82010),
                a = n(67294),
                s = n(82338),
                i = function() {
                    var e = (0, r.F)(),
                        t = e.theme,
                        n = e.forcedTheme,
                        i = (0, s.a)("(prefers-color-scheme: dark)"),
                        l = (0, a.useState)(!1),
                        o = l[0],
                        c = l[1];
                    return (0, a.useEffect)((function() {
                        c(!0)
                    }), []), !o || (n ? "dark" === n : "dark" === t || "system" === t && i)
                }
        },
        50144: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var r = n(50632),
                a = function() {
                    var e, t, n;
                    return Boolean(null === (e = (0, r.U5)()) || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.userStatus) || void 0 === n ? void 0 : n.isPremium)
                }
        },
        92946: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return i
                }
            });
            var r = n(10253),
                a = n(29815),
                s = n(67294);

            function i(e, t) {
                var n = (0, r.Z)(e, 2),
                    i = n[0],
                    l = n[1],
                    o = (0, s.useCallback)((function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        t.apply(void 0, (0, a.Z)(n)), l.apply(void 0, (0, a.Z)(n))
                    }), [t, l]);
                return [i, o]
            }
        },
        43506: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return i
                }
            });
            var r = n(67294),
                a = n(11163),
                s = n.n(a),
                i = function(e) {
                    var t = (0, a.useRouter)(),
                        n = t.query,
                        i = t.pathname,
                        l = (0, r.useMemo)((function() {
                            return n
                        }), [JSON.stringify(n)]),
                        o = (0, r.useCallback)((function(t) {
                            l[e] !== t && (t ? l[e] = t : delete l[e], s().push({
                                pathname: i,
                                query: l
                            }, void 0, {
                                shallow: !0
                            }))
                        }), [l, i, e]);
                    return [t.query[e] ? "".concat(t.query[e]) : "", o]
                }
        },
        87231: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return s
                }
            });
            var r = n(8183),
                a = n(23025),
                s = {
                    advertisementAdExposure: function(e) {
                        var t = {
                            key: "advertisement_ad_exposure",
                            data: e
                        };
                        r.V[a.X.GIO](t), r.V[a.X.GA4](t), r.V[a.X.CONSOLE](t), r.V[a.X.SELF_DB](t)
                    },
                    advertisementAdClick: function(e) {
                        var t = {
                            key: "advertisement_ad_click",
                            data: e
                        };
                        r.V[a.X.GIO](t), r.V[a.X.GA4](t), r.V[a.X.CONSOLE](t), r.V[a.X.SELF_DB](t)
                    },
                    advertisementAdFrequencyLimitExposure: function(e) {
                        var t = {
                            key: "advertisement_ad_frequency_limit_exposure",
                            data: e
                        };
                        r.V[a.X.GIO](t), r.V[a.X.GA4](t), r.V[a.X.CONSOLE](t), r.V[a.X.SELF_DB](t)
                    },
                    advertisementAdFrequencyLimitClick: function(e) {
                        var t = {
                            key: "advertisement_ad_frequency_limit_click",
                            data: e
                        };
                        r.V[a.X.GIO](t), r.V[a.X.GA4](t), r.V[a.X.CONSOLE](t), r.V[a.X.SELF_DB](t)
                    },
                    advertisementAcAfterAdClick: function(e) {
                        var t = {
                            key: "advertisement_ac_after_ad_click",
                            data: e
                        };
                        r.V[a.X.GIO](t), r.V[a.X.GA4](t), r.V[a.X.CONSOLE](t), r.V[a.X.SELF_DB](t)
                    },
                    advertisementAcAfterAdExposure: function(e) {
                        var t = {
                            key: "advertisement_ac_after_ad_exposure",
                            data: e
                        };
                        r.V[a.X.GIO](t), r.V[a.X.GA4](t), r.V[a.X.CONSOLE](t), r.V[a.X.SELF_DB](t)
                    },
                    advertisementAdsenseCloseBtnClick: function() {
                        var e = {
                            key: "advertisement_adsense_close_btn_click",
                            data: {}
                        };
                        r.V[a.X.GIO](e), r.V[a.X.GA4](e), r.V[a.X.CONSOLE](e), r.V[a.X.SELF_DB](e)
                    },
                    advertisementAdsensePopupExposure: function() {
                        var e = {
                            key: "advertisement_adsense_popup_exposure",
                            data: {}
                        };
                        r.V[a.X.GIO](e), r.V[a.X.GA4](e), r.V[a.X.CONSOLE](e), r.V[a.X.SELF_DB](e)
                    },
                    advertisementAdsensePopupCloseClick: function() {
                        var e = {
                            key: "advertisement_adsense_popup_close_click",
                            data: {}
                        };
                        r.V[a.X.GIO](e), r.V[a.X.GA4](e), r.V[a.X.CONSOLE](e), r.V[a.X.SELF_DB](e)
                    },
                    advertisementAdsensePopupSubscribeClick: function() {
                        var e = {
                            key: "advertisement_adsense_popup_subscribe_click",
                            data: {}
                        };
                        r.V[a.X.GIO](e), r.V[a.X.GA4](e), r.V[a.X.CONSOLE](e), r.V[a.X.SELF_DB](e)
                    }
                }
        },
        47263: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return s
                }
            });
            var r = n(10253),
                a = n(67294);

            function s(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = n.isActive,
                    i = void 0 === s || s,
                    l = n.rootRef,
                    o = n.rootMargin,
                    c = n.threshold,
                    u = void 0 === c ? .8 : c,
                    d = a.useRef(!0);
                a.useEffect((function() {
                    if (d.current && i) {
                        var n = null;
                        if ((n = "string" === typeof e ? document.querySelector(e) : e.current) && "IntersectionObserver" in window) {
                            var a = {
                                    root: null === l || void 0 === l ? void 0 : l.current,
                                    rootMargin: o,
                                    threshold: u
                                },
                                s = new IntersectionObserver((function(e) {
                                    (0, r.Z)(e, 1)[0].intersectionRatio >= u && (d.current = !1, s.disconnect(), t())
                                }), a);
                            return s.observe(n),
                                function() {
                                    return s.disconnect()
                                }
                        }
                    }
                }), [d, e, t, l, o, u, i])
            }
        },
        42056: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return l
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(85893),
                i = n(67294);

            function l(e, t) {
                return i.forwardRef((function(n, l) {
                    var o = i.useCallback((function(e) {
                        var r;
                        null === (r = n.onClick) || void 0 === r || r.call(n, e), t(n)
                    }), [n]);
                    return (0, s.jsx)(e, (0, a.Z)((0, r.Z)({}, n), {
                        ref: l,
                        onClick: o,
                        onAuxClick: o
                    }))
                }))
            }
        },
        74654: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return u
                }
            });
            var r = n(26042),
                a = n(69396),
                s = n(99534),
                i = n(85893),
                l = n(67294),
                o = n(13721),
                c = n(47263);

            function u(e, t, n) {
                return l.forwardRef((function(u, d) {
                    var m = u.exposureOptions,
                        f = (0, s.Z)(u, ["exposureOptions"]),
                        v = (0, o.R)(d),
                        x = l.useMemo((function() {
                            return (0, r.Z)({}, n, m)
                        }), [m]),
                        p = l.useCallback((function() {
                            t(f)
                        }), [f]);
                    return (0, c.o)(v, p, x), (0, i.jsx)(e, (0, a.Z)((0, r.Z)({}, f), {
                        ref: v
                    }))
                }))
            }
        },
        81548: function(e) {
            e.exports = {
                "input-container": "input_input-container__rvdk6",
                "clear-icon": "input_clear-icon__vWnMq",
                "right-icon": "input_right-icon__YABb6"
            }
        },
        74617: function(e, t) {
            "use strict";
            t.Z = "/_next/static/images/null-9c799484a96a82d51c063f0246797364.svg"
        },
        1114: function(e, t, n) {
            var r = n(71882),
                a = "string" === typeof r ? [
                    [e.id, r, ""]
                ] : r;
            (t = e.exports = r.locals || {})._getContent = function() {
                return a
            }, t._getCss = function() {
                return "" + r
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [2440, 5321, 7409, 2247, 630, 129, 4948, 1664, 3573, 6037, 2461, 2997, 6908, 8931, 5435, 6419, 4428, 2854, 6246, 5872, 6216, 9361, 2622, 719, 9521, 682, 3052, 1516, 7834, 5490, 6770, 8273, 9982, 923, 468, 874, 582, 9774, 2888, 179], (function() {
            return t(16862), t(11501)
        }));
        var n = e.O();
        _N_E = n
    }
]);