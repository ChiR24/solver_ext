"use strict";
(self.webpackChunkhackerrank_lib = self.webpackChunkhackerrank_lib || []).push([
    ["commons-src_shared_community_challenge_bookmark_bookmark_icon_js-src_shared_community_challen-fb3918"], {
        dWRL: (e, t, a) => {
            a.d(t, {
                ZP: () => b
            }), a("ioFf");
            var r = a("L5+t"),
                n = a("DTvD"),
                o = a.n(n),
                s = a("17x9"),
                i = a.n(s),
                c = a("6GtL"),
                l = a("cTaQ"),
                u = a("0ier"),
                d = a("ANjH"),
                p = a("+Ebv");

            function m(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            class g extends n.Component {
                constructor() {
                    super(...arguments), (0, r.Z)(this, "toggleBookmark", ((e, t) => {
                        t.preventDefault();
                        var {
                            challenge: a,
                            challengeActions: r
                        } = this.props, {
                            slug: n,
                            contest_slug: o
                        } = a, s = {
                            challenge_id: a.id,
                            attribute1: o,
                            attribute2: n,
                            attribute3: e ? "bookmarked" : "unbookmarked",
                            attribute4: "challengeListPage"
                        };
                        return c.Z.track("Click", "BookmarkChallenge", s), new Promise(((t, a) => {
                            r.updateChallenge({
                                challengeSlug: n,
                                contestSlug: o,
                                changes: {
                                    bookmarked: e
                                }
                            }).then((() => {
                                t()
                            })).catch((() => {
                                a()
                            }))
                        }))
                    }))
                }
                render() {
                    var {
                        challenge: e,
                        profile: t,
                        className: a
                    } = this.props;
                    return e && "master" === e.contest_slug && t.username ? o().createElement(l.Z, {
                        initialValue: e.bookmarked,
                        className: a,
                        label: e => e ? "Remove from favourites" : "Add to favourites",
                        onClick: this.toggleBookmark
                    }) : null
                }
            }(0, r.Z)(g, "propTypes", {
                challenge: i().object.isRequired,
                className: i().string
            }), (0, r.Z)(g, "defaultProps", {
                className: ""
            });
            const b = g = (0, u.$j)(((e, t) => {
                var {
                    profile: a
                } = e.community;
                return h(h({}, t), {}, {
                    profile: a
                })
            }), (e => ({
                challengeActions: (0, d.DE)(p.Z, e)
            })))(g)
        },
        "1Tel": (e, t, a) => {
            a.d(t, {
                Z: () => d
            });
            var r = a("L5+t"),
                n = a("DTvD"),
                o = a.n(n),
                s = a("17x9"),
                i = a.n(s),
                c = a("5F93"),
                l = a("aK2r");
            class u extends o().PureComponent {
                constructor(e) {
                    super(), (0, r.Z)(this, "state", void 0), this.state = {
                        openVideoModal: e.autoOpen
                    }
                }
                render() {
                    var {
                        title: e,
                        analyticsKey: t,
                        duration: a,
                        youtubeId: r,
                        contestSlug: n,
                        challengeSlug: s
                    } = this.props, {
                        openVideoModal: i
                    } = this.state;
                    return o().createElement("div", {
                        className: "video-modal-wrapper"
                    }, o().createElement("img", {
                        className: "youtube-video-image",
                        alt: "YouTube connection issue.",
                        src: "https://img.youtube.com/vi/".concat(r, "/mqdefault.jpg")
                    }), o().createElement("a", {
                        className: "video-modal-link-overlay cursor",
                        "data-slug": r,
                        "data-analytics": t,
                        "data-attr1": s,
                        "data-attr2": n,
                        "data-attr3": r,
                        "data-attr4": e,
                        onClick: () => this.setState({
                            openVideoModal: !0
                        })
                    }, o().createElement("div", {
                        className: "challenge-video-duration"
                    }, (0, c.Nd)(a)), o().createElement("i", {
                        className: "ui-challenge-video-icon ui-icon-play-circle"
                    })), i && o().createElement(l.Z, {
                        open: !0,
                        onClose: () => this.setState({
                            openVideoModal: !1
                        }),
                        youtubeId: r,
                        title: e
                    }))
                }
            }(0, r.Z)(u, "propTypes", {
                title: i().string.isRequired,
                analyticsKey: i().string,
                duration: i().oneOfType([i().number, i().string]).isRequired,
                youtubeId: i().string.isRequired,
                contestSlug: i().string,
                challengeSlug: i().string,
                autoOpen: i().bool
            }), (0, r.Z)(u, "defaultProps", {
                analyticsKey: "ChallengeSidebarRelatedVideo",
                autoOpen: !1
            });
            const d = u
        },
        OYaA: (e, t, a) => {
            a.d(t, {
                Z: () => f
            });
            var r = a("L5+t"),
                n = a("DTvD"),
                o = a.n(n),
                s = a("17x9"),
                i = a.n(s),
                c = a("pAcs"),
                l = a("0ier"),
                u = a("ANjH"),
                d = a("TSYQ"),
                p = a.n(d),
                m = a("kU9v"),
                h = a("A9aW"),
                g = a("oFIE"),
                b = a("u6Nk");
            class k extends o().Component {
                constructor(e) {
                    super(e), (0, r.Z)(this, "state", void 0), (0, r.Z)(this, "submitTimeout", void 0), (0, r.Z)(this, "toggleFeedback", (e => {
                        this.setState({
                            feedbackOpen: !this.state.feedbackOpen,
                            target: e.currentTarget
                        })
                    })), (0, r.Z)(this, "onClose", (() => {
                        this.setState({
                            feedbackOpen: !1
                        })
                    })), (0, r.Z)(this, "onSeen", (e => (0, m.ajaxPutWithToken)({
                        url: (0, b.getApiUrl)("seenFeedback", {
                            apiPrefix: "".concat(this.props.apiPrefix),
                            id: "".concat(e)
                        }),
                        loadingMessage: !1
                    }))), (0, r.Z)(this, "onSubmit", (e => {
                        this.submitTimeout = setTimeout((() => {
                            this.setState({
                                feedbackOpen: !1
                            }), this.props.featureFeedbackActions.disable(e)
                        }), 3e3)
                    })), (0, r.Z)(this, "renderFeatureFeedback", (() => {
                        var {
                            featureId: e,
                            apiPrefix: t,
                            title: a,
                            description: r,
                            feature: n,
                            popoverClassName: s,
                            align: i,
                            coordinate: l,
                            theme: u
                        } = this.props, {
                            target: d
                        } = this.state;
                        if (n) {
                            var p = a || n.heading || "Love our new upgrade?",
                                m = r || n.description || "Let us know what you feel about it.";
                            return o().createElement(c.ZP, {
                                className: s,
                                target: d,
                                align: i,
                                open: !0,
                                coordinate: l,
                                onClose: this.onClose,
                                showTip: !0
                            }, o().createElement(h.Z, {
                                featureId: e,
                                title: p,
                                desc: m,
                                theme: u,
                                onSeen: this.onSeen,
                                onClose: this.onClose,
                                onSubmit: this.onSubmit,
                                isStandalone: !0,
                                postUrl: (0, b.getApiUrl)("updateFeedback", {
                                    apiPrefix: t,
                                    id: e
                                })
                            }))
                        }
                    })), this.state = {
                        feedbackOpen: !1,
                        target: void 0
                    }
                }
                componentWillUnmount() {
                    clearTimeout(this.submitTimeout)
                }
                render() {
                    var {
                        children: e,
                        className: t
                    } = this.props;
                    return o().createElement(n.Fragment, null, !!this.renderFeatureFeedback() && o().createElement("span", {
                        "data-balloon": "Share your feedback with us",
                        "data-balloon-pos": "left",
                        className: p()("feature-feedback cursor-pointer", t),
                        onClick: this.toggleFeedback
                    }, e || o().createElement("i", {
                        className: "ui-icon-thumbs-up-light"
                    })), this.state.feedbackOpen && this.renderFeatureFeedback())
                }
            }(0, r.Z)(k, "propTypes", {
                featureId: i().number.isRequired,
                title: i().string,
                description: i().string,
                className: i().string,
                popoverClassName: i().string,
                align: i().string,
                coordinate: i().object,
                theme: i().string
            });
            const f = (0, l.$j)(((e, t) => {
                var {
                    featureId: a
                } = t, r = "hackerrank" === e.metadata.productNamespace ? "rest" : "x/api/v1";
                return {
                    feature: e.featureFeedback.featureLists[a],
                    apiPrefix: r
                }
            }), (e => ({
                featureFeedbackActions: (0, u.DE)(g.Z, e)
            })))(k)
        },
        oFIE: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var r = a("kU9v"),
                n = a("X8iS"),
                o = a("u6Nk");
            const s = {
                incrementSeenCount: function(e, t) {
                    return () => (0, r.ajaxPutWithToken)({
                        url: (0, o.getApiUrl)("seenFeedback", {
                            apiPrefix: "".concat(t),
                            id: "".concat(e)
                        }),
                        loadingMessage: !1
                    })
                },
                disable: function(e) {
                    return {
                        type: n.Z.FEATURE_FEEDBACK.DISABLE,
                        data: {
                            featureId: e
                        }
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=https://hrcdn.net/fcore/assets/sourcemaps/commons-src_shared_community_challenge_bookmark_bookmark_icon_js-src_shared_community_challen-fb3918-ba1edb62.js.map