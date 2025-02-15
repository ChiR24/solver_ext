"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4151], {
        9201: function(e, n, t) {
            t.d(n, {
                G: function() {
                    return s
                }
            });
            var i = t(14924),
                r = t(73534),
                s = function(e) {
                    var n, t, s;
                    if (!(null !== (n = window.USE_TEST_JUDGER) && void 0 !== n ? n : "true" === localStorage.getItem("USE_TEST_JUDGER"))) return {};
                    var l = null !== (s = null !== (t = window.TEST_JUDGER_QUEUE_NAME) && void 0 !== t ? t : (0, r.a)(localStorage.getItem("TEST_JUDGER_QUEUE_NAME"))) && void 0 !== s ? s : "lc-judger-do1";
                    return e ? (0, i.Z)({
                        testMode: !0
                    }, "queueName", l) : (0, i.Z)({
                        test_mode: !0
                    }, "queue_name", l)
                }
        },
        44844: function(e, n, t) {
            t.d(n, {
                K: function() {
                    return i
                }
            });
            var i = function() {
                return !1
            }
        },
        82526: function(e, n, t) {
            t.d(n, {
                N: function() {
                    return a
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(88525),
                l = t(63808),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.i9Y)(l.f6, {}, (0, r.Z)((0, i.Z)({}, e), {
                        select: function(e) {
                            return e.questionTopicTags ? (null !== (n = e.questionTopicTags.edges.map((function(e) {
                                return null === e || void 0 === e ? void 0 : e.node
                            }))) && void 0 !== n ? n : []).map((function(e) {
                                return {
                                    slug: "",
                                    tagId: (null === e || void 0 === e ? void 0 : e.tagId) || 0,
                                    name: (null === e || void 0 === e ? void 0 : e.name) || ""
                                }
                            })) : null;
                            var n
                        }
                    }))
                }
        },
        75179: function(e, n, t) {
            t.d(n, {
                AQ: function() {
                    return j
                },
                Hz: function() {
                    return C
                },
                Wr: function() {
                    return w
                }
            });
            var i, r = t(14924),
                s = t(26042),
                l = t(69396),
                a = t(59403),
                o = t(88525),
                u = t(23874),
                c = t(63808),
                d = t(17396),
                f = t(93769),
                m = t(39606),
                h = t(76636),
                v = 20,
                x = function(e) {
                    return e
                },
                g = function(e, n) {
                    var t = n.contestQuestionSubmissionList;
                    if (!t || !(null === t || void 0 === t ? void 0 : t.submissions)) return {
                        lastKey: null,
                        hasNext: !1,
                        submissions: []
                    };
                    var i, r, s = t.lastKey,
                        l = t.hasNext,
                        a = t.submissions;
                    return {
                        lastKey: null !== (i = String(s)) && void 0 !== i ? i : null,
                        hasNext: null !== (r = Boolean(l)) && void 0 !== r && r,
                        submissions: a.map((function(n) {
                            return {
                                id: (null === n || void 0 === n ? void 0 : n.id) || "",
                                title: "",
                                questionSlug: e || "",
                                statusDisplay: x(null === n || void 0 === n ? void 0 : n.statusDisplay) || "",
                                status: "number" === typeof(null === n || void 0 === n ? void 0 : n.status) ? (null === n || void 0 === n ? void 0 : n.status) || -1 : j((null === n || void 0 === n ? void 0 : n.status) || void 0),
                                langSlug: (null === n || void 0 === n ? void 0 : n.lang) || "",
                                langName: (null === n || void 0 === n ? void 0 : n.langVerboseName) || "",
                                runtime: (null === n || void 0 === n ? void 0 : n.runtime) || "",
                                timestamp: (null === n || void 0 === n ? void 0 : n.timestamp) || "",
                                url: "",
                                isPending: !1,
                                memory: "",
                                hasNotes: !1,
                                notes: "",
                                flagType: m.Mj.White,
                                penalty: (null === n || void 0 === n ? void 0 : n.penalty) || 0
                            }
                        }))
                    }
                },
                p = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (0, s.Z)({
                            questionSlug: e,
                            offset: 0,
                            limit: v,
                            lastKey: null
                        }, n);
                    return (0, a.N)(o.rgQ.getKey(t), (function(e) {
                        var n = e.pageParam,
                            i = void 0 === n ? t : n;
                        return c.f6.request(o.G1I, i).then((function(e) {
                            var n = e.questionSubmissionList;
                            if (!n || !(null === n || void 0 === n ? void 0 : n.submissions)) return {
                                lastKey: null,
                                hasNext: !1,
                                submissions: []
                            };
                            var t, i, r, s = n.lastKey,
                                l = n.hasNext,
                                a = n.submissions;
                            return {
                                lastKey: null !== (t = String(s)) && void 0 !== t ? t : null,
                                hasNext: null !== (i = Boolean(l)) && void 0 !== i && i,
                                submissions: a.map((function(e) {
                                    var n;
                                    return {
                                        id: (null === e || void 0 === e ? void 0 : e.id) || "",
                                        title: (null === e || void 0 === e ? void 0 : e.title) || "",
                                        questionSlug: (null === e || void 0 === e ? void 0 : e.titleSlug) || "",
                                        statusDisplay: (null === e || void 0 === e ? void 0 : e.statusDisplay) || "",
                                        status: (null === e || void 0 === e ? void 0 : e.status) || -1,
                                        langSlug: (null === e || void 0 === e ? void 0 : e.lang) || "",
                                        langName: (null === e || void 0 === e ? void 0 : e.langName) || "",
                                        runtime: (null === e || void 0 === e ? void 0 : e.runtime) || "",
                                        timestamp: (null === e || void 0 === e ? void 0 : e.timestamp) || "",
                                        url: (null === e || void 0 === e ? void 0 : e.url) || "",
                                        isPending: Boolean(null === e || void 0 === e || null === (n = e.isPending) || void 0 === n ? void 0 : n.length) && "Not Pending" !== (null === e || void 0 === e ? void 0 : e.isPending),
                                        memory: (null === e || void 0 === e ? void 0 : e.memory) || "",
                                        hasNotes: (null === e || void 0 === e ? void 0 : e.hasNotes) || !1,
                                        notes: (null === e || void 0 === e ? void 0 : e.notes) || "",
                                        flagType: null !== (r = null === e || void 0 === e ? void 0 : e.flagType) && void 0 !== r ? r : m.Mj.White,
                                        frontendId: null === e || void 0 === e ? void 0 : e.frontendId
                                    }
                                }))
                            }
                        }))
                    }), {
                        enabled: !!e,
                        getNextPageParam: function(e, n) {
                            return e.hasNext ? (0, l.Z)((0, s.Z)({}, t), {
                                lastKey: e.lastKey,
                                offset: n.length * v
                            }) : void 0
                        }
                    })
                },
                b = function(e) {
                    var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = (0, f.z2)((function(e) {
                            return e.contestSlug
                        })),
                        r = (0, h.y)(),
                        u = r.data,
                        d = null === (n = null === u || void 0 === u ? void 0 : u.find((function(e) {
                            return e.id === t.lang
                        }))) || void 0 === n ? void 0 : n.name,
                        m = {
                            contestSlug: i,
                            questionSlug: e,
                            offset: 0,
                            limit: v,
                            lastKey: null,
                            lang: d,
                            status: j(t.status)
                        };
                    return (0, a.N)(o.OVk.getKey(m), (function(n) {
                        var t = n.pageParam,
                            i = void 0 === t ? m : t;
                        return c.f6.request(o.vy_, i).then((function(n) {
                            return g(e, n)
                        }))
                    }), {
                        getNextPageParam: function(e, n) {
                            return e.hasNext ? (0, l.Z)((0, s.Z)({}, m), {
                                lastKey: e.lastKey,
                                offset: n.length * v
                            }) : void 0
                        }
                    })
                },
                y = (i = {}, (0, r.Z)(i, f.UU.Contest, b), (0, r.Z)(i, f.UU.Default, p), i),
                C = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return y[(0, f.$w)()](e, n)
                };

            function j(e) {
                if (!e) return null;
                var n, t = u.AU0.Ac,
                    i = u.AU0.Wa,
                    s = u.AU0.Mle,
                    l = u.AU0.Ole,
                    a = u.AU0.Tle,
                    o = u.AU0.Re,
                    c = u.AU0.Ie,
                    d = u.AU0.Ce,
                    f = u.AU0.To,
                    h = m.F6.AC,
                    v = m.F6.WA,
                    x = m.F6.MLE,
                    g = m.F6.OLE,
                    p = m.F6.TLE,
                    b = m.F6.RE,
                    y = m.F6.IE,
                    C = m.F6.CE,
                    j = m.F6.TO,
                    w = (n = {}, (0, r.Z)(n, h, t), (0, r.Z)(n, v, i), (0, r.Z)(n, x, s), (0, r.Z)(n, g, l), (0, r.Z)(n, p, a), (0, r.Z)(n, b, o), (0, r.Z)(n, y, c), (0, r.Z)(n, C, d), (0, r.Z)(n, j, f), (0, r.Z)(n, t, h), (0, r.Z)(n, i, v), (0, r.Z)(n, s, x), (0, r.Z)(n, l, g), (0, r.Z)(n, a, p), (0, r.Z)(n, o, b), (0, r.Z)(n, c, y), (0, r.Z)(n, d, C), (0, r.Z)(n, f, j), n);
                return e in w ? w[e] : null
            }
            var w = d.dE
        },
        69675: function(e, n, t) {
            t.d(n, {
                Q: function() {
                    return m
                }
            });
            var i = t(67294),
                r = t(88525),
                s = t(63808),
                l = t(26042),
                a = t(69396),
                o = t(85945),
                u = t(69485),
                c = t(82526),
                d = function(e, n) {
                    return null === e || void 0 === e ? void 0 : e.find((function(e) {
                        return e.tagId === n
                    }))
                },
                f = t(93769),
                m = function() {
                    var e = function() {
                            var e = (0, o.NL)(),
                                n = (0, c.N)().data;
                            return {
                                optimisticUpdateSubmissionDetailsNoteData: (0, u.z)((function(t) {
                                    var i, s = r.aUw.getKey({
                                        submissionId: Number(t.submissionId)
                                    });
                                    if (e.getQueryData(s)) {
                                        var o, u = null !== (o = null === t || void 0 === t || null === (i = t.tagIds) || void 0 === i ? void 0 : i.map((function(e) {
                                            return d(n, e)
                                        })).filter((function(e) {
                                            return !!e
                                        }))) && void 0 !== o ? o : [];
                                        e.setQueryData(s, (function(e) {
                                            return (null === e || void 0 === e ? void 0 : e.submissionDetails) ? {
                                                submissionDetails: (0, a.Z)((0, l.Z)({}, e.submissionDetails), {
                                                    flagType: null !== (n = t.flagType) && void 0 !== n ? n : e.submissionDetails.flagType,
                                                    notes: null !== (i = t.note) && void 0 !== i ? i : e.submissionDetails.notes,
                                                    topicTags: u
                                                })
                                            } : {};
                                            var n, i
                                        }))
                                    }
                                }))
                            }
                        }().optimisticUpdateSubmissionDetailsNoteData,
                        n = function() {
                            var e = (0, o.NL)(),
                                n = (0, f.z2)((function(e) {
                                    return e.questionSlug
                                }));
                            return {
                                optimisticUpdateSubmissionListNoteData: (0, u.z)((function(t) {
                                    e.getQueryCache().findAll(r.rgQ.getKey({
                                        questionSlug: n,
                                        offset: 0,
                                        limit: 20,
                                        lastKey: null
                                    }), {
                                        exact: !1
                                    }).filter((function(e) {
                                        return !e.state.isInvalidated
                                    })).forEach((function(n) {
                                        e.setQueryData(n.queryKey, (function(e) {
                                            return e ? (0, a.Z)((0, l.Z)({}, e), {
                                                pages: e.pages.map((function(e) {
                                                    var n;
                                                    return (0, a.Z)((0, l.Z)({}, e), {
                                                        submissions: null === (n = e.submissions) || void 0 === n ? void 0 : n.map((function(e) {
                                                            var n, i;
                                                            return (null === e || void 0 === e ? void 0 : e.id) === t.submissionId ? (0, a.Z)((0, l.Z)({}, e), {
                                                                flagType: null !== (n = t.flagType) && void 0 !== n ? n : e.flagType,
                                                                notes: null !== (i = t.note) && void 0 !== i ? i : e.notes
                                                            }) : e
                                                        }))
                                                    })
                                                }))
                                            }) : {
                                                pageParams: [],
                                                pages: []
                                            }
                                        }))
                                    }))
                                }))
                            }
                        }().optimisticUpdateSubmissionListNoteData,
                        t = (0, r.GHJ)(s.f6, {
                            onMutate: function(t) {
                                e(t), n(t)
                            }
                        }).mutateAsync;
                    return (0, i.useCallback)((function(e) {
                        var n = e.submissionId,
                            i = e.note,
                            r = e.tagIds,
                            s = e.flagType;
                        return t({
                            submissionId: String(n),
                            note: i,
                            tagIds: r,
                            flagType: s
                        })
                    }), [t])
                }
        },
        76636: function(e, n, t) {
            t.d(n, {
                y: function() {
                    return m
                }
            });
            var i, r = t(14924),
                s = t(26042),
                l = t(69396),
                a = t(29732),
                o = t(93769),
                u = t(1576),
                c = t(53889),
                d = t(95682),
                f = (i = {}, (0, r.Z)(i, o.UU.Contest, (function() {
                    var e, n = (0, o.z2)((function(e) {
                            return e.contestSlug
                        })),
                        t = (0, o.z2)((function(e) {
                            return e.questionSlug
                        })),
                        i = (0, u.l)(t, n),
                        r = (0, a.Z)(null === i || void 0 === i || null === (e = i.data) || void 0 === e ? void 0 : e.languageList);
                    return (0, l.Z)((0, s.Z)({}, i), {
                        data: r
                    })
                })), (0, r.Z)(i, o.UU.Default, (function() {
                    var e, n = (0, o.z2)((function(e) {
                            return e.questionSlug
                        })),
                        t = (0, d.I)(n),
                        i = (0, a.Z)(null === t || void 0 === t || null === (e = t.data) || void 0 === e ? void 0 : e.languageList);
                    return (0, l.Z)((0, s.Z)({}, t), {
                        data: i
                    })
                })), i),
                m = function() {
                    return (0, c.b)(f)()
                }
        },
        8276: function(e, n, t) {
            t.d(n, {
                Hv: function() {
                    return d
                },
                hx: function() {
                    return c
                },
                x1: function() {
                    return u
                }
            });
            var i = t(51438),
                r = t(26042),
                s = t(69396),
                l = t(68708),
                a = t(75117),
                o = function() {
                    function e(n) {
                        (0, i.Z)(this, e), this.headers = {
                            "content-type": "application/json"
                        }, this.baseUrl = "", this.baseUrl = n
                    }
                    var n = e.prototype;
                    return n.request = function(e, n, t) {
                        return this.rawRequest(e, n, t).then((function(e) {
                            if (!e.ok) throw new Error("Network response was not ok");
                            return e.json()
                        }))
                    }, n.rawRequest = function(e, n, t) {
                        var i = function(e, n) {
                            var t;
                            if (n || e) {
                                if (!e) return n;
                                var i, l, a, o = null !== n && void 0 !== n ? n : {},
                                    u = null !== (i = o.headers) && void 0 !== i ? i : {};
                                return (0, s.Z)((0, r.Z)({}, o), {
                                    headers: (0, s.Z)((0, r.Z)({}, u), {
                                        cookie: null !== (l = e.headers.cookie) && void 0 !== l ? l : "",
                                        "X-CSRFToken": null !== (a = null === (t = e.cookies) || void 0 === t ? void 0 : t.csrftoken) && void 0 !== a ? a : ""
                                    })
                                })
                            }
                        }(t, n);
                        return fetch("".concat(this.baseUrl).concat(e), (0, r.Z)({
                            headers: new Headers((0, s.Z)((0, r.Z)({}, this.headers), {
                                "X-CSRFToken": (0, l._V)()
                            })),
                            credentials: "same-origin"
                        }, i))
                    }, n.requestHeaders = function(e, n) {
                        return this.headers = (0, r.Z)({}, this.headers, null === n || void 0 === n ? void 0 : n.headers), this.request(e, null === n || void 0 === n ? void 0 : n.settings)
                    }, e
                }(),
                u = new o(""),
                c = new o(a.Vq),
                d = (new o(a.Vq), {
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
                    lastSubmittedCode: function(e, n) {
                        return "/submissions/latest/?qid=".concat(e, "&lang=").concat(n)
                    },
                    contestRuncodeTaskEnqueue: function(e, n) {
                        return "/contest/api/".concat(e, "/problems/").concat(n, "/interpret_solution/")
                    },
                    contestSubmitTaskEnqueue: function(e, n) {
                        return "/contest/api/".concat(e, "/problems/").concat(n, "/submit/")
                    },
                    contestInfo: function(e) {
                        return "/contest/api/info/".concat(e, "/")
                    },
                    contestRankingTop: function(e) {
                        var n = e.contestTitleSlug,
                            t = e.region;
                        return "/contest/api/ranking/".concat(n, "/?region=").concat(t, "&top=true")
                    },
                    contestRankingPage: function(e) {
                        var n = e.contestTitleSlug,
                            t = e.pagination,
                            i = void 0 === t ? 1 : t,
                            r = e.region;
                        return "/contest/api/ranking/".concat(n, "/?pagination=").concat(i, "&region=").concat(r)
                    },
                    contestMyRanking: function(e, n) {
                        return "/contest/api/myranking/".concat(e, "/?region=").concat(n)
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
        57845: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return l
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(85893),
                l = t(67294).forwardRef((function(e, n) {
                    return (0, s.jsx)("svg", (0, r.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12.293 16.293L16.586 12l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414zM9.586 12L5.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        79865: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return l
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(85893),
                l = t(67294).forwardRef((function(e, n) {
                    return (0, s.jsx)("svg", (0, r.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18.995 4.824A3 3 0 0016 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h4l.117-.007A1 1 0 0010 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4h10l.117.007A1 1 0 0117 5v6l.007.117A1 1 0 0019 11V5l-.005-.176zM12 13a1 1 0 00-1-1H8a1 1 0 100 2h3a1 1 0 001-1zm3-4a1 1 0 00-1-1H8a1 1 0 000 2h6a1 1 0 001-1zm.572 12.85l4.933-2.979a1.014 1.014 0 000-1.742l-4.933-2.98a1.042 1.042 0 00-.539-.149c-.57 0-1.033.457-1.033 1.02v5.959c0 .188.053.372.152.532a1.04 1.04 0 001.42.34z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        97483: function(e, n, t) {
            t.d(n, {
                t: function() {
                    return l
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(85893),
                l = t(67294).forwardRef((function(e, n) {
                    return (0, s.jsx)("svg", (0, r.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-8.5a1 1 0 001-1v-4a1 1 0 10-2 0v4a1 1 0 001 1zm0 3a1 1 0 100-2 1 1 0 000 2z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        99953: function(e, n, t) {
            t.d(n, {
                x: function() {
                    return l
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(85893),
                l = t(67294).forwardRef((function(e, n) {
                    return (0, s.jsxs)("svg", (0, r.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: [(0, s.jsx)("path", {
                            fillOpacity: .15,
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z",
                            clipRule: "evenodd"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M13.414 12l2.293-2.293a1 1 0 00-1.414-1.414L12 10.586 9.707 8.293a1 1 0 00-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 101.414 1.414L12 13.414l2.293 2.293a1 1 0 001.414-1.414L13.414 12z",
                            clipRule: "evenodd"
                        })]
                    }))
                }))
        },
        17060: function(e, n, t) {
            t.d(n, {
                U: function() {
                    return s
                },
                Z: function() {
                    return l
                }
            });
            var i = t(32663),
                r = t(8254),
                s = {
                    react: {
                        framework: "react",
                        codeLang: "javascript",
                        Icon: i.v
                    },
                    vanillajs: {
                        framework: "vanilla",
                        codeLang: "javascript",
                        Icon: r.J
                    }
                },
                l = {
                    react: "React",
                    vanilla: "Vanilla JS",
                    javascript: "JavaScript",
                    typescript: "TypeScript"
                }
        },
        32663: function(e, n, t) {
            t.d(n, {
                v: function() {
                    return u
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(99534),
                l = t(85893),
                a = t(67294),
                o = t(12922),
                u = (0, a.forwardRef)((function(e, n) {
                    var t = e.className,
                        a = (0, s.Z)(e, ["className"]);
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("svg", (0, r.Z)((0, i.Z)({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "currentColor",
                            className: (0, o.yI)("text-[#61DAFB]", t),
                            ref: n
                        }, a), {
                            children: [(0, l.jsx)("path", {
                                d: "M24.0001 28.275C26.3611 28.275 28.2751 26.361 28.2751 24C28.2751 21.639 26.3611 19.725 24.0001 19.725C21.6391 19.725 19.7251 21.639 19.7251 24C19.7251 26.361 21.6391 28.275 24.0001 28.275Z",
                                fill: "currentColor"
                            }), (0, l.jsx)("path", {
                                d: "M40.2374 16.95C39.4124 16.65 38.5499 16.35 37.6499 16.0875C37.8749 15.1875 38.0624 14.2875 38.2124 13.425C38.9999 8.47498 38.1374 4.98748 35.7374 3.63748C35.0249 3.22498 34.2374 3.03748 33.3374 3.03748C30.7124 3.03748 27.3749 4.98748 23.9999 8.24998C20.6249 4.98748 17.2874 3.03748 14.6624 3.03748C13.7624 3.03748 12.9749 3.22498 12.2624 3.63748C9.8624 5.02498 8.9999 8.51248 9.7874 13.425C9.9374 14.2875 10.1249 15.1875 10.3499 16.0875C9.4499 16.35 8.5874 16.6125 7.7624 16.95C3.0749 18.75 0.524902 21.225 0.524902 24C0.524902 26.775 3.1124 29.25 7.7624 31.05C8.5874 31.35 9.4499 31.65 10.3499 31.9125C10.1249 32.8125 9.9374 33.7125 9.7874 34.575C8.9999 39.525 9.8624 43.0125 12.2624 44.3625C12.9749 44.775 13.7624 44.9625 14.6624 44.9625C17.3249 44.9625 20.6624 43.0125 23.9999 39.75C27.3749 43.0125 30.7124 44.9625 33.3374 44.9625C34.2374 44.9625 35.0249 44.775 35.7374 44.3625C38.1374 42.975 38.9999 39.4875 38.2124 34.575C38.0624 33.7125 37.8749 32.8125 37.6499 31.9125C38.5499 31.65 39.4124 31.3875 40.2374 31.05C44.9249 29.25 47.4749 26.775 47.4749 24C47.4749 21.225 44.9249 18.75 40.2374 16.95ZM34.6874 5.51248C36.2249 6.41248 36.7499 9.18748 36.1124 13.125C35.9999 13.9125 35.8124 14.7375 35.5874 15.6C33.6374 15.15 31.5749 14.85 29.3999 14.6625C28.1249 12.8625 26.8124 11.25 25.4999 9.78748C28.2749 7.04998 31.0874 5.17498 33.3749 5.17498C33.8624 5.17498 34.3124 5.28748 34.6874 5.51248ZM30.4874 27.75C29.8124 28.95 29.0249 30.15 28.1999 31.35C26.8124 31.4625 25.4249 31.5 23.9999 31.5C22.5374 31.5 21.1499 31.4625 19.7999 31.35C18.9749 30.15 18.2249 28.95 17.5499 27.75C16.8374 26.5125 16.1624 25.2375 15.5624 24C16.1624 22.7625 16.8374 21.4875 17.5499 20.25C18.2249 19.05 19.0124 17.85 19.8374 16.65C21.2249 16.5375 22.6124 16.5 24.0374 16.5C25.4999 16.5 26.8874 16.5375 28.2374 16.65C29.0624 17.85 29.8124 19.05 30.4874 20.25C31.1999 21.4875 31.8749 22.7625 32.4749 24C31.8374 25.2375 31.1999 26.475 30.4874 27.75ZM33.5999 26.5125C34.1624 27.825 34.6124 29.1 35.0249 30.375C33.7499 30.675 32.3999 30.9 30.9749 31.0875C31.4249 30.375 31.9124 29.625 32.3249 28.8375C32.7749 28.05 33.1874 27.2625 33.5999 26.5125ZM23.9999 36.675C23.0999 35.7 22.2374 34.65 21.4124 33.5625C22.2749 33.6 23.1374 33.6375 23.9999 33.6375C24.8624 33.6375 25.7249 33.6 26.5874 33.5625C25.7624 34.65 24.8999 35.7 23.9999 36.675ZM17.0249 31.05C15.5999 30.8625 14.2499 30.6375 12.9749 30.3375C13.3874 29.1 13.8374 27.7875 14.3999 26.475C14.8124 27.225 15.2249 28.0125 15.6749 28.7625C16.1249 29.5875 16.5749 30.3 17.0249 31.05ZM14.3999 21.4875C13.8374 20.175 13.3874 18.9 12.9749 17.625C14.2499 17.325 15.5999 17.1 17.0249 16.9125C16.5749 17.625 16.0874 18.375 15.6749 19.1625C15.2249 19.95 14.8124 20.7375 14.3999 21.4875ZM23.9999 11.325C24.8999 12.3 25.7624 13.35 26.5874 14.4375C25.7249 14.4 24.8624 14.3625 23.9999 14.3625C23.1374 14.3625 22.2749 14.4 21.4124 14.4375C22.2374 13.35 23.0999 12.3 23.9999 11.325ZM32.3249 19.2L30.9749 16.95C32.3999 17.1375 33.7499 17.3625 35.0249 17.6625C34.6124 18.9 34.1624 20.2125 33.5999 21.525C33.1874 20.7375 32.7749 19.95 32.3249 19.2ZM11.8874 13.125C11.2499 9.18748 11.7749 6.41248 13.3124 5.51248C13.6874 5.28748 14.1374 5.17498 14.6249 5.17498C16.8749 5.17498 19.6874 7.01248 22.4999 9.78748C21.1874 11.2125 19.8749 12.8625 18.5999 14.6625C16.4249 14.85 14.3624 15.1875 12.4124 15.6C12.1874 14.7375 12.0374 13.9125 11.8874 13.125ZM2.6249 24C2.6249 22.2375 4.7624 20.3625 8.5124 18.975C9.2624 18.675 10.0874 18.4125 10.9124 18.1875C11.5124 20.0625 12.2624 22.05 13.1624 24.0375C12.2624 26.025 11.4749 27.975 10.9124 29.85C5.7374 28.35 2.6249 26.1 2.6249 24ZM13.3124 42.4875C11.7749 41.5875 11.2499 38.8125 11.8874 34.875C11.9999 34.0875 12.1874 33.2625 12.4124 32.4C14.3624 32.85 16.4249 33.15 18.5999 33.3375C19.8749 35.1375 21.1874 36.75 22.4999 38.2125C19.7249 40.95 16.9124 42.825 14.6249 42.825C14.1374 42.825 13.6874 42.7125 13.3124 42.4875ZM36.1124 34.875C36.7499 38.8125 36.2249 41.5875 34.6874 42.4875C34.3124 42.7125 33.8624 42.825 33.3749 42.825C31.1249 42.825 28.3124 40.9875 25.4999 38.2125C26.8124 36.7875 28.1249 35.1375 29.3999 33.3375C31.5749 33.15 33.6374 32.8125 35.5874 32.4C35.8124 33.2625 35.9624 34.0875 36.1124 34.875ZM39.4874 29.025C38.7374 29.325 37.9124 29.5875 37.0874 29.8125C36.4874 27.9375 35.7374 25.95 34.8374 23.9625C35.7374 21.975 36.5249 20.025 37.0874 18.15C42.2624 19.65 45.3749 21.9 45.3749 24C45.3749 25.7625 43.1999 27.6375 39.4874 29.025Z",
                                fill: "currentColor"
                            })]
                        }))
                    })
                }))
        },
        8254: function(e, n, t) {
            t.d(n, {
                J: function() {
                    return u
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(99534),
                l = t(85893),
                a = t(67294),
                o = t(12922),
                u = (0, a.forwardRef)((function(e, n) {
                    var t = e.className,
                        a = (0, s.Z)(e, ["className"]);
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("svg", (0, r.Z)((0, i.Z)({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "currentColor",
                            className: (0, o.yI)("text-[#83CD29]", t),
                            ref: n
                        }, a), {
                            children: (0, l.jsx)("path", {
                                d: "M42.2891 11.3753L25.7528 1.77338C24.7099 1.17938 23.352 1.17938 22.3009 1.77338L5.58788 11.3753C4.51163 11.9944 3.75 13.158 3.75 14.4026V33.5809C3.75 34.8255 4.5315 35.9895 5.60775 36.612L10.0234 39.12C12.1339 40.1595 12.8798 40.1595 13.8401 40.1595C16.965 40.1595 18.75 38.2699 18.75 34.974V16.0403C18.75 15.7729 18.6109 15.375 18.3484 15.375H16.2397C15.9727 15.375 15.375 15.7729 15.375 16.0399V34.9736C15.375 36.4346 14.0535 37.8885 11.5837 36.6536L7.02112 34.0238C6.86212 33.9375 6.75 33.7639 6.75 33.5809V14.4026C6.75 14.2219 6.95813 14.0404 7.11825 13.9478L23.7772 4.36238C23.9329 4.27426 24.1616 4.27426 24.3169 4.36238L40.7726 13.9455C40.9301 14.0404 40.8746 14.2163 40.8746 14.4026V33.5809C40.8746 33.7639 40.9432 33.942 40.7876 34.0301L24.2554 43.6211C24.1136 43.7063 23.9377 43.7063 23.7825 43.6211L19.5424 41.0903C19.4145 41.016 19.2626 40.9894 19.14 41.058C17.9603 41.7266 17.7427 41.8155 16.6361 42.1991C16.3639 42.294 15.9622 42.4586 16.7899 42.9225L22.3391 46.2053C22.8689 46.5113 23.4699 46.6724 24.0818 46.6725C24.6975 46.6725 25.3005 46.5128 25.8319 46.2053L42.2887 36.612C43.365 35.985 43.875 34.8255 43.875 33.5809V14.4026C43.875 13.158 43.365 11.9974 42.2891 11.3753ZM29.2163 30.5419C24.819 30.5419 23.8504 29.3288 23.5275 27.1421C23.49 26.9066 23.2901 26.625 23.0505 26.625H20.9014C20.6355 26.625 20.4217 26.9475 20.4217 27.2123C20.4217 30.012 21.9439 33.4043 29.2166 33.4043C34.4813 33.4043 37.4996 31.3586 37.4996 27.7384C37.4996 24.1489 35.0745 23.2069 29.9689 22.5311C24.8081 21.849 24.2839 21.5044 24.2839 20.2954C24.2839 19.2986 24.7279 17.9693 28.5491 17.9693C31.9635 17.9693 33.222 18.702 33.7399 21.0034C33.7841 21.2198 33.9817 21.375 34.2049 21.375H36.3626C36.4954 21.375 36.6221 21.3214 36.7151 21.2265C36.8051 21.1245 36.8527 20.9966 36.8407 20.8594C36.5066 16.8964 33.8737 15.0495 28.5487 15.0495C23.8121 15.0495 20.9865 17.0498 20.9865 20.4026C20.9865 24.0394 23.7979 25.0444 28.3447 25.494C33.7841 26.0273 34.2071 26.8223 34.2071 27.8921C34.2071 29.7503 32.7154 30.5419 29.2163 30.5419Z",
                                fill: "currentColor"
                            })
                        }))
                    })
                }))
        },
        13397: function(e, n, t) {
            t.d(n, {
                Au: function() {
                    return f
                },
                BG: function() {
                    return l
                },
                GM: function() {
                    return h
                },
                LY: function() {
                    return o
                },
                O_: function() {
                    return c
                },
                Rn: function() {
                    return a
                },
                _1: function() {
                    return m
                },
                cZ: function() {
                    return d
                },
                cc: function() {
                    return u
                }
            });
            var i = t(10253),
                r = t(17060),
                s = t(11422),
                l = function(e, n) {
                    var t;
                    if (e) {
                        var s, l, a = Object.entries(r.U).filter((function(n) {
                            return (0, i.Z)(n, 2)[1].framework === e
                        }));
                        return n ? null !== (l = null === (t = a.find((function(e) {
                            return (0, i.Z)(e, 2)[1].codeLang === n
                        }))) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : void 0 : null !== (s = a[0][0]) && void 0 !== s ? s : void 0
                    }
                },
                a = function(e) {
                    var n, t;
                    if (e) return null !== (t = null === (n = r.U[e]) || void 0 === n ? void 0 : n.framework) && void 0 !== t ? t : void 0
                },
                o = function(e) {
                    var n, t;
                    if (e) return null !== (t = null === (n = r.U[e]) || void 0 === n ? void 0 : n.codeLang) && void 0 !== t ? t : void 0
                },
                u = function(e, n) {
                    return e && (null === n || void 0 === n ? void 0 : n.length) ? Object.entries(r.U).filter((function(n) {
                        return (0, i.Z)(n, 2)[1].framework === e
                    })).map((function(e) {
                        var t = (0, i.Z)(e, 2),
                            s = t[0],
                            l = t[1].codeLang,
                            a = n.find((function(e) {
                                return (null === e || void 0 === e ? void 0 : e.lang) === s
                            }));
                        if (a) return {
                            lang: l,
                            displayLang: r.Z[l],
                            code: a.code
                        }
                    })).filter(Boolean) : []
                },
                c = function(e) {
                    return (null === e || void 0 === e ? void 0 : e.length) ? e.map((function(e) {
                        return e.lang
                    })).map((function(e) {
                        var n = r.U[e];
                        if (n) return {
                            value: n.framework,
                            displayName: r.Z[n.framework],
                            Icon: n.Icon
                        }
                    })).filter(Boolean) : []
                },
                d = function() {
                    return Object.values(r.U).map((function(e) {
                        var n = e.framework,
                            t = e.Icon;
                        return {
                            value: n,
                            displayName: r.Z[n],
                            Icon: t
                        }
                    }))
                },
                f = function() {
                    var e = (0, s.a)((function(e) {
                        return e.isFrameworkHighlighted
                    }));
                    return (0, s.a)((function(e) {
                        return e.isActive
                    })) && e
                },
                m = function() {
                    return (0, s.a)((function(e) {
                        return e.isActive
                    }))
                },
                h = function(e) {
                    return !!e && void 0 !== r.U[e]
                }
        },
        40776: function(e, n, t) {
            t.d(n, {
                E1: function() {
                    return r
                },
                FW: function() {
                    return s
                },
                e$: function() {
                    return i
                }
            });
            var i = "\xa9leetcode",
                r = /\xa9leetcode/g,
                s = function(e) {
                    return {
                        isFromInside: e.endsWith(i)
                    }
                }
        },
        30029: function(e, n, t) {
            t.d(n, {
                z: function() {
                    return o
                }
            });
            var i = t(85893),
                r = t(67294),
                s = t(62758),
                l = t(12922),
                a = t(15371),
                o = r.forwardRef((function(e, n) {
                    var t = e.tooltipText,
                        r = e.children,
                        o = e.onClick,
                        u = e.className,
                        c = e.disabled,
                        d = e.tooltipPlacement,
                        f = void 0 === d ? "left" : d;
                    return t ? (0, i.jsx)(s.u, {
                        label: t,
                        isDisabled: c,
                        placement: f,
                        children: (0, i.jsx)("div", {
                            ref: n,
                            onClick: o,
                            className: (0, l.yI)("p-[1px]", {
                                "cursor-pointer": !c
                            }, u),
                            children: r
                        })
                    }) : (0, i.jsx)("div", {
                        ref: n,
                        className: (0, l.yI)("group cursor-pointer rounded p-1", a.Cj.fill2Hover, u),
                        onClick: o,
                        children: r
                    })
                }))
        },
        19598: function(e, n, t) {
            t.d(n, {
                K: function() {
                    return f
                }
            });
            var i = t(85893),
                r = t(67294),
                s = t(11321),
                l = t(12922),
                a = t(11095),
                o = t(97556),
                u = t(385),
                c = t(15371),
                d = t(65262),
                f = function(e) {
                    var n = e.paramType,
                        t = e.visible,
                        f = e.onCancel,
                        m = e.data,
                        h = (0, r.useState)(!1),
                        v = h[0],
                        x = h[1],
                        g = (0, s.$G)("console").t;
                    return (0, i.jsx)(a.u, {
                        visible: t,
                        closable: !1,
                        className: "w-full bg-transparent dark:bg-transparent",
                        noShadow: !0,
                        onCancel: f,
                        renderPrefixChildren: [v ? (0, i.jsx)("div", {
                            className: "absolute left-1/2 top-[52px] -translate-x-3/4",
                            children: (0, i.jsx)(o.R, {
                                content: g("fullTreeTooBig"),
                                type: "info",
                                className: c.Cj.label2
                            })
                        }, "too-big") : void 0, (0, i.jsx)("button", {
                            onClick: f,
                            className: (0, l.yI)("absolute right-[52px] top-[52px] h-10 w-10 cursor-pointer rounded-full transition-all", c.Cj.bgPaper, c.Cj.fill3Hover),
                            children: (0, i.jsx)(u.F, {
                                className: (0, l.yI)("h-6 w-10", c.Cj.label2)
                            })
                        }, "close-btn")],
                        children: (0, i.jsx)(d.j, {
                            data: m,
                            paramType: n,
                            onTruncateChange: x,
                            className: "max-h-full w-full",
                            maxDepth: 10
                        })
                    })
                }
        },
        26164: function(e, n, t) {
            t.d(n, {
                $W: function() {
                    return h
                },
                D$: function() {
                    return s
                },
                JZ: function() {
                    return l
                },
                NL: function() {
                    return r
                }
            });
            var i = t(51438),
                r = -1,
                s = 1,
                l = 0,
                a = /[^a-zA-Z0-9]/,
                o = /\s/,
                u = /[\r\n]/,
                c = /\n\r?\n$/,
                d = /^\r?\n\r?\n/,
                f = function(e, n) {
                    if (!e || !n) return 6;
                    var t = e.charAt(e.length - 1),
                        i = n.charAt(0),
                        r = t.match(a),
                        s = i.match(a),
                        l = r && t.match(o),
                        f = s && i.match(o),
                        m = l && t.match(u),
                        h = f && i.match(u),
                        v = m && e.match(c),
                        x = h && n.match(d);
                    return v || x ? 5 : m || h ? 4 : r && !l && f ? 3 : l || f ? 2 : r || s ? 1 : 0
                },
                m = function(e, n) {
                    var t = e.length,
                        i = n.length;
                    if (0 == t || 0 == i) return 0;
                    t > i ? e = e.substring(t - i) : t < i && (n = n.substring(0, t));
                    var r = Math.min(t, i);
                    if (e == n) return r;
                    for (var s = 0, l = 1;;) {
                        var a = e.substring(r - l),
                            o = n.indexOf(a);
                        if (-1 == o) return s;
                        l += o, 0 != o && e.substring(r - l) != n.substring(0, l) || (s = l, l++)
                    }
                },
                h = function() {
                    function e() {
                        (0, i.Z)(this, e), this.Diff_Timeout = 1, this.Diff_EditCost = 4
                    }
                    var n = e.prototype;
                    return n.diff_main = function(e, n) {
                        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            i = arguments.length > 3 ? arguments[3] : void 0;
                        "undefined" == typeof i && (i = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
                        var r = i;
                        if (null == e || null == n) throw new Error("Null input. (diff_main)");
                        if (e == n) return e ? [
                            [l, e]
                        ] : [];
                        var s = t,
                            a = this.diff_commonPrefix(e, n),
                            o = e.substring(0, a);
                        e = e.substring(a), n = n.substring(a), a = this.diff_commonSuffix(e, n);
                        var u = e.substring(e.length - a);
                        e = e.substring(0, e.length - a), n = n.substring(0, n.length - a);
                        var c = this.diff_compute_(e, n, s, r);
                        return o && c.unshift([l, o]), u && c.push([l, u]), this.diff_cleanupMerge(c), c
                    }, n.diff_compute_ = function(e, n, t, i) {
                        if (!e) return [
                            [s, n]
                        ];
                        if (!n) return [
                            [r, e]
                        ];
                        var a = e.length > n.length ? e : n,
                            o = e.length > n.length ? n : e,
                            u = a.indexOf(o);
                        if (-1 != u) {
                            var c = [
                                [s, a.substring(0, u)],
                                [l, o],
                                [s, a.substring(u + o.length)]
                            ];
                            return e.length > n.length && (c[0][0] = c[2][0] = r), c
                        }
                        if (1 == o.length) return [
                            [r, e],
                            [s, n]
                        ];
                        var d = this.diff_halfMatch_(e, n);
                        if (d) {
                            var f = d[0],
                                m = d[1],
                                h = d[2],
                                v = d[3],
                                x = d[4],
                                g = this.diff_main(f, h, t, i),
                                p = this.diff_main(m, v, t, i);
                            return g.concat([
                                [l, x]
                            ], p)
                        }
                        return t && e.length > 100 && n.length > 100 ? this.diff_lineMode_(e, n, i) : this.diff_bisect_(e, n, i)
                    }, n.diff_lineMode_ = function(e, n, t) {
                        var i = this.diff_linesToChars_(e, n);
                        e = i.chars1, n = i.chars2;
                        var a = i.lineArray,
                            o = this.diff_main(e, n, !1, t);
                        ! function(e, n) {
                            for (var t = 0; t < e.length; t++) {
                                for (var i = e[t][1], r = [], s = 0; s < i.length; s++) r[s] = n[i.charCodeAt(s)];
                                e[t][1] = r.join("")
                            }
                        }(o, a), this.diff_cleanupSemantic(o), o.push([l, ""]);
                        for (var u = 0, c = 0, d = 0, f = "", m = ""; u < o.length;) {
                            switch (o[u][0]) {
                                case s:
                                    d++, m += o[u][1];
                                    break;
                                case r:
                                    c++, f += o[u][1];
                                    break;
                                case l:
                                    if (c >= 1 && d >= 1) {
                                        o.splice(u - c - d, c + d), u = u - c - d;
                                        for (var h = this.diff_main(f, m, !1, t), v = h.length - 1; v >= 0; v--) o.splice(u, 0, h[v]);
                                        u += h.length
                                    }
                                    d = 0, c = 0, f = "", m = ""
                            }
                            u++
                        }
                        return o.pop(), o
                    }, n.diff_bisect_ = function(e, n, t) {
                        for (var i = e.length, l = n.length, a = Math.ceil((i + l) / 2), o = a, u = 2 * a, c = new Array(u), d = new Array(u), f = 0; f < u; f++) c[f] = -1, d[f] = -1;
                        c[o + 1] = 0, d[o + 1] = 0;
                        for (var m = i - l, h = m % 2 != 0, v = 0, x = 0, g = 0, p = 0, b = 0; b < a && !((new Date).getTime() > t); b++) {
                            for (var y = -b + v; y <= b - x; y += 2) {
                                for (var C = o + y, j = y == -b || y != b && c[C - 1] < c[C + 1] ? c[C + 1] : c[C - 1] + 1, w = j - y; j < i && w < l && e.charAt(j) == n.charAt(w);) j++, w++;
                                if (c[C] = j, j > i) x += 2;
                                else if (w > l) v += 2;
                                else if (h) {
                                    var N = o + m - y;
                                    if (N >= 0 && N < u && -1 != d[N])
                                        if (j >= i - d[N]) return this.diff_bisectSplit_(e, n, j, w, t)
                                }
                            }
                            for (var Z = -b + g; Z <= b - p; Z += 2) {
                                for (var I = o + Z, k = Z == -b || Z != b && d[I - 1] < d[I + 1] ? d[I + 1] : d[I - 1] + 1, T = k - Z; k < i && T < l && e.charAt(i - k - 1) == n.charAt(l - T - 1);) k++, T++;
                                if (d[I] = k, k > i) p += 2;
                                else if (T > l) g += 2;
                                else if (!h) {
                                    var S = o + m - Z;
                                    if (S >= 0 && S < u && -1 != c[S]) {
                                        var R = c[S],
                                            M = o + R - S;
                                        if (R >= (k = i - k)) return this.diff_bisectSplit_(e, n, R, M, t)
                                    }
                                }
                            }
                        }
                        return [
                            [r, e],
                            [s, n]
                        ]
                    }, n.diff_bisectSplit_ = function(e, n, t, i, r) {
                        var s = e.substring(0, t),
                            l = n.substring(0, i),
                            a = e.substring(t),
                            o = n.substring(i),
                            u = this.diff_main(s, l, !1, r),
                            c = this.diff_main(a, o, !1, r);
                        return u.concat(c)
                    }, n.diff_linesToChars_ = function(e, n) {
                        var t = [],
                            i = {};
                        t[0] = "";
                        var r = function(e) {
                            for (var n = "", r = 0, s = -1, l = t.length; s < e.length - 1;) {
                                -1 == (s = e.indexOf("\n", r)) && (s = e.length - 1);
                                var a = e.substring(r, s + 1);
                                r = s + 1, (i.hasOwnProperty ? i.hasOwnProperty(a) : void 0 !== i[a]) ? n += String.fromCharCode(i[a]) : (n += String.fromCharCode(l), i[a] = l, t[l++] = a)
                            }
                            return n
                        };
                        return {
                            chars1: r(e),
                            chars2: r(n),
                            lineArray: t
                        }
                    }, n.diff_commonPrefix = function(e, n) {
                        if (!e || !n || e.charAt(0) != n.charAt(0)) return 0;
                        for (var t = 0, i = Math.min(e.length, n.length), r = i, s = 0; t < r;) e.substring(s, r) == n.substring(s, r) ? s = t = r : i = r, r = Math.floor((i - t) / 2 + t);
                        return r
                    }, n.diff_commonSuffix = function(e, n) {
                        if (!e || !n || e.charAt(e.length - 1) != n.charAt(n.length - 1)) return 0;
                        for (var t = 0, i = Math.min(e.length, n.length), r = i, s = 0; t < r;) e.substring(e.length - r, e.length - s) == n.substring(n.length - r, n.length - s) ? s = t = r : i = r, r = Math.floor((i - t) / 2 + t);
                        return r
                    }, n.diff_halfMatch_ = function(e, n) {
                        var t = this;
                        if (this.Diff_Timeout <= 0) return null;
                        var i = e.length > n.length ? e : n,
                            r = e.length > n.length ? n : e;
                        if (i.length < 4 || 2 * r.length < i.length) return null;
                        var s, l, a, o, u, c = function(e, n, i) {
                                for (var r, s, l, a, o = e.substring(i, i + Math.floor(e.length / 4)), u = -1, c = ""; - 1 != (u = n.indexOf(o, u + 1));) {
                                    var d = t.diff_commonPrefix(e.substring(i), n.substring(u)),
                                        f = t.diff_commonSuffix(e.substring(0, i), n.substring(0, u));
                                    c.length < f + d && (c = n.substring(u - f, u) + n.substring(u, u + d), r = e.substring(0, i - f), s = e.substring(i + d), l = n.substring(0, u - f), a = n.substring(u + d))
                                }
                                return 2 * c.length >= e.length ? [r, s, l, a, c] : null
                            },
                            d = c(i, r, Math.ceil(i.length / 4)),
                            f = c(i, r, Math.ceil(i.length / 2));
                        return d || f ? (s = f ? d && d[4].length > f[4].length ? d : f : d, e.length > n.length ? (l = s[0], a = s[1], o = s[2], u = s[3]) : (o = s[0], u = s[1], l = s[2], a = s[3]), [l, a, o, u, s[4]]) : null
                    }, n.diff_cleanupSemantic = function(e) {
                        for (var n = !1, t = [], i = 0, a = null, o = 0, u = 0, c = 0, d = 0, f = 0; o < e.length;) e[o][0] == l ? (t[i++] = o, u = d, c = f, d = 0, f = 0, a = e[o][1]) : (e[o][0] == s ? d += e[o][1].length : f += e[o][1].length, a && a.length <= Math.max(u, c) && a.length <= Math.max(d, f) && (e.splice(t[i - 1], 0, [r, a]), e[t[i - 1] + 1][0] = s, i--, o = --i > 0 ? t[i - 1] : -1, u = 0, c = 0, d = 0, f = 0, a = null, n = !0)), o++;
                        for (n && this.diff_cleanupMerge(e), this.diff_cleanupSemanticLossless(e), o = 1; o < e.length;) {
                            if (e[o - 1][0] == r && e[o][0] == s) {
                                var h = e[o - 1][1],
                                    v = e[o][1],
                                    x = m(h, v),
                                    g = m(v, h);
                                x >= g ? (x >= h.length / 2 || x >= v.length / 2) && (e.splice(o, 0, [l, v.substring(0, x)]), e[o - 1][1] = h.substring(0, h.length - x), e[o + 1][1] = v.substring(x), o++) : (g >= h.length / 2 || g >= v.length / 2) && (e.splice(o, 0, [l, h.substring(0, g)]), e[o - 1][0] = s, e[o - 1][1] = v.substring(0, v.length - g), e[o + 1][0] = r, e[o + 1][1] = h.substring(g), o++), o++
                            }
                            o++
                        }
                    }, n.diff_cleanupSemanticLossless = function(e) {
                        for (var n = 1; n < e.length - 1;) {
                            if (e[n - 1][0] == l && e[n + 1][0] == l) {
                                var t = e[n - 1][1],
                                    i = e[n][1],
                                    r = e[n + 1][1],
                                    s = this.diff_commonSuffix(t, i);
                                if (s) {
                                    var a = i.substring(i.length - s);
                                    t = t.substring(0, t.length - s), i = a + i.substring(0, i.length - s), r = a + r
                                }
                                for (var o = t, u = i, c = r, d = f(t, i) + f(i, r); i.charAt(0) === r.charAt(0);) {
                                    t += i.charAt(0), i = i.substring(1) + r.charAt(0), r = r.substring(1);
                                    var m = f(t, i) + f(i, r);
                                    m >= d && (d = m, o = t, u = i, c = r)
                                }
                                e[n - 1][1] != o && (o ? e[n - 1][1] = o : (e.splice(n - 1, 1), n--), e[n][1] = u, c ? e[n + 1][1] = c : (e.splice(n + 1, 1), n--))
                            }
                            n++
                        }
                    }, n.diff_cleanupEfficiency = function(e) {
                        for (var n = !1, t = [], i = 0, a = null, o = 0, u = !1, c = !1, d = !1, f = !1; o < e.length;) e[o][0] == l ? (e[o][1].length < this.Diff_EditCost && (d || f) ? (t[i++] = o, u = d, c = f, a = e[o][1]) : (i = 0, a = null), d = f = !1) : (e[o][0] == r ? f = !0 : d = !0, a && (u && c && d && f || a.length < this.Diff_EditCost / 2 && u + c + d + f == 3) && (e.splice(t[i - 1], 0, [r, a]), e[t[i - 1] + 1][0] = s, i--, a = null, u && c ? (d = f = !0, i = 0) : (o = --i > 0 ? t[i - 1] : -1, d = f = !1), n = !0)), o++;
                        n && this.diff_cleanupMerge(e)
                    }, n.diff_cleanupMerge = function(e) {
                        e.push([l, ""]);
                        for (var n, t = 0, i = 0, a = 0, o = "", u = ""; t < e.length;) switch (e[t][0]) {
                            case s:
                                a++, u += e[t][1], t++;
                                break;
                            case r:
                                i++, o += e[t][1], t++;
                                break;
                            case l:
                                i + a > 1 ? (0 !== i && 0 !== a && (0 !== (n = this.diff_commonPrefix(u, o)) && (t - i - a > 0 && e[t - i - a - 1][0] == l ? e[t - i - a - 1][1] += u.substring(0, n) : (e.splice(0, 0, [l, u.substring(0, n)]), t++), u = u.substring(n), o = o.substring(n)), 0 !== (n = this.diff_commonSuffix(u, o)) && (e[t][1] = u.substring(u.length - n) + e[t][1], u = u.substring(0, u.length - n), o = o.substring(0, o.length - n))), 0 === i ? e.splice(t - a, i + a, [s, u]) : 0 === a ? e.splice(t - i, i + a, [r, o]) : e.splice(t - i - a, i + a, [r, o], [s, u]), t = t - i - a + (i ? 1 : 0) + (a ? 1 : 0) + 1) : 0 !== t && e[t - 1][0] == l ? (e[t - 1][1] += e[t][1], e.splice(t, 1)) : t++, a = 0, i = 0, o = "", u = ""
                        }
                        "" === e[e.length - 1][1] && e.pop();
                        var c = !1;
                        for (t = 1; t < e.length - 1;) e[t - 1][0] == l && e[t + 1][0] == l && (e[t][1].substring(e[t][1].length - e[t - 1][1].length) == e[t - 1][1] ? (e[t][1] = e[t - 1][1] + e[t][1].substring(0, e[t][1].length - e[t - 1][1].length), e[t + 1][1] = e[t - 1][1] + e[t + 1][1], e.splice(t - 1, 1), c = !0) : e[t][1].substring(0, e[t + 1][1].length) == e[t + 1][1] && (e[t - 1][1] += e[t + 1][1], e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1], e.splice(t + 1, 1), c = !0)), t++;
                        c && this.diff_cleanupMerge(e)
                    }, e
                }()
        },
        56098: function(e, n, t) {
            t.d(n, {
                D: function() {
                    return u
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(64529),
                l = t(782),
                a = t(69355),
                o = t(60195),
                u = (0, s.Ue)((0, l.$e)({
                    expanded: !1,
                    activeTab: a.rf.Testcase,
                    visualiserEnabled: !0,
                    enableRawTestcase: !0,
                    testcaseMode: function() {
                        var e;
                        return null !== (e = localStorage.getItem(o.gG)) && void 0 !== e ? e : o.dd.Tab
                    }(),
                    testResultMode: function() {
                        var e;
                        return null !== (e = localStorage.getItem(o.EX)) && void 0 !== e ? e : o.dd.Tab
                    }(),
                    testResultModeFocusLine: 0,
                    testResultModeFocusCase: 0,
                    testResultModeFocusCaseParam: "",
                    hasShownSourceModePopover: function() {
                        var e;
                        return null !== (e = localStorage.getItem(a.sh)) && void 0 !== e && e
                    }(),
                    showInconsistentResultPopover: !1,
                    consolePosition: function() {
                        var e;
                        return null !== (e = localStorage.getItem(a.DB)) && void 0 !== e ? e : a.aD.Right
                    }(),
                    enableRunCode: !0,
                    enableSubmit: !0,
                    enableTestMode: !1,
                    enableDebugger: !0,
                    editor: null,
                    showAiChat: !1,
                    isHiddenConsole: !1,
                    isVerifyEmailModalVisible: !1,
                    verifyEmailModalSource: void 0
                }, (function(e, n) {
                    return {
                        setExpanded: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    expanded: n
                                })
                            }))
                        },
                        setActiveTab: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    activeTab: n
                                })
                            }))
                        },
                        setVisualiserEnabled: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    visualiserEnabled: n
                                })
                            }))
                        },
                        setEnableRawTestcase: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    enableRawTestcase: n
                                })
                            }))
                        },
                        toggleTestcaseMode: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.gG,
                                s = n().testcaseMode === o.dd.Tab,
                                l = s ? o.dd.Text : o.dd.Tab,
                                u = n().hasShownSourceModePopover;
                            return localStorage.setItem(t, l), l === o.dd.Text && (localStorage.setItem(a.sh, String(!0)), u = !0), e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    testcaseMode: l,
                                    hasShownSourceModePopover: u
                                })
                            }))
                        },
                        setTestcaseMode: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    testcaseMode: n
                                })
                            }))
                        },
                        toggleTestResultMode: function() {
                            var t = n().testResultMode === o.dd.Tab ? o.dd.Text : o.dd.Tab;
                            return localStorage.setItem(o.EX, t), e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    testResultMode: t
                                })
                            }))
                        },
                        setTestResultMode: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    testResultMode: n
                                })
                            }))
                        },
                        setTestResultModeLine: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    testResultModeFocusLine: n
                                })
                            }))
                        },
                        setTestResultModeCase: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    testResultModeFocusCase: n
                                })
                            }))
                        },
                        setTestResultModeCaseParam: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    testResultModeFocusCaseParam: n
                                })
                            }))
                        },
                        setShownSourceModePopover: function() {
                            return localStorage.setItem(a.sh, String(!0)), e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    hasShownSourceModePopover: !0
                                })
                            }))
                        },
                        setShowInconsistentResultPopover: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    showInconsistentResultPopover: n
                                })
                            }))
                        },
                        toggleInconsistentResult: function() {
                            var t = !n().showInconsistentResultPopover;
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    showInconsistentResultPopover: t
                                })
                            }))
                        },
                        toggleConsolePosition: function() {
                            var t = n().consolePosition === a.aD.Right ? a.aD.Left : a.aD.Right;
                            return localStorage.setItem(a.DB, t), e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    consolePosition: t
                                })
                            }))
                        },
                        setEnableRunCode: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    enableRunCode: n
                                })
                            }))
                        },
                        setEnableSubmit: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    enableSubmit: n
                                })
                            }))
                        },
                        setEnableTestMode: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    enableTestMode: n
                                })
                            }))
                        },
                        setEnableDebugger: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    enableDebugger: n
                                })
                            }))
                        },
                        setEditor: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    editor: n
                                })
                            }))
                        },
                        setShowAiChat: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    showAiChat: n
                                })
                            }))
                        },
                        setIsHiddenConsole: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    isHiddenConsole: n
                                })
                            }))
                        },
                        setIsVerifyEmailModalVisible: function(n, t) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    isVerifyEmailModalVisible: n,
                                    verifyEmailModalSource: t
                                })
                            }))
                        }
                    }
                })))
        },
        65262: function(e, n, t) {
            t.d(n, {
                j: function() {
                    return I
                }
            });
            var i = t(85893),
                r = t(67294),
                s = t(11321),
                l = t(12922),
                a = t(10253),
                o = t(29815),
                u = t(30845),
                c = t(64075),
                d = t(51438),
                f = function() {
                    function e() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                        (0, d.Z)(this, e), this.clear(), this.max = n, this.first = 0, this.last = 0, this.data = []
                    }
                    var n = e.prototype;
                    return n.head = function() {
                        if (this.first !== this.last) return this.data[this.first % this.max]
                    }, n.enqueue = function() {
                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                        for (var i = 0, r = n.length; i < r; i++) {
                            if (this.isFull()) throw new Error("[Enqueue Failure]: Queue is full.(".concat(this.max, ")"));
                            this.data[this.last++ % this.max] = n[i]
                        }
                    }, n.dequeue = function() {
                        if (!this.isEmpty()) return this.data[this.first++ % this.max]
                    }, n.isFull = function() {
                        return this.last - this.first === this.max
                    }, n.isEmpty = function() {
                        return void 0 === this.head()
                    }, n.clear = function() {
                        this.data = [], this.first = 0, this.last = 0
                    }, e
                }(),
                m = function e(n) {
                    (0, d.Z)(this, e), this.val = n, this.left = null, this.right = null
                };
            var h = c.G_s(),
                v = {
                    name: "",
                    isNull: !0,
                    depth: 0,
                    width: 0,
                    children: null
                },
                x = {
                    name: "...",
                    depth: 0,
                    children: [v, v],
                    isNull: !1,
                    width: 1
                };

            function g(e) {
                var n = null === e,
                    t = {
                        children: null,
                        name: n ? "" : e.val.toString(),
                        isNull: n,
                        depth: 0,
                        width: 0
                    };
                if (n) return t;
                var i = g(e.left),
                    r = g(e.right),
                    s = Math.max(i.depth, r.depth) + 1,
                    l = i.width + r.width,
                    a = l < 2 ? l + 1 : l;
                return t.children = [i, r], t.depth = s, t.width = a, t
            }
            var p = (0, u.default)((function(e, n, t) {
                    var i = JSON.parse(e);
                    if (!Array.isArray(i)) throw new Error;
                    var r, s = g(function(e) {
                            var n = function(e) {
                                return null === e || void 0 === e
                            };
                            if (!Array.isArray(e)) throw new TypeError("Cannot parse a non-array type.");
                            if (0 === e.length) return null;
                            if (null === e[0]) throw new Error("Root of Tree cannot be `null`.");
                            var t = new f,
                                i = new m(e[0]);
                            t.enqueue(i);
                            for (var r, s, l, a = 0; !t.isEmpty();) r = t.dequeue(), s = e[a + 1], l = e[a + 2], r.left = n(s) ? null : new m(s), r.right = n(l) ? null : new m(l), r.left && t.enqueue(r.left), r.right && t.enqueue(r.right), a += 2;
                            return i
                        }(i)),
                        l = (0, a.Z)(function(e, n, t) {
                            for (var i = [e], r = !1, s = 1; i.length > 0;) {
                                var l = [],
                                    a = 0,
                                    u = !0,
                                    c = !1,
                                    d = void 0;
                                try {
                                    for (var f, m = i[Symbol.iterator](); !(u = (f = m.next()).done); u = !0) {
                                        var h = f.value;
                                        h.children && (a += h.children.filter((function(e) {
                                            return !e.isNull
                                        })).length)
                                    }
                                } catch (R) {
                                    c = !0, d = R
                                } finally {
                                    try {
                                        u || null == m.return || m.return()
                                    } finally {
                                        if (c) throw d
                                    }
                                }
                                if (s + 1 >= n || a > t) {
                                    var v = !0,
                                        g = !1,
                                        p = void 0;
                                    try {
                                        for (var b, y = i[Symbol.iterator](); !(v = (b = y.next()).done); v = !0) {
                                            var C = b.value;
                                            C.children && (C.children = C.children.map((function(e) {
                                                return !e.isNull && e.children.filter((function(e) {
                                                    return !e.isNull
                                                })).length > 0 ? (r = !0, x) : e
                                            })))
                                        }
                                    } catch (R) {
                                        g = !0, p = R
                                    } finally {
                                        try {
                                            v || null == y.return || y.return()
                                        } finally {
                                            if (g) throw p
                                        }
                                    }
                                    break
                                }
                                var j = !0,
                                    w = !1,
                                    N = void 0;
                                try {
                                    for (var Z, I = i[Symbol.iterator](); !(j = (Z = I.next()).done); j = !0) {
                                        var k, T = Z.value;
                                        T.children && (k = l).push.apply(k, (0, o.Z)(T.children.filter((function(e) {
                                            return !e.isNull
                                        }))))
                                    }
                                } catch (R) {
                                    w = !0, N = R
                                } finally {
                                    try {
                                        j || null == I.return || I.return()
                                    } finally {
                                        if (w) throw N
                                    }
                                }
                                i = l, s++
                            }
                            var S = function(e) {
                                if (e.isNull) return e;
                                e.children.forEach(S), e.depth = e.children.reduce((function(e, n) {
                                    return Math.max(e, n.depth)
                                }), 0) + 1;
                                var n = e.children.reduce((function(e, n) {
                                    return e + n.width
                                }), 0);
                                return e.width = n < 2 ? n + 1 : n, e
                            };
                            return [S(e), r]
                        }(s, n, t), 2),
                        u = l[0],
                        d = l[1];
                    return r = u, h.size([40 * r.width + 40 * r.depth / 6, 40 * r.depth]), {
                        isTruncated: d,
                        rootNode: h(c.bT9(u))
                    }
                })),
                b = t(14924),
                y = t(94184),
                C = t.n(y),
                j = {
                    width: 400,
                    height: 400
                },
                w = function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n,
                        s = e.dimensions,
                        l = void 0 === s ? j : s,
                        a = e.rootNode,
                        o = (0, r.useRef)(null),
                        u = (0, r.useRef)(null);
                    if (null === a) return null;
                    var c = a.descendants().reduce((function(e, n) {
                            return e.y > n.y ? e : n
                        })),
                        d = a.descendants().reduce((function(e, n) {
                            return e.x > n.x ? e : n
                        })),
                        f = l.width,
                        m = l.height;
                    f || (f = d.x), m || (m = c.y + 25);
                    var h = C()((0, b.Z)({
                        "data-structure-viewer": !0
                    }, t, !!t));
                    return (0, i.jsx)("div", {
                        className: h,
                        children: (0, i.jsx)("svg", {
                            width: f,
                            height: m,
                            viewBox: "0 0 ".concat(f, " ").concat(m),
                            preserveAspectRatio: "xMinYMin",
                            ref: o,
                            children: (0, i.jsx)("g", {
                                transform: "translate(".concat(f / 2 - a.x, ", ").concat(25, ")"),
                                children: (0, i.jsxs)("g", {
                                    ref: u,
                                    children: [null === a ? null : a.descendants().slice(1).filter((function(e) {
                                        return !e.data.isNull
                                    })).map((function(e, n) {
                                        return (0, i.jsx)("line", {
                                            className: "stroke-dark-paper dark:stroke-paper stroke-1",
                                            x1: e.parent ? e.parent.x : void 0,
                                            y1: e.parent ? e.parent.y : void 0,
                                            x2: e.x,
                                            y2: e.y
                                        }, n)
                                    })), null === a ? null : a.descendants().filter((function(e) {
                                        return !e.data.isNull
                                    })).map((function(e, n) {
                                        return (0, i.jsxs)("g", {
                                            transform: "translate(".concat(e.x, ", ").concat(e.y, ")"),
                                            children: [(0, i.jsx)("circle", {
                                                r: "1.2em",
                                                className: "fill-layer-1 stroke-dark-paper dark:fill-dark-layer-1 dark:stroke-paper stroke-1"
                                            }), (0, i.jsx)("foreignObject", {
                                                width: "2.4em",
                                                height: "2.4em",
                                                x: "-1.2em",
                                                y: "-1.2em",
                                                children: (0, i.jsx)("div", {
                                                    className: "text-label-1 dark:text-dark-label-1 flex h-full w-full items-center justify-center p-[2px]",
                                                    children: (0, i.jsx)("span", {
                                                        className: "overflow-ellipsis",
                                                        title: e.data.name,
                                                        children: e.data.name
                                                    })
                                                })
                                            })]
                                        }, n)
                                    }))]
                                })
                            })
                        })
                    })
                },
                N = t(76831),
                Z = t(69355),
                I = function(e) {
                    var n = e.data,
                        t = e.paramType,
                        a = e.onErrorChange,
                        o = e.className,
                        u = e.onTruncateChange,
                        c = e.maxDepth,
                        d = void 0 === c ? 5 : c,
                        f = (0, s.$G)("console").t,
                        m = (0, r.useState)(null),
                        h = m[0],
                        v = m[1],
                        x = (0, N.a)(h),
                        g = (null === x || void 0 === x ? void 0 : x.width) ? x.width - 10 : 400,
                        b = function(e) {
                            return e > 1700 ? 32 : e > 1300 ? 16 : e > 700 ? 8 : e > 400 ? 4 : 2
                        }(g),
                        y = function(e, n, t) {
                            var i = (0, r.useState)(null),
                                s = i[0],
                                l = i[1],
                                a = (0, r.useState)(!1),
                                o = a[0],
                                u = a[1],
                                c = (0, r.useState)(!1),
                                d = c[0],
                                f = c[1];
                            return (0, r.useEffect)((function() {
                                try {
                                    var i = p(e, n, t);
                                    l(i.rootNode), f(!1), i.isTruncated ? u(!0) : u(!1)
                                } catch (r) {
                                    f(!0)
                                }
                            }), [e, n, t]), {
                                lastValidTree: s,
                                isTreeTruncated: o,
                                isParseFailed: d
                            }
                        }(n, d || 1 / 0, b),
                        C = y.lastValidTree,
                        j = y.isTreeTruncated,
                        I = y.isParseFailed;
                    return (0, r.useEffect)((function() {
                        var e = "";
                        null === u || void 0 === u || u(j), I && (e = f("visualizer.parseFailed")), null === a || void 0 === a || a(e)
                    }), [f, u, a, j, I]), t === Z.sH.Tree ? (0, i.jsx)("div", {
                        ref: v,
                        className: (0, l.yI)("max-h-[350px] min-h-[100px] overflow-x-auto overflow-y-hidden", o),
                        children: (0, i.jsx)(w, {
                            rootNode: C,
                            dimensions: {
                                width: g
                            }
                        })
                    }) : null
                }
        },
        11422: function(e, n, t) {
            t.d(n, {
                a: function() {
                    return a
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(64529),
                l = (0, t(782).$e)({
                    isFrameworkHighlighted: !1,
                    isActive: !1
                }, (function(e) {
                    return {
                        setIsFrameworkHighlighted: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    isFrameworkHighlighted: n
                                })
                            }))
                        },
                        setIsActive: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    isActive: n
                                })
                            }))
                        }
                    }
                })),
                a = (0, s.Ue)(l)
        },
        25790: function(e, n, t) {
            t.d(n, {
                AC: function() {
                    return K
                },
                gi: function() {
                    return q
                },
                Ey: function() {
                    return $
                },
                G4: function() {
                    return V
                },
                TM: function() {
                    return Q
                },
                aV: function() {
                    return L
                }
            });
            var i = t(14924),
                r = t(26042),
                s = t(69396),
                l = t(99534),
                a = t(10253),
                o = t(85893),
                u = t(11321),
                c = t(67294),
                d = t(50576),
                f = t(62758),
                m = t(15371),
                h = t(69485),
                v = t(12922),
                x = t(83269),
                g = t(79865),
                p = t(27632),
                b = t(29297),
                y = t(79975),
                C = t(93769),
                j = t(52872),
                w = t(49037),
                N = t(27375),
                Z = t(92320),
                I = t(11516),
                k = t(94385),
                T = t(81117),
                S = t(80043),
                R = t(56098),
                M = t(69355),
                E = function(e) {
                    var n, t = e.failedTestcase,
                        i = e.testcaseIndex,
                        r = e.paramIndex,
                        s = e.onClick,
                        l = (0, u.$G)("console", {
                            keyPrefix: "result"
                        }).t,
                        a = (0, S.n)((function(e) {
                            return e.setActiveTestcaseWithParam
                        })),
                        d = (0, R.D)((function(e) {
                            return e.setActiveTab
                        })),
                        f = Boolean(null === (n = (0, k.u)()) || void 0 === n ? void 0 : n.data),
                        h = (0, w.h)(),
                        x = (0, S.n)((function(e) {
                            return e.testcaseList
                        })),
                        g = (0, c.useMemo)((function() {
                            return Array.isArray(x) && x.length > 0 && Array.isArray(x[0])
                        }), [x]),
                        p = (0, c.useMemo)((function() {
                            return g ? x : []
                        }), [g, x]),
                        b = (0, c.useMemo)((function() {
                            var e = function(e, n, t) {
                                    return {
                                        matchedTestcase: void 0 !== n && n < e.length ? n : -1,
                                        matchedParam: void 0 !== t ? t : 0
                                    }
                                }(p, i, r),
                                n = e.matchedTestcase,
                                s = e.matchedParam;
                            return -1 !== n ? {
                                matchedTestcase: n,
                                matchedParam: s
                            } : void 0 !== t ? function(e, n) {
                                for (var t = 0; t < e.length; t++)
                                    for (var i = e[t], r = 0; r < i.length; r++)
                                        if (n === i[r]) return {
                                            matchedTestcase: t,
                                            matchedParam: r
                                        };
                                return {
                                    matchedTestcase: -1,
                                    matchedParam: 0
                                }
                            }(p, t) : {
                                matchedTestcase: -1,
                                matchedParam: 0
                            }
                        }), [p, t, r, i]),
                        y = b.matchedTestcase,
                        C = b.matchedParam,
                        j = (0, c.useCallback)((function() {
                            -1 !== y && (a(y, C), f ? null === h || void 0 === h || h.selectTab(N.r.Testcase) : d(M.rf.Testcase), null === s || void 0 === s || s())
                        }), [y, a, C, f, s, h, d]);
                    return -1 === y ? null : (0, o.jsxs)("div", {
                        className: "flex items-center text-xs font-medium",
                        children: [(0, o.jsxs)("div", {
                            className: (0, v.yI)("flex-1", m.Cj.label3),
                            children: ["Case ", y + 1]
                        }), (0, o.jsxs)("div", {
                            className: (0, v.yI)("flex cursor-pointer items-center gap-1 px-2 py-1 transition-colors", m.Cj.label2, m.Cj.label1Hover),
                            onClick: j,
                            children: [(0, o.jsx)(T.P, {
                                className: "h-4 w-4"
                            }), (0, o.jsx)("span", {
                                children: l("edit")
                            })]
                        })]
                    })
                },
                _ = t(21790),
                A = t(65262),
                D = t(19598),
                P = t(26164),
                W = t(30029),
                B = t(61476),
                F = 1e3,
                U = 1e5,
                L = function(e) {
                    var n = e.testcasePassed,
                        t = e.totalTestcases,
                        i = (0, u.$G)("console").t;
                    return void 0 === n || void 0 === t ? null : (0, o.jsxs)("div", {
                        className: (0, v.yI)("text-xs", m.Cj.label3),
                        children: [(0, o.jsx)("span", {
                            className: (0, v.yI)(m.Cj.label3, "mr-1 text-xs font-medium"),
                            children: "".concat(n, " / ").concat(t, " ")
                        }), i("result.testcasesPassed")]
                    })
                },
                q = function(e) {
                    var n, t = e.input,
                        r = (0, u.$G)("console").t,
                        s = (0, C.z2)((function(e) {
                            return e.questionSlug
                        })),
                        l = (0, w.h)(),
                        a = (0, y.Q)(s).data,
                        f = (0, S.n)((function(e) {
                            return e.addTestcase
                        })),
                        h = !(0, S.n)((function(e) {
                            return e.canAddTestcase
                        }))(),
                        p = (0, S.n)((function(e) {
                            return e.testcaseList
                        })),
                        j = (0, S.n)((function(e) {
                            return e.setActiveTestcase
                        })),
                        Z = a.metaData,
                        I = (0, c.useMemo)((function() {
                            return (0, _.Ii)(Z)
                        }), [Z]).type,
                        k = (0, B.s8)(I, [t])[0],
                        T = (0, c.useCallback)((function() {
                            var e = p.findIndex((function(e) {
                                return (0, d.Z)(e, k)
                            })); - 1 === e ? f(k) : j(e), null === l || void 0 === l || l.selectTab(N.r.Testcase), null === l || void 0 === l || l.unfoldTab(N.r.Testcase), null === l || void 0 === l || l.highlightTab(N.r.Testcase), b.d.qdQuickTestClick({
                                qd_version: (0, x.in)(),
                                qd_question_slug: s
                            })
                        }), [l, f, s, j, k, p]);
                    return (0, o.jsx)(W.z, {
                        tooltipText: h ? r("result.cantUseTestcaseAsInput") : void 0,
                        onClick: h ? void 0 : T,
                        children: (0, o.jsxs)("div", {
                            className: (0, v.yI)("flex items-center", "flex-row-reverse"),
                            children: [(0, o.jsx)("span", {
                                className: (0, v.yI)("text-xs", (n = {}, (0, i.Z)(n, m.Cj.label4, h), (0, i.Z)(n, m.Cj.label2, !h), (0, i.Z)(n, "testcaseAsInputClass", "ml-2"), n)),
                                children: r("result.useTestcaseAsInput")
                            }), (0, o.jsx)(g.H, {
                                width: 16,
                                height: 16,
                                className: (0, v.yI)("fill-gray-6 dark:fill-dark-gray-6", {
                                    "group-hover:fill-gray-7 dark:group-hover:fill-dark-gray-7": !h,
                                    "cursor-not-allowed": h
                                })
                            })]
                        })
                    })
                },
                z = function(e) {
                    var n = e.diffs;
                    return (0, o.jsx)(o.Fragment, {
                        children: n.map((function(e, n) {
                            var t = (0, a.Z)(e, 2),
                                i = t[0],
                                r = t[1];
                            switch (i) {
                                case P.D$:
                                    return (0, o.jsx)("span", {
                                        className: "leading-3.5 text-green-s dark:text-dark-green-s ",
                                        children: r
                                    }, n);
                                case P.NL:
                                    return (0, o.jsx)("span", {
                                        className: "leading-3.5 text-red-s dark:text-dark-red-s",
                                        children: r
                                    }, n);
                                default:
                                    return (0, o.jsx)("span", {
                                        children: r
                                    }, n)
                            }
                        }))
                    })
                },
                H = function(e) {
                    var n = e.diffs,
                        t = (0, c.useMemo)((function() {
                            var e = n.length;
                            if (!e) return [];
                            for (var t = [(0, o.jsx)(z, {
                                    diffs: n[0]
                                }, 0)], i = 1; i < e; i++) t.push((0, o.jsx)("br", {}, "br_".concat(i))), t.push((0, o.jsx)(z, {
                                diffs: n[i]
                            }, i));
                            return t
                        }), [n]);
                    return (0, o.jsx)(o.Fragment, {
                        children: t
                    })
                },
                O = function(e) {
                    var n = e.content,
                        t = (0, l.Z)(e, ["content"]),
                        i = (0, u.$G)("console").t,
                        a = (0, c.useMemo)((function() {
                            if (n.length <= F) return n;
                            var e = n.split("\n").map((function(e) {
                                return e.length <= F ? e : "".concat(e.substring(0, F), "...")
                            }));
                            if (e.length <= U) return e.join("\n");
                            var t = e.length - U;
                            return e.slice(0, U).join("\n") + "\n... ".concat(t, " ").concat(i("result.moreLine", {
                                count: t
                            }))
                        }), [i, n]);
                    return (0, o.jsx)(Z.jk, (0, s.Z)((0, r.Z)({}, t), {
                        children: (0, o.jsx)("div", {
                            children: a
                        })
                    }))
                },
                G = function(e) {
                    var n, t = e.paramName,
                        r = e.content,
                        s = e.paramType,
                        l = e.visualiserEnabled,
                        d = e.visualiserSupported,
                        f = e.diffs,
                        g = e.diffEnabled,
                        p = (0, c.useState)(""),
                        y = p[0],
                        j = p[1],
                        w = y && l,
                        N = d && l,
                        I = N && w,
                        k = !N,
                        T = (0, u.$G)("console").t,
                        S = (0, c.useMemo)((function() {
                            if (!f) return [];
                            var e = [],
                                n = 0;
                            return f.forEach((function(t) {
                                if (!(n > F)) {
                                    var i = [];
                                    t.forEach((function(e) {
                                        var t = (0, a.Z)(e, 2),
                                            r = t[0],
                                            s = t[1];
                                        n > F || ((n += s.length) > F ? (i.push([r, s.slice(0, F - n)]), i.push([P.JZ, "..."])) : i.push([r, s]))
                                    })), e.push(i)
                                }
                            })), e
                        }), [f]),
                        R = S && S.reduce((function(e, n) {
                            return e + n.length
                        }), 0) > 0,
                        M = (0, c.useState)(!1),
                        E = M[0],
                        _ = M[1],
                        W = (0, c.useState)(!1),
                        B = W[0],
                        U = W[1],
                        L = (0, C.z2)((function(e) {
                            return e.questionSlug
                        })),
                        q = (0, h.z)((function() {
                            b.d.qdCheckAllTreeClick({
                                qd_version: (0, x.in)(),
                                qd_question_slug: L
                            }), U(!0)
                        }));
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: (0, v.yI)("group relative rounded-lg", (n = {}, (0, i.Z)(n, m.Cj.fill4, !l), (0, i.Z)(n, m.Cj.dividerBorder2, l), (0, i.Z)(n, "border-[1px]", l), (0, i.Z)(n, "outline-red-s dark:outline-dark-red-s outline outline-1", w), n)),
                            children: (0, o.jsxs)("div", {
                                className: "relative py-3",
                                children: [N && (0, o.jsx)(A.j, {
                                    data: r,
                                    paramType: s,
                                    onErrorChange: j,
                                    className: (0, v.yI)({
                                        "invisible absolute top-0": w
                                    }),
                                    onTruncateChange: _
                                }), I && (0, o.jsx)(O, {
                                    header: (0, o.jsxs)(o.Fragment, {
                                        children: [" ", t && (0, o.jsxs)("div", {
                                            className: (0, v.yI)("mx-3 mb-2 text-xs", m.Cj.label3),
                                            children: [t, " ="]
                                        })]
                                    }),
                                    lines: 8,
                                    showViewAll: !0,
                                    content: r,
                                    copyValue: r,
                                    copyBtnClassName: "absolute right-0 top-0",
                                    truncatedResultClassName: (0, v.yI)("font-menlo mx-3 whitespace-pre-wrap leading-5 break-all", m.Cj.label1)
                                }), k && (0, o.jsx)(o.Fragment, {
                                    children: g && R ? (0, o.jsxs)("div", {
                                        className: (0, v.yI)("font-menlo relative mx-3 whitespace-pre-wrap break-all leading-5", m.Cj.label1),
                                        children: [(0, o.jsx)(Z.nC, {
                                            copyValue: r,
                                            className: "absolute right-0 top-0"
                                        }), (0, o.jsx)(H, {
                                            diffs: S
                                        })]
                                    }) : (0, o.jsx)(O, {
                                        header: (0, o.jsx)(o.Fragment, {
                                            children: t && (0, o.jsxs)("div", {
                                                className: (0, v.yI)("mx-3 mb-2 text-xs", m.Cj.label3),
                                                children: [t, " ="]
                                            })
                                        }),
                                        lines: 8,
                                        showViewAll: !0,
                                        content: r,
                                        copyValue: r,
                                        copyBtnClassName: "absolute right-3 top-2.5 z-base-1",
                                        truncatedResultClassName: (0, v.yI)("font-menlo mx-3 whitespace-pre-wrap break-all leading-5", m.Cj.label1)
                                    })
                                })]
                            })
                        }), N && (0, o.jsxs)(o.Fragment, {
                            children: [E && (0, o.jsx)("div", {
                                className: (0, v.yI)("cursor-pointer text-xs", m.Cj.labelBlueStandard),
                                onClick: q,
                                children: T("showFullTree")
                            }), E && (0, o.jsx)(D.K, {
                                visible: B,
                                onCancel: function() {
                                    return U(!1)
                                },
                                data: r,
                                paramType: s
                            })]
                        }), w && (0, o.jsx)(Z.xW, {
                            children: (0, o.jsx)("div", {
                                className: (0, v.yI)("text-xs", m.Cj.labelRedStandard),
                                children: y
                            })
                        })]
                    })
                },
                V = function(e) {
                    var n = e.metadata,
                        t = e.input,
                        i = e.visualise,
                        r = (0, a.Z)((0, _.Zl)(n, t), 4),
                        s = r[0],
                        l = r[1],
                        u = r[2],
                        c = r[3];
                    return (0, o.jsx)("div", {
                        className: "space-y-2",
                        children: l.map((function(e, n) {
                            return (0, o.jsx)(G, {
                                paramName: n < s.length ? s[n] : "",
                                content: e,
                                paramType: n < u.length ? u[n] : "",
                                visualiserSupported: n < c.length && c[n],
                                visualiserEnabled: i,
                                diffEnabled: !1
                            }, n)
                        }))
                    })
                },
                $ = function(e) {
                    var n = (0, u.$G)("console").t;
                    return (0, o.jsxs)("div", {
                        children: [(0, o.jsx)("div", {
                            className: (0, v.yI)("mb-2 text-xs font-medium", m.Cj.label3),
                            children: n("result.input")
                        }), (0, o.jsx)(V, (0, r.Z)({}, e))]
                    })
                },
                Q = function(e) {
                    var n, t = e.heading,
                        i = e.metadata,
                        r = e.output,
                        s = e.diffs,
                        l = e.visualise,
                        a = e.diffEnabled,
                        c = (0, u.$G)("console").t,
                        d = (null === i || void 0 === i ? void 0 : i.type) === j.tn.Algorithm && (null === (n = i.return) || void 0 === n ? void 0 : n.type) || "",
                        h = (null === i || void 0 === i ? void 0 : i.type) === j.tn.Algorithm && M.hg[i.type] && (0, _.kV)(d);
                    return (0, o.jsxs)("div", {
                        className: "flex h-full w-full flex-col space-y-2",
                        children: [(0, o.jsx)("div", {
                            className: (0, v.yI)("flex text-xs font-medium", m.Cj.label3),
                            children: t
                        }), (0, o.jsx)(G, {
                            paramName: "",
                            content: r,
                            paramType: d,
                            visualiserSupported: h,
                            visualiserEnabled: !!l,
                            diffEnabled: !!a,
                            diffs: s
                        }), !h && !!l && (0, o.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [(0, o.jsx)(f.u, {
                                label: c("visualizer.outputDataTypeNotSupported"),
                                children: (0, o.jsx)(p.a, {
                                    width: 14,
                                    height: 14,
                                    className: (0, v.yI)(m.Cj.labelGrey6, m.Cj.labelGrey7Hover)
                                })
                            }), (0, o.jsx)("div", {
                                className: (0, v.yI)("ml-1.5 text-xs", m.Cj.label3),
                                children: c("visualizer.dataNotSupported")
                            })]
                        })]
                    })
                },
                K = function(e) {
                    var n = e.heading,
                        t = e.errorMessage,
                        r = e.stdout,
                        s = e.testcasesPassed,
                        l = e.totalTestcases,
                        a = e.children,
                        d = e.testcaseIndex,
                        f = e.paramIndex,
                        h = e.invalidTestcase,
                        x = e.passedButTookTooLong,
                        p = e.className,
                        b = e.exceptionalTestcase,
                        j = e.errorLines,
                        T = e.errorClassName,
                        A = (0, u.$G)("console").t,
                        D = (0, c.useMemo)((function() {
                            if (h) return (0, _.B1)(t || "")
                        }), [h, t]),
                        P = (0, C.z2)((function(e) {
                            return e.questionSlug
                        })),
                        W = (0, y.Q)(P).data.metaData,
                        B = (0, c.useMemo)((function() {
                            return (0, _.Ii)(W)
                        }), [W]),
                        F = (0, S.n)((function(e) {
                            return e.setActiveTestcaseWithParam
                        })),
                        U = (0, R.D)((function(e) {
                            return e.setActiveTab
                        })),
                        q = (0, k.u)().data,
                        z = (0, w.h)(),
                        H = (0, c.useCallback)((function() {
                            !b || b.testcaseIndex < 0 || (F(b.testcaseIndex, b.paramIndex), q ? (null === z || void 0 === z || z.selectTab(N.r.Testcase), null === z || void 0 === z || z.unfoldTab(N.r.Testcase), null === z || void 0 === z || z.highlightTab(N.r.Testcase)) : U(M.rf.Testcase))
                        }), [z, b, q, U, F]);
                    return (0, o.jsxs)("div", {
                        className: (0, v.yI)("mx-5 my-4 space-y-4", (0, i.Z)({}, "space-y-2", void 0 !== d), p),
                        children: [n && (0, o.jsx)("div", {
                            className: "flex items-center",
                            children: (0, o.jsxs)("div", {
                                className: "flex w-full flex-wrap items-center",
                                children: [(0, o.jsx)("span", {
                                    className: (0, v.yI)("mr-1 flex-1 whitespace-nowrap text-xl font-medium", m.Cj.labelRedStandard),
                                    "data-e2e-locator": "console-result",
                                    children: n
                                }), (0, o.jsx)(L, {
                                    testcasePassed: s,
                                    totalTestcases: l
                                })]
                            })
                        }), x && (0, o.jsx)("div", {
                            className: (0, v.yI)(m.Cj.fill4, m.Cj.labelRedStandard, "mb-4 flex w-full flex-col gap-4 rounded-lg px-3 py-2 text-xs"),
                            children: A("result.testPassedButTookTooLong")
                        }), h && (0, o.jsx)("div", {
                            children: (0, o.jsx)(E, {
                                failedTestcase: D,
                                testcaseIndex: d,
                                paramIndex: f
                            })
                        }), t && (0, o.jsx)("div", {
                            className: (0, v.yI)("group relative rounded-lg bg-[rgba(246,54,54,0.08)] px-3 py-4 dark:bg-[rgba(248,97,92,0.08)]", T),
                            children: (0, o.jsx)(Z.jk, {
                                showViewAll: !0,
                                copyValue: t,
                                copyBtnClassName: "absolute right-2.5 top-2.5",
                                lines: j,
                                children: (0, o.jsx)("div", {
                                    className: (0, v.yI)("font-menlo whitespace-pre-wrap break-all text-xs", I.nx.labelRed60),
                                    children: t
                                })
                            })
                        }), a, r && (0, o.jsxs)("div", {
                            className: "flex h-full w-full flex-col space-y-2 rounded-lg",
                            children: [(0, o.jsx)("div", {
                                className: (0, v.yI)("flex flex-row text-[12px] font-medium", I.nx.labelTextTertiary),
                                children: (0, o.jsx)("span", {
                                    children: A("result.stdout")
                                })
                            }), (0, o.jsx)("div", {
                                className: (0, v.yI)("relative rounded-lg px-3 py-[10px]", I.nx.bgFillQuaternary),
                                children: (0, o.jsx)("div", {
                                    className: (0, v.yI)("font-menlo group w-full resize-none whitespace-pre-wrap break-all rounded-lg text-sm leading-5"),
                                    children: (0, o.jsx)(Z.jk, {
                                        copyValue: r,
                                        showViewAll: !0,
                                        showOpenRaw: !0,
                                        copyBtnClassName: "absolute right-2.5 top-2.5",
                                        title: A("result.stdout"),
                                        children: (0, o.jsx)("div", {
                                            children: r
                                        })
                                    })
                                })
                            })]
                        }), b && b.failedTestcase && (0, o.jsxs)("div", {
                            children: [(0, o.jsxs)("div", {
                                className: (0, v.yI)("mb-2 flex items-center justify-between text-xs font-medium", m.Cj.label3),
                                children: [A("result.lastExecutedInput"), (0, o.jsxs)("a", {
                                    className: "flex cursor-pointer items-center",
                                    onClick: H,
                                    children: [A("result.openTestcase"), (0, o.jsx)(g.H, {
                                        width: 16,
                                        height: 16,
                                        className: (0, v.yI)("fill-gray-6 dark:fill-dark-gray-6 group-hover:fill-gray-7 dark:group-hover:fill-dark-gray-7 ml-1")
                                    })]
                                })]
                            }), (0, o.jsx)(V, {
                                metadata: B,
                                input: b.failedTestcase,
                                visualise: !1
                            })]
                        })]
                    })
                }
        },
        7655: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return o
                },
                p: function() {
                    return a
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(64529),
                l = t(782),
                a = {
                    status: t(27583).$.INIT,
                    activeRuncodeTestcase: 0,
                    runCodeResult: null,
                    diffEnabled: !0,
                    visualiserEnabled: !1,
                    submitResult: null,
                    submitResultForSP: null,
                    submitDuration: null,
                    submissionId: null
                },
                o = (0, s.Ue)((0, l.$e)(a, (function(e) {
                    return {
                        setResultStatus: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    status: n
                                })
                            }))
                        },
                        setRunCodeResult: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    runCodeResult: n
                                })
                            }))
                        },
                        setSubmitResult: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    submitResult: n
                                })
                            }))
                        },
                        setActiveRuncodeTestcase: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    activeRuncodeTestcase: n
                                })
                            }))
                        },
                        setDiffEnabled: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    diffEnabled: n
                                })
                            }))
                        },
                        setVisualiserEnabled: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    visualiserEnabled: n
                                })
                            }))
                        },
                        setSubmitDuration: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    submitDuration: n
                                })
                            }))
                        },
                        setSubmissionId: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    submissionId: n
                                })
                            }))
                        },
                        setSubmitResultForSP: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    submitResultForSP: n
                                })
                            }))
                        }
                    }
                })))
        },
        75546: function(e, n, t) {
            t.d(n, {
                Y: function() {
                    return o
                },
                n: function() {
                    return a
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(64529),
                l = t(782),
                a = {
                    status: t(27583).$.INIT,
                    submitDuration: null,
                    submissionId: null
                },
                o = (0, s.Ue)((0, l.$e)(a, (function(e) {
                    return {
                        setResultStatus: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    status: n
                                })
                            }))
                        },
                        setSubmitDuration: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    submitDuration: n
                                })
                            }))
                        },
                        setSubmissionId: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    submissionId: n
                                })
                            }))
                        }
                    }
                })))
        },
        14481: function(e, n, t) {
            var i;
            t.d(n, {
                    $z: function() {
                        return r
                    },
                    HA: function() {
                        return i
                    },
                    hN: function() {
                        return s
                    }
                }),
                function(e) {
                    e.Memory = "memory", e.Runtime = "runtime"
                }(i || (i = {}));
            var r = 1e3,
                s = r * r
        },
        88786: function(e, n, t) {
            t.d(n, {
                n: function() {
                    return Le
                }
            });
            var i, r, s, l = t(10253),
                a = t(29815),
                o = t(85893),
                u = t(67294),
                c = t(11321),
                d = t(66247),
                f = t(76831),
                m = t(68708),
                h = t(70341),
                v = t(12922),
                x = t(60477),
                g = t(54464),
                p = t(15371),
                b = t(50632),
                y = t(93769),
                C = t(52872),
                j = t(9962),
                w = t(11516),
                N = t(14924),
                Z = t(26042),
                I = t(53889),
                k = t(14481),
                T = function(e) {
                    var n = e.includes(k.HA.Runtime),
                        t = e.includes(k.HA.Memory);
                    return {
                        radioWidth: 44,
                        statusWidth: 170 + (t ? 0 : 30) + (n ? 0 : 30),
                        langWidth: 92 + (t ? 0 : 15) + (n ? 0 : 15),
                        runtimeWidth: 100,
                        memoryWidth: 100,
                        notesWidth: 110,
                        penaltyWidth: 100
                    }
                },
                S = (i = {}, (0, N.Z)(i, y.UU.Default, T), (0, N.Z)(i, y.UU.Contest, (function() {
                    return {
                        statusWidth: 170,
                        langWidth: 122,
                        penaltyWidth: 100
                    }
                })), i),
                R = function(e) {
                    var n = T(e),
                        t = (0, I.b)(S)(e);
                    return (0, Z.Z)({}, n, t)
                },
                M = t(95682),
                E = function() {
                    var e = (0, y.z2)((function(e) {
                        return e.questionSlug
                    }));
                    return (0, M.I)(e)
                },
                _ = t(69396),
                A = t(13397),
                D = t(89395),
                P = function(e, n) {
                    var t = (0, D.T)().data,
                        i = (0, u.useMemo)((function() {
                            var e, n, i;
                            return null !== (i = null === (n = null === t || void 0 === t || null === (e = t.codeSnippets) || void 0 === e ? void 0 : e.map((function(e) {
                                return null === e || void 0 === e ? void 0 : e.langSlug
                            }))) || void 0 === n ? void 0 : n.filter((function(e) {
                                return !!e
                            }))) && void 0 !== i ? i : []
                        }), [null === t || void 0 === t ? void 0 : t.codeSnippets]),
                        r = (0, u.useMemo)((function() {
                            if (!n) return e;
                            var t = null === e || void 0 === e ? void 0 : e.reduce((function(e, n) {
                                return (0, _.Z)((0, Z.Z)({}, e), (0, N.Z)({}, n.name, {
                                    id: n.id,
                                    slug: n.slug
                                }))
                            }), {});
                            return t ? (0, A.cZ)().filter((function(e) {
                                return t[e.displayName].id
                            })).map((function(e) {
                                return {
                                    id: t[e.displayName].id,
                                    name: e.displayName,
                                    slug: t[e.displayName].slug
                                }
                            })) : []
                        }), [e, n]);
                    return (0, u.useMemo)((function() {
                        return null === r || void 0 === r ? void 0 : r.filter((function(e) {
                            return i.includes(e.slug)
                        }))
                    }), [r, i])
                },
                W = function(e) {
                    var n = e.width,
                        t = e.value,
                        i = e.className;
                    return (0, o.jsx)("div", {
                        className: (0, v.yI)("shrink-0", p.Cj.label3, i),
                        style: {
                            width: n
                        },
                        children: t
                    })
                },
                B = t(72510),
                F = t(84539),
                U = t(68779),
                L = t(66360),
                q = t(44765),
                z = t(99299),
                H = t(134),
                O = function(e) {
                    var n, t = e.items,
                        i = e.selected,
                        r = e.setSelected,
                        s = e.className,
                        l = e.buttonClassName,
                        a = e.menuClassName,
                        c = e.disabled,
                        d = void 0 !== c && c,
                        f = e.style;
                    return (0, o.jsxs)(B.v, {
                        as: "div",
                        className: (0, v.yI)("relative", s),
                        style: f,
                        children: [(0, o.jsx)("div", {
                            children: (0, o.jsx)(B.v.Button, {
                                className: (0, v.yI)("group flex w-full flex-nowrap items-center outline-0 transition-colors duration-300 focus:bg-transparent", p.Cj.label3, (n = {}, (0, N.Z)(n, (0, v.yI)("cursor-text"), d), (0, N.Z)(n, p.M$.label1, !d), n), l),
                                children: function(e) {
                                    var n = e.open;
                                    return (0, o.jsxs)(o.Fragment, {
                                        children: [(0, o.jsx)(q.J, {
                                            children: i.text
                                        }), (0, o.jsx)("div", {
                                            className: (0, v.yI)(z.W.menuButtonIcon, "flex items-center", {
                                                "rotate-180 transform": n
                                            }, "mx-1", p.M$.label1Group),
                                            children: !d && (0, o.jsx)(H.e, {
                                                variant: "12px",
                                                padding: "roomy",
                                                icon: U.ptq,
                                                "aria-hidden": "true"
                                            })
                                        })]
                                    })
                                }
                            })
                        }), !d && (0, o.jsx)(F.u, (0, _.Z)((0, Z.Z)({
                            as: u.Fragment
                        }, z.W.dropdownTransition), {
                            children: (0, o.jsx)(B.v.Items, {
                                className: (0, v.yI)(p.eq.commandBar, p.Cj.bgOverlay3, "z-dropdown overflow-auto rounded-lg focus:outline-none", "absolute mt-1 max-h-[300px] w-full min-w-[200px] p-2", a),
                                children: t.map((function(e, n) {
                                    return (0, o.jsx)(B.v.Item, {
                                        children: function(n) {
                                            var t, s = n.active;
                                            return (0, o.jsxs)("div", {
                                                className: (0, v.yI)(z.W.menuItem, z.W.menuItemText, (t = {}, (0, N.Z)(t, z.W.menuItemActive, s), (0, N.Z)(t, "font-medium", i.value === e.value), (0, N.Z)(t, (0, v.yI)("font-normal", p.Cj.label2), i.value !== e.value), t)),
                                                onClick: function() {
                                                    return r(e)
                                                },
                                                children: [(0, o.jsx)("div", {
                                                    className: "flex h-5 items-center",
                                                    children: (0, o.jsx)(q.J, {
                                                        children: e.text
                                                    })
                                                }), i.value === e.value ? (0, o.jsx)("span", {
                                                    className: z.W.menuItemSelectedIconWrapper,
                                                    children: (0, o.jsx)(L.N, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    })
                                                }) : null]
                                            })
                                        }
                                    }, n)
                                }))
                            })
                        }))]
                    })
                },
                G = function(e, n, t) {
                    var i = (0, u.useMemo)((function() {
                            return {
                                value: void 0,
                                text: n
                            }
                        }), [n]),
                        r = (0, u.useState)(i),
                        s = r[0],
                        l = r[1];
                    return [(0, u.useMemo)((function() {
                        return [i].concat((0, a.Z)((e || []).map((function(e) {
                            return {
                                value: e.id,
                                text: e.name
                            }
                        }))))
                    }), [i, e]), s, (0, u.useCallback)((function(e) {
                        t && t(e.value), l(e)
                    }), [l, t])]
                },
                V = t(64572),
                $ = function(e) {
                    var n, t = e.items,
                        i = e.selected,
                        r = e.setSelected,
                        s = e.className,
                        l = e.buttonClassName,
                        a = e.disabled,
                        c = void 0 !== a && a;
                    return (0, o.jsxs)(B.v, {
                        as: "div",
                        className: (0, v.yI)("relative", s),
                        children: [(0, o.jsx)("div", {
                            children: (0, o.jsx)(B.v.Button, {
                                disabled: c,
                                className: (0, v.yI)("group flex w-full items-center outline-0 transition-colors duration-300 focus:bg-transparent", (n = {}, (0, N.Z)(n, (0, v.yI)(z.W.menuButtonDisabled, "cursor-default"), c), (0, N.Z)(n, (0, v.yI)(p.Cj.label3, p.M$.label1), !c), n), l),
                                children: (0, o.jsx)(V.k, {
                                    className: "h-4 w-4"
                                })
                            })
                        }), !c && (0, o.jsx)(F.u, (0, _.Z)((0, Z.Z)({
                            as: u.Fragment
                        }, z.W.dropdownTransition), {
                            children: (0, o.jsx)(B.v.Items, {
                                className: (0, v.yI)(p.eq.commandBar, p.Cj.bgOverlay3, "z-dropdown overflow-auto rounded-lg focus:outline-none", "absolute ml-2 mt-5 max-h-[300px] w-[140px] p-2"),
                                children: t.map((function(e, n) {
                                    return (0, o.jsx)(B.v.Item, {
                                        children: function(n) {
                                            var t, s = n.active;
                                            return (0, o.jsxs)("div", {
                                                className: (0, v.yI)(z.W.menuItem, z.W.menuItemText, (t = {}, (0, N.Z)(t, z.W.menuItemActive, s), (0, N.Z)(t, "font-medium", null === i || void 0 === i ? void 0 : i.includes(e.value)), (0, N.Z)(t, (0, v.yI)("font-normal", p.Cj.label2), !(null === i || void 0 === i ? void 0 : i.includes(e.value))), t), "flex"),
                                                onClick: function() {
                                                    return r(e)
                                                },
                                                children: [(0, o.jsx)("span", {
                                                    className: (0, v.yI)("text-lc-gray-70 dark:text-dark-lc-gray-70 invisible flex items-center pr-2", {
                                                        visible: null === i || void 0 === i ? void 0 : i.includes(e.value)
                                                    }),
                                                    children: (0, o.jsx)(L.N, {
                                                        className: "h-3.5 w-3.5",
                                                        "aria-hidden": "true"
                                                    })
                                                }), (0, o.jsx)("div", {
                                                    className: "flex h-5 items-center justify-end text-sm",
                                                    children: (0, o.jsx)(q.J, {
                                                        children: e.text
                                                    })
                                                })]
                                            })
                                        }
                                    }, n)
                                }))
                            })
                        }))]
                    })
                },
                Q = (r = {}, (0, N.Z)(r, y.UU.Contest, (function(e) {
                    var n = e.setStatusFilter,
                        t = e.setLangFilter,
                        i = e.settings,
                        r = e.isFrontendQuestion,
                        s = void 0 === r || r,
                        a = (0, c.$G)("submissions", {
                            keyPrefix: "filters"
                        }).t,
                        u = E().data,
                        d = (0, l.Z)(G(null === u || void 0 === u ? void 0 : u.statusList, a("status"), n), 3),
                        f = d[0],
                        m = d[1],
                        h = d[2],
                        v = P(null === u || void 0 === u ? void 0 : u.langList, s),
                        x = (0, l.Z)(G(v, a(s ? "framework" : "language"), t), 3),
                        g = x[0],
                        p = x[1],
                        b = x[2],
                        y = R(null !== i && void 0 !== i ? i : []),
                        C = y.statusWidth,
                        j = y.langWidth;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(O, {
                            items: f,
                            setSelected: h,
                            selected: m,
                            className: "shrink-0",
                            style: {
                                width: C
                            },
                            buttonClassName: "rounded-lg",
                            disabled: !n
                        }), (0, o.jsx)(O, {
                            items: g,
                            setSelected: b,
                            selected: p,
                            className: "shrink-0",
                            style: {
                                width: j
                            },
                            buttonClassName: "rounded-lg",
                            disabled: !t
                        }), (0, o.jsx)(W, {
                            value: a("penaltyTime"),
                            className: "flex-1"
                        })]
                    })
                })), (0, N.Z)(r, y.UU.Default, (function(e) {
                    var n = e.setStatusFilter,
                        t = e.setLangFilter,
                        i = e.onClickSettings,
                        r = e.settings,
                        s = e.isFrontendQuestion,
                        a = void 0 === s || s,
                        u = (0, c.$G)("submissions", {
                            keyPrefix: "filters"
                        }).t,
                        d = E().data,
                        f = (0, l.Z)(G(null === d || void 0 === d ? void 0 : d.statusList, u("status"), n), 3),
                        m = f[0],
                        h = f[1],
                        x = f[2],
                        g = P(null === d || void 0 === d ? void 0 : d.langList, a),
                        b = (0, l.Z)(G(g, u(a ? "framework" : "language"), t), 3),
                        y = b[0],
                        C = b[1],
                        j = b[2],
                        w = [{
                            value: String(k.HA.Runtime),
                            text: u("runtime")
                        }, {
                            value: String(k.HA.Memory),
                            text: u("memory")
                        }],
                        N = R(null !== r && void 0 !== r ? r : []),
                        Z = N.statusWidth,
                        I = N.langWidth,
                        T = N.runtimeWidth,
                        S = N.memoryWidth,
                        M = N.notesWidth,
                        _ = null === r || void 0 === r ? void 0 : r.includes(k.HA.Runtime),
                        A = null === r || void 0 === r ? void 0 : r.includes(k.HA.Memory),
                        D = null === r || void 0 === r ? void 0 : r.includes("lang");
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: (0, v.yI)(p.Cj.label3, "w-8 shrink-0")
                        }), (0, o.jsx)(O, {
                            items: m,
                            setSelected: x,
                            selected: h,
                            className: "shrink-0",
                            style: {
                                width: Z
                            },
                            buttonClassName: "rounded-lg",
                            disabled: !n
                        }), D && (0, o.jsx)(O, {
                            items: y,
                            setSelected: j,
                            selected: C,
                            className: "shrink-0",
                            style: {
                                width: I
                            },
                            buttonClassName: "rounded-lg",
                            disabled: !t
                        }), _ && (0, o.jsx)("div", {
                            className: (0, v.yI)("shrink-0", p.Cj.label3),
                            style: {
                                width: T
                            },
                            children: u("runtime")
                        }), A && (0, o.jsx)("div", {
                            className: (0, v.yI)("shrink-0", p.Cj.label3),
                            style: {
                                width: S
                            },
                            children: u("memory")
                        }), (0, o.jsxs)("div", {
                            className: "flex flex-1 items-center justify-between",
                            style: {
                                minWidth: M
                            },
                            children: [(0, o.jsx)("div", {
                                className: (0, v.yI)(p.Cj.label3),
                                children: u("notes")
                            }), !a && (0, o.jsx)($, {
                                items: w,
                                setSelected: function(e) {
                                    i && i(e.value)
                                },
                                selected: null !== r && void 0 !== r ? r : [],
                                className: "flex flex-1 justify-end",
                                buttonClassName: "rounded-lg"
                            })]
                        })]
                    })
                })), r),
                K = function(e) {
                    var n = Q[(0, y.$w)()];
                    return (0, o.jsx)(n, (0, Z.Z)({}, e))
                },
                J = function(e) {
                    var n = e.setStatusFilter,
                        t = e.setLangFilter,
                        i = e.onClickSettings,
                        r = e.settings,
                        s = e.isFrontendQuestion,
                        l = void 0 === s || s,
                        a = e.className,
                        u = R(null !== r && void 0 !== r ? r : []).radioWidth,
                        c = null === r || void 0 === r ? void 0 : r.includes("radio");
                    return (0, o.jsxs)("div", {
                        className: (0, v.yI)("mx-3 flex h-8 items-center border-b px-4 text-sm", w.nx.borderBorderQuaternary, a),
                        children: [c && (0, o.jsx)("div", {
                            style: {
                                width: u
                            }
                        }), (0, o.jsx)(K, {
                            setStatusFilter: n,
                            setLangFilter: t,
                            onClickSettings: i,
                            settings: r,
                            isFrontendQuestion: l
                        })]
                    })
                },
                X = t(11163),
                Y = t(83269),
                ee = t(86543),
                ne = t(39606),
                te = t(29297),
                ie = t(49037),
                re = t(77768),
                se = u.forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, _.Z)((0, Z.Z)({
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("circle", {
                            cx: "8",
                            cy: "8",
                            r: "4"
                        })
                    }))
                })),
                le = u.forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, _.Z)((0, Z.Z)({
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                        })
                    }))
                })),
                ae = function(e) {
                    var n = e.checked,
                        t = e.onChange,
                        i = e.className,
                        r = e.boxClassName,
                        s = e.label,
                        l = e.disabled,
                        a = e.labelClassName,
                        c = e.iconClassName,
                        d = (0, u.useCallback)((function(e) {
                            !l && (null === t || void 0 === t || t(e))
                        }), [l, t]),
                        f = l ? le : se;
                    return (0, o.jsx)(re.r, {
                        as: u.Fragment,
                        checked: n,
                        onChange: d,
                        children: (0, o.jsxs)("div", {
                            className: (0, v.yI)("group flex cursor-pointer items-center gap-1 outline-none", {
                                "cursor-not-allowed opacity-50": l
                            }, i),
                            children: [(0, o.jsx)("span", {
                                className: (0, v.yI)("text-fixed-white m-1 h-4 w-4 rounded-full", {
                                    "bg-fill-secondary": !n,
                                    "group-hover:bg-fill-primary": !n && !l,
                                    "bg-blue-60": n,
                                    "group-hover:bg-blue-80": n && !l
                                }, r),
                                children: (0, o.jsx)(f, {
                                    className: (0, v.yI)("h-full w-full", {
                                        hidden: !n
                                    }, c),
                                    "aria-hidden": "true"
                                })
                            }), (0, o.jsx)("span", {
                                className: (0, v.yI)("text-body text-text-primary", a),
                                children: s
                            })]
                        })
                    })
                },
                oe = t(73582),
                ue = t(99603),
                ce = t(17060),
                de = function(e) {
                    var n = e.submission,
                        t = e.width,
                        i = e.isFrontendQuestion,
                        r = (0, u.useMemo)((function() {
                            var e = ce.U[n.langSlug];
                            return i && e ? e.Icon : function() {
                                return null
                            }
                        }), [i, n.langSlug]);
                    return (0, o.jsx)("div", {
                        className: (0, v.yI)("flex flex-shrink-0 items-center"),
                        style: {
                            width: t
                        },
                        children: (0, o.jsxs)("div", {
                            className: (0, v.yI)(w.nx.bgFillPrimary, p.Cj.label2, "flex items-center gap-1 rounded-[9px] px-1.5 py-[1px] text-xs"),
                            children: [(0, o.jsx)(r, {
                                className: (0, v.yI)("h-[14px] w-[14px]")
                            }), n.langName]
                        })
                    })
                },
                fe = t(62e3),
                me = function(e) {
                    var n = e.width,
                        t = e.icon,
                        i = e.value;
                    return (0, o.jsxs)("div", {
                        className: (0, v.yI)("flex flex-shrink-0 items-center gap-1 pr-1 text-sm", p.Cj.label2),
                        style: {
                            width: n
                        },
                        children: [t && (0, o.jsx)(H.e, {
                            variant: "14px",
                            padding: "none",
                            icon: t
                        }), (0, o.jsx)(fe.J, {
                            children: i
                        })]
                    })
                },
                he = t(87740),
                ve = t(67331),
                xe = t(69485),
                ge = t(85099),
                pe = t(29321),
                be = t(69675),
                ye = t(89952),
                Ce = t(83210),
                je = [{
                    key: ne.Mj.White,
                    color: "bg-[#b0acac]",
                    borderColor: "border-[#b0acac]"
                }, {
                    key: ne.Mj.Orange,
                    color: w.nx.bgYellow60,
                    borderColor: w.nx.borderYellow60
                }, {
                    key: ne.Mj.Blue,
                    color: w.nx.bgBlue60,
                    borderColor: w.nx.borderBlue60
                }, {
                    key: ne.Mj.Green,
                    color: w.nx.bgGreen60,
                    borderColor: w.nx.borderGreen60
                }, {
                    key: ne.Mj.Red,
                    color: w.nx.bgMagenta60,
                    borderColor: w.nx.borderMagenta60
                }, {
                    key: ne.Mj.Purple,
                    color: w.nx.bgPurple60,
                    borderColor: w.nx.borderPurple60
                }],
                we = function(e) {
                    var n = e.flagType,
                        t = e.onSelect;
                    return (0, o.jsx)("div", {
                        className: "flex space-x-3",
                        children: je.map((function(e) {
                            return (0, o.jsx)("div", {
                                className: (0, v.yI)("flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border transition-colors", e.borderColor, (0, N.Z)({}, e.color, n === e.key)),
                                onClick: function() {
                                    return t(e.key)
                                },
                                children: n === e.key && (0, o.jsx)(L.N, {
                                    className: (0, v.yI)("h-3.5 w-3.5", w.nx.labelFixedWhite)
                                })
                            }, e.key)
                        }))
                    })
                },
                Ne = function(e) {
                    var n = e.isOpen,
                        t = e.onClose,
                        i = e.submission,
                        r = (0, c.$G)("submissions", {
                            keyPrefix: "notes"
                        }).t,
                        s = (0, c.$G)("common").t,
                        l = (0, u.useState)(i.notes),
                        a = l[0],
                        d = l[1],
                        f = (0, u.useState)(i.flagType),
                        m = f[0],
                        h = f[1],
                        x = (0, pe.P)(Number(i.id), {
                            enabled: n
                        }).data;
                    (0, u.useEffect)((function() {
                        return h(i.flagType)
                    }), [i.flagType]), (0, u.useEffect)((function() {
                        return d(i.notes)
                    }), [i.notes]);
                    var g = (0, be.Q)(),
                        p = (0, xe.z)((function() {
                            var e, n;
                            t(), g({
                                submissionId: Number(i.id),
                                note: a,
                                tagIds: null !== (n = null === x || void 0 === x || null === (e = x.topicTags) || void 0 === e ? void 0 : e.map((function(e) {
                                    return e.tagId
                                }))) && void 0 !== n ? n : [],
                                flagType: m
                            })
                        })),
                        b = (0, xe.z)((function() {
                            t(), d(i.notes), h(i.flagType)
                        })),
                        y = (0, u.useCallback)((function(e) {
                            d(e)
                        }), [d]),
                        C = (0, xe.z)((function(e) {
                            !e && t()
                        }));
                    return (0, o.jsx)(ye.Vq, {
                        open: n,
                        onOpenChange: C,
                        children: (0, o.jsxs)(ye.cZ, {
                            className: "rounded-sd-md w-[90%] border-none pt-4 md:w-[560px] md:min-w-[560px]",
                            overlayClassName: "backdrop-blur-none bg-sd-fixed-black/40",
                            closeClassName: "top-5",
                            children: [(0, o.jsx)(ye.fK, {
                                className: "text-left",
                                children: (0, o.jsx)(ye.$N, {
                                    className: "text-base font-medium",
                                    children: (0, o.jsx)("div", {
                                        className: "flex items-center text-[16px] leading-6",
                                        children: r("label")
                                    })
                                })
                            }), (0, o.jsx)("div", {
                                className: (0, v.yI)("h-[160px] w-full"),
                                children: (0, o.jsx)(ge.g, {
                                    className: (0, v.yI)("h-[160px] w-full resize-none border-0 px-3 py-2 text-sm", "placeholder:text-text-quaternary dark:placeholder:text-text-quaternary", w.nx.bgFillTertiary, w.nx.labelTextPrimary),
                                    value: a,
                                    cols: 6,
                                    onChange: y,
                                    placeholder: r("placeholder")
                                })
                            }), (0, o.jsx)(ye.cN, {
                                className: "flex-row justify-end space-x-2",
                                children: (0, o.jsxs)("div", {
                                    className: "sd-md:flex-row sd-md:gap-2 flex w-full flex-col items-center justify-between gap-6",
                                    children: [(0, o.jsx)(we, {
                                        flagType: m,
                                        onSelect: h
                                    }), (0, o.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, o.jsx)(Ce.z, {
                                            onClick: b,
                                            variant: "secondary",
                                            size: "sm",
                                            children: s("cancel")
                                        }), (0, o.jsx)(Ce.z, {
                                            onClick: p,
                                            size: "sm",
                                            children: s("save")
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                Ze = function(e) {
                    var n = e.maxWidth,
                        t = e.submission,
                        i = (0, l.Z)((0, he.O)(!1), 2),
                        r = i[0],
                        s = i[1],
                        a = s.on,
                        d = s.off,
                        f = (0, u.useState)(null),
                        m = f[0],
                        h = f[1],
                        x = (0, c.$G)("submissions").t,
                        g = (0, u.useMemo)((function() {
                            return m ? m.getBoundingClientRect().width >= 400 ? 400 : m.getBoundingClientRect().width : 0
                        }), [m]),
                        b = (0, u.useCallback)((function(e) {
                            e.stopPropagation(), r || (e.preventDefault(), a())
                        }), [r, a]);
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)("div", {
                            ref: h,
                            className: (0, v.yI)(p.Cj.label2, "relative h-full w-full max-w-[400px] overflow-hidden overflow-ellipsis whitespace-nowrap py-[13px] pr-2 text-sm leading-[22px]"),
                            style: {
                                maxWidth: n ? n - g : void 0
                            },
                            onClick: b,
                            children: [(0, o.jsxs)("div", {
                                className: (0, v.yI)("hidden w-full flex-1 items-center justify-start space-x-2 whitespace-nowrap group-hover:flex", p.Cj.labelBlueStandard, {
                                    "hidden group-hover:hidden": t.notes || t.flagType !== ne.Mj.White
                                }),
                                style: {
                                    maxWidth: n ? n - g : void 0
                                },
                                onClick: b,
                                children: [(0, o.jsx)(ve.S, {}), (0, o.jsx)("span", {
                                    children: x("notes.label")
                                })]
                            }), t.notes, je.map((function(e) {
                                var n;
                                if (e.key === t.flagType && (t.flagType !== ne.Mj.White || t.notes)) return (0, o.jsx)("div", {
                                    className: (0, v.yI)("absolute right-0 top-5 h-2 w-2 rounded-full", (n = {}, (0, N.Z)(n, "border bg-none", t.flagType === ne.Mj.White), (0, N.Z)(n, w.nx.borderBorderPrimary, t.flagType === ne.Mj.White), (0, N.Z)(n, e.color, t.flagType !== ne.Mj.White), n))
                                }, e.key)
                            })), (0, o.jsx)(Ne, {
                                isOpen: r,
                                onClose: d,
                                submission: t
                            })]
                        })
                    })
                },
                Ie = (s = {}, (0, N.Z)(s, y.UU.Contest, (function(e) {
                    var n = e.submission,
                        t = e.settings,
                        i = e.isFrontendQuestion,
                        r = R(t),
                        s = r.langWidth,
                        l = r.penaltyWidth,
                        a = (0, c.$G)("submissions", {
                            keyPrefix: "filters"
                        }).t;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(de, {
                            width: s,
                            isFrontendQuestion: i,
                            submission: n
                        }), (0, o.jsx)(me, {
                            value: n.penalty ? (0, o.jsxs)("span", {
                                children: [(0, o.jsx)(ue.G, {
                                    icon: oe.r8p
                                }), " ", n.penalty, " ", a("minute")]
                            }) : "--",
                            width: l
                        })]
                    })
                })), (0, N.Z)(s, y.UU.Default, (function(e) {
                    var n = e.submission,
                        t = e.width,
                        i = e.settings,
                        r = e.showLanguage,
                        s = e.isFrontendQuestion,
                        l = i.includes(k.HA.Runtime),
                        a = i.includes(k.HA.Memory),
                        u = R(i),
                        c = u.langWidth,
                        d = u.runtimeWidth,
                        f = u.memoryWidth;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [r && (0, o.jsx)(de, {
                            width: c,
                            isFrontendQuestion: s,
                            submission: n
                        }), l && (0, o.jsx)(me, {
                            width: d,
                            icon: U.SZw,
                            value: n.runtime
                        }), a && (0, o.jsx)(me, {
                            width: f,
                            icon: U.Ff$,
                            value: n.memory
                        }), (0, o.jsx)(Ze, {
                            submission: n,
                            maxWidth: t
                        })]
                    })
                })), s),
                ke = function(e) {
                    var n = (0, I.b)(Ie);
                    return (0, o.jsx)(n, (0, Z.Z)({}, e))
                },
                Te = function(e) {
                    var n = e.status,
                        t = e.statusDisplay,
                        i = e.isPending,
                        r = e.isOpening,
                        s = (0, c.$G)("submissions").t,
                        l = i ? p.Cj.label2 : n === ne.F6.AC ? p.Cj.labelGreenStandard : p.Cj.labelRedStandard,
                        a = i ? s("pending") : t;
                    return (0, o.jsx)(q.J, {
                        title: a,
                        className: l,
                        children: (0, o.jsx)("span", {
                            className: (0, v.yI)(l, "text-sm font-medium", {
                                "opacity-40": r
                            }),
                            children: a
                        })
                    })
                },
                Se = function(e) {
                    var n, t = e.questionSlug,
                        i = e.submission,
                        r = e.isCurrentSubmission,
                        s = e.width,
                        l = e.isOddRow,
                        a = e.settings,
                        c = e.hiddenRounded,
                        d = e.isSelectedRadioButton,
                        f = e.onClickRadioButton,
                        m = e.showRadioButton,
                        x = (0, X.useRouter)().push,
                        g = (0, ie.h)(),
                        b = (0, y.z2)((function(e) {
                            return e.openingSubmissionIdSet
                        })),
                        C = (0, y.z2)((function(e) {
                            return e.isDynamicLayout
                        })),
                        j = b.has(Number(i.id)),
                        w = R(a).statusWidth,
                        I = (0, u.useCallback)((function() {
                            te.d.qdSubmissionListClick({
                                qd_version: (0, Y.in)(),
                                qd_question_slug: t,
                                qd_code_result_type: String(i.status)
                            }), m || (C ? null === g || void 0 === g || g.openSubmissionDetailTab({
                                title: i.statusDisplay,
                                id: i.id
                            }) : x(h.Hb.submissionOverview(t, i.id), void 0, {
                                shallow: !0
                            }))
                        }), [t, i.status, i.statusDisplay, i.id, m, C, g, x]),
                        k = (0, o.jsx)("div", {
                            className: "flex flex-shrink-0 flex-col justify-between",
                            style: {
                                width: w
                            },
                            children: (0, o.jsxs)("div", {
                                className: "flex flex-col items-start",
                                children: [(0, o.jsx)(Te, {
                                    status: i.status,
                                    statusDisplay: i.statusDisplay,
                                    isPending: i.isPending,
                                    isOpening: j
                                }), (0, o.jsx)(ee.J, {
                                    datetime: i.timestamp,
                                    unix: !0,
                                    className: (0, v.yI)("text-xs", p.Cj.label2),
                                    placement: "top-start"
                                })]
                            })
                        });
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)("div", {
                            onClick: I,
                            className: (0, v.yI)("group flex h-[48px] cursor-pointer items-center justify-between px-3 py-0 transition-colors", (n = {}, (0, N.Z)(n, p.Cj.bgBlue0, r), (0, N.Z)(n, "max-w-[".concat(s, "px]"), s), (0, N.Z)(n, p.Cj.fill4, l), (0, N.Z)(n, "rounded-lg", !c), n)),
                            children: (0, o.jsxs)("div", {
                                className: "flex h-full w-full flex-shrink-0 items-center",
                                children: [(0, o.jsx)("div", {
                                    className: (0, v.yI)(p.Cj.label3, "inline-block w-8 shrink-0 truncate"),
                                    children: i.frontendId
                                }), m ? (0, o.jsx)(ae, {
                                    className: "pl-2",
                                    boxClassName: "m-2",
                                    checked: d,
                                    onChange: f,
                                    label: k
                                }) : k, (0, o.jsx)(ke, (0, Z.Z)({}, e))]
                            })
                        })
                    })
                },
                Re = t(27415),
                Me = t(46398),
                Ee = t(7061),
                _e = function(e) {
                    var n = e.settings,
                        t = R(n),
                        i = t.radioWidth,
                        r = t.statusWidth,
                        s = t.langWidth,
                        l = t.runtimeWidth,
                        a = t.memoryWidth,
                        u = n.includes(k.HA.Memory),
                        c = n.includes(k.HA.Runtime),
                        d = n.includes("radio"),
                        f = n.includes("lang");
                    return (0, o.jsxs)("div", {
                        className: "flex h-[48px] shrink-0 items-center gap-2.5 px-4",
                        children: [d && (0, o.jsx)("div", {
                            className: "w-full",
                            style: {
                                maxWidth: i
                            },
                            children: (0, o.jsx)(Re.a, {
                                className: "ml-7 h-4 w-4 rounded-full"
                            })
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("flex h-5 w-full rounded-full"),
                            style: {
                                maxWidth: r
                            }
                        }), f && (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("flex h-5 w-full rounded-full"),
                            style: {
                                maxWidth: s
                            }
                        }), c && (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("flex h-5 w-full rounded-full"),
                            style: {
                                maxWidth: l
                            }
                        }), u && (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("flex h-5 w-full rounded-full"),
                            style: {
                                maxWidth: a
                            }
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("flex h-5 w-full rounded-full")
                        })]
                    })
                },
                Ae = function(e) {
                    var n = e.settings,
                        t = R(n),
                        i = t.radioWidth,
                        r = t.statusWidth,
                        s = t.langWidth,
                        l = t.penaltyWidth,
                        a = n.includes("radio");
                    return (0, o.jsxs)("div", {
                        className: "flex h-[48px] shrink-0 items-center gap-2.5 px-4",
                        children: [a && (0, o.jsx)("div", {
                            className: "w-full",
                            style: {
                                maxWidth: i
                            },
                            children: (0, o.jsx)(Re.a, {
                                className: "ml-7 h-4 w-4 rounded-full"
                            })
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("flex h-5 w-full rounded-full"),
                            style: {
                                maxWidth: r
                            }
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("flex h-5 w-full rounded-full"),
                            style: {
                                maxWidth: s
                            }
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("flex h-5 w-full rounded-full"),
                            style: {
                                maxWidth: l
                            }
                        })]
                    })
                },
                De = function(e) {
                    var n, t = e.settings,
                        i = (0, I.b)((n = {}, (0, N.Z)(n, y.UU.Default, _e), (0, N.Z)(n, y.UU.Contest, Ae), n));
                    return (0, o.jsx)(i, {
                        settings: t
                    })
                },
                Pe = function(e) {
                    var n = e.settings,
                        t = n.includes(k.HA.Memory),
                        i = n.includes(k.HA.Runtime),
                        r = n.includes("radio"),
                        s = n.includes("lang"),
                        l = R(n),
                        a = l.radioWidth,
                        u = l.statusWidth,
                        c = l.langWidth,
                        d = l.runtimeWidth,
                        f = l.memoryWidth;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [r && (0, o.jsx)("div", {
                            className: (0, v.yI)("h-4 w-full"),
                            style: {
                                maxWidth: a
                            }
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("h-4 w-full rounded-lg"),
                            style: {
                                maxWidth: u
                            }
                        }), s && (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("h-4 w-full rounded-lg"),
                            style: {
                                maxWidth: c
                            }
                        }), i && (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("h-4 w-full rounded-lg"),
                            style: {
                                maxWidth: d
                            }
                        }), t && (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("h-4 w-full rounded-lg"),
                            style: {
                                maxWidth: f
                            }
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("h-4 w-full rounded-lg")
                        })]
                    })
                },
                We = function(e) {
                    var n = e.settings,
                        t = n.includes("radio"),
                        i = R(n),
                        r = i.radioWidth,
                        s = i.statusWidth,
                        l = i.langWidth,
                        a = i.penaltyWidth;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [t && (0, o.jsx)("div", {
                            className: (0, v.yI)("h-4 w-full"),
                            style: {
                                maxWidth: r
                            }
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("h-4 w-full rounded-lg"),
                            style: {
                                maxWidth: s
                            }
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("h-4 w-full rounded-lg"),
                            style: {
                                maxWidth: l
                            }
                        }), (0, o.jsx)(Re.a, {
                            className: (0, v.yI)("h-4 w-full rounded-lg"),
                            style: {
                                maxWidth: a
                            }
                        })]
                    })
                },
                Be = function(e) {
                    var n, t = e.settings,
                        i = (0, I.b)((n = {}, (0, N.Z)(n, y.UU.Default, Pe), (0, N.Z)(n, y.UU.Contest, We), n));
                    return (0, o.jsx)(i, {
                        settings: t
                    })
                },
                Fe = function(e) {
                    var n = e.settings,
                        t = e.skeletonRowCount,
                        i = void 0 === t ? 20 : t,
                        r = e.className,
                        s = new Array(i).fill(0);
                    return (0, o.jsx)("div", {
                        className: (0, v.yI)("flex h-full w-full overflow-y-auto", r),
                        children: (0, o.jsxs)(Me.O, {
                            className: "flex w-full flex-col",
                            children: [(0, o.jsx)("div", {
                                className: "flex h-8 items-center gap-2.5 px-4",
                                children: (0, o.jsx)(Be, {
                                    settings: n
                                })
                            }), (0, o.jsx)(Ee.i, {
                                className: (0, v.yI)(p.Cj.divider3)
                            }), (0, o.jsx)("div", {
                                className: (0, v.yI)("flex h-full w-full flex-col overflow-hidden"),
                                children: s.map((function(e, t) {
                                    return (0, o.jsx)(De, {
                                        settings: n
                                    }, "skeleton-".concat(t))
                                }))
                            })]
                        })
                    })
                },
                Ue = function(e) {
                    var n = e.className,
                        t = (0, c.$G)("submissions", {
                            keyPrefix: "nonSignedIn"
                        }).t,
                        i = (0, m.jU)() ? h.Hb.signIn() : "";
                    return (0, o.jsx)("div", {
                        className: (0, v.yI)("pt-25 flex h-full w-full overflow-y-auto", n),
                        children: (0, o.jsxs)("div", {
                            className: "flex w-full flex-col items-center gap-6",
                            children: [(0, o.jsxs)("div", {
                                className: "flex w-full flex-col items-center gap-2",
                                children: [(0, o.jsx)("div", {
                                    className: (0, v.yI)("text-base font-medium", p.Cj.label1),
                                    children: t("signInTitle")
                                }), (0, o.jsx)("div", {
                                    className: (0, v.yI)("text-sm", p.Cj.label2),
                                    children: t("signInInfo")
                                })]
                            }), (0, o.jsx)(x.Q, {
                                variant: "plain",
                                className: (0, v.yI)("text-label-r hover:text-label-r rounded-lg", p.Cj.bgGreenStandard, p.Cj.bgGreen3Hover),
                                href: i,
                                children: t("signInButton")
                            })]
                        })
                    })
                },
                Le = function(e) {
                    var n, t, i = e.submissions,
                        r = e.hasNextPage,
                        s = e.fetchNextPage,
                        m = e.isLoading,
                        h = e.currentSubmissionId,
                        x = e.statusFilter,
                        w = e.setStatusFilter,
                        N = e.langFilter,
                        Z = e.setLangFilter,
                        I = e.onUpdateStatusFilter,
                        T = e.onUpdateLangFilter,
                        S = e.skeletonRowCount,
                        R = e.radioButtonSubmissionIndex,
                        M = e.setRadioButtonSubmissionIndex,
                        E = e.showLanguage,
                        _ = e.className,
                        A = e.isHidden,
                        D = (0, y.z2)((function(e) {
                            return e.questionSlug
                        })),
                        P = (0, y.z2)((function(e) {
                            return e.problemType
                        })) === C.tn.Frontend,
                        W = (0, c.$G)("submissions").t,
                        B = (0, l.Z)((0, d._)("qdSubmissionsListSettings", [String(k.HA.Memory), String(k.HA.Runtime)]), 2),
                        F = B[0],
                        U = B[1],
                        L = P ? (0, a.Z)(E ? ["lang"] : []) : (0, a.Z)(F).concat((0, a.Z)(M ? ["radio"] : []), (0, a.Z)(E ? ["lang"] : [])),
                        q = (0, b.U5)().isLoading,
                        z = null === (n = (0, b.U5)().data) || void 0 === n || null === (t = n.userStatus) || void 0 === t ? void 0 : t.isSignedIn;
                    (0, u.useEffect)((function() {
                        x && I && I(x)
                    }), [D, x]), (0, u.useEffect)((function() {
                        N && T && T(N)
                    }), [D, N]);
                    var H = function(e, n) {
                            var t, i = (0, u.useState)(null),
                                r = i[0],
                                s = i[1],
                                l = (0, u.useState)(null),
                                a = l[0],
                                o = l[1],
                                c = (0, j.s)(a, {
                                    root: r,
                                    threshold: .75,
                                    enabled: e
                                }),
                                d = null !== (t = null === c || void 0 === c ? void 0 : c.isIntersecting) && void 0 !== t && t;
                            return (0, u.useEffect)((function() {
                                e && d && n()
                            }), [e, d, n]), {
                                setContainerRef: s,
                                setTargetDomRef: o,
                                containerDomEl: r
                            }
                        }(r, s),
                        O = H.setContainerRef,
                        G = H.setTargetDomRef,
                        V = H.containerDomEl,
                        $ = (0, f.a)(V).width,
                        Q = 450 + (L.includes(k.HA.Runtime) ? 72 : 0) + (L.includes(k.HA.Memory) ? 72 : 0);
                    return q || z ? m || !i ? (0, o.jsx)(Fe, {
                        settings: L,
                        skeletonRowCount: S,
                        className: A ? "hidden" : ""
                    }) : (0, o.jsxs)("div", {
                        className: (0, v.yI)("flex h-full w-full flex-col", _, {
                            hidden: A
                        }),
                        ref: O,
                        style: {
                            minWidth: "".concat(Q, "px")
                        },
                        children: [(0, o.jsx)("div", {
                            className: (0, v.yI)("z-base-1 sticky top-0 ml-[1px] w-[calc(100%_-_2px)]"),
                            children: (0, o.jsx)(J, {
                                settings: L,
                                setStatusFilter: w,
                                setLangFilter: Z,
                                onClickSettings: function(e) {
                                    var n = -1 === (null === F || void 0 === F ? void 0 : F.indexOf(e)) ? (0, a.Z)(F).concat([e]) : (0, a.Z)((null === F || void 0 === F ? void 0 : F.filter((function(n) {
                                        return n !== e
                                    }))) || []);
                                    U(n)
                                },
                                className: (0, v.yI)("mx-0 px-3"),
                                isFrontendQuestion: P
                            })
                        }), 0 === i.length ? (0, o.jsxs)("div", {
                            className: "flex h-full w-full flex-col items-center justify-center gap-5",
                            children: [(0, o.jsx)(g.PlaceholderForNull, {}), (0, o.jsx)("div", {
                                className: (0, v.yI)(p.Cj.label3),
                                children: W("noData")
                            })]
                        }) : (0, o.jsxs)("div", {
                            className: (0, v.yI)("h-full overflow-auto"),
                            children: [i.map((function(e, n) {
                                return (0, o.jsx)(Se, {
                                    isCurrentSubmission: h === e.id,
                                    questionSlug: D,
                                    submission: e,
                                    settings: L,
                                    width: $,
                                    isOddRow: Boolean(n % 2),
                                    hiddenRounded: !0,
                                    isSelectedRadioButton: R === n,
                                    onClickRadioButton: M ? function() {
                                        return M(n)
                                    } : void 0,
                                    showRadioButton: Boolean(M),
                                    showLanguage: E,
                                    isFrontendQuestion: P
                                }, e.id)
                            })), (0, o.jsx)("div", {
                                className: "h-[1px] w-full",
                                ref: G
                            }), r && (0, o.jsx)(De, {
                                settings: L
                            })]
                        })]
                    }) : (0, o.jsx)(Ue, {
                        className: A ? "hidden" : ""
                    })
                }
        },
        80535: function(e, n, t) {
            t.d(n, {
                p: function() {
                    return o
                }
            });
            var i = t(26042),
                r = t(85893),
                s = t(67294),
                l = t(93769),
                a = (0, s.createContext)(l.TH),
                o = function(e) {
                    var n = e.children,
                        t = e.value,
                        o = (0, l.z2)((function(e) {
                            return e.updateState
                        })),
                        u = (0, l.z2)();
                    return (0, s.useEffect)((function() {
                        o(t)
                    }), [o, t]), (0, r.jsx)(a.Provider, {
                        value: (0, i.Z)({}, t, u),
                        children: n
                    })
                }
        },
        87277: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return d
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(29815),
                l = t(64529),
                a = t(782),
                o = t(69355),
                u = t(56098),
                c = {
                    breakpoints: [],
                    debuggerStatus: t(45982).re.TERMINATED,
                    sessionId: "",
                    isActive: !1,
                    debuggerData: null,
                    isChecking: !1,
                    checkController: new AbortController,
                    isDebugMode: !1,
                    expressions: [],
                    debuggerCode: "",
                    code: ""
                },
                d = (0, l.Ue)((0, a.$e)(c, (function(e) {
                    return {
                        addBreakpoint: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    breakpoints: (0, s.Z)(e.breakpoints).concat([n])
                                })
                            }))
                        },
                        removeBreakpoint: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    breakpoints: e.breakpoints.filter((function(e) {
                                        return e !== n
                                    }))
                                })
                            }))
                        },
                        setBreakpoints: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    breakpoints: n
                                })
                            }))
                        },
                        clearBreakpoints: function() {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    breakpoints: []
                                })
                            }))
                        },
                        setDebuggerStatus: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    debuggerStatus: n
                                })
                            }))
                        },
                        setSessionId: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    sessionId: n
                                })
                            }))
                        },
                        setIsActive: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    isActive: n
                                })
                            }))
                        },
                        setDebuggerData: function(n) {
                            return e((function(e) {
                                var t = e.debuggerData,
                                    s = n ? (0, r.Z)((0, i.Z)({}, n), {
                                        expressions: n.expressions || (null === t || void 0 === t ? void 0 : t.expressions),
                                        variables: n.variables || (null === t || void 0 === t ? void 0 : t.variables)
                                    }) : null;
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    debuggerData: s
                                })
                            }))
                        },
                        reset: function() {
                            return e(c)
                        },
                        stopCheck: function() {
                            return e((function(e) {
                                return e.checkController.abort(), (0, r.Z)((0, i.Z)({}, e), {
                                    checkController: new AbortController
                                })
                            }))
                        },
                        enterDebugMode: function() {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    isDebugMode: !0
                                })
                            }))
                        },
                        exitDebugMode: function() {
                            return e((function(e) {
                                return u.D.getState().setActiveTab(o.rf.Testcase), (0, r.Z)((0, i.Z)({}, e), {
                                    isDebugMode: !1,
                                    debuggerData: null,
                                    expressions: [],
                                    isActive: !1
                                })
                            }))
                        },
                        setIsChecking: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    isChecking: n
                                })
                            }))
                        },
                        addExpression: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    expressions: f(n, e.expressions)
                                })
                            }))
                        },
                        removeExpression: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    expressions: e.expressions.filter((function(e) {
                                        return e !== n
                                    }))
                                })
                            }))
                        },
                        setDebuggerCode: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    debuggerCode: n,
                                    code: n
                                })
                            }))
                        },
                        setCode: function(n) {
                            return e((function(e) {
                                return (0, r.Z)((0, i.Z)({}, e), {
                                    code: n
                                })
                            }))
                        }
                    }
                })));

            function f(e, n) {
                var t = n.indexOf(e);
                return -1 === t ? [e].concat((0, s.Z)(n)) : [e].concat((0, s.Z)(n.slice(0, t)), (0, s.Z)(n.slice(t + 1)))
            }
        },
        45982: function(e, n, t) {
            var i, r, s;
            t.d(n, {
                    Gj: function() {
                        return s
                    },
                    Lf: function() {
                        return i
                    },
                    re: function() {
                        return r
                    }
                }),
                function(e) {
                    e.RUNNING = "RUNNING", e.PENDING = "PENDING", e.EXITED = "EXITED", e.PAUSED = "PAUSED", e.FAILED = "FAILED"
                }(i || (i = {})),
                function(e) {
                    e[e.TERMINATED = 0] = "TERMINATED", e[e.PENDING = 1] = "PENDING", e[e.RUNNING = 2] = "RUNNING", e[e.ACTIVE = 3] = "ACTIVE", e[e.EXITED = 4] = "EXITED", e[e.TO_END = 5] = "TO_END"
                }(r || (r = {})),
                function(e) {
                    e.START = "start", e.ADD_BREAKPOINT = "add_breakpoint", e.REMOVE_BREAKPOINT = "remove_breakpoint", e.STEP_INTO_WITH_LIBRARY_SKIP = "step_into_with_library_skip", e.CONTINUE = "continue", e.STEP_OVER = "step_over", e.STEP_OUT = "step_out", e.ADD_EXPRESSION = "add_expression", e.REMOVE_EXPRESSION = "remove_expression", e.UPDATE_EXPRESSION = "update_expression", e.CLEAR_STDOUT = "clear_stdout"
                }(s || (s = {}))
        },
        50108: function(e, n, t) {
            t.d(n, {
                If: function() {
                    return v
                },
                a_: function() {
                    return x
                },
                hH: function() {
                    return g
                },
                w_: function() {
                    return h
                }
            });
            var i = t(26042),
                r = t(69396),
                s = t(99534),
                l = t(85893),
                a = t(42054),
                o = t(67294),
                u = t(12922),
                c = t(11095),
                d = t(385),
                f = t(15371),
                m = (0, o.createContext)({
                    onCancel: a.Z
                }),
                h = function(e) {
                    var n = e.className,
                        t = (0, s.Z)(e, ["className"]),
                        a = t.onCancel,
                        d = (0, o.useMemo)((function() {
                            return {
                                onCancel: a
                            }
                        }), [a]);
                    return (0, l.jsx)(m.Provider, {
                        value: d,
                        children: (0, l.jsx)(c.u, (0, r.Z)((0, i.Z)({}, t), {
                            closable: !1,
                            className: (0, u.yI)("dark:bg-dark-layer-2 p-0", n)
                        }))
                    })
                },
                v = function(e) {
                    var n = (0, o.useContext)(m).onCancel;
                    return (0, l.jsxs)("div", {
                        className: (0, u.yI)("flex items-center border-b px-5 py-4 text-lg font-medium", f.Cj.dividerBorder2, f.Cj.label1),
                        children: [e.children, (0, l.jsx)("button", {
                            onClick: n,
                            className: (0, u.yI)("ml-auto cursor-pointer rounded transition-all"),
                            children: (0, l.jsx)(d.F, {
                                className: "text-gray-6 dark:text-dark-gray-6 h-6 w-6"
                            })
                        })]
                    })
                },
                x = function(e) {
                    return (0, l.jsx)("div", {
                        className: (0, u.yI)("px-6 pb-6 pt-4", e.className),
                        children: e.children
                    })
                },
                g = function(e) {
                    return (0, l.jsx)("div", {
                        className: (0, u.yI)("flex justify-end px-6 py-4", f.Cj.dividerBorder2, e.className),
                        children: e.children
                    })
                }
        },
        98118: function(e, n, t) {
            t.d(n, {
                r: function() {
                    return r
                }
            });
            var i = t(80570),
                r = function(e) {
                    var n, t, r;
                    return null === (n = (0, i.x)(e)) || void 0 === n || null === (t = n.data) || void 0 === t || null === (r = t.codeSnippets) || void 0 === r ? void 0 : r.reduce((function(e, n) {
                        return e.set(null === n || void 0 === n ? void 0 : n.langSlug, {
                            lang: (null === n || void 0 === n ? void 0 : n.lang) || "",
                            langSlug: (null === n || void 0 === n ? void 0 : n.langSlug) || ""
                        }), e
                    }), new Map)
                }
        },
        4292: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return h
                }
            });
            var i = t(85893),
                r = t(94184),
                s = t.n(r),
                l = t(11321),
                a = t(70341),
                o = t(93769),
                u = t(60477),
                c = t(57845),
                d = t(15371),
                f = t(50108),
                m = function(e) {
                    var n = e.source,
                        t = (0, l.$G)("common", {
                            keyPrefix: "premiumModal"
                        }).t,
                        r = (0, o.z2)((function(e) {
                            return e.questionSlug
                        })),
                        f = a.Hb.premium(n, {
                            slug: r,
                            eventName: "question_slug",
                            event: r
                        });
                    return (0, i.jsxs)("div", {
                        className: "flex justify-between",
                        children: [(0, i.jsxs)("a", {
                            className: s()(d.Cj.labelBrandOrange, d.Cj.labelBrandOrangeHover, "flex cursor-pointer items-center"),
                            href: f,
                            children: [(0, i.jsx)("span", {
                                className: s()(d.Cj.labelBrandOrange, "text-base"),
                                children: t("learnMore")
                            }), (0, i.jsx)(c.B, {
                                className: "ml-1 h-6 w-6"
                            })]
                        }), (0, i.jsx)("a", {
                            href: f,
                            children: (0, i.jsx)(u.z, {
                                variant: "plain",
                                className: s()(d.Cj.bgBrandOrange, "font-typo rounded-lg text-white"),
                                children: t("subscribe")
                            })
                        })]
                    })
                },
                h = function(e) {
                    var n = e.visible,
                        t = e.onCancel,
                        r = e.title,
                        s = e.description,
                        l = e.videoUrl,
                        a = e.source;
                    return (0, i.jsxs)(f.w_, {
                        visible: n,
                        onCancel: t,
                        className: "w-[480px] rounded-[13px]",
                        children: [(0, i.jsx)(f.If, {
                            children: r
                        }), (0, i.jsxs)(f.a_, {
                            children: [(0, i.jsx)("div", {
                                className: d.Cj.label2,
                                children: s
                            }), (0, i.jsx)("div", {
                                className: "my-4 h-[270px]",
                                children: (0, i.jsx)("video", {
                                    className: "rounded-2xl",
                                    src: l,
                                    loop: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    "x5-video-player-type": "h5"
                                })
                            }), (0, i.jsx)(m, {
                                source: a
                            })]
                        })]
                    })
                }
        },
        27760: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return f
                }
            });
            var i = t(67294),
                r = t(93769),
                s = t(52872),
                l = t(79975),
                a = t(80043),
                o = t(56098),
                u = t(21790),
                c = t(61476),
                d = t(69366),
                f = function() {
                    var e = (0, i.useState)(!1),
                        n = e[0],
                        t = e[1],
                        f = (0, r.z2)((function(e) {
                            return e.questionSlug
                        })),
                        m = (0, i.useRef)(),
                        h = (0, r.z2)((function(e) {
                            return e.setProblemType
                        })),
                        v = (0, l.Q)(f).data,
                        x = (0, a.n)((function(e) {
                            return e.setTestcaseList
                        })),
                        g = (0, a.n)((function(e) {
                            return e.setDbTestcaseSchema
                        })),
                        p = (0, o.D)((function(e) {
                            return e.setEnableRunCode
                        })),
                        b = (0, o.D)((function(e) {
                            return e.setEnableSubmit
                        })),
                        y = (0, o.D)((function(e) {
                            return e.setEnableTestMode
                        })),
                        C = (0, o.D)((function(e) {
                            return e.setEnableDebugger
                        })),
                        j = (0, a.n)((function(e) {
                            return e.setTestcaseCacheKey
                        })),
                        w = (null === v || void 0 === v ? void 0 : v.exampleTestcaseList) || [];
                    return (0, i.useEffect)((function() {
                        j((0, d.bC)(f))
                    }), [f, j]), (0, i.useEffect)((function() {
                        if (v && f !== m.current) {
                            var e, n = v,
                                i = null === n || void 0 === n ? void 0 : n.metaData;
                            if (i) {
                                var r = (0, u.Ii)(i);
                                e = r.type;
                                var l, a = (0, c.s8)(e, w);
                                if (e && h(e), x((0, d.c2)(f) || a, !1), p(n.enableRunCode), C((0, u.Hb)() && n.enableRunCode), b(n.enableSubmit), y(n.enableTestMode), r.type === s.tn.Database) g(null !== (l = null === r || void 0 === r ? void 0 : r.database_schema) && void 0 !== l ? l : {})
                            }
                            t(!0), m.current = f
                        }
                    }), [v]), {
                        isLoading: !n
                    }
                }
        },
        99299: function(e, n, t) {
            t.d(n, {
                W: function() {
                    return r
                }
            });
            var i = t(15371),
                r = {
                    menuButton: "flex items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5",
                    menuButtonBg: i.Cj.fill3,
                    menuButtonText: i.Cj.label2,
                    menuButtonHover: i.Cj.fill2Hover,
                    menuButtonActive: "active:bg-fill-3 dark:active:bg-dark-fill-3",
                    menuButtonIcon: "w-4.5 h-4.5 ml-3 pointer-events-none transition duration-300 ".concat(i.Cj.label3),
                    menuButtonDisabled: i.Cj.label4,
                    dropdownTransition: {
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95 hidden",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95 hidden"
                    },
                    menuItems: "max-w-[15rem] min-w-[8.75rem] absolute z-dropdown mt-1 rounded-lg p-2 overflow-auto focus:outline-none ".concat(i.eq.commandBar),
                    menuItemsMaxH: "max-h-[600px]",
                    menuItemsBg: i.Cj.bgOverlay3,
                    menuItem: "cursor-pointer select-none relative h-8 py-1.5 pl-2 pr-12",
                    menuItemText: i.Cj.label1,
                    menuItemActive: "rounded ".concat(i.Cj.fill4),
                    menuItemHover: i.Cj.fill4Hover,
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
        53290: function(e, n, t) {
            t.d(n, {
                I: function() {
                    return i
                }
            });
            var i = function(e) {
                e.invalidateQueries(["GetMyStudyPlan"]), e.invalidateQueries(["GetProblemSetStudyPlanAds"]), e.invalidateQueries(["GetStudyPlanByCatalog"]), e.invalidateQueries(["GetStudyPlanListAds"]), e.invalidateQueries(["GetStudyPlanV2WeeklyTaskRecords"])
            }
        },
        96004: function(e, n, t) {
            t.d(n, {
                WZ: function() {
                    return N
                },
                tv: function() {
                    return j
                },
                SB: function() {
                    return w
                }
            });
            var i = t(47568),
                r = t(14924),
                s = t(26042),
                l = t(69396),
                a = t(70655),
                o = t(85893),
                u = t(94184),
                c = t.n(u),
                d = t(67294),
                f = t(73935),
                m = t(15371),
                h = t(99953),
                v = d.forwardRef((function(e, n) {
                    return (0, o.jsxs)("svg", (0, l.Z)((0, s.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: [(0, o.jsx)("path", {
                            fillOpacity: .15,
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z",
                            clipRule: "evenodd"
                        }), (0, o.jsx)("path", {
                            d: "M13 12.5a1 1 0 11-2 0v-4a1 1 0 112 0v4zM13 15.5a1 1 0 11-2 0 1 1 0 012 0z"
                        })]
                    }))
                })),
                x = t(97483),
                g = d.forwardRef((function(e, n) {
                    return (0, o.jsxs)("svg", (0, l.Z)((0, s.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: [(0, o.jsx)("path", {
                            fillOpacity: .15,
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z",
                            clipRule: "evenodd"
                        }), (0, o.jsx)("path", {
                            d: "M12.334 9.018a1.25 1.25 0 00-1.39.817 1 1 0 11-1.887-.663 3.25 3.25 0 016.316 1.082c0 1.06-.618 1.884-1.57 2.52a5.915 5.915 0 01-1.364.678 1 1 0 11-.633-1.897c.205-.068.552-.222.887-.446.454-.302.68-.604.68-.857 0-.61-.438-1.13-1.039-1.234zM11.187 16.135V16a1 1 0 112 0v.135a1 1 0 11-2 0z"
                        })]
                    }))
                })),
                p = t(11516),
                b = t(12922),
                y = t(11095),
                C = t(60477),
                j = function(e) {
                    var n, t, r = e.title,
                        s = e.content,
                        l = e.okText,
                        u = e.cancelText,
                        f = e.footer,
                        h = e.onOk,
                        v = e.onCancel,
                        x = e.onButtonCancelClick,
                        g = e.afterClose,
                        p = e.modalClass,
                        b = e.footerClass,
                        j = e.titleRowClass,
                        w = e.visible,
                        N = e.closable,
                        Z = void 0 === N || N,
                        I = e.showCloseIcon,
                        k = void 0 === I || I,
                        T = e.closeIconClassName,
                        S = e.closeBtnClassName,
                        R = e.beforeHistoryChangeEnable,
                        M = e.rootClassName,
                        E = (0, d.useState)(!1),
                        _ = E[0],
                        A = E[1],
                        D = (0, d.useState)(!1),
                        P = D[0],
                        W = D[1],
                        B = (0, d.useCallback)((function() {
                            (0, i.Z)((function() {
                                return (0, a.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            W(!0), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, , 3, 4]), [4, null === h || void 0 === h ? void 0 : h()];
                                        case 2:
                                            return e.sent(), A(!1), [3, 4];
                                        case 3:
                                            return W(!1), [7];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))()
                        }), [h]),
                        F = (0, d.useCallback)((function() {
                            null === v || void 0 === v || v(), A(!1)
                        }), [v]),
                        U = (0, d.useCallback)((function() {
                            null === x || void 0 === x || x(), Z && F()
                        }), [Z, F, x]),
                        L = Boolean("boolean" === typeof w ? w : _);
                    return {
                        modalElement: (0, o.jsxs)(y.u, {
                            closable: Z,
                            showCloseIcon: k,
                            visible: L,
                            onCancel: F,
                            title: r,
                            afterClose: g,
                            className: p,
                            modalClassName: M,
                            titleRowClass: j,
                            closeIconClassName: T,
                            closeBtnClassName: S,
                            beforeHistoryChangeEnable: R,
                            children: [s, "undefined" === typeof f ? (0, o.jsxs)("footer", {
                                className: c()("flex justify-end", b),
                                children: [null !== (n = e.cancelButton) && void 0 !== n ? n : (0, o.jsx)(C.z, {
                                    onClick: U,
                                    className: e.cancelButtonClassName,
                                    children: u || "\u53d6\u6d88"
                                }), null !== (t = e.okButton) && void 0 !== t ? t : (0, o.jsx)(C.z, {
                                    onClick: B,
                                    variant: "primary",
                                    className: c()("ml-4", m.Cj.labelWhite, e.okButtonClassName),
                                    loading: P,
                                    children: l || "\u786e\u5b9a"
                                })]
                            }) : f]
                        }),
                        setModalOpen: A
                    }
                },
                w = function(e) {
                    var n, t, s, l = e.confirmType,
                        u = void 0 === l ? "error" : l,
                        f = e.title,
                        j = e.content,
                        w = e.okText,
                        N = e.cancelText,
                        Z = e.footer,
                        I = e.onOk,
                        k = e.onCancel,
                        T = e.onButtonCancelClick,
                        S = e.afterClose,
                        R = e.modalClass,
                        M = e.footerClass,
                        E = e.titleRowClass,
                        _ = e.visible,
                        A = e.closable,
                        D = void 0 === A || A,
                        P = e.showCloseIcon,
                        W = void 0 === P || P,
                        B = e.iconClassName,
                        F = e.titleClassName,
                        U = e.contentClassName,
                        L = (0, d.useState)(!1),
                        q = L[0],
                        z = L[1],
                        H = (0, d.useState)(!1),
                        O = H[0],
                        G = H[1],
                        V = (0, d.useCallback)((function() {
                            (0, i.Z)((function() {
                                return (0, a.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            G(!0), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, , 3, 4]), [4, null === I || void 0 === I ? void 0 : I()];
                                        case 2:
                                            return e.sent(), z(!1), [3, 4];
                                        case 3:
                                            return G(!1), [7];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))()
                        }), [I]),
                        $ = (0, d.useCallback)((function() {
                            null === k || void 0 === k || k(), z(!1)
                        }), [k]),
                        Q = (0, d.useCallback)((function() {
                            null === T || void 0 === T || T(), D && $()
                        }), [D, $, T]),
                        K = Boolean("boolean" === typeof _ ? _ : q),
                        J = (0, o.jsxs)("div", {
                            className: (0, b.yI)("dark:text-dark-white flex items-center text-lg", m.Cj.label1, F),
                            children: ["error" === u && (0, o.jsx)(h.x, {
                                className: (0, b.yI)("mr-3 h-8 w-8 text-xl", m.Cj.labelRed, B)
                            }), "danger" === u && (0, o.jsx)(v, {
                                className: (0, b.yI)("mr-3 h-8 w-8 text-xl", m.Cj.labelRed, B)
                            }), "warning" === u && (0, o.jsx)(x.t, {
                                className: (0, b.yI)("mr-3 h-8 w-8 text-xl", p.nx.labelYellow60, B)
                            }), "primary" === u && (0, o.jsx)(g, {
                                className: (0, b.yI)("mr-3 h-8 w-8 text-xl", m.Cj.labelYellow, B)
                            }), f]
                        });
                    return {
                        modalElement: (0, o.jsxs)(y.u, {
                            closable: D,
                            showCloseIcon: W,
                            visible: K,
                            onCancel: $,
                            title: J,
                            afterClose: S,
                            className: R,
                            titleRowClass: E,
                            maskClosable: !0,
                            children: [(0, o.jsx)("div", {
                                className: (0, b.yI)("mb-8 ml-11 mt-1", m.Cj.label2, U),
                                children: j
                            }), "undefined" === typeof Z ? (0, o.jsxs)("footer", {
                                className: c()("flex justify-end", M),
                                children: [null !== (n = e.cancelButton) && void 0 !== n ? n : (0, o.jsx)(C.z, {
                                    onClick: Q,
                                    className: e.cancelButtonClassName,
                                    children: N || "\u53d6\u6d88"
                                }), null !== (t = e.okButton) && void 0 !== t ? t : (0, o.jsx)(C.z, {
                                    onClick: V,
                                    variant: "primary",
                                    className: (0, b.yI)("ml-4 rounded-[8px] py-[5px]", m.Cj.labelWhite, (s = {}, (0, r.Z)(s, m.Cj.bgRedStandard, "danger" === u), (0, r.Z)(s, m.Cj.bgRedSHover, "danger" === u), (0, r.Z)(s, p.nx.bgYellow60, "warning" === u), (0, r.Z)(s, p.rG.bgYellow60, "warning" === u), s), e.okButtonClassName),
                                    loading: O,
                                    children: w || "\u786e\u5b9a"
                                })]
                            }) : Z]
                        }),
                        setModalOpen: z
                    }
                },
                N = {
                    open: function(e) {
                        var n = document.createElement("div");
                        document.body.appendChild(n);
                        var t = function() {
                                try {
                                    var t;
                                    null === (t = e.afterClose) || void 0 === t || t.call(e), f.unmountComponentAtNode(n) && n.parentNode && document.body.removeChild(n)
                                } catch (i) {}
                            },
                            i = function() {
                                var n = j((0, l.Z)((0, s.Z)({}, e), {
                                        afterClose: t
                                    })),
                                    i = n.modalElement,
                                    r = n.setModalOpen;
                                return (0, d.useEffect)((function() {
                                    r(!0)
                                }), [r]), i
                            };
                        return f.render((0, o.jsx)(i, {}), n), {
                            close: t
                        }
                    }
                }
        },
        20970: function(e, n, t) {
            t.d(n, {
                V: function() {
                    return f
                }
            });
            var i = t(14924),
                r = t(26042),
                s = t(69396),
                l = t(99534),
                a = t(85893),
                o = t(67294),
                u = t(12922),
                c = t(15371),
                d = t(86639),
                f = o.forwardRef((function(e, n) {
                    var t, f, m = e.isActive,
                        h = e.borderRadius,
                        v = e.onClose,
                        x = e.onClick,
                        g = e.className,
                        p = e.children,
                        b = e.clickable,
                        y = (0, l.Z)(e, ["isActive", "borderRadius", "onClose", "onClick", "className", "children", "clickable"]),
                        C = b || !!x,
                        j = !!v,
                        w = (0, o.useCallback)((function(e) {
                            e.stopPropagation(), v && v()
                        }), [v]);
                    return (0, a.jsxs)("span", (0, s.Z)((0, r.Z)({
                        ref: n
                    }, y), {
                        className: (0, u.yI)("inline-flex items-center", "px-2", "whitespace-nowrap text-xs leading-6", void 0 !== h ? h : "rounded-full", (t = {}, (0, i.Z)(t, (0, u.yI)(c.Cj.label3, c.Cj.fill3), !m), (0, i.Z)(t, (0, u.yI)("bg-blue-s dark:bg-dark-blue-s text-white"), m), (0, i.Z)(t, (0, u.yI)("cursor-pointer transition-all", c.Cj.fill2Hover), C && !m), (0, i.Z)(t, (0, u.yI)("cursor-pointer transition-all", "hover:bg-blue-3 dark:hover:bg-dark-blue-3"), C && m), t), g),
                        onClick: x,
                        children: [p, j && (0, a.jsx)("span", {
                            className: "ml-1 cursor-pointer transition-all",
                            onClick: w,
                            children: (0, a.jsx)(d.X, {
                                className: (0, u.yI)("h-3.5 w-3.5", (f = {}, (0, i.Z)(f, (0, u.yI)(c.Cj.label4, "hover:text-label-3 dark:hover:text-dark-label-3"), !m), (0, i.Z)(f, (0, u.yI)("text-dark-label-4 dark:text-label-2", "hover:text-dark-label-3 dark:hover:text-label-1"), m), f))
                            })
                        })]
                    }))
                }))
        }
    }
]);