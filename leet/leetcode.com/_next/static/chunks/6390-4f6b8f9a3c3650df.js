"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6390], {
        47816: function(n, e, t) {
            t.d(e, {
                $q: function() {
                    return c
                },
                no: function() {
                    return i
                },
                qE: function() {
                    return d
                }
            });
            var i, s = t(85893),
                a = t(67294),
                o = t(12922),
                r = t(47306),
                l = t(68708),
                c = function(n) {
                    var e = n.src,
                        t = n.username,
                        i = n.className;
                    return (0, s.jsx)(r.q, {
                        src: e,
                        alt: t,
                        className: (0, o.yI)("h-4 w-4 flex-none", i)
                    })
                };
            ! function(n) {
                n[n.YOU = 0] = "YOU", n[n.FIRST = 1] = "FIRST", n[n.SECOND = 2] = "SECOND", n[n.THIRD = 3] = "THIRD", n[n.OTHERS = 4] = "OTHERS"
            }(i || (i = {}));
            var u = function(n) {
                    var e = n.type,
                        t = n.className,
                        r = (0, a.useState)((0, l.Yu)())[0];
                    return (0, s.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "34",
                        height: "34",
                        viewBox: "0 0 34 34",
                        fill: "none",
                        className: (0, o.yI)("text-text-quaternary", t),
                        children: [(0, s.jsx)("circle", {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: e === i.OTHERS ? "currentColor" : "url(#".concat(r, ")")
                        }), (0, s.jsxs)("defs", {
                            children: [e === i.YOU && (0, s.jsxs)("linearGradient", {
                                id: r,
                                x1: "39.8662",
                                y1: "34",
                                x2: "-13.9172",
                                y2: "25.2494",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    offset: "0.05"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.2",
                                    stopColor: "hsl(var(--ranking-primary))"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.6",
                                    stopColor: "hsl(var(--ranking-highlight))"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.85",
                                    stopColor: "hsl(var(--ranking-primary))"
                                })]
                            }), e === i.FIRST && (0, s.jsxs)("linearGradient", {
                                id: r,
                                x1: "40.4375",
                                y1: "34",
                                x2: "-6.13755",
                                y2: "26.0058",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    offset: "0.1",
                                    stopColor: "#291B05"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.2",
                                    stopColor: "#9E7537"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.6",
                                    stopColor: "#FFF0B1"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.85",
                                    stopColor: "#9E7537"
                                })]
                            }), e === i.SECOND && (0, s.jsxs)("linearGradient", {
                                id: r,
                                x1: "40.009",
                                y1: "34",
                                x2: "-8.09437",
                                y2: "26.8592",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    offset: "0.1",
                                    stopColor: "#282828"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.2",
                                    stopColor: "#898989"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.45",
                                    stopColor: "white"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.85",
                                    stopColor: "#898989"
                                })]
                            }), e === i.THIRD && (0, s.jsxs)("linearGradient", {
                                id: r,
                                x1: "40.5806",
                                y1: "34",
                                x2: "-5.99448",
                                y2: "26.0058",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    offset: "0.1",
                                    stopColor: "#4B2C10"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.2",
                                    stopColor: "#9E5817"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.6",
                                    stopColor: "#FFD7BA"
                                }), (0, s.jsx)("stop", {
                                    offset: "0.85",
                                    stopColor: "#9E5817"
                                })]
                            })]
                        })]
                    })
                },
                d = function(n) {
                    var e = n.src,
                        t = n.username,
                        a = n.type,
                        o = void 0 === a ? i.OTHERS : a;
                    return (0, s.jsxs)("div", {
                        className: "relative h-[34px] w-[34px] flex-none",
                        children: [(0, s.jsx)(r.q, {
                            src: e,
                            alt: t,
                            className: "m-[3px] h-7 w-7"
                        }), (0, s.jsx)(u, {
                            type: o,
                            className: "absolute inset-0"
                        })]
                    })
                }
        },
        66066: function(n, e, t) {
            t.d(e, {
                A: function() {
                    return a
                }
            });
            var i = t(85893),
                s = t(12922),
                a = function(n) {
                    var e = n.cardImg,
                        t = n.className,
                        a = n.backgroundColors;
                    return (0, i.jsxs)("div", {
                        className: (0, s.yI)("pointer-events-none h-full w-full bg-[#FCFAFE] dark:bg-[#08050D]", t),
                        children: [e && (0, i.jsx)("img", {
                            src: e,
                            alt: "",
                            className: "h-full w-full object-fill opacity-[0.08] blur-2xl"
                        }), !e && a && (0, i.jsx)("div", {
                            className: "h-full w-full opacity-[0.08] blur-2xl",
                            style: {
                                background: "linear-gradient(".concat(a[0], ", ").concat(a[1], ")")
                            }
                        }), (0, i.jsx)("div", {
                            className: "dark:to-sd-fixed-black to-sd-fixed-white absolute inset-0 h-full w-full bg-gradient-to-b from-transparent"
                        })]
                    })
                }
        },
        83427: function(n, e, t) {
            t.d(e, {
                y: function() {
                    return a
                }
            });
            var i = t(85893),
                s = t(12922),
                a = function(n) {
                    var e = n.className;
                    return (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        className: (0, s.yI)("animate-spin", e),
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a1 1 0 100-2 8 8 0 118-8 1 1 0 102 0z",
                            clipRule: "evenodd"
                        })
                    })
                }
        },
        45065: function(n, e, t) {
            t.d(e, {
                n: function() {
                    return r
                }
            });
            var i = t(85893),
                s = t(66749),
                a = t(67294),
                o = t(12922),
                r = function(n) {
                    var e = n.active,
                        t = (0, a.useState)((0, s.Z)())[0];
                    return (0, i.jsx)("div", {
                        className: "relative h-2 w-4",
                        children: (0, i.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "30",
                            height: "20",
                            viewBox: "0 0 30 20",
                            fill: "none",
                            className: (0, o.yI)("text-fill-quaternary absolute -left-2 -top-1.5", {
                                "text-sd-timer-green": e
                            }),
                            children: [(0, i.jsx)("g", {
                                filter: e ? "url(#".concat(t, ")") : "",
                                children: (0, i.jsx)("path", {
                                    d: "M7.81063 6.75746C7.92193 6.3123 8.32191 6 8.78078 6H22.7192C23.3698 6 23.8472 6.61139 23.6894 7.24254L22.1894 13.2425C22.0781 13.6877 21.6781 14 21.2192 14H7.28078C6.6302 14 6.15285 13.3886 6.31063 12.7575L7.81063 6.75746Z",
                                    fill: "currentColor"
                                })
                            }), (0, i.jsx)("defs", {
                                children: (0, i.jsxs)("filter", {
                                    id: t,
                                    x: "0.280273",
                                    y: "0",
                                    width: "29.4395",
                                    height: "20",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, i.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, i.jsx)("feColorMatrix", { in: "SourceAlpha",
                                        type: "matrix",
                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                        result: "hardAlpha"
                                    }), (0, i.jsx)("feOffset", {}), (0, i.jsx)("feGaussianBlur", {
                                        stdDeviation: "3"
                                    }), (0, i.jsx)("feComposite", {
                                        in2: "hardAlpha",
                                        operator: "out"
                                    }), (0, i.jsx)("feColorMatrix", {
                                        type: "matrix",
                                        values: "0 0 0 0 0.0117647 0 0 0 0 0.92549 0 0 0 0 0.482353 0 0 0 0.25 0"
                                    }), (0, i.jsx)("feBlend", {
                                        mode: "normal",
                                        in2: "BackgroundImageFix",
                                        result: "effect1_dropShadow_328_5493"
                                    }), (0, i.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "effect1_dropShadow_328_5493",
                                        result: "shape"
                                    })]
                                })
                            })]
                        })
                    })
                }
        },
        93002: function(n, e, t) {
            t.d(e, {
                Q: function() {
                    return f
                }
            });
            var i = t(85893),
                s = t(11321),
                a = t(67294),
                o = t(12922),
                r = t(69485),
                l = t(37605),
                c = t(62758),
                u = t(13540),
                d = t(15363),
                f = function(n) {
                    var e = n.contestData,
                        t = n.ongoingStatus,
                        f = n.className,
                        g = n.children,
                        v = (0, s.$G)("contest", {
                            keyPrefix: "rankingPage"
                        }).t,
                        x = t === l.H.END,
                        m = null !== e && void 0 !== e ? e : {},
                        p = m.rankingUpdated,
                        h = m.unrated,
                        C = (0, d.I)(),
                        k = C.isContestOngoing,
                        y = C.isVirtualContest,
                        _ = (0, r.z)((function(n) {
                            n && u.e.contestRankingRankInfoClick({
                                contest_is_virtual: String(y),
                                contest_is_ongoing: String(k)
                            })
                        })),
                        S = (0, a.useMemo)((function() {
                            return x ? h ? (0, i.jsx)("div", {
                                children: (0, i.jsx)("p", {
                                    children: v("rankTipUnrated")
                                })
                            }) : p ? (0, i.jsx)("div", {
                                children: (0, i.jsx)("p", {
                                    children: v("rankTipUpdated")
                                })
                            }) : (0, i.jsx)("div", {
                                children: (0, i.jsx)("p", {
                                    children: v("rankTipPending")
                                })
                            }) : (0, i.jsxs)("div", {
                                children: [(0, i.jsx)("p", {
                                    children: v("rankTipTitle")
                                }), (0, i.jsxs)("ul", {
                                    className: "list-disc [&>li]:ml-5",
                                    children: [(0, i.jsx)("li", {
                                        children: v("rankTip1")
                                    }), (0, i.jsx)("li", {
                                        children: v("rankTip2")
                                    })]
                                })]
                            })
                        }), [x, h, p, v]);
                    return (0, i.jsx)(c.u, {
                        className: (0, o.yI)("max-w-[260px]", f),
                        label: S,
                        onOpenChange: _,
                        children: (0, i.jsx)("div", {
                            children: g
                        })
                    })
                }
        },
        60299: function(n, e, t) {
            t.d(e, {
                Wu: function() {
                    return o
                }
            });
            var i = t(85893),
                s = t(67294),
                a = t(68708),
                o = function(n) {
                    var e = n.size,
                        t = void 0 === e ? "default" : e,
                        o = (0, s.useState)((0, a.Yu)())[0];
                    return (0, i.jsxs)(i.Fragment, {
                        children: ["default" === t && (0, i.jsxs)("div", {
                            className: "relative inline-flex h-6 w-[65px] flex-none items-center justify-center",
                            children: [(0, i.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "65",
                                height: "24",
                                viewBox: "0 0 65 24",
                                fill: "none",
                                className: "absolute inset-0",
                                children: [(0, i.jsx)("path", {
                                    d: "M57.1189 3.40445e-07C58.7094 3.50882e-07 60.1488 0.942248 60.785 2.3999L64.2767 10.3999C64.722 11.4202 64.722 12.5798 64.2767 13.6001L60.785 21.6001C60.1487 23.0578 58.7094 24 57.1189 24H7.85615C6.2657 24 4.82634 23.0578 4.19013 21.6001L0.698389 13.6001C0.25308 12.5798 0.253081 11.4202 0.698389 10.3999L4.19013 2.3999C4.82634 0.942247 6.26569 6.74631e-09 7.85614 1.71828e-08L57.1189 3.40445e-07Z",
                                    fill: "url(#".concat(o, ")")
                                }), (0, i.jsx)("defs", {
                                    children: (0, i.jsxs)("linearGradient", {
                                        id: o,
                                        x1: "70.5",
                                        y1: "35",
                                        x2: "-21.2987",
                                        y2: "9.05514",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, i.jsx)("stop", {
                                            offset: "0.117961",
                                            stopColor: "hsl(var(--ranking-primary))"
                                        }), (0, i.jsx)("stop", {
                                            offset: "0.925",
                                            stopColor: "hsl(var(--ranking-secondary))"
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)("span", {
                                className: "text-ranking-foreground relative text-sm font-medium italic",
                                children: "Virtual"
                            })]
                        }), "sm" === t && (0, i.jsxs)("div", {
                            className: "relative inline-flex h-4 w-[41px] flex-none items-center justify-center",
                            children: [(0, i.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "41",
                                height: "16",
                                viewBox: "0 0 41 16",
                                fill: "none",
                                className: "absolute inset-0",
                                children: [(0, i.jsx)("path", {
                                    d: "M35.0162 3.29677e-07C36.646 3.46571e-07 38.1127 0.988729 38.7241 2.49942L40.3429 6.49942C40.7324 7.46189 40.7324 8.53811 40.3429 9.50058L38.7241 13.5006C38.1127 15.0113 36.646 16 35.0162 16H5.90905C4.27933 16 2.81256 15.0113 2.20118 13.5006L0.582381 9.50058C0.19287 8.53811 0.19287 7.46189 0.582381 6.49942L2.20118 2.49943C2.81256 0.98873 4.27933 1.10567e-08 5.90905 2.79505e-08L35.0162 3.29677e-07Z",
                                    fill: "url(#".concat(o, ")")
                                }), (0, i.jsx)("defs", {
                                    children: (0, i.jsxs)("linearGradient", {
                                        id: o,
                                        x1: "44.4344",
                                        y1: "23.3333",
                                        x2: "-13.9104",
                                        y2: "7.73489",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, i.jsx)("stop", {
                                            offset: "0.117961",
                                            stopColor: "hsl(var(--ranking-primary))"
                                        }), (0, i.jsx)("stop", {
                                            offset: "0.925",
                                            stopColor: "hsl(var(--ranking-secondary))"
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)("span", {
                                className: "text-ranking-foreground relative text-[10px] font-medium italic leading-4",
                                children: "Virtual"
                            })]
                        })]
                    })
                }
        },
        60178: function(n, e, t) {
            function i(n) {
                var e, t = null !== (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n)) && void 0 !== e ? e : "",
                    i = parseInt(t[1], 16),
                    s = parseInt(t[2], 16),
                    a = parseInt(t[3], 16),
                    o = Math.max(i, s, a),
                    r = Math.min(i, s, a),
                    l = o - r,
                    c = 0 === o ? 0 : l / o,
                    u = o / 255,
                    d = 0;
                switch (o) {
                    case r:
                        d = 0;
                        break;
                    case i:
                        d = s - a + l * (s < a ? 6 : 0), d /= 6 * l;
                        break;
                    case s:
                        d = a - i + 2 * l, d /= 6 * l;
                        break;
                    case a:
                        d = i - s + 4 * l, d /= 6 * l
                }
                return {
                    h: 360 * d,
                    s: 100 * c,
                    v: 100 * u
                }
            }

            function s(n) {
                var e = n.h,
                    t = n.s,
                    i = n.v,
                    s = t / 100 * (i / 100),
                    a = (2 - t / 100) * i / 100;
                return {
                    h: 360 * (e / 360),
                    s: 100 * (s /= a <= 1 ? a : 2 - a),
                    l: 100 * (a /= 2)
                }
            }
            t.d(e, {
                O: function() {
                    return a
                }
            });
            var a = function(n) {
                var e = n.primaryHex,
                    t = n.secondaryHex,
                    a = i(e),
                    o = a.h,
                    r = a.s,
                    l = o > 0 && o <= 80 || o > 120 && o <= 160 || o > 240 && o <= 320 ? 1 : -1,
                    c = o > 25 && o < 210,
                    u = s({
                        h: o,
                        s: r,
                        v: a.v
                    }),
                    d = s(t ? i(t) : {
                        h: (o + 15 * l + 360) % 360,
                        s: Math.max(r - 30, 0),
                        v: 100
                    }),
                    f = s({
                        h: (o + 30 * l + 360) % 360,
                        s: Math.max(r - 50, 0),
                        v: 100
                    });
                return {
                    "--ranking-primary": "".concat(u.h, " ").concat(u.s, "% ").concat(u.l, "%"),
                    "--ranking-secondary": "".concat(d.h, " ").concat(d.s, "% ").concat(d.l, "%"),
                    "--ranking-highlight": "".concat(f.h, " ").concat(f.s, "% ").concat(f.l, "%"),
                    "--ranking-foreground": c ? "0 0% 10%" : "0 0% 96%"
                }
            }
        },
        15363: function(n, e, t) {
            t.d(e, {
                I: function() {
                    return l
                }
            });
            var i = t(26042),
                s = t(69396),
                a = t(64529),
                o = t(782),
                r = {
                    contestSlug: void 0,
                    isVirtualContest: !1,
                    isContestOngoing: !1,
                    isReplayRedirectVisible: !1,
                    selectedReplay: void 0
                },
                l = (0, a.Ue)((0, o.$e)(r, (function(n) {
                    return {
                        setContestSlug: function(e) {
                            return n((function(n) {
                                return (0, s.Z)((0, i.Z)({}, n), {
                                    contestSlug: e
                                })
                            }))
                        },
                        setIsVirtualContest: function(e) {
                            return n((function(n) {
                                return (0, s.Z)((0, i.Z)({}, n), {
                                    isVirtualContest: e
                                })
                            }))
                        },
                        setIsContestOngoing: function(e) {
                            return n((function(n) {
                                return (0, s.Z)((0, i.Z)({}, n), {
                                    isContestOngoing: e
                                })
                            }))
                        },
                        setSelectedReplay: function(e) {
                            return n((function(n) {
                                return (0, s.Z)((0, i.Z)({}, n), {
                                    selectedReplay: e
                                })
                            }))
                        },
                        setReplayRedirectVisible: function(e) {
                            return n((function(n) {
                                return (0, s.Z)((0, i.Z)({}, n), {
                                    isReplayRedirectVisible: e
                                })
                            }))
                        }
                    }
                })))
        },
        70786: function(n, e, t) {
            t.d(e, {
                bL: function() {
                    return U
                },
                QY: function() {
                    return K
                },
                aK: function() {
                    return Q
                },
                jg: function() {
                    return tn
                },
                Gb: function() {
                    return en
                },
                xK: function() {
                    return sn
                },
                hM: function() {
                    return Y
                },
                No: function() {
                    return W
                },
                Pw: function() {
                    return nn
                },
                Dk: function() {
                    return J
                },
                RT: function() {
                    return F
                }
            });
            var i = t(85893),
                s = t(11321),
                a = t(67294),
                o = t(63331),
                r = t(68779),
                l = t(73582),
                c = t(12922),
                u = t(69485),
                d = t(40791),
                f = t(4563),
                g = t(2013),
                v = t(70341),
                x = t(62758),
                m = t(134),
                p = t(60086),
                h = t(13540),
                C = function(n) {
                    return "US" === n ? "" : "CN" === n ? "https://leetcode.cn" : "US" === n ? "https://leetcode.com" : ""
                },
                k = t(36492),
                y = t(8276),
                _ = t(75117),
                S = function(n) {
                    if (_.Lj && "true" === new URLSearchParams(location.search).get("mockChinaIp")) return !0;
                    return n.startsWith("(true")
                },
                j = t(72917),
                L = t(89952),
                N = t(79898),
                w = function(n) {
                    return {
                        code: n.code,
                        lang: n.lang,
                        contestSubmissionId: n.contest_submission,
                        submissionId: n.id
                    }
                },
                b = function(n) {
                    return {
                        id: n.id
                    }
                },
                O = t(44930),
                I = t(85945),
                V = t(48228),
                R = t(18471),
                E = t(77013),
                X = t(83210),
                D = function(n) {
                    var e = n.contestSubmissionId,
                        t = n.onSubmitted,
                        o = n.children,
                        r = (0, s.$G)("contest", {
                            keyPrefix: "rankingPage"
                        }).t,
                        l = function() {
                            var n = (0, I.NL)();
                            return (0, V.D)((function(n) {
                                var e = n.contestSubmissionId,
                                    t = n.description;
                                return (0, R.o)(y.Hv.contestSubmissionReport, {
                                    method: "post",
                                    data: JSON.stringify({
                                        description: t,
                                        submission: e
                                    }),
                                    withCredentials: !0
                                })
                            }), {
                                onSettled: function() {
                                    n.invalidateQueries(["contest-submission-report-status"])
                                }
                            })
                        }(),
                        c = l.mutateAsync,
                        d = l.isLoading,
                        f = (0, a.useState)(!1),
                        g = f[0],
                        v = f[1],
                        x = (0, a.useState)(""),
                        m = x[0],
                        p = x[1],
                        h = (0, u.z)((function() {
                            c({
                                contestSubmissionId: e,
                                description: m
                            }).then((function() {
                                v(!1), null === t || void 0 === t || t()
                            }))
                        }));
                    return (0, i.jsxs)(L.Vq, {
                        open: g,
                        onOpenChange: v,
                        children: [(0, i.jsx)(L.hg, {
                            asChild: !0,
                            children: o
                        }), (0, i.jsxs)(L.cZ, {
                            className: "sd-sm:max-w-[500px]",
                            children: [(0, i.jsx)(L.fK, {
                                children: (0, i.jsx)(L.$N, {
                                    className: "text-base tracking-normal",
                                    children: r("reportCheating")
                                })
                            }), (0, i.jsx)(E.g, {
                                value: m,
                                onChange: function(n) {
                                    return p(n.target.value)
                                },
                                placeholder: r("reportCheatingPlaceholder")
                            }), (0, i.jsx)(L.cN, {
                                className: "sd-sm:space-x-0 gap-2",
                                children: (0, i.jsx)(X.z, {
                                    onClick: h,
                                    disabled: m.length < 5,
                                    isLoading: d,
                                    children: r("submit")
                                })
                            })]
                        })]
                    })
                },
                G = t(83427),
                T = t(15363),
                B = function(n) {
                    var e, t, o, l = n.submissionId,
                        c = n.username,
                        f = n.lang,
                        g = n.dataRegion,
                        x = n.children,
                        p = (0, s.$G)("contest", {
                            keyPrefix: "rankingPage"
                        }).t,
                        _ = (0, T.I)((function(n) {
                            return n.contestSlug
                        })),
                        S = (0, a.useState)(!1),
                        j = S[0],
                        I = S[1],
                        V = "US" === g,
                        R = function(n, e, t) {
                            var i = t.enabled;
                            return (0, k.a)(["contest-submission", {
                                submissionId: n,
                                dataRegion: e
                            }], (function() {
                                return y.x1.request("".concat(C(e)).concat(y.Hv.contestSubmission(n))).then(w)
                            }), {
                                enabled: i
                            })
                        }(null !== l && void 0 !== l ? l : 0, g, {
                            enabled: j && !!l
                        }),
                        E = R.data,
                        X = R.isFetching,
                        B = function(n, e, t) {
                            var i = t.enabled;
                            return (0, k.a)(["contest-submission-report-status", {
                                contestSubmissionId: n,
                                dataRegion: e
                            }], (function() {
                                return y.x1.request("".concat(C(e)).concat(y.Hv.contestSubmissionReportStatus(n))).then(b)
                            }), {
                                enabled: i
                            })
                        }(null !== (e = null === E || void 0 === E ? void 0 : E.contestSubmissionId) && void 0 !== e ? e : 0, g, {
                            enabled: j && V && !!(null === E || void 0 === E ? void 0 : E.contestSubmissionId)
                        }),
                        A = B.data,
                        q = (null === A || void 0 === A ? void 0 : A.id) && -1 !== (null === A || void 0 === A ? void 0 : A.id),
                        H = null !== (t = O.O[f]) && void 0 !== t ? t : f,
                        F = (0, T.I)(),
                        P = F.isContestOngoing,
                        M = F.isVirtualContest,
                        Z = (0, u.z)((function(n) {
                            I(n), n && h.e.contestRankingPunishInfoClick({
                                contest_is_virtual: String(M),
                                contest_is_ongoing: String(P)
                            })
                        })),
                        U = (0, u.z)((function() {
                            h.e.contestRankingReportClick({
                                contest_is_virtual: String(M),
                                contest_is_ongoing: String(P)
                            })
                        }));
                    return l ? (0, i.jsxs)(L.Vq, {
                        open: j,
                        onOpenChange: Z,
                        children: [(0, i.jsx)(L.hg, {
                            asChild: !0,
                            children: x
                        }), (0, i.jsxs)(L.cZ, {
                            className: "sd-sm:max-w-[700px]",
                            children: [(0, i.jsx)(L.fK, {
                                children: (0, i.jsxs)(L.$N, {
                                    className: "flex items-center gap-2 text-base tracking-normal",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-text-primary font-semibold",
                                        children: p("code")
                                    }), (0, i.jsx)("div", {
                                        className: "bg-border-tertiary h-3.5 w-px rounded-full"
                                    }), (0, i.jsx)("div", {
                                        className: "text-text-secondary font-normal",
                                        children: H
                                    }), (0, i.jsx)("div", {
                                        className: "bg-border-tertiary h-3.5 w-px rounded-full"
                                    }), (0, i.jsx)("div", {
                                        className: "text-text-secondary font-normal",
                                        children: c
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-1 flex-col gap-4 overflow-hidden",
                                children: [(0, i.jsx)("div", {
                                    className: "bg-fill-quaternary max-h-[400px] w-full overflow-hidden rounded-lg",
                                    children: !X && E ? (0, i.jsx)(N.B, {
                                        lang: f,
                                        code: E.code,
                                        showCopyIcon: !0,
                                        className: "h-full w-full !p-4",
                                        actionButtonsClassName: "right-1 top-1",
                                        wrapperClassName: "h-full w-full"
                                    }) : (0, i.jsx)("div", {
                                        className: "text-sd-muted-foreground flex h-[400px] w-full items-center justify-center",
                                        children: (0, i.jsx)(G.y, {})
                                    })
                                }), !A && (V ? (0, i.jsx)("div", {
                                    className: "h-4"
                                }) : (0, i.jsxs)(d.r, {
                                    href: "".concat(C(g)).concat(v.Hb.contestRanking(_)),
                                    isExternal: !0,
                                    className: "text-sd-blue-600 hover:text-sd-blue-600 flex h-4 items-center gap-1 text-xs",
                                    children: [(0, i.jsx)("div", {
                                        children: p("reportCheatingOtherRegion")
                                    }), (0, i.jsx)(m.e, {
                                        variant: "12px",
                                        padding: "none",
                                        icon: r.wlW
                                    })]
                                })), A && (q ? (0, i.jsx)("div", {
                                    className: "text-sd-muted-foreground text-xs",
                                    children: p("reportCheatingSubmitted")
                                }) : (0, i.jsx)(D, {
                                    contestSubmissionId: null !== (o = null === E || void 0 === E ? void 0 : E.contestSubmissionId) && void 0 !== o ? o : 0,
                                    onSubmitted: U,
                                    children: (0, i.jsx)("div", {
                                        className: "text-sd-blue-600 cursor-pointer text-xs",
                                        children: p("reportCheating")
                                    })
                                }))]
                            })]
                        })]
                    }) : (0, i.jsx)(i.Fragment, {
                        children: x
                    })
                },
                A = t(45065),
                q = t(47816),
                H = t(60299),
                F = {
                    cpp: "C++",
                    java: "Java",
                    python: "Python",
                    python3: "Python",
                    c: "C",
                    csharp: "C#",
                    javascript: "JavaScript",
                    ruby: "Ruby",
                    swift: "Swift",
                    golang: "Go",
                    scala: "Scala",
                    html: "HTML",
                    kotlin: "Kotlin",
                    rust: "Rust",
                    php: "PHP",
                    typescript: "TypeScript",
                    erlang: "Erlang",
                    elixir: "Elixir",
                    dart: "Dart",
                    cangjie: "Cangjie"
                },
                P = function() {
                    return (0, i.jsxs)("svg", {
                        className: "h-3.5 w-3.5",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1569 9.87384L10.6886 7.13697C10.8106 6.51812 10.706 6.05617 10.3923 5.76853C10.0872 5.48962 9.56423 5.35016 8.79721 5.35016H7.87329L8.13478 3.99044C8.14349 3.93814 8.13478 3.88584 8.09991 3.84226C8.06505 3.79868 8.02147 3.78125 7.96917 3.78125H6.69661C6.60945 3.78125 6.53972 3.84226 6.52229 3.92071L5.95574 6.82319C5.90344 6.49197 5.78142 6.21306 5.57223 5.98644C5.19743 5.55935 4.61345 5.34144 3.82028 5.34144H1.37104C1.28388 5.34144 1.21415 5.40246 1.19672 5.4809L0.0549016 11.373C0.0461854 11.4253 0.0549016 11.4776 0.0897662 11.5212C0.124631 11.5648 0.168212 11.5822 0.220509 11.5822H1.50178C1.58895 11.5822 1.65867 11.5212 1.67611 11.4428L1.95502 10.022H2.90508C3.40191 10.022 3.829 9.96972 4.15149 9.86513C4.49143 9.75182 4.79649 9.56878 5.06669 9.31601C5.2846 9.11554 5.46763 8.88892 5.60709 8.64487L5.38047 9.82155C5.37176 9.87384 5.38047 9.92614 5.41534 9.96972C5.4502 10.0133 5.49378 10.0307 5.54608 10.0307H6.81864C6.9058 10.0307 6.97553 9.96972 6.99296 9.89128L7.62053 6.6663H8.49214C8.86694 6.6663 8.97153 6.73603 9.00639 6.77089C9.03254 6.79704 9.08484 6.90163 9.02383 7.22413L8.51829 9.83026C8.50957 9.88256 8.51829 9.93486 8.55315 9.97844C8.58802 10.022 8.6316 10.0395 8.6839 10.0395H9.99132C10.0698 10.0133 10.1395 9.95229 10.1569 9.87384ZM4.2652 7.60635C4.18675 8.01601 4.03858 8.31236 3.82067 8.47796C3.60277 8.64357 3.24541 8.73073 2.77473 8.73073H2.20818L2.61784 6.62142H3.35C3.8904 6.62142 4.10831 6.73473 4.19547 6.83061C4.30878 6.97007 4.33493 7.24027 4.2652 7.60635Z",
                            fill: "#A8A8A8"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.5955 5.98386C15.2207 5.55677 14.6367 5.33887 13.8436 5.33887H11.3769C11.2897 5.33887 11.22 5.39988 11.2026 5.47833L10.0608 11.3617C10.052 11.414 10.0608 11.4663 10.0956 11.5099C10.1305 11.5535 10.1741 11.5709 10.2264 11.5709H11.5076C11.5948 11.5709 11.6645 11.5099 11.682 11.4315L11.9609 10.0107H12.9109C13.4078 10.0107 13.8349 9.95843 14.1574 9.85384C14.4973 9.74053 14.8024 9.55749 15.0726 9.30472C15.2992 9.09553 15.4909 8.86019 15.6304 8.60743C15.7698 8.35466 15.8744 8.07574 15.9355 7.77067C16.0836 7.01237 15.9703 6.41967 15.5955 5.98386ZM14.2615 7.60522C14.183 8.01488 14.0349 8.31123 13.817 8.47683C13.5991 8.64244 13.2417 8.7296 12.771 8.7296H12.2045L12.6141 6.62029H13.3463C13.8867 6.62029 14.1046 6.7336 14.1918 6.82948C14.3138 6.96894 14.3399 7.23914 14.2615 7.60522Z",
                            fill: "#A8A8A8"
                        })]
                    })
                },
                M = function() {
                    return (0, i.jsxs)("svg", {
                        className: "h-3.5 w-3.5",
                        width: "17",
                        height: "16",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsx)("g", {
                            clipPath: "url(#clip0_1405_42209)",
                            children: (0, i.jsx)("path", {
                                d: "M16.0896 7.80372L15.4179 7.38792C15.4123 7.32249 15.4058 7.25722 15.3988 7.19225L15.976 6.65385C16.0347 6.59912 16.061 6.51811 16.0451 6.43968C16.0297 6.36096 15.9745 6.29614 15.8994 6.26817L15.1616 5.99224C15.1431 5.92834 15.1236 5.8649 15.1038 5.80177L15.5641 5.16248C15.611 5.09751 15.6206 5.01298 15.59 4.93883C15.5595 4.865 15.4927 4.81211 15.4136 4.79911L14.6355 4.67254C14.6053 4.61353 14.5738 4.55544 14.542 4.49781L14.869 3.7801C14.9024 3.70703 14.8956 3.62204 14.8509 3.55569C14.8064 3.48904 14.7311 3.45006 14.6507 3.45312L13.861 3.48063C13.8201 3.42958 13.7786 3.37898 13.7362 3.3293L13.9177 2.56007C13.936 2.48195 13.9129 2.40017 13.8561 2.34345C13.7997 2.28689 13.7177 2.2635 13.6396 2.28185L12.8705 2.46315C12.8207 2.42096 12.7701 2.37923 12.7189 2.33841L12.7466 1.5487C12.7496 1.46875 12.7106 1.39277 12.644 1.34844C12.5772 1.3038 12.4926 1.29708 12.4197 1.33025L11.7022 1.65739C11.6442 1.62559 11.5861 1.5941 11.5274 1.56368L11.4006 0.785432C11.3877 0.706552 11.3348 0.639596 11.2608 0.609023C11.187 0.578297 11.1023 0.588233 11.0374 0.63501L10.3976 1.09529C10.3346 1.07527 10.2713 1.05601 10.2074 1.03766L9.93151 0.29962C9.90354 0.224409 9.83872 0.169224 9.75999 0.153632C9.68142 0.138192 9.60055 0.164332 9.54598 0.222728L9.00758 0.800413C8.94261 0.793228 8.87718 0.786655 8.81191 0.781304L8.39611 0.109453C8.35407 0.041427 8.27963 0 8.19952 0C8.11942 0 8.04498 0.041427 8.00309 0.109453L7.58729 0.781304C7.52186 0.786655 7.45644 0.793228 7.39147 0.800413L6.85292 0.222728C6.79834 0.164332 6.71732 0.138192 6.6389 0.153632C6.56018 0.169377 6.49536 0.224409 6.46739 0.29962L6.19146 1.03766C6.12756 1.05601 6.06428 1.07542 6.00114 1.09529L5.36155 0.63501C5.29658 0.58808 5.21189 0.578144 5.1379 0.609023C5.06406 0.639596 5.01102 0.706552 4.99818 0.785432L4.8713 1.56368C4.8126 1.5941 4.75451 1.62544 4.69657 1.65739L3.97901 1.33025C3.9061 1.29693 3.8211 1.3038 3.75476 1.34844C3.68811 1.39277 3.64913 1.46875 3.65218 1.5487L3.6797 2.33841C3.62864 2.37923 3.57804 2.42096 3.52806 2.46315L2.75898 2.28185C2.68087 2.26366 2.59893 2.28689 2.54237 2.34345C2.4855 2.40017 2.46242 2.48195 2.48076 2.56007L2.66191 3.3293C2.61987 3.37913 2.57829 3.42958 2.53748 3.48063L1.74776 3.45312C1.66812 3.45082 1.59199 3.48904 1.54751 3.55569C1.50287 3.62204 1.49614 3.70703 1.52932 3.7801L1.85645 4.49781C1.82466 4.55544 1.79317 4.61353 1.76274 4.67254L0.984651 4.79911C0.905618 4.81195 0.838968 4.86485 0.808242 4.93883C0.777668 5.01298 0.787605 5.09751 0.834229 5.16248L1.29451 5.80177C1.27449 5.8649 1.25507 5.92834 1.23673 5.99224L0.498686 6.26817C0.423781 6.29614 0.368596 6.36096 0.353003 6.43968C0.337411 6.51826 0.363551 6.59912 0.422099 6.65385L0.999479 7.19225C0.992294 7.25722 0.985873 7.32265 0.98037 7.38792L0.308672 7.80372C0.240646 7.84576 0.199219 7.92005 0.199219 8.00031C0.199219 8.08056 0.240646 8.15485 0.308672 8.19674L0.98037 8.61254C0.985873 8.67797 0.992294 8.74324 0.999479 8.80821L0.422099 9.34676C0.363551 9.40133 0.337411 9.48235 0.353003 9.56077C0.368596 9.6395 0.423781 9.70416 0.498686 9.73229L1.23673 10.0082C1.25507 10.0721 1.27449 10.1356 1.29451 10.1987L0.834229 10.8381C0.787452 10.9033 0.777515 10.9878 0.808242 11.0616C0.838968 11.1358 0.905771 11.1887 0.984803 11.2013L1.76274 11.3279C1.79317 11.3869 1.82435 11.445 1.85645 11.503L1.52932 12.2204C1.49599 12.2933 1.50287 12.3781 1.54751 12.4448C1.59214 12.5116 1.66812 12.5506 1.74776 12.5473L2.53717 12.5197C2.57829 12.571 2.61972 12.6213 2.66191 12.6713L2.48076 13.4407C2.46242 13.5187 2.4855 13.6001 2.54237 13.6569C2.59878 13.7139 2.68087 13.7366 2.75898 13.7183L3.52806 13.5372C3.57804 13.5797 3.62864 13.6209 3.6797 13.6616L3.65218 14.4515C3.64913 14.5314 3.68811 14.6072 3.75476 14.6519C3.8211 14.6963 3.9061 14.7031 3.97901 14.6698L4.69657 14.3428C4.75436 14.3749 4.81245 14.4061 4.8713 14.4365L4.99818 15.2143C5.01102 15.2934 5.06391 15.3604 5.1379 15.3908C5.21173 15.4216 5.29658 15.4116 5.36155 15.365L6.00084 14.9044C6.06397 14.9244 6.12741 14.944 6.19131 14.9623L6.46723 15.7001C6.49521 15.775 6.56002 15.8305 6.63875 15.8458C6.71732 15.8617 6.79819 15.8354 6.85276 15.7767L7.39132 15.1993C7.45628 15.2068 7.52171 15.213 7.58714 15.2188L8.00294 15.8905C8.04482 15.9583 8.11927 16 8.19937 16C8.27947 16 8.35392 15.9584 8.39596 15.8905L8.81176 15.2188C8.87718 15.213 8.94246 15.2068 9.00743 15.1993L9.54583 15.7767C9.6004 15.8354 9.68142 15.8617 9.75984 15.8458C9.83857 15.8303 9.90338 15.775 9.93136 15.7001L10.2073 14.9623C10.2712 14.944 10.3346 14.9244 10.3978 14.9044L11.0372 15.365C11.1022 15.4116 11.1869 15.4216 11.2607 15.3908C11.3347 15.3604 11.3876 15.2933 11.4004 15.2143L11.5273 14.4365C11.586 14.4061 11.6441 14.3744 11.702 14.3428L12.4196 14.6698C12.4925 14.7031 12.5773 14.6963 12.6438 14.6519C12.7105 14.6072 12.7493 14.5316 12.7464 14.4515L12.7189 13.6616C12.7699 13.6208 12.8205 13.5797 12.8704 13.5372L13.6395 13.7183C13.7176 13.7366 13.7995 13.7139 13.8559 13.6569C13.9128 13.6001 13.9359 13.5187 13.9175 13.4407L13.7364 12.6713C13.7786 12.6213 13.8201 12.571 13.8608 12.5197L14.6505 12.5473C14.7302 12.5506 14.8063 12.5116 14.8508 12.4448C14.8954 12.3781 14.9023 12.2933 14.8688 12.2204L14.5418 11.503C14.5738 11.445 14.6051 11.3869 14.6354 11.3279L15.4135 11.2013C15.4927 11.1887 15.5593 11.1358 15.5899 11.0616C15.6205 10.9878 15.6108 10.9033 15.5639 10.8381L15.1036 10.1987C15.1235 10.1356 15.1429 10.0721 15.1614 10.0082L15.8993 9.73229C15.9744 9.70416 16.0297 9.6395 16.045 9.56077C16.0609 9.4822 16.0346 9.40133 15.9759 9.34676L15.3987 8.80821C15.4057 8.74324 15.4121 8.67781 15.4178 8.61254L16.0895 8.19674C16.1575 8.15485 16.1989 8.08041 16.1989 8.00031C16.1989 7.9202 16.1576 7.84576 16.0896 7.80372ZM11.5939 13.3759C11.3374 13.3205 11.1743 13.0677 11.2294 12.8104C11.2842 12.5535 11.5369 12.3899 11.7933 12.4452C12.0498 12.5001 12.2132 12.7534 12.1582 13.0102C12.1031 13.267 11.8503 13.4308 11.5939 13.3759ZM11.3657 11.8322C11.1317 11.7821 10.9015 11.931 10.8513 12.1655L10.6128 13.2784C9.87694 13.6124 9.05971 13.7979 8.19907 13.7979C7.3187 13.7979 6.48374 13.6032 5.73469 13.255L5.49637 12.1421C5.44623 11.9079 5.21602 11.7587 4.98213 11.809L3.99965 12.0199C3.81728 11.8322 3.6476 11.6323 3.49167 11.4212H8.27214C8.32625 11.4212 8.36233 11.4114 8.36233 11.3622V9.67115C8.36233 9.62192 8.32625 9.61214 8.27214 9.61214H6.87401V8.54023H8.38618C8.52421 8.54023 9.12422 8.57967 9.31607 9.34661C9.37614 9.58248 9.50807 10.3497 9.59826 10.5954C9.68815 10.8708 10.0541 11.4212 10.4441 11.4212H12.8262C12.8533 11.4212 12.8822 11.4181 12.9126 11.4126C12.7473 11.6372 12.566 11.8497 12.3708 12.0482L11.3657 11.8322ZM4.7539 13.3526C4.49739 13.408 4.24485 13.2444 4.18966 12.9874C4.13479 12.73 4.29789 12.4773 4.55441 12.422C4.81092 12.3671 5.06361 12.5307 5.11864 12.7876C5.17352 13.0445 5.01026 13.2976 4.7539 13.3526ZM2.94043 5.99897C3.04683 6.23912 2.9386 6.52055 2.69875 6.62679C2.4589 6.73334 2.17824 6.62496 2.07184 6.38465C1.96545 6.14435 2.07368 5.86338 2.31353 5.75683C2.55353 5.65043 2.83404 5.75866 2.94043 5.99897ZM2.38308 7.3202L3.40653 6.86542C3.62513 6.76835 3.72388 6.51214 3.62681 6.29308L3.416 5.81644H4.245V9.55313H2.57248C2.42741 9.04317 2.3496 8.50492 2.3496 7.94864C2.3496 7.7363 2.36107 7.52642 2.38308 7.3202ZM6.87432 6.95729V5.85588H8.84845C8.95041 5.85588 9.56845 5.97375 9.56845 6.43586C9.56845 6.81956 9.09441 6.95714 8.7046 6.95714H6.87432V6.95729ZM14.0487 7.94864C14.0487 8.09478 14.0433 8.23939 14.0326 8.38293H13.4325C13.3724 8.38293 13.3482 8.42237 13.3482 8.48123V8.75685C13.3482 9.40561 12.9824 9.54671 12.6619 9.58263C12.3566 9.61703 12.0181 9.45484 11.9764 9.26803C11.7963 8.25514 11.4963 8.03883 11.0224 7.66507C11.6105 7.29161 12.2224 6.74068 12.2224 6.00325C12.2224 5.20696 11.6765 4.70541 11.3044 4.45944C10.7824 4.11534 10.2044 4.0464 10.0485 4.0464H3.84159C4.68327 3.10703 5.82397 2.4416 7.11417 2.19945L7.84579 2.967C8.01119 3.1402 8.28513 3.14662 8.45818 2.98106L9.27678 2.19808C10.9921 2.51742 12.4443 3.58519 13.2813 5.05012L12.7209 6.31586C12.6241 6.53492 12.7229 6.79113 12.9413 6.8882L14.0203 7.36744C14.0389 7.55898 14.0487 7.75251 14.0487 7.94864ZM7.8461 1.54656C8.03565 1.36495 8.33634 1.37214 8.51779 1.562C8.69894 1.75232 8.69206 2.05331 8.50205 2.23477C8.31249 2.41637 8.0118 2.40934 7.83035 2.21917C7.64936 2.02916 7.65623 1.72816 7.8461 1.54656ZM13.4074 6.02205C13.5136 5.7819 13.7943 5.67351 14.0342 5.78006C14.274 5.88646 14.3822 6.16773 14.2758 6.40789C14.1696 6.6482 13.8889 6.75658 13.6489 6.65003C13.4094 6.54363 13.3012 6.26251 13.4074 6.02205Z",
                                fill: "#A8A8A8"
                            })
                        }), (0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: "clip0_1405_42209",
                                children: (0, i.jsx)("rect", {
                                    width: "16",
                                    height: "16",
                                    fill: "white",
                                    transform: "translate(0.199219)"
                                })
                            })
                        })]
                    })
                },
                Z = function(n, e) {
                    return new Date(1e3 * (n - e)).toISOString().substring(11, 19)
                },
                U = function(n) {
                    var e = n.children,
                        t = n.className;
                    return (0, i.jsx)("div", {
                        className: (0, c.yI)("flex h-[50px] flex-[1_0_0] items-center self-stretch p-4", t),
                        children: e
                    })
                },
                Q = function(n) {
                    var e = n.children;
                    return (0, i.jsx)(U, {
                        className: "relative min-w-[170px] overflow-hidden p-0",
                        children: (0, i.jsx)("div", {
                            className: "absolute flex w-full min-w-[170px] items-center gap-4 overflow-hidden px-4",
                            children: e
                        })
                    })
                },
                z = function(n) {
                    var e = function() {
                            var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            return (0, k.a)(["isChinaIp", {}], (function() {
                                return y.x1.rawRequest(y.Hv.isChinaIp).then((function(n) {
                                    return n.text()
                                })).then(S)
                            }), {
                                staleTime: 1 / 0,
                                enabled: n
                            })
                        }(n.enabled),
                        t = e.data;
                    return void 0 === t || t
                },
                $ = function(n) {
                    var e = n.region,
                        t = n.countryCode,
                        s = (0, f.ED)();
                    if (z({
                            enabled: !s
                        }) && !s && "TW" === t) return null;
                    var a = "CN" === e ? (0, g.bK)("CN") : (0, g.bK)(t);
                    return a ? (0, i.jsx)("div", {
                        className: "text-sd-foreground flex-none text-sm",
                        children: a
                    }) : null
                },
                K = function(n) {
                    var e, t, a = n.rankingData,
                        o = n.isSelf,
                        r = n.rankingRegion,
                        l = n.isDetail,
                        f = n.isVirtual,
                        g = (0, s.$G)("contest", {
                            keyPrefix: "rankingPage"
                        }).t,
                        m = o ? q.no.YOU : null !== (t = [q.no.FIRST, q.no.SECOND, q.no.THIRD][null !== (e = null === a || void 0 === a ? void 0 : a.rank) && void 0 !== e ? e : -1]) && void 0 !== t ? t : q.no.OTHERS,
                        k = !!a && r === p.BS.GLOBAL && ("CN" === (null === a || void 0 === a ? void 0 : a.region) || !!(null === a || void 0 === a ? void 0 : a.countryCode)),
                        y = (0, T.I)(),
                        _ = y.isContestOngoing,
                        S = y.isVirtualContest,
                        j = (0, u.z)((function() {
                            h.e.contestRankingUserClick({
                                contest_is_virtual: String(S),
                                contest_is_ongoing: String(_),
                                contest_component_location: l ? "detail" : "qd"
                            })
                        }));
                    return (0, i.jsx)(U, {
                        className: "relative min-w-[170px] overflow-hidden p-0",
                        children: (0, i.jsx)("div", {
                            className: "absolute flex w-full min-w-[170px] items-center gap-4 overflow-hidden px-4",
                            children: a ? (0, i.jsxs)(d.r, {
                                className: "flex items-center gap-4 overflow-hidden",
                                href: "".concat(C(a.region)).concat(v.Hb.profile(a.userStatus.userSlug)),
                                onClick: j,
                                children: [(0, i.jsx)(q.qE, {
                                    src: a.userStatus.avatar,
                                    username: a.userStatus.username,
                                    type: m
                                }), (0, i.jsxs)("div", {
                                    className: "flex items-center gap-1 overflow-hidden",
                                    children: [(0, i.jsx)("div", {
                                        className: (0, c.yI)("truncate", {
                                            "text-sd-brand-lc-orange": "legendary" === a.userStatus.color
                                        }),
                                        children: o ? g("you") : a.userStatus.username
                                    }), a.userStatus.badge && (0, i.jsx)(x.u, {
                                        className: "z-modal-3",
                                        label: a.userStatus.badge.name,
                                        placement: "top",
                                        children: (0, i.jsx)("img", {
                                            src: a.userStatus.badge.icon,
                                            alt: a.userStatus.badge.name,
                                            className: "h-3.5 w-3.5 flex-none"
                                        })
                                    }), k && (0, i.jsx)($, {
                                        region: a.region,
                                        countryCode: a.countryCode
                                    }), f && o && (0, i.jsx)(H.Wu, {
                                        size: "sm"
                                    })]
                                })]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "flex h-[34px] w-[34px] items-center justify-center",
                                    children: (0, i.jsx)("div", {
                                        className: "bg-fill-quaternary h-[4px] w-[20px] rounded-full"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "bg-fill-quaternary h-[4px] w-[100px] rounded-full"
                                })]
                            })
                        })
                    })
                },
                W = function(n) {
                    var e = n.children;
                    return (0, i.jsx)(U, {
                        className: "min-w-[60px] max-w-[100px]",
                        children: e
                    })
                },
                Y = function(n) {
                    var e = n.score,
                        t = n.isDetail,
                        s = n.className;
                    return (0, i.jsxs)(U, {
                        className: (0, c.yI)("min-w-[60px] max-w-[100px]", s),
                        children: [void 0 !== e && (t ? e : "".concat(e, " pt.")), void 0 === e && (0, i.jsx)("div", {
                            className: "bg-fill-quaternary h-[4px] w-[40px] rounded-full"
                        })]
                    })
                },
                J = function(n) {
                    var e = n.children,
                        t = n.className;
                    return (0, i.jsx)(U, {
                        className: (0, c.yI)("min-w-[130px] max-w-[140px]", t),
                        children: e
                    })
                },
                nn = function(n) {
                    var e = n.finishTime,
                        t = n.startTime,
                        s = n.className;
                    return (0, i.jsx)(U, {
                        className: (0, c.yI)("min-w-[130px] max-w-[140px]", s),
                        children: void 0 !== e && void 0 !== t ? Z(e, t) : (0, i.jsx)("div", {
                            className: "bg-fill-quaternary h-[4px] w-[80px] rounded-full"
                        })
                    })
                },
                en = function(n) {
                    var e = n.children;
                    return (0, i.jsx)(U, {
                        className: "min-w-[180px] p-2",
                        children: (0, i.jsx)("div", {
                            className: "flex h-full w-full items-center gap-2 rounded-md px-2",
                            children: e
                        })
                    })
                },
                tn = function(n) {
                    var e, t = n.submission,
                        d = n.username,
                        f = n.userSlug,
                        g = n.dataRegion,
                        v = n.startTime,
                        p = n.isSelf,
                        C = n.className,
                        k = n.hasReplay,
                        y = n.questionSlug,
                        _ = (0, s.$G)("contest", {
                            keyPrefix: "rankingPage"
                        }).t,
                        S = F[null !== (e = null === t || void 0 === t ? void 0 : t.lang) && void 0 !== e ? e : ""],
                        L = (0, i.jsx)(A.n, {
                            active: !!t
                        });
                    if (t && (null === t || void 0 === t ? void 0 : t.submissionId)) switch (S) {
                        case void 0:
                        case "Cangjie":
                            L = (0, i.jsx)(m.e, {
                                variant: "14px",
                                padding: "none",
                                icon: r.w49,
                                className: "text-sd-blue-500"
                            });
                            break;
                        case "Rust":
                            L = (0, i.jsx)(M, {});
                            break;
                        case "PHP":
                            L = (0, i.jsx)(P, {});
                            break;
                        default:
                            L = (0, i.jsx)(o.J, {
                                lang: S,
                                size: 14,
                                style: {
                                    display: "block"
                                }
                            })
                    }
                    var N, w, b = (0, T.I)(),
                        O = b.isContestOngoing,
                        I = b.isVirtualContest,
                        V = b.setSelectedReplay,
                        R = b.contestSlug,
                        E = (0, u.z)((function(n) {
                            n && h.e.contestRankingPunishInfoClick({
                                contest_is_virtual: String(I),
                                contest_is_ongoing: String(O)
                            })
                        })),
                        X = (0, j.t)({
                            contestSlug: null !== R && void 0 !== R ? R : "",
                            userSlug: f,
                            questionSlug: y,
                            dataRegion: g
                        }),
                        D = (0, a.useCallback)((function(n) {
                            y && f && (n.preventDefault(), n.stopPropagation(), V({
                                questionSlug: y,
                                username: f
                            }), X())
                        }), [y, f, V, X]);
                    return (0, i.jsx)(U, {
                        className: (0, c.yI)("min-w-[180px] p-2", C),
                        children: (0, i.jsx)(B, {
                            username: null !== d && void 0 !== d ? d : "",
                            lang: null !== (N = null === t || void 0 === t ? void 0 : t.lang) && void 0 !== N ? N : "",
                            submissionId: null === t || void 0 === t ? void 0 : t.submissionId,
                            dataRegion: null !== g && void 0 !== g ? g : "",
                            children: (0, i.jsxs)("div", {
                                className: (0, c.yI)("flex h-full w-full items-center gap-2 rounded-md px-2", {
                                    "bg-fill-tertiary": (null !== (w = null === t || void 0 === t ? void 0 : t.failCount) && void 0 !== w ? w : 0) > 0,
                                    "cursor-pointer": !!(null === t || void 0 === t ? void 0 : t.submissionId),
                                    "ranking-guide-anchor": !!(null === t || void 0 === t ? void 0 : t.submissionId) && !p
                                }),
                                children: [L, t && !!v && (0, i.jsx)("div", {
                                    children: Z(t.date, v)
                                }), !!(null === t || void 0 === t ? void 0 : t.failCount) && (0, i.jsx)(x.u, {
                                    label: "".concat(null === t || void 0 === t ? void 0 : t.failCount).concat(_("bugTipSuffix")),
                                    placement: "top",
                                    onOpenChange: E,
                                    children: (0, i.jsxs)("div", {
                                        className: "text-sd-red-400 flex items-center",
                                        children: [(0, i.jsx)(m.e, {
                                            variant: "12px",
                                            padding: "square",
                                            icon: l.QLU
                                        }), (0, i.jsxs)("div", {
                                            children: [5 * (null === t || void 0 === t ? void 0 : t.failCount), "min"]
                                        })]
                                    })
                                }), k && t ? (0, i.jsx)(m.e, {
                                    icon: r.aQp,
                                    onClick: D,
                                    className: "cursor-pointer"
                                }) : null]
                            })
                        })
                    })
                },
                sn = function(n) {
                    var e = n.rankingData,
                        t = n.contestData,
                        s = n.className;
                    return (0, i.jsx)(U, {
                        className: (0, c.yI)("w-[120px] flex-none gap-1 p-0 px-4", s),
                        children: t.questions.map((function(n) {
                            return (0, i.jsx)(A.n, {
                                active: !!(null === e || void 0 === e ? void 0 : e.submissions[n.questionId])
                            }, n.questionId)
                        }))
                    })
                }
        },
        22902: function(n, e, t) {
            t.d(e, {
                C: function() {
                    return g
                },
                v: function() {
                    return x
                }
            });
            var i = t(85893),
                s = t(68779),
                a = t(50576),
                o = t(68652),
                r = t(11321),
                l = t(67294),
                c = t(12922),
                u = t(134),
                d = t(93002),
                f = function(n) {
                    var e = n.className;
                    return (0, i.jsx)("svg", {
                        width: "9",
                        height: "6",
                        viewBox: "0 0 9 6",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: e,
                        children: (0, i.jsx)("path", {
                            d: "M5.26562 0.734375L8.26562 3.73438C8.47656 3.94531 8.54688 4.27344 8.42969 4.55469C8.3125 4.83594 8.03125 5.02344 7.75 5.02344H1.75C1.44531 5.02344 1.16406 4.83594 1.04688 4.55469C0.929688 4.27344 1 3.94531 1.21094 3.73438L4.21094 0.734375C4.49219 0.429688 4.98438 0.429688 5.26562 0.734375Z",
                            fill: "currentColor"
                        })
                    })
                },
                g = function(n) {
                    var e = n.children,
                        t = n.className;
                    return (0, i.jsx)("div", {
                        className: (0, c.yI)("text-text-secondary flex h-[50px] w-[94px] flex-none items-center p-4 pl-7 font-medium", t),
                        children: e
                    })
                },
                v = function(n) {
                    var e = n.rankingData,
                        t = n.className,
                        s = n.isSelf,
                        r = n.index,
                        u = n.isContestOngoing,
                        d = (0, l.useState)(!1),
                        g = d[0],
                        v = d[1],
                        x = (0, l.useState)(e),
                        m = x[0],
                        p = x[1],
                        h = 30 * r;
                    return (0, l.useEffect)((function() {
                        (0, a.Z)(e, m) || (u ? (v(!0), setTimeout((function() {
                            v(!1), p((0, o.Z)(e))
                        }), 500 + h)) : p((0, o.Z)(e)))
                    }), [e]), (0, i.jsx)("div", {
                        className: (0, c.yI)("even:bg-fill-quaternary text-text-primary flex h-[50px] w-[94px] flex-none gap-2 overflow-hidden rounded-l-lg font-medium", {
                            "from-ranking-primary/0 to-ranking-secondary/20 relative bg-gradient-to-b": s
                        }, t),
                        children: (0, i.jsx)("div", {
                            className: (0, c.yI)("flex h-[50px] w-full items-center gap-2 p-4 pl-3 pr-5", "transition-all duration-500 ease-out", {
                                "translate-y-[50px] opacity-0": g
                            }),
                            style: {
                                transitionDelay: g ? "".concat(h, "ms") : ""
                            },
                            children: m ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "w-2",
                                    children: m.up && (0, i.jsx)(f, {
                                        className: "text-sd-timer-green w-full"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: (0, c.yI)({
                                        "bg-[linear-gradient(180deg,hsl(var(--ranking-secondary))_7.5%,hsl(var(--ranking-primary))_84%)] bg-clip-text font-bold text-transparent": m.rank <= 2
                                    }),
                                    children: m.rank + 1
                                })]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "w-2"
                                }), (0, i.jsx)("div", {
                                    className: "bg-fill-quaternary h-[4px] w-[20px] rounded-full"
                                })]
                            })
                        })
                    })
                },
                x = function(n) {
                    var e = n.rankingsData,
                        t = n.contestData,
                        a = n.myRanking,
                        o = n.isDetail,
                        l = n.page,
                        f = n.isContestOngoing,
                        x = n.hideBody,
                        m = n.rankingRegion,
                        p = n.ongoingStatus,
                        h = n.myRankingIndex,
                        C = (0, r.$G)("contest", {
                            keyPrefix: "rankingPage"
                        }).t;
                    return (0, i.jsxs)("div", {
                        className: "flex w-[94px] flex-none flex-col",
                        children: [o && (0, i.jsxs)(g, {
                            className: (0, c.yI)("flex items-center gap-0.5", {
                                "opacity-0": !t.questions.length
                            }),
                            children: [(0, i.jsx)("div", {
                                children: C("rank")
                            }), (0, i.jsx)(d.Q, {
                                contestData: t,
                                ongoingStatus: p,
                                children: (0, i.jsx)(u.e, {
                                    variant: "12px",
                                    padding: "square",
                                    icon: s.sqG
                                })
                            })]
                        }), o && !!a && (0, i.jsx)(v, {
                            rankingData: a,
                            isSelf: !0,
                            index: 0,
                            isContestOngoing: f,
                            className: (0, c.yI)("transition-opacity", {
                                "opacity-0": x
                            })
                        }), e.map((function(n, e) {
                            return (0, i.jsx)(v, {
                                rankingData: n,
                                isSelf: !o && e === h,
                                index: e,
                                isContestOngoing: f,
                                className: (0, c.yI)("transition-opacity", {
                                    "opacity-0": x
                                })
                            }, "".concat(m, "-").concat(l, "-").concat(e))
                        }))]
                    })
                }
        },
        53444: function(n, e, t) {
            t.d(e, {
                T: function() {
                    return R
                }
            });
            var i = t(85893),
                s = t(11163),
                a = t(68652),
                o = t(11321),
                r = t(67294),
                l = t(76831),
                c = t(69485),
                u = t(12922),
                d = t(26622),
                f = t(37605),
                g = t(13540),
                v = t(70341),
                x = t(68779),
                m = t(50576),
                p = t(40791),
                h = t(62758),
                C = t(134),
                k = t(82680),
                y = t(50632),
                _ = t(70786),
                S = t(15363),
                j = function(n) {
                    var e = n.children,
                        t = n.className;
                    return (0, i.jsx)("div", {
                        className: (0, u.yI)("even:bg-fill-quaternary flex h-[50px] min-w-[fit-content] items-start rounded-r-lg", t),
                        children: e
                    })
                },
                L = function(n) {
                    var e = n.questions,
                        t = n.contestSlug,
                        s = n.className,
                        a = (0, o.$G)("contest", {
                            keyPrefix: "rankingPage"
                        }).t,
                        r = (0, S.I)(),
                        l = r.isContestOngoing,
                        u = r.isVirtualContest,
                        d = (0, c.z)((function() {
                            g.e.contestRankingQuestionClick({
                                contest_is_virtual: String(u),
                                contest_is_ongoing: String(l)
                            })
                        })),
                        f = (0, c.z)((function(n) {
                            n && g.e.contestRankingTimeInfoClick({
                                contest_is_virtual: String(u),
                                contest_is_ongoing: String(l)
                            })
                        }));
                    return (0, i.jsxs)(j, {
                        className: s,
                        children: [(0, i.jsx)(_.aK, {
                            children: a("name")
                        }), (0, i.jsx)(_.No, {
                            children: a("score")
                        }), (0, i.jsxs)(_.Dk, {
                            className: "flex items-center gap-0.5",
                            children: [(0, i.jsx)("div", {
                                children: a("finishTime")
                            }), (0, i.jsx)(h.u, {
                                className: "max-w-[240px]",
                                label: a("finishTimeTip"),
                                onOpenChange: f,
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(C.e, {
                                        variant: "12px",
                                        padding: "square",
                                        icon: x.sqG
                                    })
                                })
                            })]
                        }), e.map((function(n, e) {
                            return (0, i.jsx)(_.Gb, {
                                children: (0, i.jsxs)(p.r, {
                                    href: v.Hb.contestQuestion(t, n.titleSlug),
                                    isExternal: !0,
                                    onClick: d,
                                    children: [a("questionPrefix"), e + 1, " (", n.credit, ")"]
                                })
                            }, n.id)
                        }))]
                    })
                },
                N = function(n) {
                    var e, t, s, a, o = n.isContestOngoing,
                        r = n.rankingData,
                        l = n.contestData,
                        c = n.isSelf,
                        d = n.isDetail,
                        f = n.rankingRegion,
                        g = c || !l.isVirtual ? null === l || void 0 === l ? void 0 : l.startTime : null === l || void 0 === l ? void 0 : l.originStartTime,
                        v = Boolean(null === (e = (0, y.U5)()) || void 0 === e || null === (t = e.data) || void 0 === t || null === (s = t.userStatus) || void 0 === s ? void 0 : s.isSignedIn),
                        x = (null === (a = (0, k.q)()) || void 0 === a ? void 0 : a.data) && !o && v;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(_.QY, {
                            rankingData: r,
                            isSelf: c,
                            rankingRegion: f,
                            isDetail: d,
                            isVirtual: l.isVirtual
                        }), (0, i.jsx)(_.hM, {
                            score: null === r || void 0 === r ? void 0 : r.score,
                            isDetail: d,
                            className: (0, u.yI)({
                                "w-[80px] min-w-[none] max-w-[none] flex-none": !d
                            })
                        }), (0, i.jsx)(_.Pw, {
                            finishTime: null === r || void 0 === r ? void 0 : r.finishTime,
                            startTime: g,
                            className: (0, u.yI)({
                                "w-[100px] min-w-[none] max-w-[none] flex-none": !d
                            })
                        }), d ? null === l || void 0 === l ? void 0 : l.questions.map((function(n) {
                            var e;
                            return (0, i.jsx)(_.jg, {
                                username: null === r || void 0 === r ? void 0 : r.userStatus.username,
                                userSlug: null === r || void 0 === r ? void 0 : r.userStatus.userSlug,
                                submission: null === r || void 0 === r ? void 0 : r.submissions[n.questionId],
                                dataRegion: null === r || void 0 === r ? void 0 : r.region,
                                hasReplay: (null === r || void 0 === r || null === (e = r.replays) || void 0 === e ? void 0 : e[n.questionId]) && x,
                                questionSlug: n.titleSlug,
                                startTime: g,
                                isSelf: c
                            }, n.questionId)
                        })) : (0, i.jsx)(_.xK, {
                            rankingData: r,
                            contestData: l
                        })]
                    })
                },
                w = function(n) {
                    var e = n.rankingData,
                        t = n.contestData,
                        s = n.className,
                        o = n.isSelf,
                        l = n.index,
                        c = n.isDetail,
                        d = n.isContestOngoing,
                        f = n.rankingRegion,
                        g = (0, r.useState)(!1),
                        v = g[0],
                        x = g[1],
                        p = (0, r.useState)(e),
                        h = p[0],
                        C = p[1],
                        k = 30 * l;
                    return (0, r.useEffect)((function() {
                        (0, m.Z)(e, h) || (d ? (x(!0), setTimeout((function() {
                            x(!1), C((0, a.Z)(e))
                        }), 500 + k)) : C((0, a.Z)(e)))
                    }), [e]), (0, i.jsx)(j, {
                        className: (0, u.yI)("overflow-hidden", {
                            "from-ranking-primary/0 to-ranking-secondary/20 relative bg-gradient-to-b": o
                        }, s),
                        children: (0, i.jsx)("div", {
                            className: (0, u.yI)("flex h-[50px] w-full min-w-[fit-content] items-start", "transition-all duration-500 ease-out", {
                                "translate-y-[50px] opacity-0": v
                            }),
                            style: {
                                transitionDelay: v ? "".concat(k, "ms") : ""
                            },
                            children: (0, i.jsx)(N, {
                                isContestOngoing: d,
                                rankingData: h,
                                contestData: t,
                                isSelf: o,
                                isDetail: c,
                                rankingRegion: f
                            })
                        })
                    })
                },
                b = t(22902),
                O = t(68708),
                I = function(n) {
                    var e = n.animate,
                        t = n.width,
                        s = n.height,
                        a = n.strokeWidth,
                        o = void 0 === a ? 1 : a,
                        l = (0, r.useState)((0, O.Yu)())[0],
                        c = (0, r.useRef)(null);
                    return (0, r.useEffect)((function() {
                        var n, t;
                        e ? null === (n = c.current) || void 0 === n || n.beginElement() : null === (t = c.current) || void 0 === t || t.endElement()
                    }), [e]), (0, i.jsxs)("svg", {
                        width: t,
                        height: s,
                        viewBox: "0 0 ".concat(t, " ").concat(s),
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "absolute inset-0",
                        children: [(0, i.jsx)("defs", {
                            children: (0, i.jsxs)("linearGradient", {
                                id: "stroke-".concat(l),
                                x1: "0",
                                x2: "1",
                                y1: "0",
                                y2: "0",
                                gradientTransform: "rotate(-45, 0.5, 0.5)",
                                children: [(0, i.jsx)("animateTransform", {
                                    ref: c,
                                    attributeName: "gradientTransform",
                                    type: "rotate",
                                    from: "-45 0.5 0.5",
                                    to: "135 0.5 0.5",
                                    dur: "4s",
                                    repeatCount: "indefinite",
                                    begin: "indefinite"
                                }), (0, i.jsx)("stop", {
                                    offset: "0.0",
                                    stopColor: "hsl(var(--ranking-primary))",
                                    stopOpacity: "0"
                                }), (0, i.jsx)("stop", {
                                    offset: "0.25",
                                    stopColor: "hsl(var(--ranking-primary))"
                                }), (0, i.jsx)("stop", {
                                    offset: "0.5",
                                    stopColor: "hsl(var(--ranking-highlight))"
                                }), (0, i.jsx)("stop", {
                                    offset: "0.75",
                                    stopColor: "hsl(var(--ranking-primary))"
                                }), (0, i.jsx)("stop", {
                                    offset: "1.0",
                                    stopColor: "hsl(var(--ranking-primary))",
                                    stopOpacity: "0"
                                })]
                            })
                        }), (0, i.jsx)("rect", {
                            width: "".concat(Math.max(t - o, 0)),
                            height: "".concat(Math.max(s - o, 0)),
                            x: "".concat(o / 2),
                            y: "".concat(o / 2),
                            rx: "5",
                            ry: "5",
                            strokeWidth: "".concat(o),
                            stroke: "url(#".concat("stroke-".concat(l), ")"),
                            fill: "none"
                        })]
                    })
                },
                V = t(83427),
                R = function(n) {
                    var e, t, x = n.contestSlug,
                        m = n.contestInfo,
                        p = n.rankingInfo,
                        h = n.myRankingInfo,
                        C = n.ongoingStatus,
                        k = n.rankingRegion,
                        y = n.isDetail,
                        _ = n.className,
                        S = n.controlledPage,
                        j = n.setControlledPage,
                        N = (0, s.useRouter)(),
                        O = (0, o.$G)("contest", {
                            keyPrefix: "rankingPage"
                        }).t,
                        R = (0, r.useState)(null),
                        E = R[0],
                        X = R[1],
                        D = (0, l.a)(E),
                        G = D.width,
                        T = D.height,
                        B = (0, r.useState)(1),
                        A = B[0],
                        q = B[1],
                        H = null !== S && void 0 !== S ? S : A,
                        F = null !== j && void 0 !== j ? j : q,
                        P = C === f.H.NOT_START,
                        M = C === f.H.STARTED,
                        Z = !!(null === m || void 0 === m ? void 0 : m.isVirtual),
                        U = (0, r.useMemo)((function() {
                            var n = [];
                            if (M && !Z) {
                                var e, t, i = 25 * (H - 1);
                                n = null !== (t = null === p || void 0 === p || null === (e = p.rankings) || void 0 === e ? void 0 : e.slice(i, i + 25)) && void 0 !== t ? t : []
                            } else {
                                var s;
                                n = null !== (s = null === p || void 0 === p ? void 0 : p.rankings) && void 0 !== s ? s : []
                            }
                            var o = (n = (0, a.Z)(n)).length;
                            return n.length = 25, n.fill(void 0, o), n
                        }), [M, p, H, Z]),
                        Q = P || !p || !p.rankings.length,
                        z = null === h || void 0 === h ? void 0 : h.userStatus.userSlug,
                        $ = !Z && z && null !== (e = U.findIndex((function(n) {
                            return (null === n || void 0 === n ? void 0 : n.userStatus.userSlug) === z
                        }))) && void 0 !== e ? e : -1,
                        K = y || !y && -1 !== $,
                        W = (0, c.z)((function(n) {
                            g.e.contestRankingPaginationClick({
                                contest_is_virtual: String(Z),
                                contest_is_ongoing: String(M),
                                contest_component_location: y ? "detail" : "qd"
                            }), y ? N.push({
                                pathname: v.Hb.contestRanking(x, n),
                                query: {
                                    region: N.query.region
                                }
                            }, void 0, {
                                shallow: !0
                            }) : F(n)
                        }));
                    return m ? (0, i.jsxs)("div", {
                        className: (0, u.yI)("flex flex-col items-center", _),
                        children: [(0, i.jsxs)("div", {
                            className: "text-text-secondary relative flex w-full text-sm font-medium",
                            children: [(0, i.jsx)(b.v, {
                                rankingsData: U,
                                contestData: m,
                                myRanking: h,
                                isDetail: y,
                                page: H,
                                isContestOngoing: M,
                                hideBody: Q,
                                rankingRegion: k,
                                ongoingStatus: C,
                                myRankingIndex: $
                            }), (0, i.jsx)("div", {
                                className: "w-full overflow-x-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "flex min-w-[fit-content] flex-col",
                                    children: [y && (0, i.jsx)(L, {
                                        questions: m.questions,
                                        contestSlug: m.titleSlug,
                                        className: (0, u.yI)({
                                            "opacity-0": !m.questions.length
                                        })
                                    }), y && !!h && (0, i.jsx)(w, {
                                        rankingData: h,
                                        contestData: m,
                                        isSelf: !0,
                                        index: 0,
                                        isDetail: y,
                                        isContestOngoing: M,
                                        rankingRegion: k,
                                        className: (0, u.yI)("transition-opacity", {
                                            "opacity-0": Q
                                        })
                                    }), U.map((function(n, e) {
                                        return (0, i.jsx)(w, {
                                            rankingData: n,
                                            contestData: m,
                                            isSelf: !y && e === $,
                                            index: e,
                                            isDetail: y,
                                            isContestOngoing: M,
                                            rankingRegion: k,
                                            className: (0, u.yI)("transition-opacity", {
                                                "opacity-0": Q
                                            })
                                        }, "".concat(k, "-").concat(H, "-").concat(e))
                                    }))]
                                })
                            }), !!h && K && (0, i.jsx)("div", {
                                className: (0, u.yI)("pointer-events-none absolute h-[50px] w-full transition-opacity", {
                                    "top-[50px]": y,
                                    "opacity-0": Q
                                }),
                                ref: X,
                                style: y ? void 0 : {
                                    top: "".concat(50 * $, "px")
                                },
                                children: (0, i.jsx)(I, {
                                    width: null !== G && void 0 !== G ? G : 0,
                                    height: null !== T && void 0 !== T ? T : 0,
                                    animate: M
                                })
                            }), Q && (0, i.jsx)("div", {
                                className: "text-sd-muted-foreground pointer-events-none absolute left-0 top-0 flex h-[600px] w-full flex-col items-center justify-center gap-4 text-base",
                                children: p || P ? (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: "text-[46px] leading-[24px]",
                                        children: "\ud83e\udd1e"
                                    }), (0, i.jsx)("div", {
                                        children: O("emptyRankingPlaceholder")
                                    })]
                                }) : (0, i.jsx)(V.y, {
                                    className: "h-10 w-10"
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex h-[50px] w-full flex-none items-center justify-center py-1",
                            children: !!p && (0, i.jsx)(d.t, {
                                currentPage: H,
                                onChange: W,
                                totalItems: null !== (t = !Z && M ? null === p || void 0 === p ? void 0 : p.rankings.length : null === p || void 0 === p ? void 0 : p.userCount) && void 0 !== t ? t : 0,
                                maxPageItems: 6,
                                itemsPerPage: 25,
                                className: "gap-1.5 space-x-0",
                                arrowButtonClassName: "p-[5px]",
                                chevronClassName: "w-3.5 h-3.5",
                                pageItemClassName: "h-6 min-w-[24px] text-xs px-2 py-[3px] flex item-center justify-center",
                                activePageItemClassName: "dark:!bg-ranking-primary !bg-ranking-primary dark:!text-ranking-foreground !text-ranking-foreground"
                            })
                        })]
                    }) : null
                }
        },
        90579: function(n, e, t) {
            t.d(e, {
                m: function() {
                    return y
                }
            });
            var i = t(26042),
                s = t(69396),
                a = t(85945),
                o = t(11163),
                r = t(80129),
                l = t.n(r),
                c = t(67294),
                u = t(55201),
                d = t(15143),
                f = t(29065),
                g = t(37605),
                v = t(60086),
                x = t(56724),
                m = t(68708),
                p = t(70341),
                h = t(15363),
                C = v.BS.GLOBAL,
                k = [v.BS.LLM, v.BS.GLOBAL],
                y = function(n) {
                    var e = n.contestSlug,
                        t = n.pageFromRouter,
                        r = n.enabledContestInfo,
                        y = n.enabledRankingInfo,
                        _ = n.enabledMyRankingInfo,
                        S = (0, a.NL)(),
                        j = function() {
                            if (!(0, m.jU)()) return C;
                            var n = l().parse(window.location.search, {
                                ignoreQueryPrefix: !0
                            }).region;
                            return n && k.includes(n) ? n : C
                        }(),
                        L = (0, c.useState)(j),
                        N = L[0],
                        w = L[1],
                        b = (0, c.useState)(1),
                        O = b[0],
                        I = b[1],
                        V = (0, o.useRouter)(),
                        R = (0, x.$)(e),
                        E = R.data,
                        X = R.isLoading,
                        D = (0, c.useCallback)((function(n) {
                            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                t = (0, s.Z)((0, i.Z)({}, V.query), {
                                    region: n
                                });
                            null === t || void 0 === t || delete t.contestSlug, null === t || void 0 === t || delete t.page, V.replace({
                                pathname: V.asPath.replace(/\?.*$/, ""),
                                query: t
                            }, void 0, {
                                shallow: e
                            })
                        }), [V]),
                        G = (0, c.useCallback)((function(n) {
                            O > 1 ? V.push({
                                pathname: p.Hb.contestRanking(e, 1),
                                query: {
                                    region: n
                                }
                            }, void 0, {
                                shallow: !0
                            }) : D(n)
                        }), [e, D, O, V]);
                    (0, c.useEffect)((function() {
                        if (!X) return E || j !== v.BS.LLM ? void D(j) : D(C, !1)
                    }), [E, X]);
                    var T = N === v.BS.LLM;
                    (0, c.useEffect)((function() {
                        X || w(j)
                    }), [X, j]);
                    var B = (0, u.k)({
                            contestSlug: e,
                            enabled: r
                        }),
                        A = B.data,
                        q = B.isInitialLoading,
                        H = (0, g.D)(A),
                        F = (0, c.useRef)(H),
                        P = H === g.H.STARTED,
                        M = H === g.H.END,
                        Z = !!(null === A || void 0 === A ? void 0 : A.isVirtual),
                        U = (0, h.I)((function(n) {
                            return n
                        })),
                        Q = U.setContestSlug,
                        z = U.setIsVirtualContest,
                        $ = U.setIsContestOngoing;
                    (0, c.useEffect)((function() {
                        return Q(e)
                    }), [e, Q]), (0, c.useEffect)((function() {
                        return z(Z)
                    }), [Z, z]), (0, c.useEffect)((function() {
                        return $(P)
                    }), [P, $]);
                    var K = Z && !P,
                        W = (0, f.H)({
                            contestSlug: e,
                            region: N,
                            enabled: _
                        }).data,
                        Y = (0, d.l9)({
                            contestSlug: e,
                            region: N,
                            enabled: y && !Z && P && !T
                        }).data,
                        J = (0, d.pB)({
                            contestSlug: e,
                            region: N,
                            pagination: O,
                            enabled: y && (Z || M) && !T,
                            staleTime: K ? 0 : void 0
                        }).data,
                        nn = !Z && P ? Y : J;
                    return (0, c.useEffect)((function() {
                        T || (P && F.current === g.H.NOT_START && S.invalidateQueries(["contest-info"]), M && F.current === g.H.STARTED && (S.invalidateQueries(["contest-ranking-page"]), S.invalidateQueries(["contest-my-ranking"])), F.current = H)
                    }), [H]), (0, c.useEffect)((function() {
                        if (Z && P && !T) {
                            var n = setInterval((function() {
                                S.invalidateQueries(["contest-my-ranking"])
                            }), 6e4);
                            return function() {
                                return clearInterval(n)
                            }
                        }
                    }), [Z, P, S, T]), (0, c.useEffect)((function() {
                        t && t > 0 && I(t)
                    }), [t]), {
                        isLoading: q,
                        contestInfo: A,
                        myRankingInfo: W,
                        rankingInfo: nn,
                        ongoingStatus: H,
                        setRankingRegion: G,
                        rankingRegion: N,
                        setPage: I,
                        page: O
                    }
                }
        },
        60086: function(n, e, t) {
            var i, s, a;
            t.d(e, {
                    BS: function() {
                        return a
                    },
                    Fr: function() {
                        return i
                    },
                    Lz: function() {
                        return s
                    }
                }),
                function(n) {
                    n.LEGENDARY = "legendary"
                }(i || (i = {})),
                function(n) {
                    n.SMALL = "SMALL", n.MEDIUM = "MEDIUM", n.LARGE = "LARGE"
                }(s || (s = {})),
                function(n) {
                    n.GLOBAL = "global_v2", n.LOCAL = "local_v2", n.LLM = "llm"
                }(a || (a = {}))
        },
        55201: function(n, e, t) {
            t.d(e, {
                k: function() {
                    return o
                }
            });
            var i = t(36492),
                s = t(8276),
                a = function(n) {
                    var e, t, i, s, a, o;
                    return {
                        id: n.contest.id,
                        title: n.contest.title,
                        titleSlug: n.contest.title_slug,
                        cardImg: null !== (i = n.contest.card_img) && void 0 !== i ? i : void 0,
                        primaryColor: n.contest.primary_color,
                        secondaryColor: null !== (s = n.contest.secondary_color) && void 0 !== s ? s : void 0,
                        backgroundColors: [null !== (a = null === (e = n.contest.background_colors) || void 0 === e ? void 0 : e[0]) && void 0 !== a ? a : "#fffc43", null !== (o = null === (t = n.contest.background_colors) || void 0 === t ? void 0 : t[1]) && void 0 !== o ? o : "#ffd479"],
                        duration: n.contest.duration,
                        startTime: n.contest.start_time,
                        isVirtual: n.contest.is_virtual,
                        originStartTime: n.contest.origin_start_time,
                        currentTime: n.current_timestamp,
                        currentTimeDelta: n.current_timestamp - Date.now() / 1e3,
                        userCount: n.user_num,
                        rankingUpdated: n.ranking_updated,
                        unrated: n.unrated,
                        questions: n.questions.map((function(n) {
                            return {
                                id: n.id,
                                questionId: n.question_id,
                                credit: n.credit,
                                title: n.title,
                                englishTitle: n.english_title,
                                titleSlug: n.title_slug
                            }
                        }))
                    }
                },
                o = function(n) {
                    var e = n.contestSlug,
                        t = n.enabled;
                    return (0, i.a)(["contest-info", {
                        contestSlug: e
                    }], (function() {
                        return s.x1.request(s.Hv.contestInfo(e)).then(a)
                    }), {
                        enabled: t
                    })
                }
        },
        29065: function(n, e, t) {
            t.d(e, {
                H: function() {
                    return d
                },
                k: function() {
                    return f
                }
            });
            var i = t(10253),
                s = t(36492),
                a = t(85945),
                o = t(67294),
                r = t(73534),
                l = t(8276),
                c = t(75117),
                u = function(n) {
                    var e, t, s, a, o, r, l;
                    return n.my_rank && void 0 !== n.my_rank.rank ? {
                        rank: n.my_rank.rank,
                        up: !1,
                        userStatus: {
                            username: n.my_rank.real_name || n.my_rank.username,
                            userSlug: null !== (s = n.my_rank.user_slug) && void 0 !== s ? s : n.my_rank.username,
                            avatar: n.my_rank.avatar_url,
                            color: null !== (a = n.my_rank.color) && void 0 !== a ? a : void 0,
                            badge: n.my_rank.medal ? {
                                name: null === (e = n.my_rank.medal) || void 0 === e ? void 0 : e.name,
                                icon: null === (t = n.my_rank.medal) || void 0 === t ? void 0 : t.icon
                            } : void 0
                        },
                        region: n.my_rank.data_region,
                        countryCode: n.my_rank.country_code,
                        countryName: null !== (o = n.my_rank.country_name) && void 0 !== o ? o : "",
                        score: n.my_rank.score,
                        finishTime: n.my_rank.finish_time,
                        submissions: Object.entries(null !== (r = null === n || void 0 === n ? void 0 : n.my_submission) && void 0 !== r ? r : {}).reduce((function(n, e) {
                            var t = (0, i.Z)(e, 2),
                                s = t[0],
                                a = t[1];
                            return n[s] = {
                                id: a.id,
                                date: a.date,
                                submissionId: a.submission_id,
                                failCount: a.fail_count,
                                lang: a.lang || ""
                            }, n
                        }), {}),
                        replays: null !== (l = n.my_rank.replays) && void 0 !== l ? l : {}
                    } : null
                },
                d = function(n) {
                    var e = n.contestSlug,
                        t = n.region,
                        i = n.enabled;
                    return (0, s.a)(["contest-my-ranking", {
                        contestSlug: e,
                        region: t
                    }], (function() {
                        return l.x1.request(l.Hv.contestMyRanking(e, t)).then(u)
                    }), {
                        enabled: i
                    })
                },
                f = function(n) {
                    var e = n.contestSlug,
                        t = n.region,
                        s = n.userSlug,
                        l = n.enabled,
                        u = (0, a.NL)(),
                        d = (0, o.useState)(0),
                        f = d[0],
                        g = d[1];
                    return (0, o.useEffect)((function() {
                        if (e && s && l) {
                            var n = new WebSocket("wss://".concat(c.ew, "/myranking/").concat(e, "/").concat(s, "/?region=").concat(t));
                            return n.onclose = function(n) {
                                    4e3 !== n.code && f < 5 && setTimeout((function() {
                                        return g((function(n) {
                                            return n + 1
                                        }))
                                    }), 3e3)
                                }, n.onmessage = function(n) {
                                    var s = (0, r.a)(n.data);
                                    void 0 !== s.rank && null !== s.rank && u.setQueryData(["contest-my-ranking", {
                                        contestSlug: e,
                                        region: t
                                    }], (function() {
                                        return function(n) {
                                            var e, t, s;
                                            return {
                                                rank: n.rank,
                                                up: n.up,
                                                userStatus: {
                                                    username: n.username,
                                                    userSlug: n.user_slug,
                                                    avatar: n.avatar_url,
                                                    color: null !== (e = n.color) && void 0 !== e ? e : void 0,
                                                    badge: n.medal ? {
                                                        name: n.medal.name,
                                                        icon: n.medal.icon
                                                    } : void 0
                                                },
                                                region: n.data_region,
                                                countryCode: n.country_code,
                                                countryName: null !== (t = n.country_name) && void 0 !== t ? t : "",
                                                score: n.score,
                                                finishTime: n.finish_time,
                                                replays: null !== (s = n.replays) && void 0 !== s ? s : {},
                                                submissions: Object.entries(n.submissions).reduce((function(n, e) {
                                                    var t = (0, i.Z)(e, 2),
                                                        s = t[0],
                                                        a = t[1];
                                                    return n[s] = {
                                                        id: a.id,
                                                        date: a.date,
                                                        submissionId: a.submission_id,
                                                        failCount: a.fail_count,
                                                        lang: a.lang || ""
                                                    }, n
                                                }), {})
                                            }
                                        }(s)
                                    }))
                                },
                                function() {
                                    n.close(4e3)
                                }
                        }
                    }), [f, e, s, l, t, u]), (0, o.useEffect)((function() {
                        g(0)
                    }), [e, s, l, t]), null
                }
        },
        37605: function(n, e, t) {
            t.d(e, {
                D: function() {
                    return o
                },
                H: function() {
                    return i
                }
            });
            var i, s = t(67294),
                a = t(69485);
            ! function(n) {
                n[n.NOT_START = 0] = "NOT_START", n[n.STARTED = 1] = "STARTED", n[n.END = 2] = "END"
            }(i || (i = {}));
            var o = function(n) {
                var e = null !== n && void 0 !== n ? n : {},
                    t = e.currentTimeDelta,
                    o = e.startTime,
                    r = e.duration,
                    l = (0, s.useState)(void 0),
                    c = l[0],
                    u = l[1],
                    d = (0, a.z)((function() {
                        if (t && o && r) {
                            var n = Date.now() / 1e3 + t,
                                e = Math.floor(n - o);
                            u(e < 0 ? i.NOT_START : e < r ? i.STARTED : i.END)
                        }
                    }));
                return (0, s.useEffect)((function() {
                    d();
                    var n = setInterval(d, 1e3);
                    return function() {
                        return clearInterval(n)
                    }
                }), [t, o, r, d]), c
            }
        },
        15143: function(n, e, t) {
            t.d(e, {
                Bq: function() {
                    return x
                },
                l9: function() {
                    return g
                },
                pB: function() {
                    return v
                }
            });
            var i = t(26042),
                s = t(69396),
                a = t(10253),
                o = t(36492),
                r = t(85945),
                l = t(67294),
                c = t(8276),
                u = t(73534),
                d = t(75117),
                f = function(n) {
                    var e, t, i, s, o, r, l, c;
                    return n.total_rank ? {
                        userCount: null !== (i = null === n || void 0 === n ? void 0 : n.user_num) && void 0 !== i ? i : 0,
                        akStatus: {
                            akCount: null !== (s = null === n || void 0 === n || null === (e = n.ak_info) || void 0 === e ? void 0 : e.ak_num) && void 0 !== s ? s : 0,
                            akAvatars: null !== (o = null === n || void 0 === n || null === (t = n.ak_info) || void 0 === t ? void 0 : t.lastest_ak_avatars) && void 0 !== o ? o : []
                        },
                        rankings: n.total_rank.map((function(n) {
                            return {
                                rank: n.rank,
                                up: n.up,
                                userStatus: {
                                    username: n.username,
                                    userSlug: null !== (r = n.user_slug) && void 0 !== r ? r : n.username,
                                    avatar: n.avatar_url,
                                    color: null !== (l = n.color) && void 0 !== l ? l : void 0,
                                    badge: n.medal ? {
                                        name: n.medal.name,
                                        icon: n.medal.icon
                                    } : void 0
                                },
                                region: n.data_region,
                                countryCode: n.country_code,
                                countryName: null !== (c = n.country_name) && void 0 !== c ? c : "",
                                score: n.score,
                                finishTime: n.finish_time,
                                submissions: Object.entries(n.submissions).reduce((function(n, e) {
                                    var t = (0, a.Z)(e, 2),
                                        i = t[0],
                                        s = t[1];
                                    return n[i] = {
                                        id: s.id,
                                        date: s.date,
                                        submissionId: s.submission_id,
                                        failCount: s.fail_count,
                                        lang: s.lang || ""
                                    }, n
                                }), {}),
                                replays: n.replays
                            }
                        }))
                    } : {
                        userCount: 0,
                        akStatus: {
                            akCount: 0,
                            akAvatars: []
                        },
                        rankings: []
                    }
                },
                g = function(n) {
                    var e = n.contestSlug,
                        t = n.region,
                        i = n.enabled;
                    return (0, o.a)(["contest-ranking-tops", {
                        contestSlug: e,
                        region: t
                    }], (function() {
                        return c.x1.request(c.Hv.contestRankingTop({
                            contestTitleSlug: e,
                            region: t
                        })).then(f)
                    }), {
                        enabled: i
                    })
                },
                v = function(n) {
                    var e = n.contestSlug,
                        t = n.region,
                        i = n.pagination,
                        s = void 0 === i ? 1 : i,
                        a = n.enabled,
                        r = n.staleTime;
                    return (0, o.a)(["contest-ranking-page", {
                        contestSlug: e,
                        region: t,
                        pagination: s
                    }], (function() {
                        return c.x1.request(c.Hv.contestRankingPage({
                            contestTitleSlug: e,
                            region: t,
                            pagination: s
                        })).then(f)
                    }), {
                        enabled: a,
                        staleTime: r
                    })
                },
                x = function(n) {
                    var e = n.contestSlug,
                        t = n.region,
                        a = n.enabled,
                        o = (0, r.NL)(),
                        c = (0, l.useState)(0),
                        g = c[0],
                        v = c[1];
                    return (0, l.useEffect)((function() {
                        if (e && a) {
                            var n = new WebSocket("wss://".concat(d.ew, "/ranking/").concat(e, "/?region=").concat(t));
                            return n.onclose = function(n) {
                                    4e3 !== n.code && g < 5 && setTimeout((function() {
                                        return v((function(n) {
                                            return n + 1
                                        }))
                                    }), 3e3)
                                }, n.onmessage = function(n) {
                                    var a, r = function(n) {
                                            var a, r = 25 * (n - 1);
                                            o.setQueryData(["contest-ranking-page", {
                                                contestSlug: e,
                                                region: t,
                                                pagination: n
                                            }], (function() {
                                                var n;
                                                return f((0, s.Z)((0, i.Z)({}, l), {
                                                    total_rank: null !== (a = null === l || void 0 === l || null === (n = l.total_rank) || void 0 === n ? void 0 : n.slice(r, r + 25)) && void 0 !== a ? a : []
                                                }))
                                            }))
                                        },
                                        l = (0, u.a)(n.data);
                                    if (l.total_rank) {
                                        var c;
                                        o.setQueryData(["contest-ranking-tops", {
                                            contestSlug: e,
                                            region: t
                                        }], (function() {
                                            return f(l)
                                        }));
                                        for (var d = null !== (c = null === l || void 0 === l || null === (a = l.total_rank) || void 0 === a ? void 0 : a.length) && void 0 !== c ? c : 0, g = Math.ceil(d / 25), v = 1; v < g + 1; v++) r(v)
                                    }
                                },
                                function() {
                                    n.close(4e3)
                                }
                        }
                    }), [g, e, a, t, o]), (0, l.useEffect)((function() {
                        v(0)
                    }), [e, a, t]), null
                }
        },
        82680: function(n, e, t) {
            t.d(e, {
                q: function() {
                    return a
                }
            });
            var i = t(63808),
                s = t(88525).rSB,
                a = function() {
                    return s(i.f6, {}, {
                        select: function(n) {
                            return !!n.enableRankingReplay
                        }
                    })
                }
        },
        56724: function(n, e, t) {
            t.d(e, {
                $: function() {
                    return o
                }
            });
            var i = t(88525),
                s = t(63808),
                a = function(n, e) {
                    if (!n) return !1;
                    var t = e.split("-"),
                        i = t[0],
                        s = t[2];
                    if (-1 === ["biweekly", "weekly"].indexOf(i)) return !1;
                    var a = ["leetcode.cn", "leetcode.com"].includes(window.location.host) ? {
                            biweekly: 147,
                            weekly: 430
                        } : {
                            biweekly: 120,
                            weekly: 400
                        },
                        o = a.biweekly,
                        r = a.weekly;
                    return !("biweekly" === i && Number(s) < o) && !("weekly" === i && Number(s) < r)
                },
                o = function(n) {
                    return (0, i.$ux)(s.f6, {}, {
                        select: function(e) {
                            return a(e.enableLlmRanking, n)
                        }
                    })
                }
        },
        72917: function(n, e, t) {
            t.d(e, {
                o: function() {
                    return S
                },
                t: function() {
                    return _
                }
            });
            var i = t(10253),
                s = t(85893),
                a = t(73582),
                o = t(17563),
                r = t(11163),
                l = t(67294),
                c = t(11321),
                u = t(134),
                d = t(83210),
                f = t(30366),
                g = t(96004),
                v = t(66247),
                x = t(12922),
                m = t(15363),
                p = t(89223),
                h = t(60086),
                C = "RANKING_REPLAY_REDIRECT_DO_NOT_SHOW_AGAIN",
                k = function(n) {
                    return "US" !== n
                },
                y = function(n, e, t, i) {
                    var s = o.stringify({
                        replayUsername: e,
                        replayQuestionSlug: t,
                        region: h.BS.GLOBAL
                    });
                    window.open("".concat("https://leetcode.cn", "/contest/").concat(n, "/ranking/").concat(i, "/?").concat(s), "_blank")
                },
                _ = function(n) {
                    var e = n.contestSlug,
                        t = n.userSlug,
                        i = n.questionSlug,
                        s = n.dataRegion,
                        a = (0, m.I)((function(n) {
                            return n.setReplayRedirectVisible
                        })),
                        o = (0, p.x)((function(n) {
                            return n.showModal
                        })),
                        l = (0, r.useRouter)().query;
                    return function() {
                        if (k(null !== s && void 0 !== s ? s : ""))
                            if ("true" === localStorage.getItem(C)) {
                                var n, r = null !== (n = l.page) && void 0 !== n ? n : "1";
                                y(e, null !== t && void 0 !== t ? t : "", null !== i && void 0 !== i ? i : "", r)
                            } else a(!0);
                        else o()
                    }
                },
                S = function(n) {
                    var e = n.contestSlug,
                        t = n.userSlug,
                        o = n.questionSlug,
                        p = (0, m.I)((function(n) {
                            return n.isReplayRedirectVisible
                        })),
                        h = (0, m.I)((function(n) {
                            return n.setReplayRedirectVisible
                        })),
                        k = (0, r.useRouter)().query,
                        _ = (0, c.$G)("common").t,
                        S = (0, i.Z)((0, v._)(C, !1), 2)[1],
                        j = (0, l.useState)(!1),
                        L = j[0],
                        N = j[1],
                        w = function(n) {
                            S(n), N(n)
                        },
                        b = function() {
                            h(!1)
                        },
                        O = function() {
                            b(), w(!1)
                        };
                    return {
                        RedirectModal: (0, g.tv)({
                            title: (0, s.jsxs)("div", {
                                className: "flex items-center gap-2.5",
                                children: [(0, s.jsx)(u.e, {
                                    icon: a.DBf,
                                    className: (0, x.yI)("text-sd-info h-4 w-4")
                                }), (0, s.jsx)("span", {
                                    children: _("codeReplay.title")
                                })]
                            }),
                            visible: p,
                            onCancel: O,
                            onOk: function() {},
                            okButton: (0, s.jsx)(d.z, {
                                variant: "info",
                                className: "ml-2",
                                onClick: function() {
                                    var n;
                                    b();
                                    var i = null !== (n = k.page) && void 0 !== n ? n : "1";
                                    y(e, t, o, i)
                                },
                                children: _("confirm")
                            }),
                            cancelButton: (0, s.jsx)(d.z, {
                                variant: "outline",
                                onClick: O,
                                children: _("cancel")
                            }),
                            modalClass: "w-[500px] space-y-2",
                            content: (0, s.jsxs)("div", {
                                className: "flex flex-col gap-6 p-4 pt-0",
                                children: [(0, s.jsx)("span", {
                                    children: _("codeReplay.redirectContent")
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, s.jsx)(f.X, {
                                        checked: L,
                                        onCheckedChange: function(n) {
                                            return w(n)
                                        }
                                    }), " ", (0, s.jsx)("span", {
                                        children: _("codeReplay.doNotShowAgain")
                                    })]
                                })]
                            })
                        }).modalElement
                    }
                }
        },
        80183: function(n, e, t) {
            t.d(e, {
                _: function() {
                    return a
                }
            });
            var i = t(85893),
                s = t(12922),
                a = function(n) {
                    var e = n.percentage,
                        t = n.size,
                        a = void 0 === t ? "md" : t,
                        o = n.customThickness,
                        r = n.variant,
                        l = void 0 === r ? "default" : r,
                        c = n.lineCap,
                        u = void 0 === c ? "round" : c,
                        d = n.className,
                        f = n.barClassName,
                        g = n.bgClassName,
                        v = n.children,
                        x = Math.max(Math.min(e, 100), 0),
                        m = 11;
                    switch (a) {
                        case "sm":
                            m = 12.5;
                            break;
                        case "lg":
                            m = 5
                    }
                    m = null !== o && void 0 !== o ? o : m;
                    var p = 2.64 * x;
                    return (0, i.jsxs)("div", {
                        className: (0, s.yI)("relative flex items-center justify-center", {
                            "h-3 w-3": "sm" === a,
                            "h-4.5 w-4.5": "md" === a,
                            "h-[100px] w-[100px]": "lg" === a
                        }, d),
                        children: [(0, i.jsxs)("svg", {
                            viewBox: "0 0 100 100",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "absolute left-0 top-0 h-full w-full fill-transparent",
                            style: {
                                strokeWidth: m
                            },
                            children: [(0, i.jsx)("defs", {
                                children: (0, i.jsxs)("linearGradient", {
                                    x1: "1",
                                    y1: "0",
                                    x2: "0",
                                    y2: "0",
                                    id: "gradientProgressCircleInfo",
                                    children: [(0, i.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#007AFF"
                                    }), (0, i.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#73B6FF"
                                    })]
                                })
                            }), (0, i.jsx)("circle", {
                                cx: 50,
                                cy: 50,
                                r: 42,
                                className: (0, s.yI)("stroke-sd-primary/20", g)
                            }), (0, i.jsx)("circle", {
                                cx: 50,
                                cy: 50,
                                r: 42,
                                className: (0, s.yI)({
                                    "stroke-sd-primary": "default" === l,
                                    "stroke-[url(#gradientProgressCircleInfo)]": "info" === l,
                                    "stroke-sd-easy": "easy" === l,
                                    "stroke-sd-medium": "medium" === l,
                                    "stroke-sd-hard": "hard" === l
                                }, f),
                                style: {
                                    strokeLinecap: "flat" === u || 0 === x ? "initial" : "round",
                                    strokeDasharray: "".concat(p, " ").concat(264 - p),
                                    strokeDashoffset: 66
                                }
                            })]
                        }), v]
                    })
                }
        },
        2013: function(n, e, t) {
            t.d(e, {
                bK: function() {
                    return a
                },
                m7: function() {
                    return s
                }
            });
            var i = t(29815),
                s = function(n, e) {
                    return {
                        countryName: n,
                        countryCode: e
                    }
                },
                a = function(n) {
                    var e, t = n.toUpperCase().split("").map((function(n) {
                        return 127397 + n.charCodeAt(0)
                    }));
                    return (e = String).fromCodePoint.apply(e, (0, i.Z)(t))
                }
        },
        13540: function(n, e, t) {
            t.d(e, {
                e: function() {
                    return a
                }
            });
            var i = t(8183),
                s = t(23025),
                a = {
                    contestBannerClickClick: function() {
                        var n = {
                            key: "contest_banner_click_click",
                            data: {}
                        };
                        i.V[s.X.GIO](n), i.V[s.X.GA4](n), i.V[s.X.CONSOLE](n), i.V[s.X.SELF_DB](n)
                    },
                    contestEasterEggClick: function() {
                        var n = {
                            key: "contest_easter_egg_click",
                            data: {}
                        };
                        i.V[s.X.GIO](n), i.V[s.X.GA4](n), i.V[s.X.CONSOLE](n), i.V[s.X.SELF_DB](n)
                    },
                    contestMainContestsClick: function(n) {
                        var e = {
                            key: "contest_main_contests_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestFeaturedContestsClick: function(n) {
                        var e = {
                            key: "contest_featured_contests_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestSponsorLinkClick: function() {
                        var n = {
                            key: "contest_sponsor_link_click",
                            data: {}
                        };
                        i.V[s.X.GIO](n), i.V[s.X.GA4](n), i.V[s.X.CONSOLE](n), i.V[s.X.SELF_DB](n)
                    },
                    contestPastContestsTabClick: function() {
                        var n = {
                            key: "contest_past_contests_tab_click",
                            data: {}
                        };
                        i.V[s.X.GIO](n), i.V[s.X.GA4](n), i.V[s.X.CONSOLE](n), i.V[s.X.SELF_DB](n)
                    },
                    contestPastContestClick: function(n) {
                        var e = {
                            key: "contest_past_contest_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestMyContestsTabClick: function() {
                        var n = {
                            key: "contest_my_contests_tab_click",
                            data: {}
                        };
                        i.V[s.X.GIO](n), i.V[s.X.GA4](n), i.V[s.X.CONSOLE](n), i.V[s.X.SELF_DB](n)
                    },
                    contestMyContestClick: function(n) {
                        var e = {
                            key: "contest_my_contest_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestVirtualContestButtonClick: function(n) {
                        var e = {
                            key: "contest_virtual_contest_button_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestVirtualStartClick: function(n) {
                        var e = {
                            key: "contest_virtual_start_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestVirtualResumeClick: function(n) {
                        var e = {
                            key: "contest_virtual_resume_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestMyContestsFilterClick: function(n) {
                        var e = {
                            key: "contest_my_contests_filter_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestGlobalRankingUserClick: function(n) {
                        var e = {
                            key: "contest_global_ranking_user_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestGlobalRankingViewMoreClick: function() {
                        var n = {
                            key: "contest_global_ranking_view_more_click",
                            data: {}
                        };
                        i.V[s.X.GIO](n), i.V[s.X.GA4](n), i.V[s.X.CONSOLE](n), i.V[s.X.SELF_DB](n)
                    },
                    contestPastContestsPaginationClick: function(n) {
                        var e = {
                            key: "contest_past_contests_pagination_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestMyContestsPaginationClick: function(n) {
                        var e = {
                            key: "contest_my_contests_pagination_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestCalendarClick: function(n) {
                        var e = {
                            key: "contest_calendar_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingPageExposure: function(n) {
                        var e = {
                            key: "contest_ranking_page_exposure",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingQuestionClick: function(n) {
                        var e = {
                            key: "contest_ranking_question_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingRankInfoClick: function(n) {
                        var e = {
                            key: "contest_ranking_rank_info_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingTimeInfoClick: function(n) {
                        var e = {
                            key: "contest_ranking_time_info_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingPunishInfoClick: function(n) {
                        var e = {
                            key: "contest_ranking_punish_info_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingCodeClick: function(n) {
                        var e = {
                            key: "contest_ranking_code_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingReportClick: function(n) {
                        var e = {
                            key: "contest_ranking_report_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingPaginationClick: function(n) {
                        var e = {
                            key: "contest_ranking_pagination_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestRankingUserClick: function(n) {
                        var e = {
                            key: "contest_ranking_user_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestQdPanelExposure: function(n) {
                        var e = {
                            key: "contest_qd_panel_exposure",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestQdPanelRankingDetailClick: function(n) {
                        var e = {
                            key: "contest_qd_panel_ranking_detail_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestLlmRankingExposure: function(n) {
                        var e = {
                            key: "contest_llm_ranking_exposure",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestLlmRankingTabClick: function(n) {
                        var e = {
                            key: "contest_llm_ranking_tab_click",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestLlmAcLangExposure: function(n) {
                        var e = {
                            key: "contest_llm_ac_lang_exposure",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    },
                    contestLlmQuestionExposure: function(n) {
                        var e = {
                            key: "contest_llm_question_exposure",
                            data: n
                        };
                        i.V[s.X.GIO](e), i.V[s.X.GA4](e), i.V[s.X.CONSOLE](e), i.V[s.X.SELF_DB](e)
                    }
                }
        }
    }
]);