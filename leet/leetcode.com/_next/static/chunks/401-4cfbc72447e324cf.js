"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [401], {
        29321: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return y
                }
            });
            var r = n(14924),
                i = n(26042),
                a = n(69396),
                o = n(88525),
                s = n(63808),
                u = n(73534),
                c = n(33405),
                l = n(53889),
                d = n(93769),
                f = n(39606);

            function v(e) {
                switch (e) {
                    case f.F6.AC:
                        return "Accepted";
                    case f.F6.WA:
                        return "Wrong Answer";
                    case f.F6.MLE:
                        return "Memory Limit Exceeded";
                    case f.F6.OLE:
                        return "Output Limit Exceeded";
                    case f.F6.TLE:
                        return "Time Limit Exceeded";
                    case f.F6.RE:
                        return "Runtime Error";
                    case f.F6.IE:
                        return "Internal Error";
                    case f.F6.CE:
                        return "Compile Error";
                    case f.F6.TO:
                        return "Timeout";
                    default:
                        return "Internal Error"
                }
            }

            function p(e, t) {
                var n, r, i, a, o = (0, u.a)(e);
                return {
                    lineNumber: null !== (n = null === o || void 0 === o ? void 0 : o.ln) && void 0 !== n ? n : void 0,
                    message: null !== (r = null === o || void 0 === o ? void 0 : o.shortError) && void 0 !== r ? r : void 0,
                    testCode: t,
                    codePreview: null !== (i = null === o || void 0 === o ? void 0 : o.codePreview) && void 0 !== i ? i : void 0,
                    showDiff: null !== (a = null === o || void 0 === o ? void 0 : o.showDiff) && void 0 !== a && a,
                    actual: null === o || void 0 === o ? void 0 : o.actual,
                    expected: null === o || void 0 === o ? void 0 : o.expected
                }
            }
            var m, h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.aUw)(s.f6, {
                        submissionId: e
                    }, (0, a.Z)((0, i.Z)({}, t), {
                        select: function(e) {
                            var t, n, r, i, a, o, s, l, d, m, h, g, b, y, E, T, x, C, w = e.submissionDetails;
                            return w ? {
                                username: w.user.username || "",
                                realName: (null === (t = w.user) || void 0 === t || null === (n = t.profile) || void 0 === n ? void 0 : n.realName) || "",
                                userAvatar: (null === (r = w.user) || void 0 === r || null === (i = r.profile) || void 0 === i ? void 0 : i.userAvatar) || "",
                                timestamp: Number(w.timestamp),
                                runtime: w.runtime || 0,
                                runtimeDisplay: w.runtimeDisplay,
                                runtimePercentile: w.runtimePercentile || null,
                                runtimeDistribution: w.runtimeDistribution,
                                runtimeMergedDistribution: [],
                                memory: w.memory || 0,
                                memoryDisplay: w.memoryDisplay,
                                memoryPercentile: w.memoryPercentile || null,
                                memoryDistribution: w.memoryDistribution,
                                memoryMergedDistribution: [],
                                lang: String(null === (a = w.lang) || void 0 === a ? void 0 : a.name) || "",
                                langName: String(null === (o = w.lang) || void 0 === o ? void 0 : o.verboseName) || "",
                                code: w.code,
                                notes: w.notes,
                                flagType: null !== (h = null === w || void 0 === w ? void 0 : w.flagType) && void 0 !== h ? h : f.Mj.White,
                                topicTags: w.topicTags,
                                statusCode: w.statusCode,
                                statusDisplay: v(w.statusCode),
                                questionId: Number(null === w || void 0 === w || null === (s = w.question) || void 0 === s ? void 0 : s.questionId) || -1,
                                questionSlug: (null === w || void 0 === w || null === (l = w.question) || void 0 === l ? void 0 : l.titleSlug) || "",
                                runtimeError: null !== (g = w.runtimeError) && void 0 !== g ? g : void 0,
                                compileError: null !== (b = w.compileError) && void 0 !== b ? b : void 0,
                                lastTestcase: null !== (y = w.lastTestcase) && void 0 !== y ? y : void 0,
                                codeOutput: null !== (E = null === (d = w.codeOutput) || void 0 === d ? void 0 : d.replace("\0", "\\u0000")) && void 0 !== E ? E : void 0,
                                stdOutput: null !== (T = w.stdOutput) && void 0 !== T ? T : void 0,
                                expectedOutput: null !== (x = w.expectedOutput) && void 0 !== x ? x : void 0,
                                totalCorrect: "number" === typeof w.totalCorrect ? w.totalCorrect : void 0,
                                totalTestcases: "number" === typeof w.totalTestcases ? w.totalTestcases : void 0,
                                frontendTestResults: null !== (C = null === (m = w.testDescriptions) || void 0 === m ? void 0 : m.map((function(e, t) {
                                    var n, r, i, a, o, s = null !== (a = (0, u.a)(e)) && void 0 !== a ? a : "Unknown test",
                                        l = null === (n = w.fullCodeOutput) || void 0 === n ? void 0 : n[t],
                                        d = "passed" === l,
                                        f = (0, u.a)(l),
                                        v = (0, u.a)(null === (r = w.testBodies) || void 0 === r ? void 0 : r[t]),
                                        m = v ? (0, c.gW)(s, v) : void 0,
                                        h = null !== (o = null === (i = w.testInfo) || void 0 === i ? void 0 : i[t]) && void 0 !== o ? o : void 0;
                                    return {
                                        title: s,
                                        passed: d,
                                        errorMessage: f,
                                        failedTestInfo: d ? void 0 : p(h, m)
                                    }
                                }))) && void 0 !== C ? C : [],
                                supportsPreview: !!w.question.hasFrontendPreview
                            } : null
                        }
                    }))
                },
                g = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.cqN)(s.f6, {
                        submissionId: e
                    }, (0, a.Z)((0, i.Z)({}, t), {
                        select: function(e) {
                            var t, n, r, i, a, o, s, u, c, l, d, p, m, h = e.submissionDetails;
                            return h ? {
                                username: h.user.username || "",
                                realName: (null === (t = h.user) || void 0 === t || null === (n = t.profile) || void 0 === n ? void 0 : n.realName) || "",
                                userAvatar: (null === (r = h.user) || void 0 === r || null === (i = r.profile) || void 0 === i ? void 0 : i.userAvatar) || "",
                                timestamp: Number(h.timestamp),
                                runtime: 0,
                                runtimeDisplay: "",
                                runtimePercentile: null,
                                runtimeDistribution: "",
                                runtimeMergedDistribution: [],
                                memory: 0,
                                memoryDisplay: "",
                                memoryPercentile: null,
                                memoryDistribution: "",
                                memoryMergedDistribution: [],
                                lang: String(null === (a = h.lang) || void 0 === a ? void 0 : a.name) || "",
                                langName: String(null === (o = h.lang) || void 0 === o ? void 0 : o.verboseName) || "",
                                code: h.code,
                                notes: "",
                                flagType: f.Mj.White,
                                topicTags: [],
                                statusCode: h.statusCode,
                                statusDisplay: v(h.statusCode),
                                questionId: -1,
                                questionSlug: "",
                                runtimeError: null !== (u = h.runtimeError) && void 0 !== u ? u : void 0,
                                compileError: null !== (c = h.compileError) && void 0 !== c ? c : void 0,
                                lastTestcase: null !== (l = h.lastTestcase) && void 0 !== l ? l : void 0,
                                codeOutput: null !== (d = null === (s = h.codeOutput) || void 0 === s ? void 0 : s.replace("\0", "\\u0000")) && void 0 !== d ? d : void 0,
                                stdOutput: null !== (p = h.stdOutput) && void 0 !== p ? p : void 0,
                                expectedOutput: null !== (m = h.expectedOutput) && void 0 !== m ? m : void 0,
                                totalCorrect: "number" === typeof h.totalCorrect ? h.totalCorrect : void 0,
                                totalTestcases: "number" === typeof h.totalTestcases ? h.totalTestcases : void 0
                            } : null
                        }
                    }))
                },
                b = (m = {}, (0, r.Z)(m, d.UU.Contest, g), (0, r.Z)(m, d.UU.Default, h), m),
                y = function(e, t) {
                    return (0, l.b)(b)(e, t)
                }
        },
        39606: function(e, t, n) {
            var r, i, a;
            n.d(t, {
                    F6: function() {
                        return r
                    },
                    Mj: function() {
                        return a
                    },
                    SQ: function() {
                        return i
                    }
                }),
                function(e) {
                    e[e.AC = 10] = "AC", e[e.WA = 11] = "WA", e[e.MLE = 12] = "MLE", e[e.OLE = 13] = "OLE", e[e.TLE = 14] = "TLE", e[e.RE = 15] = "RE", e[e.IE = 16] = "IE", e[e.CE = 20] = "CE", e[e.TO = 30] = "TO", e[e.INVALID_TESTCASE = 40] = "INVALID_TESTCASE", e[e.UNKNOWN = -1] = "UNKNOWN"
                }(r || (r = {})),
                function(e) {
                    e.NETWORK_ERROR = "NETWORK_ERROR", e.SLOWDOWN_ERROR = "SLOWDOWN_ERROR"
                }(i || (i = {})),
                function(e) {
                    e.Blue = "BLUE", e.Green = "GREEN", e.Orange = "ORANGE", e.Purple = "PURPLE", e.Red = "RED", e.White = "WHITE"
                }(a || (a = {}))
        },
        79975: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return l
                }
            });
            var r, i = n(14924),
                a = n(93769),
                o = n(95682),
                s = n(1576),
                u = n(53889),
                c = (r = {}, (0, i.Z)(r, a.UU.Contest, (function(e) {
                    var t = a.z2.getState().contestSlug;
                    return (0, s.l)(e, t)
                })), (0, i.Z)(r, a.UU.Default, (function(e) {
                    return (0, o.I)(e)
                })), r),
                l = function(e) {
                    return (0, u.b)(c)(e)
                }
        },
        59421: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return l
                }
            });
            var r, i = n(14924),
                a = n(93769),
                o = n(95682),
                s = n(1576),
                u = n(53889),
                c = (r = {}, (0, i.Z)(r, a.UU.Contest, (function(e) {
                    var t = (0, a.z2)((function(e) {
                        return e.contestSlug
                    }));
                    return (0, s.l)(e, t)
                })), (0, i.Z)(r, a.UU.Default, (function(e) {
                    return (0, o.I)(e)
                })), r),
                l = function(e) {
                    return (0, u.b)(c)(e)
                }
        },
        13042: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return d
                },
                z: function() {
                    return f
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(99534),
                o = n(85893),
                s = n(67294),
                u = n(29107),
                c = n(12922),
                l = function() {
                    return (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        className: "animate-spin",
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a1 1 0 100-2 8 8 0 118-8 1 1 0 102 0z",
                            clipRule: "evenodd"
                        })
                    })
                },
                d = (0, u.j)("relative inline-flex gap-2 items-center justify-center font-medium cursor-pointer focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors", {
                    variants: {
                        variant: {
                            primary: "text-text-reverse",
                            secondary: "bg-fill-tertiary enabled:hover:bg-fill-secondary enabled:active:bg-fill-primary",
                            outline: "border",
                            text: "bg-transparent enabled:hover:bg-fill-secondary enabled:active:bg-fill-primary"
                        },
                        theme: {
                            default: "",
                            info: "",
                            success: "",
                            danger: "",
                            warning: ""
                        },
                        size: {
                            sm: "text-caption px-2 py-1",
                            md: "text-body px-3 py-1.5",
                            lg: "text-body px-4 py-2",
                            xl: "text-title-small px-5.5 py-3"
                        },
                        shape: {
                            rect: "",
                            pill: "rounded-full",
                            square: "rounded",
                            round: "rounded-full"
                        },
                        isLoading: {
                            true: "",
                            false: ""
                        }
                    },
                    compoundVariants: [{
                        size: "sm",
                        shape: "rect",
                        class: "rounded"
                    }, {
                        size: ["md", "lg"],
                        shape: "rect",
                        class: "rounded-lg"
                    }, {
                        size: "xl",
                        shape: "rect",
                        class: "rounded-[13px]"
                    }, {
                        size: "sm",
                        shape: ["square", "round"],
                        class: "p-1.5"
                    }, {
                        size: "md",
                        shape: ["square", "round"],
                        class: "p-[9px]"
                    }, {
                        size: "lg",
                        shape: ["square", "round"],
                        class: "p-[11px]"
                    }, {
                        size: "xl",
                        shape: ["square", "round"],
                        class: "p-4"
                    }, {
                        size: "sm",
                        variant: "outline",
                        class: "px-[7px] py-[3px]"
                    }, {
                        size: "md",
                        variant: "outline",
                        class: "px-[11px] py-[5px]"
                    }, {
                        size: "lg",
                        variant: "outline",
                        class: "px-[15px] py-[7px]"
                    }, {
                        size: "xl",
                        variant: "outline",
                        class: "px-[21px] py-[11px]"
                    }, {
                        size: "sm",
                        shape: ["square", "round"],
                        variant: "outline",
                        class: "p-[5px]"
                    }, {
                        size: "md",
                        shape: ["square", "round"],
                        variant: "outline",
                        class: "p-2"
                    }, {
                        size: "lg",
                        shape: ["square", "round"],
                        variant: "outline",
                        class: "p-2.5"
                    }, {
                        size: "xl",
                        shape: ["square", "round"],
                        variant: "outline",
                        class: "p-[15px]"
                    }, {
                        theme: "default",
                        variant: "primary",
                        class: "bg-gray-100 enabled:hover:bg-gray-80 enabled:active:bg-gray-60"
                    }, {
                        theme: "info",
                        variant: "primary",
                        class: "bg-blue-60 enabled:hover:bg-blue-80 enabled:active:bg-blue-100"
                    }, {
                        theme: "success",
                        variant: "primary",
                        class: "bg-green-60 enabled:hover:bg-green-80 enabled:active:bg-green-100"
                    }, {
                        theme: "danger",
                        variant: "primary",
                        class: "bg-red-60 enabled:hover:bg-red-80 enabled:active:bg-red-100"
                    }, {
                        theme: "warning",
                        variant: "primary",
                        class: "bg-yellow-60 enabled:hover:bg-yellow-80 enabled:active:bg-yellow-100"
                    }, {
                        theme: "default",
                        variant: ["secondary", "text"],
                        class: "text-text-primary"
                    }, {
                        theme: "info",
                        variant: ["secondary", "text"],
                        class: "text-blue-60"
                    }, {
                        theme: "success",
                        variant: ["secondary", "text"],
                        class: "text-green-60"
                    }, {
                        theme: "danger",
                        variant: ["secondary", "text"],
                        class: "text-red-60"
                    }, {
                        theme: "warning",
                        variant: ["secondary", "text"],
                        class: "text-yellow-60"
                    }, {
                        theme: "default",
                        variant: "outline",
                        class: (0, c.yI)("border-gray-100 text-text-primary", "enabled:hover:border-gray-80", "enabled:active:border-gray-60 enabled:active:text-text-secondary")
                    }, {
                        theme: "info",
                        variant: "outline",
                        class: (0, c.yI)("border-blue-60 text-blue-60", "enabled:hover:border-blue-80 enabled:hover:text-blue-80", "enabled:active:border-blue-100 enabled:active:text-blue-100")
                    }, {
                        theme: "success",
                        variant: "outline",
                        class: (0, c.yI)("border-green-60 text-green-60", "enabled:hover:border-green-80 enabled:hover:text-green-80", "enabled:active:border-green-100 enabled:active:text-green-100")
                    }, {
                        theme: "danger",
                        variant: "outline",
                        class: (0, c.yI)("border-red-60 text-red-60", "enabled:hover:border-red-80 enabled:hover:text-red-80", "enabled:active:border-red-100 enabled:active:text-red-100")
                    }, {
                        theme: "warning",
                        variant: "outline",
                        class: (0, c.yI)("border-yellow-60 text-yellow-60", "enabled:hover:border-yellow-80 enabled:hover:text-yellow-80", "enabled:active:border-yellow-100 enabled:active:text-yellow-100")
                    }]
                }),
                f = (0, s.forwardRef)((function(e, t) {
                    var n = e.variant,
                        s = void 0 === n ? "primary" : n,
                        u = e.theme,
                        f = void 0 === u ? "default" : u,
                        v = e.size,
                        p = void 0 === v ? "md" : v,
                        m = e.shape,
                        h = void 0 === m ? "rect" : m,
                        g = e.label,
                        b = e.icon,
                        y = e.onClick,
                        E = e.isLoading,
                        T = void 0 !== E && E,
                        x = e.disabled,
                        C = void 0 !== x && x,
                        w = e.className,
                        N = (0, a.Z)(e, ["variant", "theme", "size", "shape", "label", "icon", "onClick", "isLoading", "disabled", "className"]);
                    return (0, o.jsxs)("button", (0, i.Z)((0, r.Z)({
                        className: (0, c.yI)(d({
                            variant: s,
                            theme: f,
                            size: p,
                            shape: h,
                            className: w
                        })),
                        disabled: Boolean(C || T),
                        ref: t,
                        onClick: y
                    }, N), {
                        children: [!b && T && (0, o.jsx)("div", {
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                            children: (0, o.jsx)(l, {})
                        }), b && (T ? (0, o.jsx)(l, {}) : b), g && "square" !== h && "round" !== h && (0, o.jsx)("div", {
                            className: (0, c.yI)({
                                invisible: !b && T
                            }),
                            children: g
                        })]
                    }))
                }))
        },
        20108: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return o
                }
            });
            var r = n(26042),
                i = n(69396),
                a = n(85893),
                o = n(67294).forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 12 12",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.01.7c-.652-.014-1.202.14-1.652.43a2.905 2.905 0 00-.996 1.121c-.449.856-.564 1.899-.564 2.692v.05a1.42 1.42 0 00-.9 1.321v3.572a1.41 1.41 0 001.4 1.414h5.4c.779 0 1.4-.643 1.4-1.414V6.314a1.42 1.42 0 00-.9-1.32v-.051c0-.794-.115-1.813-.564-2.658C8.165 1.405 7.336.73 6.01.7zm2.188 4.2h-4.4c.005-.717.117-1.55.45-2.185.166-.317.38-.571.65-.744.266-.17.616-.282 1.09-.271.923.02 1.444.456 1.763 1.055.331.622.443 1.43.447 2.145z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        69355: function(e, t, n) {
            n.d(t, {
                DB: function() {
                    return s
                },
                TY: function() {
                    return v
                },
                aD: function() {
                    return o
                },
                hg: function() {
                    return f
                },
                k_: function() {
                    return r
                },
                rf: function() {
                    return u
                },
                sH: function() {
                    return d
                },
                sh: function() {
                    return l
                }
            });
            var r, i = n(14924),
                a = n(52872);
            ! function(e) {
                e[e.Limit = 800] = "Limit", e[e.NonPremium = 100] = "NonPremium", e[e.Premium = 50] = "Premium"
            }(r || (r = {}));
            var o, s = "QD_CONSOLE_PANEL_POSITION";
            ! function(e) {
                e.Left = "left", e.Right = "right"
            }(o || (o = {}));
            var u, c, l = "QD_CONSOLE_SHOWN_SOURCE_POPOVER";
            ! function(e) {
                e.Testcase = "testcase", e.Result = "result", e.Debugger = "debugger"
            }(u || (u = {}));
            var d, f = (c = {}, (0, i.Z)(c, a.tn.Shell, !1), (0, i.Z)(c, a.tn.SystemDesign, !0), (0, i.Z)(c, a.tn.Algorithm, !0), (0, i.Z)(c, a.tn.Database, !1), (0, i.Z)(c, a.tn.Frontend, !1), c);
            ! function(e) {
                e.LinkedList = "ListNode", e.Tree = "TreeNode"
            }(d || (d = {}));
            var v = [d.Tree]
        },
        21790: function(e, t, n) {
            n.d(t, {
                Az: function() {
                    return j
                },
                B1: function() {
                    return D
                },
                Fq: function() {
                    return T
                },
                Gt: function() {
                    return A
                },
                Hb: function() {
                    return _
                },
                Hs: function() {
                    return S
                },
                Ii: function() {
                    return y
                },
                NU: function() {
                    return F
                },
                Sc: function() {
                    return L
                },
                Zl: function() {
                    return C
                },
                __: function() {
                    return x
                },
                ao: function() {
                    return I
                },
                jz: function() {
                    return N
                },
                kV: function() {
                    return E
                },
                oO: function() {
                    return w
                }
            });
            var r, i = n(14924),
                a = n(29815),
                o = n(67294),
                s = n(73534),
                u = n(19579),
                c = n(52872),
                l = n(93769),
                d = n(53889),
                f = n(39606),
                v = n(79975),
                p = n(69355),
                m = n(60195),
                h = n(61476),
                g = n(27583),
                b = n(44835),
                y = function(e) {
                    var t = (0, s.a)(e);
                    return t ? (t.type = function(e) {
                        return e.shell ? c.tn.Shell : e.systemdesign ? c.tn.SystemDesign : e.database ? c.tn.Database : e.frontend ? c.tn.Frontend : c.tn.Algorithm
                    }(t), t.type === c.tn.Algorithm && (t.params = t.params || []), t) : (u.y.error("Something went wrong with the metadata"), {
                        type: c.tn.Algorithm,
                        name: "",
                        params: []
                    })
                },
                E = function(e) {
                    return p.TY.some((function(t) {
                        return t === e
                    }))
                },
                T = function(e) {
                    var t = e.type;
                    return !!p.hg[t] && (t == c.tn.Algorithm && e.params.some((function(e) {
                        return E(e.type)
                    })))
                },
                x = function(e) {
                    var t = e.type;
                    return !!m.Fr[t]
                },
                C = function(e, t) {
                    var n = [],
                        r = [],
                        i = [],
                        o = [];
                    if (e.type === c.tn.Algorithm) {
                        var s, u, l, d, f = e;
                        (s = r).push.apply(s, (0, a.Z)(t.split("\n"))), (u = n).push.apply(u, (0, a.Z)(f.params.map((function(e) {
                            return e.name
                        })).filter((function(e) {
                            return e
                        })))), (l = i).push.apply(l, (0, a.Z)(f.params.map((function(e) {
                            return e.type
                        })))), (d = o).push.apply(d, (0, a.Z)(f.params.map((function(t) {
                            return p.hg[e.type] && E(t.type)
                        }))))
                    } else if (e.type === c.tn.Database) {
                        (0, h.s8)(c.tn.Database, [t]).forEach((function(e) {
                            Object.keys(e.tables).forEach((function(t) {
                                n.push(t), r.push(e.tables[t])
                            })), Object.keys(e.variables || {}).forEach((function(t) {
                                var i;
                                n.push(t), r.push((null === (i = e.variables) || void 0 === i ? void 0 : i[t]) || "")
                            }))
                        }))
                    } else {
                        var v;
                        (v = r).push.apply(v, (0, a.Z)(t.split("\n")))
                    }
                    return [n, r, i, o]
                },
                w = function(e) {
                    return [g.$.PENDING, g.$.JUDGING].includes(e)
                },
                N = function(e) {
                    return e.map((function(e) {
                        return Array.isArray(e) ? e.join("\n") : e
                    })).join("\n")
                },
                S = function(e, t) {
                    return function(e, t) {
                        for (var n = [], r = 0; r < e.length; r++) r % t === 0 ? n.push([e[r]]) : n[n.length - 1].push(e[r]);
                        return n
                    }(e.split("\n"), t)
                },
                O = /^(.*?) is not a valid value/,
                D = function(e) {
                    var t = e.match(O);
                    return t && t[1] ? t[1] : ""
                },
                Z = [l.UU.Contest],
                _ = function() {
                    return !Z.includes((0, l.i3)())
                },
                R = (r = {}, (0, i.Z)(r, l.UU.Contest, (function() {
                    return !(0, l.z2)((function(e) {
                        return e.isActiveContest
                    }))
                })), (0, i.Z)(r, l.UU.Default, (function() {
                    return !0
                })), r),
                F = function() {
                    return (0, d.b)(R)()
                },
                L = function(e, t, n) {
                    var r = y(t).type,
                        i = e.testcaseResultType[n],
                        a = i.input,
                        o = i.output,
                        s = i.expected,
                        u = i.stdout,
                        l = e.status === f.F6.AC,
                        d = i.accepted;
                    return {
                        input: a,
                        output: o && r === c.tn.Database && (0, b.qW)(o).output || o,
                        expected: s && r === c.tn.Database && (0, b.qW)(s).output || s || "",
                        isCodeAccepted: l,
                        isCurrentTestcaseAccepted: d,
                        stdout: u
                    }
                },
                A = function(e) {
                    var t = (0, l.z2)((function(e) {
                            return e.questionSlug
                        })),
                        n = (0, v.Q)(t).data.metaData,
                        r = e.testcaseResultType.map((function(t, r) {
                            return L(e, n, r)
                        }));
                    return (0, o.useMemo)((function() {
                        var e = [],
                            t = [],
                            n = [],
                            i = [],
                            a = [],
                            o = [];
                        r.forEach((function(r) {
                            e.push(r.input), t.push(r.output), n.push(r.expected), i.push(r.stdout), a.push(r.isCodeAccepted), o.push(r.isCurrentTestcaseAccepted)
                        }));
                        var s = !!i.join("");
                        return {
                            input: e,
                            output: t,
                            expected: n,
                            stdout: s ? i : [],
                            isCodeAccepted: a,
                            isCurrentTestcaseAccepted: o
                        }
                    }), [r])
                },
                I = function(e, t) {
                    switch (e) {
                        case f.F6.AC:
                            return t("result.accepted");
                        case f.F6.WA:
                            return t("result.wrongAnswer");
                        case f.F6.RE:
                            return t("result.runtimeError");
                        case f.F6.CE:
                            return t("result.compileError");
                        case f.F6.INVALID_TESTCASE:
                            return t("result.invalidTestcase");
                        case f.F6.IE:
                            return t("result.internalError");
                        case f.F6.TO:
                            return t("result.timeout");
                        case f.F6.TLE:
                            return t("result.timeLimitExceeded");
                        case f.F6.OLE:
                            return t("result.outputLimitExceeded");
                        case f.F6.MLE:
                            return t("result.memoryLimitExceeded");
                        default:
                            return t("result.unknownError")
                    }
                },
                j = function(e) {
                    if (e) switch (e.status) {
                        case f.F6.CE:
                            return e.fullCompileError;
                        case f.F6.RE:
                            return e.fullRuntimeError;
                        case f.F6.INVALID_TESTCASE:
                            return e.errorMessage;
                        default:
                            return
                    }
                }
        },
        60195: function(e, t, n) {
            n.d(t, {
                EX: function() {
                    return v
                },
                Fr: function() {
                    return m
                },
                Ir: function() {
                    return c
                },
                Jx: function() {
                    return p
                },
                Mx: function() {
                    return f
                },
                Qr: function() {
                    return s
                },
                X$: function() {
                    return l
                },
                Xo: function() {
                    return u
                },
                dd: function() {
                    return r
                },
                gG: function() {
                    return d
                }
            });
            var r, i, a = n(14924),
                o = n(52872),
                s = 1,
                u = 8,
                c = 0,
                l = -1,
                d = "QD_CONSOLE_TESTCASE_MODE",
                f = "QD_CONTEST_TESTCASE_MODE",
                v = "QD_CONSOLE_TESTRESULT_MODE",
                p = "QD_TESTCASE_CACHE_";
            ! function(e) {
                e.Tab = "tab", e.Text = "text"
            }(r || (r = {}));
            var m = (i = {}, (0, a.Z)(i, o.tn.Shell, !0), (0, a.Z)(i, o.tn.SystemDesign, !0), (0, a.Z)(i, o.tn.Algorithm, !0), (0, a.Z)(i, o.tn.Database, !1), (0, a.Z)(i, o.tn.Frontend, !0), i)
        },
        44835: function(e, t, n) {
            n.d(t, {
                dl: function() {
                    return b
                },
                hu: function() {
                    return g
                },
                qW: function() {
                    return E
                }
            });
            var r = n(29815),
                i = n(6524),
                a = n(54521),
                o = n(19924),
                s = n.n(o),
                u = n(32180),
                c = n(73534),
                l = n(19579),
                d = n(80043),
                f = function(e) {
                    return /^".*"$/.test(e) ? e.slice(1, -1) : e
                },
                v = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t ? f(e) : e;
                    return "null" === n ? null : "true" === n || "false" !== n && (s()(n) ? parseFloat(n) : n)
                },
                p = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null === e ? "null" : !0 === e ? "true" : !1 === e ? "false" : "number" === typeof e ? String(e) : t ? '"'.concat(e, '"') : String(e)
                },
                m = function(e, t) {
                    return e.map((function(e, n) {
                        return r = e, (i = t[n]) ? "null" === r ? null : "string" === i ? r : "number" === i ? s()(r) ? parseFloat(r) : r : "boolean" === i ? "true" === r || "false" !== r && (s()(r) ? parseFloat(r) : r) : r : v(r);
                        var r, i
                    }))
                },
                h = function(e) {
                    try {
                        var t = {},
                            n = (0, c.a)(e);
                        if (!n) return l.y.error("Something went wrong with the testcase"), {
                            tables: {}
                        };
                        Object.keys(n.headers || {}).forEach((function(e) {
                            t[e] = [n.headers[e]].concat((0, r.Z)(n.rows[e].map((function(e) {
                                return function(e) {
                                    return e.map((function(e) {
                                        return p(e)
                                    }))
                                }(e)
                            }))))
                        }));
                        var a = {};
                        Object.keys(t).forEach((function(e) {
                            a[e] = (0, i.x)(t[e])
                        }));
                        var o = (0, u.Z)(n, ["headers", "rows"]);
                        return Object.keys(o).forEach((function(e) {
                            o[e] = p(o[e], !0)
                        })), Object.keys(o).length > 0 ? {
                            tables: a,
                            variables: o
                        } : {
                            tables: a
                        }
                    } catch (s) {
                        return {
                            tables: {}
                        }
                    }
                },
                g = function(e) {
                    return e.map(h)
                },
                b = function(e) {
                    var t = d.n.getState().dbTestcaseSchema,
                        n = {
                            headers: {},
                            rows: {}
                        };
                    try {
                        Object.keys(e.tables).forEach((function(r) {
                            var i = (0, a.B0)(e.tables[r].replace(/\n(\n\s*)*/g, "\n").trim());
                            n.headers[r] = Array.from(i.headers), n.rows[r] = Array.from(i.rows).map((function(e) {
                                var n = i.headers.map((function(e) {
                                    var n;
                                    return null === t || void 0 === t || null === (n = t[r]) || void 0 === n ? void 0 : n[e]
                                }));
                                return m(e, n)
                            }))
                        })), Object.keys(e.variables || {}).forEach((function(t) {
                            var r;
                            n[t] = v((null === (r = e.variables) || void 0 === r ? void 0 : r[t]) || "", !0)
                        }))
                    } catch (r) {
                        n.headers = {}, n.rows = {}
                    }
                    return JSON.stringify(n)
                },
                y = function(e) {
                    return e.map((function(e) {
                        return p(e, function(e) {
                            return "string" === typeof e && (!isNaN(Number(e)) || !isNaN(Number(e.replace(/^['"]+|['"]+$/g, ""))) || "null" === e)
                        }(e))
                    }))
                },
                E = function(e) {
                    var t = (0, c.a)(e);
                    return e.endsWith("more chars") ? (l.y.error("The input is too long to display. Try running the code to visualize it.", {
                        duration: 3e3
                    }), {
                        output: ""
                    }) : t ? {
                        output: (0, i.x)([t.headers].concat((0, r.Z)(t.values.map((function(e) {
                            return y(e)
                        })))))
                    } : (l.y.error("Something went wrong with the output"), {
                        output: ""
                    })
                }
        },
        61476: function(e, t, n) {
            n.d(t, {
                s8: function() {
                    return l
                },
                _c: function() {
                    return d
                },
                eC: function() {
                    return f
                }
            });
            var r = n(10253),
                i = n(52872),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e.split("\n")
                },
                o = n(44835),
                s = function(e) {
                    return e.split("\n")
                },
                u = function(e) {
                    return e.map((function(e) {
                        return e.replace(/\n/g, "").trim()
                    })).join("\n")
                },
                c = n(33405),
                l = function(e, t) {
                    return e === i.tn.Algorithm ? function(e) {
                        return e.map(a)
                    }(t) : e === i.tn.Database ? (0, o.hu)(t) : e === i.tn.SystemDesign ? function(e) {
                        return e.map(s)
                    }(t) : e === i.tn.Frontend ? (0, c.e3)(t) : []
                },
                d = function(e, t, n) {
                    return e === i.tn.Algorithm ? t.map((function(e) {
                        return function(e, t) {
                            return t ? e.join("\n") : e.map((function(e) {
                                return e.replace(/\n/g, "").trim()
                            })).join("\n")
                        }(e, n)
                    })) : e === i.tn.Database ? t.map(o.dl) : e === i.tn.SystemDesign ? t.map(u) : e === i.tn.Frontend ? t.map(c.J$) : []
                },
                f = function(e, t) {
                    var n;
                    return e === i.tn.Frontend && null !== (n = t.map(c.pj).filter((function(e) {
                        return !(0, r.Z)(e, 1)[0]
                    }))[0]) && void 0 !== n ? n : [!0, null]
                }
        },
        33405: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                J$: function() {
                    return encodeFrontendTestcase
                },
                e3: function() {
                    return decodeFrontendTestcases
                },
                gW: function() {
                    return buildFrontendTest
                },
                pj: function() {
                    return validateFrontendTestcase
                }
            });
            var buildFrontendTest = function(e, t) {
                    return 'it("'.concat(e, '", async () => {\n').concat(t, "\n})")
                },
                decodeFrontendTestcase = function(e) {
                    var t = e.split("\n");
                    try {
                        var n = JSON.parse(t[0]),
                            r = JSON.parse(t[1]);
                        return buildFrontendTest(n, r)
                    } catch (i) {
                        return console.error("Error while decoding Frontend testcase", i), null
                    }
                },
                decodeFrontendTestcases = function(e) {
                    return [e.map(decodeFrontendTestcase).join("\n\n")]
                },
                TEST_FN_BODY_REGEX = RegExp("(async\\s+)*(\\(\\)\\s*\\=\\>\\s*\\{|function\\s*\\(\\)\\s*\\{)(.*?)\\}$", "s"),
                encodeFrontendTestcase = function(testcase) {
                    var lines = [];
                    try {
                        var it = function(e, t) {
                            var n = String(t).match(TEST_FN_BODY_REGEX),
                                r = n && n.length >= 3 ? n[3] : null;
                            r && (lines.push(JSON.stringify(e)), lines.push(JSON.stringify(r.replace(/^\n|\n$/g, ""))))
                        };
                        eval(testcase)
                    } catch (e) {
                        return console.error("Error while encoding Frontend testcase", e), ""
                    }
                    return lines.join("\n")
                },
                validateFrontendTestcase = function(testcase) {
                    try {
                        var it = function(e, t) {
                            if ("string" !== typeof e) throw new Error("test description must be a string");
                            if ("function" !== typeof t) throw new Error("test body must be a function");
                            var n = String(t).match(TEST_FN_BODY_REGEX);
                            if (!n || n.length < 3) throw new Error("test body must be a function")
                        };
                        eval(testcase)
                    } catch (e) {
                        return [!1, "Invalid testcase: ".concat(e.message)]
                    }
                    return [!0, null]
                },
                getTestcaseDescriptions = function(testcase) {
                    var descriptions = [];
                    try {
                        var it = function(e) {
                            descriptions.push(JSON.stringify(e))
                        };
                        eval(testcase)
                    } catch (e) {
                        return console.error("Error while encoding Frontend testcase", e), []
                    }
                    return descriptions
                }
        },
        80043: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return p
                },
                n: function() {
                    return m
                }
            });
            var r = n(14924),
                i = n(26042),
                a = n(69396),
                o = n(10253),
                s = n(29815),
                u = n(68652),
                c = n(64529),
                l = n(782),
                d = n(60195),
                f = n(69366),
                v = function(e, t, n) {
                    return t >= n ? Math.min(Math.max(0, t - 1), e.length - 2) : t
                },
                p = {
                    activeTestcase: d.Ir,
                    activeTestcaseParam: d.X$,
                    testcaseList: [],
                    dbTestcaseSchema: {},
                    failedFrontendTestLines: [],
                    failedFrontendTests: [],
                    limitErrorVisible: !1,
                    lineNumber: 1,
                    testcaseCacheKey: ""
                },
                m = (0, c.Ue)((0, l.$e)(p, (function(e, t) {
                    return {
                        canAddTestcase: function() {
                            return t().testcaseList.length < d.Xo
                        },
                        canDeleteTestcase: function() {
                            return t().testcaseList.length > d.Qr
                        },
                        setTestcaseCacheKey: function(t) {
                            return e((function(e) {
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    testcaseCacheKey: t
                                })
                            }))
                        },
                        addTestcase: function(n) {
                            return e((function(e) {
                                var r = (0, u.Z)(n),
                                    o = t().testcaseList.length,
                                    c = (0, s.Z)(e.testcaseList).concat([r]);
                                return (0, f.p0)(e.testcaseCacheKey, c), (0, a.Z)((0, i.Z)({}, e), {
                                    testcaseList: c,
                                    activeTestcase: o
                                })
                            }))
                        },
                        deleteTestcase: function(n) {
                            return e((function(e) {
                                var r = t(),
                                    o = r.testcaseList,
                                    s = r.activeTestcase,
                                    u = v(o, s, n),
                                    c = o.filter((function(e, t) {
                                        return t !== n
                                    }));
                                return (0, f.p0)(e.testcaseCacheKey, c), (0, a.Z)((0, i.Z)({}, e), {
                                    testcaseList: c,
                                    activeTestcase: u
                                })
                            }))
                        },
                        setTestcaseList: function(n) {
                            var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return e((function(e) {
                                var o = t().activeTestcase,
                                    s = n.length,
                                    u = v(n, o, s);
                                return r && (0, f.p0)(e.testcaseCacheKey, n), (0, a.Z)((0, i.Z)({}, e), {
                                    testcaseList: n,
                                    activeTestcase: u
                                })
                            }))
                        },
                        setDbTestcaseSchema: function(t) {
                            return e((function(e) {
                                var n = Object.entries(t).reduce((function(e, t) {
                                    var n = (0, o.Z)(t, 2),
                                        s = n[0],
                                        u = n[1],
                                        c = Object.entries(u).reduce((function(e, t) {
                                            var n = (0, o.Z)(t, 2),
                                                s = n[0],
                                                u = n[1];
                                            return (0, a.Z)((0, i.Z)({}, e), (0, r.Z)({}, s, function(e) {
                                                var t, n = null !== (t = null === e || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== t ? t : "";
                                                switch (!0) {
                                                    case n.startsWith("char"):
                                                    case n.startsWith("varchar"):
                                                    case n.startsWith("tinytext"):
                                                    case n.startsWith("text"):
                                                    case n.startsWith("mediumtext"):
                                                    case n.startsWith("longtext"):
                                                    case n.startsWith("enum"):
                                                    case n.startsWith("set"):
                                                    case n.startsWith("date"):
                                                    case n.startsWith("time"):
                                                    case n.startsWith("datetime"):
                                                    case n.startsWith("timestamp"):
                                                    case n.startsWith("year"):
                                                        return "string";
                                                    case n.startsWith("tinyint"):
                                                    case n.startsWith("smallint"):
                                                    case n.startsWith("mediumint"):
                                                    case n.startsWith("int"):
                                                    case n.startsWith("bigint"):
                                                    case n.startsWith("float"):
                                                    case n.startsWith("double"):
                                                    case n.startsWith("decimal"):
                                                        return "number";
                                                    case n.startsWith("bit"):
                                                    case n.startsWith("bool"):
                                                    case n.startsWith("boolean"):
                                                        return "boolean";
                                                    default:
                                                        return null
                                                }
                                            }(u)))
                                        }), {});
                                    return (0, a.Z)((0, i.Z)({}, e), (0, r.Z)({}, s, c))
                                }), {});
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    dbTestcaseSchema: n
                                })
                            }))
                        },
                        setActiveTestcase: function(t) {
                            return e((function(e) {
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    activeTestcase: t,
                                    activeTestcaseParam: d.X$
                                })
                            }))
                        },
                        setActiveTestcaseParam: function(t) {
                            return e((function(e) {
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    activeTestcaseParam: t
                                })
                            }))
                        },
                        setLimitErrorVisible: function(t) {
                            return e((function(e) {
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    limitErrorVisible: t
                                })
                            }))
                        },
                        setLineNumber: function(t) {
                            return e((function(e) {
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    lineNumber: t
                                })
                            }))
                        },
                        setActiveTestcaseWithParam: function(t, n) {
                            return e((function(e) {
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    activeTestcase: t,
                                    activeTestcaseParam: n
                                })
                            }))
                        },
                        setFailedFrontendTestLines: function(t) {
                            return e((function(e) {
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    failedFrontendTestLines: t
                                })
                            }))
                        },
                        setFailedFrontendTests: function(t) {
                            return e((function(e) {
                                return (0, a.Z)((0, i.Z)({}, e), {
                                    failedFrontendTests: t
                                })
                            }))
                        }
                    }
                })))
        },
        69366: function(e, t, n) {
            n.d(t, {
                a3: function() {
                    return E
                },
                bC: function() {
                    return g
                },
                bE: function() {
                    return h
                },
                c2: function() {
                    return y
                },
                mP: function() {
                    return m
                },
                p0: function() {
                    return b
                }
            });
            var r, i, a = n(14924),
                o = n(32161),
                s = n(93769),
                u = n(53889),
                c = n(68708),
                l = n(29297),
                d = n(60195),
                f = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.dd.Tab;
                    return o.sk ? n : null !== (t = localStorage.getItem(e)) && void 0 !== t ? t : n
                },
                v = (r = {}, (0, a.Z)(r, s.UU.Default, d.gG), (0, a.Z)(r, s.UU.Contest, d.Mx), r),
                p = (i = {}, (0, a.Z)(i, s.UU.Default, f(d.gG, d.dd.Tab)), (0, a.Z)(i, s.UU.Contest, f(d.Mx, d.dd.Text)), i),
                m = function() {
                    return (0, u.b)(v)
                },
                h = function() {
                    return (0, u.b)(p)
                },
                g = function(e) {
                    return "".concat(d.Jx).concat(e)
                },
                b = function(e, t) {
                    if (e) {
                        var n = JSON.stringify(t);
                        n.length <= 5e3 ? sessionStorage.setItem(e, n) : l.d.qdCancelTestcaseCacheClick({
                            qd_question_slug: e.replace(d.Jx, "")
                        })
                    }
                },
                y = function(e) {
                    var t = sessionStorage.getItem(g(e));
                    return t ? JSON.parse(t) : null
                },
                E = function(e) {
                    sessionStorage.removeItem(g(e)),
                        function() {
                            if ((0, c.jU)())
                                for (var e = 0; e < localStorage.length; e++) {
                                    var t = localStorage.key(e);
                                    t && t.startsWith("QD_TESTCASE_CACHE_") && localStorage.removeItem(t)
                                }
                        }()
                }
        },
        27583: function(e, t, n) {
            var r;
            n.d(t, {
                    $: function() {
                        return r
                    }
                }),
                function(e) {
                    e.INIT = "Init", e.NETWORK_ERROR = "Network Error", e.SERVER_ERROR = "Server Error", e.PENDING = "Pending", e.JUDGING = "Judging", e.SLOWDOWN = "Slowdown", e.RUNCODE = "RunCode", e.SUBMIT = "Submit"
                }(r || (r = {}))
        },
        98819: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return f
                }
            });
            var r = n(85893),
                i = n(67294),
                a = n(86215),
                o = n(89148),
                s = n(42054),
                u = n(15371),
                c = n(12922),
                l = function(e) {
                    var t = e.open,
                        n = e.onVisibilityChange,
                        r = (0, i.useRef)(t);
                    return (0, i.useEffect)((function() {
                        t !== r.current && (r.current = t, n && n(t))
                    }), [t, n]), null
                },
                d = {
                    top: "top",
                    left: "left",
                    right: "right",
                    bottom: "bottom",
                    topLeft: "top-start",
                    topRight: "top-end",
                    bottomLeft: "bottom-start",
                    bottomRight: "bottom-end",
                    leftTop: "left-start",
                    leftBottom: "left-end",
                    rightTop: "right-start",
                    rightBottom: "right-end"
                },
                f = function(e) {
                    var t = e.className,
                        n = e.buttonClassName,
                        f = e.panelClassName,
                        v = e.arrowClassName,
                        p = e.contentClassName,
                        m = e.disabled,
                        h = e.mobileEnable,
                        g = e.useHover,
                        b = void 0 === g || g,
                        y = e.content,
                        E = e.children,
                        T = e.placement,
                        x = e.timeoutDuration,
                        C = void 0 === x ? 200 : x,
                        w = e.inset,
                        N = void 0 === w ? 10 : w,
                        S = e.arrowSize,
                        O = void 0 === S ? 8 : S,
                        D = e.showArrow,
                        Z = void 0 === D || D,
                        _ = e.onVisibilityChange,
                        R = e.canCloseContent,
                        F = void 0 !== R && R,
                        L = e.transform,
                        A = void 0 === L || L,
                        I = e.portal,
                        j = e.controlledOpen,
                        W = e.setControlledOpen,
                        k = (0, i.useRef)(),
                        U = (0, i.useRef)(null),
                        P = (0, i.useRef)(!1),
                        z = (0, i.useCallback)((function(e) {
                            P.current = e, _ && _(e)
                        }), [P, _]),
                        q = (0, i.useRef)(!1),
                        M = (0, i.useCallback)((function() {
                            var e, t;
                            null === (e = U.current) || void 0 === e || null === (t = e.parentElement) || void 0 === t || t.click(), null === W || void 0 === W || W((function(e) {
                                return !e
                            }))
                        }), [W]),
                        J = (0, i.useCallback)((function(e, t) {
                            b && (k.current && clearTimeout(k.current), e !== t && (k.current = setTimeout((function() {
                                e === P.current && (q.current = !0, M())
                            }), C)))
                        }), [C, M, b, P]),
                        B = (0, i.useCallback)((function() {
                            b && (q.current || M(), q.current = !1)
                        }), [M, b]);
                    return m ? (0, r.jsx)(r.Fragment, {
                        children: E
                    }) : (0, r.jsx)(a.J, {
                        className: (0, c.yI)("popover-wrapper inline-block", t),
                        children: function(e) {
                            var t = e.open,
                                i = e.close,
                                m = null !== j && void 0 !== j ? j : t,
                                g = W ? function() {
                                    return W(!1)
                                } : i;
                            return (0, r.jsxs)(o.bv, {
                                composable: !0,
                                placement: d[null !== T && void 0 !== T ? T : "top"],
                                strategy: "fixed",
                                zIndex: 40,
                                portal: I,
                                transform: A,
                                show: m,
                                enter: "transition-all ease-out duration-200",
                                enterFrom: A ? "opacity-0 translate-y-1" : "opacity-0 top-1",
                                enterTo: A ? "opacity-100 translate-y-0" : "opacity-100 top-0",
                                leave: "transition-all ease-out duration-200",
                                leaveFrom: A ? "opacity-100 translate-y-0" : "opacity-100 top-0",
                                leaveTo: A ? "opacity-0 translate-y-1" : "opacity-0 top-1",
                                offset: N,
                                shift: N,
                                flip: {
                                    crossAxis: !1,
                                    padding: N
                                },
                                arrow: N,
                                children: [(0, r.jsx)(l, {
                                    open: m,
                                    onVisibilityChange: z
                                }), (0, r.jsxs)("div", {
                                    onMouseEnter: function() {
                                        return J(m, !0)
                                    },
                                    onMouseLeave: function() {
                                        return J(m, !1)
                                    },
                                    children: [(0, r.jsx)(o.bv.Reference, {
                                        children: (0, r.jsx)(a.J.Button, {
                                            as: "div",
                                            className: n,
                                            onClick: B,
                                            children: (0, r.jsx)("div", {
                                                ref: U,
                                                children: E
                                            })
                                        })
                                    }), (0, r.jsx)(o.bv.Content, {
                                        children: (0, r.jsxs)(a.J.Panel, {
                                            as: "div",
                                            className: (0, c.yI)("z-modal relative w-max rounded md:block", u.Cj.bgPaper, u.eq.dropdown, {
                                                hidden: !h
                                            }, f),
                                            onClick: F ? g : s.Z,
                                            children: [Z && O > 0 && (0, r.jsx)(o.bv.Arrow, {
                                                className: "absolute",
                                                offset: O / 2 + .5,
                                                children: (0, r.jsx)("div", {
                                                    className: (0, c.yI)("rotate-45 rounded-[1px]", u.Cj.bgPaper, v),
                                                    style: {
                                                        width: O,
                                                        height: O
                                                    }
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: (0, c.yI)("relative rounded px-4 py-3", p),
                                                children: y
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }
                    })
                }
        },
        9962: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return i
                }
            });
            var r = n(67294),
                i = function(e, t) {
                    var n = (0, r.useState)(null),
                        i = n[0],
                        a = n[1],
                        o = t.threshold,
                        s = t.root,
                        u = t.rootMargin,
                        c = t.enabled,
                        l = void 0 === c || c;
                    return (0, r.useEffect)((function() {
                        if (l && e && "function" === typeof IntersectionObserver) {
                            var t = new IntersectionObserver((function(e) {
                                a(e[0])
                            }), {
                                threshold: o,
                                root: s,
                                rootMargin: u
                            });
                            return t.observe(e),
                                function() {
                                    a(null), t.disconnect()
                                }
                        }
                    }), [e, o, s, u, l]), i
                }
        },
        44930: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return r
                }
            });
            var r = {};
            [{
                slug: "cpp",
                lang: "C++"
            }, {
                slug: "java",
                lang: "Java"
            }, {
                slug: "python",
                lang: "Python"
            }, {
                slug: "mysql",
                lang: "MySQL"
            }, {
                slug: "c",
                lang: "C"
            }, {
                slug: "csharp",
                lang: "C#"
            }, {
                slug: "javascript",
                lang: "JavaScript"
            }, {
                slug: "ruby",
                lang: "Ruby"
            }, {
                slug: "bash",
                lang: "Bash"
            }, {
                slug: "swift",
                lang: "Swift"
            }, {
                slug: "golang",
                lang: "Go"
            }, {
                slug: "python3",
                lang: "Python3"
            }, {
                slug: "scala",
                lang: "Scala"
            }, {
                slug: "kotlin",
                lang: "Kotlin"
            }, {
                slug: "rust",
                lang: "Rust"
            }, {
                slug: "php",
                lang: "PHP"
            }, {
                slug: "typescript",
                lang: "TypeScript"
            }, {
                slug: "racket",
                lang: "Racket"
            }, {
                slug: "cangjie",
                lang: "Cangjie"
            }].forEach((function(e) {
                r[e.slug] = e.lang
            }))
        }
    }
]);