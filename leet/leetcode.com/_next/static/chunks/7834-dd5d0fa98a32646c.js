"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7834], {
        1452: function(e, a, t) {
            t.d(a, {
                A: function() {
                    return o
                }
            });
            var i = t(26042),
                c = t(69396),
                n = t(85893),
                o = t(67294).forwardRef((function(e, a) {
                    return (0, n.jsx)("svg", (0, c.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: a
                    }, e), {
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.219-8.94l-1.805-1.804a1 1 0 00-1.414 1.414l2.512 2.512a1 1 0 001.414 0l4.95-4.95a1 1 0 10-1.414-1.414l-4.243 4.243z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        86639: function(e, a, t) {
            t.d(a, {
                X: function() {
                    return o
                }
            });
            var i = t(26042),
                c = t(69396),
                n = t(85893),
                o = t(67294).forwardRef((function(e, a) {
                    return (0, n.jsx)("svg", (0, c.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: a
                    }, e), {
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.414-10l2.293-2.293a1 1 0 00-1.414-1.414L12 10.586 9.707 8.293a1 1 0 00-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 101.414 1.414L12 13.414l2.293 2.293a1 1 0 001.414-1.414L13.414 12z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        67021: function(e, a, t) {
            t.d(a, {
                e: function() {
                    return o
                }
            });
            var i = t(26042),
                c = t(69396),
                n = t(85893),
                o = t(67294).forwardRef((function(e, a) {
                    return (0, n.jsx)("svg", (0, c.Z)((0, i.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: a
                    }, e), {
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm0-3a1 1 0 100 2 1 1 0 000-2z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        10088: function(e, a, t) {
            t.d(a, {
                l: function() {
                    return i
                }
            });
            var i = "announcement-bar__container"
        },
        19906: function(e, a, t) {
            t.d(a, {
                y: function() {
                    return u
                }
            });
            var i = t(26042),
                c = t(69396),
                n = t(99534),
                o = t(85893),
                d = t(67294),
                _ = t(34402),
                r = t(82670);
            var V = function(e) {
                    return e
                },
                X = function(e) {
                    var a = e.children;
                    return (0, o.jsx)(o.Fragment, {
                        children: a
                    })
                },
                l = d.forwardRef((function(e, a) {
                    var t = e.src,
                        l = e.errPlaceholder,
                        u = e.children,
                        s = (0, n.Z)(e, ["src", "errPlaceholder", "children"]),
                        O = t && V(t),
                        k = (0, d.useState)(O),
                        C = k[0],
                        S = k[1],
                        E = (0, d.useCallback)((function() {
                            l && S(l)
                        }), [l, S]),
                        L = function(e, a) {
                            var t = (0, d.useRef)(null),
                                i = (0, d.useState)(!1),
                                c = i[0],
                                n = i[1],
                                o = (0, d.useCallback)((function(t) {
                                    c || ((0, r.Z)(t.target, HTMLSourceElement) ? t.target.srcset = e : t.target.src = e, n(!0), null === a || void 0 === a || a())
                                }), [e, c, a]);
                            return (0, d.useEffect)((function() {
                                if (t && t.current) {
                                    var i = t.current,
                                        c = i.complete,
                                        n = i.naturalHeight;
                                    c && 0 === n && ((0, r.Z)(t.current, HTMLSourceElement) ? t.current.srcset = e : t.current.src = e, null === a || void 0 === a || a())
                                }
                            }), [e, a]), e ? {
                                ref: t,
                                onError: o
                            } : {}
                        }(l ? (0, _.s)(l) : "", E);
                    (0, d.useEffect)((function() {
                        S(O)
                    }), [O]);
                    var q = null === t || void 0 === t ? void 0 : t.toLowerCase().endsWith("svg");
                    return (0, o.jsx)(X, {
                        isSVG: q,
                        source: C,
                        fallbackProps: L,
                        children: (0, o.jsx)("img", (0, c.Z)((0, i.Z)({
                            src: O,
                            ref: a
                        }, s, L), {
                            children: u
                        }))
                    })
                }));
            l.displayName = "LcImg";
            var u = l
        },
        19579: function(e, a, t) {
            t.d(a, {
                y: function() {
                    return l
                }
            });
            var i = t(29815),
                c = t(85893),
                n = (t(67294), t(20745)),
                o = t(12922),
                d = t(10088),
                _ = t(97556),
                r = function(e) {
                    return (0, o.yI)("fixed bottom-0 left-0 right-0 pointer-events-none z-message", e)
                },
                V = function(e) {
                    var a = document.getElementById("messages-provider");
                    if (!a) {
                        var t = document.createElement("div");
                        t.id = "messages-provider", document.body.appendChild(t), a = t, window.addEventListener("scroll", (function() {
                            a && (a.className = r(e))
                        }))
                    }
                    return a.className = r(e), a.style.top = function() {
                        var e = 54 + (0, i.Z)(document.getElementsByClassName(d.l)).reduce((function(e, a) {
                            return e + a.clientHeight
                        }), 0);
                        return window.innerWidth < 680 ? 54 : window.scrollY <= e ? e - window.scrollY : 4
                    }() + "px", a
                },
                X = function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        o = arguments.length > 4 ? arguments[4] : void 0,
                        d = arguments.length > 5 ? arguments[5] : void 0,
                        r = V(o || ""),
                        X = document.createElement("div");
                    X.className = "transition-opacity duration-500 ease-in-out z-message", r.appendChild(X);
                    var l, u = (0, n.createRoot)(X),
                        s = -1,
                        O = function(e) {
                            s = window.setTimeout((function() {
                                X.className += " opacity-0", l && l(i && i()), setTimeout((function() {
                                    u.unmount(), X.remove()
                                }), 500)
                            }), e)
                        },
                        k = function(e) {
                            -1 !== s && (clearTimeout(s), e || O(1e3 * t))
                        };
                    return u.render((0, c.jsx)(_.R, {
                        content: a,
                        type: e,
                        onEnter: function() {
                            return k(!0)
                        },
                        onLeave: function() {
                            return k(!1)
                        },
                        className: d
                    })), new Promise((function(e) {
                        l = e, O(1e3 * t)
                    }))
                },
                l = {
                    info: function(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = a.duration,
                            i = void 0 === t ? 2 : t,
                            c = a.onClose,
                            n = a.containerClassName,
                            o = a.itemClassName;
                        return X("info", e, i, c, n, o)
                    },
                    warn: function(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = a.duration,
                            i = void 0 === t ? 2 : t,
                            c = a.onClose,
                            n = a.containerClassName,
                            o = a.itemClassName;
                        return X("warning", e, i, c, n, o)
                    },
                    warning: function(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = a.duration,
                            i = void 0 === t ? 2 : t,
                            c = a.onClose,
                            n = a.containerClassName,
                            o = a.itemClassName;
                        return X("warning", e, i, c, n, o)
                    },
                    success: function(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = a.duration,
                            i = void 0 === t ? 2 : t,
                            c = a.onClose,
                            n = a.containerClassName,
                            o = a.itemClassName;
                        return X("success", e, i, c, n, o)
                    },
                    error: function(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = a.duration,
                            i = void 0 === t ? 2 : t,
                            c = a.onClose,
                            n = a.containerClassName,
                            o = a.itemClassName;
                        return X("error", e, i, c, n, o)
                    },
                    plain: function(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = a.duration,
                            i = void 0 === t ? 2 : t,
                            c = a.onClose,
                            n = a.containerClassName,
                            o = a.itemClassName;
                        return X("plain", e, i, c, n, o)
                    }
                }
        },
        97556: function(e, a, t) {
            t.d(a, {
                R: function() {
                    return V
                }
            });
            var i = t(85893),
                c = (t(67294), t(84539)),
                n = t(12922),
                o = t(67021),
                d = t(86639),
                _ = t(1452),
                r = t(15371),
                V = function(e) {
                    var a = e.className,
                        t = e.content,
                        V = e.type,
                        X = e.onEnter,
                        l = void 0 === X ? function() {
                            return null
                        } : X,
                        u = e.onLeave,
                        s = void 0 === u ? function() {
                            return null
                        } : u,
                        O = {
                            info: (0, i.jsx)(o.e, {
                                width: "18px",
                                height: "18px",
                                className: "fill-blue-s dark:fill-dark-blue-s mr-2"
                            }),
                            error: (0, i.jsx)(d.X, {
                                width: "18px",
                                height: "18px",
                                className: "fill-red-s dark:fill-dark-red-s mr-2"
                            }),
                            warning: (0, i.jsx)(o.e, {
                                width: "18px",
                                height: "18px",
                                className: "fill-yellow dark:fill-dark-yellow mr-2"
                            }),
                            success: (0, i.jsx)(_.A, {
                                width: "18px",
                                height: "18px",
                                className: "fill-green-s dark:fill-dark-green-s mr-2"
                            }),
                            plain: (0, i.jsx)(i.Fragment, {})
                        };
                    return (0, i.jsx)(c.u, {
                        appear: !0,
                        show: !0,
                        enter: "transition duration-500 ease-out",
                        enterFrom: "transform scale-95 opacity-0",
                        enterTo: "transform scale-100 opacity-100",
                        leave: "transition duration-500 ease-out",
                        leaveFrom: "transform scale-100 opacity-100",
                        leaveTo: "transform scale-95 opacity-0",
                        children: (0, i.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, i.jsxs)("div", {
                                className: (0, n.yI)("px-4 py-1.5", r.Cj.bgPaper, r.Cj.label1, r.eq.commandBar, "pointer-events-auto my-2 flex items-center rounded-full", a),
                                onMouseEnter: l,
                                onMouseLeave: s,
                                children: [O[V], " ", (0, i.jsx)("span", {
                                    children: t
                                })]
                            })
                        })
                    })
                }
        },
        34402: function(e, a, t) {
            function i(e) {
                if (null === e || void 0 === e ? void 0 : e.startsWith("http")) {
                    var a = new URL(e);
                    return a.searchParams.set("x-oss-process", "image/format,webp"), a.toString()
                }
                return "".concat(e, "?x-oss-process=image/format,webp")
            }
            t.d(a, {
                s: function() {
                    return i
                }
            })
        },
        29297: function(e, a, t) {
            t.d(a, {
                d: function() {
                    return n
                }
            });
            var i = t(8183),
                c = t(23025),
                n = {
                    qdNewEditorExposure: function() {
                        var e = {
                            key: "qd_new_editor_exposure",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdOldEditorExposure: function() {
                        var e = {
                            key: "qd_old_editor_exposure",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdNewEditorMenuClick: function(e) {
                        var a = {
                            key: "qd_new_editor_menu_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdNewEditorVersionClick: function(e) {
                        var a = {
                            key: "qd_new_editor_version_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdRichtextContentPublishRateExposure: function(e) {
                        var a = {
                            key: "qd_richtext_content_publish_rate_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPageExposure: function(e) {
                        var a = {
                            key: "qd_page_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdListClick: function(e) {
                        var a = {
                            key: "qd_list_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPrevQuestionClick: function(e) {
                        var a = {
                            key: "qd_prev_question_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdNextQuestionClick: function(e) {
                        var a = {
                            key: "qd_next_question_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdRandomQuestionClick: function(e) {
                        var a = {
                            key: "qd_random_question_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdContestRankingClick: function(e) {
                        var a = {
                            key: "qd_contest_ranking_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdContestRankingDrawerClick: function(e) {
                        var a = {
                            key: "qd_contest_ranking_drawer_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdOpenPanelClick: function(e) {
                        var a = {
                            key: "qd_qd_open_panel_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDrawerQuestionClick: function(e) {
                        var a = {
                            key: "qd_drawer_question_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdShowTagsClick: function(e) {
                        var a = {
                            key: "qd_show_tags_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdShowTimeClick: function(e) {
                        var a = {
                            key: "qd_show_time_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdHideTimeClick: function(e) {
                        var a = {
                            key: "qd_hide_time_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdResetTimeClick: function(e) {
                        var a = {
                            key: "qd_reset_time_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSwitchOldClick: function() {
                        var e = {
                            key: "qd_switch_old_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdSwitchTabClick: function(e) {
                        var a = {
                            key: "qd_switch_tab_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDescHintsClick: function(e) {
                        var a = {
                            key: "qd_desc_hints_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDescHintsSwitchClick: function(e) {
                        var a = {
                            key: "qd_desc_hints_switch_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDescHintsContentExposure: function(e) {
                        var a = {
                            key: "qd_desc_hints_content_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQuestionVoteClick: function(e) {
                        var a = {
                            key: "qd_question_vote_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSwitchPageLangClick: function(e) {
                        var a = {
                            key: "qd_switch_page_lang_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAddToListClick: function(e) {
                        var a = {
                            key: "qd_add_to_list_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCompanyPageExposure: function(e) {
                        var a = {
                            key: "qd_company_page_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCompanyPopupExposure: function(e) {
                        var a = {
                            key: "qd_company_popup_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCompanyIconClick: function(e) {
                        var a = {
                            key: "qd_company_icon_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdShareQuestionClick: function(e) {
                        var a = {
                            key: "qd_share_question_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdKeywordExposure: function(e) {
                        var a = {
                            key: "qd_keyword_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAnswerSeenInInterviewClick: function(e) {
                        var a = {
                            key: "qd_answer_seen_in_interview_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAnswerCompanyClick: function(e) {
                        var a = {
                            key: "qd_answer_company_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAnswerEncounterClick: function(e) {
                        var a = {
                            key: "qd_answer_encounter_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAnswerStageClick: function(e) {
                        var a = {
                            key: "qd_answer_stage_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSurveyCompleteExposure: function(e) {
                        var a = {
                            key: "qd_survey_complete_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdRelatedTopicsClick: function(e) {
                        var a = {
                            key: "qd_related_topics_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdRelatedCompaniesClick: function(e) {
                        var a = {
                            key: "qd_related_companies_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSwitchLangClick: function(e) {
                        var a = {
                            key: "qd_switch_lang_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdFormatCodeClick: function(e) {
                        var a = {
                            key: "qd_format_code_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdEnableLspClick: function(e) {
                        var a = {
                            key: "qd_enable_lsp_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDisableLspClick: function(e) {
                        var a = {
                            key: "qd_disable_lsp_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdLspButtonClick: function(e) {
                        var a = {
                            key: "qd_lsp_button_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdEditorToolbarClick: function(e) {
                        var a = {
                            key: "qd_editor_toolbar_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdResetCodeConfirmClick: function(e) {
                        var a = {
                            key: "qd_reset_code_confirm_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdInsertFlagCodeClick: function(e) {
                        var a = {
                            key: "qd_insert_flag_code_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdConsoleExposure: function(e) {
                        var a = {
                            key: "qd_console_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSwitchTestcaseModeClick: function(e) {
                        var a = {
                            key: "qd_switch_testcase_mode_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSwitchTestResultModeClick: function(e) {
                        var a = {
                            key: "qd_switch_test_result_mode_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPopoverTestcaseModeClick: function(e) {
                        var a = {
                            key: "qd_popover_testcase_mode_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSwitchConsolePosClick: function(e) {
                        var a = {
                            key: "qd_switch_console_pos_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAddCaseTabClick: function(e) {
                        var a = {
                            key: "qd_add_case_tab_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdRemoveCaseTabClick: function(e) {
                        var a = {
                            key: "qd_remove_case_tab_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCreateCaseHintClick: function(e) {
                        var a = {
                            key: "qd_create_case_hint_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdVisualizationBtnExposure: function(e) {
                        var a = {
                            key: "qd_visualization_btn_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdVisualizerBtnClick: function(e) {
                        var a = {
                            key: "qd_visualizer_btn_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCheckAllTreeClick: function(e) {
                        var a = {
                            key: "qd_check_all_tree_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCaseTagClick: function(e) {
                        var a = {
                            key: "qd_case_tag_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCaseTagExposure: function(e) {
                        var a = {
                            key: "qd_case_tag_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdResultInfoClick: function(e) {
                        var a = {
                            key: "qd_result_info_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDiffBtnClick: function(e) {
                        var a = {
                            key: "qd_diff_btn_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdConsoleBtnClick: function(e) {
                        var a = {
                            key: "qd_console_btn_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdResetTestcasesClick: function(e) {
                        var a = {
                            key: "qd_reset_testcases_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSubmitCodeClick: function(e) {
                        var a = {
                            key: "qd_submit_code_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdRunCodeClick: function(e) {
                        var a = {
                            key: "qd_run_code_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQuickTestClick: function(e) {
                        var a = {
                            key: "qd_quick_test_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQuickDebugClick: function(e) {
                        var a = {
                            key: "qd_quick_debug_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdEnterDebugModeClick: function(e) {
                        var a = {
                            key: "qd_enter_debug_mode_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdStartDebugClick: function(e) {
                        var a = {
                            key: "qd_start_debug_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdStopDebugClick: function(e) {
                        var a = {
                            key: "qd_stop_debug_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdExitDebugClick: function(e) {
                        var a = {
                            key: "qd_exit_debug_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAddWatchExpClick: function(e) {
                        var a = {
                            key: "qd_add_watch_exp_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdRmWatchExpClick: function(e) {
                        var a = {
                            key: "qd_rm_watch_exp_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDebugControlsClick: function(e) {
                        var a = {
                            key: "qd_debug_controls_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSolutionSearchClick: function(e) {
                        var a = {
                            key: "qd_solution_search_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdResetSearchTagsClick: function(e) {
                        var a = {
                            key: "qd_reset_search_tags_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSortSolutionClick: function(e) {
                        var a = {
                            key: "qd_sort_solution_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSolutionItemExposure: function(e) {
                        var a = {
                            key: "qd_solution_item_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSolutionItemClick: function(e) {
                        var a = {
                            key: "qd_solution_item_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdEnterAuthorProfileClick: function(e) {
                        var a = {
                            key: "qd_enter_author_profile_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdLeavePostClick: function(e) {
                        var a = {
                            key: "qd_leave_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdEditPostClick: function(e) {
                        var a = {
                            key: "qd_edit_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdUpVotePostClick: function(e) {
                        var a = {
                            key: "qd_up_vote_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDownVotePostClick: function(e) {
                        var a = {
                            key: "qd_down_vote_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdFavoritePostClick: function(e) {
                        var a = {
                            key: "qd_favorite_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdViewPostCommentClick: function(e) {
                        var a = {
                            key: "qd_view_post_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSharePostClick: function(e) {
                        var a = {
                            key: "qd_share_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSubscribePostCnClick: function(e) {
                        var a = {
                            key: "qd_subscribe_post_cn_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSubscribePostClick: function(e) {
                        var a = {
                            key: "qd_subscribe_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPrevNextPostClick: function(e) {
                        var a = {
                            key: "qd_prev_next_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSolutionPaginationClick: function(e) {
                        var a = {
                            key: "qd_solution_pagination_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSolutionDetailExposure: function(e) {
                        var a = {
                            key: "qd_solution_detail_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSolutionSideSwitchClick: function(e) {
                        var a = {
                            key: "qd_solution_side_switch_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPublishPostClick: function(e) {
                        var a = {
                            key: "qd_publish_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCancelPostEditClick: function(e) {
                        var a = {
                            key: "qd_cancel_post_edit_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdUpdatePostClick: function(e) {
                        var a = {
                            key: "qd_update_post_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdMarkdownGuideClick: function(e) {
                        var a = {
                            key: "qd_markdown_guide_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdOverwriteWithLatestAcClick: function(e) {
                        var a = {
                            key: "qd_overwrite_with_latest_ac_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSortCommentClick: function(e) {
                        var a = {
                            key: "qd_sort_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPreviewCommentClick: function(e) {
                        var a = {
                            key: "qd_preview_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSubmitCommentClick: function(e) {
                        var a = {
                            key: "qd_submit_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdUpVoteCommentClick: function(e) {
                        var a = {
                            key: "qd_up_vote_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDownVoteCommentClick: function(e) {
                        var a = {
                            key: "qd_down_vote_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdShareCommentClick: function(e) {
                        var a = {
                            key: "qd_share_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdReplyCommentClick: function(e) {
                        var a = {
                            key: "qd_reply_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdExpandCommentClick: function(e) {
                        var a = {
                            key: "qd_expand_comment_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdShowRepliesClick: function(e) {
                        var a = {
                            key: "qd_show_replies_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdHideRepliesClick: function(e) {
                        var a = {
                            key: "qd_hide_replies_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdStatusFilterClick: function(e) {
                        var a = {
                            key: "qd_status_filter_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdLangFilterClick: function(e) {
                        var a = {
                            key: "qd_lang_filter_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSubmissionListClick: function(e) {
                        var a = {
                            key: "qd_submission_list_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAddNoteClick: function(e) {
                        var a = {
                            key: "qd_add_note_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSubmissionCloseClick: function() {
                        var e = {
                            key: "qd_submission_close_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdNextChallengeClick: function(e) {
                        var a = {
                            key: "qd_next_challenge_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdMoreChallengeClick: function(e) {
                        var a = {
                            key: "qd_more_challenge_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSubmissionViewDetailClick: function(e) {
                        var a = {
                            key: "qd_submission_view_detail_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPostSolutionClick: function(e) {
                        var a = {
                            key: "qd_post_solution_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPostSolutionExposure: function(e) {
                        var a = {
                            key: "qd_post_solution_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdDistributionExposure: function(e) {
                        var a = {
                            key: "qd_distribution_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdViewSampleCodeClick: function(e) {
                        var a = {
                            key: "qd_view_sample_code_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdSwitchSampleCodeClick: function(e) {
                        var a = {
                            key: "qd_switch_sample_code_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAcceptDetailsClick: function(e) {
                        var a = {
                            key: "qd_accept_details_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdComplexityPopupExposure: function(e) {
                        var a = {
                            key: "qd_complexity_popup_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdComplexityPopupVoteClick: function(e) {
                        var a = {
                            key: "qd_complexity_popup_vote_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdComplexityPopupNotAccuracyClick: function() {
                        var e = {
                            key: "qd_complexity_popup_not_accuracy_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdFeatureGuideExposure: function(e) {
                        var a = {
                            key: "qd_feature_guide_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdFinishDailyChallengeExposure: function(e) {
                        var a = {
                            key: "qd_finish_daily_challenge_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdMakeUpChallengeExposure: function(e) {
                        var a = {
                            key: "qd_make_up_challenge_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdIdeExpModalExposure: function() {
                        var e = {
                            key: "qd_ide_exp_modal_exposure",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdIdeExpModalCancelClick: function() {
                        var e = {
                            key: "qd_ide_exp_modal_cancel_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdIdeExpModalConfirmClick: function() {
                        var e = {
                            key: "qd_ide_exp_modal_confirm_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdNavbarOpenIdeClick: function() {
                        var e = {
                            key: "qd_navbar_open_ide_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdSettingBackQdClick: function() {
                        var e = {
                            key: "qd_setting_back_qd_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdDragChangeLayoutClick: function(e) {
                        var a = {
                            key: "qd_drag_change_layout_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAiToggleButtonClick: function(e) {
                        var a = {
                            key: "qd_ai_toggle_button_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAiCodeResponseExposure: function(e) {
                        var a = {
                            key: "qd_ai_code_response_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAiPremiumModalExposure: function(e) {
                        var a = {
                            key: "qd_ai_premium_modal_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAiPremiumSubscribeClick: function(e) {
                        var a = {
                            key: "qd_ai_premium_subscribe_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdAiHintSuccessExposure: function(e) {
                        var a = {
                            key: "qd_ai_hint_success_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPremiumCloudSavingRestoredClick: function(e) {
                        var a = {
                            key: "qd_premium_cloud_saving_restored_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPremiumUpgradeCloudSavingClick: function(e) {
                        var a = {
                            key: "qd_premium_upgrade_cloud_saving_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdPremiumCloudSavingToastClick: function(e) {
                        var a = {
                            key: "qd_premium_cloud_saving_toast_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdUpgradeToDynamicLayoutExposure: function() {
                        var e = {
                            key: "qd_qd_upgrade_to_dynamic_layout_exposure",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdQdUpgradeToDynamicLayoutTryClick: function() {
                        var e = {
                            key: "qd_qd_upgrade_to_dynamic_layout_try_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdQdLivePreviewExposure: function(e) {
                        var a = {
                            key: "qd_qd_live_preview_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdLivePreviewRefreshClick: function(e) {
                        var a = {
                            key: "qd_qd_live_preview_refresh_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdLivePreviewOpenNewTabClick: function(e) {
                        var a = {
                            key: "qd_qd_live_preview_open_new_tab_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdWebConsoleExposure: function(e) {
                        var a = {
                            key: "qd_qd_web_console_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdWebConsoleClearClick: function(e) {
                        var a = {
                            key: "qd_qd_web_console_clear_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdWebConsoleInputClick: function(e) {
                        var a = {
                            key: "qd_qd_web_console_input_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdFrameworkSwitcherExposure: function(e) {
                        var a = {
                            key: "qd_qd_framework_switcher_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdFrameworkSwitcherClickClick: function(e) {
                        var a = {
                            key: "qd_qd_framework_switcher_click_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdQdFrameworkSwitcherCloseClick: function(e) {
                        var a = {
                            key: "qd_qd_framework_switcher_close_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdNavbarLogoClick: function(e) {
                        var a = {
                            key: "qd_navbar_logo_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdNavbarOpenNewTabClick: function() {
                        var e = {
                            key: "qd_navbar_open_new_tab_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdNavbarTimerStartClick: function() {
                        var e = {
                            key: "qd_navbar_timer_start_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdNavbarTimerEndClick: function() {
                        var e = {
                            key: "qd_navbar_timer_end_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdNavbarUserDropdownClick: function() {
                        var e = {
                            key: "qd_navbar_user_dropdown_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdDetailCodeToEditorClick: function() {
                        var e = {
                            key: "qd_detail_code_to_editor_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdContestSwitchToClassicClick: function(e) {
                        var a = {
                            key: "qd_contest_switch_to_classic_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCollabJoinClick: function(e) {
                        var a = {
                            key: "qd_collab_join_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCollabFollowClick: function() {
                        var e = {
                            key: "qd_collab_follow_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdCollabLeaveClick: function(e) {
                        var a = {
                            key: "qd_collab_leave_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCollabSwitchQuestionClick: function() {
                        var e = {
                            key: "qd_collab_switch_question_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdCollabSwitchLangClick: function() {
                        var e = {
                            key: "qd_collab_switch_lang_click",
                            data: {}
                        };
                        i.V[c.X.GIO](e), i.V[c.X.GA4](e), i.V[c.X.CONSOLE](e), i.V[c.X.SELF_DB](e)
                    },
                    qdCollabJoinFailExposure: function(e) {
                        var a = {
                            key: "qd_collab_join_fail_exposure",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCollabSubmitClick: function(e) {
                        var a = {
                            key: "qd_collab_submit_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    },
                    qdCancelTestcaseCacheClick: function(e) {
                        var a = {
                            key: "qd_cancel_testcase_cache_click",
                            data: e
                        };
                        i.V[c.X.GIO](a), i.V[c.X.GA4](a), i.V[c.X.CONSOLE](a), i.V[c.X.SELF_DB](a)
                    }
                }
        }
    }
]);