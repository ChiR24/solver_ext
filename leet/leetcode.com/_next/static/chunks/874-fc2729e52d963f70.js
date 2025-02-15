"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [874], {
        18471: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return o
                }
            });
            var i = n(26042),
                r = n(9669),
                s = n.n(r),
                l = n(31955),
                a = n(32180);

            function o(e, t) {
                var n = l.Z.get("__appToken__");
                return s()(e, (0, i.Z)({
                    headers: (0, i.Z)({
                        "content-type": "application/json"
                    }, n ? {
                        Authorization: "Bearer ".concat(n)
                    } : {}, t && t.headers),
                    xsrfCookieName: "csrftoken",
                    xsrfHeaderName: "X-CSRFToken"
                }, t && (0, a.Z)(t, "headers")))
            }
        },
        71711: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return s
                }
            });
            var i = n(63808),
                r = n(88525),
                s = function() {
                    return (0, r.glJ)(i.f6)
                }
        },
        60291: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return a
                }
            });
            var i = n(26042),
                r = n(69396),
                s = n(88525),
                l = n(82960),
                a = function(e) {
                    var t = e.filters;
                    return s.RfI.getKey((0, r.Z)((0, i.Z)({}, e), {
                        filters: (0, l.$)(t)
                    }))
                }
        },
        17687: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return u
                }
            });
            var i = n(26042),
                r = n(69396),
                s = n(59403),
                l = n(63808),
                a = n(88525),
                o = n(60291),
                c = n(82960),
                u = function(e) {
                    var t, n = e.filters,
                        u = (0, r.Z)((0, i.Z)({}, e), {
                            filtersV2: (0, c.$)(n)
                        });
                    return (0, s.N)((0, o.U)(e), (function(e) {
                        var t = e.pageParam,
                            n = void 0 === t ? u : t;
                        return l.f6.request(a.XB0, n).then((function(e) {
                            var t;
                            return {
                                problemList: e.problemsetQuestionListV2.questions.map((function(e) {
                                    var t, n;
                                    return (0, r.Z)((0, i.Z)({}, e), {
                                        difficulty: e.difficulty,
                                        paidOnly: e.paidOnly,
                                        questionFrontendId: e.questionFrontendId || "",
                                        status: e.status,
                                        translatedTitle: e.translatedTitle || "",
                                        frequency: null !== (t = e.frequency) && void 0 !== t ? t : 0,
                                        acRate: null !== (n = e.acRate) && void 0 !== n ? n : 0,
                                        topicTags: e.topicTags || []
                                    })
                                })),
                                hasMore: !!e.problemsetQuestionListV2.hasMore,
                                total: null !== (t = e.problemsetQuestionListV2.totalLength) && void 0 !== t ? t : 0,
                                skip: n.skip
                            }
                        }))
                    }), (0, r.Z)((0, i.Z)({}, null !== (t = u.options) && void 0 !== t ? t : {}), {
                        staleTime: 1 / 0,
                        getNextPageParam: function(e, t) {
                            var n;
                            return e.hasMore ? (0, r.Z)((0, i.Z)({}, u), {
                                skip: t.length * (null !== (n = u.limit) && void 0 !== n ? n : 0)
                            }) : void 0
                        }
                    }))
                }
        },
        27342: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var i = n(26042),
                r = n(69396),
                s = n(63808),
                l = n(88525),
                a = n(82960),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (0, l.afO)(s.f6, (0, r.Z)((0, i.Z)({}, e), {
                        filters: (0, a.$)(null === e || void 0 === e ? void 0 : e.filters)
                    }), {
                        enabled: t
                    })
                }
        },
        3481: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return u
                }
            });
            var i = n(47568),
                r = n(70655),
                s = n(85945),
                l = n(37609),
                a = n(63808),
                o = n(88525),
                c = n(59466),
                u = function() {
                    var e = (0, s.NL)();
                    return (0, o.TEJ)(a.f6, {
                        onMutate: function() {
                            var t = (0, i.Z)((function(t) {
                                var n;
                                return (0, r.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return n = o.qo2.getKey({
                                                favoriteSlug: t.favoriteSlug
                                            }), [4, e.cancelQueries(n)];
                                        case 1:
                                            return i.sent(), [2, {
                                                previousData: (0, c.qB)({
                                                    queryClient: e,
                                                    favoriteSlug: t.favoriteSlug,
                                                    newQueryData: !1
                                                }).previousData
                                            }]
                                    }
                                }))
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        onError: function(t, n, i) {
                            (0, l.defaultErrorHandler)(t);
                            var r = o.qo2.getKey({
                                favoriteSlug: n.favoriteSlug
                            });
                            (null === i || void 0 === i ? void 0 : i.previousData) && e.setQueryData(r, i.previousData)
                        },
                        onSuccess: function(t, n, i) {
                            var r, s = o.qo2.getKey({
                                favoriteSlug: n.favoriteSlug
                            });
                            (null === (r = t.removeFavoriteFromMyCollectionV2) || void 0 === r ? void 0 : r.ok) ? e.invalidateQueries(o.nS7.getKey({})): (null === i || void 0 === i ? void 0 : i.previousData) && e.setQueryData(s, i.previousData)
                        }
                    })
                }
        },
        36787: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return r
                }
            });
            var i = n(24138),
                r = function() {
                    return {
                        isNewVersion: (0, i.T)((function(e) {
                            return e.isNewVersion
                        }))
                    }
                }
        },
        36843: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return m
                }
            });
            var i = n(85893),
                r = n(68779),
                s = n(11321),
                l = n(67294),
                a = n(11163),
                o = n(72014),
                c = n(70341),
                u = n(134),
                d = n(23358),
                f = n(31386),
                v = n(75696),
                m = function() {
                    var e = (0, o.A)(),
                        t = (0, v.n)((function(e) {
                            return e.setIsCreateNewListDialogOpen
                        })),
                        n = (0, v.n)((function(e) {
                            return e.setIsGenerateSmartListDialogOpen
                        })),
                        m = (0, s.$G)("problemlist", {
                            keyPrefix: "nav-panel"
                        }).t,
                        p = (0, a.useRouter)(),
                        h = (0, l.useState)(!1),
                        x = h[0],
                        g = h[1];
                    return e ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(d.h_, {
                            open: x,
                            onOpenChange: g,
                            modal: !1,
                            children: [(0, i.jsx)(d.$F, {
                                asChild: !0,
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation()
                                },
                                children: (0, i.jsxs)("div", {
                                    className: "rounded-sd-sm hover:bg-sd-accent flex h-9 cursor-pointer items-center gap-1 p-2 transition-all",
                                    children: [(0, i.jsx)(u.e, {
                                        icon: r.r8p
                                    }), (0, i.jsx)(u.e, {
                                        className: "text-sd-muted-foreground w-[9px] text-[10px] font-extrabold",
                                        icon: r.gc2
                                    })]
                                })
                            }), (0, i.jsxs)(d.AW, {
                                align: "start",
                                className: "z-base-4 w-[224px]",
                                children: [(0, i.jsxs)(d.Xi, {
                                    className: "select-none gap-2",
                                    onClick: function(e) {
                                        e.preventDefault(), e.stopPropagation(), f.b.navSidebarCreateNormalListClick(), t(!0), g(!1)
                                    },
                                    children: [(0, i.jsx)(u.e, {
                                        variant: "16px",
                                        padding: "none",
                                        icon: r.r8p
                                    }), m("newList")]
                                }), (0, i.jsxs)(d.Xi, {
                                    className: "!text-sd-purple-400 select-none gap-2",
                                    onClick: function(e) {
                                        e.preventDefault(), e.stopPropagation(), f.b.navSidebarCreateSmartListClick(), n(!0), g(!1)
                                    },
                                    children: [(0, i.jsx)(u.e, {
                                        variant: "16px",
                                        padding: "none",
                                        icon: r.A47
                                    }), m("newSmartList")]
                                })]
                            })]
                        })
                    }) : (0, i.jsxs)("div", {
                        className: "rounded-sd-sm hover:bg-sd-accent flex h-9 cursor-pointer items-center gap-1 p-2 transition-all",
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation(), p.replace(c.Hb.signIn(location.href), void 0, {
                                shallow: !0
                            })
                        },
                        children: [(0, i.jsx)(u.e, {
                            icon: r.r8p
                        }), (0, i.jsx)(u.e, {
                            className: "text-sd-muted-foreground w-[9px] text-[10px] font-extrabold",
                            icon: r.gc2
                        })]
                    })
                }
        },
        47403: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return a
                }
            });
            var i = n(26042),
                r = n(69396),
                s = n(85893),
                l = n(12922),
                a = function(e) {
                    return (0, s.jsx)("div", (0, r.Z)((0, i.Z)({}, e), {
                        className: (0, l.yI)("bg-sd-border my-1 h-[1px] w-full", e.className)
                    }))
                }
        },
        36055: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return p
                }
            });
            var i = n(85893),
                r = n(68779),
                s = n(11321),
                l = n(11163),
                a = n(36787),
                o = n(68191),
                c = n(69485),
                u = n(70341),
                d = n(12922),
                f = n(134),
                v = n(31386),
                m = n(75696),
                p = function() {
                    var e = (0, s.$G)("problemlist", {
                            keyPrefix: "nav-panel"
                        }).t,
                        t = (0, l.useRouter)(),
                        n = (0, a.c)().isNewVersion,
                        p = (0, m.n)((function(e) {
                            return e.isSidebarOpen
                        })),
                        h = "problemset" === (0, o.v)().pagePath,
                        x = (0, c.z)((function() {
                            v.b.navSidebarLibraryClick(), t.push(u.Hb.problemset(""))
                        }));
                    return (0, i.jsxs)("div", {
                        className: (0, d.yI)("rounded-sd-sm hover:bg-sd-accent flex h-10 cursor-pointer items-center gap-2 py-2 pl-2 transition-all", h && "bg-sd-accent", !p && "bg-transparent"),
                        onClick: x,
                        children: [(0, i.jsx)(f.e, {
                            icon: n ? r.KtD : r.FL8,
                            variant: "16px",
                            padding: "roomy"
                        }), (0, i.jsx)("div", {
                            className: "select-none text-base font-semibold",
                            children: e(n ? "library" : "oldLibrary")
                        })]
                    })
                }
        },
        93678: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return j
                }
            });
            var i = n(47568),
                r = n(70655),
                s = n(85893),
                l = n(68779),
                a = n(73582),
                o = n(11321),
                c = n(41664),
                u = n.n(c),
                d = n(12922),
                f = n(69485),
                v = n(58420),
                m = n(62758),
                p = n(134),
                h = n(70341),
                x = n(23874),
                g = n(3481),
                y = n(4032),
                b = function(e) {
                    return "nav-menu-".concat(e)
                },
                j = function(e) {
                    var t = e.active,
                        n = e.slug,
                        c = e.coverUrl,
                        j = e.coverEmoji,
                        N = e.coverBackgroundColor,
                        S = e.name,
                        w = e.isPublicFavorite,
                        F = e.onClick,
                        C = e.showPublicFavoriteBadge,
                        L = e.showInvalidList,
                        k = e.removeListSuccess,
                        I = e.favoriteType,
                        D = e.animateHidden,
                        _ = (0, o.$G)("problemlist", {
                            keyPrefix: "nav-panel"
                        }).t,
                        T = (0, o.$G)("problemlist", {
                            keyPrefix: "description.operations"
                        }).t,
                        P = (0, g.D)().mutateAsync,
                        A = (0, v.pm)().toast,
                        E = L && !w,
                        Z = I === x.cPe.CompanyFavorite,
                        O = I === x.cPe.SmartList,
                        V = (0, f.z)(function() {
                            var e = (0, i.Z)((function(e) {
                                return (0, r.__generator)(this, (function(t) {
                                    return e.stopPropagation(), e.preventDefault(), P({
                                        favoriteSlug: n
                                    }).then((function(e) {
                                        var t;
                                        (null === (t = e.removeFavoriteFromMyCollectionV2) || void 0 === t ? void 0 : t.ok) && (A({
                                            variant: "success",
                                            description: T("listUnsavedToast"),
                                            duration: 2e3
                                        }), k && k())
                                    })), [2]
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()),
                        R = (0, f.z)((function(e) {
                            F(), E && e.preventDefault()
                        }));
                    return (0, s.jsx)(u(), {
                        href: E ? "" : Z ? h.Hb.company(n) : h.Hb.problemList(n),
                        passHref: !0,
                        children: (0, s.jsx)("div", {
                            className: (0, d.yI)("flex h-[36px] cursor-pointer select-none items-center justify-between truncate rounded px-2 transition-[opacity,height] duration-[1s]", {
                                "bg-sd-accent": !E && t,
                                "cursor-not-allowed": E,
                                "hover:bg-sd-accent": !E,
                                "invisible mt-0 h-0 p-0 opacity-0": D
                            }),
                            onClick: R,
                            id: b(n),
                            children: (0, s.jsxs)("div", {
                                className: (0, d.yI)("flex w-full  items-center overflow-hidden", {
                                    "opacity-60": E
                                }),
                                children: [(0, s.jsx)("div", {
                                    className: "!h-5 !w-5",
                                    children: (0, s.jsx)(y.P, {
                                        className: "mr-2.5 !h-5 !w-5 rounded-[3px]",
                                        url: E ? "" : c,
                                        emoji: E ? null : j,
                                        background: E ? void 0 : N
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "flex-1 truncate pl-2 font-medium",
                                    children: E ? _("listInvalid") : S
                                }), (0, s.jsx)("div", {
                                    className: "flex !h-6 !w-6 items-center justify-center",
                                    children: E ? (0, s.jsx)(m.u, {
                                        label: _("remove"),
                                        children: (0, s.jsx)("div", {
                                            onClick: V,
                                            children: (0, s.jsx)(p.e, {
                                                icon: a.Tab,
                                                className: "text-sd-medium cursor-pointer"
                                            })
                                        })
                                    }) : O ? (0, s.jsx)(m.u, {
                                        label: _("smartList"),
                                        children: (0, s.jsx)("div", {
                                            children: (0, s.jsx)(p.e, {
                                                className: "text-sd-muted-foreground",
                                                icon: l.A47
                                            })
                                        })
                                    }) : C ? (0, s.jsx)(m.u, {
                                        label: _(w ? "public" : "private"),
                                        children: (0, s.jsx)("div", {
                                            children: (0, s.jsx)(p.e, {
                                                className: "text-sd-muted-foreground",
                                                icon: w ? l.g4A : l.byT
                                            })
                                        })
                                    }) : null
                                })]
                            })
                        })
                    })
                }
        },
        68585: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return p
                }
            });
            var i = n(85893),
                r = n(68779),
                s = n(11321),
                l = n(62758),
                a = n(83210),
                o = n(134),
                c = n(68191),
                u = n(4563),
                d = n(12922),
                f = n(45310),
                v = n(75696),
                m = n(64807),
                p = function(e) {
                    var t = e.className,
                        n = e.onlyLimitWidthHidden,
                        p = (0, v.n)((function(e) {
                            return e.isSidebarOpen
                        })),
                        h = (0, v.n)((function(e) {
                            return e.setIsSidebarOpen
                        })),
                        x = (0, s.$G)("problemlist", {
                            keyPrefix: "nav-panel"
                        }).t,
                        g = (0, m.y)().slug,
                        y = (0, c.v)().pagePath,
                        b = (0, f.q)(g) || {},
                        j = b.data,
                        N = b.isFetched;
                    return (0, i.jsx)(l.u, {
                        isDisabled: null === u.tq || void 0 === u.tq ? void 0 : (0, u.tq)(),
                        label: x(p ? "fold" : "unfold"),
                        placement: "bottom",
                        children: (0, i.jsx)(a.z, {
                            disabled: !(["problemset", "studyplan"].includes(y) || ("company" === y || "problem-list" === y) && g && N && (null === j || void 0 === j ? void 0 : j.hasAccess)),
                            onClick: function(e) {
                                e.preventDefault(), e.stopPropagation(), h(!p)
                            },
                            onlyIcon: !0,
                            variant: "secondary",
                            className: (0, d.yI)("relative h-8 w-8 cursor-pointer border-[1px] transition-all", {
                                "lc-dsw-xl:hidden": n && p
                            }, t),
                            children: (0, i.jsx)(o.e, {
                                icon: r.Y5q,
                                className: "h-4 w-4"
                            })
                        })
                    })
                }
        },
        28025: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return m
                }
            });
            var i = n(26042),
                r = n(69396),
                s = n(85893),
                l = n(18637),
                a = n(72014),
                o = n(69485),
                c = n(50438),
                u = n(85110),
                d = n(64807),
                f = n(93678),
                v = n(75696),
                m = function(e) {
                    var t = e.showList,
                        n = void 0 === t || t,
                        m = (0, u.v)().data,
                        p = (null !== m && void 0 !== m ? m : {}).myCreatedFavoriteList,
                        h = void 0 === p ? [] : p,
                        x = (0, d.y)().slug,
                        g = (0, v.n)((function(e) {
                            return e.setIsSidebarOpen
                        })),
                        y = (0, v.n)((function(e) {
                            return e.setIsCloseByDrageer
                        })),
                        b = (0, l.d)().isMobile,
                        j = (0, a.A)(),
                        N = (0, o.z)((function(e) {
                            c.P.problemlistListsListClick({
                                problemlist_list_slug: e
                            }), b && (g(!1), y(!1))
                        }));
                    return j ? (0, s.jsx)(s.Fragment, {
                        children: (n ? h : []).map((function(e) {
                            return (0, s.jsx)(f.L, (0, r.Z)((0, i.Z)({}, e), {
                                active: e.slug === x,
                                onClick: function() {
                                    return N(e.slug)
                                },
                                showPublicFavoriteBadge: !0
                            }), e.slug)
                        }))
                    }) : null
                }
        },
        7830: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return x
                }
            });
            var i = n(26042),
                r = n(69396),
                s = n(85893),
                l = n(11163),
                a = n(11321),
                o = n(70341),
                c = n(72014),
                u = n(18637),
                d = n(69485),
                f = n(50438),
                v = n(85110),
                m = n(64807),
                p = n(93678),
                h = n(75696),
                x = function() {
                    var e = (0, a.$G)("problemlist", {
                            keyPrefix: "nav-panel"
                        }).t,
                        t = (0, v.v)(),
                        n = t.data,
                        x = t.refetch,
                        g = null !== n && void 0 !== n ? n : {},
                        y = g.myCollectedFavoriteList,
                        b = void 0 === y ? [] : y,
                        j = g.myCreatedFavoriteList,
                        N = void 0 === j ? [] : j,
                        S = (0, h.n)((function(e) {
                            return e.animateSlug
                        })),
                        w = (0, l.useRouter)().replace,
                        F = (0, m.y)().slug,
                        C = (0, c.A)(),
                        L = (0, h.n)((function(e) {
                            return e.setIsSidebarOpen
                        })),
                        k = (0, h.n)((function(e) {
                            return e.setIsCloseByDrageer
                        })),
                        I = (0, u.d)().isMobile,
                        D = (0, d.z)((function(e) {
                            f.P.problemlistListsListClick({
                                problemlist_list_slug: e
                            }), I && (L(!1), k(!1))
                        })),
                        _ = (0, d.z)((function() {
                            N && N[0] && w(o.Hb.problemList(N[0].slug), "", {
                                shallow: !0
                            }), x()
                        }));
                    return C ? 0 === b.length ? null : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: "mt-2 flex h-[36px] items-center pl-2",
                            children: (0, s.jsx)("div", {
                                className: "text-sd-muted-foreground select-none font-semibold",
                                children: e("mySaved")
                            })
                        }), (0, s.jsx)("div", {
                            className: "flex flex-col gap-1",
                            children: b.map((function(e) {
                                return (0, s.jsx)(p.L, (0, r.Z)((0, i.Z)({}, e), {
                                    active: e.slug === F,
                                    onClick: function() {
                                        return D(e.slug)
                                    },
                                    removeListSuccess: _,
                                    showInvalidList: !0,
                                    animateHidden: e.slug === S
                                }), e.slug)
                            }))
                        })]
                    }) : null
                }
        },
        2767: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return m
                }
            });
            var i = n(85893),
                r = n(68779),
                s = n(11321),
                l = n(11163),
                a = n(69485),
                o = n(70341),
                c = n(68191),
                u = n(12922),
                d = n(134),
                f = n(31386),
                v = n(75696),
                m = function() {
                    var e = (0, s.$G)("problemlist", {
                            keyPrefix: "nav-panel"
                        }).t,
                        t = (0, l.useRouter)(),
                        n = (0, v.n)((function(e) {
                            return e.isSidebarOpen
                        })),
                        m = (0, a.z)((function() {
                            f.b.navSidebarStudyplanClick(), t.push(o.Hb.studyPlanV2)
                        })),
                        p = "studyplan" === (0, c.v)().pagePath;
                    return (0, i.jsxs)("div", {
                        className: (0, u.yI)("rounded-sd-sm hover:bg-sd-accent flex h-10 cursor-pointer items-center gap-2 py-2 pl-2 transition-all", p && "bg-sd-accent", !n && "bg-transparent"),
                        onClick: m,
                        children: [(0, i.jsx)(d.e, {
                            icon: r.Xf_,
                            variant: "16px",
                            padding: "roomy"
                        }), (0, i.jsx)("div", {
                            className: "select-none text-base font-semibold",
                            children: e("studyPlan")
                        })]
                    })
                }
        },
        24026: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return ve
                }
            });
            var i = n(85893),
                r = n(47568),
                s = n(29815),
                l = n(70655),
                a = n(67294),
                o = n(11321),
                c = n(89952),
                u = n(83210),
                d = n(50300),
                f = n(63808),
                v = n(88525),
                m = function() {
                    return (0, v.Q0D)(f.f6)
                },
                p = n(17687),
                h = n(75955),
                x = n(68779),
                g = n(134),
                y = n(25082),
                b = function(e) {
                    var t = e.value,
                        n = e.setValue,
                        r = e.onClick,
                        s = e.onChange,
                        l = (0, a.useState)(!1),
                        c = l[0],
                        u = l[1],
                        d = (0, a.useState)(null),
                        f = d[0],
                        v = d[1],
                        m = (0, o.$G)("description").t;
                    return (0, a.useEffect)((function() {
                        c && f && f.focus()
                    }), [c, f]), c ? (0, i.jsxs)("div", {
                        className: "relative",
                        children: [(0, i.jsx)(y.I, {
                            ref: v,
                            placeholder: m("searchPlaceholder"),
                            onBlur: function() {
                                return !t.trim() && u(!1)
                            },
                            className: "bg-sd-accent h-8 rounded-full border-none py-1.5 pl-[34px] pr-3 text-sm focus-visible:ring-0",
                            value: t,
                            onChange: function(e) {
                                var t = e.target.value.trim();
                                n(t), null === s || void 0 === s || s(t)
                            }
                        }), (0, i.jsx)(g.e, {
                            icon: x.wn1,
                            variant: "14px",
                            className: "text-sd-muted-foreground absolute left-3 top-2"
                        })]
                    }) : (0, i.jsx)("div", {
                        className: "cursor-pointer p-2",
                        children: (0, i.jsx)(g.e, {
                            icon: x.wn1,
                            variant: "14px",
                            className: "text-sd-muted-foreground",
                            onClick: function() {
                                u(!0), null === r || void 0 === r || r()
                            }
                        })
                    })
                },
                j = n(9840),
                N = n(12922),
                S = n(19906),
                w = n(50438),
                F = n(75696),
                C = n(64807),
                L = n(49305),
                k = n(74897),
                I = n(85945),
                D = function() {
                    var e = (0, I.NL)(),
                        t = (0, C.y)().slug,
                        n = function() {
                            var n = (0, r.Z)((function(n) {
                                return (0, l.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, Promise.all([e.invalidateQueries(["favoriteUserQuestionProgressV2", {
                                                favoriteSlug: n || t
                                            }]), e.invalidateQueries(["favoriteSubmitAcProgress", {
                                                favoriteSlug: n || t
                                            }])])];
                                        case 1:
                                            return i.sent(), [2]
                                    }
                                }))
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    return {
                        refetchFavoriteUserQuestionProgressV2: n
                    }
                },
                _ = function() {
                    var e = (0, I.NL)(),
                        t = (0, C.y)().slug,
                        n = function() {
                            var n = (0, r.Z)((function(n) {
                                return (0, l.__generator)(this, (function(i) {
                                    return [2, e.invalidateQueries(["startToPracticeQuestion", {
                                        favoriteSlug: n || t
                                    }])]
                                }))
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    return {
                        refetchPracticeQuestion: n
                    }
                },
                T = n(21710),
                P = n(44247),
                A = function() {
                    var e = (0, F.n)((function(e) {
                            return e.isAddQuestionsDialogOpen
                        })),
                        t = (0, F.n)((function(e) {
                            return e.setIsAddQuestionsDialogOpen
                        })),
                        n = (0, F.n)((function(e) {
                            return e.currentFavoriteSlug
                        })),
                        f = (0, F.n)((function(e) {
                            return e.setCurrentFavoriteSlug
                        })),
                        v = (0, C.y)().slug,
                        x = n || v,
                        g = (0, a.useState)(""),
                        y = g[0],
                        I = g[1],
                        A = (0, j.N)(y, 500),
                        E = (0, o.$G)("problemlist", {
                            keyPrefix: "description.operations"
                        }).t,
                        Z = (0, p.u)({
                            searchKeyword: A,
                            skip: 0,
                            limit: 20,
                            options: {
                                enabled: e
                            }
                        }),
                        O = Z.isInitialLoading,
                        V = Z.isFetching,
                        R = Z.data,
                        Q = Z.hasNextPage,
                        q = Z.fetchNextPage,
                        M = (null === R || void 0 === R ? void 0 : R.pages.flatMap((function(e) {
                            return e.problemList
                        }))) || [],
                        z = (0, h.M)({
                            enabled: !V && Q,
                            threshold: 0,
                            onIntersect: q
                        }),
                        B = z.setContainerDom,
                        H = z.setTargetDom,
                        K = (0, d.U)(x, void 0, e).data,
                        G = void 0 === K ? [] : K,
                        X = (0, a.useState)([]),
                        $ = X[0],
                        U = X[1],
                        Y = m().mutateAsync,
                        J = (0, L.p)().refetchProblemListData,
                        W = (0, k.K)().refetchFavoriteQuestionList,
                        ee = D().refetchFavoriteUserQuestionProgressV2,
                        te = _().refetchPracticeQuestion;
                    (0, a.useEffect)((function() {
                        e && w.P.problemlistAddQuestionPopupExposure({
                            problemlist_list_slug: v
                        })
                    }), [e, v]), (0, a.useEffect)((function() {
                        e ? (U([]), I("")) : f("")
                    }), [e]);
                    return (0, i.jsx)(c.Vq, {
                        open: e,
                        onOpenChange: t,
                        children: (0, i.jsxs)(c.cZ, {
                            className: "sd-sm:max-w-[720px] max-w-[95vw]",
                            children: [(0, i.jsx)(c.fK, {
                                children: (0, i.jsx)(c.$N, {
                                    children: E("addQuestions")
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex items-center justify-start",
                                children: (0, i.jsx)(b, {
                                    value: y,
                                    setValue: I,
                                    onClick: function() {
                                        w.P.problemlistAddQuestionPopupSearchClick({
                                            problemlist_list_slug: v
                                        })
                                    },
                                    onChange: function(e) {
                                        w.P.problemlistAddQuestionPopupKeywordClick({
                                            problemlist_list_slug: v,
                                            problemlist_keyword: e
                                        })
                                    }
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex h-[500px] flex-col overflow-y-scroll",
                                ref: B,
                                children: O ? (0, i.jsx)("div", {
                                    className: "mt-3 max-w-[699px] flex-1",
                                    children: new Array(15).fill(0).map((function(e, t) {
                                        return (0, i.jsx)("div", {
                                            className: (0, N.yI)("h-[44px] w-full rounded-lg", t % 2 ? "bg-transparent" : "bg-sd-accent")
                                        }, t)
                                    }))
                                }) : M.length ? (0, i.jsxs)(i.Fragment, {
                                    children: [M.map((function(e, t) {
                                        var n = !!G.find((function(t) {
                                                return t.titleSlug === e.titleSlug
                                            })),
                                            r = $.includes(e.titleSlug);
                                        return (0, i.jsx)(T.H, {
                                            data: {
                                                id: e.id,
                                                title: e.title,
                                                titleSlug: e.titleSlug,
                                                difficulty: e.difficulty,
                                                topicTags: e.topicTags,
                                                paidOnly: e.paidOnly,
                                                status: e.status,
                                                translatedTitle: e.translatedTitle || "",
                                                questionFrontendId: e.questionFrontendId,
                                                frequency: e.frequency || 0
                                            },
                                            showTags: !1,
                                            slug: e.titleSlug,
                                            showZebraGrid: !0,
                                            isOddRow: t % 2 > 0,
                                            showStar: !1,
                                            showCheckBox: !0,
                                            onSelectItem: function(t) {
                                                n || U(t ? (0, s.Z)($).concat([e.titleSlug]) : $.filter((function(t) {
                                                    return t !== e.titleSlug
                                                })))
                                            },
                                            selected: r || n,
                                            disableSelect: n
                                        }, t)
                                    })), Q && (0, i.jsx)("div", {
                                        className: "w-full",
                                        ref: H,
                                        children: (0, i.jsx)("div", {
                                            className: "bg-sd-accent h-[44px] w-full rounded-lg"
                                        })
                                    })]
                                }) : (0, i.jsxs)("div", {
                                    className: "flex h-full w-full flex-col items-center justify-center",
                                    children: [(0, i.jsx)(S.y, {
                                        className: "h-[200px] w-[200px]",
                                        src: P.Z,
                                        alt: "Null"
                                    }), (0, i.jsx)("div", {
                                        className: "text-sd-card-foreground text-sm",
                                        children: E("noQuestions")
                                    })]
                                })
                            }), (0, i.jsx)(c.cN, {
                                className: "sd-sm:space-x-0 gap-2",
                                children: (0, i.jsxs)("div", {
                                    className: "flex items-center justify-end gap-4",
                                    children: [$.length > 0 && (0, i.jsx)("div", {
                                        className: "text-sd-muted-foreground font-medium",
                                        children: E("hasSelected", {
                                            count: $.length
                                        })
                                    }), (0, i.jsx)(u.z, {
                                        disabled: !$.length,
                                        isLoading: !1,
                                        onClick: (0, r.Z)((function() {
                                            var e, n;
                                            return (0, l.__generator)(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, Y({
                                                            favoriteSlug: x,
                                                            questionSlugs: $
                                                        })];
                                                    case 1:
                                                        return n = i.sent(), (null === (e = n.batchAddQuestionsToFavorite) || void 0 === e ? void 0 : e.ok) ? [4, Promise.all([J(x), W(x), ee(x), te(x)])] : [3, 3];
                                                    case 2:
                                                        i.sent(), t(!1), i.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        })),
                                        children: E("addToList")
                                    })]
                                })
                            })]
                        })
                    })
                },
                E = n(11163),
                Z = n(70341),
                O = n(58420),
                V = n(87273),
                R = n(77013),
                Q = n(30366),
                q = n(71711),
                M = n(23874),
                z = n(61923),
                B = function() {
                    var e, t, n = (0, F.n)((function(e) {
                            return e.isCreateNewListDialogOpen
                        })),
                        s = (0, F.n)((function(e) {
                            return e.setIsCreateNewListDialogOpen
                        })),
                        d = (0, F.n)((function(e) {
                            return e.setIsAddQuestionsDialogOpen
                        })),
                        f = (0, F.n)((function(e) {
                            return e.setCurrentFavoriteSlug
                        })),
                        v = (0, O.pm)().toast,
                        m = (0, o.$G)("problemlist", {
                            keyPrefix: "description.operations"
                        }).t,
                        p = (0, a.useState)(""),
                        h = p[0],
                        x = p[1],
                        g = (0, a.useState)(""),
                        b = g[0],
                        j = g[1],
                        N = (0, a.useState)(!1),
                        S = N[0],
                        w = N[1],
                        C = (0, q.j)().mutateAsync,
                        L = (0, E.useRouter)(),
                        k = (0, z.F)().refetchMyFavoriteList;
                    return (0, a.useEffect)((function() {
                        n && (x(""), j(""))
                    }), [n]), (0, i.jsx)(c.Vq, {
                        open: n,
                        onOpenChange: s,
                        children: (0, i.jsxs)(c.cZ, {
                            className: "sd-sm:max-w-[450px] max-w-[95vw]",
                            children: [(0, i.jsx)(c.fK, {
                                children: (0, i.jsx)(c.$N, {
                                    children: m("createNewList")
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col gap-6",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [(0, i.jsx)(V._, {
                                        htmlFor: "new-list-title",
                                        children: m("title")
                                    }), (0, i.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, i.jsx)(y.I, {
                                            autoFocus: !0,
                                            className: "w-full pr-[60px]",
                                            id: "new-list-title",
                                            placeholder: m("titlePlaceholder"),
                                            maxLength: 30,
                                            value: h,
                                            onChange: function(e) {
                                                return x(e.target.value)
                                            }
                                        }), (0, i.jsxs)("div", {
                                            className: "text-sd-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 text-sm",
                                            children: [null !== (e = null === h || void 0 === h ? void 0 : h.length) && void 0 !== e ? e : 0, "/30"]
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [(0, i.jsx)(V._, {
                                        htmlFor: "new-list-info",
                                        children: m("description")
                                    }), (0, i.jsx)(R.g, {
                                        className: "resize-none",
                                        rows: 3,
                                        placeholder: m("descriptionPlaceholder"),
                                        id: "new-list-info",
                                        maxLength: 150,
                                        value: b,
                                        onChange: function(e) {
                                            return j(e.target.value)
                                        }
                                    }), (0, i.jsxs)("div", {
                                        className: "text-sd-muted-foreground flex w-full justify-end text-sm",
                                        children: [null !== (t = null === b || void 0 === b ? void 0 : b.length) && void 0 !== t ? t : 0, "/150"]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, i.jsx)(Q.X, {
                                        id: "new-list-private",
                                        checked: S,
                                        onCheckedChange: function(e) {
                                            return w(!!e)
                                        }
                                    }), (0, i.jsx)(V._, {
                                        htmlFor: "new-list-private",
                                        children: m("private")
                                    })]
                                })]
                            }), (0, i.jsxs)(c.cN, {
                                className: "sd-sm:space-x-0 gap-2",
                                children: [(0, i.jsx)(u.z, {
                                    variant: "secondary",
                                    onClick: function() {
                                        s(!1)
                                    },
                                    children: m("cancel")
                                }), (0, i.jsx)(u.z, {
                                    disabled: !h.trim(),
                                    isLoading: !1,
                                    onClick: (0, r.Z)((function() {
                                        var e, t, n;
                                        return (0, l.__generator)(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, C({
                                                        name: h.trim(),
                                                        description: b.trim(),
                                                        favoriteType: M.cPe.Normal,
                                                        isPublicFavorite: !S
                                                    })];
                                                case 1:
                                                    return t = i.sent(), (n = null === (e = t.createEmptyFavorite) || void 0 === e ? void 0 : e.favoriteSlug) ? [4, k()] : [3, 3];
                                                case 2:
                                                    i.sent(), L.replace(Z.Hb.problemList(n)), v({
                                                        variant: "success",
                                                        description: "".concat(h.trim(), " ").concat(m("created"), "!"),
                                                        duration: 2e3
                                                    }), s(!1), f(n), d(!0), i.label = 3;
                                                case 3:
                                                    return [2]
                                            }
                                        }))
                                    })),
                                    children: m("create")
                                })]
                            })]
                        })
                    })
                },
                H = n(69485),
                K = function() {
                    var e = (0, I.NL)();
                    return (0, v.O0k)(f.f6, {
                        onSuccess: function(t) {
                            var n;
                            (null === (n = t.deleteFavoriteV2) || void 0 === n ? void 0 : n.ok) && e.invalidateQueries(v.nS7.getKey())
                        }
                    })
                },
                G = n(12043),
                X = function() {
                    var e = (0, F.n)((function(e) {
                            return e.isDeleteAlertDialogOpen
                        })),
                        t = (0, F.n)((function(e) {
                            return e.setIsDeleteAlertDialogOpen
                        })),
                        n = (0, C.y)().slug,
                        s = (0, o.$G)("problemlist", {
                            keyPrefix: "description.operations"
                        }).t,
                        a = (0, O.pm)().toast,
                        c = K().mutateAsync,
                        u = (0, E.useRouter)(),
                        d = (0, H.z)((0, r.Z)((function() {
                            var e, i;
                            return (0, l.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, c({
                                            favoriteSlug: n
                                        })];
                                    case 1:
                                        return i = r.sent(), (null === (e = i.deleteFavoriteV2) || void 0 === e ? void 0 : e.ok) && (a({
                                            variant: "success",
                                            description: s("deleteToast"),
                                            duration: 2e3
                                        }), t(!1), u.replace(Z.Hb.favoriteList())), [2]
                                }
                            }))
                        })));
                    return (0, i.jsx)(G.aR, {
                        variant: "danger",
                        open: e,
                        onOpenChange: t,
                        children: (0, i.jsxs)(G._T, {
                            children: [(0, i.jsxs)(G.fY, {
                                children: [(0, i.jsx)(G.f$, {
                                    children: s("deleteList")
                                }), (0, i.jsx)(G.yT, {
                                    children: s("deleteAlert")
                                })]
                            }), (0, i.jsxs)(G.xo, {
                                children: [(0, i.jsx)(G.le, {
                                    onClick: function() {
                                        return t(!1)
                                    },
                                    children: s("cancel")
                                }), (0, i.jsx)(G.OL, {
                                    onClick: d,
                                    children: s("acceptDelete")
                                })]
                            })]
                        })
                    })
                },
                $ = n(43763),
                U = n(37609),
                Y = n(59466),
                J = function() {
                    var e = (0, I.NL)();
                    return (0, v.kri)(f.f6, {
                        onMutate: function() {
                            var t = (0, r.Z)((function(t) {
                                var n, i, r, s, a, o, c;
                                return (0, l.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return n = v.BfN.getKey({
                                                favoriteSlug: t.favoriteSlug
                                            }), i = v.nS7.getKey({}), [4, e.cancelQueries(n)];
                                        case 1:
                                            return l.sent(), [4, e.cancelQueries(i)];
                                        case 2:
                                            return l.sent(), s = (0, Y.u1)({
                                                queryClient: e,
                                                favoriteSlug: t.favoriteSlug,
                                                newQueryData: {
                                                    name: t.name,
                                                    description: null !== (r = t.description) && void 0 !== r ? r : ""
                                                }
                                            }), a = s.previousData, o = (0, Y.F2)({
                                                queryClient: e,
                                                favoriteSlug: t.favoriteSlug,
                                                newQueryData: {
                                                    name: t.name
                                                }
                                            }), c = o.previousData, [2, {
                                                previousDetail: a,
                                                previousList: c
                                            }]
                                    }
                                }))
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        onError: function(t, n, i) {
                            (0, U.defaultErrorHandler)(t);
                            var r = v.BfN.getKey({
                                    favoriteSlug: n.favoriteSlug
                                }),
                                s = v.nS7.getKey({});
                            (null === i || void 0 === i ? void 0 : i.previousDetail) && e.setQueryData(r, i.previousDetail), (null === i || void 0 === i ? void 0 : i.previousList) && e.setQueryData(s, i.previousList)
                        },
                        onSuccess: function(t, n, i) {
                            var r, s = v.BfN.getKey({
                                    favoriteSlug: n.favoriteSlug
                                }),
                                l = v.nS7.getKey({});
                            (null === (r = t.updateFavoriteNameDescriptionV2) || void 0 === r ? void 0 : r.ok) || ((null === i || void 0 === i ? void 0 : i.previousDetail) && e.setQueryData(s, i.previousDetail), (null === i || void 0 === i ? void 0 : i.previousList) && e.setQueryData(l, i.previousList))
                        }
                    })
                },
                W = function() {
                    var e = (0, o.$G)("problemlist", {
                            keyPrefix: "description.operations"
                        }).t,
                        t = (0, C.y)().slug,
                        n = (0, $.A0)(t).data,
                        s = (0, a.useState)(!1),
                        d = s[0],
                        f = s[1],
                        v = (0, a.useState)((null === n || void 0 === n ? void 0 : n.name) || ""),
                        m = v[0],
                        p = v[1],
                        h = (0, a.useState)((null === n || void 0 === n ? void 0 : n.description) || ""),
                        x = h[0],
                        g = h[1],
                        b = (0, F.n)((function(e) {
                            return e.isEditListInfoDialogOpen
                        })),
                        j = (0, F.n)((function(e) {
                            return e.setIsEditListInfoDialogOpen
                        })),
                        N = J().mutateAsync,
                        S = (0, O.pm)().toast;
                    (0, a.useEffect)((function() {
                        var e;
                        b || (p((null === n || void 0 === n ? void 0 : n.name) || ""), g(null !== (e = null === n || void 0 === n ? void 0 : n.description) && void 0 !== e ? e : ""))
                    }), [null === n || void 0 === n ? void 0 : n.name, null === n || void 0 === n ? void 0 : n.description, b]);
                    var L, k, I = (0, H.z)((0, r.Z)((function() {
                        var n, i;
                        return (0, l.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (0 === m.trim().length) return [2];
                                    f(!0), r.label = 1;
                                case 1:
                                    return r.trys.push([1, , 3, 4]), [4, N({
                                        favoriteSlug: t,
                                        name: m,
                                        description: x
                                    })];
                                case 2:
                                    return i = r.sent(), f(!1), (null === (n = i.updateFavoriteNameDescriptionV2) || void 0 === n ? void 0 : n.ok) && (S({
                                        variant: "success",
                                        description: e("infoSavedToast"),
                                        duration: 2e3
                                    }), j(!1)), [3, 4];
                                case 3:
                                    return f(!1), [7];
                                case 4:
                                    return w.P.problemlistListDetailEditSaveClick({
                                        problemlist_list_slug: t
                                    }), [2]
                            }
                        }))
                    })));
                    return (0, i.jsx)(c.Vq, {
                        open: b,
                        onOpenChange: j,
                        children: (0, i.jsxs)(c.cZ, {
                            className: "sd-sm:max-w-[450px] max-w-[95vw]",
                            onOpenAutoFocus: function(e) {
                                return e.preventDefault()
                            },
                            children: [(0, i.jsx)(c.fK, {
                                children: (0, i.jsx)(c.$N, {
                                    children: e("editListInfo")
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col gap-6",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [(0, i.jsx)(V._, {
                                        htmlFor: "list-title",
                                        children: e("title")
                                    }), (0, i.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, i.jsx)(y.I, {
                                            autoFocus: !0,
                                            className: "w-full pr-[60px]",
                                            id: "list-title",
                                            placeholder: e("titlePlaceholder"),
                                            maxLength: 30,
                                            value: m,
                                            onChange: function(e) {
                                                return p(e.target.value)
                                            }
                                        }), (0, i.jsxs)("div", {
                                            className: "text-sd-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 text-sm",
                                            children: [null !== (L = null === m || void 0 === m ? void 0 : m.length) && void 0 !== L ? L : 0, "/30"]
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [(0, i.jsx)(V._, {
                                        htmlFor: "list-info",
                                        children: e("description")
                                    }), (0, i.jsx)(R.g, {
                                        className: "resize-none",
                                        rows: 3,
                                        placeholder: e("descriptionPlaceholder"),
                                        id: "list-info",
                                        maxLength: 150,
                                        value: x,
                                        onChange: function(e) {
                                            return g(e.target.value)
                                        }
                                    }), (0, i.jsxs)("div", {
                                        className: "text-sd-muted-foreground flex w-full justify-end text-sm",
                                        children: [null !== (k = null === x || void 0 === x ? void 0 : x.length) && void 0 !== k ? k : 0, "/150"]
                                    })]
                                })]
                            }), (0, i.jsxs)(c.cN, {
                                className: "sd-sm:space-x-0 gap-2",
                                children: [(0, i.jsx)(u.z, {
                                    variant: "secondary",
                                    onClick: function() {
                                        return j(!1)
                                    },
                                    children: e("cancel")
                                }), (0, i.jsx)(u.z, {
                                    disabled: !m.trim(),
                                    isLoading: d,
                                    onClick: I,
                                    children: e("save")
                                })]
                            })]
                        })
                    })
                },
                ee = n(51283),
                te = n(34588),
                ne = n(28813),
                ie = n(10601),
                re = n(1483),
                se = function() {
                    var e = (0, v.Z_)(f.f6).mutateAsync;
                    return {
                        mutateAsync: function(t) {
                            return e(t)
                        }
                    }
                },
                le = n(27342),
                ae = n(22111),
                oe = n(37915),
                ce = n(14924),
                ue = n(31523),
                de = function() {
                    var e = (0, E.useRouter)().pathname,
                        t = (0, F.n)((function(e) {
                            return e.isEditSmartListRuleDialogOpen
                        })),
                        n = (0, F.n)((function(e) {
                            return e.setIsEditSmartListRuleDialogOpen
                        })),
                        s = (0, F.n)((function(e) {
                            return e.currentFavoriteSlug
                        })),
                        d = (0, F.n)((function(e) {
                            return e.setCurrentFavoriteSlug
                        })),
                        f = (0, C.y)().slug,
                        v = s || f,
                        m = se().mutateAsync,
                        p = (0, o.$G)("problemlist", {
                            keyPrefix: "description.operations"
                        }).t,
                        h = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te.ZP,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M.YSR.All,
                                n = (0, ne.N)(e, t),
                                i = (0, a.useState)(n),
                                r = i[0],
                                s = i[1],
                                l = (0, a.useState)(!1),
                                o = l[0],
                                c = l[1],
                                u = (0, a.useState)(e),
                                d = u[0],
                                f = u[1],
                                v = (0, a.useState)(t),
                                m = v[0],
                                p = v[1],
                                h = (0, ie.s)(d).showKeys,
                                x = (0, re.T)(d).hiddenKeys;
                            return {
                                isReady: o,
                                currentDataMap: d,
                                filterCombineType: m,
                                filterValue: r,
                                showKeys: h,
                                hiddenKeys: x,
                                onChange: function(e, t) {
                                    f(e);
                                    var n = (0, ne.N)(e, t);
                                    s(n), p(t), c(!0)
                                },
                                reset: function() {
                                    f(e)
                                },
                                clear: function() {
                                    f(te.ZP)
                                }
                            }
                        }(),
                        y = (0, L.p)().refetchProblemListData,
                        b = (0, k.K)().refetchFavoriteQuestionList,
                        j = D().refetchFavoriteUserQuestionProgressV2,
                        N = _().refetchPracticeQuestion,
                        S = (0, $.A0)(v),
                        I = S.data,
                        T = S.isFetched,
                        P = I || {},
                        A = P.filtersInfo,
                        Z = void 0 === A ? "" : A,
                        O = P.visibleFilters,
                        V = void 0 === O ? [] : O,
                        R = (0, a.useState)(!1),
                        Q = R[0],
                        q = R[1],
                        z = (0, a.useState)(!1),
                        B = z[0],
                        H = z[1],
                        K = (0, a.useState)(te.ZP),
                        G = K[0],
                        X = K[1],
                        U = (0, a.useState)(M.YSR.All),
                        Y = U[0],
                        J = U[1],
                        W = (0, a.useState)(!1),
                        de = W[0],
                        fe = W[1],
                        ve = h.showKeys.filter((function(e) {
                            var t = te.eN[e];
                            return function(e, t) {
                                var n, i, r, s, l, a, o, c, u, d, f, v, m, p, h, x, g, y, b;
                                return (b = {}, (0, ce.Z)(b, te.LA.frequencyFilter, void 0 === (null === (n = e.frequencyFilter) || void 0 === n ? void 0 : n.rangeLeft) && void 0 === (null === (i = e.frequencyFilter) || void 0 === i ? void 0 : i.rangeRight)), (0, ce.Z)(b, te.LA.companyFilter, 0 === (null === (r = e.companyFilter) || void 0 === r ? void 0 : r.companySlugs.length)), (0, ce.Z)(b, te.LA.positionFilter, 0 === (null === (s = e.positionFilter) || void 0 === s ? void 0 : s.positionSlugs.length)), (0, ce.Z)(b, te.LA.statusFilter, 0 === (null === (l = e.statusFilter) || void 0 === l ? void 0 : l.questionStatuses.length)), (0, ce.Z)(b, te.LA.difficultyFilter, 0 === (null === (a = e.difficultyFilter) || void 0 === a ? void 0 : a.difficulties.length)), (0, ce.Z)(b, te.LA.topicFilter, 0 === (null === (o = e.topicFilter) || void 0 === o || null === (c = o.topicSlugs) || void 0 === c ? void 0 : c.length)), (0, ce.Z)(b, te.LA.languageFilter, 0 === (null === (u = e.languageFilter) || void 0 === u ? void 0 : u.languageSlugs.length)), (0, ce.Z)(b, te.LA.acceptanceFilter, void 0 === (null === (d = e.acceptanceFilter) || void 0 === d ? void 0 : d.rangeLeft) && void 0 === (null === (f = e.acceptanceFilter) || void 0 === f ? void 0 : f.rangeRight)), (0, ce.Z)(b, te.LA.lastSubmittedFilter, void 0 === (null === (v = e.lastSubmittedFilter) || void 0 === v ? void 0 : v.startFrom) && void 0 === (null === (m = e.lastSubmittedFilter) || void 0 === m ? void 0 : m.endAt) && void 0 === (null === (p = e.lastSubmittedFilter) || void 0 === p ? void 0 : p.pastDays)), (0, ce.Z)(b, te.LA.publishedFilter, void 0 === (null === (h = e.publishedFilter) || void 0 === h ? void 0 : h.startFrom) && void 0 === (null === (x = e.publishedFilter) || void 0 === x ? void 0 : x.endAt) && void 0 === (null === (g = e.publishedFilter) || void 0 === g ? void 0 : g.pastDays)), (0, ce.Z)(b, te.LA.premiumFilter, 0 === (null === (y = e.premiumFilter) || void 0 === y ? void 0 : y.premiumStatus.length)), b)[t]
                            }(h.filterValue, t)
                        })),
                        me = ve.length === h.showKeys.length,
                        pe = (0, le.W)({
                            filters: h.filterValue
                        }, t && B && h.isReady && !me).data,
                        he = me ? 0 : (null === pe || void 0 === pe ? void 0 : pe.problemsetQuestionListV2.totalLength) || 0,
                        xe = he.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                        ge = (0, a.useRef)(null),
                        ye = (0, a.useRef)(null);
                    return (0, a.useEffect)((function() {
                        t || (q(!1), h.reset())
                    }), [t]), (0, a.useEffect)((function() {
                        t && B && q(0 === h.showKeys.length)
                    }), [t, h.showKeys.length, B]), (0, a.useEffect)((function() {
                        t ? (H(!1), X(te.ZP), J(M.YSR.All), w.P.problemlistFilterRuleModuleExposure({
                            problemlist_filter_source: (0, ae.G)(e),
                            problemlist_filter_action: "" === Z ? "create" : "edit"
                        })) : d("")
                    }), [t]), (0, ue.r)((function() {
                        t && w.P.problemlistFilterModuleConditionClick({
                            problemlist_filter_source: (0, ae.G)(e),
                            problemlist_filter_string: JSON.stringify(h.filterValue),
                            problemlist_filter_action: "" === Z ? "create" : "edit"
                        })
                    }), [h.filterValue, t]), (0, a.useEffect)((function() {
                        if (!B && t)
                            if (s) H(!0);
                            else if (T)
                            if (Z) {
                                var e = function(e, t) {
                                        var n = JSON.parse(JSON.stringify(te.ZP)),
                                            i = M.YSR.All;
                                        try {
                                            var r, s, l, a, o, c, u, d, f, v, m, p, h, x, g, y, b, j, N, S, w, F, C, L, k, I, D, _, T, P, A, E, Z, O, V, R, Q = JSON.parse(e);
                                            n[te.Ts.topics].chooseTypeVal = (null === (r = Q.topicFilter) || void 0 === r ? void 0 : r.operator) || M.lno.Is, n[te.Ts.topics].multiSelectValues = (null === (s = Q.topicFilter) || void 0 === s ? void 0 : s.topicSlugs) || [], n[te.Ts.status].chooseTypeVal = (null === (l = Q.statusFilter) || void 0 === l ? void 0 : l.operator) || M.lno.Is, n[te.Ts.status].multiSelectValues = (null === (a = Q.statusFilter) || void 0 === a ? void 0 : a.questionStatuses) || [], n[te.Ts.companies].chooseTypeVal = (null === (o = Q.companyFilter) || void 0 === o ? void 0 : o.operator) || M.lno.Is, n[te.Ts.companies].multiSelectValues = (null === (c = Q.companyFilter) || void 0 === c ? void 0 : c.companySlugs) || [], n[te.Ts.premium].chooseTypeVal = (null === (u = Q.premiumFilter) || void 0 === u ? void 0 : u.operator) || M.lno.Is, n[te.Ts.premium].multiSelectValues = (null === (d = Q.premiumFilter) || void 0 === d ? void 0 : d.premiumStatus) || [], n[te.Ts.lang].chooseTypeVal = (null === (f = Q.languageFilter) || void 0 === f ? void 0 : f.operator) || M.lno.Is, n[te.Ts.lang].multiSelectValues = (null === (v = Q.languageFilter) || void 0 === v ? void 0 : v.languageSlugs) || [], n[te.Ts.position].chooseTypeVal = (null === (m = Q.positionFilter) || void 0 === m ? void 0 : m.operator) || M.lno.Is, n[te.Ts.position].multiSelectValues = (null === (p = Q.positionFilter) || void 0 === p ? void 0 : p.positionSlugs) || [], n[te.Ts.frequency].rangeLeft = (null === (h = Q.frequencyFilter) || void 0 === h ? void 0 : h.rangeLeft) ? null === (x = Q.frequencyFilter) || void 0 === x ? void 0 : x.rangeLeft : 0 === (null === (g = Q.frequencyFilter) || void 0 === g ? void 0 : g.rangeLeft) ? 0 : void 0, n[te.Ts.frequency].rangeRight = (null === (y = Q.frequencyFilter) || void 0 === y ? void 0 : y.rangeRight) ? null === (b = Q.frequencyFilter) || void 0 === b ? void 0 : b.rangeRight : 0 === (null === (j = Q.frequencyFilter) || void 0 === j ? void 0 : j.rangeRight) ? 0 : void 0, n[te.Ts.acceptance].rangeLeft = (null === (N = Q.acceptanceFilter) || void 0 === N ? void 0 : N.rangeLeft) ? null === (S = Q.acceptanceFilter) || void 0 === S ? void 0 : S.rangeLeft : 0 === (null === (w = Q.acceptanceFilter) || void 0 === w ? void 0 : w.rangeLeft) ? 0 : void 0, n[te.Ts.acceptance].rangeRight = (null === (F = Q.acceptanceFilter) || void 0 === F ? void 0 : F.rangeRight) ? null === (C = Q.acceptanceFilter) || void 0 === C ? void 0 : C.rangeRight : 0 === (null === (L = Q.acceptanceFilter) || void 0 === L ? void 0 : L.rangeRight) ? 0 : void 0, n[te.Ts.difficulty].chooseTypeVal = (null === (k = Q.difficultyFilter) || void 0 === k ? void 0 : k.operator) || M.lno.Is, n[te.Ts.difficulty].multiSelectValues = (null === (I = Q.difficultyFilter) || void 0 === I ? void 0 : I.difficulties) || [], n[te.Ts.lastSubmit].startFrom = (null === (D = Q.lastSubmittedFilter) || void 0 === D ? void 0 : D.startFrom) || void 0, n[te.Ts.lastSubmit].endAt = (null === (_ = Q.lastSubmittedFilter) || void 0 === _ ? void 0 : _.endAt) || void 0, n[te.Ts.lastSubmit].pastDays = (null === (T = Q.lastSubmittedFilter) || void 0 === T ? void 0 : T.pastDays) ? null === (P = Q.lastSubmittedFilter) || void 0 === P ? void 0 : P.pastDays : 0 === (null === (A = Q.lastSubmittedFilter) || void 0 === A ? void 0 : A.pastDays) ? 0 : void 0, n[te.Ts.published].startFrom = (null === (E = Q.publishedFilter) || void 0 === E ? void 0 : E.startFrom) || void 0, n[te.Ts.published].endAt = (null === (Z = Q.publishedFilter) || void 0 === Z ? void 0 : Z.endAt) || void 0, n[te.Ts.published].pastDays = (null === (O = Q.publishedFilter) || void 0 === O ? void 0 : O.pastDays) ? null === (V = Q.publishedFilter) || void 0 === V ? void 0 : V.pastDays : 0 === (null === (R = Q.publishedFilter) || void 0 === R ? void 0 : R.pastDays) ? 0 : void 0, i = Q.filterCombineType || M.YSR.All, Object.keys(te.Ts).forEach((function(e) {
                                                n[e].show = t.includes(e)
                                            }))
                                        } catch (q) {
                                            console.error(q)
                                        }
                                        return {
                                            dataMap: n,
                                            filterCombineType: i
                                        }
                                    }(Z, V),
                                    n = e.dataMap,
                                    i = e.filterCombineType;
                                X(n), J(i), H(!0)
                            } else H(!0)
                    }), [t, Z, B, T, s]), (0, i.jsx)(c.Vq, {
                        open: t,
                        onOpenChange: n,
                        children: (0, i.jsxs)(c.cZ, {
                            className: "sd-sm:max-w-[520px] flex min-h-[10px] max-w-[95vw] flex-col justify-between overflow-hidden",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, i.jsxs)(c.fK, {
                                    children: [(0, i.jsx)(c.$N, {
                                        children: p("editRule")
                                    }), (0, i.jsx)(c.Be, {
                                        children: p("editRuleDesc")
                                    })]
                                }), Q ? (0, i.jsx)("div", {
                                    className: "bg-sd-accent rounded-sd-lg mt-4 flex h-[140px] w-full items-center justify-center",
                                    children: (0, i.jsx)(oe.L, {
                                        dataMap: h.currentDataMap,
                                        setDataMap: X,
                                        filtersInfo: Z,
                                        clickCallback: function() {
                                            q(!1)
                                        },
                                        trigger: (0, i.jsxs)(u.z, {
                                            variant: "ghost",
                                            className: "bg-sd-accent hover:opacity-80",
                                            children: [(0, i.jsx)(g.e, {
                                                icon: x.r8p
                                            }), p("addRules")]
                                        })
                                    })
                                }) : (0, i.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, i.jsx)("div", {
                                        className: "bg-fill-quaternary mt-[18px] max-h-[calc(100vh-250px)] w-full overflow-y-auto rounded p-2",
                                        ref: ge,
                                        children: B && (0, i.jsx)(ee.B, {
                                            ref: ye,
                                            initDataMap: G,
                                            initFilterCombineType: Y,
                                            useQueryString: !1,
                                            onChange: h.onChange,
                                            filtersInfo: Z
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "text-sd-purple-500 mt-[24px] flex items-center gap-1 text-base",
                                        children: [(0, i.jsx)(g.e, {
                                            icon: x.BDt
                                        }), (0, i.jsx)("div", {
                                            className: "text-sm",
                                            children: p(he > 1 ? "updateRuleQuestionsTip" : "updateRuleQuestionTip", {
                                                count: xe
                                            })
                                        })]
                                    }), de && (0, i.jsx)("div", {
                                        className: "absolute left-0 top-0 h-full w-full bg-opacity-100"
                                    })]
                                })]
                            }), (0, i.jsxs)(c.cN, {
                                className: "sd-sm:space-x-0 gap-2",
                                children: [(0, i.jsx)(u.z, {
                                    variant: "secondary",
                                    onClick: function() {
                                        n(!1)
                                    },
                                    children: p("cancel")
                                }), (0, i.jsxs)(u.z, {
                                    isLoading: de,
                                    disabled: !h.showKeys.length || me,
                                    onClick: (0, r.Z)((function() {
                                        var e, t, i, r, s, a;
                                        return (0, l.__generator)(this, (function(l) {
                                            switch (l.label) {
                                                case 0:
                                                    if (!(ve.length > 0)) return [3, 1];
                                                    for (t = JSON.parse(JSON.stringify(h.currentDataMap)), i = 0; i < te.yX.length; i++) r = te.yX[i], t[r].showEmptyError = ve.includes(r);
                                                    return null === (e = ye.current) || void 0 === e || e.setDataMap(t), setTimeout((function() {
                                                        var e, t, n;
                                                        null === (t = null === (e = ge.current) || void 0 === e ? void 0 : e.querySelectorAll(".filter-empty-dom")) || void 0 === t || null === (n = t[0]) || void 0 === n || n.scrollIntoView({
                                                            block: "nearest",
                                                            behavior: "smooth"
                                                        })
                                                    }), 100), [3, 5];
                                                case 1:
                                                    return fe(!0), [4, m({
                                                        favoriteSlug: v,
                                                        filters: h.filterValue,
                                                        visibleFilters: h.showKeys
                                                    })];
                                                case 2:
                                                    return a = l.sent(), (null === (s = a.updateSmartListQuestions) || void 0 === s ? void 0 : s.ok) ? [4, Promise.all([y(v), b(v), j(v), N(v)])] : [3, 4];
                                                case 3:
                                                    l.sent(), fe(!1), n(!1), l.label = 4;
                                                case 4:
                                                    w.P.problemlistSmartlistRuleSettingSaveClick({
                                                        problemlist_filter_string: JSON.stringify(h.filterValue)
                                                    }), l.label = 5;
                                                case 5:
                                                    return [2]
                                            }
                                        }))
                                    })),
                                    className: "!bg-sd-purple-500 text-sd-fixed-white gap-2 transition-all hover:opacity-80",
                                    children: [(0, i.jsx)(g.e, {
                                        icon: x.A47,
                                        variant: "14px"
                                    }), p("save")]
                                })]
                            })]
                        })
                    })
                },
                fe = function() {
                    var e, t, n = (0, F.n)((function(e) {
                            return e.isGenerateSmartListDialogOpen
                        })),
                        s = (0, F.n)((function(e) {
                            return e.setIsGenerateSmartListDialogOpen
                        })),
                        d = (0, F.n)((function(e) {
                            return e.setIsEditSmartListRuleDialogOpen
                        })),
                        f = (0, F.n)((function(e) {
                            return e.setCurrentFavoriteSlug
                        })),
                        v = (0, O.pm)().toast,
                        m = (0, o.$G)("problemlist", {
                            keyPrefix: "description.operations"
                        }).t,
                        p = (0, a.useState)(""),
                        h = p[0],
                        x = p[1],
                        g = (0, a.useState)(""),
                        b = g[0],
                        j = g[1],
                        N = (0, q.j)().mutateAsync,
                        S = (0, E.useRouter)(),
                        w = (0, z.F)().refetchMyFavoriteList;
                    return (0, a.useEffect)((function() {
                        n && (x(""), j(""))
                    }), [n]), (0, i.jsx)(c.Vq, {
                        open: n,
                        onOpenChange: s,
                        children: (0, i.jsxs)(c.cZ, {
                            className: "sd-sm:max-w-[450px] max-w-[95vw]",
                            children: [(0, i.jsx)(c.fK, {
                                children: (0, i.jsx)(c.$N, {
                                    children: m("genSmartList")
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col gap-6",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [(0, i.jsx)(V._, {
                                        htmlFor: "smart-list-title",
                                        children: m("title")
                                    }), (0, i.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, i.jsx)(y.I, {
                                            autoFocus: !0,
                                            className: "w-full pr-[60px]",
                                            id: "smart-list-title",
                                            placeholder: m("titlePlaceholder"),
                                            maxLength: 30,
                                            value: h,
                                            onChange: function(e) {
                                                return x(e.target.value)
                                            }
                                        }), (0, i.jsxs)("div", {
                                            className: "text-sd-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 text-sm",
                                            children: [null !== (e = null === h || void 0 === h ? void 0 : h.length) && void 0 !== e ? e : 0, "/30"]
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [(0, i.jsx)(V._, {
                                        htmlFor: "smart-list-info",
                                        children: m("description")
                                    }), (0, i.jsx)(R.g, {
                                        className: "resize-none",
                                        rows: 3,
                                        placeholder: m("descriptionPlaceholder"),
                                        id: "smart-list-info",
                                        maxLength: 150,
                                        value: b,
                                        onChange: function(e) {
                                            return j(e.target.value)
                                        }
                                    }), (0, i.jsxs)("div", {
                                        className: "text-sd-muted-foreground flex w-full justify-end text-sm",
                                        children: [null !== (t = null === b || void 0 === b ? void 0 : b.length) && void 0 !== t ? t : 0, "/150"]
                                    })]
                                })]
                            }), (0, i.jsxs)(c.cN, {
                                className: "sd-sm:space-x-0 gap-2",
                                children: [(0, i.jsx)(u.z, {
                                    variant: "secondary",
                                    onClick: function() {
                                        s(!1)
                                    },
                                    children: m("cancel")
                                }), (0, i.jsx)(u.z, {
                                    disabled: !h.trim(),
                                    isLoading: !1,
                                    onClick: (0, r.Z)((function() {
                                        var e, t, n;
                                        return (0, l.__generator)(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, N({
                                                        name: h.trim(),
                                                        description: b.trim(),
                                                        favoriteType: M.cPe.SmartList,
                                                        isPublicFavorite: !1
                                                    })];
                                                case 1:
                                                    return t = i.sent(), (n = null === (e = t.createEmptyFavorite) || void 0 === e ? void 0 : e.favoriteSlug) ? [4, w()] : [3, 3];
                                                case 2:
                                                    i.sent(), S.replace(Z.Hb.problemList(n)), v({
                                                        variant: "success",
                                                        description: "".concat(h.trim(), " ").concat(m("created"), "!"),
                                                        duration: 2e3
                                                    }), s(!1), f(n), d(!0), i.label = 3;
                                                case 3:
                                                    return [2]
                                            }
                                        }))
                                    })),
                                    children: m("create")
                                })]
                            })]
                        })
                    })
                },
                ve = function() {
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(B, {}), (0, i.jsx)(A, {}), (0, i.jsx)(fe, {}), (0, i.jsx)(de, {}), (0, i.jsx)(W, {}), (0, i.jsx)(X, {})]
                    })
                }
        },
        97516: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return _
                }
            });
            var i = n(26042),
                r = n(69396),
                s = n(99534),
                l = n(85893),
                a = n(67294),
                o = n(2740),
                c = n(12922),
                u = n(56770),
                d = n(15371),
                f = n(94184),
                v = n.n(f),
                m = n(19906),
                p = n(41664),
                h = n.n(p),
                x = function(e) {
                    var t = e.href,
                        n = e.children,
                        i = e.className;
                    return (0, l.jsx)(h(), {
                        href: t,
                        passHref: !0,
                        children: (0, l.jsx)("a", {
                            className: v()(i || "hover:text-dark-label-1 inline-block leading-[14px]"),
                            children: n
                        })
                    })
                },
                g = function(e) {
                    var t = e.className,
                        n = new Date,
                        i = v()(d.Cj.label1Hover, "leading-none inline whitespace-nowrap my-2 md:my-0 border-r border-dark-label-3 last:border-none pr-3 mr-3");
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("footer", {
                            className: v()("border-gray-4 bg-paper dark:bg-dark-layer-bg mx-4 mt-[50px] border-t p-5 dark:mx-0 dark:border-none md:mt-24", d.Cj.label2, t),
                            children: (0, l.jsx)("nav", {
                                role: "navigation",
                                className: v()("w-full"),
                                children: (0, l.jsx)("div", {
                                    className: v()("m-auto max-w-6xl"),
                                    children: (0, l.jsxs)("div", {
                                        className: v()("text-xs md:flex md:text-sm"),
                                        children: [(0, l.jsxs)("div", {
                                            className: v()(d.Cj.label3, " mb-2 mr-5 md:mb-0"),
                                            children: ["Copyright \xa9 ", n.getFullYear(), " LeetCode"]
                                        }), (0, l.jsxs)("div", {
                                            className: v()("mb-2 flex flex-wrap items-center md:mb-0"),
                                            children: [(0, l.jsx)(x, {
                                                className: i,
                                                href: "/support",
                                                children: "Help Center"
                                            }), (0, l.jsx)(x, {
                                                className: i,
                                                href: "/jobs",
                                                children: "Jobs"
                                            }), (0, l.jsx)(x, {
                                                className: i,
                                                href: "/bugbounty",
                                                children: "Bug Bounty"
                                            }), (0, l.jsx)(x, {
                                                className: i,
                                                href: "/interview",
                                                children: "Assessment"
                                            }), (0, l.jsx)(x, {
                                                className: i,
                                                href: "/student",
                                                children: "Students"
                                            }), (0, l.jsx)(x, {
                                                className: i,
                                                href: "/terms",
                                                children: "Terms"
                                            }), (0, l.jsx)(x, {
                                                className: i,
                                                href: "/privacy",
                                                children: "Privacy Policy"
                                            })]
                                        }), (0, l.jsxs)(x, {
                                            className: v()(d.Cj.label1Hover, "flex grow items-center space-x-2 justify-self-end md:justify-end"),
                                            href: "/region",
                                            children: [(0, l.jsx)(m.y, {
                                                src: "/_next/static/images/us-4787d154ddfcd171038dd5c1c98f7f07.svg",
                                                height: 18,
                                                width: 18,
                                                alt: "United States"
                                            }), (0, l.jsx)("span", {
                                                children: "United States"
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                y = n(19635),
                b = n(8321),
                j = n(73935),
                N = /\<script[\s\S]+?script\>/g,
                S = n(68708),
                w = n(385),
                F = n(66188),
                C = n(14995),
                L = n(10088),
                k = function(e) {
                    var t = e.content,
                        n = e.setHidden,
                        i = function(e) {
                            var t, n = (0, a.useState)(null),
                                i = n[0],
                                r = n[1],
                                s = e.replace(N, ""),
                                l = null === (t = e.match(N)) || void 0 === t ? void 0 : t[0];
                            return (0, a.useEffect)((function() {
                                if (l && i) {
                                    var e = document.createRange().createContextualFragment(l);
                                    return i.append(e),
                                        function() {
                                            i.innerHTML = ""
                                        }
                                }
                            }), [l, i]), {
                                html: s,
                                scriptFragmentRef: r
                            }
                        }(t),
                        r = i.html,
                        s = i.scriptFragmentRef,
                        o = (0, a.useState)(!1),
                        u = o[0],
                        d = o[1];
                    return (0, a.useEffect)((function() {
                        return d(!0)
                    }), []), u ? (0, l.jsxs)("div", {
                        className: (0, c.yI)("relative", L.l),
                        children: [(0, l.jsx)("div", {
                            ref: s
                        }), (0, l.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: r
                            }
                        }), (0, l.jsx)("div", {
                            className: "pointer-events-none absolute left-0 top-0 flex h-full w-full justify-center px-5",
                            children: (0, l.jsx)("div", {
                                className: "pointer-events-none flex h-full w-full max-w-6xl items-center justify-end",
                                children: (0, l.jsx)("button", {
                                    onClick: n,
                                    className: "pointer-events-auto cursor-pointer rounded transition-all",
                                    children: (0, l.jsx)(w.F, {
                                        className: "mr-1 h-3.5 w-3.5 text-white opacity-40"
                                    })
                                })
                            })
                        })]
                    }) : null
                },
                I = function(e) {
                    var t = e.content,
                        n = (0, a.useState)(0),
                        i = n[0],
                        r = n[1],
                        s = (0, a.useState)(),
                        o = s[0],
                        c = s[1];
                    return (0, a.useEffect)((function() {
                        i > 10 || !(0, S.jU)() || document.getElementsByClassName(C.l)[0] || setTimeout((function() {
                            return r(i + 1)
                        }), 100)
                    }), [i]), (0, a.useLayoutEffect)((function() {
                        var e = document.getElementsByClassName(C.l)[0];
                        !o && e && c(e)
                    }), [t]), o ? (0, j.createPortal)((0, l.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: t
                        },
                        style: {
                            marginTop: "4px"
                        }
                    }), o) : null
                },
                D = function() {
                    var e = (0, F.y)(),
                        t = e.announcements,
                        n = e.navbarItems,
                        i = (0, a.useState)(!1),
                        r = i[0],
                        s = i[1];
                    return (0, a.useEffect)((function() {
                        (0, S.jU)() && s(!0)
                    }), []), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: (0, c.yI)("z-nav flex w-full flex-col"),
                            children: t.map((function(e, t) {
                                var n = e.content,
                                    i = e.setHidden;
                                return (0, l.jsx)(k, {
                                    content: n,
                                    setHidden: i
                                }, t)
                            }))
                        }), (0, l.jsx)(l.Fragment, {
                            children: r ? n.map((function(e, t) {
                                return (0, l.jsx)(I, {
                                    content: e
                                }, "navbarItem-" + t)
                            })) : null
                        })]
                    })
                },
                _ = a.forwardRef((function(e, t) {
                    var n = e.hideHeaderFooter,
                        a = e.hideFooter,
                        f = e.rootClassName,
                        v = e.utmSource,
                        m = e.children,
                        p = e.className,
                        h = e.footerClassName,
                        x = e.sourceType,
                        j = e.pageReference,
                        N = e.isFluid,
                        S = e.navClassName,
                        w = (0, s.Z)(e, ["hideHeaderFooter", "hideFooter", "rootClassName", "utmSource", "children", "className", "footerClassName", "sourceType", "pageReference", "isFluid", "navClassName"]);
                    return (0, l.jsxs)("div", {
                        className: (0, c.yI)("flex min-h-screen min-w-[360px] flex-col", d.Cj.label1, f),
                        children: [(0, l.jsx)(o.h, {
                            children: (0, l.jsx)(y.$, {})
                        }), (0, l.jsx)(b.i, {}), !n && (0, l.jsx)(u.l, {
                            sourceInfo: x ? {
                                sourceType: x
                            } : void 0,
                            pageReference: j,
                            isFluid: N,
                            className: S
                        }), (0, l.jsx)(D, {}), (0, l.jsx)("div", (0, r.Z)((0, i.Z)({
                            ref: t
                        }, w), {
                            className: (0, c.yI)("mx-auto w-full grow p-4 md:max-w-[888px] md:p-6 lg:max-w-screen-xl", p),
                            children: m
                        })), !n && !a && (0, l.jsx)(g, {
                            utmSource: v,
                            className: h
                        })]
                    })
                }))
        },
        607: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return E
                }
            });
            var i = n(26042),
                r = n(69396),
                s = n(85893),
                l = n(67294),
                a = n(46991),
                o = n(10253),
                c = n(29815),
                u = n(11163),
                d = n(11321),
                f = n(68779),
                v = n(12922),
                m = n(85110),
                p = n(83269),
                h = n(70341),
                x = n(134),
                g = n(68191),
                y = n(66247),
                b = n(18637),
                j = n(82521),
                N = n(50438),
                S = n(47403),
                w = n(7830),
                F = n(28025),
                C = n(36843),
                L = n(36055),
                k = n(2767),
                I = n(24026),
                D = n(75696),
                _ = function(e) {
                    var t = e.sidebarWidth,
                        n = e.setSidebarWidth,
                        i = (0, D.n)((function(e) {
                            return e.isSidebarOpen
                        })),
                        r = (0, D.n)((function(e) {
                            return e.setIsSidebarOpen
                        })),
                        a = (0, D.n)((function(e) {
                            return e.setIsCloseByDrageer
                        })),
                        o = (0, l.useState)(!1),
                        c = o[0],
                        u = o[1],
                        d = (0, l.useRef)(null);
                    return (0, b.d)().isMobile ? null : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: (0, v.yI)("hover:bg-dark-lc-support-info active:bg-dark-lc-support-info z-base-3 absolute right-0 top-0 h-full transition-all", i ? "w-[4px] !cursor-ew-resize" : "w-[0px]", c ? "!cursor-ew-resize" : "cursor-default"),
                            draggable: !0,
                            onDragStart: function(e) {
                                e.dataTransfer.setDragImage(d.current, 0, 0), e.dataTransfer.effectAllowed = "none", u(!0)
                            },
                            onDrag: function(e) {
                                if (c && e.clientX) {
                                    var s = e.clientX + 4;
                                    s >= 240 ? s = 240 : i ? s <= 160 && (s <= 60 && (r(!1), a(!0)), s = 160) : s > 60 && r(!0), s !== t && n(s)
                                }
                            },
                            onDragEnd: function() {
                                u(!1)
                            }
                        }), (0, s.jsx)("img", {
                            alt: "",
                            className: "opacity-0",
                            ref: d,
                            src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        })]
                    })
                },
                T = function() {
                    var e = (0, d.$G)("problemlist", {
                            keyPrefix: "nav-panel"
                        }).t,
                        t = (0, u.useRouter)(),
                        n = t.query,
                        i = t.replace,
                        r = (0, D.n)((function(e) {
                            return e.isSidebarOpen
                        })),
                        a = (0, D.n)((function(e) {
                            return e.setIsSidebarOpen
                        })),
                        T = (0, D.n)((function(e) {
                            return e.isCloseByDrageer
                        })),
                        P = (0, D.n)((function(e) {
                            return e.setIsCloseByDrageer
                        })),
                        A = (0, m.v)().data,
                        E = null !== A && void 0 !== A ? A : {},
                        Z = E.myCollectedFavoriteList,
                        O = E.myCreatedFavoriteList,
                        V = (0, g.v)().pagePath,
                        R = (0, o.Z)((0, y._)(p.lv, !0), 2),
                        Q = R[0],
                        q = R[1],
                        M = (0, o.Z)((0, y._)(p.ZR, 240), 2),
                        z = M[0],
                        B = M[1],
                        H = (0, b.d)().isMobile,
                        K = function() {
                            var e = (0, j.E)(),
                                t = (0, l.useState)({
                                    x: e ? window.scrollX : 0,
                                    y: e ? window.scrollY : 0
                                }),
                                n = t[0],
                                i = t[1];
                            return (0, l.useEffect)((function() {
                                e && i({
                                    x: window.scrollX,
                                    y: window.scrollY
                                })
                            }), [e]), (0, l.useEffect)((function() {
                                var e = function() {
                                    i({
                                        x: window.scrollX,
                                        y: window.scrollY
                                    })
                                };
                                return window.addEventListener("scroll", e),
                                    function() {
                                        window.removeEventListener("scroll", e)
                                    }
                            }), []), n
                        }(),
                        G = K.y;
                    return (0, l.useEffect)((function() {
                        r && B(240)
                    }), [r]), (0, l.useEffect)((function() {
                        H ? r && (a(!1), P(!1)) : T || a(!0)
                    }), [H, T]), (0, l.useEffect)((function() {
                        var e = localStorage.getItem(p.ZR);
                        B(e ? Number(e) : 240)
                    }), []), (0, l.useEffect)((function() {
                        n.slug && N.P.problemlistListsExposure()
                    }), []), (0, l.useEffect)((function() {
                        if ("company" === V || "problem-list" === V) {
                            var e = (0, c.Z)(null !== O && void 0 !== O ? O : []).concat((0, c.Z)(null !== Z && void 0 !== Z ? Z : []));
                            if (!e || 0 === e.length) return;
                            if (!(n.slug ? n.slug[0] : "")) return void i(h.Hb.problemList(e[0].slug), "", {
                                shallow: !0
                            })
                        }
                    }), [n, Z, O, i, V]), (0, s.jsxs)(s.Fragment, {
                        children: [r && (0, s.jsx)("div", {
                            className: (0, v.yI)("z-base-2 lc-dsw-xl:block lc-dsw-xl:w-0 lc-dsw-xl:opacity-0 fixed left-0 top-0 h-screen w-screen overflow-y-auto bg-[#ffffff99] opacity-100 backdrop-blur-sm dark:bg-[#00000099]"),
                            onClick: function() {
                                return a(!r)
                            }
                        }), (0, s.jsx)("div", {
                            className: (0, v.yI)("z-base-3 border-sd-border bg-sd-popover left-0 top-0 h-screen overflow-y-scroll", r && "border-r", H ? "fixed" : "sticky"),
                            children: (0, s.jsxs)("div", {
                                className: "relative h-max min-h-screen",
                                children: [H && (0, s.jsx)("div", {
                                    style: {
                                        height: G < 50 ? 50 - G : 0
                                    }
                                }), (0, s.jsxs)("div", {
                                    style: {
                                        width: r ? z : 0
                                    },
                                    className: (0, v.yI)("flex flex-col gap-1 overflow-x-hidden p-4 pt-6 transition-all", r ? "px-4" : "px-0"),
                                    children: [(0, s.jsx)("div", {
                                        className: "hidden",
                                        onClick: function() {
                                            B(z)
                                        },
                                        children: z
                                    }), (0, s.jsx)(L.A, {}), (0, s.jsx)(k.Q, {}), (0, s.jsx)(S.i, {
                                        className: "mt-5"
                                    }), (0, s.jsxs)("div", {
                                        className: "group flex h-[36px] cursor-pointer items-center justify-between pl-2",
                                        onClick: function(e) {
                                            e.preventDefault(), e.stopPropagation(), q(!Q)
                                        },
                                        children: [(0, s.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, s.jsx)("div", {
                                                className: "text-sd-muted-foreground select-none font-semibold",
                                                children: e("myList")
                                            }), (0, s.jsx)("div", {
                                                className: "absolute -left-[13px] top-[2px] opacity-0 transition-all group-hover:opacity-100",
                                                children: (0, s.jsx)(x.e, {
                                                    className: "text-sd-muted-foreground w-[9px] text-[10px] font-extrabold",
                                                    icon: Q ? f.gc2 : f.yOZ
                                                })
                                            })]
                                        }), (0, s.jsx)(C.B, {})]
                                    }), (0, s.jsx)(F.o, {
                                        showList: Q
                                    }), (null === A || void 0 === A ? void 0 : A.myCollectedFavoriteList) && (null === A || void 0 === A ? void 0 : A.myCollectedFavoriteList.length) > 0 && (0, s.jsx)(S.i, {
                                        className: "my-1"
                                    }), (0, s.jsx)(w.x, {})]
                                }), (0, s.jsx)(_, {
                                    sidebarWidth: z,
                                    setSidebarWidth: B
                                })]
                            })
                        }), (0, s.jsx)(I.W, {})]
                    })
                },
                P = n(68585),
                A = n(97516),
                E = (0, l.forwardRef)((function(e, t) {
                    var n = e.containerClassName,
                        l = e.hideTriggerButton,
                        o = e.hideNavPanelInMobile,
                        c = (0, D.n)((function(e) {
                            return e.isSidebarOpen
                        })),
                        u = (0, b.d)().isMobile && o;
                    return (0, s.jsx)(A.A, (0, r.Z)((0, i.Z)({
                        pageReference: a.g.QuestionList,
                        isFluid: !0,
                        hideFooter: !0,
                        ref: t
                    }, e), {
                        className: (0, v.yI)("dark:bg-dark-layer-bg lc-dsw-xl:max-w-none flex bg-white p-0 md:max-w-none md:p-0", e.className),
                        children: (0, s.jsxs)("div", {
                            className: (0, v.yI)("flex w-screen flex-1", n),
                            children: [!u && (0, s.jsx)(T, {}), !c && !l && (0, s.jsx)("div", {
                                className: "z-base-4 lc-dsw-xl:left-6 fixed left-4 top-16",
                                children: (0, s.jsx)(P.w, {})
                            }), e.children]
                        })
                    }))
                }))
        },
        11095: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return f
                }
            });
            var i = n(14924),
                r = n(85893),
                s = n(84539),
                l = n(67294),
                a = n(11163),
                o = n.n(a),
                c = n(12922),
                u = n(15371),
                d = n(385);

            function f(e) {
                var t = e.visible,
                    n = e.onCancel,
                    a = e.title,
                    f = e.children,
                    v = e.afterClose,
                    m = e.className,
                    p = e.modalClassName,
                    h = e.closeIconClassName,
                    x = e.closeBtnClassName,
                    g = e.titleRowClass,
                    y = e.titleClassName,
                    b = e.maskClassName,
                    j = e.closable,
                    N = void 0 === j || j,
                    S = e.showCloseIcon,
                    w = void 0 === S || S,
                    F = e.maskClosable,
                    C = void 0 !== F && F,
                    L = e.stopMouseDownPropagation,
                    k = e.shouldCloseOnEsc,
                    I = void 0 === k || k,
                    D = e.renderPrefixChildren,
                    _ = e.noShadow,
                    T = void 0 !== _ && _,
                    P = e.beforeHistoryChangeEnable,
                    A = void 0 === P || P,
                    E = e.customRef,
                    Z = e.customTransition,
                    O = void 0 === Z ? {} : Z,
                    V = e.customStyle,
                    R = e.beforeLeave,
                    Q = e.isOutsideScrollable,
                    q = void 0 === Q || Q;
                (0, l.useEffect)((function() {
                    return o().events.on("beforeHistoryChange", (function() {
                            A && n()
                        })),
                        function() {
                            return o().events.off("beforeHistoryChange", (function() {
                                return A && n()
                            }))
                        }
                }), [A, n]), (0, l.useEffect)((function() {
                    if (I) {
                        var e = function(e) {
                            "Escape" === e.key && n()
                        };
                        return window.addEventListener("keyup", e),
                            function() {
                                return window.removeEventListener("keyup", e)
                            }
                    }
                }), [n, I]), (0, l.useEffect)((function() {
                    return document.body.style.overflow = !q && t ? "hidden" : "",
                        function() {
                            document.body.style.overflow = ""
                        }
                }), [q, t]);
                var M = (0, l.useCallback)((function(e) {
                    return e.stopPropagation()
                }), []);
                return (0, r.jsx)(s.u, {
                    appear: !0,
                    show: t,
                    afterLeave: v,
                    children: (0, r.jsx)("div", {
                        "aria-modal": "true",
                        role: "dialog",
                        className: (0, c.yI)("z-modal fixed inset-0 overflow-y-auto", p),
                        onMouseDown: null !== L && void 0 !== L ? L : M,
                        children: (0, r.jsxs)("div", {
                            className: "flex min-h-screen items-center justify-center px-4",
                            children: [(0, r.jsx)(s.u.Child, {
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, r.jsx)("div", {
                                    "aria-hidden": "true",
                                    onClick: C ? n : void 0,
                                    className: (0, c.yI)("bg-gray-8 fixed inset-0 opacity-60", b)
                                })
                            }), null === D || void 0 === D ? void 0 : D.map((function(e, t) {
                                return e ? (0, r.jsx)(s.u.Child, {
                                    as: l.Fragment,
                                    enter: (0, c.yI)("ease-out duration-300", O.enter),
                                    enterFrom: (0, c.yI)("opacity-0 scale-95", O.enterFrom),
                                    enterTo: (0, c.yI)("opacity-100 scale-100", O.enterTo),
                                    leave: (0, c.yI)("ease-in duration-200", O.leave),
                                    leaveFrom: (0, c.yI)("opacity-100 scale-100", O.leaveFrom),
                                    leaveTo: (0, c.yI)("opacity-0 scale-95", O.leaveTo),
                                    children: e
                                }, "prefix-child-".concat(t)) : null
                            })), (0, r.jsx)(s.u.Child, {
                                as: l.Fragment,
                                enter: (0, c.yI)("ease-out duration-300", O.enter),
                                enterFrom: (0, c.yI)("opacity-0 scale-95", O.enterFrom),
                                enterTo: (0, c.yI)("opacity-100 scale-100", O.enterTo),
                                leave: (0, c.yI)("ease-in duration-200", O.leave),
                                leaveFrom: (0, c.yI)("opacity-100 scale-100", O.leaveFrom),
                                leaveTo: (0, c.yI)("opacity-0 scale-95", O.leaveTo),
                                beforeLeave: R,
                                children: (0, r.jsxs)("div", {
                                    className: (0, c.yI)("my-8 inline-block min-w-full transform overflow-hidden rounded-[13px] p-5 text-left transition-all", u.Cj.bgOverlay3, (0, i.Z)({
                                        "md:min-w-[420px]": !(null === m || void 0 === m ? void 0 : m.includes("md:min-w-"))
                                    }, u.eq.modal, !T), m),
                                    ref: E,
                                    style: V,
                                    children: [a ? (0, r.jsxs)("div", {
                                        className: (0, c.yI)("flex items-center justify-between", g),
                                        children: [(0, r.jsx)("h3", {
                                            className: (0, c.yI)("text-lg font-medium", y),
                                            children: a
                                        }), N && w && (0, r.jsx)("button", {
                                            onClick: n,
                                            className: (0, c.yI)("cursor-pointer rounded transition-all", u.Cj.fill3Hover, x),
                                            children: (0, r.jsx)(d.F, {
                                                className: (0, c.yI)("text-gray-6 dark:text-dark-gray-6 h-6 w-6", h)
                                            })
                                        })]
                                    }) : (0, r.jsx)(r.Fragment, {
                                        children: N && (0, r.jsx)("button", {
                                            onClick: n,
                                            className: (0, c.yI)("cursor-pointer rounded transition-all", "z-modal absolute right-0 top-0 m-5", x),
                                            children: (0, r.jsx)(d.F, {
                                                className: (0, c.yI)("text-gray-6 dark:text-dark-gray-6 h-6 w-6", h)
                                            })
                                        })
                                    }), f]
                                })
                            })]
                        })
                    })
                })
            }
        },
        82521: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return r
                }
            });
            var i = n(67294),
                r = function() {
                    var e = (0, i.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return (0, i.useEffect)((function() {
                        return n(true)
                    }), [true]), t
                }
        },
        18637: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return s
                }
            });
            var i = n(67294),
                r = n(72058),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1100,
                        t = (0, i.useState)(!1),
                        n = t[0],
                        s = t[1],
                        l = (0, r.i)().width;
                    return (0, i.useEffect)((function() {
                        s(Boolean(l && l < e))
                    }), [l, e]), {
                        isMobile: n
                    }
                }
        },
        68191: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return r
                }
            });
            var i = n(11163),
                r = function() {
                    var e, t;
                    return {
                        pagePath: null !== (t = null === (e = (0, i.useRouter)().pathname.split("/")) || void 0 === e ? void 0 : e[1]) && void 0 !== t ? t : ""
                    }
                }
        },
        67575: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return c
                }
            });
            var i = n(67294),
                r = n(19579);
            var s = n(24193),
                l = n.n(s),
                a = n(80983);

            function o(e) {
                e && r.y.error(e)
            }

            function c(e) {
                var t = (0, i.useRef)(0);
                return [(0, i.useCallback)((function(n) {
                    return window.navigator.onLine ? function(e, t) {
                        return "number" !== typeof t || e.size <= t
                    }(n, e.maxFileSize) ? function(e, t) {
                        if (t) {
                            var n = e.type || (0, a.lookup)(e.name);
                            return !!n && t.some((function(e) {
                                return l()(n, e)
                            }))
                        }
                        return !0
                    }(n, e.accepts) ? !(t.current >= e.maxFileCount) || (o(e.maxFileCountErrorMsg), !1) : (o(e.acceptsErrorMsg), !1) : (o(e.maxFileSizeErrorMsg), !1) : (o(e.networkErrorMsg), !1)
                }), [e, t]), (0, i.useCallback)((function(n) {
                    var i = t.current + n;
                    return i <= e.maxFileCount && i >= 0 && (t.current = i, !0)
                }), [e.maxFileCount])]
            }
        },
        31386: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return s
                }
            });
            var i = n(8183),
                r = n(23025),
                s = {
                    navSidebarLibraryClick: function() {
                        var e = {
                            key: "nav_sidebar_library_click",
                            data: {}
                        };
                        i.V[r.X.GIO](e), i.V[r.X.GA4](e), i.V[r.X.CONSOLE](e), i.V[r.X.SELF_DB](e)
                    },
                    navSidebarStudyplanClick: function() {
                        var e = {
                            key: "nav_sidebar_studyplan_click",
                            data: {}
                        };
                        i.V[r.X.GIO](e), i.V[r.X.GA4](e), i.V[r.X.CONSOLE](e), i.V[r.X.SELF_DB](e)
                    },
                    navSidebarCreateNormalListClick: function() {
                        var e = {
                            key: "nav_sidebar_create_normal_list_click",
                            data: {}
                        };
                        i.V[r.X.GIO](e), i.V[r.X.GA4](e), i.V[r.X.CONSOLE](e), i.V[r.X.SELF_DB](e)
                    },
                    navSidebarCreateSmartListClick: function() {
                        var e = {
                            key: "nav_sidebar_create_smart_list_click",
                            data: {}
                        };
                        i.V[r.X.GIO](e), i.V[r.X.GA4](e), i.V[r.X.CONSOLE](e), i.V[r.X.SELF_DB](e)
                    }
                }
        }
    }
]);