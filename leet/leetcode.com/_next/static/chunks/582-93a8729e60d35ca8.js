"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [582], {
        92127: function(e, r, t) {
            t.d(r, {
                a: function() {
                    return u
                }
            });
            var n = t(26042),
                i = t(69396),
                l = t(67294),
                s = t(85945),
                a = t(88525),
                o = t(63808),
                u = function() {
                    var e = (0, s.NL)(),
                        r = (0, l.useCallback)((function(r) {
                            e.setQueriesData(a.g5q.getKey({
                                surveySlug: r
                            }), {
                                showSurvey: !1
                            })
                        }), [e]);
                    return (0, i.Z)((0, n.Z)({}, (0, a.zNW)(o.f6)), {
                        completeSurvey: r
                    })
                }
        },
        96244: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return u
                }
            });
            var n = t(26042),
                i = t(69396),
                l = t(88525),
                s = t(63808),
                a = t(73534),
                o = function(e) {
                    var r = e.surveyV2;
                    if (!r.showSurvey) return {
                        showSurvey: !1
                    };
                    var t, n = (0, a.a)(r.surveyJson);
                    return n ? {
                        showSurvey: !0,
                        surveyJson: n,
                        leetcoinAmount: null !== (t = null === r || void 0 === r ? void 0 : r.leetcoinAmount) && void 0 !== t ? t : 10
                    } : {
                        showSurvey: !1
                    }
                },
                u = function(e, r) {
                    return (0, l.g5q)(s.f6, {
                        surveySlug: e
                    }, (0, i.Z)((0, n.Z)({}, r), {
                        select: o
                    }))
                }
        },
        4758: function(e, r, t) {
            t.d(r, {
                HK: function() {
                    return s
                },
                y6: function() {
                    return l
                }
            });
            var n = t(34275),
                i = t(75117);
            var l, s = function(e) {
                var r, t, l = (0, n.B)().tz(i.aB),
                    s = new Date(l.year(), l.month(), l.date());
                return r = e, t = s, (0, n.B)(r).isSame(t, "month") && function(e, r) {
                    return (0, n.B)(e).isSame(r, "year")
                }(e, s)
            };
            ! function(e) {
                e.WeeklyQuestion = "weekly-question", e.DailyQuestion = "daily-question"
            }(l || (l = {}))
        },
        61306: function(e, r, t) {
            t.d(r, {
                n: function() {
                    return M
                }
            });
            var n, i = t(99534),
                l = t(85893),
                s = t(11321),
                a = t(67294),
                o = t(12922),
                u = t(60477),
                c = t(385),
                d = t(15371),
                f = t(59564),
                p = function(e) {
                    var r = e.closeDelay,
                        t = void 0 === r ? 3e3 : r,
                        n = e.onClose,
                        i = e.leetCoinsReward,
                        u = e.className,
                        c = (0, s.$G)("common", {
                            keyPrefix: "survey"
                        }).t;
                    return (0, a.useEffect)((function() {
                        var e = setTimeout((function() {
                            return n()
                        }), t);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [t, n]), (0, l.jsxs)("div", {
                        className: (0, o.yI)("flex items-center justify-between", "w-[366px] rounded-lg border-[1px] border-solid p-4", d.Cj.divider4, d.Cj.bgLayer3, u),
                        children: [(0, l.jsx)("div", {
                            className: (0, o.yI)("text-xs font-medium", d.Cj.label1),
                            children: c("thanksMsg")
                        }), (0, l.jsx)("div", {
                            className: (0, o.yI)("text-sm font-medium leading-[22px]", d.Cj.labelBrandOrange),
                            children: i && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("img", {
                                    src: f.Z,
                                    className: "mr-2 inline-block h-4 w-4",
                                    alt: c("thanksMsg")
                                }), (0, l.jsx)("span", {
                                    children: "+".concat(i)
                                })]
                            })
                        })]
                    })
                },
                x = function(e) {
                    var r = e.question,
                        t = e.onNext,
                        n = e.className,
                        i = r.html;
                    return (0, a.useEffect)((function() {
                        return i ? void 0 : t()
                    }), [i, t]), (0, l.jsx)("div", {
                        className: (0, o.yI)("w-full", n),
                        children: (0, l.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: i
                            },
                            className: (0, o.yI)("", d.Cj.label1)
                        })
                    })
                },
                _ = t(14924),
                h = t(26042),
                v = t(69396),
                C = a.forwardRef((function(e, r) {
                    return (0, l.jsxs)("svg", (0, v.Z)((0, h.Z)({
                        width: "42",
                        height: "43",
                        viewBox: "0 0 42 43",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), {
                        children: [(0, l.jsx)("g", {
                            filter: "url(#filter0_di_15326_3236)",
                            children: (0, l.jsx)("circle", {
                                cx: "21",
                                cy: "17.9999",
                                r: "14.5385",
                                fill: "url(#paint0_radial_15326_3236)"
                            })
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M27.2031 22.5229C27.6314 23.0582 27.5156 23.8176 26.9447 24.2191C26.3737 24.6205 25.5637 24.512 25.1355 23.9767C24.9647 23.7633 24.5866 23.3934 24.0362 23.0181C23.1316 22.4014 22.115 22.0383 21.0001 22.0383C19.8852 22.0383 18.8687 22.4014 17.9641 23.0181C17.4137 23.3934 17.0355 23.7633 16.8648 23.9767C16.4366 24.512 15.6266 24.6205 15.0556 24.219C14.4846 23.8176 14.3689 23.0582 14.7971 22.5229C15.111 22.1306 15.6617 21.5918 16.4439 21.0585C17.7605 20.1609 19.2881 19.6153 21.0001 19.6153C22.7121 19.6153 24.2398 20.1609 25.5563 21.0585C26.3386 21.5918 26.8893 22.1306 27.2031 22.5229Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("circle", {
                            cx: "16.5578",
                            cy: "14.3654",
                            r: "2.01923",
                            fill: "#532E05"
                        }), (0, l.jsx)("circle", {
                            cx: "25.4424",
                            cy: "14.3654",
                            r: "2.01923",
                            fill: "#532E05"
                        }), (0, l.jsxs)("defs", {
                            children: [(0, l.jsxs)("filter", {
                                id: "filter0_di_15326_3236",
                                x: "9.53674e-06",
                                y: "0.230657",
                                width: "42",
                                height: "42.0002",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "3.23077"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "3.23077"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_15326_3236"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_15326_3236",
                                    result: "shape"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "0.807692"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.21154"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.42 0 0 0 0 0 0 0 0 0.1 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect2_innerShadow_15326_3236"
                                })]
                            }), (0, l.jsxs)("radialGradient", {
                                id: "paint0_radial_15326_3236",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(21 11.9363) rotate(90) scale(20.6021)",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#FFD391"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FFB24D"
                                })]
                            })]
                        })]
                    }))
                })),
                m = a.forwardRef((function(e, r) {
                    return (0, l.jsxs)("svg", (0, v.Z)((0, h.Z)({
                        width: "42",
                        height: "43",
                        viewBox: "0 0 42 43",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), {
                        children: [(0, l.jsx)("g", {
                            filter: "url(#filter0_di_15326_3268)",
                            children: (0, l.jsx)("circle", {
                                cx: "20.9999",
                                cy: "17.9999",
                                r: "14.5385",
                                fill: "url(#paint0_radial_15326_3268)"
                            })
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25.5101 11.4254C25.5101 11.4254 29.2638 11.113 30.842 11.8919C30.9265 11.9336 31.1971 12.0778 31.1999 12.2765L31.1978 12.3236L31.197 12.3305C31.1688 12.5587 30.9472 12.4903 30.029 12.3373C29.1108 12.1842 25.4129 12.5273 25.4129 12.5273C25.1153 12.5165 24.8827 12.2666 24.8934 11.969L24.8951 11.9414C24.9224 11.6291 25.1978 11.3981 25.5101 11.4254Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("ellipse", {
                            cx: "17.1205",
                            cy: "14.3918",
                            rx: "1.68065",
                            ry: "2.1843",
                            fill: "#532E05"
                        }), (0, l.jsx)("ellipse", {
                            cx: "26.4222",
                            cy: "16.0158",
                            rx: "1.68065",
                            ry: "2.1843",
                            fill: "#532E05"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.6502 8.85889C18.4779 8.85889 19.9287 9.73549 19.9595 10.4165C19.9722 10.695 19.6243 10.8323 19.374 10.7093C18.8346 10.4441 17.8913 10.0859 16.6502 10.0284C15.2793 9.96496 14.2717 10.87 13.7705 11.4503C13.6332 11.6093 13.3397 11.5447 13.3409 11.3347C13.3481 10.0416 14.8225 8.85889 16.6502 8.85889Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.8308 22.8263C16.8531 22.5917 17.0168 22.3962 17.2487 22.3543C17.8681 22.2427 19.1981 22.0945 20.9062 22.4289C22.6447 22.7693 24.0767 23.487 24.7278 23.8527C24.9561 23.981 25.0563 24.2489 24.9839 24.5005C24.8868 24.8382 24.5202 25.0205 24.1898 24.901C23.3686 24.6041 21.8646 24.0943 20.5689 23.841C19.1974 23.5729 18.0985 23.5036 17.4416 23.491C17.0876 23.4842 16.7973 23.1787 16.8308 22.8263Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.8488 21.6435C12.9021 21.6768 12.9522 21.7152 12.9983 21.758L13.1078 21.8598C13.6401 22.3545 13.787 23.1387 13.4696 23.7924L12.8525 25.0638L13.7641 25.1597C13.8757 25.1714 13.9855 25.1883 14.0933 25.2101C14.156 25.2063 14.2201 25.2076 14.2849 25.2144L20.5311 25.8709C21.1666 25.9377 21.6276 26.507 21.5608 27.1425C21.494 27.7779 20.9247 28.239 20.2893 28.1722L16.7777 27.8029C16.8671 28.1762 16.8956 28.5708 16.8532 28.9743C16.6528 30.8808 14.9449 32.2638 13.0385 32.0634L11.3948 31.8906C9.3976 31.6807 7.94873 29.8915 8.15864 27.8943L8.17592 27.7299C8.25479 26.9795 8.58443 26.3161 9.07282 25.8143L11.4823 21.959C11.7725 21.4945 12.3843 21.3533 12.8488 21.6435Z",
                            fill: "url(#paint1_radial_15326_3268)"
                        }), (0, l.jsxs)("defs", {
                            children: [(0, l.jsxs)("filter", {
                                id: "filter0_di_15326_3268",
                                x: "0.00142574",
                                y: "0.231426",
                                width: "41.9969",
                                height: "41.9971",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "3.23"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "3.23"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_15326_3268"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_15326_3268",
                                    result: "shape"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "0.81"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.21"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect2_innerShadow_15326_3268"
                                })]
                            }), (0, l.jsxs)("radialGradient", {
                                id: "paint0_radial_15326_3268",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(20.9999 11.9363) rotate(90) scale(20.6021)",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#FFD391"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FFB24D"
                                })]
                            }), (0, l.jsxs)("radialGradient", {
                                id: "paint1_radial_15326_3268",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(12.4394 25.114) rotate(94.2786) scale(7.52138 13.7666)",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#FFE5A4"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FFD193"
                                })]
                            })]
                        })]
                    }))
                })),
                j = a.forwardRef((function(e, r) {
                    return (0, l.jsxs)("svg", (0, v.Z)((0, h.Z)({
                        width: "42",
                        height: "43",
                        viewBox: "0 0 42 43",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), {
                        children: [(0, l.jsx)("g", {
                            filter: "url(#filter0_di_15326_3243)",
                            children: (0, l.jsx)("circle", {
                                cx: "20.9999",
                                cy: "17.9999",
                                r: "14.5385",
                                fill: "url(#paint0_radial_15326_3243)"
                            })
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.7969 22.3614C14.3686 21.8261 14.4844 21.0667 15.0553 20.6652C15.6263 20.2638 16.4363 20.3722 16.8645 20.9075C17.0353 21.1209 17.4134 21.4909 17.9639 21.8662C18.8684 22.4829 19.885 22.846 20.9999 22.846C22.1148 22.846 23.1313 22.4829 24.0359 21.8662C24.5863 21.4909 24.9645 21.1209 25.1352 20.9075C25.5634 20.3722 26.3734 20.2638 26.9444 20.6652C27.5154 21.0667 27.6311 21.8261 27.2029 22.3614C26.889 22.7537 26.3383 23.2924 25.5561 23.8258C24.2395 24.7234 22.7119 25.269 20.9999 25.269C19.2879 25.269 17.7602 24.7234 16.4437 23.8258C15.6614 23.2924 15.1107 22.7537 14.7969 22.3614Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.5475 16.3641C15.4379 16.3641 14.5383 15.4645 14.5383 14.3549C14.5383 13.2452 15.4379 12.3457 16.5475 12.3457H16.5676C17.6772 12.3457 18.5768 13.2452 18.5768 14.3549C18.5768 15.4645 17.6772 16.3641 16.5676 16.3641H16.5475Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25.432 16.3842C24.3224 16.3842 23.4229 15.4801 23.4229 14.3649C23.4229 13.2497 24.3224 12.3457 25.432 12.3457H25.4521C26.5618 12.3457 27.4613 13.2497 27.4613 14.3649C27.4613 15.4801 26.5618 16.3842 25.4521 16.3842H25.432Z",
                            fill: "#532E05"
                        }), (0, l.jsxs)("defs", {
                            children: [(0, l.jsxs)("filter", {
                                id: "filter0_di_15326_3243",
                                x: "-0.000112534",
                                y: "0.230657",
                                width: "42",
                                height: "42.0002",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "3.23077"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "3.23077"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_15326_3243"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_15326_3243",
                                    result: "shape"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "0.807692"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.21154"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect2_innerShadow_15326_3243"
                                })]
                            }), (0, l.jsxs)("radialGradient", {
                                id: "paint0_radial_15326_3243",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(20.9999 11.9363) rotate(90) scale(20.6021)",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#FFD391"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FFB24D"
                                })]
                            })]
                        })]
                    }))
                })),
                y = a.forwardRef((function(e, r) {
                    return (0, l.jsxs)("svg", (0, v.Z)((0, h.Z)({
                        width: "42",
                        height: "43",
                        viewBox: "0 0 42 43",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), {
                        children: [(0, l.jsx)("g", {
                            filter: "url(#filter0_di_15326_3260)",
                            children: (0, l.jsx)("circle", {
                                cx: "21.0001",
                                cy: "17.9999",
                                r: "14.5385",
                                fill: "url(#paint0_radial_15326_3260)"
                            })
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.7971 22.3614C14.3689 21.8261 14.4846 21.0667 15.0556 20.6652C15.6265 20.2638 16.4365 20.3722 16.8648 20.9075C17.0355 21.1209 17.4136 21.4909 17.9641 21.8662C18.8687 22.4829 19.8852 22.846 21.0001 22.846C22.115 22.846 23.1316 22.4829 24.0361 21.8662C24.5866 21.4909 24.9647 21.1209 25.1354 20.9075C25.5637 20.3722 26.3737 20.2638 26.9447 20.6652C27.5156 21.0667 27.6313 21.8261 27.2031 22.3614C26.8892 22.7537 26.3385 23.2924 25.5563 23.8258C24.2397 24.7234 22.7121 25.269 21.0001 25.269C19.2881 25.269 17.7605 24.7234 16.4439 23.8258C15.6617 23.2924 15.111 22.7537 14.7971 22.3614Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("path", {
                            d: "M14.8281 12.359C14.4926 12.407 14.1899 12.5864 13.9866 12.8577C13.7833 13.1291 13.696 13.4701 13.7439 13.8059C13.7918 14.1417 13.971 14.4446 14.2421 14.6481L15.4342 15.5433L14.2421 16.4385C14.1079 16.5393 13.9948 16.6655 13.9093 16.81C13.8238 16.9545 13.7675 17.1145 13.7438 17.2807C13.7201 17.447 13.7293 17.6163 13.7709 17.779C13.8126 17.9417 13.8858 18.0946 13.9865 18.229C14.0872 18.3633 14.2133 18.4765 14.3577 18.5621C14.5021 18.6477 14.6619 18.7039 14.828 18.7277C14.9941 18.7514 15.1633 18.7422 15.3259 18.7005C15.4884 18.6588 15.6412 18.5854 15.7754 18.4847L18.3308 16.5664C18.4895 16.4473 18.6183 16.2928 18.707 16.1152C18.7957 15.9377 18.8419 15.7418 18.8419 15.5433C18.8419 15.3448 18.7957 15.149 18.707 14.9714C18.6183 14.7938 18.4895 14.6394 18.3308 14.5202L15.7754 12.602C15.5043 12.3985 15.1635 12.3111 14.8281 12.359Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("path", {
                            d: "M28.2566 13.8059C28.3045 13.4701 28.2172 13.1291 28.0139 12.8577C27.8106 12.5864 27.5079 12.407 27.1724 12.359C26.8369 12.3111 26.4962 12.3985 26.2251 12.602L23.6697 14.5202C23.511 14.6394 23.3822 14.7938 23.2935 14.9714C23.2048 15.149 23.1586 15.3448 23.1586 15.5433C23.1586 15.7418 23.2048 15.9377 23.2935 16.1152C23.3822 16.2928 23.511 16.4473 23.6697 16.5664L26.2251 18.4847C26.4962 18.6881 26.8369 18.7755 27.1724 18.7275C27.5078 18.6795 27.8105 18.5001 28.0138 18.2288C28.2171 17.9575 28.3044 17.6165 28.2565 17.2807C28.2086 16.945 28.0294 16.642 27.7583 16.4385L26.5662 15.5433L27.7583 14.6481C28.0294 14.4446 28.2086 14.1417 28.2566 13.8059Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("circle", {
                            opacity: "0.6",
                            cx: "11.7116",
                            cy: "20.8268",
                            r: "2.01923",
                            fill: "#DB4246"
                        }), (0, l.jsx)("circle", {
                            opacity: "0.6",
                            cx: "30.2885",
                            cy: "20.8268",
                            r: "2.01923",
                            fill: "#DB4246"
                        }), (0, l.jsxs)("defs", {
                            children: [(0, l.jsxs)("filter", {
                                id: "filter0_di_15326_3260",
                                x: "0.000131607",
                                y: "0.230657",
                                width: "42",
                                height: "42.0002",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "3.23077"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "3.23077"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_15326_3260"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_15326_3260",
                                    result: "shape"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "0.807692"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.21154"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.42 0 0 0 0 0 0 0 0 0.1 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect2_innerShadow_15326_3260"
                                })]
                            }), (0, l.jsxs)("radialGradient", {
                                id: "paint0_radial_15326_3260",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(21.0001 11.9363) rotate(90) scale(20.6021)",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#FFD391"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FFB24D"
                                })]
                            })]
                        })]
                    }))
                })),
                V = a.forwardRef((function(e, r) {
                    return (0, l.jsxs)("svg", (0, v.Z)((0, h.Z)({
                        width: "42",
                        height: "43",
                        viewBox: "0 0 42 43",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: r
                    }, e), {
                        children: [(0, l.jsx)("g", {
                            filter: "url(#filter0_di_15326_3249)",
                            children: (0, l.jsx)("circle", {
                                cx: "20.9999",
                                cy: "17.9999",
                                r: "14.5385",
                                fill: "url(#paint0_radial_15326_3249)"
                            })
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.9133 19.817C17.7301 17.4007 24.2697 17.4007 30.0864 19.817V20.4228C30.0864 25.4411 26.0182 29.5093 20.9999 29.5093C15.9815 29.5093 11.9133 25.4411 11.9133 20.4228V19.817Z",
                            fill: "#6B3C09"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.9133 19.817C17.7301 17.4007 24.2697 17.4007 30.0864 19.817V20.4228C30.0864 25.4411 26.0182 29.5093 20.9999 29.5093C15.9815 29.5093 11.9133 25.4411 11.9133 20.4228V19.817Z",
                            fill: "#532E05"
                        }), (0, l.jsx)("mask", {
                            id: "mask0_15326_3249",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "11",
                            y: "17",
                            width: "20",
                            height: "13",
                            children: (0, l.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M11.9133 20.1032C11.9133 19.9299 12.0176 19.7737 12.1777 19.7072L12.4987 19.5738C17.9407 17.3132 24.059 17.3132 29.501 19.5738L29.8221 19.7072C29.9821 19.7737 30.0864 19.9299 30.0864 20.1032V20.4228C30.0864 25.4411 26.0182 29.5093 20.9999 29.5093C15.9815 29.5093 11.9133 25.4411 11.9133 20.4228V20.1032Z",
                                fill: "white"
                            })
                        }), (0, l.jsx)("g", {
                            mask: "url(#mask0_15326_3249)",
                            children: (0, l.jsx)("circle", {
                                cx: "20.9999",
                                cy: "37.3847",
                                r: "14.5385",
                                fill: "#C23F43"
                            })
                        }), (0, l.jsx)("g", {
                            filter: "url(#filter1_d_15326_3249)",
                            children: (0, l.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M15.4329 14.9185C15.3153 14.8567 15.1747 14.8567 15.0571 14.9185L12.9427 16.0301C12.6465 16.1859 12.3002 15.9343 12.3568 15.6044L12.7606 13.2501C12.7831 13.1191 12.7396 12.9854 12.6444 12.8926L10.9339 11.2253C10.6942 10.9916 10.8265 10.5846 11.1577 10.5364L13.5216 10.1929C13.6532 10.1738 13.7669 10.0912 13.8257 9.97201L14.8828 7.82997C15.031 7.52982 15.459 7.52982 15.6071 7.82997L16.6643 9.97201C16.7231 10.0912 16.8368 10.1738 16.9684 10.1929L19.3322 10.5364C19.6635 10.5846 19.7957 10.9916 19.5561 11.2253L17.8455 12.8926C17.7504 12.9854 17.7069 13.1191 17.7294 13.2501L18.1332 15.6044C18.1898 15.9343 17.8435 16.1859 17.5472 16.0301L15.4329 14.9185Z",
                                fill: "#FFF9F0"
                            })
                        }), (0, l.jsx)("g", {
                            filter: "url(#filter2_d_15326_3249)",
                            children: (0, l.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M27.5484 14.9185C27.4307 14.8567 27.2902 14.8567 27.1725 14.9185L25.0582 16.0301C24.762 16.1859 24.4157 15.9343 24.4723 15.6044L24.8761 13.2501C24.8985 13.1191 24.8551 12.9854 24.7599 12.8926L23.0494 11.2253C22.8097 10.9916 22.942 10.5846 23.2732 10.5364L25.6371 10.1929C25.7686 10.1738 25.8823 10.0912 25.9412 9.97201L26.9983 7.82997C27.1465 7.52982 27.5745 7.52982 27.7226 7.82997L28.7798 9.97201C28.8386 10.0912 28.9523 10.1738 29.0838 10.1929L31.4477 10.5364C31.779 10.5846 31.9112 10.9916 31.6715 11.2253L29.961 12.8926C29.8658 12.9854 29.8224 13.1191 29.8449 13.2501L30.2487 15.6044C30.3052 15.9343 29.959 16.1859 29.6627 16.0301L27.5484 14.9185Z",
                                fill: "#FFF9F0"
                            })
                        }), (0, l.jsxs)("defs", {
                            children: [(0, l.jsxs)("filter", {
                                id: "filter0_di_15326_3249",
                                x: "-0.000112534",
                                y: "0.230657",
                                width: "42",
                                height: "42.0002",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "3.23077"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "3.23077"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.560784 0 0 0 0 0.152941 0 0 0 0.25 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_15326_3249"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_15326_3249",
                                    result: "shape"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "0.807692"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "1.21154"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "arithmetic",
                                    k2: "-1",
                                    k3: "1"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 1 0 0 0 0 0.42 0 0 0 0 0 0 0 0 0.1 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "shape",
                                    result: "effect2_innerShadow_15326_3249"
                                })]
                            }), (0, l.jsxs)("filter", {
                                id: "filter1_d_15326_3249",
                                x: "10.0038",
                                y: "7.60498",
                                width: "10.4823",
                                height: "10.088",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "0.807692"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.403846"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_15326_3249"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_15326_3249",
                                    result: "shape"
                                })]
                            }), (0, l.jsxs)("filter", {
                                id: "filter2_d_15326_3249",
                                x: "22.1193",
                                y: "7.60498",
                                width: "10.4823",
                                height: "10.088",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "0.807692"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "0.403846"
                                }), (0, l.jsx)("feComposite", {
                                    in2: "hardAlpha",
                                    operator: "out"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_15326_3249"
                                }), (0, l.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_15326_3249",
                                    result: "shape"
                                })]
                            }), (0, l.jsxs)("radialGradient", {
                                id: "paint0_radial_15326_3249",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(20.9999 11.9363) rotate(90) scale(20.6021)",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#FFE091"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FFAA3C"
                                })]
                            })]
                        })]
                    }))
                })),
                k = function(e) {
                    var r = e.rating,
                        t = e.className,
                        n = "w-11 h-11";
                    switch (r) {
                        case 1:
                            return (0, l.jsx)(C, {
                                className: (0, o.yI)(n, t)
                            });
                        case 2:
                            return (0, l.jsx)(m, {
                                className: (0, o.yI)(n, t)
                            });
                        case 3:
                            return (0, l.jsx)(j, {
                                className: (0, o.yI)(n, t)
                            });
                        case 4:
                            return (0, l.jsx)(y, {
                                className: (0, o.yI)(n, t)
                            });
                        case 5:
                            return (0, l.jsx)(V, {
                                className: (0, o.yI)(n, t)
                            });
                        default:
                            return null
                    }
                },
                g = function(e) {
                    var r = e.question,
                        t = e.answers,
                        n = e.onChange,
                        i = e.onNext,
                        u = e.className,
                        c = (0, s.$G)("common", {
                            keyPrefix: "survey"
                        }).t,
                        f = function(e) {
                            var r, t, n, i, l;
                            return (0, v.Z)((0, h.Z)({}, e), {
                                title: null !== (r = e.title) && void 0 !== r ? r : "How satisfied are you?",
                                rateMin: null !== (t = e.rateMin) && void 0 !== t ? t : 1,
                                rateMax: null !== (n = e.rateMax) && void 0 !== n ? n : 5,
                                rateStep: null !== (i = e.rateStep) && void 0 !== i ? i : 1,
                                isRequired: null !== (l = e.isRequired) && void 0 !== l && l
                            })
                        }(r),
                        p = f.name,
                        x = f.rateMin,
                        C = f.rateMax,
                        m = f.rateStep,
                        j = f.minRateDescription,
                        y = f.maxRateDescription,
                        V = function(e, r, t) {
                            for (var n = [], i = e; i <= r; i += t) n.push(i);
                            return n
                        }(x, C, m),
                        g = t[p];
                    (0, a.useEffect)((function() {
                        return null !== g ? i() : void 0
                    }), [g, i]);
                    var S = (0, a.useCallback)((function(e) {
                        return n((0, _.Z)({}, p, e))
                    }), [n, p]);
                    return (0, l.jsxs)("div", {
                        className: (0, o.yI)("w-full", u),
                        children: [(0, l.jsx)("div", {
                            className: "flex w-full items-center justify-center",
                            children: V.map((function(e, r) {
                                return (0, l.jsx)("button", {
                                    className: (0, o.yI)("flex h-[66px] w-[66px] items-center justify-center border-[1px] border-solid", {
                                        "rounded-l-md": 0 === r,
                                        "rounded-r-md": r === V.length - 1,
                                        "border-l-0": 0 !== r
                                    }, d.Cj.dividerGray4, d.M$.fill3, d.M$.bgBlueStandardFocus),
                                    onClick: function() {
                                        return S(e)
                                    },
                                    children: (0, l.jsx)(k, {
                                        rating: e
                                    })
                                }, "r" + e)
                            }))
                        }), (0, l.jsxs)("div", {
                            className: (0, o.yI)("mt-4 flex w-full justify-between text-xs", d.Cj.label1),
                            children: [(0, l.jsx)("div", {
                                children: null !== j && void 0 !== j ? j : c("veryDissatisfied")
                            }), (0, l.jsx)("div", {
                                children: null !== y && void 0 !== y ? y : c("verySatisfied")
                            })]
                        })]
                    })
                },
                S = t(85099),
                O = function(e) {
                    var r = e.question,
                        t = e.onChange,
                        n = e.className,
                        i = r.name,
                        s = r.placeholder,
                        u = (0, a.useCallback)((function(e) {
                            return t((0, _.Z)({}, i, e))
                        }), [t, i]),
                        c = (0, a.useState)(""),
                        f = c[0],
                        p = c[1],
                        x = (0, a.useCallback)((function(e) {
                            p(e), u(e)
                        }), [p, u]);
                    return (0, l.jsx)("div", {
                        className: (0, o.yI)("w-full", n),
                        children: (0, l.jsx)(S.g, {
                            className: (0, o.yI)("w-full border-0 text-xs", d.Cj.fill3, d.Cj.label1, d.Cj.placeholderLabel4),
                            value: f,
                            cols: 3,
                            onChange: x,
                            placeholder: null !== s && void 0 !== s ? s : "Additional feedback"
                        })
                    })
                },
                X = t(29815),
                w = function(e) {
                    var r = e.value,
                        t = e.text,
                        n = e.isSelected,
                        i = e.disabled,
                        s = e.onClick;
                    return (0, l.jsx)(u.z, {
                        className: (0, o.yI)("whitespace-normal rounded-md border-[1px] border-solid p-2 text-left text-xs font-normal", d.Cj.bgTransparent, d.Cj.fill3Hover, d.Cj.label1, d.Cj.dividerGray4, (0, _.Z)({}, (0, o.yI)(d.Cj.bgBlueStandard, d.Cj.bgBlueSHover, d.xy.labelFixedWhite), n)),
                        disabled: i,
                        onClick: function() {
                            return s(r)
                        },
                        children: t
                    }, "c-" + r)
                },
                L = function(e) {
                    var r, t, n, i = e.question,
                        s = e.answers,
                        u = e.onChange,
                        c = e.className,
                        f = function(e) {
                            var r, t, n, i, l, s;
                            return (0, v.Z)((0, h.Z)({}, e), {
                                isRequired: null !== (r = e.isRequired) && void 0 !== r && r,
                                choices: null !== (t = e.choices) && void 0 !== t ? t : [],
                                maxSelectedChoices: null !== (n = e.maxSelectedChoices) && void 0 !== n ? n : 1 / 0,
                                other: e.showOtherItem ? null !== (i = e.otherText) && void 0 !== i ? i : "Other" : void 0,
                                otherPlaceholder: e.showOtherItem ? null !== (l = e.otherPlaceholder) && void 0 !== l ? l : "Please specify" : void 0,
                                none: e.showNoneItem ? null !== (s = e.noneText) && void 0 !== s ? s : "None" : void 0
                            })
                        }(i),
                        p = f.name,
                        x = f.choices,
                        C = f.maxSelectedChoices,
                        m = f.other,
                        j = f.otherPlaceholder,
                        y = f.none,
                        V = s[p],
                        k = (0, a.useCallback)((function(e) {
                            if ("none" === e) return u((0, _.Z)({}, p, (null === V || void 0 === V ? void 0 : V.includes("none")) ? null : ["none"]));
                            if (null === V || V.includes("none")) return u((0, _.Z)({}, p, [e]));
                            var r = V.includes(e) ? V.filter((function(r) {
                                return r !== e
                            })) : (0, X.Z)(V).concat([e]);
                            if (0 === r.length) return u((0, _.Z)({}, p, null));
                            u((0, _.Z)({}, p, r))
                        }), [u, p, V]),
                        g = null === V || void 0 === V ? void 0 : V.includes("none"),
                        O = null !== V && V.length >= C,
                        L = function(e) {
                            return g || O && !(null === V || void 0 === V ? void 0 : V.includes(e))
                        },
                        b = "".concat(p, "__other"),
                        G = (0, a.useCallback)((function(e) {
                            return u((0, _.Z)({}, b, e))
                        }), [u, b]),
                        B = (0, a.useState)(""),
                        F = B[0],
                        I = B[1],
                        E = (0, a.useCallback)((function(e) {
                            I(e), G(e)
                        }), [I, G]),
                        N = null === V || void 0 === V ? void 0 : V.includes("other");
                    return (0, a.useEffect)((function() {
                        return N ? void 0 : G(void 0)
                    }), [N, G]), (0, l.jsxs)("div", {
                        className: (0, o.yI)("w-full", c),
                        children: [(0, l.jsxs)("div", {
                            className: "flex w-full flex-wrap items-center gap-3",
                            children: [x.map((function(e) {
                                return (0, l.jsx)(w, {
                                    value: e.value,
                                    text: e.text,
                                    isSelected: null !== (r = null === V || void 0 === V ? void 0 : V.includes(e.value)) && void 0 !== r && r,
                                    disabled: L(e.value),
                                    onClick: k
                                }, "c-" + e.value)
                            })), y && (0, l.jsx)(w, {
                                value: "none",
                                text: y,
                                isSelected: null !== (t = null === V || void 0 === V ? void 0 : V.includes("none")) && void 0 !== t && t,
                                disabled: O,
                                onClick: k
                            }), m && (0, l.jsx)(w, {
                                value: "other",
                                text: m,
                                isSelected: null !== (n = null === V || void 0 === V ? void 0 : V.includes("other")) && void 0 !== n && n,
                                disabled: L("other"),
                                onClick: k
                            })]
                        }), N && (0, l.jsx)("div", {
                            className: "mt-3 w-full",
                            children: (0, l.jsx)(S.g, {
                                className: (0, o.yI)("w-full border-0 text-xs", d.Cj.fill3, d.Cj.label1, d.Cj.placeholderLabel4),
                                cols: 3,
                                value: F,
                                onChange: E,
                                placeholder: j
                            })
                        })]
                    })
                };
            ! function(e) {
                e.Rating = "rating", e.Html = "html", e.Checkbox = "checkbox", e.Tags = "tagbox", e.Text = "text"
            }(n || (n = {}));
            var b, G = function(e) {
                    var r = e.question,
                        t = e.answers,
                        i = e.onChange,
                        s = e.onNext,
                        a = r.name;
                    switch (r.type) {
                        case n.Html:
                            return (0, l.jsx)(x, {
                                question: r,
                                onNext: s
                            }, a);
                        case n.Rating:
                            return (0, l.jsx)(g, {
                                question: r,
                                answers: t,
                                onChange: i,
                                onNext: s
                            }, a);
                        case n.Text:
                            return (0, l.jsx)(O, {
                                question: r,
                                onChange: i
                            }, a);
                        case n.Tags:
                            return (0, l.jsx)(L, {
                                question: r,
                                onChange: i,
                                answers: t
                            }, a);
                        default:
                            return null
                    }
                },
                B = t(8856),
                F = t(59637),
                I = function(e, r) {
                    return e.map((function(e) {
                        return (0, v.Z)((0, h.Z)({}, e), {
                            visible: !e.visibleIf || D(r, e.visibleIf)
                        })
                    }))
                },
                E = function(e) {
                    return e.filter((function(e) {
                        return e.visible && e.type !== n.Html && e.type !== n.Rating
                    })).length
                };

            function N(e, r) {
                return "object" === typeof r ? e.includes(r.value) : e.includes(r)
            }

            function A(e, r) {
                var t = (0, F.Z)(e.replace(/{([^}]+)}/g, "$1").split(" ")),
                    n = t[0],
                    i = t.slice(1);
                if (!r.hasOwnProperty(n)) return !1;
                var l = r[n];
                if ("notempty" === i[0]) return void 0 !== l && null !== l;
                if (["=", "<>"].includes(i[0]) && 2 === i.length) {
                    var s = [i[1], i[1].startsWith("[")],
                        a = s[0],
                        o = s[1],
                        u = "=" === i[0] ? function(e) {
                            return e
                        } : function(e) {
                            return !e
                        };
                    return u(o ? function(e, r) {
                        if (!Array.isArray(r)) return !1;
                        if (e === r) return !0;
                        if (null == e || null == r) return !1;
                        if (e.length !== r.length) return !1;
                        for (var t = e.sort(), n = r.sort(), i = 0; i < e.length; ++i)
                            if (t[i] !== n[i]) return !1;
                        return !0
                    }(a.replace(/\[|\]|\'/g, "").split(","), l) : l === a)
                }
                return !1
            }

            function D(e, r) {
                return !r || r.split(" and ").map((function(e) {
                    return e.split(" or ")
                })).every((function(r) {
                    return r.some((function(r) {
                        return A(r, e)
                    }))
                }))
            }! function(e) {
                e.Rating = "Rating", e.MoreQuestions = "MoreQuestions"
            }(b || (b = {}));
            var R = function(e, r) {
                    switch (r.type) {
                        case "update":
                            var t = (0, B.Z)((0, h.Z)({}, e.answers, r.payload), (function(e) {
                                    return void 0 === e
                                })),
                                i = I(e.questions, t);
                            return (0, v.Z)((0, h.Z)({}, e), {
                                answers: t,
                                questions: i,
                                totalQuestions: E(i)
                            });
                        case "next":
                            var l = e.questions[e.curQuestionIndex].type !== n.Html,
                                s = I(e.questions, e.answers);
                            return (0, v.Z)((0, h.Z)({}, e), {
                                currentStep: b.MoreQuestions,
                                questions: s,
                                curQuestionIndex: e.curQuestionIndex + 1,
                                curQuestionId: l ? e.curQuestionId + 1 : e.curQuestionId,
                                totalQuestions: E(s)
                            });
                        default:
                            return e
                    }
                },
                Z = function(e) {
                    var r, t, i = (0, a.useState)((function() {
                            var r = function(e) {
                                    var r, t = e.pages[0];
                                    return t ? (null !== (r = null === t || void 0 === t ? void 0 : t.elements) && void 0 !== r ? r : []).map((function(e) {
                                        var r, t = e.type === n.Checkbox || e.type === n.Tags ? {
                                            choices: null === (r = e.choices) || void 0 === r ? void 0 : r.map((function(e) {
                                                return "object" === typeof e ? e : {
                                                    value: e,
                                                    text: e
                                                }
                                            }))
                                        } : {};
                                        return (0, h.Z)({}, e, t)
                                    })) : []
                                }(e),
                                t = function(e) {
                                    return e.filter((function(e) {
                                        return e.type !== n.Html
                                    })).reduce((function(e, r) {
                                        return (0, v.Z)((0, h.Z)({}, e), (0, _.Z)({}, r.name, null))
                                    }), {})
                                }(r);
                            return {
                                questions: I(r, t),
                                answers: t,
                                currentStep: b.Rating,
                                totalQuestions: E(r),
                                curQuestionIndex: 0,
                                curQuestionId: r.length > 1 ? 0 : -1
                            }
                        })),
                        l = i[0],
                        s = (0, a.useReducer)(R, l),
                        o = s[0],
                        u = s[1],
                        c = (0, a.useCallback)((function(e) {
                            return u({
                                type: "update",
                                payload: e
                            })
                        }), []),
                        d = (0, a.useCallback)((function() {
                            return u({
                                type: "next"
                            })
                        }), []),
                        f = (0, a.useState)((function() {
                            return 0 !== o.questions.length
                        }))[0],
                        p = (0, a.useMemo)((function() {
                            return function(e, r, t) {
                                var i = e[r];
                                if (!i) return i;
                                if (i.type !== n.Checkbox && i.type !== n.Tags || !i.choicesFromQuestion) return i;
                                var l = e.find((function(e) {
                                    return e.name === i.choicesFromQuestion
                                }));
                                if (!l || !l.choices) return i;
                                if (!i.choicesFromQuestionMode) return (0, v.Z)((0, h.Z)({}, i), {
                                    choices: (0, X.Z)(l.choices)
                                });
                                var s = t[l.name];
                                return "unselected" === i.choicesFromQuestionMode ? (0, v.Z)((0, h.Z)({}, i), {
                                    choices: l.choices.filter((function(e) {
                                        return !N(s, e)
                                    }))
                                }) : "selected" === i.choicesFromQuestionMode ? (0, v.Z)((0, h.Z)({}, i), {
                                    choices: l.choices.filter((function(e) {
                                        return N(s, e)
                                    }))
                                }) : i
                            }(o.questions, o.curQuestionIndex, o.answers)
                        }), [o.curQuestionIndex]),
                        x = (r = o.questions, t = o.curQuestionIndex, r.slice(t + 1).some((function(e) {
                            return e.visible
                        }))),
                        C = !(null === p || void 0 === p ? void 0 : p.isRequired) || !!o.answers[p.name];
                    return {
                        isValid: f,
                        currentQuestion: p,
                        currentQuestionId: o.curQuestionId,
                        totalQuestions: o.totalQuestions,
                        allAnswers: o.answers,
                        hasNext: x,
                        hasValidAnswer: C,
                        submitAnswer: c,
                        nextQuestion: d
                    }
                },
                M = function(e) {
                    var r = e.surveyJson,
                        t = e.onSubmit,
                        f = e.onCancel,
                        x = e.onClose,
                        _ = e.className,
                        h = (0, i.Z)(e, ["surveyJson", "onSubmit", "onCancel", "onClose", "className"]),
                        v = Z(r),
                        C = v.isValid,
                        m = v.currentQuestion,
                        j = v.currentQuestionId,
                        y = v.totalQuestions,
                        V = v.allAnswers,
                        k = v.hasNext,
                        g = v.hasValidAnswer,
                        S = v.submitAnswer,
                        O = v.nextQuestion,
                        X = (0, a.useState)(!1),
                        w = X[0],
                        L = X[1],
                        b = (0, a.useCallback)((function() {
                            L(!0), x && x()
                        }), [x]),
                        B = (0, a.useCallback)((function() {
                            f(V), b()
                        }), [f, b, V]),
                        F = (0, a.useState)(!1),
                        I = F[0],
                        E = F[1],
                        N = (0, a.useCallback)((function() {
                            g && (k ? O() : E(!0), t(V, !k))
                        }), [O, t, g, k, V]),
                        A = (null === m || void 0 === m ? void 0 : m.type) !== n.Rating,
                        D = (null === m || void 0 === m ? void 0 : m.type) === n.Html,
                        R = (0, s.$G)("common", {
                            keyPrefix: "survey"
                        }).t,
                        M = h.submitBtnText,
                        Q = void 0 === M ? R("submit") : M,
                        q = h.nextBtnText,
                        P = void 0 === q ? R("next") : q,
                        U = h.continueBtnText,
                        T = void 0 === U ? R("continue") : U,
                        H = k ? D ? T : P : Q;
                    return !C || w ? null : I ? (0, l.jsx)(p, {
                        closeDelay: 5e3,
                        onClose: b,
                        leetCoinsReward: h.leetCoinsReward,
                        className: _
                    }) : (0, l.jsxs)("div", {
                        className: (0, o.yI)("relative w-[366px] rounded-lg border-[1px] border-solid p-4", d.Cj.divider4, d.Cj.bgLayer3, _),
                        children: [(0, l.jsx)("button", {
                            className: "absolute right-4 top-4",
                            children: (0, l.jsx)(c.F, {
                                className: (0, o.yI)("h-5 w-5", d.Cj.labelGrey6),
                                onClick: B
                            })
                        }), m.title && (0, l.jsx)("div", {
                            className: (0, o.yI)("mb-4 pr-8 text-xs", d.Cj.label1),
                            children: m.title
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)(G, {
                                question: m,
                                answers: V,
                                onChange: S,
                                onNext: N
                            })
                        }), A && (0, l.jsxs)("div", {
                            className: (0, o.yI)("-mx-4 mt-4 flex items-center justify-between border-t-[1px] border-solid px-4 pt-4", d.Cj.divider3),
                            children: [D ? (0, l.jsx)("div", {}) : (0, l.jsx)("div", {
                                className: (0, o.yI)("text-xs", d.Cj.label3),
                                children: R("questionNo", {
                                    current: j,
                                    total: y
                                })
                            }), (0, l.jsx)(u.z, {
                                variant: "primary",
                                className: "px-3 py-1 text-xs",
                                onClick: N,
                                disabled: !g,
                                children: H
                            })]
                        })]
                    })
                }
        },
        23641: function(e, r, t) {
            t.d(r, {
                X: function() {
                    return u
                }
            });
            var n = t(85893),
                i = t(67294),
                l = t(77768),
                s = t(66360),
                a = t(15371),
                o = t(12922),
                u = function(e) {
                    var r = e.checked,
                        t = e.onChange,
                        u = e.className,
                        c = e.boxClassName,
                        d = e.label,
                        f = e.disabled,
                        p = e.afterClassName,
                        x = e.labelClassName,
                        _ = e.iconClassName,
                        h = e.isNew,
                        v = (0, i.useCallback)((function(e) {
                            !f && t(e)
                        }), [f, t]);
                    return (0, n.jsx)(l.r, {
                        as: i.Fragment,
                        checked: r,
                        onChange: v,
                        children: (0, n.jsxs)("div", {
                            className: (0, o.yI)(u, "group flex cursor-pointer outline-none", {
                                "cursor-not-allowed opacity-40": f,
                                "h-5 items-center": !u && !p
                            }, p),
                            children: [(0, n.jsx)("span", {
                                className: (0, o.yI)("text-paper mr-2 flex h-4 w-4 items-center justify-center rounded", {
                                    "bg-fill-3 dark:bg-dark-fill-2": !r,
                                    "group-hover:bg-fill-2 dark:group-hover:bg-dark-fill-2": !f && !r,
                                    "bg-blue dark:bg-dark-blue": r && !c,
                                    "hover:bg-blue-3 dark:hover:bg-dark-blue-1": !f && r && !c,
                                    "border-fill-1 bg-layer-3 group-hover:bg-fill-4 dark:border-fill-1 dark:bg-dark-layer-3 dark:group-hover:bg-dark-fill-4 border": h && !r && !f && !c
                                }, c),
                                children: (0, n.jsx)(s.N, {
                                    className: (0, o.yI)("h-3.5 w-3.5", {
                                        hidden: !r
                                    }, _),
                                    "aria-hidden": "true"
                                })
                            }), (0, n.jsx)("span", {
                                className: (0, o.yI)("block truncate leading-5", a.Cj.label2, {
                                    "group-hover:text-label-1 dark:group-hover:text-dark-label-1": !f
                                }, x),
                                children: d
                            })]
                        })
                    })
                }
        },
        57538: function(e, r, t) {
            t.d(r, {
                I: function() {
                    return o
                }
            });
            var n = t(26042),
                i = t(67294),
                l = t(11163),
                s = t.n(l),
                a = t(71156),
                o = function(e) {
                    var r = (0, l.useRouter)(),
                        t = r.query,
                        o = r.pathname,
                        u = (0, i.useMemo)((function() {
                            return t
                        }), [JSON.stringify(t)]),
                        c = (0, a.d)(),
                        d = (0, i.useMemo)((function() {
                            return (0, n.Z)({}, u, c)
                        }), [c, u]),
                        f = (0, i.useCallback)((function(r) {
                            d[e] !== r && (r ? d[e] = r : delete d[e], s().push({
                                pathname: o,
                                query: d
                            }, void 0, {
                                shallow: !0
                            }))
                        }), [d, o, e]);
                    return [d[e] ? "".concat(d[e]) : "", f]
                }
        },
        71156: function(e, r, t) {
            t.d(r, {
                d: function() {
                    return n
                }
            });
            var n = function() {
                var e = window.location.href,
                    r = new URLSearchParams(new URL(e).search);
                return Object.fromEntries(r.entries())
            }
        },
        86781: function(e, r, t) {
            t.d(r, {
                m: function() {
                    return l
                }
            });
            var n = t(8183),
                i = t(23025),
                l = {
                    spV2MyPlanViewExposure: function() {
                        var e = {
                            key: "sp_v_2_my_plan_view_exposure",
                            data: {}
                        };
                        n.V[i.X.GIO](e), n.V[i.X.GA4](e), n.V[i.X.CONSOLE](e), n.V[i.X.SELF_DB](e)
                    },
                    spV2DetailViewExposure: function(e) {
                        var r = {
                            key: "sp_v_2_detail_view_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2DetailStartClick: function(e) {
                        var r = {
                            key: "sp_v_2_detail_start_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ListViewExposure: function() {
                        var e = {
                            key: "sp_v_2_list_view_exposure",
                            data: {}
                        };
                        n.V[i.X.GIO](e), n.V[i.X.GA4](e), n.V[i.X.CONSOLE](e), n.V[i.X.SELF_DB](e)
                    },
                    spV2ListOngoingClick: function(e) {
                        var r = {
                            key: "sp_v_2_list_ongoing_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ListGroupClick: function(e) {
                        var r = {
                            key: "sp_v_2_list_group_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ListFeatureClick: function(e) {
                        var r = {
                            key: "sp_v_2_list_feature_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ListMyspClick: function(e) {
                        var r = {
                            key: "sp_v_2_list_mysp_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ListRevertClick: function(e) {
                        var r = {
                            key: "sp_v_2_list_revert_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ProblemsetAdClick: function(e) {
                        var r = {
                            key: "sp_v_2_problemset_ad_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ProblemsetTopCardClick: function(e) {
                        var r = {
                            key: "sp_v_2_problemset_top_card_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ProblemsetTopCardDescClick: function(e) {
                        var r = {
                            key: "sp_v_2_problemset_top_card_desc_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ProblemsetSeeMoreClick: function(e) {
                        var r = {
                            key: "sp_v_2_problemset_see_more_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ProblemsetPopoverTryNowClick: function(e) {
                        var r = {
                            key: "sp_v_2_problemset_popover_try_now_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ProblemsetPopoverCancelClick: function(e) {
                        var r = {
                            key: "sp_v_2_problemset_popover_cancel_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2MyPlanOngoingClick: function(e) {
                        var r = {
                            key: "sp_v_2_my_plan_ongoing_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2MyPlanHistoryClick: function(e) {
                        var r = {
                            key: "sp_v_2_my_plan_history_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2QdPanelClick: function(e) {
                        var r = {
                            key: "sp_v_2_qd_panel_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2QdPpTagClick: function(e) {
                        var r = {
                            key: "sp_v_2_qd_pp_tag_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2DetailShareClick: function(e) {
                        var r = {
                            key: "sp_v_2_detail_share_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2DetailTagClick: function(e) {
                        var r = {
                            key: "sp_v_2_detail_tag_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2DetailRelatedClick: function(e) {
                        var r = {
                            key: "sp_v_2_detail_related_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2PremiumSpCoversionClick: function(e) {
                        var r = {
                            key: "sp_v_2_premium_sp_coversion_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2PremiumSpGroupCoversionClick: function(e) {
                        var r = {
                            key: "sp_v_2_premium_sp_group_coversion_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ProblemsRpQdClick: function(e) {
                        var r = {
                            key: "sp_v_2_problems_rp_qd_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ProblemsRpSpdetialClick: function(e) {
                        var r = {
                            key: "sp_v_2_problems_rp_spdetial_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2PlanSettingExposure: function(e) {
                        var r = {
                            key: "sp_v_2_plan_setting_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2PlanSettingCloseClick: function(e) {
                        var r = {
                            key: "sp_v_2_plan_setting_close_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2PlanSettingStartClick: function(e) {
                        var r = {
                            key: "sp_v_2_plan_setting_start_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ConfirmPlanExposure: function(e) {
                        var r = {
                            key: "sp_v_2_confirm_plan_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ConfirmPlanModifyClick: function(e) {
                        var r = {
                            key: "sp_v_2_confirm_plan_modify_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2ConfirmPlanStartClick: function(e) {
                        var r = {
                            key: "sp_v_2_confirm_plan_start_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2CalendarExposure: function(e) {
                        var r = {
                            key: "sp_v_2_calendar_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2CalendarFlipPageClick: function(e) {
                        var r = {
                            key: "sp_v_2_calendar_flip_page_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2CalendarDateClick: function(e) {
                        var r = {
                            key: "sp_v_2_calendar_date_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2WeeklyRankingExposure: function(e) {
                        var r = {
                            key: "sp_v_2_weekly_ranking_exposure",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2WeeklyRankingUserClick: function(e) {
                        var r = {
                            key: "sp_v_2_weekly_ranking_user_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    },
                    spV2SolutionClick: function(e) {
                        var r = {
                            key: "sp_v_2_solution_click",
                            data: e
                        };
                        n.V[i.X.GIO](r), n.V[i.X.GA4](r), n.V[i.X.CONSOLE](r), n.V[i.X.SELF_DB](r)
                    }
                }
        }
    }
]);