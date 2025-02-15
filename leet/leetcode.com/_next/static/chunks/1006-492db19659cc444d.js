(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1006], {
        11479: function(e, n, t) {
            var a = t(87537),
                r = t(23645)(a);
            r.push([e.id, ".fI1u6 a{--tw-text-opacity:1;color:rgb(0 122 255/var(--tw-text-opacity))}:is(.Y2Upg .fI1u6 a){--tw-text-opacity:1;color:rgb(0 122 255/var(--tw-text-opacity))}", "", {
                version: 3,
                sources: ["webpack://./modules/problems/editor/toolbar/toolbar.iso.css"],
                names: [],
                mappings: "AACE,SAAA,mBAAkC,CAAlC,2CAAkC,CAAlC,qBAAA,mBAAkC,CAAlC,2CAAkC",
                sourcesContent: [".langInfo a { \n  @apply text-blue-s dark:text-blue-s\n}"],
                sourceRoot: ""
            }]), r.locals = {
                langInfo: "fI1u6",
                dark: "Y2Upg"
            }, e.exports = r
        },
        63030: function(e, n, t) {
            "use strict";
            t.d(n, {
                Mu: function() {
                    return s
                },
                _s: function() {
                    return i
                },
                po: function() {
                    return o
                }
            });
            var a = t(63808),
                r = t(88525),
                i = function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return (0, r.GZr)(a.f6, {
                        lang: e.lang,
                        questionId: e.questionId
                    }, {
                        select: function(e) {
                            return e.syncedCode
                        },
                        enabled: n && Boolean(e.questionId) && "number" === typeof e.lang
                    })
                },
                o = function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return (0, r.GZr)(a.f6, {
                        lang: e.lang,
                        questionId: e.questionId
                    }, {
                        select: function(e) {
                            var n;
                            return null === (n = e.syncedCode) || void 0 === n ? void 0 : n.code
                        },
                        enabled: n && Boolean(e.questionId) && "number" === typeof e.lang && e.lang > 0,
                        refetchInterval: 3e3
                    })
                },
                s = function() {
                    return (0, r.jA$)(a.f6)
                }
        },
        77626: function(e, n, t) {
            "use strict";
            t.d(n, {
                y: function() {
                    return p
                }
            });
            var a = t(67294),
                r = t(58971),
                i = t.n(r),
                o = t(89395),
                s = t(55433),
                c = t(69999),
                u = t(17060),
                l = t(13397),
                T = t(52872),
                h = t(93769),
                d = t(30579),
                p = function() {
                    var e = (0, h.z2)((function(e) {
                            return e.problemType
                        })) === T.tn.Frontend,
                        n = (0, s.sZ)((function(e) {
                            return e.lang
                        })),
                        t = (0, s.sZ)((function(e) {
                            return e.displayLang
                        })),
                        r = (0, o.T)().data,
                        p = (0, a.useMemo)((function() {
                            var e = null === r || void 0 === r ? void 0 : r.envInfo;
                            if (!e) return {};
                            try {
                                return JSON.parse(e)
                            } catch (n) {
                                return {}
                            }
                        }), [null === r || void 0 === r ? void 0 : r.envInfo]),
                        f = (0, a.useMemo)((function() {
                            return (null === r || void 0 === r ? void 0 : r.codeSnippets) ? r.codeSnippets.map((function(e) {
                                return e && e.lang && e.langSlug ? {
                                    lang: e.langSlug,
                                    displayLang: e.lang,
                                    code: e.code
                                } : null
                            })).filter(Boolean) : []
                        }), [null === r || void 0 === r ? void 0 : r.codeSnippets]),
                        m = (0, a.useMemo)((function() {
                            return e && (null === f || void 0 === f ? void 0 : f.length) ? (0, l.O_)(f) : []
                        }), [f, e]),
                        y = (0, d.QE)((function(e) {
                            return e.roomId
                        })),
                        g = (0, d.QE)((function(e) {
                            return e.setSwitchingLangInfo
                        })),
                        b = function() {
                            var e = (0, c.b)(),
                                n = e.langKey,
                                t = e.globalLangKey;
                            return (0, a.useCallback)((function(e) {
                                n && (i().set(n, e), i().set("".concat(n, "-updated-time"), Date.now())), t && (i().set(t, e), i().set("".concat(t, "-updated-time"), Date.now()))
                            }), [n, t])
                        }(),
                        _ = (0, s.sZ)((function(e) {
                            return e.setLang
                        })),
                        v = (0, a.useCallback)((function(t, a) {
                            var r;
                            if (y) g({
                                lang: t,
                                displayLang: a
                            });
                            else {
                                if (!e) return b(t), _(t, a);
                                var i = (0, l.Rn)(n),
                                    o = (0, l.BG)(i, t);
                                if (!o) throw new Error("Can't find lang for framework: ".concat(i, " or language: ").concat(t));
                                var s = (null === (r = f.find((function(e) {
                                    return (null === e || void 0 === e ? void 0 : e.lang) === o
                                }))) || void 0 === r ? void 0 : r.displayLang) || "Unknown";
                                b(o), _(o, s)
                            }
                        }), [y, e, n, f, b, _, g]),
                        R = (0, a.useCallback)((function(t) {
                            var a;
                            if (e && (0, l.Rn)(n) !== t) {
                                var r = (0, l.BG)(t),
                                    i = (null === (a = f.find((function(e) {
                                        return (null === e || void 0 === e ? void 0 : e.lang) === r
                                    }))) || void 0 === a ? void 0 : a.displayLang) || "Unknown";
                                if (!r) throw new Error("Can't find lang for framework: ".concat(t));
                                b(r), _(r, i)
                            }
                        }), [e, n, f, b, _]);
                    if (!e) return {
                        lang: n,
                        codeLang: n,
                        displayLang: t,
                        setCodeLang: v,
                        frameworks: m,
                        framework: null,
                        displayFramework: null,
                        setFramework: function() {},
                        codeSnippets: f,
                        envInfo: p
                    };
                    var C = (0, l.Rn)(n),
                        S = (0, l.LY)(n),
                        x = (0, l.cc)(C, f);
                    return {
                        lang: n,
                        codeLang: S,
                        displayLang: S ? u.Z[S] : "",
                        setCodeLang: v,
                        frameworks: m,
                        framework: C,
                        displayFramework: C ? u.Z[C] : "",
                        setFramework: R,
                        codeSnippets: x,
                        envInfo: p
                    }
                }
        },
        67547: function(e, n, t) {
            "use strict";
            t.d(n, {
                X: function() {
                    return u
                },
                s: function() {
                    return l
                }
            });
            var a = t(85893),
                r = t(67294),
                i = t(57002),
                o = t(56098),
                s = t(72622),
                c = t(78938),
                u = function() {
                    var e = (0, o.D)((function(e) {
                            return e.isVerifyEmailModalVisible
                        })),
                        n = (0, o.D)((function(e) {
                            return e.verifyEmailModalSource
                        })),
                        t = (0, o.D)().setIsVerifyEmailModalVisible,
                        i = (0, r.useCallback)((function() {
                            t(!1)
                        }), [t]),
                        u = (0, r.useCallback)((function() {
                            t(!1), n && c.e.verifyVerifyEmailBtnClick({
                                verify_source: n
                            })
                        }), [n, t]);
                    return (0, r.useEffect)((function() {
                        e && n && c.e.verifyVerifyEmailModuleExposure({
                            verify_source: n
                        })
                    }), [e, n]), (0, a.jsx)(s.w, {
                        isVisible: e,
                        onClose: i,
                        onConfirm: u
                    })
                },
                l = function() {
                    var e = (0, i.r)(),
                        n = e.isSignedIn,
                        t = e.isVerified,
                        a = (0, o.D)().setIsVerifyEmailModalVisible;
                    return {
                        checkSignedInAndVerified: (0, r.useCallback)((function(e) {
                            return !(!n || !t) || (a(!0, e), !1)
                        }), [n, t, a])
                    }
                }
        },
        89223: function(e, n, t) {
            "use strict";
            t.d(n, {
                x: function() {
                    return s
                }
            });
            var a = t(26042),
                r = t(64529),
                i = t(782),
                o = {
                    modalVisible: !1,
                    replayer: null,
                    events: [],
                    appliedEventsIndex: -1,
                    config: {},
                    currentEvent: null,
                    currentLang: null,
                    currentTime: 0,
                    isPlaying: !1,
                    isFinish: !1
                },
                s = (0, r.Ue)((0, i.$e)(o, (function(e) {
                    return {
                        hideModal: function() {
                            return e((0, a.Z)({}, o))
                        },
                        showModal: function() {
                            return e({
                                modalVisible: !0
                            })
                        },
                        setReplayer: function(n) {
                            return e({
                                replayer: n
                            })
                        },
                        setEvents: function(n) {
                            return e({
                                events: n
                            })
                        },
                        setAppliedEventsIndex: function(n) {
                            return e({
                                appliedEventsIndex: n
                            })
                        },
                        setConfig: function(n) {
                            return e({
                                config: (0, a.Z)({}, o.config, n)
                            })
                        },
                        setCurrentEvent: function(n) {
                            return e({
                                currentEvent: n
                            })
                        },
                        setLang: function(n) {
                            return e({
                                currentLang: n
                            })
                        },
                        setCurrentTime: function(n) {
                            return e({
                                currentTime: n
                            })
                        },
                        setIsPlaying: function(n) {
                            return e({
                                isPlaying: n
                            })
                        },
                        setIsFinish: function(n) {
                            return e({
                                isFinish: n
                            })
                        }
                    }
                })))
        },
        79768: function(e, n, t) {
            "use strict";
            t.d(n, {
                s: function() {
                    return H
                }
            });
            var a = t(14924),
                r = t(10253),
                i = t(14428),
                o = t(67294),
                s = t(69485),
                c = t(83269),
                u = t(27930),
                l = t(79975),
                T = t(39606),
                h = t(47568),
                d = t(51438),
                p = t(26042),
                f = t(29815),
                m = t(70655),
                y = t(64487),
                g = t(27583),
                b = t(69355),
                _ = t(8276),
                v = t(19579),
                R = t(13397),
                C = t(73534),
                S = t(9354),
                x = t(33405),
                j = t(9201),
                L = function() {
                    return v.y.error("Exceeded test case limit, reduce to 1-2 and try again.", {
                        duration: 3
                    })
                };

            function k(e, n) {
                for (var t, a, r, i = null !== (t = e.code_answer) && void 0 !== t ? t : [], o = null !== (a = e.std_output_list) && void 0 !== a ? a : [], s = n[0].split("\n").filter((function(e, n) {
                        return n % 2 === 0
                    })).map((function(e) {
                        return (0, C.a)(e)
                    })), c = n[0].split("\n").filter((function(e, n) {
                        return n % 2 === 1
                    })).map((function(e) {
                        return (0, C.a)(e)
                    })), u = (null !== (r = e.test_info) && void 0 !== r ? r : "").split("\n"), l = [], T = 0; T < s.length; T++) {
                    var h, d, p, f, m = s[T],
                        y = c[T],
                        g = i[T],
                        b = "passed" === g,
                        _ = (0, C.a)(g),
                        v = (0, C.a)(u[T]);
                    l.push({
                        input: m,
                        output: _,
                        accepted: b,
                        stdout: o[T] || "",
                        failedTestInfo: b ? void 0 : {
                            lineNumber: null !== (h = null === v || void 0 === v ? void 0 : v.ln) && void 0 !== h ? h : void 0,
                            message: null !== (d = null === v || void 0 === v ? void 0 : v.shortError) && void 0 !== d ? d : void 0,
                            testCode: (0, x.gW)(m, y),
                            codePreview: null !== (p = null === v || void 0 === v ? void 0 : v.codePreview) && void 0 !== p ? p : void 0,
                            showDiff: null !== (f = null === v || void 0 === v ? void 0 : v.showDiff) && void 0 !== f && f,
                            actual: null === v || void 0 === v ? void 0 : v.actual,
                            expected: null === v || void 0 === v ? void 0 : v.expected
                        }
                    })
                }
                return l
            }
            var D = function(e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) t[a - 1] = arguments[a];
                    if ("function" === typeof e) return e.apply(void 0, (0, f.Z)(t))
                },
                I = function e() {
                    (0, d.Z)(this, e)
                };
            I.runcode = function() {
                var e = (0, h.Z)((function(e, n, t, a, i) {
                    var o, s, u, l, d, f, v, C, x, I, O, F, w, V, W;
                    return (0, m.__generator)(this, (function(A) {
                        switch (A.label) {
                            case 0:
                                return o = e.questionSlug, s = e.lang, u = e.typedCode, l = e.testcaseList, d = e.questionId, f = {
                                    runcodeResult: null,
                                    runcodeStatus: g.$.PENDING
                                }, D(t, f), v = (0, p.Z)({
                                    lang: s,
                                    question_id: d,
                                    typed_code: u,
                                    data_input: 0 === l.filter((function(e) {
                                        return e.trim()
                                    })).length ? "" : l.join("\n")
                                }, (0, j.G)()), [4, _.x1.rawRequest(null !== i && void 0 !== i ? i : _.Hv.runcodeTaskEnqueue(o), {
                                    method: "POST",
                                    body: JSON.stringify(v)
                                }).then(function() {
                                    var e = (0, h.Z)((function(e) {
                                        var n;
                                        return (0, m.__generator)(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return e.status === c.Q4.RATE_LIMIT_EXCEEDED ? [2, new Promise((function(e) {
                                                        e({
                                                            taskError: T.SQ.SLOWDOWN_ERROR
                                                        })
                                                    }))] : [4, e.json()];
                                                case 1:
                                                    return n = t.sent(), [2, new Promise((function(e) {
                                                        e({
                                                            interpretId: n.interpret_id,
                                                            interpretExpectedId: n.interpret_expected_id
                                                        })
                                                    }))]
                                            }
                                        }))
                                    }));
                                    return function(n) {
                                        return e.apply(this, arguments)
                                    }
                                }()).catch((function(e) {
                                    return (0, y.$e)((function(n) {
                                        n.setExtras({
                                            errorData: C,
                                            bodyData: v
                                        }), n.setTag("where", "interpretResult.runcode"), (0, y.Tb)(e)
                                    })), {
                                        taskError: T.SQ.NETWORK_ERROR
                                    }
                                }))];
                            case 1:
                                return C = A.sent(), (x = null === C || void 0 === C ? void 0 : C.taskError) === T.SQ.NETWORK_ERROR ? ((0, y.$e)((function(e) {
                                    e.setExtras({
                                        errorData: C
                                    }), e.setTag("where", "interpretResult.runcode"), (0, y.Tb)(new Error("Network error during interpret task enqueue."))
                                })), I = {
                                    runcodeResult: null,
                                    runcodeStatus: g.$.NETWORK_ERROR
                                }, D(t, I), D(a, I), [2]) : x === T.SQ.SLOWDOWN_ERROR ? (O = {
                                    runcodeResult: null,
                                    runcodeStatus: g.$.SLOWDOWN
                                }, D(t, O), D(a, O), [2]) : (F = (null === C || void 0 === C ? void 0 : C.interpretId) || "", w = [F], (V = (null === C || void 0 === C ? void 0 : C.interpretExpectedId) || "") && e.isIcpc && w.push(V), W = new S.W({
                                    limit: 100,
                                    delay: function(e) {
                                        return Math.min(n * Math.pow(2, e), b.k_.Limit)
                                    },
                                    action: (0, h.Z)((function() {
                                        var n, t, a, i, o, c, u;
                                        return (0, m.__generator)(this, (function(l) {
                                            switch (l.label) {
                                                case 0:
                                                    return l.trys.push([0, 2, , 3]), [4, Promise.all(w.map((function(e) {
                                                        return _.x1.request(_.Hv.runcodeResult(e))
                                                    })))];
                                                case 1:
                                                    return n = r.Z.apply(void 0, [l.sent(), 2]), t = n[0], a = n[1], "PENDING" === (i = t.state) ? [2, {
                                                        runcodeResult: null,
                                                        runcodeStatus: g.$.PENDING
                                                    }] : i && "FAILURE" !== i && "REVOKED" !== i ? "SUCCESS" !== i ? [2, {
                                                        runcodeResult: null,
                                                        runcodeStatus: g.$.JUDGING
                                                    }] : (c = function(e, n, t, a) {
                                                        var r = e.status_code,
                                                            i = e.compare_result || "",
                                                            o = function(e, n) {
                                                                var t = e.length ? e.length - 1 : 0;
                                                                if (!(t >= n.length)) {
                                                                    var a = n[0] ? n[0].split("\n").length : 0;
                                                                    return {
                                                                        failedTestcase: n[t],
                                                                        testcaseIndex: t,
                                                                        paramIndex: e.length * a + 1
                                                                    }
                                                                }
                                                            }(e.code_answer, n),
                                                            s = o && e.std_output_list && e.std_output_list.length > 0 ? e.std_output_list.slice(-1)[0] : "",
                                                            c = e.status_runtime || "",
                                                            u = e.status_memory || "",
                                                            l = e.expected_status_code;
                                                        if (l === T.F6.TLE ? (r = l, L()) : r !== T.F6.AC || !i.includes("0") && i || !t.expectedResultAvailable || t.result || (r = T.F6.WA), r === T.F6.CE) return {
                                                            stdout: s,
                                                            exceptionalTestcase: o,
                                                            status: T.F6.CE,
                                                            compileError: e.compile_error,
                                                            fullCompileError: e.full_compile_error
                                                        };
                                                        if (r === T.F6.IE) return {
                                                            stdout: s,
                                                            exceptionalTestcase: o,
                                                            expectedStatusCode: l,
                                                            status: T.F6.IE
                                                        };
                                                        if (r === T.F6.MLE) return {
                                                            stdout: s,
                                                            exceptionalTestcase: o,
                                                            status: T.F6.MLE
                                                        };
                                                        if (r === T.F6.OLE) return {
                                                            stdout: s,
                                                            exceptionalTestcase: o,
                                                            status: T.F6.OLE
                                                        };
                                                        if (r === T.F6.TLE) return {
                                                            stdout: s,
                                                            exceptionalTestcase: o,
                                                            status: T.F6.TLE,
                                                            testcaseResultType: (0, R.GM)(a) ? k(e, n) : void 0
                                                        };
                                                        if (r === T.F6.TO) return {
                                                            stdout: s,
                                                            status: T.F6.TO
                                                        };
                                                        if (r === T.F6.RE) return e.invalid_testcase ? {
                                                            stdout: s,
                                                            status: T.F6.INVALID_TESTCASE,
                                                            errorMessage: e.full_runtime_error,
                                                            testcaseIndex: void 0 !== e.case_idx ? e.case_idx : void 0,
                                                            paramIndex: void 0 !== e.param_idx ? e.param_idx : void 0
                                                        } : {
                                                            stdout: s,
                                                            exceptionalTestcase: o,
                                                            status: T.F6.RE,
                                                            runtimeError: e.runtime_error,
                                                            fullRuntimeError: e.full_runtime_error
                                                        };
                                                        var h = [];
                                                        return t.result ? h.push({
                                                            input: n[0] || "",
                                                            output: s.trim(),
                                                            expected: t.result.code_output.join("\n").trim(),
                                                            accepted: !0,
                                                            stdout: ""
                                                        }) : h = (0, R.GM)(a) ? k(e, n) : function(e, n, t) {
                                                            for (var a = e.code_answer || [], r = e.expected_code_answer || [], i = e.std_output_list || [], o = e.compare_result || "", s = [], c = 0; c < n.length; c++) {
                                                                var u, l = n[c],
                                                                    T = (null === (u = a[c]) || void 0 === u ? void 0 : u.replace("\0", "\\u0000")) || "",
                                                                    h = r[c] || "",
                                                                    d = o[c];
                                                                s.push({
                                                                    input: l,
                                                                    output: T,
                                                                    expected: h,
                                                                    accepted: "1" === d || !t,
                                                                    stdout: i[c] || ""
                                                                })
                                                            }
                                                            return s
                                                        }(e, n, t.expectedResultAvailable), r === T.F6.WA ? {
                                                            stdout: s,
                                                            runtimeStatus: c,
                                                            memoryStatus: u,
                                                            status: T.F6.WA,
                                                            testcaseResultType: h
                                                        } : {
                                                            stdout: s,
                                                            runtimeStatus: c,
                                                            memoryStatus: u,
                                                            status: T.F6.AC,
                                                            testcaseResultType: h
                                                        }
                                                    }(t, e.testcaseList, {
                                                        result: a,
                                                        expectedResultAvailable: null === (o = e.expectedResultAvailable) || void 0 === o || o
                                                    }, s), [2, {
                                                        runcodeResult: c,
                                                        runcodeStatus: g.$.RUNCODE
                                                    }]) : [2, {
                                                        runcodeResult: null,
                                                        runcodeStatus: g.$.SERVER_ERROR
                                                    }];
                                                case 2:
                                                    return u = l.sent(), console.error(u), [2, {
                                                        runcodeResult: null,
                                                        runcodeStatus: g.$.NETWORK_ERROR
                                                    }];
                                                case 3:
                                                    return [2]
                                            }
                                        }))
                                    })),
                                    predicate: function(e) {
                                        return D(t, e), (null === e || void 0 === e ? void 0 : e.runcodeStatus) === g.$.PENDING || (null === e || void 0 === e ? void 0 : e.runcodeStatus) === g.$.JUDGING
                                    },
                                    completeCallback: function(e) {
                                        D(t, e), D(a, e)
                                    }
                                }), W.start(), [2])
                        }
                    }))
                }));
                return function(n, t, a, r, i) {
                    return e.apply(this, arguments)
                }
            }();
            var O, F = t(29297),
                w = t(44844),
                V = t(50632),
                W = t(93769),
                A = t(49037),
                E = t(67547),
                N = t(58420),
                P = t(55433),
                K = t(27375),
                M = t(30579),
                z = t(56098),
                B = t(21790),
                q = t(80043),
                U = t(7655),
                Z = t(61476),
                G = t(81910),
                Q = function() {},
                $ = (O = {}, (0, a.Z)(O, W.UU.Default, (function(e) {
                    return _.Hv.runcodeTaskEnqueue(e)
                })), (0, a.Z)(O, W.UU.Contest, (function(e, n) {
                    return (0, W.z2)((function(e) {
                        return e.isActiveContest
                    })) ? _.Hv.contestRuncodeTaskEnqueue(n, e) : _.Hv.runcodeTaskEnqueue(e)
                })), O),
                H = function() {
                    var e, n, t, a = (0, q.n)((function(e) {
                            return e.testcaseList
                        })),
                        h = (0, W.z2)((function(e) {
                            return e.questionSlug
                        })),
                        d = function() {
                            var e = (0, W.z2)((function(e) {
                                    return e.questionSlug
                                })),
                                n = (0, W.z2)((function(e) {
                                    return e.contestSlug
                                })),
                                t = (0, W.$w)();
                            return $[t](e, n)
                        }(),
                        p = (0, l.Q)(h).data,
                        f = null === p || void 0 === p ? void 0 : p.questionId,
                        m = (0, W.z2)((function(e) {
                            return e.problemType
                        })),
                        y = (0, U._)((function(e) {
                            return e.status
                        })),
                        _ = (0, z.D)((function(e) {
                            return e.testcaseMode
                        })),
                        v = (0, z.D)((function(e) {
                            return e.setActiveTab
                        })),
                        R = (0, U._)((function(e) {
                            return e.setResultStatus
                        })),
                        C = (0, U._)((function(e) {
                            return e.setRunCodeResult
                        })),
                        S = (0, q.n)((function(e) {
                            return e.setActiveTestcase
                        })),
                        x = (0, U._)((function(e) {
                            return e.activeRuncodeTestcase
                        })),
                        j = (0, U._)((function(e) {
                            return e.setActiveRuncodeTestcase
                        })),
                        L = (0, z.D)((function(e) {
                            return e.setExpanded
                        })),
                        k = (0, E.s)().checkSignedInAndVerified,
                        D = (0, P.sZ)((function(e) {
                            return e.code
                        })),
                        O = (0, P.sZ)((function(e) {
                            return e.lang
                        })),
                        H = (0, W.z2)((function(e) {
                            return e.randomEId
                        })),
                        J = (0, w.K)(h),
                        X = (0, V.U5)().data,
                        Y = (null === X || void 0 === X || null === (e = X.userStatus) || void 0 === e ? void 0 : e.isPremium) ? b.k_.Premium : b.k_.NonPremium,
                        ee = (0, o.useMemo)((function() {
                            return new URLSearchParams(window.location.search)
                        }), []),
                        ne = null !== (n = null === ee || void 0 === ee ? void 0 : ee.get("envId")) && void 0 !== n ? n : "",
                        te = null !== (t = null === ee || void 0 === ee ? void 0 : ee.get("envType")) && void 0 !== t ? t : "",
                        ae = function(e) {
                            R(e.runcodeStatus)
                        },
                        re = (0, A.h)(),
                        ie = (0, M.QE)((function(e) {
                            return e.sharedEditorState()
                        })),
                        oe = (0, M.QE)((function(e) {
                            return e.clientId()
                        })),
                        se = (0, M.QE)((function(e) {
                            var n;
                            return null === (n = e.userInfo) || void 0 === n ? void 0 : n.username
                        })),
                        ce = (0, G.B)().trackRunCodeEvent,
                        ue = function(e) {
                            var n, t, r, o = e.runcodeResult,
                                s = [g.$.RUNCODE, g.$.SUBMIT].includes(e.runcodeStatus);
                            if (ie.set("codeAction", {
                                    action: "runcode",
                                    clientId: oe,
                                    username: se,
                                    status: e.runcodeStatus,
                                    result: null === o || void 0 === o ? void 0 : o.status,
                                    timestamp: Date.now()
                                }), (null === o || void 0 === o ? void 0 : o.status) === T.F6.WA) {
                                var u = o,
                                    l = i.Z.reduce(u.testcaseResultType, (function(e, n, t) {
                                        return void 0 !== e ? e : n.accepted ? void 0 : t
                                    }), void 0);
                                void 0 !== l && (S(l), j(l))
                            }
                            s && (x < (null !== (r = null === o || void 0 === o || null === (t = o.testcaseResultType) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0) || j(0), C(o));
                            null === re || void 0 === re || re.setTabIsLoading(K.r.Result, !1), null === re || void 0 === re || re.highlightTab(K.r.Result);
                            var d, p = {
                                qd_version: (0, c.in)(),
                                qd_question_slug: h,
                                qd_code_language_type: null !== O && void 0 !== O ? O : "",
                                qd_code_result_type: String(null === o || void 0 === o ? void 0 : o.status),
                                qd_testcase_mode: String(_),
                                qd_from_study_plan: c.Zw.StudyPlanV2 === te ? "yes" : "no",
                                qd_study_plan_slug: ne,
                                qd_list_type: te,
                                qd_list_slug: ne
                            };
                            F.d.qdRunCodeClick(p), Q(p), ce({
                                result: {
                                    status: null !== (d = null === o || void 0 === o ? void 0 : o.status) && void 0 !== d ? d : T.F6.AC,
                                    stdout: null === o || void 0 === o ? void 0 : o.stdout,
                                    output: null === o || void 0 === o || null === (n = o.testcaseResultType) || void 0 === n ? void 0 : n.map((function(e) {
                                        return e.output
                                    })).join("\n"),
                                    error: (0, B.Az)(o)
                                },
                                testcases: (0, Z._c)(m, a, J)
                            })
                        },
                        le = (0, B.NU)(),
                        Te = (0, N.pm)().toast,
                        he = (0, s.z)((function() {
                            if (k("runcode")) {
                                var e = (0, r.Z)((0, Z.eC)(m, a), 2),
                                    n = e[0],
                                    t = e[1];
                                n ? (L(!0), R(g.$.PENDING), v(b.rf.Result), null === re || void 0 === re || re.openResultTab(), null === re || void 0 === re || re.unfoldTab(K.r.Result), null === re || void 0 === re || re.setTabIsLoading(K.r.Result, !0), I.runcode({
                                    questionSlug: h,
                                    testcaseList: (0, Z._c)(m, a, J),
                                    lang: O,
                                    questionId: f,
                                    typedCode: null !== D && void 0 !== D ? D : "",
                                    isIcpc: J,
                                    expectedResultAvailable: le
                                }, Y, ae, ue, d), (0, u.fn)({
                                    ename: 2,
                                    tid: H
                                })) : Te({
                                    variant: "error",
                                    description: null !== t && void 0 !== t ? t : "Invalid testcases",
                                    className: "last:mt-[48px]",
                                    duration: 2e3
                                })
                            }
                        }));
                    return {
                        onRunCodeClicked: he,
                        isInterpreting: [g.$.PENDING, g.$.JUDGING].includes(y)
                    }
                }
        },
        37414: function(e, n, t) {
            "use strict";
            t.d(n, {
                q: function() {
                    return H
                }
            });
            var a = t(14924),
                r = t(85945),
                i = t(67294),
                o = t(39606),
                s = t(79975),
                c = t(59421),
                u = t(69485),
                l = t(29297),
                T = t(44844),
                h = t(47568),
                d = t(51438),
                p = t(26042),
                f = t(69396),
                m = t(29815),
                y = t(70655),
                g = t(64487),
                b = t(83269),
                _ = t(9354),
                v = t(27583),
                R = t(69355),
                C = t(8276),
                S = t(9201),
                x = function(e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) t[a - 1] = arguments[a];
                    if ("function" === typeof e) return e.apply(void 0, (0, m.Z)(t))
                },
                j = function e() {
                    (0, d.Z)(this, e)
                };
            j.submit = function() {
                var e = (0, h.Z)((function(e, n, t, a, r) {
                    var i, s, c, u, l, T, d, m, j, L, k, D, I, O, F;
                    return (0, y.__generator)(this, (function(w) {
                        switch (w.label) {
                            case 0:
                                return i = e.questionSlug, s = e.lang, c = e.typedCode, u = e.questionId, l = e.isIcpc, T = e.studyPlanSlug, d = e.favoriteSlug, m = {
                                    submitResult: null,
                                    submitStatus: v.$.PENDING,
                                    submissionId: ""
                                }, x(t, m), j = (0, p.Z)({
                                    lang: s,
                                    question_id: u,
                                    typed_code: c,
                                    study_plan_slug: T,
                                    favorite_slug: d
                                }, (0, S.G)()), [4, C.x1.rawRequest(null !== r && void 0 !== r ? r : C.Hv.submitTaskEnqueue(i), {
                                    method: "POST",
                                    body: JSON.stringify(j)
                                }).then(function() {
                                    var e = (0, h.Z)((function(e) {
                                        var n;
                                        return (0, y.__generator)(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return e.status === b.Q4.RATE_LIMIT_EXCEEDED ? [2, new Promise((function(e) {
                                                        e({
                                                            taskError: o.SQ.SLOWDOWN_ERROR
                                                        })
                                                    }))] : [4, e.json()];
                                                case 1:
                                                    return n = t.sent(), [2, new Promise((function(e) {
                                                        e({
                                                            submissionId: n.submission_id
                                                        })
                                                    }))]
                                            }
                                        }))
                                    }));
                                    return function(n) {
                                        return e.apply(this, arguments)
                                    }
                                }()).catch((function(e) {
                                    return (0, g.$e)((function(n) {
                                        n.setExtras({
                                            errorData: L,
                                            bodyData: j
                                        }), n.setTag("where", "submitResult.submit"), (0, g.Tb)(e)
                                    })), {
                                        taskError: o.SQ.NETWORK_ERROR
                                    }
                                }))];
                            case 1:
                                return L = w.sent(), (k = null === L || void 0 === L ? void 0 : L.taskError) === o.SQ.NETWORK_ERROR ? ((0, g.$e)((function(e) {
                                    e.setExtras({
                                        errorData: L
                                    }), e.setTag("where", "submitResult.submit"), (0, g.Tb)(new Error("Network error during submit task enqueue."))
                                })), D = {
                                    submitResult: null,
                                    submitStatus: v.$.NETWORK_ERROR,
                                    submissionId: ""
                                }, x(t, D), x(a, D), [2]) : k === o.SQ.SLOWDOWN_ERROR ? (I = {
                                    submitResult: null,
                                    submitStatus: v.$.SLOWDOWN,
                                    submissionId: ""
                                }, x(t, I), x(a, I), [2]) : (O = (null === L || void 0 === L ? void 0 : L.submissionId) || "", F = new _.W({
                                    limit: 100,
                                    delay: function(e) {
                                        return Math.min(n * Math.pow(2, e), R.k_.Limit)
                                    },
                                    action: (0, h.Z)((function() {
                                        var e, n, t, a;
                                        return (0, y.__generator)(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return r.trys.push([0, 2, , 3]), [4, C.x1.request(C.Hv.submitResult(O))];
                                                case 1:
                                                    return e = r.sent(), "PENDING" === (n = e.state) ? [2, {
                                                        submitResult: null,
                                                        submitStatus: v.$.PENDING,
                                                        submissionId: O
                                                    }] : n && "FAILURE" !== n && "REVOKED" !== n ? "SUCCESS" !== n ? [2, {
                                                        submitResult: null,
                                                        submitStatus: v.$.JUDGING,
                                                        submissionId: O
                                                    }] : (t = function(e, n) {
                                                        var t = e.status_code,
                                                            a = e.compare_result || "",
                                                            r = e.std_output,
                                                            i = e.status_runtime || "",
                                                            s = e.status_memory || "",
                                                            c = e.last_testcase || "",
                                                            u = {
                                                                submissionId: e.submission_id,
                                                                stdout: r,
                                                                lastFailedTestcaseInfo: {
                                                                    testcasesPassed: n ? e.total_correct : a.split("1").length - 1,
                                                                    totalTestcases: n ? e.total_testcases : a.length,
                                                                    lastTestcase: c
                                                                }
                                                            };
                                                        if (t === o.F6.AC && a.includes("0") && (t = o.F6.WA), t === o.F6.CE) return (0, f.Z)((0, p.Z)({}, u), {
                                                            stdout: r,
                                                            status: o.F6.CE,
                                                            compileError: e.compile_error,
                                                            fullCompileError: e.full_compile_error
                                                        });
                                                        if (t === o.F6.IE) return (0, f.Z)((0, p.Z)({}, u), {
                                                            status: o.F6.IE
                                                        });
                                                        if (t === o.F6.MLE) return (0, f.Z)((0, p.Z)({}, u), {
                                                            status: o.F6.MLE
                                                        });
                                                        if (t === o.F6.OLE) return (0, f.Z)((0, p.Z)({}, u), {
                                                            status: o.F6.OLE
                                                        });
                                                        if (t === o.F6.TLE) return (0, f.Z)((0, p.Z)({}, u), {
                                                            status: o.F6.TLE
                                                        });
                                                        if (t === o.F6.TO) return (0, f.Z)((0, p.Z)({}, u), {
                                                            status: o.F6.TO
                                                        });
                                                        if (t === o.F6.RE) return (0, f.Z)((0, p.Z)({}, u), {
                                                            status: o.F6.RE,
                                                            runtimeError: e.runtime_error,
                                                            fullRuntimeError: e.full_runtime_error
                                                        });
                                                        if (t === o.F6.WA) {
                                                            var l, T = [{
                                                                input: e.input,
                                                                output: null === (l = e.code_output) || void 0 === l ? void 0 : l.replace("\0", "\\u0000"),
                                                                expected: e.expected_output,
                                                                accepted: !1
                                                            }];
                                                            return (0, f.Z)((0, p.Z)({}, u), {
                                                                runtimeStatus: i,
                                                                memoryStatus: s,
                                                                status: o.F6.WA,
                                                                testcaseResultType: T
                                                            })
                                                        }
                                                        return (0, f.Z)((0, p.Z)({}, u), {
                                                            runtimeStatus: i,
                                                            memoryStatus: s,
                                                            status: o.F6.AC
                                                        })
                                                    }(e, l), [2, {
                                                        submitResult: t,
                                                        submitStatus: v.$.SUBMIT,
                                                        submissionId: O,
                                                        taskResult: e
                                                    }]) : [2, {
                                                        submitResult: null,
                                                        submitStatus: v.$.SERVER_ERROR,
                                                        submissionId: O
                                                    }];
                                                case 2:
                                                    return a = r.sent(), console.error(a), [2, {
                                                        submitResult: null,
                                                        submitStatus: v.$.NETWORK_ERROR
                                                    }];
                                                case 3:
                                                    return [2]
                                            }
                                        }))
                                    })),
                                    predicate: function(e) {
                                        return x(t, e), (null === e || void 0 === e ? void 0 : e.submitStatus) === v.$.PENDING || (null === e || void 0 === e ? void 0 : e.submitStatus) === v.$.JUDGING
                                    },
                                    completeCallback: function(e) {
                                        x(t, e), x(a, e)
                                    }
                                }), F.start(), [2])
                        }
                    }))
                }));
                return function(n, t, a, r, i) {
                    return e.apply(this, arguments)
                }
            }();
            var L = t(50632),
                k = t(27930),
                D = t(53290),
                I = t(93769),
                O = t(49037),
                F = t(67547),
                w = t(75546),
                V = t(55433),
                W = t(10253),
                A = t(82222),
                E = new Map,
                N = function() {
                    function e(n, t, a) {
                        var r = this;
                        (0, d.Z)(this, e), this.callbacks = new Set, this.listening = !1, this.storageCallback = function(e) {
                            if (e.key) {
                                var n = r.removePrefix(e.key);
                                n && r.callbacks.forEach((function(t) {
                                    t({
                                        oldValue: r.attemptParse(e.oldValue),
                                        newValue: r.attemptParse(e.newValue),
                                        key: n
                                    })
                                }))
                            }
                        }, this.expiredTime = a, this.namespace = n;
                        try {
                            var i = "__leetcode-check-localStorage";
                            window.localStorage.setItem(i, i), window.localStorage.removeItem(i), this.storage = t ? window.sessionStorage : window.localStorage
                        } catch (o) {}
                    }
                    var n = e.prototype;
                    return n.has = function(e) {
                        var n = this.addPrefix(e);
                        if (!this.storage || !this.storage.getItem(n)) return !1;
                        var t = this.storage.getItem(n),
                            a = this.getUpdatedTime(e);
                        return null !== this.expiredTime && Date.now() > a + this.expiredTime ? (this.remove(n), !1) : null !== t
                    }, n.get = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            t = this.addPrefix(e),
                            a = null;
                        return this.storage && this.has(e) && (a = this.attemptParse(this.storage.getItem(t))), null === a ? n : a
                    }, n.getUpdatedTime = function(e) {
                        if (!this.storage) return 0;
                        var n = this.storage.getItem(this.addUpdatedTimeSuffix(e));
                        return parseInt(n || "0", 10)
                    }, n.set = function(e, n) {
                        if (!this.storage) return !1;
                        var t = JSON.stringify(n);
                        if (!e) return console.warn("storage.set() accept an invalid key. ".concat(e, " couldn't be stringified.")), !1;
                        if (!t) return console.warn("storage.set() accept an invalid value. ".concat(n, " couldn't be stringified.")), !1;
                        var a = this.addPrefix(e);
                        try {
                            this.storage.setItem(a, t), this.setUpdatedTime(e)
                        } catch (r) {
                            return !1
                        }
                        return !0
                    }, n.setAll = function(e) {
                        if (!this.storage) return !1;
                        var n = !0,
                            t = !1,
                            a = void 0;
                        try {
                            for (var r, i = Object.entries(e)[Symbol.iterator](); !(n = (r = i.next()).done); n = !0) {
                                var o = (0, W.Z)(r.value, 2),
                                    s = o[0],
                                    c = o[1];
                                this.set(s, c)
                            }
                        } catch (u) {
                            t = !0, a = u
                        } finally {
                            try {
                                n || null == i.return || i.return()
                            } finally {
                                if (t) throw a
                            }
                        }
                        return !0
                    }, n.setUpdatedTime = function(e) {
                        this.storage && this.storage.setItem(this.addUpdatedTimeSuffix(e), Date.now().toString())
                    }, n.remove = function(e) {
                        if (this.storage) {
                            var n = this.addPrefix(e);
                            this.storage.removeItem(n), this.storage.removeItem(this.addUpdatedTimeSuffix(e))
                        }
                    }, n.clear = function() {
                        return !!this.storage && (this.storage.clear(), !0)
                    }, n.attach = function(e) {
                        "function" === typeof e ? (this.callbacks.add(e), this.listening || this.startListening()) : console.warn("callback of type '".concat("undefined" === typeof e ? "undefined" : (0, A.Z)(e), "' passed to   attach(callback) is invalid"))
                    }, n.detach = function(e) {
                        this.callbacks.delete(e), 0 === this.callbacks.size && this.stopListening()
                    }, n.addUpdatedTimeSuffix = function(e) {
                        return this.addPrefix("".concat(e, "-updated-time"))
                    }, n.addPrefix = function(e) {
                        return this.namespace ? "".concat(this.namespace, ":").concat(e) : e
                    }, n.removePrefix = function(e) {
                        if (!this.namespace) return e;
                        var n = new RegExp("^".concat(this.namespace, ":")),
                            t = e.replace(n, "");
                        return t !== e ? t : null
                    }, n.attemptParse = function(e) {
                        if (null === e) return e;
                        var n;
                        try {
                            n = JSON.parse(e)
                        } catch (t) {
                            n = e
                        }
                        return n
                    }, n.startListening = function() {
                        window.addEventListener("storage", this.storageCallback), this.listening = !0
                    }, n.stopListening = function() {
                        window.removeEventListener("storage", this.storageCallback), this.listening = !1
                    }, e
                }();
            var P, K, M = t(88525).M4Y,
                z = function(e, n) {
                    e.invalidateQueries(M.getKey({
                        favoriteSlug: n
                    }))
                },
                B = t(53889),
                q = t(30579),
                U = t(56098),
                Z = t(81910),
                G = t(7655),
                Q = (P = {}, (0, a.Z)(P, I.UU.Default, (function(e) {
                    return C.Hv.submitTaskEnqueue(e)
                })), (0, a.Z)(P, I.UU.Contest, (function(e, n) {
                    return C.Hv.contestSubmitTaskEnqueue(n, e)
                })), P),
                $ = (K = {}, (0, a.Z)(K, I.UU.Default, (function() {
                    return null
                })), (0, a.Z)(K, I.UU.Contest, (function(e, n, t) {
                    var a, r = function() {
                        var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = (t = (0, p.Z)({
                                expiredTime: null,
                                isSession: !1
                            }, t)).expiredTime,
                            r = t.isSession,
                            i = "".concat(n, "|").concat(a, "|").concat(r);
                        return E.has(i) ? e = E.get(i) : (e = new N(n, !!r, a), E.set(i, e)), e
                    }("contest_ac_status");
                    if (void 0 !== t && (null === e || void 0 === e || null === (a = e.taskResult) || void 0 === a ? void 0 : a.status_code) === o.F6.AC) {
                        var i = n,
                            s = r.get(i) || {};
                        s[t] = !0, r.set(i, s)
                    }
                })), K),
                H = function() {
                    var e, n, t, a, h, d = (0, U.D)((function(e) {
                            return e.setActiveTab
                        })),
                        p = (0, I.z2)((function(e) {
                            return e.questionSlug
                        })),
                        f = function() {
                            var e = (0, I.z2)((function(e) {
                                    return e.questionSlug
                                })),
                                n = (0, I.z2)((function(e) {
                                    return e.contestSlug
                                }));
                            return Q[(0, I.$w)()](e, n)
                        }(),
                        m = (0, s.Q)(p).data,
                        y = null === m || void 0 === m ? void 0 : m.questionId,
                        g = null === (e = (0, c.K)(p).data) || void 0 === e ? void 0 : e.categoryTitle,
                        _ = (0, G._)((function(e) {
                            return e.status
                        })),
                        C = (0, G._)((function(e) {
                            return e.setSubmitResult
                        })),
                        S = (0, G._)((function(e) {
                            return e.setSubmitResultForSP
                        })),
                        x = (0, G._)((function(e) {
                            return e.setSubmissionId
                        })),
                        W = (0, w.Y)((function(e) {
                            return e.setResultStatus
                        })),
                        A = (0, w.Y)((function(e) {
                            return e.setSubmissionId
                        })),
                        E = (0, U.D)((function(e) {
                            return e.setExpanded
                        })),
                        N = (0, I.z2)((function(e) {
                            return e.randomEId
                        })),
                        P = (0, V.sZ)((function(e) {
                            return e.code
                        })),
                        K = (0, V.sZ)((function(e) {
                            return e.lang
                        })),
                        M = (0, T.K)(p),
                        H = (0, L.U5)().data,
                        J = (null === H || void 0 === H || null === (n = H.userStatus) || void 0 === n ? void 0 : n.isPremium) ? R.k_.Premium : R.k_.NonPremium,
                        X = (0, r.NL)(),
                        Y = (0, i.useMemo)((function() {
                            return new URLSearchParams(window.location.search)
                        }), []),
                        ee = null !== (t = null === Y || void 0 === Y ? void 0 : Y.get("envId")) && void 0 !== t ? t : "",
                        ne = null !== (a = null === Y || void 0 === Y ? void 0 : Y.get("envType")) && void 0 !== a ? a : "",
                        te = null !== (h = null === Y || void 0 === Y ? void 0 : Y.get("favoriteSlug")) && void 0 !== h ? h : "",
                        ae = ne === b.Zw.StudyPlanV2 && ee ? ee : void 0,
                        re = ne === b.Zw.ProblemListV2 && ee ? ee : ne === b.Zw.Company && te ? te : void 0,
                        ie = function() {
                            var e = (0, I.z2)((function(e) {
                                    return e.contestSlug
                                })),
                                n = (0, I.z2)((function(e) {
                                    return e.questionSlug
                                })),
                                t = (0, s.Q)(n).data,
                                a = null === t || void 0 === t ? void 0 : t.questionId,
                                r = (0, B.b)($);
                            return function(n) {
                                return r(n, e, a)
                            }
                        }(),
                        oe = function(e) {
                            W(e.submitStatus), ie(e)
                        },
                        se = (0, O.h)(),
                        ce = (0, q.QE)((function(e) {
                            return e.sharedEditorState()
                        })),
                        ue = (0, q.QE)((function(e) {
                            return e.clientId()
                        })),
                        le = (0, q.QE)((function(e) {
                            return e.roomId
                        })),
                        Te = (0, q.QE)((function(e) {
                            var n;
                            return null === (n = e.userInfo) || void 0 === n ? void 0 : n.username
                        })),
                        he = (0, F.s)().checkSignedInAndVerified,
                        de = (0, Z.B)().trackSubmitEvent,
                        pe = function(e) {
                            var n, t, a, r = [v.$.RUNCODE, v.$.SUBMIT].includes(e.submitStatus);
                            (ne === b.Zw.Company || ne === b.Zw.ProblemListV2 ? X.invalidateQueries(["favoriteQuestionAcStatus"]) : X.invalidateQueries(["questionDetail", {
                                titleSlug: p
                            }]), ce.set("codeAction", {
                                action: "submit",
                                clientId: ue,
                                username: Te,
                                status: e.submitStatus,
                                result: null === (n = e.submitResult) || void 0 === n ? void 0 : n.status,
                                timestamp: Date.now()
                            }), le && l.d.qdCollabSubmitClick({
                                qd_collab_submission_id: e.submissionId
                            }), X.invalidateQueries(["submissionList"]), X.invalidateQueries(["questionSubmissionList"]), X.invalidateQueries(["panelQuestionList"]), X.invalidateQueries(["studyPlanAwardStatus", {
                                slug: ae
                            }]), X.invalidateQueries(["contestSubmissionList"]), X.invalidateQueries(["contestQuestion"]), X.invalidateQueries(["contest-my-ranking"]), (0, D.I)(X), re && ne === b.Zw.ProblemListV2 && z(X, re), re && ne === b.Zw.Company && z(X, te), r) && (C(e.submitResult), S(e.submitResult), x(e.submissionId), A(e.submissionId), null === se || void 0 === se || se.openSubmissionDetailTabFromSubmit({
                                id: String(e.submissionId),
                                title: "Loading..."
                            }), de({
                                result: {
                                    status: null !== (a = null === (t = e.submitResult) || void 0 === t ? void 0 : t.status) && void 0 !== a ? a : o.F6.AC
                                },
                                submissionId: e.submissionId
                            }));
                            var i = e.submitResult;
                            l.d.qdSubmitCodeClick({
                                qd_version: (0, b.in)(),
                                qd_question_slug: p,
                                qd_code_language_type: null !== K && void 0 !== K ? K : "",
                                qd_code_result_type: String(null === i || void 0 === i ? void 0 : i.status),
                                qd_from_study_plan: b.Zw.StudyPlanV2 === ne ? "yse" : "no",
                                qd_study_plan_slug: ae || "",
                                qd_list_type: ne,
                                qd_list_slug: ee,
                                qd_category: g || ""
                            })
                        };
                    return {
                        onSubmitClicked: (0, u.z)((function() {
                            he("submit") && (E(!0), d(R.rf.Result), W(v.$.PENDING), j.submit({
                                questionSlug: p,
                                lang: K,
                                questionId: y,
                                typedCode: null !== P && void 0 !== P ? P : "",
                                isIcpc: M,
                                studyPlanSlug: ae,
                                favoriteSlug: re
                            }, J, oe, pe, f), (0, k.fn)({
                                ename: 3,
                                tid: N
                            }))
                        })),
                        isSubmitting: [v.$.PENDING, v.$.JUDGING].includes(_)
                    }
                }
        },
        62799: function(e, n, t) {
            "use strict";
            t.d(n, {
                I: function() {
                    return o
                }
            });
            var a = t(67294),
                r = t(87277),
                i = t(46169),
                o = function() {
                    var e = (0, r.H)((function(e) {
                        return e.debuggerStatus
                    }));
                    return (0, a.useMemo)((function() {
                        return (0, i.Q2)(e)
                    }), [e])
                }
        },
        46169: function(e, n, t) {
            "use strict";
            t.d(n, {
                Ak: function() {
                    return s
                },
                Q2: function() {
                    return f
                },
                ce: function() {
                    return c
                },
                dE: function() {
                    return d
                },
                uW: function() {
                    return u
                },
                uq: function() {
                    return p
                },
                zb: function() {
                    return l
                }
            });
            var a = t(15937),
                r = t(14546),
                i = t.n(r),
                o = t(45982),
                s = i().monacoDebuggerBreakpoint,
                c = i().monacoDebuggerBreakpointHovered,
                u = i().monacoHighlightLine,
                l = i().monacoDebuggerBreakpointHoveredDisabled,
                T = function(e) {
                    return e.options.glyphMarginClassName === s
                },
                h = function(e) {
                    var n, t;
                    return null !== (t = null === (n = null === e || void 0 === e ? void 0 : e.getModel()) || void 0 === n ? void 0 : n.getAllDecorations().filter(T)) && void 0 !== t ? t : []
                };

            function d(e) {
                return (0, a.Z)(h(e).map((function(e) {
                    return [e.range.endLineNumber, e.id]
                })))
            }

            function p(e) {
                return e ? h(e).map((function(e) {
                    return e.range.endLineNumber
                })) : []
            }
            var f = function(e) {
                return [o.re.PENDING, o.re.RUNNING, o.re.ACTIVE].includes(e)
            }
        },
        95788: function(e, n, t) {
            "use strict";
            t.d(n, {
                W: function() {
                    return p
                }
            });
            var a = t(53434),
                r = t(67294),
                i = t(58971),
                o = t.n(i),
                s = t(69485),
                c = t(63030),
                u = t(76636),
                l = t(69999),
                T = t(89395),
                h = t(38850),
                d = t(55433),
                p = function() {
                    var e, n, t = (0, r.useState)(!1),
                        i = t[0],
                        p = t[1],
                        f = (0, r.useState)(!1),
                        m = f[0],
                        y = f[1],
                        g = (0, r.useState)(!1),
                        b = g[0],
                        _ = g[1],
                        v = (0, r.useState)(!1),
                        R = v[0],
                        C = v[1],
                        S = (0, l.b)(),
                        x = S.codeKey,
                        j = S.unAuthCodeKey,
                        L = (0, r.useRef)(x);
                    L.current = x;
                    var k = (0, d.sZ)((function(e) {
                            return e.lang
                        })),
                        D = (0, u.y)().data,
                        I = null === (e = null === D || void 0 === D ? void 0 : D.find((function(e) {
                            return e.name === k
                        }))) || void 0 === e ? void 0 : e.id,
                        O = (0, c.Mu)().mutateAsync,
                        F = null === (n = (0, T.T)().data) || void 0 === n ? void 0 : n.questionId,
                        w = (0, s.z)((function(e) {
                            F && !isNaN(I) && (_(!0), O({
                                code: e,
                                lang: I,
                                questionId: Number(F)
                            }).then((function(e) {
                                var n;
                                _(!1), (null === (n = e.updateSyncedCode) || void 0 === n ? void 0 : n.ok) && p(!0)
                            })))
                        })),
                        V = (0, s.z)((function() {
                            C(!0), setTimeout((function() {
                                C(!1), y(!0)
                            }), 1e3)
                        })),
                        W = (0, r.useMemo)((function() {
                            return (0, a.Z)(V, 2e3, {
                                maxWait: 1e4
                            })
                        }), [V]),
                        A = (0, r.useCallback)((function(e, n) {
                            var t = n || L.current;
                            t && (o().set(t, e), o().set("".concat(t, "-updated-time"), Date.now()))
                        }), []),
                        E = (0, r.useCallback)((function(e, n, t) {
                            A(n, t), V(), e && w(n)
                        }), [A, V, w]),
                        N = (0, r.useMemo)((function() {
                            return (0, a.Z)(E, 2e3, {
                                maxWait: 1e4
                            })
                        }), [E]),
                        P = (0, r.useCallback)((function() {
                            var e = function(e, n) {
                                var t = "".concat(e, "_code"),
                                    a = "".concat(n, "_code"),
                                    r = (0, h.r)(t, a),
                                    i = (0, h.r)(e, n);
                                return (0, h.r)(r, i)
                            }(x, j);
                            x && x !== j && e === j && (o().set("".concat(x, "-backup"), o().get(x)), o().set("".concat(x, "-backup-updated-time"), o().get("".concat(x, "-updated-time"))));
                            var n = e ? o().get(e) : void 0,
                                t = e ? o().get("".concat(e, "-updated-time")) : void 0;
                            return {
                                code: n,
                                d: t ? Number(t) : 0
                            }
                        }), [j, x]),
                        K = (0, r.useCallback)((function() {
                            var e = x ? o().get("".concat(x, "-backup")) : void 0,
                                n = x ? o().get("".concat(x, "-backup-updated-time")) : void 0;
                            return {
                                code: e,
                                d: n ? Number(n) : 0
                            }
                        }), [x]),
                        M = (0, r.useCallback)((function() {
                            x && o().remove("".concat(x, "-backup")), x && o().remove("".concat(x, "-backup-updated-time"))
                        }), [x]),
                        z = (0, r.useCallback)((function() {
                            p(!1), y(!1)
                        }), []);
                    return {
                        saveCode: N,
                        saveToLocalStorage: A,
                        saveToServer: w,
                        debouncedFakeLocalSavingStatus: W,
                        getCode: P,
                        getBackupCode: K,
                        removeBackupCode: M,
                        prepared: !!x,
                        savedCodeToServer: i,
                        savedCodeToLocal: m,
                        savingCodeToServer: b,
                        savingCodeToLocal: R,
                        onSavedCodeStale: z
                    }
                }
        },
        69999: function(e, n, t) {
            "use strict";
            t.d(n, {
                F: function() {
                    return u
                },
                b: function() {
                    return T
                }
            });
            var a = t(26042),
                r = t(69396),
                i = t(67294),
                o = t(50632),
                s = t(89395),
                c = t(55433),
                u = function(e) {
                    return "".concat(e)
                },
                l = function(e, n, t) {
                    return {
                        authCodeKey: "".concat(e, "_").concat(n, "_").concat(t),
                        unAuthCodeKey: "".concat(e, "_0_").concat(t),
                        langKey: "".concat(e, "_").concat(n, "_lang"),
                        unAuthLangKey: "".concat(e, "_0_lang")
                    }
                },
                T = function() {
                    var e, n, t, T, h, d, p, f = null === (e = (0, o.U5)().data) || void 0 === e || null === (n = e.userStatus) || void 0 === n ? void 0 : n.userSlug,
                        m = null === (t = (0, o.U5)()) || void 0 === t || null === (T = t.data) || void 0 === T || null === (h = T.userStatus) || void 0 === h ? void 0 : h.activeSessionId,
                        y = null === (d = (0, o.U5)().data) || void 0 === d || null === (p = d.userStatus) || void 0 === p ? void 0 : p.isSignedIn,
                        g = (0, s.T)().data,
                        b = null === g || void 0 === g ? void 0 : g.questionId,
                        _ = (0, i.useMemo)((function() {
                            return f ? "ugc_".concat(f) : u(m)
                        }), [f, m]),
                        v = (0, c.sZ)((function(e) {
                            return e.lang
                        })),
                        R = (0, i.useCallback)((function(e) {
                            if (!b) return {};
                            var n = l(b, _, e),
                                t = y ? n.authCodeKey : n.unAuthCodeKey;
                            return (0, r.Z)((0, a.Z)({}, n), {
                                codeKey: t,
                                globalLangKey: "global_lang"
                            })
                        }), [b, _, y]),
                        C = R(v),
                        S = C.authCodeKey,
                        x = C.unAuthCodeKey,
                        j = C.unAuthLangKey,
                        L = C.langKey;
                    return {
                        codeKey: C.codeKey,
                        langKey: L,
                        authCodeKey: S,
                        unAuthCodeKey: x,
                        globalLangKey: C.globalLangKey,
                        unAuthLangKey: j,
                        createKeys: R
                    }
                }
        },
        38850: function(e, n, t) {
            "use strict";
            t.d(n, {
                r: function() {
                    return o
                }
            });
            var a = t(58971),
                r = t.n(a),
                i = function(e) {
                    var n = e ? r().get("".concat(e, "-updated-time")) : null;
                    return n ? Number(n) : null
                },
                o = function(e, n) {
                    var t = i(e),
                        a = i(n);
                    return t ? a ? t > a ? e : n : e : n
                }
        },
        58544: function(e, n, t) {
            "use strict";
            t.d(n, {
                E: function() {
                    return i
                }
            });
            var a = t(67294),
                r = t(80441),
                i = function(e) {
                    var n = (0, r.Ik)();
                    (0, a.useEffect)((function() {
                        n && (null === e || void 0 === e || e._standaloneKeybindingService.addDynamicKeybinding("^", n.KeyMod.CtrlCmd | n.KeyCode.Enter, (function() {})), null === e || void 0 === e || e._standaloneKeybindingService.addDynamicKeybinding("^", n.KeyMod.CtrlCmd | n.KeyCode.Quote, (function() {})))
                    }), [e, n])
                }
        },
        45867: function(e, n, t) {
            "use strict";
            t.d(n, {
                J: function() {
                    return h
                }
            });
            var a = t(85893),
                r = t(11321),
                i = t(60477),
                o = t(67021),
                s = t(15371),
                c = t(12922),
                u = t(41367),
                l = t.n(u),
                T = t(50108),
                h = function(e) {
                    var n = e.title,
                        t = e.content,
                        u = e.visible,
                        h = e.onCancel,
                        d = (0, r.$G)("common").t;
                    return (0, a.jsxs)(T.w_, {
                        visible: u,
                        onCancel: h,
                        className: "w-[600px]",
                        children: [(0, a.jsxs)(T.If, {
                            children: [(0, a.jsx)(o.e, {
                                className: "text-green-s mr-2 h-6 w-6"
                            }), n]
                        }), (0, a.jsx)(T.a_, {
                            className: "pb-0",
                            children: (0, a.jsx)("div", {
                                className: (0, c.yI)("children:mb-5", s.Cj.label2, l().langInfo),
                                dangerouslySetInnerHTML: {
                                    __html: t
                                }
                            })
                        }), (0, a.jsx)(T.hH, {
                            children: (0, a.jsx)(i.z, {
                                className: "rounded-lg px-4",
                                variant: "primary",
                                onClick: h,
                                children: d("ok")
                            })
                        })]
                    })
                }
        },
        34970: function(e, n, t) {
            "use strict";
            t.d(n, {
                O: function() {
                    return r
                }
            });
            var a = function(e) {
                    return "wss://lsp-".concat(e, ".").concat("leetcode.com", "/lsp")
                },
                r = {
                    c: {
                        fileExtension: "c",
                        webSocketUrl: a("c")
                    },
                    cpp: {
                        fileExtension: "cpp",
                        webSocketUrl: a("cpp")
                    },
                    python: {
                        fileExtension: "py",
                        webSocketUrl: a("py2")
                    },
                    python3: {
                        fileExtension: "py",
                        webSocketUrl: a("py3")
                    },
                    java: {
                        fileExtension: "java",
                        webSocketUrl: a("java")
                    },
                    golang: {
                        fileExtension: "go",
                        webSocketUrl: a("go")
                    },
                    swift: {
                        fileExtension: "swift",
                        webSocketUrl: a("swift")
                    },
                    cangjie: {
                        fileExtension: "cj",
                        webSocketUrl: a("cangjie")
                    }
                }
        },
        48312: function(e, n, t) {
            "use strict";
            t.d(n, {
                o: function() {
                    return pn
                },
                q: function() {
                    return fn
                }
            });
            var a = t(14924),
                r = t(85893),
                i = t(67294),
                o = t(12922),
                s = t(78030),
                c = t(11516),
                u = t(93769),
                l = t(53889),
                T = t(26042),
                h = t(68779),
                d = t(83269),
                p = t(98819),
                f = t(60477),
                m = t(66360),
                y = t(27632),
                g = t(15371),
                b = t(29297),
                _ = t(27930),
                v = t(77626),
                R = t(52872),
                C = t(134),
                S = t(81910),
                x = t(41367),
                j = t.n(x),
                L = t(45867),
                k = t(87277);
            var D, I = [],
                O = function() {
                    (0, s.y)(j());
                    var e = (0, u.z2)((function(e) {
                            return e.questionSlug
                        })),
                        n = (0, u.z2)((function(e) {
                            return e.randomEId
                        })),
                        t = (0, v.y)(),
                        l = t.envInfo,
                        x = t.codeSnippets,
                        D = t.codeLang,
                        O = t.setCodeLang,
                        F = (0, i.useMemo)((function() {
                            return x.map((function(e) {
                                return {
                                    value: e.lang,
                                    text: e.displayLang,
                                    code: e.code
                                }
                            }))
                        }), [x]),
                        w = (0, i.useState)(!1),
                        V = w[0],
                        W = w[1],
                        A = (0, i.useState)(),
                        E = A[0],
                        N = A[1],
                        P = (0, i.useRef)(null),
                        K = (0, i.useCallback)((function(e, n) {
                            var t;
                            e.stopPropagation(), null === (t = P.current) || void 0 === t || t.click(), N(n), W(!0)
                        }), []),
                        M = (0, S.B)().trackLangEvent,
                        z = (0, u.z2)((function(e) {
                            return e.problemType
                        })) === R.tn.Frontend,
                        B = (0, i.useMemo)((function() {
                            return F.find((function(e) {
                                return e.value === D
                            }))
                        }), [D, F]),
                        q = (0, k.H)((function(e) {
                            return e.clearBreakpoints
                        })),
                        U = (0, i.useCallback)((function(t) {
                            t.value && (q(), O(t.value, t.text), b.d.qdSwitchLangClick({
                                qd_version: (0, d.in)(),
                                qd_question_slug: e,
                                qd_code_language_type: t.value
                            }), (0, _.fn)({
                                ename: 11,
                                tid: n
                            }), M({
                                lang: t.value
                            }))
                        }), [q, O, e, n, M]);
                    (0, i.useEffect)((function() {
                        D && M({
                            lang: D
                        })
                    }), [e]);
                    var Z, G = (0, i.useMemo)((function() {
                            return (null === E || void 0 === E ? void 0 : E.value) ? l[E.value] : []
                        }), [l, null === E || void 0 === E ? void 0 : E.value]),
                        Q = (0, i.useCallback)((function(e) {
                            if (!e) return null;
                            var n = e.text;
                            return (0, r.jsxs)("div", {
                                className: (0, o.yI)("group flex min-w-[140px] cursor-pointer items-center justify-between rounded-[4px] py-[6px] pl-[6px] pr-3", c.rG.bgFillTertiary),
                                onClick: function() {
                                    return U(e)
                                },
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, r.jsx)(m.N, {
                                        className: (0, o.yI)("invisible mr-2 h-[14px] w-[14px]", c.nx.labelTextPrimary, {
                                            visible: (null === B || void 0 === B ? void 0 : B.text) === n
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: (0, o.yI)(c.nx.labelTextPrimary, "relative text-sm"),
                                        children: [n, n && I.indexOf(n.toString()) > -1 && (0, r.jsx)("span", {
                                            className: (0, o.yI)("absolute -right-[26px] -top-[5px] scale-75 text-xs font-medium", c.nx.labelBrandOrange),
                                            children: "NEW"
                                        })]
                                    })]
                                }), !z && (0, r.jsx)(y.a, {
                                    className: (0, o.yI)(" pointer-events-none ml-1 h-[14px] w-[14px] opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 ", c.nx.labelGray60),
                                    onClick: function(n) {
                                        return K(n, e)
                                    }
                                })]
                            })
                        }), [null === B || void 0 === B ? void 0 : B.text, z, U, K]),
                        $ = (0, i.useCallback)((function() {
                            var e = function(e, n) {
                                for (var t = 0, a = []; t < e.length;) a.push(e.slice(t, t + n)), t += n;
                                return a
                            }(F, 8);
                            return (0, r.jsx)("div", {
                                className: "flex",
                                ref: P,
                                children: e.map((function(e, n) {
                                    return (0, r.jsx)("div", {
                                        className: (0, o.yI)("border-r border-solid px-2 first:pl-0 last:border-r-0 last:pr-0", c.nx.borderBorderTertiary),
                                        children: e.map((function(e) {
                                            return (0, r.jsx)(Q, (0, T.Z)({}, e), e.value)
                                        }))
                                    }, n)
                                }))
                            })
                        }), [Q, F]),
                        H = (0, i.useCallback)((function() {
                            W(!1)
                        }), []);
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(p.J, {
                            useHover: !1,
                            showArrow: !1,
                            canCloseContent: !0,
                            placement: "bottomLeft",
                            panelClassName: (0, o.yI)("rounded-lg border mt-[-5px]", c.nx.borderBorderTertiary, c.nx.bgLayer02),
                            contentClassName: "p-2 rounded-lg",
                            content: (0, r.jsx)($, {}),
                            disabled: F.length <= 1,
                            children: (0, r.jsxs)(f.z, {
                                className: (0, o.yI)(g.Cj.bgTransparent, c.nx.labelTextSecondary, g.Cj.bgTransparentActive, (Z = {}, (0, a.Z)(Z, c.rG.bgFillSecondary, F.length > 1), (0, a.Z)(Z, "hover:bg-transparent dark:hover:bg-transparent", F.length <= 1), Z), "px-1.5 py-0.5 text-sm font-normal", "group"),
                                children: [null === B || void 0 === B ? void 0 : B.text, F.length > 1 && (0, r.jsx)(C.e, {
                                    variant: "12px",
                                    padding: "roomy",
                                    icon: h.ptq,
                                    className: (0, o.yI)("ml-1", c.nx.labelGray60)
                                })]
                            })
                        }), (0, r.jsx)(L.J, {
                            title: G[0],
                            content: G[1],
                            visible: V,
                            onCancel: H
                        })]
                    })
                },
                F = t(50632),
                w = t(11321),
                V = t(70341),
                W = t(62758),
                A = t(20108),
                E = t(80441),
                N = function(e, n, t) {
                    var a = e.languages.typescript.javascriptDefaults.addExtraLib(n, t),
                        r = e.languages.typescript.typescriptDefaults.addExtraLib(n, t);
                    return function() {
                        a.dispose(), r.dispose()
                    }
                },
                P = function(e) {
                    return N(e, "declare class TreeNode {\n  val: number\n  left: TreeNode | null\n  right: TreeNode | null\n  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null)\n}\n\ndeclare class ListNode {\n  val: number\n  next: ListNode | null\n  constructor(val?: number, next?: ListNode | null)\n}\n\ndeclare class NestedInteger {\n  private _integer: number | null\n  private _list: NestedInteger[]\n  constructor(val?: number)\n\n  isInteger(): boolean\n\n  getInteger(): number | null\n\n  setInteger(i: number): void\n\n  getList(): NestedInteger[]\n\n  add(ni: NestedInteger): void\n}\n")
                },
                K = function(e) {
                    var n = [N(e, '/* eslint-disable */\n// Type definitions for Lo-Dash 4.14\n// Project: https://lodash.com\n// Definitions by: Brian Zengel <https://github.com/bczengel>,\n//                 Ilya Mochalov <https://github.com/chrootsu>,\n//                 Stepan Mikhaylyuk <https://github.com/stepancar>,\n//                 AJ Richardson <https://github.com/aj-r>,\n//                 e-cloud <https://github.com/e-cloud>,\n//                 Georgii Dolzhykov <https://github.com/thorn0>,\n//                 Jack Moore <https://github.com/jtmthf>,\n//                 Dominique Rau <https://github.com/DomiR>\n//                 William Chelman <https://github.com/WilliamChelman>\n// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped\n\n/// <reference path="./common/common.d.ts" />\n/// <reference path="./common/array.d.ts" />\n/// <reference path="./common/collection.d.ts" />\n/// <reference path="./common/date.d.ts" />\n/// <reference path="./common/function.d.ts" />\n/// <reference path="./common/lang.d.ts" />\n/// <reference path="./common/math.d.ts" />\n/// <reference path="./common/number.d.ts" />\n/// <reference path="./common/object.d.ts" />\n/// <reference path="./common/seq.d.ts" />\n/// <reference path="./common/string.d.ts" />\n/// <reference path="./common/util.d.ts" />\n\nexport = _\nexport as namespace _\n\ndeclare const _: _.LoDashStatic\ndeclare namespace _ {\n  // tslint:disable-next-line no-empty-interface (This will be augmented)\n  interface LoDashStatic {}\n}\n\n// Backward compatibility with --target es5\ndeclare global {\n  // tslint:disable-next-line:no-empty-interface\n  interface Set<T> {}\n  // tslint:disable-next-line:no-empty-interface\n  interface Map<K, V> {}\n  // tslint:disable-next-line:no-empty-interface\n  interface WeakSet<T> {}\n  // tslint:disable-next-line:no-empty-interface\n  interface WeakMap<K extends object, V> {}\n}\n', "@types/lodash/index.d.ts"), N(e, '/* eslint-disable */\nimport _ = require(\'../index\')\n// tslint:disable-next-line:strict-export-declare-modifiers\ntype GlobalPartial<T> = Partial<T>\ndeclare module \'../index\' {\n  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>\n  type PartialObject<T> = GlobalPartial<T>\n  type Many<T> = T | ReadonlyArray<T>\n  type ImpChain<T> = T extends { __trapAny: any }\n    ? Collection<any> & Function<any> & Object<any> & Primitive<any> & String\n    : T extends null | undefined\n    ? never\n    : T extends string | null | undefined\n    ? String\n    : T extends (...args: any) => any\n    ? Function<T>\n    : T extends List<infer U> | null | undefined\n    ? Collection<U>\n    : T extends object | null | undefined\n    ? Object<T>\n    : Primitive<T>\n  type ExpChain<T> = T extends { __trapAny: any }\n    ? CollectionChain<any> & FunctionChain<any> & ObjectChain<any> & PrimitiveChain<any> & StringChain\n    : T extends null | undefined\n    ? never\n    : T extends string\n    ? StringChain\n    : T extends string | null | undefined\n    ? StringNullableChain\n    : T extends (...args: any) => any\n    ? FunctionChain<T>\n    : T extends List<infer U> | null | undefined\n    ? CollectionChain<U>\n    : T extends object | null | undefined\n    ? ObjectChain<T>\n    : PrimitiveChain<T>\n  interface LoDashStatic {\n    /**\n     * Creates a lodash object which wraps value to enable implicit method chain sequences.\n     * Methods that operate on and return arrays, collections, and functions can be chained together.\n     * Methods that retrieve a single value or may return a primitive value will automatically end the\n     * chain sequence and return the unwrapped value. Otherwise, the value must be unwrapped with value().\n     *\n     * Explicit chain sequences, which must be unwrapped with value(), may be enabled using _.chain.\n     *\n     * The execution of chained methods is lazy, that is, it\'s deferred until value() is\n     * implicitly or explicitly called.\n     *\n     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut fusion\n     * is an optimization to merge iteratee calls; this avoids the creation of intermediate\n     * arrays and can greatly reduce the number of iteratee executions. Sections of a chain\n     * sequence qualify for shortcut fusion if the section is applied to an array and iteratees\n     * accept only one argument. The heuristic for whether a section qualifies for shortcut\n     * fusion is subject to change.\n     *\n     * Chaining is supported in custom builds as long as the value() method is directly or\n     * indirectly included in the build.\n     *\n     * In addition to lodash methods, wrappers have Array and String methods.\n     * The wrapper Array methods are:\n     * concat, join, pop, push, shift, sort, splice, and unshift.\n     * The wrapper String methods are:\n     * replace and split.\n     *\n     * The wrapper methods that support shortcut fusion are:\n     * at, compact, drop, dropRight, dropWhile, filter, find, findLast, head, initial, last,\n     * map, reject, reverse, slice, tail, take, takeRight, takeRightWhile, takeWhile, and toArray\n     *\n     * The chainable wrapper methods are:\n     * after, ary, assign, assignIn, assignInWith, assignWith, at, before, bind, bindAll, bindKey,\n     * castArray, chain, chunk, commit, compact, concat, conforms, constant, countBy, create,\n     * curry, debounce, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith,\n     * drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill, filter, flatMap,\n     * flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow, flowRight,\n     * fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy, intersectionWith,\n     * invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys, mapValues,\n     * matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate,\n     * nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight,\n     * partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt,\n     * push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith,\n     * shuffle, slice, sort, sortBy, sortedUniq, sortedUniqBy, splice, spread, tail, take,\n     * takeRight, takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn,\n     * toPath, toPlainObject, transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith,\n     * unset, unshift, unzip, unzipWith, update, updateWith, values, valuesIn, without, wrap,\n     * xor, xorBy, xorWith, zip, zipObject, zipObjectDeep, and zipWith.\n     *\n     * The wrapper methods that are not chainable by default are:\n     * add, attempt, camelCase, capitalize, ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith,\n     * conformsTo, deburr, defaultTo, divide, each, eachRight, endsWith, eq, escape, escapeRegExp,\n     * every, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, floor, forEach,\n     * forEachRight, forIn, forInRight, forOwn, forOwnRight, get, gt, gte, has, hasIn, head,\n     * identity, includes, indexOf, inRange, invoke, isArguments, isArray, isArrayBuffer,\n     * isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith,\n     * isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN,\n     * isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp,\n     * isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap, isWeakSet, join,\n     * kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean, meanBy,\n     * min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop,\n     * random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size,\n     * snakeCase, some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase,\n     * startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy,\n     * template, times, toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger,\n     * toString, toUpper, trim, trimEnd, trimStart, truncate, unescape, uniqueId, upperCase,\n     * upperFirst, value, and words.\n     **/\n    <TrapAny extends { __trapAny: any }>(value: TrapAny): Collection<any> &\n      Function<any> &\n      Object<any> &\n      Primitive<any> &\n      String\n    <T extends null | undefined>(value: T): Primitive<T>\n    (value: string | null | undefined): String\n    <T extends (...args: any) => any>(value: T): Function<T>\n    <T = any>(value: List<T> | null | undefined): Collection<T>\n    <T extends object>(value: T | null | undefined): Object<T>\n    <T>(value: T): Primitive<T>\n    /**\n     * The semantic version number.\n     **/\n    VERSION: string\n    /**\n     * By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby\n     * (ERB). Change the following template settings to use alternative delimiters.\n     **/\n    templateSettings: TemplateSettings\n  }\n  /**\n   * By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby\n   * (ERB). Change the following template settings to use alternative delimiters.\n   **/\n  interface TemplateSettings {\n    /**\n     * The "escape" delimiter.\n     **/\n    escape?: RegExp\n    /**\n     * The "evaluate" delimiter.\n     **/\n    evaluate?: RegExp\n    /**\n     * An object to import into the template as local variables.\n     */\n    imports?: Dictionary<any>\n    /**\n     * The "interpolate" delimiter.\n     */\n    interpolate?: RegExp\n    /**\n     * Used to reference the data object in the template text.\n     */\n    variable?: string\n  }\n  /**\n   * Creates a cache object to store key/value pairs.\n   */\n  interface MapCache {\n    /**\n     * Removes `key` and its value from the cache.\n     * @param key The key of the value to remove.\n     * @return Returns `true` if the entry was removed successfully, else `false`.\n     */\n    delete(key: any): boolean\n    /**\n     * Gets the cached value for `key`.\n     * @param key The key of the value to get.\n     * @return Returns the cached value.\n     */\n    get(key: any): any\n    /**\n     * Checks if a cached value for `key` exists.\n     * @param key The key of the entry to check.\n     * @return Returns `true` if an entry for `key` exists, else `false`.\n     */\n    has(key: any): boolean\n    /**\n     * Sets `value` to `key` of the cache.\n     * @param key The key of the value to cache.\n     * @param value The value to cache.\n     * @return Returns the cache object.\n     */\n    set(key: any, value: any): this\n    /**\n     * Removes all key-value entries from the map.\n     */\n    clear?: () => void\n  }\n  interface MapCacheConstructor {\n    new (): MapCache\n  }\n  interface Collection<T> {\n    pop(): T | undefined\n    push(...items: T[]): this\n    shift(): T | undefined\n    sort(compareFn?: (a: T, b: T) => number): this\n    splice(start: number, deleteCount?: number, ...items: T[]): this\n    unshift(...items: T[]): this\n  }\n  interface CollectionChain<T> {\n    pop(): ExpChain<T | undefined>\n    push(...items: T[]): this\n    shift(): ExpChain<T | undefined>\n    sort(compareFn?: (a: T, b: T) => number): this\n    splice(start: number, deleteCount?: number, ...items: T[]): this\n    unshift(...items: T[]): this\n  }\n  interface Function<T extends (...args: any) => any> extends LoDashImplicitWrapper<T> {}\n  interface String extends LoDashImplicitWrapper<string> {}\n  interface Object<T> extends LoDashImplicitWrapper<T> {}\n  interface Collection<T> extends LoDashImplicitWrapper<T[]> {}\n  interface Primitive<T> extends LoDashImplicitWrapper<T> {}\n  interface FunctionChain<T extends (...args: any) => any> extends LoDashExplicitWrapper<T> {}\n  interface StringChain extends LoDashExplicitWrapper<string> {}\n  interface StringNullableChain extends LoDashExplicitWrapper<string | undefined> {}\n  interface ObjectChain<T> extends LoDashExplicitWrapper<T> {}\n  interface CollectionChain<T> extends LoDashExplicitWrapper<T[]> {}\n  interface PrimitiveChain<T> extends LoDashExplicitWrapper<T> {}\n  type NotVoid = unknown\n  type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T>\n  type ArrayIterator<T, TResult> = (value: T, index: number, collection: T[]) => TResult\n  type ListIterator<T, TResult> = (value: T, index: number, collection: List<T>) => TResult\n  type ListIteratee<T> = ListIterator<T, NotVoid> | IterateeShorthand<T>\n  type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | IterateeShorthand<T>\n  type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S\n  // Note: key should be string, not keyof T, because the actual object may contain extra properties that were not specified in the type.\n  type ObjectIterator<TObject, TResult> = (value: TObject[keyof TObject], key: string, collection: TObject) => TResult\n  type ObjectIteratee<TObject> = ObjectIterator<TObject, NotVoid> | IterateeShorthand<TObject[keyof TObject]>\n  type ObjectIterateeCustom<TObject, TResult> =\n    | ObjectIterator<TObject, TResult>\n    | IterateeShorthand<TObject[keyof TObject]>\n  type ObjectIteratorTypeGuard<TObject, S extends TObject[keyof TObject]> = (\n    value: TObject[keyof TObject],\n    key: string,\n    collection: TObject,\n  ) => value is S\n  type StringIterator<TResult> = (char: string, index: number, string: string) => TResult\n  /** @deprecated Use MemoVoidArrayIterator or MemoVoidDictionaryIterator instead. */\n  type MemoVoidIterator<T, TResult> = (prev: TResult, curr: T, indexOrKey: any, list: T[]) => void\n  /** @deprecated Use MemoListIterator or MemoObjectIterator instead. */\n  type MemoIterator<T, TResult> = (prev: TResult, curr: T, indexOrKey: any, list: T[]) => TResult\n  type MemoListIterator<T, TResult, TList> = (prev: TResult, curr: T, index: number, list: TList) => TResult\n  type MemoObjectIterator<T, TResult, TList> = (prev: TResult, curr: T, key: string, list: TList) => TResult\n  type MemoIteratorCapped<T, TResult> = (prev: TResult, curr: T) => TResult\n  type MemoIteratorCappedRight<T, TResult> = (curr: T, prev: TResult) => TResult\n  type MemoVoidArrayIterator<T, TResult> = (acc: TResult, curr: T, index: number, arr: T[]) => void\n  type MemoVoidDictionaryIterator<T, TResult> = (acc: TResult, curr: T, key: string, dict: Dictionary<T>) => void\n  type MemoVoidIteratorCapped<T, TResult> = (acc: TResult, curr: T) => void\n  type ValueIteratee<T> = ((value: T) => NotVoid) | IterateeShorthand<T>\n  type ValueIterateeCustom<T, TResult> = ((value: T) => TResult) | IterateeShorthand<T>\n  type ValueIteratorTypeGuard<T, S extends T> = (value: T) => value is S\n  type ValueKeyIteratee<T> = ((value: T, key: string) => NotVoid) | IterateeShorthand<T>\n  type ValueKeyIterateeTypeGuard<T, S extends T> = (value: T, key: string) => value is S\n  type Comparator<T> = (a: T, b: T) => boolean\n  type Comparator2<T1, T2> = (a: T1, b: T2) => boolean\n  type PropertyName = string | number | symbol\n  type PropertyPath = Many<PropertyName>\n  /** Common interface between Arrays and jQuery objects */\n  type List<T> = ArrayLike<T>\n  interface Dictionary<T> {\n    [index: string]: T\n  }\n  interface NumericDictionary<T> {\n    [index: number]: T\n  }\n  // Crazy typedef needed get _.omit to work properly with Dictionary and NumericDictionary\n  type AnyKindOfDictionary = Dictionary<unknown> | NumericDictionary<unknown>\n  type PartialShallow<T> = {\n    [P in keyof T]?: T[P] extends object ? object : T[P]\n  }\n  // For backwards compatibility\n  type LoDashImplicitArrayWrapper<T> = LoDashImplicitWrapper<T[]>\n  type LoDashImplicitNillableArrayWrapper<T> = LoDashImplicitWrapper<T[] | null | undefined>\n  type LoDashImplicitObjectWrapper<T> = LoDashImplicitWrapper<T>\n  type LoDashImplicitNillableObjectWrapper<T> = LoDashImplicitWrapper<T | null | undefined>\n  type LoDashImplicitNumberArrayWrapper = LoDashImplicitWrapper<number[]>\n  type LoDashImplicitStringWrapper = LoDashImplicitWrapper<string>\n  type LoDashExplicitArrayWrapper<T> = LoDashExplicitWrapper<T[]>\n  type LoDashExplicitNillableArrayWrapper<T> = LoDashExplicitWrapper<T[] | null | undefined>\n  type LoDashExplicitObjectWrapper<T> = LoDashExplicitWrapper<T>\n  type LoDashExplicitNillableObjectWrapper<T> = LoDashExplicitWrapper<T | null | undefined>\n  type LoDashExplicitNumberArrayWrapper = LoDashExplicitWrapper<number[]>\n  type LoDashExplicitStringWrapper = LoDashExplicitWrapper<string>\n  type DictionaryIterator<T, TResult> = ObjectIterator<Dictionary<T>, TResult>\n  type DictionaryIteratee<T> = ObjectIteratee<Dictionary<T>>\n  type DictionaryIteratorTypeGuard<T, S extends T> = ObjectIteratorTypeGuard<Dictionary<T>, S>\n  // NOTE: keys of objects at run time are always strings, even when a NumericDictionary is being iterated.\n  type NumericDictionaryIterator<T, TResult> = (value: T, key: string, collection: NumericDictionary<T>) => TResult\n  type NumericDictionaryIteratee<T> = NumericDictionaryIterator<T, NotVoid> | IterateeShorthand<T>\n  type NumericDictionaryIterateeCustom<T, TResult> = NumericDictionaryIterator<T, TResult> | IterateeShorthand<T>\n}\n', "@types/lodash/common/common.d.ts"), N(e, "/* eslint-disable */\nimport _ = require(\"../index\");\ndeclare module \"../index\" {\n    interface LoDashStatic {\n        /**\n         * Creates an array of elements split into groups the length of size. If collection can\u2019t be split evenly, the\n         * final chunk will be the remaining elements.\n         *\n         * @param array The array to process.\n         * @param size The length of each chunk.\n         * @return Returns the new array containing chunks.\n         */\n        chunk<T>(array: List<T> | null | undefined, size?: number): T[][];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.chunk\n         */\n        chunk(size?: number): Collection<T[]>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.chunk\n         */\n        chunk(size?: number): CollectionChain<T[]>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array with all falsey values removed. The values false, null, 0, \"\", undefined, and NaN are\n         * falsey.\n         *\n         * @param array The array to compact.\n         * @return Returns the new array of filtered values.\n         */\n        compact<T>(array: List<T | null | undefined | false | \"\" | 0> | null | undefined): T[];\n    }\n\n    type Truthy<T> = T extends null | undefined | false | \"\" | 0 ? never : T;\n    interface Collection<T> {\n        /**\n         * @see _.compact\n         */\n        compact(): Collection<Truthy<T>>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.compact\n         */\n        compact(): CollectionChain<Truthy<T>>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a new array concatenating `array` with any additional arrays\n         * and/or values.\n         *\n         * @category Array\n         * @param array The array to concatenate.\n         * @param [values] The values to concatenate.\n         * @returns Returns the new concatenated array.\n         * @example\n         *\n         * var array = [1];\n         * var other = _.concat(array, 2, [3], [[4]]);\n         *\n         * console.log(other);\n         * // => [1, 2, 3, [4]]\n         *\n         * console.log(array);\n         * // => [1]\n         */\n         concat<T>(array: Many<T>, ...values: Array<Many<T>>): T[];\n    }\n    interface Primitive<T> {\n        /**\n         * @see _.concat\n         */\n        concat(...values: Array<Many<T>>): Collection<T>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.concat\n         */\n        concat(...values: Array<Many<T>>): Collection<T>;\n    }\n    interface Object<T> {\n        /**\n         * @see _.concat\n         */\n        concat(...values: Array<Many<T>>): Collection<T>;\n    }\n    interface PrimitiveChain<T> {\n        /**\n         * @see _.concat\n         */\n        concat(...values: Array<Many<T>>): CollectionChain<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.concat\n         */\n        concat(...values: Array<Many<T>>): CollectionChain<T>;\n    }\n    interface ObjectChain<T> {\n        /**\n         * @see _.concat\n         */\n        concat(...values: Array<Many<T>>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array of unique array values not included in the other provided arrays using SameValueZero for\n         * equality comparisons.\n         *\n         * @param array The array to inspect.\n         * @param values The arrays of values to exclude.\n         * @return Returns the new array of filtered values.\n         */\n        difference<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.difference\n         */\n        difference(...values: Array<List<T>>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.difference\n         */\n        difference(...values: Array<List<T>>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.difference except that it accepts iteratee which is invoked for each element of array\n         * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one\n         * argument: (value).\n         *\n         * @param array The array to inspect.\n         * @param values The values to exclude.\n         * @param iteratee The iteratee invoked per element.\n         * @returns Returns the new array of filtered values.\n         */\n        differenceBy<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3>): T1[];\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, iteratee: ValueIteratee<T1 | T2 | T3 | T4>): T1[];\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy<T1, T2, T3, T4, T5>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>): T1[];\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy<T1, T2, T3, T4, T5, T6>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>): T1[];\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy<T1, T2, T3, T4, T5, T6, T7>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>): T1[];\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy<T2>(values1: List<T2>, iteratee?: ValueIteratee<T | T2>): Collection<T>;\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy(...values: Array<List<unknown> | ValueIteratee<T>>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy<T2>(values1: List<T2>, iteratee?: ValueIteratee<T | T2>): CollectionChain<T>;\n        /**\n         * @see _.differenceBy\n         */\n        differenceBy(...values: Array<List<unknown> | ValueIteratee<T>>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array of unique `array` values not included in the other\n         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)\n         * for equality comparisons.\n         *\n         * @category Array\n         * @param [values] The arrays to inspect.\n         * @param [comparator] The comparator invoked per element.\n         * @returns Returns the new array of filtered values.\n         * @example\n         *\n         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\n\n         * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);\n         * // => [{ 'x': 2, 'y': 1 }]\n         */\n        differenceWith<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2>): T1[];\n        /**\n         * @see _.differenceWith\n         */\n        differenceWith<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3>): T1[];\n        /**\n         * @see _.differenceWith\n         */\n        differenceWith<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>): T1[];\n        /**\n         * @see _.differenceWith\n         */\n        differenceWith<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.differenceWith\n         */\n        differenceWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): Collection<T>;\n        /**\n         * @see _.differenceWith\n         */\n        differenceWith<T2, T3, T4>(...values: Array<List<unknown> | Comparator2<T, never>>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.differenceWith\n         */\n        differenceWith< T2>(values: List<T2>, comparator: Comparator2<T, T2>): CollectionChain<T>;\n        /**\n         * @see _.differenceWith\n         */\n        differenceWith< T2, T3, T4>(...values: Array<List<unknown> | Comparator2<T, never>>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array with n elements dropped from the beginning.\n         *\n         * @param array The array to query.\n         * @param n The number of elements to drop.\n         * @return Returns the slice of array.\n         */\n        drop<T>(array: List<T> | null | undefined, n?: number): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.drop\n         */\n        drop(n?: number): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.drop\n         */\n        drop(n?: number): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array with n elements dropped from the end.\n         *\n         * @param array The array to query.\n         * @param n The number of elements to drop.\n         * @return Returns the slice of array.\n         */\n        dropRight<T>(array: List<T> | null | undefined, n?: number): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.dropRight\n         */\n        dropRight(n?: number): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.dropRight\n         */\n        dropRight(n?: number): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate\n         * returns falsey. The predicate is invoked with three arguments: (value, index, array).\n         *\n         * @param array The array to query.\n         * @param predicate The function invoked per iteration.\n         * @return Returns the slice of array.\n         */\n        dropRightWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.dropRightWhile\n         */\n        dropRightWhile(predicate?: ListIteratee<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.dropRightWhile\n         */\n        dropRightWhile(predicate?: ListIteratee<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate\n         * returns falsey. The predicate is invoked with three arguments: (value, index, array).\n         *\n         * @param array The array to query.\n         * @param predicate The function invoked per iteration.\n         * @return Returns the slice of array.\n         */\n        dropWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.dropWhile\n         */\n        dropWhile(predicate?: ListIteratee<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.dropWhile\n         */\n        dropWhile(predicate?: ListIteratee<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Fills elements of array with value from start up to, but not including, end.\n         *\n         * Note: This method mutates array.\n         *\n         * @param array The array to fill.\n         * @param value The value to fill array with.\n         * @param start The start position.\n         * @param end The end position.\n         * @return Returns array.\n         */\n        fill<T>(array: any[] | null | undefined, value: T): T[];\n        /**\n         * @see _.fill\n         */\n        fill<T>(array: List<any> | null | undefined, value: T): List<T>;\n        /**\n         * @see _.fill\n         */\n        fill<T, U>(array: U[] | null | undefined, value: T, start?: number, end?: number): Array<T | U>;\n        /**\n         * @see _.fill\n         */\n        fill<T, U>(array: List<U> | null | undefined, value: T, start?: number, end?: number): List<T | U>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.fill\n         */\n        fill<U>(value: U, start?: number, end?: number): Collection<T | U>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.fill\n         */\n        fill<U>(value: U, start?: number, end?: number): CollectionChain<T | U>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.find except that it returns the index of the first element predicate returns truthy\n         * for instead of the element itself.\n         *\n         * @param array The array to search.\n         * @param predicate The function invoked per iteration.\n         * @param fromIndex The index to search from.\n         * @return Returns the index of the found element, else -1.\n         */\n        findIndex<T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.findIndex\n         */\n        findIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.findIndex\n         */\n        findIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.findIndex except that it iterates over elements of collection from right to left.\n         *\n         * @param array The array to search.\n         * @param predicate The function invoked per iteration.\n         * @param fromIndex The index to search from.\n         * @return Returns the index of the found element, else -1.\n         */\n        findLastIndex<T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.findLastIndex\n         */\n        findLastIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.findLastIndex\n         */\n        findLastIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * @see _.head\n         */\n        first: LoDashStatic[\"head\"];\n    }\n    interface String {\n        /**\n         * @see _.first\n         */\n        first(): string | undefined;\n    }\n    interface StringChain {\n        /**\n         * @see _.first\n         */\n        first(): StringNullableChain;\n    }\n    interface StringNullableChain {\n        /**\n         * @see _.first\n         */\n        first(): StringNullableChain;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.first\n         */\n        first(): T | undefined;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.first\n         */\n        first(): ExpChain<T | undefined>;\n    }\n    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}\n    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}\n    interface LoDashStatic {\n        /**\n         * Flattens `array` a single level deep.\n         *\n         * @param array The array to flatten.\n         * @return Returns the new flattened array.\n         */\n        flatten<T>(array: List<Many<T>> | null | undefined): T[];\n    }\n    interface String {\n        /**\n         * @see _.flatten\n         */\n        flatten(): Collection<string>;\n    }\n    interface StringChain {\n        /**\n         * @see _.flatten\n         */\n        flatten(): CollectionChain<string>;\n    }\n    interface StringNullableChain {\n        /**\n         * @see _.flatten\n         */\n        flatten(): CollectionChain<string>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.flatten\n         */\n        flatten(): T extends Many<infer U> ? Collection<U> : Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.flatten\n         */\n        flatten(): T extends Many<infer U> ? CollectionChain<U> : CollectionChain<T>;\n    }\n\n    type Flat<T> = T extends string ? T : (T extends List<any> ? never : T);\n\n    interface LoDashStatic {\n        /**\n         * Recursively flattens a nested array.\n         *\n         * @param array The array to recursively flatten.\n         * @return Returns the new flattened array.\n         */\n        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): Array<Flat<T>>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.flattenDeep\n         */\n        flattenDeep(): T extends ListOfRecursiveArraysOrValues<infer U> ? Collection<Flat<U>> : Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.flattenDeep\n         */\n        flattenDeep(): T extends ListOfRecursiveArraysOrValues<infer U> ? CollectionChain<Flat<U>> : CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Recursively flatten array up to depth times.\n         *\n         * @param array The array to recursively flatten.\n         * @param number The maximum recursion depth.\n         * @return Returns the new flattened array.\n         */\n        flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.flattenDepth\n         */\n        flattenDepth(depth?: number): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.flattenDepth\n         */\n        flattenDepth(depth?: number): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * The inverse of `_.toPairs`; this method returns an object composed\n         * from key-value `pairs`.\n         *\n         * @category Array\n         * @param pairs The key-value pairs.\n         * @returns Returns the new object.\n         * @example\n         *\n         * _.fromPairs([['fred', 30], ['barney', 40]]);\n         * // => { 'fred': 30, 'barney': 40 }\n         */\n        fromPairs<T>(pairs: List<[PropertyName, T]> | null | undefined): Dictionary<T>;\n        /**\n         * @see _.fromPairs\n         */\n        fromPairs(pairs: List<any[]> | null | undefined): Dictionary<any>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.fromPairs\n         */\n        fromPairs(): Object<Dictionary<T extends [PropertyName, infer U] ? U : any>>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.fromPairs\n         */\n        fromPairs(): ObjectChain<Dictionary<T extends [PropertyName, infer U] ? U : any>>;\n    }\n    interface LoDashStatic {\n        /**\n         * Gets the first element of array.\n         *\n         * @alias _.first\n         *\n         * @param array The array to query.\n         * @return Returns the first element of array.\n         */\n        head<T>(array: List<T> | null | undefined): T | undefined;\n    }\n    interface String {\n        /**\n         * @see _.head\n         */\n        head(): string | undefined;\n    }\n    interface StringChain {\n        /**\n         * @see _.head\n         */\n        head(): StringNullableChain;\n    }\n    interface StringNullableChain {\n        /**\n         * @see _.head\n         */\n        head(): StringNullableChain;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.head\n         */\n        head(): T | undefined;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.head\n         */\n        head(): ExpChain<T | undefined>;\n    }\n    interface LoDashStatic {\n        /**\n         * Gets the index at which the first occurrence of `value` is found in `array`\n         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)\n         * for equality comparisons. If `fromIndex` is negative, it's used as the offset\n         * from the end of `array`.\n         *\n         * @category Array\n         * @param array The array to search.\n         * @param value The value to search for.\n         * @param [fromIndex=0] The index to search from.\n         * @returns Returns the index of the matched value, else `-1`.\n         * @example\n         *\n         * _.indexOf([1, 2, 1, 2], 2);\n         * // => 1\n         *\n         * // using `fromIndex`\n         * _.indexOf([1, 2, 1, 2], 2, 2);\n         * // => 3\n         */\n        indexOf<T>(array: List<T> | null | undefined, value: T, fromIndex?: number): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.indexOf\n         */\n        indexOf(value: T, fromIndex?: number): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.indexOf\n         */\n        indexOf(value: T, fromIndex?: number): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * Gets all but the last element of array.\n         *\n         * @param array The array to query.\n         * @return Returns the slice of array.\n         */\n        initial<T>(array: List<T> | null | undefined): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.initial\n         */\n        initial(): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.initial\n         */\n        initial(): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for\n         * equality comparisons.\n         *\n         * @param arrays The arrays to inspect.\n         * @return Returns the new array of shared values.\n         */\n        intersection<T>(...arrays: Array<List<T> | null | undefined>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.intersection\n         */\n        intersection(...arrays: Array<List<T> | null | undefined>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.intersection\n         */\n        intersection(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.intersection` except that it accepts `iteratee`\n         * which is invoked for each element of each `arrays` to generate the criterion\n         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).\n         *\n         * @category Array\n         * @param [arrays] The arrays to inspect.\n         * @param [iteratee=_.identity] The iteratee invoked per element.\n         * @returns Returns the new array of shared values.\n         * @example\n         *\n         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);\n         * // => [2.1]\n         *\n         * // using the `_.property` iteratee shorthand\n         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');\n         * // => [{ 'x': 1 }]\n         */\n        intersectionBy<T1, T2>(array: List<T1> | null, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];\n        /**\n         * @see _.intersectionBy\n         */\n        intersectionBy<T1, T2, T3>(array: List<T1> | null, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3>): T1[];\n        /**\n         * @see _.intersectionBy\n         */\n        intersectionBy<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>): T1[];\n        /**\n         * @see _.intersectionBy\n         */\n        intersectionBy<T>(array?: List<T> | null, ...values: Array<List<T>>): T[];\n        /**\n         * @see _.intersectionBy\n         */\n        intersectionBy<T>(...values: Array<List<T> | ValueIteratee<T>>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.intersectionBy\n         */\n        intersectionBy<T2>(values: List<T2>, iteratee: ValueIteratee<T | T2>): Collection<T>;\n        /**\n         * @see _.intersectionBy\n         */\n        intersectionBy(...values: Array<List<unknown> | ValueIteratee<T>>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.intersectionBy\n         */\n        intersectionBy<T2>(values: List<T2>, iteratee: ValueIteratee<T | T2>): CollectionChain<T>;\n        /**\n         * @see _.intersectionBy\n         */\n        intersectionBy(...values: Array<List<unknown> | ValueIteratee<T>>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array of unique `array` values not included in the other\n         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)\n         * for equality comparisons.\n         *\n         * @category Array\n         * @param [values] The arrays to inspect.\n         * @param [comparator] The comparator invoked per element.\n         * @returns Returns the new array of filtered values.\n         * @example\n         *\n         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\n         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];\n\n         * _.intersectionWith(objects, others, _.isEqual);\n         * // => [{ 'x': 1, 'y': 2 }]\n         */\n        intersectionWith<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2>): T1[];\n        /**\n         * @see _.intersectionWith\n         */\n        intersectionWith<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3>): T1[];\n        /**\n         * @see _.intersectionWith\n         */\n        intersectionWith<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>): T1[];\n        /**\n         * @see _.intersectionWith\n         */\n        intersectionWith<T>(array?: List<T> | null, ...values: Array<List<T> | Comparator2<T, never>>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.intersectionWith\n         */\n        intersectionWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): Collection<T>;\n        /**\n         * @see _.intersectionWith\n         */\n        intersectionWith(...values: Array<List<unknown> | Comparator2<T,  never>>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.intersectionWith\n         */\n        intersectionWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): CollectionChain<T>;\n        /**\n         * @see _.intersectionWith\n         */\n        intersectionWith(...values: Array<List<unknown> | Comparator2<T,  never>>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Converts all elements in `array` into a string separated by `separator`.\n         *\n         * @param array The array to convert.\n         * @param separator The element separator.\n         * @returns Returns the joined string.\n         */\n        join(array: List<any> | null | undefined, separator?: string): string;\n    }\n    interface String {\n        /**\n         * @see _.join\n         */\n        join(separator?: string): string;\n    }\n    interface StringChain {\n        /**\n         * @see _.join\n         */\n        join(separator?: string): StringChain;\n    }\n    interface StringNullableChain {\n        /**\n         * @see _.join\n         */\n        join(separator?: string): StringChain;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.join\n         */\n        join(separator?: string): string;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.join\n         */\n        join(separator?: string): StringChain;\n    }\n    interface LoDashStatic {\n        /**\n         * Gets the last element of array.\n         *\n         * @param array The array to query.\n         * @return Returns the last element of array.\n         */\n        last<T>(array: List<T> | null | undefined): T | undefined;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.last\n         */\n        last(): T | undefined;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.last\n         */\n        last(): ExpChain<T | undefined>;\n    }\n    interface String {\n        /**\n         * @see _.last\n         */\n        last(): string | undefined;\n    }\n    interface StringChain {\n        /**\n         * @see _.last\n         */\n        last(): StringNullableChain;\n    }\n    interface StringNullableChain {\n        /**\n         * @see _.last\n         */\n        last(): StringNullableChain;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.indexOf except that it iterates over elements of array from right to left.\n         *\n         * @param array The array to search.\n         * @param value The value to search for.\n         * @param fromIndex The index to search from or true to perform a binary search on a sorted array.\n         * @return Returns the index of the matched value, else -1.\n         */\n        lastIndexOf<T>(array: List<T> | null | undefined, value: T, fromIndex?: true|number): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.lastIndexOf\n         */\n        lastIndexOf(value: T, fromIndex?: true|number): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.lastIndexOf\n         */\n        lastIndexOf(value: T, fromIndex?: true|number): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.\n         *\n         * @param array array The array to query.\n         * @param value The index of the element to return.\n         * @return Returns the nth element of `array`.\n         */\n        nth<T>(array: List<T> | null | undefined, n?: number): T | undefined;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.nth\n         */\n        nth(n?: number): T | undefined;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.nth\n         */\n        nth(n?: number): ExpChain<T | undefined>;\n    }\n    interface LoDashStatic {\n        /**\n         * Removes all provided values from array using SameValueZero for equality comparisons.\n         *\n         * Note: Unlike _.without, this method mutates array.\n         *\n         * @param array The array to modify.\n         * @param values The values to remove.\n         * @return Returns array.\n         */\n        pull<T>(array: T[], ...values: T[]): T[];\n        /**\n         * @see _.pull\n         */\n        pull<T>(array: List<T>, ...values: T[]): List<T>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.pull\n         */\n        pull(...values: T[]): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.pull\n         */\n        pull(...values: T[]): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.pull` except that it accepts an array of values to remove.\n         *\n         * **Note:** Unlike `_.difference`, this method mutates `array`.\n         *\n         * @category Array\n         * @param array The array to modify.\n         * @param values The values to remove.\n         * @returns Returns `array`.\n         * @example\n         *\n         * var array = [1, 2, 3, 1, 2, 3];\n         *\n         * _.pull(array, [2, 3]);\n         * console.log(array);\n         * // => [1, 1]\n         */\n        pullAll<T>(array: T[], values?: List<T>): T[];\n        /**\n         * @see _.pullAll\n         */\n        pullAll<T>(array: List<T>, values?: List<T>): List<T>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.pullAll\n         */\n        pullAll(values?: List<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.pullAll\n         */\n        pullAll(values?: List<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.pullAll` except that it accepts `iteratee` which is\n         * invoked for each element of `array` and `values` to to generate the criterion\n         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).\n         *\n         * **Note:** Unlike `_.differenceBy`, this method mutates `array`.\n         *\n         * @category Array\n         * @param array The array to modify.\n         * @param values The values to remove.\n         * @param [iteratee=_.identity] The iteratee invoked per element.\n         * @returns Returns `array`.\n         * @example\n         *\n         * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];\n         *\n         * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');\n         * console.log(array);\n         * // => [{ 'x': 2 }]\n         */\n        pullAllBy<T>(array: T[], values?: List<T>, iteratee?: ValueIteratee<T>): T[];\n        /**\n         * @see _.pullAllBy\n         */\n        pullAllBy<T>(array: List<T>, values?: List<T>, iteratee?: ValueIteratee<T>): List<T>;\n        /**\n         * @see _.pullAllBy\n         */\n        pullAllBy<T1, T2>(array: T1[], values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];\n        /**\n         * @see _.pullAllBy\n         */\n        pullAllBy<T1, T2>(array: List<T1>, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): List<T1>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.pullAllBy\n         */\n        pullAllBy<T2>(values?: List<T2>, iteratee?: ValueIteratee<T | T2>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.pullAllBy\n         */\n        pullAllBy<T2>(values?: List<T2>, iteratee?: ValueIteratee<T | T2>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.pullAll` except that it accepts `comparator` which is\n         * invoked to compare elements of array to values. The comparator is invoked with\n         * two arguments: (arrVal, othVal).\n         *\n         * **Note:** Unlike `_.differenceWith`, this method mutates `array`.\n         *\n         * @category Array\n         * @param array The array to modify.\n         * @param values The values to remove.\n         * @param [iteratee=_.identity] The iteratee invoked per element.\n         * @returns Returns `array`.\n         * @example\n         *\n         * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];\n         *\n         * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);\n         * console.log(array);\n         * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]\n         */\n        pullAllWith<T>(array: T[], values?: List<T>, comparator?: Comparator<T>): T[];\n        /**\n         * @see _.pullAllWith\n         */\n        pullAllWith<T>(array: List<T>, values?: List<T>, comparator?: Comparator<T>): List<T>;\n        /**\n         * @see _.pullAllWith\n         */\n        pullAllWith<T1, T2>(array: T1[], values: List<T2>, comparator: Comparator2<T1, T2>): T1[];\n        /**\n         * @see _.pullAllWith\n         */\n        pullAllWith<T1, T2>(array: List<T1>, values: List<T2>, comparator: Comparator2<T1, T2>): List<T1>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.pullAllWith\n         */\n        pullAllWith<T2>(values?: List<T2>, comparator?: Comparator2<T, T2>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.pullAllWith\n         */\n        pullAllWith<T2>(values?: List<T2>, comparator?: Comparator2<T, T2>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.\n         * Indexes may be specified as an array of indexes or as individual arguments.\n         *\n         * Note: Unlike _.at, this method mutates array.\n         *\n         * @param array The array to modify.\n         * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.\n         * @return Returns the new array of removed elements.\n         */\n        pullAt<T>(array: T[], ...indexes: Array<Many<number>>): T[];\n        /**\n         * @see _.pullAt\n         */\n        pullAt<T>(array: List<T>, ...indexes: Array<Many<number>>): List<T>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.pullAt\n         */\n        pullAt(...indexes: Array<Many<number>>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.pullAt\n         */\n        pullAt(...indexes: Array<Many<number>>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Removes all elements from array that predicate returns truthy for and returns an array of the removed\n         * elements. The predicate is invoked with three arguments: (value, index, array).\n         *\n         * Note: Unlike _.filter, this method mutates array.\n         *\n         * @param array The array to modify.\n         * @param predicate The function invoked per iteration.\n         * @return Returns the new array of removed elements.\n         */\n        remove<T>(array: List<T>, predicate?: ListIteratee<T>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.remove\n         */\n        remove(predicate?: ListIteratee<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.remove\n         */\n        remove(predicate?: ListIteratee<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Reverses `array` so that the first element becomes the last, the second\n         * element becomes the second to last, and so on.\n         *\n         * **Note:** This method mutates `array` and is based on\n         * [`Array#reverse`](https://mdn.io/Array/reverse).\n         *\n         * @category Array\n         * @returns Returns `array`.\n         * @example\n         *\n         * var array = [1, 2, 3];\n         *\n         * _.reverse(array);\n         * // => [3, 2, 1]\n         *\n         * console.log(array);\n         * // => [3, 2, 1]\n         */\n        reverse<TList extends List<any>>(array: TList): TList;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array from start up to, but not including, end.\n         *\n         * @param array The array to slice.\n         * @param start The start position.\n         * @param end The end position.\n         * @return Returns the slice of array.\n         */\n        slice<T>(array: List<T> | null | undefined, start?: number, end?: number): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.slice\n         */\n        slice(start?: number, end?: number): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.slice\n         */\n        slice(start?: number, end?: number): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Uses a binary search to determine the lowest index at which `value` should\n         * be inserted into `array` in order to maintain its sort order.\n         *\n         * @category Array\n         * @param array The sorted array to inspect.\n         * @param value The value to evaluate.\n         * @returns Returns the index at which `value` should be inserted into `array`.\n         * @example\n         *\n         * _.sortedIndex([30, 50], 40);\n         * // => 1\n         *\n         * _.sortedIndex([4, 5], 4);\n         * // => 0\n         */\n        sortedIndex<T>(array: List<T> | null | undefined, value: T): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedIndex\n         */\n        sortedIndex(value: T): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedIndex\n         */\n        sortedIndex(value: T): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * Uses a binary search to determine the lowest index at which `value` should\n         * be inserted into `array` in order to maintain its sort order.\n         *\n         * @category Array\n         * @param array The sorted array to inspect.\n         * @param value The value to evaluate.\n         * @returns Returns the index at which `value` should be inserted into `array`.\n         * @example\n         *\n         * _.sortedIndex([30, 50], 40);\n         * // => 1\n         *\n         * _.sortedIndex([4, 5], 4);\n         * // => 0\n         */\n        sortedIndex<T>(array: List<T> | null | undefined, value: T): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedIndex\n         */\n        sortedIndex(value: T): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedIndex\n         */\n        sortedIndex(value: T): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.sortedIndex` except that it accepts `iteratee`\n         * which is invoked for `value` and each element of `array` to compute their\n         * sort ranking. The iteratee is invoked with one argument: (value).\n         *\n         * @category Array\n         * @param array The sorted array to inspect.\n         * @param value The value to evaluate.\n         * @param [iteratee=_.identity] The iteratee invoked per element.\n         * @returns Returns the index at which `value` should be inserted into `array`.\n         * @example\n         *\n         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };\n         *\n         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));\n         * // => 1\n         *\n         * // using the `_.property` iteratee shorthand\n         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');\n         * // => 0\n         */\n        sortedIndexBy<T>(array: List<T> | null | undefined, value: T, iteratee?: ValueIteratee<T>): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedIndexBy\n         */\n        sortedIndexBy(value: T, iteratee?: ValueIteratee<T>): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedIndexBy\n         */\n        sortedIndexBy(value: T, iteratee?: ValueIteratee<T>): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.indexOf` except that it performs a binary\n         * search on a sorted `array`.\n         *\n         * @category Array\n         * @param array The array to search.\n         * @param value The value to search for.\n         * @returns Returns the index of the matched value, else `-1`.\n         * @example\n         *\n         * _.sortedIndexOf([1, 1, 2, 2], 2);\n         * // => 2\n         */\n        sortedIndexOf<T>(array: List<T> | null | undefined, value: T): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedIndexOf\n         */\n        sortedIndexOf(value: T): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedIndexOf\n         */\n        sortedIndexOf(value: T): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.sortedIndex` except that it returns the highest\n         * index at which `value` should be inserted into `array` in order to\n         * maintain its sort order.\n         *\n         * @category Array\n         * @param array The sorted array to inspect.\n         * @param value The value to evaluate.\n         * @returns Returns the index at which `value` should be inserted into `array`.\n         * @example\n         *\n         * _.sortedLastIndex([4, 5], 4);\n         * // => 1\n         */\n        sortedLastIndex<T>(array: List<T> | null | undefined, value: T): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedLastIndex\n         */\n        sortedLastIndex(value: T): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedLastIndex\n         */\n        sortedLastIndex(value: T): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`\n         * which is invoked for `value` and each element of `array` to compute their\n         * sort ranking. The iteratee is invoked with one argument: (value).\n         *\n         * @category Array\n         * @param array The sorted array to inspect.\n         * @param value The value to evaluate.\n         * @param [iteratee=_.identity] The iteratee invoked per element.\n         * @returns Returns the index at which `value` should be inserted into `array`.\n         * @example\n         *\n         * // using the `_.property` iteratee shorthand\n         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');\n         * // => 1\n         */\n        sortedLastIndexBy<T>(array: List<T> | null | undefined, value: T, iteratee: ValueIteratee<T>): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedLastIndexBy\n         */\n        sortedLastIndexBy(value: T, iteratee: ValueIteratee<T>): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedLastIndexBy\n         */\n        sortedLastIndexBy(value: T, iteratee: ValueIteratee<T>): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.lastIndexOf` except that it performs a binary\n         * search on a sorted `array`.\n         *\n         * @category Array\n         * @param array The array to search.\n         * @param value The value to search for.\n         * @returns Returns the index of the matched value, else `-1`.\n         * @example\n         *\n         * _.sortedLastIndexOf([1, 1, 2, 2], 2);\n         * // => 3\n         */\n        sortedLastIndexOf<T>(array: List<T> | null | undefined, value: T): number;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedLastIndexOf\n         */\n        sortedLastIndexOf(value: T): number;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedLastIndexOf\n         */\n        sortedLastIndexOf(value: T): PrimitiveChain<number>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.uniq` except that it's designed and optimized\n         * for sorted arrays.\n         *\n         * @category Array\n         * @param array The array to inspect.\n         * @returns Returns the new duplicate free array.\n         * @example\n         *\n         * _.sortedUniq([1, 1, 2]);\n         * // => [1, 2]\n         */\n        sortedUniq<T>(array: List<T> | null | undefined): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedUniq\n         */\n        sortedUniq(): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedUniq\n         */\n        sortedUniq(): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.uniqBy` except that it's designed and optimized\n         * for sorted arrays.\n         *\n         * @category Array\n         * @param array The array to inspect.\n         * @param [iteratee] The iteratee invoked per element.\n         * @returns Returns the new duplicate free array.\n         * @example\n         *\n         * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);\n         * // => [1.1, 2.2]\n         */\n        sortedUniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.sortedUniqBy\n         */\n        sortedUniqBy(iteratee: ValueIteratee<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.sortedUniqBy\n         */\n        sortedUniqBy(iteratee: ValueIteratee<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Gets all but the first element of array.\n         *\n         * @param array The array to query.\n         * @return Returns the slice of array.\n         */\n        tail<T>(array: List<T> | null | undefined): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.tail\n         */\n        tail(): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.tail\n         */\n        tail(): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array with n elements taken from the beginning.\n         *\n         * @param array The array to query.\n         * @param n The number of elements to take.\n         * @return Returns the slice of array.\n         */\n        take<T>(array: List<T> | null | undefined, n?: number): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.take\n         */\n        take(n?: number): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.take\n         */\n        take(n?: number): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array with n elements taken from the end.\n         *\n         * @param array The array to query.\n         * @param n The number of elements to take.\n         * @return Returns the slice of array.\n         */\n        takeRight<T>(array: List<T> | null | undefined, n?: number): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.takeRight\n         */\n        takeRight(n?: number): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.takeRight\n         */\n        takeRight(n?: number): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns\n         * falsey. The predicate is invoked with three arguments: (value, index, array).\n         *\n         * @param array The array to query.\n         * @param predicate The function invoked per iteration.\n         * @return Returns the slice of array.\n         */\n        takeRightWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.takeRightWhile\n         */\n        takeRightWhile(predicate?: ListIteratee<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.takeRightWhile\n         */\n        takeRightWhile(predicate?: ListIteratee<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns\n         * falsey. The predicate is invoked with three arguments: (value, index, array).\n         *\n         * @param array The array to query.\n         * @param predicate The function invoked per iteration.\n         * @return Returns the slice of array.\n         */\n        takeWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.takeWhile\n         */\n        takeWhile(predicate?: ListIteratee<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.takeWhile\n         */\n        takeWhile(predicate?: ListIteratee<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for\n         * equality comparisons.\n         *\n         * @param arrays The arrays to inspect.\n         * @return Returns the new array of combined values.\n         */\n        union<T>(...arrays: Array<List<T> | null | undefined>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.union\n         */\n        union(...arrays: Array<List<T> | null | undefined>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.union\n         */\n        union(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.union` except that it accepts `iteratee` which is\n         * invoked for each element of each `arrays` to generate the criterion by which\n         * uniqueness is computed. The iteratee is invoked with one argument: (value).\n         *\n         * @param arrays The arrays to inspect.\n         * @param iteratee The iteratee invoked per element.\n         * @return Returns the new array of combined values.\n         */\n        unionBy<T>(arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];\n        /**\n         * @see _.unionBy\n         */\n        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];\n        /**\n         * @see _.unionBy\n         */\n        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];\n        /**\n         * @see _.unionBy\n         */\n        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];\n        /**\n         * @see _.unionBy\n         */\n        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, arrays5: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.unionBy\n         */\n        unionBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Collection<T>;\n        /**\n         * @see _.unionBy\n         */\n        unionBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.unionBy\n         */\n        unionBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): CollectionChain<T>;\n        /**\n         * @see _.unionBy\n         */\n        unionBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.union` except that it accepts `comparator` which\n         * is invoked to compare elements of `arrays`. The comparator is invoked\n         * with two arguments: (arrVal, othVal).\n         *\n         * @category Array\n         * @param [arrays] The arrays to inspect.\n         * @param [comparator] The comparator invoked per element.\n         * @returns Returns the new array of combined values.\n         * @example\n         *\n         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\n         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];\n         *\n         * _.unionWith(objects, others, _.isEqual);\n         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]\n         */\n        unionWith<T>(arrays: List<T> | null | undefined, comparator?: Comparator<T>): T[];\n        /**\n         * @see _.unionWith\n         */\n        unionWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T>): T[];\n        /**\n         * @see _.unionWith\n         */\n        unionWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.unionWith\n         */\n        unionWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): Collection<T>;\n        /**\n         * @see _.unionWith\n         */\n        unionWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.unionWith\n         */\n        unionWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): CollectionChain<T>;\n        /**\n         * @see _.unionWith\n         */\n        unionWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates a duplicate-free version of an array, using\n         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)\n         * for equality comparisons, in which only the first occurrence of each element\n         * is kept.\n         *\n         * @category Array\n         * @param array The array to inspect.\n         * @returns Returns the new duplicate free array.\n         * @example\n         *\n         * _.uniq([2, 1, 2]);\n         * // => [2, 1]\n         */\n        uniq<T>(array: List<T> | null | undefined): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.uniq\n         */\n        uniq(): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.uniq\n         */\n        uniq(): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.uniq` except that it accepts `iteratee` which is\n         * invoked for each element in `array` to generate the criterion by which\n         * uniqueness is computed. The iteratee is invoked with one argument: (value).\n         *\n         * @category Array\n         * @param array The array to inspect.\n         * @param [iteratee=_.identity] The iteratee invoked per element.\n         * @returns Returns the new duplicate free array.\n         * @example\n         *\n         * _.uniqBy([2.1, 1.2, 2.3], Math.floor);\n         * // => [2.1, 1.2]\n         *\n         * // using the `_.property` iteratee shorthand\n         * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');\n         * // => [{ 'x': 1 }, { 'x': 2 }]\n         */\n        uniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.uniqBy\n         */\n        uniqBy(iteratee: ValueIteratee<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.uniqBy\n         */\n        uniqBy(iteratee: ValueIteratee<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.uniq` except that it accepts `comparator` which\n         * is invoked to compare elements of `array`. The comparator is invoked with\n         * two arguments: (arrVal, othVal).\n         *\n         * @category Array\n         * @param array The array to inspect.\n         * @param [comparator] The comparator invoked per element.\n         * @returns Returns the new duplicate free array.\n         * @example\n         *\n         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];\n         *\n         * _.uniqWith(objects, _.isEqual);\n         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]\n         */\n        uniqWith<T>(array: List<T> | null | undefined, comparator?: Comparator<T>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.uniqWith\n         */\n        uniqWith(comparator?: Comparator<T>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.uniqWith\n         */\n        uniqWith(comparator?: Comparator<T>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.zip except that it accepts an array of grouped elements and creates an array\n         * regrouping the elements to their pre-zip configuration.\n         *\n         * @param array The array of grouped elements to process.\n         * @return Returns the new array of regrouped elements.\n         */\n        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.unzip\n         */\n        unzip(): T extends List<infer U> ? Collection<U[]> : unknown;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.unzip\n         */\n        unzip(): T extends List<infer U> ? CollectionChain<U[]> : unknown;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be\n         * combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).\n         *\n         * @param array The array of grouped elements to process.\n         * @param iteratee The function to combine regrouped values.\n         * @return Returns the new array of regrouped elements.\n         */\n        unzipWith<T, TResult>(array: List<List<T>> | null | undefined, iteratee: (...values: T[]) => TResult): TResult[];\n        /**\n         * @see _.unzipWith\n         */\n        unzipWith<T>(array: List<List<T>> | null | undefined): T[][];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.unzipWith\n         */\n        unzipWith<TResult>(iteratee: (...values: Array<T extends List<infer U> ? U : unknown>) => TResult): Collection<TResult>;\n        /**\n         * @see _.unzipWith\n         */\n        unzipWith(): T extends List<infer U> ? Collection<U[]> : unknown;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.unzipWith\n         */\n        unzipWith<TResult>(iteratee: (...values: Array<T extends List<infer U> ? U : unknown>) => TResult): CollectionChain<TResult>;\n        /**\n         * @see _.unzipWith\n         */\n        unzipWith(): T extends List<infer U> ? CollectionChain<U[]> : unknown;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array excluding all provided values using SameValueZero for equality comparisons.\n         *\n         * @param array The array to filter.\n         * @param values The values to exclude.\n         * @return Returns the new array of filtered values.\n         */\n        without<T>(array: List<T> | null | undefined, ...values: T[]): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.without\n         */\n        without(...values: T[]): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.without\n         */\n        without(...values: T[]): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array of unique values that is the symmetric difference of the provided arrays.\n         *\n         * @param arrays The arrays to inspect.\n         * @return Returns the new array of values.\n         */\n        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.xor\n         */\n        xor(...arrays: Array<List<T> | null | undefined>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.xor\n         */\n        xor(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.xor` except that it accepts `iteratee` which is\n         * invoked for each element of each `arrays` to generate the criterion by which\n         * uniqueness is computed. The iteratee is invoked with one argument: (value).\n         *\n         * @category Array\n         * @param [arrays] The arrays to inspect.\n         * @param [iteratee=_.identity] The iteratee invoked per element.\n         * @returns Returns the new array of values.\n         * @example\n         *\n         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);\n         * // => [1.2, 4.3]\n         *\n         * // using the `_.property` iteratee shorthand\n         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');\n         * // => [{ 'x': 2 }]\n         */\n        xorBy<T>(arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];\n        /**\n         * @see _.xorBy\n         */\n        xorBy<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];\n        /**\n         * @see _.xorBy\n         */\n        xorBy<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.xorBy\n         */\n        xorBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Collection<T>;\n        /**\n         * @see _.xorBy\n         */\n        xorBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.xorBy\n         */\n        xorBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): CollectionChain<T>;\n        /**\n         * @see _.xorBy\n         */\n        xorBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like `_.xor` except that it accepts `comparator` which is\n         * invoked to compare elements of `arrays`. The comparator is invoked with\n         * two arguments: (arrVal, othVal).\n         *\n         * @category Array\n         * @param [arrays] The arrays to inspect.\n         * @param [comparator] The comparator invoked per element.\n         * @returns Returns the new array of values.\n         * @example\n         *\n         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\n         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];\n         *\n         * _.xorWith(objects, others, _.isEqual);\n         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]\n         */\n        xorWith<T>(arrays: List<T> | null | undefined, comparator?: Comparator<T>): T[];\n        /**\n         * @see _.xorWith\n         */\n        xorWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T>): T[];\n        /**\n         * @see _.xorWith\n         */\n        xorWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined>): T[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.xorWith\n         */\n        xorWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): Collection<T>;\n        /**\n         * @see _.xorWith\n         */\n        xorWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): Collection<T>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.xorWith\n         */\n        xorWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): CollectionChain<T>;\n        /**\n         * @see _.xorWith\n         */\n        xorWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): CollectionChain<T>;\n    }\n    interface LoDashStatic {\n        /**\n         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,\n         * the second of which contains the second elements of the given arrays, and so on.\n         *\n         * @param arrays The arrays to process.\n         * @return Returns the new array of grouped elements.\n         */\n        zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): Array<[T1 | undefined, T2 | undefined]>;\n        /**\n         * @see _.zip\n         */\n        zip<T1, T2, T3>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>): Array<[T1 | undefined, T2 | undefined, T3 | undefined]>;\n        /**\n         * @see _.zip\n         */\n        zip<T1, T2, T3, T4>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;\n        /**\n         * @see _.zip\n         */\n        zip<T1, T2, T3, T4, T5>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>;\n        /**\n         * @see _.zip\n         */\n        zip<T>(...arrays: Array<List<T> | null | undefined>): Array<Array<T | undefined>>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.zip\n         */\n        zip<T2>(arrays2: List<T2>): Collection<[T | undefined, T2 | undefined]>;\n        /**\n         * @see _.zip\n         */\n        zip(...arrays: Array<List<T> | null | undefined>): Collection<Array<T | undefined>>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.zip\n         */\n        zip<T2>(arrays2: List<T2>): CollectionChain<[T | undefined, T2 | undefined]>;\n        /**\n         * @see _.zip\n         */\n        zip(...arrays: Array<List<T> | null | undefined>): CollectionChain<Array<T | undefined>>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.fromPairs except that it accepts two arrays, one of property\n         * identifiers and one of corresponding values.\n         *\n         * @param props The property names.\n         * @param values The property values.\n         * @return Returns the new object.\n         */\n        zipObject<T>(props: List<PropertyName>, values: List<T>): Dictionary<T>;\n        /**\n         * @see _.zipObject\n         */\n        zipObject(props?: List<PropertyName>): Dictionary<undefined>;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.zipObject\n         */\n        zipObject<U>(values: List<U>): Object<Dictionary<U>>;\n        /**\n         * @see _.zipObject\n         */\n        zipObject(): Object<Dictionary<undefined>>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.zipObject\n         */\n        zipObject<U>(values: List<U>): ObjectChain<Dictionary<U>>;\n        /**\n         * @see _.zipObject\n         */\n        zipObject(): ObjectChain<Dictionary<undefined>>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.zipObject except that it supports property paths.\n         *\n         * @param paths The property names.\n         * @param values The property values.\n         * @return Returns the new object.\n         */\n        zipObjectDeep(paths?: List<PropertyPath>, values?: List<any>): object;\n    }\n    interface Collection<T> {\n        /**\n         * @see _.zipObjectDeep\n         */\n        zipObjectDeep(values?: List<any>): Object<object>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.zipObjectDeep\n         */\n        zipObjectDeep(values?: List<any>): ObjectChain<object>;\n    }\n    interface LoDashStatic {\n        /**\n         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be\n         * combined. The iteratee is invoked with four arguments: (accumulator, value, index,\n         * group).\n         * @param arrays The arrays to process.\n         * @param iteratee The function to combine grouped values.\n         * @return Returns the new array of grouped elements.\n         */\n        zipWith<T, TResult>(arrays: List<T>, iteratee: (value1: T) => TResult): TResult[];\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T1, T2, TResult>(arrays1: List<T1>, arrays2: List<T2>, iteratee: (value1: T1, value2: T2) => TResult): TResult[];\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T1, T2, T3, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T1, value2: T2, value3: T3) => TResult): TResult[];\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T1, T2, T3, T4, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult): TResult[];\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T1, T2, T3, T4, T5, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult): TResult[];\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T, TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): TResult[];\n    }\n    interface Collection<T> {\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult): Collection<TResult>;\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T2, T3, TResult>(arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult): Collection<TResult>;\n        /**\n         * @see _.zipWith\n         */\n        zipWith<TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): Collection<TResult>;\n    }\n    interface CollectionChain<T> {\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult): CollectionChain<TResult>;\n        /**\n         * @see _.zipWith\n         */\n        zipWith<T2, T3, TResult>(arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult): CollectionChain<TResult>;\n        /**\n         * @see _.zipWith\n         */\n        zipWith<TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): CollectionChain<TResult>;\n    }\n}\n", "@types/lodash/common/array.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\ndeclare module '../index' {\n  interface LoDashStatic {\n    /**\n     * Creates an object composed of keys generated from the results of running each element of collection through\n     * iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The\n     * iteratee is invoked with one argument: (value).\n     *\n     * @param collection The collection to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns the composed aggregate object.\n     */\n    countBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<number>\n    /**\n     * @see _.countBy\n     */\n    countBy<T extends object>(\n      collection: T | null | undefined,\n      iteratee?: ValueIteratee<T[keyof T]>,\n    ): Dictionary<number>\n  }\n  interface Object<T> {\n    /**\n     * @see _.countBy\n     */\n    countBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<number>>\n  }\n  interface String {\n    /**\n     * @see _.countBy\n     */\n    countBy(iteratee?: ValueIteratee<string>): Object<Dictionary<number>>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.countBy\n     */\n    countBy(iteratee?: ValueIteratee<T>): Object<Dictionary<number>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.countBy\n     */\n    countBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<number>>\n  }\n  interface StringChain {\n    /**\n     * @see _.countBy\n     */\n    countBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<number>>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.countBy\n     */\n    countBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<number>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.countBy\n     */\n    countBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<number>>\n  }\n  interface LoDashStatic {\n    /**\n     * @see _.forEach\n     */\n    each: LoDashStatic['forEach']\n  }\n  interface String {\n    /**\n     * @see _.each\n     */\n    each: String['forEach']\n  }\n  interface Collection<T> {\n    /**\n     * @see _.each\n     */\n    each: Collection<T>['forEach']\n  }\n  interface Object<T> {\n    /**\n     * @see _.each\n     */\n    each: Object<T>['forEach']\n  }\n  interface StringChain {\n    /**\n     * @see _.each\n     */\n    each: StringChain['forEach']\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.each\n     */\n    each: StringNullableChain['forEach']\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.each\n     */\n    each: CollectionChain<T>['forEach']\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.each\n     */\n    each: ObjectChain<T>['forEach']\n  }\n  interface LoDashStatic {\n    /**\n     * @see _.forEachRight\n     */\n    eachRight: LoDashStatic['forEachRight']\n  }\n  interface String {\n    /**\n     * @see _.eachRight\n     */\n    eachRight: String['forEachRight']\n  }\n  interface Collection<T> {\n    /**\n     * @see _.eachRight\n     */\n    eachRight: Collection<T>['forEachRight']\n  }\n  interface Object<T> {\n    /**\n     * @see _.eachRight\n     */\n    eachRight: Object<T>['forEachRight']\n  }\n  interface StringChain {\n    /**\n     * @see _.eachRight\n     */\n    eachRight: StringChain['forEachRight']\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.eachRight\n     */\n    eachRight: StringNullableChain['forEachRight']\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.eachRight\n     */\n    eachRight: CollectionChain<T>['forEachRight']\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.eachRight\n     */\n    eachRight: ObjectChain<T>['forEachRight']\n  }\n  interface LoDashStatic {\n    /**\n     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate\n     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).\n     *\n     * @param collection The collection to iterate over.\n     * @param predicate The function invoked per iteration.\n     * @return Returns true if all elements pass the predicate check, else false.\n     */\n    every<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean\n    /**\n     * @see _.every\n     */\n    every<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean\n  }\n  interface Collection<T> {\n    /**\n     * @see _.every\n     */\n    every(predicate?: ListIterateeCustom<T, boolean>): boolean\n  }\n  interface Object<T> {\n    /**\n     * @see _.every\n     */\n    every(predicate?: ObjectIterateeCustom<T, boolean>): boolean\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.every\n     */\n    every(predicate?: ListIterateeCustom<T, boolean>): PrimitiveChain<boolean>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.every\n     */\n    every(predicate?: ObjectIterateeCustom<T, boolean>): PrimitiveChain<boolean>\n  }\n  interface LoDashStatic {\n    /**\n     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The\n     * predicate is invoked with three arguments: (value, index|key, collection).\n     *\n     * @param collection The collection to iterate over.\n     * @param predicate The function invoked per iteration.\n     * @return Returns the new filtered array.\n     */\n    filter(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[]\n    /**\n     * @see _.filter\n     */\n    filter<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>): S[]\n    /**\n     * @see _.filter\n     */\n    filter<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[]\n    /**\n     * @see _.filter\n     */\n    filter<T extends object, S extends T[keyof T]>(\n      collection: T | null | undefined,\n      predicate: ObjectIteratorTypeGuard<T, S>,\n    ): S[]\n    /**\n     * @see _.filter\n     */\n    filter<T extends object>(\n      collection: T | null | undefined,\n      predicate?: ObjectIterateeCustom<T, boolean>,\n    ): Array<T[keyof T]>\n  }\n  interface String {\n    /**\n     * @see _.filter\n     */\n    filter(predicate?: StringIterator<boolean>): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.filter\n     */\n    filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): Collection<S>\n    /**\n     * @see _.filter\n     */\n    filter(predicate?: ListIterateeCustom<T, boolean>): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.filter\n     */\n    filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): Collection<S>\n    /**\n     * @see _.filter\n     */\n    filter(predicate?: ObjectIterateeCustom<T, boolean>): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.filter\n     */\n    filter(predicate?: StringIterator<boolean>): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.filter\n     */\n    filter(predicate?: StringIterator<boolean>): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.filter\n     */\n    filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): CollectionChain<S>\n    /**\n     * @see _.filter\n     */\n    filter(predicate?: ListIterateeCustom<T, boolean>): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.filter\n     */\n    filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): CollectionChain<S>\n    /**\n     * @see _.filter\n     */\n    filter(predicate?: ObjectIterateeCustom<T, boolean>): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * Iterates over elements of collection, returning the first element predicate returns truthy for.\n     * The predicate is invoked with three arguments: (value, index|key, collection).\n     *\n     * @param collection The collection to search.\n     * @param predicate The function invoked per iteration.\n     * @param fromIndex The index to search from.\n     * @return Returns the matched element, else undefined.\n     */\n    find<T, S extends T>(\n      collection: List<T> | null | undefined,\n      predicate: ListIteratorTypeGuard<T, S>,\n      fromIndex?: number,\n    ): S | undefined\n    /**\n     * @see _.find\n     */\n    find<T>(\n      collection: List<T> | null | undefined,\n      predicate?: ListIterateeCustom<T, boolean>,\n      fromIndex?: number,\n    ): T | undefined\n    /**\n     * @see _.find\n     */\n    find<T extends object, S extends T[keyof T]>(\n      collection: T | null | undefined,\n      predicate: ObjectIteratorTypeGuard<T, S>,\n      fromIndex?: number,\n    ): S | undefined\n    /**\n     * @see _.find\n     */\n    find<T extends object>(\n      collection: T | null | undefined,\n      predicate?: ObjectIterateeCustom<T, boolean>,\n      fromIndex?: number,\n    ): T[keyof T] | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.find\n     */\n    find<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S | undefined\n    /**\n     * @see _.find\n     */\n    find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T | undefined\n  }\n  interface Object<T> {\n    /**\n     * @see _.find\n     */\n    find<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S | undefined\n    /**\n     * @see _.find\n     */\n    find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T] | undefined\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.find\n     */\n    find<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S | undefined>\n    /**\n     * @see _.find\n     */\n    find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T | undefined>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.find\n     */\n    find<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S | undefined>\n    /**\n     * @see _.find\n     */\n    find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T[keyof T] | undefined>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.find except that it iterates over elements of a collection from\n     * right to left.\n     * @param collection Searches for a value in this list.\n     * @param predicate The function called per iteration.\n     * @param fromIndex The index to search from.\n     * @return The found element, else undefined.\n     */\n    findLast<T, S extends T>(\n      collection: List<T> | null | undefined,\n      predicate: ListIteratorTypeGuard<T, S>,\n      fromIndex?: number,\n    ): S | undefined\n    /**\n     * @see _.findLast\n     */\n    findLast<T>(\n      collection: List<T> | null | undefined,\n      predicate?: ListIterateeCustom<T, boolean>,\n      fromIndex?: number,\n    ): T | undefined\n    /**\n     * @see _.findLast\n     */\n    findLast<T extends object, S extends T[keyof T]>(\n      collection: T | null | undefined,\n      predicate: ObjectIteratorTypeGuard<T, S>,\n      fromIndex?: number,\n    ): S | undefined\n    /**\n     * @see _.findLast\n     */\n    findLast<T extends object>(\n      collection: T | null | undefined,\n      predicate?: ObjectIterateeCustom<T, boolean>,\n      fromIndex?: number,\n    ): T[keyof T] | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.findLast\n     */\n    findLast<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S | undefined\n    /**\n     * @see _.findLast\n     */\n    findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T | undefined\n  }\n  interface Object<T> {\n    /**\n     * @see _.findLast\n     */\n    findLast<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S | undefined\n    /**\n     * @see _.findLast\n     */\n    findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T] | undefined\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.findLast\n     */\n    findLast<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S | undefined>\n    /**\n     * @see _.findLast\n     */\n    findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T | undefined>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.findLast\n     */\n    findLast<S extends T[keyof T]>(\n      predicate: ObjectIteratorTypeGuard<T, S>,\n      fromIndex?: number,\n    ): ExpChain<S | undefined>\n    /**\n     * @see _.findLast\n     */\n    findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T[keyof T] | undefined>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of flattened values by running each element in collection through iteratee\n     * and concating its result to the other mapped values. The iteratee is invoked with three arguments:\n     * (value, index|key, collection).\n     *\n     * @param collection The collection to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns the new flattened array.\n     */\n    flatMap<T>(collection: Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined): T[]\n    /**\n     * @see _.flatMap\n     */\n    flatMap(collection: object | null | undefined): any[]\n    /**\n     * @see _.flatMap\n     */\n    flatMap<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, Many<TResult>>): TResult[]\n    /**\n     * @see _.flatMap\n     */\n    flatMap<T extends object, TResult>(\n      collection: T | null | undefined,\n      iteratee: ObjectIterator<T, Many<TResult>>,\n    ): TResult[]\n    /**\n     * @see _.flatMap\n     */\n    flatMap(collection: object | null | undefined, iteratee: string): any[]\n    /**\n     * @see _.flatMap\n     */\n    flatMap(collection: object | null | undefined, iteratee: object): boolean[]\n  }\n  interface String {\n    /**\n     * @see _.flatMap\n     */\n    flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): Collection<TResult>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.flatMap\n     */\n    flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): Collection<TResult>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(iteratee: [PropertyName, any] | object): Collection<boolean>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(): T extends Many<infer U> ? Collection<U> : Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.flatMap\n     */\n    flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): Collection<TResult>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(iteratee: [PropertyName, any] | object): Collection<boolean>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.flatMap\n     */\n    flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): CollectionChain<TResult>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.flatMap\n     */\n    flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): CollectionChain<TResult>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.flatMap\n     */\n    flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): CollectionChain<TResult>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(iteratee: [PropertyName, any] | object): CollectionChain<boolean>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(): T extends Many<infer U> ? CollectionChain<U> : CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.flatMap\n     */\n    flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): CollectionChain<TResult>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(iteratee: [PropertyName, any] | object): CollectionChain<boolean>\n    /**\n     * @see _.flatMap\n     */\n    flatMap(): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like `_.flatMap` except that it recursively flattens the\n     * mapped results.\n     *\n     * @since 4.7.0\n     * @category Collection\n     * @param collection The collection to iterate over.\n     * @param [iteratee=_.identity] The function invoked per iteration.\n     * @returns Returns the new flattened array.\n     * @example\n     *\n     * function duplicate(n) {\n     *   return [[[n, n]]];\n     * }\n     *\n     * _.flatMapDeep([1, 2], duplicate);\n     * // => [1, 1, 2, 2]\n     */\n    flatMapDeep<T>(\n      collection:\n        | Dictionary<ListOfRecursiveArraysOrValues<T> | T>\n        | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T>\n        | null\n        | undefined,\n    ): T[]\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<T, TResult>(\n      collection: List<T> | null | undefined,\n      iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,\n    ): TResult[]\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<T extends object, TResult>(\n      collection: T | null | undefined,\n      iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,\n    ): TResult[]\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(collection: object | null | undefined, iteratee: string): any[]\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(collection: object | null | undefined, iteratee: object): boolean[]\n  }\n  interface String {\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<TResult>(\n      iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>,\n    ): Collection<TResult>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<TResult = any>(\n      iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName,\n    ): Collection<TResult>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(iteratee: [PropertyName, any] | object): Collection<boolean>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<TResult = any>(\n      iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName,\n    ): Collection<TResult>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(iteratee: [PropertyName, any] | object): Collection<boolean>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<TResult>(\n      iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>,\n    ): CollectionChain<TResult>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<TResult>(\n      iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>,\n    ): CollectionChain<TResult>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<TResult = any>(\n      iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName,\n    ): CollectionChain<TResult>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(iteratee: [PropertyName, any] | object): CollectionChain<boolean>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep<TResult = any>(\n      iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName,\n    ): CollectionChain<TResult>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(iteratee: [PropertyName, any] | object): CollectionChain<boolean>\n    /**\n     * @see _.flatMapDeep\n     */\n    flatMapDeep(): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like `_.flatMap` except that it recursively flattens the\n     * mapped results up to `depth` times.\n     *\n     * @since 4.7.0\n     * @category Collection\n     * @param collection The collection to iterate over.\n     * @param [iteratee=_.identity] The function invoked per iteration.\n     * @param [depth=1] The maximum recursion depth.\n     * @returns Returns the new flattened array.\n     * @example\n     *\n     * function duplicate(n) {\n     *   return [[[n, n]]];\n     * }\n     *\n     * _.flatMapDepth([1, 2], duplicate, 2);\n     * // => [[1, 1], [2, 2]]\n     */\n    flatMapDepth<T>(\n      collection:\n        | Dictionary<ListOfRecursiveArraysOrValues<T> | T>\n        | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T>\n        | null\n        | undefined,\n    ): T[]\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<T, TResult>(\n      collection: List<T> | null | undefined,\n      iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,\n      depth?: number,\n    ): TResult[]\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<T extends object, TResult>(\n      collection: T | null | undefined,\n      iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,\n      depth?: number,\n    ): TResult[]\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(collection: object | null | undefined, iteratee: string, depth?: number): any[]\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(collection: object | null | undefined, iteratee: object, depth?: number): boolean[]\n  }\n  interface String {\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<TResult>(\n      iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>,\n      depth?: number,\n    ): Collection<TResult>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(depth?: number): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<TResult = any>(\n      iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName,\n      depth?: number,\n    ): Collection<TResult>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): Collection<boolean>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(depth?: number): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<TResult = any>(\n      iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName,\n      depth?: number,\n    ): Collection<TResult>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): Collection<boolean>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(depth?: number): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<TResult>(\n      iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>,\n      depth?: number,\n    ): CollectionChain<TResult>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(depth?: number): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<TResult>(\n      iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>,\n      depth?: number,\n    ): CollectionChain<TResult>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(depth?: number): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<TResult = any>(\n      iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName,\n      depth?: number,\n    ): CollectionChain<TResult>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): CollectionChain<boolean>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(depth?: number): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth<TResult = any>(\n      iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName,\n      depth?: number,\n    ): CollectionChain<TResult>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): CollectionChain<boolean>\n    /**\n     * @see _.flatMapDepth\n     */\n    flatMapDepth(depth?: number): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * Iterates over elements of collection invoking iteratee for each element. The iteratee is invoked with three arguments:\n     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.\n     *\n     * Note: As with other \"Collections\" methods, objects with a \"length\" property are iterated like arrays. To\n     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.\n     *\n     * @alias _.each\n     *\n     * @param collection The collection to iterate over.\n     * @param iteratee The function invoked per iteration.\n     */\n    forEach<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[]\n    /**\n     * @see _.forEach\n     */\n    forEach(collection: string, iteratee?: StringIterator<any>): string\n    /**\n     * @see _.forEach\n     */\n    forEach<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>\n    /**\n     * @see _.forEach\n     */\n    forEach<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T\n    /**\n     * @see _.forEach\n     */\n    forEach<T, TArray extends T[] | null | undefined>(\n      collection: TArray & (T[] | null | undefined),\n      iteratee?: ArrayIterator<T, any>,\n    ): TArray\n    /**\n     * @see _.forEach\n     */\n    forEach<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString\n    /**\n     * @see _.forEach\n     */\n    forEach<T, TList extends List<T> | null | undefined>(\n      collection: TList & (List<T> | null | undefined),\n      iteratee?: ListIterator<T, any>,\n    ): TList\n    /**\n     * @see _.forEach\n     */\n    forEach<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined\n  }\n  interface String {\n    /**\n     * @see _.forEach\n     */\n    forEach(iteratee?: StringIterator<any>): String\n  }\n  interface Object<T> {\n    /**\n     * @see _.forEach\n     */\n    forEach(iteratee?: ObjectIterator<T, any>): Object<T>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.forEach\n     */\n    forEach(iteratee?: ListIterator<T, any>): Collection<T>\n  }\n  interface StringChain {\n    /**\n     * @see _.forEach\n     */\n    forEach(iteratee?: StringIterator<any>): StringChain\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.forEach\n     */\n    forEach(iteratee?: StringIterator<any>): StringNullableChain\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.forEach\n     */\n    forEach(iteratee?: ObjectIterator<T, any>): ObjectChain<T>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.forEach\n     */\n    forEach(iteratee?: ListIterator<T, any>): CollectionChain<T>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.forEach except that it iterates over elements of collection from right to left.\n     *\n     * @alias _.eachRight\n     *\n     * @param collection The collection to iterate over.\n     * @param iteratee The function called per iteration.\n     */\n    forEachRight<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[]\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight(collection: string, iteratee?: StringIterator<any>): string\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight<T, TArray extends T[] | null | undefined>(\n      collection: TArray & (T[] | null | undefined),\n      iteratee?: ArrayIterator<T, any>,\n    ): TArray\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight<TString extends string | null | undefined>(\n      collection: TString,\n      iteratee?: StringIterator<any>,\n    ): TString\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight<T, TList extends List<T> | null | undefined>(\n      collection: TList & (List<T> | null | undefined),\n      iteratee?: ListIterator<T, any>,\n    ): TList\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight<T extends object>(\n      collection: T | null | undefined,\n      iteratee?: ObjectIterator<T, any>,\n    ): T | null | undefined\n  }\n  interface String {\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight(iteratee?: StringIterator<any>): String\n  }\n  interface Object<T> {\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight(iteratee?: ObjectIterator<T, any>): Object<T>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight(iteratee?: ListIterator<T, any>): Collection<T>\n  }\n  interface StringChain {\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight(iteratee?: StringIterator<any>): StringChain\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight(iteratee?: StringIterator<any>): StringNullableChain\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight(iteratee?: ObjectIterator<T, any>): ObjectChain<T>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.forEachRight\n     */\n    forEachRight(iteratee?: ListIterator<T, any>): CollectionChain<T>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an object composed of keys generated from the results of running each element of collection through\n     * iteratee. The corresponding value of each key is an array of the elements responsible for generating the\n     * key. The iteratee is invoked with one argument: (value).\n     *\n     * @param collection The collection to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns the composed aggregate object.\n     */\n    groupBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<T[]>\n    /**\n     * @see _.groupBy\n     */\n    groupBy<T extends object>(\n      collection: T | null | undefined,\n      iteratee?: ValueIteratee<T[keyof T]>,\n    ): Dictionary<Array<T[keyof T]>>\n  }\n  interface String {\n    /**\n     * @see _.groupBy\n     */\n    groupBy(iteratee?: ValueIteratee<string>): Object<Dictionary<string[]>>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.groupBy\n     */\n    groupBy(iteratee?: ValueIteratee<T>): Object<Dictionary<T[]>>\n  }\n  interface Object<T> {\n    /**\n     * @see _.groupBy\n     */\n    groupBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<Array<T[keyof T]>>>\n  }\n  interface StringChain {\n    /**\n     * @see _.groupBy\n     */\n    groupBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.groupBy\n     */\n    groupBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.groupBy\n     */\n    groupBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<T[]>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.groupBy\n     */\n    groupBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<Array<T[keyof T]>>>\n  }\n  interface LoDashStatic {\n    /**\n     * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,\n     * it\u2019s used as the offset from the end of collection.\n     *\n     * @param collection The collection to search.\n     * @param target The value to search for.\n     * @param fromIndex The index to search from.\n     * @return True if the target element is found, else false.\n     */\n    includes<T>(\n      collection: Dictionary<T> | NumericDictionary<T> | null | undefined,\n      target: T,\n      fromIndex?: number,\n    ): boolean\n  }\n  interface Object<T> {\n    /**\n     * @see _.includes\n     */\n    includes(target: T[keyof T], fromIndex?: number): boolean\n  }\n  interface Collection<T> {\n    /**\n     * @see _.includes\n     */\n    includes(target: T, fromIndex?: number): boolean\n  }\n  interface String {\n    /**\n     * @see _.includes\n     */\n    includes(target: string, fromIndex?: number): boolean\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.includes\n     */\n    includes(target: T[keyof T], fromIndex?: number): PrimitiveChain<boolean>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.includes\n     */\n    includes(target: T, fromIndex?: number): PrimitiveChain<boolean>\n  }\n  interface StringChain {\n    /**\n     * @see _.includes\n     */\n    includes(target: string, fromIndex?: number): PrimitiveChain<boolean>\n  }\n  interface LoDashStatic {\n    /**\n     * Invokes the method named by methodName on each element in the collection returning\n     * an array of the results of each invoked method. Additional arguments will be provided\n     * to each invoked method. If methodName is a function it will be invoked for, and this\n     * bound to, each element in the collection.\n     * @param collection The collection to iterate over.\n     * @param methodName The name of the method to invoke.\n     * @param args Arguments to invoke the method with.\n     */\n    invokeMap(collection: object | null | undefined, methodName: string, ...args: any[]): any[]\n    /**\n     * @see _.invokeMap\n     */\n    invokeMap<TResult>(\n      collection: object | null | undefined,\n      method: (...args: any[]) => TResult,\n      ...args: any[]\n    ): TResult[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.invokeMap\n     */\n    invokeMap(methodName: string, ...args: any[]): Collection<any>\n    /**\n     * @see _.invokeMap\n     */\n    invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): Collection<TResult>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.invokeMap\n     */\n    invokeMap(methodName: string, ...args: any[]): CollectionChain<any>\n    /**\n     * @see _.invokeMap\n     */\n    invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): CollectionChain<TResult>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an object composed of keys generated from the results of running each element of collection through\n     * iteratee. The corresponding value of each key is the last element responsible for generating the key. The\n     * iteratee function is invoked with one argument: (value).\n     *\n     * @param collection The collection to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns the composed aggregate object.\n     */\n    keyBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIterateeCustom<T, PropertyName>): Dictionary<T>\n    /**\n     * @see _.keyBy\n     */\n    keyBy<T extends object>(\n      collection: T | null | undefined,\n      iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>,\n    ): Dictionary<T[keyof T]>\n  }\n  interface String {\n    /**\n     * @see _.keyBy\n     */\n    keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): Object<Dictionary<string>>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.keyBy\n     */\n    keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): Object<Dictionary<T>>\n  }\n  interface Object<T> {\n    /**\n     * @see _.keyBy\n     */\n    keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Object<Dictionary<T[keyof T]>>\n  }\n  interface StringChain {\n    /**\n     * @see _.keyBy\n     */\n    keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): ObjectChain<Dictionary<string>>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.keyBy\n     */\n    keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): ObjectChain<Dictionary<string>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.keyBy\n     */\n    keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): ObjectChain<Dictionary<T>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.keyBy\n     */\n    keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): ObjectChain<Dictionary<T[keyof T]>>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of values by running each element in collection through iteratee. The iteratee is\n     * invoked with three arguments: (value, index|key, collection).\n     *\n     * Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,\n     * _.reject, and _.some.\n     *\n     * The guarded methods are:\n     * ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,\n     * min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,\n     * sample, some, sum, uniq, and words\n     *\n     * @param collection The collection to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns the new mapped array.\n     */\n    map<T, TResult>(collection: T[] | null | undefined, iteratee: ArrayIterator<T, TResult>): TResult[]\n    /**\n     * @see _.map\n     */\n    map<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, TResult>): TResult[]\n    /**\n     * @see _.map\n     */\n    map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T[]\n    /**\n     * @see _.map\n     */\n    map<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, TResult>): TResult[]\n    /**\n     * @see _.map\n     */\n    map<T, K extends keyof T>(\n      collection: Dictionary<T> | NumericDictionary<T> | null | undefined,\n      iteratee: K,\n    ): Array<T[K]>\n    /**\n     * @see _.map\n     */\n    map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: string): any[]\n    /**\n     * @see _.map\n     */\n    map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: object): boolean[]\n  }\n\n  interface String {\n    /**\n     * @see _.map\n     */\n    map<TResult>(iteratee: StringIterator<TResult>): Collection<TResult>\n    /**\n     * @see _.map\n     */\n    map(): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.map\n     */\n    map<K extends keyof T>(key: K): Collection<T[K]>\n    /**\n     * @see _.map\n     */\n    map<TResult>(iteratee: ListIterator<T, TResult>): Collection<TResult>\n    /**\n     * @see _.map\n     */\n    map(iteratee: PropertyName): Collection<any>\n    /**\n     * @see _.map\n     */\n    map(iteratee: [PropertyName, any] | object): Collection<boolean>\n    /**\n     * @see _.map\n     */\n    map(): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.map\n     */\n    map<K extends keyof T[keyof T]>(key: K): Collection<T[keyof T][K]>\n    /**\n     * @see _.map\n     */\n    map<TResult>(iteratee: ObjectIterator<T, TResult>): Collection<TResult>\n    /**\n     * @see _.map\n     */\n    map(iteratee: PropertyName): Collection<any>\n    /**\n     * @see _.map\n     */\n    map(iteratee: [PropertyName, any] | object): Collection<boolean>\n    /**\n     * @see _.map\n     */\n    map(): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.map\n     */\n    map<TResult>(iteratee: StringIterator<TResult>): CollectionChain<TResult>\n    /**\n     * @see _.map\n     */\n    map(): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.map\n     */\n    map<TResult>(iteratee: StringIterator<TResult>): CollectionChain<TResult>\n    /**\n     * @see _.map\n     */\n    map(): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.map\n     */\n    map<K extends keyof T>(key: K): CollectionChain<T[K]>\n    /**\n     * @see _.map\n     */\n    map<TResult>(iteratee: ListIterator<T, TResult>): CollectionChain<TResult>\n    /**\n     * @see _.map\n     */\n    map(iteratee: PropertyName): CollectionChain<any>\n    /**\n     * @see _.map\n     */\n    map(iteratee: [PropertyName, any] | object): CollectionChain<boolean>\n    /**\n     * @see _.map\n     */\n    map(): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.map\n     */\n    map<K extends keyof T[keyof T]>(key: K): CollectionChain<T[keyof T][K]>\n    /**\n     * @see _.map\n     */\n    map<TResult>(iteratee: ObjectIterator<T, TResult>): CollectionChain<TResult>\n    /**\n     * @see _.map\n     */\n    map(iteratee: PropertyName): CollectionChain<any>\n    /**\n     * @see _.map\n     */\n    map(iteratee: [PropertyName, any] | object): CollectionChain<boolean>\n    /**\n     * @see _.map\n     */\n    map(): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like `_.sortBy` except that it allows specifying the sort\n     * orders of the iteratees to sort by. If `orders` is unspecified, all values\n     * are sorted in ascending order. Otherwise, specify an order of \"desc\" for\n     * descending or \"asc\" for ascending sort order of corresponding values.\n     *\n     * @category Collection\n     * @param collection The collection to iterate over.\n     * @param [iteratees=[_.identity]] The iteratees to sort by.\n     * @param [orders] The sort orders of `iteratees`.\n     * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.\n     * @returns Returns the new sorted array.\n     * @example\n     *\n     * var users = [\n     *   { 'user': 'fred',   'age': 48 },\n     *   { 'user': 'barney', 'age': 34 },\n     *   { 'user': 'fred',   'age': 42 },\n     *   { 'user': 'barney', 'age': 36 }\n     * ];\n     *\n     * // sort by `user` in ascending order and by `age` in descending order\n     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);\n     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]\n     */\n    orderBy<T>(\n      collection: List<T> | null | undefined,\n      iteratees?: Many<ListIterator<T, NotVoid>>,\n      orders?: Many<boolean | 'asc' | 'desc'>,\n    ): T[]\n    /**\n     * @see _.orderBy\n     */\n    orderBy<T>(\n      collection: List<T> | null | undefined,\n      iteratees?: Many<ListIteratee<T>>,\n      orders?: Many<boolean | 'asc' | 'desc'>,\n    ): T[]\n    /**\n     * @see _.orderBy\n     */\n    orderBy<T extends object>(\n      collection: T | null | undefined,\n      iteratees?: Many<ObjectIterator<T, NotVoid>>,\n      orders?: Many<boolean | 'asc' | 'desc'>,\n    ): Array<T[keyof T]>\n    /**\n     * @see _.orderBy\n     */\n    orderBy<T extends object>(\n      collection: T | null | undefined,\n      iteratees?: Many<ObjectIteratee<T>>,\n      orders?: Many<boolean | 'asc' | 'desc'>,\n    ): Array<T[keyof T]>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.orderBy\n     */\n    orderBy(\n      iteratees?: Many<ListIterator<T, NotVoid> | PropertyName | PartialShallow<T>>,\n      orders?: Many<boolean | 'asc' | 'desc'>,\n    ): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.orderBy\n     */\n    orderBy(\n      iteratees?: Many<ObjectIterator<T, NotVoid>>,\n      orders?: Many<boolean | 'asc' | 'desc'>,\n    ): Collection<T[keyof T]>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.orderBy\n     */\n    orderBy(\n      iteratees?: Many<ListIterator<T, NotVoid> | PropertyName | PartialShallow<T>>,\n      orders?: Many<boolean | 'asc' | 'desc'>,\n    ): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.orderBy\n     */\n    orderBy(\n      iteratees?: Many<ObjectIterator<T, NotVoid>>,\n      orders?: Many<boolean | 'asc' | 'desc'>,\n    ): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,\n     * while the second of which contains elements predicate returns falsey for.\n     * The predicate is invoked with three arguments: (value, index|key, collection).\n     *\n     * @param collection The collection to iterate over.\n     * @param callback The function called per iteration.\n     * @return Returns the array of grouped elements.\n     */\n    partition<T, U extends T>(\n      collection: List<T> | null | undefined,\n      callback: ValueIteratorTypeGuard<T, U>,\n    ): [U[], Array<Exclude<T, U>>]\n    /**\n     * @see _.partition\n     */\n    partition<T>(collection: List<T> | null | undefined, callback: ValueIteratee<T>): [T[], T[]]\n    /**\n     * @see _.partition\n     */\n    partition<T extends object>(\n      collection: T | null | undefined,\n      callback: ValueIteratee<T[keyof T]>,\n    ): [Array<T[keyof T]>, Array<T[keyof T]>]\n  }\n  interface String {\n    /**\n     * @see _.partition\n     */\n    partition(callback: StringIterator<NotVoid>): LoDashImplicitWrapper<[string[], string[]]>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.partition\n     */\n    partition<U extends T>(callback: ValueIteratorTypeGuard<T, U>): LoDashImplicitWrapper<[U[], Array<Exclude<T, U>>]>\n    /**\n     * @see _.partition\n     */\n    partition(callback: ValueIteratee<T>): LoDashImplicitWrapper<[T[], T[]]>\n  }\n  interface Object<T> {\n    /**\n     * @see _.partition\n     */\n    partition(callback: ValueIteratee<T[keyof T]>): LoDashImplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>\n  }\n  interface StringChain {\n    /**\n     * @see _.partition\n     */\n    partition(callback: StringIterator<NotVoid>): LoDashExplicitWrapper<[string[], string[]]>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.partition\n     */\n    partition(callback: StringIterator<NotVoid>): LoDashExplicitWrapper<[string[], string[]]>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.partition\n     */\n    partition<U extends T>(callback: ValueIteratorTypeGuard<T, U>): LoDashExplicitWrapper<[U[], Array<Exclude<T, U>>]>\n    /**\n     * @see _.partition\n     */\n    partition(callback: ValueIteratee<T>): LoDashExplicitWrapper<[T[], T[]]>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.partition\n     */\n    partition(callback: ValueIteratee<T[keyof T]>): LoDashExplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>\n  }\n  interface LoDashStatic {\n    /**\n     * Reduces a collection to a value which is the accumulated result of running each\n     * element in the collection through the callback, where each successive callback execution\n     * consumes the return value of the previous execution. If accumulator is not provided the\n     * first element of the collection will be used as the initial accumulator value. The callback\n     * is invoked with four arguments: (accumulator, value, index|key, collection).\n     * @param collection The collection to iterate over.\n     * @param callback The function called per iteration.\n     * @param accumulator Initial value of the accumulator.\n     * @return Returns the accumulated value.\n     */\n    reduce<T, TResult>(\n      collection: T[] | null | undefined,\n      callback: MemoListIterator<T, TResult, T[]>,\n      accumulator: TResult,\n    ): TResult\n    /**\n     * @see _.reduce\n     */\n    reduce<T, TResult>(\n      collection: List<T> | null | undefined,\n      callback: MemoListIterator<T, TResult, List<T>>,\n      accumulator: TResult,\n    ): TResult\n    /**\n     * @see _.reduce\n     */\n    reduce<T extends object, TResult>(\n      collection: T | null | undefined,\n      callback: MemoObjectIterator<T[keyof T], TResult, T>,\n      accumulator: TResult,\n    ): TResult\n    /**\n     * @see _.reduce\n     */\n    reduce<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined\n    /**\n     * @see _.reduce\n     */\n    reduce<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined\n    /**\n     * @see _.reduce\n     */\n    reduce<T extends object>(\n      collection: T | null | undefined,\n      callback: MemoObjectIterator<T[keyof T], T[keyof T], T>,\n    ): T[keyof T] | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.reduce\n     */\n    reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult\n    /**\n     * @see _.reduce\n     */\n    reduce(callback: MemoListIterator<T, T, List<T>>): T | undefined\n  }\n  interface Object<T> {\n    /**\n     * @see _.reduce\n     */\n    reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult\n    /**\n     * @see _.reduce\n     */\n    reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.reduce\n     */\n    reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): ExpChain<TResult>\n    /**\n     * @see _.reduce\n     */\n    reduce(callback: MemoListIterator<T, T, List<T>>): ExpChain<T | undefined>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.reduce\n     */\n    reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): ExpChain<TResult>\n    /**\n     * @see _.reduce\n     */\n    reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): ExpChain<T[keyof T] | undefined>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.reduce except that it iterates over elements of a collection from\n     * right to left.\n     * @param collection The collection to iterate over.\n     * @param callback The function called per iteration.\n     * @param accumulator Initial value of the accumulator.\n     * @return The accumulated value.\n     */\n    reduceRight<T, TResult>(\n      collection: T[] | null | undefined,\n      callback: MemoListIterator<T, TResult, T[]>,\n      accumulator: TResult,\n    ): TResult\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<T, TResult>(\n      collection: List<T> | null | undefined,\n      callback: MemoListIterator<T, TResult, List<T>>,\n      accumulator: TResult,\n    ): TResult\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<T extends object, TResult>(\n      collection: T | null | undefined,\n      callback: MemoObjectIterator<T[keyof T], TResult, T>,\n      accumulator: TResult,\n    ): TResult\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<T extends object>(\n      collection: T | null | undefined,\n      callback: MemoObjectIterator<T[keyof T], T[keyof T], T>,\n    ): T[keyof T] | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight(callback: MemoListIterator<T, T, List<T>>): T | undefined\n  }\n  interface Object<T> {\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): ExpChain<TResult>\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight(callback: MemoListIterator<T, T, List<T>>): ExpChain<T | undefined>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): ExpChain<TResult>\n    /**\n     * @see _.reduceRight\n     */\n    reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): ExpChain<T[keyof T] | undefined>\n  }\n  interface LoDashStatic {\n    /**\n     * The opposite of _.filter; this method returns the elements of collection that predicate does not return\n     * truthy for.\n     *\n     * @param collection The collection to iterate over.\n     * @param predicate The function invoked per iteration.\n     * @return Returns the new filtered array.\n     */\n    reject(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[]\n    /**\n     * @see _.reject\n     */\n    reject<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[]\n    /**\n     * @see _.reject\n     */\n    reject<T extends object>(\n      collection: T | null | undefined,\n      predicate?: ObjectIterateeCustom<T, boolean>,\n    ): Array<T[keyof T]>\n  }\n  interface String {\n    /**\n     * @see _.reject\n     */\n    reject(predicate?: StringIterator<boolean>): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.reject\n     */\n    reject(predicate?: ListIterateeCustom<T, boolean>): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.reject\n     */\n    reject(predicate?: ObjectIterateeCustom<T, boolean>): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.reject\n     */\n    reject(predicate?: StringIterator<boolean>): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.reject\n     */\n    reject(predicate?: StringIterator<boolean>): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.reject\n     */\n    reject(predicate?: ListIterateeCustom<T, boolean>): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.reject\n     */\n    reject(predicate?: ObjectIterateeCustom<T, boolean>): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * Gets a random element from collection.\n     *\n     * @param collection The collection to sample.\n     * @return Returns the random element.\n     */\n    sample<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T | undefined\n    /**\n     * @see _.sample\n     */\n    sample<T extends object>(collection: T | null | undefined): T[keyof T] | undefined\n  }\n  interface String {\n    /**\n     * @see _.sample\n     */\n    sample(): string | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.sample\n     */\n    sample(): T | undefined\n  }\n  interface Object<T> {\n    /**\n     * @see _.sample\n     */\n    sample(): T[keyof T] | undefined\n  }\n  interface StringChain {\n    /**\n     * @see _.sample\n     */\n    sample(): StringNullableChain\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.sample\n     */\n    sample(): StringNullableChain\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.sample\n     */\n    sample(): ExpChain<T | undefined>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.sample\n     */\n    sample(): ExpChain<T[keyof T] | undefined>\n  }\n  interface LoDashStatic {\n    /**\n     * Gets n random elements at unique keys from collection up to the size of collection.\n     *\n     * @param collection The collection to sample.\n     * @param n The number of elements to sample.\n     * @return Returns the random elements.\n     */\n    sampleSize<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, n?: number): T[]\n    /**\n     * @see _.sampleSize\n     */\n    sampleSize<T extends object>(collection: T | null | undefined, n?: number): Array<T[keyof T]>\n  }\n  interface String {\n    /**\n     * @see _.sampleSize\n     */\n    sampleSize(n?: number): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.sampleSize\n     */\n    sampleSize(n?: number): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.sampleSize\n     */\n    sampleSize(n?: number): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.sampleSize\n     */\n    sampleSize(n?: number): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.sampleSize\n     */\n    sampleSize(n?: number): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.sampleSize\n     */\n    sampleSize(n?: number): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.sampleSize\n     */\n    sampleSize(n?: number): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.\n     *\n     * @param collection The collection to shuffle.\n     * @return Returns the new shuffled array.\n     */\n    shuffle<T>(collection: List<T> | null | undefined): T[]\n    /**\n     * @see _.shuffle\n     */\n    shuffle<T extends object>(collection: T | null | undefined): Array<T[keyof T]>\n  }\n  interface String {\n    /**\n     * @see _.shuffle\n     */\n    shuffle(): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.shuffle\n     */\n    shuffle(): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.shuffle\n     */\n    shuffle(): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.shuffle\n     */\n    shuffle(): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.shuffle\n     */\n    shuffle(): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.shuffle\n     */\n    shuffle(): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.shuffle\n     */\n    shuffle(): CollectionChain<T[keyof T]>\n  }\n  interface LoDashStatic {\n    /**\n     * Gets the size of collection by returning its length for array-like values or the number of own enumerable\n     * properties for objects.\n     *\n     * @param collection The collection to inspect.\n     * @return Returns the size of collection.\n     */\n    size(collection: object | string | null | undefined): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.size\n     */\n    size(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.size\n     */\n    size(): PrimitiveChain<number>\n  }\n  interface LoDashStatic {\n    /**\n     * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate\n     * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).\n     *\n     * @param collection The collection to iterate over.\n     * @param predicate The function invoked per iteration.\n     * @return Returns true if any element passes the predicate check, else false.\n     */\n    some<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean\n    /**\n     * @see _.some\n     */\n    some<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean\n  }\n  interface Collection<T> {\n    /**\n     * @see _.some\n     */\n    some(predicate?: ListIterateeCustom<T, boolean>): boolean\n  }\n  interface Object<T> {\n    /**\n     * @see _.some\n     */\n    some(predicate?: ObjectIterateeCustom<T, boolean>): boolean\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.some\n     */\n    some(predicate?: ListIterateeCustom<T, boolean>): PrimitiveChain<boolean>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.some\n     */\n    some(predicate?: ObjectIterateeCustom<T, boolean>): PrimitiveChain<boolean>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of elements, sorted in ascending order by the results of\n     * running each element in a collection through each iteratee. This method\n     * performs a stable sort, that is, it preserves the original sort order of\n     * equal elements. The iteratees are invoked with one argument: (value).\n     *\n     * @category Collection\n     * @param collection The collection to iterate over.\n     * @param [iteratees=[_.identity]]\n     *  The iteratees to sort by, specified individually or in arrays.\n     * @returns Returns the new sorted array.\n     * @example\n     *\n     * var users = [\n     *   { 'user': 'fred',   'age': 48 },\n     *   { 'user': 'barney', 'age': 36 },\n     *   { 'user': 'fred',   'age': 42 },\n     *   { 'user': 'barney', 'age': 34 }\n     * ];\n     *\n     * _.sortBy(users, function(o) { return o.user; });\n     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]\n     *\n     * _.sortBy(users, ['user', 'age']);\n     * // => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]\n     *\n     * _.sortBy(users, 'user', function(o) {\n     *   return Math.floor(o.age / 10);\n     * });\n     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]\n     */\n    sortBy<T>(collection: List<T> | null | undefined, ...iteratees: Array<Many<ListIteratee<T>>>): T[]\n    /**\n     * @see _.sortBy\n     */\n    sortBy<T extends object>(\n      collection: T | null | undefined,\n      ...iteratees: Array<Many<ObjectIteratee<T>>>\n    ): Array<T[keyof T]>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.sortBy\n     */\n    sortBy(...iteratees: Array<Many<ListIteratee<T>>>): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.sortBy\n     */\n    sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): Collection<T[keyof T]>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.sortBy\n     */\n    sortBy(...iteratees: Array<Many<ListIteratee<T>>>): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.sortBy\n     */\n    sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): CollectionChain<T[keyof T]>\n  }\n}\n", "@types/lodash/common/collection.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\ndeclare module '../index' {\n  interface LoDashStatic {\n    /*\n     * Gets the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).\n     *\n     * @return The number of milliseconds.\n     */\n    now(): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.now\n     */\n    now(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.now\n     */\n    now(): PrimitiveChain<number>\n  }\n}\n", "@types/lodash/common/date.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\ndeclare module '../index' {\n  interface LoDashStatic {\n    /**\n     * The opposite of _.before; this method creates a function that invokes func once it\u2019s called n or more times.\n     *\n     * @param n The number of calls before func is invoked.\n     * @param func The function to restrict.\n     * @return Returns the new restricted function.\n     */\n    after<TFunc extends (...args: any[]) => any>(n: number, func: TFunc): TFunc\n  }\n  interface Primitive<T> {\n    /**\n     * @see _.after\n     */\n    after<TFunc extends (...args: any[]) => any>(func: TFunc): Function<TFunc>\n  }\n  interface PrimitiveChain<T> {\n    /**\n     * @see _.after\n     */\n    after<TFunc extends (...args: any[]) => any>(func: TFunc): FunctionChain<TFunc>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that accepts up to n arguments ignoring any additional arguments.\n     *\n     * @param func The function to cap arguments for.\n     * @param n The arity cap.\n     * @returns Returns the new function.\n     */\n    ary(func: (...args: any[]) => any, n?: number): (...args: any[]) => any\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.ary\n     */\n    ary(n?: number): Function<(...args: any[]) => any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.ary\n     */\n    ary(n?: number): FunctionChain<(...args: any[]) => any>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes func, with the this binding and arguments of the created function, while\n     * it\u2019s called less than n times. Subsequent calls to the created function return the result of the last func\n     * invocation.\n     *\n     * @param n The number of calls at which func is no longer invoked.\n     * @param func The function to restrict.\n     * @return Returns the new restricted function.\n     */\n    before<TFunc extends (...args: any[]) => any>(n: number, func: TFunc): TFunc\n  }\n  interface Primitive<T> {\n    /**\n     * @see _.before\n     */\n    before<TFunc extends (...args: any[]) => any>(func: TFunc): Function<TFunc>\n  }\n  interface PrimitiveChain<T> {\n    /**\n     * @see _.before\n     */\n    before<TFunc extends (...args: any[]) => any>(func: TFunc): FunctionChain<TFunc>\n  }\n  interface FunctionBind {\n    /**\n     * @see _.placeholder\n     */\n    placeholder: __\n    (func: (...args: any[]) => any, thisArg: any, ...partials: any[]): (...args: any[]) => any\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind\n     * arguments to those provided to the bound function.\n     *\n     * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for\n     * partially applied arguments.\n     *\n     * Note: Unlike native Function#bind this method does not set the \"length\" property of bound functions.\n     *\n     * @param func The function to bind.\n     * @param thisArg The this binding of func.\n     * @param partials The arguments to be partially applied.\n     * @return Returns the new bound function.\n     */\n    bind: FunctionBind\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.bind\n     */\n    bind(thisArg: any, ...partials: any[]): Function<(...args: any[]) => any>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.bind\n     */\n    bind(thisArg: any, ...partials: any[]): FunctionChain<(...args: any[]) => any>\n  }\n  interface FunctionBindKey {\n    placeholder: __\n    (object: object, key: string, ...partials: any[]): (...args: any[]) => any\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments\n     * to those provided to the bound function.\n     *\n     * This method differs from _.bind by allowing bound functions to reference methods that may be redefined\n     * or don\u2019t yet exist. See Peter Michaux\u2019s article for more details.\n     *\n     * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder\n     * for partially applied arguments.\n     *\n     * @param object The object the method belongs to.\n     * @param key The key of the method.\n     * @param partials The arguments to be partially applied.\n     * @return Returns the new bound function.\n     */\n    bindKey: FunctionBindKey\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.bindKey\n     */\n    bindKey(key: string, ...partials: any[]): Function<(...args: any[]) => any>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.bindKey\n     */\n    bindKey(key: string, ...partials: any[]): FunctionChain<(...args: any[]) => any>\n  }\n  interface Curry {\n    <T1, R>(func: (t1: T1) => R, arity?: number): CurriedFunction1<T1, R>\n    <T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number): CurriedFunction2<T1, T2, R>\n    <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number): CurriedFunction3<T1, T2, T3, R>\n    <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number): CurriedFunction4<\n      T1,\n      T2,\n      T3,\n      T4,\n      R\n    >\n    <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number): CurriedFunction5<\n      T1,\n      T2,\n      T3,\n      T4,\n      T5,\n      R\n    >\n    (func: (...args: any[]) => any, arity?: number): (...args: any[]) => any\n    placeholder: __\n  }\n  interface LoDashStatic {\n    curry: Curry\n  }\n  interface CurriedFunction1<T1, R> {\n    (): CurriedFunction1<T1, R>\n    (t1: T1): R\n  }\n  interface CurriedFunction2<T1, T2, R> {\n    (): CurriedFunction2<T1, T2, R>\n    (t1: T1): CurriedFunction1<T2, R>\n    (t1: __, t2: T2): CurriedFunction1<T1, R>\n    (t1: T1, t2: T2): R\n  }\n  interface CurriedFunction3<T1, T2, T3, R> {\n    (): CurriedFunction3<T1, T2, T3, R>\n    (t1: T1): CurriedFunction2<T2, T3, R>\n    (t1: __, t2: T2): CurriedFunction2<T1, T3, R>\n    (t1: T1, t2: T2): CurriedFunction1<T3, R>\n    (t1: __, t2: __, t3: T3): CurriedFunction2<T1, T2, R>\n    (t1: T1, t2: __, t3: T3): CurriedFunction1<T2, R>\n    (t1: __, t2: T2, t3: T3): CurriedFunction1<T1, R>\n    (t1: T1, t2: T2, t3: T3): R\n  }\n  interface CurriedFunction4<T1, T2, T3, T4, R> {\n    (): CurriedFunction4<T1, T2, T3, T4, R>\n    (t1: T1): CurriedFunction3<T2, T3, T4, R>\n    (t1: __, t2: T2): CurriedFunction3<T1, T3, T4, R>\n    (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>\n    (t1: __, t2: __, t3: T3): CurriedFunction3<T1, T2, T4, R>\n    (t1: __, t2: __, t3: T3): CurriedFunction2<T2, T4, R>\n    (t1: __, t2: T2, t3: T3): CurriedFunction2<T1, T4, R>\n    (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>\n    (t1: __, t2: __, t3: __, t4: T4): CurriedFunction3<T1, T2, T3, R>\n    (t1: T1, t2: __, t3: __, t4: T4): CurriedFunction2<T2, T3, R>\n    (t1: __, t2: T2, t3: __, t4: T4): CurriedFunction2<T1, T3, R>\n    (t1: __, t2: __, t3: T3, t4: T4): CurriedFunction2<T1, T2, R>\n    (t1: T1, t2: T2, t3: __, t4: T4): CurriedFunction1<T3, R>\n    (t1: T1, t2: __, t3: T3, t4: T4): CurriedFunction1<T2, R>\n    (t1: __, t2: T2, t3: T3, t4: T4): CurriedFunction1<T1, R>\n    (t1: T1, t2: T2, t3: T3, t4: T4): R\n  }\n  interface CurriedFunction5<T1, T2, T3, T4, T5, R> {\n    (): CurriedFunction5<T1, T2, T3, T4, T5, R>\n    (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>\n    (t1: __, t2: T2): CurriedFunction4<T1, T3, T4, T5, R>\n    (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>\n    (t1: __, t2: __, t3: T3): CurriedFunction4<T1, T2, T4, T5, R>\n    (t1: T1, t2: __, t3: T3): CurriedFunction3<T2, T4, T5, R>\n    (t1: __, t2: T2, t3: T3): CurriedFunction3<T1, T4, T5, R>\n    (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>\n    (t1: __, t2: __, t3: __, t4: T4): CurriedFunction4<T1, T2, T3, T5, R>\n    (t1: T1, t2: __, t3: __, t4: T4): CurriedFunction3<T2, T3, T5, R>\n    (t1: __, t2: T2, t3: __, t4: T4): CurriedFunction3<T1, T3, T5, R>\n    (t1: __, t2: __, t3: T3, t4: T4): CurriedFunction3<T1, T2, T5, R>\n    (t1: T1, t2: T2, t3: __, t4: T4): CurriedFunction2<T3, T5, R>\n    (t1: T1, t2: __, t3: T3, t4: T4): CurriedFunction2<T2, T5, R>\n    (t1: __, t2: T2, t3: T3, t4: T4): CurriedFunction2<T1, T5, R>\n    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>\n    (t1: __, t2: __, t3: __, t4: __, t5: T5): CurriedFunction4<T1, T2, T3, T4, R>\n    (t1: T1, t2: __, t3: __, t4: __, t5: T5): CurriedFunction3<T2, T3, T4, R>\n    (t1: __, t2: T2, t3: __, t4: __, t5: T5): CurriedFunction3<T1, T3, T4, R>\n    (t1: __, t2: __, t3: T3, t4: __, t5: T5): CurriedFunction3<T1, T2, T4, R>\n    (t1: __, t2: __, t3: __, t4: T4, t5: T5): CurriedFunction3<T1, T2, T3, R>\n    (t1: T1, t2: T2, t3: __, t4: __, t5: T5): CurriedFunction2<T3, T4, R>\n    (t1: T1, t2: __, t3: T3, t4: __, t5: T5): CurriedFunction2<T2, T4, R>\n    (t1: T1, t2: __, t3: __, t4: T4, t5: T5): CurriedFunction2<T2, T3, R>\n    (t1: __, t2: T2, t3: T3, t4: __, t5: T5): CurriedFunction2<T1, T4, R>\n    (t1: __, t2: T2, t3: __, t4: T4, t5: T5): CurriedFunction2<T1, T3, R>\n    (t1: __, t2: __, t3: T3, t4: T4, t5: T5): CurriedFunction2<T1, T2, R>\n    (t1: T1, t2: T2, t3: T3, t4: __, t5: T5): CurriedFunction1<T4, R>\n    (t1: T1, t2: T2, t3: __, t4: T4, t5: T5): CurriedFunction1<T3, R>\n    (t1: T1, t2: __, t3: T3, t4: T4, t5: T5): CurriedFunction1<T2, R>\n    (t1: __, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction1<T1, R>\n    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R\n  }\n  interface RightCurriedFunction1<T1, R> {\n    (): RightCurriedFunction1<T1, R>\n    (t1: T1): R\n  }\n  interface RightCurriedFunction2<T1, T2, R> {\n    (): RightCurriedFunction2<T1, T2, R>\n    (t2: T2): RightCurriedFunction1<T1, R>\n    (t1: T1, t2: __): RightCurriedFunction1<T2, R>\n    (t1: T1, t2: T2): R\n  }\n  interface RightCurriedFunction3<T1, T2, T3, R> {\n    (): RightCurriedFunction3<T1, T2, T3, R>\n    (t3: T3): RightCurriedFunction2<T1, T2, R>\n    (t2: T2, t3: __): RightCurriedFunction2<T1, T3, R>\n    (t2: T2, t3: T3): RightCurriedFunction1<T1, R>\n    (t1: T1, t2: __, t3: __): RightCurriedFunction2<T2, T3, R>\n    (t1: T1, t2: T2, t3: __): RightCurriedFunction1<T3, R>\n    (t1: T1, t2: __, t3: T3): RightCurriedFunction1<T2, R>\n    (t1: T1, t2: T2, t3: T3): R\n  }\n  interface RightCurriedFunction4<T1, T2, T3, T4, R> {\n    (): RightCurriedFunction4<T1, T2, T3, T4, R>\n    (t4: T4): RightCurriedFunction3<T1, T2, T3, R>\n    (t3: T3, t4: __): RightCurriedFunction3<T1, T2, T4, R>\n    (t3: T3, t4: T4): RightCurriedFunction2<T1, T2, R>\n    (t2: T2, t3: __, t4: __): RightCurriedFunction3<T1, T3, T4, R>\n    (t2: T2, t3: T3, t4: __): RightCurriedFunction2<T1, T4, R>\n    (t2: T2, t3: __, t4: T4): RightCurriedFunction2<T1, T3, R>\n    (t2: T2, t3: T3, t4: T4): RightCurriedFunction1<T1, R>\n    (t1: T1, t2: __, t3: __, t4: __): RightCurriedFunction3<T2, T3, T4, R>\n    (t1: T1, t2: T2, t3: __, t4: __): RightCurriedFunction2<T3, T4, R>\n    (t1: T1, t2: __, t3: T3, t4: __): RightCurriedFunction2<T2, T4, R>\n    (t1: T1, t2: __, t3: __, t4: T4): RightCurriedFunction2<T2, T3, R>\n    (t1: T1, t2: T2, t3: T3, t4: __): RightCurriedFunction1<T4, R>\n    (t1: T1, t2: T2, t3: __, t4: T4): RightCurriedFunction1<T3, R>\n    (t1: T1, t2: __, t3: T3, t4: T4): RightCurriedFunction1<T2, R>\n    (t1: T1, t2: T2, t3: T3, t4: T4): R\n  }\n  interface RightCurriedFunction5<T1, T2, T3, T4, T5, R> {\n    (): RightCurriedFunction5<T1, T2, T3, T4, T5, R>\n    (t5: T5): RightCurriedFunction4<T1, T2, T3, T4, R>\n    (t4: T4, t5: __): RightCurriedFunction4<T1, T2, T3, T5, R>\n    (t4: T4, t5: T5): RightCurriedFunction3<T1, T2, T3, R>\n    (t3: T3, t4: __, t5: __): RightCurriedFunction4<T1, T2, T4, T5, R>\n    (t3: T3, t4: T4, t5: __): RightCurriedFunction3<T1, T2, T5, R>\n    (t3: T3, t4: __, t5: T5): RightCurriedFunction3<T1, T2, T4, R>\n    (t3: T3, t4: T4, t5: T5): RightCurriedFunction2<T1, T2, R>\n    (t2: T2, t3: __, t4: __, t5: __): RightCurriedFunction4<T1, T3, T4, T5, R>\n    (t2: T2, t3: T3, t4: __, t5: __): RightCurriedFunction3<T1, T4, T5, R>\n    (t2: T2, t3: __, t4: T4, t5: __): RightCurriedFunction3<T1, T3, T5, R>\n    (t2: T2, t3: __, t4: __, t5: T5): RightCurriedFunction3<T1, T3, T4, R>\n    (t2: T2, t3: T3, t4: T4, t5: __): RightCurriedFunction2<T1, T5, R>\n    (t2: T2, t3: T3, t4: __, t5: T5): RightCurriedFunction2<T1, T4, R>\n    (t2: T2, t3: __, t4: T4, t5: T5): RightCurriedFunction2<T1, T3, R>\n    (t2: T2, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T1, R>\n    (t1: T1, t2: __, t3: __, t4: __, t5: __): RightCurriedFunction4<T2, T3, T4, T5, R>\n    (t1: T1, t2: T2, t3: __, t4: __, t5: __): RightCurriedFunction3<T3, T4, T5, R>\n    (t1: T1, t2: __, t3: T3, t4: __, t5: __): RightCurriedFunction3<T2, T4, T5, R>\n    (t1: T1, t2: __, t3: __, t4: T4, t5: __): RightCurriedFunction3<T2, T3, T5, R>\n    (t1: T1, t2: __, t3: __, t4: __, t5: T5): RightCurriedFunction3<T2, T3, T4, R>\n    (t1: T1, t2: T2, t3: T3, t4: __, t5: __): RightCurriedFunction2<T4, T5, R>\n    (t1: T1, t2: T2, t3: __, t4: T4, t5: __): RightCurriedFunction2<T3, T5, R>\n    (t1: T1, t2: T2, t3: __, t4: __, t5: T5): RightCurriedFunction2<T3, T4, R>\n    (t1: T1, t2: __, t3: T3, t4: T4, t5: __): RightCurriedFunction2<T2, T5, R>\n    (t1: T1, t2: __, t3: T3, t4: __, t5: T5): RightCurriedFunction2<T2, T4, R>\n    (t1: T1, t2: __, t3: __, t4: T4, t5: T5): RightCurriedFunction2<T2, T3, R>\n    (t1: T1, t2: T2, t3: T3, t4: T4, t5: __): RightCurriedFunction1<T5, R>\n    (t1: T1, t2: T2, t3: T3, t4: __, t5: T5): RightCurriedFunction1<T4, R>\n    (t1: T1, t2: T2, t3: __, t4: T4, t5: T5): RightCurriedFunction1<T3, R>\n    (t1: T1, t2: __, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T2, R>\n    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.curry\n     */\n    curry(\n      arity?: number,\n    ): T extends (arg1: infer T1) => infer R\n      ? Function<CurriedFunction1<T1, R>>\n      : T extends (arg1: infer T1, arg2: infer T2) => infer R\n      ? Function<CurriedFunction2<T1, T2, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R\n      ? Function<CurriedFunction3<T1, T2, T3, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R\n      ? Function<CurriedFunction4<T1, T2, T3, T4, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R\n      ? Function<CurriedFunction5<T1, T2, T3, T4, T5, R>>\n      : Function<(...args: any[]) => any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.curry\n     */\n    curry(\n      arity?: number,\n    ): T extends (arg1: infer T1) => infer R\n      ? FunctionChain<CurriedFunction1<T1, R>>\n      : T extends (arg1: infer T1, arg2: infer T2) => infer R\n      ? FunctionChain<CurriedFunction2<T1, T2, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R\n      ? FunctionChain<CurriedFunction3<T1, T2, T3, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R\n      ? FunctionChain<CurriedFunction4<T1, T2, T3, T4, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R\n      ? FunctionChain<CurriedFunction5<T1, T2, T3, T4, T5, R>>\n      : FunctionChain<(...args: any[]) => any>\n  }\n  interface CurryRight {\n    <T1, R>(func: (t1: T1) => R, arity?: number): RightCurriedFunction1<T1, R>\n    <T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number): RightCurriedFunction2<T1, T2, R>\n    <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number): RightCurriedFunction3<T1, T2, T3, R>\n    <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number): RightCurriedFunction4<\n      T1,\n      T2,\n      T3,\n      T4,\n      R\n    >\n    <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number): RightCurriedFunction5<\n      T1,\n      T2,\n      T3,\n      T4,\n      T5,\n      R\n    >\n    (func: (...args: any[]) => any, arity?: number): (...args: any[]) => any\n    placeholder: __\n  }\n  interface LoDashStatic {\n    curryRight: CurryRight\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.curryRight\n     */\n    curryRight(\n      arity?: number,\n    ): T extends (arg1: infer T1) => infer R\n      ? Function<RightCurriedFunction1<T1, R>>\n      : T extends (arg1: infer T1, arg2: infer T2) => infer R\n      ? Function<RightCurriedFunction2<T1, T2, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R\n      ? Function<RightCurriedFunction3<T1, T2, T3, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R\n      ? Function<RightCurriedFunction4<T1, T2, T3, T4, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R\n      ? Function<RightCurriedFunction5<T1, T2, T3, T4, T5, R>>\n      : Function<(...args: any[]) => any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.curryRight\n     */\n    curryRight(\n      arity?: number,\n    ): T extends (arg1: infer T1) => infer R\n      ? FunctionChain<RightCurriedFunction1<T1, R>>\n      : T extends (arg1: infer T1, arg2: infer T2) => infer R\n      ? FunctionChain<RightCurriedFunction2<T1, T2, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R\n      ? FunctionChain<RightCurriedFunction3<T1, T2, T3, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R\n      ? FunctionChain<RightCurriedFunction4<T1, T2, T3, T4, R>>\n      : T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R\n      ? FunctionChain<RightCurriedFunction5<T1, T2, T3, T4, T5, R>>\n      : FunctionChain<(...args: any[]) => any>\n  }\n  interface DebounceSettings {\n    /**\n     * @see _.leading\n     */\n    leading?: boolean\n    /**\n     * @see _.maxWait\n     */\n    maxWait?: number\n    /**\n     * @see _.trailing\n     */\n    trailing?: boolean\n  }\n  interface DebouncedFunc<T extends (...args: any[]) => any> {\n    /**\n     * Call the original function, but applying the debounce rules.\n     *\n     * If the debounced function can be run immediately, this calls it and returns its return\n     * value.\n     *\n     * Otherwise, it returns the return value of the last invokation, or undefined if the debounced\n     * function was not invoked yet.\n     */\n    (...args: Parameters<T>): ReturnType<T> | undefined\n\n    /**\n     * Throw away any pending invokation of the debounced function.\n     */\n    cancel(): void\n\n    /**\n     * If there is a pending invokation of the debounced function, invoke it immediately and return\n     * its return value.\n     *\n     * Otherwise, return the value from the last invokation, or undefined if the debounced function\n     * was never invoked.\n     */\n    flush(): ReturnType<T> | undefined\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since\n     * the last time the debounced function was invoked. The debounced function comes with a cancel method to\n     * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to\n     * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent\n     * calls to the debounced function return the result of the last func invocation.\n     *\n     * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only\n     * if the the debounced function is invoked more than once during the wait timeout.\n     *\n     * See David Corbacho\u2019s article for details over the differences between _.debounce and _.throttle.\n     *\n     * @param func The function to debounce.\n     * @param wait The number of milliseconds to delay.\n     * @param options The options object.\n     * @param options.leading Specify invoking on the leading edge of the timeout.\n     * @param options.maxWait The maximum time func is allowed to be delayed before it\u2019s invoked.\n     * @param options.trailing Specify invoking on the trailing edge of the timeout.\n     * @return Returns the new debounced function.\n     */\n    debounce<T extends (...args: any) => any>(func: T, wait?: number, options?: DebounceSettings): DebouncedFunc<T>\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.debounce\n     */\n    debounce(\n      wait?: number,\n      options?: DebounceSettings,\n    ): T extends (...args: any[]) => any ? Function<DebouncedFunc<T>> : never\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.debounce\n     */\n    debounce(\n      wait?: number,\n      options?: DebounceSettings,\n    ): T extends (...args: any[]) => any ? FunctionChain<DebouncedFunc<T>> : never\n  }\n  interface LoDashStatic {\n    /**\n     * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to\n     * func when it\u2019s invoked.\n     *\n     * @param func The function to defer.\n     * @param args The arguments to invoke the function with.\n     * @return Returns the timer id.\n     */\n    defer(func: (...args: any[]) => any, ...args: any[]): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.defer\n     */\n    defer(...args: any[]): Primitive<number>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.defer\n     */\n    defer(...args: any[]): PrimitiveChain<number>\n  }\n  interface LoDashStatic {\n    /**\n     * Invokes func after wait milliseconds. Any additional arguments are provided to func when it\u2019s invoked.\n     *\n     * @param func The function to delay.\n     * @param wait The number of milliseconds to delay invocation.\n     * @param args The arguments to invoke the function with.\n     * @return Returns the timer id.\n     */\n    delay(func: (...args: any[]) => any, wait: number, ...args: any[]): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.delay\n     */\n    delay(wait: number, ...args: any[]): Primitive<number>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.delay\n     */\n    delay(wait: number, ...args: any[]): PrimitiveChain<number>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes `func` with arguments reversed.\n     *\n     * @category Function\n     * @param func The function to flip arguments for.\n     * @returns Returns the new function.\n     * @example\n     *\n     * var flipped = _.flip(function() {\n     *   return _.toArray(arguments);\n     * });\n     *\n     * flipped('a', 'b', 'c', 'd');\n     * // => ['d', 'c', 'b', 'a']\n     */\n    flip<T extends (...args: any) => any>(func: T): T\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.flip\n     */\n    flip(): this\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.flip\n     */\n    flip(): this\n  }\n  interface MemoizedFunction {\n    /**\n     * @see _.cache\n     */\n    cache: MapCache\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for\n     * storing the result based on the arguments provided to the memoized function. By default, the first argument\n     * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with\n     * the this binding of the memoized function.\n     *\n     * @param func The function to have its output memoized.\n     * @param resolver The function to resolve the cache key.\n     * @return Returns the new memoizing function.\n     */\n    memoize: {\n      <T extends (...args: any) => any>(func: T, resolver?: (...args: any[]) => any): T & MemoizedFunction\n      Cache: MapCacheConstructor\n    }\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.memoize\n     */\n    memoize(resolver?: (...args: any[]) => any): Function<T & MemoizedFunction>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.memoize\n     */\n    memoize(resolver?: (...args: any[]) => any): FunctionChain<T & MemoizedFunction>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that negates the result of the predicate func. The func predicate is invoked with\n     * the this binding and arguments of the created function.\n     *\n     * @param predicate The predicate to negate.\n     * @return Returns the new function.\n     */\n    negate<T extends any[]>(predicate: (...args: T) => boolean): (...args: T) => boolean\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.negate\n     */\n    negate(): Function<(...args: Parameters<T>) => boolean>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.negate\n     */\n    negate(): FunctionChain<(...args: Parameters<T>) => boolean>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value\n     * of the first call. The func is invoked with the this binding and arguments of the created function.\n     *\n     * @param func The function to restrict.\n     * @return Returns the new restricted function.\n     */\n    once<T extends (...args: any) => any>(func: T): T\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.once\n     */\n    once(): Function<T>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.once\n     */\n    once(): FunctionChain<T>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that runs each argument through a corresponding transform function.\n     *\n     * @param func The function to wrap.\n     * @param transforms The functions to transform arguments, specified as individual functions or arrays\n     * of functions.\n     * @return Returns the new function.\n     */\n    overArgs(\n      func: (...args: any[]) => any,\n      ...transforms: Array<Many<(...args: any[]) => any>>\n    ): (...args: any[]) => any\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.overArgs\n     */\n    overArgs(...transforms: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.overArgs\n     */\n    overArgs(...transforms: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that, when called, invokes func with any additional partial arguments\n     * prepended to those provided to the new function. This method is similar to _.bind except\n     * it does not alter the this binding.\n     * @param func The function to partially apply arguments to.\n     * @param args Arguments to be partially applied.\n     * @return The new partially applied function.\n     */\n    partial: Partial\n  }\n  type __ = LoDashStatic\n  type Function0<R> = () => R\n  type Function1<T1, R> = (t1: T1) => R\n  type Function2<T1, T2, R> = (t1: T1, t2: T2) => R\n  type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R\n  type Function4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R\n  interface Partial {\n    <T1, T2, R>(func: Function2<T1, T2, R>, plc1: __, arg2: T2): Function1<T1, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2): Function2<T1, T3, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, plc2: __, arg3: T3): Function2<T1, T2, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2, arg3: T3): Function1<T1, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2): Function3<T1, T3, T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, arg3: T3): Function3<T1, T2, T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3): Function2<T2, T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, arg3: T3): Function2<T1, T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3): Function1<T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, plc3: __, arg4: T4): Function3<\n      T1,\n      T2,\n      T3,\n      R\n    >\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, arg4: T4): Function2<\n      T2,\n      T3,\n      R\n    >\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, plc3: __, arg4: T4): Function2<\n      T1,\n      T3,\n      R\n    >\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Function1<T3, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, arg3: T3, arg4: T4): Function2<\n      T1,\n      T2,\n      R\n    >\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Function1<T2, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>\n    <TS extends any[], R>(func: (...ts: TS) => R): (...ts: TS) => R\n    <TS extends any[], T1, R>(func: (t1: T1, ...ts: TS) => R, arg1: T1): (...ts: TS) => R\n    <TS extends any[], T1, T2, R>(func: (t1: T1, t2: T2, ...ts: TS) => R, t1: T1, t2: T2): (...ts: TS) => R\n    <TS extends any[], T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3, ...ts: TS) => R, t1: T1, t2: T2, t3: T3): (\n      ...ts: TS\n    ) => R\n    <TS extends any[], T1, T2, T3, T4, R>(\n      func: (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: TS) => R,\n      t1: T1,\n      t2: T2,\n      t3: T3,\n      t4: T4,\n    ): (...ts: TS) => R\n    placeholder: __\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.partial\n     */\n    partial<T2>(\n      plc1: __,\n      arg2: T2,\n    ): Function<\n      T extends Function2<infer T1, T2, infer R>\n        ? Function1<T1, R>\n        : T extends Function3<infer T1, T2, infer T3, infer R>\n        ? Function2<T1, T3, R>\n        : T extends Function4<infer T1, T2, infer T3, infer T4, infer R>\n        ? Function3<T1, T3, T4, R>\n        : any\n    >\n    /**\n     * @see _.partial\n     */\n    partial<T3>(\n      plc1: __,\n      plc2: __,\n      arg3: T3,\n    ): Function<\n      T extends Function3<infer T1, infer T2, T3, infer R>\n        ? Function2<T1, T2, R>\n        : T extends Function4<infer T1, infer T2, T3, infer T4, infer R>\n        ? Function3<T1, T2, T4, R>\n        : any\n    >\n    /**\n     * @see _.partial\n     */\n    partial<T1, T3>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n    ): Function<\n      T extends Function3<T1, infer T2, T3, infer R>\n        ? Function1<T2, R>\n        : T extends Function4<T1, infer T2, T3, infer T4, infer R>\n        ? Function2<T2, T4, R>\n        : any\n    >\n    /**\n     * @see _.partial\n     */\n    partial<T2, T3>(\n      plc1: __,\n      arg2: T2,\n      arg3: T3,\n    ): Function<\n      T extends Function3<infer T1, T2, T3, infer R>\n        ? Function1<T1, R>\n        : T extends Function4<infer T1, T2, T3, infer T4, infer R>\n        ? Function2<T1, T4, R>\n        : any\n    >\n    /**\n     * @see _.partial\n     */\n    partial<T3>(\n      plc1: __,\n      plc2: __,\n      arg3: T3,\n    ): Function<T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T4>(\n      arg1: T1,\n      plc2: __,\n      plc3: __,\n      arg4: T4,\n    ): Function<T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T2, T4>(\n      plc1: __,\n      arg2: T2,\n      plc3: __,\n      arg4: T4,\n    ): Function<T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T2, T4>(\n      arg1: T1,\n      arg2: T2,\n      plc3: __,\n      arg4: T4,\n    ): Function<T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T3, T4>(\n      plc1: __,\n      plc2: __,\n      arg3: T3,\n      arg4: T4,\n    ): Function<T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T3, T4>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n      arg4: T4,\n    ): Function<T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T2, T3, T4>(\n      plc1: __,\n      arg2: T2,\n      arg3: T3,\n      arg4: T4,\n    ): Function<T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T2, T3, T4>(\n      arg1: T1,\n      arg2: T2,\n      arg3: T3,\n      arg4: T4,\n    ): Function<T extends (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: infer TS) => infer R ? (...ts: TS) => R : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T2, T3>(\n      arg1: T1,\n      arg2: T2,\n      arg3: T3,\n    ): Function<T extends (t1: T1, t2: T2, t3: T3, ...ts: infer TS) => infer R ? (...ts: TS) => R : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T2>(\n      arg1: T1,\n      arg2: T2,\n    ): Function<T extends (t1: T1, t2: T2, ...ts: infer TS) => infer R ? (...ts: TS) => R : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1>(arg1: T1): Function<T extends (t1: T1, ...ts: infer TS) => infer R ? (...ts: TS) => R : any>\n    /**\n     * @see _.partial\n     */\n    partial(): Function<T extends (...ts: any[]) => any ? T : any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.partial\n     */\n    partial<T2>(\n      plc1: __,\n      arg2: T2,\n    ): FunctionChain<\n      T extends Function2<infer T1, T2, infer R>\n        ? Function1<T1, R>\n        : T extends Function3<infer T1, T2, infer T3, infer R>\n        ? Function2<T1, T3, R>\n        : T extends Function4<infer T1, T2, infer T3, infer T4, infer R>\n        ? Function3<T1, T3, T4, R>\n        : any\n    >\n    /**\n     * @see _.partial\n     */\n    partial<T3>(\n      plc1: __,\n      plc2: __,\n      arg3: T3,\n    ): FunctionChain<\n      T extends Function3<infer T1, infer T2, T3, infer R>\n        ? Function2<T1, T2, R>\n        : T extends Function4<infer T1, infer T2, T3, infer T4, infer R>\n        ? Function3<T1, T2, T4, R>\n        : any\n    >\n    /**\n     * @see _.partial\n     */\n    partial<T1, T3>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n    ): FunctionChain<\n      T extends Function3<T1, infer T2, T3, infer R>\n        ? Function1<T2, R>\n        : T extends Function4<T1, infer T2, T3, infer T4, infer R>\n        ? Function2<T2, T4, R>\n        : any\n    >\n    /**\n     * @see _.partial\n     */\n    partial<T2, T3>(\n      plc1: __,\n      arg2: T2,\n      arg3: T3,\n    ): FunctionChain<\n      T extends Function3<infer T1, T2, T3, infer R>\n        ? Function1<T1, R>\n        : T extends Function4<infer T1, T2, T3, infer T4, infer R>\n        ? Function2<T1, T4, R>\n        : any\n    >\n    /**\n     * @see _.partial\n     */\n    partial<T3>(\n      plc1: __,\n      plc2: __,\n      arg3: T3,\n    ): FunctionChain<T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T4>(\n      arg1: T1,\n      plc2: __,\n      plc3: __,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T2, T4>(\n      plc1: __,\n      arg2: T2,\n      plc3: __,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T2, T4>(\n      arg1: T1,\n      arg2: T2,\n      plc3: __,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T3, T4>(\n      plc1: __,\n      plc2: __,\n      arg3: T3,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T3, T4>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T2, T3, T4>(\n      plc1: __,\n      arg2: T2,\n      arg3: T3,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T2, T3, T4>(\n      arg1: T1,\n      arg2: T2,\n      arg3: T3,\n      arg4: T4,\n    ): FunctionChain<T extends (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: infer TS) => infer R ? (...ts: TS) => R : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T2, T3>(\n      arg1: T1,\n      arg2: T2,\n      arg3: T3,\n    ): FunctionChain<T extends (t1: T1, t2: T2, t3: T3, ...ts: infer TS) => infer R ? (...ts: TS) => R : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1, T2>(\n      arg1: T1,\n      arg2: T2,\n    ): FunctionChain<T extends (t1: T1, t2: T2, ...ts: infer TS) => infer R ? (...ts: TS) => R : any>\n    /**\n     * @see _.partial\n     */\n    partial<T1>(arg1: T1): FunctionChain<T extends (t1: T1, ...ts: infer TS) => infer R ? (...ts: TS) => R : any>\n    /**\n     * @see _.partial\n     */\n    partial(): FunctionChain<T extends (...ts: any[]) => any ? T : any>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.partial except that partial arguments are appended to those provided\n     * to the new function.\n     * @param func The function to partially apply arguments to.\n     * @param args Arguments to be partially applied.\n     * @return The new partially applied function.\n     */\n    partialRight: PartialRight\n  }\n  interface PartialRight {\n    <R>(func: Function0<R>): Function0<R>\n    <T1, R>(func: Function1<T1, R>): Function1<T1, R>\n    <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>\n    <T1, T2, R>(func: Function2<T1, T2, R>): Function2<T1, T2, R>\n    <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, plc2: __): Function1<T2, R>\n    <T1, T2, R>(func: Function2<T1, T2, R>, arg2: T2): Function1<T1, R>\n    <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2): Function0<R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>): Function3<T1, T2, T3, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, plc3: __): Function2<T2, T3, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg2: T2, plc3: __): Function2<T1, T3, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, plc3: __): Function1<T3, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg3: T3): Function2<T1, T2, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg2: T2, arg3: T3): Function1<T1, R>\n    <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3): Function0<R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>): Function4<T1, T2, T3, T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, plc4: __): Function3<\n      T2,\n      T3,\n      T4,\n      R\n    >\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: __, plc4: __): Function3<T1, T3, T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, plc4: __): Function2<\n      T3,\n      T4,\n      R\n    >\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg3: T3, plc4: __): Function3<T1, T2, T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, plc4: __): Function2<\n      T2,\n      T4,\n      R\n    >\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, plc4: __): Function2<T1, T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, plc4: __): Function1<T4, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg4: T4): Function3<T1, T2, T3, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, arg4: T4): Function2<\n      T2,\n      T3,\n      R\n    >\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: __, arg4: T4): Function2<T1, T3, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Function1<T3, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg3: T3, arg4: T4): Function2<T1, T2, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Function1<T2, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>\n    <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function0<R>\n    (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any\n    placeholder: __\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1>(arg1: T1, plc2: __): Function<T extends Function2<T1, infer T2, infer R> ? Function1<T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2>(arg2: T2): Function<T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1>(\n      arg1: T1,\n      plc2: __,\n      plc3: __,\n    ): Function<T extends Function3<T1, infer T2, infer T3, infer R> ? Function2<T2, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2>(\n      arg2: T2,\n      plc3: __,\n    ): Function<T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T2>(\n      arg1: T1,\n      arg2: T2,\n      plc3: __,\n    ): Function<T extends Function3<T1, T2, infer T3, infer R> ? Function1<T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T3>(\n      arg3: T3,\n    ): Function<T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T3>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n    ): Function<T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2, T3>(\n      arg2: T2,\n      arg3: T3,\n    ): Function<T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1>(\n      arg1: T1,\n      plc2: __,\n      plc3: __,\n      plc4: __,\n    ): Function<T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function3<T2, T3, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2>(\n      arg2: T2,\n      plc3: __,\n      plc4: __,\n    ): Function<T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T2>(\n      arg1: T1,\n      arg2: T2,\n      plc3: __,\n      plc4: __,\n    ): Function<T extends Function4<T1, T2, infer T3, infer T4, infer R> ? Function2<T3, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T3>(\n      arg3: T3,\n      plc4: __,\n    ): Function<T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T3>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n      plc4: __,\n    ): Function<T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function2<T2, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2, T3>(\n      arg2: T2,\n      arg3: T3,\n      plc4: __,\n    ): Function<T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T2, T3>(\n      arg1: T1,\n      arg2: T2,\n      arg3: T3,\n      plc4: __,\n    ): Function<T extends Function4<T1, T2, T3, infer T4, infer R> ? Function1<T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T4>(\n      arg4: T4,\n    ): Function<T extends Function4<infer T1, infer T2, infer T3, T4, infer R> ? Function3<T1, T2, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T4>(\n      arg1: T1,\n      plc2: __,\n      plc3: __,\n      arg4: T4,\n    ): Function<T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2, T4>(\n      arg2: T2,\n      plc3: __,\n      arg4: T4,\n    ): Function<T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T2, T4>(\n      arg1: T1,\n      arg2: T2,\n      plc3: __,\n      arg4: T4,\n    ): Function<T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T3, T4>(\n      arg3: T3,\n      arg4: T4,\n    ): Function<T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T3, T4>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n      arg4: T4,\n    ): Function<T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2, T3, T4>(\n      arg2: T2,\n      arg3: T3,\n      arg4: T4,\n    ): Function<T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<TS extends any[]>(...ts: TS): Function<T extends (...args: TS) => infer R ? () => R : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight(): Function<T extends (...ts: any[]) => any ? T : any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1>(\n      arg1: T1,\n      plc2: __,\n    ): FunctionChain<T extends Function2<T1, infer T2, infer R> ? Function1<T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2>(arg2: T2): FunctionChain<T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1>(\n      arg1: T1,\n      plc2: __,\n      plc3: __,\n    ): FunctionChain<T extends Function3<T1, infer T2, infer T3, infer R> ? Function2<T2, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2>(\n      arg2: T2,\n      plc3: __,\n    ): FunctionChain<T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T2>(\n      arg1: T1,\n      arg2: T2,\n      plc3: __,\n    ): FunctionChain<T extends Function3<T1, T2, infer T3, infer R> ? Function1<T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T3>(\n      arg3: T3,\n    ): FunctionChain<T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T3>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n    ): FunctionChain<T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2, T3>(\n      arg2: T2,\n      arg3: T3,\n    ): FunctionChain<T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1>(\n      arg1: T1,\n      plc2: __,\n      plc3: __,\n      plc4: __,\n    ): FunctionChain<T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function3<T2, T3, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2>(\n      arg2: T2,\n      plc3: __,\n      plc4: __,\n    ): FunctionChain<T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T2>(\n      arg1: T1,\n      arg2: T2,\n      plc3: __,\n      plc4: __,\n    ): FunctionChain<T extends Function4<T1, T2, infer T3, infer T4, infer R> ? Function2<T3, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T3>(\n      arg3: T3,\n      plc4: __,\n    ): FunctionChain<T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T3>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n      plc4: __,\n    ): FunctionChain<T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function2<T2, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2, T3>(\n      arg2: T2,\n      arg3: T3,\n      plc4: __,\n    ): FunctionChain<T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T2, T3>(\n      arg1: T1,\n      arg2: T2,\n      arg3: T3,\n      plc4: __,\n    ): FunctionChain<T extends Function4<T1, T2, T3, infer T4, infer R> ? Function1<T4, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T4>(\n      arg4: T4,\n    ): FunctionChain<T extends Function4<infer T1, infer T2, infer T3, T4, infer R> ? Function3<T1, T2, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T4>(\n      arg1: T1,\n      plc2: __,\n      plc3: __,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2, T4>(\n      arg2: T2,\n      plc3: __,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T2, T4>(\n      arg1: T1,\n      arg2: T2,\n      plc3: __,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T3, T4>(\n      arg3: T3,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T1, T3, T4>(\n      arg1: T1,\n      plc2: __,\n      arg3: T3,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<T2, T3, T4>(\n      arg2: T2,\n      arg3: T3,\n      arg4: T4,\n    ): FunctionChain<T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight<TS extends any[]>(...ts: TS): FunctionChain<T extends (...args: TS) => infer R ? () => R : any>\n    /**\n     * @see _.partialRight\n     */\n    partialRight(): FunctionChain<T extends (...ts: any[]) => any ? T : any>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes func with arguments arranged according to the specified indexes where the\n     * argument value at the first index is provided as the first argument, the argument value at the second index\n     * is provided as the second argument, and so on.\n     * @param func The function to rearrange arguments for.\n     * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.\n     * @return Returns the new function.\n     */\n    rearg(func: (...args: any[]) => any, ...indexes: Array<Many<number>>): (...args: any[]) => any\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.rearg\n     */\n    rearg(...indexes: Array<Many<number>>): Function<(...args: any[]) => any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.rearg\n     */\n    rearg(...indexes: Array<Many<number>>): FunctionChain<(...args: any[]) => any>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes func with the this binding of the created function and arguments from start\n     * and beyond provided as an array.\n     *\n     * Note: This method is based on the rest parameter.\n     *\n     * @param func The function to apply a rest parameter to.\n     * @param start The start position of the rest parameter.\n     * @return Returns the new function.\n     */\n    rest(func: (...args: any[]) => any, start?: number): (...args: any[]) => any\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.rest\n     */\n    rest(start?: number): Function<(...args: any[]) => any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.rest\n     */\n    rest(start?: number): FunctionChain<(...args: any[]) => any>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes func with the this binding of the created function and an array of arguments\n     * much like Function#apply.\n     *\n     * Note: This method is based on the spread operator.\n     *\n     * @param func The function to spread arguments over.\n     * @return Returns the new function.\n     */\n    spread<TResult>(func: (...args: any[]) => TResult, start?: number): (...args: any[]) => TResult\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.spread\n     */\n    spread(start?: number): Function<(...args: any[]) => ReturnType<T>>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.spread\n     */\n    spread(start?: number): FunctionChain<(...args: any[]) => ReturnType<T>>\n  }\n  interface ThrottleSettings {\n    /**\n     * @see _.leading\n     */\n    leading?: boolean\n    /**\n     * @see _.trailing\n     */\n    trailing?: boolean\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled\n     * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke\n     * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge\n     * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.\n     *\n     * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if\n     * the the throttled function is invoked more than once during the wait timeout.\n     *\n     * @param func The function to throttle.\n     * @param wait The number of milliseconds to throttle invocations to.\n     * @param options The options object.\n     * @param options.leading Specify invoking on the leading edge of the timeout.\n     * @param options.trailing Specify invoking on the trailing edge of the timeout.\n     * @return Returns the new throttled function.\n     */\n    throttle<T extends (...args: any) => any>(func: T, wait?: number, options?: ThrottleSettings): DebouncedFunc<T>\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.throttle\n     */\n    throttle(\n      wait?: number,\n      options?: ThrottleSettings,\n    ): T extends (...args: any[]) => any ? Function<DebouncedFunc<T>> : never\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.throttle\n     */\n    throttle(\n      wait?: number,\n      options?: ThrottleSettings,\n    ): T extends (...args: any[]) => any ? FunctionChain<DebouncedFunc<T>> : never\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that accepts up to one argument, ignoring any\n     * additional arguments.\n     *\n     * @category Function\n     * @param func The function to cap arguments for.\n     * @returns Returns the new function.\n     * @example\n     *\n     * _.map(['6', '8', '10'], _.unary(parseInt));\n     * // => [6, 8, 10]\n     */\n    unary<T, TResult>(func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.unary\n     */\n    unary(): Function<(arg1: Parameters<T>['0']) => ReturnType<T>>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.unary\n     */\n    unary(): FunctionChain<(arg1: Parameters<T>['0']) => ReturnType<T>>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that provides value to the wrapper function as its first argument. Any additional\n     * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is\n     * invoked with the this binding of the created function.\n     *\n     * @param value The value to wrap.\n     * @param wrapper The wrapper function.\n     * @return Returns the new function.\n     */\n    wrap<T, TArgs, TResult>(value: T, wrapper: (value: T, ...args: TArgs[]) => TResult): (...args: TArgs[]) => TResult\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.wrap\n     */\n    wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): Function<(...args: TArgs[]) => TResult>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.wrap\n     */\n    wrap<TArgs, TResult>(\n      wrapper: (value: TValue, ...args: TArgs[]) => TResult,\n    ): FunctionChain<(...args: TArgs[]) => TResult>\n  }\n}\n", "@types/lodash/common/function.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\n// tslint:disable-next-line:strict-export-declare-modifiers\ntype GlobalFunction = Function\ndeclare module '../index' {\n  type FunctionBase = GlobalFunction\n  interface LoDashStatic {\n    /**\n     * Casts value as an array if it\u2019s not one.\n     *\n     * @param value The value to inspect.\n     * @return Returns the cast array.\n     */\n    castArray<T>(value?: Many<T>): T[]\n  }\n  interface Collection<T> {\n    /**\n     * @see _.castArray\n     */\n    castArray(): Collection<T>\n  }\n  interface String {\n    /**\n     * @see _.castArray\n     */\n    castArray(): Collection<string>\n  }\n  interface Object<T> {\n    /**\n     * @see _.castArray\n     */\n    castArray(): Collection<T>\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.castArray\n     */\n    castArray(): Collection<T>\n  }\n  interface Primitive<T> {\n    /**\n     * @see _.castArray\n     */\n    castArray(): Collection<T>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.castArray\n     */\n    castArray(): CollectionChain<T>\n  }\n  interface StringChain {\n    /**\n     * @see _.castArray\n     */\n    castArray(): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.castArray\n     */\n    castArray(): CollectionChain<string | undefined>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.castArray\n     */\n    castArray(): CollectionChain<T>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.castArray\n     */\n    castArray(): CollectionChain<T>\n  }\n  interface PrimitiveChain<T> {\n    /**\n     * @see _.castArray\n     */\n    castArray(): CollectionChain<T>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a shallow clone of value.\n     *\n     * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,\n     * array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols,\n     * and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty\n     * object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.\n     *\n     * @param value The value to clone.\n     * @return Returns the cloned value.\n     */\n    clone<T>(value: T): T\n  }\n\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.clone\n     */\n    clone(): TValue\n    /**\n     * @see _.cloneDeep\n     */\n    cloneDeep(): TValue\n    /**\n     * @see _.cloneDeepWith\n     */\n    cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): any\n    /**\n     * @see _.cloneDeepWith\n     */\n    cloneDeepWith(): TValue\n    /**\n     * @see _.cloneWith\n     */\n    cloneWith<TResult extends object | string | number | boolean | null>(\n      customizer: CloneWithCustomizer<TValue, TResult>,\n    ): TResult\n    /**\n     * @see _.cloneWith\n     */\n    cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): TResult | TValue\n    /**\n     * @see _.cloneWith\n     */\n    cloneWith(): TValue\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.clone\n     */\n    clone(): this\n    /**\n     * @see _.cloneDeep\n     */\n    cloneDeep(): this\n    /**\n     * @see _.cloneDeepWith\n     */\n    cloneDeepWith(customizer: CloneDeepWithCustomizer<TValue>): LoDashExplicitWrapper<any>\n    /**\n     * @see _.cloneDeepWith\n     */\n    cloneDeepWith(): this\n    /**\n     * @see _.cloneWith\n     */\n    cloneWith<TResult extends object | string | number | boolean | null>(\n      customizer: CloneWithCustomizer<TValue, TResult>,\n    ): ExpChain<TResult>\n    /**\n     * @see _.cloneWith\n     */\n    cloneWith<TResult>(customizer: CloneWithCustomizer<TValue, TResult | undefined>): ExpChain<TResult | TValue>\n    /**\n     * @see _.cloneWith\n     */\n    cloneWith(): this\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method is like _.clone except that it recursively clones value.\n     *\n     * @param value The value to recursively clone.\n     * @return Returns the deep cloned value.\n     */\n    cloneDeep<T>(value: T): T\n  }\n  type CloneDeepWithCustomizer<TObject> = (\n    value: any,\n    key: number | string | undefined,\n    object: TObject | undefined,\n    stack: any,\n  ) => any\n  interface LoDashStatic {\n    /**\n     * This method is like _.cloneWith except that it recursively clones value.\n     *\n     * @param value The value to recursively clone.\n     * @param customizer The function to customize cloning.\n     * @return Returns the deep cloned value.\n     */\n    cloneDeepWith<T>(value: T, customizer: CloneDeepWithCustomizer<T>): any\n    /**\n     * @see _.cloneDeepWith\n     */\n    cloneDeepWith<T>(value: T): T\n  }\n  type CloneWithCustomizer<TValue, TResult> = (\n    value: TValue,\n    key: number | string | undefined,\n    object: any,\n    stack: any,\n  ) => TResult\n  interface LoDashStatic {\n    /**\n     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.\n     * If customizer returns undefined cloning is handled by the method instead.\n     *\n     * @param value The value to clone.\n     * @param customizer The function to customize cloning.\n     * @return Returns the cloned value.\n     */\n    cloneWith<T, TResult extends object | string | number | boolean | null>(\n      value: T,\n      customizer: CloneWithCustomizer<T, TResult>,\n    ): TResult\n    /**\n     * @see _.cloneWith\n     */\n    cloneWith<T, TResult>(value: T, customizer: CloneWithCustomizer<T, TResult | undefined>): TResult | T\n    /**\n     * @see _.cloneWith\n     */\n    cloneWith<T>(value: T): T\n  }\n  interface LoDashStatic {\n    /**\n     * Checks if object conforms to source by invoking the predicate properties of source with the\n     * corresponding property values of object.\n     *\n     * Note: This method is equivalent to _.conforms when source is partially applied.\n     */\n    conformsTo<T>(object: T, source: ConformsPredicateObject<T>): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.conformsTo\n     */\n    conformsTo(source: ConformsPredicateObject<TValue>): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.conformsTo\n     */\n    conformsTo(source: ConformsPredicateObject<TValue>): PrimitiveChain<boolean>\n  }\n  type CondPair<T, R> = [(val: T) => boolean, (val: T) => R]\n  interface LoDashStatic {\n    /**\n     * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)\n     * comparison between two values to determine if they are equivalent.\n     *\n     * @category Lang\n     * @param value The value to compare.\n     * @param other The other value to compare.\n     * @returns Returns `true` if the values are equivalent, else `false`.\n     * @example\n     *\n     * var object = { 'user': 'fred' };\n     * var other = { 'user': 'fred' };\n     *\n     * _.eq(object, object);\n     * // => true\n     *\n     * _.eq(object, other);\n     * // => false\n     *\n     * _.eq('a', 'a');\n     * // => true\n     *\n     * _.eq('a', Object('a'));\n     * // => false\n     *\n     * _.eq(NaN, NaN);\n     * // => true\n     */\n    eq(value: any, other: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.eq\n     */\n    eq(other: any): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.eq\n     */\n    eq(other: any): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is greater than other.\n     *\n     * @param value The value to compare.\n     * @param other The other value to compare.\n     * @return Returns true if value is greater than other, else false.\n     */\n    gt(value: any, other: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.gt\n     */\n    gt(other: any): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.gt\n     */\n    gt(other: any): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is greater than or equal to other.\n     *\n     * @param value The value to compare.\n     * @param other The other value to compare.\n     * @return Returns true if value is greater than or equal to other, else false.\n     */\n    gte(value: any, other: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.gte\n     */\n    gte(other: any): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.gte\n     */\n    gte(other: any): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as an arguments object.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isArguments(value?: any): value is IArguments\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isArguments\n     */\n    isArguments(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isArguments\n     */\n    isArguments(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as an Array object.\n     * @param value The value to check.\n     *\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isArray(value?: any): value is any[]\n    /**\n     * @see _.isArray\n     */\n    isArray<T>(value?: any): value is any[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isArray\n     */\n    isArray(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isArray\n     */\n    isArray(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as an ArrayBuffer object.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isArrayBuffer(value?: any): value is ArrayBuffer\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isArrayBuffer\n     */\n    isArrayBuffer(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isArrayBuffer\n     */\n    isArrayBuffer(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if `value` is array-like. A value is considered array-like if it's\n     * not a function and has a `value.length` that's an integer greater than or\n     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n     *\n     * @category Lang\n     * @param value The value to check.\n     * @returns Returns `true` if `value` is array-like, else `false`.\n     * @example\n     *\n     * _.isArrayLike([1, 2, 3]);\n     * // => true\n     *\n     * _.isArrayLike(document.body.children);\n     * // => true\n     *\n     * _.isArrayLike('abc');\n     * // => true\n     *\n     * _.isArrayLike(_.noop);\n     * // => false\n     */\n    isArrayLike<T extends { __lodashAnyHack: any }>(t: T): boolean\n    /**\n     * @see _.isArrayLike\n     */\n    isArrayLike(value: ((...args: any[]) => any) | null | undefined): value is never\n    /**\n     * @see _.isArrayLike\n     */\n    isArrayLike(value: any): value is { length: number }\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isArrayLike\n     */\n    isArrayLike(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isArrayLike\n     */\n    isArrayLike(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method is like `_.isArrayLike` except that it also checks if `value`\n     * is an object.\n     *\n     * @category Lang\n     * @param value The value to check.\n     * @returns Returns `true` if `value` is an array-like object, else `false`.\n     * @example\n     *\n     * _.isArrayLikeObject([1, 2, 3]);\n     * // => true\n     *\n     * _.isArrayLikeObject(document.body.children);\n     * // => true\n     *\n     * _.isArrayLikeObject('abc');\n     * // => false\n     *\n     * _.isArrayLikeObject(_.noop);\n     * // => false\n     */\n    isArrayLikeObject<T extends { __lodashAnyHack: any }>(value: T): boolean\n    // tslint:disable-next-line:ban-types (type guard doesn't seem to work correctly without the Function type)\n    /**\n     * @see _.isArrayLikeObject\n     */\n    isArrayLikeObject(\n      value: ((...args: any[]) => any) | FunctionBase | string | boolean | number | null | undefined,\n    ): value is never\n    /**\n     * @see _.isArrayLikeObject\n     */\n    isArrayLikeObject(value: any): value is object & { length: number }\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isArrayLikeObject\n     */\n    isArrayLikeObject(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isArrayLikeObject\n     */\n    isArrayLikeObject(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a boolean primitive or object.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isBoolean(value?: any): value is boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isBoolean\n     */\n    isBoolean(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isBoolean\n     */\n    isBoolean(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is a buffer.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is a buffer, else false.\n     */\n    isBuffer(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isBuffer\n     */\n    isBuffer(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isBuffer\n     */\n    isBuffer(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a Date object.\n     * @param value The value to check.\n     *\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isDate(value?: any): value is Date\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isDate\n     */\n    isDate(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isDate\n     */\n    isDate(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is a DOM element.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is a DOM element, else false.\n     */\n    isElement(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isElement\n     */\n    isElement(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isElement\n     */\n    isElement(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is empty. A value is considered empty unless it\u2019s an arguments object, array, string, or\n     * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.\n     *\n     * @param value The value to inspect.\n     * @return Returns true if value is empty, else false.\n     */\n    isEmpty(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isEmpty\n     */\n    isEmpty(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isEmpty\n     */\n    isEmpty(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Performs a deep comparison between two values to determine if they are\n     * equivalent.\n     *\n     * **Note:** This method supports comparing arrays, array buffers, booleans,\n     * date objects, error objects, maps, numbers, `Object` objects, regexes,\n     * sets, strings, symbols, and typed arrays. `Object` objects are compared\n     * by their own, not inherited, enumerable properties. Functions and DOM\n     * nodes are **not** supported.\n     *\n     * @category Lang\n     * @param value The value to compare.\n     * @param other The other value to compare.\n     * @returns Returns `true` if the values are equivalent, else `false`.\n     * @example\n     *\n     * var object = { 'user': 'fred' };\n     * var other = { 'user': 'fred' };\n     *\n     * _.isEqual(object, other);\n     * // => true\n     *\n     * object === other;\n     * // => false\n     */\n    isEqual(value: any, other: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isEqual\n     */\n    isEqual(other: any): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isEqual\n     */\n    isEqual(other: any): PrimitiveChain<boolean>\n  }\n\n  type IsEqualCustomizer = (\n    value: any,\n    other: any,\n    indexOrKey: PropertyName | undefined,\n    parent: any,\n    otherParent: any,\n    stack: any,\n  ) => boolean | undefined\n  interface LoDashStatic {\n    /**\n     * This method is like `_.isEqual` except that it accepts `customizer` which is\n     * invoked to compare values. If `customizer` returns `undefined` comparisons are\n     * handled by the method instead. The `customizer` is invoked with up to seven arguments:\n     * (objValue, othValue [, index|key, object, other, stack]).\n     *\n     * @category Lang\n     * @param value The value to compare.\n     * @param other The other value to compare.\n     * @param [customizer] The function to customize comparisons.\n     * @returns Returns `true` if the values are equivalent, else `false`.\n     * @example\n     *\n     * function isGreeting(value) {\n     *   return /^h(?:i|ello)$/.test(value);\n     * }\n     *\n     * function customizer(objValue, othValue) {\n     *   if (isGreeting(objValue) && isGreeting(othValue)) {\n     *     return true;\n     *   }\n     * }\n     *\n     * var array = ['hello', 'goodbye'];\n     * var other = ['hi', 'goodbye'];\n     *\n     * _.isEqualWith(array, other, customizer);\n     * // => true\n     */\n    isEqualWith(value: any, other: any, customizer?: IsEqualCustomizer): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isEqualWith\n     */\n    isEqualWith(other: any, customizer?: IsEqualCustomizer): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isEqualWith\n     */\n    isEqualWith(other: any, customizer?: IsEqualCustomizer): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError\n     * object.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is an error object, else false.\n     */\n    isError(value: any): value is Error\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isError\n     */\n    isError(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isError\n     */\n    isError(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is a finite primitive number.\n     *\n     * Note: This method is based on Number.isFinite.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is a finite number, else false.\n     */\n    isFinite(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isFinite\n     */\n    isFinite(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isFinite\n     */\n    isFinite(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is a callable function.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isFunction(value: any): value is (...args: any[]) => any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isFunction\n     */\n    isFunction(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isFunction\n     */\n    isFunction(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if `value` is an integer.\n     *\n     * **Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).\n     *\n     * @category Lang\n     * @param value The value to check.\n     * @returns Returns `true` if `value` is an integer, else `false`.\n     * @example\n     *\n     * _.isInteger(3);\n     * // => true\n     *\n     * _.isInteger(Number.MIN_VALUE);\n     * // => false\n     *\n     * _.isInteger(Infinity);\n     * // => false\n     *\n     * _.isInteger('3');\n     * // => false\n     */\n    isInteger(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isInteger\n     */\n    isInteger(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isInteger\n     */\n    isInteger(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if `value` is a valid array-like length.\n     *\n     * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).\n     *\n     * @category Lang\n     * @param value The value to check.\n     * @returns Returns `true` if `value` is a valid length, else `false`.\n     * @example\n     *\n     * _.isLength(3);\n     * // => true\n     *\n     * _.isLength(Number.MIN_VALUE);\n     * // => false\n     *\n     * _.isLength(Infinity);\n     * // => false\n     *\n     * _.isLength('3');\n     * // => false\n     */\n    isLength(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isLength\n     */\n    isLength(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isLength\n     */\n    isLength(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a Map object.\n     *\n     * @param value The value to check.\n     * @returns Returns true if value is correctly classified, else false.\n     */\n    isMap(value?: any): value is Map<any, any>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isMap\n     */\n    isMap(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isMap\n     */\n    isMap(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Performs a deep comparison between `object` and `source` to determine if\n     * `object` contains equivalent property values.\n     *\n     * **Note:** This method supports comparing the same values as `_.isEqual`.\n     *\n     * @category Lang\n     * @param object The object to inspect.\n     * @param source The object of property values to match.\n     * @returns Returns `true` if `object` is a match, else `false`.\n     * @example\n     *\n     * var object = { 'user': 'fred', 'age': 40 };\n     *\n     * _.isMatch(object, { 'age': 40 });\n     * // => true\n     *\n     * _.isMatch(object, { 'age': 36 });\n     * // => false\n     */\n    isMatch(object: object, source: object): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isMatch\n     */\n    isMatch(source: object): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isMatch\n     */\n    isMatch(source: object): PrimitiveChain<boolean>\n  }\n\n  type isMatchWithCustomizer = (\n    value: any,\n    other: any,\n    indexOrKey: PropertyName,\n    object: object,\n    source: object,\n  ) => boolean | undefined\n  interface LoDashStatic {\n    /**\n     * This method is like `_.isMatch` except that it accepts `customizer` which\n     * is invoked to compare values. If `customizer` returns `undefined` comparisons\n     * are handled by the method instead. The `customizer` is invoked with three\n     * arguments: (objValue, srcValue, index|key, object, source).\n     *\n     * @category Lang\n     * @param object The object to inspect.\n     * @param source The object of property values to match.\n     * @param [customizer] The function to customize comparisons.\n     * @returns Returns `true` if `object` is a match, else `false`.\n     * @example\n     *\n     * function isGreeting(value) {\n     *   return /^h(?:i|ello)$/.test(value);\n     * }\n     *\n     * function customizer(objValue, srcValue) {\n     *   if (isGreeting(objValue) && isGreeting(srcValue)) {\n     *     return true;\n     *   }\n     * }\n     *\n     * var object = { 'greeting': 'hello' };\n     * var source = { 'greeting': 'hi' };\n     *\n     * _.isMatchWith(object, source, customizer);\n     * // => true\n     */\n    isMatchWith(object: object, source: object, customizer: isMatchWithCustomizer): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isMatchWith\n     */\n    isMatchWith(source: object, customizer: isMatchWithCustomizer): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isMatchWith\n     */\n    isMatchWith(source: object, customizer: isMatchWithCustomizer): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is NaN.\n     *\n     * Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is NaN, else false.\n     */\n    isNaN(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isNaN\n     */\n    isNaN(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isNaN\n     */\n    isNaN(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is a native function.\n     * @param value The value to check.\n     *\n     * @retrun Returns true if value is a native function, else false.\n     */\n    isNative(value: any): value is (...args: any[]) => any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isNative\n     */\n    isNative(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isNative\n     */\n    isNative(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if `value` is `null` or `undefined`.\n     *\n     * @category Lang\n     * @param value The value to check.\n     * @returns Returns `true` if `value` is nullish, else `false`.\n     * @example\n     *\n     * _.isNil(null);\n     * // => true\n     *\n     * _.isNil(void 0);\n     * // => true\n     *\n     * _.isNil(NaN);\n     * // => false\n     */\n    isNil(value: any): value is null | undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isNil\n     */\n    isNil(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isNil\n     */\n    isNil(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is null.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is null, else false.\n     */\n    isNull(value: any): value is null\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isNull\n     */\n    isNull(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isNull\n     */\n    isNull(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a Number primitive or object.\n     *\n     * Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isNumber(value?: any): value is number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isNumber\n     */\n    isNumber(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isNumber\n     */\n    isNumber(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),\n     * and new String(''))\n     *\n     * @param value The value to check.\n     * @return Returns true if value is an object, else false.\n     */\n    isObject(value?: any): value is object\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isObject\n     */\n    isObject(): this is LoDashImplicitWrapper<object>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isObject\n     */\n    isObject(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if `value` is object-like. A value is object-like if it's not `null`\n     * and has a `typeof` result of \"object\".\n     *\n     * @category Lang\n     * @param value The value to check.\n     * @returns Returns `true` if `value` is object-like, else `false`.\n     * @example\n     *\n     * _.isObjectLike({});\n     * // => true\n     *\n     * _.isObjectLike([1, 2, 3]);\n     * // => true\n     *\n     * _.isObjectLike(_.noop);\n     * // => false\n     *\n     * _.isObjectLike(null);\n     * // => false\n     */\n    isObjectLike(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isObjectLike\n     */\n    isObjectLike(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isObjectLike\n     */\n    isObjectLike(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is a plain object, that is, an object created by the Object constructor or one with a\n     * [[Prototype]] of null.\n     *\n     * Note: This method assumes objects created by the Object constructor have no inherited enumerable properties.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is a plain object, else false.\n     */\n    isPlainObject(value?: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isPlainObject\n     */\n    isPlainObject(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isPlainObject\n     */\n    isPlainObject(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a RegExp object.\n     * @param value The value to check.\n     *\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isRegExp(value?: any): value is RegExp\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isRegExp\n     */\n    isRegExp(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isRegExp\n     */\n    isRegExp(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754\n     * double precision number which isn't the result of a rounded unsafe integer.\n     *\n     * **Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).\n     *\n     * @category Lang\n     * @param value The value to check.\n     * @returns Returns `true` if `value` is a safe integer, else `false`.\n     * @example\n     *\n     * _.isSafeInteger(3);\n     * // => true\n     *\n     * _.isSafeInteger(Number.MIN_VALUE);\n     * // => false\n     *\n     * _.isSafeInteger(Infinity);\n     * // => false\n     *\n     * _.isSafeInteger('3');\n     * // => false\n     */\n    isSafeInteger(value: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isSafeInteger\n     */\n    isSafeInteger(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isSafeInteger\n     */\n    isSafeInteger(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a Set object.\n     *\n     * @param value The value to check.\n     * @returns Returns true if value is correctly classified, else false.\n     */\n    isSet(value?: any): value is Set<any>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isSet\n     */\n    isSet(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isSet\n     */\n    isSet(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a String primitive or object.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isString(value?: any): value is string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isString\n     */\n    isString(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isString\n     */\n    isString(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if `value` is classified as a `Symbol` primitive or object.\n     *\n     * @category Lang\n     * @param value The value to check.\n     * @returns Returns `true` if `value` is correctly classified, else `false`.\n     * @example\n     *\n     * _.isSymbol(Symbol.iterator);\n     * // => true\n     *\n     * _.isSymbol('abc');\n     * // => false\n     */\n    isSymbol(value: any): value is symbol\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isSymbol\n     */\n    isSymbol(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isSymbol\n     */\n    isSymbol(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a typed array.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is correctly classified, else false.\n     */\n    isTypedArray(value: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isTypedArray\n     */\n    isTypedArray(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isTypedArray\n     */\n    isTypedArray(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is undefined.\n     *\n     * @param value The value to check.\n     * @return Returns true if value is undefined, else false.\n     */\n    isUndefined(value: any): value is undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isUndefined\n     */\n    isUndefined(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isUndefined\n     */\n    isUndefined(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a WeakMap object.\n     *\n     * @param value The value to check.\n     * @returns Returns true if value is correctly classified, else false.\n     */\n    isWeakMap(value?: any): value is WeakMap<object, any>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isWeakMap\n     */\n    isWeakMap(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isWeakMap\n     */\n    isWeakMap(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is classified as a WeakSet object.\n     *\n     * @param value The value to check.\n     * @returns Returns true if value is correctly classified, else false.\n     */\n    isWeakSet(value?: any): value is WeakSet<object>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.isWeakSet\n     */\n    isWeakSet(): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.isWeakSet\n     */\n    isWeakSet(): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is less than other.\n     *\n     * @param value The value to compare.\n     * @param other The other value to compare.\n     * @return Returns true if value is less than other, else false.\n     */\n    lt(value: any, other: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.lt\n     */\n    lt(other: any): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.lt\n     */\n    lt(other: any): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if value is less than or equal to other.\n     *\n     * @param value The value to compare.\n     * @param other The other value to compare.\n     * @return Returns true if value is less than or equal to other, else false.\n     */\n    lte(value: any, other: any): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.lte\n     */\n    lte(other: any): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.lte\n     */\n    lte(other: any): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts value to an array.\n     *\n     * @param value The value to convert.\n     * @return Returns the converted array.\n     */\n    toArray<T>(value: Dictionary<T> | NumericDictionary<T> | null | undefined): T[]\n    /**\n     * @see _.toArray\n     */\n    toArray<T>(value: T): Array<T[keyof T]>\n    /**\n     * @see _.toArray\n     */\n    toArray(): any[]\n  }\n  interface String {\n    /**\n     * @see _.toArray\n     */\n    toArray(): Collection<string>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.toArray\n     */\n    toArray(): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.toArray\n     */\n    toArray(): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.toArray\n     */\n    toArray(): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.toArray\n     */\n    toArray(): CollectionChain<string>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.toArray\n     */\n    toArray(): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.toArray\n     */\n    toArray(): CollectionChain<T[keyof T]>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `value` to a finite number.\n     *\n     * @since 4.12.0\n     * @category Lang\n     * @param value The value to convert.\n     * @returns Returns the converted number.\n     * @example\n     *\n     * _.toFinite(3.2);\n     * // => 3.2\n     *\n     * _.toFinite(Number.MIN_VALUE);\n     * // => 5e-324\n     *\n     * _.toFinite(Infinity);\n     * // => 1.7976931348623157e+308\n     *\n     * _.toFinite('3.2');\n     * // => 3.2\n     */\n    toFinite(value: any): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toFinite\n     */\n    toFinite(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toFinite\n     */\n    toFinite(): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `value` to an integer.\n     *\n     * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).\n     *\n     * @category Lang\n     * @param value The value to convert.\n     * @returns Returns the converted integer.\n     * @example\n     *\n     * _.toInteger(3);\n     * // => 3\n     *\n     * _.toInteger(Number.MIN_VALUE);\n     * // => 0\n     *\n     * _.toInteger(Infinity);\n     * // => 1.7976931348623157e+308\n     *\n     * _.toInteger('3');\n     * // => 3\n     */\n    toInteger(value: any): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toInteger\n     */\n    toInteger(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toInteger\n     */\n    toInteger(): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `value` to an integer suitable for use as the length of an\n     * array-like object.\n     *\n     * **Note:** This method is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).\n     *\n     * @category Lang\n     * @param value The value to convert.\n     * @return Returns the converted integer.\n     * @example\n     *\n     * _.toLength(3);\n     * // => 3\n     *\n     * _.toLength(Number.MIN_VALUE);\n     * // => 0\n     *\n     * _.toLength(Infinity);\n     * // => 4294967295\n     *\n     * _.toLength('3');\n     * // => 3\n     */\n    toLength(value: any): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toLength\n     */\n    toLength(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toLength\n     */\n    toLength(): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `value` to a number.\n     *\n     * @category Lang\n     * @param value The value to process.\n     * @returns Returns the number.\n     * @example\n     *\n     * _.toNumber(3);\n     * // => 3\n     *\n     * _.toNumber(Number.MIN_VALUE);\n     * // => 5e-324\n     *\n     * _.toNumber(Infinity);\n     * // => Infinity\n     *\n     * _.toNumber('3');\n     * // => 3\n     */\n    toNumber(value: any): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toNumber\n     */\n    toNumber(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toNumber\n     */\n    toNumber(): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts value to a plain object flattening inherited enumerable properties of value to own properties\n     * of the plain object.\n     *\n     * @param value The value to convert.\n     * @return Returns the converted plain object.\n     */\n    toPlainObject(value?: any): any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toPlainObject\n     */\n    toPlainObject(): Object<any>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toPlainObject\n     */\n    toPlainObject(): ObjectChain<any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `value` to a safe integer. A safe integer can be compared and\n     * represented correctly.\n     *\n     * @category Lang\n     * @param value The value to convert.\n     * @returns Returns the converted integer.\n     * @example\n     *\n     * _.toSafeInteger(3);\n     * // => 3\n     *\n     * _.toSafeInteger(Number.MIN_VALUE);\n     * // => 0\n     *\n     * _.toSafeInteger(Infinity);\n     * // => 9007199254740991\n     *\n     * _.toSafeInteger('3');\n     * // => 3\n     */\n    toSafeInteger(value: any): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toSafeInteger\n     */\n    toSafeInteger(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toSafeInteger\n     */\n    toSafeInteger(): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `value` to a string if it's not one. An empty string is returned\n     * for `null` and `undefined` values. The sign of `-0` is preserved.\n     *\n     * @category Lang\n     * @param value The value to process.\n     * @returns Returns the string.\n     * @example\n     *\n     * _.toString(null);\n     * // => ''\n     *\n     * _.toString(-0);\n     * // => '-0'\n     *\n     * _.toString([1, 2, 3]);\n     * // => '1,2,3'\n     */\n    toString(value: any): string\n  }\n}\n", "@types/lodash/common/lang.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\ndeclare module '../index' {\n  interface LoDashStatic {\n    /**\n     * Adds two numbers.\n     *\n     * @param augend The first number to add.\n     * @param addend The second number to add.\n     * @return Returns the sum.\n     */\n    add(augend: number, addend: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.add\n     */\n    add(addend: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.add\n     */\n    add(addend: number): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Calculates n rounded up to precision.\n     *\n     * @param n The number to round up.\n     * @param precision The precision to round up to.\n     * @return Returns the rounded up number.\n     */\n    ceil(n: number, precision?: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.ceil\n     */\n    ceil(precision?: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.ceil\n     */\n    ceil(precision?: number): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Divide two numbers.\n     *\n     * @param dividend The first number in a division.\n     * @param divisor The second number in a division.\n     * @returns Returns the quotient.\n     */\n    divide(dividend: number, divisor: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.divide\n     */\n    divide(divisor: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.divide\n     */\n    divide(divisor: number): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Calculates n rounded down to precision.\n     *\n     * @param n The number to round down.\n     * @param precision The precision to round down to.\n     * @return Returns the rounded down number.\n     */\n    floor(n: number, precision?: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.floor\n     */\n    floor(precision?: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.floor\n     */\n    floor(precision?: number): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Computes the maximum value of `array`. If `array` is empty or falsey\n     * `undefined` is returned.\n     *\n     * @category Math\n     * @param array The array to iterate over.\n     * @returns Returns the maximum value.\n     */\n    max<T>(collection: List<T> | null | undefined): T | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.max\n     */\n    max(): T | undefined\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.max\n     */\n    max(): ExpChain<T | undefined>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method is like `_.max` except that it accepts `iteratee` which is\n     * invoked for each element in `array` to generate the criterion by which\n     * the value is ranked. The iteratee is invoked with one argument: (value).\n     *\n     * @category Math\n     * @param array The array to iterate over.\n     * @param iteratee The iteratee invoked per element.\n     * @returns Returns the maximum value.\n     * @example\n     *\n     * var objects = [{ 'n': 1 }, { 'n': 2 }];\n     *\n     * _.maxBy(objects, function(o) { return o.a; });\n     * // => { 'n': 2 }\n     *\n     * // using the `_.property` iteratee shorthand\n     * _.maxBy(objects, 'n');\n     * // => { 'n': 2 }\n     */\n    maxBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.maxBy\n     */\n    maxBy(iteratee?: ValueIteratee<T>): T | undefined\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.maxBy\n     */\n    maxBy(iteratee?: ValueIteratee<T>): ExpChain<T | undefined>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Computes the mean of the values in `array`.\n     *\n     * @category Math\n     * @param array The array to iterate over.\n     * @returns Returns the mean.\n     * @example\n     *\n     * _.mean([4, 2, 8, 6]);\n     * // => 5\n     */\n    mean(collection: List<any> | null | undefined): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.mean\n     */\n    mean(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.mean\n     */\n    mean(): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Computes the mean of the provided properties of the objects in the `array`\n     *\n     * @category Math\n     * @param array The array to iterate over.\n     * @param iteratee The iteratee invoked per element.\n     * @returns Returns the mean.\n     * @example\n     *\n     * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');\n     * // => 5\n     */\n    meanBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): number\n  }\n  interface Collection<T> {\n    /**\n     * @see _.meanBy\n     */\n    meanBy(iteratee?: ValueIteratee<T>): number\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.meanBy\n     */\n    meanBy(iteratee?: ValueIteratee<T>): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Computes the minimum value of `array`. If `array` is empty or falsey\n     * `undefined` is returned.\n     *\n     * @category Math\n     * @param array The array to iterate over.\n     * @returns Returns the minimum value.\n     */\n    min<T>(collection: List<T> | null | undefined): T | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.min\n     */\n    min(): T | undefined\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.min\n     */\n    min(): ExpChain<T | undefined>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method is like `_.min` except that it accepts `iteratee` which is\n     * invoked for each element in `array` to generate the criterion by which\n     * the value is ranked. The iteratee is invoked with one argument: (value).\n     *\n     * @category Math\n     * @param array The array to iterate over.\n     * @param iteratee The iteratee invoked per element.\n     * @returns Returns the minimum value.\n     * @example\n     *\n     * var objects = [{ 'n': 1 }, { 'n': 2 }];\n     *\n     * _.minBy(objects, function(o) { return o.a; });\n     * // => { 'n': 1 }\n     *\n     * // using the `_.property` iteratee shorthand\n     * _.minBy(objects, 'n');\n     * // => { 'n': 1 }\n     */\n    minBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined\n  }\n  interface Collection<T> {\n    /**\n     * @see _.minBy\n     */\n    minBy(iteratee?: ValueIteratee<T>): T | undefined\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.minBy\n     */\n    minBy(iteratee?: ValueIteratee<T>): ExpChain<T | undefined>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Multiply two numbers.\n     * @param multiplier The first number in a multiplication.\n     * @param multiplicand The second number in a multiplication.\n     * @returns Returns the product.\n     */\n    multiply(multiplier: number, multiplicand: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.multiply\n     */\n    multiply(multiplicand: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.multiply\n     */\n    multiply(multiplicand: number): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Calculates n rounded to precision.\n     *\n     * @param n The number to round.\n     * @param precision The precision to round to.\n     * @return Returns the rounded number.\n     */\n    round(n: number, precision?: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.round\n     */\n    round(precision?: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.round\n     */\n    round(precision?: number): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Subtract two numbers.\n     *\n     * @category Math\n     * @param minuend The first number in a subtraction.\n     * @param subtrahend The second number in a subtraction.\n     * @returns Returns the difference.\n     * @example\n     *\n     * _.subtract(6, 4);\n     * // => 2\n     */\n    subtract(minuend: number, subtrahend: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.subtract\n     */\n    subtract(subtrahend: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.subtract\n     */\n    subtract(subtrahend: number): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Computes the sum of the values in `array`.\n     *\n     * @category Math\n     * @param array The array to iterate over.\n     * @returns Returns the sum.\n     * @example\n     *\n     * _.sum([4, 2, 8, 6]);\n     * // => 20\n     */\n    sum(collection: List<any> | null | undefined): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.sum\n     */\n    sum(): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.sum\n     */\n    sum(): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method is like `_.sum` except that it accepts `iteratee` which is\n     * invoked for each element in `array` to generate the value to be summed.\n     * The iteratee is invoked with one argument: (value).\n     *\n     * @category Math\n     * @param array The array to iterate over.\n     * @param [iteratee=_.identity] The iteratee invoked per element.\n     * @returns Returns the sum.\n     * @example\n     *\n     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];\n     *\n     * _.sumBy(objects, function(o) { return o.n; });\n     * // => 20\n     *\n     * // using the `_.property` iteratee shorthand\n     * _.sumBy(objects, 'n');\n     * // => 20\n     */\n    sumBy<T>(collection: List<T> | null | undefined, iteratee?: ((value: T) => number) | string): number\n  }\n  interface Collection<T> {\n    /**\n     * @see _.sumBy\n     */\n    sumBy(iteratee?: ((value: T) => number) | string): number\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.sumBy\n     */\n    sumBy(iteratee?: ((value: T) => number) | string): PrimitiveChain<number>\n  }\n}\n", "@types/lodash/common/math.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\ndeclare module '../index' {\n  // clamp\n  interface LoDashStatic {\n    /**\n     * Clamps `number` within the inclusive `lower` and `upper` bounds.\n     *\n     * @category Number\n     * @param number The number to clamp.\n     * @param [lower] The lower bound.\n     * @param upper The upper bound.\n     * @returns Returns the clamped number.\n     * @example\n     *\n     * _.clamp(-10, -5, 5);\n     * // => -5\n     *\n     * _.clamp(10, -5, 5);\n     * // => 5\n     * Clamps `number` within the inclusive `lower` and `upper` bounds.\n     *\n     * @category Number\n     * @param number The number to clamp.\n     * @param [lower] The lower bound.\n     * @param upper The upper bound.\n     * @returns Returns the clamped number.\n     * @example\n     *\n     * _.clamp(-10, -5, 5);\n     * // => -5\n     *\n     * _.clamp(10, -5, 5);\n     */\n    clamp(number: number, lower: number, upper: number): number\n    /**\n     * @see _.clamp\n     */\n    clamp(number: number, upper: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.clamp\n     */\n    clamp(lower: number, upper: number): number\n    /**\n     * @see _.clamp\n     */\n    clamp(upper: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.clamp\n     */\n    clamp(lower: number, upper: number): PrimitiveChain<number>\n    /**\n     * @see _.clamp\n     */\n    clamp(upper: number): PrimitiveChain<number>\n  }\n  // inRange\n  interface LoDashStatic {\n    /**\n     * Checks if n is between start and up to but not including, end. If end is not specified it\u2019s set to start\n     * with start then set to 0.\n     *\n     * @param n The number to check.\n     * @param start The start of the range.\n     * @param end The end of the range.\n     * @return Returns true if n is in the range, else false.\n     */\n    inRange(n: number, start: number, end?: number): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.inRange\n     */\n    inRange(start: number, end?: number): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.inRange\n     */\n    inRange(start: number, end?: number): PrimitiveChain<boolean>\n  }\n  // random\n  interface LoDashStatic {\n    /**\n     * Produces a random number between min and max (inclusive). If only one argument is provided a number between\n     * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point\n     * number is returned instead of an integer.\n     *\n     * @param min The minimum possible value.\n     * @param max The maximum possible value.\n     * @param floating Specify returning a floating-point number.\n     * @return Returns the random number.\n     */\n    random(floating?: boolean): number\n    /**\n     * @see _.random\n     */\n    random(max: number, floating?: boolean): number\n    /**\n     * @see _.random\n     */\n    random(min: number, max: number, floating?: boolean): number\n    /**\n     * @see _.random\n     */\n    random(min: number, index: string | number, guard: object): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.random\n     */\n    random(floating?: boolean): number\n    /**\n     * @see _.random\n     */\n    random(max: number, floating?: boolean): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.random\n     */\n    random(floating?: boolean): PrimitiveChain<number>\n    /**\n     * @see _.random\n     */\n    random(max: number, floating?: boolean): PrimitiveChain<number>\n  }\n}\n", "@types/lodash/common/number.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\ndeclare module '../index' {\n  interface LoDashStatic {\n    /**\n     * Assigns own enumerable properties of source objects to the destination\n     * object. Source objects are applied from left to right. Subsequent sources\n     * overwrite property assignments of previous sources.\n     *\n     * **Note:** This method mutates `object` and is loosely based on\n     * [`Object.assign`](https://mdn.io/Object/assign).\n     *\n     * @category Object\n     * @param object The destination object.\n     * @param [sources] The source objects.\n     * @returns Returns `object`.\n     * @example\n     *\n     * function Foo() {\n     *   this.c = 3;\n     * }\n     *\n     * function Bar() {\n     *   this.e = 5;\n     * }\n     *\n     * Foo.prototype.d = 4;\n     * Bar.prototype.f = 6;\n     *\n     * _.assign({ 'a': 1 }, new Foo, new Bar);\n     * // => { 'a': 1, 'c': 3, 'e': 5 }\n     */\n    assign<TObject, TSource>(object: TObject, source: TSource): TObject & TSource\n    /**\n     * @see _.assign\n     */\n    assign<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n    ): TObject & TSource1 & TSource2\n    /**\n     * @see _.assign\n     */\n    assign<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): TObject & TSource1 & TSource2 & TSource3\n    /**\n     * @see _.assign\n     */\n    assign<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): TObject & TSource1 & TSource2 & TSource3 & TSource4\n    /**\n     * @see _.assign\n     */\n    assign<TObject>(object: TObject): TObject\n    /**\n     * @see _.assign\n     */\n    assign(object: any, ...otherArgs: any[]): any\n  }\n  interface Object<T> {\n    /**\n     * @see _.assign\n     */\n    assign<TSource>(source: TSource): Object<T & TSource>\n    /**\n     * @see _.assign\n     */\n    assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>\n    /**\n     * @see _.assign\n     */\n    assign<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): Object<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.assign\n     */\n    assign<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): Object<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.assign\n     */\n    assign(): Object<T>\n    /**\n     * @see _.assign\n     */\n    assign(...otherArgs: any[]): Object<any>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.assign\n     */\n    assign<TSource>(source: TSource): ObjectChain<T & TSource>\n    /**\n     * @see _.assign\n     */\n    assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>\n    /**\n     * @see _.assign\n     */\n    assign<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.assign\n     */\n    assign<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.assign\n     */\n    assign(): ObjectChain<T>\n    /**\n     * @see _.assign\n     */\n    assign(...otherArgs: any[]): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like `_.assign` except that it iterates over own and\n     * inherited source properties.\n     *\n     * **Note:** This method mutates `object`.\n     *\n     * @alias extend\n     * @category Object\n     * @param object The destination object.\n     * @param [sources] The source objects.\n     * @returns Returns `object`.\n     * @example\n     *\n     * function Foo() {\n     *   this.b = 2;\n     * }\n     *\n     * function Bar() {\n     *   this.d = 4;\n     * }\n     *\n     * Foo.prototype.c = 3;\n     * Bar.prototype.e = 5;\n     *\n     * _.assignIn({ 'a': 1 }, new Foo, new Bar);\n     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }\n     */\n    assignIn<TObject, TSource>(object: TObject, source: TSource): TObject & TSource\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n    ): TObject & TSource1 & TSource2\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): TObject & TSource1 & TSource2 & TSource3\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): TObject & TSource1 & TSource2 & TSource3 & TSource4\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TObject>(object: TObject): TObject\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TResult>(object: any, ...otherArgs: any[]): TResult\n  }\n  interface Object<T> {\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TSource>(source: TSource): Object<T & TSource>\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): Object<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): Object<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.assignIn\n     */\n    assignIn(): Object<T>\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TResult>(...otherArgs: any[]): Object<TResult>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TSource>(source: TSource): ObjectChain<T & TSource>\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.assignIn\n     */\n    assignIn<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.assignIn\n     */\n    assignIn(): ObjectChain<T>\n    /**\n     * @see _.assignIn\n     */\n    assignIn(...otherArgs: any[]): ObjectChain<any>\n  }\n  type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any\n  interface LoDashStatic {\n    /**\n     * This method is like `_.assignIn` except that it accepts `customizer` which\n     * is invoked to produce the assigned values. If `customizer` returns `undefined`\n     * assignment is handled by the method instead. The `customizer` is invoked\n     * with five arguments: (objValue, srcValue, key, object, source).\n     *\n     * **Note:** This method mutates `object`.\n     *\n     * @alias extendWith\n     * @category Object\n     * @param object The destination object.\n     * @param sources The source objects.\n     * @param [customizer] The function to customize assigned values.\n     * @returns Returns `object`.\n     * @example\n     *\n     * function customizer(objValue, srcValue) {\n     *   return _.isUndefined(objValue) ? srcValue : objValue;\n     * }\n     *\n     * var defaults = _.partialRight(_.assignInWith, customizer);\n     *\n     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });\n     * // => { 'a': 1, 'b': 2 }\n     */\n    assignInWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2 & TSource3\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2 & TSource3 & TSource4\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TObject>(object: TObject): TObject\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TResult>(object: any, ...otherArgs: any[]): TResult\n  }\n  interface Object<T> {\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith(): Object<T>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TResult>(...otherArgs: any[]): Object<TResult>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith(): ObjectChain<T>\n    /**\n     * @see _.assignInWith\n     */\n    assignInWith(...otherArgs: any[]): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like `_.assign` except that it accepts `customizer` which\n     * is invoked to produce the assigned values. If `customizer` returns `undefined`\n     * assignment is handled by the method instead. The `customizer` is invoked\n     * with five arguments: (objValue, srcValue, key, object, source).\n     *\n     * **Note:** This method mutates `object`.\n     *\n     * @category Object\n     * @param object The destination object.\n     * @param sources The source objects.\n     * @param [customizer] The function to customize assigned values.\n     * @returns Returns `object`.\n     * @example\n     *\n     * function customizer(objValue, srcValue) {\n     *   return _.isUndefined(objValue) ? srcValue : objValue;\n     * }\n     *\n     * var defaults = _.partialRight(_.assignWith, customizer);\n     *\n     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });\n     * // => { 'a': 1, 'b': 2 }\n     */\n    assignWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2 & TSource3\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2 & TSource3 & TSource4\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TObject>(object: TObject): TObject\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TResult>(object: any, ...otherArgs: any[]): TResult\n  }\n  interface Object<T> {\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2>\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.assignWith\n     */\n    assignWith(): Object<T>\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TResult>(...otherArgs: any[]): Object<TResult>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2>\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.assignWith\n     */\n    assignWith<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.assignWith\n     */\n    assignWith(): ObjectChain<T>\n    /**\n     * @see _.assignWith\n     */\n    assignWith(...otherArgs: any[]): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be\n     * specified as individual arguments or as arrays of keys.\n     *\n     * @param object The object to iterate over.\n     * @param props The property names or indexes of elements to pick, specified individually or in arrays.\n     * @return Returns the new array of picked elements.\n     */\n    at<T>(object: Dictionary<T> | NumericDictionary<T> | null | undefined, ...props: PropertyPath[]): T[]\n    /**\n     * @see _.at\n     */\n    at<T extends object>(object: T | null | undefined, ...props: Array<Many<keyof T>>): Array<T[keyof T]>\n  }\n  interface Object<T> {\n    /**\n     * @see _.at\n     */\n    at(...props: Array<Many<keyof T>>): Collection<T[keyof T]>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.at\n     */\n    at(...props: PropertyPath[]): Collection<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.at\n     */\n    at(...props: Array<Many<keyof T>>): CollectionChain<T[keyof T]>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.at\n     */\n    at(...props: PropertyPath[]): CollectionChain<T>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an object that inherits from the given prototype object. If a properties object is provided its own\n     * enumerable properties are assigned to the created object.\n     *\n     * @param prototype The object to inherit from.\n     * @param properties The properties to assign to the object.\n     * @return Returns the new object.\n     */\n    create<T extends object, U extends object>(prototype: T, properties?: U): T & U\n  }\n  interface Object<T> {\n    /**\n     * @see _.create\n     */\n    create<U extends object>(properties?: U): Object<T & U>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.create\n     */\n    create<U extends object>(properties?: U): ObjectChain<T & U>\n  }\n  interface LoDashStatic {\n    /**\n     * Assigns own enumerable properties of source object(s) to the destination object for all destination\n     * properties that resolve to undefined. Once a property is set, additional values of the same property are\n     * ignored.\n     *\n     * Note: This method mutates object.\n     *\n     * @param object The destination object.\n     * @param sources The source objects.\n     * @return The destination object.\n     */\n    defaults<TObject, TSource>(object: TObject, source: TSource): NonNullable<TSource & TObject>\n    /**\n     * @see _.defaults\n     */\n    defaults<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n    ): NonNullable<TSource2 & TSource1 & TObject>\n    /**\n     * @see _.defaults\n     */\n    defaults<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): NonNullable<TSource3 & TSource2 & TSource1 & TObject>\n    /**\n     * @see _.defaults\n     */\n    defaults<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): NonNullable<TSource4 & TSource3 & TSource2 & TSource1 & TObject>\n    /**\n     * @see _.defaults\n     */\n    defaults<TObject>(object: TObject): NonNullable<TObject>\n    /**\n     * @see _.defaults\n     */\n    defaults(object: any, ...sources: any[]): any\n  }\n  interface Object<T> {\n    /**\n     * @see _.defaults\n     */\n    defaults<TSource>(source: TSource): Object<NonNullable<TSource & T>>\n    /**\n     * @see _.defaults\n     */\n    defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<NonNullable<TSource2 & TSource1 & T>>\n    /**\n     * @see _.defaults\n     */\n    defaults<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): Object<NonNullable<TSource3 & TSource2 & TSource1 & T>>\n    /**\n     * @see _.defaults\n     */\n    defaults<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): Object<NonNullable<TSource4 & TSource3 & TSource2 & TSource1 & T>>\n    /**\n     * @see _.defaults\n     */\n    defaults(): Object<NonNullable<T>>\n    /**\n     * @see _.defaults\n     */\n    defaults(...sources: any[]): Object<any>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.defaults\n     */\n    defaults<TSource>(source: TSource): ObjectChain<NonNullable<TSource & T>>\n    /**\n     * @see _.defaults\n     */\n    defaults<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n    ): ObjectChain<NonNullable<TSource2 & TSource1 & T>>\n    /**\n     * @see _.defaults\n     */\n    defaults<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): ObjectChain<NonNullable<TSource3 & TSource2 & TSource1 & T>>\n    /**\n     * @see _.defaults\n     */\n    defaults<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): ObjectChain<NonNullable<TSource4 & TSource3 & TSource2 & TSource1 & T>>\n    /**\n     * @see _.defaults\n     */\n    defaults(): ObjectChain<NonNullable<T>>\n    /**\n     * @see _.defaults\n     */\n    defaults(...sources: any[]): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.defaults except that it recursively assigns default properties.\n     * @param object The destination object.\n     * @param sources The source objects.\n     * @return Returns object.\n     */\n    defaultsDeep(object: any, ...sources: any[]): any\n  }\n  interface Object<T> {\n    /**\n     * @see _.defaultsDeep\n     */\n    defaultsDeep(...sources: any[]): Object<any>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.defaultsDeep\n     */\n    defaultsDeep(...sources: any[]): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * @see _.toPairs\n     */\n    entries<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>\n    /**\n     * @see _.entries\n     */\n    entries(object?: object): Array<[string, any]>\n  }\n  interface Object<T> {\n    /**\n     * @see _.entries\n     */\n    entries(): Collection<[string, T[keyof T]]>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.entries\n     */\n    entries(): Collection<[string, any]>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.entries\n     */\n    entries(): CollectionChain<[string, T[keyof T]]>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.entries\n     */\n    entries(): CollectionChain<[string, any]>\n  }\n  interface LoDashStatic {\n    /**\n     * @see _.entriesIn\n     */\n    entriesIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>\n    /**\n     * @see _.entriesIn\n     */\n    entriesIn(object?: object): Array<[string, any]>\n  }\n  interface Object<T> {\n    /**\n     * @see _.entriesIn\n     */\n    entriesIn(): Collection<[string, T[keyof T]]>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.entriesIn\n     */\n    entriesIn(): Collection<[string, any]>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.entriesIn\n     */\n    entriesIn(): CollectionChain<[string, T[keyof T]]>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.entriesIn\n     */\n    entriesIn(): CollectionChain<[string, any]>\n  }\n  interface LoDashStatic {\n    /**\n     * @see _.extend\n     */\n    extend<TObject, TSource>(object: TObject, source: TSource): TObject & TSource\n    /**\n     * @see _.extend\n     */\n    extend<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n    ): TObject & TSource1 & TSource2\n    /**\n     * @see _.extend\n     */\n    extend<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): TObject & TSource1 & TSource2 & TSource3\n    /**\n     * @see _.extend\n     */\n    extend<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): TObject & TSource1 & TSource2 & TSource3 & TSource4\n    /**\n     * @see _.extend\n     */\n    extend<TObject>(object: TObject): TObject\n    /**\n     * @see _.extend\n     */\n    extend<TResult>(object: any, ...otherArgs: any[]): TResult\n  }\n  interface Object<T> {\n    /**\n     * @see _.extend\n     */\n    extend<TSource>(source: TSource): Object<T & TSource>\n    /**\n     * @see _.extend\n     */\n    extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>\n    /**\n     * @see _.extend\n     */\n    extend<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): Object<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.extend\n     */\n    extend<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): Object<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.extend\n     */\n    extend(): Object<T>\n    /**\n     * @see _.extend\n     */\n    extend(...otherArgs: any[]): Object<any>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.extend\n     */\n    extend<TSource>(source: TSource): ObjectChain<T & TSource>\n    /**\n     * @see _.extend\n     */\n    extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>\n    /**\n     * @see _.extend\n     */\n    extend<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.extend\n     */\n    extend<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.extend\n     */\n    extend(): ObjectChain<T>\n    /**\n     * @see _.extend\n     */\n    extend(...otherArgs: any[]): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2 & TSource3\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): TObject & TSource1 & TSource2 & TSource3 & TSource4\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TObject>(object: TObject): TObject\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TResult>(object: any, ...otherArgs: any[]): TResult\n  }\n  interface Object<T> {\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2>\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): Object<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.extendWith\n     */\n    extendWith(): Object<T>\n    /**\n     * @see _.extendWith\n     */\n    extendWith(...otherArgs: any[]): Object<any>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2>\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.extendWith\n     */\n    extendWith<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: AssignCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.extendWith\n     */\n    extendWith(): ObjectChain<T>\n    /**\n     * @see _.extendWith\n     */\n    extendWith(...otherArgs: any[]): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.find except that it returns the key of the first element predicate returns truthy for\n     * instead of the element itself.\n     *\n     * @param object The object to search.\n     * @param predicate The function invoked per iteration.\n     * @return Returns the key of the matched element, else undefined.\n     */\n    findKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.findKey\n     */\n    findKey(predicate?: ObjectIteratee<TValue>): string | undefined\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.findKey\n     */\n    findKey(predicate?: ObjectIteratee<TValue>): StringNullableChain\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.\n     *\n     * @param object The object to search.\n     * @param predicate The function invoked per iteration.\n     * @return Returns the key of the matched element, else undefined.\n     */\n    findLastKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.findLastKey\n     */\n    findLastKey(predicate?: ObjectIteratee<TValue>): string | undefined\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.findLastKey\n     */\n    findLastKey(predicate?: ObjectIteratee<TValue>): StringNullableChain\n  }\n  interface LoDashStatic {\n    /**\n     * Iterates over own and inherited enumerable properties of an object invoking iteratee for each property. The\n     * iteratee is invoked with three arguments: (value, key, object). Iteratee functions may\n     * exit iteration early by explicitly returning false.\n     *\n     * @param object The object to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns object.\n     */\n    forIn<T>(object: T, iteratee?: ObjectIterator<T, any>): T\n    /**\n     * @see _.forIn\n     */\n    forIn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.forIn\n     */\n    forIn(iteratee?: ObjectIterator<TValue, any>): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.forIn\n     */\n    forIn(iteratee?: ObjectIterator<TValue, any>): this\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.forIn except that it iterates over properties of object in the opposite order.\n     *\n     * @param object The object to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns object.\n     */\n    forInRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T\n    /**\n     * @see _.forInRight\n     */\n    forInRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.forInRight\n     */\n    forInRight(iteratee?: ObjectIterator<TValue, any>): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.forInRight\n     */\n    forInRight(iteratee?: ObjectIterator<TValue, any>): this\n  }\n  interface LoDashStatic {\n    /**\n     * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is\n     * invoked with three arguments: (value, key, object). Iteratee functions may exit\n     * iteration early by explicitly returning false.\n     *\n     * @param object The object to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns object.\n     */\n    forOwn<T>(object: T, iteratee?: ObjectIterator<T, any>): T\n    /**\n     * @see _.forOwn\n     */\n    forOwn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.forOwn\n     */\n    forOwn(iteratee?: ObjectIterator<TValue, any>): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.forOwn\n     */\n    forOwn(iteratee?: ObjectIterator<TValue, any>): this\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.forOwn except that it iterates over properties of object in the opposite order.\n     *\n     * @param object The object to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns object.\n     */\n    forOwnRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T\n    /**\n     * @see _.forOwnRight\n     */\n    forOwnRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.forOwnRight\n     */\n    forOwnRight(iteratee?: ObjectIterator<TValue, any>): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.forOwnRight\n     */\n    forOwnRight(iteratee?: ObjectIterator<TValue, any>): this\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of function property names from own enumerable properties\n     * of `object`.\n     *\n     * @category Object\n     * @param object The object to inspect.\n     * @returns Returns the new array of property names.\n     * @example\n     *\n     * function Foo() {\n     *   this.a = _.constant('a');\n     *   this.b = _.constant('b');\n     * }\n     *\n     * Foo.prototype.c = _.constant('c');\n     *\n     * _.functions(new Foo);\n     * // => ['a', 'b']\n     */\n    functions(object: any): string[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.functions\n     */\n    functions(): Collection<string>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.functions\n     */\n    functions(): CollectionChain<string>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of function property names from own and inherited\n     * enumerable properties of `object`.\n     *\n     * @category Object\n     * @param object The object to inspect.\n     * @returns Returns the new array of property names.\n     * @example\n     *\n     * function Foo() {\n     *   this.a = _.constant('a');\n     *   this.b = _.constant('b');\n     * }\n     *\n     * Foo.prototype.c = _.constant('c');\n     *\n     * _.functionsIn(new Foo);\n     * // => ['a', 'b', 'c']\n     */\n    functionsIn<T extends {}>(object: any): string[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.functionsIn\n     */\n    functionsIn(): Collection<string>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.functionsIn\n     */\n    functionsIn(): CollectionChain<string>\n  }\n  interface LoDashStatic {\n    /**\n     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used\n     * in its place.\n     *\n     * @param object The object to query.\n     * @param path The path of the property to get.\n     * @param defaultValue The value returned if the resolved value is undefined.\n     * @return Returns the resolved value.\n     */\n    get<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey]\n    /**\n     * @see _.get\n     */\n    get<TObject extends object, TKey extends keyof TObject>(\n      object: TObject | null | undefined,\n      path: TKey | [TKey],\n    ): TObject[TKey] | undefined\n    /**\n     * @see _.get\n     */\n    get<TObject extends object, TKey extends keyof TObject, TDefault>(\n      object: TObject | null | undefined,\n      path: TKey | [TKey],\n      defaultValue: TDefault,\n    ): Exclude<TObject[TKey], undefined> | TDefault\n    /**\n     * @see _.get\n     */\n    get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1]>(\n      object: TObject,\n      path: [TKey1, TKey2],\n    ): TObject[TKey1][TKey2]\n    /**\n     * @see _.get\n     */\n    get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1]>(\n      object: TObject | null | undefined,\n      path: [TKey1, TKey2],\n    ): TObject[TKey1][TKey2] | undefined\n    /**\n     * @see _.get\n     */\n    get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TDefault>(\n      object: TObject | null | undefined,\n      path: [TKey1, TKey2],\n      defaultValue: TDefault,\n    ): Exclude<TObject[TKey1][TKey2], undefined> | TDefault\n    /**\n     * @see _.get\n     */\n    get<\n      TObject extends object,\n      TKey1 extends keyof TObject,\n      TKey2 extends keyof TObject[TKey1],\n      TKey3 extends keyof TObject[TKey1][TKey2],\n    >(\n      object: TObject,\n      path: [TKey1, TKey2, TKey3],\n    ): TObject[TKey1][TKey2][TKey3]\n    /**\n     * @see _.get\n     */\n    get<\n      TObject extends object,\n      TKey1 extends keyof TObject,\n      TKey2 extends keyof TObject[TKey1],\n      TKey3 extends keyof TObject[TKey1][TKey2],\n    >(\n      object: TObject | null | undefined,\n      path: [TKey1, TKey2, TKey3],\n    ): TObject[TKey1][TKey2][TKey3] | undefined\n    /**\n     * @see _.get\n     */\n    get<\n      TObject extends object,\n      TKey1 extends keyof TObject,\n      TKey2 extends keyof TObject[TKey1],\n      TKey3 extends keyof TObject[TKey1][TKey2],\n      TDefault,\n    >(\n      object: TObject | null | undefined,\n      path: [TKey1, TKey2, TKey3],\n      defaultValue: TDefault,\n    ): Exclude<TObject[TKey1][TKey2][TKey3], undefined> | TDefault\n    /**\n     * @see _.get\n     */\n    get<\n      TObject extends object,\n      TKey1 extends keyof TObject,\n      TKey2 extends keyof TObject[TKey1],\n      TKey3 extends keyof TObject[TKey1][TKey2],\n      TKey4 extends keyof TObject[TKey1][TKey2][TKey3],\n    >(\n      object: TObject,\n      path: [TKey1, TKey2, TKey3, TKey4],\n    ): TObject[TKey1][TKey2][TKey3][TKey4]\n    /**\n     * @see _.get\n     */\n    get<\n      TObject extends object,\n      TKey1 extends keyof TObject,\n      TKey2 extends keyof TObject[TKey1],\n      TKey3 extends keyof TObject[TKey1][TKey2],\n      TKey4 extends keyof TObject[TKey1][TKey2][TKey3],\n    >(\n      object: TObject | null | undefined,\n      path: [TKey1, TKey2, TKey3, TKey4],\n    ): TObject[TKey1][TKey2][TKey3][TKey4] | undefined\n    /**\n     * @see _.get\n     */\n    get<\n      TObject extends object,\n      TKey1 extends keyof TObject,\n      TKey2 extends keyof TObject[TKey1],\n      TKey3 extends keyof TObject[TKey1][TKey2],\n      TKey4 extends keyof TObject[TKey1][TKey2][TKey3],\n      TDefault,\n    >(\n      object: TObject | null | undefined,\n      path: [TKey1, TKey2, TKey3, TKey4],\n      defaultValue: TDefault,\n    ): Exclude<TObject[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault\n    /**\n     * @see _.get\n     */\n    get<T>(object: NumericDictionary<T>, path: number): T\n    /**\n     * @see _.get\n     */\n    get<T>(object: NumericDictionary<T> | null | undefined, path: number): T | undefined\n    /**\n     * @see _.get\n     */\n    get<T, TDefault>(\n      object: NumericDictionary<T> | null | undefined,\n      path: number,\n      defaultValue: TDefault,\n    ): T | TDefault\n    /**\n     * @see _.get\n     */\n    get<TDefault>(object: null | undefined, path: PropertyPath, defaultValue: TDefault): TDefault\n    /**\n     * @see _.get\n     */\n    get(object: null | undefined, path: PropertyPath): undefined\n    /**\n     * @see _.get\n     */\n    get(object: any, path: PropertyPath, defaultValue?: any): any\n  }\n  interface String {\n    /**\n     * @see _.get\n     */\n    get(path: number | number[]): string\n    /**\n     * @see _.get\n     */\n    get(path: number | number[], defaultValue: string): string\n  }\n  interface Object<T> {\n    /**\n     * @see _.get\n     */\n    get<TKey extends keyof T>(path: TKey | [TKey]): T[TKey]\n    /**\n     * @see _.get\n     */\n    get<TKey extends keyof T, TDefault>(\n      path: TKey | [TKey],\n      defaultValue: TDefault,\n    ): Exclude<T[TKey], undefined> | TDefault\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1]>(path: [TKey1, TKey2]): T[TKey1][TKey2]\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TDefault>(\n      path: [TKey1, TKey2],\n      defaultValue: TDefault,\n    ): Exclude<T[TKey1][TKey2], undefined> | TDefault\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2]>(\n      path: [TKey1, TKey2, TKey3],\n    ): T[TKey1][TKey2][TKey3]\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TDefault>(\n      path: [TKey1, TKey2, TKey3],\n      defaultValue: TDefault,\n    ): Exclude<T[TKey1][TKey2][TKey3], undefined> | TDefault\n    /**\n     * @see _.get\n     */\n    get<\n      TKey1 extends keyof T,\n      TKey2 extends keyof T[TKey1],\n      TKey3 extends keyof T[TKey1][TKey2],\n      TKey4 extends keyof T[TKey1][TKey2][TKey3],\n    >(\n      path: [TKey1, TKey2, TKey3, TKey4],\n    ): T[TKey1][TKey2][TKey3][TKey4]\n    /**\n     * @see _.get\n     */\n    get<\n      TKey1 extends keyof T,\n      TKey2 extends keyof T[TKey1],\n      TKey3 extends keyof T[TKey1][TKey2],\n      TKey4 extends keyof T[TKey1][TKey2][TKey3],\n      TDefault,\n    >(\n      path: [TKey1, TKey2, TKey3, TKey4],\n      defaultValue: TDefault,\n    ): Exclude<T[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault\n    /**\n     * @see _.get\n     */\n    get(path: PropertyPath, defaultValue?: any): any\n  }\n  interface Collection<T> {\n    /**\n     * @see _.get\n     */\n    get(path: number): T\n    /**\n     * @see _.get\n     */\n    get<TDefault>(path: number, defaultValue: TDefault): T | TDefault\n  }\n  interface StringChain {\n    /**\n     * @see _.get\n     */\n    get(path: number | number[]): StringChain\n    /**\n     * @see _.get\n     */\n    get(path: number | number[], defaultValue: string): StringChain\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.get\n     */\n    get(path: number | number[]): StringNullableChain\n    /**\n     * @see _.get\n     */\n    get(path: number | number[], defaultValue: string): StringChain\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.get\n     */\n    get<TKey extends keyof T>(path: TKey | [TKey]): ExpChain<T[TKey]>\n    /**\n     * @see _.get\n     */\n    get<TKey extends keyof T>(\n      path: TKey | [TKey],\n      defaultValue: never[],\n    ): T[TKey] extends any[] ? ExpChain<Exclude<T[TKey], undefined>> : ExpChain<Exclude<T[TKey], undefined> | never[]>\n    /**\n     * @see _.get\n     */\n    get<TKey extends keyof T, TDefault>(\n      path: TKey | [TKey],\n      defaultValue: TDefault,\n    ): ExpChain<Exclude<T[TKey], undefined> | TDefault>\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1]>(path: [TKey1, TKey2]): ExpChain<T[TKey1][TKey2]>\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1]>(\n      path: [TKey1, TKey2],\n      defaultValue: never[],\n    ): T[TKey1][TKey2] extends any[]\n      ? ExpChain<Exclude<T[TKey1][TKey2], undefined>>\n      : ExpChain<Exclude<T[TKey1][TKey2], undefined> | never[]>\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TDefault>(\n      path: [TKey1, TKey2],\n      defaultValue: TDefault,\n    ): ExpChain<Exclude<T[TKey1][TKey2], undefined> | TDefault>\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2]>(\n      path: [TKey1, TKey2, TKey3],\n    ): ExpChain<T[TKey1][TKey2][TKey3]>\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2]>(\n      path: [TKey1, TKey2, TKey3],\n      defaultValue: never[],\n    ): T[TKey1][TKey2][TKey3] extends any[]\n      ? ExpChain<Exclude<T[TKey1][TKey2][TKey3], undefined>>\n      : ExpChain<Exclude<T[TKey1][TKey2][TKey3], undefined> | never[]>\n    /**\n     * @see _.get\n     */\n    get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TDefault>(\n      path: [TKey1, TKey2, TKey3],\n      defaultValue: TDefault,\n    ): ExpChain<Exclude<T[TKey1][TKey2][TKey3], undefined> | TDefault>\n    /**\n     * @see _.get\n     */\n    get<\n      TKey1 extends keyof T,\n      TKey2 extends keyof T[TKey1],\n      TKey3 extends keyof T[TKey1][TKey2],\n      TKey4 extends keyof T[TKey1][TKey2][TKey3],\n    >(\n      path: [TKey1, TKey2, TKey3, TKey4],\n    ): ExpChain<T[TKey1][TKey2][TKey3][TKey4]>\n    /**\n     * @see _.get\n     */\n    get<\n      TKey1 extends keyof T,\n      TKey2 extends keyof T[TKey1],\n      TKey3 extends keyof T[TKey1][TKey2],\n      TKey4 extends keyof T[TKey1][TKey2][TKey3],\n    >(\n      path: [TKey1, TKey2, TKey3, TKey4],\n      defaultValue: never[],\n    ): T[TKey1][TKey2][TKey3][TKey4] extends any[]\n      ? ExpChain<Exclude<T[TKey1][TKey2][TKey3][TKey4], undefined>>\n      : ExpChain<Exclude<T[TKey1][TKey2][TKey3][TKey4], undefined> | never[]>\n    /**\n     * @see _.get\n     */\n    get<\n      TKey1 extends keyof T,\n      TKey2 extends keyof T[TKey1],\n      TKey3 extends keyof T[TKey1][TKey2],\n      TKey4 extends keyof T[TKey1][TKey2][TKey3],\n      TDefault,\n    >(\n      path: [TKey1, TKey2, TKey3, TKey4],\n      defaultValue: TDefault,\n    ): ExpChain<Exclude<T[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault>\n    /**\n     * @see _.get\n     */\n    get(path: PropertyPath, defaultValue?: any): LoDashExplicitWrapper<any>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.get\n     */\n    get(path: number): ExpChain<T>\n    /**\n     * @see _.get\n     */\n    get<TDefault>(path: number, defaultValue: TDefault): ExpChain<T | TDefault>\n  }\n  interface LoDashStatic {\n    /**\n     * Checks if `path` is a direct property of `object`.\n     *\n     * @category Object\n     * @param object The object to query.\n     * @param path The path to check.\n     * @returns Returns `true` if `path` exists, else `false`.\n     * @example\n     *\n     * var object = { 'a': { 'b': { 'c': 3 } } };\n     * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });\n     *\n     * _.has(object, 'a');\n     * // => true\n     *\n     * _.has(object, 'a.b.c');\n     * // => true\n     *\n     * _.has(object, ['a', 'b', 'c']);\n     * // => true\n     *\n     * _.has(other, 'a');\n     * // => false\n     */\n    has<T>(object: T, path: PropertyPath): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.has\n     */\n    has(path: PropertyPath): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.has\n     */\n    has(path: PropertyPath): PrimitiveChain<boolean>\n  }\n  interface LoDashStatic {\n    /**\n     * Checks if `path` is a direct or inherited property of `object`.\n     *\n     * @category Object\n     * @param object The object to query.\n     * @param path The path to check.\n     * @returns Returns `true` if `path` exists, else `false`.\n     * @example\n     *\n     * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });\n     *\n     * _.hasIn(object, 'a');\n     * // => true\n     *\n     * _.hasIn(object, 'a.b.c');\n     * // => true\n     *\n     * _.hasIn(object, ['a', 'b', 'c']);\n     * // => true\n     *\n     * _.hasIn(object, 'b');\n     * // => false\n     */\n    hasIn<T>(object: T, path: PropertyPath): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.hasIn\n     */\n    hasIn(path: PropertyPath): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.hasIn\n     */\n    hasIn(path: PropertyPath): PrimitiveChain<boolean>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an object composed of the inverted keys and values of object. If object contains duplicate values,\n     * subsequent values overwrite property assignments of previous values unless multiValue is true.\n     *\n     * @param object The object to invert.\n     * @param multiValue Allow multiple values per key.\n     * @return Returns the new inverted object.\n     */\n    invert(object: object): Dictionary<string>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.invert\n     */\n    invert(): Object<Dictionary<string>>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.invert\n     */\n    invert(): ObjectChain<Dictionary<string>>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.invert except that the inverted object is generated from the results of running each\n     * element of object through iteratee. The corresponding inverted value of each inverted key is an array of\n     * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).\n     *\n     * @param object The object to invert.\n     * @param interatee The iteratee invoked per element.\n     * @return Returns the new inverted object.\n     */\n    invertBy<T>(\n      object: Dictionary<T> | NumericDictionary<T> | null | undefined,\n      interatee?: ValueIteratee<T>,\n    ): Dictionary<string[]>\n    /**\n     * @see _.invertBy\n     */\n    invertBy<T extends object>(\n      object: T | null | undefined,\n      interatee?: ValueIteratee<T[keyof T]>,\n    ): Dictionary<string[]>\n  }\n  interface String {\n    /**\n     * @see _.invertBy\n     */\n    invertBy(iteratee?: ValueIteratee<string>): Object<Dictionary<string[]>>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.invertBy\n     */\n    invertBy(iteratee?: ValueIteratee<T>): Object<Dictionary<string[]>>\n  }\n  interface Object<T> {\n    /**\n     * @see _.invertBy\n     */\n    invertBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<string[]>>\n  }\n  interface StringChain {\n    /**\n     * @see _.invertBy\n     */\n    invertBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.invertBy\n     */\n    invertBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.invertBy\n     */\n    invertBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<string[]>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.invertBy\n     */\n    invertBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<string[]>>\n  }\n  interface LoDashStatic {\n    /**\n     * Invokes the method at path of object.\n     * @param object The object to query.\n     * @param path The path of the method to invoke.\n     * @param args The arguments to invoke the method with.\n     */\n    invoke(object: any, path: PropertyPath, ...args: any[]): any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.invoke\n     */\n    invoke(path: PropertyPath, ...args: any[]): any\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.invoke\n     */\n    invoke(path: PropertyPath, ...args: any[]): LoDashExplicitWrapper<any>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of the own enumerable property names of object.\n     *\n     * Note: Non-object values are coerced to objects. See the ES spec for more details.\n     *\n     * @param object The object to query.\n     * @return Returns the array of property names.\n     */\n    keys(object?: any): string[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.keys\n     */\n    keys(): Collection<string>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.keys\n     */\n    keys(): CollectionChain<string>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of the own and inherited enumerable property names of object.\n     *\n     * Note: Non-object values are coerced to objects.\n     *\n     * @param object The object to query.\n     * @return An array of property names.\n     */\n    keysIn(object?: any): string[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.keysIn\n     */\n    keysIn(): Collection<string>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.keysIn\n     */\n    keysIn(): CollectionChain<string>\n  }\n  interface LoDashStatic {\n    /**\n     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated\n     * by running each own enumerable property of object through iteratee.\n     *\n     * @param object The object to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns the new mapped object.\n     */\n    mapKeys<T>(object: List<T> | null | undefined, iteratee?: ListIteratee<T>): Dictionary<T>\n    /**\n     * @see _.mapKeys\n     */\n    mapKeys<T extends object>(object: T | null | undefined, iteratee?: ObjectIteratee<T>): Dictionary<T[keyof T]>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.mapKeys\n     */\n    mapKeys(iteratee?: ListIteratee<T>): Object<Dictionary<T>>\n  }\n  interface Object<T> {\n    /**\n     * @see _.mapKeys\n     */\n    mapKeys(iteratee?: ObjectIteratee<T>): Object<Dictionary<T[keyof T]>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.mapKeys\n     */\n    mapKeys(iteratee?: ListIteratee<T>): ObjectChain<Dictionary<T>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.mapKeys\n     */\n    mapKeys(iteratee?: ObjectIteratee<T>): ObjectChain<Dictionary<T[keyof T]>>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an object with the same keys as object and values generated by running each own\n     * enumerable property of object through iteratee. The iteratee function is\n     * invoked with three arguments: (value, key, object).\n     *\n     * @param object The object to iterate over.\n     * @param iteratee  The function invoked per iteration.\n     * @return Returns the new mapped object.\n     */\n    mapValues<TResult>(obj: string | null | undefined, callback: StringIterator<TResult>): NumericDictionary<TResult>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T extends object, TResult>(\n      obj: T | null | undefined,\n      callback: ObjectIterator<T, TResult>,\n    ): { [P in keyof T]: TResult }\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: object): Dictionary<boolean>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T extends object>(obj: T | null | undefined, iteratee: object): { [P in keyof T]: boolean }\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T, TKey extends keyof T>(\n      obj: Dictionary<T> | NumericDictionary<T> | null | undefined,\n      iteratee: TKey,\n    ): Dictionary<T[TKey]>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: string): Dictionary<any>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T extends object>(obj: T | null | undefined, iteratee: string): { [P in keyof T]: any }\n    /**\n     * @see _.mapValues\n     */\n    mapValues(obj: string | null | undefined): NumericDictionary<string>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined): Dictionary<T>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T extends object>(obj: T): T\n    /**\n     * @see _.mapValues\n     */\n    mapValues<T extends object>(obj: T | null | undefined): PartialObject<T>\n  }\n  interface String {\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: StringIterator<TResult>): Object<NumericDictionary<TResult>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(): Object<NumericDictionary<string>>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: DictionaryIterator<T, TResult>): Object<Dictionary<TResult>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TKey extends keyof T>(iteratee: TKey): Object<Dictionary<T[TKey]>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(iteratee: object): Object<Dictionary<boolean>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(iteratee: string): Object<Dictionary<any>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(): Object<Dictionary<T>>\n  }\n  interface Object<T> {\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: ObjectIterator<T, TResult>): Object<{ [P in keyof T]: TResult }>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): Object<Dictionary<TResult>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(iteratee: object): Object<{ [P in keyof T]: boolean }>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): Object<Dictionary<T[keyof T][TKey]>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(iteratee: string): Object<{ [P in keyof T]: any }>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(): Object<T>\n  }\n  interface StringChain {\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: StringIterator<TResult>): ObjectChain<NumericDictionary<TResult>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(): ObjectChain<NumericDictionary<string>>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: StringIterator<TResult>): ObjectChain<NumericDictionary<TResult>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(): ObjectChain<NumericDictionary<string>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: DictionaryIterator<T, TResult>): ObjectChain<Dictionary<TResult>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TKey extends keyof T>(iteratee: TKey): ObjectChain<Dictionary<T[TKey]>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(iteratee: object): ObjectChain<Dictionary<boolean>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(iteratee: string): ObjectChain<Dictionary<any>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(): ObjectChain<Dictionary<T>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: ObjectIterator<T, TResult>): ObjectChain<{ [P in keyof T]: TResult }>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): ObjectChain<Dictionary<TResult>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(iteratee: object): ObjectChain<{ [P in keyof T]: boolean }>\n    /**\n     * @see _.mapValues\n     */\n    mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): ObjectChain<Dictionary<T[keyof T][TKey]>>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(iteratee: string): ObjectChain<{ [P in keyof T]: any }>\n    /**\n     * @see _.mapValues\n     */\n    mapValues(): ObjectChain<T>\n  }\n  interface LoDashStatic {\n    /**\n     * Recursively merges own and inherited enumerable properties of source\n     * objects into the destination object, skipping source properties that resolve\n     * to `undefined`. Array and plain object properties are merged recursively.\n     * Other objects and value types are overridden by assignment. Source objects\n     * are applied from left to right. Subsequent sources overwrite property\n     * assignments of previous sources.\n     *\n     * **Note:** This method mutates `object`.\n     *\n     * @category Object\n     * @param object The destination object.\n     * @param [sources] The source objects.\n     * @returns Returns `object`.\n     * @example\n     *\n     * var users = {\n     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]\n     * };\n     *\n     * var ages = {\n     *   'data': [{ 'age': 36 }, { 'age': 40 }]\n     * };\n     *\n     * _.merge(users, ages);\n     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }\n     */\n    merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource\n    /**\n     * @see _.merge\n     */\n    merge<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n    ): TObject & TSource1 & TSource2\n    /**\n     * @see _.merge\n     */\n    merge<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): TObject & TSource1 & TSource2 & TSource3\n    /**\n     * @see _.merge\n     */\n    merge<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): TObject & TSource1 & TSource2 & TSource3 & TSource4\n    /**\n     * @see _.merge\n     */\n    merge(object: any, ...otherArgs: any[]): any\n  }\n  interface Object<T> {\n    /**\n     * @see _.merge\n     */\n    merge<TSource>(source: TSource): Object<T & TSource>\n    /**\n     * @see _.merge\n     */\n    merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>\n    /**\n     * @see _.merge\n     */\n    merge<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): Object<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.merge\n     */\n    merge<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): Object<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.merge\n     */\n    merge(...otherArgs: any[]): Object<any>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.merge\n     */\n    merge<TSource>(source: TSource): ObjectChain<T & TSource>\n    /**\n     * @see _.merge\n     */\n    merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>\n    /**\n     * @see _.merge\n     */\n    merge<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.merge\n     */\n    merge<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.merge\n     */\n    merge(...otherArgs: any[]): ObjectChain<any>\n  }\n  type MergeWithCustomizer = {\n    bivariantHack(value: any, srcValue: any, key: string, object: any, source: any): any\n  }['bivariantHack']\n  // TODO: Probably should just put all these methods on Object and forget about it.\n  // oh, except for Collection<any> I GUESS\n  interface LoDashStatic {\n    /**\n     * This method is like `_.merge` except that it accepts `customizer` which\n     * is invoked to produce the merged values of the destination and source\n     * properties. If `customizer` returns `undefined` merging is handled by the\n     * method instead. The `customizer` is invoked with seven arguments:\n     * (objValue, srcValue, key, object, source, stack).\n     *\n     * @category Object\n     * @param object The destination object.\n     * @param sources The source objects.\n     * @param customizer The function to customize assigned values.\n     * @returns Returns `object`.\n     * @example\n     *\n     * function customizer(objValue, srcValue) {\n     *   if (_.isArray(objValue)) {\n     *     return objValue.concat(srcValue);\n     *   }\n     * }\n     *\n     * var object = {\n     *   'fruits': ['apple'],\n     *   'vegetables': ['beet']\n     * };\n     *\n     * var other = {\n     *   'fruits': ['banana'],\n     *   'vegetables': ['carrot']\n     * };\n     *\n     * _.merge(object, other, customizer);\n     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }\n     */\n    mergeWith<TObject, TSource>(object: TObject, source: TSource, customizer: MergeWithCustomizer): TObject & TSource\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TObject, TSource1, TSource2>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      customizer: MergeWithCustomizer,\n    ): TObject & TSource1 & TSource2\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TObject, TSource1, TSource2, TSource3>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: MergeWithCustomizer,\n    ): TObject & TSource1 & TSource2 & TSource3\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(\n      object: TObject,\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: MergeWithCustomizer,\n    ): TObject & TSource1 & TSource2 & TSource3 & TSource4\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith(object: any, ...otherArgs: any[]): any\n  }\n  interface Object<T> {\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): Object<T & TSource>\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n      customizer: MergeWithCustomizer,\n    ): Object<T & TSource1 & TSource2>\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: MergeWithCustomizer,\n    ): Object<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: MergeWithCustomizer,\n    ): Object<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith(...otherArgs: any[]): Object<any>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): ObjectChain<T & TSource>\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TSource1, TSource2>(\n      source1: TSource1,\n      source2: TSource2,\n      customizer: MergeWithCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2>\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TSource1, TSource2, TSource3>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      customizer: MergeWithCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3>\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith<TSource1, TSource2, TSource3, TSource4>(\n      source1: TSource1,\n      source2: TSource2,\n      source3: TSource3,\n      source4: TSource4,\n      customizer: MergeWithCustomizer,\n    ): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>\n    /**\n     * @see _.mergeWith\n     */\n    mergeWith(...otherArgs: any[]): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * The opposite of `_.pick`; this method creates an object composed of the\n     * own and inherited enumerable properties of `object` that are not omitted.\n     *\n     * @category Object\n     * @param object The source object.\n     * @param [paths] The property names to omit, specified\n     *  individually or in arrays..\n     * @returns Returns the new object.\n     * @example\n     *\n     * var object = { 'a': 1, 'b': '2', 'c': 3 };\n     *\n     * _.omit(object, ['a', 'c']);\n     * // => { 'b': '2' }\n     */\n    omit<T extends object, K extends PropertyName[]>(\n      object: T | null | undefined,\n      ...paths: K\n    ): Pick<T, Exclude<keyof T, K[number]>>\n    /**\n     * @see _.omit\n     */\n    omit<T extends object, K extends keyof T>(object: T | null | undefined, ...paths: Array<Many<K>>): Omit<T, K>\n    /**\n     * @see _.omit\n     */\n    omit<T extends object>(object: T | null | undefined, ...paths: Array<Many<PropertyName>>): PartialObject<T>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.omit\n     */\n    omit(...paths: Array<Many<PropertyName>>): Collection<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.omit\n     */\n    omit<K extends keyof T>(...paths: Array<Many<K>>): Object<Omit<T, K>>\n    /**\n     * @see _.omit\n     */\n    omit(...paths: Array<Many<PropertyName | IterateeShorthand<T>>>): Object<PartialObject<T>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.omit\n     */\n    omit(...paths: Array<Many<PropertyName>>): CollectionChain<T>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.omit\n     */\n    omit<K extends keyof T>(...paths: Array<Many<K>>): ObjectChain<Omit<T, K>>\n    /**\n     * @see _.omit\n     */\n    omit(...paths: Array<Many<PropertyName>>): ObjectChain<PartialObject<T>>\n  }\n  interface LoDashStatic {\n    /**\n     * The opposite of `_.pickBy`; this method creates an object composed of the\n     * own and inherited enumerable properties of `object` that `predicate`\n     * doesn't return truthy for.\n     *\n     * @category Object\n     * @param object The source object.\n     * @param [predicate=_.identity] The function invoked per property.\n     * @returns Returns the new object.\n     * @example\n     *\n     * var object = { 'a': 1, 'b': '2', 'c': 3 };\n     *\n     * _.omitBy(object, _.isNumber);\n     * // => { 'b': '2' }\n     */\n    omitBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>\n    /**\n     * @see _.omitBy\n     */\n    omitBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>\n    /**\n     * @see _.omitBy\n     */\n    omitBy<T extends object>(object: T | null | undefined, predicate: ValueKeyIteratee<T[keyof T]>): PartialObject<T>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.omitBy\n     */\n    omitBy(predicate?: ValueKeyIteratee<T>): Object<Dictionary<T>>\n  }\n  interface Object<T> {\n    /**\n     * @see _.omitBy\n     */\n    omitBy(predicate: ValueKeyIteratee<T[keyof T]>): Object<PartialObject<T>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.omitBy\n     */\n    omitBy(predicate?: ValueKeyIteratee<T>): ObjectChain<Dictionary<T>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.omitBy\n     */\n    omitBy(predicate: ValueKeyIteratee<T[keyof T]>): ObjectChain<PartialObject<T>>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an object composed of the picked `object` properties.\n     *\n     * @category Object\n     * @param object The source object.\n     * @param [props] The property names to pick, specified\n     *  individually or in arrays.\n     * @returns Returns the new object.\n     * @example\n     *\n     * var object = { 'a': 1, 'b': '2', 'c': 3 };\n     *\n     * _.pick(object, ['a', 'c']);\n     * // => { 'a': 1, 'c': 3 }\n     */\n    pick<T extends object, U extends keyof T>(object: T, ...props: Array<Many<U>>): Pick<T, U>\n    /**\n     * @see _.pick\n     */\n    pick<T>(object: T | null | undefined, ...props: PropertyPath[]): PartialObject<T>\n  }\n  interface Object<T> {\n    /**\n     * @see _.pick\n     */\n    pick<U extends keyof T>(...props: Array<Many<U>>): Object<Pick<T, U>>\n    /**\n     * @see _.pick\n     */\n    pick(...props: PropertyPath[]): Object<PartialObject<T>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.pick\n     */\n    pick<U extends keyof T>(...props: Array<Many<U>>): ObjectChain<Pick<T, U>>\n    /**\n     * @see _.pick\n     */\n    pick(...props: PropertyPath[]): ObjectChain<PartialObject<T>>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an object composed of the `object` properties `predicate` returns\n     * truthy for. The predicate is invoked with two arguments: (value, key).\n     *\n     * @category Object\n     * @param object The source object.\n     * @param [predicate=_.identity] The function invoked per property.\n     * @returns Returns the new object.\n     * @example\n     *\n     * var object = { 'a': 1, 'b': '2', 'c': 3 };\n     *\n     * _.pickBy(object, _.isNumber);\n     * // => { 'a': 1, 'c': 3 }\n     */\n    pickBy<T, S extends T>(\n      object: Dictionary<T> | null | undefined,\n      predicate: ValueKeyIterateeTypeGuard<T, S>,\n    ): Dictionary<S>\n    /**\n     * @see _.pickBy\n     */\n    pickBy<T, S extends T>(\n      object: NumericDictionary<T> | null | undefined,\n      predicate: ValueKeyIterateeTypeGuard<T, S>,\n    ): NumericDictionary<S>\n    /**\n     * @see _.pickBy\n     */\n    pickBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>\n    /**\n     * @see _.pickBy\n     */\n    pickBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>\n    /**\n     * @see _.pickBy\n     */\n    pickBy<T extends object>(object: T | null | undefined, predicate?: ValueKeyIteratee<T[keyof T]>): PartialObject<T>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.pickBy\n     */\n    pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): Object<Dictionary<S>>\n    /**\n     * @see _.pickBy\n     */\n    pickBy(predicate?: ValueKeyIteratee<T>): Object<Dictionary<T>>\n  }\n  interface Object<T> {\n    /**\n     * @see _.pickBy\n     */\n    pickBy<S extends T[keyof T]>(\n      predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>,\n    ): Object<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>\n    /**\n     * @see _.pickBy\n     */\n    pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): Object<PartialObject<T>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.pickBy\n     */\n    pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): ObjectChain<Dictionary<S>>\n    /**\n     * @see _.pickBy\n     */\n    pickBy(predicate?: ValueKeyIteratee<T>): ObjectChain<Dictionary<T>>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.pickBy\n     */\n    pickBy<S extends T[keyof T]>(\n      predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>,\n    ): ObjectChain<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>\n    /**\n     * @see _.pickBy\n     */\n    pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): ObjectChain<PartialObject<T>>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.get except that if the resolved value is a function it\u2019s invoked with the this binding\n     * of its parent object and its result is returned.\n     *\n     * @param object The object to query.\n     * @param path The path of the property to resolve.\n     * @param defaultValue The value returned if the resolved value is undefined.\n     * @return Returns the resolved value.\n     */\n    result<TResult>(object: any, path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.result\n     */\n    result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.result\n     */\n    result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): ExpChain<TResult>\n  }\n  interface LoDashStatic {\n    /**\n     * Sets the value at path of object. If a portion of path doesn\u2019t exist it\u2019s created. Arrays are created for\n     * missing index properties while objects are created for all other missing properties. Use _.setWith to\n     * customize path creation.\n     *\n     * @param object The object to modify.\n     * @param path The path of the property to set.\n     * @param value The value to set.\n     * @return Returns object.\n     */\n    set<T extends object>(object: T, path: PropertyPath, value: any): T\n    /**\n     * @see _.set\n     */\n    set<TResult>(object: object, path: PropertyPath, value: any): TResult\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.set\n     */\n    set(path: PropertyPath, value: any): this\n    /**\n     * @see _.set\n     */\n    set<TResult>(path: PropertyPath, value: any): ImpChain<TResult>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.set\n     */\n    set(path: PropertyPath, value: any): this\n    /**\n     * @see _.set\n     */\n    set<TResult>(path: PropertyPath, value: any): ExpChain<TResult>\n  }\n  type SetWithCustomizer<T> = (nsValue: any, key: string, nsObject: T) => any\n  interface LoDashStatic {\n    /**\n     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of\n     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is\n     * invoked with three arguments: (nsValue, key, nsObject).\n     *\n     * @param object The object to modify.\n     * @param path The path of the property to set.\n     * @param value The value to set.\n     * @param customizer The function to customize assigned values.\n     * @return Returns object.\n     */\n    setWith<T extends object>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): T\n    /**\n     * @see _.setWith\n     */\n    setWith<T extends object, TResult>(\n      object: T,\n      path: PropertyPath,\n      value: any,\n      customizer?: SetWithCustomizer<T>,\n    ): TResult\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.setWith\n     */\n    setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this\n    /**\n     * @see _.setWith\n     */\n    setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): ImpChain<TResult>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.setWith\n     */\n    setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this\n    /**\n     * @see _.setWith\n     */\n    setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): ExpChain<TResult>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of own enumerable key-value pairs for object.\n     *\n     * @param object The object to query.\n     * @return Returns the new array of key-value pairs.\n     */\n    toPairs<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>\n    /**\n     * @see _.toPairs\n     */\n    toPairs(object?: object): Array<[string, any]>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toPairs\n     */\n    toPairs(): Collection<\n      [string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]\n    >\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toPairs\n     */\n    toPairs(): CollectionChain<\n      [string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]\n    >\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of own and inherited enumerable key-value pairs for object.\n     *\n     * @param object The object to query.\n     * @return Returns the new array of key-value pairs.\n     */\n    toPairsIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>\n    /**\n     * @see _.toPairsIn\n     */\n    toPairsIn(object?: object): Array<[string, any]>\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toPairsIn\n     */\n    toPairsIn(): Collection<\n      [string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]\n    >\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toPairsIn\n     */\n    toPairsIn(): CollectionChain<\n      [string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]\n    >\n  }\n  interface LoDashStatic {\n    /**\n     * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of\n     * running each of its own enumerable properties through iteratee, with each invocation potentially mutating\n     * the accumulator object. The iteratee is invoked with four arguments: (accumulator,\n     * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.\n     *\n     * @param object The object to iterate over.\n     * @param iteratee The function invoked per iteration.\n     * @param accumulator The custom accumulator value.\n     * @return Returns the accumulated value.\n     */\n    transform<T, TResult>(object: T[], iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): TResult\n    /**\n     * @see _.transform\n     */\n    transform<T, TResult>(\n      object: Dictionary<T>,\n      iteratee: MemoVoidDictionaryIterator<T, TResult>,\n      accumulator?: TResult,\n    ): TResult\n    /**\n     * @see _.transform\n     */\n    transform(object: any[]): any[]\n    /**\n     * @see _.transform\n     */\n    transform(object: object): Dictionary<any>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.transform\n     */\n    transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ImpChain<TResult>\n    /**\n     * @see _.transform\n     */\n    transform(): Collection<any>\n  }\n  interface Object<T> {\n    /**\n     * @see _.transform\n     */\n    transform<TResult>(\n      iteratee: MemoVoidDictionaryIterator<T[keyof T], TResult>,\n      accumulator?: TResult,\n    ): ImpChain<TResult>\n    /**\n     * @see _.transform\n     */\n    transform(): ImpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.transform\n     */\n    transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ExpChain<TResult>\n    /**\n     * @see _.transform\n     */\n    transform(): CollectionChain<any>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.transform\n     */\n    transform<TResult>(\n      iteratee: MemoVoidDictionaryIterator<T[keyof T], TResult>,\n      accumulator?: TResult,\n    ): ExpChain<TResult>\n    /**\n     * @see _.transform\n     */\n    transform(): ExpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>\n  }\n  interface LoDashStatic {\n    /**\n     * Removes the property at path of object.\n     *\n     * Note: This method mutates object.\n     *\n     * @param object The object to modify.\n     * @param path The path of the property to unset.\n     * @return Returns true if the property is deleted, else false.\n     */\n    unset(object: any, path: PropertyPath): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.unset\n     */\n    unset(path: PropertyPath): Primitive<boolean>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.unset\n     */\n    unset(path: PropertyPath): PrimitiveChain<boolean>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to\n     * customize path creation. The updater is invoked with one argument: (value).\n     *\n     * @param object The object to modify.\n     * @param path The path of the property to set.\n     * @param updater The function to produce the updated value.\n     * @return Returns object.\n     */\n    update(object: object, path: PropertyPath, updater: (value: any) => any): any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.update\n     */\n    update(path: PropertyPath, updater: (value: any) => any): Object<any>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.update\n     */\n    update(path: PropertyPath, updater: (value: any) => any): ObjectChain<any>\n  }\n  interface LoDashStatic {\n    /**\n     * This method is like `_.update` except that it accepts `customizer` which is\n     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`\n     * path creation is handled by the method instead. The `customizer` is invoked\n     * with three arguments: (nsValue, key, nsObject).\n     *\n     * **Note:** This method mutates `object`.\n     *\n     * @since 4.6.0\n     * @category Object\n     * @param object The object to modify.\n     * @param path The path of the property to set.\n     * @param updater The function to produce the updated value.\n     * @param [customizer] The function to customize assigned values.\n     * @returns Returns `object`.\n     * @example\n     *\n     * var object = {};\n     *\n     * _.updateWith(object, '[0][1]', _.constant('a'), Object);\n     * // => { '0': { '1': 'a' } }\n     */\n    updateWith<T extends object>(\n      object: T,\n      path: PropertyPath,\n      updater: (oldValue: any) => any,\n      customizer?: SetWithCustomizer<T>,\n    ): T\n    /**\n     * @see _.updateWith\n     */\n    updateWith<T extends object, TResult>(\n      object: T,\n      path: PropertyPath,\n      updater: (oldValue: any) => any,\n      customizer?: SetWithCustomizer<T>,\n    ): TResult\n  }\n  interface Object<T> {\n    /**\n     * @see _.updateWith\n     */\n    updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this\n    /**\n     * @see _.updateWith\n     */\n    updateWith<TResult>(\n      path: PropertyPath,\n      updater: (oldValue: any) => any,\n      customizer?: SetWithCustomizer<T>,\n    ): Object<TResult>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.updateWith\n     */\n    updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this\n    /**\n     * @see _.updateWith\n     */\n    updateWith<TResult>(\n      path: PropertyPath,\n      updater: (oldValue: any) => any,\n      customizer?: SetWithCustomizer<T>,\n    ): ObjectChain<TResult>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of the own enumerable property values of object.\n     *\n     * @param object The object to query.\n     * @return Returns an array of property values.\n     */\n    values<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[]\n    /**\n     * @see _.values\n     */\n    values<T extends object>(object: T | null | undefined): Array<T[keyof T]>\n    /**\n     * @see _.values\n     */\n    values(object: any): any[]\n  }\n  interface String {\n    /**\n     * @see _.values\n     */\n    values(): Collection<string>\n  }\n  interface Object<T> {\n    /**\n     * @see _.values\n     */\n    values(): Collection<T[keyof T]>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.values\n     */\n    values(): CollectionChain<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.values\n     */\n    values(): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.values\n     */\n    values(): CollectionChain<string>\n  }\n  interface LoDashStatic {\n    /**\n     * Creates an array of the own and inherited enumerable property values of object.\n     *\n     * @param object The object to query.\n     * @return Returns the array of property values.\n     */\n    valuesIn<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[]\n    /**\n     * @see _.valuesIn\n     */\n    valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>\n  }\n  interface String {\n    /**\n     * @see _.valuesIn\n     */\n    valuesIn(): Collection<string>\n  }\n  interface Object<T> {\n    /**\n     * @see _.valuesIn\n     */\n    valuesIn(): Collection<T[keyof T]>\n  }\n  interface StringChain {\n    /**\n     * @see _.valuesIn\n     */\n    valuesIn(): CollectionChain<string>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.valuesIn\n     */\n    valuesIn(): CollectionChain<string>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.valuesIn\n     */\n    valuesIn(): CollectionChain<T[keyof T]>\n  }\n}\n", "@types/lodash/common/object.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\ndeclare module '../index' {\n  // chain\n  interface LoDashStatic {\n    /**\n     * Creates a lodash object that wraps value with explicit method chaining enabled.\n     *\n     * @param value The value to wrap.\n     * @return Returns the new lodash wrapper instance.\n     */\n    chain<TrapAny extends { __lodashAnyHack: any }>(\n      value: TrapAny,\n    ): CollectionChain<any> & FunctionChain<any> & ObjectChain<any> & PrimitiveChain<any> & StringChain\n    /**\n     * @see _.chain\n     */\n    chain<T extends null | undefined>(value: T): PrimitiveChain<T>\n    /**\n     * @see _.chain\n     */\n    chain(value: string): StringChain\n    /**\n     * @see _.chain\n     */\n    chain(value: string | null | undefined): StringNullableChain\n    /**\n     * @see _.chain\n     */\n    chain<T extends (...args: any[]) => any>(value: T): FunctionChain<T>\n    /**\n     * @see _.chain\n     */\n    chain<T = any>(value: List<T> | null | undefined): CollectionChain<T>\n    /**\n     * @see _.chain\n     */\n    chain<T extends object>(value: T | null | undefined): ObjectChain<T>\n    /**\n     * @see _.chain\n     */\n    chain<T>(value: T): PrimitiveChain<T>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.chain\n     */\n    chain(): CollectionChain<T>\n  }\n  interface String {\n    /**\n     * @see _.chain\n     */\n    chain(): StringChain\n  }\n  interface Object<T> {\n    /**\n     * @see _.chain\n     */\n    chain(): ObjectChain<T>\n  }\n  interface Primitive<T> {\n    /**\n     * @see _.chain\n     */\n    chain(): PrimitiveChain<T>\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.chain\n     */\n    chain(): FunctionChain<T>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.chain\n     */\n    chain(): this\n  }\n  // prototype.commit\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.commit\n     */\n    commit(): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.commit\n     */\n    commit(): this\n  }\n  // prototype.plant\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.plant\n     */\n    plant(value: unknown): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.plant\n     */\n    plant(value: unknown): this\n  }\n  // prototype.reverse\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.reverse\n     */\n    reverse(): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.reverse\n     */\n    reverse(): this\n  }\n  // prototype.toJSON\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toJSON\n     */\n    toJSON(): TValue\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toJSON\n     */\n    toJSON(): TValue\n  }\n  // prototype.toString\n  interface LoDashWrapper<TValue> {\n    /**\n     * @see _.toString\n     */\n    toString(): string\n  }\n  // prototype.value\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.value\n     */\n    value(): TValue\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.value\n     */\n    value(): TValue\n  }\n  // prototype.valueOf\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.valueOf\n     */\n    valueOf(): TValue\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.valueOf\n     */\n    valueOf(): TValue\n  }\n  // tap\n  interface LoDashStatic {\n    /**\n     * This method invokes interceptor and returns value. The interceptor is invoked with one\n     * argument; (value). The purpose of this method is to \"tap into\" a method chain in order to perform operations\n     * on intermediate results within the chain.\n     *\n     * @param value The value to provide to interceptor.\n     * @param interceptor The function to invoke.\n     * @return Returns value.\n     */\n    tap<T>(value: T, interceptor: (value: T) => void): T\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.tap\n     */\n    tap(interceptor: (value: TValue) => void): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.tap\n     */\n    tap(interceptor: (value: TValue) => void): this\n  }\n  // thru\n  interface LoDashStatic {\n    /**\n     * This method is like _.tap except that it returns the result of interceptor.\n     *\n     * @param value The value to provide to interceptor.\n     * @param interceptor The function to invoke.\n     * @return Returns the result of interceptor.\n     */\n    thru<T, TResult>(value: T, interceptor: (value: T) => TResult): TResult\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.thru\n     */\n    thru<TResult>(interceptor: (value: TValue) => TResult): ImpChain<TResult>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.thru\n     */\n    thru<TResult>(interceptor: (value: TValue) => TResult): ExpChain<TResult>\n  }\n}\n", "@types/lodash/common/seq.d.ts"), N(e, '/* eslint-disable */\nimport _ = require(\'../index\')\ndeclare module \'../index\' {\n  interface LoDashStatic {\n    /**\n     * Converts string to camel case.\n     *\n     * @param string The string to convert.\n     * @return Returns the camel cased string.\n     */\n    camelCase(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.camelCase\n     */\n    camelCase(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.camelCase\n     */\n    camelCase(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts the first character of string to upper case and the remaining to lower case.\n     *\n     * @param string The string to capitalize.\n     * @return Returns the capitalized string.\n     */\n    capitalize(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.capitalize\n     */\n    capitalize(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.capitalize\n     */\n    capitalize(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining\n     * diacritical marks.\n     *\n     * @param string The string to deburr.\n     * @return Returns the deburred string.\n     */\n    deburr(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.deburr\n     */\n    deburr(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.deburr\n     */\n    deburr(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if string ends with the given target string.\n     *\n     * @param string The string to search.\n     * @param target The string to search for.\n     * @param position The position to search from.\n     * @return Returns true if string ends with target, else false.\n     */\n    endsWith(string?: string, target?: string, position?: number): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.endsWith\n     */\n    endsWith(target?: string, position?: number): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.endsWith\n     */\n    endsWith(target?: string, position?: number): PrimitiveChain<boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts the characters "&", "<", ">", \'"\', "\'", and "`" in string to their corresponding HTML entities.\n     *\n     * Note: No other characters are escaped. To escape additional characters use a third-party library like he.\n     *\n     * hough the ">" character is escaped for symmetry, characters like ">" and "/" don\u2019t need escaping in HTML\n     * and have no special meaning unless they\'re part of a tag or unquoted attribute value. See Mathias Bynens\u2019s\n     * article (under "semi-related fun fact") for more details.\n     *\n     * Backticks are escaped because in IE < 9, they can break out of attribute values or HTML comments. See #59,\n     * #102, #108, and #133 of the HTML5 Security Cheatsheet for more details.\n     *\n     * When working with HTML you should always quote attribute values to reduce XSS vectors.\n     *\n     * @param string The string to escape.\n     * @return Returns the escaped string.\n     */\n    escape(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.escape\n     */\n    escape(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.escape\n     */\n    escape(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Escapes the RegExp special characters "^", "$", "\\", ".", "*", "+", "?", "(", ")", "[", "]",\n     * "{", "}", and "|" in string.\n     *\n     * @param string The string to escape.\n     * @return Returns the escaped string.\n     */\n    escapeRegExp(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.escapeRegExp\n     */\n    escapeRegExp(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.escapeRegExp\n     */\n    escapeRegExp(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts string to kebab case.\n     *\n     * @param string The string to convert.\n     * @return Returns the kebab cased string.\n     */\n    kebabCase(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.kebabCase\n     */\n    kebabCase(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.kebabCase\n     */\n    kebabCase(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `string`, as space separated words, to lower case.\n     *\n     * @param string The string to convert.\n     * @return Returns the lower cased string.\n     */\n    lowerCase(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.lowerCase\n     */\n    lowerCase(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.lowerCase\n     */\n    lowerCase(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts the first character of `string` to lower case.\n     *\n     * @param string The string to convert.\n     * @return Returns the converted string.\n     */\n    lowerFirst(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.lowerFirst\n     */\n    lowerFirst(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.lowerFirst\n     */\n    lowerFirst(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Pads string on the left and right sides if it\u2019s shorter than length. Padding characters are truncated if\n     * they can\u2019t be evenly divided by length.\n     *\n     * @param string The string to pad.\n     * @param length The padding length.\n     * @param chars The string used as padding.\n     * @return Returns the padded string.\n     */\n    pad(string?: string, length?: number, chars?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.pad\n     */\n    pad(length?: number, chars?: string): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.pad\n     */\n    pad(length?: number, chars?: string): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Pads string on the right side if it\u2019s shorter than length. Padding characters are truncated if they exceed\n     * length.\n     *\n     * @param string The string to pad.\n     * @param length The padding length.\n     * @param chars The string used as padding.\n     * @return Returns the padded string.\n     */\n    padEnd(string?: string, length?: number, chars?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.padEnd\n     */\n    padEnd(length?: number, chars?: string): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.padEnd\n     */\n    padEnd(length?: number, chars?: string): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Pads string on the left side if it\u2019s shorter than length. Padding characters are truncated if they exceed\n     * length.\n     *\n     * @param string The string to pad.\n     * @param length The padding length.\n     * @param chars The string used as padding.\n     * @return Returns the padded string.\n     */\n    padStart(string?: string, length?: number, chars?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.padStart\n     */\n    padStart(length?: number, chars?: string): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.padStart\n     */\n    padStart(length?: number, chars?: string): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used\n     * unless value is a hexadecimal, in which case a radix of 16 is used.\n     *\n     * Note: This method aligns with the ES5 implementation of parseInt.\n     *\n     * @param string The string to convert.\n     * @param radix The radix to interpret value by.\n     * @return Returns the converted integer.\n     */\n    parseInt(string: string, radix?: number): number\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.parseInt\n     */\n    parseInt(radix?: number): number\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.parseInt\n     */\n    parseInt(radix?: number): PrimitiveChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Repeats the given string n times.\n     *\n     * @param string The string to repeat.\n     * @param n The number of times to repeat the string.\n     * @return Returns the repeated string.\n     */\n    repeat(string?: string, n?: number): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.repeat\n     */\n    repeat(n?: number): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.repeat\n     */\n    repeat(n?: number): StringChain\n  }\n  type ReplaceFunction = (match: string, ...args: any[]) => string\n\n  interface LoDashStatic {\n    /**\n     * Replaces matches for pattern in string with replacement.\n     *\n     * Note: This method is based on String#replace.\n     *\n     * @return Returns the modified string.\n     */\n    replace(string: string, pattern: RegExp | string, replacement: ReplaceFunction | string): string\n    /**\n     * @see _.replace\n     */\n    replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.replace\n     */\n    replace(pattern: RegExp | string, replacement: ReplaceFunction | string): string\n    /**\n     * @see _.replace\n     */\n    replace(replacement: ReplaceFunction | string): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.replace\n     */\n    replace(pattern: RegExp | string, replacement: ReplaceFunction | string): StringChain\n    /**\n     * @see _.replace\n     */\n    replace(replacement: ReplaceFunction | string): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts string to snake case.\n     *\n     * @param string The string to convert.\n     * @return Returns the snake cased string.\n     */\n    snakeCase(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.snakeCase\n     */\n    snakeCase(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.snakeCase\n     */\n    snakeCase(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Splits string by separator.\n     *\n     * Note: This method is based on String#split.\n     *\n     * @param string The string to split.\n     * @param separator The separator pattern to split by.\n     * @param limit The length to truncate results to.\n     * @return Returns the new array of string segments.\n     */\n    split(string: string | null | undefined, separator?: RegExp | string, limit?: number): string[]\n    /**\n     * @see _.split\n     */\n    split(string: string | null | undefined, index: string | number, guard: object): string[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.split\n     */\n    split(separator?: RegExp | string, limit?: number): Collection<string>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.split\n     */\n    split(separator?: RegExp | string, limit?: number): CollectionChain<string>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts string to start case.\n     *\n     * @param string The string to convert.\n     * @return Returns the start cased string.\n     */\n    startCase(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.startCase\n     */\n    startCase(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.startCase\n     */\n    startCase(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks if string starts with the given target string.\n     *\n     * @param string The string to search.\n     * @param target The string to search for.\n     * @param position The position to search from.\n     * @return Returns true if string starts with target, else false.\n     */\n    startsWith(string?: string, target?: string, position?: number): boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.startsWith\n     */\n    startsWith(target?: string, position?: number): boolean\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.startsWith\n     */\n    startsWith(target?: string, position?: number): PrimitiveChain<boolean>\n  }\n\n  interface TemplateOptions extends TemplateSettings {\n    /**\n     * @see _.sourceURL\n     */\n    sourceURL?: string\n  }\n  interface TemplateExecutor {\n    (data?: object): string\n    /**\n     * @see _.source\n     */\n    source: string\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a compiled template function that can interpolate data properties in "interpolate" delimiters,\n     * HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate"\n     * delimiters. Data properties may be accessed as free variables in the template. If a setting object is\n     * provided it takes precedence over _.templateSettings values.\n     *\n     * Note: In the development build _.template utilizes\n     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for easier\n     * debugging.\n     *\n     * For more information on precompiling templates see\n     * [lodash\'s custom builds documentation](https://lodash.com/custom-builds).\n     *\n     * For more information on Chrome extension sandboxes see\n     * [Chrome\'s extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).\n     *\n     * @param string The template string.\n     * @param options The options object.\n     * @param options.escape The HTML "escape" delimiter.\n     * @param options.evaluate The "evaluate" delimiter.\n     * @param options.imports An object to import into the template as free variables.\n     * @param options.interpolate The "interpolate" delimiter.\n     * @param options.sourceURL The sourceURL of the template\'s compiled source.\n     * @param options.variable The data object variable name.\n     * @return Returns the compiled template function.\n     */\n    template(string?: string, options?: TemplateOptions): TemplateExecutor\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.template\n     */\n    template(options?: TemplateOptions): TemplateExecutor\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.template\n     */\n    template(options?: TemplateOptions): FunctionChain<TemplateExecutor>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `string`, as a whole, to lower case.\n     *\n     * @param string The string to convert.\n     * @return Returns the lower cased string.\n     */\n    toLower(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toLower\n     */\n    toLower(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toLower\n     */\n    toLower(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `string`, as a whole, to upper case.\n     *\n     * @param string The string to convert.\n     * @return Returns the upper cased string.\n     */\n    toUpper(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toUpper\n     */\n    toUpper(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toUpper\n     */\n    toUpper(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Removes leading and trailing whitespace or specified characters from string.\n     *\n     * @param string The string to trim.\n     * @param chars The characters to trim.\n     * @return Returns the trimmed string.\n     */\n    trim(string?: string, chars?: string): string\n    /**\n     * @see _.trim\n     */\n    trim(string: string, index: string | number, guard: object): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.trim\n     */\n    trim(chars?: string): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.trim\n     */\n    trim(chars?: string): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Removes trailing whitespace or specified characters from string.\n     *\n     * @param string The string to trim.\n     * @param chars The characters to trim.\n     * @return Returns the trimmed string.\n     */\n    trimEnd(string?: string, chars?: string): string\n    /**\n     * @see _.trimEnd\n     */\n    trimEnd(string: string, index: string | number, guard: object): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.trimEnd\n     */\n    trimEnd(chars?: string): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.trimEnd\n     */\n    trimEnd(chars?: string): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Removes leading whitespace or specified characters from string.\n     *\n     * @param string The string to trim.\n     * @param chars The characters to trim.\n     * @return Returns the trimmed string.\n     */\n    trimStart(string?: string, chars?: string): string\n    /**\n     * @see _.trimStart\n     */\n    trimStart(string: string, index: string | number, guard: object): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.trimStart\n     */\n    trimStart(chars?: string): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.trimStart\n     */\n    trimStart(chars?: string): StringChain\n  }\n\n  interface TruncateOptions {\n    /**\n     * @see _.length\n     */\n    length?: number\n    /**\n     * @see _.omission\n     */\n    omission?: string\n    /**\n     * @see _.separator\n     */\n    separator?: string | RegExp\n  }\n  interface LoDashStatic {\n    /**\n     * Truncates string if it\u2019s longer than the given maximum string length. The last characters of the truncated\n     * string are replaced with the omission string which defaults to "\u2026".\n     *\n     * @param string The string to truncate.\n     * @param options The options object or maximum string length.\n     * @return Returns the truncated string.\n     */\n    truncate(string?: string, options?: TruncateOptions): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.truncate\n     */\n    truncate(options?: TruncateOptions): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.truncate\n     */\n    truncate(options?: TruncateOptions): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96;\n     * in string to their corresponding characters.\n     *\n     * Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library\n     * like he.\n     *\n     * @param string The string to unescape.\n     * @return Returns the unescaped string.\n     */\n    unescape(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.unescape\n     */\n    unescape(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.unescape\n     */\n    unescape(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `string`, as space separated words, to upper case.\n     *\n     * @param string The string to convert.\n     * @return Returns the upper cased string.\n     */\n    upperCase(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.upperCase\n     */\n    upperCase(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.upperCase\n     */\n    upperCase(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts the first character of `string` to upper case.\n     *\n     * @param string The string to convert.\n     * @return Returns the converted string.\n     */\n    upperFirst(string?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.upperFirst\n     */\n    upperFirst(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.upperFirst\n     */\n    upperFirst(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * Splits `string` into an array of its words.\n     *\n     * @param string The string to inspect.\n     * @param pattern The pattern to match words.\n     * @return Returns the words of `string`.\n     */\n    words(string?: string, pattern?: string | RegExp): string[]\n    /**\n     * @see _.words\n     */\n    words(string: string, index: string | number, guard: object): string[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.words\n     */\n    words(pattern?: string | RegExp): string[]\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.words\n     */\n    words(pattern?: string | RegExp): CollectionChain<string>\n  }\n}\n', "@types/lodash/common/string.d.ts"), N(e, "/* eslint-disable */\nimport _ = require('../index')\ndeclare module '../index' {\n  interface LoDashStatic {\n    /**\n     * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments\n     * are provided to func when it\u2019s invoked.\n     *\n     * @param func The function to attempt.\n     * @return Returns the func result or error object.\n     */\n    attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult | Error\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.attempt\n     */\n    attempt<TResult>(...args: any[]): TResult | Error\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.attempt\n     */\n    attempt<TResult>(...args: any[]): ExpChain<TResult | Error>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Binds methods of an object to the object itself, overwriting the existing method. Method names may be\n     * specified as individual arguments or as arrays of method names. If no method names are provided all\n     * enumerable function properties, own and inherited, of object are bound.\n     *\n     * Note: This method does not set the \"length\" property of bound functions.\n     *\n     * @param object The object to bind and assign the bound methods to.\n     * @param methodNames The object method names to bind, specified as individual method names or arrays of\n     * method names.\n     * @return Returns object.\n     */\n    bindAll<T>(object: T, ...methodNames: Array<Many<string>>): T\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.bindAll\n     */\n    bindAll(...methodNames: Array<Many<string>>): this\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.bindAll\n     */\n    bindAll(...methodNames: Array<Many<string>>): this\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that iterates over `pairs` and invokes the corresponding\n     * function of the first predicate to return truthy. The predicate-function\n     * pairs are invoked with the `this` binding and arguments of the created\n     * function.\n     *\n     * @since 4.0.0\n     * @category Util\n     * @param pairs The predicate-function pairs.\n     * @returns Returns the new composite function.\n     * @example\n     *\n     * var func = _.cond([\n     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],\n     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],\n     *   [_.stubTrue,                      _.constant('no match')]\n     * ]);\n     *\n     * func({ 'a': 1, 'b': 2 });\n     * // => 'matches A'\n     *\n     * func({ 'a': 0, 'b': 1 });\n     * // => 'matches B'\n     *\n     * func({ 'a': '1', 'b': '2' });\n     * // => 'no match'\n     */\n    cond<T, R>(pairs: Array<CondPair<T, R>>): (Target: T) => R\n  }\n\n  type ConformsPredicateObject<T> = {\n    [P in keyof T]: T[P] extends (arg: infer A) => any ? A : any\n  }\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes the predicate properties of `source` with the corresponding\n     * property values of a given object, returning true if all predicates return truthy, else false.\n     */\n    conforms<T>(source: ConformsPredicateObject<T>): (value: T) => boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.conforms\n     */\n    conforms(): Function<(value: ConformsPredicateObject<TValue>) => boolean>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.conforms\n     */\n    conforms(): FunctionChain<(value: ConformsPredicateObject<TValue>) => boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that returns value.\n     *\n     * @param value The value to return from the new function.\n     * @return Returns the new function.\n     */\n    constant<T>(value: T): () => T\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.constant\n     */\n    constant(): Function<() => TValue>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.constant\n     */\n    constant(): FunctionChain<() => TValue>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Checks `value` to determine whether a default value should be returned in\n     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,\n     * or `undefined`.\n     *\n     * @param value The value to check.\n     * @param defaultValue The default value.\n     * @returns Returns the resolved value.\n     */\n    defaultTo<T>(value: T | null | undefined, defaultValue: T): T\n    /**\n     * @see _.defaultTo\n     */\n    defaultTo<T, TDefault>(value: T | null | undefined, defaultValue: TDefault): T | TDefault\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.defaultTo\n     */\n    defaultTo(defaultValue: TValue): TValue\n    /**\n     * @see _.defaultTo\n     */\n    defaultTo<TDefault>(defaultValue: TDefault): TValue extends null | undefined ? TDefault : TValue | TDefault\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.defaultTo\n     */\n    defaultTo(defaultValue: TValue): ExpChain<TValue>\n    /**\n     * @see _.defaultTo\n     */\n    defaultTo<TDefault>(\n      defaultValue: TDefault,\n    ): ExpChain<TValue extends null | undefined ? TDefault : TValue | TDefault>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that returns the result of invoking the provided functions with the this binding of the\n     * created function, where each successive invocation is supplied the return value of the previous.\n     *\n     * @param funcs Functions to invoke.\n     * @return Returns the new function.\n     */\n    flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(\n      f1: (...args: A) => R1,\n      f2: (a: R1) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n      f7: (a: R6) => R7,\n    ): (...args: A) => R7\n    /**\n     * @see _.flow\n     */\n    flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(\n      f1: (...args: A) => R1,\n      f2: (a: R1) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n      f7: (a: R6) => R7,\n      ...func: Array<Many<(a: any) => any>>\n    ): (...args: A) => any\n    /**\n     * @see _.flow\n     */\n    flow<A extends any[], R1, R2, R3, R4, R5, R6>(\n      f1: (...args: A) => R1,\n      f2: (a: R1) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n    ): (...args: A) => R6\n    /**\n     * @see _.flow\n     */\n    flow<A extends any[], R1, R2, R3, R4, R5>(\n      f1: (...args: A) => R1,\n      f2: (a: R1) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n    ): (...args: A) => R5\n    /**\n     * @see _.flow\n     */\n    flow<A extends any[], R1, R2, R3, R4>(\n      f1: (...args: A) => R1,\n      f2: (a: R1) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n    ): (...args: A) => R4\n    /**\n     * @see _.flow\n     */\n    flow<A extends any[], R1, R2, R3>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (...args: A) => R3\n    /**\n     * @see _.flow\n     */\n    flow<A extends any[], R1, R2>(f1: (...args: A) => R1, f2: (a: R1) => R2): (...args: A) => R2\n    /**\n     * @see _.flow\n     */\n    flow(...func: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any\n  }\n  interface Function<T extends (...arg: any) => any> {\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4, R5, R6, R7>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n      f7: (a: R6) => R7,\n    ): Function<(...args: Parameters<T>) => R7>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4, R5, R6, R7>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n      f7: (a: R6) => R7,\n      ...func: Array<Many<(a: any) => any>>\n    ): Function<(...args: Parameters<T>) => any>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4, R5, R6>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n    ): Function<(...args: Parameters<T>) => R6>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4, R5>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n    ): Function<(...args: Parameters<T>) => R5>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n    ): Function<(...args: Parameters<T>) => R4>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3): Function<(...args: Parameters<T>) => R3>\n    /**\n     * @see _.flow\n     */\n    flow<R2>(f2: (a: ReturnType<T>) => R2): Function<(...args: Parameters<T>) => R2>\n    /**\n     * @see _.flow\n     */\n    flow(...func: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>\n  }\n  interface FunctionChain<T> {\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4, R5, R6, R7>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n      f7: (a: R6) => R7,\n    ): FunctionChain<(...args: Parameters<T>) => R7>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4, R5, R6, R7>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n      f7: (a: R6) => R7,\n      ...func: Array<Many<(a: any) => any>>\n    ): FunctionChain<(...args: Parameters<T>) => any>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4, R5, R6>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n      f6: (a: R5) => R6,\n    ): FunctionChain<(...args: Parameters<T>) => R6>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4, R5>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n      f5: (a: R4) => R5,\n    ): FunctionChain<(...args: Parameters<T>) => R5>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3, R4>(\n      f2: (a: ReturnType<T>) => R2,\n      f3: (a: R2) => R3,\n      f4: (a: R3) => R4,\n    ): FunctionChain<(...args: Parameters<T>) => R4>\n    /**\n     * @see _.flow\n     */\n    flow<R2, R3>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3): FunctionChain<(...args: Parameters<T>) => R3>\n    /**\n     * @see _.flow\n     */\n    flow<R2>(f2: (a: ReturnType<T>) => R2): FunctionChain<(...args: Parameters<T>) => R2>\n    /**\n     * @see _.flow\n     */\n    flow(...func: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method is like _.flow except that it creates a function that invokes the provided functions from right\n     * to left.\n     *\n     * @param funcs Functions to invoke.\n     * @return Returns the new function.\n     */\n    flowRight<A extends any[], R1, R2, R3, R4, R5, R6, R7>(\n      f7: (a: R6) => R7,\n      f6: (a: R5) => R6,\n      f5: (a: R4) => R5,\n      f4: (a: R3) => R4,\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): (...args: A) => R7\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3, R4, R5, R6>(\n      f6: (a: R5) => R6,\n      f5: (a: R4) => R5,\n      f4: (a: R3) => R4,\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): (...args: A) => R6\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3, R4, R5>(\n      f5: (a: R4) => R5,\n      f4: (a: R3) => R4,\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): (...args: A) => R5\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3, R4>(\n      f4: (a: R3) => R4,\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): (...args: A) => R4\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3>(\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): (...args: A) => R3\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2>(f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R2\n    /**\n     * @see _.flowRight\n     */\n    flowRight(...func: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any\n  }\n  interface Function<T> {\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3, R4, R5>(\n      f6: (a: R5) => Parameters<T>['0'],\n      f5: (a: R4) => R5,\n      f4: (a: R3) => R4,\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): Function<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3, R4>(\n      f5: (a: R4) => Parameters<T>['0'],\n      f4: (a: R3) => R4,\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): Function<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3>(\n      f4: (a: R3) => Parameters<T>['0'],\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): Function<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2>(\n      f3: (a: R2) => Parameters<T>['0'],\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): Function<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1>(\n      f2: (a: R1) => Parameters<T>['0'],\n      f1: (...args: A) => R1,\n    ): Function<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[]>(f1: (...args: A) => Parameters<T>['0']): Function<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight(...func: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>\n  }\n  interface FunctionChain<T> {\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3, R4, R5>(\n      f6: (a: R5) => Parameters<T>['0'],\n      f5: (a: R4) => R5,\n      f4: (a: R3) => R4,\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): FunctionChain<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3, R4>(\n      f5: (a: R4) => Parameters<T>['0'],\n      f4: (a: R3) => R4,\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): FunctionChain<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2, R3>(\n      f4: (a: R3) => Parameters<T>['0'],\n      f3: (a: R2) => R3,\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): FunctionChain<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1, R2>(\n      f3: (a: R2) => Parameters<T>['0'],\n      f2: (a: R1) => R2,\n      f1: (...args: A) => R1,\n    ): FunctionChain<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[], R1>(\n      f2: (a: R1) => Parameters<T>['0'],\n      f1: (...args: A) => R1,\n    ): FunctionChain<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight<A extends any[]>(f1: (...args: A) => Parameters<T>['0']): FunctionChain<(...args: A) => ReturnType<T>>\n    /**\n     * @see _.flowRight\n     */\n    flowRight(...func: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method returns the first argument provided to it.\n     *\n     * @param value Any value.\n     * @return Returns value.\n     */\n    identity<T>(value: T): T\n    /**\n     * @see _.identity\n     */\n    identity(): undefined\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.identity\n     */\n    identity(): TValue\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.identity\n     */\n    identity(): this\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes `func` with the arguments of the created\n     * function. If `func` is a property name the created callback returns the\n     * property value for a given element. If `func` is an object the created\n     * callback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`.\n     *\n     * @category Util\n     * @param [func=_.identity] The value to convert to a callback.\n     * @returns Returns the callback.\n     * @example\n     *\n     * var users = [\n     *   { 'user': 'barney', 'age': 36 },\n     *   { 'user': 'fred',   'age': 40 }\n     * ];\n     *\n     * // create custom iteratee shorthands\n     * _.iteratee = _.wrap(_.iteratee, function(callback, func) {\n     *   var p = /^(\\S+)\\s*([<>])\\s*(\\S+)$/.exec(func);\n     *   return !p ? callback(func) : function(object) {\n     *     return (p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3]);\n     *   };\n     * });\n     *\n     * _.filter(users, 'age > 36');\n     * // => [{ 'user': 'fred', 'age': 40 }]\n     */\n    iteratee<TFunction extends (...args: any[]) => any>(func: TFunction): TFunction\n    /**\n     * @see _.iteratee\n     */\n    iteratee(func: string | object): (...args: any[]) => any\n  }\n  interface Function<T extends (...args: any) => any> {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): Function<T>\n  }\n  interface Collection<T> {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): Function<(o: object) => boolean>\n  }\n  interface Object<T> {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): Function<(o: T) => boolean>\n  }\n  interface String {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): Function<(o: object) => any>\n  }\n  interface FunctionChain<T extends (...args: any) => any> {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): FunctionChain<T>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): FunctionChain<(o: object) => boolean>\n  }\n  interface ObjectChain<T> {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): FunctionChain<(o: T) => boolean>\n  }\n  interface StringChain {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): FunctionChain<(o: object) => any>\n  }\n  interface StringNullableChain {\n    /**\n     * @see _.iteratee\n     */\n    iteratee(): FunctionChain<(o: object) => any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that performs a deep comparison between a given object and source, returning true if the\n     * given object has equivalent property values, else false.\n     *\n     * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and\n     * strings. Objects are compared by their own, not inherited, enumerable properties. For comparing a single own\n     * or inherited property value see _.matchesProperty.\n     *\n     * @param source The object of property values to match.\n     * @return Returns the new function.\n     */\n    matches<T>(source: T): (value: any) => boolean\n    /**\n     * @see _.matches\n     */\n    matches<T, V>(source: T): (value: V) => boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.matches\n     */\n    matches<V>(): Function<(value: V) => boolean>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.matches\n     */\n    matches<V>(): FunctionChain<(value: V) => boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that compares the property value of path on a given object to value.\n     *\n     * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and\n     * strings. Objects are compared by their own, not inherited, enumerable properties.\n     *\n     * @param path The path of the property to get.\n     * @param srcValue The value to match.\n     * @return Returns the new function.\n     */\n    matchesProperty<T>(path: PropertyPath, srcValue: T): (value: any) => boolean\n    /**\n     * @see _.matchesProperty\n     */\n    matchesProperty<T, V>(path: PropertyPath, srcValue: T): (value: V) => boolean\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.matchesProperty\n     */\n    matchesProperty<SrcValue>(srcValue: SrcValue): Function<(value: any) => boolean>\n    /**\n     * @see _.matchesProperty\n     */\n    matchesProperty<SrcValue, Value>(srcValue: SrcValue): Function<(value: Value) => boolean>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.matchesProperty\n     */\n    matchesProperty<SrcValue>(srcValue: SrcValue): FunctionChain<(value: any) => boolean>\n    /**\n     * @see _.matchesProperty\n     */\n    matchesProperty<SrcValue, Value>(srcValue: SrcValue): FunctionChain<(value: Value) => boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes the method at path on a given object. Any additional arguments are provided\n     * to the invoked method.\n     *\n     * @param path The path of the method to invoke.\n     * @param args The arguments to invoke the method with.\n     * @return Returns the new function.\n     */\n    method(path: PropertyPath, ...args: any[]): (object: any) => any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.method\n     */\n    method(...args: any[]): Function<(object: any) => any>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.method\n     */\n    method(...args: any[]): FunctionChain<(object: any) => any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * The opposite of _.method; this method creates a function that invokes the method at a given path on object.\n     * Any additional arguments are provided to the invoked method.\n     *\n     * @param object The object to query.\n     * @param args The arguments to invoke the method with.\n     * @return Returns the new function.\n     */\n    methodOf(object: object, ...args: any[]): (path: PropertyPath) => any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.methodOf\n     */\n    methodOf(...args: any[]): LoDashImplicitWrapper<(path: PropertyPath) => any>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.methodOf\n     */\n    methodOf(...args: any[]): LoDashExplicitWrapper<(path: PropertyPath) => any>\n  }\n\n  interface MixinOptions {\n    /**\n     * @see _.chain\n     */\n    chain?: boolean\n  }\n  interface LoDashStatic {\n    /**\n     * Adds all own enumerable function properties of a source object to the destination object. If object is a\n     * function then methods are added to its prototype as well.\n     *\n     * Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying\n     * the original.\n     *\n     * @param object The destination object.\n     * @param source The object of functions to add.\n     * @param options The options object.\n     * @param options.chain Specify whether the functions added are chainable.\n     * @return Returns object.\n     */\n    mixin<TObject>(object: TObject, source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): TObject\n    /**\n     * @see _.mixin\n     */\n    mixin<TResult>(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): LoDashStatic\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.mixin\n     */\n    mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this\n    /**\n     * @see _.mixin\n     */\n    mixin(options?: MixinOptions): LoDashImplicitWrapper<LoDashStatic>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.mixin\n     */\n    mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this\n    /**\n     * @see _.mixin\n     */\n    mixin(options?: MixinOptions): LoDashExplicitWrapper<LoDashStatic>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Reverts the _ variable to its previous value and returns a reference to the lodash function.\n     *\n     * @return Returns the lodash function.\n     */\n    noConflict(): typeof _\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.noConflict\n     */\n    noConflict(): typeof _\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.noConflict\n     */\n    noConflict(): LoDashExplicitWrapper<typeof _>\n  }\n\n  interface LoDashStatic {\n    /**\n     * A no-operation function that returns undefined regardless of the arguments it receives.\n     *\n     * @return undefined\n     */\n    noop(...args: any[]): void\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.noop\n     */\n    noop(...args: any[]): void\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.noop\n     */\n    noop(...args: any[]): PrimitiveChain<undefined>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that returns its nth argument.\n     *\n     * @param n The index of the argument to return.\n     * @return Returns the new function.\n     */\n    nthArg(n?: number): (...args: any[]) => any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.nthArg\n     */\n    nthArg(): Function<(...args: any[]) => any>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.nthArg\n     */\n    nthArg(): FunctionChain<(...args: any[]) => any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that invokes iteratees with the arguments provided to the created function and returns\n     * their results.\n     *\n     * @param iteratees The iteratees to invoke.\n     * @return Returns the new function.\n     */\n    over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): (...args: any[]) => TResult[]\n  }\n  interface Collection<T> {\n    /**\n     * @see _.over\n     */\n    over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): Function<(...args: any[]) => TResult[]>\n  }\n  interface Function<T> {\n    /**\n     * @see _.over\n     */\n    over<TResult>(\n      ...iteratees: Array<Many<(...args: any[]) => TResult>>\n    ): Function<(...args: any[]) => Array<ReturnType<T> | TResult>>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.over\n     */\n    over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): FunctionChain<(...args: any[]) => TResult[]>\n  }\n  interface FunctionChain<T> {\n    /**\n     * @see _.over\n     */\n    over<TResult>(\n      ...iteratees: Array<Many<(...args: any[]) => TResult>>\n    ): FunctionChain<(...args: any[]) => Array<ReturnType<T> | TResult>>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that checks if all of the predicates return truthy when invoked with the arguments\n     * provided to the created function.\n     *\n     * @param predicates The predicates to check.\n     * @return Returns the new function.\n     */\n    overEvery<T, Result1 extends T, Result2 extends T>(\n      ...predicates: [(arg: T) => arg is Result1, (arg: T) => arg is Result2]\n    ): (arg: T) => arg is Result1 & Result2\n    overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean\n  }\n  interface Collection<T> {\n    /**\n     * @see _.overEvery\n     */\n    overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: TArgs[]) => boolean>\n  }\n  interface Function<T> {\n    /**\n     * @see _.overEvery\n     */\n    overEvery<TArgs>(\n      ...iteratees: Array<Many<(...args: TArgs[]) => boolean>>\n    ): Function<(...args: Parameters<T> | TArgs[]) => boolean>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.overEvery\n     */\n    overEvery<TArgs>(\n      ...iteratees: Array<Many<(...args: TArgs[]) => boolean>>\n    ): FunctionChain<(...args: TArgs[]) => boolean>\n  }\n  interface FunctionChain<T> {\n    /**\n     * @see _.overEvery\n     */\n    overEvery<TArgs>(\n      ...iteratees: Array<Many<(...args: TArgs[]) => boolean>>\n    ): FunctionChain<(...args: Parameters<T> | TArgs[]) => boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that checks if any of the predicates return truthy when invoked with the arguments\n     * provided to the created function.\n     *\n     * @param predicates The predicates to check.\n     * @return Returns the new function.\n     */\n    overSome<T, Result1 extends T, Result2 extends T>(\n      ...predicates: [(arg: T) => arg is Result1, (arg: T) => arg is Result2]\n    ): (arg: T) => arg is Result1 | Result2\n    overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean\n  }\n  interface Collection<T> {\n    /**\n     * @see _.overSome\n     */\n    overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: TArgs[]) => boolean>\n  }\n  interface Function<T> {\n    /**\n     * @see _.overSome\n     */\n    overSome<TArgs>(\n      ...iteratees: Array<Many<(...args: TArgs[]) => boolean>>\n    ): Function<(...args: Parameters<T> | TArgs[]) => boolean>\n  }\n  interface CollectionChain<T> {\n    /**\n     * @see _.overSome\n     */\n    overSome<TArgs>(\n      ...iteratees: Array<Many<(...args: TArgs[]) => boolean>>\n    ): FunctionChain<(...args: TArgs[]) => boolean>\n  }\n  interface FunctionChain<T> {\n    /**\n     * @see _.overSome\n     */\n    overSome<TArgs>(\n      ...iteratees: Array<Many<(...args: TArgs[]) => boolean>>\n    ): FunctionChain<(...args: Parameters<T> | TArgs[]) => boolean>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates a function that returns the property value at path on a given object.\n     *\n     * @param path The path of the property to get.\n     * @return Returns the new function.\n     */\n    property<TObj, TResult>(path: PropertyPath): (obj: TObj) => TResult\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.property\n     */\n    property<TObj, TResult>(): Function<(obj: TObj) => TResult>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.property\n     */\n    property<TObj, TResult>(): FunctionChain<(obj: TObj) => TResult>\n  }\n\n  interface LoDashStatic {\n    /**\n     * The opposite of _.property; this method creates a function that returns the property value at a given path\n     * on object.\n     *\n     * @param object The object to query.\n     * @return Returns the new function.\n     */\n    propertyOf<T extends {}>(object: T): (path: PropertyPath) => any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.propertyOf\n     */\n    propertyOf(): LoDashImplicitWrapper<(path: PropertyPath) => any>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.propertyOf\n     */\n    propertyOf(): LoDashExplicitWrapper<(path: PropertyPath) => any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.\n     * If end is not specified it\u2019s set to start with start then set to 0. If end is less than start a zero-length\n     * range is created unless a negative step is specified.\n     *\n     * @param start The start of the range.\n     * @param end The end of the range.\n     * @param step The value to increment or decrement by.\n     * @return Returns a new range array.\n     */\n    range(start: number, end?: number, step?: number): number[]\n    /**\n     * @see _.range\n     */\n    range(end: number, index: string | number, guard: object): number[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.range\n     */\n    range(end?: number, step?: number): Collection<number>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.range\n     */\n    range(end?: number, step?: number): CollectionChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method is like `_.range` except that it populates values in\n     * descending order.\n     *\n     * @category Util\n     * @param start The start of the range.\n     * @param end The end of the range.\n     * @param step The value to increment or decrement by.\n     * @returns Returns the new array of numbers.\n     * @example\n     *\n     * _.rangeRight(4);\n     * // => [3, 2, 1, 0]\n     *\n     * _.rangeRight(-4);\n     * // => [-3, -2, -1, 0]\n     *\n     * _.rangeRight(1, 5);\n     * // => [4, 3, 2, 1]\n     *\n     * _.rangeRight(0, 20, 5);\n     * // => [15, 10, 5, 0]\n     *\n     * _.rangeRight(0, -4, -1);\n     * // => [-3, -2, -1, 0]\n     *\n     * _.rangeRight(1, 4, 0);\n     * // => [1, 1, 1]\n     *\n     * _.rangeRight(0);\n     * // => []\n     */\n    rangeRight(start: number, end?: number, step?: number): number[]\n    /**\n     * @see _.rangeRight\n     */\n    rangeRight(end: number, index: string | number, guard: object): number[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.rangeRight\n     */\n    rangeRight(end?: number, step?: number): Collection<number>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.rangeRight\n     */\n    rangeRight(end?: number, step?: number): CollectionChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Create a new pristine lodash function using the given context object.\n     *\n     * @param context The context object.\n     * @return Returns a new lodash function.\n     */\n    runInContext(context?: object): LoDashStatic\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.runInContext\n     */\n    runInContext(): LoDashStatic\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method returns a new empty array.\n     *\n     * @returns Returns the new empty array.\n     */\n    stubArray(): any[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.stubArray\n     */\n    stubArray(): any[]\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.stubArray\n     */\n    stubArray(): CollectionChain<any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method returns `false`.\n     *\n     * @returns Returns `false`.\n     */\n    stubFalse(): false\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.stubFalse\n     */\n    stubFalse(): false\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.stubFalse\n     */\n    stubFalse(): PrimitiveChain<false>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method returns a new empty object.\n     *\n     * @returns Returns the new empty object.\n     */\n    stubObject(): any\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.stubObject\n     */\n    stubObject(): any\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.stubObject\n     */\n    stubObject(): LoDashExplicitWrapper<any>\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method returns an empty string.\n     *\n     * @returns Returns the empty string.\n     */\n    stubString(): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.stubString\n     */\n    stubString(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.stubString\n     */\n    stubString(): StringChain\n  }\n\n  interface LoDashStatic {\n    /**\n     * This method returns `true`.\n     *\n     * @returns Returns `true`.\n     */\n    stubTrue(): true\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.stubTrue\n     */\n    stubTrue(): true\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.stubTrue\n     */\n    stubTrue(): PrimitiveChain<true>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee\n     * is invoked with one argument; (index).\n     *\n     * @param n The number of times to invoke iteratee.\n     * @param iteratee The function invoked per iteration.\n     * @return Returns the array of results.\n     */\n    times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[]\n    /**\n     * @see _.times\n     */\n    times(n: number): number[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.times\n     */\n    times<TResult>(iteratee: (num: number) => TResult): TResult[]\n    /**\n     * @see _.times\n     */\n    times(): number[]\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.times\n     */\n    times<TResult>(iteratee: (num: number) => TResult): CollectionChain<TResult>\n    /**\n     * @see _.times\n     */\n    times(): CollectionChain<number>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Converts `value` to a property path array.\n     *\n     * @category Util\n     * @param value The value to convert.\n     * @returns Returns the new property path array.\n     * @example\n     *\n     * _.toPath('a.b.c');\n     * // => ['a', 'b', 'c']\n     *\n     * _.toPath('a[0].b.c');\n     * // => ['a', '0', 'b', 'c']\n     *\n     * var path = ['a', 'b', 'c'],\n     *     newPath = _.toPath(path);\n     *\n     * console.log(newPath);\n     * // => ['a', 'b', 'c']\n     *\n     * console.log(path === newPath);\n     * // => false\n     */\n    toPath(value: any): string[]\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.toPath\n     */\n    toPath(): Collection<string>\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.toPath\n     */\n    toPath(): CollectionChain<string>\n  }\n\n  interface LoDashStatic {\n    /**\n     * Generates a unique ID. If prefix is provided the ID is appended to it.\n     *\n     * @param prefix The value to prefix the ID with.\n     * @return Returns the unique ID.\n     */\n    uniqueId(prefix?: string): string\n  }\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.uniqueId\n     */\n    uniqueId(): string\n  }\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.uniqueId\n     */\n    uniqueId(): StringChain\n  }\n\n  // stubTrue\n\n  interface LoDashStatic {\n    /**\n     * This method returns true.\n     *\n     * @return Returns true.\n     */\n    stubTrue(): true\n  }\n\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.stubTrue\n     */\n    stubTrue(): true\n  }\n\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.stubTrue\n     */\n    stubTrue(): LoDashExplicitWrapper<true>\n  }\n\n  // stubFalse\n\n  interface LoDashStatic {\n    /**\n     * This method returns false.\n     *\n     * @return Returns false.\n     */\n    stubFalse(): false\n  }\n\n  interface LoDashImplicitWrapper<TValue> {\n    /**\n     * @see _.stubFalse\n     */\n    stubFalse(): false\n  }\n\n  interface LoDashExplicitWrapper<TValue> {\n    /**\n     * @see _.stubFalse\n     */\n    stubFalse(): LoDashExplicitWrapper<false>\n  }\n}\n", "@types/lodash/common/util.d.ts")];
                    return function() {
                        n.forEach((function(e) {
                            return e()
                        }))
                    }
                },
                M = function(e) {
                    return N(e, "/*\n * Type definitions from:\n * https://github.com/datastructures-js/priority-queue/blob/v5.4.0/src/priorityQueue.d.ts\n * https://github.com/datastructures-js/priority-queue/blob/v5.4.0/src/maxPriorityQueue.d.ts\n * https://github.com/datastructures-js/priority-queue/blob/v5.4.0/src/minPriorityQueue.d.ts\n * Replaced all generic usage with `unknown` to sync up with judger (in judger all these types becomes `any`)\n */\n\ndeclare interface PriorityQueueOptions {\n  priority?: (element: unknown) => number\n  compare?: (a: unknown, b: unknown) => number\n}\n\ndeclare interface PriorityQueueItem {\n  priority: number\n  element: unknown\n}\n\ndeclare abstract class PriorityQueue {\n  constructor(options?: PriorityQueueOptions)\n  size(): number\n  isEmpty(): boolean\n  front(): PriorityQueueItem\n  back(): PriorityQueueItem\n  enqueue(element: unknown, priority?: number): PriorityQueue\n  dequeue(): PriorityQueueItem\n  toArray(): PriorityQueueItem[]\n  clear(): void\n}\n\ndeclare class MaxPriorityQueue extends PriorityQueue {\n  static from(entries: readonly Iterable<readonly [element: unknown, priority: number]>): MaxPriorityQueue\n}\n\ndeclare class MinPriorityQueue extends PriorityQueue {\n  static from(entries: readonly Iterable<readonly [element: unknown, priority: number]>): MinPriorityQueue\n}\n", "@datastructures-js/priority-queue")
                },
                z = t(21790),
                B = t(79975),
                q = t(55433),
                U = ["javascript", "typescript"],
                Z = function(e) {
                    var n = e.enabled,
                        t = (0, E.Ik)(),
                        a = (0, q.sZ)((function(e) {
                            return e.editor
                        })),
                        r = (0, q.sZ)((function(e) {
                            return e.lang
                        })),
                        o = function(e) {
                            var n = (0, B.Q)(e).data,
                                t = null === n || void 0 === n ? void 0 : n.metaData;
                            return (0, i.useMemo)((function() {
                                var e = t ? (0, z.Ii)(t) : void 0;
                                return null === e || void 0 === e ? void 0 : e.typescriptCustomType
                            }), [t])
                        }((0, u.z2)((function(e) {
                            return e.questionSlug
                        }))),
                        s = n && U.includes(r),
                        c = (0, q.hD)(a);
                    return (0, i.useEffect)((function() {
                        t && a && c && (requestAnimationFrame((function() {
                            t.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                                noSyntaxValidation: !n,
                                noSuggestionDiagnostics: !n
                            }), t.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                                noSemanticValidation: !n,
                                noSyntaxValidation: !n,
                                noSuggestionDiagnostics: !n
                            })
                        })), a.updateOptions({
                            selectionHighlight: n,
                            parameterHints: {
                                enabled: n
                            },
                            lightbulb: {
                                enabled: n
                            },
                            hover: {
                                enabled: n
                            },
                            quickSuggestions: n,
                            suggestOnTriggerCharacters: n
                        }))
                    }), [n, a, t, c]), (0, i.useEffect)((function() {
                        if (t && a && c) {
                            var e = s ? function(e) {
                                var n = [P(e), K(e), M(e)];
                                return function() {
                                    n.forEach((function(e) {
                                        return e()
                                    }))
                                }
                            }(t) : function() {};
                            return function() {
                                e()
                            }
                        }
                    }), [a, c, t, s]), (0, i.useEffect)((function() {
                        if (t && a && s && o && c) return N(t, o)
                    }), [a, c, t, s, o]), null
                },
                G = (0, i.memo)((function(e) {
                    var n, t, i = e.status,
                        s = void 0 === i ? "off" : i,
                        u = e.tooltip,
                        l = e.readonly,
                        T = void 0 !== l && l,
                        h = e.hasError,
                        d = void 0 !== h && h,
                        p = e.showLock,
                        m = void 0 !== p && p,
                        y = e.onClick,
                        b = (0, w.$G)("code-editor").t,
                        _ = "off" === s,
                        v = "connecting" === s;
                    return Z({
                        enabled: !_
                    }), (0, r.jsx)(W.u, {
                        label: u,
                        placement: "top",
                        children: (0, r.jsx)("div", {
                            className: (0, o.yI)("flex items-center", {
                                "animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]": v
                            }),
                            children: (0, r.jsxs)(f.z, {
                                onClick: y,
                                disabled: v,
                                readonly: T,
                                variant: "plain",
                                className: (0, o.yI)("group px-0 py-1 text-xs", (n = {}, (0, a.Z)(n, (0, o.yI)(c.nx.labelTextSecondary), _), (0, a.Z)(n, (0, o.yI)(g.Cj.labelBrandOrange, "hover:opacity-80"), !_), n), "py-0.5 text-sm font-normal"),
                                children: [m ? (0, r.jsx)(A.A, {
                                    className: (0, o.yI)("mr-[6px] h-3 w-3", c.nx.labelTextSecondary)
                                }) : (0, r.jsx)("div", {
                                    className: "mr-1 flex h-3 w-3 items-center justify-center",
                                    children: (0, r.jsx)("div", {
                                        className: (0, o.yI)("h-1 w-1 rounded-full transition-all", g.Cj.bgGray6, (t = {}, (0, a.Z)(t, g.Cj.bgBrandOrange, !_), (0, a.Z)(t, g.M$.bgBrandOrangeGroup, !T), (0, a.Z)(t, (0, o.yI)(g.Cj.bgRedStandard, g.M$.bgRedStandardGroup), d), t))
                                    })
                                }), b("autocomplete.button")]
                            })
                        })
                    })
                })),
                Q = function() {
                    location.href = V.Hb.signIn()
                },
                $ = function() {
                    var e = (0, w.$G)("code-editor").t;
                    return (0, r.jsx)(G, {
                        status: "off",
                        tooltip: e("autocomplete.needToLoginTooltip"),
                        onClick: Q
                    })
                },
                H = t(10253),
                J = t(87740),
                X = t(69485),
                Y = t(69396),
                ee = t(31799),
                ne = t(4292),
                te = function(e) {
                    return (0, r.jsx)(ne.Z, (0, Y.Z)((0, T.Z)({}, e), {
                        title: "Premium Feature - Autocomplete",
                        description: "Boost your coding speed with LeetCode Premium Autocomplete feature. Enjoy smooth, intuitive coding, focusing more on problem-solving and less on syntax.",
                        source: ee.D.QuestionDetailAutocomplete,
                        videoUrl: "https://assets.leetcode.com/static_assets/others/premium_autocomplete.mp4"
                    }))
                },
                ae = function() {
                    var e = (0, w.$G)("code-editor").t,
                        n = (0, H.Z)((0, J.O)(!1), 2),
                        t = n[0],
                        a = n[1],
                        i = a.on,
                        o = a.off,
                        s = (0, u.z2)((function(e) {
                            return e.questionSlug
                        })),
                        c = (0, X.z)((function() {
                            b.d.qdLspButtonClick({
                                qd_version: (0, d.in)(),
                                qd_question_slug: s
                            }), i()
                        }));
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(G, {
                            status: "off",
                            tooltip: e("autocomplete.notPremiumTooltip"),
                            onClick: c,
                            showLock: !0
                        }), (0, r.jsx)(te, {
                            visible: t,
                            onCancel: o
                        })]
                    })
                },
                re = t(5152),
                ie = t.n(re),
                oe = t(66247),
                se = t(19579),
                ce = t(34970),
                ue = ie()((function() {
                    return Promise.all([t.e(4751), t.e(3406)]).then(t.bind(t, 83406)).then((function(e) {
                        return e.LspConnector
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [83406]
                        }
                    },
                    ssr: !1
                }),
                le = ["javascript", "typescript"],
                Te = function(e, n) {
                    return "connecting" === e ? "connecting" : n ? "on" : "off"
                },
                he = function() {
                    var e = (0, w.$G)("code-editor").t,
                        n = (0, q.sZ)((function(e) {
                            return e.lang
                        })),
                        t = (0, H.Z)((0, oe._)("enabledAutocomplete", !1), 3),
                        a = t[0],
                        o = t[1],
                        s = t[2],
                        c = (0, i.useState)(!1),
                        l = c[0],
                        T = c[1];
                    (0, i.useEffect)((function() {
                        return T(a)
                    }), [a]);
                    var h = (0, i.useState)("disconnected"),
                        p = h[0],
                        f = h[1],
                        m = (0, i.useCallback)((function(e) {
                            return f(e)
                        }), []),
                        y = (0, i.useState)(!1),
                        _ = y[0],
                        v = y[1],
                        R = !!n && n in ce.O;
                    (0, i.useEffect)((function() {
                        v(R && l)
                    }), [l, R, n]), (0, i.useEffect)((function() {
                        l && _ && "disconnected" === p && (se.y.error(e("autocomplete.lspConnectionError"), {
                            itemClassName: g.Cj.bgLayer3
                        }), v(!1))
                    }), [p]);
                    var C = (0, u.z2)((function(e) {
                            return e.questionSlug
                        })),
                        S = (0, X.z)((function() {
                            o((function(e) {
                                return !e
                            })), b.d.qdLspButtonClick({
                                qd_version: (0, d.in)(),
                                qd_question_slug: C
                            }), l ? b.d.qdDisableLspClick({
                                qd_version: (0, d.in)(),
                                qd_question_slug: C
                            }) : b.d.qdEnableLspClick({
                                qd_version: (0, d.in)(),
                                qd_question_slug: C
                            })
                        })),
                        x = (0, i.useMemo)((function() {
                            return le.includes(n) ? e("autocomplete.lspTooltip") : e(R ? l && "disconnected" === p ? "autocomplete.basicWithLspError" : "autocomplete.lspTooltip" : "autocomplete.basicTooltip")
                        }), [R, l, p, n, e]),
                        j = R && l && "disconnected" === p && !le.includes(n);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [s && (0, r.jsx)(G, {
                            hasError: j,
                            status: Te(p, l),
                            tooltip: x,
                            onClick: S
                        }), (0, r.jsx)(ue, {
                            onStatusChange: m,
                            enabled: _
                        })]
                    })
                },
                de = function() {
                    var e = (0, w.$G)("code-editor").t;
                    return (0, r.jsx)(G, {
                        readonly: !0,
                        status: "off",
                        tooltip: e("autocomplete.lspNotSupportedTooltip")
                    })
                },
                pe = function() {
                    return !0
                },
                fe = function() {
                    var e, n = (0, q.sZ)((function(e) {
                            return e.lang
                        })),
                        t = pe(n),
                        a = null === (e = (0, F.U5)().data) || void 0 === e ? void 0 : e.userStatus;
                    return t ? (null === a || void 0 === a ? void 0 : a.isSignedIn) ? (null === a || void 0 === a ? void 0 : a.isPremium) ? (0, r.jsx)(he, {}) : (0, r.jsx)(ae, {}) : (0, r.jsx)($, {}) : (0, r.jsx)(de, {})
                },
                me = t(94184),
                ye = t.n(me),
                ge = t(11163),
                be = t(99398),
                _e = t(13042),
                ve = t(80570),
                Re = t(67021),
                Ce = t(56609),
                Se = t(50108),
                xe = t(34814),
                je = function() {
                    var e = (0, w.$G)(["code-editor", "common"]).t,
                        n = (0, H.Z)((0, J.O)(!1), 2),
                        t = n[0],
                        a = n[1],
                        i = a.on,
                        o = a.off,
                        s = (0, xe.d)(),
                        c = (0, ge.useRouter)().query.slug,
                        u = (0, ve.x)(c).data,
                        l = (0, q.sZ)((function(e) {
                            return e.lang
                        })),
                        T = (0, Ce.VY)(),
                        p = (0, Ce.$e)(),
                        m = (0, X.z)((function() {
                            var e, n, t;
                            if (T) return p(), void o();
                            b.d.qdResetCodeConfirmClick({
                                qd_version: (0, d.in)(),
                                qd_question_slug: c
                            });
                            var a = null !== (t = null === (n = null === u || void 0 === u || null === (e = u.codeSnippets) || void 0 === e ? void 0 : e.find((function(e) {
                                return (null === e || void 0 === e ? void 0 : e.langSlug) === l
                            }))) || void 0 === n ? void 0 : n.code) && void 0 !== t ? t : "";
                            s({
                                value: a,
                                source: "reset"
                            }), o()
                        })),
                        y = (0, X.z)((function() {
                            i(), b.d.qdEditorToolbarClick({
                                qd_version: (0, d.in)(),
                                qd_question_slug: c,
                                qd_editor_toolbar_btn_type: "reset"
                            })
                        }));
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(W.u, {
                            label: e("code-editor:reset.tip"),
                            placement: "top",
                            children: (0, r.jsx)(_e.z, {
                                variant: "text",
                                size: "sm",
                                shape: "square",
                                className: ye()("group ml-auto p-1"),
                                icon: (0, r.jsx)(C.e, {
                                    variant: "14px",
                                    padding: "square",
                                    icon: h.paY,
                                    className: "text-sd-muted-foreground"
                                }),
                                onClick: y
                            })
                        }), (0, r.jsx)(Se.w_, {
                            visible: t,
                            onCancel: o,
                            className: "w-[480px]",
                            children: (0, r.jsxs)(Se.a_, {
                                className: "pt-6",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, r.jsx)(Re.e, {
                                        className: "text-green-s h-12 w-12"
                                    }), (0, r.jsxs)("div", {
                                        className: "ml-4",
                                        children: [(0, r.jsx)("h3", {
                                            className: ye()(g.Cj.label1, "text-lg"),
                                            children: e("code-editor:commonConfirmTitle")
                                        }), (0, r.jsx)("div", {
                                            className: ye()(g.Cj.label2, "mt-2"),
                                            children: e("code-editor:reset.confirmContent")
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "mt-8 flex justify-end",
                                    children: (0, r.jsxs)(be.Eq, {
                                        space: 16,
                                        children: [(0, r.jsx)(f.z, {
                                            className: "rounded-lg",
                                            onClick: o,
                                            children: e("common:cancel")
                                        }), (0, r.jsx)(f.z, {
                                            className: "rounded-lg",
                                            variant: "primary",
                                            onClick: m,
                                            children: e("common:confirm")
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                Le = t(47568),
                ke = t(70655),
                De = t(63808),
                Ie = t(88525),
                Oe = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (0, Ie.S9e)(De.f6, {
                        submissionId: Number(e)
                    }, {
                        select: function(e) {
                            var n;
                            return null === (n = e.submissionDetails) || void 0 === n ? void 0 : n.code
                        },
                        enabled: n && !!e
                    })
                },
                Fe = t(89952),
                we = t(29815),
                Ve = t(77895),
                We = t(29732),
                Ae = t(76636),
                Ee = t(39606),
                Ne = t(88786),
                Pe = t(75179),
                Ke = (0, i.memo)((function(e) {
                    var n, t = e.onChange,
                        a = (0, ge.useRouter)().query.slug,
                        o = (0, q.sZ)((function(e) {
                            return e.lang
                        })),
                        s = (0, Ae.y)().data,
                        c = null === (n = null === s || void 0 === s ? void 0 : s.find((function(e) {
                            return e.name === o
                        }))) || void 0 === n ? void 0 : n.id,
                        u = (0, Pe.Wr)({
                            questionSlug: a,
                            lang: o
                        }),
                        l = u.data,
                        T = u.isLoading,
                        h = (0, Pe.Hz)(a, {
                            status: Ee.F6.AC,
                            lang: null !== c && void 0 !== c ? c : void 0
                        }),
                        d = h.data,
                        p = h.fetchNextPage,
                        f = h.hasNextPage,
                        m = h.isLoading,
                        y = (0, i.useMemo)((function() {
                            var e, n = Ve.Z.apply(void 0, (0, we.Z)(null !== (e = null === d || void 0 === d ? void 0 : d.pages.map((function(e) {
                                return (0, We.Z)(null === e || void 0 === e ? void 0 : e.submissions)
                            }))) && void 0 !== e ? e : []));
                            return l && (n = n.filter((function(e) {
                                return e.id != l.id
                            }))).unshift(l), n
                        }), [null === d || void 0 === d ? void 0 : d.pages, l]),
                        g = (0, i.useState)(),
                        b = g[0],
                        _ = g[1],
                        v = (0, X.z)((function(e) {
                            _(e), t(y[e].id)
                        }));
                    return (0, r.jsx)(Ne.n, {
                        submissions: y,
                        isLoading: m || T,
                        fetchNextPage: p,
                        hasNextPage: Boolean(f),
                        skeletonRowCount: 10,
                        radioButtonSubmissionIndex: b,
                        setRadioButtonSubmissionIndex: v,
                        showLanguage: !1
                    })
                })),
                Me = t(98118),
                ze = function() {
                    var e = (0, H.Z)((0, J.O)(!1), 2),
                        n = e[0],
                        t = e[1],
                        a = t.on,
                        o = t.off,
                        s = (0, q.sZ)((function(e) {
                            return e.lang
                        })),
                        c = (0, xe.d)(),
                        l = (0, w.$G)(["code-editor", "common"]).t,
                        T = (0, i.useState)(null),
                        p = T[0],
                        m = T[1],
                        y = (0, u.z2)((function(e) {
                            return e.questionSlug
                        })),
                        _ = (0, Me.r)(y),
                        v = null === _ || void 0 === _ ? void 0 : _.get(s || "");
                    (0, i.useEffect)((function() {
                        n || m(null)
                    }), [n]);
                    var R = (0, Ce.VY)(),
                        S = (0, Ce.$e)(),
                        x = Oe(p, !1),
                        j = x.refetch,
                        L = x.isFetching,
                        k = (0, X.z)((0, Le.Z)((function() {
                            var e;
                            return (0, ke.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return R ? (S(), o(), [2]) : [4, j()];
                                    case 1:
                                        return e = n.sent().data, b.d.qdInsertFlagCodeClick({
                                            qd_version: (0, d.in)(),
                                            qd_question_slug: y,
                                            qd_submission_id: String(p),
                                            qd_insert_submission_type: "insert_history_code"
                                        }), o(), e && c({
                                            value: e,
                                            source: "reset"
                                        }), [2]
                                }
                            }))
                        }))),
                        D = (0, X.z)((function() {
                            a(), b.d.qdEditorToolbarClick({
                                qd_version: (0, d.in)(),
                                qd_question_slug: y,
                                qd_editor_toolbar_btn_type: "history"
                            })
                        })),
                        I = (0, X.z)((function(e) {
                            !e && o()
                        }));
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(W.u, {
                            label: l("code-editor:history.tip"),
                            placement: "top",
                            children: (0, r.jsx)(_e.z, {
                                variant: "text",
                                size: "sm",
                                shape: "square",
                                className: ye()("group ml-auto p-1"),
                                icon: (0, r.jsx)(C.e, {
                                    variant: "14px",
                                    padding: "square",
                                    icon: h.xVw,
                                    className: "text-sd-muted-foreground"
                                }),
                                onClick: D
                            })
                        }), (0, r.jsx)(Fe.Vq, {
                            open: n,
                            onOpenChange: I,
                            children: (0, r.jsxs)(Fe.cZ, {
                                className: "sd-sm:rounded-sd-md rounded-sd-md w-[calc(100vw-32px)] max-w-[720px] border-none pt-4",
                                overlayClassName: "backdrop-blur-none bg-sd-fixed-black/40",
                                closeClassName: "top-5",
                                children: [(0, r.jsx)(Fe.fK, {
                                    className: "text-left",
                                    children: (0, r.jsx)(Fe.$N, {
                                        className: "text-base font-medium",
                                        children: l("code-editor:history.title", {
                                            lang: (null === v || void 0 === v ? void 0 : v.lang) || s
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: g.Cj.label2,
                                    children: l("code-editor:history.description")
                                }), (0, r.jsx)("div", {
                                    className: "-mx-4 mt-4 h-[400px] overflow-y-auto overflow-x-hidden border-b",
                                    children: (0, r.jsx)(Ke, {
                                        onChange: m
                                    })
                                }), (0, r.jsxs)(Fe.cN, {
                                    className: "flex-row justify-end space-x-2",
                                    children: [(0, r.jsx)(f.z, {
                                        className: "!rounded-lg !px-4",
                                        onClick: o,
                                        children: l("common:cancel")
                                    }), (0, r.jsx)(f.z, {
                                        disabled: !p,
                                        onClick: k,
                                        loading: L,
                                        variant: "primary",
                                        className: "ml-4 !rounded-lg !px-4",
                                        children: l("common:confirm")
                                    })]
                                })]
                            })
                        })]
                    })
                },
                Be = t(8276),
                qe = function() {
                    var e, n = (0, H.Z)((0, J.O)(!1), 2),
                        t = n[0],
                        a = n[1],
                        s = a.on,
                        c = a.off,
                        l = (0, i.useState)(!1),
                        T = l[0],
                        d = l[1],
                        p = (0, u.z2)((function(e) {
                            return e.questionId
                        })),
                        m = (0, q.sZ)((function(n) {
                            return null !== (e = n.lang) && void 0 !== e ? e : ""
                        })),
                        y = (0, xe.d)(),
                        b = (0, w.$G)("code-editor").t,
                        _ = function(e) {
                            var n = e.questionId,
                                t = e.lang;
                            return {
                                getLastSubmittedCode: (0, X.z)((function() {
                                    return Be.x1.request(Be.Hv.lastSubmittedCode(n, t))
                                }))
                            }
                        }({
                            questionId: p,
                            lang: m
                        }).getLastSubmittedCode,
                        v = (0, Ce.VY)(),
                        R = (0, Ce.$e)(),
                        S = (0, i.useCallback)((function() {
                            if (v) return R(), void c();
                            d(!0), _().then((function(e) {
                                var n = e.code;
                                y({
                                    value: null !== n && void 0 !== n ? n : "",
                                    source: "retrieve"
                                }), d(!1), c()
                            })).catch((function() {
                                se.y.error(b("retrieveCode.noData"), {
                                    itemClassName: g.Cj.bgLayer3
                                }), d(!1), c()
                            }))
                        }), [_, v, c, R, y, b]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(W.u, {
                            label: b("retrieveCode.tip"),
                            placement: "top",
                            children: (0, r.jsx)(_e.z, {
                                variant: "text",
                                size: "sm",
                                shape: "square",
                                className: (0, o.yI)("group ml-auto p-1"),
                                icon: (0, r.jsx)(C.e, {
                                    variant: "14px",
                                    padding: "square",
                                    icon: h.Kgi,
                                    className: "text-sd-muted-foreground"
                                }),
                                onClick: s
                            })
                        }), (0, r.jsx)(Se.w_, {
                            visible: t,
                            onCancel: c,
                            className: "w-[480px]",
                            children: (0, r.jsxs)(Se.a_, {
                                className: "pt-6",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, r.jsx)(Re.e, {
                                        className: "text-green-s h-12 w-12"
                                    }), (0, r.jsxs)("div", {
                                        className: "ml-4",
                                        children: [(0, r.jsx)("h3", {
                                            className: (0, o.yI)(g.Cj.label1, "text-lg"),
                                            children: b("commonConfirmTitle")
                                        }), (0, r.jsx)("div", {
                                            className: (0, o.yI)(g.Cj.label2, "mt-2"),
                                            children: b("retrieveCode.confirmContent")
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "mt-8 flex justify-end",
                                    children: (0, r.jsxs)(be.Eq, {
                                        space: 16,
                                        children: [(0, r.jsx)(f.z, {
                                            className: "rounded-lg",
                                            onClick: c,
                                            children: b("common:cancel")
                                        }), (0, r.jsx)(f.z, {
                                            className: "rounded-lg",
                                            variant: "primary",
                                            onClick: S,
                                            loading: T,
                                            children: b("common:confirm")
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                Ue = i.forwardRef((function(e, n) {
                    return (0, r.jsx)("svg", (0, Y.Z)((0, T.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M3 5h18a1 1 0 110 2H3a1 1 0 010-2zm0 8h18a1 1 0 110 2H3a1 1 0 110-2zm0-4h12a1 1 0 110 2H3a1 1 0 110-2zm0 8h12a1 1 0 110 2H3a1 1 0 110-2z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Ze = t(18471),
                Ge = t(70829),
                Qe = t(73945),
                $e = t.n(Qe),
                He = t(39070),
                Je = t.n(He),
                Xe = t(28182),
                Ye = t.n(Xe),
                en = t(95788),
                nn = {
                    c: "c",
                    cpp: "cpp",
                    python: "py2",
                    python3: "py3",
                    java: "java",
                    golang: "go",
                    cangjie: "cangjie"
                },
                tn = ["javascript", "typescript", "python3", "cpp", "c", "java", "golang", "pythondata"],
                an = function(e) {
                    var n = e.isSuccessed,
                        t = e.isDynamic;
                    return n ? t ? (0, r.jsx)(C.e, {
                        variant: "14px",
                        padding: "square",
                        icon: h.LEp,
                        className: "text-sd-success"
                    }) : (0, r.jsx)(m.N, {
                        className: (0, o.yI)("h-[14px] w-[14px]", c.nx.labelGreen60)
                    }) : t ? (0, r.jsx)(C.e, {
                        variant: "14px",
                        padding: "square",
                        icon: h.elf,
                        className: "text-sd-muted-foreground"
                    }) : (0, r.jsx)(Ue, {
                        className: (0, o.yI)("h-[14px] w-[14px]", c.nx.labelTextSecondary)
                    })
                },
                rn = function() {
                    var e = (0, Le.Z)((function(e) {
                        var n, t, a, r;
                        return (0, ke.__generator)(this, (function(i) {
                            return n = e.code, t = e.lang, a = e.tabSize, r = e.insertSpaces, [2, (0, Ze.o)("https://lsp-".concat(nn[t], ".").concat("leetcode.com", "/format"), {
                                method: "POST",
                                data: JSON.stringify({
                                    code: n,
                                    tabSize: a,
                                    insertSpaces: r
                                }),
                                withCredentials: !0
                            }).then((function(e) {
                                var n;
                                return 200 === e.status ? null === (n = e.data) || void 0 === n ? void 0 : n.code : null
                            }))]
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                on = function(e) {
                    var n, t, a = e.isDynamic,
                        s = void 0 !== a && a,
                        c = (0, q.sZ)((function(e) {
                            return e.editor
                        })),
                        u = (0, q.sZ)((function(e) {
                            return e.code
                        })),
                        l = (0, q.sZ)((function(e) {
                            return e.setCode
                        })),
                        T = (0, q.HB)((function(e) {
                            return e.config.tabSize
                        })),
                        h = (0, E.Ik)(),
                        d = (0, w.$G)("code-editor").t,
                        p = (0, v.y)().codeLang,
                        f = void 0 === p ? "" : p,
                        m = (0, F.U5)().data,
                        y = Boolean(null === m || void 0 === m || null === (n = m.userStatus) || void 0 === n ? void 0 : n.isPremium),
                        g = (0, en.W)().saveCode,
                        _ = (0, i.useState)(!1),
                        R = _[0],
                        C = _[1],
                        S = (0, Ce.VY)(),
                        x = (0, Ce.$e)(),
                        j = (0, q.hD)(c),
                        L = (0, i.useCallback)((0, Le.Z)((function() {
                            var e, n, t, a;
                            return (0, ke.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return S ? (x(), [2]) : ["javascript", "typescript"].includes(f) ? (j ? null === (e = null === c || void 0 === c ? void 0 : c.getAction("editor.action.formatDocument")) || void 0 === e || e.run() : (n = function(e) {
                                            var n = e.code,
                                                t = e.language,
                                                a = e.tabSize,
                                                r = void 0 === a ? 2 : a;
                                            try {
                                                var i = "typescript" === t ? Je() : Ye();
                                                return $e().format(n, {
                                                    parser: "typescript" === t ? "typescript" : "babel",
                                                    plugins: [i],
                                                    tabWidth: r
                                                })
                                            } catch (o) {
                                                return null
                                            }
                                        }({
                                            code: null !== u && void 0 !== u ? u : "",
                                            language: f,
                                            tabSize: T
                                        }), n && l(n)), [3, 3]) : [3, 1];
                                    case 1:
                                        return b.d.qdFormatCodeClick({
                                            qd_code_language_type: f
                                        }), [4, rn({
                                            code: null !== u && void 0 !== u ? u : "",
                                            lang: f,
                                            tabSize: T,
                                            insertSpaces: !0
                                        })];
                                    case 2:
                                        (t = r.sent()) && (j ? null === (a = null === c || void 0 === c ? void 0 : c.getModel()) || void 0 === a || a.setValue(t) : l(t), g(y, t)), r.label = 3;
                                    case 3:
                                        return C(!0), setTimeout((function() {
                                            C(!1)
                                        }), 1500), [2]
                                }
                            }))
                        })), [u, f, c, j, y, S, x, g, l, T]);
                    return (0, i.useEffect)((function() {
                        if (c && h && j) {
                            var e = c.addAction({
                                id: "format-code",
                                label: "Format code",
                                keybindings: [h.KeyMod.Alt | h.KeyMod.Shift | h.KeyCode.KeyF],
                                run: L
                            });
                            return function() {
                                e.dispose()
                            }
                        }
                    }), [c, L, j, h]), (0, i.useEffect)((function() {
                        var e;
                        if (c && !j) return null === (e = c.editor) || void 0 === e || e.addEventListener("format", L),
                            function() {
                                var e;
                                return null === (e = c.editor) || void 0 === e ? void 0 : e.removeEventListener("format", L)
                            }
                    }), [c, L, j]), (null === m || void 0 === m || null === (t = m.userStatus) || void 0 === t ? void 0 : t.isSignedIn) && f && tn.includes(f) ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(W.u, {
                            label: R ? d("format.formatted") : (0, r.jsx)(Ge.m, {
                                text: d("format.tip"),
                                shortcuts: ["alt", "shift", "F"]
                            }),
                            placement: s ? "top" : "bottom",
                            children: (0, r.jsx)(_e.z, {
                                variant: "text",
                                size: "sm",
                                shape: "square",
                                className: (0, o.yI)("group ml-auto p-[5px]", {
                                    "p-1": s
                                }),
                                icon: (0, r.jsx)(an, {
                                    isSuccessed: R,
                                    isDynamic: s
                                }),
                                onClick: L
                            })
                        })
                    }) : null
                },
                sn = t(57399),
                cn = i.forwardRef((function(e, n) {
                    return (0, r.jsx)("svg", (0, Y.Z)((0, T.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.586 15H4a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0v-3.586l-4.293 4.293a1 1 0 01-1.414-1.414L7.586 15zm8.828-6H20a1 1 0 110 2h-6a1 1 0 01-1-1V4a1 1 0 112 0v3.586l4.293-4.293a1 1 0 111.414 1.414L16.414 9z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                un = i.forwardRef((function(e, n) {
                    return (0, r.jsx)("svg", (0, Y.Z)((0, T.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.414 19H10a1 1 0 110 2H4a1 1 0 01-1-1v-6a1 1 0 112 0v3.586l4.293-4.293a1 1 0 011.414 1.414L6.414 19zM17.586 5H14a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0V6.414l-4.293 4.293a1 1 0 01-1.414-1.414L17.586 5z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                ln = function() {
                    var e = (0, u.z2)((function(e) {
                            return e.questionSlug
                        })),
                        n = (0, sn.AL)(),
                        t = (0, w.$G)("code-editor").t,
                        a = (0, i.useCallback)((function() {
                            if (b.d.qdEditorToolbarClick({
                                    qd_version: (0, d.in)(),
                                    qd_question_slug: e,
                                    qd_editor_toolbar_btn_type: n ? "exitFullscreen" : "fullscreen"
                                }), n)(0, sn.nT)();
                            else {
                                var t = document.body;
                                if (!t) return;
                                (0, sn.Zx)(t)
                            }
                        }), [n, e]);
                    return (0, r.jsx)(W.u, {
                        label: t(n ? "exitFullScreen" : "fullScreen"),
                        children: (0, r.jsx)(f.z, {
                            variant: "plain",
                            className: (0, o.yI)("group ml-auto !p-1"),
                            onClick: a,
                            children: n ? (0, r.jsx)(cn, {
                                className: (0, o.yI)("h-4 w-4", g.Cj.labelGrey6, g.M$.labelGrey7Group)
                            }) : (0, r.jsx)(un, {
                                className: (0, o.yI)("h-4 w-4", g.Cj.labelGrey6, g.M$.labelGrey7Group)
                            })
                        })
                    })
                },
                Tn = qe,
                hn = (D = {}, (0, a.Z)(D, u.UU.Default, (function() {
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-nowrap items-center",
                            children: [(0, r.jsx)(O, {}), (0, r.jsx)("div", {
                                className: (0, o.yI)(" group rounded px-2 py-0", c.rG.bgFillSecondary),
                                children: (0, r.jsx)(fe, {})
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, r.jsx)(on, {
                                isDynamic: !0
                            }), (0, r.jsx)(ze, {}), (0, r.jsx)(Tn, {}), (0, r.jsx)(je, {}), (0, r.jsx)(ln, {})]
                        })]
                    })
                })), (0, a.Z)(D, u.UU.Contest, (function() {
                    return Z({
                        enabled: !1
                    }), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "flex flex-nowrap items-center",
                            children: (0, r.jsx)(O, {})
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, r.jsx)(on, {
                                isDynamic: !0
                            }), (0, r.jsx)(qe, {}), (0, r.jsx)(je, {}), (0, r.jsx)(ln, {})]
                        })]
                    })
                })), D),
                dn = function() {
                    var e = (0, l.b)(hn);
                    return (0, r.jsx)(e, {})
                },
                pn = function() {
                    var e = (0, k.H)((function(e) {
                        return e.isDebugMode
                    }));
                    return (0, s.y)(j()), (0, r.jsx)("div", {
                        className: (0, o.yI)("flex h-8 items-center justify-between border-b p-1", c.nx.borderBorderQuaternary, (0, a.Z)({}, (0, o.yI)("pointer-events-none"), e)),
                        children: (0, r.jsx)(dn, {})
                    })
                },
                fn = function(e) {
                    var n = e.children,
                        t = e.className;
                    return (0, s.y)(j()), (0, r.jsx)("div", {
                        className: (0, o.yI)("flex h-8 items-center justify-between border-b p-1", c.nx.borderBorderQuaternary, t),
                        children: n
                    })
                }
        },
        52938: function(e, n, t) {
            "use strict";
            t.d(n, {
                v: function() {
                    return x
                },
                r: function() {
                    return j
                }
            });
            var a = t(93769),
                r = t(27375),
                i = t(50632),
                o = t(68708),
                s = t(1576),
                c = t(42054),
                u = t(55433),
                l = t(79768),
                T = t(37414),
                h = t(56098),
                d = t(62799),
                p = t(87277),
                f = t(49105),
                m = function(e) {
                    return !(!e || e === document.documentElement) && (!!e.classList.contains("mde-editor") || m(e.parentElement))
                },
                y = t(27760),
                g = t(67294),
                b = t(57399),
                _ = t(83269),
                v = t(29297),
                R = t(80570),
                C = function(e) {
                    var n = (0, a.z2)((function(e) {
                            return e.inited
                        })),
                        t = (0, a.z2)((function(e) {
                            return e.setInited
                        })),
                        i = (0, a.z2)((function(e) {
                            return e.questionSlug
                        })),
                        o = (0, a.z2)((function(e) {
                            return e.setQuestionLayoutType
                        })),
                        s = (0, R.x)(i).data;
                    return (0, g.useEffect)((function() {
                        e && (o(e), t(!0))
                    }), [e]), (0, g.useEffect)((function() {
                        !s || e || n || (o(s.hasFrontendPreview ? r.P5.Frontend : r.P5.Default), t(!0))
                    }), [s]), {
                        isLoading: !s || !n
                    }
                },
                S = t(23877),
                x = function(e) {
                    var n;
                    ! function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.UU.Default,
                            n = (0, a.z2)((function(e) {
                                return e.setMode
                            }));
                        (0, g.useEffect)((function() {
                            n(e)
                        }), [e, n])
                    }(a.UU.Contest), C(r.P5.ContestDefault),
                        function(e) {
                            var n = (0, a.z2)((function(e) {
                                return e.setContestSlug
                            }));
                            (0, g.useEffect)((function() {
                                n(e)
                            }), [e, n])
                        }(e),
                        function(e) {
                            var n = (0, S.WP)((function(e) {
                                return e.setInitialRunSubmitPosition
                            }));
                            (0, g.useEffect)((function() {
                                var t = (0, S.gf)(e);
                                n(t)
                            }), [n, e])
                        }(r.u3.CodeEditor);
                    var t = (0, i.U5)(),
                        c = t.isLoading,
                        u = t.data,
                        l = null === u || void 0 === u || null === (n = u.userStatus) || void 0 === n ? void 0 : n.isSignedIn,
                        T = (0, a.z2)((function(e) {
                            return e.contestSlug
                        })),
                        h = (0, a.z2)((function(e) {
                            return e.mode
                        })),
                        d = (0, a.z2)((function(e) {
                            return e.questionSlug
                        }));
                    return {
                        shouldRedirect: (0, s.l)(d, e).isError || (0, o.jU)() && !c && !1 === l,
                        isReady: h === a.UU.Contest && T === e
                    }
                },
                j = function() {
                    var e = (0, y.H)().isLoading,
                        n = C().isLoading;
                    return function() {
                            var e = (0, a.z2)((function(e) {
                                    return e.questionSlug
                                })),
                                n = (0, b.AL)(),
                                t = (0, g.useCallback)((function() {
                                    if (v.d.qdEditorToolbarClick({
                                            qd_version: _.AQ,
                                            qd_question_slug: e,
                                            qd_editor_toolbar_btn_type: n ? "exitFullscreen" : "fullscreen"
                                        }), n)(0, b.nT)();
                                    else {
                                        var t = document.body;
                                        if (!t) return;
                                        (0, b.Zx)(t)
                                    }
                                }), [n, e]);
                            (0, f.P)("Alt+f", t, {
                                preventDefault: !0
                            })
                        }(),
                        function() {
                            var e = (0, h.D)((function(e) {
                                    return e.enableRunCode
                                })),
                                n = (0, d.I)(),
                                t = (0, u.HB)((function(e) {
                                    return e.shortcuts
                                })),
                                a = t.enableQuickRunCode,
                                r = t.enableQuickSubmit,
                                i = (0, p.H)((function(e) {
                                    return e.isDebugMode
                                })),
                                o = (0, u.sZ)((function(e) {
                                    return e.initEditorLoading
                                })),
                                s = (0, l.s)(),
                                y = s.onRunCodeClicked,
                                g = s.isInterpreting,
                                b = (0, T.q)(),
                                _ = b.onSubmitClicked,
                                v = b.isSubmitting,
                                R = !a || !e || g || n || o ? c.Z : y,
                                C = !r || v || i || o ? c.Z : _;
                            (0, f.P)("$mod+'", R, {
                                enableOnContentEditable: !0,
                                enableOnFormTags: !0,
                                ignoreEventWhen: function(e) {
                                    return m(null === e || void 0 === e ? void 0 : e.target)
                                }
                            }), (0, f.P)("$mod+Enter", C, {
                                enableOnContentEditable: !0,
                                enableOnFormTags: !0
                            })
                        }(), {
                            isLoading: e || n
                        }
                }
        },
        33638: function(e, n, t) {
            "use strict";
            t.d(n, {
                G: function() {
                    return c
                }
            });
            var a = t(85893),
                r = t(12922),
                i = t(4563),
                o = t(11516),
                s = {
                    ctrl: (0, i.V5)() ? "\u2318" : "Ctrl",
                    alt: (0, i.V5)() ? "\u2325" : "Alt",
                    shift: (0, i.V5)() ? "\u21e7" : "Shift",
                    enter: (0, i.V5)() ? "\u23ce" : "Enter"
                },
                c = function(e) {
                    var n = e.hotkey,
                        t = e.className;
                    return (0, a.jsx)("span", {
                        className: (0, r.yI)("inline-flex h-[20px] min-w-[20px] items-center justify-center rounded-[3px] border-[1px] px-1 text-[12px] leading-[20px]", o.nx.borderBorderTertiary, t),
                        children: n.toLowerCase() in s ? s[n] : n
                    })
                }
        },
        72622: function(e, n, t) {
            "use strict";
            t.d(n, {
                w: function() {
                    return s
                }
            });
            var a = t(11321),
                r = t(57002),
                i = t(70341),
                o = t(96004),
                s = function(e) {
                    var n = e.isVisible,
                        t = e.onClose,
                        s = e.onConfirm,
                        c = (0, r.r)(),
                        u = c.isVerified,
                        l = c.isLoading,
                        T = c.isSignedIn,
                        h = (0, a.$G)("common", {
                            keyPrefix: "account"
                        }).t,
                        d = (0, o.SB)({
                            visible: n,
                            title: h("emailVerifyModal.title"),
                            content: h("emailVerifyModal.description"),
                            confirmType: "warning",
                            onOk: function() {
                                window.open(i.Hb.account(), "_blank"), s()
                            },
                            onCancel: t,
                            cancelText: h("emailVerifyModal.cancel"),
                            okText: h("emailVerifyModal.verify"),
                            showCloseIcon: !1
                        }).modalElement;
                    return u || l || !T ? null : d
                }
        },
        70829: function(e, n, t) {
            "use strict";
            t.d(n, {
                m: function() {
                    return i
                }
            });
            var a = t(85893),
                r = t(33638),
                i = function(e) {
                    var n = e.text,
                        t = e.shortcuts;
                    return (0, a.jsxs)("span", {
                        className: "flex items-center gap-2",
                        children: [n, Boolean(null === t || void 0 === t ? void 0 : t.length) && (0, a.jsx)("div", {
                            className: "flex gap-1",
                            children: null === t || void 0 === t ? void 0 : t.map((function(e, n) {
                                return (0, a.jsx)(r.G, {
                                    hotkey: e
                                }, n)
                            }))
                        })]
                    })
                }
        },
        99398: function(e, n, t) {
            "use strict";
            t.d(n, {
                $9: function() {
                    return d
                },
                Eq: function() {
                    return f
                },
                M5: function() {
                    return h
                },
                kC: function() {
                    return T
                }
            });
            var a = t(26042),
                r = t(69396),
                i = t(99534),
                o = t(10253),
                s = t(85893),
                c = t(94184),
                u = t.n(c),
                l = t(67294),
                T = function(e) {
                    var n = e.children,
                        t = e.className,
                        o = (0, i.Z)(e, ["children", "className"]);
                    return (0, s.jsx)("div", (0, r.Z)((0, a.Z)({
                        className: u()("flex", t)
                    }, o), {
                        children: n
                    }))
                },
                h = function(e) {
                    var n = e.children,
                        t = e.className,
                        o = (0, i.Z)(e, ["children", "className"]);
                    return (0, s.jsx)(T, (0, r.Z)((0, a.Z)({
                        className: u()("items-center justify-center", t)
                    }, o), {
                        children: n
                    }))
                },
                d = function(e) {
                    var n = e.children,
                        t = e.className,
                        o = (0, i.Z)(e, ["children", "className"]);
                    return (0, s.jsx)(T, (0, r.Z)((0, a.Z)({
                        className: u()("items-center justify-between", t)
                    }, o), {
                        children: n
                    }))
                },
                p = function(e) {
                    var n = e.children,
                        t = e.containerClassName,
                        a = e.className,
                        r = e.itemClassName,
                        i = e.space,
                        c = void 0 === i ? 8 : i,
                        h = e.containerRef,
                        d = e.fragmentAsSingle,
                        p = void 0 !== d && d,
                        f = Array.isArray(c) ? c : [c, c],
                        m = (0, o.Z)(f, 2),
                        y = m[0],
                        g = m[1],
                        b = (0, l.useMemo)((function() {
                            var e = [],
                                t = function(n) {
                                    l.Children.forEach(n, (function(n) {
                                        if (l.isValidElement(n) && n.type === l.Fragment && !p) return t(n.props.children);
                                        var a = (0, s.jsx)("div", {
                                            style: {
                                                margin: "".concat(g / 2, "px ").concat(y / 2, "px")
                                            },
                                            className: r,
                                            children: n
                                        }, e.length);
                                        e.push(a)
                                    }))
                                };
                            return t(n), e
                        }), [n, p, r, y, g]);
                    return (0, s.jsx)("div", {
                        ref: h,
                        className: t,
                        children: (0, s.jsx)(T, {
                            className: u()("flex-wrap", a),
                            style: {
                                margin: "".concat(-g / 2, "px ").concat(-y / 2, "px")
                            },
                            children: b
                        })
                    })
                },
                f = (0, l.memo)(p)
        },
        57399: function(e, n, t) {
            "use strict";
            t.d(n, {
                AL: function() {
                    return c
                },
                Zx: function() {
                    return u
                },
                nT: function() {
                    return l
                }
            });
            var a = t(10253),
                r = t(67294),
                i = t(87740),
                o = t(68708),
                s = function() {
                    if (!(0, o.jU)()) return !1;
                    var e = document;
                    return !!e.fullscreenElement || !!e.webkitCurrentFullScreenElement || !!e.webkitFullscreenElement || !!e.mozFullScreenElement || !!e.msFullscreenElement
                },
                c = function() {
                    var e = (0, a.Z)((0, i.O)(s()), 2),
                        n = e[0],
                        t = e[1].setBool;
                    return (0, r.useEffect)((function() {
                        var e = function() {
                            t(s())
                        };
                        return document.addEventListener("fullscreenchange", e), document.addEventListener("mozfullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("msfullscreenchange", e),
                            function() {
                                document.removeEventListener("fullscreenchange", e), document.removeEventListener("mozfullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("msfullscreenchange", e)
                            }
                    }), [t]), n
                },
                u = function(e) {
                    var n = e;
                    try {
                        return n.requestFullscreen ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullScreen ? n.webkitRequestFullScreen() : n.msRequestFullscreen && n.msRequestFullscreen(), !0
                    } catch (t) {
                        return !1
                    }
                },
                l = function() {
                    var e = document;
                    try {
                        return e.exitFullscreen ? e.exitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitCancelFullScreen ? e.webkitCancelFullScreen() : e.msExitFullscreen && e.msExitFullscreen(), !0
                    } catch (n) {
                        return !1
                    }
                }
        },
        9354: function(e, n, t) {
            "use strict";
            t.d(n, {
                W: function() {
                    return s
                }
            });
            var a = t(47568),
                r = t(51438),
                i = t(82222),
                o = t(70655);
            var s = function() {
                function e(n) {
                    var t = n.delay,
                        a = n.action,
                        i = n.predicate,
                        o = n.limit,
                        s = n.completeCallback,
                        c = n.limitExceededCallback;
                    (0, r.Z)(this, e), this.running = !1, this.pollCount = 0, this.completePromises = [], this.delay = t, this.pollAction = a, this.pollPredicate = i, this.limit = o, this.completeCallback = s, this.limitExceededCallback = c
                }
                var n = e.prototype;
                return n.isRunning = function() {
                    return this.running
                }, n.poll = function() {
                    var e = this;
                    return (0, a.Z)((function() {
                        var n, t;
                        return (0, o.__generator)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    n = function() {
                                        var n;
                                        return (0, o.__generator)(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return e.running ? e.limit && e.pollCount === e.limit ? (e.running = !1, e.limitExceededCallback && e.limitExceededCallback(e.pollCount), [2, {
                                                        v: void 0
                                                    }]) : [4, e.pollAction()] : [2, {
                                                        v: void 0
                                                    }];
                                                case 1:
                                                    return n = t.sent(), e.pollCount += 1, e.pollPredicate(n, e.pollCount) ? [4, (a = e.delay(e.pollCount), new Promise((function(e) {
                                                        setTimeout((function() {
                                                            return e(null)
                                                        }), a)
                                                    })))] : [3, 3];
                                                case 2:
                                                    return t.sent(), [3, 4];
                                                case 3:
                                                    e.running = !1, e.completeCallback && e.completeCallback(n, e.pollCount), e.completePromises.forEach((function(e) {
                                                        return e(n)
                                                    })), t.label = 4;
                                                case 4:
                                                    return [2]
                                            }
                                            var a
                                        }))
                                    }, a.label = 1;
                                case 1:
                                    return [5, (0, o.__values)(n())];
                                case 2:
                                    return t = a.sent(), "object" === (0, i.Z)(t) ? [2, t.v] : [3, 1];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                }, n.start = function() {
                    this.pollCount = 0, this.running = !0, this.poll()
                }, n.stop = function() {
                    this.running = !1
                }, n.getCompletePromise = function() {
                    var e = this;
                    return new Promise((function(n) {
                        e.completePromises.push(n)
                    }))
                }, e
            }()
        },
        78938: function(e, n, t) {
            "use strict";
            t.d(n, {
                e: function() {
                    return i
                }
            });
            var a = t(8183),
                r = t(23025),
                i = {
                    verifyVerifyEmailModuleExposure: function(e) {
                        var n = {
                            key: "verify_verify_email_module_exposure",
                            data: e
                        };
                        a.V[r.X.GIO](n), a.V[r.X.GA4](n), a.V[r.X.CONSOLE](n), a.V[r.X.SELF_DB](n)
                    },
                    verifyVerifyEmailBtnClick: function(e) {
                        var n = {
                            key: "verify_verify_email_btn_click",
                            data: e
                        };
                        a.V[r.X.GIO](n), a.V[r.X.GA4](n), a.V[r.X.CONSOLE](n), a.V[r.X.SELF_DB](n)
                    }
                }
        },
        14546: function(e) {
            e.exports = {
                monacoDebuggerBreakpoint: "debugger_monacoDebuggerBreakpoint__xuI48",
                monacoDebuggerBreakpointHovered: "debugger_monacoDebuggerBreakpointHovered__oafNO",
                monacoDebuggerBreakpointHoveredDisabled: "debugger_monacoDebuggerBreakpointHoveredDisabled___noQw",
                monacoHighlightLine: "debugger_monacoHighlightLine__MivkN"
            }
        },
        41367: function(e, n, t) {
            var a = t(11479),
                r = "string" === typeof a ? [
                    [e.id, a, ""]
                ] : a;
            (n = e.exports = a.locals || {})._getContent = function() {
                return r
            }, n._getCss = function() {
                return "" + a
            }
        }
    }
]);