"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2320], {
        66614: function(t, e, n) {
            var i, o, r, u, a, l, d;
            n.d(e, {
                    F4: function() {
                        return l
                    },
                    Fd: function() {
                        return i
                    },
                    GZ: function() {
                        return a
                    },
                    Hc: function() {
                        return r
                    },
                    Vk: function() {
                        return d
                    },
                    lr: function() {
                        return o
                    }
                }),
                function(t) {
                    t.Easy = "EASY", t.Medium = "MEDIUM", t.Hard = "HARD"
                }(i || (i = {})),
                function(t) {
                    t.NotStarted = "NOT_STARTED", t.Ac = "AC", t.Tried = "TRIED"
                }(o || (o = {})),
                function(t) {
                    t.Html = "HTML", t.Markdown = "MARKDOWN"
                }(r || (r = {})),
                function(t) {
                    t.SIX_MONTH = "SIX_MONTH", t.ONE_YEAR = "ONE_YEAR", t.TWO_YEAR = "TWO_YEAR"
                }(u || (u = {})),
                function(t) {
                    t.LAST_THREE_MONTH = "three_months", t.LAST_SIX_MONTH = "six_months", t.SIX_MONTH_AGO = "more_than_six_months"
                }(a || (a = {})),
                function(t) {
                    t.Liked = "LIKED", t.Disliked = "DISLIKED", t.Neutral = "NEUTRAL"
                }(l || (l = {})),
                function(t) {
                    t.UnclearDescription = "UNCLEAR_DESCRIPTION", t.UnclearDifficulty = "UNCLEAR_DIFFICULTY", t.UnclearTestCases = "UNCLEAR_TEST_CASES", t.RuntimeStrict = "RUNTIME_STRICT", t.EdgeCases = "EDGE_CASES", t.Other = "OTHER"
                }(d || (d = {}))
        },
        80570: function(t, e, n) {
            n.d(e, {
                x: function() {
                    return s
                }
            });
            var i, o = n(14924),
                r = n(1576),
                u = n(93769),
                a = n(53889),
                l = n(95682),
                d = (i = {}, (0, o.Z)(i, u.UU.Contest, (function(t) {
                    var e = u.z2.getState().contestSlug;
                    return (0, r.l)(t, e)
                })), (0, o.Z)(i, u.UU.Default, (function(t) {
                    return (0, l.I)(t)
                })), i),
                s = function(t) {
                    return (0, a.b)(d)(t)
                }
        },
        20416: function(t, e, n) {
            n.d(e, {
                Db: function() {
                    return u
                },
                EG: function() {
                    return s
                },
                Pf: function() {
                    return a
                },
                fh: function() {
                    return l
                },
                w8: function() {
                    return c
                }
            });
            var i = n(14924),
                o = n(26756),
                r = n(66614);

            function u(t) {
                switch (t) {
                    case "ac":
                        return o.lr.Ac;
                    case "notac":
                        return o.lr.Tried;
                    default:
                        return o.lr.NotStarted
                }
            }

            function a(t) {
                switch (t) {
                    case "E":
                    case "Easy":
                        return o.Fd.Easy;
                    case "M":
                    case "Medium":
                        return o.Fd.Medium;
                    case "H":
                    case "Hard":
                        return o.Fd.Hard;
                    default:
                        return console.error("Invalid Question difficulty: ".concat(t)), o.Fd.Easy
                }
            }
            var l = function(t) {
                    var e = {
                        totalAccepted: 0,
                        totalSubmissions: 0,
                        acRate: "0%"
                    };
                    if (!t) return e;
                    try {
                        var n = JSON.parse(t);
                        return e.totalAccepted = Number(n.totalAcceptedRaw) || 0, e.totalSubmissions = Number(n.totalSubmissionRaw) || 0, e.acRate = n.acRate || "0%", e
                    } catch (i) {
                        return e
                    }
                },
                d = function(t) {
                    return t ? t.map((function(t) {
                        var e = t.name;
                        return {
                            slug: t.slug || "",
                            name: e || "",
                            timesEncountered: t.timesEncountered || 0
                        }
                    })) : []
                },
                s = function(t) {
                    var e, n = t ? JSON.parse(t) : {};
                    return e = {}, (0, i.Z)(e, r.GZ.LAST_THREE_MONTH, {
                        tags: d(n.three_months),
                        hasMore: !1
                    }), (0, i.Z)(e, r.GZ.LAST_SIX_MONTH, {
                        tags: d(n.six_months),
                        hasMore: !1
                    }), (0, i.Z)(e, r.GZ.SIX_MONTH_AGO, {
                        tags: d(n.more_than_six_months),
                        hasMore: !1
                    }), e
                },
                c = function(t) {
                    return null === t || void 0 === t ? r.F4.Neutral : t ? r.F4.Liked : r.F4.Disliked
                }
        },
        66360: function(t, e, n) {
            n.d(e, {
                N: function() {
                    return u
                }
            });
            var i = n(26042),
                o = n(69396),
                r = n(85893),
                u = n(67294).forwardRef((function(t, e) {
                    return (0, r.jsx)("svg", (0, o.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: e
                    }, t), {
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        7030: function(t, e, n) {
            n.d(e, {
                v: function() {
                    return u
                }
            });
            var i = n(26042),
                o = n(69396),
                r = n(85893),
                u = n(67294).forwardRef((function(t, e) {
                    return (0, r.jsx)("svg", (0, o.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: e
                    }, t), {
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M11.3 8.3H19a3 3 0 013 3V19a3 3 0 01-3 3h-7.7a3 3 0 01-3-3v-7.7a3 3 0 013-3zm0 2a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-7.7a1 1 0 00-1-1h-7.7zm-5.6 3.4a1 1 0 110 2h-.9A2.8 2.8 0 012 12.9V4.8A2.8 2.8 0 014.8 2h8.1a2.8 2.8 0 012.8 2.8v.9a1 1 0 11-2 0v-.9a.8.8 0 00-.8-.8H4.8a.8.8 0 00-.8.8v8.1a.8.8 0 00.8.8h.9z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        62570: function(t, e, n) {
            n.d(e, {
                P: function() {
                    return d
                }
            });
            var i = n(14924),
                o = n(26042),
                r = n(69396),
                u = n(29815),
                a = n(64529),
                l = n(782),
                d = (0, a.Ue)((0, l.$e)({
                    events: {},
                    uploadedEvents: {},
                    isTrackingEnabled: !1
                }, (function(t) {
                    return {
                        recordCodeReplayEvent: function(e, n) {
                            return t((function(t) {
                                return {
                                    events: (0, r.Z)((0, o.Z)({}, t.events), (0, i.Z)({}, e, t.events[e] ? (0, u.Z)(t.events[e]).concat([n]) : [n]))
                                }
                            }))
                        },
                        recordCodeReplayEvents: function(e, n) {
                            return t((function(t) {
                                return {
                                    events: (0, r.Z)((0, o.Z)({}, t.events), (0, i.Z)({}, e, t.events[e] ? (0, u.Z)(t.events[e]).concat((0, u.Z)(n)) : n))
                                }
                            }))
                        },
                        setIsTrackingEnabled: function(e) {
                            return t({
                                isTrackingEnabled: e
                            })
                        },
                        setUploadedEvents: function(e, n) {
                            return t((function(t) {
                                return {
                                    uploadedEvents: (0, r.Z)((0, o.Z)({}, t.uploadedEvents), (0, i.Z)({}, e, t.uploadedEvents[e] ? (0, u.Z)(t.uploadedEvents[e]).concat((0, u.Z)(n)) : n))
                                }
                            }))
                        }
                    }
                })))
        },
        81910: function(t, e, n) {
            n.d(e, {
                B: function() {
                    return a
                }
            });
            var i = n(26042),
                o = n(93769),
                r = n(62570),
                u = n(59528),
                a = function() {
                    var t = (0, o.z2)((function(t) {
                            return t.questionId
                        })),
                        e = (0, o.z2)((function(t) {
                            return t.questionSlug
                        })),
                        n = (0, r.P)((function(t) {
                            return t.recordCodeReplayEvent
                        })),
                        a = (0, r.P)((function(t) {
                            return t.recordCodeReplayEvents
                        }));
                    return {
                        trackLangEvent: function(i) {
                            var o = i.lang,
                                r = i.isStart;
                            n(e, {
                                questionId: t,
                                type: r ? u.L.start : u.L.switchLang,
                                lang: o,
                                timestamp: Date.now()
                            })
                        },
                        trackEditorEvents: function(n) {
                            if (t) {
                                var o = [],
                                    r = !0,
                                    l = !1,
                                    d = void 0;
                                try {
                                    for (var s, c = n[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                                        var f = s.value,
                                            v = null;
                                        switch (f.type) {
                                            case u.r.Input:
                                                "codemirror" === f.editorKind ? v = (0, i.Z)({
                                                    questionId: t,
                                                    type: "input" === f.modifyMode ? u.L.input : u.L.paste,
                                                    editorKind: "codemirror",
                                                    timestamp: Date.now(),
                                                    change: f.change
                                                }, f.isFlush ? {
                                                    isFlush: !0
                                                } : {}, f.isUndo ? {
                                                    isUndo: !0
                                                } : {}, f.isFromInside ? {
                                                    isFromInside: !0
                                                } : {}) : "monaco" === f.editorKind && (v = (0, i.Z)({
                                                    questionId: t,
                                                    type: "input" === f.modifyMode ? u.L.input : u.L.paste,
                                                    editorKind: "monaco",
                                                    timestamp: Date.now(),
                                                    change: f.change
                                                }, f.isFlush ? {
                                                    isFlush: !0
                                                } : {}, f.isUndo ? {
                                                    isUndo: !0
                                                } : {}, f.isFromInside ? {
                                                    isFromInside: !0
                                                } : {}));
                                                break;
                                            case u.r.SwitchLanguage:
                                                v = {
                                                    questionId: t,
                                                    type: u.L.switchLang,
                                                    lang: f.lang,
                                                    timestamp: Date.now()
                                                }
                                        }
                                        v && o.push(v)
                                    }
                                } catch (h) {
                                    l = !0, d = h
                                } finally {
                                    try {
                                        r || null == c.return || c.return()
                                    } finally {
                                        if (l) throw d
                                    }
                                }
                                a(e, o)
                            }
                        },
                        trackRunCodeEvent: function(i) {
                            var o = i.result,
                                r = i.testcases;
                            n(e, {
                                questionId: t,
                                type: u.L.interpretCode,
                                timestamp: Date.now(),
                                testcases: r,
                                result: o
                            })
                        },
                        trackSubmitEvent: function(i) {
                            var o = i.result,
                                r = i.submissionId;
                            n(e, {
                                questionId: t,
                                type: u.L.submitCode,
                                timestamp: Date.now(),
                                result: o,
                                submissionId: r
                            })
                        },
                        trackPageVisibleEvent: function(i) {
                            n(e, {
                                questionId: t,
                                type: u.L.pageVisible,
                                val: i,
                                timestamp: Date.now()
                            })
                        }
                    }
                }
        },
        59528: function(t, e, n) {
            var i, o;
            n.d(e, {
                    L: function() {
                        return i
                    },
                    r: function() {
                        return o
                    }
                }),
                function(t) {
                    t[t.start = 0] = "start", t[t.switchQuestion = 1] = "switchQuestion", t[t.switchLang = 2] = "switchLang", t[t.pageVisible = 3] = "pageVisible", t[t.interpretCode = 4] = "interpretCode", t[t.submitCode = 5] = "submitCode", t[t.end = 6] = "end", t[t.input = 7] = "input", t[t.undo = 8] = "undo", t[t.redo = 9] = "redo", t[t.paste = 10] = "paste", t[t.changeCursor = 11] = "changeCursor", t[t.debug = 12] = "debug", t[t.debugEnd = 13] = "debugEnd", t[t.idle = 14] = "idle"
                }(i || (i = {})),
                function(t) {
                    t.Input = "input", t.SwitchLanguage = "switch-language", t.Shortcuts = "shortcuts", t.Reset = "reset", t.Setting = "setting", t.Console = "console", t.Run = "run", t.ChangeCursor = "change-cursor"
                }(o || (o = {}))
        },
        56609: function(t, e, n) {
            n.d(e, {
                $e: function() {
                    return f
                },
                VY: function() {
                    return c
                },
                io: function() {
                    return s
                },
                zD: function() {
                    return v
                }
            });
            var i = n(111),
                o = n(11321),
                r = n(67294),
                u = n(69485),
                a = n(55433),
                l = n(58420),
                d = n(30579),
                s = function() {
                    var t, e = (0, d.QE)((function(t) {
                            return t.wsDocument
                        })),
                        n = (0, d.QE)((function(t) {
                            return t.sharedEditorState()
                        })),
                        i = (0, r.useState)(null !== (t = n.get("readOnly")) && void 0 !== t ? t : {}),
                        o = i[0],
                        a = i[1],
                        l = (0, u.z)((function() {
                            var t = n.get("readOnly");
                            t && a(t)
                        }));
                    return (0, r.useEffect)((function() {
                        return e.on("update", l),
                            function() {
                                return e.off("update", l)
                            }
                    }), [l, e]), o
                },
                c = function() {
                    var t = (0, d.QE)((function(t) {
                        var e;
                        return null === (e = t.userInfo) || void 0 === e ? void 0 : e.username
                    }));
                    return !0 === s()[null !== t && void 0 !== t ? t : ""]
                },
                f = function() {
                    var t = (0, o.$G)("problems", {
                            keyPrefix: "collaboration.toast"
                        }).t,
                        e = (0, l.pm)().toast,
                        n = (0, r.useMemo)((function() {
                            return (0, i.Z)(e, 2e3, {
                                leading: !0,
                                trailing: !1
                            })
                        }), [e]);
                    return (0, u.z)((function() {
                        n({
                            variant: "warning",
                            description: t("readOnlyEdit"),
                            duration: 2e3
                        })
                    }))
                },
                v = function() {
                    var t = (0, r.useRef)(!1),
                        e = (0, a.sZ)((function(t) {
                            return t.editor
                        })),
                        n = (0, a.hD)(e) ? e : null,
                        i = (0, d.QE)((function(t) {
                            return t.roomId
                        })),
                        u = c(),
                        s = f(),
                        v = (0, o.$G)("problems", {
                            keyPrefix: "collaboration.toast"
                        }).t,
                        h = (0, l.pm)().toast;
                    return (0, r.useEffect)((function() {
                        t.current !== u && (h({
                            variant: "warning",
                            description: v(u ? "readOnlyOn" : "readOnlyOff"),
                            duration: 2e3
                        }), t.current = u)
                    }), [u, v, h]), (0, r.useEffect)((function() {
                        null === n || void 0 === n || n.updateOptions({
                            readOnly: u && !!i
                        });
                        var t = null === n || void 0 === n ? void 0 : n.onDidAttemptReadOnlyEdit(s);
                        return function() {
                            return null === t || void 0 === t ? void 0 : t.dispose()
                        }
                    }), [n, u, s, i]), null
                }
        },
        1576: function(t, e, n) {
            n.d(e, {
                l: function() {
                    return g
                }
            });
            var i = n(47568),
                o = n(26042),
                r = n(70655),
                u = n(34275),
                a = n(66614),
                l = n(88525),
                d = n(23874),
                s = n(63808),
                c = n(20416),
                f = [{
                    id: 10,
                    name: "Accepted"
                }, {
                    id: 11,
                    name: "Wrong Answer"
                }, {
                    id: 12,
                    name: "Memory Limit Exceeded"
                }, {
                    id: 13,
                    name: "Output Limit Exceeded"
                }, {
                    id: 14,
                    name: "Time Limit Exceeded"
                }, {
                    id: 15,
                    name: "Runtime Error"
                }, {
                    id: 16,
                    name: "Internal Error"
                }, {
                    id: 20,
                    name: "Compile Error"
                }, {
                    id: 30,
                    name: "Timeout"
                }],
                v = function() {
                    return a.Hc.Html
                },
                h = function(t) {
                    if (!t.contestDetail || !t.contestQuestion) return null;
                    var e, n, i, o, r, a, l, d, s, h, g, m, p, b, T, y = t.contestDetail,
                        S = y.duration,
                        x = y.startTime,
                        E = y.failCount,
                        I = y.enableContestDynamicLayout,
                        N = y.isDynamicLayout,
                        _ = y.isVirtualContest,
                        w = y.hasCompletedContest,
                        A = t.contestQuestion,
                        D = A.totalAc,
                        R = A.totalAcUser,
                        C = A.totalSubmission,
                        O = A.totalTriedUser,
                        Z = A.question,
                        L = A.languageList,
                        P = A.submittableLanguageList;
                    return {
                        translatedTitle: null !== (e = null === Z || void 0 === Z ? void 0 : Z.translatedTitle) && void 0 !== e ? e : "",
                        translatedContent: null !== (n = null === Z || void 0 === Z ? void 0 : Z.translatedContent) && void 0 !== n ? n : "",
                        duration: null !== S && void 0 !== S ? S : 0,
                        startTime: (0, u.B)(x).unix(),
                        totalAc: null !== D && void 0 !== D ? D : 0,
                        totalSubmission: null !== C && void 0 !== C ? C : 0,
                        totalTriedUser: null !== O && void 0 !== O ? O : 0,
                        totalAcUser: null !== R && void 0 !== R ? R : 0,
                        penalties: null !== E && void 0 !== E ? E : 0,
                        hasCompletedContest: null !== w && void 0 !== w && w,
                        isVirtualContest: null !== _ && void 0 !== _ && _,
                        status: (0, c.Db)(null === Z || void 0 === Z ? void 0 : Z.status),
                        enableContestDynamicLayout: Boolean(I),
                        isDynamicLayout: N,
                        languageList: L,
                        title: null !== (i = null === Z || void 0 === Z ? void 0 : Z.title) && void 0 !== i ? i : "",
                        titleSlug: null !== (o = null === Z || void 0 === Z ? void 0 : Z.titleSlug) && void 0 !== o ? o : "",
                        questionId: null !== (r = null === Z || void 0 === Z ? void 0 : Z.questionId) && void 0 !== r ? r : "",
                        questionFrontendId: null !== (a = null === Z || void 0 === Z ? void 0 : Z.questionFrontendId) && void 0 !== a ? a : "",
                        contestQuestionNumber: null !== (l = null === Z || void 0 === Z ? void 0 : Z.contestQuestionNumber) && void 0 !== l ? l : null,
                        score: null !== (d = null === Z || void 0 === Z ? void 0 : Z.score) && void 0 !== d ? d : void 0,
                        isPaidOnly: !1,
                        difficulty: (0, c.Pf)(null === Z || void 0 === Z ? void 0 : Z.difficulty),
                        likes: 0,
                        dislikes: 0,
                        categoryTitle: null !== (s = null === Z || void 0 === Z ? void 0 : Z.categoryTitle) && void 0 !== s ? s : "",
                        content: null !== (h = null === Z || void 0 === Z ? void 0 : Z.content) && void 0 !== h ? h : "",
                        contentType: v(t),
                        mysqlSchemas: [],
                        dataSchemas: [],
                        questionTitle: null !== (g = null === Z || void 0 === Z ? void 0 : Z.title) && void 0 !== g ? g : "",
                        enableDebugger: !1,
                        enableRunCode: null !== (m = null === Z || void 0 === Z ? void 0 : Z.enableRunCode) && void 0 !== m && m,
                        enableSubmit: null !== (p = null === Z || void 0 === Z ? void 0 : Z.enableSubmit) && void 0 !== p && p,
                        enableTestMode: null !== (b = null === Z || void 0 === Z ? void 0 : Z.enableTestMode) && void 0 !== b && b,
                        exampleTestcaseList: null === Z || void 0 === Z ? void 0 : Z.exampleTestcaseList.filter((function(t) {
                            return !!t
                        })),
                        metaData: null !== (T = null === Z || void 0 === Z ? void 0 : Z.metaData) && void 0 !== T ? T : "",
                        codeSnippets: null === Z || void 0 === Z ? void 0 : Z.codeSnippets,
                        envInfo: null === Z || void 0 === Z ? void 0 : Z.envInfo,
                        hasFrontendPreview: !1,
                        frontendPreviews: "{}",
                        langList: (null !== P && void 0 !== P ? P : []).map((function(t) {
                            return {
                                id: Number(null === t || void 0 === t ? void 0 : t.id),
                                name: String(null === t || void 0 === t ? void 0 : t.verboseName),
                                slug: String(null === t || void 0 === t ? void 0 : t.name)
                            }
                        })),
                        statusList: f.map((function(t) {
                            return {
                                id: Number(null === t || void 0 === t ? void 0 : t.id),
                                name: String(null === t || void 0 === t ? void 0 : t.name)
                            }
                        }))
                    }
                },
                g = function(t, e) {
                    return (0, l.A7b)(s.f6, {
                        contestSlug: e,
                        questionSlug: t
                    }, {
                        enabled: !!t && !!e,
                        select: function(t) {
                            return h(t)
                        }
                    })
                };
            (function() {
                var t = (0, i.Z)((function(t) {
                    var e, n, i, u, a;
                    return (0, r.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e = t.params, n = e.queryClient, i = e.questionSlug, u = e.contestSlug, a = t.headers, [4, n.prefetchQuery({
                                    queryKey: l.A7b.getKey({
                                        questionSlug: i,
                                        contestSlug: u
                                    }),
                                    queryFn: function() {
                                        return s.GK.request({
                                            document: l.A7b.document,
                                            variables: {
                                                questionSlug: i,
                                                contestSlug: u
                                            },
                                            requestHeaders: (0, o.Z)({}, a)
                                        })
                                    }
                                })];
                            case 1:
                                return r.sent(), [2]
                        }
                    }))
                }))
            })(),
            function() {
                var t = (0, i.Z)((function(t) {
                    var e, n, i, u, a;
                    return (0, r.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e = t.params, n = e.queryClient, i = e.questionSlug, u = e.contestSlug, a = t.headers, [4, n.prefetchQuery({
                                    queryKey: d.A7b.getKey({
                                        questionSlug: i,
                                        contestSlug: u
                                    }),
                                    queryFn: function() {
                                        return s.GK.request({
                                            document: d.MBm,
                                            variables: {
                                                questionSlug: i,
                                                contestSlug: u
                                            },
                                            requestHeaders: (0, o.Z)({}, a)
                                        })
                                    }
                                })];
                            case 1:
                                return r.sent(), [2]
                        }
                    }))
                }))
            }()
        },
        94385: function(t, e, n) {
            n.d(e, {
                u: function() {
                    return o
                }
            });
            var i = n(31955),
                o = function() {
                    var t = function(t) {
                        i.Z.set("dynamic-layout-disabled", JSON.stringify(t), {
                            expires: 365
                        })
                    };
                    return {
                        data: !0,
                        disabledIde: function() {
                            return t(!0)
                        },
                        enabledIde: function() {
                            return t(!1)
                        }
                    }
                }
        },
        95682: function(t, e, n) {
            n.d(e, {
                I: function() {
                    return _
                }
            });
            var i = n(47568),
                o = n(70655),
                r = n(23282),
                u = n(66614),
                a = n(88525),
                l = n(23874),
                d = n(63808),
                s = n(20416);

            function c(t) {
                return void 0 !== (null === t || void 0 === t ? void 0 : t.submittableLanguageList)
            }
            var f, v, h, g = function(t) {
                    var e, n;
                    return (null !== (n = null === t || void 0 === t || null === (e = t.question) || void 0 === e ? void 0 : e.similarQuestionList) && void 0 !== n ? n : []).map((function(t) {
                        return {
                            difficulty: (0, s.Pf)(null === t || void 0 === t ? void 0 : t.difficulty),
                            title: null === t || void 0 === t ? void 0 : t.title,
                            titleSlug: null === t || void 0 === t ? void 0 : t.titleSlug,
                            translatedTitle: null === t || void 0 === t ? void 0 : t.translatedTitle,
                            isPaidOnly: Boolean(null === t || void 0 === t ? void 0 : t.isPaidOnly)
                        }
                    }))
                },
                m = function(t) {
                    var e, n;
                    return (null !== (n = JSON.parse(null === t || void 0 === t || null === (e = t.question) || void 0 === e ? void 0 : e.similarQuestions)) && void 0 !== n ? n : []).map((function(t) {
                        return {
                            difficulty: (0, s.Pf)(t.difficulty),
                            title: t.title,
                            titleSlug: t.titleSlug,
                            translatedTitle: t.translatedTitle,
                            isPaidOnly: Boolean(t.isPaidOnly)
                        }
                    }))
                },
                p = function(t) {
                    var e, n;
                    return {
                        topicId: null !== (f = null === (e = t.questionDiscussionTopic) || void 0 === e ? void 0 : e.id) && void 0 !== f ? f : 0,
                        commentCount: null !== (v = null === (n = t.questionDiscussionTopic) || void 0 === n ? void 0 : n.topLevelCommentCount) && void 0 !== v ? v : 0
                    }
                },
                b = function(t) {
                    var e;
                    return {
                        topicId: null !== (h = null === (e = t.question) || void 0 === e ? void 0 : e.boundTopicId) && void 0 !== h ? h : 0,
                        commentCount: 0
                    }
                },
                T = function(t) {
                    var e, n, i, o, r, u;
                    return (null !== (n = null === (e = t.question) || void 0 === e ? void 0 : e.nextChallenges) && void 0 !== n ? n : []).slice(0, 3).map((function(t) {
                        return {
                            difficulty: (0, s.Pf)(null !== (i = null === t || void 0 === t ? void 0 : t.difficulty) && void 0 !== i ? i : "E"),
                            title: null !== (o = null === t || void 0 === t ? void 0 : t.title) && void 0 !== o ? o : "",
                            titleSlug: null !== (r = null === t || void 0 === t ? void 0 : t.titleSlug) && void 0 !== r ? r : "",
                            frontendId: null !== (u = null === t || void 0 === t ? void 0 : t.questionFrontendId) && void 0 !== u ? u : ""
                        }
                    }))
                },
                y = function(t) {
                    var e, n;
                    return (null === (e = t.question) || void 0 === e ? void 0 : e.nextChallengePairs) ? JSON.parse(null === (n = t.question) || void 0 === n ? void 0 : n.nextChallengePairs).slice(0, 3).map((function(t) {
                        return {
                            difficulty: (0, s.Pf)(t.difficulty),
                            title: t.question_title,
                            titleSlug: t.question_title_slug,
                            frontendId: String(t.frontend_id)
                        }
                    })) : []
                },
                S = function(t) {
                    var e;
                    return null === (e = t.question) || void 0 === e ? void 0 : e.exampleTestcaseList.filter((function(t) {
                        return !!t
                    }))
                };

            function x(t, e) {
                try {
                    return JSON.parse(t || "")
                } catch (n) {
                    return e
                }
            }
            var E = function(t) {
                    var e;
                    if (!t.question) return [];
                    var n = t.question,
                        i = n.sampleTestCase,
                        o = n.exampleTestcases,
                        u = n.jsonExampleTestcases,
                        a = x(n.metaData, {});
                    if (u) {
                        var l = x(u, []);
                        if (l.length > 0) return l
                    }
                    var d = null !== o && void 0 !== o ? o : i,
                        s = a.systemdesign ? 2 : (null === (e = a.params) || void 0 === e ? void 0 : e.length) || 1,
                        c = null === d || void 0 === d ? void 0 : d.trim().split("\n");
                    return (0, r.Z)(c, s).map((function(t) {
                        return t.join("\n")
                    }))
                },
                I = function(t) {
                    var e;
                    return (null === (e = t.question) || void 0 === e ? void 0 : e.editorType) === l.YPR.Ckeditor ? u.Hc.Html : u.Hc.Markdown
                },
                N = function(t) {
                    var e, n, i, o, r, l, d, f, v, h, x, N, _, w, A, D, R, C, O, Z, L, P, M, q, B, F, z, U, j, k, H = t.question,
                        G = t.statusList,
                        V = t.languageList;
                    return H ? {
                        title: null !== (w = H.title) && void 0 !== w ? w : "",
                        titleSlug: null !== (A = H.titleSlug) && void 0 !== A ? A : "",
                        questionId: null !== (D = H.questionId) && void 0 !== D ? D : "",
                        questionFrontendId: null !== (R = H.questionFrontendId) && void 0 !== R ? R : "",
                        questionTitle: null !== (C = H.questionTitle) && void 0 !== C ? C : "",
                        translatedTitle: null !== (O = H.translatedTitle) && void 0 !== O ? O : "",
                        content: null !== (Z = H.content) && void 0 !== Z ? Z : "",
                        translatedContent: null !== (L = H.translatedContent) && void 0 !== L ? L : "",
                        categoryTitle: null !== (P = H.categoryTitle) && void 0 !== P ? P : "",
                        difficulty: (0, s.Pf)(H.difficulty),
                        questionStats: (0, s.fh)(H.stats),
                        questionStyle: c(t) || null === (e = t.question) || void 0 === e ? void 0 : e.style,
                        contributor: c(t) ? void 0 : {
                            authors: null !== (M = null === (n = t.question) || void 0 === n ? void 0 : n.contributors) && void 0 !== M ? M : [],
                            book: null === (i = t.question) || void 0 === i ? void 0 : i.book
                        },
                        companyTagStats: (0, s.EG)(H.companyTagStatsV2),
                        topicTags: (null !== (q = null === H || void 0 === H ? void 0 : H.topicTags) && void 0 !== q ? q : []).map((function(t) {
                            var e = t.name,
                                n = t.slug;
                            return {
                                name: e || "",
                                translatedName: t.translatedName || "",
                                slug: n || ""
                            }
                        })),
                        similarQuestions: c(t) ? g(t) : m(t),
                        mysqlSchemas: (null === (o = H.mysqlSchemas) || void 0 === o ? void 0 : o.map((function(t) {
                            return String(t)
                        }))) || [],
                        dataSchemas: (null === (r = H.dataSchemas) || void 0 === r ? void 0 : r.map((function(t) {
                            return String(t)
                        }))) || [],
                        frontendPreviews: H.frontendPreviews,
                        likes: Number(H.likes),
                        dislikes: Number(H.dislikes),
                        isPaidOnly: Boolean(H.isPaidOnly),
                        status: (0, s.Db)(H.status),
                        boundTopic: c(t) ? p(t) : b(t),
                        canSeeQuestion: !c(t) || !!(null === (l = t.question) || void 0 === l ? void 0 : l.canSeeQuestion),
                        enableTestMode: null !== (B = H.enableTestMode) && void 0 !== B && B,
                        metaData: null !== (F = H.metaData) && void 0 !== F ? F : "",
                        enableRunCode: null !== (z = H.enableRunCode) && void 0 !== z && z,
                        enableSubmit: null !== (U = H.enableSubmit) && void 0 !== U && U,
                        enableDebugger: !c(t) || null !== (j = null === (d = t.question) || void 0 === d ? void 0 : d.enableDebugger) && void 0 !== j && j,
                        envInfo: H.envInfo,
                        likeStatus: (0, s.w8)(H.isLiked),
                        nextChallenges: c(t) ? T(t) : y(t),
                        libraryUrl: H.libraryUrl || "",
                        adminUrl: c(t) && (null === (f = t.question) || void 0 === f ? void 0 : f.adminUrl) || "",
                        hints: (null === (v = H.hints) || void 0 === v ? void 0 : v.map((function(t) {
                            return t || ""
                        }))) || [],
                        hasEditorial: !!c(t) && Boolean(null === (h = t.ugcArticleOfficialSolutionArticle) || void 0 === h ? void 0 : h.uuid),
                        editorialMeta: {
                            hasVideo: !!c(t) && Boolean(null === (x = t.ugcArticleOfficialSolutionArticle) || void 0 === x ? void 0 : x.hasVideoArticle),
                            canSeeDetail: !!c(t) && Boolean(null === (N = t.ugcArticleOfficialSolutionArticle) || void 0 === N ? void 0 : N.canSee),
                            isPremium: !!c(t) && Boolean((null === (_ = t.ugcArticleOfficialSolutionArticle) || void 0 === _ ? void 0 : _.chargeType) === a.MbN.Premium)
                        },
                        codeSnippets: H.codeSnippets,
                        exampleTestcaseList: c(t) ? S(t) : E(t),
                        hasFrontendPreview: H.hasFrontendPreview,
                        contentType: c(t) ? u.Hc.Html : I(t),
                        langList: (null !== (k = c(t) ? t.submittableLanguageList : t.languageList) && void 0 !== k ? k : []).map((function(t) {
                            return {
                                id: Number(null === t || void 0 === t ? void 0 : t.id),
                                name: String(null === t || void 0 === t ? void 0 : t.verboseName),
                                slug: String(null === t || void 0 === t ? void 0 : t.name)
                            }
                        })),
                        statusList: (null !== G && void 0 !== G ? G : []).map((function(t) {
                            return {
                                id: Number(null === t || void 0 === t ? void 0 : t.id),
                                name: String(null === t || void 0 === t ? void 0 : t.name)
                            }
                        })),
                        languageList: V
                    } : null
                },
                _ = function(t) {
                    return (0, a.tzK)(d.f6, {
                        titleSlug: t
                    }, {
                        enabled: !!t,
                        select: function(t) {
                            return N(t)
                        }
                    })
                };
            (function() {
                var t = (0, i.Z)((function(t, e, n) {
                    return (0, o.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, t.prefetchQuery({
                                    queryKey: a.tzK.getKey({
                                        titleSlug: e
                                    }),
                                    queryFn: function() {
                                        return n.request(a.y49, {
                                            titleSlug: e
                                        })
                                    }
                                })];
                            case 1:
                                return i.sent(), [2]
                        }
                    }))
                }))
            })(),
            function() {
                var t = (0, i.Z)((function(t, e, n) {
                    return (0, o.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, t.prefetchQuery({
                                    queryKey: l.tzK.getKey({
                                        titleSlug: e
                                    }),
                                    queryFn: function() {
                                        return n.request(l.y49, {
                                            titleSlug: e
                                        })
                                    }
                                })];
                            case 1:
                                return i.sent(), [2]
                        }
                    }))
                }))
            }()
        },
        89395: function(t, e, n) {
            n.d(e, {
                T: function() {
                    return r
                }
            });
            var i = n(80570),
                o = n(93769),
                r = function() {
                    var t = (0, o.z2)((function(t) {
                        return t.questionSlug
                    }));
                    return (0, i.x)(t)
                }
        },
        34814: function(t, e, n) {
            n.d(e, {
                d: function() {
                    return r
                }
            });
            var i = n(69485),
                o = n(55433),
                r = function() {
                    var t = (0, o.sZ)((function(t) {
                            return t.editor
                        })),
                        e = (0, o.sZ)((function(t) {
                            return t.setCode
                        }));
                    return (0, i.z)((function(n) {
                        var i = n.value,
                            r = n.source;
                        if ((0, o.hD)(t)) {
                            var u, a = null === (u = null === t || void 0 === t ? void 0 : t.getModel()) || void 0 === u ? void 0 : u.getFullModelRange();
                            a && (null === t || void 0 === t || t.executeEdits(r, [{
                                range: a,
                                text: i,
                                forceMoveMarkers: !1
                            }]))
                        } else e(i)
                    }))
                }
        },
        55433: function(t, e, n) {
            n.d(e, {
                HB: function() {
                    return s
                },
                hD: function() {
                    return a
                },
                sZ: function() {
                    return d
                }
            });
            var i = n(26042),
                o = n(69396),
                r = n(64529),
                u = n(782);

            function a(t) {
                return void 0 !== (null === t || void 0 === t ? void 0 : t.addAction)
            }
            var l = (0, u.$e)({
                    code: void 0,
                    editor: null,
                    lang: void 0,
                    displayLang: void 0,
                    showResetTip: !0,
                    initEditorLoading: !0,
                    codemirrorHistory: !0
                }, (function(t) {
                    return {
                        setCode: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    code: e
                                })
                            }))
                        },
                        setLang: function(e, n) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    lang: e,
                                    displayLang: n
                                })
                            }))
                        },
                        setEditor: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    editor: e
                                })
                            }))
                        },
                        setShowResetTip: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    showResetTip: e
                                })
                            }))
                        },
                        setInitEditorLoading: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    initEditorLoading: e
                                })
                            }))
                        },
                        resetCodemirrorHistory: function() {
                            t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    codemirrorHistory: !1
                                })
                            })), setTimeout((function() {
                                return t((function(t) {
                                    return (0, o.Z)((0, i.Z)({}, t), {
                                        codemirrorHistory: !0
                                    })
                                }))
                            }), 1)
                        }
                    }
                })),
                d = (0, r.Ue)(l),
                s = (0, r.Ue)((0, u.tJ)((function(t) {
                    return {
                        shortcuts: {
                            enableQuickRunCode: !0,
                            enableQuickSubmit: !0
                        },
                        config: {
                            fontSize: 13,
                            theme: "",
                            keyBinding: "standard",
                            tabSize: 4,
                            enableWordWrap: !0,
                            enableRelativeLineNumber: !1
                        },
                        setConfig: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    config: (0, i.Z)({}, t.config, e)
                                })
                            }))
                        },
                        setShortcuts: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    shortcuts: (0, i.Z)({}, t.shortcuts, e)
                                })
                            }))
                        }
                    }
                }), {
                    name: "EDITOR_SETTING"
                }))
        },
        19159: function(t, e, n) {
            n.d(e, {
                $M: function() {
                    return A
                },
                AR: function() {
                    return j
                },
                AT: function() {
                    return N
                },
                At: function() {
                    return k
                },
                Cc: function() {
                    return w
                },
                EW: function() {
                    return V
                },
                GN: function() {
                    return U
                },
                JL: function() {
                    return x
                },
                Jt: function() {
                    return z
                },
                Kr: function() {
                    return y
                },
                Mb: function() {
                    return Z
                },
                Pn: function() {
                    return _
                },
                Qk: function() {
                    return g
                },
                Sf: function() {
                    return F
                },
                Te: function() {
                    return q
                },
                Tx: function() {
                    return v
                },
                U1: function() {
                    return D
                },
                UI: function() {
                    return E
                },
                Yh: function() {
                    return G
                },
                ZZ: function() {
                    return h
                },
                _r: function() {
                    return p
                },
                aB: function() {
                    return P
                },
                dM: function() {
                    return T
                },
                eB: function() {
                    return M
                },
                iT: function() {
                    return R
                },
                on: function() {
                    return B
                },
                vY: function() {
                    return I
                },
                wo: function() {
                    return O
                },
                x2: function() {
                    return C
                },
                xs: function() {
                    return S
                },
                xw: function() {
                    return m
                },
                yC: function() {
                    return L
                },
                zD: function() {
                    return H
                },
                zs: function() {
                    return b
                }
            });
            var i = n(26042),
                o = n(69396),
                r = n(10253),
                u = n(50576),
                a = n(27375),
                l = n(16751),
                d = n(58521),
                s = n(38954),
                c = n(44341),
                f = n(53335);

            function v(t, e, n, i) {
                var o = (0, f.nz)(t, e, i);
                o && (Object.entries(n).forEach((function(t) {
                    var e = (0, r.Z)(t, 2),
                        n = e[0],
                        i = e[1];
                    o.getExtraData()[n] = i
                })), t.doAction(d.e.updateNodeAttributes(o.getId(), {})))
            }

            function h(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.RJ.AfterActiveTab,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    u = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    s = e.title,
                    h = e.questionSlug,
                    g = e.topicId,
                    m = e.articleId,
                    p = e.topicSlug,
                    b = e.commentId;
                if (!r && !u) return v(t, a.r.Solutions, {
                    isRenderChildPage: !0,
                    customTitle: s,
                    questionSlug: h,
                    topicId: g,
                    articleId: m,
                    topicSlug: p,
                    commentId: b
                }), M(t, a.r.Solutions), void V(t, a.r.Solutions);
                if (!r && u) {
                    var T = (0, f.nz)(t, a.r.SolutionPost);
                    if (T) return A(t, a.r.SolutionPost, {
                        questionSlug: h,
                        topicId: g,
                        articleId: m,
                        topicSlug: p,
                        commentId: b
                    }), C(t, a.r.SolutionPost), void V(t, a.r.SolutionPost);
                    var y = (0, f.nz)(t, a.r.Solutions);
                    if (!y) return;
                    var S, x, E = y.getParent(),
                        I = E.getBestNeighbor(),
                        N = null !== (S = null === I || void 0 === I ? void 0 : I.getSelected()) && void 0 !== S ? S : E.getSelected(),
                        _ = t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.SolutionPost)), {
                            config: {
                                questionSlug: h,
                                topicId: g,
                                articleId: m,
                                topicSlug: p,
                                commentId: b
                            }
                        }), null !== (x = null === I || void 0 === I ? void 0 : I.getId()) && void 0 !== x ? x : E.getId(), l.R.CENTER, N + 1));
                    return (null === _ || void 0 === _ ? void 0 : _.getExtraData()) && (_.getExtraData().customTitle = s), void V(t, a.r.SolutionPost, {
                        topicId: g,
                        topicSlug: p
                    })
                }
                var w = (0, c.d)(p, g),
                    D = (0, f.nz)(t, a.r.SolutionPost, w);
                if (D) t.doAction(d.e.selectTab(D.getId()));
                else {
                    var R = (0, f.nz)(t, a.r.Solutions);
                    if (R) {
                        var O = n === a.RJ.AfterActiveTab ? {
                                newTabOpenOption: n,
                                usePrevActive: !0
                            } : {
                                newTabOpenOption: a.RJ.AfterSimilarTab,
                                component: a.r.SolutionPost
                            },
                            Z = (0, f.s$)({
                                model: t,
                                defaultAnchorTabNode: R,
                                option: O
                            }),
                            L = t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.SolutionPost)), {
                                config: {
                                    questionSlug: h,
                                    topicId: g,
                                    articleId: m,
                                    topicSlug: p,
                                    commentId: b
                                }
                            }), Z.toNodeId, Z.location, Z.index));
                        (null === L || void 0 === L ? void 0 : L.getExtraData()) && (L.getExtraData().customTitle = s), V(t, a.r.SolutionPost, {
                            topicId: g,
                            topicSlug: p
                        })
                    }
                }
            }

            function g(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (!n && !i) return v(t, a.r.Solutions, {
                    isRenderChildPage: void 0,
                    customTitle: void 0,
                    questionSlug: void 0,
                    topicId: void 0,
                    articleId: void 0,
                    topicSlug: void 0,
                    commentId: void 0
                }), void M(t, a.r.Solutions);
                B(t, a.r.SolutionPost, e), C(t, a.r.Solutions)
            }

            function m(t) {
                v(t, a.r.Solutions, {
                    isRenderChildPage: void 0,
                    customTitle: void 0,
                    questionSlug: void 0,
                    topicId: void 0,
                    articleId: void 0,
                    topicSlug: void 0,
                    commentId: void 0
                }), (0, f.wd)(t, a.r.SolutionPost).forEach((function(e) {
                    return t.doAction(d.e.deleteTab(e.getId()))
                }))
            }

            function p(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e) {
                    var n, i = (0, f.nz)(t, a.r.Solutions),
                        o = null !== (n = null === i || void 0 === i ? void 0 : i.getExtraData()) && void 0 !== n ? n : {},
                        r = o.questionSlug,
                        u = o.topicId,
                        l = o.articleId,
                        s = o.topicSlug,
                        c = o.commentId,
                        g = o.customTitle;
                    if (!u && !s) return;
                    v(t, a.r.Solutions, {
                        isRenderChildPage: void 0,
                        customTitle: void 0,
                        questionSlug: void 0,
                        topicId: void 0,
                        articleId: void 0,
                        topicSlug: void 0,
                        commentId: void 0
                    }), h(t, {
                        title: g,
                        questionSlug: r,
                        topicId: u,
                        articleId: l,
                        topicSlug: s,
                        commentId: c
                    }, void 0, !1, !0), C(t, a.r.SolutionPost)
                } else {
                    var m, p = (0, f.nz)(t, a.r.SolutionPost);
                    if (!p) return;
                    var b, T = null !== (m = null === p || void 0 === p ? void 0 : p.getConfig()) && void 0 !== m ? m : {},
                        y = T.questionSlug,
                        S = T.topicId,
                        x = T.articleId,
                        E = T.topicSlug,
                        I = T.commentId,
                        N = (null !== (b = null === p || void 0 === p ? void 0 : p.getExtraData()) && void 0 !== b ? b : {}).customTitle;
                    t.doAction(d.e.deleteTab(p.getId())), h(t, {
                        title: N,
                        questionSlug: y,
                        topicId: S,
                        articleId: x,
                        topicSlug: E,
                        commentId: I
                    }, void 0, !1, !1), C(t, a.r.Solutions)
                }
            }

            function b(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = e.title,
                    u = e.id,
                    s = e.focusNotes;
                if (!n) {
                    var c = (0, f.nz)(t, a.r.SubmissionDetail);
                    if (c) return A(t, a.r.SubmissionDetail, {
                        id: u,
                        focusNotes: s,
                        isFromSubmitBtn: !0
                    }), C(t, a.r.SubmissionDetail), void V(t, a.r.SubmissionDetail);
                    var v = (0, f.nz)(t, a.r.Code);
                    if (!v) return;
                    var h, g, m = v.getParent(),
                        p = m.getBestNeighbor(),
                        b = null !== (h = null === p || void 0 === p ? void 0 : p.getSelected()) && void 0 !== h ? h : m.getSelected(),
                        T = t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.SubmissionDetail)), {
                            config: {
                                id: u,
                                focusNotes: s,
                                isFromSubmitBtn: !0
                            }
                        }), null !== (g = null === p || void 0 === p ? void 0 : p.getId()) && void 0 !== g ? g : m.getId(), l.R.CENTER, b + 1));
                    return (null === T || void 0 === T ? void 0 : T.getExtraData()) && (T.getExtraData().customTitle = r), void V(t, a.r.SubmissionDetail, {
                        id: u
                    })
                }
                var y = (0, f.nz)(t, a.r.SubmissionDetail, {
                    isFromSubmitBtn: !0
                });
                if (y) return t.doAction(d.e.updateNodeAttributes(y.getId(), {
                    config: {
                        id: u,
                        focusNotes: s,
                        isFromSubmitBtn: !0
                    }
                })), t.doAction(d.e.selectTab(y.getId())), void((null === y || void 0 === y ? void 0 : y.getExtraData()) && (y.getExtraData().customTitle = r));
                var S = (0, f.nz)(t, a.r.Submissions);
                if (S) {
                    var x = (0, f.s$)({
                            model: t,
                            defaultAnchorTabNode: S,
                            option: {
                                newTabOpenOption: a.RJ.AfterSimilarTab,
                                component: a.r.SubmissionDetail
                            }
                        }),
                        E = t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.SubmissionDetail)), {
                            config: {
                                id: u,
                                focusNotes: s,
                                isFromSubmitBtn: !0
                            }
                        }), x.toNodeId, x.location, x.index));
                    V(t, a.r.SubmissionDetail, {
                        id: u
                    }), (null === E || void 0 === E ? void 0 : E.getExtraData()) && (E.getExtraData().customTitle = r)
                }
            }

            function T(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.RJ.AfterActiveTab,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    u = e.title,
                    s = e.id,
                    c = e.focusNotes;
                if (!r) {
                    var v = (0, f.nz)(t, a.r.SubmissionDetail);
                    if (v) return A(t, a.r.SubmissionDetail, {
                        id: s,
                        focusNotes: c
                    }), C(t, a.r.SubmissionDetail), void V(t, a.r.SubmissionDetail);
                    var h = (0, f.nz)(t, a.r.Submissions);
                    if (!h) return;
                    var g, m, p = h.getParent(),
                        b = p.getBestNeighbor(),
                        T = null !== (g = null === b || void 0 === b ? void 0 : b.getSelected()) && void 0 !== g ? g : p.getSelected(),
                        y = t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.SubmissionDetail)), {
                            config: {
                                id: s,
                                focusNotes: c
                            }
                        }), null !== (m = null === b || void 0 === b ? void 0 : b.getId()) && void 0 !== m ? m : p.getId(), l.R.CENTER, T + 1));
                    return (null === y || void 0 === y ? void 0 : y.getExtraData()) && (y.getExtraData().customTitle = u), void V(t, a.r.SubmissionDetail, {
                        id: s
                    })
                }
                var S = (0, f.nz)(t, a.r.SubmissionDetail, {
                    id: s
                });
                if (S) {
                    var x, E = S.getId(),
                        I = null !== (x = S.getConfig()) && void 0 !== x ? x : {};
                    return t.doAction(d.e.updateNodeAttributes(E, {
                        config: (0, o.Z)((0, i.Z)({}, I), {
                            focusNotes: c
                        })
                    })), t.doAction(d.e.selectTab(E)), void V(t, a.r.SubmissionDetail, {
                        id: s
                    })
                }
                var N = (0, f.nz)(t, a.r.Submissions);
                if (N) {
                    var _ = n === a.RJ.AfterActiveTab ? {
                            newTabOpenOption: n,
                            usePrevActive: !0
                        } : {
                            newTabOpenOption: a.RJ.AfterSimilarTab,
                            component: a.r.SubmissionDetail
                        },
                        w = (0, f.s$)({
                            model: t,
                            defaultAnchorTabNode: N,
                            option: _
                        }),
                        D = t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.SubmissionDetail)), {
                            config: {
                                id: s,
                                focusNotes: c
                            }
                        }), w.toNodeId, w.location, w.index));
                    (null === D || void 0 === D ? void 0 : D.getExtraData()) && (D.getExtraData().customTitle = u), V(t, a.r.SubmissionDetail, {
                        id: s
                    })
                }
            }

            function y(t, e) {
                B(t, a.r.SubmissionDetail, e), C(t, a.r.Submissions)
            }

            function S(t) {
                v(t, a.r.Submissions, {
                    isRenderChildPage: void 0,
                    customTitle: void 0,
                    id: void 0,
                    focusNotes: void 0,
                    isFromSubmitBtn: void 0
                }), (0, f.wd)(t, a.r.SubmissionDetail).forEach((function(e) {
                    return t.doAction(d.e.deleteTab(e.getId()))
                }))
            }

            function x(t) {
                var e = (0, f.nz)(t, a.r.Result);
                if (e) t.doAction(d.e.selectTab(e.getId()));
                else {
                    var n = (0, f.nz)(t, a.r.Testcase);
                    if (n) {
                        var i = t.doAction(d.e.addNode((0, f.DX)(a.r.Result), n.getParent().getId(), l.R.CENTER, -1));
                        t.doAction(d.e.selectTab(i.getId()))
                    }
                }
            }

            function E(t) {
                var e = (0, f.nz)(t, a.r.Testcase);
                e && t.doAction(d.e.selectTab(e.getId()))
            }

            function I(t) {
                var e = (0, f.nz)(t, a.r.Note);
                if (e) return t.doAction(d.e.selectTab(e.getId())), H(t, a.r.Note), void V(t, a.r.Note);
                var n = (0, f.nz)(t, a.r.Code);
                if (n) {
                    var i = (0, f.s$)({
                        model: t,
                        defaultAnchorTabNode: n,
                        option: {
                            newTabOpenOption: a.RJ.AfterActiveTab,
                            usePrevActive: !1
                        }
                    });
                    t.doAction(d.e.addNode((0, f.DX)(a.r.Note), i.toNodeId, i.location, i.index)), H(t, a.r.Note), V(t, a.r.Note)
                }
            }

            function N(t) {
                var e = (0, f.nz)(t, a.r.Debugger);
                if (e) t.doAction(d.e.selectTab(e.getId()));
                else {
                    var n = (0, f.nz)(t, a.r.Code);
                    if (n) {
                        var i = n.getParent(),
                            o = i.getId(),
                            r = i.getBestNeighbor(),
                            u = null === r || void 0 === r ? void 0 : r.getId();
                        u && (o = u), t.doAction(d.e.addNode((0, f.DX)(a.r.Debugger), o, l.R.CENTER, -1))
                    }
                }
            }

            function _(t) {
                var e = (0, f.nz)(t, a.r.Debugger);
                e && t.doAction(d.e.deleteTab(e.getId()))
            }

            function w(t) {
                var e = (0, f.nz)(t, a.r.Result);
                e && t.doAction(d.e.deleteTab(e.getId()))
            }

            function A(t, e, n, o) {
                var r, u = (0, f.nz)(t, e, o);
                u && t.doAction(d.e.updateNodeAttributes(u.getId(), {
                    config: (0, i.Z)({}, null !== (r = u.getConfig()) && void 0 !== r ? r : {}, n)
                }))
            }

            function D(t, e, n, i) {
                v(t, e, {
                    customTitle: n
                }, i)
            }

            function R(t, e, n) {
                v(t, e, {
                    disabled: n
                })
            }

            function C(t, e, n, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.RJ.AfterActiveTab,
                    r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                    l = (0, f.nz)(t, e, n);
                if (l && t.doAction(d.e.selectTab(l.getId())), i) {
                    if (e === a.r.SolutionPost) {
                        var s = null !== n && void 0 !== n ? n : {},
                            c = s.title,
                            v = s.questionSlug,
                            g = s.topicId,
                            m = s.articleId,
                            p = s.topicSlug,
                            b = s.commentId;
                        h(t, {
                            title: c,
                            questionSlug: v,
                            topicId: g,
                            articleId: m,
                            topicSlug: p,
                            commentId: b
                        }, o, r, u)
                    }
                    if (e === a.r.SubmissionDetail) {
                        var y = null !== n && void 0 !== n ? n : {},
                            S = y.title,
                            x = y.id;
                        T(t, {
                            title: S,
                            id: x
                        }, o, r)
                    }
                }
            }

            function O(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.P5.Default;
                t._setActiveTab(void 0), t._setActiveTabset(void 0);
                var n = [];
                t.visitNodes((function(t) {
                    if (t.getType() === s.B.TYPE) {
                        var i, o = null !== (i = t.getComponent()) && void 0 !== i ? i : "";
                        (0, f.yF)(o, e) || n.push(t.getId())
                    }
                })), n.forEach((function(e) {
                    t.doAction(d.e.deleteTab(e))
                })), m(t), S(t);
                var i = (0, f.nz)(t, a.r.Description);
                i && t.doAction(d.e.selectTab(i.getId()))
            }

            function Z(t) {
                var e = t.getActiveTabset();
                e && t.doAction(d.e.maximizeToggle(e.getId()))
            }
            var L = function(t) {
                var e = t.getActiveTabset();
                e && t.doAction(d.e.foldToggle(e.getId()))
            };

            function P(t) {
                var e = t.getActiveTab();
                (null === e || void 0 === e ? void 0 : e.isEnableClose()) && t.doAction(d.e.deleteTab(e.getId()))
            }

            function M(t, e, n) {
                var i, o = (0, f.nz)(t, e, n);
                if (o) {
                    var r = o.getParent();
                    r.isActive() && (null === (i = r.getSelectedNode()) || void 0 === i ? void 0 : i.getId()) === o.getId() ? (t._setActiveTabset(void 0), setTimeout((function() {
                        t._setActiveTabset(r), t.doAction(d.e.updateNodeAttributes(o.getId(), {}))
                    }), 10)) : t.doAction(d.e.selectTab(o.getId()))
                }
            }

            function q(t, e, n) {
                (0, f.G4)(t, e, n) && M(t, e, n)
            }

            function B(t, e, n) {
                var i = (0, f.nz)(t, e, n);
                i && t.doAction(d.e.deleteTab(i.getId()))
            }

            function F(t) {
                var e = (0, f.nz)(t, a.r.Editorial);
                if (e) return t.doAction(d.e.selectTab(e.getId())), H(t, a.r.Editorial), void V(t, a.r.Editorial);
                var n = (0, f.nz)(t, a.r.Description);
                if (n) {
                    var i = n.getParent(),
                        o = t.doAction(d.e.addNode((0, f.DX)(a.r.Editorial), i.getId(), l.R.CENTER, -1)),
                        r = null === o || void 0 === o ? void 0 : o.getParent();
                    t.doAction(d.e.updateNodeAttributes(r.getId(), {})), H(t, a.r.Editorial), V(t, a.r.Editorial)
                }
            }

            function z(t, e) {
                var n = (0, f.nz)(t, a.r.CodeSample);
                if (n && (0, u.Z)(n.getConfig(), e)) return H(t, a.r.CodeSample), void V(t, a.r.CodeSample);
                var r = (0, f.nz)(t, a.r.CodeSample),
                    s = r || (0, f.nz)(t, a.r.Code);
                if (s) {
                    var c, h = t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.CodeSample)), {
                        config: (0, i.Z)({}, e)
                    }), s.getParent().getId(), l.R.CENTER, -1));
                    v(t, a.r.CodeSample, null !== e && void 0 !== e ? e : {}), D(t, a.r.CodeSample, null !== (c = e.title) && void 0 !== c ? c : ""), t.doAction(d.e.selectTab(h.getId())), H(t, a.r.CodeSample), V(t, a.r.CodeSample), n && t.doAction(d.e.deleteTab(n.getId()))
                }
            }

            function U(t, e) {
                var n = (0, f.nz)(t, a.r.RawText, {
                    rawText: e.rawText,
                    language: e.language
                });
                if (n) {
                    var r, u = n.getId(),
                        s = null !== (r = n.getConfig()) && void 0 !== r ? r : {};
                    return t.doAction(d.e.updateNodeAttributes(u, {
                        config: (0, i.Z)({}, s, e)
                    })), t.doAction(d.e.selectTab(n.getId())), H(t, a.r.RawText, {
                        rawText: e.rawText,
                        language: e.language
                    }), void V(t, a.r.RawText, {
                        rawText: e.rawText,
                        language: e.language
                    })
                }
                var c = (0, f.nz)(t, a.r.RawText),
                    h = c || (0, f.nz)(t, a.r.Code);
                if (h) {
                    var g, m = t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.RawText)), {
                        config: {
                            rawText: e.rawText,
                            language: e.language
                        }
                    }), h.getParent().getId(), l.R.CENTER, -1));
                    t.doAction(d.e.selectTab(m.getId())), v(t, a.r.RawText, null !== e && void 0 !== e ? e : {}), setTimeout((function() {
                        v(t, a.r.RawText, (0, i.Z)({}, e))
                    }), 10), D(t, a.r.RawText, null !== (g = e.title) && void 0 !== g ? g : ""), H(t, a.r.RawText, {
                        rawText: e.rawText,
                        language: e.language
                    }), V(t, a.r.RawText, {
                        rawText: e.rawText,
                        language: e.language
                    })
                }
            }

            function j(t, e) {
                var n = e.submissionId,
                    r = e.title,
                    u = (0, f.nz)(t, a.r.SubmissionPreview);
                if (u) {
                    var l, s = u.getId(),
                        c = null !== (l = u.getConfig()) && void 0 !== l ? l : {};
                    return t.doAction(d.e.updateNodeAttributes(s, {
                        config: (0, o.Z)((0, i.Z)({}, c), {
                            submissionId: n
                        })
                    })), void t.doAction(d.e.selectTab(s))
                }
                var v = (0, f.nz)(t, a.r.Submissions);
                if (v) {
                    var h = (0, f.s$)({
                        model: t,
                        defaultAnchorTabNode: v
                    });
                    t.doAction(d.e.addNode((0, o.Z)((0, i.Z)({}, (0, f.DX)(a.r.SubmissionPreview)), {
                        config: {
                            submissionId: n
                        }
                    }), h.toNodeId, h.location, h.index)), D(t, a.r.SubmissionPreview, null !== r && void 0 !== r ? r : "Submission Preview")
                }
            }

            function k(t, e) {
                var n = (0, f.nz)(t, e);
                if (n) {
                    var i = n._getAttr("id");
                    return document.getElementById(i.slice(1))
                }
            }

            function H(t, e, n) {
                v(t, e, {
                    isHighlight: !0
                }, n)
            }

            function G(t, e, n, i) {
                v(t, e, {
                    isLoading: n
                }, i)
            }

            function V(t, e, n) {
                var i = (0, f.nz)(t, e, n);
                if (i) {
                    var o = i.getParent();
                    !(null === o || void 0 === o ? void 0 : o.canMinimize()) && t.doAction(d.e.foldToggle(o.getId()))
                }
            }
        },
        70375: function(t, e, n) {
            n.d(e, {
                a: function() {
                    return o
                }
            });
            var i = n(51438),
                o = function() {
                    function t(e, n, o, r) {
                        (0, i.Z)(this, t), this.name = e, this.modelName = n, this.defaultValue = o, this.alwaysWriteJson = r, this.required = !1, this.fixed = !1, this.type = "any"
                    }
                    var e = t.prototype;
                    return e.setType = function(t) {
                        return this.type = t, this
                    }, e.setRequired = function() {
                        return this.required = !0, this
                    }, e.setFixed = function() {
                        return this.fixed = !0, this
                    }, t
                }();
            o.NUMBER = "number", o.STRING = "string", o.BOOLEAN = "boolean"
        },
        12612: function(t, e, n) {
            n.d(e, {
                H: function() {
                    return r
                }
            });
            var i = n(51438),
                o = n(70375),
                r = function() {
                    function t() {
                        (0, i.Z)(this, t), this.attributes = [], this.nameToAttribute = {}
                    }
                    var e = t.prototype;
                    return e.addWithAll = function(t, e, n, i) {
                        var r = new o.a(t, e, n, i);
                        return this.attributes.push(r), this.nameToAttribute[t] = r, r
                    }, e.addInherited = function(t, e) {
                        return this.addWithAll(t, e, void 0, !1)
                    }, e.add = function(t, e, n) {
                        return this.addWithAll(t, void 0, e, n)
                    }, e.getAttributes = function() {
                        return this.attributes
                    }, e.getModelName = function(t) {
                        var e = this.nameToAttribute[t];
                        if (void 0 !== e) return e.modelName
                    }, e.toJson = function(t, e) {
                        var n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var r, u = this.attributes[Symbol.iterator](); !(n = (r = u.next()).done); n = !0) {
                                var a = r.value,
                                    l = e[a.name];
                                (a.alwaysWriteJson || l !== a.defaultValue) && (t[a.name] = l)
                            }
                        } catch (d) {
                            i = !0, o = d
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                    }, e.fromJson = function(t, e) {
                        var n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var r, u = this.attributes[Symbol.iterator](); !(n = (r = u.next()).done); n = !0) {
                                var a = r.value,
                                    l = t[a.name];
                                e[a.name] = void 0 === l ? a.defaultValue : l
                            }
                        } catch (d) {
                            i = !0, o = d
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                    }, e.update = function(t, e) {
                        var n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var r, u = this.attributes[Symbol.iterator](); !(n = (r = u.next()).done); n = !0) {
                                var a = r.value;
                                if (t.hasOwnProperty(a.name)) {
                                    var l = t[a.name];
                                    void 0 === l ? delete e[a.name] : e[a.name] = l
                                }
                            }
                        } catch (d) {
                            i = !0, o = d
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                    }, e.setDefaults = function(t) {
                        var e = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var o, r = this.attributes[Symbol.iterator](); !(e = (o = r.next()).done); e = !0) {
                                var u = o.value;
                                t[u.name] = u.defaultValue
                            }
                        } catch (a) {
                            n = !0, i = a
                        } finally {
                            try {
                                e || null == r.return || r.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                    }, e.toTypescriptInterface = function(t, e) {
                        var n = [],
                            i = this.attributes.sort((function(t, e) {
                                return t.name.localeCompare(e.name)
                            }));
                        n.push("export interface I" + t + "Attributes {");
                        for (var o = 0; o < i.length; o++) {
                            var r = i[o],
                                u = r.type,
                                a = void 0,
                                l = r,
                                d = void 0;
                            void 0 !== l.defaultValue ? a = l.defaultValue : void 0 !== l.modelName && void 0 !== e && void 0 !== e.nameToAttribute[l.modelName] && (d = l.modelName, a = (l = e.nameToAttribute[l.modelName]).defaultValue, u = l.type);
                            var s = JSON.stringify(a),
                                c = l.required || l.fixed ? "" : "?";
                            if (r.fixed) n.push("\t" + r.name + ": " + s + ";");
                            else {
                                var f = (void 0 !== a ? "default: " + s : "") + (void 0 !== d ? " - inherited from global " + d : "");
                                n.push("\t" + r.name + c + ": " + u + ";" + (f.length > 0 ? " // " + f : ""))
                            }
                        }
                        return n.push("}"), n.join("\n")
                    }, t
                }()
        },
        16751: function(t, e, n) {
            n.d(e, {
                R: function() {
                    return u
                }
            });
            var i = n(51438),
                o = n(16088),
                r = n(37165),
                u = function() {
                    function t(e, n, o) {
                        (0, i.Z)(this, t), this._name = e, this._orientation = n, this._indexPlus = o, t.values[this._name] = this
                    }
                    var e = t.prototype;
                    return e.getName = function() {
                        return this._name
                    }, e.getOrientation = function() {
                        return this._orientation
                    }, e.getDockRect = function(e) {
                        return this === t.TOP ? new r.U(e.x, e.y, e.width, e.height / 2) : this === t.BOTTOM ? new r.U(e.x, e.getBottom() - e.height / 2, e.width, e.height / 2) : this === t.LEFT ? new r.U(e.x, e.y, e.width / 2, e.height) : this === t.RIGHT ? new r.U(e.getRight() - e.width / 2, e.y, e.width / 2, e.height) : e.clone()
                    }, e.split = function(e, n) {
                        return this === t.TOP ? {
                            start: new r.U(e.x, e.y, e.width, n),
                            end: new r.U(e.x, e.y + n, e.width, e.height - n)
                        } : this === t.LEFT ? {
                            start: new r.U(e.x, e.y, n, e.height),
                            end: new r.U(e.x + n, e.y, e.width - n, e.height)
                        } : this === t.RIGHT ? {
                            start: new r.U(e.getRight() - n, e.y, n, e.height),
                            end: new r.U(e.x, e.y, e.width - n, e.height)
                        } : {
                            start: new r.U(e.x, e.getBottom() - n, e.width, n),
                            end: new r.U(e.x, e.y, e.width, e.height - n)
                        }
                    }, e.reflect = function() {
                        return this === t.TOP ? t.BOTTOM : this === t.LEFT ? t.RIGHT : this === t.RIGHT ? t.LEFT : t.TOP
                    }, e.toString = function() {
                        return "(DockLocation: name=" + this._name + ", orientation=" + this._orientation + ")"
                    }, t.getByName = function(e) {
                        return t.values[e]
                    }, t.getLocation = function(e, n, i) {
                        if (n = (n - e.x) / e.width, i = (i - e.y) / e.height, n >= .25 && n < .75 && i >= .25 && i < .75) return t.CENTER;
                        var o = i >= 1 - n;
                        return i >= n ? o ? t.BOTTOM : t.LEFT : o ? t.RIGHT : t.TOP
                    }, t
                }();
            u.values = {}, u.TOP = new u("top", o.i.VERT, 0), u.BOTTOM = new u("bottom", o.i.VERT, 1), u.LEFT = new u("left", o.i.HORZ, 0), u.RIGHT = new u("right", o.i.HORZ, 1), u.CENTER = new u("center", o.i.VERT, 0)
        },
        16088: function(t, e, n) {
            n.d(e, {
                i: function() {
                    return o
                }
            });
            var i = n(51438),
                o = function() {
                    function t(e) {
                        (0, i.Z)(this, t), this._name = e
                    }
                    var e = t.prototype;
                    return e.getName = function() {
                        return this._name
                    }, e.toString = function() {
                        return this._name
                    }, t.flip = function(e) {
                        return e === t.HORZ ? t.VERT : t.HORZ
                    }, t
                }();
            o.HORZ = new o("horz"), o.VERT = new o("vert")
        },
        37165: function(t, e, n) {
            n.d(e, {
                U: function() {
                    return r
                }
            });
            var i = n(51438),
                o = n(16088),
                r = function() {
                    function t(e, n, o, r) {
                        (0, i.Z)(this, t), this.x = e, this.y = n, this.width = o, this.height = r
                    }
                    var e = t.prototype;
                    return e.clone = function() {
                        return new t(this.x, this.y, this.width, this.height)
                    }, e.equals = function(t) {
                        return this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height
                    }, e.getBottom = function() {
                        return this.y + this.height
                    }, e.getRight = function() {
                        return this.x + this.width
                    }, e.getRightRotate = function() {
                        return this.x + this.height
                    }, e.getCenter = function() {
                        return {
                            x: this.x + this.width / 2,
                            y: this.y + this.height / 2
                        }
                    }, e.positionElement = function(t, e) {
                        this.styleWithPosition(t.style, e)
                    }, e.styleWithPosition = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "absolute";
                        return t.left = this.x + "px", t.top = this.y + "px", t.width = Math.max(0, this.width) + "px", t.height = Math.max(0, this.height) + "px", t.position = e, t
                    }, e.contains = function(t, e) {
                        return this.x <= t && t <= this.getRight() && this.y <= e && e <= this.getBottom()
                    }, e.removeInsets = function(e) {
                        return new t(this.x + e.left, this.y + e.top, Math.max(0, this.width - e.left - e.right), Math.max(0, this.height - e.top - e.bottom))
                    }, e.centerInRect = function(t) {
                        this.x = (t.width - this.width) / 2, this.y = (t.height - this.height) / 2
                    }, e._getSize = function(t) {
                        var e = this.width;
                        return t === o.i.VERT && (e = this.height), e
                    }, e.toString = function() {
                        return "(Rect: x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
                    }, t.empty = function() {
                        return new t(0, 0, 0, 0)
                    }, t.fromElement = function(e) {
                        var n = e.getBoundingClientRect();
                        return new t(n.x, n.y, n.width, n.height)
                    }, t
                }()
        },
        58521: function(t, e, n) {
            n.d(e, {
                e: function() {
                    return r
                }
            });
            var i = n(51438),
                o = function t(e, n) {
                    (0, i.Z)(this, t), this.type = e, this.data = n
                },
                r = function() {
                    function t() {
                        (0, i.Z)(this, t)
                    }
                    return t.addNode = function(e, n, i, r, u) {
                        return new o(t.ADD_NODE, {
                            json: e,
                            toNode: n,
                            location: i.getName(),
                            index: r,
                            select: u
                        })
                    }, t.moveNode = function(e, n, i, r, u) {
                        return new o(t.MOVE_NODE, {
                            fromNode: e,
                            toNode: n,
                            location: i.getName(),
                            index: r,
                            select: u
                        })
                    }, t.deleteTab = function(e) {
                        return new o(t.DELETE_TAB, {
                            node: e
                        })
                    }, t.deleteTabset = function(e) {
                        return new o(t.DELETE_TABSET, {
                            node: e
                        })
                    }, t.renameTab = function(e, n) {
                        return new o(t.RENAME_TAB, {
                            node: e,
                            text: n
                        })
                    }, t.selectTab = function(e) {
                        return new o(t.SELECT_TAB, {
                            tabNode: e
                        })
                    }, t.setActiveTabset = function(e) {
                        return new o(t.SET_ACTIVE_TABSET, {
                            tabsetNode: e
                        })
                    }, t.adjustSplit = function(e) {
                        var n = e.node1Id,
                            i = e.node2Id;
                        return new o(t.ADJUST_SPLIT, {
                            node1: n,
                            weight1: e.weight1,
                            pixelWidth1: e.pixelWidth1,
                            node2: i,
                            weight2: e.weight2,
                            pixelWidth2: e.pixelWidth2
                        })
                    }, t.adjustBorderSplit = function(e, n) {
                        return new o(t.ADJUST_BORDER_SPLIT, {
                            node: e,
                            pos: n
                        })
                    }, t.foldToggle = function(e) {
                        return new o(t.FOLD_TOGGLE, {
                            node: e
                        })
                    }, t.maximizeToggle = function(e) {
                        return new o(t.MAXIMIZE_TOGGLE, {
                            node: e
                        })
                    }, t.updateModelAttributes = function(e) {
                        return new o(t.UPDATE_MODEL_ATTRIBUTES, {
                            json: e
                        })
                    }, t.updateNodeAttributes = function(e, n) {
                        return new o(t.UPDATE_NODE_ATTRIBUTES, {
                            node: e,
                            json: n
                        })
                    }, t.floatTab = function(e) {
                        return new o(t.FLOAT_TAB, {
                            node: e
                        })
                    }, t.unFloatTab = function(e) {
                        return new o(t.UNFLOAT_TAB, {
                            node: e
                        })
                    }, t
                }();
            r.ADD_NODE = "FlexLayout_AddNode", r.MOVE_NODE = "FlexLayout_MoveNode", r.DELETE_TAB = "FlexLayout_DeleteTab", r.DELETE_TABSET = "FlexLayout_DeleteTabset", r.RENAME_TAB = "FlexLayout_RenameTab", r.SELECT_TAB = "FlexLayout_SelectTab", r.SET_ACTIVE_TABSET = "FlexLayout_SetActiveTabset", r.ADJUST_SPLIT = "FlexLayout_AdjustSplit", r.ADJUST_BORDER_SPLIT = "FlexLayout_AdjustBorderSplit", r.MAXIMIZE_TOGGLE = "FlexLayout_MaximizeToggle", r.FOLD_TOGGLE = "FlexLayout_FoldToggle", r.UPDATE_MODEL_ATTRIBUTES = "FlexLayout_UpdateModelAttributes", r.UPDATE_NODE_ATTRIBUTES = "FlexLayout_UpdateNodeAttributes", r.FLOAT_TAB = "FlexLayout_FloatTab", r.UNFLOAT_TAB = "FlexLayout_UnFloatTab"
        },
        58438: function(t, e, n) {
            n.d(e, {
                N: function() {
                    return a
                }
            });
            var i = n(51438),
                o = n(16751),
                r = n(16088),
                u = n(37165),
                a = function() {
                    function t(e) {
                        (0, i.Z)(this, t), this._dirty = !1, this._tempSize = 0, this._model = e, this._attributes = {}, this._children = [], this._fixed = !1, this._rect = u.U.empty(), this._visible = !1, this._listeners = {}
                    }
                    var e = t.prototype;
                    return e.getId = function() {
                        var t = this._attributes.id;
                        return void 0 !== t || (t = this._model._nextUniqueId(), this._setId(t)), t
                    }, e.getModel = function() {
                        return this._model
                    }, e.getType = function() {
                        return this._attributes.type
                    }, e.getParent = function() {
                        return this._parent
                    }, e.getChildren = function() {
                        return this._children
                    }, e.getRect = function() {
                        return this._rect
                    }, e.isVisible = function() {
                        return this._visible
                    }, e.getOrientation = function() {
                        return void 0 === this._parent ? this._model.isRootOrientationVertical() ? r.i.VERT : r.i.HORZ : r.i.flip(this._parent.getOrientation())
                    }, e.setEventListener = function(t, e) {
                        this._listeners[t] = e
                    }, e.removeEventListener = function(t) {
                        delete this._listeners[t]
                    }, e._setId = function(t) {
                        this._attributes.id = t
                    }, e._fireEvent = function(t, e) {
                        void 0 !== this._listeners[t] && this._listeners[t](e)
                    }, e._getAttr = function(t) {
                        var e = this._attributes[t];
                        if (void 0 === e) {
                            var n = this._getAttributeDefinitions().getModelName(t);
                            void 0 !== n && (e = this._model._getAttribute(n))
                        }
                        return e
                    }, e._forEachNode = function(t, e) {
                        t(this, e), e++;
                        var n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var r, u = this._children[Symbol.iterator](); !(n = (r = u.next()).done); n = !0) {
                                r.value._forEachNode(t, e)
                            }
                        } catch (a) {
                            i = !0, o = a
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                    }, e._setVisible = function(t) {
                        t !== this._visible && (this._fireEvent("visibility", {
                            visible: t
                        }), this._visible = t)
                    }, e._getDrawChildren = function() {
                        return this._children
                    }, e._setParent = function(t) {
                        this._parent = t
                    }, e._setRect = function(t) {
                        this._rect = t
                    }, e._setWeight = function(t) {
                        this._attributes.weight = t
                    }, e._setSelected = function(t) {
                        this._attributes.selected = t
                    }, e._isFixed = function() {
                        return this._fixed
                    }, e._layout = function(t, e) {
                        this._rect = t
                    }, e._findDropTargetNode = function(t, e, n) {
                        var i;
                        if (this._rect.contains(e, n))
                            if (void 0 !== this._model.getMaximizedTabset()) i = this._model.getMaximizedTabset().canDrop(t, e, n);
                            else if (void 0 === (i = this.canDrop(t, e, n)) && 0 !== this._children.length) {
                            var o = !0,
                                r = !1,
                                u = void 0;
                            try {
                                for (var a, l = this._children[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) {
                                    if (void 0 !== (i = a.value._findDropTargetNode(t, e, n))) break
                                }
                            } catch (d) {
                                r = !0, u = d
                            } finally {
                                try {
                                    o || null == l.return || l.return()
                                } finally {
                                    if (r) throw u
                                }
                            }
                        }
                        return i
                    }, e.canDrop = function(t, e, n) {}, e._canDockInto = function(t, e) {
                        if (null != e) {
                            if (e.location === o.R.CENTER && !1 === e.node.isEnableDrop()) return !1;
                            if (e.location === o.R.CENTER && "tabset" === t.getType() && void 0 !== t.getName()) return !1;
                            if (e.location !== o.R.CENTER && !1 === e.node.isEnableDivide()) return !1;
                            if (this._model._getOnAllowDrop()) return this._model._getOnAllowDrop()(t, e)
                        }
                        return !0
                    }, e._removeChild = function(t) {
                        var e = this._children.indexOf(t);
                        return -1 !== e && this._children.splice(e, 1), this._dirty = !0, e
                    }, e._addChild = function(t, e) {
                        return null != e ? this._children.splice(e, 0, t) : (this._children.push(t), e = this._children.length - 1), t._parent = this, this._dirty = !0, e
                    }, e._removeAll = function() {
                        this._children = [], this._dirty = !0
                    }, e._styleWithPosition = function(t) {
                        return null == t && (t = {}), this._rect.styleWithPosition(t)
                    }, e._getTempSize = function() {
                        return this._tempSize
                    }, e._setTempSize = function(t) {
                        this._tempSize = t
                    }, e.isEnableDivide = function() {
                        return !0
                    }, e._toAttributeString = function() {
                        return JSON.stringify(this._attributes, void 0, "\t")
                    }, t
                }()
        },
        38954: function(t, e, n) {
            n.d(e, {
                B: function() {
                    return c
                }
            });
            var i = n(4111),
                o = n(51438),
                r = n(28668),
                u = n(25892),
                a = n(25171),
                l = n(58438),
                d = n(70375),
                s = n(12612),
                c = function(t) {
                    (0, r.Z)(n, t);
                    var e = (0, a.Z)(n);

                    function n(t, r) {
                        var u, a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return (0, o.Z)(this, n), (u = e.call(this, t))._extra = {}, n._attributeDefinitions.fromJson(r, u._attributes), !0 === a && t._addNode((0, i.Z)(u)), u
                    }
                    var u = n.prototype;
                    return u.getWindow = function() {
                        return this._window
                    }, u.getTabRect = function() {
                        return this._tabRect
                    }, u._setTabRect = function(t) {
                        this._tabRect = t
                    }, u._setRenderedName = function(t) {
                        this._renderedName = t
                    }, u._getNameForOverflowMenu = function() {
                        var t = this._getAttr("altName");
                        return void 0 !== t ? t : this._renderedName
                    }, u.getName = function() {
                        return this._getAttr("name")
                    }, u.getHelpText = function() {
                        return this._getAttr("helpText")
                    }, u.getComponent = function() {
                        return this._getAttr("component")
                    }, u.getConfig = function() {
                        return this._attributes.config
                    }, u.getExtraData = function() {
                        return this._extra
                    }, u.isFloating = function() {
                        return this._getAttr("floating")
                    }, u.getIcon = function() {
                        return this._getAttr("icon")
                    }, u.isEnableClose = function() {
                        return this._getAttr("enableClose")
                    }, u.getCloseType = function() {
                        return this._getAttr("closeType")
                    }, u.isEnableFloat = function() {
                        return this._getAttr("enableFloat")
                    }, u.isEnableDrag = function() {
                        return this._getAttr("enableDrag")
                    }, u.isEnableRename = function() {
                        return this._getAttr("enableRename")
                    }, u.getClassName = function() {
                        return this._getAttr("className")
                    }, u.isEnableRenderOnDemand = function() {
                        return this._getAttr("enableRenderOnDemand")
                    }, u.updateLastMovedTimestamp = function() {
                        this.getExtraData().lastMovedTimestamp = Date.now()
                    }, u.getLastMovedTimestamp = function() {
                        var t;
                        return null === (t = this.getExtraData()) || void 0 === t ? void 0 : t.lastMovedTimestamp
                    }, u._setName = function(t) {
                        this._attributes.name = t, this._window && this._window.document && (this._window.document.title = t)
                    }, u._setFloating = function(t) {
                        this._attributes.floating = t
                    }, u._layout = function(t, e) {
                        t.equals(this._rect) || this._fireEvent("resize", {
                            rect: t
                        }), this._rect = t
                    }, u._delete = function() {
                        this._parent._remove(this), this._fireEvent("close", {})
                    }, u.toJson = function() {
                        var t = {};
                        return n._attributeDefinitions.toJson(t, this._attributes), t
                    }, u._updateAttrs = function(t) {
                        n._attributeDefinitions.update(t, this._attributes)
                    }, u._getAttributeDefinitions = function() {
                        return n._attributeDefinitions
                    }, u._setWindow = function(t) {
                        this._window = t
                    }, u._setBorderWidth = function(t) {
                        this._attributes.borderWidth = t
                    }, u._setBorderHeight = function(t) {
                        this._attributes.borderHeight = t
                    }, n._fromJson = function(t, e) {
                        var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            o = new n(e, t, i);
                        return o
                    }, n._createAttributeDefinitions = function() {
                        var t = new s.H;
                        return t.add("type", n.TYPE, !0).setType(d.a.STRING), t.add("id", void 0).setType(d.a.STRING), t.add("name", "[Unnamed Tab]").setType(d.a.STRING), t.add("altName", void 0).setType(d.a.STRING), t.add("helpText", void 0).setType(d.a.STRING), t.add("component", void 0).setType(d.a.STRING), t.add("config", void 0).setType("any"), t.add("floating", !1).setType(d.a.BOOLEAN), t.addInherited("enableClose", "tabEnableClose").setType(d.a.BOOLEAN), t.addInherited("closeType", "tabCloseType").setType("ICloseType"), t.addInherited("enableDrag", "tabEnableDrag").setType(d.a.BOOLEAN), t.addInherited("enableRename", "tabEnableRename").setType(d.a.BOOLEAN), t.addInherited("className", "tabClassName").setType(d.a.STRING), t.addInherited("icon", "tabIcon").setType(d.a.STRING), t.addInherited("enableRenderOnDemand", "tabEnableRenderOnDemand").setType(d.a.BOOLEAN), t.addInherited("enableFloat", "tabEnableFloat").setType(d.a.BOOLEAN), t.addInherited("borderWidth", "tabBorderWidth").setType(d.a.NUMBER), t.addInherited("borderHeight", "tabBorderHeight").setType(d.a.NUMBER), t
                    }, n.getAttributeDefinitions = function() {
                        return n._attributeDefinitions
                    }, n
                }((0, u.Z)(l.N));
            c.TYPE = "tab", c._attributeDefinitions = c._createAttributeDefinitions()
        },
        49037: function(t, e, n) {
            n.d(e, {
                h: function() {
                    return u
                }
            });
            var i = n(19159),
                o = n(23877),
                r = n(53335),
                u = function() {
                    var t = (0, o.WP)((function(t) {
                            return t.layoutRef
                        })),
                        e = (0, o.WP)((function(t) {
                            return t.model
                        })),
                        n = (0, o.WP)((function(t) {
                            return t.newTabOpenOption
                        })),
                        u = (0, o.WP)((function(t) {
                            return t.multipleTabMode
                        })),
                        a = (0, o.WP)((function(t) {
                            return t.solutionSideBySideMode
                        }));
                    return t && e ? {
                        getTabNodeByComponent: function(t, n) {
                            return (0, r.nz)(e, t, n)
                        },
                        selectTab: function(t, n, o) {
                            return (0, i.x2)(e, t, n, o)
                        },
                        setTabConfig: function(t, n, o) {
                            return (0, i.$M)(e, t, n, o)
                        },
                        setTabExtraData: function(t, n, o) {
                            return (0, i.Tx)(e, t, n, o)
                        },
                        setTabCustomTitle: function(t, n, o) {
                            return (0, i.U1)(e, t, n, o)
                        },
                        openResultTab: function() {
                            return (0, i.JL)(e)
                        },
                        closeResultTab: function() {
                            return (0, i.Cc)(e)
                        },
                        openSubmissionDetailTab: function(t) {
                            return (0, i.dM)(e, t, n, u)
                        },
                        openSolutionPostTab: function(t) {
                            return (0, i.ZZ)(e, t, n, u, a)
                        },
                        openDebuggerTab: function() {
                            return (0, i.AT)(e)
                        },
                        closeDebuggerTab: function() {
                            return (0, i.Pn)(e)
                        },
                        cleanModelForProblemChange: function() {
                            return (0, i.wo)(e)
                        },
                        setTabDisabled: function(t, n) {
                            return (0, i.iT)(e, t, n)
                        },
                        reselectTab: function(t, n) {
                            return (0, i.eB)(e, t, n)
                        },
                        reselectTabIfActive: function(t, n) {
                            return (0, i.Te)(e, t, n)
                        },
                        closeTab: function(t, n) {
                            return (0, i.on)(e, t, n)
                        },
                        openNoteTab: function() {
                            return (0, i.vY)(e)
                        },
                        openEditorialTab: function() {
                            return (0, i.Sf)(e)
                        },
                        openRawTextTab: function(t) {
                            return (0, i.GN)(e, t)
                        },
                        openSubmissionPreviewTab: function(t) {
                            return (0, i.AR)(e, t)
                        },
                        getTabContainerDom: function(t) {
                            return (0, i.At)(e, t)
                        },
                        openTestcaseTab: function() {
                            return (0, i.UI)(e)
                        },
                        openSubmissionDetailTabFromSubmit: function(t) {
                            return (0, i.zs)(e, t, u)
                        },
                        closeSubmissionDetailTab: function(t) {
                            return (0, i.Kr)(e, t)
                        },
                        resetSubmissions: function() {
                            return (0, i.xs)(e)
                        },
                        closeSolutionPostTab: function(t) {
                            return (0, i.Qk)(e, t, u, a)
                        },
                        resetSolutions: function() {
                            return (0, i.xw)(e)
                        },
                        switchSolutionSideBySide: function(t) {
                            return (0, i._r)(e, t)
                        },
                        highlightTab: function(t, n) {
                            return (0, i.zD)(e, t, n)
                        },
                        setTabIsLoading: function(t, n, o) {
                            return (0, i.Yh)(e, t, n, o)
                        },
                        unfoldTab: function(t, n) {
                            return (0, i.EW)(e, t, n)
                        },
                        openCodeSampleTab: function(t) {
                            return (0, i.Jt)(e, t)
                        }
                    } : null
                }
        },
        23877: function(t, e, n) {
            n.d(e, {
                WP: function() {
                    return c
                },
                gf: function() {
                    return d
                }
            });
            var i = n(26042),
                o = n(69396),
                r = n(64529),
                u = n(782),
                a = n(27375),
                l = window.localStorage;

            function d() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.u3.ToolBar;
                if (!l) return t;
                var e = localStorage.getItem(a.JJ);
                return e && [a.u3.CodeEditor, a.u3.ToolBar].includes(e) ? e : t
            }
            var s = {
                    model: null,
                    layoutRef: null,
                    realtimeResize: !l || "false" !== localStorage.getItem(a.KQ),
                    newTabOpenOption: function() {
                        if (!l || !localStorage.getItem(a.Lv)) return a.RJ.AfterActiveTab;
                        var t, e = null !== (t = localStorage.getItem(a.Lv)) && void 0 !== t ? t : "";
                        return Object.values(a.RJ).includes(e) ? e : a.RJ.AfterActiveTab
                    }(),
                    runSubmitPosition: d(),
                    multipleTabMode: !!l && "true" === localStorage.getItem(a.nH),
                    solutionSideBySideMode: !!l && "true" === localStorage.getItem(a.CY)
                },
                c = (0, r.Ue)((0, u.$e)(s, (function(t) {
                    return {
                        setModel: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    model: e
                                })
                            }))
                        },
                        setLayoutRef: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    layoutRef: e
                                })
                            }))
                        },
                        setRealtimeResize: function(e) {
                            return localStorage.setItem(a.KQ, JSON.stringify(e)), t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    realtimeResize: e
                                })
                            }))
                        },
                        setNewTabOpenOption: function(e) {
                            return localStorage.setItem(a.Lv, e), t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    newTabOpenOption: e
                                })
                            }))
                        },
                        setInitialRunSubmitPosition: function(e) {
                            return t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    runSubmitPosition: e
                                })
                            }))
                        },
                        setRunSubmitPosition: function(e) {
                            return localStorage.setItem(a.JJ, e), t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    runSubmitPosition: e
                                })
                            }))
                        },
                        setMultipleTabMode: function(e) {
                            return localStorage.setItem(a.nH, JSON.stringify(e)), t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    multipleTabMode: e
                                })
                            }))
                        },
                        setSolutionSideBySideMode: function(e) {
                            return localStorage.setItem(a.CY, JSON.stringify(e)), t((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    solutionSideBySideMode: e
                                })
                            }))
                        }
                    }
                })))
        },
        53335: function(t, e, n) {
            n.d(e, {
                At: function() {
                    return x
                },
                DX: function() {
                    return y
                },
                G4: function() {
                    return h
                },
                eZ: function() {
                    return p
                },
                m: function() {
                    return T
                },
                nz: function() {
                    return v
                },
                s$: function() {
                    return m
                },
                tI: function() {
                    return S
                },
                wd: function() {
                    return f
                },
                yF: function() {
                    return c
                }
            });
            var i = n(82670),
                o = n(26042),
                r = n(69396),
                u = n(51394),
                a = n(38954),
                l = n(16751),
                d = n(58521),
                s = n(27375),
                c = function(t, e) {
                    return -1 !== (e === s.P5.Frontend ? s.Ws : s.Zf).indexOf(t)
                },
                f = function(t, e, n) {
                    var o = [];
                    return t.visitNodes((function(t) {
                        if ((0, i.Z)(t, a.B) && t.getComponent() === e) {
                            if (n) {
                                var r = t.getConfig();
                                if ("object" === typeof r && !(0, u.Z)(r, n)) return
                            }
                            o.push(t)
                        }
                    })), o
                },
                v = function(t, e, n) {
                    var o = null;
                    return t.visitNodes((function(t) {
                        if ((0, i.Z)(t, a.B) && t.getComponent() === e) {
                            if (n) {
                                var r = t.getConfig();
                                if ("object" === typeof r && !(0, u.Z)(r, n)) return
                            }
                            o = t
                        }
                    })), o
                },
                h = function(t, e, n) {
                    var i, o = v(t, e, n);
                    return !!o && o.getId() === (null === (i = t.getActiveTab()) || void 0 === i ? void 0 : i.getId())
                },
                g = function(t) {
                    var e = t.getParent(),
                        n = e.getChildren().indexOf(t);
                    return {
                        toNodeId: e.getId(),
                        location: l.R.CENTER,
                        index: n + 1
                    }
                },
                m = function(t) {
                    var e = t.model,
                        n = t.defaultAnchorTabNode,
                        o = t.option,
                        r = void 0 === o ? {
                            newTabOpenOption: s.RJ.AfterActiveTab,
                            usePrevActive: !0
                        } : o;
                    switch (r.newTabOpenOption) {
                        case s.RJ.AfterActiveTab:
                            var u = r.usePrevActive ? e.getPrevActiveTab() : e.getActiveTab();
                            return g(null !== u && void 0 !== u ? u : n);
                        case s.RJ.AfterSimilarTab:
                            var l = function(t, e) {
                                var n = null;
                                return t.visitNodes((function(t) {
                                    var o, r;
                                    (0, i.Z)(t, a.B) && t.getComponent() === e && (!n || (null !== (o = t.getLastMovedTimestamp()) && void 0 !== o ? o : 0) >= (null !== (r = n.getLastMovedTimestamp()) && void 0 !== r ? r : 0)) && (n = t)
                                })), n
                            }(e, r.component);
                            return g(null !== l && void 0 !== l ? l : n)
                    }
                },
                p = function(t, e) {
                    var n, i;
                    if (e.type !== d.e.DELETE_TAB) return !1;
                    var o = null !== (i = null === (n = e.data) || void 0 === n ? void 0 : n.node) && void 0 !== i ? i : "",
                        r = t.getNodeById(o);
                    return !(!r || r.getType() !== a.B.TYPE) && r.getComponent() === s.r.Debugger
                },
                b = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = e.findIndex((function(t) {
                            return t.component === s.r.Testcase
                        }));
                    return -1 !== n ? n : Math.min(null !== t && void 0 !== t ? t : 0, e.length - 1)
                },
                T = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.P5.Default,
                        n = t.type,
                        i = t.children;
                    if ("row" === n) return (0, r.Z)((0, o.Z)({}, t), {
                        children: i.map((function(t) {
                            return T(t, e)
                        })),
                        id: void 0
                    });
                    var u, a = i.filter((function(t) {
                            return t.component && c(t.component, e)
                        })).map((function(t) {
                            return (0, o.Z)((0, r.Z)((0, o.Z)({}, t), {
                                id: void 0,
                                name: void 0
                            }), null !== (u = s.hX[t.component]) && void 0 !== u ? u : {})
                        })),
                        l = b(t.selected, a);
                    return (0, r.Z)((0, o.Z)({}, t), {
                        children: a,
                        selected: l,
                        id: void 0,
                        maximized: void 0
                    })
                },
                y = function(t) {
                    return (0, o.Z)({
                        type: "tab",
                        component: t
                    }, s.hX[t])
                },
                S = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.P5.Default;
                    return {
                        borders: [],
                        global: {
                            splitterSize: 8,
                            splitterExtra: 0,
                            tabEnableClose: !1,
                            tabEnableRename: !1,
                            tabSetMinWidth: 36,
                            tabSetMinHeight: 36,
                            tabDragSpeed: .2
                        },
                        layout: T(t, e)
                    }
                },
                x = function(t) {
                    return s.k[t]
                }
        },
        92320: function(t, e, n) {
            n.d(e, {
                T1: function() {
                    return R
                },
                jk: function() {
                    return D
                },
                nC: function() {
                    return _
                },
                xW: function() {
                    return A
                }
            });
            var i = n(85893),
                o = n(68779),
                r = n(11321),
                u = n(67294),
                a = n(6732),
                l = n(12922),
                d = n(69485),
                s = n(43899),
                c = n(7061),
                f = n(11516),
                v = n(134),
                h = n(62758),
                g = n(15371),
                m = n(29297),
                p = n(56609),
                b = n(94385),
                T = n(89395),
                y = n(55433),
                S = n(27375),
                x = n(49037),
                E = n(34814),
                I = n(81910),
                N = function(t) {
                    var e = t.copyValue,
                        n = t.title,
                        a = t.openRawCls,
                        d = t.openRawIconCls,
                        s = (0, r.$G)("common", {
                            keyPrefix: "truncatedContent"
                        }).t,
                        c = (0, r.$G)("problems", {
                            keyPrefix: "tabs"
                        }).t,
                        h = (0, x.h)(),
                        g = (0, u.useCallback)((function() {
                            null === h || void 0 === h || h.openRawTextTab({
                                rawText: e,
                                title: n || c("rawText")
                            })
                        }), [e, h, c, n]);
                    return (0, i.jsxs)("div", {
                        className: (0, l.yI)("flex h-[22px] cursor-pointer items-center rounded-l-[5px] px-1.5 text-sm transition-colors", f.nx.labelTextPrimary, f.nx.bgLayer02, f.rG.bgFillTertiary, a, d),
                        onClick: g,
                        children: [(0, i.jsx)(v.e, {
                            variant: "12px",
                            padding: "square",
                            icon: o.w49,
                            className: (0, l.yI)(f.nx.labelTextPrimary)
                        }), (0, i.jsx)("span", {
                            className: "text-xs",
                            children: s("openRaw")
                        })]
                    })
                },
                _ = function(t) {
                    var e = t.copyValue,
                        n = t.className,
                        a = t.title,
                        d = t.showOpenRaw,
                        m = (0, r.$G)("common").t,
                        p = (0, b.u)().data,
                        T = (0, u.useMemo)((function() {
                            return (0, i.jsx)(s.q, {
                                customCopyIcon: (0, i.jsx)(h.u, {
                                    label: m("copy"),
                                    placement: "top",
                                    className: "my-1",
                                    children: (0, i.jsx)("div", {
                                        children: (0, i.jsx)(v.e, {
                                            variant: "12px",
                                            padding: "square",
                                            icon: o.WM4,
                                            className: (0, l.yI)("h-3.5 w-3.5", f.nx.labelTextPrimary)
                                        })
                                    })
                                }),
                                customCopiedIcon: (0, i.jsx)(v.e, {
                                    variant: "12px",
                                    padding: "square",
                                    icon: o.LEp,
                                    className: (0, l.yI)("h-3.5 w-3.5", g.Cj.labelGreenStandard)
                                }),
                                copyValue: e,
                                checkClassName: (0, l.yI)("h-[14px] w-[14px]"),
                                iconClassName: (0, l.yI)(f.nx.labelLayer02),
                                className: (0, l.yI)("flex h-[22px] w-[22px] items-center justify-center", f.nx.bgLayer02, f.rG.bgFillTertiary, p && d ? "rounded-r-[4px]" : "rounded-[4px]")
                            })
                        }), [e, p, d, m]);
                    return p && d ? (0, i.jsxs)("div", {
                        className: (0, l.yI)("z-base-1 hidden items-center rounded border group-hover:flex", f.nx.borderBorderQuaternary, n),
                        children: [(0, i.jsx)(N, {
                            copyValue: e,
                            title: a
                        }), (0, i.jsx)(c.i, {
                            orientation: "vertical",
                            className: (0, l.yI)("h-[22px]", f.nx.borderBorderTertiary)
                        }), T]
                    }) : (0, i.jsx)("div", {
                        className: (0, l.yI)("z-base-1 hidden rounded border group-hover:block", f.nx.borderBorderQuaternary, f.nx.bgLayer02, n),
                        children: T
                    })
                },
                w = function(t) {
                    var e = t.isViewMore,
                        n = t.onClick,
                        u = t.className,
                        a = (0, r.$G)("common").t;
                    return (0, i.jsx)("div", {
                        className: (0, l.yI)("text-sd-muted-foreground absolute left-0 right-0 flex cursor-pointer items-end justify-center gap-1 text-xs", e ? "bottom-3" : "-bottom-6", u),
                        onClick: n,
                        children: (0, i.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, i.jsx)(v.e, {
                                variant: "12px",
                                padding: "square",
                                icon: e ? o.SG6 : o.Y$M
                            }), a(e ? "viewMore" : "viewLess")]
                        })
                    })
                },
                A = function(t) {
                    var e = t.children,
                        n = t.lines,
                        o = t.onHandleTruncate,
                        r = t.showViewAll,
                        d = void 0 !== r && r,
                        s = (0, b.u)().data,
                        c = (0, u.useState)(!0),
                        f = c[0],
                        v = c[1],
                        h = function() {
                            return v(!f)
                        },
                        g = d || !s,
                        m = (0, u.useState)(!1),
                        p = m[0],
                        T = m[1];
                    return f ? (0, i.jsx)(a.Z, {
                        lines: n || 8,
                        onTruncate: function(t) {
                            T(t), o && o(t)
                        },
                        ellipsis: (0, i.jsx)(i.Fragment, {
                            children: g ? (0, i.jsx)(w, {
                                onClick: h,
                                isViewMore: f
                            }) : null
                        }),
                        children: (0, i.jsx)("div", {
                            className: (0, l.yI)({
                                "mb-6": p
                            }),
                            children: (0, i.jsx)("div", {
                                className: "align-middle",
                                children: e
                            })
                        })
                    }) : (0, i.jsxs)("div", {
                        className: "relative gap-2",
                        children: [(0, i.jsx)("div", {
                            className: (0, l.yI)({
                                "mb-6": p
                            }),
                            children: (0, i.jsx)("div", {
                                className: "align-middle",
                                children: e
                            })
                        }), g ? (0, i.jsx)(w, {
                            onClick: h,
                            isViewMore: f
                        }) : null]
                    })
                },
                D = function(t) {
                    var e = t.children,
                        n = t.header,
                        o = t.lines,
                        r = t.copyBtnClassName,
                        a = t.truncatedResultClassName,
                        d = t.title,
                        s = t.copyValue,
                        c = t.showOpenRaw,
                        f = void 0 !== c && c,
                        v = t.showViewAll,
                        h = void 0 !== v && v,
                        g = (0, u.useState)(!1),
                        m = g[0],
                        p = g[1],
                        b = (0, u.useCallback)((function(t) {
                            t && p(!0)
                        }), []);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(i.Fragment, {
                            children: [n, (0, i.jsx)(_, {
                                copyValue: s,
                                className: r,
                                title: d,
                                showOpenRaw: f && m
                            })]
                        }), (0, i.jsx)("div", {
                            className: (0, l.yI)(a),
                            style: {
                                lineBreak: "anywhere"
                            },
                            children: (0, i.jsx)(A, {
                                lines: o,
                                onHandleTruncate: b,
                                showViewAll: h,
                                children: e
                            })
                        })]
                    })
                },
                R = function(t) {
                    var e = t.code,
                        n = t.className,
                        a = t.lang,
                        s = (0, r.$G)("common").t,
                        c = (0, y.sZ)((function(t) {
                            return t.setLang
                        })),
                        g = (0, E.d)(),
                        b = (0, x.h)(),
                        N = (0, T.T)().data,
                        _ = (0, u.useMemo)((function() {
                            return (null === N || void 0 === N ? void 0 : N.codeSnippets) ? N.codeSnippets.map((function(t) {
                                return t && t.lang && t.langSlug ? {
                                    lang: t.langSlug,
                                    displayLang: t.lang,
                                    code: t.code
                                } : null
                            })).filter(Boolean) : []
                        }), [null === N || void 0 === N ? void 0 : N.codeSnippets]),
                        w = (0, p.VY)(),
                        A = (0, p.$e)(),
                        D = (0, I.B)().trackLangEvent,
                        R = (0, d.z)((function() {
                            var t;
                            if (w) A();
                            else {
                                var n = (null === (t = _.find((function(t) {
                                    return (null === t || void 0 === t ? void 0 : t.lang) === a
                                }))) || void 0 === t ? void 0 : t.displayLang) || "Unknown";
                                c(a, n), D({
                                    lang: a
                                }), setTimeout((function() {
                                    g({
                                        value: e,
                                        source: "reset"
                                    })
                                }), 600), null === b || void 0 === b || b.selectTab(S.r.Code), null === b || void 0 === b || b.unfoldTab(S.r.Code), null === b || void 0 === b || b.highlightTab(S.r.Code), m.d.qdDetailCodeToEditorClick()
                            }
                        })),
                        C = (0, u.useMemo)((function() {
                            var t;
                            return !(null === N || void 0 === N || null === (t = N.codeSnippets) || void 0 === t ? void 0 : t.some((function(t) {
                                return (null === t || void 0 === t ? void 0 : t.langSlug) === a
                            })))
                        }), [null === N || void 0 === N ? void 0 : N.codeSnippets, a]);
                    return (0, i.jsx)(h.u, {
                        label: s("copyToEditor"),
                        placement: "top",
                        className: "my-1",
                        children: (0, i.jsx)("div", {
                            className: (0, l.yI)("z-base-1 hidden cursor-pointer rounded border group-hover:block", f.nx.borderBorderQuaternary, f.nx.bgLayer02, n, {
                                "pointer-events-none opacity-50": C
                            }),
                            onClick: R,
                            children: (0, i.jsx)("div", {
                                className: (0, l.yI)("flex h-[22px] w-[22px] items-center justify-center rounded-[4px]", f.nx.bgLayer02, f.rG.bgFillTertiary),
                                children: (0, i.jsx)(v.e, {
                                    variant: "12px",
                                    padding: "square",
                                    icon: o.SbL,
                                    className: (0, l.yI)("h-3.5 w-3.5", f.nx.labelTextPrimary)
                                })
                            })
                        })
                    })
                }
        },
        53889: function(t, e, n) {
            n.d(e, {
                b: function() {
                    return o
                }
            });
            var i = n(93769),
                o = function(t) {
                    var e = (0, i.$w)();
                    return e in t ? t[e] : t[i.UU.Default]
                }
        },
        26756: function(t, e, n) {
            var i, o, r, u, a;
            n.d(e, {
                    Fd: function() {
                        return i
                    },
                    S5: function() {
                        return u
                    },
                    lr: function() {
                        return o
                    },
                    mZ: function() {
                        return r
                    },
                    sQ: function() {
                        return a
                    }
                }),
                function(t) {
                    t.Easy = "EASY", t.Medium = "MEDIUM", t.Hard = "HARD"
                }(i || (i = {})),
                function(t) {
                    t.NotStarted = "NOT_STARTED", t.Ac = "AC", t.Tried = "TRIED"
                }(o || (o = {})),
                function(t) {
                    t.Ascending = "ASCENDING", t.Descending = "DESCENDING"
                }(r || (r = {})),
                function(t) {
                    t.FrontendId = "FRONTEND_ID", t.SolutionNum = "SOLUTION_NUM", t.AcRate = "AC_RATE", t.Frequency = "FREQUENCY", t.Difficulty = "DIFFICULTY"
                }(u || (u = {})),
                function(t) {
                    t.FRONTEND_ID = "title", t.SOLUTION_NUM = "solution", t.AC_RATE = "acRate", t.FREQUENCY = "frequency", t.DIFFICULTY = "difficulty"
                }(a || (a = {}))
        },
        89216: function(t, e, n) {
            n.d(e, {
                Of: function() {
                    return d
                },
                Ou: function() {
                    return u
                },
                d1: function() {
                    return s
                },
                yT: function() {
                    return l
                }
            });
            var i = n(85893),
                o = n(29732),
                r = n(67294),
                u = function(t) {
                    return t ? "\n\n" + (0, o.Z)([(null === t || void 0 === t ? void 0 : t.author) && "\u4f5c\u8005\uff1a".concat(t.author), (null === t || void 0 === t ? void 0 : t.link) && "\u94fe\u63a5\uff1a".concat(t.link), "\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09", "\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"]).join("\n") : ""
                },
                a = (0, r.createContext)(null),
                l = function(t) {
                    var e = t.children;
                    return (0, i.jsx)(a.Provider, {
                        value: null,
                        children: e
                    })
                },
                d = function() {
                    return (0, r.useContext)(a)
                },
                s = function() {
                    return function() {}
                }
        },
        134: function(t, e, n) {
            n.d(e, {
                e: function() {
                    return h
                }
            });
            var i = n(14924),
                o = n(26042),
                r = n(99534),
                u = n(85893),
                a = n(99603),
                l = n(12922),
                d = {
                    "12px": "text-[12px]",
                    "14px": "text-[14px]",
                    "16px": "text-[16px]",
                    "20px": "text-[20px]",
                    "24px": "text-[24px]",
                    "32px": "text-[32px]"
                },
                s = {
                    "12px": "before:h-3",
                    "14px": "before:h-3.5",
                    "16px": "before:h-4",
                    "20px": "before:h-5",
                    "24px": "before:h-6",
                    "32px": "before:h-8"
                },
                c = {
                    "12px": "before:w-3",
                    "14px": "before:w-3.5",
                    "16px": "before:w-4",
                    "20px": "before:w-5",
                    "24px": "before:w-6",
                    "32px": "before:w-8"
                },
                f = {
                    "12px": "p-[1px]",
                    "14px": "p-[1px]",
                    "16px": "p-0.5",
                    "20px": "p-0.5",
                    "24px": "p-[3px]",
                    "32px": "p-1"
                },
                v = {
                    "12px": "p-0.5",
                    "14px": "p-[3px]",
                    "16px": "p-1",
                    "20px": "p-[5px]",
                    "24px": "p-1.5",
                    "32px": "p-2"
                },
                h = function(t) {
                    var e, n = t.variant,
                        h = void 0 === n ? "14px" : n,
                        g = t.padding,
                        m = void 0 === g ? "square" : g,
                        p = t.className,
                        b = (0, r.Z)(t, ["variant", "padding", "className"]);
                    return (0, u.jsx)("div", {
                        className: (0, l.yI)("relative", d[h], "leading-[normal]", (e = {}, (0, i.Z)(e, f[h], "square" === m), (0, i.Z)(e, v[h], "roomy" === m), e), "before:block", s[h], c[h], p),
                        children: (0, u.jsx)(a.G, (0, o.Z)({
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        }, b))
                    })
                }
        },
        62758: function(t, e, n) {
            n.d(e, {
                u: function() {
                    return m
                }
            });
            var i = n(26042),
                o = n(69396),
                r = n(99534),
                u = n(85893),
                a = n(67294),
                l = n(66908),
                d = n(12922),
                s = l.zt,
                c = l.fC,
                f = l.h_,
                v = l.xz,
                h = a.forwardRef((function(t, e) {
                    var n = t.className,
                        a = t.sideOffset,
                        s = void 0 === a ? 6 : a,
                        c = t.collisionPadding,
                        f = void 0 === c ? 8 : c,
                        v = t.hasBorder,
                        h = t.children,
                        g = (0, r.Z)(t, ["className", "sideOffset", "collisionPadding", "hasBorder", "children"]);
                    return (0, u.jsx)(l.VY, (0, o.Z)((0, i.Z)({
                        ref: e,
                        sideOffset: s,
                        collisionPadding: f,
                        className: (0, d.yI)("bg-sd-popover text-sd-popover-foreground rounded-sd-md z-modal text-xs shadow", "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", "data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1", "max-w-[300px]", {
                            "border-sd-border border": v
                        }, n)
                    }, g), {
                        children: (0, u.jsx)("div", {
                            className: "rounded-sd-md relative px-3 py-1.5",
                            children: h
                        })
                    }))
                }));
            h.displayName = l.VY.displayName;
            var g = a.forwardRef((function(t, e) {
                var n = t.className,
                    a = t.hasBorder,
                    s = (0, r.Z)(t, ["className", "hasBorder"]);
                return (0, u.jsx)(l.Eh, (0, o.Z)((0, i.Z)({
                    ref: e,
                    asChild: !0
                }, s), {
                    children: (0, u.jsx)("div", {
                        className: (0, d.yI)("absolute h-2 w-4 -translate-x-1/2 overflow-hidden", n),
                        children: (0, u.jsx)("div", {
                            className: (0, d.yI)("bg-sd-popover absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-br-[1px] shadow", {
                                "border-sd-border border": a
                            })
                        })
                    })
                }))
            }));
            g.displayName = l.Eh.displayName;
            var m = function(t) {
                var e, n = t.defaultOpen,
                    a = t.open,
                    l = t.onOpenChange,
                    d = t.delayDuration,
                    m = void 0 === d ? 100 : d,
                    p = t.disableHoverableContent,
                    b = void 0 === p || p,
                    T = t.children,
                    y = t.label,
                    S = t.hasBorder,
                    x = void 0 === S || S,
                    E = t.hasArrow,
                    I = t.arrowClassName,
                    N = t.placement,
                    _ = void 0 === N ? "bottom" : N,
                    w = t.isDisabled,
                    A = (0, r.Z)(t, ["defaultOpen", "open", "onOpenChange", "delayDuration", "disableHoverableContent", "children", "label", "hasBorder", "hasArrow", "arrowClassName", "placement", "isDisabled"]),
                    D = _.split("-")[0],
                    R = null !== (e = _.split("-")[1]) && void 0 !== e ? e : "center";
                return w || !y ? (0, u.jsx)(u.Fragment, {
                    children: T
                }) : (0, u.jsx)(s, {
                    children: (0, u.jsxs)(c, {
                        defaultOpen: n,
                        open: a,
                        onOpenChange: l,
                        delayDuration: m,
                        disableHoverableContent: b,
                        children: [(0, u.jsx)(v, {
                            asChild: !0,
                            children: T
                        }), (0, u.jsx)(f, {
                            children: (0, u.jsxs)(h, (0, o.Z)((0, i.Z)({
                                side: D,
                                align: R,
                                hasBorder: x
                            }, A), {
                                children: [y, E && (0, u.jsx)(g, {
                                    className: I,
                                    hasBorder: x
                                })]
                            }))
                        })]
                    })
                })
            }
        },
        43899: function(t, e, n) {
            n.d(e, {
                q: function() {
                    return p
                }
            });
            var i = n(10253),
                o = n(85893),
                r = n(11321),
                u = n(67294),
                a = n(84539),
                l = n(62758),
                d = n(24974),
                s = n(12922),
                c = n(4563),
                f = n(7030),
                v = n(66360),
                h = n(89216),
                g = n(15371),
                m = n(19579),
                p = function(t) {
                    var e = t.copyValue,
                        n = t.className,
                        p = t.iconClassName,
                        b = t.showOnGroupHover,
                        T = void 0 === b || b,
                        y = t.checkClassName,
                        S = t.customCopyIcon,
                        x = t.customCopiedIcon,
                        E = (0, r.$G)("common").t,
                        I = (0, h.Of)(),
                        N = (0, i.Z)((0, d.c)(e, {
                            successDuration: 1e3,
                            copyright: I
                        }), 2),
                        _ = N[0],
                        w = N[1];
                    (0, u.useEffect)((function() {
                        (0, c.tq)() && _ && m.y.success(E("copied"))
                    }), [_, E]);
                    var A = (0, u.useCallback)((function() {
                        w()
                    }), [w]);
                    return (0, o.jsx)(l.u, {
                        label: E("copied"),
                        open: !(0, c.tq)() && _,
                        placement: "top",
                        children: (0, o.jsxs)("div", {
                            className: (0, s.yI)("relative h-4 w-4 cursor-pointer", n),
                            onClick: A,
                            children: [(0, o.jsx)(a.u, {
                                show: !_,
                                as: "div",
                                enter: "transition ease-out duration-0 delay-200",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                children: null !== S && void 0 !== S ? S : (0, o.jsx)(f.v, {
                                    className: (0, s.yI)("h-4 w-4", "text-gray-6 hover:text-gray-7 dark:text-dark-gray-6 dark:hover:text-dark-gray-7", {
                                        "hidden group-hover:block": T
                                    }, p)
                                })
                            }), (0, o.jsx)(a.u, {
                                show: _,
                                as: "div",
                                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-100",
                                enter: "ease-out",
                                enterFrom: "scale-0 opacity-0",
                                enterTo: "scale-100 opacity-100",
                                leave: "ease-in",
                                leaveFrom: "scale-100 opacity-100",
                                leaveTo: "scale-0 opacity-0",
                                children: null !== x && void 0 !== x ? x : (0, o.jsx)(v.N, {
                                    className: (0, s.yI)("h-4 w-4", g.Cj.labelGreenStandard, y)
                                })
                            })]
                        })
                    })
                }
        },
        7061: function(t, e, n) {
            n.d(e, {
                i: function() {
                    return a
                }
            });
            var i = n(26042),
                o = n(99534),
                r = n(85893),
                u = (n(67294), n(12922)),
                a = function(t) {
                    var e = t.orientation,
                        n = void 0 === e ? "horizontal" : e,
                        a = t.className,
                        l = (0, o.Z)(t, ["orientation", "className"]);
                    return "vertical" !== n ? (0, r.jsx)("hr", (0, i.Z)({
                        className: (0, u.yI)("border-divider-2 dark:border-dark-divider-2", a)
                    }, l)) : (0, r.jsx)("div", (0, i.Z)({
                        className: (0, u.yI)("bg-divider-2 dark:bg-dark-divider-2 h-full w-px", a)
                    }, l))
                }
        },
        24974: function(t, e, n) {
            n.d(e, {
                c: function() {
                    return a
                }
            });
            var i = n(67294),
                o = n(20640),
                r = n.n(o),
                u = n(89216);

            function a(t, e) {
                var n = (0, i.useState)(!1),
                    o = n[0],
                    a = n[1],
                    l = e && e.successDuration;
                return (0, i.useEffect)((function() {
                    if (o && l) {
                        var t = setTimeout((function() {
                            a(!1)
                        }), l);
                        return function() {
                            clearTimeout(t)
                        }
                    }
                }), [o, l]), [o, function() {
                    var n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                        o = i || t;
                    o.length >= 80 && (o += (0, u.Ou)(null !== (n = null === e || void 0 === e ? void 0 : e.copyright) && void 0 !== n ? n : null));
                    var l = r()(o);
                    a(l)
                }]
            }
        },
        69485: function(t, e, n) {
            n.d(e, {
                z: function() {
                    return u
                }
            });
            var i = n(29815),
                o = n(67294),
                r = n(44876);

            function u(t) {
                var e = (0, o.useRef)(t);
                return (0, r.L)((function() {
                    e.current = t
                })), (0, o.useCallback)((function() {
                    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    var r, u;
                    return null === (u = e.current) || void 0 === u ? void 0 : (r = u).call.apply(r, [e].concat((0, i.Z)(n)))
                }), [])
            }
        },
        44341: function(t, e, n) {
            n.d(e, {
                D: function() {
                    return i
                },
                d: function() {
                    return o
                }
            });
            var i = function(t) {
                    return t.username
                },
                o = function(t, e) {
                    return {
                        topicId: e
                    }
                }
        }
    }
]);