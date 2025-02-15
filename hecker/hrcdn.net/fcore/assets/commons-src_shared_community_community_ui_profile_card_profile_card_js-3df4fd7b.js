"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["commons-src_shared_community_community_ui_profile_card_profile_card_js"], {
        qk2D: (e, t, r) => {
            r.d(t, {
                ZP: () => m
            });
            var a = r("+9dH"),
                i = r("DTvD"),
                s = r.n(i),
                o = r("0ier"),
                l = r("ANjH"),
                n = r("TSYQ"),
                c = r.n(n),
                p = r("rpVu"),
                d = r("n0yU"),
                u = e => {
                    var {
                        countryCode: t,
                        ENV: r,
                        appUtil: a
                    } = e;
                    return r && "development" !== r ? a.staticPath("flags/".concat(t || "_unknown", ".png")) : "https://hrcdn.net/hackerrank/static/flags/".concat(t || "_unknown", ".png")
                };
            const m = (0, l.qC)(p.Z, (0, o.$j)(((e, t) => {
                var {
                    metadata: {
                        ENV: r
                    }
                } = e, a = (0, d.D)(e), {
                    code: i
                } = (null == a ? void 0 : a.find((e => e.value === t.country))) || {};
                return {
                    ENV: r,
                    countryCode: i
                }
            })))((e => {
                var {
                    country: t,
                    className: r,
                    disableTooltip: i,
                    tooltipPos: o,
                    tooltipText: l,
                    countryCode: n,
                    ENV: p,
                    appUtil: d
                } = e, m = i ? {} : {
                    "data-balloon": l || t,
                    "data-balloon-pos": o || "up"
                };
                return s().createElement("span", (0, a.Z)({}, m, {
                    className: "flag-tooltip"
                }), s().createElement("img", {
                    className: c()(r),
                    src: u({
                        countryCode: n,
                        ENV: p,
                        appUtil: d
                    }),
                    alt: "flag of ".concat(t)
                }))
            }))
        },
        IqDh: (e, t, r) => {
            r.d(t, {
                Z: () => O
            }), r("ioFf");
            var a = r("+9dH"),
                i = r("PRvr"),
                s = r("L5+t"),
                o = r("DTvD"),
                l = r.n(o),
                n = r("17x9"),
                c = r.n(n),
                p = r("0ier"),
                d = r("ANjH"),
                u = r("66t9"),
                m = r("6GtL"),
                h = r("rpVu"),
                f = r("5F93"),
                g = r("cUsN"),
                v = r("CXtD"),
                b = r("+XdK"),
                E = r("Hk+n"),
                y = r("d/vW"),
                Z = r("G/mP"),
                N = r("qk2D"),
                P = ["children", "user", "userProfile", "metadata", "dispatch", "appUtil", "profileActions", "isFetchRequired", "analyticsAttributes"];

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            class k extends o.Component {
                constructor() {
                    super(...arguments), (0, s.Z)(this, "handlePopupOpen", (() => {
                        var {
                            profileActions: e,
                            user: {
                                username: t
                            },
                            isFetchRequired: r,
                            analyticsAttributes: a
                        } = this.props;
                        r && e.loadProfile({
                            username: t
                        }, !1).then((() => {
                            e.fetchScores({
                                username: t
                            }, !1)
                        })), m.Z.track("Hover", "ProfileCard", a)
                    })), (0, s.Z)(this, "renderItem", (e => void 0 !== e ? e : l().createElement(Z.Z, {
                        height: "18px"
                    }))), (0, s.Z)(this, "renderAvatar", (() => {
                        var {
                            userProfile: {
                                name: e,
                                avatar: t
                            }
                        } = this.props;
                        return l().createElement("div", {
                            className: "mlT profile-card-avatar d-block"
                        }, t && e ? l().createElement(v.Z, {
                            name: e,
                            size: 100,
                            avatar: t
                        }) : l().createElement(Z.Z, {
                            width: "100px",
                            height: "100px",
                            shape: "circle"
                        }))
                    })), (0, s.Z)(this, "renderAvatarWithFlag", (() => {
                        var {
                            userProfile: {
                                username: e,
                                country: t
                            }
                        } = this.props;
                        return l().createElement("div", {
                            className: "card-half"
                        }, l().createElement(u.Link, {
                            to: "/profile/".concat(e),
                            target: "_blank"
                        }, this.renderAvatar(), l().createElement(N.ZP, {
                            country: t
                        })))
                    })), (0, s.Z)(this, "renderDetails", (() => {
                        var {
                            userProfile: {
                                name: e,
                                school: t,
                                company: r,
                                username: a,
                                country: i
                            }
                        } = this.props;
                        return l().createElement("div", {
                            className: "card-half msR"
                        }, l().createElement("h1", {
                            className: "profile-card-name"
                        }, l().createElement(u.Link, {
                            to: "/profile/".concat(a),
                            target: "_blank",
                            className: "profile-link"
                        }, this.renderItem(e) || a)), l().createElement("ul", {
                            className: "list-none"
                        }, l().createElement("li", {
                            className: "d-flex profile-card-school"
                        }, !!t && l().createElement("i", {
                            className: "ui-icon-graduation card-details-icon"
                        }), " ", this.renderItem(t)), l().createElement("li", {
                            className: "d-flex profile-card-company"
                        }, !!r && l().createElement("i", {
                            className: "ui-icon-employment card-details-icon"
                        }), " ", this.renderItem(r)), !t && !r && l().createElement("li", {
                            className: "d-flex profile-card-country"
                        }, !!i && l().createElement("i", {
                            className: "ui-icon-location card-details-icon"
                        }), " ", this.renderItem(i))))
                    })), (0, s.Z)(this, "renderFollow", (() => {
                        var {
                            userProfile: {
                                followers_count: e
                            },
                            userProfile: t,
                            analyticsAttributes: r
                        } = this.props, a = e ? "".concat(e, " Followers") : "Be first to follow";
                        return l().createElement("div", {
                            className: "card-half"
                        }, t ? l().createElement(E.Z, {
                            className: "follow-btn",
                            user: t,
                            "data-analytics": "hrFollowButton",
                            "data-attr1": r.attribute1
                        }) : l().createElement(Z.Z, {
                            height: "40px"
                        }), l().createElement("p", {
                            className: "profile-card-followers"
                        }, void 0 !== e ? a : l().createElement(Z.Z, {
                            height: "18px"
                        })))
                    })), (0, s.Z)(this, "renderMedals", (() => {
                        var {
                            userProfile: {
                                scores: e
                            }
                        } = this.props;
                        return l().createElement("div", {
                            className: "card-half msR"
                        }, e ? l().createElement(y.Z, {
                            scores: e
                        }) : l().createElement(Z.Z, {
                            height: "31px"
                        }))
                    })), (0, s.Z)(this, "renderProfileContent", (() => l().createElement("div", {
                        className: "theme-m profile-card-container"
                    }, l().createElement("div", {
                        className: "d-flex"
                    }, this.renderAvatarWithFlag(), this.renderDetails()), l().createElement("div", {
                        className: "d-flex align-items-center"
                    }, this.renderFollow(), this.renderMedals()))))
                }
                render() {
                    var e = this.props,
                        {
                            children: t,
                            user: r,
                            userProfile: s,
                            metadata: o,
                            dispatch: n,
                            appUtil: c,
                            profileActions: p,
                            isFetchRequired: d,
                            analyticsAttributes: u
                        } = e,
                        m = (0, i.Z)(e, P);
                    return (0, f.NB)(s) ? t : l().createElement(b.ZP, (0, a.Z)({
                        content: this.renderProfileContent,
                        variant: "light",
                        onTooltipOpen: this.handlePopupOpen,
                        delay: 800,
                        align: "top-left"
                    }, m), t)
                }
            }(0, s.Z)(k, "propTypes", {
                profileActions: c().object.isRequired,
                user: c().object.isRequired,
                appUtil: c().object.isRequired,
                userProfile: c().object.isRequired,
                isFetchRequired: c().bool.isRequired,
                analyticsAttributes: c().shape({
                    attribute1: c().string.isRequired,
                    attribute2: c().string.isRequired,
                    attribute3: c().string,
                    attribute4: c().string
                }).isRequired
            }), k = (0, p.$j)(((e, t) => {
                var {
                    viewProfiles: r
                } = e.community, {
                    user: {
                        username: a
                    },
                    user: i
                } = t, s = (0, f.YM)(r, a), o = void 0 === s;
                return {
                    userProfile: j(j({}, i), s),
                    isFetchRequired: o
                }
            }), (e => ({
                profileActions: (0, d.DE)(g.Z, e)
            })))(k);
            const O = k = (0, h.Z)(k)
        },
        "Hk+n": (e, t, r) => {
            r.d(t, {
                Z: () => b
            });
            var a = r("+9dH"),
                i = r("PRvr"),
                s = r("L5+t"),
                o = r("DTvD"),
                l = r.n(o),
                n = r("17x9"),
                c = r.n(n),
                p = r("0ier"),
                d = r("ANjH"),
                u = r("CmRW"),
                m = r("cUsN"),
                h = r("KMmN"),
                f = r("rpVu"),
                g = ["className", "user", "metadata", "dispatch", "appUtil", "abTest", "profileActions", "profile"];
            class v extends o.Component {
                constructor() {
                    super(), (0, s.Z)(this, "state", void 0), (0, s.Z)(this, "toggleFollow", (() => {
                        var {
                            profile: e,
                            user: t,
                            profileActions: r,
                            appUtil: {
                                isAuthRequired: a
                            }
                        } = this.props;
                        e.username ? (this.setState({
                            toggleFollowOngoing: !0
                        }), r.toggleFollow({
                            username: e.username,
                            followable_id: t.id,
                            followable_username: t.username
                        }).then((() => {
                            this.setState({
                                toggleFollowOngoing: !1
                            })
                        }))) : a({
                            type: "info",
                            data: "Please signup or login to perform this action."
                        })
                    })), this.state = {
                        toggleFollowOngoing: !1
                    }
                }
                render() {
                    var e = this.props,
                        {
                            className: t,
                            user: r,
                            metadata: s,
                            dispatch: o,
                            appUtil: n,
                            abTest: c,
                            profileActions: p,
                            profile: d
                        } = e,
                        m = (0, i.Z)(e, g),
                        {
                            is_following: h
                        } = r,
                        {
                            toggleFollowOngoing: f
                        } = this.state,
                        v = h ? "Unfollow" : "Follow";
                    return l().createElement(u.KM, (0, a.Z)({
                        disabled: !!f,
                        loading: f,
                        onClick: this.toggleFollow,
                        className: t,
                        "data-attr2": v
                    }, m), v)
                }
            }(0, s.Z)(v, "propTypes", {
                profileActions: c().object.isRequired,
                profile: c().object.isRequired,
                user: c().object.isRequired,
                abTest: c().object.isRequired,
                appUtil: c().object.isRequired
            }), v = (0, p.$j)((e => {
                var {
                    profile: t
                } = e.community;
                return {
                    profile: t
                }
            }), (e => ({
                profileActions: (0, d.DE)(m.Z, e)
            })))(v), v = (0, h.ZP)(v);
            const b = v = (0, f.Z)(v)
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons-src_shared_community_community_ui_profile_card_profile_card_js-3df4fd7b.js.map