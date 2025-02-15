"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [468], {
        4421: function(e, t, n) {
            n.d(t, {
                cZ: function() {
                    return o
                }
            });
            var i = n(26042),
                s = n(69396),
                r = n(23874),
                a = n(88525),
                l = n(63808),
                o = function(e) {
                    return (0, a.$eI)(l.f6, {
                        favoriteSlug: e
                    }, {
                        select: function(e) {
                            var t, n, a, l, o, d, u, c, m, f, p, v, x, h, g, y, j, b, w, N, Z, S, E, T, C, _, F = e.favoriteDetailV2,
                                L = null === F || void 0 === F ? void 0 : F.positionRoleTags;
                            return (null === L || void 0 === L ? void 0 : L.length) && 0 === L.filter((function(e) {
                                return "all" === e.slug
                            })).length && L.unshift({
                                name: "All",
                                slug: "all"
                            }), {
                                slug: null !== (a = null === F || void 0 === F ? void 0 : F.slug) && void 0 !== a ? a : "",
                                name: null !== (l = null === F || void 0 === F ? void 0 : F.name) && void 0 !== l ? l : "",
                                description: null === F || void 0 === F ? void 0 : F.description,
                                cover: {
                                    url: null !== (o = null === F || void 0 === F ? void 0 : F.coverUrl) && void 0 !== o ? o : void 0,
                                    emoji: null !== (d = null === F || void 0 === F ? void 0 : F.coverEmoji) && void 0 !== d ? d : void 0,
                                    background: null !== (u = null === F || void 0 === F ? void 0 : F.coverBackgroundColor) && void 0 !== u ? u : void 0
                                },
                                author: {
                                    realName: null !== (c = null === F || void 0 === F ? void 0 : F.creator.realName) && void 0 !== c ? c : "",
                                    userAvatar: null !== (m = null === F || void 0 === F ? void 0 : F.creator.userAvatar) && void 0 !== m ? m : "",
                                    userSlug: null !== (f = null === F || void 0 === F ? void 0 : F.creator.userSlug) && void 0 !== f ? f : ""
                                },
                                isPublic: !!(null === F || void 0 === F ? void 0 : F.isPublicFavorite),
                                questionNumber: null !== (p = null === F || void 0 === F ? void 0 : F.questionNumber) && void 0 !== p ? p : 0,
                                hasCurrentQuestion: !!(null === F || void 0 === F ? void 0 : F.hasCurrentQuestion),
                                isDefaultList: !!(null === F || void 0 === F ? void 0 : F.isDefaultList),
                                collectCount: null !== (v = null === F || void 0 === F ? void 0 : F.collectCount) && void 0 !== v ? v : 0,
                                companyVerified: null !== (x = null === F || void 0 === F ? void 0 : F.companyVerified) && void 0 !== x && x,
                                positionRoleTags: null !== (g = null === L || void 0 === L ? void 0 : L.map((function(e) {
                                    return (0, s.Z)((0, i.Z)({}, e), {
                                        nameTranslated: null !== (h = e.name) && void 0 !== h ? h : ""
                                    })
                                }))) && void 0 !== g ? g : void 0,
                                generateFromFavoriteSlug: null !== (y = null === F || void 0 === F ? void 0 : F.generateFromFavoriteSlug) && void 0 !== y ? y : "",
                                favoriteType: null !== (j = null === F || void 0 === F ? void 0 : F.favoriteType) && void 0 !== j ? j : void 0,
                                generatedFavoritesInfo: {
                                    defaultFavoriteSlug: null !== (b = null === F || void 0 === F || null === (t = F.generatedFavoritesInfo) || void 0 === t ? void 0 : t.defaultFavoriteSlug) && void 0 !== b ? b : "",
                                    categoriesToSlugs: null !== (w = null === F || void 0 === F || null === (n = F.generatedFavoritesInfo) || void 0 === n ? void 0 : n.categoriesToSlugs) && void 0 !== w ? w : []
                                },
                                lastModified: null !== (N = null === F || void 0 === F ? void 0 : F.lastModified) && void 0 !== N ? N : "",
                                industryDisplay: null !== (Z = null === F || void 0 === F ? void 0 : F.industryDisplay) && void 0 !== Z ? Z : "",
                                scaleDisplay: null !== (S = null === F || void 0 === F ? void 0 : F.scaleDisplay) && void 0 !== S ? S : "",
                                financingStageDisplay: null !== (E = null === F || void 0 === F ? void 0 : F.financingStageDisplay) && void 0 !== E ? E : "",
                                companyLegalName: null !== (T = null === F || void 0 === F ? void 0 : F.companyLegalName) && void 0 !== T ? T : "",
                                website: null !== (C = null === F || void 0 === F ? void 0 : F.website) && void 0 !== C ? C : "",
                                favoriteLockStatus: null !== (_ = null === F || void 0 === F ? void 0 : F.favoriteLockStatus) && void 0 !== _ ? _ : r.L_W.NoNeedToUnlock
                            }
                        }
                    })
                }
        },
        85110: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return r
                }
            });
            var i = n(88525),
                s = n(63808),
                r = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return (0, i.nS7)(s.f6, {}, {
                        select: function(e) {
                            return {
                                myCreatedFavoriteList: e.myCreatedFavoriteList.favorites,
                                myCollectedFavoriteList: e.myCollectedFavoriteList.favorites
                            }
                        },
                        enabled: e
                    })
                }
        },
        50300: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return d
                },
                U: function() {
                    return o
                }
            });
            var i = n(26042),
                s = n(69396),
                r = n(63808),
                a = n(88525),
                l = n(82960),
                o = function(e, t, n) {
                    return (0, a.LyX)(r.f6, {
                        favoriteSlug: e,
                        filter: (0, s.Z)((0, i.Z)({}, t), {
                            difficultyList: null === t || void 0 === t ? void 0 : t.difficultyList
                        })
                    }, {
                        enabled: null === n || void 0 === n || n,
                        cacheTime: 0,
                        select: function(e) {
                            return e.favoriteQuestionList.questions.map((function(e) {
                                var t;
                                return {
                                    difficulty: e.difficulty,
                                    id: e.id,
                                    paidOnly: e.paidOnly,
                                    questionFrontendId: e.questionFrontendId || "",
                                    status: e.status,
                                    title: e.title,
                                    titleSlug: e.titleSlug,
                                    translatedTitle: e.translatedTitle || "",
                                    isInMyFavorites: e.isInMyFavorites,
                                    topicTags: (null === (t = e.topicTags) || void 0 === t ? void 0 : t.map((function(e) {
                                        return {
                                            name: e.name || "",
                                            nameTranslated: "",
                                            slug: e.slug || ""
                                        }
                                    }))) || []
                                }
                            })) || []
                        }
                    })
                },
                d = function(e) {
                    var t = e.filter,
                        n = e.filtersV2;
                    return a.LyX.getKey((0, s.Z)((0, i.Z)({}, e), {
                        filter: (0, s.Z)((0, i.Z)({}, t), {
                            difficultyList: null === t || void 0 === t ? void 0 : t.difficultyList
                        }),
                        filtersV2: (0, l.$)(n)
                    }))
                }
        },
        45310: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return r
                }
            });
            var i = n(63808),
                s = n(88525),
                r = function(e) {
                    return (0, s.lfN)(i.f6, {
                        favoriteSlug: e
                    }, {
                        select: function(e) {
                            return e.hasAccessToFavorite
                        },
                        enabled: !!e
                    })
                }
        },
        82960: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return d
                },
                A: function() {
                    return u
                }
            });
            var i = n(26042),
                s = n(69396),
                r = n(59403),
                a = n(63808),
                l = n(88525),
                o = n(50300),
                d = function(e) {
                    var t;
                    if (e) {
                        var n, r = e.difficultyFilter;
                        return (0, s.Z)((0, i.Z)({}, e), {
                            difficultyFilter: (0, s.Z)((0, i.Z)({}, r), {
                                difficulties: null !== (n = null === r || void 0 === r || null === (t = r.difficulties) || void 0 === t ? void 0 : t.map((function(e) {
                                    return e
                                }))) && void 0 !== n ? n : []
                            })
                        })
                    }
                },
                u = function(e) {
                    var t = e.filtersV2,
                        n = e.options,
                        u = void 0 === n ? {} : n,
                        c = (0, s.Z)((0, i.Z)({}, e), {
                            filtersV2: d(t)
                        });
                    return (0, r.N)((0, o.F)(e), (function(e) {
                        var t = e.pageParam,
                            n = void 0 === t ? c : t;
                        return a.f6.request(l.FuH, n).then((function(e) {
                            var t, i, s, r = e.favoriteQuestionList.questions.map((function(e) {
                                var n;
                                return {
                                    difficulty: e.difficulty,
                                    id: e.id,
                                    paidOnly: e.paidOnly,
                                    questionFrontendId: e.questionFrontendId || "",
                                    status: e.status,
                                    title: e.title,
                                    titleSlug: e.titleSlug,
                                    translatedTitle: e.translatedTitle || "",
                                    isInMyFavorites: e.isInMyFavorites,
                                    frequency: null !== (t = e.frequency) && void 0 !== t ? t : 0,
                                    acRate: null !== (i = e.acRate) && void 0 !== i ? i : 0,
                                    topicTags: (null === (n = e.topicTags) || void 0 === n ? void 0 : n.map((function(e) {
                                        return {
                                            name: e.name || "",
                                            nameTranslated: "",
                                            slug: e.slug || ""
                                        }
                                    }))) || []
                                }
                            })) || [];
                            return {
                                hasMore: !!e.favoriteQuestionList.hasMore,
                                total: null !== (s = e.favoriteQuestionList.totalLength) && void 0 !== s ? s : 0,
                                skip: n.skip,
                                problemList: r
                            }
                        }))
                    }), (0, s.Z)((0, i.Z)({}, u), {
                        staleTime: 1 / 0,
                        getNextPageParam: function(e, t) {
                            var n;
                            return e.hasMore ? (0, s.Z)((0, i.Z)({}, c), {
                                skip: t.length * (null !== (n = c.limit) && void 0 !== n ? n : 0)
                            }) : void 0
                        }
                    }))
                }
        },
        8326: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return r
                }
            });
            var i = n(63808),
                s = n(88525),
                r = function(e) {
                    return (0, s.RQV)(i.f6, {
                        favoriteSlug: e
                    }, {
                        select: function(e) {
                            return e.isMyCreatedFavorite
                        }
                    })
                }
        },
        31778: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return r
                }
            });
            var i = n(63808),
                s = n(88525),
                r = function() {
                    return (0, s.MZF)(i.f6)
                }
        },
        37915: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return C
                }
            });
            var i = n(14924),
                s = n(26042),
                r = n(69396),
                a = n(99534),
                l = n(29815),
                o = n(85893),
                d = n(68779),
                u = n(11321),
                c = n(67294),
                m = n(11163),
                f = n(70341),
                p = n(31799),
                v = n(50144),
                x = n(97334),
                h = n(50438),
                g = n(8050),
                y = n(1483),
                j = n(10601),
                b = n(22111),
                w = n(134),
                N = n(23358),
                Z = n(62758),
                S = n(19906),
                E = function(e) {
                    return f.Hb.premium(p.D.SmartListFilter, {
                        key: e
                    })
                },
                T = function(e) {
                    var t, n = e.item,
                        i = e.isPremium,
                        l = (0, a.Z)(e, ["item", "isPremium"]),
                        d = (0, u.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t;
                    return (0, o.jsxs)("div", (0, r.Z)((0, s.Z)({
                        className: "flex cursor-pointer items-center gap-2 px-2 py-1.5"
                    }, l), {
                        children: [(0, o.jsx)("div", {
                            className: "flex h-5 w-5 items-center justify-center",
                            children: n.icon ? (0, o.jsx)(w.e, {
                                icon: n.icon,
                                variant: "16px"
                            }) : (0, o.jsx)(S.y, {
                                className: "h-4 w-4",
                                src: null !== (t = n.svgIcon) && void 0 !== t ? t : "",
                                alt: "icon"
                            })
                        }), (0, o.jsx)("div", {
                            className: "text-sd-popover-foreground font-medium",
                            children: n.isPremiumOnly ? i ? (0, o.jsx)(g.t, {
                                style: {
                                    fontSize: "14px"
                                },
                                children: d("filterName.".concat(n.key))
                            }) : (0, o.jsx)("span", {
                                className: "opacity-30",
                                children: d("filterName.".concat(n.key))
                            }) : (0, o.jsx)("span", {
                                children: d("filterName.".concat(n.key))
                            })
                        })]
                    }))
                },
                C = function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        a = e.filtersInfo,
                        f = e.trigger,
                        p = e.clickCallback,
                        g = (0, u.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        S = (0, m.useRouter)().pathname,
                        C = (0, c.useState)(!1),
                        _ = C[0],
                        F = C[1],
                        L = (0, v.E)(),
                        I = (0, x.y)().setShowKeysList,
                        P = (0, y.T)(t).hiddenKeys,
                        k = (0, j.s)(t).showKeys;
                    return 0 === P.length ? null : (0, o.jsxs)(N.h_, {
                        open: _,
                        onOpenChange: F,
                        modal: !1,
                        children: [(0, o.jsx)(N.$F, {
                            asChild: !0,
                            children: f || (0, o.jsx)("div", {
                                className: "hover:bg-sd-accent flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded",
                                onClick: function() {
                                    h.P.problemlistFilterRuleAddClick({
                                        problemlist_filter_source: (0, b.G)(S)
                                    })
                                },
                                children: (0, o.jsx)(w.e, {
                                    icon: d.XSk,
                                    className: "text-sd-muted-foreground",
                                    variant: "16px"
                                })
                            })
                        }), (0, o.jsx)(N.AW, {
                            align: "start",
                            className: "z-modal-4 w-[160px] p-[5px]",
                            children: (0, o.jsx)("div", {
                                className: "",
                                children: P.map((function(e) {
                                    var d = t[e];
                                    return d.isPremiumOnly && !L ? (0, o.jsx)(Z.u, {
                                        label: g("premiumTooltip.".concat(e)),
                                        placement: "top",
                                        className: "z-modal-5",
                                        children: (0, o.jsx)("a", {
                                            href: E(e),
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, o.jsx)(T, {
                                                item: d,
                                                isPremium: L
                                            }, e)
                                        })
                                    }, e) : (0, o.jsx)(T, {
                                        item: d,
                                        isPremium: L,
                                        onClick: function() {
                                            h.P.problemlistFilterRuleAddSelectClick({
                                                problemlist_filter_source: (0, b.G)(S),
                                                problemlist_filter_rule: e,
                                                problemlist_filter_action: void 0 === a ? "filter" : "" === a ? "create" : "edit"
                                            }), I((0, l.Z)(k).concat([e])), n((0, r.Z)((0, s.Z)({}, t), (0, i.Z)({}, e, (0, r.Z)((0, s.Z)({}, t[e]), {
                                                show: !0
                                            })))), F(!1), null === p || void 0 === p || p()
                                        }
                                    }, e)
                                }))
                            })
                        })]
                    })
                }
        },
        22111: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return k
                },
                G: function() {
                    return P
                }
            });
            var i = n(85893),
                s = n(68779),
                r = n(67294),
                a = n(11321),
                l = n(11163),
                o = n(31523),
                d = n(83269),
                u = n(50438),
                c = n(47568),
                m = n(70655),
                f = n(58420),
                p = n(89952),
                v = n(87273),
                x = n(25082),
                h = n(77013),
                g = n(83210),
                y = n(61923),
                j = n(63808),
                b = n(88525),
                w = function() {
                    var e = (0, b.u65)(j.f6).mutateAsync;
                    return {
                        mutateAsync: function(t) {
                            return e(t)
                        }
                    }
                },
                N = n(70341),
                Z = function(e) {
                    var t, n, s = e.open,
                        l = e.setOpen,
                        o = e.filters,
                        d = e.visibleFilters,
                        u = (0, f.pm)().toast,
                        j = (0, a.$G)("problemlist", {
                            keyPrefix: "description.operations"
                        }).t,
                        b = (0, r.useState)(""),
                        Z = b[0],
                        S = b[1],
                        E = (0, r.useState)(""),
                        T = E[0],
                        C = E[1],
                        _ = w().mutateAsync,
                        F = (0, y.F)().refetchMyFavoriteList;
                    return (0, r.useEffect)((function() {
                        s && (S(""), C(""))
                    }), [s]), (0, i.jsx)(p.Vq, {
                        open: s,
                        onOpenChange: l,
                        children: (0, i.jsxs)(p.cZ, {
                            className: "sd-sm:max-w-[450px] max-w-[95vw]",
                            children: [(0, i.jsx)(p.fK, {
                                children: (0, i.jsx)(p.$N, {
                                    children: j("genSmartList")
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col gap-6",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [(0, i.jsx)(v._, {
                                        htmlFor: "smart-list-title",
                                        children: j("title")
                                    }), (0, i.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, i.jsx)(x.I, {
                                            autoFocus: !0,
                                            className: "w-full pr-[60px]",
                                            id: "smart-list-title",
                                            placeholder: j("titlePlaceholder"),
                                            maxLength: 30,
                                            value: Z,
                                            onChange: function(e) {
                                                return S(e.target.value)
                                            }
                                        }), (0, i.jsxs)("div", {
                                            className: "text-sd-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 text-sm",
                                            children: [null !== (t = null === Z || void 0 === Z ? void 0 : Z.length) && void 0 !== t ? t : 0, "/30"]
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [(0, i.jsx)(v._, {
                                        htmlFor: "smart-list-info",
                                        children: j("description")
                                    }), (0, i.jsx)(h.g, {
                                        className: "resize-none",
                                        rows: 3,
                                        placeholder: j("descriptionPlaceholder"),
                                        id: "smart-list-info",
                                        maxLength: 150,
                                        value: T,
                                        onChange: function(e) {
                                            return C(e.target.value)
                                        }
                                    }), (0, i.jsxs)("div", {
                                        className: "text-sd-muted-foreground flex w-full justify-end text-sm",
                                        children: [null !== (n = null === T || void 0 === T ? void 0 : T.length) && void 0 !== n ? n : 0, "/150"]
                                    })]
                                })]
                            }), (0, i.jsxs)(p.cN, {
                                className: "sd-sm:space-x-0 gap-2",
                                children: [(0, i.jsx)(g.z, {
                                    variant: "secondary",
                                    onClick: function() {
                                        l(!1)
                                    },
                                    children: j("cancel")
                                }), (0, i.jsx)(g.z, {
                                    disabled: !Z.trim(),
                                    isLoading: !1,
                                    onClick: (0, c.Z)((function() {
                                        var e, t, n;
                                        return (0, m.__generator)(this, (function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    return [4, _({
                                                        name: Z.trim(),
                                                        description: T.trim(),
                                                        isPublicFavorite: !1,
                                                        filters: o,
                                                        visibleFilters: d
                                                    })];
                                                case 1:
                                                    return t = s.sent(), (n = null === (e = t.createSmartFavorite) || void 0 === e ? void 0 : e.favoriteSlug) ? (l(!1), [4, F()]) : [3, 3];
                                                case 2:
                                                    s.sent(), u({
                                                        variant: "success",
                                                        description: (0, i.jsxs)("div", {
                                                            children: [(0, i.jsx)("a", {
                                                                className: "text-blue",
                                                                target: "_blank",
                                                                href: N.Hb.problemList(n),
                                                                rel: "noreferrer",
                                                                children: Z.trim()
                                                            }), " ", j("created"), "!"]
                                                        }),
                                                        duration: 2e3
                                                    }), s.label = 3;
                                                case 3:
                                                    return [2]
                                            }
                                        }))
                                    })),
                                    children: j("create")
                                })]
                            })]
                        })
                    })
                },
                S = n(34588),
                E = n(51283),
                T = n(28813),
                C = n(21971),
                _ = n(86397),
                F = n(23358),
                L = n(62758),
                I = n(134),
                P = function(e) {
                    return e.includes("/company/") ? "company" : e.includes("/problem-list/") ? "problem-list" : e.includes("/problemset/") ? "problemset" : e.includes("/problems/") ? "difficulty" : ""
                },
                k = function(e) {
                    var t, n, c, m, f, p, v, x, h, y, j, b, w, N, k, V, D, O, M, A, R, q, G, X, Q = e.showSaveAsSmartListBtn,
                        B = e.useQueryString,
                        K = e.slug,
                        z = e.envType,
                        $ = e.categorySlug,
                        H = (0, l.useRouter)().pathname,
                        Y = (0, a.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        U = (0, _.L)().clearNewQuery,
                        W = (0, r.useRef)(null),
                        J = (0, r.useState)(!1),
                        ee = J[0],
                        te = J[1],
                        ne = (0, r.useState)(!1),
                        ie = ne[0],
                        se = ne[1],
                        re = (0, C.S)({
                            enable: !0
                        }),
                        ae = re.dataMap,
                        le = re.filterCombineType,
                        oe = (0, T.N)(ae, le),
                        de = (0, r.useMemo)((function() {
                            var e, t, n, i, s, r, a, l, o, d, u, c, m, f, p, v, x, h, g, y, j, b, w, N, Z = [],
                                E = null === (e = oe.companyFilter) || void 0 === e || null === (t = e.companySlugs) || void 0 === t ? void 0 : t.length,
                                T = null === (n = oe.positionFilter) || void 0 === n || null === (i = n.positionSlugs) || void 0 === i ? void 0 : i.length,
                                C = null === (s = oe.statusFilter) || void 0 === s || null === (r = s.questionStatuses) || void 0 === r ? void 0 : r.length,
                                _ = null === (a = oe.difficultyFilter) || void 0 === a || null === (l = a.difficulties) || void 0 === l ? void 0 : l.length,
                                F = null === (o = oe.topicFilter) || void 0 === o || null === (d = o.topicSlugs) || void 0 === d ? void 0 : d.length,
                                L = null === (u = oe.languageFilter) || void 0 === u || null === (c = u.languageSlugs) || void 0 === c ? void 0 : c.length,
                                I = void 0 !== (null === (m = oe.acceptanceFilter) || void 0 === m ? void 0 : m.rangeLeft) || void 0 !== (null === (f = oe.acceptanceFilter) || void 0 === f ? void 0 : f.rangeRight),
                                P = void 0 !== (null === (p = oe.frequencyFilter) || void 0 === p ? void 0 : p.rangeLeft) || void 0 !== (null === (v = oe.frequencyFilter) || void 0 === v ? void 0 : v.rangeRight),
                                k = (null === (x = oe.lastSubmittedFilter) || void 0 === x ? void 0 : x.startFrom) || (null === (h = oe.lastSubmittedFilter) || void 0 === h ? void 0 : h.endAt) || void 0 !== (null === (g = oe.lastSubmittedFilter) || void 0 === g ? void 0 : g.pastDays),
                                V = (null === (y = oe.publishedFilter) || void 0 === y ? void 0 : y.startFrom) || (null === (j = oe.publishedFilter) || void 0 === j ? void 0 : j.endAt) || void 0 !== (null === (b = oe.publishedFilter) || void 0 === b ? void 0 : b.pastDays),
                                D = null === (w = oe.premiumFilter) || void 0 === w || null === (N = w.premiumStatus) || void 0 === N ? void 0 : N.length;
                            return E && Z.push(S.Ts.companies), T && Z.push(S.Ts.position), C && Z.push(S.Ts.status), _ && Z.push(S.Ts.difficulty), F && Z.push(S.Ts.topics), L && Z.push(S.Ts.lang), I && Z.push(S.Ts.acceptance), P && Z.push(S.Ts.frequency), k && Z.push(S.Ts.lastSubmit), V && Z.push(S.Ts.published), D && Z.push(S.Ts.premium), [!!(E || T || C || _ || F || L || I || P || k || V || D), Z]
                        }), [null === (t = oe.acceptanceFilter) || void 0 === t ? void 0 : t.rangeLeft, null === (n = oe.acceptanceFilter) || void 0 === n ? void 0 : n.rangeRight, null === (c = oe.companyFilter) || void 0 === c || null === (m = c.companySlugs) || void 0 === m ? void 0 : m.length, null === (f = oe.difficultyFilter) || void 0 === f || null === (p = f.difficulties) || void 0 === p ? void 0 : p.length, null === (v = oe.frequencyFilter) || void 0 === v ? void 0 : v.rangeLeft, null === (x = oe.frequencyFilter) || void 0 === x ? void 0 : x.rangeRight, null === (h = oe.languageFilter) || void 0 === h || null === (y = h.languageSlugs) || void 0 === y ? void 0 : y.length, null === (j = oe.lastSubmittedFilter) || void 0 === j ? void 0 : j.endAt, null === (b = oe.lastSubmittedFilter) || void 0 === b ? void 0 : b.pastDays, null === (w = oe.lastSubmittedFilter) || void 0 === w ? void 0 : w.startFrom, null === (N = oe.positionFilter) || void 0 === N || null === (k = N.positionSlugs) || void 0 === k ? void 0 : k.length, null === (V = oe.premiumFilter) || void 0 === V || null === (D = V.premiumStatus) || void 0 === D ? void 0 : D.length, null === (O = oe.publishedFilter) || void 0 === O ? void 0 : O.endAt, null === (M = oe.publishedFilter) || void 0 === M ? void 0 : M.pastDays, null === (A = oe.publishedFilter) || void 0 === A ? void 0 : A.startFrom, null === (R = oe.statusFilter) || void 0 === R || null === (q = R.questionStatuses) || void 0 === q ? void 0 : q.length, null === (G = oe.topicFilter) || void 0 === G || null === (X = G.topicSlugs) || void 0 === X ? void 0 : X.length]),
                        ue = de[0],
                        ce = de[1];
                    return (0, o.r)((function() {
                        ee && u.P.problemlistFilterModuleConditionClick({
                            problemlist_filter_source: P(H),
                            problemlist_filter_string: JSON.stringify(oe),
                            problemlist_filter_action: "filter"
                        })
                    }), [oe]), (0, r.useEffect)((function() {
                        U()
                    }), [K]), (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)(F.h_, {
                            open: ee,
                            onOpenChange: te,
                            modal: !1,
                            children: [(0, i.jsx)(F.$F, {
                                asChild: !0,
                                children: (0, i.jsx)("div", {
                                    onClick: function() {
                                        u.P.problemlistFilterClick()
                                    },
                                    children: (0, i.jsx)(L.u, {
                                        label: Y(ue ? "filtered" : "filter"),
                                        placement: "top",
                                        children: (0, i.jsx)(g.z, {
                                            className: "h-8 p-2",
                                            variant: "ghost",
                                            size: "xs",
                                            shape: "rounded",
                                            children: (0, i.jsx)(I.e, {
                                                icon: s.G_j,
                                                className: ue ? "text-sd-green-500" : "text-sd-muted-foreground",
                                                variant: "14px"
                                            })
                                        })
                                    })
                                })
                            }), (0, i.jsx)(F.AW, {
                                align: "start",
                                side: z === d.Zw.Problemset ? "right" : "bottom",
                                className: "z-modal-3 p-0",
                                children: (0, i.jsxs)("div", {
                                    className: "lc-md:w-[520px] lc-md:h-[464px] flex h-[464px] w-[355px] flex-col justify-between gap-4 p-4",
                                    children: [(0, i.jsx)("div", {
                                        className: "bg-fill-quaternary max-h-[380px] w-full overflow-y-auto rounded px-1",
                                        children: (0, i.jsx)(E.B, {
                                            useQueryString: B,
                                            initDataMap: S.ZP,
                                            envType: z,
                                            ref: W
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "flex w-full gap-4",
                                        children: [Q && "all-code-essentials" === $ && (0, i.jsxs)(g.z, {
                                            className: "text-sd-purple-500 w-full gap-2",
                                            variant: "secondary",
                                            disabled: 0 === ce.length,
                                            onClick: function() {
                                                return se(!0)
                                            },
                                            children: [(0, i.jsx)(I.e, {
                                                icon: s.A47,
                                                variant: "14px",
                                                className: "text-sd-purple-500"
                                            }), Y("showSaveAsSmartListBtn")]
                                        }), (0, i.jsxs)(g.z, {
                                            className: "text-sd-foreground w-full gap-2",
                                            variant: "secondary",
                                            onClick: function() {
                                                var e;
                                                U(), null === W || void 0 === W || null === (e = W.current) || void 0 === e || e.clearAllFilter(), u.P.problemlistFilterModuleResetClick({
                                                    problemlist_filter_source: P(H)
                                                })
                                            },
                                            children: [(0, i.jsx)(I.e, {
                                                icon: s.paY,
                                                variant: "14px",
                                                className: "text-sd-foreground"
                                            }), Y("reset")]
                                        })]
                                    })]
                                })
                            })]
                        }), (0, i.jsx)(Z, {
                            open: ie,
                            setOpen: se,
                            filters: oe,
                            visibleFilters: ce
                        })]
                    })
                }
        },
        51283: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return _e
                }
            });
            var i = n(85893),
                s = n(11321),
                r = n(67294),
                a = n(11163),
                l = n(23874),
                o = n(31523),
                d = n(50438),
                u = n(37915),
                c = n(34588),
                m = n(68779),
                f = n(82127),
                p = n(134),
                v = function(e) {
                    var t = e.value,
                        n = e.handleValueChange,
                        a = e.options,
                        l = (0, s.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        o = (0, r.useMemo)((function() {
                            var e, n = a.find((function(e) {
                                return e.value === t
                            }));
                            return l(null !== (e = null === n || void 0 === n ? void 0 : n.name) && void 0 !== e ? e : "")
                        }), [a, l, t]);
                    return (0, i.jsxs)(f.Ph, {
                        value: t,
                        onValueChange: n,
                        children: [(0, i.jsx)(f.i4, {
                            className: "lc-dsw-md:justify-start border-sd-input h-[32px] w-[84px] justify-center rounded-lg p-0 px-3 focus:outline-none focus:ring-0 [&>svg]:hidden",
                            children: (0, i.jsx)(f.ki, {
                                className: "cursor-pointer",
                                children: (0, i.jsxs)("div", {
                                    className: "flex w-full items-center justify-between gap-2",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-sd-foreground flex w-[42px] text-sm font-normal",
                                        children: o
                                    }), (0, i.jsx)(p.e, {
                                        variant: "12px",
                                        padding: "square",
                                        icon: m.ptq,
                                        className: "text-sd-muted-foreground"
                                    })]
                                })
                            })
                        }), (0, i.jsx)(f.Bw, {
                            className: "z-modal-4",
                            children: a.map((function(e) {
                                return (0, i.jsx)(f.Ql, {
                                    value: e.value,
                                    children: (0, i.jsx)("div", {
                                        className: "flex items-center gap-2",
                                        children: (0, i.jsx)("div", {
                                            className: "text-sd-foreground text-sm font-normal",
                                            children: l(e.name)
                                        })
                                    })
                                }, e.value)
                            }))
                        })]
                    })
                },
                x = n(14924),
                h = n(26042),
                g = n(69396),
                y = n(29815),
                j = n(97334),
                b = n(8050),
                w = n(25082),
                N = n(12922),
                Z = r.forwardRef((function(e, t) {
                    var n = e.value,
                        s = e.handleValueChange,
                        r = e.handleOnTab,
                        a = e.showEmptyError,
                        l = e.onBlur;
                    return (0, i.jsxs)("div", {
                        className: "relative w-full flex-1",
                        children: [(0, i.jsx)(w.I, {
                            ref: t,
                            className: (0, N.yI)("text-sd-foreground h-8 focus-visible:ring-0", {
                                "border-sd-red-400 filter-empty-dom": a
                            }),
                            value: n,
                            onChange: function(e) {
                                var t = e.target.value;
                                if ("" !== t) {
                                    if (/^\d+$/.test(t)) {
                                        var n = parseInt(t, 10);
                                        s(n > 100 ? 100 : n)
                                    }
                                } else s(void 0)
                            },
                            onKeyDown: r,
                            onBlur: l
                        }), (0, i.jsx)("div", {
                            className: "absolute right-3 top-2",
                            children: (0, i.jsx)(p.e, {
                                icon: m.jGC,
                                variant: "12px",
                                className: "text-sd-foreground opacity-30"
                            })
                        })]
                    })
                })),
                S = function(e) {
                    var t = e.rangeLeft,
                        n = e.rangeRight,
                        s = e.handleRangeLeftValueChange,
                        a = e.handleRangeRightValueChange,
                        l = e.showEmptyError,
                        o = e.handleSwapValues,
                        d = (0, r.useRef)(null),
                        u = (0, r.useRef)(null),
                        c = function() {
                            var e = t ? Number(t) : void 0,
                                i = n ? Number(n) : void 0;
                            void 0 !== e && void 0 !== i && e > i && o(e, i)
                        };
                    return (0, i.jsxs)("div", {
                        className: "flex w-full gap-2",
                        children: [(0, i.jsx)(Z, {
                            value: null !== t && void 0 !== t ? t : "",
                            handleValueChange: s,
                            ref: d,
                            handleOnTab: function(e) {
                                var t;
                                "Tab" === e.code && (e.preventDefault(), null === (t = u.current) || void 0 === t || t.focus())
                            },
                            showEmptyError: l,
                            onBlur: c
                        }), (0, i.jsx)("div", {
                            className: "text-sd-foreground leading-8",
                            children: "-"
                        }), (0, i.jsx)(Z, {
                            value: null !== n && void 0 !== n ? n : "",
                            handleValueChange: a,
                            ref: u,
                            showEmptyError: l,
                            onBlur: c
                        })]
                    })
                },
                E = function(e, t) {
                    return (!t || void 0 === e) && (!(!t || void 0 !== e) || t)
                },
                T = n(42268),
                C = n(63808),
                _ = n(88525),
                F = function(e) {
                    return (0, _.cHz)(C.f6, {}, (0, g.Z)((0, h.Z)({}, e), {
                        select: function(e) {
                            return e.problemsetCompanyTags.map((function(e) {
                                return {
                                    name: e.name,
                                    slug: e.slug,
                                    translatedName: ""
                                }
                            }))
                        }
                    }))
                },
                L = n(99534),
                I = function(e) {
                    var t = e.isActive,
                        n = e.className,
                        s = e.children,
                        r = (0, L.Z)(e, ["isActive", "className", "children"]);
                    return (0, i.jsx)("div", (0, g.Z)((0, h.Z)({
                        className: (0, N.yI)("bg-sd-accent text-sd-muted-foreground m-1 inline-flex cursor-pointer items-center rounded-xl px-2 py-[3px] text-xs leading-[18px]", {
                            "bg-sd-primary text-sd-primary-foreground": t
                        }, n)
                    }, r), {
                        children: s
                    }))
                },
                P = function(e) {
                    var t = e.filteredTags,
                        n = e.remainingTags,
                        s = e.selected,
                        r = e.handleSelect;
                    return (0, i.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [t.map((function(e) {
                            return (0, i.jsx)(I, {
                                isActive: s.some((function(t) {
                                    return t === e.slug
                                })),
                                onClick: function() {
                                    return r(e.slug)
                                },
                                children: e.name
                            }, e.slug)
                        })), t.length > 0 && n.length > 0 && (0, i.jsx)("span", {
                            className: "h-2 w-full"
                        }, "span"), n.map((function(e) {
                            return (0, i.jsx)(I, {
                                isActive: s.some((function(t) {
                                    return t === e.slug
                                })),
                                onClick: function() {
                                    return r(e.slug)
                                },
                                children: e.name
                            }, e.slug)
                        }))]
                    })
                },
                k = n(9337),
                V = n(83269),
                D = n(43822),
                O = function(e) {
                    var t = e.onChange,
                        n = e.handleComposition,
                        r = e.noResult,
                        a = e.className,
                        l = (0, s.$G)("problemlist").t;
                    return (0, i.jsxs)("div", {
                        className: a,
                        children: [(0, i.jsx)(D.I, {
                            type: "text",
                            placeholder: l("filter.search"),
                            leftIcon: k.j,
                            onChange: t,
                            onCompositionStart: n,
                            onCompositionUpdate: n,
                            onCompositionEnd: n,
                            className: (0, N.yI)("rounded-full", V.UG)
                        }), r && (0, i.jsx)("div", {
                            className: "text-red-s dark:text-dark-red-s mt-4",
                            children: l("filter.noResult")
                        })]
                    })
                },
                M = n(94184),
                A = n.n(M),
                R = function(e) {
                    var t = e.enableReset,
                        n = e.handleReset,
                        r = (0, s.$G)("problemlist").t;
                    return (0, i.jsx)("div", {
                        className: "border-sd-border my-1 flex flex-row-reverse border-t px-2 pt-3",
                        children: (0, i.jsxs)("div", {
                            className: A()("text-sd-muted-foreground flex items-center space-x-1 outline-none", {
                                "opacity-60": !t,
                                "cursor-pointer": t,
                                "cursor-not-allowed": !t
                            }),
                            onClick: n,
                            children: [(0, i.jsx)(p.e, {
                                icon: m.paY,
                                variant: "14px",
                                className: "text-sd-muted-foreground"
                            }), (0, i.jsx)("span", {
                                children: r("filter.reset")
                            })]
                        })
                    })
                },
                q = n(72058),
                G = n(23358),
                X = function(e) {
                    var t = e.children;
                    return (0, i.jsx)("div", {
                        className: (0, N.yI)("bg-sd-accent text-sd-muted-foreground max-w-[160px] cursor-pointer items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-xl px-2 text-xs leading-[18px]"),
                        children: t
                    })
                },
                Q = function(e) {
                    var t = e.open,
                        n = e.setOpen,
                        s = e.selectedOptions,
                        a = e.children,
                        l = e.showEmptyError,
                        o = (0, r.useState)([]),
                        d = o[0],
                        u = o[1],
                        c = (0, r.useState)(0),
                        f = c[0],
                        v = c[1],
                        x = (0, r.useRef)(null),
                        h = (0, q.i)().width,
                        g = Number(h) < 600,
                        y = function(e) {
                            var t = document.createElement("canvas").getContext("2d");
                            return t ? (t.font = "12px", t.measureText(e).width + 32) : 0
                        },
                        j = (0, r.useCallback)((function() {
                            var e, t = (null === (e = x.current) || void 0 === e ? void 0 : e.offsetWidth) || 0,
                                n = 0,
                                i = [],
                                r = y("".concat(s.length, "+"));
                            s.forEach((function(e) {
                                var s = y(e);
                                r + s + 30 < t && !g ? (i.push(e), r += s) : n++
                            })), u(i), v(n > 99 ? 99 : n)
                        }), [g, s]);
                    return (0, r.useEffect)((function() {
                        j()
                    }), [j, s]), (0, i.jsxs)(G.h_, {
                        open: t,
                        onOpenChange: n,
                        modal: !1,
                        children: [(0, i.jsx)(G.$F, {
                            asChild: !0,
                            children: (0, i.jsxs)("div", {
                                className: (0, N.yI)("border-sd-input flex h-8 flex-1 cursor-pointer items-center justify-between rounded-[8px] border px-3 py-1.5", {
                                    "border-sd-red-400 filter-empty-dom": l
                                }),
                                ref: x,
                                children: [(0, i.jsxs)("div", {
                                    className: "flex h-[18px] items-center gap-2",
                                    children: [d.map((function(e, t) {
                                        return (0, i.jsx)(X, {
                                            children: e
                                        }, "".concat(t, "-").concat(e))
                                    })), f > 0 && (0, i.jsxs)(X, {
                                        children: ["+", f]
                                    })]
                                }), (0, i.jsx)(p.e, {
                                    icon: m.ptq,
                                    className: "text-sd-muted-foreground",
                                    variant: "12px"
                                })]
                            })
                        }), (0, i.jsx)(G.AW, {
                            align: "start",
                            className: "z-modal-3",
                            children: a
                        })]
                    })
                },
                B = function(e) {
                    var t = e.seletedItems,
                        n = void 0 === t ? [] : t,
                        s = e.setSeletedItems,
                        a = e.showEmptyError,
                        l = F().data,
                        o = (0, r.useState)(!1),
                        d = o[0],
                        u = o[1],
                        c = (0, r.useState)(""),
                        m = c[0],
                        f = c[1],
                        p = (0, r.useMemo)((function() {
                            var e = [];
                            return l && l.forEach((function(t) {
                                (null === n || void 0 === n ? void 0 : n.includes(t.slug)) && e.push(t.name)
                            })), e
                        }), [n, l]),
                        v = (0, r.useMemo)((function() {
                            var e = null !== l && void 0 !== l ? l : [];
                            if (!m) return [
                                [], e
                            ];
                            var t = m.toLowerCase();
                            return [e.filter((function(e) {
                                return e.name.toLowerCase().includes(t)
                            })), e.filter((function(e) {
                                return !e.name.toLowerCase().includes(t)
                            }))]
                        }), [l, m]),
                        x = v[0],
                        h = v[1],
                        g = (null === n || void 0 === n ? void 0 : n.length) > 0,
                        j = x.length;
                    (0, r.useEffect)((function() {
                        f("")
                    }), [d]);
                    var b = (0, r.useCallback)((function(e) {
                            f((0, T.Z)(e.currentTarget.value || ""))
                        }), [f]),
                        w = (0, r.useCallback)((function(e) {
                            e && ((null === n || void 0 === n ? void 0 : n.some((function(t) {
                                return t === e
                            }))) ? s(n.filter((function(t) {
                                return t !== e
                            }))) : s((0, y.Z)(n).concat([e])))
                        }), [n, s]),
                        N = (0, r.useCallback)((function() {
                            s([])
                        }), [s]);
                    return (0, i.jsx)(Q, {
                        open: d,
                        setOpen: u,
                        selectedOptions: p,
                        showEmptyError: a,
                        children: (0, i.jsxs)("div", {
                            className: "flex h-[274px] w-[380px] flex-col justify-between px-[14px] pt-[14px]",
                            children: [(0, i.jsxs)("div", {
                                className: "max-h-[222px] overflow-auto",
                                children: [(0, i.jsx)(O, {
                                    onChange: b,
                                    noResult: !!m && 0 === j
                                }), (0, i.jsx)("div", {
                                    className: "mt-3",
                                    children: (0, i.jsx)(P, {
                                        selected: n,
                                        handleSelect: w,
                                        filteredTags: x,
                                        remainingTags: h
                                    })
                                })]
                            }), (0, i.jsx)(R, {
                                enableReset: g,
                                handleReset: N
                            })]
                        })
                    })
                },
                K = n(14428),
                z = function(e) {
                    var t, n, i, s = null !== (n = null === (t = e.questionTopicTags) || void 0 === t ? void 0 : t.edges.map((function(e) {
                            return null === e || void 0 === e ? void 0 : e.node
                        }))) && void 0 !== n ? n : [],
                        r = K.Z.sortBy(s, (function(e) {
                            var t;
                            return null !== (i = null === e || void 0 === e || null === (t = e.questionIds) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0
                        })),
                        a = K.Z.compact(r.map((function(e) {
                            var t, n;
                            return e && (null === (t = e.questionIds) || void 0 === t ? void 0 : t.length) ? {
                                name: e.name,
                                slug: e.slug,
                                translatedName: null !== (n = e.translatedName) && void 0 !== n ? n : ""
                            } : null
                        })));
                    return K.Z.reverse(a)
                },
                $ = function(e) {
                    return (0, _.g5e)(C.f6, {}, (0, g.Z)((0, h.Z)({}, e), {
                        select: z
                    }))
                },
                H = n(50632),
                Y = function(e) {
                    var t, n, s = e.filteredTags,
                        r = e.remainingTags,
                        a = e.selected,
                        l = e.handleSelect,
                        o = Boolean(null === (t = (0, H.U5)().data) || void 0 === t || null === (n = t.userStatus) || void 0 === n ? void 0 : n.useTranslation);
                    return (0, i.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [s.map((function(e) {
                            return (0, i.jsx)(I, {
                                isActive: a.some((function(t) {
                                    return t === e.slug
                                })),
                                onClick: function() {
                                    return l(e.slug)
                                },
                                children: o && e.translatedName || e.name
                            }, e.slug)
                        })), s.length > 0 && r.length > 0 && (0, i.jsx)("span", {
                            className: "h-2 w-full"
                        }, "span"), r.map((function(e) {
                            return (0, i.jsx)(I, {
                                isActive: a.some((function(t) {
                                    return t === e.slug
                                })),
                                onClick: function() {
                                    return l(e.slug)
                                },
                                children: o && e.translatedName || e.name
                            }, e.slug)
                        }))]
                    })
                },
                U = function(e) {
                    var t, n, s = e.selectedItems,
                        a = void 0 === s ? [] : s,
                        l = e.setSelectedItems,
                        o = e.showEmptyError,
                        d = $().data,
                        u = (0, r.useState)(!1),
                        c = u[0],
                        m = u[1],
                        f = (0, r.useState)(""),
                        p = f[0],
                        v = f[1],
                        x = Boolean(null === (t = (0, H.U5)().data) || void 0 === t || null === (n = t.userStatus) || void 0 === n ? void 0 : n.useTranslation),
                        h = (0, r.useMemo)((function() {
                            var e = [];
                            return d && d.forEach((function(t) {
                                (null === a || void 0 === a ? void 0 : a.includes(t.slug)) && e.push(x && t.translatedName || t.name)
                            })), e
                        }), [a, d, x]),
                        g = (0, r.useMemo)((function() {
                            var e = null !== d && void 0 !== d ? d : [];
                            if (!p) return [
                                [], e
                            ];
                            var t = p.toLowerCase();
                            return [e.filter((function(e) {
                                var n;
                                return e.name.toLowerCase().includes(t) || (null === (n = e.translatedName) || void 0 === n ? void 0 : n.toLowerCase().includes(t))
                            })), e.filter((function(e) {
                                var n;
                                return !(e.name.toLowerCase().includes(t) || (null === (n = e.translatedName) || void 0 === n ? void 0 : n.toLowerCase().includes(t)))
                            }))]
                        }), [d, p]),
                        j = g[0],
                        b = g[1],
                        w = a.length > 0,
                        N = j.length;
                    (0, r.useEffect)((function() {
                        v("")
                    }), [c]);
                    var Z = (0, r.useCallback)((function(e) {
                            v((0, T.Z)(e.currentTarget.value || ""))
                        }), [v]),
                        S = (0, r.useCallback)((function(e) {
                            e && ((null === a || void 0 === a ? void 0 : a.some((function(t) {
                                return t === e
                            }))) ? l(a.filter((function(t) {
                                return t !== e
                            }))) : l((0, y.Z)(a).concat([e])))
                        }), [a, l]),
                        E = (0, r.useCallback)((function() {
                            l([])
                        }), [l]);
                    return (0, i.jsx)(Q, {
                        open: c,
                        setOpen: m,
                        selectedOptions: h,
                        showEmptyError: o,
                        children: (0, i.jsxs)("div", {
                            className: "flex h-[274px] w-[380px] flex-col justify-between px-[14px] pt-[14px]",
                            children: [(0, i.jsxs)("div", {
                                className: "max-h-[222px] overflow-auto",
                                children: [(0, i.jsx)(O, {
                                    onChange: Z,
                                    noResult: !!p && 0 === N
                                }), (0, i.jsx)("div", {
                                    className: "mt-3",
                                    children: (0, i.jsx)(Y, {
                                        selected: a,
                                        handleSelect: S,
                                        filteredTags: j,
                                        remainingTags: b
                                    })
                                })]
                            }), (0, i.jsx)(R, {
                                enableReset: w,
                                handleReset: E
                            })]
                        })
                    })
                },
                W = n(4421),
                J = function(e) {
                    return (0, _.zGH)(C.f6, {}, (0, g.Z)((0, h.Z)({}, e), {
                        select: function(e) {
                            return e.problemsetPositionTags.map((function(e) {
                                return {
                                    name: e.name,
                                    value: e.slug
                                }
                            }))
                        }
                    }))
                },
                ee = function(e) {
                    var t = e.options,
                        n = e.selectedItems,
                        s = e.selectedOptionsName,
                        a = e.handleSelect,
                        l = e.isSingle,
                        o = e.showEmptyError,
                        d = (0, r.useState)(!1),
                        u = d[0],
                        c = d[1];
                    return (0, i.jsx)(Q, {
                        open: u,
                        setOpen: c,
                        selectedOptions: s,
                        showEmptyError: o,
                        children: (0, i.jsx)("div", {
                            className: "max-h-[210px] overflow-auto rounded-[8px]",
                            children: t.map((function(e) {
                                return (0, i.jsxs)("div", {
                                    className: "hover:bg-sd-accent flex cursor-pointer justify-between rounded-[5px] px-2 py-1.5",
                                    onClick: function() {
                                        return t = e.value, void(n.includes(t) ? a(n.filter((function(e) {
                                            return e !== t
                                        }))) : a(l ? [t] : (0, y.Z)(n).concat([t])));
                                        var t
                                    },
                                    children: [(0, i.jsx)("div", {
                                        className: (0, N.yI)("max-w-[190px] text-ellipsis text-sm font-medium", e.className),
                                        children: e.name
                                    }), s.includes(e.name) && (0, i.jsx)(p.e, {
                                        icon: m.LEp,
                                        variant: "16px",
                                        className: "text-sd-popover-foreground"
                                    })]
                                }, e.value)
                            }))
                        })
                    })
                },
                te = function(e) {
                    var t, n = e.selectedItems,
                        s = void 0 === n ? [] : n,
                        l = e.setSelectedItems,
                        o = e.envType,
                        d = e.showEmptyError,
                        u = o === V.Zw.Company,
                        c = J().data,
                        m = null !== (t = (0, a.useRouter)().query.slug) && void 0 !== t ? t : "",
                        f = (0, W.cZ)(m).data,
                        p = (0, r.useMemo)((function() {
                            var e;
                            return u ? (null !== (e = null === f || void 0 === f ? void 0 : f.positionRoleTags) && void 0 !== e ? e : []).map((function(e) {
                                return {
                                    name: e.nameTranslated || e.name,
                                    value: e.slug
                                }
                            })) : c
                        }), [u, c, null === f || void 0 === f ? void 0 : f.positionRoleTags]),
                        v = (0, r.useMemo)((function() {
                            var e;
                            return s.map((function(t) {
                                var n;
                                return null !== (e = null === (n = null === p || void 0 === p ? void 0 : p.find((function(e) {
                                    return e.value === t
                                }))) || void 0 === n ? void 0 : n.name) && void 0 !== e ? e : ""
                            }))
                        }), [p, s]);
                    return (0, i.jsx)(ee, {
                        options: null !== p && void 0 !== p ? p : [],
                        selectedItems: s,
                        selectedOptionsName: v,
                        handleSelect: l,
                        isSingle: u,
                        showEmptyError: d
                    })
                },
                ne = function(e) {
                    var t = e.selectedItems,
                        n = void 0 === t ? [] : t,
                        a = e.setSelectedItems,
                        o = e.showEmptyError,
                        d = (0, s.$G)("problemlist").t,
                        u = (0, r.useMemo)((function() {
                            return [{
                                value: l.SGW.ToDo,
                                name: d("todo")
                            }, {
                                value: l.SGW.Attempted,
                                name: d("attempted")
                            }, {
                                value: l.SGW.Solved,
                                name: d("solved")
                            }]
                        }), [d]),
                        c = (0, r.useMemo)((function() {
                            var e;
                            return n.map((function(t) {
                                var n;
                                return d(null !== (e = null === (n = null === u || void 0 === u ? void 0 : u.find((function(e) {
                                    return e.value === t
                                }))) || void 0 === n ? void 0 : n.name) && void 0 !== e ? e : "")
                            }))
                        }), [u, n, d]);
                    return (0, i.jsx)(ee, {
                        options: u,
                        selectedItems: n,
                        selectedOptionsName: c,
                        handleSelect: a,
                        showEmptyError: o
                    })
                },
                ie = function(e) {
                    var t = e.selectedItems,
                        n = void 0 === t ? [] : t,
                        a = e.setSelectedItems,
                        o = e.showEmptyError,
                        d = (0, s.$G)("problemlist", {
                            keyPrefix: "difficulty"
                        }).t,
                        u = (0, r.useMemo)((function() {
                            return [{
                                value: l.FdC.Easy,
                                name: d("easy"),
                                className: "text-sd-easy"
                            }, {
                                value: l.FdC.Medium,
                                name: d("medium"),
                                className: "text-sd-medium"
                            }, {
                                value: l.FdC.Hard,
                                name: d("hard"),
                                className: "text-sd-hard"
                            }]
                        }), [d]),
                        c = (0, r.useMemo)((function() {
                            var e;
                            return n.map((function(t) {
                                var n;
                                return null !== (e = null === (n = null === u || void 0 === u ? void 0 : u.find((function(e) {
                                    return e.value === t
                                }))) || void 0 === n ? void 0 : n.name) && void 0 !== e ? e : ""
                            }))
                        }), [n, u]);
                    return (0, i.jsx)(ee, {
                        options: u,
                        selectedItems: n,
                        selectedOptionsName: c,
                        handleSelect: a,
                        showEmptyError: o
                    })
                },
                se = function(e) {
                    return (0, _.xBJ)(C.f6, {}, (0, g.Z)((0, h.Z)({}, e), {
                        select: function(e) {
                            var t, n, i, s = e.languageList;
                            return null !== (i = null === s || void 0 === s ? void 0 : s.map((function(e) {
                                return {
                                    name: null !== (t = null === e || void 0 === e ? void 0 : e.verboseName) && void 0 !== t ? t : "",
                                    value: null !== (n = null === e || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
                                }
                            }))) && void 0 !== i ? i : []
                        }
                    }))
                },
                re = function(e) {
                    var t = e.selectedItems,
                        n = void 0 === t ? [] : t,
                        s = e.setSelectedItems,
                        a = e.showEmptyError,
                        l = se().data,
                        o = (0, r.useMemo)((function() {
                            var e;
                            return n.map((function(t) {
                                var n;
                                return null !== (e = null === (n = null === l || void 0 === l ? void 0 : l.find((function(e) {
                                    return e.value === t
                                }))) || void 0 === n ? void 0 : n.name) && void 0 !== e ? e : ""
                            }))
                        }), [l, n]);
                    return (0, i.jsx)(ee, {
                        options: null !== l && void 0 !== l ? l : [],
                        selectedItems: n,
                        selectedOptionsName: o,
                        handleSelect: s,
                        showEmptyError: a
                    })
                },
                ae = n(10253),
                le = n(62469),
                oe = n(46216),
                de = n(83210),
                ue = n(74712),
                ce = n(35077).Z;

            function me(e) {
                var t = e.className,
                    n = e.classNames,
                    s = e.showOutsideDays,
                    r = void 0 === s || s,
                    a = (0, L.Z)(e, ["className", "classNames", "showOutsideDays"]);
                return (0, i.jsx)(ue._W, (0, h.Z)({
                    locale: ce,
                    showOutsideDays: r,
                    className: (0, N.yI)("p-3", t),
                    classNames: (0, h.Z)({
                        months: "flex flex-col sd-sm:flex-row space-y-4 sd-sm:space-x-4 sd-sm:space-y-0",
                        month: "space-y-4",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-sm font-medium text-sd-foreground",
                        nav: "space-x-1 flex items-center",
                        nav_button: (0, N.yI)((0, de.d)({
                            variant: "outline"
                        }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute"),
                        nav_button_previous: "left-1",
                        nav_button_next: "right-1",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex",
                        head_cell: "text-sd-muted-foreground rounded-sd-md w-8 font-normal text-[0.8rem] text-center",
                        row: "flex w-full mt-2",
                        cell: (0, N.yI)("relative p-0 text-center text-sm focus-within:relative focus-within:z-overlay [&:has([aria-selected])]:bg-sd-accent", "range" === a.mode ? "[&:has(>.day-range-end)]:rounded-r-sd-md [&:has(>.day-range-start)]:rounded-l-sd-md first:[&:has([aria-selected])]:rounded-l-sd-md last:[&:has([aria-selected])]:rounded-r-sd-md" : "[&:has([aria-selected])]:rounded-sd-md"),
                        day: (0, N.yI)((0, de.d)({
                            variant: "ghost"
                        }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
                        day_range_start: "day-range-start",
                        day_range_end: "day-range-end",
                        day_selected: "bg-sd-primary text-sd-primary-foreground hover:bg-sd-primary hover:text-sd-primary-foreground focus:bg-sd-primary focus:text-sd-primary-foreground",
                        day_today: "bg-sd-accent text-sd-accent-foreground",
                        day_outside: "text-sd-muted-foreground opacity-50",
                        day_disabled: "text-sd-muted-foreground opacity-50",
                        day_range_middle: "aria-selected:bg-transparent aria-selected:text-sd-accent-foreground",
                        day_hidden: "invisible"
                    }, n),
                    components: {
                        IconLeft: function() {
                            return (0, i.jsx)(le.wyc, {
                                className: "h-4 w-4"
                            })
                        },
                        IconRight: function() {
                            return (0, i.jsx)(le.XCv, {
                                className: "h-4 w-4"
                            })
                        }
                    }
                }, a))
            }
            me.displayName = "Calendar";
            var fe = n(41435),
                pe = "LLL dd, y";
            var ve, xe = function(e) {
                    var t = e.date,
                        n = e.setDate,
                        s = e.placeholderText,
                        a = e.className,
                        l = e.containerClassName,
                        d = e.handleAfterClose,
                        u = (0, ae.Z)(r.useState(!1), 2),
                        c = u[0],
                        m = u[1];
                    return (0, o.r)((function() {
                        !c && d && d()
                    }), [c, d]), (0, i.jsx)(fe.J2, {
                        className: (0, N.yI)("w-auto p-0", l),
                        align: "start",
                        open: c,
                        onOpenChange: m,
                        content: (0, i.jsx)(me, {
                            initialFocus: !0,
                            mode: "range",
                            defaultMonth: null === t || void 0 === t ? void 0 : t.from,
                            selected: t,
                            onSelect: n,
                            numberOfMonths: 2
                        }),
                        children: (0, i.jsxs)(de.z, {
                            id: "date",
                            variant: "outline",
                            className: (0, N.yI)("justify-start text-left font-normal", !t && "text-sd-muted-foreground", a),
                            children: [(0, i.jsx)(le.Que, {
                                className: "mr-2 h-4 w-4"
                            }), (null === t || void 0 === t ? void 0 : t.from) ? (0, i.jsx)("span", {
                                className: " lc-md:max-w-[190px] max-w-[40px] overflow-hidden text-ellipsis whitespace-nowrap",
                                children: t.to ? (0, i.jsxs)(i.Fragment, {
                                    children: [(0, oe.Z)(t.from, pe), " - ", (0, oe.Z)(t.to, pe)]
                                }) : (0, oe.Z)(t.from, pe)
                            }) : (0, i.jsx)("span", {
                                children: s
                            })]
                        })
                    })
                },
                he = n(34275),
                ge = function(e) {
                    return void 0 === e ? e : e ? new Date(he.B.unix(null !== e && void 0 !== e ? e : 0).utc().format("YYYY-MM-DD")) : void 0
                },
                ye = function(e) {
                    var t = e.type,
                        n = e.startFrom,
                        a = e.endAt,
                        l = e.pastDays,
                        o = e.handleTimeValueChange,
                        d = e.handlePastDaysValueChange,
                        u = e.showEmptyError,
                        c = (0, s.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        m = (0, r.useState)({
                            from: n ? ge(n) : void 0,
                            to: a ? ge(a) : void 0
                        }),
                        f = m[0],
                        p = m[1];
                    return (0, i.jsx)("div", {
                        className: "w-full",
                        children: "range" === t ? (0, i.jsx)(xe, {
                            date: f,
                            setDate: function(e) {
                                var t = null !== e && void 0 !== e ? e : {},
                                    n = t.from,
                                    i = t.to,
                                    s = function(e) {
                                        if (e) {
                                            var t = (0, he.B)(e).format("YYYY-MM-DD");
                                            return Math.floor(he.B.utc(t).valueOf() / 1e3)
                                        }
                                        return e
                                    }(n),
                                    r = function(e) {
                                        if (e) {
                                            var t = (0, he.B)(e).format("YYYY-MM-DD");
                                            return Math.floor(he.B.utc(t + " 23:59:59").valueOf() / 1e3)
                                        }
                                        return e
                                    }(i);
                                p(e), o({
                                    startFrom: s,
                                    endAt: r
                                })
                            },
                            placeholderText: "",
                            className: (0, N.yI)("h-8 w-full", {
                                "border-sd-red-400 filter-empty-dom": u
                            }),
                            containerClassName: "z-modal-4 lc-md:max-h-hull max-h-[450px] overflow-y-auto",
                            handleAfterClose: function() {
                                void 0 === (null === f || void 0 === f ? void 0 : f.to) && void 0 !== (null === f || void 0 === f ? void 0 : f.from) && (p({
                                    from: void 0,
                                    to: void 0
                                }), o({
                                    startFrom: void 0,
                                    endAt: void 0
                                }))
                            }
                        }) : (0, i.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, i.jsx)(w.I, {
                                className: (0, N.yI)("text-sd-foreground h-8 w-[108px] focus-visible:ring-0", {
                                    "border-sd-red-400 filter-empty-dom": u
                                }),
                                value: l,
                                onChange: function(e) {
                                    var t = e.target.value;
                                    if ("" !== t) {
                                        if (/^\d+$/.test(t)) {
                                            var n = parseInt(t, 10);
                                            d(n > 1e3 ? 1e3 : n)
                                        }
                                    } else d(void 0)
                                },
                                onKeyDown: function(e) {
                                    /[\d]/.test(e.key) || "Backspace" === e.key || e.preventDefault()
                                }
                            }), c("days")]
                        })
                    })
                },
                je = function(e) {
                    var t = e.selectedItems,
                        n = void 0 === t ? [] : t,
                        a = e.setSelectedItems,
                        o = e.showEmptyError,
                        d = (0, s.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        u = (0, r.useMemo)((function() {
                            return [{
                                value: l.Hnv.Premium,
                                name: d("including")
                            }, {
                                value: l.Hnv.NotPremium,
                                name: d("excluding")
                            }]
                        }), [d]),
                        c = (0, r.useMemo)((function() {
                            var e;
                            return n.map((function(t) {
                                var n;
                                return null !== (e = null === (n = null === u || void 0 === u ? void 0 : u.find((function(e) {
                                    return e.value === t
                                }))) || void 0 === n ? void 0 : n.name) && void 0 !== e ? e : ""
                            }))
                        }), [n, u]);
                    return (0, i.jsx)(ee, {
                        options: u,
                        selectedItems: n,
                        selectedOptionsName: c,
                        handleSelect: a,
                        showEmptyError: o
                    })
                },
                be = n(10601),
                we = n(19906),
                Ne = (ve = {}, (0, x.Z)(ve, c.Ts.frequency, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.frequency,
                        a = t[s],
                        l = (0, r.useState)(a.rangeLeft),
                        o = l[0],
                        d = l[1],
                        u = (0, r.useState)(a.rangeRight),
                        m = u[0],
                        f = u[1];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.q1,
                                value: "range",
                                handleValueChange: function() {}
                            })
                        }), (0, i.jsx)(S, {
                            rangeLeft: null === o || void 0 === o ? void 0 : o.toString(),
                            rangeRight: null === m || void 0 === m ? void 0 : m.toString(),
                            handleRangeLeftValueChange: function(e) {
                                d(e), n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a), {
                                    rangeLeft: e,
                                    showEmptyError: E(e, t[s].showEmptyError)
                                }))))
                            },
                            handleRangeRightValueChange: function(e) {
                                f(e), n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a), {
                                    rangeRight: e,
                                    showEmptyError: E(e, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: a.showEmptyError,
                            handleSwapValues: function(e, i) {
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a), {
                                    rangeRight: e,
                                    rangeLeft: i,
                                    showEmptyError: E(m, t[s].showEmptyError)
                                })))), d(i), f(e)
                            }
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.companies, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.companies,
                        r = t[s];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.KG,
                                value: r.chooseTypeVal || l.lno.Is,
                                handleValueChange: function(e) {
                                    n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                        chooseTypeVal: e
                                    }))))
                                }
                            })
                        }), (0, i.jsx)(B, {
                            seletedItems: r.multiSelectValues,
                            setSeletedItems: function(e) {
                                var i = e.length > 0 ? e : void 0;
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                    multiSelectValues: i,
                                    showEmptyError: E(i, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: r.showEmptyError
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.position, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = e.envType,
                        r = c.Ts.position,
                        a = t[r];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.KG,
                                value: a.chooseTypeVal || l.lno.Is,
                                handleValueChange: function(e) {
                                    n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, r, (0, g.Z)((0, h.Z)({}, a), {
                                        chooseTypeVal: e
                                    }))))
                                }
                            })
                        }), (0, i.jsx)(te, {
                            selectedItems: a.multiSelectValues,
                            setSelectedItems: function(e) {
                                var i = e.length > 0 ? e : void 0;
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, r, (0, g.Z)((0, h.Z)({}, a), {
                                    multiSelectValues: i,
                                    showEmptyError: E(i, t[r].showEmptyError)
                                }))))
                            },
                            envType: s,
                            showEmptyError: a.showEmptyError
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.status, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.status,
                        r = t[s];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.KG,
                                value: r.chooseTypeVal || l.lno.Is,
                                handleValueChange: function(e) {
                                    n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                        chooseTypeVal: e
                                    }))))
                                }
                            })
                        }), (0, i.jsx)(ne, {
                            selectedItems: r.multiSelectValues,
                            setSelectedItems: function(e) {
                                var i = e.length > 0 ? e : void 0;
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                    multiSelectValues: e,
                                    showEmptyError: E(i, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: r.showEmptyError
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.difficulty, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.difficulty,
                        r = t[s];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.KG,
                                value: r.chooseTypeVal || l.lno.Is,
                                handleValueChange: function(e) {
                                    n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                        chooseTypeVal: e
                                    }))))
                                }
                            })
                        }), (0, i.jsx)(ie, {
                            selectedItems: r.multiSelectValues,
                            setSelectedItems: function(e) {
                                var i = e.length > 0 ? e : void 0;
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                    multiSelectValues: i,
                                    showEmptyError: E(i, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: r.showEmptyError
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.topics, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.topics,
                        r = t[s];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.KG,
                                value: r.chooseTypeVal || l.lno.Is,
                                handleValueChange: function(e) {
                                    n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                        chooseTypeVal: e
                                    }))))
                                }
                            })
                        }), (0, i.jsx)(U, {
                            selectedItems: r.multiSelectValues,
                            setSelectedItems: function(e) {
                                var i = e.length > 0 ? e : void 0;
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                    multiSelectValues: e,
                                    showEmptyError: E(i, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: r.showEmptyError
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.lang, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.lang,
                        r = t[s];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.KG,
                                value: r.chooseTypeVal || l.lno.Is,
                                handleValueChange: function(e) {
                                    n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                        chooseTypeVal: e
                                    }))))
                                }
                            })
                        }), (0, i.jsx)(re, {
                            selectedItems: r.multiSelectValues,
                            setSelectedItems: function(e) {
                                var i = e.length > 0 ? e : void 0;
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                    multiSelectValues: e,
                                    showEmptyError: E(i, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: r.showEmptyError
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.acceptance, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.acceptance,
                        a = t[s],
                        l = (0, r.useState)(a.rangeLeft),
                        o = l[0],
                        d = l[1],
                        u = (0, r.useState)(a.rangeRight),
                        m = u[0],
                        f = u[1];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.q1,
                                value: "range",
                                handleValueChange: function() {}
                            })
                        }), (0, i.jsx)(S, {
                            rangeLeft: null === o || void 0 === o ? void 0 : o.toString(),
                            rangeRight: null === m || void 0 === m ? void 0 : m.toString(),
                            handleRangeLeftValueChange: function(e) {
                                d(e), n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a), {
                                    rangeLeft: e,
                                    showEmptyError: E(e, t[s].showEmptyError)
                                }))))
                            },
                            handleRangeRightValueChange: function(e) {
                                f(e), n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a), {
                                    rangeRight: e,
                                    showEmptyError: E(e, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: a.showEmptyError,
                            handleSwapValues: function(e, i) {
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a), {
                                    rangeRight: e,
                                    rangeLeft: i,
                                    showEmptyError: E(m, t[s].showEmptyError)
                                })))), d(i), f(e)
                            }
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.lastSubmit, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.lastSubmit,
                        a = t[s],
                        l = (0, r.useState)(void 0 === t[s].pastDays ? "range" : "past"),
                        d = l[0],
                        u = l[1];
                    return (0, o.r)((function() {
                        n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, c.ZP[s]), {
                            show: !0
                        }))))
                    }), [d]), (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.Hd,
                                value: d,
                                handleValueChange: u
                            })
                        }), (0, i.jsx)(ye, {
                            type: d,
                            startFrom: a.startFrom,
                            endAt: a.endAt,
                            handleTimeValueChange: function(e) {
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a, e), {
                                    showEmptyError: E(e.endAt, t[s].showEmptyError)
                                }))))
                            },
                            pastDays: a.pastDays,
                            handlePastDaysValueChange: function(e) {
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a), {
                                    pastDays: e,
                                    showEmptyError: E(e, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: a.showEmptyError
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.published, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.published,
                        a = t[s],
                        l = (0, r.useState)(void 0 === t[s].pastDays ? "range" : "past"),
                        d = l[0],
                        u = l[1];
                    return (0, o.r)((function() {
                        n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, c.ZP[s]), {
                            show: !0
                        }))))
                    }), [d]), (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.Hd,
                                value: d,
                                handleValueChange: u
                            })
                        }), (0, i.jsx)(ye, {
                            type: d,
                            startFrom: a.startFrom,
                            endAt: a.endAt,
                            handleTimeValueChange: function(e) {
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a, e), {
                                    showEmptyError: E(e.endAt, t[s].showEmptyError)
                                }))))
                            },
                            pastDays: a.pastDays,
                            handlePastDaysValueChange: function(e) {
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, a), {
                                    pastDays: e,
                                    showEmptyError: E(e, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: a.showEmptyError
                        })]
                    })
                })), (0, x.Z)(ve, c.Ts.premium, (function(e) {
                    var t = e.dataMap,
                        n = e.setDataMap,
                        s = c.Ts.premium,
                        r = t[s];
                    return (0, i.jsxs)("div", {
                        className: "flex flex-1 gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "w-[84px]",
                            children: (0, i.jsx)(v, {
                                options: c.KG,
                                value: r.chooseTypeVal || l.lno.Is,
                                handleValueChange: function(e) {
                                    n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                        chooseTypeVal: e
                                    }))))
                                }
                            })
                        }), (0, i.jsx)(je, {
                            selectedItems: r.multiSelectValues,
                            setSelectedItems: function(e) {
                                var i = e.length > 0 ? e : void 0;
                                n((0, g.Z)((0, h.Z)({}, t), (0, x.Z)({}, s, (0, g.Z)((0, h.Z)({}, r), {
                                    multiSelectValues: i,
                                    showEmptyError: E(i, t[s].showEmptyError)
                                }))))
                            },
                            showEmptyError: r.showEmptyError
                        })]
                    })
                })), ve),
                Ze = function(e) {
                    var t, n = e.itemKey,
                        r = e.dataMap,
                        a = e.setDataMap,
                        l = e.showDeleteBtn,
                        o = e.envType,
                        d = (0, s.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        u = r[n],
                        f = Ne[n],
                        v = (0, j.y)().setShowKeysList,
                        w = (0, be.s)(r).showKeys;
                    return (0, i.jsxs)("div", {
                        className: "flex w-full items-center gap-2 pl-1",
                        children: [(0, i.jsx)("div", {
                            className: "flex h-5 w-5 items-center justify-center",
                            children: u.icon ? (0, i.jsx)(p.e, {
                                icon: u.icon,
                                variant: "16px",
                                className: "text-sd-foreground opacity-30"
                            }) : (0, i.jsx)(we.y, {
                                className: "h-4 w-4",
                                src: null !== (t = u.svgIcon) && void 0 !== t ? t : "",
                                alt: "icon"
                            })
                        }), (0, i.jsx)("div", {
                            className: "text-sd-muted-foreground w-[48px] text-xs",
                            children: u.isPremiumOnly ? (0, i.jsx)(b.t, {
                                children: d("filterNameAbbr.".concat(n))
                            }) : d("filterNameAbbr.".concat(n))
                        }), (0, i.jsx)(f, {
                            dataMap: r,
                            setDataMap: a,
                            envType: o
                        }), (0, i.jsx)("div", {
                            className: "w-[16px]",
                            children: l && (0, i.jsx)("div", {
                                className: "cursor-pointer",
                                onClick: function() {
                                    v((0, y.Z)(w.filter((function(e) {
                                        return e !== n
                                    }))));
                                    var e = (0, g.Z)((0, h.Z)({}, r), (0, x.Z)({}, n, (0, g.Z)((0, h.Z)({}, c.ZP[n]), {
                                        show: !1
                                    })));
                                    a(e)
                                },
                                children: (0, i.jsx)(p.e, {
                                    icon: m.Kl4,
                                    variant: "16px",
                                    className: "text-sd-foreground opacity-30"
                                })
                            })
                        })]
                    })
                },
                Se = n(21971),
                Ee = n(50576),
                Te = n(86397),
                Ce = n(22111),
                _e = (0, r.forwardRef)((function(e, t) {
                    var n = (0, a.useRouter)().pathname,
                        m = (0, s.$G)("problemlist", {
                            keyPrefix: "filter"
                        }).t,
                        f = e.initDataMap,
                        p = void 0 === f ? c.ZP : f,
                        x = e.initFilterCombineType,
                        h = void 0 === x ? l.YSR.All : x,
                        g = e.useQueryString,
                        y = void 0 !== g && g,
                        j = e.onChange,
                        b = e.envType,
                        w = e.filtersInfo,
                        N = (0, r.useState)(h),
                        Z = N[0],
                        S = N[1],
                        E = (0, r.useState)(p),
                        T = E[0],
                        C = E[1],
                        _ = (0, Se.S)({
                            enable: y
                        }),
                        F = _.dataMap,
                        L = _.filterCombineType,
                        I = (0, r.useState)(!1),
                        P = I[0],
                        k = I[1],
                        V = (0, be.s)(T).showKeys,
                        D = function(e) {
                            var t = e.dataMap,
                                n = e.filterCombineType,
                                i = e.enable,
                                s = void 0 !== i && i,
                                r = (0, Te.L)(),
                                a = r.newQuery,
                                l = r.setNewQuery;
                            return {
                                setUrlQuery: function() {
                                    var e = JSON.parse(JSON.stringify(a)),
                                        i = JSON.parse(JSON.stringify(e));
                                    if (s) {
                                        var r, o, d, u, m, f, p, v, x, h, g, y, j, b, w, N, Z, S, E, T, C, _, F, L;
                                        void 0 !== n && (e[c.jP.filterCombineType] = n.toString());
                                        var I = null === (r = t[c.Ts.frequency].rangeLeft) || void 0 === r ? void 0 : r.toString();
                                        I ? e[c.jP.frequencyFilterRangeLeft] = I : delete e[c.jP.frequencyFilterRangeLeft];
                                        var P = null === (o = t[c.Ts.frequency].rangeRight) || void 0 === o ? void 0 : o.toString();
                                        P ? e[c.jP.frequencyFilterRangeRight] = P : delete e[c.jP.frequencyFilterRangeRight];
                                        var k = null === (d = t[c.Ts.companies].multiSelectValues) || void 0 === d ? void 0 : d.join(",");
                                        k ? e[c.jP.companies] = k : delete e[c.jP.companies];
                                        var V = null === (u = t[c.Ts.companies].chooseTypeVal) || void 0 === u ? void 0 : u.toString();
                                        V ? e[c.jP.companyType] = V : delete e[c.jP.companyType];
                                        var D = null === (m = t[c.Ts.position].multiSelectValues) || void 0 === m ? void 0 : m.join(",");
                                        D ? e[c.jP.position] = D : delete e[c.jP.position];
                                        var O = null === (f = t[c.Ts.position].chooseTypeVal) || void 0 === f ? void 0 : f.toString();
                                        O ? e[c.jP.positionType] = O : delete e[c.jP.positionType];
                                        var M = null === (p = t[c.Ts.status].multiSelectValues) || void 0 === p ? void 0 : p.join(",");
                                        M ? e[c.jP.status] = M : delete e[c.jP.status];
                                        var A = null === (v = t[c.Ts.status].chooseTypeVal) || void 0 === v ? void 0 : v.toString();
                                        A ? e[c.jP.statusType] = A : delete e[c.jP.statusType];
                                        var R = null === (x = t[c.Ts.difficulty].multiSelectValues) || void 0 === x ? void 0 : x.join(",");
                                        R ? e[c.jP.difficulty] = R : delete e[c.jP.difficulty];
                                        var q = null === (h = t[c.Ts.difficulty].chooseTypeVal) || void 0 === h ? void 0 : h.toString();
                                        q ? e[c.jP.difficultyType] = q : delete e[c.jP.difficultyType];
                                        var G = null === (g = t[c.Ts.topics].multiSelectValues) || void 0 === g ? void 0 : g.join(",");
                                        G ? e[c.jP.topics] = G : delete e[c.jP.topics];
                                        var X = null === (y = t[c.Ts.topics].chooseTypeVal) || void 0 === y ? void 0 : y.toString();
                                        X ? e[c.jP.topicsType] = X : delete e[c.jP.topicsType];
                                        var Q = null === (j = t[c.Ts.lang].multiSelectValues) || void 0 === j ? void 0 : j.join(",");
                                        Q ? e[c.jP.lang] = Q : delete e[c.jP.lang];
                                        var B = null === (b = t[c.Ts.lang].chooseTypeVal) || void 0 === b ? void 0 : b.toString();
                                        B ? e[c.jP.langType] = B : delete e[c.jP.langType];
                                        var K = null === (w = t[c.Ts.acceptance].rangeLeft) || void 0 === w ? void 0 : w.toString();
                                        K ? e[c.jP.acceptanceRangeLeft] = K : delete e[c.jP.acceptanceRangeLeft];
                                        var z = null === (N = t[c.Ts.acceptance].rangeRight) || void 0 === N ? void 0 : N.toString();
                                        z ? e[c.jP.acceptanceRangeRight] = z : delete e[c.jP.acceptanceRangeRight];
                                        var $ = null === (Z = t[c.Ts.lastSubmit].startFrom) || void 0 === Z ? void 0 : Z.toString();
                                        $ ? e[c.jP.lastSubmittedStartFrom] = $ : delete e[c.jP.lastSubmittedStartFrom];
                                        var H = null === (S = t[c.Ts.lastSubmit].endAt) || void 0 === S ? void 0 : S.toString();
                                        H ? e[c.jP.lastSubmittedEndAt] = H : delete e[c.jP.lastSubmittedEndAt];
                                        var Y = null === (E = t[c.Ts.lastSubmit].pastDays) || void 0 === E ? void 0 : E.toString();
                                        Y ? e[c.jP.lastSubmittedPastDays] = Y : delete e[c.jP.lastSubmittedPastDays];
                                        var U = null === (T = t[c.Ts.published].startFrom) || void 0 === T ? void 0 : T.toString();
                                        U ? e[c.jP.publishedStartFrom] = U : delete e[c.jP.publishedStartFrom];
                                        var W = null === (C = t[c.Ts.published].endAt) || void 0 === C ? void 0 : C.toString();
                                        W ? e[c.jP.publishedEndAt] = W : delete e[c.jP.publishedEndAt];
                                        var J = null === (_ = t[c.Ts.published].pastDays) || void 0 === _ ? void 0 : _.toString();
                                        J ? e[c.jP.publishedPastDays] = J : delete e[c.jP.publishedPastDays];
                                        var ee = null === (F = t[c.Ts.premium].multiSelectValues) || void 0 === F ? void 0 : F.join(",");
                                        ee ? e[c.jP.premium] = ee : delete e[c.jP.premium];
                                        var te = null === (L = t[c.Ts.premium].chooseTypeVal) || void 0 === L ? void 0 : L.toString();
                                        te ? e[c.jP.premiumType] = te : delete e[c.jP.premiumType]
                                    }(0, Ee.Z)(i, e) || l(e)
                                }
                            }
                        }({
                            dataMap: T,
                            filterCombineType: Z,
                            enable: y && P
                        }).setUrlQuery;
                    return (0, r.useImperativeHandle)(t, (function() {
                        return {
                            clearAllFilter: function() {
                                C(c.ZP), S(l.YSR.All)
                            },
                            setDataMap: C
                        }
                    })), (0, r.useEffect)((function() {
                        P || (y && F && L ? (C(F), S(L), k(!0)) : (C(p), S(h), k(!0)))
                    }), [y, p, h, F, L, P]), (0, o.r)((function() {
                        D()
                    }), [F]), (0, r.useEffect)((function() {
                        T && j && Z && P && j(T, Z)
                    }), [T, Z, P]), T ? (0, i.jsxs)("div", {
                        className: "flex w-full flex-col gap-4 p-2",
                        children: [(0, i.jsxs)("div", {
                            className: "text-sd-foreground flex items-center gap-2 px-1 font-medium",
                            children: [(0, i.jsx)("div", {
                                children: m("match")
                            }), (0, i.jsx)(v, {
                                options: c.sH,
                                value: Z || l.YSR.All,
                                handleValueChange: function(e) {
                                    S(e), d.P.problemlistFilterRuleModuleMatchClick({
                                        problemlist_filter_source: (0, Ce.G)(n),
                                        problemlist_filter_action: void 0 === w ? "filter" : "" === w ? "create" : "edit",
                                        problemlist_filter_match: e
                                    })
                                }
                            }), (0, i.jsx)("span", {
                                children: m("matchTitle")
                            })]
                        }), V.map((function(e, t) {
                            return (0, i.jsx)(Ze, {
                                itemKey: e,
                                dataMap: T,
                                setDataMap: C,
                                showDeleteBtn: !0,
                                envType: b
                            }, t)
                        })), (0, i.jsx)(u.L, {
                            dataMap: T,
                            setDataMap: C,
                            filtersInfo: w
                        })]
                    }) : null
                }))
        },
        8050: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return r
                }
            });
            var i = n(26042),
                s = n(85893),
                r = (n(67294), function(e) {
                    var t = e.children,
                        n = e.style;
                    return (0, s.jsx)("span", {
                        style: (0, i.Z)({
                            background: "linear-gradient(90deg, rgba(249, 194, 112, 1) 0%, rgba(217, 147, 17, 1) 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                            fontSize: "12px"
                        }, n),
                        children: t
                    })
                })
        },
        1483: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return s
                }
            });
            var i = n(50144),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, i.E)(),
                        n = Object.keys(e).filter((function(n) {
                            var i = e[n];
                            return !i.show && (!1 === i.show || (!i.showDefault || !!i.isPremiumOnly && !t))
                        }));
                    return {
                        hiddenKeys: n
                    }
                }
        },
        10601: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return s
                }
            });
            var i = n(50144),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, i.E)(),
                        n = Object.keys(e).filter((function(n) {
                            var i = e[n];
                            return !!i.show || !1 !== i.show && (!!i.showDefault && (!i.isPremiumOnly || !!t))
                        }));
                    return {
                        showKeys: n
                    }
                }
        },
        74897: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return l
                }
            });
            var i = n(47568),
                s = n(70655),
                r = n(85945),
                a = n(64807),
                l = function() {
                    var e = (0, r.NL)(),
                        t = (0, a.y)().slug,
                        n = function() {
                            var n = (0, i.Z)((function(n) {
                                return (0, s.__generator)(this, (function(i) {
                                    return [2, e.invalidateQueries(["favoriteQuestionList", {
                                        favoriteSlug: n || t
                                    }])]
                                }))
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    return {
                        refetchFavoriteQuestionList: n
                    }
                }
        },
        61923: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return a
                }
            });
            var i = n(47568),
                s = n(70655),
                r = n(85945),
                a = function() {
                    var e = (0, r.NL)(),
                        t = function() {
                            var t = (0, i.Z)((function() {
                                return (0, s.__generator)(this, (function(t) {
                                    return [2, e.invalidateQueries(["myFavoriteList"])]
                                }))
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                    return {
                        refetchMyFavoriteList: t
                    }
                }
        },
        49305: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return l
                }
            });
            var i = n(47568),
                s = n(70655),
                r = n(85945),
                a = n(64807),
                l = function() {
                    var e = (0, r.NL)(),
                        t = (0, a.y)().slug,
                        n = function() {
                            var n = (0, i.Z)((function(n) {
                                return (0, s.__generator)(this, (function(i) {
                                    return [2, e.invalidateQueries(["favoriteDetailV2", {
                                        favoriteSlug: n || t
                                    }])]
                                }))
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    return {
                        refetchProblemListData: n
                    }
                }
        },
        59419: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return D
                },
                V: function() {
                    return O
                }
            });
            var i = n(14924),
                s = n(26042),
                r = n(69396),
                a = n(10253),
                l = n(29815),
                o = n(85893),
                d = n(11321),
                u = n(67294),
                c = n(15948),
                m = n(85945),
                f = n(68779),
                p = n(12922),
                v = n(83210),
                x = n(134),
                h = n(40832),
                g = n(19906),
                y = n(50438),
                j = n(11516),
                b = n(75955),
                w = n(21971),
                N = n(28813),
                Z = n(97334),
                S = n(50300),
                E = n(31778),
                T = n(8326),
                C = n(82960),
                _ = n(21710),
                F = n(44247),
                L = n(79060),
                I = n(75696),
                P = n(64807),
                k = n(9609),
                V = (0, u.memo)((function(e) {
                    var t = e.length,
                        n = e.showTags;
                    return (0, o.jsx)(o.Fragment, {
                        children: new Array(t).fill(0).map((function(e, t) {
                            return (0, o.jsx)("div", {
                                className: (0, p.yI)("group flex flex-col rounded-[8px] duration-300", n ? "h-[74px]" : "h-[44px]", (0, i.Z)({}, j.nx.bgFillQuaternary, !(t % 2)))
                            }, t)
                        }))
                    })
                })),
                D = 100,
                O = function() {
                    var e = (0, d.$G)("problemlist").t,
                        t = (0, h.G)(),
                        n = (0, m.NL)(),
                        i = (0, P.y)().slug,
                        j = (0, Z.y)(),
                        O = j.sortOrder,
                        M = j.sortField,
                        A = j.searchKeyword,
                        R = j.showTags,
                        q = (0, w.S)({
                            enable: !0
                        }),
                        G = q.dataMap,
                        X = q.filterCombineType,
                        Q = (0, u.useMemo)((function() {
                            return {
                                skip: 0,
                                limit: D
                            }
                        }), []),
                        B = (0, u.useMemo)((function() {
                            return (0, r.Z)((0, s.Z)({}, Q), {
                                favoriteSlug: i,
                                filtersV2: (0, N.N)(G, X),
                                searchKeyword: A,
                                sortBy: {
                                    sortField: M,
                                    sortOrder: O
                                }
                            })
                        }), [Q, A, i, M, O, G, X]),
                        K = (0, S.F)(B),
                        z = (0, u.useState)(),
                        $ = z[0],
                        H = z[1],
                        Y = (0, L.L)().isSmartList,
                        U = (0, I.n)((function(e) {
                            return e.setIsAddQuestionsDialogOpen
                        })),
                        W = (0, I.n)((function(e) {
                            return e.setIsEditSmartListRuleDialogOpen
                        })),
                        J = (0, I.n)((function(e) {
                            return e.setCurrentFavoriteSlug
                        })),
                        ee = (0, k.x)().data,
                        te = (null === ee || void 0 === ee ? void 0 : ee.questionNumber) || 0,
                        ne = (0, C.A)(B),
                        ie = ne.isInitialLoading,
                        se = ne.isFetching,
                        re = ne.isFetched,
                        ae = ne.data,
                        le = ne.hasNextPage,
                        oe = ne.fetchNextPage,
                        de = (0, u.useMemo)((function() {
                            return ae && ae.pages ? ae.pages.flatMap((function(e) {
                                return e.problemList
                            })) : []
                        }), [ae]),
                        ue = (0, E.A)().mutateAsync,
                        ce = (0, T.t)(i).data,
                        me = (0, b.M)({
                            enabled: !se && le,
                            threshold: 0,
                            onIntersect: oe
                        }),
                        fe = me.setContainerDom,
                        pe = me.setTargetDom,
                        ve = !!ce && !Y,
                        xe = Y ? "smart_list" : "normal_list";
                    (0, u.useEffect)((function() {
                        fe(null)
                    }), [fe]), (0, u.useEffect)((function() {
                        H(de)
                    }), [de]), (0, u.useEffect)((function() {
                        re && !te && y.P.problemlistListNodataExposure({
                            problemlist_list_slug: i,
                            problemlist_list_type: xe
                        })
                    }), [te, re, i, xe]);
                    var he = (0, u.useCallback)((function(e, n) {
                        return e ? (0, s.Z)({
                            borderRadius: "8px",
                            background: t ? "#333" : "#fff",
                            border: t ? "1px solid rgba(255, 255, 255, 0.10)" : "1px solid rgba(0, 0, 0, 0.08)",
                            boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
                        }, n) : n
                    }), [t]);
                    return ie ? (0, o.jsx)("div", {
                        className: "mt-3 max-w-[699px] flex-1",
                        children: new Array(15).fill(0).map((function(e, t) {
                            return (0, o.jsx)("div", {
                                className: (0, p.yI)("h-[44px] w-full animate-pulse rounded-lg", t % 2 ? "bg-transparent" : "bg-sd-accent")
                            }, t)
                        }))
                    }) : te ? (null === $ || void 0 === $ ? void 0 : $.length) ? (0, o.jsx)("div", {
                        className: "lc-dsw-lg:max-w-[699px] w-full flex-1",
                        children: !!(null === $ || void 0 === $ ? void 0 : $.length) && (0, o.jsx)("div", {
                            className: "w-full pb-20",
                            children: (0, o.jsxs)("div", {
                                className: "relative",
                                children: [(0, o.jsx)(V, {
                                    length: $.length,
                                    showTags: R
                                }), (0, o.jsxs)("div", {
                                    className: "absolute left-0 top-0 h-full w-full",
                                    children: [ve ? (0, o.jsx)(c.Z5, {
                                        onDragEnd: function(e) {
                                            if (e.destination && $) {
                                                y.P.problemlistProblemsTableMoveClick({
                                                    problemlist_list_slug: i
                                                });
                                                var t = function(e, t, n) {
                                                    var i = Array.from(e),
                                                        s = (0, a.Z)(i.splice(t, 1), 1)[0];
                                                    return i.splice(n, 0, s), i
                                                }($, e.source.index, e.destination.index);
                                                ue({
                                                    favoriteSlug: i,
                                                    questionSlug: $[e.source.index].titleSlug,
                                                    reorderNewIndex: e.destination.index
                                                }).then((function(e) {
                                                    var i;
                                                    (null === e || void 0 === e || null === (i = e.reorderFavoriteQuestionV2) || void 0 === i ? void 0 : i.ok) && n.setQueryData(K, (function(e) {
                                                        var n = e.pages;
                                                        return n && n.forEach((function(e, n) {
                                                            e = (0, r.Z)((0, s.Z)({}, e), {
                                                                problemList: t.slice(n * D, D)
                                                            })
                                                        })), (0, r.Z)((0, s.Z)({}, e), {
                                                            pages: n
                                                        })
                                                    }))
                                                })), H((0, l.Z)(t))
                                            }
                                        },
                                        children: (0, o.jsx)(c.bK, {
                                            droppableId: "droppable",
                                            children: function(e) {
                                                return (0, o.jsx)("div", (0, r.Z)((0, s.Z)({}, e.droppableProps), {
                                                    ref: e.innerRef,
                                                    children: $.map((function(e, t) {
                                                        return (0, o.jsx)(c._l, {
                                                            draggableId: e.titleSlug,
                                                            index: t,
                                                            children: function(n, a) {
                                                                return (0, o.jsx)("div", (0, r.Z)((0, s.Z)({
                                                                    ref: n.innerRef
                                                                }, n.draggableProps), {
                                                                    style: he(a.isDragging, n.draggableProps.style),
                                                                    children: (0, o.jsx)(_.H, {
                                                                        slug: null !== i && void 0 !== i ? i : "",
                                                                        data: e,
                                                                        showTags: R,
                                                                        isOddRow: Boolean(t % 2),
                                                                        provided: n,
                                                                        canEdit: ve,
                                                                        favoriteQuestionList: $,
                                                                        queryKey: K,
                                                                        setItems: H,
                                                                        showFrequency: !0,
                                                                        showAcRate: !0,
                                                                        index: t
                                                                    }, e.id)
                                                                }))
                                                            }
                                                        }, e.id)
                                                    }))
                                                }))
                                            }
                                        })
                                    }) : (0, o.jsx)("div", {
                                        children: $.map((function(e, t) {
                                            return (0, o.jsx)(_.H, {
                                                slug: null !== i && void 0 !== i ? i : "",
                                                data: e,
                                                showTags: R,
                                                isOddRow: Boolean(t % 2),
                                                canEdit: ve,
                                                favoriteQuestionList: $,
                                                queryKey: K,
                                                setItems: H,
                                                showFrequency: !0,
                                                showAcRate: !0,
                                                index: t
                                            }, e.id)
                                        }))
                                    }), le && (0, o.jsx)(o.Fragment, {
                                        children: (0, o.jsxs)("div", {
                                            className: "w-full",
                                            ref: pe,
                                            children: [(0, o.jsx)("div", {
                                                className: (0, p.yI)("bg-sd-accent h-[44px] w-full animate-pulse rounded-lg")
                                            }), (0, o.jsx)("div", {
                                                className: (0, p.yI)("h-[44px] w-full animate-pulse rounded-lg bg-transparent")
                                            }), (0, o.jsx)("div", {
                                                className: (0, p.yI)("bg-sd-accent h-[44px] w-full animate-pulse rounded-lg")
                                            }), (0, o.jsx)("div", {
                                                className: (0, p.yI)("h-[44px] w-full animate-pulse rounded-lg bg-transparent")
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    }) : (0, o.jsxs)("div", {
                        className: "lc-dsw-lg:max-w-[699px] lc-dsw-lg:pt-[140px] flex w-full flex-col items-center gap-6 pt-[40px]",
                        children: [(0, o.jsx)(g.y, {
                            className: "h-[200px] w-[200px]",
                            src: F.Z,
                            alt: "Null"
                        }), (0, o.jsx)("div", {
                            className: "text-sd-card-foreground text-sm",
                            children: e("noSearchResult")
                        })]
                    }) : (0, o.jsxs)("div", {
                        className: "lc-dsw-lg:max-w-[699px] lc-dsw-lg:pt-[140px] flex w-full flex-col items-center gap-6 pt-[40px]",
                        children: [(0, o.jsx)(g.y, {
                            className: "h-[200px] w-[200px]",
                            src: F.Z,
                            alt: "Null"
                        }), (0, o.jsx)("div", {
                            className: "text-sd-card-foreground text-sm",
                            children: e("noQuestions")
                        }), (0, o.jsx)("div", {
                            children: Y ? (0, o.jsxs)(v.z, {
                                onClick: function() {
                                    y.P.problemlistListNodataButtonClick({
                                        problemlist_list_slug: i,
                                        problemlist_list_type: xe
                                    }), J(""), W(!0)
                                },
                                className: "!bg-sd-purple-500 text-sd-fixed-white gap-2",
                                children: [(0, o.jsx)(x.e, {
                                    icon: f.A47,
                                    variant: "14px"
                                }), e("description.operations.editRule")]
                            }) : (0, o.jsxs)(v.z, {
                                onClick: function() {
                                    y.P.problemlistListNodataButtonClick({
                                        problemlist_list_slug: i,
                                        problemlist_list_type: xe
                                    }), J(""), U(!0)
                                },
                                className: "gap-2",
                                children: [(0, o.jsx)(x.e, {
                                    icon: f.r8p,
                                    variant: "14px"
                                }), e("description.operations.addQuestions")]
                            })
                        })]
                    })
                }
        },
        21710: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return ee
                }
            });
            var i = n(47568),
                s = n(14924),
                r = n(26042),
                a = n(69396),
                l = n(29815),
                o = n(70655),
                d = n(85893),
                u = n(68779),
                c = n(73582),
                m = n(85945),
                f = n(11321),
                p = n(11163),
                v = n(67294),
                x = n(12922),
                h = n(4563),
                g = n(19906),
                y = n(50632),
                j = n(11516),
                b = n(10253),
                w = n(66247),
                N = n(69485),
                Z = n(62758),
                S = n(134),
                E = n(83210),
                T = n(28708),
                C = n(70341),
                _ = n(31799),
                F = function() {
                    return C.Hb.premium(_.D.FrequencyLock)
                },
                L = function(e) {
                    var t, n = e.frequency,
                        i = e.slug,
                        s = e.titleSlug,
                        r = e.isFromDrawer,
                        a = e.index,
                        l = e.disabled,
                        o = e.isCompany,
                        c = (0, f.$G)("problemlist", {
                            keyPrefix: "company"
                        }).t,
                        m = (0, y.U5)().data,
                        p = Boolean(null === m || void 0 === m || null === (t = m.userStatus) || void 0 === t ? void 0 : t.isPremium),
                        h = (0, b.Z)((0, w._)("showedPremiumFrequencyTip", !1), 2),
                        g = h[0],
                        j = h[1],
                        C = (0, v.useState)(!0),
                        _ = C[0],
                        L = C[1],
                        I = Math.round(n / 12.5),
                        P = (0, N.z)((function() {
                            T.Y.companyListProblemsFrequencyExposure({
                                company_company_slug: i,
                                company_question_slug: s
                            })
                        })),
                        k = (0, v.useMemo)((function() {
                            return o && !r && !g && p && 0 === a
                        }), [a, o, r, p, g]),
                        V = function(e) {
                            l && (e.stopPropagation(), e.preventDefault(), window.open(F(), "_blank"))
                        },
                        D = function() {
                            return (0, d.jsx)("div", {
                                className: "flex gap-0.5 px-1",
                                onMouseEnter: P,
                                onClick: V,
                                children: new Array(8).fill(1).map((function(e, t) {
                                    return (0, d.jsx)("div", {
                                        className: (0, x.yI)("bg-brand-orange h-2 w-0.5 rounded", {
                                            "opacity-40": !(0 === t || t < I) && !l,
                                            "bg-sd-foreground opacity-20": l
                                        })
                                    }, t)
                                }))
                            })
                        };
                    return (0, d.jsx)(d.Fragment, {
                        children: k ? (0, d.jsx)(Z.u, {
                            className: "z-nav",
                            label: (0, d.jsxs)("div", {
                                className: "w-[210px] py-1.5",
                                children: [(0, d.jsxs)("div", {
                                    className: "text-sd-muted-foreground flex gap-1.5 text-sm font-medium",
                                    children: [(0, d.jsx)(S.e, {
                                        icon: u.X8G,
                                        variant: "14px",
                                        className: "text-sd-yellow-500"
                                    }), c("frequencyTip")]
                                }), (0, d.jsx)("div", {
                                    className: "mt-3 flex justify-end",
                                    children: (0, d.jsx)(E.z, {
                                        variant: "secondary",
                                        onClick: function() {
                                            L(!1), setTimeout((function() {
                                                return j(!0)
                                            }), 50)
                                        },
                                        children: c("ok")
                                    })
                                })]
                            }),
                            placement: "bottom",
                            hasArrow: !0,
                            open: _,
                            children: (0, d.jsx)("div", {
                                children: (0, d.jsx)(D, {})
                            })
                        }) : (0, d.jsx)(Z.u, {
                            label: l ? c("subscribeFrequency") : "".concat(c("frequency"), " ").concat(n.toFixed(1), "%"),
                            placement: "top",
                            children: (0, d.jsx)("div", {
                                children: (0, d.jsx)(D, {})
                            })
                        })
                    })
                },
                I = n(82135),
                P = n(41435),
                k = n(62e3),
                V = n(97942),
                D = n(30366),
                O = n(66440),
                M = n(83269),
                A = n(50438),
                R = n(93769),
                q = n(28061),
                G = n(23874),
                X = n(25351),
                Q = n(2730),
                B = n(85110),
                K = n(71328),
                z = n(31778),
                $ = n(10875),
                H = n(97334),
                Y = n(59419),
                U = n(49305),
                W = n(74897),
                J = function(e) {
                    var t = e.slug,
                        n = e.titleSlug,
                        c = e.data,
                        p = e.setParentPopoverOpen,
                        h = e.refetchPanelFavoriteList,
                        g = e.setItems,
                        y = e.queryKey,
                        b = (0, f.$G)("problemlist").t,
                        w = (0, m.NL)(),
                        N = (0, z.A)().mutateAsync,
                        Z = (0, K.T)().mutateAsync,
                        E = (0, v.useState)(!1),
                        T = E[0],
                        C = E[1],
                        _ = (0, U.p)().refetchProblemListData,
                        F = (0, W.K)().refetchFavoriteQuestionList,
                        L = function() {
                            var e = (0, i.Z)((function(e) {
                                var i, d, u;
                                return (0, o.__generator)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return A.P[e ? "problemlistProblemsTableMoreTopClick" : "problemlistProblemsTableMoreBottomClick"]({
                                                problemlist_list_slug: t
                                            }), [4, N((0, s.Z)({
                                                favoriteSlug: t,
                                                questionSlug: n
                                            }, e ? "moveToTop" : "moveToBottom", !0))];
                                        case 1:
                                            return (null === (d = o.sent()) || void 0 === d || null === (i = d.reorderFavoriteQuestionV2) || void 0 === i ? void 0 : i.ok) && c && (p(!1), (u = (0, l.Z)(c)).forEach((function(t, i) {
                                                t.titleSlug === n && u[e ? "unshift" : "push"](u.splice(i, 1)[0])
                                            })), g && g(u), w.setQueryData(y, (function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    t = e.pages;
                                                return t && t.forEach((function(e, t) {
                                                    var n = u.slice(t * Y.I, Y.I);
                                                    e.problemList = n
                                                })), (0, a.Z)((0, r.Z)({}, e), {
                                                    pages: t
                                                })
                                            }))), [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        k = function() {
                            var e = (0, i.Z)((function() {
                                var e, i, s;
                                return (0, o.__generator)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return A.P.problemlistProblemsTableMoreRemoveClick({
                                                problemlist_list_slug: t
                                            }), [4, Z({
                                                favoriteSlug: t,
                                                questionSlug: n
                                            })];
                                        case 1:
                                            return (null === (i = o.sent()) || void 0 === i || null === (e = i.removeQuestionFromFavoriteV2) || void 0 === e ? void 0 : e.ok) && c && ((s = (0, l.Z)(c)).forEach((function(e, t) {
                                                e.titleSlug === n && s.splice(t, 1)
                                            })), g && g(s), w.setQueryData(y, (function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    t = e.pages;
                                                return t && t.forEach((function(e, t) {
                                                    e.problemList = s.slice(t * Y.I, Y.I)
                                                })), (0, a.Z)((0, r.Z)({}, e), {
                                                    pages: t
                                                })
                                            })), w.setQueryData(["favoriteDetailV2", {
                                                favoriteSlug: t
                                            }], (function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                return (0, a.Z)((0, r.Z)({}, e), {
                                                    favoriteDetailV2: (0, a.Z)((0, r.Z)({}, e.favoriteDetailV2 || {}), {
                                                        questionNumber: s.length
                                                    })
                                                })
                                            })), w.invalidateQueries(["favoriteUserQuestionProgressV2", {
                                                favoriteSlug: t
                                            }]), _(), F()), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, d.jsx)("div", {
                        className: "w-full",
                        children: (0, d.jsxs)("ul", {
                            children: [(0, d.jsxs)("li", {
                                className: "text-sd-popover-foreground hover:bg-sd-accent flex h-8 cursor-pointer gap-2 rounded px-2 py-1.5 font-medium",
                                onClick: k,
                                children: [(0, d.jsx)(S.e, {
                                    icon: u.Vui,
                                    variant: "16px"
                                }), b("removeFromList")]
                            }), (0, d.jsx)(P.J2, {
                                side: "left",
                                align: "start",
                                trigger: "click",
                                open: T,
                                onOpenChange: C,
                                onOpenAutoFocus: function(e) {
                                    return e.preventDefault()
                                },
                                className: (0, x.yI)("top-[-36px] w-[240px] rounded-lg p-0", j.nx.bgLayer02, j.nx.borderBorderTertiary),
                                content: (0, d.jsx)(I.T, {
                                    questionSlug: n,
                                    hiddenMore: !0,
                                    hiddenSlugs: [t],
                                    onAfterAddedChange: function() {
                                        h && h(), p(!1)
                                    }
                                }),
                                children: (0, d.jsxs)("li", {
                                    className: "text-sd-popover-foreground hover:bg-sd-accent flex h-8 cursor-pointer gap-2 rounded px-2 py-1.5 font-medium",
                                    onClick: function() {
                                        A.P.problemlistProblemsTableMoreAddClick({
                                            problemlist_list_slug: t
                                        })
                                    },
                                    children: [(0, d.jsx)(S.e, {
                                        icon: u.Tab,
                                        variant: "16px"
                                    }), b("addToList")]
                                })
                            }), (0, d.jsxs)("li", {
                                className: "text-sd-popover-foreground hover:bg-sd-accent flex h-8 cursor-pointer gap-2 rounded px-2 py-1.5 font-medium",
                                onClick: function() {
                                    return L(!0)
                                },
                                children: [(0, d.jsx)(S.e, {
                                    icon: u.bqB,
                                    variant: "16px"
                                }), b("moveToTop")]
                            })]
                        })
                    })
                },
                ee = function(e) {
                    var t, n, l, b, w = e.data,
                        N = e.slug,
                        E = e.showTags,
                        T = e.isOddRow,
                        _ = e.className,
                        F = e.provided,
                        K = e.canEdit,
                        z = e.viewOnly,
                        Y = e.showFrequency,
                        U = e.favoriteQuestionList,
                        W = e.onDrawerClose,
                        ee = e.isCompany,
                        te = e.isProblemset,
                        ne = e.isDailyQuestion,
                        ie = e.date,
                        se = e.showZebraGrid,
                        re = e.isClaim,
                        ae = e.isActive,
                        le = e.index,
                        oe = e.queryKey,
                        de = e.setItems,
                        ue = e.isInQd,
                        ce = e.showStar,
                        me = void 0 === ce || ce,
                        fe = e.showCheckBox,
                        pe = void 0 !== fe && fe,
                        ve = e.selected,
                        xe = void 0 !== ve && ve,
                        he = e.disableSelect,
                        ge = void 0 !== he && he,
                        ye = e.onSelectItem,
                        je = e.showAcRate,
                        be = e.dailyQuestionSlug,
                        we = (0, f.$G)("problemlist").t,
                        Ne = (0, m.NL)(),
                        Ze = (0, p.useRouter)(),
                        Se = (0, B.v)(!0).refetch,
                        Ee = (0, h.tq)() ? 2 : 4,
                        Te = w.status,
                        Ce = w.title,
                        _e = w.difficulty,
                        Fe = w.titleSlug,
                        Le = w.topicTags,
                        Ie = w.translatedTitle,
                        Pe = w.questionFrontendId,
                        ke = w.id,
                        Ve = w.isInMyFavorites,
                        De = w.frequency,
                        Oe = w.score,
                        Me = w.acRate,
                        Ae = void 0 === Me ? 0 : Me,
                        Re = w.paidOnly,
                        qe = (0, Q.m)().mutateAsync,
                        Ge = (0, y.U5)().data,
                        Xe = (null !== (l = null === Ge || void 0 === Ge ? void 0 : Ge.userStatus) && void 0 !== l ? l : {}).isSignedIn,
                        Qe = null === Ge || void 0 === Ge || null === (t = Ge.userStatus) || void 0 === t ? void 0 : t.useTranslation,
                        Be = Boolean(null === Ge || void 0 === Ge || null === (n = Ge.userStatus) || void 0 === n ? void 0 : n.isPremium),
                        Ke = (0, H.y)().sortField,
                        ze = K && Ke === G.lL5.Custom,
                        $e = (0, v.useState)(!1),
                        He = $e[0],
                        Ye = $e[1],
                        Ue = (0, v.useMemo)((function() {
                            return Le.slice(Ee).map((function(e) {
                                return Qe && e.nameTranslated || e.name
                            })).join(",")
                        }), [Le, Qe, Ee]),
                        We = (0, v.useMemo)((function() {
                            var e = Qe && Ie || Ce;
                            return e = "".concat(Pe, ". ").concat(e)
                        }), [Qe, Pe, Ce, Ie]),
                        Je = !!W,
                        et = !Be && Re,
                        tt = (b = {}, (0, s.Z)(b, X.s.TO_DO, "todo"), (0, s.Z)(b, X.s.ATTEMPTED, "attempted"), (0, s.Z)(b, X.s.SOLVED, "solved"), (0, s.Z)(b, X.s.PAST_SOLVED, "past_solve"), b),
                        nt = Le.length > Ee,
                        it = (0, v.useMemo)((function() {
                            return new URLSearchParams({
                                envType: ee ? M.Zw.Company : ne ? M.Zw.DailyQuestion : M.Zw.ProblemListV2,
                                envId: (ne ? ie : N) || ""
                            })
                        }), [ee, ne, ie, N]);
                    (0, h.Nd)() && it.append("id", N || "");
                    var st, rt, at = (0, v.useMemo)((function() {
                            var e = it.toString(),
                                t = Ze.asPath.split("?")[1] || "";
                            return Je || te ? t : t ? "".concat(e, "&").concat(t) : e
                        }), [Je, te, it, Ze.asPath]),
                        lt = function() {
                            var e = (0, i.Z)((function(e, t) {
                                var n, i;
                                return (0, o.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return !1 === Xe ? (Ze.push(C.Hb.signIn(location.href)), [2]) : (A.P.problemlistProblemsTableSaveClick({
                                                problemlist_list_operation_type: t ? "other" : "saved",
                                                problemlist_list_slug: N
                                            }), t ? [2] : [4, qe({
                                                questionSlug: e
                                            })]);
                                        case 1:
                                            return i = s.sent(), (null === (n = i.addQuestionToDefaultFavoriteV2) || void 0 === n ? void 0 : n.ok) && oe && (Ne.invalidateQueries(["myCreatedFavoriteList", {
                                                currentQuestionSlug: e
                                            }]), Fe === be && Ne.invalidateQueries(["questionOfTodayV2"]), Ne.setQueryData(oe, (function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    n = t.pages;
                                                return n && n.forEach((function(t) {
                                                    return t.problemList.forEach((function(t) {
                                                        return t.isInMyFavorites = t.titleSlug === e || t.isInMyFavorites
                                                    }))
                                                })), (0, a.Z)((0, r.Z)({}, t), {
                                                    pages: n
                                                })
                                            }))), [2]
                                    }
                                }))
                            }));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ot = (0, R.$w)(),
                        dt = (0, q._R)(ot),
                        ut = function(e) {
                            pe ? ge || null === ye || void 0 === ye || ye(!xe) : (ue && (e.preventDefault(), Ze.push(dt.questionDetailWithLearningEnvironment(Fe || "", at), void 0, {
                                shallow: !0
                            })), W && W(), A.P.problemlistListProblemsClick({
                                problemlist_list_slug: N,
                                problemlist_question_slug: Fe,
                                problemlist_is_company: String(ee)
                            }))
                        };
                    return ze ? (0, d.jsxs)("div", {
                        className: (0, x.yI)("group flex flex-col rounded-[8px] duration-300", _, (st = {}, (0, s.Z)(st, j.nx.bgFillQuaternary, se && !T && !ae), (0, s.Z)(st, "bg-sd-primary hover:!bg-sd-primary", ae), st)),
                        id: ke,
                        children: [(0, d.jsxs)("div", {
                            className: (0, x.yI)("flex h-[44px] w-full items-center space-x-3 px-4"),
                            children: [(0, d.jsxs)("div", {
                                children: [(0, d.jsx)("div", {
                                    className: "group-hover:hidden",
                                    children: et ? (0, d.jsx)("div", {
                                        children: (0, d.jsx)(S.e, {
                                            icon: u.byT,
                                            variant: "14px",
                                            className: "text-brand-orange"
                                        })
                                    }) : (0, d.jsxs)(d.Fragment, {
                                        children: [Te === X.s.TO_DO && (0, d.jsx)("div", {
                                            className: "h-4 w-4"
                                        }), (0, d.jsx)(Z.u, {
                                            placement: "top",
                                            label: we(tt[Te]),
                                            children: (0, d.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [Te === X.s.ATTEMPTED && (0, d.jsx)(S.e, {
                                                    icon: u.diR,
                                                    variant: "14px",
                                                    className: "text-sd-muted-foreground"
                                                }), Te === X.s.SOLVED && (0, d.jsx)(S.e, {
                                                    icon: u.LEp,
                                                    variant: "14px",
                                                    className: "text-sd-success"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "hidden h-4 w-4 group-hover:flex",
                                    children: (0, d.jsx)("div", (0, a.Z)((0, r.Z)({
                                        className: (0, x.yI)("cursor-grab")
                                    }, null === F || void 0 === F ? void 0 : F.dragHandleProps), {
                                        children: (0, d.jsx)(Z.u, {
                                            placement: "top",
                                            label: we("move"),
                                            children: (0, d.jsx)("div", {
                                                children: (0, d.jsx)(S.e, {
                                                    icon: u.xiG,
                                                    className: "text-sd-muted-foreground",
                                                    variant: "14px"
                                                })
                                            })
                                        })
                                    }))
                                })]
                            }), (0, d.jsxs)("a", {
                                className: (0, x.yI)("relative flex h-full w-full items-center"),
                                href: dt.questionDetailWithLearningEnvironment(Fe || "", at),
                                target: z ? "_self" : "_blank",
                                rel: z ? document.referrer : "noreferrer",
                                onClick: ut,
                                children: [(0, d.jsx)("div", {
                                    className: " flex w-0 flex-1 items-center space-x-2",
                                    children: (0, d.jsx)("div", {
                                        className: (0, x.yI)("text-body text-sd-foreground max-w-[80%] font-medium", {
                                            "text-sd-primary-foreground": ae
                                        }),
                                        children: (0, d.jsx)(k.J, {
                                            title: We,
                                            children: We
                                        })
                                    })
                                }), je && (0, d.jsxs)("div", {
                                    className: "text-sd-muted-foreground flex w-[70px] items-center justify-center text-sm opacity-0 group-hover:opacity-100",
                                    children: [(100 * Ae).toFixed(1), "%"]
                                }), (0, d.jsx)("p", {
                                    className: (0, x.yI)("text-[14px]", {
                                        "text-sd-easy": _e === O.F.Easy,
                                        "text-sd-medium": _e === O.F.Medium,
                                        "text-sd-hard": _e === O.F.Hard
                                    }),
                                    children: we("difficulty.".concat(_e.toLowerCase()))
                                }), (0, d.jsx)("div", {
                                    className: "ml-3",
                                    children: (0, d.jsx)(L, {
                                        frequency: null !== De && void 0 !== De ? De : 0,
                                        slug: N,
                                        titleSlug: Fe,
                                        isFromDrawer: Je,
                                        index: null !== le && void 0 !== le ? le : 0,
                                        disabled: !Be,
                                        isCompany: ee
                                    })
                                })]
                            }), (0, d.jsx)("div", {
                                className: "flex items-center",
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation()
                                },
                                children: (0, d.jsx)(P.J2, {
                                    side: "bottom",
                                    align: "end",
                                    trigger: "click",
                                    open: He,
                                    onOpenChange: Ye,
                                    onOpenAutoFocus: function(e) {
                                        return e.preventDefault()
                                    },
                                    className: (0, x.yI)("w-[240px] rounded-lg px-1 py-[3px]", j.nx.bgLayer02, j.nx.borderBorderTertiary),
                                    content: (0, d.jsx)(J, {
                                        slug: N,
                                        titleSlug: Fe,
                                        data: U,
                                        setParentPopoverOpen: Ye,
                                        refetchPanelFavoriteList: Se,
                                        setItems: de,
                                        queryKey: oe
                                    }),
                                    children: (0, d.jsx)("div", {
                                        className: "hover:bg-sd-accent flex h-7 w-7 cursor-pointer items-center justify-center rounded opacity-0 group-hover:opacity-100",
                                        onClick: function() {
                                            A.P.problemlistProblemsTableMoreClick({
                                                problemlist_list_slug: N
                                            })
                                        },
                                        children: (0, d.jsx)(S.e, {
                                            icon: u.S6C,
                                            className: "text-sd-muted-foreground",
                                            variant: "14px"
                                        })
                                    })
                                })
                            })]
                        }), E && (0, d.jsxs)("div", {
                            className: "-mt-2 mb-4 ml-11 min-h-[22px] space-x-1",
                            children: [w.topicTags.slice(0, Ee).map((function(e) {
                                return (0, d.jsx)(V.C, {
                                    className: "rounded-full",
                                    variant: "secondary",
                                    children: Qe && e.nameTranslated || e.name
                                }, e.slug)
                            })), nt && (0, d.jsx)(Z.u, {
                                placement: "top",
                                label: Ue,
                                children: (0, d.jsx)("span", {
                                    children: (0, d.jsxs)(V.C, {
                                        className: "rounded-full",
                                        variant: "secondary",
                                        children: [w.topicTags.length - Ee, "+"]
                                    })
                                })
                            })]
                        })]
                    }) : (0, d.jsxs)("a", {
                        className: (0, x.yI)("group flex flex-col rounded-[8px] duration-300", _, (rt = {}, (0, s.Z)(rt, j.nx.bgFillQuaternary, se && !T && !ae), (0, s.Z)(rt, "bg-sd-primary hover:!bg-sd-primary", ae), rt)),
                        id: ke,
                        href: pe ? "javascript:void(0)" : dt.questionDetailWithLearningEnvironment(Fe || "", at),
                        target: pe ? "" : z ? "_self" : "_blank",
                        rel: te ? document.location.href : z ? document.referrer : "noreferrer",
                        onClick: ut,
                        children: [(0, d.jsxs)("div", {
                            className: (0, x.yI)("flex h-[44px] w-full items-center space-x-3 px-4"),
                            children: [(0, d.jsx)("div", {
                                children: re ? (0, d.jsx)("div", {
                                    className: "-ml-2 flex h-[28px] w-[28px] items-center",
                                    children: (0, d.jsx)(g.y, {
                                        className: "h-[28px] w-[28px]",
                                        src: $.Z,
                                        alt: "AwardFill"
                                    })
                                }) : et ? (0, d.jsx)("div", {
                                    children: (0, d.jsx)(S.e, {
                                        icon: u.byT,
                                        variant: "14px",
                                        className: "text-brand-orange"
                                    })
                                }) : (0, d.jsxs)("div", {
                                    children: [Te === X.s.TO_DO && (ne ? (0, d.jsx)(S.e, {
                                        icon: u.fT7,
                                        variant: "14px",
                                        className: "text-sd-blue-500"
                                    }) : (0, d.jsx)("div", {
                                        className: "h-4 w-4"
                                    })), (0, d.jsx)(Z.u, {
                                        placement: "top",
                                        label: we(tt[Te]),
                                        children: (0, d.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [Te === X.s.ATTEMPTED && (0, d.jsx)(S.e, {
                                                icon: u.diR,
                                                variant: "14px",
                                                className: "text-sd-muted-foreground"
                                            }), Te === X.s.SOLVED && (0, d.jsx)(S.e, {
                                                icon: u.LEp,
                                                variant: "14px",
                                                className: "text-sd-success"
                                            })]
                                        })
                                    })]
                                })
                            }), (0, d.jsxs)("div", {
                                className: (0, x.yI)("relative flex h-full w-full cursor-pointer items-center"),
                                children: [(0, d.jsx)("div", {
                                    className: " flex w-0 flex-1 items-center space-x-2",
                                    children: (0, d.jsx)("div", {
                                        className: (0, x.yI)("text-body text-sd-foreground max-w-[90%] font-medium", {
                                            "text-sd-primary-foreground": ae
                                        }),
                                        children: (0, d.jsx)(k.J, {
                                            title: We,
                                            children: We
                                        })
                                    })
                                }), je && (0, d.jsx)(Z.u, {
                                    placement: "top",
                                    label: we("acceptance"),
                                    children: (0, d.jsxs)("div", {
                                        className: (0, x.yI)("text-sd-muted-foreground flex w-[70px] items-center justify-center text-sm opacity-0 group-hover:opacity-100", {
                                            "lc-xl:opacity-100": te || ne
                                        }),
                                        children: [(100 * Ae).toFixed(1), "%"]
                                    })
                                }), (0, d.jsx)("p", {
                                    className: (0, x.yI)("mx-0 text-[14px]", {
                                        "text-sd-easy": _e === O.F.Easy,
                                        "text-sd-medium": _e === O.F.Medium,
                                        "text-sd-hard": _e === O.F.Hard,
                                        "lc-xl:mx-4": je
                                    }),
                                    children: we("difficulty.".concat(_e.toLowerCase()))
                                })]
                            }), Y && (0, d.jsx)(L, {
                                frequency: null !== De && void 0 !== De ? De : 0,
                                slug: N,
                                titleSlug: Fe,
                                isFromDrawer: Je,
                                index: null !== le && void 0 !== le ? le : 0,
                                disabled: !Be,
                                isCompany: ee
                            }), void 0 !== Oe && (0, d.jsxs)("span", {
                                className: (0, x.yI)("text-sd-foreground bg-sd-accent inline-flex h-[20px] min-w-[40px] max-w-full items-center justify-center whitespace-nowrap rounded-full px-2 text-xs font-medium", {
                                    "text-sd-primary-foreground bg-dark-lc-fill-02 dark:bg-lc-fill-02": ae
                                }),
                                children: [Oe, " ", we("points")]
                            }), !me && pe && (0, d.jsx)("div", {
                                className: "flex items-center",
                                onClick: function(e) {
                                    return e.preventDefault()
                                },
                                children: (0, d.jsx)(D.X, {
                                    checked: xe,
                                    disabled: ge,
                                    onCheckedChange: function(e) {
                                        null === ye || void 0 === ye || ye(!!e)
                                    }
                                })
                            }), me && !Je && (0, d.jsx)("div", {
                                className: "flex items-center",
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation()
                                },
                                children: (0, d.jsx)(P.J2, {
                                    side: "bottom",
                                    align: "end",
                                    trigger: "click",
                                    open: He,
                                    onOpenChange: Ye,
                                    onOpenAutoFocus: function(e) {
                                        return e.preventDefault()
                                    },
                                    className: (0, x.yI)("w-[240px] rounded-lg p-0", j.nx.bgLayer02, j.nx.borderBorderTertiary),
                                    content: (0, d.jsx)(I.T, {
                                        questionSlug: Fe,
                                        hiddenMore: !0,
                                        hiddenSlugs: [N],
                                        onListChange: function() {
                                            oe && Ne.invalidateQueries(oe), Fe === be && Ne.invalidateQueries(["questionOfTodayV2"])
                                        },
                                        onAfterAddedChange: function() {
                                            Se(), Ye(!1)
                                        },
                                        isCompany: ee
                                    }),
                                    children: (0, d.jsx)("div", {
                                        className: "hover:bg-sd-accent flex h-7 w-7 cursor-pointer items-center justify-center rounded opacity-0 group-hover:opacity-100",
                                        onClick: function() {
                                            return lt(Fe, !!Ve)
                                        },
                                        children: Ve ? (0, d.jsx)(S.e, {
                                            icon: c.Tab,
                                            className: "text-sd-yellow-500",
                                            variant: "14px"
                                        }) : (0, d.jsx)(S.e, {
                                            icon: u.Tab,
                                            className: "text-sd-muted-foreground",
                                            variant: "14px"
                                        })
                                    })
                                })
                            })]
                        }), E && (0, d.jsxs)("div", {
                            className: "-mt-2 mb-4 ml-11 min-h-[22px] space-x-1",
                            children: [w.topicTags.slice(0, Ee).map((function(e) {
                                return (0, d.jsx)(V.C, {
                                    className: "rounded-full",
                                    variant: "secondary",
                                    children: Qe && e.nameTranslated || e.name
                                }, e.slug)
                            })), nt && (0, d.jsx)(Z.u, {
                                placement: "top",
                                label: Ue,
                                children: (0, d.jsx)("span", {
                                    children: (0, d.jsxs)(V.C, {
                                        className: "rounded-full",
                                        variant: "secondary",
                                        children: [w.topicTags.length - Ee, "+"]
                                    })
                                })
                            })]
                        })]
                    })
                }
        },
        75696: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return o
                }
            });
            var i = n(26042),
                s = n(69396),
                r = n(64529),
                a = n(782),
                l = n(50438),
                o = (0, r.Ue)((0, a.$e)({
                    animateSlug: null,
                    isSidebarOpen: !0,
                    isCloseByDrageer: !1,
                    isAddQuestionsDialogOpen: !1,
                    isCreateNewListDialogOpen: !1,
                    isEditListInfoDialogOpen: !1,
                    isEditSmartListRuleDialogOpen: !1,
                    isGenerateSmartListDialogOpen: !1,
                    isDeleteAlertDialogOpen: !1,
                    showTags: !1,
                    currentFavoriteSlug: "",
                    showKeysList: []
                }, (function(e) {
                    return {
                        setIsSidebarOpen: function(t) {
                            return l.P.problemlistListsCloseClick({
                                problemlist_list_operation_type: t ? "open" : "close"
                            }), e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    isSidebarOpen: t
                                })
                            }))
                        },
                        setIsCloseByDrageer: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    isCloseByDrageer: t
                                })
                            }))
                        },
                        setIsAddQuestionsDialogOpen: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    isAddQuestionsDialogOpen: t
                                })
                            }))
                        },
                        setIsCreateNewListDialogOpen: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    isCreateNewListDialogOpen: t
                                })
                            }))
                        },
                        setIsEditListInfoDialogOpen: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    isEditListInfoDialogOpen: t
                                })
                            }))
                        },
                        setIsEditSmartListRuleDialogOpen: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    isEditSmartListRuleDialogOpen: t
                                })
                            }))
                        },
                        setIsGenerateSmartListDialogOpen: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    isGenerateSmartListDialogOpen: t
                                })
                            }))
                        },
                        setIsDeleteAlertDialogOpen: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    isDeleteAlertDialogOpen: t
                                })
                            }))
                        },
                        setAnimateSlug: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    animateSlug: t
                                })
                            }))
                        },
                        setShowTags: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    showTags: t
                                })
                            }))
                        },
                        setCurrentFavoriteSlug: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    currentFavoriteSlug: t
                                })
                            }))
                        },
                        setShowKeysList: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, i.Z)({}, e), {
                                    showKeysList: t
                                })
                            }))
                        }
                    }
                })))
        },
        97942: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return d
                }
            });
            var i = n(26042),
                s = n(99534),
                r = n(85893),
                a = (n(67294), n(29107)),
                l = n(12922),
                o = (0, a.j)("inline-flex items-center rounded-sd-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sd-ring focus:ring-offset-2", {
                    variants: {
                        variant: {
                            default: "border-transparent bg-sd-primary text-sd-primary-foreground hover:bg-sd-primary/80",
                            secondary: "border-transparent bg-sd-secondary text-sd-secondary-foreground hover:bg-sd-secondary/80",
                            outline: "border-sd-border text-sd-foreground",
                            danger: "border-transparent bg-sd-danger text-sd-fixed-white hover:bg-sd-danger/80",
                            warning: "border-transparent bg-sd-warning text-sd-fixed-white hover:bg-sd-warning/80",
                            info: "border-transparent bg-sd-info text-sd-fixed-white hover:bg-sd-info/80",
                            success: "border-transparent bg-sd-success text-sd-fixed-white hover:bg-sd-success/80"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                });

            function d(e) {
                var t = e.className,
                    n = e.variant,
                    a = (0, s.Z)(e, ["className", "variant"]);
                return (0, r.jsx)("div", (0, i.Z)({
                    className: (0, l.yI)(o({
                        variant: n
                    }), t)
                }, a))
            }
        },
        23358: function(e, t, n) {
            n.d(t, {
                $F: function() {
                    return m
                },
                AW: function() {
                    return f
                },
                Xi: function() {
                    return p
                },
                h_: function() {
                    return c
                }
            });
            var i = n(26042),
                s = n(69396),
                r = n(99534),
                a = n(85893),
                l = n(67294),
                o = n(93133),
                d = n(62469),
                u = n(12922),
                c = o.fC,
                m = o.xz;
            o.ZA, o.Uv, o.Tr, o.Ee;
            l.forwardRef((function(e, t) {
                var n = e.className,
                    l = e.inset,
                    c = e.children,
                    m = (0, r.Z)(e, ["className", "inset", "children"]);
                return (0, a.jsxs)(o.fF, (0, s.Z)((0, i.Z)({
                    ref: t,
                    className: (0, u.yI)("focus:bg-sd-accent data-[state=open]:bg-sd-accent rounded-sd-sm flex cursor-pointer select-none items-center px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:cursor-default data-[disabled]:opacity-50", l && "pl-8", n)
                }, m), {
                    children: [c, (0, a.jsx)(d.XCv, {
                        className: "ml-auto h-4 w-4"
                    })]
                }))
            })).displayName = o.fF.displayName, l.forwardRef((function(e, t) {
                var n = e.className,
                    s = (0, r.Z)(e, ["className"]);
                return (0, a.jsx)(o.tu, (0, i.Z)({
                    ref: t,
                    className: (0, u.yI)("bg-sd-popover text-sd-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-sd-md border-sd-border z-modal min-w-[8rem] overflow-hidden border p-1 shadow-lg", n)
                }, s))
            })).displayName = o.tu.displayName;
            var f = l.forwardRef((function(e, t) {
                var n = e.className,
                    s = e.sideOffset,
                    l = void 0 === s ? 8 : s,
                    d = e.collisionPadding,
                    c = void 0 === d ? 8 : d,
                    m = (0, r.Z)(e, ["className", "sideOffset", "collisionPadding"]);
                return (0, a.jsx)(o.Uv, {
                    children: (0, a.jsx)(o.VY, (0, i.Z)({
                        ref: t,
                        sideOffset: l,
                        collisionPadding: c,
                        className: (0, u.yI)("bg-sd-popover text-sd-popover-foreground rounded-sd-md border-sd-border min-w-[8rem] overflow-hidden border p-1 shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n)
                    }, m))
                })
            }));
            f.displayName = o.VY.displayName;
            var p = l.forwardRef((function(e, t) {
                var n = e.className,
                    s = e.inset,
                    l = (0, r.Z)(e, ["className", "inset"]);
                return (0, a.jsx)(o.ck, (0, i.Z)({
                    ref: t,
                    className: (0, u.yI)("focus:bg-sd-accent focus:text-sd-accent-foreground rounded-sd-sm relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none transition-colors focus:cursor-pointer data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s && "pl-8", n)
                }, l))
            }));
            p.displayName = o.ck.displayName, l.forwardRef((function(e, t) {
                var n = e.className,
                    l = e.children,
                    c = e.checked,
                    m = (0, r.Z)(e, ["className", "children", "checked"]);
                return (0, a.jsxs)(o.oC, (0, s.Z)((0, i.Z)({
                    ref: t,
                    className: (0, u.yI)("focus:bg-sd-accent focus:text-sd-accent-foreground rounded-sd-sm relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:cursor-pointer data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n),
                    checked: c
                }, m), {
                    children: [(0, a.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, a.jsx)(o.wU, {
                            children: (0, a.jsx)(d.nQG, {
                                className: "h-4 w-4"
                            })
                        })
                    }), l]
                }))
            })).displayName = o.oC.displayName, l.forwardRef((function(e, t) {
                var n = e.className,
                    l = e.children,
                    c = (0, r.Z)(e, ["className", "children"]);
                return (0, a.jsxs)(o.Rk, (0, s.Z)((0, i.Z)({
                    ref: t,
                    className: (0, u.yI)("focus:bg-sd-accent focus:text-sd-accent-foreground rounded-sd-sm relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:cursor-pointer data-[disabled]:pointer-events-none data-[disabled]:opacity-50", n)
                }, c), {
                    children: [(0, a.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, a.jsx)(o.wU, {
                            children: (0, a.jsx)(d.jXb, {
                                className: "h-4 w-4 fill-current"
                            })
                        })
                    }), l]
                }))
            })).displayName = o.Rk.displayName, l.forwardRef((function(e, t) {
                var n = e.className,
                    s = e.inset,
                    l = (0, r.Z)(e, ["className", "inset"]);
                return (0, a.jsx)(o.__, (0, i.Z)({
                    ref: t,
                    className: (0, u.yI)("px-2 py-1.5 text-sm font-semibold", s && "pl-8", n)
                }, l))
            })).displayName = o.__.displayName, l.forwardRef((function(e, t) {
                var n = e.className,
                    s = (0, r.Z)(e, ["className"]);
                return (0, a.jsx)(o.Z0, (0, i.Z)({
                    ref: t,
                    className: (0, u.yI)("bg-sd-muted -mx-1 my-1 h-px", n)
                }, s))
            })).displayName = o.Z0.displayName
        },
        87273: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return c
                }
            });
            var i = n(26042),
                s = n(99534),
                r = n(85893),
                a = n(67294),
                l = n(49102),
                o = n(29107),
                d = n(12922),
                u = (0, o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                c = a.forwardRef((function(e, t) {
                    var n = e.className,
                        a = (0, s.Z)(e, ["className"]);
                    return (0, r.jsx)(l.f, (0, i.Z)({
                        ref: t,
                        className: (0, d.yI)(u(), n)
                    }, a))
                }));
            c.displayName = l.f.displayName
        },
        66440: function(e, t, n) {
            var i, s;
            n.d(t, {
                    F: function() {
                        return i
                    }
                }),
                function(e) {
                    e.Easy = "EASY", e.Medium = "MEDIUM", e.Hard = "HARD"
                }(i || (i = {})),
                function(e) {
                    e.Mon = "monday", e.Tue = "tuesday", e.Wed = "wednesday", e.Thu = "thursday", e.Fri = "friday", e.Sat = "saturday", e.Sun = "sunday"
                }(s || (s = {}))
        },
        9840: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return s
                }
            });
            var i = n(67294),
                s = function(e, t) {
                    var n = (0, i.useState)(e),
                        s = n[0],
                        r = n[1];
                    return (0, i.useEffect)((function() {
                        var n = setTimeout((function() {
                            return r(e)
                        }), t);
                        return function() {
                            return clearTimeout(n)
                        }
                    }), [e, t]), s
                }
        },
        28708: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return r
                }
            });
            var i = n(8183),
                s = n(23025),
                r = {
                    companyListExposure: function(e) {
                        var t = {
                            key: "company_list_exposure",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListPracticeClick: function(e) {
                        var t = {
                            key: "company_list_practice_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListDiscussClick: function(e) {
                        var t = {
                            key: "company_list_discuss_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListPeriodChangeClick: function(e) {
                        var t = {
                            key: "company_list_period_change_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListProblemsFilterClick: function(e) {
                        var t = {
                            key: "company_list_problems_filter_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListProblemsFilterItemClick: function(e) {
                        var t = {
                            key: "company_list_problems_filter_item_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListProblemsFilterResetClick: function(e) {
                        var t = {
                            key: "company_list_problems_filter_reset_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListProblemsFilterDeleteClick: function(e) {
                        var t = {
                            key: "company_list_problems_filter_delete_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListProblemsSettingClick: function(e) {
                        var t = {
                            key: "company_list_problems_setting_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListProblemsFrequencyExposure: function(e) {
                        var t = {
                            key: "company_list_problems_frequency_exposure",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListProblemsClaimClick: function(e) {
                        var t = {
                            key: "company_list_problems_claim_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListProblemsClaimSubscribeClick: function(e) {
                        var t = {
                            key: "company_list_problems_claim_subscribe_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListSubscribeClick: function(e) {
                        var t = {
                            key: "company_list_subscribe_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    },
                    companyListSubscribeMoreClick: function(e) {
                        var t = {
                            key: "company_list_subscribe_more_click",
                            data: e
                        };
                        i.V[s.X.GIO](t), i.V[s.X.GA4](t), i.V[s.X.CONSOLE](t), i.V[s.X.SELF_DB](t)
                    }
                }
        },
        10875: function(e, t) {
            t.Z = "/_next/static/images/awardFill-fe7c8e6ddc594ff751e9383cbfec3f81.svg"
        },
        44247: function(e, t) {
            t.Z = "/_next/static/images/null-9c799484a96a82d51c063f0246797364.svg"
        }
    }
]);