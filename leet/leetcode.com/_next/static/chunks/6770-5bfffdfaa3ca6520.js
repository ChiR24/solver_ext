(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6770], {
        58403: function(e, n, t) {
            var r = t(87537),
                i = t(23645)(r);
            i.push([e.id, ".n1hiL *{display:inline!important}", "", {
                version: 3,
                sources: ["webpack://./shared/components/nav/components/notification/lcus/notification-item.iso.css"],
                names: [],
                mappings: "AAAA,SACE,wBACF",
                sourcesContent: [".content * {\n  display: inline !important;\n}\n"],
                sourceRoot: ""
            }]), i.locals = {
                content: "n1hiL"
            }, e.exports = i
        },
        74316: function(e, n, t) {
            var r = t(87537),
                i = t(23645)(r);
            i.push([e.id, ".C6UnP>div{max-width:100%;padding:0 12px}", "", {
                version: 3,
                sources: ["webpack://./shared/components/nav/navbar/index.iso.css"],
                names: [],
                mappings: "AAAA,WACE,cAAe,CACf,cACF",
                sourcesContent: [".bannerContentWidthFull>div {\n  max-width: 100%;\n  padding: 0 12px;\n}\n"],
                sourceRoot: ""
            }]), i.locals = {
                bannerContentWidthFull: "C6UnP"
            }, e.exports = i
        },
        66188: function(e, n, t) {
            "use strict";
            t.d(n, {
                y: function() {
                    return h
                }
            });
            var r = t(14924),
                i = t(26042),
                a = t(10253),
                o = t(27484),
                s = t.n(o),
                l = t(11163),
                c = t(67294),
                u = t(66247),
                d = t(72058),
                v = t(52300),
                f = t(63808),
                m = t(88525),
                p = function() {
                    return (0, m.BnF)(f.f6, {}, {
                        select: function(e) {
                            var n;
                            return (null === e || void 0 === e || null === (n = e.siteAnnouncements) || void 0 === n ? void 0 : n.map((function(e) {
                                return {
                                    title: (null === e || void 0 === e ? void 0 : e.title) || (0, v.cv)((null === e || void 0 === e ? void 0 : e.content) || "").slice(0, 10),
                                    content: (null === e || void 0 === e ? void 0 : e.content) || "",
                                    navbarItem: (null === e || void 0 === e ? void 0 : e.navbarItem) || "",
                                    whitelistUrls: (null === e || void 0 === e ? void 0 : e.whitelistUrls) || null,
                                    blacklistUrls: (null === e || void 0 === e ? void 0 : e.blacklistUrls) || null
                                }
                            }))) || []
                        }
                    })
                },
                h = function() {
                    var e = (0, d.i)().width,
                        n = Number(e) < 680,
                        t = function() {
                            var e = (0, a.Z)((0, u._)("announcementExpiration", {}), 2),
                                n = e[0],
                                t = e[1];
                            (0, c.useEffect)((function() {
                                var e = Object.entries(n).reduce((function(e, t) {
                                    var o = (0, a.Z)(t, 2),
                                        l = o[0],
                                        c = o[1];
                                    return (0, i.Z)({}, e, s()(n[l]).isBefore(s()()) ? {} : (0, r.Z)({}, l, c))
                                }), {});
                                t(e)
                            }), []);
                            var o = (0, c.useCallback)((function(e) {
                                var n = s()().add(1, "d").valueOf();
                                t((function(t) {
                                    return (0, i.Z)({}, t, (0, r.Z)({}, e, n))
                                }))
                            }), [t]);
                            return {
                                isExpired: (0, c.useCallback)((function(e) {
                                    return !(n[e] && s()(Number(n[e])).isValid()) || s()(n[e]).isBefore(s()())
                                }), [n]),
                                setToExpire: o
                            }
                        }(),
                        o = t.isExpired,
                        v = t.setToExpire,
                        f = p().data,
                        m = (0, l.useRouter)().pathname,
                        h = (0, c.useMemo)((function() {
                            return (null === f || void 0 === f ? void 0 : f.length) ? f.filter((function(e) {
                                var n = Boolean(null === e || void 0 === e ? void 0 : e.whitelistUrls),
                                    t = Boolean(null === e || void 0 === e ? void 0 : e.blacklistUrls),
                                    r = !!(null === e || void 0 === e ? void 0 : e.whitelistUrls) && !!m.match(new RegExp(e.whitelistUrls, "g")),
                                    i = !!(null === e || void 0 === e ? void 0 : e.blacklistUrls) && !!m.match(new RegExp(e.blacklistUrls, "g"));
                                return o(e.title) && (n && r || !n && t && !i)
                            })) : []
                        }), [f, o, m]);
                    return {
                        announcements: (0, c.useMemo)((function() {
                            return h.map((function(e) {
                                return {
                                    content: e.content,
                                    navbarItem: e.navbarItem,
                                    setHidden: function() {
                                        return v(e.title)
                                    }
                                }
                            }))
                        }), [h, v]),
                        navbarItems: (0, c.useMemo)((function() {
                            return f ? f.map((function(e) {
                                return e.navbarItem
                            })).filter(Boolean) : []
                        }), [f]),
                        isMobile: n
                    }
                }
        },
        92068: function(e, n, t) {
            "use strict";
            t.d(n, {
                pe: function() {
                    return a
                }
            });
            var r = t(88525),
                i = t(63808),
                a = function() {
                    return (0, r.R_I)(i.f6, {}, {
                        staleTime: 1e3,
                        refetchInterval: 3e5
                    })
                }
        },
        79185: function(e, n, t) {
            "use strict";
            t.d(n, {
                C: function() {
                    return a
                }
            });
            var r = t(88525),
                i = t(63808),
                a = function(e, n) {
                    var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return (0, r.ifT)(i.f6, {
                        year: e,
                        month: n
                    }, {
                        enabled: t,
                        select: function(e) {
                            return e.dailyChallengeMedal
                        }
                    })
                }
        },
        83714: function(e, n, t) {
            "use strict";
            var r;
            t.d(n, {
                    _: function() {
                        return r
                    }
                }),
                function(e) {
                    e.NotStart = "NOT_START", e.Finish = "FINISH"
                }(r || (r = {}))
        },
        33701: function(e, n, t) {
            "use strict";
            t.d(n, {
                M: function() {
                    return r
                }
            });
            var r = t(17396).dE
        },
        27153: function(e, n, t) {
            "use strict";
            t.d(n, {
                w: function() {
                    return o
                }
            });
            var r = t(26042),
                i = t(69396),
                a = t(85893),
                o = t(67294).forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4zm5.718 9.304a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 14.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 15a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 16h2l.117-.007A1 1 0 0017 15zm-5.282-7.696a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 8.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 9a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 10h2l.117-.007A1 1 0 0017 9z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        66855: function(e, n, t) {
            "use strict";
            t.d(n, {
                h: function() {
                    return o
                }
            });
            var r = t(26042),
                i = t(69396),
                a = t(85893),
                o = t(67294).forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        27632: function(e, n, t) {
            "use strict";
            t.d(n, {
                a: function() {
                    return o
                }
            });
            var r = t(26042),
                i = t(69396),
                a = t(85893),
                o = t(67294).forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2zm0 14C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        65863: function(e, n, t) {
            "use strict";
            t.d(n, {
                U: function() {
                    return o
                }
            });
            var r = t(26042),
                i = t(69396),
                a = t(85893),
                o = t(67294).forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M14 20h3a1 1 0 001-1V5a1 1 0 00-1-1H7a1 1 0 00-1 1v14a1 1 0 001 1h3v-2a1 1 0 011-1h2a1 1 0 011 1v2zM7 2h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zm2.5 4h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm0 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm0 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm4-6h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm0 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm0 3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        43106: function(e, n, t) {
            "use strict";
            t.d(n, {
                Q: function() {
                    return o
                }
            });
            var r = t(26042),
                i = t(69396),
                a = t(85893),
                o = t(67294).forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, r.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M8.5 4.587v7.182c0 .575.184 1.463.707 2.18.487.665 1.312 1.251 2.793 1.251 1.48 0 2.306-.586 2.793-1.252.523-.716.707-1.604.707-2.179V4.587a10.732 10.732 0 00-7 0zm-1.557 9.371A5.957 5.957 0 016.5 11.77V8.6c-.536-.116-1.12-.158-1.587-.05-.312.073-.514.198-.644.358C4.14 9.064 4 9.357 4 9.923c0 1.399.848 2.694 2.361 3.687.186.122.38.238.582.348zM6.5 6.566V3.923a1 1 0 01.544-.89C7.779 2.656 9.674 2 12 2c2.325 0 4.221.656 4.956 1.033a1 1 0 01.544.89v2.643c.647-.101 1.364-.122 2.038.035.626.145 1.267.455 1.746 1.045.482.594.716 1.367.716 2.277 0 2.294-1.402 4.137-3.264 5.36-1.609 1.055-3.649 1.716-5.736 1.878V20h4.4a1 1 0 110 2H6.6a1 1 0 110-2H11v-2.839c-2.087-.162-4.127-.823-5.736-1.879C3.402 14.06 2 12.217 2 9.923c0-.91.234-1.683.716-2.277.48-.59 1.12-.9 1.746-1.045.674-.157 1.391-.136 2.038-.035zm11 2.033c.536-.116 1.12-.158 1.587-.05.312.073.515.198.645.358.127.157.268.45.268 1.016 0 1.399-.848 2.694-2.361 3.687-.186.122-.38.238-.582.348a5.956 5.956 0 00.443-2.189V8.6z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        45309: function(e, n, t) {
            "use strict";
            t.d(n, {
                z: function() {
                    return a
                }
            });
            var r = t(88525),
                i = t(63808),
                a = function() {
                    return (0, r.SjB)(i.f6)
                }
        },
        87887: function(e, n, t) {
            "use strict";
            t.d(n, {
                qe: function() {
                    return l
                }
            });
            var r = t(26042),
                i = t(69396),
                a = t(88525),
                o = t(63808),
                s = t(83714),
                l = function() {
                    return (0, a.a3m)(o.f6, {}, {
                        select: function(e) {
                            var n = e.activeDailyCodingChallengeQuestion;
                            if (!n) return null;
                            var t = n.userStatus,
                                o = n.date,
                                l = n.question,
                                c = n.link,
                                u = s._.NotStart;
                            return t === a.DRm.Finish && (u = s._.Finish), {
                                link: c,
                                status: u,
                                date: o,
                                question: (0, i.Z)((0, r.Z)({}, l), {
                                    frontendQuestionId: l.frontendQuestionId
                                })
                            }
                        }
                    })
                }
        },
        31009: function(e, n, t) {
            "use strict";
            t.d(n, {
                Y: function() {
                    return i
                }
            });
            t(85893), t(11163), t(14779), t(67294);
            var r = t(82723);
            var i = r.E
        },
        52909: function(e, n, t) {
            "use strict";
            t.d(n, {
                x: function() {
                    return i
                }
            });
            t(85893), t(67294);
            var r = t(82723),
                i = r.E
        },
        50315: function(e, n, t) {
            "use strict";
            t.d(n, {
                V: function() {
                    return v
                }
            });
            var r = t(85893),
                i = (t(67294), t(41664)),
                a = t.n(i),
                o = t(94184),
                s = t.n(o),
                l = t(11321),
                c = t(92845),
                u = t(11516),
                d = t(70341),
                v = function() {
                    var e = (0, l.$G)("common").t,
                        n = (0, c.s)(),
                        t = n ? d.Hb.register() : "",
                        i = n ? d.Hb.signIn() : "";
                    return (0, r.jsxs)("div", {
                        className: "flex items-center whitespace-nowrap",
                        children: [(0, r.jsx)(a(), {
                            href: t,
                            passHref: !0,
                            children: (0, r.jsx)("a", {
                                className: s()(u.nx.labelTextSecondary, u.rG.labelTextPrimary, "hidden lg:flex"),
                                children: e("pages.register")
                            })
                        }), (0, r.jsx)("span", {
                            className: s()("mx-3 hidden lg:inline-block", u.nx.labelTextSecondary),
                            children: e("conjunctions.or")
                        }), (0, r.jsx)(a(), {
                            href: i,
                            passHref: !0,
                            children: (0, r.jsx)("a", {
                                className: s()(u.nx.labelTextSecondary, u.rG.labelTextPrimary),
                                id: "navbar_sign_in_button",
                                children: e("pages.signIn")
                            })
                        })]
                    })
                }
        },
        4988: function(e, n, t) {
            "use strict";
            t.d(n, {
                W: function() {
                    return i
                }
            });
            var r = t(15371),
                i = {
                    navItem: "flex items-center pb-3 text-base leading-[22px]\n   cursor-pointer",
                    navItemPrimary: "".concat(r.Cj.label2),
                    navItemBrandOrange: "text-brand-orange border-brand-orange",
                    navItemHover: r.Cj.label1Hover,
                    navItemActive: "border-opacity-1 dark:border-opacity-1",
                    dropdownTransition: {
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95"
                    },
                    menuItems: "flex flex-col absolute top-8 z-dropdown rounded-lg p-2 overflow-auto focus:outline-none text-sm ".concat(r.eq.commandBar),
                    menuItemsBg: r.Cj.bgOverlay3,
                    menuItem: "cursor-pointer select-none relative h-8 py-1.5 pl-2 pr-4 whitespace-nowrap",
                    menuItemText: r.Cj.label1,
                    menuItemHover: "".concat(r.Cj.fill4Hover, " rounded"),
                    navIcon: "rounded w-8 h-8 relative flex items-center justify-center",
                    menuButton: "flex items-center focus:outline-none",
                    popoverTransition: {
                        enter: "transition ease-in duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1"
                    },
                    drawerTransition: {
                        enter: "transition ease-out duration-200",
                        enterFrom: "transform translate-y-0",
                        enterTo: "transform translate-y-1",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform translate-y-1",
                        leaveTo: "transform translate-y-0"
                    }
                }
        },
        14995: function(e, n, t) {
            "use strict";
            t.d(n, {
                l: function() {
                    return r
                }
            });
            var r = "navbar__custom-item"
        },
        51240: function(e, n, t) {
            "use strict";
            t.d(n, {
                J: function() {
                    return l
                }
            });
            var r = t(27484),
                i = t.n(r),
                a = t(67294),
                o = t(45309),
                s = "SHOWN_NEW_FEATURE_HINT_",
                l = function() {
                    var e = (0, a.useState)([]),
                        n = e[0],
                        t = e[1],
                        r = (0, o.z)(),
                        l = r.data,
                        c = r.isInitialLoading;
                    (0, a.useEffect)((function() {
                        if (!c && 0 !== (null === l || void 0 === l ? void 0 : l.premiumBetaFeatures.length)) {
                            var e, n = null !== (e = null === l || void 0 === l ? void 0 : l.premiumBetaFeatures.map((function(e) {
                                return e.id
                            }))) && void 0 !== e ? e : [];
                            try {
                                var r, i = null !== (r = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                                    return !localStorage.getItem("".concat(s).concat(e))
                                }))) && void 0 !== r ? r : [];
                                if (0 === i.length) return;
                                t(i)
                            } catch (a) {
                                t(n)
                            }
                        }
                    }), [l, c]);
                    return (0, a.useEffect)((function() {
                        var e = i()(),
                            n = Object.keys(localStorage);
                        try {
                            n.forEach((function(n) {
                                n.startsWith(s) && (i()(localStorage.getItem(n)).isBefore(e.subtract(1, "year")) && localStorage.removeItem(n))
                            }))
                        } catch (t) {}
                    }), []), {
                        hasNewFeatures: n.length > 0,
                        hiddenRedPoint: function() {
                            0 !== n.length && (n.forEach((function(e) {
                                localStorage.setItem("".concat(s).concat(e), i()().format("YYYY-MM-DD"))
                            })), t([]))
                        }
                    }
                }
        },
        61672: function(e, n, t) {
            "use strict";
            t.d(n, {
                Tq: function() {
                    return C
                },
                yV: function() {
                    return j
                },
                v$: function() {
                    return _
                }
            });
            var r = t(26042),
                i = t(69396),
                a = t(26793),
                o = t(50632),
                s = t(46991),
                l = t(80692),
                c = t(31799),
                u = (t(85893), t(50576)),
                d = (t(41664), t(94184), t(30845)),
                v = (t(67294), t(8183)),
                f = t(23025),
                m = {
                    collectionUserDropdownExposure: function() {
                        var e = {
                            key: "collection_user_dropdown_exposure",
                            data: {}
                        };
                        v.V[f.X.GIO](e), v.V[f.X.GA4](e), v.V[f.X.CONSOLE](e), v.V[f.X.SELF_DB](e)
                    },
                    collectionUserDropdownCollectionClick: function() {
                        var e = {
                            key: "collection_user_dropdown_collection_click",
                            data: {}
                        };
                        v.V[f.X.GIO](e), v.V[f.X.GA4](e), v.V[f.X.CONSOLE](e), v.V[f.X.SELF_DB](e)
                    }
                },
                p = t(70341),
                h = "/_next/static/images/notebook-92e90c87d33d7403f2f016c245b203a7.png",
                g = "/_next/static/images/answer-9dab99b273b399a43f8826c193d187d5.png",
                k = "/_next/static/images/progress-106c8d8956a5f08d22006a6ea911e6c3.png",
                b = "/_next/static/images/coin-9ed5754318458315a57c46abd2f431c1.png",
                x = "/_next/static/images/list-a671ce9b1030394bb8b1b3d433e1199c.png",
                w = (0, d.default)((function(e) {
                    return [{
                        key: "myLists",
                        img: x,
                        url: p.Hb.problemList(),
                        track: m.collectionUserDropdownCollectionClick,
                        name: e("userMenu.categories.myList")
                    }, {
                        key: "notebook",
                        img: h,
                        url: "/notes",
                        name: e("userMenu.categories.notebook")
                    }, {
                        key: "submissions",
                        img: g,
                        url: e("links.profileArticles"),
                        name: e("userMenu.categories.submissions")
                    }, {
                        key: "progress",
                        img: k,
                        url: "/progress",
                        name: e("userMenu.categories.progress")
                    }, {
                        key: "points",
                        img: b,
                        url: "/points",
                        name: e("userMenu.categories.points")
                    }]
                }), u.Z),
                y = ((0, d.default)((function(e) {
                    return [{
                        key: "list",
                        img: x,
                        url: p.Hb.problemList(),
                        track: m.collectionUserDropdownCollectionClick,
                        name: "\u9898\u5355"
                    }, {
                        key: "myList",
                        img: "/_next/static/images/starred-2e4c5ddcac0ba3a09087d8ff98eff50c.png",
                        url: "/collection/",
                        name: e("userMenu.categories.myList")
                    }, {
                        key: "notebook",
                        img: h,
                        url: "/notes",
                        name: e("userMenu.categories.notebook")
                    }, {
                        key: "submissions",
                        img: g,
                        url: e("links.profileArticles"),
                        name: e("userMenu.categories.submissions")
                    }, {
                        key: "progress",
                        img: k,
                        url: "/progress",
                        name: e("userMenu.categories.progress")
                    }, {
                        key: "points",
                        img: b,
                        url: "/points",
                        name: e("userMenu.categories.points")
                    }]
                }), u.Z), w),
                C = function(e) {
                    var n = (0, a.$)("common").t;
                    return y(n).map((function(n) {
                        return (0, i.Z)((0, r.Z)({}, n), {
                            track: function() {
                                n.track && n.track(), l.$.navbarElementClick({
                                    navbar_env: e,
                                    navbar_entry_key: n.name
                                })
                            }
                        })
                    }))
                },
                _ = function() {
                    var e, n = (0, o.U5)(),
                        t = n.data,
                        r = n.isInitialLoading,
                        i = null !== (e = null === t || void 0 === t ? void 0 : t.userStatus) && void 0 !== e ? e : {},
                        a = i.isPremium,
                        s = i.username,
                        l = i.name,
                        c = i.userSlug,
                        u = i.avatar,
                        d = i.isSignedIn;
                    return {
                        data: {
                            isPremium: a,
                            username: s,
                            name: l,
                            avatar: u,
                            userSlug: c,
                            premiumExpiredAt: i.premiumExpiredAt || 0,
                            isSignedIn: d
                        },
                        isLoadingGlobalData: r
                    }
                },
                j = function(e) {
                    var n = (0, a.$)("common").t;
                    return {
                        noPremiumLink: (0, s.l)(n("links.premium"), {
                            ref: c.D.UserMenuPremiumLink,
                            source: e || s.g.Others
                        })
                    }
                }
        },
        56770: function(e, n, t) {
            "use strict";
            t.d(n, {
                l: function() {
                    return Me
                }
            });
            var r = t(14924),
                i = t(26042),
                a = t(69396),
                o = t(85893),
                s = t(1156),
                l = t(67294),
                c = t(11163),
                u = t(12922),
                d = t(50632),
                v = t(75117),
                f = t(80692),
                m = t(19935),
                p = t(52909),
                h = t(31009),
                g = t(78030),
                k = t(29815),
                b = t(26793),
                x = t(33701),
                w = t(46991),
                y = l.forwardRef((function(e, n) {
                    return (0, o.jsxs)("svg", (0, a.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: [(0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M13.183 13.68a1 1 0 00.365-.365l3.144-5.434c.1-.174-.09-.371-.267-.276l-5.57 2.97a1 1 0 00-.412.411l-2.97 5.57c-.095.178.102.369.276.268l5.434-3.144zm-.736-.934a.75.75 0 11-1.061-1.061.75.75 0 011.06 1.06z",
                            clipRule: "evenodd"
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z",
                            clipRule: "evenodd"
                        })]
                    }))
                })),
                C = t(27153),
                _ = t(94713),
                j = t(43106),
                S = t(65863),
                L = l.forwardRef((function(e, n) {
                    return (0, o.jsxs)("svg", (0, a.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: [(0, o.jsx)("path", {
                            d: "M4 4a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18 14H6v5h12v-5zM4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7H4z",
                            clipRule: "evenodd"
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4.766 8l-.5 4h15.468l-.5-4H4.766zm-.883-2a1 1 0 00-.993.876l-.75 6A1 1 0 003.133 14h17.734a1 1 0 00.992-1.124l-.75-6A1 1 0 0020.117 6H3.883z",
                            clipRule: "evenodd"
                        }), (0, o.jsx)("path", {
                            d: "M14 12h2v9h-2v-9z"
                        })]
                    }))
                })),
                N = t(64572),
                E = t(61672),
                V = t(86697),
                M = t(14478),
                I = {
                    IS_LCUS: v.Oo
                },
                A = function() {
                    var e = (0, b.$)("common").t;
                    return [{
                        icon: (0, o.jsx)(y, {
                            height: 18,
                            width: 18
                        }),
                        href: e("links.explore"),
                        content: e("pages.explore"),
                        onClick: function() {
                            return f.$.navbarElementClick({
                                navbar_env: "mobile",
                                navbar_entry_key: e("links.explore")
                            })
                        }
                    }, {
                        icon: (0, o.jsx)(C.w, {
                            height: 18,
                            width: 18
                        }),
                        href: "/problemset",
                        content: e("pages.problems"),
                        onClick: function() {
                            return f.$.navbarElementClick({
                                navbar_env: "mobile",
                                navbar_entry_key: "/problemset"
                            })
                        }
                    }, {
                        icon: (0, o.jsx)(_.h, {
                            height: 18,
                            width: 18
                        }),
                        href: e("links.discuss"),
                        content: e("pages.discuss"),
                        onClick: function() {
                            return f.$.navbarElementClick({
                                navbar_env: "mobile",
                                navbar_entry_key: e("links.discuss")
                            })
                        }
                    }, {
                        icon: (0, o.jsx)(j.Q, {
                            height: 18,
                            width: 18
                        }),
                        href: "/contest",
                        content: e("pages.contest"),
                        onClick: function() {
                            return f.$.navbarElementClick({
                                navbar_env: "mobile",
                                navbar_entry_key: "/contest"
                            })
                        }
                    }]
                },
                R = function() {
                    var e = (0, b.$)("common").t,
                        n = A(),
                        t = {
                            icon: (0, o.jsx)(S.U, {
                                height: 18,
                                width: 18
                            }),
                            hideHover: !0,
                            content: e("pages.interview.interview"),
                            childMenus: [{
                                icon: null,
                                href: e("links.onlineInterview"),
                                content: e("pages.interview.onlineInterview"),
                                onClick: function() {
                                    return f.$.navbarElementClick({
                                        navbar_env: "mobile",
                                        navbar_entry_key: e("pages.interview.onlineInterview")
                                    })
                                }
                            }, {
                                icon: null,
                                href: e("links.assessment"),
                                content: e("pages.interview.assessment"),
                                secondary: !0,
                                onClick: function() {
                                    return f.$.navbarElementClick({
                                        navbar_env: "mobile",
                                        navbar_entry_key: e("pages.interview.assessment")
                                    })
                                }
                            }]
                        },
                        r = {
                            icon: (0, o.jsx)(L, {
                                height: 18,
                                width: 18
                            }),
                            hideHover: !0,
                            content: e("pages.store.store"),
                            childMenus: [{
                                icon: null,
                                href: "/store",
                                content: e("pages.store.redeem"),
                                secondary: !0,
                                onClick: function() {
                                    return f.$.navbarElementClick({
                                        navbar_env: "mobile",
                                        navbar_entry_key: e("pages.store.redeem")
                                    })
                                }
                            }, {
                                icon: null,
                                href: (0, w.l)(e("links.premium"), {
                                    source: "nav-premium"
                                }),
                                content: e("pages.store.premium"),
                                secondary: !0,
                                onClick: function() {
                                    return f.$.navbarElementClick({
                                        navbar_env: "mobile",
                                        navbar_entry_key: e("pages.store.premium")
                                    })
                                }
                            }]
                        };
                    return (0, k.Z)(n).concat([t, r])
                },
                Z = function(e) {
                    var n = e.pageReference,
                        t = (0, E.yV)(n),
                        r = (0, V.j)("mobile"),
                        l = (0, E.v$)().data,
                        c = function() {
                            var e = R(),
                                n = (0, b.$)("common").t,
                                t = (0, d.U5)().data,
                                r = (0, x.M)().data;
                            if (!(0, M.rB)(t)) return e;
                            var i = (0, M.lT)(t, n, r).filter((function(e) {
                                    return !0 === e.displayCondition
                                })),
                                a = {
                                    icon: (0, o.jsx)(N.k, {
                                        height: 18,
                                        width: 18
                                    }),
                                    hideHover: !0,
                                    content: n("pages.admin.admin"),
                                    childMenus: []
                                };
                            return i.forEach((function(e) {
                                var n;
                                null === (n = a.childMenus) || void 0 === n || n.push({
                                    icon: null,
                                    href: e.linkProps.to,
                                    content: e.display,
                                    secondary: !0
                                })
                            })), e.push(a), e
                        }(),
                        u = (0, i.Z)((0, a.Z)((0, i.Z)({}, I), {
                            userCategories: (0, E.Tq)("mobile"),
                            menuActions: r,
                            userData: l,
                            navLinkList: c
                        }), t);
                    return (0, o.jsx)(s.nn, (0, i.Z)({}, u))
                },
                F = (t(5152), t(94184)),
                H = t.n(F),
                O = t(91106),
                P = t(31799),
                B = t(59353),
                z = t(47543),
                T = t(44151),
                U = t(86215),
                X = t(84539),
                D = t(88525),
                $ = t(63808),
                G = t(85945),
                W = t(54464),
                q = t(62018),
                Y = t(59403),
                Q = t(15371),
                J = t(41664),
                K = t.n(J),
                ee = t(16142),
                ne = function() {
                    return (0, o.jsxs)("div", {
                        className: H()(Q.Cj.label3, Q.Cj.bgLayer3, "flex h-[45px] items-center justify-between px-5"),
                        children: [(0, o.jsx)(K(), {
                            href: "/profile/notifications",
                            children: (0, o.jsx)("a", {
                                className: H()(Q.Cj.label3Hover, "hover:bg-fill-4 dark:hover:bg-dark-fill-4 cursor-pointer rounded-[15px] px-[10px] py-[5px] transition-colors duration-200"),
                                children: (0, o.jsx)(N.k, {
                                    width: 20,
                                    height: 20
                                })
                            })
                        }), (0, o.jsx)(K(), {
                            href: "/notifications",
                            children: (0, o.jsx)("a", {
                                className: H()(Q.Cj.label2Hover, "cursor-pointer transition-colors duration-200"),
                                children: (0, o.jsx)(ee.q, {
                                    width: 20,
                                    height: 20
                                })
                            })
                        })]
                    })
                },
                te = t(27484),
                re = t.n(te),
                ie = t(84110),
                ae = t.n(ie),
                oe = (t(25054), t(55354)),
                se = t.n(oe),
                le = t(90908),
                ce = t(66855),
                ue = t(27632),
                de = function(e) {
                    var n = e.type,
                        t = e.className;
                    switch (n) {
                        case "discuss.new_comment":
                            return (0, o.jsx)(le.f, {
                                className: H()(t, "text-blue dark:text-dark-blue")
                            });
                        case "discuss.question_comment_upvoted":
                            return (0, o.jsx)(ce.h, {
                                className: H()(t, "text-green-s dark:text-dark-green-s")
                            });
                        case "contest.contest":
                        case "contest.percentile_badge":
                            return (0, o.jsx)(j.Q, {
                                className: H()(t, "text-brand-orange")
                            });
                        default:
                            return (0, o.jsx)(ue.a, {
                                className: H()(t, "text-purple dark:text-dark-purple")
                            })
                    }
                };
            re().extend(ae());
            var ve = function(e) {
                var n = e.notification,
                    t = e.unread;
                (0, g.y)(se()), (0, l.useEffect)((function() {
                    re().locale("en")
                }), []);
                var r = n.notificationData,
                    i = r.content,
                    a = r.type,
                    s = r.metadata,
                    c = n.notificationId,
                    u = n.modifiedDate,
                    d = (0, D.GBW)($.f6),
                    v = (0, l.useCallback)((function() {
                        c && d.mutate({
                            id: c
                        });
                        var e = {
                            link: ""
                        };
                        try {
                            e = JSON.parse(s)
                        } catch (n) {
                            return
                        }
                        e.link && (window.location.href = e.link)
                    }), [c, d, s]);
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("div", {
                        className: H()("notification-item-container transition-colors", "item-container group relative mx-2.5 flex cursor-pointer items-center rounded-lg", Q.Cj.fill4Hover, Q.Cj.label1),
                        onClick: v,
                        children: [(0, o.jsx)("div", {
                            className: "bg-paper dark:bg-dark-gray-1 absolute -top-px hidden h-px w-full group-hover:block"
                        }), (0, o.jsx)("div", {
                            className: H()("mr-2.5 flex w-11 flex-none justify-center"),
                            children: (0, o.jsx)(de, {
                                type: a,
                                className: "h-6 w-6"
                            })
                        }), (0, o.jsxs)("div", {
                            className: H()("relative mr-2.5 flex grow border-b pb-[14px] pt-[15px] transition duration-200", "group-hover:border-b-0 group-hover:pb-[15px]", Q.Cj.divider2),
                            children: [(0, o.jsx)("div", {
                                className: "flex min-h-[40px] grow items-center pr-2 leading-5 opacity-80",
                                children: (0, o.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: i
                                    },
                                    className: se().content
                                })
                            }), (0, o.jsxs)("div", {
                                className: H()("flex w-[90px] flex-none items-center justify-end leading-5", Q.Cj.label3),
                                children: [re().unix(u).fromNow(), t && (0, o.jsx)("span", {
                                    className: H()("ml-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full", Q.Cj.bgBlueStandard)
                                })]
                            })]
                        })]
                    })
                })
            };

            function fe(e) {
                var n, t, r, s, c = e.numUnread,
                    u = e.handleReadNotifications,
                    d = (t = {
                        first: 15
                    }, (0, Y.N)(["fetchNotifications", t], (function(e) {
                        var n = e.pageParam,
                            r = void 0 === n ? t : n;
                        return $.f6.request(D.kQP, r).then((function(e) {
                            return e.notifications
                        }))
                    }), {
                        getNextPageParam: function(e) {
                            return (null === e || void 0 === e ? void 0 : e.pageInfo.endCursor) ? (0, a.Z)((0, i.Z)({}, t), {
                                after: null === e || void 0 === e ? void 0 : e.pageInfo.endCursor
                            }) : void 0
                        }
                    })),
                    v = d.data,
                    f = d.hasNextPage,
                    m = d.isFetching,
                    p = d.fetchNextPage,
                    h = null !== (s = null === v || void 0 === v || null === (n = v.pages) || void 0 === n ? void 0 : n.reduce((function(e, n) {
                        return e.concat(null !== (r = null === n || void 0 === n ? void 0 : n.edges) && void 0 !== r ? r : [])
                    }), []).filter((function(e) {
                        return null === e || void 0 === e ? void 0 : e.node
                    }))) && void 0 !== s ? s : [],
                    g = (0, G.NL)(),
                    k = (0, l.useRef)(null);
                (0, l.useEffect)((function() {
                    return function() {
                        g.resetQueries(["fetchNotifications"])
                    }
                }), [g]), (0, l.useEffect)((function() {
                    var e = window.setTimeout((function() {
                        u()
                    }), 1e3);
                    return function() {
                        window.clearTimeout(e)
                    }
                }), [u]);
                return (0, o.jsxs)("div", {
                    className: H()(Q.eq.modal, "bg-gray-1 shadow-level1 dark:bg-dark-gray-2 dark:shadow-dark-level1 flex h-[480px] w-full min-w-[320px] flex-col overflow-hidden rounded-lg md:w-[480px]"),
                    children: [(0, o.jsxs)("div", {
                        ref: k,
                        onScroll: function(e) {
                            e.stopPropagation();
                            var n = e.currentTarget;
                            n.scrollTop > n.scrollHeight - n.clientHeight - 100 && f && !m && p()
                        },
                        className: H()(Q.Cj.bgLayer1, "flex-1 overflow-y-auto overflow-x-hidden py-[10px]", h.length < 1 ? "flex w-full items-center justify-center" : ""),
                        style: {
                            boxShadow: "0 1px 8px rgba(0,0,0,0.03)",
                            overscrollBehavior: "contain"
                        },
                        children: [h.map((function(e, n) {
                            return (0, o.jsx)(ve, {
                                notification: e.node,
                                unread: n < c
                            }, n)
                        })), !m && !h.length && (0, o.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, o.jsx)(W.PlaceholderForNull, {})
                        }), m && (0, o.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, o.jsx)(q.g, {})
                        })]
                    }), (0, o.jsx)(ne, {})]
                })
            }
            var me = t(4988),
                pe = function() {
                    var e, n, t, r = (0, d.U5)(),
                        c = r.isFetching,
                        u = r.data,
                        v = (0, l.useState)(0),
                        f = v[0],
                        m = v[1],
                        p = (t = {
                            onSuccess: function() {
                                m(0)
                            }
                        }, (0, D.Aii)($.f6, t)).mutate,
                        h = (0, l.useCallback)((function() {
                            p({})
                        }), [p]);
                    return (0, l.useEffect)((function() {
                        var e, n, t;
                        c || m(null !== (t = null === u || void 0 === u || null === (e = u.userStatus) || void 0 === e || null === (n = e.notificationStatus) || void 0 === n ? void 0 : n.numUnread) && void 0 !== t ? t : 0)
                    }), [c, null === u || void 0 === u || null === (e = u.userStatus) || void 0 === e || null === (n = e.notificationStatus) || void 0 === n ? void 0 : n.numUnread]), (0, o.jsx)(U.J, {
                        className: "md:relative",
                        children: function() {
                            return (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(U.J.Button, {
                                    className: H()(me.W.menuButton),
                                    "aria-label": "notification",
                                    children: (0, o.jsx)(s.wN, {
                                        hasUnread: f > 0
                                    })
                                }), (0, o.jsx)(X.u, (0, a.Z)((0, i.Z)({
                                    as: l.Fragment
                                }, me.W.popoverTransition), {
                                    children: (0, o.jsx)(U.J.Panel, {
                                        className: H()("z-nav fixed left-0 top-10 mt-1 w-full focus:outline-none md:absolute md:-left-96 md:w-auto lg:-left-96"),
                                        children: (0, o.jsx)(fe, {
                                            numUnread: f,
                                            handleReadNotifications: h
                                        })
                                    })
                                }))]
                            })
                        }
                    })
                };
            var he = function() {
                    return (0, o.jsx)(pe, {})
                },
                ge = t(50315),
                ke = l.Fragment,
                be = function(e) {
                    var n = e.sourceInfo,
                        t = e.pageReference,
                        r = e.replaceSearchComponent,
                        i = (0, E.v$)(),
                        a = i.data,
                        s = i.isLoadingGlobalData,
                        l = (0, O.f)();
                    return s || !l ? null : (0, o.jsxs)("div", {
                        className: H()("relative flex items-center space-x-2"),
                        children: [r || (0, o.jsx)(ke, {}), a.isSignedIn ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(he, {}), (0, o.jsx)(T.c, {}), (0, o.jsx)(z.x, {
                                pageReference: t
                            })]
                        }) : (0, o.jsx)(ge.V, {}), a.isSignedIn && a.isPremium ? null : (0, o.jsx)(B.Y, {
                            sourceInfo: n,
                            pageReference: t,
                            queryObject: {
                                ref: P.D.LandingPagePremiumLink,
                                source: null !== t && void 0 !== t ? t : ""
                            }
                        })]
                    })
                },
                xe = t(11321),
                we = t(66188),
                ye = t(14995),
                Ce = function() {
                    var e = (0, xe.$G)("common").t;
                    return [{
                        href: e("links.explore"),
                        children: e("pages.explore")
                    }, {
                        href: "/problemset",
                        children: e("pages.problems"),
                        basePath: ["/problemset", "/study-plan", "/studyplan", "/problem-list"]
                    }, {
                        href: "/contest",
                        children: e("pages.contest")
                    }, {
                        href: e("links.discuss"),
                        children: e("pages.discuss")
                    }]
                },
                _e = function() {
                    var e = (0, we.y)().navbarItems;
                    return e && 0 !== e.length ? {
                        children: (0, o.jsx)("div", {
                            className: (0, u.yI)("lc-lg:flex hidden h-full", ye.l)
                        })
                    } : null
                },
                je = function(e) {
                    var n = (0, xe.$G)("common").t,
                        t = Ce(),
                        r = _e(),
                        i = {
                            parentName: n("pages.interview.interview"),
                            childMenus: [{
                                iconUrl: "/_next/static/images/online-interview-1003cc5c2dc07492e5457f23c23c3fdd.png",
                                href: n("links.onlineInterview"),
                                name: n("pages.interview.onlineInterview"),
                                onClick: function() {
                                    return f.$.navbarElementClick({
                                        navbar_env: "web",
                                        navbar_entry_key: n("pages.interview.onlineInterview")
                                    })
                                }
                            }, {
                                iconUrl: "/_next/static/images/mock-assessment-ec52dc2b74f65f082972a737d9feb820.png",
                                href: n("links.assessment"),
                                name: n("pages.interview.assessment"),
                                onClick: function() {
                                    return f.$.navbarElementClick({
                                        navbar_env: "web",
                                        navbar_entry_key: n("pages.interview.assessment")
                                    })
                                }
                            }]
                        },
                        a = {
                            useBrandOrange: !0,
                            parentName: n("pages.store.store"),
                            childMenus: [{
                                href: "/store",
                                name: n("pages.store.redeem"),
                                onClick: function() {
                                    return f.$.navbarElementClick({
                                        navbar_env: "web",
                                        navbar_entry_key: n("pages.store.redeem")
                                    })
                                }
                            }, {
                                href: (0, w.l)(n("links.premium"), {
                                    ref: P.D.StoreNewPremiumLink,
                                    source: null !== e && void 0 !== e ? e : w.g.Others
                                }),
                                name: n("pages.store.premium"),
                                onClick: function() {
                                    return f.$.navbarElementClick({
                                        navbar_env: "web",
                                        navbar_entry_key: n("pages.store.premium")
                                    })
                                }
                            }]
                        },
                        o = (0, k.Z)(t).concat([i, a]);
                    return r && o.push(r), o
                },
                Se = t(26973),
                Le = t.n(Se),
                Ne = v.Oo,
                Ee = ["/problemset", "/contest"],
                Ve = function(e, n) {
                    return {
                        checkCnUser: {
                            isSignedIn: e,
                            warpClassName: n ? Le().bannerContentWidthFull : ""
                        }
                    }
                };

            function Me(e) {
                var n, t, v, k = e.sourceInfo,
                    b = e.pageReference,
                    w = e.isWidthFull,
                    y = e.hiddenNavbar,
                    C = e.replaceSearchComponent,
                    _ = e.isFluid,
                    j = e.useMobilePaddingTop,
                    S = void 0 === j || j,
                    L = e.className;
                (0, g.y)(Le());
                var N = function(e) {
                        var n = je(e),
                            t = (0, xe.$G)("common").t,
                            r = (0, d.U5)().data,
                            i = (0, x.M)().data;
                        if (!(0, M.rB)(r, i)) return n;
                        var a = (0, M.lT)(r, t, i).filter((function(e) {
                                return !0 === e.displayCondition
                            })),
                            o = {
                                parentName: t("pages.admin.admin"),
                                childMenus: []
                            };
                        return a.forEach((function(e) {
                            var n;
                            null === (n = o.childMenus) || void 0 === n || n.push({
                                href: e.linkProps.to,
                                name: e.display
                            })
                        })), n.push(o), n
                    }(b),
                    E = (0, c.useRouter)(),
                    V = (0, d.U5)(),
                    I = V.data,
                    A = V.isInitialLoading,
                    R = Boolean(null === I || void 0 === I || null === (n = I.userStatus) || void 0 === n ? void 0 : n.isMockUser),
                    F = Boolean(null === I || void 0 === I || null === (t = I.userStatus) || void 0 === t ? void 0 : t.isSignedIn),
                    H = Boolean(null === I || void 0 === I || null === (v = I.userStatus) || void 0 === v ? void 0 : v.isVerified),
                    O = {
                        US_EN_LOGO: Ne,
                        navLinkList: N,
                        rightChild: A ? (0, o.jsx)(l.Fragment, {}) : (0, o.jsx)(be, {
                            sourceInfo: k,
                            pageReference: b,
                            replaceSearchComponent: C
                        }),
                        mobileMenuChildren: (0, o.jsx)(Z, {
                            pageReference: b
                        })
                    },
                    P = (0, l.useCallback)((function(e) {
                        var n = "web";
                        e.startsWith("mobile") && (n = "mobile"), f.$.navbarElementClick({
                            navbar_env: n,
                            navbar_entry_key: e
                        })
                    }), []),
                    B = F && !H;
                (0, l.useEffect)((function() {
                    B && f.$.navbarWarningVerifyEmailExposure()
                }), [B]);
                var z = (0, l.useCallback)((function() {
                    f.$.navbarWarningVerifyEmailClick()
                }), []);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(s.LX, (0, a.Z)((0, i.Z)((0, a.Z)((0, i.Z)({}, O), {
                        warpClassName: (0, u.yI)("bg-layer-1  dark:bg-dark-layer-1  z-nav-9", L),
                        className: (0, u.yI)(" z-nav-9", (0, r.Z)({
                            "bg-red-1 dark:bg-dark-red-1": R
                        }, "bg-layer-1  dark:bg-dark-layer-1", !R)),
                        onNavLinkClick: P,
                        routerPathname: E.pathname,
                        routLinks: {
                            routers: Ee,
                            routerAction: function(e) {
                                return E.push(e)
                            }
                        },
                        notVerifiedAlert: {
                            visible: B,
                            onClick: z,
                            isFull: w
                        },
                        hiddenNavbar: y
                    }), Ve(!(null === I || void 0 === I ? void 0 : I.userStatus) || F, w)), {
                        useMobilePaddingTop: S,
                        isFull: _
                    })), (0, o.jsx)(m.d, {}), (0, o.jsx)(p.x, {}), (0, o.jsx)(h.Y, {})]
                })
            }
        },
        86697: function(e, n, t) {
            "use strict";
            t.d(n, {
                j: function() {
                    return I
                }
            });
            var r = t(47568),
                i = t(26042),
                a = t(69396),
                o = t(29815),
                s = t(70655),
                l = t(85893),
                c = t(67294),
                u = t(31955),
                d = t(26793),
                v = t(82010),
                f = t(1156),
                m = t(50632),
                p = t(33073),
                h = t(68708),
                g = c.forwardRef((function(e, n) {
                    return (0, l.jsx)("svg", (0, a.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.979 3.552a.9.9 0 01.9-.9h8.132a.9.9 0 110 1.8h-.391v6.125l4.293 6.201c1.454 2.1-.05 4.97-2.604 4.97H6.852c-2.532 0-4.04-2.824-2.632-4.929l4.173-6.234V4.452h-.514a.9.9 0 01-.9-.9zm3.214.9v1.45h1.397a.9.9 0 110 1.8h-1.397v1.545h1.397a.9.9 0 110 1.8h-1.397v.084l-4.477 6.69a1.367 1.367 0 001.136 2.127H17.31c1.103 0 1.752-1.239 1.124-2.145l-4.613-6.664V4.452h-3.627z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                k = c.forwardRef((function(e, n) {
                    return (0, l.jsx)("svg", (0, a.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M14 2a2 2 0 011.995 1.85L16 4v1a2 2 0 01-1.85 1.995L14 7h-4a2 2 0 01-1.995-1.85L8 5V4a2 2 0 011.85-1.995L10 2h4zm3.96 2H18a3 3 0 012.995 2.824L21 7v12a3 3 0 01-2.824 2.995L18 22H6a3 3 0 01-2.995-2.824L3 19V7a3 3 0 012.824-2.995L6.056 4a1 1 0 01.117 1.993L6.056 6H6a1 1 0 00-.993.883L5 7v12a1 1 0 00.883.993L6 20h12a1 1 0 00.993-.883L19 19V7a1 1 0 00-.883-.993L18 6h-.04a1 1 0 01-.116-1.993L17.961 4zM15 14a1 1 0 01.117 1.993L15 16H9a1 1 0 01-.117-1.993L9 14h6zm1-3a1 1 0 00-1-1H9l-.117.007A1 1 0 009 12h6l.117-.007A1 1 0 0016 11zm-6-7h4v1h-4V4z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                b = c.forwardRef((function(e, n) {
                    return (0, l.jsx)("svg", (0, a.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 18a1 1 0 110 2H5.7C3.663 20 2 18.383 2 16.375v-8.75C2 5.617 3.663 4 5.7 4h12.6C20.337 4 22 5.617 22 7.625v4.813a1 1 0 11-2 0V7.625C20 6.734 19.245 6 18.3 6H5.7C4.755 6 4 6.734 4 7.625v8.75C4 17.266 4.755 18 5.7 18H12zm5-2v-1.5a1 1 0 012 0V16h1.5a1 1 0 010 2H19v1.5a1 1 0 01-2 0V18h-1.5a1 1 0 010-2H17zm-7.973-4L6.906 9.879A1 1 0 018.32 8.464l2.475 2.475a1.5 1.5 0 010 2.122L8.32 15.536a1 1 0 11-1.414-1.415L9.027 12z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                x = t(64572),
                w = c.forwardRef((function(e, n) {
                    return (0, l.jsx)("svg", (0, a.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18.586 13h-8.083c-.523 0-.947-.448-.947-1s.424-1 .947-1h8.083l-2.738-2.737a1 1 0 011.415-1.415l4.444 4.445a1 1 0 010 1.414l-4.444 4.445a1 1 0 01-1.415-1.415L18.586 13zM9 5H6a1 1 0 00-1 1v12a1 1 0 001 1h3a1 1 0 110 2H6a3 3 0 01-3-3V6a3 3 0 013-3h3a1 1 0 010 2z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                y = t(79039),
                C = t(80692),
                _ = t(11321),
                j = t(51240),
                S = function() {
                    var e = (0, _.$G)("common").t,
                        n = (0, j.J)(),
                        t = n.hasNewFeatures,
                        r = n.hiddenRedPoint;
                    return (0, l.jsxs)("span", {
                        onClick: function(n) {
                            n.preventDefault(), r(), window.location.href = e("links.tryNewFeatures")
                        },
                        children: [e("userMenu.tryNewFeatures"), t && (0, l.jsx)("span", {
                            className: "bg-red-s relative -top-0.5 ml-1 inline-block h-1.5 w-1.5 rounded-full"
                        })]
                    })
                },
                L = c.forwardRef((function(e, n) {
                    return (0, l.jsxs)("svg", (0, a.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "none",
                        ref: n
                    }, e), {
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0_5839_1731)",
                            children: [(0, l.jsx)("path", {
                                d: "M3 21.5593L10 14.5593",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }), (0, l.jsx)("path", {
                                d: "M19.4095 3.75954C19.7205 3.63593 20.0383 3.92263 19.9472 4.2447L18.7681 8.41386C18.7319 8.54175 18.761 8.67925 18.8458 8.78155L21.6119 12.1164C21.8255 12.374 21.6511 12.7648 21.3166 12.7777L16.9871 12.9447C16.8543 12.9498 16.7325 13.02 16.6615 13.1323L14.3446 16.7934C14.1656 17.0763 13.74 17.0311 13.6244 16.717L12.1277 12.651C12.0818 12.5263 11.9775 12.4321 11.8487 12.3993L7.65075 11.3271C7.32646 11.2443 7.23791 10.8256 7.50091 10.6186L10.9054 7.93868C11.0098 7.85647 11.0671 7.72814 11.0586 7.5955L10.781 3.27172C10.7596 2.93771 11.1304 2.72411 11.4086 2.91025L15.0094 5.31997C15.1198 5.39389 15.2596 5.40873 15.3831 5.35964L19.4095 3.75954Z",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinejoin: "round"
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_5839_1731",
                                children: (0, l.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "currentColor"
                                })
                            })
                        })]
                    }))
                })),
                N = function(e, n) {
                    return C.$.navbarElementClick({
                        navbar_env: e,
                        navbar_entry_key: n
                    })
                },
                E = function(e) {
                    var n = e ? f.MO : f.xe,
                        t = {
                            "aria-braillelabel": void 0,
                            "aria-brailleroledescription": void 0,
                            "aria-colindextext": void 0,
                            "aria-description": void 0,
                            "aria-rowindextext": void 0
                        };
                    return (0, l.jsx)(n, (0, a.Z)((0, i.Z)({
                        width: 18,
                        height: 18,
                        suppressHydrationWarning: void 0
                    }, t), {
                        onResize: void 0,
                        onResizeCapture: void 0
                    }))
                },
                V = function(e) {
                    var n = (0, d.$)("common").t,
                        t = (0, v.F)(),
                        r = t.theme,
                        i = t.setTheme,
                        a = (0, c.useCallback)((function(n) {
                            i(n), N(e, n)
                        }), [e, i]);
                    return {
                        icon: E("dark" === r),
                        content: n("userMenu.appearance"),
                        useChildActive: !0,
                        child: [{
                            isActive: "system" === r,
                            content: n("userMenu.appearanceContent.auto"),
                            onClick: function() {
                                return a("system")
                            }
                        }, {
                            isActive: "light" === r,
                            content: n("userMenu.appearanceContent.light"),
                            onClick: function() {
                                return a("light")
                            }
                        }, {
                            isActive: "dark" === r,
                            content: n("userMenu.appearanceContent.dark"),
                            onClick: function() {
                                return a("dark")
                            }
                        }]
                    }
                },
                M = function(e, n) {
                    return [{
                        icon: (0, l.jsx)(g, {
                            height: 18,
                            width: 18
                        }),
                        content: (0, l.jsx)(S, {}),
                        onClick: function() {
                            C.$.navbarNewFeatureClick(), N(n, e("userMenu.tryNewFeatures"))
                        }
                    }, {
                        icon: (0, l.jsx)(k, {
                            height: 18,
                            width: 18
                        }),
                        content: e("userMenu.orders"),
                        href: e("links.orders"),
                        onClick: function() {
                            return N(n, e("userMenu.orders"))
                        }
                    }, {
                        icon: (0, l.jsx)(b, {
                            height: 18,
                            width: 18
                        }),
                        content: e("playground.myPlaygrounds"),
                        href: e("links.playground"),
                        onClick: function() {
                            return N(n, e("userMenu.myPlaygrounds"))
                        }
                    }]
                },
                I = function(e) {
                    var n, t = (0, d.$)("common").t,
                        a = (0, m.U5)().data,
                        c = (0, p.O)().mutateAsync,
                        v = Boolean(null === a || void 0 === a || null === (n = a.userStatus) || void 0 === n ? void 0 : n.isMockUser),
                        f = (0, h.jU)() && window.location.pathname.startsWith("/problems/"),
                        g = function() {
                            var e = (0, r.Z)((function() {
                                var e, n;
                                return (0, s.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, c({
                                                usernameToMock: ""
                                            })];
                                        case 1:
                                            return t.sent(), e = new URL(window.location.href), (n = new URLSearchParams(e.search)).delete("user"), window.location.href = n.toString() ? "".concat(location.pathname, "?").concat(n) : location.pathname, [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        k = location.pathname.split("/"),
                        b = k[2],
                        C = V(e),
                        _ = function() {
                            var e = (0, r.Z)((function() {
                                return (0, s.__generator)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, fetch("/accounts/logout/", {
                                                method: "POST",
                                                headers: {
                                                    "content-type": "application/json",
                                                    "X-CSRFToken": u.Z.get("csrftoken") || ""
                                                },
                                                credentials: "same-origin"
                                            })];
                                        case 1:
                                            return e.sent(), window.location.reload(), (0, h.hl)(), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        j = (0, o.Z)(M(t, e)).concat([{
                            icon: (0, l.jsx)(x.k, {
                                height: 18,
                                width: 18
                            }),
                            content: t("userMenu.account"),
                            href: t("links.account"),
                            onClick: function() {
                                return N(e, t("userMenu.account"))
                            }
                        }, (0, i.Z)({}, C), {
                            icon: (0, l.jsx)(w, {
                                height: 18,
                                width: 18
                            }),
                            content: t("pages.signOut"),
                            onClick: function() {
                                N(e, t("pages.signOut")), _()
                            }
                        }]);
                    return v && j.splice(2, 0, {
                        icon: (0, l.jsx)(y.f, {
                            height: 18,
                            width: 18
                        }),
                        content: t("userMenu.unmockUser"),
                        onClick: function() {
                            N(e, t("userMenu.unmockUser")), g()
                        }
                    }), f && j.splice(j.length - 2, 0, {
                        icon: (0, l.jsx)(L, {
                            height: 18,
                            width: 18
                        }),
                        content: t("userMenu.revertToOldVersion"),
                        onClick: function() {
                            N(e, t("userMenu.revertToOldVersion"));
                            var n = "/classic/".concat(k[1], "/").concat(b);
                            window.location.href = n
                        }
                    }), j
                }
        },
        59353: function(e, n, t) {
            "use strict";
            t.d(n, {
                Y: function() {
                    return o
                }
            });
            var r = t(85893),
                i = t(1156),
                a = (t(67294), t(12922)),
                o = function(e) {
                    var n = e.queryObject,
                        t = e.pageReference,
                        o = e.className;
                    return (0, r.jsx)("div", {
                        className: (0, a.yI)("ml-4", o),
                        children: (0, r.jsx)(i.UP, {
                            className: "font-typo",
                            queryObject: n,
                            pageReference: t
                        })
                    })
                }
        },
        44151: function(e, n, t) {
            "use strict";
            t.d(n, {
                c: function() {
                    return x
                }
            });
            var r = t(85893),
                i = t(11163),
                a = t(67294),
                o = t(1156),
                s = t(70341),
                l = t(34275),
                c = t(80692),
                u = t(88525),
                d = t(63808),
                v = function() {
                    return (0, u.HhE)(d.f6)
                },
                f = t(79185),
                m = t(92068),
                p = t(75117),
                h = t(87887),
                g = t(30579),
                k = t(80214),
                b = o.Yd,
                x = function(e) {
                    var n, t, u = e.iconClassName,
                        d = v(),
                        x = d.data,
                        w = d.isFetching,
                        y = function(e) {
                            var n = (0, a.useState)(e && e.streakCount || 0),
                                t = n[0],
                                r = n[1],
                                i = (0, a.useState)(!(!e || !e.currentDayCompleted)),
                                o = i[0],
                                s = i[1],
                                l = (0, a.useState)(e && e.daysSkipped || 0),
                                c = l[0],
                                u = l[1],
                                d = (0, a.useCallback)((function(e) {
                                    e && void 0 !== e.streakCount && r(e.streakCount || 0), e && void 0 !== e.currentDayCompleted && s(!!e.currentDayCompleted), e && void 0 !== e.daysSkipped && u(e.daysSkipped || 0)
                                }), [r, s, u]);
                            return (0, a.useEffect)((function() {
                                d(e)
                            }), [d, e]), (0, k.W)("streak-counter", d), {
                                streakCount: t,
                                daysSkipped: c,
                                currentDayCompleted: o
                            }
                        }(null === x || void 0 === x ? void 0 : x.streakCounter),
                        C = y.streakCount,
                        _ = y.currentDayCompleted,
                        j = y.daysSkipped,
                        S = (0, m.pe)().data,
                        L = null === S || void 0 === S ? void 0 : S.currentTimestamp,
                        N = (0, a.useMemo)((function() {
                            var e = (0, l.B)(1e3 * Number(L)).tz(p.aB);
                            return {
                                year: parseInt(e.format("YYYY")),
                                month: parseInt(e.format("M")),
                                date: e.format("YYYY-MM-DD")
                            }
                        }), [L]),
                        E = N.year,
                        V = N.month,
                        M = N.date,
                        I = (0, f.C)(E, V, !!L),
                        A = I.isFetching,
                        R = null === (n = I.data) || void 0 === n || null === (t = n.config) || void 0 === t ? void 0 : t.icon,
                        Z = (0, h.qe)(),
                        F = Z.data,
                        H = Z.isFetching,
                        O = (null === F || void 0 === F ? void 0 : F.link) && "".concat(null === F || void 0 === F ? void 0 : F.link, "?envType=daily-question&envId=").concat(M),
                        P = (0, g.QE)((function(e) {
                            return e.roomId
                        })),
                        B = (0, i.useRouter)(),
                        z = (0, a.useMemo)((function() {
                            return s.Hb.store()
                        }), []),
                        T = w || !L || A || H,
                        U = (0, a.useCallback)((function(e) {
                            e && c.$.navbarStreakHoverButtonExposure({
                                navbar_streak_count: String(C),
                                navbar_current_day_completed: String(_)
                            })
                        }), [C, _]),
                        X = (0, a.useCallback)((function(e) {
                            e.preventDefault(), window.open(z), c.$.navbarStreakTttLinkClick({
                                navbar_days_skipped: String(j)
                            })
                        }), [j, z]),
                        D = (0, a.useCallback)((function(e) {
                            if (e.preventDefault(), !P && O) window.open(O);
                            else if (O) {
                                var n = "".concat(O, "&roomId=").concat(P);
                                B.push(n, void 0, {
                                    shallow: !0
                                })
                            }
                            return c.$.navbarStreakLinkClick(), !0
                        }), [O, P, B]);
                    return (0, r.jsx)(o.c7, {
                        storePath: z,
                        streakCount: C,
                        daysSkipped: j,
                        iconClassName: u,
                        dailyQuestionLink: null !== O && void 0 !== O ? O : "",
                        currentDayCompleted: _,
                        dailyQuestionMedal: R,
                        isLoading: T,
                        onVisibilityChange: U,
                        onStreakCounterClick: D,
                        onTttClick: X,
                        customText: b,
                        panelClassName: "!p-0"
                    })
                }
        },
        47543: function(e, n, t) {
            "use strict";
            t.d(n, {
                x: function() {
                    return f
                }
            });
            var r = t(26042),
                i = t(69396),
                a = t(85893),
                o = t(1156),
                s = (t(67294), t(75117)),
                l = t(29297),
                c = t(61672),
                u = t(86697),
                d = t(51240),
                v = {
                    IS_LCUS: s.Oo
                },
                f = function(e) {
                    var n = e.className,
                        t = e.useFullWidthMd,
                        s = e.pageReference,
                        f = (0, c.yV)(s),
                        m = (0, d.J)().hasNewFeatures,
                        p = (0, u.j)("web"),
                        h = (0, c.v$)().data,
                        g = (0, c.Tq)("web"),
                        k = (0, i.Z)((0, r.Z)((0, i.Z)((0, r.Z)({}, v), {
                            userCategories: g,
                            menuActions: p,
                            userData: h,
                            className: n
                        }), f), {
                            useFullWidthMd: t
                        });
                    return (0, a.jsxs)("div", {
                        onClick: function() {
                            return l.d.qdNavbarUserDropdownClick()
                        },
                        className: "relative",
                        children: [m && (0, a.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "0",
                                right: "0",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: "#FF4757",
                                zIndex: 3
                            }
                        }), (0, a.jsx)(o.oR, (0, r.Z)({}, k))]
                    })
                }
        },
        14478: function(e, n, t) {
            "use strict";
            t.d(n, {
                lT: function() {
                    return s
                },
                rB: function() {
                    return l
                }
            });
            var r = t(80315),
                i = t(12351),
                a = t(23874),
                o = t(70341),
                s = function(e, n) {
                    var t = e.userStatus.isSuperuser,
                        a = e.userStatus.permissions,
                        s = a && (0, r.F9)(a, i.P.AuthenticationSeeUserManagement),
                        l = a && (0, r.F9)(a, i.P.ScoreSeeAdminPanel),
                        c = a && (0, r.F9)(a, i.P.ContestPrivateAccessDashboard),
                        u = a && (0, r.F9)(a, i.P.LibrarySeeAllFields) && (0, r.F9)(a, i.P.LibrarySeeAllProblems);
                    return [{
                        key: "library",
                        linkProps: {
                            to: o.Hb.library()
                        },
                        display: n("pages.admin.library"),
                        displayCondition: u
                    }, {
                        key: "review",
                        linkProps: {
                            to: o.Hb.review()
                        },
                        display: n("pages.admin.review"),
                        displayCondition: !0
                    }, {
                        key: "management",
                        linkProps: {
                            to: n("links.admin.operations")
                        },
                        display: n("pages.admin.operations"),
                        displayCondition: s
                    }, {
                        key: "danger-zone",
                        linkProps: {
                            to: o.Hb.dangerZone()
                        },
                        display: n("pages.admin.dangerZone"),
                        displayCondition: !!t
                    }, {
                        key: "points",
                        linkProps: {
                            to: n("links.admin.scores")
                        },
                        display: n("pages.admin.scores"),
                        displayCondition: l
                    }, {
                        key: "contribution",
                        linkProps: {
                            to: o.Hb.contributeDashboard()
                        },
                        display: n("pages.admin.contribute"),
                        displayCondition: !0
                    }, {
                        key: "internal-contest",
                        linkProps: {
                            to: o.Hb.internalContest()
                        },
                        display: n("pages.admin.internalContest"),
                        displayCondition: c
                    }, {
                        key: "contest-dashboard",
                        linkProps: {
                            to: o.Hb.contestDashboard()
                        },
                        display: n("pages.admin.contestDashboard"),
                        displayCondition: !!t
                    }, {
                        key: "contest-admin",
                        linkProps: {
                            to: o.Hb.contestAdmin()
                        },
                        display: n("pages.admin.contestAdmin"),
                        displayCondition: !!t
                    }, {
                        key: "administration",
                        linkProps: {
                            to: o.Hb.adminBackend()
                        },
                        display: n("pages.admin.backend"),
                        displayCondition: !!t
                    }, {
                        key: "email-batch",
                        linkProps: {
                            to: o.Hb.emailBatch()
                        },
                        display: n("pages.admin.emailBatch"),
                        displayCondition: !!t
                    }, {
                        key: "db-testcase",
                        linkProps: {
                            to: o.Hb.internal.dbTestcase()
                        },
                        display: n("pages.admin.dbTestcase"),
                        displayCondition: !0
                    }, {
                        key: "tag-management",
                        linkProps: {
                            to: o.Hb.internal.tagManagement()
                        },
                        display: n("pages.admin.tagManagement"),
                        displayCondition: !0
                    }, {
                        key: "question-feedback",
                        linkProps: {
                            to: o.Hb.internal.questionFeedback()
                        },
                        display: n("pages.admin.questionFeedback"),
                        displayCondition: !0
                    }]
                },
                l = function(e, n) {
                    var t, i, o = (null === e || void 0 === e || null === (t = e.userStatus) || void 0 === t ? void 0 : t.permissions) || [],
                        s = (null === e || void 0 === e || null === (i = e.userStatus) || void 0 === i ? void 0 : i.isAdmin) || (0, r.Gi)(o, r.lF),
                        l = null === n || void 0 === n ? void 0 : n.includes(a.Pm$.ColumnsReview);
                    return e && (l || s)
                }
        },
        62018: function(e, n, t) {
            "use strict";
            t.d(n, {
                g: function() {
                    return l
                }
            });
            var r = t(85893),
                i = (t(67294), t(82010)),
                a = t(12922),
                o = t(59163),
                s = t(19906);

            function l(e) {
                var n = (0, i.F)().theme;
                return (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.y, {
                        src: "dark" === n ? "/_next/static/images/dark-loading-723b3c3e728a574bc2a2d4b89a10d4d7.gif" : o.Z,
                        className: (0, a.yI)("w-[50px]", e.className),
                        alt: "\u52a0\u8f7d\u4e2d..."
                    })
                })
            }
        },
        19935: function(e, n, t) {
            "use strict";
            t.d(n, {
                d: function() {
                    return d
                }
            });
            var r = t(85893),
                i = t(11321),
                a = t(31795),
                o = t.n(a),
                s = t(13994),
                l = t(12922),
                c = t(11516),
                u = t(4563),
                d = function() {
                    var e, n, t = (0, i.$G)("common").t;
                    return "SAFARI" !== (null !== (e = o().name) && void 0 !== e ? e : "").toUpperCase() || (0, s.q)(null !== (n = o().version) && void 0 !== n ? n : "16.0", "14.5", ">=") || (0, u.tq)() ? null : (0, r.jsx)("div", {
                        className: (0, l.yI)("h-10 w-full text-center leading-10", c.nx.bgYellow60, c.nx.labelTextReverse),
                        children: t("safariNotUse")
                    })
                }
        },
        92845: function(e, n, t) {
            "use strict";
            t.d(n, {
                s: function() {
                    return i
                }
            });
            var r = t(67294),
                i = function() {
                    var e = (0, r.useState)(!1),
                        n = e[0],
                        t = e[1];
                    return (0, r.useEffect)((function() {
                        t(!0)
                    }), []), n
                }
        },
        80214: function(e, n, t) {
            "use strict";
            t.d(n, {
                W: function() {
                    return a
                }
            });
            var r = t(67294),
                i = t(68708),
                a = function(e, n) {
                    var t = "".concat("tab-communication", ":").concat(e);
                    (0, r.useEffect)((function() {
                        if ((0, i.jU)()) {
                            var e = function(e) {
                                if (e.key && e.newValue && e.key === t) {
                                    var r = JSON.parse(e.newValue);
                                    r && n(r)
                                }
                            };
                            return window.addEventListener("storage", e),
                                function() {
                                    return window.removeEventListener("storage", e)
                                }
                        }
                    }), [n, t]);
                    return [function(e) {
                        if ((0, i.jU)()) {
                            var n = JSON.stringify(e);
                            window.localStorage.setItem(t, n), window.localStorage.removeItem(t), window.dispatchEvent(new StorageEvent("storage", {
                                key: t,
                                newValue: n
                            }))
                        }
                    }]
                }
        },
        46991: function(e, n, t) {
            "use strict";
            t.d(n, {
                g: function() {
                    return r
                },
                l: function() {
                    return m
                }
            });
            var r, i = t(14924),
                a = t(26042),
                o = t(69396),
                s = t(17563);
            ! function(e) {
                e.Home = "home", e.QuestionList = "ql", e.QuestionDetail = "qd", e.Explore = "ex", e.Discussion = "ds", e.Contest = "co", e.Assessment = "as", e.StudyPlan = "sp", e.Others = "ot"
            }(r || (r = {}));
            var l, c = "nav-premium",
                u = "nav-shop-premium",
                d = "navbar-dropdown-context",
                v = "study-plan-card",
                f = (r.Home, r.QuestionList, r.QuestionDetail, r.Explore, r.Discussion, r.Contest, r.Assessment, r.StudyPlan, r.Others, l = {}, (0, i.Z)(l, c, "lp_pl"), (0, i.Z)(l, u, "nb_npl"), (0, i.Z)(l, d, "um_pl"), (0, i.Z)(l, v, "sp_cd"), l);

            function m(e, n) {
                var t = String(null === n || void 0 === n ? void 0 : n.source),
                    r = t in f ? f[t] : null === n || void 0 === n ? void 0 : n.ref;
                return "".concat(e).concat(n ? "?".concat(s.stringify((0, o.Z)((0, a.Z)({}, n), {
                    ref: r
                }))) : "")
            }
        },
        80692: function(e, n, t) {
            "use strict";
            t.d(n, {
                $: function() {
                    return a
                }
            });
            var r = t(8183),
                i = t(23025),
                a = {
                    navbarInterviewerEditionEntranceButtonClick: function() {
                        var e = {
                            key: "navbar_interviewer_edition_entrance_button_click",
                            data: {}
                        };
                        r.V[i.X.GIO](e), r.V[i.X.GA4](e), r.V[i.X.CONSOLE](e), r.V[i.X.SELF_DB](e)
                    },
                    navbarEeEntranceButtonClick: function() {
                        var e = {
                            key: "navbar_ee_entrance_button_click",
                            data: {}
                        };
                        r.V[i.X.GIO](e), r.V[i.X.GA4](e), r.V[i.X.CONSOLE](e), r.V[i.X.SELF_DB](e)
                    },
                    navbarStreakHoverButtonExposure: function(e) {
                        var n = {
                            key: "navbar_streak_hover_button_exposure",
                            data: e
                        };
                        r.V[i.X.GIO](n), r.V[i.X.GA4](n), r.V[i.X.CONSOLE](n), r.V[i.X.SELF_DB](n)
                    },
                    navbarStreakTttLinkClick: function(e) {
                        var n = {
                            key: "navbar_streak_ttt_link_click",
                            data: e
                        };
                        r.V[i.X.GIO](n), r.V[i.X.GA4](n), r.V[i.X.CONSOLE](n), r.V[i.X.SELF_DB](n)
                    },
                    navbarStreakLinkClick: function() {
                        var e = {
                            key: "navbar_streak_link_click",
                            data: {}
                        };
                        r.V[i.X.GIO](e), r.V[i.X.GA4](e), r.V[i.X.CONSOLE](e), r.V[i.X.SELF_DB](e)
                    },
                    navbarSearchClickClick: function(e) {
                        var n = {
                            key: "navbar_search_click_click",
                            data: e
                        };
                        r.V[i.X.GIO](n), r.V[i.X.GA4](n), r.V[i.X.CONSOLE](n), r.V[i.X.SELF_DB](n)
                    },
                    navbarNewFeatureClick: function() {
                        var e = {
                            key: "navbar_new_feature_click",
                            data: {}
                        };
                        r.V[i.X.GIO](e), r.V[i.X.GA4](e), r.V[i.X.CONSOLE](e), r.V[i.X.SELF_DB](e)
                    },
                    navbarElementClick: function(e) {
                        var n = {
                            key: "navbar_element_click",
                            data: e
                        };
                        r.V[i.X.GIO](n), r.V[i.X.GA4](n), r.V[i.X.CONSOLE](n), r.V[i.X.SELF_DB](n)
                    },
                    navbarWarningVerifyEmailClick: function() {
                        var e = {
                            key: "navbar_warning_verify_email_click",
                            data: {}
                        };
                        r.V[i.X.GIO](e), r.V[i.X.GA4](e), r.V[i.X.CONSOLE](e), r.V[i.X.SELF_DB](e)
                    },
                    navbarWarningVerifyEmailExposure: function() {
                        var e = {
                            key: "navbar_warning_verify_email_exposure",
                            data: {}
                        };
                        r.V[i.X.GIO](e), r.V[i.X.GA4](e), r.V[i.X.CONSOLE](e), r.V[i.X.SELF_DB](e)
                    }
                }
        },
        59163: function(e, n) {
            "use strict";
            n.Z = "/_next/static/images/light-loading-9d7b0f1c4035b59af3a7d6ccd8e0ac12.gif"
        },
        55354: function(e, n, t) {
            var r = t(58403),
                i = "string" === typeof r ? [
                    [e.id, r, ""]
                ] : r;
            (n = e.exports = r.locals || {})._getContent = function() {
                return i
            }, n._getCss = function() {
                return "" + r
            }
        },
        26973: function(e, n, t) {
            var r = t(74316),
                i = "string" === typeof r ? [
                    [e.id, r, ""]
                ] : r;
            (n = e.exports = r.locals || {})._getContent = function() {
                return i
            }, n._getCss = function() {
                return "" + r
            }
        }
    }
]);