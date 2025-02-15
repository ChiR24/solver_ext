"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6076], {
        36076: function(e, t, n) {
            n.r(t), n.d(t, {
                DynamicLayoutGuide: function() {
                    return B
                },
                SettingRunSubmitPosition: function() {
                    return z
                },
                default: function() {
                    return Z
                }
            });
            var a = n(14924),
                i = n(26042),
                l = n(10253),
                o = n(85893),
                s = n(11321),
                r = n(68570),
                d = n(67294),
                c = n(12922),
                u = n(93769),
                x = n(11516),
                m = n(40832),
                b = n(69485),
                p = n(89365),
                f = n(27375),
                v = n(23877),
                y = n(49037),
                g = n(50632),
                h = n(85945),
                T = n(63808),
                _ = n(88525),
                I = function() {
                    var e = (0, h.NL)(),
                        t = (0, _.Uus)(T.f6).mutateAsync;
                    return function() {
                        t({
                            guideType: _.pAT.NewIdeDynamicLayoutV2
                        }).then((function(t) {
                            var n;
                            (null === (n = t.completeFeatureGuide) || void 0 === n ? void 0 : n.ok) && e.invalidateQueries(["globalData"])
                        }))
                    }
                },
                N = n(82670),
                j = n(69396),
                P = n(68779),
                C = n(83210),
                E = n(134),
                F = function(e) {
                    var t = e.index,
                        n = e.backProps,
                        a = e.closeProps,
                        l = e.primaryProps,
                        r = e.skipProps,
                        d = e.step,
                        u = e.size,
                        m = e.tooltipProps,
                        b = e.isLastStep,
                        p = (0, s.$G)("problems", {
                            keyPrefix: "ideGuide"
                        }).t;
                    return (0, o.jsxs)("div", (0, j.Z)((0, i.Z)({
                        className: "bg-sd-popover text-sd-popover-foreground rounded-sd-md border-sd-border z-modal font-spprop w-[280px] overflow-hidden border p-3 shadow-md"
                    }, m), {
                        children: [(0, o.jsxs)("div", {
                            className: (0, c.yI)("mb-1.5 flex items-center justify-between"),
                            children: [d.title && (0, o.jsx)("div", {
                                className: (0, c.yI)("text-md font-medium leading-5", x.nx.labelTextPrimary),
                                children: d.title
                            }), (0, o.jsx)(C.z, (0, j.Z)((0, i.Z)({
                                variant: "ghost",
                                size: "xs",
                                onlyIcon: !0,
                                className: "h-6 w-6"
                            }, r), {
                                children: (0, o.jsx)(E.e, {
                                    variant: "14px",
                                    padding: "square",
                                    icon: P.YIN,
                                    className: (0, c.yI)(x.nx.labelTextSecondary, x.rG.labelTextPrimary)
                                })
                            }))]
                        }), (0, o.jsx)("div", {
                            className: (0, c.yI)("text-md mb-3 leading-5", x.nx.labelTextSecondary),
                            children: d.content
                        }), (0, o.jsxs)("div", {
                            className: (0, c.yI)("flex items-center justify-between"),
                            children: [(0, o.jsx)("div", {
                                className: (0, c.yI)(x.nx.labelTextTertiary),
                                children: "".concat(t + 1).concat(p("of")).concat(u)
                            }), (0, o.jsxs)("div", {
                                children: [0 === t ? (0, o.jsx)(C.z, (0, j.Z)((0, i.Z)({
                                    variant: "ghost",
                                    size: "xs",
                                    className: (0, c.yI)("mr-2", x.nx.labelTextTertiary, x.rG.labelTextPrimary)
                                }, r), {
                                    children: p("skipTour")
                                })) : (0, o.jsx)(C.z, (0, j.Z)((0, i.Z)({
                                    variant: "ghost",
                                    size: "xs",
                                    className: (0, c.yI)("mr-2", x.nx.labelTextTertiary, x.rG.labelTextPrimary)
                                }, n), {
                                    children: p("back")
                                })), b ? (0, o.jsx)(C.z, (0, j.Z)((0, i.Z)({
                                    variant: "secondary",
                                    size: "xs"
                                }, a), {
                                    children: p("done")
                                })) : (0, o.jsx)(C.z, (0, j.Z)((0, i.Z)({
                                    variant: "secondary",
                                    size: "xs"
                                }, l), {
                                    children: p("next")
                                }))]
                            })]
                        })]
                    }))
                },
                k = n(60477),
                S = function(e) {
                    var t = e.handleEnableIde,
                        n = e.title,
                        a = e.handleLater,
                        i = (0, s.$G)("problems", {
                            keyPrefix: "ideGuide"
                        }).t;
                    return (0, o.jsx)("div", {
                        className: (0, c.yI)("z-modal-1 fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center overflow-auto", x.nx.bgLayerBgPure),
                        children: (0, o.jsxs)("div", {
                            className: (0, c.yI)("flex h-full min-h-[600px] flex-col items-center justify-center"),
                            children: [(0, o.jsxs)("div", {
                                className: (0, c.yI)("relative mb-2 text-4xl", x.nx.labelTextPrimary),
                                children: [null !== n && void 0 !== n ? n : i("introIdeTitle"), (0, o.jsx)("span", {
                                    className: (0, c.yI)("absolute -right-16 -top-2 rounded-full px-3 py-1 text-[16px] leading-[24px]", x.nx.labelFixedWhite),
                                    style: {
                                        background: "linear-gradient(110deg, #1A9FFF 0%, #007AFF 100%), var(--Fixed-White, #FFF)"
                                    },
                                    children: i("new")
                                })]
                            }), (0, o.jsx)("div", {
                                className: (0, c.yI)("text-xl", x.nx.labelTextSecondary),
                                children: i("introInfo")
                            }), (0, o.jsx)("div", {
                                className: (0, c.yI)("my-8 h-[1px] w-[100px]", x.nx.bgBorderTertiary)
                            }), (0, o.jsx)("div", {
                                className: (0, c.yI)("mb-8 text-xl", x.nx.labelTextPrimary),
                                children: i("setTitle")
                            }), (0, o.jsx)(z, {}), (0, o.jsx)("div", {
                                className: (0, c.yI)("mb-8 mt-4 text-[16px]", x.nx.labelTextTertiary),
                                children: i("setTip")
                            }), (0, o.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, o.jsx)(k.z, {
                                    className: (0, c.yI)("rounded-full px-10 py-[14px] text-xl text-white"),
                                    style: {
                                        background: "linear-gradient(110deg, #1A9FFF 0%, #007AFF 100%), var(--Fixed-White, #FFF)",
                                        boxShadow: "0px 20px 30px 0px rgba(0, 122, 255, 0.15)"
                                    },
                                    onClick: t,
                                    children: i("enableIde")
                                }), a && (0, o.jsx)("div", {
                                    onClick: a,
                                    className: (0, c.yI)("cursor-pointer text-center text-base transition-colors", x.nx.labelTextSecondary, x.rG.labelTextPrimary),
                                    children: i("maybeLater")
                                })]
                            })]
                        })
                    })
                },
                w = function(e) {
                    var t, n, i = e.isActive,
                        l = e.image,
                        s = e.name,
                        r = e.onClick;
                    return (0, o.jsx)("div", {
                        onClick: r,
                        className: "cursor-pointer text-center",
                        children: (0, o.jsxs)("div", {
                            className: (0, c.yI)("flex h-[224px] w-[376px] flex-col items-center justify-center rounded-[13px] transition-opacity", (t = {}, (0, a.Z)(t, (x.nx.borderBorderQuaternary, "border"), !i), (0, a.Z)(t, x.nx.bgFillTertiary, i), t)),
                            children: [(0, o.jsxs)("div", {
                                className: "relative",
                                children: [(0, o.jsx)("div", {
                                    className: (0, c.yI)("absolute left-0 top-0 h-[112px]  w-[176px] rounded-2xl border border-solid", (0, a.Z)({
                                        "border-[2px]  border-[#007AFF] dark:border-[#007AFF]": i
                                    }, x.nx.borderBorderQuaternary, !i))
                                }), (0, o.jsx)("img", {
                                    src: l,
                                    alt: "",
                                    className: (0, c.yI)("h-[112px] w-[176px] rounded-2xl")
                                })]
                            }), (0, o.jsx)("p", {
                                className: (0, c.yI)(" mt-4 text-sm font-medium", (n = {}, (0, a.Z)(n, x.nx.labelTextPrimary, i), (0, a.Z)(n, x.nx.labelTextSecondary, !i), n)),
                                children: s
                            })]
                        })
                    })
                },
                z = function() {
                    var e = (0, s.$G)("problems", {
                            keyPrefix: "settings"
                        }).t,
                        t = (0, y.h)(),
                        n = (0, v.WP)((function(e) {
                            return e.runSubmitPosition
                        })),
                        a = (0, v.WP)((function(e) {
                            return e.setRunSubmitPosition
                        })),
                        i = (0, m.G)(),
                        l = (0, b.z)((function(e) {
                            p.C.ideRunSubmitPositionClick({
                                ide_setting_item_value: e
                            }), a(e), null === t || void 0 === t || t.selectTab(f.r.Code)
                        }));
                    return (0, o.jsxs)("div", {
                        className: "flex space-x-4",
                        children: [(0, o.jsx)(w, {
                            isActive: n === f.u3.ToolBar,
                            image: i ? "/_next/static/images/Toolbar_dark-70350bffcb43e0213cb04cadc984b60a.svg" : "/_next/static/images/Toolbar_light-5b6883239e04a004935aab928b70a71b.svg",
                            name: e("layout.toolbar"),
                            onClick: function() {
                                return l(f.u3.ToolBar)
                            }
                        }), (0, o.jsx)(w, {
                            isActive: n === f.u3.CodeEditor,
                            image: i ? "/_next/static/images/CodeEditor_dark-70004ea5a7788b0435e25f39d70c9d9a.svg" : "/_next/static/images/CodeEditor_light-7fe2ecfc563944254a1ca252782dec30.svg",
                            name: e("layout.code-editor"),
                            onClick: function() {
                                return l(f.u3.CodeEditor)
                            }
                        })]
                    })
                },
                B = function() {
                    var e, t, n = (0, s.$G)("problems", {
                            keyPrefix: "ideGuide"
                        }).t,
                        a = (0, u.z2)(),
                        c = a.showGuide,
                        x = a.setShowGuide,
                        b = (0, v.WP)((function(e) {
                            return e.runSubmitPosition
                        })),
                        p = (0, d.useState)({}),
                        h = p[0],
                        T = p[1],
                        _ = (0, l.Z)(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = (0, d.useState)(e),
                                n = t[0],
                                a = t[1],
                                i = (0, d.useCallback)((function(e) {
                                    a((function(t) {
                                        return Object.assign({}, t, (0, N.Z)(e, Function) ? e(t) : e)
                                    }))
                                }), []);
                            return [n, i]
                        }({
                            run: !1,
                            stepIndex: 0,
                            steps: []
                        }), 2),
                        j = _[0],
                        P = j.run,
                        C = j.stepIndex,
                        E = j.steps,
                        k = _[1],
                        w = (0, g.U5)(),
                        z = w.data,
                        B = w.isFetching,
                        Z = null === z || void 0 === z || null === (e = z.userStatus) || void 0 === e ? void 0 : e.isSignedIn,
                        G = null === z || void 0 === z || null === (t = z.userStatus) || void 0 === t ? void 0 : t.showGuideIde,
                        A = (0, d.useMemo)((function() {
                            return !(B || !Z) && G
                        }), [Z, G, B]),
                        R = (0, m.G)(),
                        O = (0, y.h)(),
                        D = I(),
                        L = [{
                            target: "#ide-top-btns",
                            title: n("toolbarTitle"),
                            content: n("toolbarContent"),
                            placement: "auto",
                            disableBeacon: !0
                        }, {
                            target: "#description_tabbar_outer",
                            title: n("tabsTitle"),
                            content: n("tabsContent"),
                            placement: "auto",
                            disableBeacon: !0
                        }, {
                            target: ".flexlayout__splitter",
                            title: n("resizeTitle"),
                            content: n("resizeContent"),
                            placement: "auto",
                            disableBeacon: !0
                        }, {
                            target: ".flexlayout__tab_toolbar .maximize",
                            title: n("maximizeTitle"),
                            content: n("maximizeContent"),
                            placement: "auto",
                            disableBeacon: !0
                        }, {
                            target: "#testcase_tabbar_outer .fold",
                            title: n("expandCollapseTitle"),
                            content: n("expandCollapseContent"),
                            placement: "top",
                            disableBeacon: !0
                        }, {
                            target: "#nav-setting-btn",
                            title: n("settingsTitle"),
                            content: n("settingsContent"),
                            placement: "auto",
                            disableBeacon: !0
                        }];
                    (0, d.useEffect)((function() {
                        b === f.u3.CodeEditor && L.shift(), c && k({
                            steps: L
                        })
                    }), [b, c]), (0, d.useEffect)((function() {
                        k({
                            run: c
                        })
                    }), [c]), (0, d.useEffect)((function() {
                        T(R ? {
                            border: "2px solid #1a90ff"
                        } : {
                            border: "2px solid #007aff"
                        })
                    }), [R]);
                    if (!A && !c) return null;
                    return (0, o.jsxs)("div", {
                        className: "font-spprop",
                        children: [A && !c && (0, o.jsx)(S, {
                            handleEnableIde: function() {
                                var e;
                                null === O || void 0 === O || O.selectTab(f.r.Description), (null === z || void 0 === z || null === (e = z.userStatus) || void 0 === e ? void 0 : e.isSignedIn) && D(), setTimeout((function() {
                                    x(!0)
                                }), 400)
                            }
                        }), c && (0, o.jsx)(r.ZP, {
                            callback: function(e) {
                                var t = e.action,
                                    n = e.index,
                                    a = e.status,
                                    i = e.type;
                                if ([r.Q_.FINISHED, r.Q_.SKIPPED].includes(a)) {
                                    var l = document.getElementsByClassName("flexlayout__tab_toolbar");
                                    Array.prototype.forEach.call(l, (function(e) {
                                        return e.removeAttribute("style")
                                    })), k({
                                        run: !1,
                                        stepIndex: 0
                                    }), x(!1)
                                } else if (r.FP.TOUR_START === i) {
                                    var o;
                                    k({
                                        run: !0
                                    });
                                    var s = null === (o = document.getElementsByClassName("flexlayout__tab_toolbar")) || void 0 === o ? void 0 : o[0];
                                    s && (s.style.display = "flex")
                                } else if (r.FP.STEP_AFTER === i) {
                                    var d = n + (t === r.aO.PREV ? -1 : 1),
                                        c = b === f.u3.CodeEditor ? n + 1 : n;
                                    2 === c && t === r.aO.PREV ? (null === O || void 0 === O || O.selectTab(f.r.Description), setTimeout((function() {
                                        k({
                                            stepIndex: d
                                        })
                                    }), 400)) : 3 === c && t === r.aO.NEXT ? (null === O || void 0 === O || O.selectTab(f.r.Testcase), setTimeout((function() {
                                        var e, t, n = null === (t = null === (e = document.getElementById("testcase_tabbar_outer")) || void 0 === e ? void 0 : e.getElementsByClassName("flexlayout__tab_toolbar")) || void 0 === t ? void 0 : t[0];
                                        n && (n.style.display = "flex"), k({
                                            stepIndex: d
                                        })
                                    }), 400)) : 4 === c && t === r.aO.PREV ? (null === O || void 0 === O || O.selectTab(f.r.Code), setTimeout((function() {
                                        var e, t, n = null === (t = null === (e = document.getElementById("code_tabbar_outer")) || void 0 === e ? void 0 : e.getElementsByClassName("flexlayout__tab_toolbar")) || void 0 === t ? void 0 : t[0];
                                        n && (n.style.display = "flex"), k({
                                            stepIndex: d
                                        })
                                    }), 400)) : k({
                                        stepIndex: d
                                    })
                                } else if (r.FP.TARGET_NOT_FOUND === i) {
                                    var u = n + (t === r.aO.PREV ? -1 : 1);
                                    t === r.aO.PREV ? (null === O || void 0 === O || O.selectTab(f.r.Description), setTimeout((function() {
                                        k({
                                            stepIndex: u
                                        })
                                    }), 400)) : t === r.aO.NEXT && (null === O || void 0 === O || O.selectTab(f.r.Code), setTimeout((function() {
                                        var e, t, n = null === (t = null === (e = document.getElementById("code_tabbar_outer")) || void 0 === e ? void 0 : e.getElementsByClassName("flexlayout__tab_toolbar")) || void 0 === t ? void 0 : t[0];
                                        n && (n.style.display = "flex"), k({
                                            stepIndex: u
                                        })
                                    }), 400))
                                }
                            },
                            continuous: !0,
                            run: c && P,
                            scrollToFirstStep: !0,
                            disableOverlayClose: !0,
                            showProgress: !0,
                            steps: E,
                            stepIndex: C,
                            tooltipComponent: F,
                            styles: {
                                options: {
                                    zIndex: 1e4
                                },
                                spotlight: (0, i.Z)({
                                    borderRadius: "8px",
                                    backgroundColor: "none",
                                    boxShadow: "0px 0px 0px 99999px rgba(15, 15, 15, 0.6)"
                                }, h),
                                overlay: {
                                    backgroundColor: "none",
                                    mixBlendMode: "unset"
                                }
                            },
                            floaterProps: {
                                hideArrow: !0,
                                styles: {
                                    floater: {
                                        pointerEvents: "auto"
                                    }
                                }
                            },
                            spotlightPadding: 4
                        })]
                    })
                },
                Z = B
        }
    }
]);