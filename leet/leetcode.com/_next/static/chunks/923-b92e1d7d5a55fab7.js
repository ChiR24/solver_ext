"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [923], {
        67331: function(e, t, r) {
            r.d(t, {
                S: function() {
                    return i
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(85893),
                i = r(67294).forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, s.Z)((0, n.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M13 11h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 112 0v7z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        9337: function(e, t, r) {
            r.d(t, {
                j: function() {
                    return i
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(85893),
                i = r(67294).forwardRef((function(e, t) {
                    return (0, a.jsx)("svg", (0, s.Z)((0, n.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: t
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        2730: function(e, t, r) {
            r.d(t, {
                m: function() {
                    return a
                }
            });
            var n = r(63808),
                s = r(88525),
                a = function() {
                    return (0, s.tYF)(n.f6)
                }
        },
        71328: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return a
                }
            });
            var n = r(63808),
                s = r(88525),
                a = function() {
                    return (0, s.E9F)(n.f6)
                }
        },
        82135: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return Q
                },
                k: function() {
                    return R
                }
            });
            var n = r(47568),
                s = r(70655),
                a = r(85893),
                i = r(67294),
                o = r(68779),
                l = r(11321),
                u = r(85945),
                c = r(12922),
                d = r(70341),
                f = r(80978),
                m = r(63808),
                p = r(88525),
                v = function() {
                    return (0, p.YKf)(m.f6)
                },
                h = r(71328),
                x = r(58420),
                y = r(30366),
                g = r(134),
                b = r(62758),
                N = r(83210),
                j = r(62018),
                w = r(44765),
                T = r(54464),
                S = r(15371),
                Z = r(50438),
                C = r(23874),
                L = r(14924),
                P = r(83269),
                F = r(67331),
                I = r(19579),
                A = r(25082),
                k = function() {
                    return (0, p.C9Q)(m.f6)
                },
                V = function(e) {
                    var t, r = e.questionSlug,
                        m = e.refreshList,
                        p = e.fromPage,
                        v = (0, l.$G)("description").t,
                        h = (0, i.useState)(!1),
                        b = h[0],
                        j = h[1],
                        w = (0, i.useRef)(null),
                        T = (0, i.useState)(!1),
                        C = T[0],
                        V = T[1],
                        _ = (0, i.useState)(""),
                        Q = _[0],
                        q = _[1],
                        D = (0, i.useState)(!1),
                        z = D[0],
                        E = D[1],
                        O = k().mutateAsync,
                        H = (0, x.pm)().toast,
                        K = (0, i.useContext)(R),
                        U = K.triggerListChange,
                        $ = K.onAfterAddedChange,
                        Y = (0, i.useCallback)((function(e) {
                            q(e.target.value.trim())
                        }), [q]),
                        B = (0, i.useCallback)((function() {
                            j(!0)
                        }), [j]),
                        G = (0, i.useCallback)((function() {
                            j(!1)
                        }), [j]),
                        J = (0, i.useCallback)((function(e) {
                            V(e)
                        }), [V]),
                        M = (0, u.NL)(),
                        W = (0, i.useCallback)((0, n.Z)((function() {
                            return (0, s.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return !Q || z ? [2] : (E(!0), Z.P.problemlistSavePopupCreateClick({
                                            problemlist_page: null !== p && void 0 !== p ? p : "list",
                                            problemlist_private: JSON.stringify(C),
                                            problemlist_question_slug: r
                                        }), [4, O({
                                            questionSlug: r,
                                            name: Q,
                                            isPublicFavorite: !C
                                        }, {
                                            onSettled: function(e) {
                                                var t, n, s, i, o;
                                                (null === e || void 0 === e || null === (t = e.addQuestionToNewFavoriteV2) || void 0 === t ? void 0 : t.ok) ? ((0, f.w)({
                                                    queryClient: M,
                                                    name: Q,
                                                    currentQuestionSlug: r,
                                                    isPublicFavorite: !C,
                                                    id: (null === e || void 0 === e || null === (s = e.addQuestionToNewFavoriteV2) || void 0 === s ? void 0 : s.slug) || ""
                                                }), m(), H({
                                                    variant: "success",
                                                    description: (0, a.jsxs)("div", {
                                                        children: [v("addProblemToListSuccess"), " ", (0, a.jsx)("a", {
                                                            className: "text-blue",
                                                            target: "_blank",
                                                            href: d.Hb.problemList(null !== (o = null === e || void 0 === e || null === (i = e.addQuestionToNewFavoriteV2) || void 0 === i ? void 0 : i.slug) && void 0 !== o ? o : ""),
                                                            rel: "noreferrer",
                                                            children: Q
                                                        })]
                                                    }),
                                                    className: "last:mt-[48px]",
                                                    duration: 2e3
                                                }), j(!1), V(!1), q(""), w.current && (w.current.value = ""), U(), $ && $(), E(!1)) : (null === e || void 0 === e || null === (n = e.addQuestionToNewFavoriteV2) || void 0 === n ? void 0 : n.error) && I.y.error(e.addQuestionToNewFavoriteV2.error)
                                            },
                                            onError: function() {
                                                E(!1)
                                            }
                                        })]);
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        })), [Q, z, p, C, r, O, M, m, H, v, U, $]);
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("div", {
                            className: (0, c.yI)("text-md text-sd-muted-foreground hover:bg-sd-accent hover:text-sd-foreground w-full cursor-pointer items-center space-x-2 rounded p-2", {
                                flex: !b
                            }),
                            onClick: B,
                            children: [(0, a.jsx)("div", {
                                className: (0, c.yI)("text-base", S.Cj.labelGrey7),
                                children: (0, a.jsx)(F.S, {})
                            }), (0, a.jsx)("div", {
                                children: v("createNewList")
                            })]
                        }), (0, a.jsxs)("div", {
                            className: (0, c.yI)("bg-sd-popover absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-lg p-3", {
                                hidden: !b,
                                flex: b
                            }),
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsxs)("a", {
                                    className: "mb-4 flex cursor-pointer items-center gap-2",
                                    onClick: G,
                                    children: [(0, a.jsx)(g.e, {
                                        icon: o.A35
                                    }), (0, a.jsx)("span", {
                                        className: "text-sm font-bold",
                                        children: v("createNewList")
                                    })]
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)(A.I, {
                                        ref: w,
                                        placeholder: v("nameListPlaceholder"),
                                        onChange: Y,
                                        className: (0, c.yI)("h-8", P.UG),
                                        maxLength: 30
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "mt-2 flex items-center gap-2",
                                    children: [(0, a.jsx)(y.X, {
                                        checked: C,
                                        onCheckedChange: J
                                    }), (0, a.jsx)("span", {
                                        className: "cursor-pointer text-sm",
                                        onClick: function() {
                                            return J(!C)
                                        },
                                        children: v("setAsPrivate")
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "mt-4 flex space-x-2.5",
                                children: (0, a.jsx)(N.z, {
                                    className: (0, c.yI)("text-md flex !h-8 flex-1 items-center justify-center rounded-lg  px-2.5 ", (t = {}, (0, L.Z)(t, "cursor-pointer", Q), (0, L.Z)(t, "cursor-not-allowed opacity-50", !Q), t)),
                                    onClick: W,
                                    isLoading: z,
                                    children: v("create")
                                })
                            })]
                        })]
                    })
                },
                R = (0, i.createContext)({
                    triggerListChange: function() {},
                    onAfterAddedChange: function() {}
                }),
                _ = function(e) {
                    var t = e.favorite,
                        r = e.questionSlug,
                        m = e.fromPage,
                        p = (0, l.$G)("description").t,
                        b = Boolean(t.hasCurrentQuestion),
                        N = v().mutateAsync,
                        j = (0, h.T)().mutateAsync,
                        T = (0, u.NL)(),
                        L = (0, x.pm)().toast,
                        P = (0, i.useContext)(R).triggerListChange,
                        F = t.favoriteType === C.cPe.SmartList,
                        I = (0, i.useCallback)(function() {
                            var e = (0, n.Z)((function(e, t, n) {
                                return (0, s.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return F ? [2] : (Z.P.problemlistSaveSelectionClick({
                                                problemlist_page: null !== m && void 0 !== m ? m : "list",
                                                problemlist_question_slug: r,
                                                problemlist_collection_type: n ? "add" : "remove",
                                                problemlist_list_slug: e
                                            }), n ? [4, N({
                                                favoriteSlug: e,
                                                questionSlug: r
                                            }, {
                                                onError: function() {
                                                    return (0, f.w)({
                                                        queryClient: T,
                                                        id: e,
                                                        currentQuestionSlug: r
                                                    })
                                                },
                                                onSuccess: function() {
                                                    (0, f.w)({
                                                        queryClient: T,
                                                        id: e,
                                                        currentQuestionSlug: r
                                                    }), L({
                                                        variant: "success",
                                                        description: (0, a.jsxs)("div", {
                                                            children: [p("addProblemToListSuccess"), " ", (0, a.jsx)("a", {
                                                                className: "text-blue",
                                                                target: "_blank",
                                                                href: d.Hb.problemList(e),
                                                                rel: "noreferrer",
                                                                children: t
                                                            })]
                                                        }),
                                                        className: "last:mt-[48px]",
                                                        duration: 2e3
                                                    })
                                                }
                                            })] : [3, 2]);
                                        case 1:
                                            return s.sent(), [3, 4];
                                        case 2:
                                            return [4, j({
                                                favoriteSlug: e,
                                                questionSlug: r
                                            }, {
                                                onError: function() {
                                                    return (0, f.w)({
                                                        queryClient: T,
                                                        id: e,
                                                        currentQuestionSlug: r
                                                    })
                                                },
                                                onSuccess: function() {
                                                    (0, f.w)({
                                                        queryClient: T,
                                                        id: e,
                                                        currentQuestionSlug: r
                                                    }), L({
                                                        variant: "success",
                                                        description: p("removeProblemFromListSuccess", {
                                                            listItemName: t
                                                        }),
                                                        className: "last:mt-[48px]",
                                                        duration: 2e3
                                                    })
                                                }
                                            })];
                                        case 3:
                                            s.sent(), s.label = 4;
                                        case 4:
                                            return P(), [2]
                                    }
                                }))
                            }));
                            return function(t, r, n) {
                                return e.apply(this, arguments)
                            }
                        }(), [F, m, r, P, N, T, L, p, j]);
                    return (0, a.jsxs)("div", {
                        className: (0, c.yI)("hover:bg-sd-accent flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-[5px]", S.Cj.label1, {
                            "cursor-not-allowed": F
                        }),
                        onClick: function() {
                            return I(t.slug || "", t.name, !b)
                        },
                        children: [(0, a.jsxs)("div", {
                            className: (0, c.yI)("text-md flex w-full max-w-[192px] flex-1 items-center space-x-2 truncate"),
                            children: [(0, a.jsx)(y.X, {
                                checked: b,
                                disabled: F
                            }), (0, a.jsx)(w.J, {
                                title: t.name,
                                children: (0, a.jsx)("span", {
                                    children: t.name
                                })
                            })]
                        }), (0, a.jsx)(g.e, {
                            icon: F ? o.A47 : t.isPublicFavorite ? o.g4A : o.byT,
                            className: "text-sd-muted-foreground"
                        })]
                    })
                },
                Q = function(e) {
                    var t = e.questionSlug,
                        r = e.hiddenMore,
                        n = e.hiddenSlugs,
                        s = e.fromPage,
                        u = void 0 === s ? "list" : s,
                        m = e.onListChange,
                        p = e.onAfterAddedChange,
                        v = e.isCompany,
                        h = void 0 !== v && v,
                        x = (0, l.$G)("description").t,
                        y = (0, f.f)(t, {
                            enabled: !0
                        }),
                        w = y.data,
                        C = y.isInitialLoading,
                        L = y.refetch,
                        P = (0, i.useMemo)((function() {
                            var e = w || [];
                            return n && 0 !== n.length ? e.filter((function(e) {
                                return !n.includes(e.slug)
                            })) : e
                        }), [w, n]),
                        F = (0, i.useCallback)((function() {
                            m && m(P, t)
                        }), [P, m, t]);
                    return (0, i.useEffect)((function() {
                        Z.P.problemlistSavePopupExposure({
                            problemlist_page: u,
                            problemlist_question_slug: t,
                            problemlist_is_company: String(h)
                        })
                    }), [u, t, h]), C ? (0, a.jsx)("div", {
                        className: "flex h-[200px] items-center justify-center",
                        children: (0, a.jsx)(j.g, {
                            className: "h-10 w-10"
                        })
                    }) : (0, a.jsx)(R.Provider, {
                        value: {
                            triggerListChange: F,
                            onAfterAddedChange: p
                        },
                        children: (0, a.jsxs)("div", {
                            className: "h-[265px]",
                            children: [(0, a.jsxs)("header", {
                                className: "flex h-10 w-full items-center justify-between py-1 pl-3 pr-1",
                                children: [(0, a.jsx)("h2", {
                                    className: (0, c.yI)("text-center text-sm font-bold", S.Cj.label1),
                                    children: x("myLists")
                                }), !r && (0, a.jsx)("a", {
                                    href: d.Hb.problemList() + "?open=true",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    onClick: function() {
                                        return Z.P.problemlistSavePopupViewAllClick({
                                            problemlist_page: u
                                        })
                                    },
                                    children: (0, a.jsx)(b.u, {
                                        label: x("viewAllLists"),
                                        placement: "top",
                                        children: (0, a.jsx)(N.z, {
                                            onlyIcon: !0,
                                            className: "h-8 w-8",
                                            variant: "ghost",
                                            children: (0, a.jsx)(g.e, {
                                                icon: o.eFW
                                            })
                                        })
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: (0, c.yI)("flex max-h-[calc(100vh-150px)] min-h-[177px]  w-full flex-col"),
                                children: (0, a.jsxs)("div", {
                                    className: "flex max-h-[177px] flex-col overflow-y-auto px-1",
                                    children: [P.map((function(e) {
                                        return (0, a.jsx)("div", {
                                            children: (0, a.jsx)(_, {
                                                favorite: e,
                                                questionSlug: t,
                                                fromPage: u
                                            })
                                        }, e.slug)
                                    })), 0 === P.length && (0, a.jsx)("div", {
                                        className: "flex h-[177px] w-full items-center justify-center",
                                        children: (0, a.jsx)(T.PlaceholderForNull, {
                                            className: "w-[80px]"
                                        })
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "border-sd-border border-t-[1px] p-1",
                                children: (0, a.jsx)(V, {
                                    questionSlug: t,
                                    refreshList: L,
                                    fromPage: u
                                })
                            })]
                        })
                    })
                }
        },
        80978: function(e, t, r) {
            r.d(t, {
                f: function() {
                    return u
                },
                w: function() {
                    return l
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(29815),
                i = r(88525),
                o = r(63808),
                l = function(e) {
                    var t, r = e.queryClient,
                        o = e.id,
                        l = void 0 === o ? "" : o,
                        u = e.name,
                        c = void 0 === u ? "" : u,
                        d = e.currentQuestionSlug,
                        f = e.isPublicFavorite,
                        m = void 0 === f || f,
                        p = i.vvI.getKey({
                            currentQuestionSlug: d
                        }),
                        v = r.getQueryData(p);
                    (null === v || void 0 === v || null === (t = v.myCreatedFavoriteList) || void 0 === t ? void 0 : t.favorites) && (v.myCreatedFavoriteList.favorites.find((function(e) {
                        return e && (e.slug === l || e.name === c)
                    })) ? v.myCreatedFavoriteList.favorites = (0, a.Z)(v.myCreatedFavoriteList.favorites.map((function(e) {
                        return (null === e || void 0 === e ? void 0 : e.slug) === l && (e.hasCurrentQuestion = !e.hasCurrentQuestion), e
                    }))) : v.myCreatedFavoriteList.favorites.push({
                        slug: l,
                        name: c,
                        isPublicFavorite: m,
                        hasCurrentQuestion: !0
                    }), r.setQueryData(p, (0, s.Z)((0, n.Z)({}, v), {
                        myCreatedFavoriteList: (0, s.Z)((0, n.Z)({}, v.myCreatedFavoriteList), {
                            favorites: v.myCreatedFavoriteList.favorites
                        })
                    })))
                },
                u = function(e, t) {
                    var r = t.enabled;
                    return (0, i.vvI)(o.f6, {
                        currentQuestionSlug: e
                    }, {
                        cacheTime: 0,
                        staleTime: 0,
                        enabled: r,
                        select: function(e) {
                            var t;
                            return (null === (t = e.myCreatedFavoriteList) || void 0 === t ? void 0 : t.favorites) || []
                        }
                    })
                }
        },
        28061: function(e, t, r) {
            r.d(t, {
                _R: function() {
                    return o
                },
                oI: function() {
                    return i
                },
                tk: function() {
                    return l
                }
            });
            var n = r(29815),
                s = r(70341),
                a = r(93769),
                i = function(e) {
                    return e === a.UU.Contest ? "/contest/".concat(a.z2.getState().contestSlug) : ""
                },
                o = function(e) {
                    return Object.keys(s.Hb).reduce((function(t, r) {
                        var a = i(e),
                            o = s.Hb[r];
                        return "function" === typeof o ? t[r] = function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return "".concat(a).concat(o.apply(void 0, (0, n.Z)(t)))
                        } : "object" === typeof o && (t[r] = Object.keys(o).reduce((function(e, t) {
                            var r;
                            return e[t] = function() {
                                for (var e = arguments.length, s = new Array(e), i = 0; i < e; i++) s[i] = arguments[i];
                                return "".concat(a).concat((r = o)[t].apply(r, (0, n.Z)(s)))
                            }, e
                        }), {})), t
                    }), {})
                },
                l = o(a.z2.getState().mode)
        },
        28813: function(e, t, r) {
            r.d(t, {
                N: function() {
                    return i
                }
            });
            var n = r(14924),
                s = r(23874),
                a = r(34588),
                i = function(e, t) {
                    var r, i = e[a.Ts.status],
                        o = e[a.Ts.difficulty],
                        l = e[a.Ts.lang],
                        u = e[a.Ts.topics],
                        c = e[a.Ts.acceptance],
                        d = e[a.Ts.frequency],
                        f = e[a.Ts.lastSubmit],
                        m = e[a.Ts.published],
                        p = e[a.Ts.companies],
                        v = e[a.Ts.position],
                        h = e[a.Ts.premium];
                    return r = {
                        filterCombineType: t || s.YSR.All
                    }, (0, n.Z)(r, a.LA.statusFilter, {
                        questionStatuses: i.multiSelectValues || [],
                        operator: i.chooseTypeVal || s.lno.Is
                    }), (0, n.Z)(r, a.LA.difficultyFilter, {
                        difficulties: o.multiSelectValues || [],
                        operator: o.chooseTypeVal || s.lno.Is
                    }), (0, n.Z)(r, a.LA.languageFilter, {
                        languageSlugs: l.multiSelectValues || [],
                        operator: l.chooseTypeVal || s.lno.Is
                    }), (0, n.Z)(r, a.LA.topicFilter, {
                        topicSlugs: u.multiSelectValues || [],
                        operator: u.chooseTypeVal || s.lno.Is
                    }), (0, n.Z)(r, a.LA.acceptanceFilter, {
                        rangeLeft: c.rangeLeft,
                        rangeRight: c.rangeRight
                    }), (0, n.Z)(r, a.LA.frequencyFilter, {
                        rangeLeft: d.rangeLeft,
                        rangeRight: d.rangeRight
                    }), (0, n.Z)(r, a.LA.lastSubmittedFilter, {
                        startFrom: f.startFrom,
                        endAt: f.endAt,
                        pastDays: f.pastDays
                    }), (0, n.Z)(r, a.LA.publishedFilter, {
                        startFrom: m.startFrom,
                        endAt: m.endAt,
                        pastDays: m.pastDays
                    }), (0, n.Z)(r, a.LA.companyFilter, {
                        companySlugs: p.multiSelectValues || [],
                        operator: p.chooseTypeVal || s.lno.Is
                    }), (0, n.Z)(r, a.LA.positionFilter, {
                        positionSlugs: v.multiSelectValues || [],
                        operator: v.chooseTypeVal || s.lno.Is
                    }), (0, n.Z)(r, a.LA.premiumFilter, {
                        premiumStatus: h.multiSelectValues || [],
                        operator: h.chooseTypeVal || s.lno.Is
                    }), r
                }
        },
        97334: function(e, t, r) {
            r.d(t, {
                y: function() {
                    return l
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(64529),
                i = r(782),
                o = r(23874),
                l = (0, a.Ue)((0, i.$e)({
                    showTags: !1,
                    showKeysList: void 0,
                    sortField: o.lL5.Custom,
                    sortOrder: o.Piq.Ascending,
                    searchKeyword: ""
                }, (function(e) {
                    return {
                        setShowTags: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, n.Z)({}, e), {
                                    showTags: t
                                })
                            }))
                        },
                        setShowKeysList: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, n.Z)({}, e), {
                                    showKeysList: t
                                })
                            }))
                        },
                        setSortField: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, n.Z)({}, e), {
                                    sortField: t
                                })
                            }))
                        },
                        setSortOrder: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, n.Z)({}, e), {
                                    sortOrder: t
                                })
                            }))
                        },
                        setSearchKeyword: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, n.Z)({}, e), {
                                    searchKeyword: t
                                })
                            }))
                        }
                    }
                })))
        },
        86397: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return l
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(64529),
                i = r(782),
                o = (0, a.Ue)((0, i.$e)({
                    filterQueryData: {}
                }, (function(e) {
                    return {
                        setFilterQueryData: function(t) {
                            return e((function(e) {
                                return (0, s.Z)((0, n.Z)({}, e), {
                                    filterQueryData: t
                                })
                            }))
                        }
                    }
                }))),
                l = function() {
                    var e = o(),
                        t = e.filterQueryData,
                        r = e.setFilterQueryData;
                    return {
                        newQuery: t,
                        setNewQuery: r,
                        clearNewQuery: function() {
                            r({})
                        }
                    }
                }
        },
        21971: function(e, t, r) {
            r.d(t, {
                S: function() {
                    return i
                }
            });
            var n = r(97334),
                s = r(34588),
                a = r(86397),
                i = function(e) {
                    var t = e.enable,
                        r = void 0 !== t && t,
                        i = (0, a.L)().newQuery,
                        o = (0, n.y)().showKeysList,
                        l = JSON.parse(JSON.stringify(s.ZP)),
                        u = i[s.jP.filterCombineType];
                    if (r) {
                        var c = i[s.jP.frequencyFilterRangeLeft],
                            d = i[s.jP.frequencyFilterRangeRight];
                        l[s.Ts.frequency].rangeLeft = c ? Number(c) : void 0, l[s.Ts.frequency].rangeRight = d ? Number(d) : void 0, (c || d) && (l[s.Ts.frequency].show = !0);
                        var f = i[s.jP.companies];
                        l[s.Ts.companies].multiSelectValues = f ? (null === f || void 0 === f ? void 0 : f.split(",")) || [] : void 0, l[s.Ts.companies].chooseTypeVal = i[s.jP.companyType], f && (l[s.Ts.companies].show = !0);
                        var m = i[s.jP.position];
                        l[s.Ts.position].multiSelectValues = m ? (null === m || void 0 === m ? void 0 : m.split(",")) || [] : void 0, l[s.Ts.position].chooseTypeVal = i[s.jP.positionType], m && (l[s.Ts.position].show = !0);
                        var p = i[s.jP.status];
                        l[s.Ts.status].multiSelectValues = p ? (null === p || void 0 === p ? void 0 : p.split(",")) || [] : void 0, l[s.Ts.status].chooseTypeVal = i[s.jP.statusType], p && (l[s.Ts.status].show = !0);
                        var v = i[s.jP.difficulty];
                        l[s.Ts.difficulty].multiSelectValues = v ? (null === v || void 0 === v ? void 0 : v.split(",")) || [] : void 0, l[s.Ts.difficulty].chooseTypeVal = i[s.jP.difficultyType], v && (l[s.Ts.difficulty].show = !0);
                        var h = i[s.jP.topics];
                        l[s.Ts.topics].multiSelectValues = h ? (null === h || void 0 === h ? void 0 : h.split(",")) || [] : void 0, l[s.Ts.topics].chooseTypeVal = i[s.jP.topicsType], h && (l[s.Ts.topics].show = !0);
                        var x = i[s.jP.lang];
                        l[s.Ts.lang].multiSelectValues = x ? (null === x || void 0 === x ? void 0 : x.split(",")) || [] : void 0, l[s.Ts.lang].chooseTypeVal = i[s.jP.langType], x && (l[s.Ts.lang].show = !0);
                        var y = i[s.jP.acceptanceRangeLeft],
                            g = i[s.jP.acceptanceRangeRight];
                        l[s.Ts.acceptance].rangeLeft = y ? Number(y) : void 0, l[s.Ts.acceptance].rangeRight = g ? Number(g) : void 0, (y || g) && (l[s.Ts.acceptance].show = !0);
                        var b = i[s.jP.lastSubmittedStartFrom],
                            N = i[s.jP.lastSubmittedEndAt],
                            j = i[s.jP.lastSubmittedPastDays];
                        l[s.Ts.lastSubmit].startFrom = b ? Number(b) : void 0, l[s.Ts.lastSubmit].endAt = N ? Number(N) : void 0, l[s.Ts.lastSubmit].pastDays = j ? Number(j) : void 0, (b || N || j) && (l[s.Ts.lastSubmit].show = !0);
                        var w = i[s.jP.publishedStartFrom],
                            T = i[s.jP.publishedEndAt],
                            S = i[s.jP.publishedPastDays];
                        l[s.Ts.published].startFrom = w ? Number(w) : void 0, l[s.Ts.published].endAt = T ? Number(T) : void 0, l[s.Ts.published].pastDays = S ? Number(S) : void 0, (w || T || S) && (l[s.Ts.published].show = !0);
                        var Z = i[s.jP.premium];
                        l[s.Ts.premium].multiSelectValues = Z ? (null === Z || void 0 === Z ? void 0 : Z.split(",")) || [] : void 0, l[s.Ts.premium].chooseTypeVal = i[s.jP.premiumType], Z && (l[s.Ts.premium].show = !0), o && Object.keys(s.Ts).forEach((function(e) {
                            l[e].show = o.includes(e)
                        }))
                    }
                    return {
                        dataMap: l,
                        filterCombineType: u
                    }
                }
        },
        12043: function(e, t, r) {
            r.d(t, {
                OL: function() {
                    return Z
                },
                _T: function() {
                    return g
                },
                aR: function() {
                    return v
                },
                f$: function() {
                    return T
                },
                fY: function() {
                    return b
                },
                le: function() {
                    return C
                },
                vW: function() {
                    return h
                },
                xo: function() {
                    return N
                },
                yT: function() {
                    return S
                }
            });
            var n = r(40872),
                s = r(26042),
                a = r(69396),
                i = r(99534),
                o = r(85893),
                l = r(67294),
                u = r(89532),
                c = r(99603),
                d = r(21702),
                f = r(12922),
                m = r(83210),
                p = l.createContext("default"),
                v = function(e) {
                    var t = e.variant,
                        r = void 0 === t ? "default" : t,
                        n = e.children,
                        l = (0, i.Z)(e, ["variant", "children"]);
                    return (0, o.jsx)(p.Provider, {
                        value: r,
                        children: (0, o.jsx)(u.fC, (0, a.Z)((0, s.Z)({}, l), {
                            children: n
                        }))
                    })
                },
                h = u.xz,
                x = function(e) {
                    var t = (0, n.Z)({}, e);
                    return (0, o.jsx)(u.h_, (0, s.Z)({}, t))
                };
            x.displayName = u.h_.displayName;
            var y = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = (0, i.Z)(e, ["className"]);
                return (0, o.jsx)(u.aV, (0, a.Z)((0, s.Z)({
                    className: (0, f.yI)("bg-sd-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-modal fixed inset-0 backdrop-blur-sm", r)
                }, n), {
                    ref: t
                }))
            }));
            y.displayName = u.aV.displayName;
            var g = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = e.overlayClassName,
                    a = (0, i.Z)(e, ["className", "overlayClassName"]);
                return (0, o.jsxs)(x, {
                    children: [(0, o.jsx)(y, {
                        className: n
                    }), (0, o.jsx)(u.VY, (0, s.Z)({
                        ref: t,
                        className: (0, f.yI)("bg-sd-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-sd-lg sd-md:w-full border-sd-border z-modal animate-duration-200 fixed left-[50%] top-[50%] grid max-h-[90vh] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border p-6 shadow-lg duration-200", r),
                        onOpenAutoFocus: function(e) {
                            return e.preventDefault()
                        }
                    }, a))]
                })
            }));
            g.displayName = u.VY.displayName;
            var b = function(e) {
                var t = e.className,
                    r = (0, i.Z)(e, ["className"]);
                return (0, o.jsx)("div", (0, s.Z)({
                    className: (0, f.yI)("sd-sm:text-left flex flex-col space-y-2", t)
                }, r))
            };
            b.displayName = "AlertDialogHeader";
            var N = function(e) {
                var t = e.className,
                    r = (0, i.Z)(e, ["className"]);
                return (0, o.jsx)("div", (0, s.Z)({
                    className: (0, f.yI)("sd-sm:flex-row sd-sm:justify-end sd-sm:space-x-2 flex flex-col-reverse", t)
                }, r))
            };
            N.displayName = "AlertDialogFooter";
            var j = {
                    default: null,
                    danger: d.xHz,
                    warning: d.xHz,
                    info: d.DBf,
                    success: d.fV7
                },
                w = function(e) {
                    var t = e.variant;
                    return "default" === t ? null : (0, o.jsx)(c.G, {
                        icon: j[t],
                        className: "h-6 w-6",
                        style: {
                            "--fa-primary-color": "hsl(var(--sd-fixed-white))",
                            "--fa-secondary-color": "hsl(var(--sd-".concat(t, "))"),
                            "--fa-secondary-opacity": 1
                        }
                    })
                },
                T = l.forwardRef((function(e, t) {
                    var r = e.className,
                        n = e.children,
                        c = (0, i.Z)(e, ["className", "children"]),
                        d = l.useContext(p);
                    return (0, o.jsxs)(u.Dx, (0, a.Z)((0, s.Z)({
                        ref: t,
                        className: (0, f.yI)("flex items-center gap-3 text-lg font-semibold", r)
                    }, c), {
                        children: [(0, o.jsx)(w, {
                            variant: d
                        }), n]
                    }))
                }));
            T.displayName = u.Dx.displayName;
            var S = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = (0, i.Z)(e, ["className"]),
                    a = l.useContext(p);
                return (0, o.jsx)(u.dk, (0, s.Z)({
                    ref: t,
                    className: (0, f.yI)("text-sd-muted-foreground text-sm", {
                        "pl-9": "default" !== a
                    }, r)
                }, n))
            }));
            S.displayName = u.dk.displayName;
            var Z = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = (0, i.Z)(e, ["className"]),
                    a = l.useContext(p);
                return (0, o.jsx)(u.aU, (0, s.Z)({
                    ref: t,
                    className: (0, f.yI)((0, m.d)({
                        variant: a
                    }), r)
                }, n))
            }));
            Z.displayName = u.aU.displayName;
            var C = l.forwardRef((function(e, t) {
                var r = e.className,
                    n = (0, i.Z)(e, ["className"]);
                return (0, o.jsx)(u.$j, (0, s.Z)({
                    ref: t,
                    className: (0, f.yI)((0, m.d)({
                        variant: "outline"
                    }), "sd-sm:mt-0 mt-2", r)
                }, n))
            }));
            C.displayName = u.$j.displayName
        },
        30366: function(e, t, r) {
            r.d(t, {
                X: function() {
                    return f
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(99534),
                i = r(85893),
                o = r(67294),
                l = r(46069),
                u = r(68779),
                c = r(12922),
                d = r(134),
                f = o.forwardRef((function(e, t) {
                    var r = e.className,
                        o = (0, a.Z)(e, ["className"]);
                    return (0, i.jsx)(l.fC, (0, s.Z)((0, n.Z)({
                        ref: t,
                        className: (0, c.yI)("border-sd-primary focus-visible:ring-sd-ring data-[state=checked]:bg-sd-primary data-[state=checked]:text-sd-primary-foreground rounded-sd-sm peer h-4 w-4 shrink-0 border focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50", r)
                    }, o), {
                        children: (0, i.jsx)(l.z$, {
                            className: (0, c.yI)("flex items-center justify-center text-current"),
                            children: (0, i.jsx)(d.e, {
                                variant: "12px",
                                padding: "none",
                                icon: u.LEp,
                                className: "h-2 w-2 text-[8px]"
                            })
                        })
                    }))
                }));
            f.displayName = l.fC.displayName
        },
        25082: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return l
                }
            });
            var n = r(26042),
                s = r(99534),
                a = r(85893),
                i = r(67294),
                o = r(12922),
                l = i.forwardRef((function(e, t) {
                    var r = e.className,
                        i = e.type,
                        l = (0, s.Z)(e, ["className", "type"]);
                    return (0, a.jsx)("input", (0, n.Z)({
                        type: i,
                        className: (0, o.yI)("text-sd-foreground border-sd-input placeholder:text-sd-muted-foreground focus-visible:ring-sd-ring rounded-sd-md flex h-9 w-full border bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50", r),
                        ref: t
                    }, l))
                }));
            l.displayName = "Input"
        },
        62e3: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return o
                }
            });
            var n = r(85893),
                s = r(67294),
                a = r(62758),
                i = r(12922),
                o = function(e) {
                    var t = e.children,
                        r = e.title,
                        o = e.className,
                        l = (0, s.useRef)(null),
                        u = (0, s.useState)(!1),
                        c = u[0],
                        d = u[1],
                        f = (0, s.useCallback)((function() {
                            var e, t, r, n;
                            l.current && d((null === (e = l.current) || void 0 === e ? void 0 : e.scrollWidth) > (null === (t = l.current) || void 0 === t ? void 0 : t.clientWidth) || (null === (r = l.current) || void 0 === r ? void 0 : r.scrollHeight) > (null === (n = l.current) || void 0 === n ? void 0 : n.clientHeight))
                        }), []);
                    return (0, s.useEffect)((function() {
                        return f(), window.addEventListener("resize", f),
                            function() {
                                window.removeEventListener("resize", f)
                            }
                    }), [f]), (0, n.jsx)(a.u, {
                        isDisabled: !c,
                        label: c && (r || t),
                        children: (0, n.jsx)("div", {
                            ref: l,
                            className: (0, i.yI)("ellipsis line-clamp-1", o),
                            children: t
                        })
                    })
                }
        },
        82127: function(e, t, r) {
            r.d(t, {
                Bw: function() {
                    return v
                },
                DI: function() {
                    return f
                },
                Ph: function() {
                    return d
                },
                Ql: function() {
                    return h
                },
                i4: function() {
                    return p
                },
                ki: function() {
                    return m
                }
            });
            var n = r(26042),
                s = r(69396),
                a = r(99534),
                i = r(85893),
                o = r(67294),
                l = r(62469),
                u = r(85872),
                c = r(12922),
                d = u.fC,
                f = u.ZA,
                m = u.B4,
                p = o.forwardRef((function(e, t) {
                    var r = e.className,
                        o = e.children,
                        d = (0, a.Z)(e, ["className", "children"]);
                    return (0, i.jsxs)(u.xz, (0, s.Z)((0, n.Z)({
                        ref: t,
                        className: (0, c.yI)("text-sd-foreground border-sd-input ring-offset-sd-background placeholder:text-sd-muted-foreground focus:ring-sd-ring rounded-sd-md flex h-9 w-full items-center justify-between border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50", r)
                    }, d), {
                        children: [o, (0, i.jsx)(u.JO, {
                            asChild: !0,
                            children: (0, i.jsx)(l.jnn, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    }))
                }));
            p.displayName = u.xz.displayName;
            var v = o.forwardRef((function(e, t) {
                var r = e.className,
                    o = e.children,
                    l = e.position,
                    d = void 0 === l ? "popper" : l,
                    f = (0, a.Z)(e, ["className", "children", "position"]);
                return (0, i.jsx)(u.h_, {
                    children: (0, i.jsx)(u.VY, (0, s.Z)((0, n.Z)({
                        ref: t,
                        className: (0, c.yI)("bg-sd-popover text-sd-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-sd-md border-sd-border z-modal relative min-w-[8rem] overflow-hidden border shadow-md", "popper" === d && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r),
                        position: d
                    }, f), {
                        children: (0, i.jsx)(u.l_, {
                            className: (0, c.yI)("p-1", "popper" === d && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: o
                        })
                    }))
                })
            }));
            v.displayName = u.VY.displayName, o.forwardRef((function(e, t) {
                var r = e.className,
                    s = (0, a.Z)(e, ["className"]);
                return (0, i.jsx)(u.__, (0, n.Z)({
                    ref: t,
                    className: (0, c.yI)("px-2 py-1.5 text-sm font-semibold", r)
                }, s))
            })).displayName = u.__.displayName;
            var h = o.forwardRef((function(e, t) {
                var r = e.className,
                    o = e.children,
                    d = (0, a.Z)(e, ["className", "children"]);
                return (0, i.jsxs)(u.ck, (0, s.Z)((0, n.Z)({
                    ref: t,
                    className: (0, c.yI)("focus:bg-sd-accent focus:text-sd-accent-foreground rounded-sd-sm relative flex w-full cursor-default select-none items-center py-1.5 pl-2 pr-8 text-sm outline-none focus:cursor-pointer data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r)
                }, d), {
                    children: [(0, i.jsx)("span", {
                        className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, i.jsx)(u.wU, {
                            children: (0, i.jsx)(l.nQG, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, i.jsx)(u.eT, {
                        children: o
                    })]
                }))
            }));
            h.displayName = u.ck.displayName, o.forwardRef((function(e, t) {
                var r = e.className,
                    s = (0, a.Z)(e, ["className"]);
                return (0, i.jsx)(u.Z0, (0, n.Z)({
                    ref: t,
                    className: (0, c.yI)("bg-sd-muted -mx-1 my-1 h-px", r)
                }, s))
            })).displayName = u.Z0.displayName
        },
        77013: function(e, t, r) {
            r.d(t, {
                g: function() {
                    return l
                }
            });
            var n = r(26042),
                s = r(99534),
                a = r(85893),
                i = r(67294),
                o = r(12922),
                l = i.forwardRef((function(e, t) {
                    var r = e.className,
                        i = (0, s.Z)(e, ["className"]);
                    return (0, a.jsx)("textarea", (0, n.Z)({
                        className: (0, o.yI)("border-sd-input placeholder:text-sd-muted-foreground focus-visible:ring-sd-ring rounded-sd-md flex min-h-[80px] w-full border bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50", r),
                        ref: t
                    }, i))
                }));
            l.displayName = "Textarea"
        },
        75955: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return a
                }
            });
            var n = r(67294),
                s = r(9962),
                a = function(e) {
                    var t, r = e.enabled,
                        a = e.threshold,
                        i = e.onIntersect,
                        o = (0, n.useState)(null),
                        l = o[0],
                        u = o[1],
                        c = (0, n.useState)(null),
                        d = c[0],
                        f = c[1],
                        m = (0, s.s)(d, {
                            root: l,
                            threshold: a,
                            enabled: r
                        }),
                        p = null !== (t = null === m || void 0 === m ? void 0 : m.isIntersecting) && void 0 !== t && t;
                    return (0, n.useEffect)((function() {
                        r && p && i()
                    }), [r, p, i]), {
                        setContainerDom: u,
                        setTargetDom: f,
                        containerDom: l
                    }
                }
        },
        72014: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return s
                }
            });
            var n = r(50632),
                s = function() {
                    var e, t, r;
                    return Boolean(null === (e = (0, n.U5)()) || void 0 === e || null === (t = e.data) || void 0 === t || null === (r = t.userStatus) || void 0 === r ? void 0 : r.isSignedIn)
                }
        },
        31523: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return s
                }
            });
            var n = r(67294);
            var s = function(e, t) {
                var r = function() {
                    var e = (0, n.useRef)(!0);
                    return e.current ? (e.current = !1, !0) : e.current
                }();
                (0, n.useEffect)((function() {
                    if (!r) return e()
                }), t)
            }
        }
    }
]);